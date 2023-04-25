import Link from 'next/link';
import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faMedium } from "@fortawesome/free-brands-svg-icons";
import { faSailboat } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from './renderCounter';
import { fetchWallet } from './walletFetcher';

export default function Navbar() {

    const { mintPageRenderCount } = useContext(AppContext)
    const { navbarRenderCount, setNavbarRenderCount } = useContext(AppContext)

    const [ provider, setProvider ] = useState(null);
    const [ address, setAddress ] = useState(null);
    const [ balance, setBalance ] = useState(null);
    const [ signer, setSigner ] = useState(null);
    const [ status, setStatus ] = useState('CONNECT');

    useEffect(() => { 
        fetchWallet(setProvider, setSigner, setAddress, setBalance, setStatus);
    }, [mintPageRenderCount]);

    async function connectWallet() {
        if (window.ethereum) {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            fetchWallet(setProvider, setSigner, setAddress, setBalance, setStatus);
            setNavbarRenderCount(navbarRenderCount + 1);
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