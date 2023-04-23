import { AppContextProvider } from '@/components/render'
import styles from '../styles/globals.css'
import Navbar from '@/components/navbar'

export default function App ({ Component, pageProps }) {

    return (

        <AppContextProvider>

            <div>
                
                <title>LLAMAPIX</title>

                <Navbar />
                
                <Component {...pageProps} />

            </div>

        </AppContextProvider>

    )

}