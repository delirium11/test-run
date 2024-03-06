import Link from 'next/link';
import styles from '../styles/index.module.css'
import AnimatedBelt from '../components/animatedBelt';

export default function Home() {

    return (

        <div className={styles.homePageContainer}>
            
            <div className={styles.sectionOne}>

                <div>

                    <h1>WELCOME TO LUCKY CHARMS</h1>

                    <p>
                        We invite you to explore our World with us 
                        dreams, adventure, and escapism await!
                    </p>

                    <nav>

                        <Link href="/application">WHITELIST APPLICATION</Link>

                    </nav>

                </div>

                <div><img src="/images/sample_image.png"/></div>

            </div>

            <AnimatedBelt/>

            <div className={styles.sectionTwo}>

                <div><img src="/images/welcomer.png" alt="sectionTwoImage"/></div>

                <div>

                    <h1>ABOUT OUR BRAND</h1>

                    <p>
                        Boki is a community-focused project centered around 
                        collaboration and connection. Each Boki grants you 
                        access to Boki's holder-only Discord channels, 
                        digital and IRL events, exclusive merch, Boki Web 3 
                        experiences and more.
                    </p>

                </div>

            </div>

            <div className={styles.sectionThree}>

                <div>

                    <h1>THE JOURNEY</h1>

                    <p>
                        Explore Blue Cat's story and catch up on the 
                        Journey. Follow Blue and his friends across 
                        Cooltopia and contribute to the adventure along the way.
                    </p>

                </div>

                <div><img src="/images/roadmap_imagery.png"/></div>

            </div>

            <div className={styles.sectionFour}></div>

            <div className={styles.sectionFive}>
                <div><img src="/images/container4_background.png"/></div>
            </div>

        </div>

    )

}


/*
<Link href="/application">WHITELIST APPLICATION</Link>

<Link href="/mint">MINT</Link>

<Link href="/checker">WALLET CHECKER</Link>
*/