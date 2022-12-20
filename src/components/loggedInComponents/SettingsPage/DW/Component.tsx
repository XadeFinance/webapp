import React from 'react'
import styles from './Main.module.css'
import { RiArrowUpDownLine } from "react-icons/ri";
import { CgProfile } from 'react-icons/cg'
import { BiTransferAlt, BiSupport, BiHelpCircle } from 'react-icons/bi'
import { Button } from '@mui/material';
import { FiLogOut } from 'react-icons/fi'


const MainComponent = () => {
    const [sidebar, setSidebar] = React.useState(false);
    function copyAddr(){
      navigator.clipboard.writeText("0xabcd...123");
      alert("Address copied");   
      }
    const showSidebar = () => setSidebar(!sidebar);
  
    return (
     
        <>
        
            <div className={styles.navCenter}>
                <br /> <br />
                {/* <div className={styles.header + " " + styles.AA}>
                    <p>
                        <FcSettings />
                    </p>

                    <p>
                        Settings
                    </p>
                </div> */}
                <div className={styles.component + " " + styles.A} >
                    <p style={{color:"white"}} className = {styles.logo}>
{/*}
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="225.000000pt" height="225.000000pt" viewBox="0 0 225.000000 225.000000"
style={{color:"white"}} preserveAspectRatio="xMidYMid meet" fill="#ffffff">

<g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path style={{color:"white"}} fill="#ffffff" d="M1015 1960 c-118 -25 -245 -97 -315 -178 -64 -74 -118 -193 -132
-290 -11 -74 -10 -84 5 -99 30 -30 51 -6 59 66 14 125 64 227 150 307 193 178
469 179 662 3 49 -45 107 -130 121 -176 6 -23 5 -23 -83 -23 -98 0 -114 -8
-114 -56 0 -37 215 -254 252 -254 37 0 253 217 253 254 0 49 -17 56 -123 56
l-98 0 -42 86 c-67 139 -189 243 -337 290 -59 18 -204 26 -258 14z m695 -545
l-85 -85 -83 82 -83 83 163 5 c90 3 165 4 167 2 3 -1 -33 -41 -79 -87z"/>
<path style={{color:"white"}} fill="#ffffff" d="M515 1238 c-59 -34 -87 -89 -82 -161 2 -40 10 -66 26 -88 13 -17 21
-31 19 -33 -1 -1 -15 -8 -30 -15 -42 -22 -105 -89 -130 -140 -29 -59 -37 -155
-14 -164 29 -11 44 4 51 51 14 95 57 158 136 197 56 29 149 34 203 11 78 -33
141 -115 153 -201 6 -49 22 -69 46 -59 23 9 27 29 17 85 -18 95 -84 185 -168
228 l-23 12 21 26 c59 75 40 185 -43 247 -42 31 -132 33 -182 4z m141 -59 c25
-13 54 -60 54 -89 0 -53 -57 -110 -110 -110 -53 0 -103 53 -103 109 0 80 82
127 159 90z"/>
<path style={{color:"white"}} fill="#ffffff" d="M1499 1147 c-24 -13 -57 -42 -73 -65 -54 -77 -45 -212 19 -272 l24
-22 -48 -25 c-104 -51 -190 -167 -211 -286 -14 -75 -7 -99 28 -95 25 3 28 8
34 61 15 116 83 214 187 264 49 24 68 28 146 28 75 0 97 -4 135 -24 123 -66
172 -139 195 -294 6 -34 9 -38 33 -35 23 3 27 8 30 41 10 120 -91 280 -213
339 -42 20 -58 38
{*/}
<svg style={{width:"5rem"}}version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900.000000pt" height="512.000000pt" viewBox="0 0 900.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path style={{color:"white"}} fill="#ffffff" d="M3130 5064 c-330 -58 -560 -295 -600 -616 -16 -128 13 -293 68 -396
l18 -32 -126 -128 c-144 -147 -234 -269 -319 -433 -113 -216 -167 -422 -178
-676 l-6 -153 1228 0 1228 0 -6 148 c-9 214 -44 378 -118 561 -90 219 -240
433 -427 607 -64 60 -74 74 -64 87 25 30 72 178 82 260 17 139 -12 286 -83
422 -45 86 -183 220 -272 267 -105 54 -196 79 -305 83 -52 2 -106 2 -120 -1z
m252 -241 c199 -73 335 -283 314 -489 -12 -122 -74 -246 -160 -320 -22 -20
-75 -53 -116 -73 -74 -35 -77 -36 -200 -36 -123 0 -126 1 -200 36 -91 44 -146
90 -194 164 -185 277 -50 636 274 731 65 19 211 12 282 -13z m-467 -1083 c117
-57 196 -73 335 -67 97 3 128 9 199 35 46 17 117 54 158 82 l74 51 51 -46
c256 -230 443 -574 483 -892 l7 -53 -1001 0 c-971 0 -1001 1 -1001 19 0 49 34
206 65 298 75 225 206 428 394 610 l74 72 41 -35 c23 -20 77 -53 121 -74z"/>
<path style={{color:"white"}} fill="#ffffff" d="M4455 4591 c-41 -18 -60 -51 -60 -102 0 -39 5 -54 27 -76 26 -25 34
-27 151 -34 300 -18 546 -100 797 -266 137 -92 303 -253 397 -386 120 -171
213 -381 252 -573 31 -157 33 -168 18 -157 -6 5 -66 52 -132 104 -112 88 -122
94 -166 94 -80 0 -124 -63 -99 -139 9 -28 51 -64 248 -212 130 -97 251 -188
268 -201 l30 -23 218 272 c216 267 218 271 213 310 -8 59 -49 98 -103 98 -53
0 -70 -14 -169 -138 -44 -56 -82 -101 -85 -101 -3 -1 -7 11 -8 27 -4 59 -36
190 -69 291 -204 616 -732 1077 -1365 1191 -127 23 -333 35 -363 21z"/>
<path style={{color:"white"}} fill="#ffffff" d="M5675 2470 c-85 -15 -170 -46 -242 -86 -81 -45 -204 -165 -251 -246
-74 -126 -109 -293 -92 -435 10 -81 49 -206 76 -249 13 -19 6 -28 -99 -135
-62 -63 -143 -154 -180 -204 -212 -287 -327 -630 -327 -980 l0 -85 1220 0
1220 0 0 84 c0 450 -176 861 -511 1194 l-102 102 31 68 c19 40 38 107 48 165
58 346 -155 687 -490 784 -90 26 -226 37 -301 23z m207 -211 c136 -28 267
-129 328 -251 107 -219 27 -497 -178 -622 -196 -118 -456 -82 -606 85 -166
185 -162 469 9 648 117 122 282 174 447 140z m-526 -1030 c57 -45 162 -96 250
-120 66 -18 97 -21 203 -17 110 4 137 9 210 36 46 17 116 54 157 81 l73 50
108 -113 c237 -246 381 -529 418 -824 l7 -52 -997 0 -997 0 7 53 c40 309 177
584 414 829 57 60 105 108 106 108 1 0 20 -14 41 -31z"/>
<path style={{color:"white"}} fill="#ffffff" d="M2426 2129 c-242 -290 -244 -294 -211 -359 18 -34 45 -51 84 -52 52
-2 94 30 180 137 47 58 86 103 88 101 2 -2 15 -58 28 -123 140 -687 688 -1232
1382 -1372 140 -29 335 -44 385 -31 77 21 102 121 44 178 -23 24 -37 27 -175
39 -241 20 -418 69 -611 169 -439 228 -742 641 -824 1124 -8 47 -13 86 -12 88
2 1 59 -41 127 -94 67 -53 135 -100 151 -105 58 -16 123 20 134 76 12 68 -7
88 -277 295 -139 107 -256 196 -260 198 -4 2 -108 -119 -233 -269z"/>
</g>
</svg>
                    </p>

                <div>
                    <p className = {styles.heading}>
                      Xade P2P
                    </p>

                    <p className={styles.content}>
                    Convert your Fiat Currency to stable coins via our secure and innovative peer to peer exchange model.Coming Soon.
                    </p>
                </div>
                </div>
                <hr className = {styles.hr}></hr>
                <div className={styles.component + " " + styles.B}>
                    <p className ={styles.logo}>
                    <RiArrowUpDownLine />
                    </p>

                    <div>
                        <p className = {styles.heading}>
                          <a href="/institutional-ramps" style={{"color":"white", "textDecoration":"none"}}>Institutional Ramps</a>
                        </p>

                        <p className={styles.content}>
                        Get the best rates to exchange your Fiat for stablecoins pegged to Fiat via our ramp aggregator.Coming Soon
                        </p>
                    </div>
                </div>
                {/* <hr className = {styles.hr}></hr> */}
              {/* <div className={styles.component + " " + styles.C}>
                    <p className = {styles.logo}>
                        <BiSupport />
                    </p>

                    <div>
                        <p className = {styles.heading}>
                            Help and Support
                        </p>

                        <p className={styles.content}>
                            Customer support and your queries
                        </p>
                    </div>
              </div> */}
              <hr className = {styles.hr}></hr>
              
           </div>
        </>
    )
}


export default MainComponent;
