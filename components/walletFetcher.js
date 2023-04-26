import { ethers } from 'ethers';

export async function fetchWallet(setProvider, setSigner, setAddress, setBalance, setStatus) {
    if (window.ethereum) {
        try{
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            const balance = await provider.getBalance(address);
            const status = ('0x' + address.substring(38).toUpperCase());
            setProvider(provider);
            setSigner(signer);
            setAddress(address);
            setBalance(balance);
            setStatus(status);
            console.log('PROVIDER:', provider);
            console.log('SIGNER:', signer);
            console.log('ADDRESS:', address);
            console.log('BALANCE:', balance);
            window.ethereum.on('accountsChanged', (accounts) => {
                (accounts.length === 0) ? (setProvider(null), setStatus('CONNECT')) : 
                (fetchWallet(setProvider, setSigner, setAddress, setBalance, setStatus));
            });
        } catch (error) {
            console.log('CONNECT WITH METAMASK');
        }
    }
}

export async function connectWallet(fetchWallet, setProvider, setSigner, 
    setAddress, setBalance, setStatus, renderCount, setRenderCount) {
    if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        fetchWallet(setProvider, setSigner, setAddress, setBalance, setStatus);
        setRenderCount(renderCount + 1);
    } else {
        alert('METAMASK NOT DETECTED')
    }
}