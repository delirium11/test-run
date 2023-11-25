import React, { useState, useEffect } from "react";

import styles from "../styles/roadmap.module.css";

export default function Roadmap() {

    const [section, setSection] = useState("FuturePlanIsActive");

    const hideTheRest = () => {
        document.querySelector(`.${styles.futurePlans}`).classList.add(`${styles.notActive}`);
        document.querySelector(`.${styles.ourThoughts}`).classList.add(`${styles.notActive}`);
        document.querySelector(`.${styles.whatLiesAhead}`).classList.add(`${styles.notActive}`);
        document.querySelector(`.${styles.tfIsThis}`).classList.add(`${styles.notActive}`);
        document.querySelector(`.${styles.heheImage}`).classList.add(`${styles.notActive}`);
        document.querySelector(`.${styles.plzImage}`).classList.add(`${styles.notActive}`);
        document.querySelector(`.${styles.wastedImage}`).classList.add(`${styles.notActive}`);
        document.querySelector(`.${styles.wtfImage}`).classList.add(`${styles.notActive}`);
    }

    useEffect(() => {

        hideTheRest();
        
        if (section === "FuturePlanIsActive") {
            document.querySelector(`.${styles.futurePlans}`).classList.remove(`${styles.notActive}`);
            document.querySelector(`.${styles.heheImage}`).classList.remove(`${styles.notActive}`);

        } else if (section === "OurThoughtsIsActive") {
            document.querySelector(`.${styles.ourThoughts}`).classList.remove(`${styles.notActive}`);
            document.querySelector(`.${styles.plzImage}`).classList.remove(`${styles.notActive}`);

        } else if (section === "WhatLiesAheadIsActive") {
            document.querySelector(`.${styles.whatLiesAhead}`).classList.remove(`${styles.notActive}`);
            document.querySelector(`.${styles.wastedImage}`).classList.remove(`${styles.notActive}`);

        } else if (section === "tfIsThisIsActive") {
            document.querySelector(`.${styles.tfIsThis}`).classList.remove(`${styles.notActive}`);
            document.querySelector(`.${styles.wtfImage}`).classList.remove(`${styles.notActive}`);

        }

    }, [section]);

    return (

        <div className={styles.roadMapPageContentContainer}>

            <div className={styles.roadMapButtonContent}>

                <button className={styles.roadMapButton1} 
                    onClick={() => setSection(("FuturePlanIsActive"))}>PHASE 1</button>

                <button className={styles.roadMapButton2}
                    onClick={() => setSection("OurThoughtsIsActive")}>PHASE 2</button>

                <button className={styles.roadMapButton3}
                    onClick={() => setSection("WhatLiesAheadIsActive")}>PHASE 3</button>

                <button className={styles.roadMapButton4}
                    onClick={() => setSection("tfIsThisIsActive")}>PHASE 4</button>

            </div>

            <div className={styles.roadMapDescriptionContent}>

                <p className={styles.futurePlans}>
                    But I must explain to you how all this mistaken 
                    idea of denouncing pleasure and praising pain was 
                    born and I will give you a complete account of 
                    the system, and expound the actual teachings of 
                    the great explorer of the truth, the master-builder 
                    of human happiness. No one rejects, dislikes, or 
                    avoids pleasure itself, because it is pleasure, 
                    but because those who do not know how to pursue 
                    pleasure rationally encounter consequences that 
                    are extremely painful. Nor again is there anyone 
                    who loves or pursues or desires to obtain pain 
                    of itself, because it is pain, but because 
                    occasionally circumstances occur in which toil 
                    and pain can procure him some great pleasure. 
                    To take a trivial example, which of us ever 
                    undertakes laborious physical exercise, except 
                    to obtain some advantage from it? But who has any 
                    right to find fault with a man who chooses to enjoy 
                    a pleasure that has no annoying consequences, or 
                    one who avoids a pain that produces no resultant 
                    pleasure?</p>

                <p className={styles.ourThoughts}>                
                    Sed ut perspiciatis unde omnis iste natus 
                    error sit voluptatem accusantium doloremque 
                    laudantium, totam rem aperiam, eaque ipsa 
                    quae ab illo inventore veritatis et quasi 
                    architecto beatae vitae dicta sunt explicabo. 
                    Nemo enim ipsam voluptatem quia voluptas sit 
                    aspernatur aut odit aut fugit, sed quia 
                    consequuntur magni dolores eos qui ratione 
                    voluptatem sequi nesciunt. Neque porro quisquam 
                    est, qui dolorem ipsum quia dolor sit amet, 
                    consectetur, adipisci velit, sed quia non 
                    numquam eius modi tempora incidunt ut labore 
                    et dolore magnam aliquam quaerat voluptatem. 
                    Ut enim ad minima veniam, quis nostrum 
                    exercitationem ullam corporis suscipit 
                    laboriosam, nisi ut aliquid ex ea commodi 
                    consequatur? Quis autem vel eum iure reprehenderit 
                    qui in ea voluptate velit esse quam nihil 
                    molestiae consequatur, vel illum qui dolorem eum 
                    fugiat quo voluptas nulla pariatur?</p>

                <p className={styles.whatLiesAhead}>
                    At vero eos et accusamus et iusto odio dignissimos 
                    ducimus qui blanditiis praesentium voluptatum deleniti 
                    atque corrupti quos dolores et quas molestias excepturi 
                    sint occaecati cupiditate non provident, similique 
                    sunt in culpa qui officia deserunt mollitia animi, 
                    id est laborum et dolorum fuga. Et harum quidem 
                    rerum facilis est et expedita distinctio. Nam libero 
                    tempore, cum soluta nobis est eligendi optio cumque 
                    nihil impedit quo minus id quod maxime placeat facere 
                    possimus, omnis voluptas assumenda est, omnis dolor 
                    repellendus. Temporibus autem quibusdam et aut officiis 
                    debitis aut rerum necessitatibus saepe eveniet ut et 
                    voluptates repudiandae sint et molestiae non recusandae. 
                    Itaque earum rerum hic tenetur a sapiente delectus, 
                    ut aut reiciendis voluptatibus maiores alias consequatur 
                    aut perferendis doloribus asperiores repellat.</p>

                <p className={styles.tfIsThis}>
                    On the other hand, we denounce with righteous indignation 
                    and dislike men who are so beguiled and demoralized by the 
                    charms of pleasure of the moment, so blinded by desire, 
                    that they cannot foresee the pain and trouble that are 
                    bound to ensue; and equal blame belongs to those who fail 
                    in their duty through weakness of will, which is the same 
                    as saying through shrinking from toil and pain. These cases 
                    are perfectly simple and easy to distinguish. In a free hour, 
                    when our power of choice is untrammelled and when nothing 
                    prevents our being able to do what we like best, every pleasure 
                    is to be welcomed and every pain avoided. But in certain 
                    circumstances and owing to the claims of duty or the obligations 
                    of business it will frequently occur that pleasures have to be 
                    repudiated and annoyances accepted. The wise man therefore always 
                    holds in these matters to this principle of selection: he rejects 
                    pleasures to secure other greater pleasures, or else he endures 
                    pains to avoid worse pains.</p>

            </div>

            <div className={styles.roadMapImageContent}>

                <img className={styles.heheImage} src="/images/hehe.png" alt="hehe"/>

                <img className={styles.plzImage} src="/images/plz.png" alt="plz"/>

                <img className={styles.wastedImage} src="/images/wasted.png" alt="wasted"/>

                <img className={styles.wtfImage} src="/images/wtf.png" alt="wtf"/>

            </div>

        </div> 

    )
    
}
