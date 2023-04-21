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
          
    async function fetch() {
        if (window.ethereum && window.ethereum.selectedAddress) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            const balance = await provider.getBalance(address);
            setProvider(provider);
            setSigner(signer);
            setAddress(address);
            setBalance(balance);
            setStatus(address.substring(0, 2) + '...' + address.substring(38));
            console.log('PROVIDER:', provider);
            console.log('SIGNER:', signer);
            console.log('ADDRESS:', address);
            console.log('BALANCE:', balance);
            (address != null) ? setAddress(address) : null;
            window.ethereum.on('accountsChanged', (accounts) => {
                setAddress(address);
            });                
        }
    }

    useEffect(() => { fetch() }, []);
    
    async function connectWallet() {
        if (window.ethereum) {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            fetch();
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