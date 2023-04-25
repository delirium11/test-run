import React, { useState, useEffect, useContext } from "react";
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
            mint(newList, tree, address, setResponse, setAlert, balance, number, signer );
        }
    }

    return (

        <div className="page_content">

            <div className="mint_page_content">

                <h1>MINT PAGE</h1>

                <p>THIS IS THE MINT PAGE</p>
        
                <div>
        
                    <button className="mint_button" onClick={mintButton}>MINT</button>

                </div>

                <div>
        
                    <button className="minus_button" onClick={() => 
                        decrease(number, setNumber)}>-</button>

                    <p className="counter">{number}</p>
                    
                    <button className="plus_button" onClick={() => 
                        increase(number, setNumber)}>+</button>

                </div>

                <div>

                    <p>{response}</p>
                    <p>{alert}</p>

                </div>
            
            </div>

        </div>

    )
    
}