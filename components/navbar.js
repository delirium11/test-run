import Link from 'next/link';
import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faMedium } from "@fortawesome/free-brands-svg-icons";
import { faSailboat } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {

    const [ provider, setProvider ] = useState(null);
    const [ signer, setSigner ] = useState(null);
    const [ address, setAddress ] = useState(null);
    const [ balance, setBalance ] = useState(null);
    
    async function connectWallet() {
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                setProvider(provider);
                const signer = provider.getSigner();
                setSigner(signer);
                const address = await signer.getAddress();
                setAddress(address);
                const balance = await provider.getBalance(address);
                setBalance(balance);
                console.log('Address:', address);
            } catch (err) {
                console.error('FAILED TO CONNECT:', err);
            }
        } else {
            alert('METAMASK NOT DETECTED')
        }
    }

    return (

        <div className="the_navbar">

            <div>

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
                        target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faTwitter}/></a></button>

                    <button><a 
                        target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faMedium}/></a></button>

                    <button><a 
                        target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faSailboat}/></a></button>

                    <button onClick={connectWallet}><a>CONNECT</a></button>

                </div>

            </div>

        </div>

    )

}