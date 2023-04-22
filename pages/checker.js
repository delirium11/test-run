import React from "react";
import { create } from "ipfs-http-client";
import { useState, useEffect } from "react";
import keccak256 from "keccak256";
import MerkleTree from "merkletreejs";

export default function Checker() {

    const [ newList, setList ] = useState([]);
    const [ wallet, setWallet] = useState ("");
    const [ status, setStatus] = useState("");
    const [ tree, setTree] = useState(null);
    const [ proof, setProof] = useState(null);
    
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
            setStatus("YOU ARE WHITELISTED!") : 
            setStatus("YOU ARE NOT WHITELISTED!");
        
        console.log(tree.getProof(keccak256(wallet)).map((x) => bufToHex(x.data)))
        setProof(tree.getProof(keccak256(wallet)).map((x) => bufToHex(x.data)));
    }

    return (

        <div className="page_content">

            <div className="checker_page_text_content">

                <form id="checker_form" onSubmit={handleSubmit}>
                    
                    <p>ENTER YOUR WALLET</p>
                    
                    <input type="text" value={wallet} 
                        onChange={(e) => setWallet(e.target.value)}/>
                    
                </form>

                <button type="submit" form="checker_form">CHECK</button>

                <p className="checker_page_content">{status}</p>

                <div className="proof"><p>{proof}</p></div>

            </div> 

        </div>

    )

}