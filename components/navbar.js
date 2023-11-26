import Link from 'next/link';
import React, { useState, useEffect, useContext } from "react";
import { fetchWallet, connectWallet } from './walletFetcher';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faMedium } from "@fortawesome/free-brands-svg-icons";
import { faSailboat } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from './renderCounter';
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

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 0) {
                document.querySelector(`.${styles.navbar}`)
                .classList.add(`${styles.scrolled}`);
            } else {
                document.querySelector(`.${styles.navbar}`)
                .classList.remove(`${styles.scrolled}`);
            }
        });
    }

    return (
        
        <div className={styles.navbar}>

            <div>

                <Link href="/"><img className={styles.mobileLogo} 
                    src="/images/logo_long.png" alt="logo_long"/></Link>

                <Link href="/"><img className={styles.desktopLogo} 
                    src="/images/logo_long.png" alt="logo_long"/></Link>

            </div>

            <div className="navbar_content">

                <button className={styles.navbarButton}>
                    <Link className={styles.navbarLink} 
                        href="/">HOME</Link></button>

                <button className={styles.navbarButton}>
                    <Link className={styles.navbarLink} 
                        href="/roadmap">ROADMAP</Link></button>
                
                <button className={styles.navbarButton}>
                    <Link className={styles.navbarLink} 
                        href="/playzone">PLAYZONE</Link></button>
                
                <button className={styles.navbarButton}>
                    <Link className={styles.navbarLink} 
                        href="/more">MORE</Link></button>
                
                <button className={styles.navbarButton}>
                    <Link className={styles.navbarLink} 
                        href="/checker">CHECKER</Link></button>

                <button className={styles.navbarButton}><a className={styles.navbarA}
                    target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter}/></a></button>

                <button className={styles.navbarButton}><a className={styles.navbarA}
                    target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faMedium}/></a></button>
                    
                <button className={styles.navbarButton}><a className={styles.navbarA}
                    target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faSailboat}/></a></button>

                <button className={styles.navbarButton} 
                    onClick={useConnectWallet}><a 
                        className={styles.navbarA}>{status}</a></button>

            </div>
            
        </div>

    )

}

/*
<button className={styles.navbarButton}>
    <Link className={styles.navbarLink} 
        href="/mint">MINT</Link></button>
        
<button className={styles.navbarButton}>
    <Link className={styles.navbarLink} 
        href="/application">APPLICATION</Link></button>

*/