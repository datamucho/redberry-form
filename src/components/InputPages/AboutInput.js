import React from 'react'
import Pagination from '../Pagination'

const AboutInput = ({
  increasePageIndex, 
  decreasePageIndex,
  changePageIndex,
  pageIndex,
  handleDevtalk,
  handleDevtalkTop,
  handleSpecial
}) => {
  return (
    <div className="covid-page">

      <h1 className="page-title">What About You?</h1>

      <div className="covid-inputs">

      <div className="covid-section">
        <label>Would You attend Devtalks and maybe also organize your own</label><br/>
        <input type="radio" value='Yes' onChange={()=>handleDevtalk(true)}/>
        <label>Yes</label><br/>
        <input type="radio" value='No' onChange={()=>handleDevtalk(false)}/>
        <label>No</label><br/>
      </div>

      <div className="about-section">
        <label>What would You speak about at Devtalks</label><br/>
        <input type='text'onChange={(event)=>handleDevtalkTop(event.target.value)}/><br/>
       </div> 

      <div className="about-section">
        <label>Tell us something special</label><br/>
        <input type='text' onChange={(event)=>handleSpecial(event.target.value)}/>
        </div>
      
      </div>
      
      

      <div className="pag-section">
      <Pagination 
          pageIndex={pageIndex} 
          increasePageIndex={increasePageIndex} 
          decreasePageIndex={decreasePageIndex} 
          changePageIndex={changePageIndex}
          />
        </div>
      
    </div>
  )
}

export default AboutInput