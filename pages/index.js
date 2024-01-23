import Link from 'next/link';
import styles from '../styles/index.module.css'
import AnimatedBelt from '../components/animatedBelt';

export default function Home() {

    return (

        <div className={styles.homePageContainer}>
            
            <div className={styles.sectionOne}>

                <div className={styles.sectionOneImage}></div>

                <div className={styles.sectionOneTextAndButtonContainer}>

                    <div className={styles.sectionOneTitleAndSub}>

                        <h1 className={styles.sectionOneTitle}>
                            WELCOME TO LUCKY CHARMS
                        </h1>

                        <p1 className={styles.sectionOneSubTitle}>
                            We invite you to explore our World with us - 
                            dreams, adventure, and escapism await!
                        </p1>
                    
                    </div>

                    <div className={styles.applicationButtonContainer}>

                        <button className={styles.applicationButton}>
                            <Link className={styles.applicationLink} 
                                href="/application">WHITELIST APPLICATION </Link>
                        </button>

                    </div>

                </div>
                
            </div>

            <AnimatedBelt />

            <div className={styles.sectionTwo}>

                <div className={styles.sectionTwoTextContainer}>

                    <h1 className={styles.sectionTwoTitle}>
                        ABOUT OUR BRAND
                    </h1>

                    <p1 className={styles.sectionTwoSubTitle}>
                        Boki is a community-focused project centered around 
                        collaboration and connection. Each Boki grants you 
                        access to Boki's holder-only Discord channels, 
                        digital and IRL events, exclusive merch, Boki Web 3 
                        experiences and more.
                    </p1>

                </div>

                <img className={styles.sectionTwoImage} 
                    src="/images/welcomer.png" alt="sectionTwoImage"/>

            </div>
            
            <div className={styles.sectionThree}>

                <div className={styles.sectionThreeTitleSubAndImageContainer}>
                    
                    <div className={styles.sectionThreeTitleAndSub}>

                        <h1 className={styles.sectionThreeTitle}>
                            THE JOURNEY
                        </h1>

                        <h2 className={styles.sectionThreeSubTitle}>
                            Explore Blue Cat's story and catch up on the 
                            Journey. Follow Blue and his friends across 
                            Cooltopia and contribute to the adventure along the way.
                        </h2>

                    </div>

                    <img className={styles.sectionThreeImage} 
                        src="/images/roadmap_imagery.png" alt="sectionThreeImage"/>
                
                </div>

            </div>

            <div className={styles.titleContainer4}>

                <img className={styles.sectionFourImage} 
                        src="/images/container4_background.png" alt="sectionFourImage"/>

            </div>

        </div>

    )

}


/*
                        <button className={styles.applicationButton}>
                            <Link className={styles.applicationLink} 
                                href="/application">MINT</Link>
                        </button>

                        <button className={styles.applicationButton}>
                            <Link className={styles.applicationLink} 
                                href="/application">WALLET CHECKER</Link>
                        </button>
*/