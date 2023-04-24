import Link from 'next/link';
import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faMedium } from "@fortawesome/free-brands-svg-icons";
import { faSailboat } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from './render';
import { ethers } from 'ethers';

export default function Navbar() {

    const { navbarRenderCount } = useContext(AppContext)
    const { mintPageRenderCount, setNavbarRenderCount } = useContext(AppContext)

    const [ status, setStatus ] = useState('CONNECT');

    useEffect(() => { fetchWallet(), mintPageRenderCount }, [mintPageRenderCount]);

    async function fetchWallet() {
        if (window.ethereum) {
            try{
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const address = await signer.getAddress();
                const balance = ethers.utils.formatEther(await provider.getBalance(address));
                setStatus('0x' + address.substring(38).toUpperCase());
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
            setNavbarRenderCount(navbarRenderCount + 1)
        } else {
            alert('METAMASK NOT DETECTED')
        }
    }
    
    return (

        <div className="scale_navbar">

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

                    <button onClick={connectWallet}><a>{status}</a></button>
                    
                </div>

            </div>

        </div>

    )

}


/* 

*/