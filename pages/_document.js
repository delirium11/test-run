import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    
    return (
        
        <Html lang='eng'>

            <Head>

                <meta httpEquiv="Cache-control" content="no-cache, no-store, must-revalidate" />
                <meta httpEquiv="Pragma" content="no-cache" />
                <meta httpEquiv="Expires" content="0" />

            </Head>

            <body>
                
                <Main />
                <NextScript />

            </body>

        </Html>

    )

}