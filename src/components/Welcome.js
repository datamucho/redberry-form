import React from 'react'
import rocketman from '../Images/rocketman.png'

const Welcome = ({increasePageIndex, setPageIndex}) => {
  return (
    <div className="welcome">
        <h1 className="title">Welcome Rocketeer !</h1>
        <button 
          className="start-btn" 
          onClick={increasePageIndex}
          >Start Questionaire</button>
          
        <button  
              className="apps-btn"
              onClick={() => setPageIndex(7)}
        >See Submited Applications</button>
        <img className="rocketman" src={rocketman} />

        
    </div>



  )
}

export default Welcome