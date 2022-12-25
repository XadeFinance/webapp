import React from 'react'
import styles from './Main.module.css'
import { style } from '@mui/system'
import Slider from '@mui/material/Slider';
import { useWeb3Auth } from "../../../services/web3auth";
import { ethers } from "ethers";
import balanceSheet from "./balancesheet.sol/balanceSheet.json";
import Web3 from "web3";


export default function Main(props : any) {
    const  {provider}  = useWeb3Auth();
    const web3 = new Web3(provider as any);
    const contract = new ethers.Contract( "0x667719F1D1717f1233D5D68aB77FEF947Da4E733" , balanceSheet.abi , provider as any );
    
    //  await contract.totalAllocPoint()
    /*


//   Use code from the above Initializing Provider here
// */

// // web3 is const web3 = new Web3(web3authProvider); from above.

// // Get user's Ethereum public address
// const fromAddress = (await web3.eth.getAccounts())[0];

// const destination = "0x7aFac68875d2841dc16F1730Fba43974060b907A";
// const amount = web3.utils.toWei(1); // Convert 1 ether to wei

// // Submit transaction to the blockchain and wait for it to be mined
// const receipt = await web3.eth.signTransaction({
//   from: fromAddress,
//   to: destination,
//   value: amount,
//   maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
//   maxFeePerGas: "6000000000000", // Max fee per gas
// });
     
    async function maturity(){
       const maturityCheck = contract.checkMaturity(); // Calling a function from the smart contract
        let currentMaturity = await maturityCheck; // Waiting for function to be executed
        console.log(currentMaturity);
      }

    maturity();
    
    const mainAccount=props.account;
    console.log("mainAccount===",mainAccount);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    const month = months[d.getMonth()];
    const day = d.getDate();
    const year = d.getFullYear();

    const date = month + " " + day + ", " + year;

    return (
        <>
        <div>
            <div className={styles.heading}>Your Savings</div>

            <div className = {styles.boxWrap}>
                <div className = {styles.firstWrap}>
                <div className = {styles.boxA}>
                    <div className  = {styles.topSection}>
                        Total amount deposited
                    </div>

                    <div className = {styles.amountDep}>
                        $0.0
                    </div>

                    <button style = {{'color': '#5566FF'}}className = {styles.rightBottom}>
                        Coming soon
                    </button>
                </div>
                <div className = {styles.boxB}>
                    <div className  = {styles.topSection}>
                        Total Interest earned
                    </div>

                    <div className = {styles.amountInterest}>
                        $0.0
                    </div>

                    {/* <button style = {{'color': '#E24949'}} className = {styles.rightBottom}>
                        Coming soon
                    </button> */}
                </div>
                </div>
                <div className = {styles.boxC}>
                    <div className  = {styles.topSection}>
                        Annual Percentage Yield
                    </div>

                    <div className = {styles.yieldAmount}>
                        <p className = {styles.first}>7.1%</p>
                        <p className = {styles.second}>{date}</p>
                    </div>  

                    <div className = {styles.savingsRate}>
                    <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}