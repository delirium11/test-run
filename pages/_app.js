import { AppContextProvider } from '@/components/renderCounter';
import styles from '../styles/globals.css';
import Navbar from '@/pages/navbar';
import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [opacity, setOpacity] = useState(1);

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const authDomain = process.env.NEXT_PUBLIC_AUTH_DOMAIN;
  const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
  const storageBucket = process.env.NEXT_PUBLIC_STORAGE_BUCKET;
  const messagingSenderId = process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID;
  const appId = process.env.NEXT_PUBLIC_APP_ID;
  const measurementId = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

  const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId,
  };

  useEffect (() => {
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    const collectionRef = db.collection('whitelist');
    const newEntryRef = collectionRef.doc('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2')
    newEntryRef.set({
      walletAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      highScore: 35743,
      timestamp: new Date().getTime(),
      merkleProof: []
    })
  }, []);

  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    const docRef = db.collection('whitelist').doc('0xABCDEF1234567890ABCDEF1234567890');
    docRef.get().then((doc) => {
      console.log('Retreived data:', doc.data());
    })
  }, []);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } else {
      setTimeout(() => {
        setOpacity(0); // Start fading out after 2 seconds
      }, 100); // Delay fade-out slightly to prevent overlapping with content
    }
  }, [loading]);

  useEffect(() => {
    if (opacity === 0) {
      setTimeout(() => {
        // Remove the element after fading out completely
        setOpacity(null); // Set opacity to null to trigger DOM removal
      }, 500); // Set fade-out duration to 0.3 seconds (300 milliseconds)
    }
  }, [opacity]);

  useEffect(() => {
    const body = document.body;
  
    if (loading) {
      body.classList.add('hide-scrollbars');
    } else {
      setTimeout(() => {
        body.classList.remove('hide-scrollbars'); // Remove after fade-out
      }, 100); // Adjust timing to match fade-out duration
    }
  }, [loading]);
  

  return (
    <AppContextProvider>
      <div>
        {opacity !== null && ( // Render the loader if opacity is not null
          <div
            className="loaderWrapper"
            id="loader-wrapper"
            style={{ opacity: opacity }} // Dynamically set opacity using state
          >
            <img className="loading-image" src="/images/loading_image.gif"/>
            <div className="loading-bar-wrapper">
              <div className="loading-bar"></div>
            </div>
          </div>
        )}

        <title>TEST WEBSITE</title>

        <Navbar />

        <Component {...pageProps} />
      </div>
    </AppContextProvider>
  );
}
