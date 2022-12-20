import React from 'react'
import styles from './Portfolio.module.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles2 from './../Trade/Trade.module.css'

export default function Portfolio()
{
    return (
        <>
        <div className={styles.center}>

            <div className = {styles.container + " " + styles.container1}> 
                <div style = {{'width': '100%', 'height': '100%'}}>
                <div className = {styles.title}>
                <div className = {styles.head + " " +  styles.g}>Portfolio</div>
                </div>


                <hr style = {{'width': '100%', 'color': 'grey'}}></hr>
                <>
                <div style = {{'visibility': 'visible'}}className = {styles.title + " " + styles.sub}>
                <div className = {styles.subHead2 + " "}>SIZE</div>
                <div style = {{'textAlign':"left"}} className = {styles.subHead2 + " "}>TIME</div>
                <div style = {{'textAlign':"left"}} className = {styles.subHead2 + " "}>REALIZED PNL</div>
                <div style = {{'textAlign':"center"}} className = {styles.subHead2 + " "}>TRADING FEE</div>
                <div style = {{'textAlign':"right"}} className = {styles.subHead2 + " "}>NOTES</div>

                </div>
                <hr style = {{'width': '100%', 'color': 'grey'}}></hr>
                <div className = {styles.title + " " + styles.sub}>
                       <div className = {styles.subHead2 + " "}>SIZE</div>
                <div style = {{'textAlign':"left"}} className = {styles.subHead2 + " "}>35.99</div>
                <div style = {{'textAlign':"left"}} className = {styles.subHead2 + " "}> yes</div>
                <div style = {{'textAlign':"center"}} className = {styles.subHead2 + " "}>yes </div>
                <div style = {{'textAlign':"right"}} className = {styles.subHead2 + " "}>yes</div>
                </div>
                <hr className = {styles.goneCase}style = {{'width': '100%', 'color': 'grey'}}></hr>
                <div className = {styles.title + " " + styles.sub}>
                
                </div>
                <hr className = {styles.goneCase}style = {{'width': '100%', 'color': 'grey'}}></hr>
                <div className = {styles.title + " " + styles.sub}>
                <div style = {{'color': 'green'}} className = {styles.content}>35.99</div>
                <div style = {{'color': 'grey'}}  className = {styles.content + " "}>3.008</div>
                <div style = {{'color': 'white'}} className = {styles.content + " "}>36.99</div>
                </div>
                <div style = {{'width': '100%', 'textAlign': 'center'}}>YOUR ACTIVITY APPEARS HERE</div>
                <hr className = {styles.goneCase}style = {{'width': '100%', 'color': 'grey'}}></hr>
                <div className = {styles.title + " " + styles.sub}>
                <div style = {{'color': 'green'}} className = {styles.content}>35.99</div>
                <div style = {{'color': 'grey'}}  className = {styles.content + " "}>3.008</div>
                <div style = {{'color': 'white'}} className = {styles.content + " "}>36.99</div>
                </div>
                <hr className = {styles.goneCase}style = {{'width': '100%', 'color': 'grey'}}></hr>
                <div className = {styles.title + " " + styles.sub}>
                <div style = {{'color': 'green'}} className = {styles.content}>35.99</div>
                <div style = {{'color': 'grey'}}  className = {styles.content + " "}>3.008</div>
                <div style = {{'color': 'white'}} className = {styles.content + " "}>36.99</div>
                </div>
                </>
                </div>
                
        </div>

        
        </div>
        </>
   );
}