import styles from '../styles/globals.css'
import Navbar from '@/components/navbar'
import { useEffect } from 'react';

export default function App ({ Component, pageProps }) {
    
    useEffect(() => {

        window.addEventListener('beforeunload', clearCache);

        return () => {

            window.removeEventListener('beforeunload', clearCache);
        
        };
    
    }, []);

    const clearCache = () => {

        if (window.performance && window.performance.navigation.type !== 1) {

            console.log('Clearing cache');

            window.location.reload(true);

        }

      };

    return (

        <div>
            
            <title>LLAMAPIX</title>
            <Navbar />
            <Component {...pageProps} />

        </div>

    )

}