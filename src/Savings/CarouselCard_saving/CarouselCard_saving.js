import React, { useEffect, useState } from 'react'
import './CarouselCard_saving.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from '@mui/material/Container';



const CarouselCard = () => {
  const [count, updateCounter] = useState(0);
  const counter = (minimum, maximum) => {
    for (let count = minimum; count <= maximum; count++) {
      setTimeout(() => {
        updateCounter(count);
      }, 2000);
    }
  }

  useEffect(() => {
    counter(0, 9);
  }, [])

  return (
    // <Container fixed>
    <div className="box">


      <div className="rectangle" id="6">
        <div className="stableInterest">
          {count}.1%

        </div>
        <div className='textHolder'>
          Stable Deposit Rate
        </div>
      </div>
      <div className="rectangle" id="6">

        <div className='textHolder'>
          <div className="holding">
            Your holding total value
          </div>

          <br></br> $0.000
          <br></br><br></br><br></br>

          <div className="holding">
            Total Deposit
          </div>
          <br></br>$0.000
        </div>
      </div>
    </div>
    // </Container>
  )
}

export default CarouselCard