import React from "react";
import { create } from "ipfs-http-client";
import { useState, useEffect } from "react";
import MerkleTree from "merkletreejs";
import keccak256 from "keccak256";

export default function Checker() {

    const [ newList, setList ] = useState([]);
    const [ wallet, setWallet] = useState ("");
    const [ status, setStatus] = useState("");
    const [ tree, setTree] = useState(null);
    const [ proof, setProof] = useState(null);
    const [ whitelisted, setWhitelisted ] = useState(false);
    const [ copied, setCopied ] = useState(false);
    
    const bufToHex = x => "0x" + x.toString("hex");
    const ipfs = create('https://ipfs.io/');
    const storage = 'QmfAkb4ksqYi4dmX8sUwaZ1BP6qdcbZ2JWMoW77nx9BAKD';

    useEffect(() => {
        async function file(storage) {
            const chunks = [];
            for await (const chunk of ipfs.cat(storage)) {chunks.push(chunk)}
            const temp = Buffer.concat(chunks).toString().toLowerCase().split(',').map(item => 
                item.substring(2)).map((item, index) => index === 0 ? `0x${item}` : item);
            setList(temp); 
            setTree(new MerkleTree(temp.map((x) => 
                keccak256(x)), keccak256, { sortPairs: true }));              
        }
        file(storage);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        newList.includes(wallet.toLowerCase()) ? 
            (setStatus("YOU ARE WHITELISTED!"), setWhitelisted(true)) :
            (setStatus("YOU ARE NOT WHITELISTED!"), setWhitelisted(false), setCopied(false));

        console.log(tree.getProof(keccak256(wallet)).map((x) => bufToHex(x.data)));
        setProof(tree.getProof(keccak256(wallet)).map((x) => bufToHex(x.data)));
    }

    async function copyToClipboard() {
        try{
            await navigator.clipboard.writeText(proof);
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
                    
                    <input type="text" value={wallet} 
                        onChange={(e) => setWallet(e.target.value)}/>
                    
                </form>

                <button type="submit" form="checker_form">CHECK</button>

                <p>{status}</p>

                {whitelisted ? <><button onClick={copyToClipboard}>
                    COPY YOUR MERKLEPROOF</button> 
                    {copied ? <p className="copied">COPIED</p> : 
                    <p className="copied">&nbsp;</p>}
                    <p className="checker_description">
                    If you want to mint from the contract directly 
                    you can copy your merkle proof from this page. 
                    Make sure you enter the right wallet address.</p></> : <></>}

            </div> 

        </div>

    )

}