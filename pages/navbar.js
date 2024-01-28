import Link from 'next/link';
import React, { useState, useEffect, useContext } from "react";
import { fetchWallet, connectWallet } from '../components/walletFetcher';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faMedium } from "@fortawesome/free-brands-svg-icons";
import { faSailboat, faListDots, faXmark } from "@fortawesome/free-solid-svg-icons";
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
            
            <Link href="/"> <img className={styles.logo} 
                src="/images/loading_image2.gif"/></Link>

            <input type='checkbox' id='dropDownMenu'/>
            
            <label for='dropDownMenu'><FontAwesomeIcon icon={faListDots}/></label>

            <nav>

                <a className={styles.connectButtonMobile} 
                    onClick={useConnectWallet}>{status}</a>

                <Link href="/">HOME</Link>

                <Link href="/roadmap">ROADMAP</Link>
                    
                <Link href="/playzone">PLAYZONE</Link>
                    
                <Link href="/faq">FAQ</Link>
                
                <Link href="/gallery">GALLERY</Link>

                <div>

                    <a target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter}/></a>

                    <a target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faMedium}/></a>
                            
                    <a target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faSailboat}/></a>

                </div>

                <a className={styles.connectButtonDesktop} 
                    onClick={useConnectWallet}>{status}</a>

            </nav>

        </div>

    )

}