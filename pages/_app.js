import styles from '../styles/globals.css'
import Navbar from '@/components/navbar'
import { useEffect } from 'react'

export default function App ({ Component, pageProps }) {
    
    useEffect(() => {
        const handleBeforeUnload = () => {
            window.localStorage.setItem("userRefresh", "true");
        }
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);
    
      useEffect(() => {
        if (window.localStorage.getItem("userRefresh")) {
            window.localStorage.removeItem("userRefresh");
        } else {
            location.reload(true);
        }
    }, []);

    return (

        <div>
            
            <title>LLAMAPIX</title>
            <Navbar />
            <Component {...pageProps} />

        </div>

    )

}