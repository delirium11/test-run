import Link from 'next/link';
import { ethers } from 'ethers';
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
    
    async function fetchWallet() {
        if (window.ethereum && window.ethereum.selectedAddress) {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            const balance = await provider.getBalance(address);
            window.ethereum.on('accountsChanged', (accounts) => {
                (accounts.length === 0) ? setStatus('CONNECT') : 
                (fetchWallet(), setStatus(address.substring(38)));
            });
            return { provider, signer, address, balance };
        }
    }

    useEffect(() => { 
        fetchWallet();
        (async () => {
            const data = await fetchWallet();
            if (data) {
                setProvider(data.provider);
                setSigner(data.signer);
                setAddress(data.address);
                setBalance(data.balance);
                setStatus(data.address.substring(38));
                console.log('PROVIDER:', data.provider);
                console.log('SIGNER:', data.signer);
                console.log('ADDRESS:', data.address);
                console.log('BALANCE:', data.balance);
            }
        })();
    }, []);
    
    async function connectWallet() {
        if (window.ethereum) {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            fetchWallet();
        } else {
            alert('METAMASK NOT DETECTED')
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

                    <button onClick={connectWallet}><a>{status}</a></button>
                    
                </div>

            </div>

        </div>

    )

}