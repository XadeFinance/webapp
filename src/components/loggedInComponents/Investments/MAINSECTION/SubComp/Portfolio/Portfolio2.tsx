import React from 'react'
import styles from './Portfolio.module.css'

export default function Portfolio()
{
    
    return (
        <>
            <div className = {styles.container}>
                <div style = {{'width': '100%', 'height': '100%'}}>
                <div className = {styles.title}>
                <div className = {styles.head + " " +  styles.g}>Market Trades</div>
                <div className = {styles.head + " " +  styles.g}>24H</div>
                </div>
                <hr style = {{'width': '100%', 'color': 'grey'}}></hr>
                <br></br>
                <div style = {{'visibility': 'visible'}} className = {styles.title + " " + styles.sub}>
                <div className = {styles.subHead + " "}>SIZE</div>
                <div style = {{'textAlign':"center"}} className = {styles.subHead + " "}>TIME</div>
                <div style = {{'textAlign':"right"}} className = {styles.subHead + " "}>PRICES</div>
                </div>
                <hr style = {{'width': '100%', 'color': 'grey'}}></hr>
                <div className = {styles.title + " " + styles.sub}>
                <div style = {{'color': 'green'}}className = {styles.content}>35.99</div>
                <div style = {{'color': 'grey'}} className = {styles.content + " "}>3.008</div>
                <div style = {{'color': 'white'}}className = {styles.content + " "}>36.99</div>
                </div>
                <hr className = {styles.goneCase}style = {{'width': '100%', 'color': 'grey'}}></hr>
                <div className = {styles.title + " " + styles.sub}>
                <div style = {{'color': 'green'}}className = {styles.content}>35.99</div>
                <div style = {{'color': 'grey'}} className = {styles.content + " "}>3.008</div>
                <div style = {{'color': 'white'}}className = {styles.content + " "}>36.99</div>
                </div>
                <hr className = {styles.goneCase}style = {{'width': '100%', 'color': 'grey'}}></hr>
                <div className = {styles.title + " " + styles.sub}>
                <div style = {{'color': 'green'}}className = {styles.content}>35.99</div>
                <div style = {{'color': 'grey'}} className = {styles.content + " "}>3.008</div>
                <div style = {{'color': 'white'}}className = {styles.content + " "}>36.99</div>
                </div>
                <div style = {{'width': '100%', 'textAlign': 'center'}}>MARKET TRADES APPEAR HERE</div>

                <hr className = {styles.goneCase}style = {{'width': '100%', 'color': 'grey'}}></hr>
                <div className = {styles.title + " " + styles.sub}>
                <div style = {{'color': 'green'}}className = {styles.content}>35.99</div>
                <div style = {{'color': 'grey'}} className = {styles.content + " "}>3.008</div>
                <div style = {{'color': 'white'}}className = {styles.content + " "}>36.99</div>
                </div>
                <hr className = {styles.goneCase}style = {{'width': '100%', 'color': 'grey'}}></hr>
                <hr className = {styles.goneCase}style = {{'width': '100%', 'color': 'grey'}}></hr>
                <div className = {styles.title + " " + styles.sub}>
                <div style = {{'color': 'green'}}className = {styles.content}>35.99</div>
                <div style = {{'color': 'grey'}} className = {styles.content + " "}>3.008</div>
                <div style = {{'color': 'white'}}className = {styles.content + " "}>36.99</div>
                </div>
                <hr className = {styles.goneCase}style = {{'width': '100%', 'color': 'grey'}}></hr>
                <div className = {styles.title + " " + styles.sub}>
                <div style = {{'color': 'green'}}className = {styles.content}>35.99</div>
                <div style = {{'color': 'grey'}} className = {styles.content + " "}>3.008</div>
                <div style = {{'color': 'white'}}className = {styles.content + " "}>36.99</div>
                </div>
                <div className = {styles.title + " " + styles.sub}>
                <div style = {{'color': 'green'}} className = {styles.content}>35.99</div>
                <div style = {{'color': 'grey'}}  className = {styles.content + " "}>3.008</div>
                <div style = {{'color': 'white'}} className = {styles.content + " "}>36.99</div>
                </div>
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

                <hr className = {styles.goneCase}style = {{'width': '100%', 'color': 'grey'}}></hr>
                </div>
        </div>
        </>
    );
}