import React, { useState, useEffect, useContext } from "react";
import { ethers } from 'ethers';
import { create } from "ipfs-http-client";
import MerkleTree from "merkletreejs";
import keccak256 from "keccak256";
import { AppContext } from '../components/render';
import contractabi from '../contractabi';

export default function Mint() {
    
    const { navbarRenderCount } = useContext(AppContext)
    const { mintPageRenderCount, setMintPageRenderCount } = useContext(AppContext)

    const [ number, setNumber ] = useState(3);
    const [ provider, setProvider ] = useState(null);
    const [ address, setAddress ] = useState(null);
    const [ balance, setBalance ] = useState(null);
    const [ signer, setSigner ] = useState(null);
    const [ status, setStatus ] = useState('CONNECT');
    const [ newList, setList ] = useState([]);
    const [ tree, setTree] = useState(null);

    const contractAddress = '0x44d3984F0596e1c1a7d0E0b28732d5082b0F5e7a';
    const contractABI  = contractabi;

    const bufToHex = x => "0x" + x.toString("hex");
    const ipfs = create('https://ipfs.io/');
    const storage = 'QmfAkb4ksqYi4dmX8sUwaZ1BP6qdcbZ2JWMoW77nx9BAKD';

    function increase() { number < 3 ? setNumber(number + 1) : setNumber(number) }
    function decrease() { number > 1 ? setNumber(number - 1) : setNumber(number) }

    useEffect(() => {
        async function file(storage) {
            const chunks = [];
            for await (const chunk of ipfs.cat(storage)) {chunks.push(chunk)}
            const temp = Buffer.concat(chunks).toString().toLowerCase().split(',').map(item => 
                item.substring(2)).map((item, index) => index ? item : `0x${item}`);
            setTree(new MerkleTree(temp.map((x) => 
                keccak256(x)), keccak256, { sortPairs: true }));
            setList(temp);
        }
        file(storage);
    }, []);

    useEffect(() => { fetchWallet(), navbarRenderCount }, [navbarRenderCount]);

    async function fetchWallet() {
        if (window.ethereum) {
            try{
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const address = await signer.getAddress();
                const balance = await provider.getBalance(address);
                setProvider(provider);
                setSigner(signer);
                setAddress(address);
                setBalance(balance);
                setStatus('0x' + address.substring(38).toUpperCase());
                console.log('PROVIDER:', provider);
                console.log('SIGNER:', signer);
                console.log('ADDRESS:', address);
                console.log('BALANCE:', balance);
                window.ethereum.on('accountsChanged', (accounts) => {
                    (accounts.length === 0) ? setStatus('CONNECT') : (fetchWallet());
                });
            } catch (error) {
                console.log('CONNECT WITH METAMASK');
            }
        }
    }

    async function connectWallet() {
        if (window.ethereum) {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            fetchWallet();
            setMintPageRenderCount(mintPageRenderCount + 1);
        } else {
            alert('METAMASK NOT DETECTED')
        }
    }

    async function mint() {
        if( provider === null ) {
            connectWallet();
        } else {
            if (newList.includes(address.toLowerCase())) {
                try {
                    const proof = tree.getProof(keccak256(address)).map((x) => bufToHex(x.data));
                    const cost = ethers.utils.parseEther(( number * 0.003).toString());
                    const contract = new ethers.Contract(contractAddress, contractABI, signer);
                    const callFunction = await contract.whitelistMint(number, proof, { value: cost });
                    await callFunction.wait();
                } catch (error) {
                    console.log('USER REJECTED THE TRANSACTION')
                }
            } else {
                console.log('THIS ADDRESS IS NOT WHITELISTED')
            }
        }
    }

    return (

        <div className="page_content">

            <div className="mint_page_content">

                <h1>MINT PAGE</h1>
                <p>THIS IS THE MINT PAGE</p>
        
                <div>
        
                    <button className="mint_button" onClick={mint}>MINT</button>

                </div>

                <div>
        
                    <button className="minus_button" onClick={decrease}>-</button>
                    <p className="counter">{number}</p>
                    <button className="plus_button" onClick={increase}>+</button>

                </div>
            
            </div>

        </div>

    )
    
}