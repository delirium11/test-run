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

            <div className="navbarContent">
                
                <button className={styles.navbarButton}
                    id={styles.navbarHiddenMobile}>
                    <Link className={styles.navbarLink} 
                        href="/mint">MINT</Link></button>
                        
                <button className={styles.navbarButton}
                    id={styles.navbarHiddenMobile}>
                    <Link className={styles.navbarLink} 
                        href="/checker">CHECKER</Link></button>

                <button className={styles.navbarButton}
                    id={styles.navbarHiddenMobile}>
                    <Link className={styles.navbarLink} 
                        href="/">HOME</Link></button>

                <button className={styles.navbarButton}
                    id={styles.navbarHiddenMobile}>
                    <Link className={styles.navbarLink} 
                        href="/roadmap">ROADMAP</Link></button>
                    
                <button className={styles.navbarButton}
                    id={styles.navbarHiddenMobile}>
                    <Link className={styles.navbarLink} 
                        href="/playzone">PLAYZONE</Link></button>
                    
                <button className={styles.navbarButton}
                    id={styles.navbarHiddenMobile}>
                    <Link className={styles.navbarLink} 
                        href="/faq">FAQ</Link></button>
                  
                <button className={styles.navbarButton}
                    id={styles.navbarHiddenMobile}>
                    <Link className={styles.navbarLink} 
                        href="/gallery">GALLERY</Link></button>

                <button className={styles.navbarButton}
                    id={styles.navbarHiddenMobile}><a className={styles.navbarA}
                    target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter}/></a></button>

                <button className={styles.navbarButton}
                    id={styles.navbarHiddenMobile}><a className={styles.navbarA}
                    target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faMedium}/></a></button>
                        
                <button className={styles.navbarButton}
                    id={styles.navbarHiddenMobile}><a className={styles.navbarA}
                    target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faSailboat}/></a></button>

                <button className={styles.navbarButton} 
                    onClick={useConnectWallet}><a 
                        className={styles.navbarA}>{status}</a></button>

                <button className={styles.navbarButton} 
                    id={styles.navbarHiddenDesktop}><a className={styles.navbarA}>
                        <FontAwesomeIcon icon={faListDots}/></a></button>
                                    
            </div>
                
        </div>

    )

}

/*
                <button className={styles.navbarButton}
                    id={styles.navbarHiddenMobile}>
                    <Link className={styles.navbarLink} 
                        href="/mint">MINT</Link></button>
                        
                <button className={styles.navbarButton}
                    id={styles.navbarHiddenMobile}>
                    <Link className={styles.navbarLink} 
                        href="/checker">CHECKER</Link></button>
*/
