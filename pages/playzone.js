import styles from "../styles/playzone.module.css"

export default function Playzone() {

    return (

        <div className={styles.RMPageContainer}>

            <h1 className={styles.RMPageTitle}>

                THE JOURNEY OF LUCKY CHARMS

            </h1>

            <div className={styles.RMSVGContainer}> 

                <div className={styles.RMIMGContainer}>

                    <svg className={styles.RMImageSVG} viewBox="-2.5 0 305 306">

                        <polygon 

                            stroke="white" strokeWidth="5"

                            points="

                                300,150 225,280 75,280 0,150 75,20 225,20

                            "

                        />

                        <defs>

                            <clipPath id="RMSVGImageClip">

                                <polygon

                                    points="

                                        300,150 225,280 75,280 0,150 75,20 225,20

                                    "
                                
                                />

                            </clipPath>
                            
                        </defs>

                        <image className={styles.Phase1IMG} href="/images/bang.png"/>

                    </svg>

                </div>

                <div className={styles.RMButtonContainer}>

                    <svg className={styles.RMButton1} viewBox="0 -5 200 100">

                        <rect 

                            width="200px" height="65px" rx="10px" ry="10px"
                        
                            fill="#fddce4" stroke="black" stroke-width="2"

                        />

                        <polygon fill="#1D1D1D" stroke="white" strokeWidth="5"

                            points="

                                52.85,  31.42 
                                42.14,  50 
                                20.71,  50 
                                10,     31.42 
                                20.71,  12.85 
                                42.14,  12.85

                            "
                        />

                        <text x="24" y="36" fill="white">P1</text>

                    </svg>

                    <svg className={styles.RMButton2} viewBox="0 -5 200 100">

                        <rect 

                            width="200px" height="65px" rx="10px" ry="10px"

                            fill="#b5e4db" stroke="black" stroke-width="2"

                        />

                        <polygon fill="#1D1D1D" stroke="white" strokeWidth="5"

                            points="

                                52.85,  31.42 
                                42.14,  50 
                                20.71,  50 
                                10,     31.42 
                                20.71,  12.85 
                                42.14,  12.85

                            "
                        />
                        
                        <text x="24" y="36" fill="white">P2</text>

                    </svg>

                    <svg className={styles.RMButton3} viewBox="0 -5 200 100">

                        <rect 

                            width="200px" height="65px" rx="10px" ry="10px"

                            fill="#fcf9ca" stroke="black" stroke-width="2"

                        />

                        <polygon fill="#1D1D1D" stroke="white" strokeWidth="5"

                            points="

                                52.85,  31.42 
                                42.14,  50 
                                20.71,  50 
                                10,     31.42 
                                20.71,  12.85 
                                42.14,  12.85

                            "
                        />

                        <text x="24" y="36" fill="white">P3</text>

                    </svg>

                    <svg className={styles.RMButton4} viewBox="0 -5 200 100">

                        <rect 

                            width="200px" height="65px" rx="10px" ry="10px"

                            fill="#bee7f2" stroke="black" stroke-width="2"

                        />
                        
                        <polygon fill="#1D1D1D" stroke="white" strokeWidth="5"

                            points="

                                52.85,  31.42 
                                42.14,  50 
                                20.71,  50 
                                10,     31.42 
                                20.71,  12.85 
                                42.14,  12.85

                            "
                        />

                        <text x="24" y="36" fill="white">P4</text>

                    </svg>

                </div>

                <div className={styles.RMDescriptionContainer}>

                    <svg className={styles.RMPhaseContainer} viewBox="-15 -10 420 610">

                        <rect 
                        
                            width="400px" height="520px" rx="20px" ry="20px"

                            fill="#fddce4" stroke="black" stroke-width="3"

                        />

                    </svg>

                </div>

                <div className={styles.RMLineContainer1}>

                    <svg className={styles.preDashedLine1} viewBox="0 0 300 500">

                        <path stroke="white" strokeWidth="4"
                        
                            d="

                                M 300, 50

                            "
                        
                        />

                    </svg>

                </div>

                <div className={styles.RMLineContainer2}>

                    <svg className={styles.preDashedLine2} viewBox="0 0 100 100">



                    </svg>

                </div>

            </div>

        </div>

    )

}
