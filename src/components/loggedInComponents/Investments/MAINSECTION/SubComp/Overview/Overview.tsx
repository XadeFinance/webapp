import React from "react";
import { AdvancedRealTimeChart, ColorTheme } from "react-ts-tradingview-widgets";
import Contracts from '../../../constants'
import styles from './Overview.module.css'
import { useParams } from 'react-router-dom'


export default function Overview() {
    const params:any = useParams();
    let addr = parseInt(params.addr)
    if(!(addr >= 1 && addr <= 5))   
      addr = 1;
    const contract = Contracts[addr-1]
    return (
        <>

        <div  className={styles.setChart}>
        <div  className={styles.Chart}>
        <AdvancedRealTimeChart
            symbol={contract.chart}
            theme={'dark'}
            // eslint-disable-next-line 
            style = "3"
            // locale="fr"
            autosize
            height = '200px'

         />
        </div>

        <div className={styles.center}>
            <div className={styles.aboutCoin}></div>
        </div>
        </div>
        </>
    )
}