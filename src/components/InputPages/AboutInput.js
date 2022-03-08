import React from 'react'
import next from '../../Images/Next.svg'
import prev from '../../Images/Previous.svg'
import balls from '../../Images/balls (3).svg'

const AboutInput = ({increasePageIndex, decreasePageIndex}) => {
  return (
    <div className="input-page">

      <h1 className="page-title">What About You?</h1>

      <div className="inputs">
      <label>Would You attend Devtalks and maybe also organize your own</label>
      <input type="radio" value='Yes'/>
      <input type="radio" value='No'/>

      <label>What would You speak about at Devtalks</label>
      <input type='text'/>

      <label>Tell us something special</label>
      <input type='text'/>
      </div>

      <div className="pagination">
        <img onClick={decreasePageIndex} src={prev} height={24}/>
        <img src={balls} height={24}/>
        <img onClick={increasePageIndex} src={next} height={24}/>
      </div>
      
    </div>
  )
}

export default AboutInput