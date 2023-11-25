import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/mint.module.css"
import { file, mint, increase, decrease } from "@/components/whitelistFetcher";
import { fetchWallet, connectWallet } from '../components/walletFetcher';
import { AppContext } from "@/components/renderCounter";

export default function Mint() {
    
    const { renderCount, setRenderCount } = useContext(AppContext);

    const [ number, setNumber ] = useState(3);
    const [ provider, setProvider ] = useState(null);
    const [ address, setAddress ] = useState(null);
    const [ balance, setBalance ] = useState(null);
    const [ signer, setSigner ] = useState(null);
    const [ status, setStatus ] = useState('CONNECT');
    const [ newList, setList ] = useState([]);
    const [ tree, setTree] = useState(null);
    const [ response, setResponse ] = useState('');
    const [ alert, setAlert ] = useState('');

    useEffect(() => { 
        file(setTree, setList);
        fetchWallet(setProvider, setSigner, setAddress, setBalance, setStatus);
    }, [renderCount]);

    async function mintButton() {
        if( provider == null ) {
            connectWallet(fetchWallet, setProvider, setSigner, 
                setAddress, setBalance, setStatus, renderCount, setRenderCount);
        } else {
            mint(tree, address, setResponse, setAlert, balance, number, signer );
        }
    }

    return (

        <div className={styles.pageContent}>

            <div className={styles.mintPageContainer}>

                <h1 className={styles.mintPageTitle}>MINT PAGE</h1>

                <p className={styles.mintPageDescription}>THIS IS THE MINT PAGE</p>
        
                <div className={styles.minterContainer}>
                    
                    <div className={styles.mintButtonContainer}>
                    
                        <button className={styles.mintButton} onClick={mintButton}>MINT</button>
                    
                    </div>
                    
                    <div className={styles.plusMinusContainer}>

                        <div className={styles.minusButtonContainer}>

                            <button className={styles.minusButton} onClick={() => 
                                decrease(number, setNumber)}>-</button>

                        </div>

                        <div className={styles.counterContainer}>

                            <p className={styles.counter}>{number}</p>

                        </div>

                        <div className={styles.plusButtonContainer}>

                            <button className={styles.plusButton} onClick={() => 
                                increase(number, setNumber)}>+</button>
                        
                        </div>
                            
                    </div>
 

                </div>

                <div>

                    <p>{response}</p>
                    <p>{alert}</p>

                </div>
            
            </div>

        </div>

    )
    
}