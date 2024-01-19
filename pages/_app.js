import { AppContextProvider } from '@/components/renderCounter';
import styles from '../styles/globals.css';
import Navbar from '@/components/navbar';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [opacity, setOpacity] = useState(1); // Track opacity for fading animation

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
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
            <img className="loading-image" src="/images/bang.png"/>
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
