import React, { useState, useEffect } from "react";
import { file, bufToHex } from "@/components/whitelistFetcher";

export default function Checker() {

    const [ newList, setList ] = useState([]);
    const [ wallet, setWallet] = useState ("");
    const [ status, setStatus] = useState("");
    const [ tree, setTree] = useState(null);
    const [ proof, setProof] = useState(null);
    const [ whitelisted, setWhitelisted ] = useState(false);
    const [ copied, setCopied ] = useState(false);

    useEffect(() => { file(setTree, setList) }, [])

    const handleSubmit = (event) => {
        //console.log(bufToHex(tree.getRoot()))
        event.preventDefault();
        newList.includes(wallet.toLowerCase()) ? 
            (setProof(tree.getProof(keccak256(wallet)).map((x) => bufToHex(x.data))), 
            (setStatus("YOU ARE WHITELISTED!")), (setWhitelisted(true))) :
            (setStatus("YOU ARE NOT WHITELISTED!"), setWhitelisted(false), setCopied(false));        
    }

    async function copyToClipboard() {
        try{
            await navigator.clipboard.writeText('[' + proof + ']');
            setCopied(true);
        } catch(error) {
            alert('BROWSER DOES NOT SUPPORT COPY TO CLIPBOARD. USE GOOGLE CHROME' );
        }
    }

    return (

        <div className="page_content">
            
            <div className="checker_page_content">

                <form id="checker_form" onSubmit={handleSubmit}>

                    <p>ENTER YOUR WALLET</p>
                    
                    <input className="box" type="text" value={wallet} 
                        onChange={(e) => setWallet((e.target.value).replace(/\s/g, ""))}/>
                    
                </form>

                <button className="box" type="submit" form="checker_form">CHECK</button>

                <p>{status}</p>

                {

                    whitelisted ? 
                    
                    <>
                        <button onClick={copyToClipboard}>COPY YOUR MERKLEPROOF</button> 
                        
                        {copied ? <p className="copied">COPIED</p> : 
                        <p className="copied">&nbsp;</p>}

                        <p className="checker_description">
                        
                            If you want to mint from the contract directly 
                            you can copy your merkle proof from this page. 
                            Make sure you enter the right wallet address.
                        
                        </p>
                    
                    </> : <></>

                }

            </div> 

        </div>

    )

}
