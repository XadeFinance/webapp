import React from 'react';
import styles from './mainsection.module.css'
import Overview from './SubComp/Overview'
import Trade from './SubComp/Trade'
import Portfolio from './SubComp/Portfolio'
import MarketTrades from './SubComp/Portfolio/Portfolio2'


export default function Component() {
    let [state, setState] = React.useState(true);

    return (
        
        <>
            <div>  

            <Overview />
            <br />
            <div className={styles.main}>
            <Trade /> 
            <MarketTrades />
            </div>
            <Portfolio />
            
            </div>                      
        </>
    
        )
}   