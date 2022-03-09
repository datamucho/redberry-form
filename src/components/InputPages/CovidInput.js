import React from 'react'
import Pagination from '../Pagination'

const CovidInput = ({
  increasePageIndex, 
  decreasePageIndex,
  pageIndex,
  changePageIndex,
  handleWorkPref,
  handleCovid,
  handleCovidAt,
  handleVaccine,
  handleVaccineAt 
}) => {
  return (
    <div className="covid-page">
      <h1 className="page-title">Covid Stuff</h1>
      <div className="covid-inputs">

      <div className="covid-section">
        <label>How would you prefer to work?</label><br/>
        <input 
          onChange={()=>handleWorkPref('from_office')}
          type="radio" 
          id='office' 
          value='From sairme office'/>
        <label htmlFor='office'>From sairme office</label><br/>
        <input 
              type="radio" id='home' value='From Home'
              onChange={()=>handleWorkPref('from_home')}
              />
        <label htmlFor='home'>From Home</label><br/>
        <input 
              type="radio" id='hybrid' value='Hybrid'
              onChange={()=>handleWorkPref('hybrid')}
              />
        <label htmlFor='hybrid'>Hybrid</label><br/>
      </div>

      <div className="covid-section">
        <label>Did You contact Covid19</label><br/>
        <input 
              type="radio" id='yes1' value='Yes'
              onChange={()=> handleCovid(true)}
              />
        <label htmlFor='yes1'>Yes</label><br/>
        <input 
              type="radio" id='no1' value='No'
              onChange={()=>handleCovid(false)}
              />
        <label htmlFor='no1'>No</label><br/>
      </div>

      <div className="covid-section">
        <label>When?</label><br/>
        <input 
              type='date'
              onChange={(event)=>handleCovidAt(event.target.value)}/><br/>
      </div>
      

      <div className="covid-section">
        <label>Have you been vaccinated?</label><br/>
        <input type="radio" id='yes2' value='Yes'
          onChange={()=>handleVaccine(true)}
          />
        <label htmlFor='yes2'>Yes</label><br/>
        <input type="radio" id='no2' value='No'
        onChange={()=>handleVaccine(false)}/>
        <label htmlFor='no2'>No</label><br/>
      </div>
      <div className="covid-section">
        <label>When did you get your last vaccine?</label><br/>
        <input type='date' onChange={(event)=>handleVaccineAt(event.target.value)}/>
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

export default CovidInput