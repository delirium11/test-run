import styles from "../styles/playzone.module.css"

export default function Playzone() {

    return (

        <div className={styles.RMPageContainer}>

            <svg className={styles.RMButton1}>

                <path stroke="white" stroke-width="3" fill="yellow"
                
                    d=" M10,10 L250,10 L390,101 L250,190 L10,190 Z "
                
                />

            </svg>
            
            <svg className={styles.RMButton2}>

                <path 
                    
                    d="  "
                
                />

            </svg>

        </div>

    )

}
