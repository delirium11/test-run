import styles from '../styles/index.module.css'
import AnimatedBelt from './animatedBelt';

export default function Home() {

    return (

        <div className={styles.homeContent}>
            
            <div className={styles.titleContainer}>
            
                <h1 className={styles.homePageTitle}>WELCOME TO LUCKY CHARMS</h1>
            
                <img className={styles.homePageImage} src="/images/bang.png" alt="bang2"/>

            </div>

            <AnimatedBelt />

            <div className={styles.titleContainer2}>

                <h1 className={styles.homePageTitle}>HUH... WHAT? WHAT IS THIS!?</h1>

                <img className={styles.homePageImage} src="/images/bang.png" alt="bang2"/>

            </div>
            
            <AnimatedBelt />

            <div className={styles.titleContainer3}>

                <h1 className={styles.homePageTitle}>HUH... WHAT? WHAT IS THIS!?</h1>

                <img className={styles.homePageImage} src="/images/bang.png" alt="bang2"/>

            </div>

            <AnimatedBelt />

            <div className={styles.titleContainer4}>

                <h1 className={styles.homePageTitle}>HUH... WHAT? WHAT IS THIS!?</h1>

                <img className={styles.homePageImage} src="/images/bang.png" alt="bang2"/>

            </div>

            <AnimatedBelt />

            <div className={styles.titleContainer5}>

                <h1 className={styles.homePageTitle}>HUH... WHAT? WHAT IS THIS!?</h1>

                <img className={styles.homePageImage} src="/images/bang.png" alt="bang2"/>

            </div>

        </div>

    )

}
