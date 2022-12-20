import React, { useEffect } from "react";
import styles from './Trade.module.css'
import './leverage.css'
import Popup from 'reactjs-popup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom'
import Modal from '@mui/material/Modal';
import Slider from '@mui/material/Slider';
import Contracts from '../../../constants'
import { useNavigate } from 'react-router-dom'
import { openPosition } from '../../../functions'
import { Slide } from "@mui/material";
import { BiArrowBack } from 'react-icons/bi'
// import Button from '@mui/material/Button';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#000',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function Trade() {
    let navigate = useNavigate();
    const params:any = useParams();
    let addr = parseInt(params.addr)
    if(!(addr >= 1 && addr <= 5)) 
      addr = 1;
 var options = ["btc","tsla","sona","eth","euro"] 
    const contract = Contracts[addr-1]
    let [marketLS, setMarketLS] = React.useState('L');
    let [leverage, setLeverage] = React.useState(5);
    let [buyState, setBuyState] = React.useState(true);
    let [amount, setAmount] = React.useState([0, 0, 0]);
    let [exchange, setExchange] = React.useState('23423');    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    var xhr2 = new XMLHttpRequest();
    xhr2.onreadystatechange=function(){
    if(xhr2.readyState==XMLHttpRequest.DONE){
    setExchange(xhr2.responseText)
    }
    }

    function valuetext(value: number) {
        setLeverage(value);
        return `${value}°C`;
    }

    useEffect(() => {
        const interval = setInterval(() => {
          var xhr3 = new XMLHttpRequest();
          xhr3.onreadystatechange=function(){
            if(xhr3.readyState==XMLHttpRequest.DONE){
              let yes;
              try {
                yes = parseFloat(xhr3.responseText);
            } catch {
                yes = false;
            }
              if(yes != false) {
                setExchange(xhr3.responseText)
              }
            }
              }
          xhr3.open('GET', `https://price.api.xade.finance/${options[addr-1]}`)
          xhr3.send()
        }, 20000);
        return () => clearInterval(interval);
      }, []);
    xhr2.open('GET', `https://price.api.xade.finance/${options[addr-1]}`)
    xhr2.send()

    function setPosition() {
        // location.reload()
        if(amount[0] == 0)
            return;

        let side = '';
        if(marketLS == 'L') side = 'BUY';
        else if(marketLS == 'S') side == 'SELL';
        else return;
        
        openPosition('AMM_ADDRESS', side, amount[0].toString(), leverage.toString(), amount[1].toString())
        // AMM_ADDRESS -> address of the specified contract
    }

    return (
        <>
        <div className = {styles.tradeAlign}>
        <div>
            <div className = {styles.market_ls}>
                <button style = {{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'}} className = {styles.long + " " + ((marketLS === 'L')? styles.longSelected: '')} onClick = {() => {setMarketLS('L')}}>
                    Long
                    <img alt = 'long' className = {styles.longMoji}src = {process.env.PUBLIC_URL + `/images/icons/long.svg`}/>
                    
                </button>


                <button style = {{'display': 'flex','justifyContent': 'center', 'alignItems': 'center'}}className = {styles.short + " " + ((marketLS === 'S')? styles.shortSelected: '')} onClick = {() => {setMarketLS('S')}}>
                    Short
                    <img className = {styles.shortMoji} alt = 'short'  src = {process.env.PUBLIC_URL + `/images/icons/short.svg`}/>
                    &nbsp;                </button>
            </div>

            <div style = {{'justifyContent': 'space-around', 'marginTop': '0.5em'}}className = {styles.center}>
                <div className={styles.priceSection}>
                    <div className={styles.headingPrice}>Price</div>
                    <input style = {{'maxWidth': '100%'}} className={styles.inputPrice} placeholder = {exchange}></input>
                </div>
                <div className={styles.slippageSection}>
                    <div className={styles.slippagePrice}>Slippage</div>
                    <div className = {styles.inputSlippage} style = {{'display': 'flex'}}><p contentEditable  = "true">1</p><p>%</p></div>
                </div>
            </div>
            <div className={styles.center}>
                <div className = {styles.conversion + " " + ((buyState)?(styles.conversion_buy):(styles.conversion_sell))}>
                    <div className = {styles.conversion_element + " " + styles.conversion_usd}>
                            <div className = {styles.conversion_usd_element}>
                                <button    
                                style = {{
                                    'display': 'flex',
                                    'alignItems': 'center',
                                    'padding': '15%',
                                    'paddingRight': '0',
                                    'justifyContent': 'space-between'
                                }}
                                className = {styles.USD_BUTTON}>
                                    <img src={process.env.PUBLIC_URL + '/images/ticker/dollar.png'} />
                                    <p style = {{'paddingLeft': '1rem', 'fontSize': '1.3rem', 'color': 'snow'}}>USD</p>
                                </button>
                            </div>  
                    <input type = 'number' className = {styles.thisIsFunn} min="0" step = "any" value = {amount[0]} onChange = {(e) => {if(buyState == true) setAmount([parseFloat(e.target.value), parseFloat(e.target.value) / parseFloat(exchange), parseFloat(e.target.value) * 0.003])}}></input>

                    </div>
                    {/* Middle Arrow */}
                        <div onClick = {() => setBuyState(e => !(e))} style = {{'width':'15%', 'height': '25px', 'position':'relative', 'zIndex': '2'}}> <img style = {{'width': '100%', 'height': '100%', 'filter': 'invert(99%) sepia(0%) saturate(517%) hue-rotate(278deg) brightness(116%) contrast(100%)'}} src = {process.env.PUBLIC_URL + '/images/icons/down-arrow.svg'} /> </div>
                    {/* Middle Arrow */}
                    {/* <div className = {styles.conversion_element + " " + styles.conversion_btc }>
                        <div className = {styles.conversion_btc_element}><button className = {styles.BTC_BUTTON}>BTC</button></div>
                    </div> */}

                        <div className = {styles.conversion_element + " " + styles.conversion_btc}>
                           
  <div className = {styles.conversion_usd_element}>
{/* <Button onClick={handleOpen}>Open modal</Button> */}
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
  <div onClick = {() => {navigate(`/investments/${addr}`);handleClose()}}>
                <div style = {{'marginTop': '0', 'color': '#fff', 'height': '100%'}}>
                  <br />
                  <BiArrowBack size = {30} />
                </div>
      </div>
    <p className = {styles.modalHeading}>Select an asset</p>
    <hr style = {{'color': '#fff'}}></hr>
    <div className = {styles.contracts}>
    {
        Contracts.map((selected, index) => {
        return (
        <div className = {styles.conversion_usd_element} style = {{width: '35%'}}> 
              <button onClick={() => {
                    navigate(`/investments/${index + 1}`)
                    handleClose();
              }} 
        style = {{
                    'display': 'flex',
                    'alignItems': 'center',
                    'padding': '15%',
                    'paddingRight': '0  ',
                    'justifyContent': 'space-between'
                }}
                className = {styles.BTC_BUTTON}>
                <img src={process.env.PUBLIC_URL + '/images/ticker/' + selected.ticker} />
            <p style = {{'fontSize': '1.3rem', 'color': 'snow'}}>{selected.symbol}</p>
            </button>  
        </div>
        )
    })}
    </div>
  </Box>
</Modal>                            
    <button onClick={handleOpen} 
        style = {{
                    'display': 'flex',
                    'alignItems': 'center',
                    'padding': '15%',
                    'paddingRight': '0  ',
                    'justifyContent': 'space-between'
                }}
                className = {styles.BTC_BUTTON}>
                <img src={process.env.PUBLIC_URL + '/images/ticker/' + contract.ticker} />
            <p style = {{'paddingLeft': '1rem','fontSize': '1.3rem', 'color': 'snow'}}>{contract.symbol}</p>
            </button>
                            </div>

                            <input className = {styles.thisIsFunn} step = "any" min="0" type = "number"  value = {amount[1]} onChange = {(e) => {if(buyState == false) setAmount([parseFloat(e.target.value) * parseFloat(exchange) , parseFloat(e.target.value), parseFloat(e.target.value) * parseFloat(exchange) * 0.003])} }></input>
                    </div>
                    
                </div>                
            </div>
            </div>

            <div className = {styles.center}>
                <div className = {styles.leverage}>
      <label htmlFor = "lvg" className = {styles.leverage_title}>Leverage   <p>{leverage}x</p></label>
                                        <span><Slider
        aria-label="Temperature"
        defaultValue={1}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10}
        sx = {{
            color: (marketLS == 'L')?'#228C22':'#ff0000',
            height: 6
        }}
      /> </span>

                </div>
            </div>
            <div className = {styles.center } style = {{'marginTop': '0', 'justifyContent': 'center'}}>
                <div className = {styles.order_summary}>
                    <p className = {styles.summary_title}>
                        Summary
                    </p>

                    <div className = {styles.entry_price}>
                        <p style = {{'display': 'flex'}} className = {styles.entry_price_title}>Entry Price &nbsp; </p>
                        <p className = {styles.entry_price_price}>${exchange}</p>
                    </div>

                    <div className = {styles.entry_price}>
                        <p style = {{'display': 'flex'}} className = {styles.entry_price_title}>Index Price &nbsp; </p>
                        <p className = {styles.entry_price_price}>${exchange}</p>
                    </div>

                    <div className = {styles.trading_fee}>
                        <p style = {{'display': 'flex'}} className = {styles.trading_fee_title}>Funding Rate &nbsp;</p>
                        <p className = {styles.trading_fee_price}>0%</p>
                    </div>

                    <div className = {styles.entry_price}>
                        <p style = {{'display': 'flex'}} className = {styles.entry_price_title}>Trading Fees &nbsp;</p>
                        <p className = {styles.entry_price_price}>${amount[2]}</p>
                    </div>

                    <div className = {styles.entry_price}>
                        <p style = {{'display': 'flex'}} className = {styles.entry_price_title}>Position Size &nbsp;</p>
                        <p className = {styles.entry_price_price}>${leverage * amount[0]}</p>
                    </div>



                </div>
            </div>
            <div className = {styles.center} style = {{'marginBottom': '1rem'}}>
                
                    <button   className = {styles.order_confirmation}>Coming soon!</button>
        
            </div>

        </div>

    
        
        
    </>
    )
}  



function float(responseText: string): any {
    throw new Error("Function not implemented.");
}

