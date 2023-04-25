import React, { useState, useEffect, useContext } from "react";
import { AppContext } from '../components/renderCounter';
import { fetchWallet } from '../components/walletFetcher';
import { file, mint, increase, decrease } from "@/components/whitelistFetcher";

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
    const [ response, setResponse ] = useState('');
    const [ alert, setAlert ] = useState('');

    useEffect(() => { 
        file(setTree, setList);
        fetchWallet(setProvider, setSigner, setAddress, setBalance, setStatus);
    }, [navbarRenderCount]);

    async function connectWallet() {
        if (window.ethereum) {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            fetchWallet(setProvider, setSigner, setAddress, setBalance, setStatus);
            setMintPageRenderCount(mintPageRenderCount + 1);
        } else {
            alert('METAMASK NOT DETECTED')
        }
    }

    async function mintButton() {
        if( provider == null ) {
            connectWallet();
        } else {
            mint(newList, tree, address, setResponse, setAlert, balance, number, signer );
        }
    }

    return (

        <div className="page_content">

            <div className="mint_page_content">

                <h1>MINT PAGE</h1>

                <p>THIS IS THE MINT PAGE</p>
        
                <div>
        
                    <button className="mint_button" onClick={mintButton}>MINT</button>

                </div>

                <div>
        
                    <button className="minus_button" onClick={() => 
                        decrease(number, setNumber)}>-</button>

                    <p className="counter">{number}</p>
                    
                    <button className="plus_button" onClick={() => 
                        increase(number, setNumber)}>+</button>

                </div>

                <div>

                    <p>{response}</p>
                    <p>{alert}</p>

                </div>
            
            </div>

        </div>

    )
    
}