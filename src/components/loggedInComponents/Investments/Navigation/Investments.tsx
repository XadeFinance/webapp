import React from 'react'
import { useState, useEffect } from 'react'
import list from './../constants'
import './Investments.css'
import Web3 from "web3"
import {BsSearch} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";


let date = new Date().toISOString().slice(0, 10)



const DateModule = () => {
  return <h1 className = 'date-investment'>{date.toLocaleString()}</h1>
}

/*
 * Internal data is updated once every 60 secondes. If you want access to the
 * latest information - for instance a real-time oracle quote - you could
 * call forceRefresh.
 */
export   function Investments() { return <></>};

export default function Main() {
  const navigate = useNavigate();

  const [query, setQuery] = useState('');

  
  let [newList, setNewList] = useState(list);

  const web3 = new Web3("https://rpc.ankr.com/eth")
      const aggregatorV3InterfaceABI = [
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "description",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint80", name: "_roundId", type: "uint80" }],
          name: "getRoundData",
          outputs: [
            { internalType: "uint80", name: "roundId", type: "uint80" },
            { internalType: "int256", name: "answer", type: "int256" },
            { internalType: "uint256", name: "startedAt", type: "uint256" },
            { internalType: "uint256", name: "updatedAt", type: "uint256" },
            { internalType: "uint80", name: "answeredInRound", type: "uint80" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "latestRoundData",
          outputs: [
            { internalType: "uint80", name: "roundId", type: "uint80" },
            { internalType: "int256", name: "answer", type: "int256" },
            { internalType: "uint256", name: "startedAt", type: "uint256" },
            { internalType: "uint256", name: "updatedAt", type: "uint256" },
            { internalType: "uint80", name: "answeredInRound", type: "uint80" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "version",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
      ]
  var options = ["0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c","0x1ceDaaB50936881B3e449e47e40A2cDAF5576A4a","0x214eD9Da11D2fbe465a6fc601a91E62EbEc1a0D6","0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419","0xb49f677943BC038e9857d61E7d053CaA2C1734C1"] 
  // let contra
  const [price,setPrice] = useState(['0', '0', '0', '0', '0'])

  for(let i = 0; i < 5; i++)
  {
    const priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, options[i]);
    const roundData = priceFeed.methods
    .latestRoundData()
    .call()
    .then((roundData:any) => {
      // Do something with roundData
      var price2;

      price2 = parseFloat(roundData[1])/(10**8)

      price2 = (price2.toFixed(2)).toString()
      let temp = price;
      temp[i] = price2;
      setPrice(temp)

    })  
  }
  

  // useEffect(() => {
  //   setList(hooks.useRegistrars(SupportedChainId.FANTOM))
  // })
    
    const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
      setQuery(e.currentTarget.value)
      e.preventDefault();
      if(e.currentTarget.value == '')
      {
        setNewList(list)
        return;
      }
      setNewList(list.filter((registrar, index: number) => (registrar.symbol.toLowerCase().includes(e.currentTarget.value.toLowerCase()) || registrar.ticker.toLowerCase().includes(e.currentTarget.value.toLowerCase()))))
  }
  return (
    <>
    <div className = "investments-background">

    </div>
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        margin: '30px 10%',
        justifyContent: 'center',
        fontFamily: "Sora",
      }}
    >
      
      <div className = 'search-bar-center'>

      <DateModule />

        <form className = 'search-bar' onSubmit = {(e: React.SyntheticEvent) => e.preventDefault()} >
          <input value = {query} type="text" onChange = {handleChange} className = 'input-text-investments' placeholder='Search for Crypto, Stocks, Commodities, Forex' />
          <button type="submit" className = 'input-submit-investments' value = ""><BsSearch style = {{'color': 'white'}} /></button>
          </form>
    </div>
      {/* <br /> <br /> <br /> <br />  */}

      <div className='table-main' >
      <table style = {{width: '100%'}}>
        <thead className = "investments-head">
          <tr>
            <td className = "investments-head-image"></td>
            <td className = "investments-head-symbol"><a href = '#'>Symbol</a></td>
            <td className = "investments-head-name"><a href = '#'>Name</a></td>
            <td className = "investments-head-price"><a href = '#'>Price</a></td>
          </tr>
        </thead>
          <br />
        <tbody>
          {((((newList.length > 0 && query != '')) ? newList:list)).map((registrar, index: number) => (
          <>      
            <tr key={index} onClick = {() => {
                navigate(`/investments/${index + 1}`);
            }
            }>

              <td className = "investments-body-image investments-ticker"><img alt = '' src = {process.env.PUBLIC_URL + `/images/ticker/${index+ 1}.png`}/></td>
              <td className = "investments-body-symbol">{registrar.symbol}</td>
              <td className = "investments-body-name">{registrar.name}</td>
              <td className = "investments-body-price">{parseFloat(price[index]).toFixed(2).toString()}</td>
            </tr>
           <br />
          </>
      )) }
        </tbody>
      </table>
      </div>
    </div>
    </>
  )
}
