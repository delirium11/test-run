import styles from '../styles/index.module.css'
import AnimatedBelt from './animatedBelt';

export default function Home() {

    return (

        <div className={styles.homeContent}>
            
            <div className={styles.titleContainer}>
            
                <div className={styles.welcomeTitleContainer}>

                    <h1 className={styles.homePageTitle}>WELCOME TO LUCKY CHARMS</h1>

                    <img className={styles.homePageTitle2} src="/images/openseaButton.png" alt="bang2"/>

                </div>
            
                <img className={styles.homePageImage} src="/images/sample_image.png" alt="bang2"/>
                
            </div>

            <AnimatedBelt />

            <div className={styles.titleContainer2}>

                <img className={styles.aboutImage} src="/images/about.png" alt="bang2"/>

                <img className={styles.incomingImage} src="/images/welcomer.png" alt="bang2"/>

            </div>
            
            <div className={styles.titleContainer3}>

                <h1 className={styles.container3_title}>THE JOURNEY</h1>

                <h2 className={styles.subTitle32}>
                    Explore Blue Cat's story and catch up on the 
                    Journey. Follow Blue and his friends across 
                    Cooltopia and contribute to the adventure along the way.
                </h2>

                <img className={styles.roadmap_imagery} src="/images/roadmap_imagery.png" alt="bang2"/>

            </div>

            <div className={styles.titleContainer4}>

            </div>

        </div>

    )

}
