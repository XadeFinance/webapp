import React, { ReactNode } from 'react'
import Navbar from './loggedInComponents/NavBar/Navbar'
import "./announcement.css"
import { ImCross } from "react-icons/im";
export const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div style={{overflow:'hidden'}}>
<div classNam="vela announcement-bar" style={{textAlign:"center"}}>RemmiteX V2 and DeriveX V1 go live on 5th Jan 2023 &nbsp; <ImCross style={{fontSize:"3px"}} /></div>
<Navbar></Navbar>
        {children}
     
    </div>
  )
}
