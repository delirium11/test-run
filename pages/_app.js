import styles from '../styles/globals.css'
import Navbar from '@/components/navbar'

export default function App ({ Component, pageProps }) {

    return (

        <div>
            
            <title>PANDAS</title>
            <Navbar />
            <Component {...pageProps} />

        </div>

    )

}