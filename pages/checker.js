import React from "react";
import { create } from "ipfs-http-client";
import { useState, useEffect } from "react";

export default function Checker() {

    const [ newList, setList ] = useState([]);
    const [ wallet, setWallet] = useState ("");
    const [ status, setStatus] = useState("");

    const ipfs = create('https://ipfs.io/');
    const storage = 'QmfAkb4ksqYi4dmX8sUwaZ1BP6qdcbZ2JWMoW77nx9BAKD';

    async function file(storage) {
        const chunks = [];
        for await (const chunk of ipfs.cat(storage)) {chunks.push(chunk)}
        return Buffer.concat(chunks).toString().toLowerCase().split(',').map(item => 
            item.substring(2)).map((item, index) => index === 0 ? `0x${item}` : item);
    }
    
    useEffect(() => {file(storage).then(setList);}, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        newList.includes(wallet.toLowerCase()) ? 
            setStatus("YOU ARE WHITELISTED!") : 
            setStatus("YOU ARE NOT WHITELISTED!");
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

            </div> 

        </div>

    )

}