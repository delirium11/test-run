import Link from 'next/link';
import React, { useState, useEffect, useContext } from "react";
import { fetchWallet, connectWallet } from '../components/walletFetcher';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faMedium } from "@fortawesome/free-brands-svg-icons";
import { faSailboat, faListDots } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from '../components/renderCounter';
import styles from "../styles/navbar.module.css";

export default function Navbar() {

    const { renderCount, setRenderCount } = useContext(AppContext);

    const [ provider, setProvider ] = useState(null);
    const [ address, setAddress ] = useState(null);
    const [ balance, setBalance ] = useState(null);
    const [ signer, setSigner ] = useState(null);
    const [ status, setStatus ] = useState('CONNECT');

    useEffect(() => { 
        fetchWallet(setProvider, setSigner, setAddress, setBalance, setStatus);
    }, [renderCount]);

    async function useConnectWallet() {
        connectWallet(fetchWallet, setProvider, setSigner, 
            setAddress, setBalance, setStatus, renderCount,setRenderCount);
    }

    

    return (
        
        <div className={styles.navbar}>

            <div>
                
                <Link href="/">
                    <button className={styles.logo}>LOGO</button>
                </Link>

            </div>

            <div className={styles.navbarDesktop}>

                <button><Link href="/">HOME</Link></button>

                <button><Link href="/roadmap">ROADMAP</Link></button>
                    
                <button><Link href="/playzone">PLAYZONE</Link></button>
                    
                <button><Link href="/faq">FAQ</Link></button>
                  
                <button><Link href="/gallery">GALLERY</Link></button>

                <button><a target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter}/></a></button>

                <button><a target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faMedium}/></a></button>
                        
                <button><a target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSailboat}/></a></button>

                <button onClick={useConnectWallet}><a>{status}</a></button>
                                    
            </div>

            <div className={styles.navbarMobile}>

                <button onClick={useConnectWallet}><a>{status}</a></button>

                <button><a><FontAwesomeIcon icon={faListDots}/></a></button>

                <div className={styles.dropDownContent}>

                    <button><Link href="/">HOME</Link></button>

                    <button><Link href="/roadmap">ROADMAP</Link></button>
                        
                    <button><Link href="/playzone">PLAYZONE</Link></button>
                        
                    <button><Link href="/faq">FAQ</Link></button>
                    
                    <button><Link href="/gallery">GALLERY</Link></button>

                    <div className={styles.dropDownSocials}>

                        <button><a target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter}/></a></button>

                        <button><a target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faMedium}/></a></button>
                                
                        <button><a target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSailboat}/></a></button>

                    </div>

                </div>

            </div>

        </div>

    )

}

/*
    <button><Link href="/mint">MINT</Link></button>
    <button><Link href="/checker">CHECKER</Link></button>
*/
