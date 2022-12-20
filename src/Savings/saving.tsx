import React, { useEffect, useState } from 'react'
import styles from './saving.module.css'



export default function Component() {
    const [count, updateCounter] = useState(0);
    const counter = (minimum, maximum) => {
        for (let count = minimum; count <= maximum; count++) {
            setTimeout(() => {
                updateCounter(count);
            }, 2000);
        }
    }

    useEffect(() => {
        counter(0, 9);
    }, [])

    return (
        <div className={styles.center}>
            <div className={styles.container}>
                {/* <CarouselCardSaving /> */}



                <div className={styles.box}>


                    <div className={styles.rectangle} id="6">
                        <div className={styles.stableInterest}>
                            {count}.1%

                        </div>
                        <div className={styles.textHolder}>
                            Stable Deposit Rate
                        </div>
                    </div>

                </div>

                <div className={styles.rectangle} id="6">

                    <div className={styles.textHolder}>
                        <div className={styles.holding}>
                            Your holding total value
                        </div>

                        <br></br> $0.000
                        <br></br><br></br><br></br>

                        <div className={styles.holding}>
                            Total Deposit
                        </div>
                        <br></br>$0.000
                    </div>
                </div>

                {/* <div className={styles.element}><img style={{ "width": "90%" }} src={process.env.PUBLIC_URL + `/images/XADE_COMING_SOON.png`} /></div> */}
            </div>

        </div>




   )
}
