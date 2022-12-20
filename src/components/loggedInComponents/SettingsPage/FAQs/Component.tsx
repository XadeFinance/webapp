import React from 'react'
import styles from './Main.module.css'
import { LiveChatWidget } from "@livechat/widget-react"

const MainComponent = () => {
    return (
        <>
      <div id="FAQ-Section" className={styles.faqs}>
        <div className={styles.faqmain}>Frequently asked questions</div>
        <div className={styles.faqbox}>
          <div className={styles.faqhead}>What is Xade?</div>
          <div className={styles.faqcontent}>
            Xade is the one stop solution for all your finances where all
            banking services are provided in a better,permissionless and
            efficient manner.
          </div>
        </div>
        <div className={styles.faqbox}>
          <div className={styles.faqhead}>How safe is Xade?</div>
          <div className={styles.faqcontent}>
            Xade is compeletely non-custodial and decentralised where all
            activity appears on chain. All the smart contracts are certified and
            audited.
          </div>
        </div>
        <div className={styles.faqbox}>
          <div className={styles.faqhead}>How is Xade different from banks?</div>
          <div className={styles.faqcontent}>
            Xade is compeletely autonomus with no human involvement while
            remaining compeletely non-custodial and on chain which makes us more
            efficient and accessible.
          </div>
        </div>
        <div className={styles.faqbox}>
          <div className={styles.faqhead}>
            How is Xade different from DeFi protocols?
          </div>
          <div className={styles.faqcontent}>
            Xade provides an easy to use and familiar user experience of a
            neobank powered by DeFi Protocols which are created to mirror
            financial services in a sustainable manner.
          </div>
        </div>
        <div className={styles.faqbox}>
          <div className={styles.faqhead}>What is Xade V0?</div>
          <div className={styles.faqcontent}>
            XADE V0 is a test launch for Xade Finance to get feedback about the
            user experience and test our infrastracture in real world
            situations.
          </div>
        </div>
      </div>
      <LiveChatWidget license = '14843754'/>
        </>
    )
}


export default MainComponent;