import React from 'react'
import next from '../../Images/Next.svg'
import prev from '../../Images/Previous.svg'
import balls from '../../Images/balls.svg'

const WhoInput = ({
            increasePageIndex, 
            decreasePageIndex, 
            handleFname, 
            handleLname, 
            handleEmail, 
            handlePhone}) => {
              
  return (
    <div className="input-page">
        <h1 className="page-title"> Hey, Rocketman, Who are you? </h1>

        <div className="inputs">

          <input type="text" placeholder="First Name"
          onChange={(event)=>handleFname(event.target.value)}/>

          <input type="text" placeholder="Last Name"
          onChange={(event)=>handleLname(event.target.value)}/>

          <input type="email" placeholder="E Mail"
          onChange={(event)=>handleEmail(event.target.value)}/>

          <input type="phone" placeholder="+995 5____"
          onChange={(event)=>handlePhone(event.target.value)}/>
        </div>

      <div className="pagination">
        <img onClick={decreasePageIndex} src={prev} height={24}/>
        <img src={balls} height={24}/>
        <img onClick={increasePageIndex} src={next} height={24}/>
      </div>
        
    </div>
  )
}

export default WhoInput