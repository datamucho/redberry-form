import React from 'react'
import Pagination from '../Pagination'

const WhoInput = ({
            pageIndex,
            changePageIndex,
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

          <input type="text" placeholder="First Name Minimum 2 Character"
          required minlength={2}
          onChange={(event)=>handleFname(event.target.value)}/>

          <input type="text" placeholder="Last Name Minimum 2 Character"
          required minlength={2}
          onChange={(event)=>handleLname(event.target.value)}/>

          <input type="email" placeholder="E Mail"
          onChange={(event)=>handleEmail(event.target.value)}/>

          <input type="phone" placeholder="+995 5____"
          onChange={(event)=>handlePhone(event.target.value)}/>
        </div>
        
        <Pagination 
          pageIndex={pageIndex} 
          increasePageIndex={increasePageIndex} 
          decreasePageIndex={decreasePageIndex} 
          changePageIndex={changePageIndex}
          />
        
    </div>
  )
}

export default WhoInput