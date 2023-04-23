import React, { useState, useEffect, useContext } from "react";
import { AppContext } from '../components/render';
import { ethers } from 'ethers';

export default function Mint() {
    
    const { navbarRenderCount } = useContext(AppContext)
    const { mintPageRenderCount, setMintPageRenderCount } = useContext(AppContext)

    const [ number, setNumber ] = useState(3);
    const [ provider, setProvider ] = useState(null);
    const [ address, setAddress ] = useState(null);
    const [ balance, setBalance ] = useState(null);
    const [ signer, setSigner ] = useState(null);
    const [ status, setStatus ] = useState('CONNECT');

    function increase() { number < 3 ? setNumber(number + 1) : setNumber(number) }
    function decrease() { number > 1 ? setNumber(number - 1) : setNumber(number) }

    useEffect(() => { fetchWallet(), navbarRenderCount }, [navbarRenderCount]);

    async function fetchWallet() {
        if (window.ethereum) {
            try{
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const address = await signer.getAddress();
                const balance = ethers.utils.formatEther(await provider.getBalance(address));
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

    return (

        <div className="page_content">

            <div className="mint_page_content">

                <h1>MINT PAGE</h1>
                <p>THIS IS THE MINT PAGE</p>
        
                <div>
        
                    <button className="mint_button" onClick={connectWallet}>MINT</button>

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