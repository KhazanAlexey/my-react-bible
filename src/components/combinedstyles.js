
import React from "react";
import styles from './combinedstyle.module.css';



export function App4 () {
    let isPrimary=true
    let combinedClass=styles.buttonone
    if(isPrimary) combinedClass= `${combinedClass} + ${styles.combinedbutton}`

    return (<>
            <button className={combinedClass}>click</button>
        </>
    )
}
