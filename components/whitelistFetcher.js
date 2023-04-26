import { ethers } from 'ethers';
import { create } from "ipfs-http-client";
import MerkleTree from "merkletreejs";
import keccak256 from "keccak256";
import contractabi from '../contractabi';

export const bufToHex = x => "0x" + x.toString("hex");
const ipfs = create('https://ipfs.io/');
const storage = 'QmfAkb4ksqYi4dmX8sUwaZ1BP6qdcbZ2JWMoW77nx9BAKD';

const contractAddress = '0x44d3984F0596e1c1a7d0E0b28732d5082b0F5e7a';
const contractABI  = contractabi;

export async function file(setTree, setList) {
    const chunks = [];
    for await (const chunk of ipfs.cat(storage)) {chunks.push(chunk)}
    const temp = Buffer.concat(chunks).toString().toLowerCase().split(',').map(item => 
        item.substring(2)).map((item, index) => index ? item : `0x${item}`);
    setTree(new MerkleTree(temp.map((x) => keccak256(x)), keccak256, { sortPairs: true }));
    setList(temp);
}

export async function mint(newList, tree, address, setResponse, setAlert, balance, number, signer) {
    if (newList.includes(address.toLowerCase())) {
        try {
            setResponse('');
            setAlert('');
            const proof = tree.getProof(keccak256(address)).map((x) => bufToHex(x.data));
            const cost = ethers.utils.parseEther(( number * (0.003)).toString());
            const contract = new ethers.Contract(contractAddress, contractABI, signer);
            if (ethers.utils.formatEther(balance) >= ethers.utils.formatEther(cost)) {
                const callFunction = await contract.whitelistMint(number, proof, { value: cost });
                await callFunction.wait();
            } else {
                setAlert('YOU DO NOT ENOUGH ETHEREUM IN THE WALLET')
            }
        } catch (error) {
            console.error(error)
        }
    } else {
        setResponse('CONNECTED ADDRESS IS NOT WHITELISTED');
    }
}

export function increase(number, setNumber) { 
    if (number < 3) {
        setNumber(number + 1)
    } else {
        setNumber(number)
    }
}
export function decrease(number, setNumber) { 
    if (number > 1) {
        setNumber(number - 1)
    } else {
        setNumber(number)
    }
}