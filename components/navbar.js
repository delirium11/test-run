import Link from 'next/link';
import { ethers } from 'ethers';
import Web3 from "web3";

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faMedium, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faSailboat } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {

    const [ provider, setProvider ] = useState(null);
    const [ address, setAddress ] = useState(null);
    const [ balance, setBalance ] = useState(null);
    const [ signer, setSigner ] = useState(null);
    const [ status, setStatus ] = useState('CONNECT');

    const [ walletAddress, setWalletAddress ] = useState("");

            
    useEffect(() => {
        async function connectToWeb3() {
            if (window.ethereum) {
                try {
                    const accounts = await window.ethereum.request({
                        method: 'eth_accounts',
                    });
                    if (accounts.length > 0) {
                        setWalletAddress(accounts[0]);
                    }
                    window.ethereum.on('accountsChanged', (newAccounts) => {
                        setWalletAddress(newAccounts[0]);
                    });
                    const web3 = new Web3(window.ethereum);
                } catch (error) {
                console.error(error);
                }
            } else {
                console.error('Web3 not found');
            }
        }
        connectToWeb3();
    }, []);
    
    async function connectWallet() {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const web3 = new Web3(window.ethereum);
        } catch (error) {
            console.error(error);
        }
    }

    return (

        <div className="the_navbar">

            <div className="logo_mobile_container">

                <Link href="/"><img className='logo_mobile' 
                    src="/images/logo_long.png" alt="logo_long"/></Link>

            </div>

            <div className="navbar">

                <div>

                    <Link href="/"><img className="logo_desktop" 
                        src="/images/logo_long.png" alt="logo_long"/></Link>

                </div>

                <div className="navbar_content">

                    <button><Link href="/checker">CHECKER</Link></button>

                    <button><Link href="/mint">MINT</Link></button>

                    <button><a 
                        target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter}/></a></button>

                    <button><a 
                        target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faMedium}/></a></button>
                        
                    <button><a 
                        target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSailboat}/></a></button>

                    <div className="connect-button-position" onClick={connectWallet}>
                    {(walletAddress && walletAddress.length > 0) ? <button className="connect-button">
                    {walletAddress.substring(0, 2)}...{walletAddress.substring(38)}</button> : 
                    <button className="connect-button">Connect</button>}
                </div>
                    
                </div>

            </div>

        </div>

    )

}