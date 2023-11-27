import styles from "../styles/playzone.module.css"

export default function Playzone() {

    return (

        <div className={styles.RMPageContainer}>

            <h1 className={styles.RMPageTitle}>

                THE JOURNEY OF LUCKY CHARMS

            </h1>

            <div className={styles.RMSVGContainer}> 

                <svg className={styles.RMButton1} viewBox="0 0 100 100">

                    <path 

                        fill="yellow" stroke="green" stroke-width="5"

                        d=" 
                        
                            M    0,   0
                            L  100,   0
                            L  100, 100
                            L    0, 100
                            Z

                        "

                    />

                </svg>

                <svg className={styles.RMButton2} viewBox="0 0 400 200">

                    <path 

                        stroke="white" stroke-width="3" fill="yellow"
                        
                        d=" 
                        
                            M  10, 10 
                            L 250, 10 
                            L 390, 101 
                            L 250, 190 
                            L  10, 190 
                            Z 
                        
                        "

                    />

                </svg>

            </div>

        </div>

    )

}
