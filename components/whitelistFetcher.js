import { ethers } from 'ethers';
import { create } from "ipfs-http-client";
import MerkleTree from "merkletreejs";
import keccak256 from "keccak256";
import contractabi from '../contractabi';

const ipfs = create('https://ipfs.io/');
const storage = 'QmP9byHiN4njYu5nykjX5UAqnPdimzeZyMxXMrTFGCPje3';

const contractAddress = '0xb85202D81513d5255f9370409f2B70B19318b32a';
const contractABI  = contractabi;

export const bufToHex = x => "0x" + x.toString("hex");

export async function file(setTree, setList) {
    const chunks = [];
    for await (const chunk of ipfs.cat(storage)) {chunks.push(chunk)}
    const temp = Buffer.concat(chunks).toString().toLowerCase().split(',').map(item => 
        item.substring(2)).map((item, index) => index ? item : `0x${item}`);
    setTree(new MerkleTree(temp.map((x) => keccak256(x)), keccak256, { sortPairs: true }));
    setList(temp);
}

export async function mint(tree, address, setResponse, setAlert, balance, number, signer) {
    setResponse('');
    setAlert('');
    const proof = tree.getProof(keccak256(address)).map((x) => bufToHex(x.data));
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const whitelistMintPrice = ethers.utils.formatEther(await contract.whitelistMintCost());
    const publicMintPrice = ethers.utils.formatEther(await contract.publicMintCost());
    const whitelistBalance = parseInt(await contract.whitelistMintCounter(address));
    const publicBalance = parseInt(await contract.publicMintCounter(address));
    const whitelisted = await contract.isWhitelisted(proof);
    const WLMintEnabled = await contract.whitelistMintEnabled();
    const PLMintEnabled = await contract.publicMintEnabled();
    const ethBalance = ethers.utils.formatEther(balance);
    let costOfWhitelistMint = (( number * (whitelistMintPrice)).toString());
    let costOfPublicMint = (( number * (publicMintPrice)).toString());
    let costOfFreeMint = (((number - 1) * (whitelistMintPrice)).toString());
    if (whitelistBalance === 0) { (costOfWhitelistMint = costOfFreeMint) }
    if (WLMintEnabled) {
        if (whitelisted) {
            if (
                (whitelistBalance === 0 && number <= 3) ||
                (whitelistBalance === 1 && number <= 2) ||
                (whitelistBalance === 2 && number === 1) ||
                (whitelistBalance === 3 && number === 0)
            ) {
                try {
                    if ((ethBalance >= (costOfWhitelistMint)) && whitelisted) {
                        const callFunction = await contract.whitelistMint(number, proof, { value: costOfWhitelistMint });
                        await callFunction.wait();
                    } else {
                        setAlert('YOU DO NOT ENOUGH FUNDS IN YOUR ETHEREUM WALLET');
                    }
                } catch (error) {
                    console.log('USER REJECTED THE TRANSACTION');
                }
            } else {
                if(whitelistBalance === 3) {
                    alert('YOU HAVE REACHED THE MAXIMUM ALLOWED MINTS PER WALLET');
                } else {
                    alert('YOU CAN MINT ' + (3 - whitelistBalance) + ' MORE TIMES.');
                }
            }
        } else {
            setResponse('CONNECTED ADDRESS IS NOT WHITELISTED');
        }
    } else if (PLMintEnabled) {
        if (
            (publicBalance === 0 && number <= 3) ||
            (publicBalance === 1 && number <= 2) ||
            (publicBalance === 2 && number === 1) ||
            (publicBalance === 3 && number === 0)
        ) {
            try {
                if ((ethBalance >= (costOfPublicMint))) {
                    const callFunction = await contract.publicMint(number, { value: costOfPublicMint });
                    await callFunction.wait();
                } else {
                    setAlert('YOU DO NOT ENOUGH FUNDS IN YOUR ETHEREUM WALLET');
                }
            } catch (error) {
                console.log('USER REJECTED THE TRANSACTION');
            }
        } else {
            if(publicBalance === 3) {
                alert('YOU HAVE REACHED THE MAXIMUM ALLOWED MINTS PER WALLET');
            } else {
                alert('YOU CAN MINT ' + (3 - publicBalance) + ' MORE TIMES.');
            }
        }
    } else {
        alert('MINT HAS NOT STARTED')
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
