import React from 'react'
import next from '../../Images/Next.svg'
import prev from '../../Images/Previous.svg'
import balls from '../../Images/balls (2).svg'

const CovidInput = ({increasePageIndex, decreasePageIndex}) => {
  return (
    <div className="input-page">
      <h1 className="page-title">Covid Stuff</h1>
      <div className="inputs">

      <label>How would you prefer to work?</label>
      <input type="radio" id='office' value='From sairme office'/>
      <label for='office'>From sairme office</label>
      <input type="radio" id='home' value='From Home'/>
      <label for='home'>From Home</label>
      <input type="radio" id='hybrid' value='Hybrid'/>
      <label for='hybrid'>Hybrid</label>

      <label>Did You contact Covid19</label>
      <input type="radio" id='yes1' value='Yes'/>
      <label for='yes1'>Yes</label>
      <input type="radio" id='no1' value='No'/>
      <label for='no1'>No</label>
      <label>When?</label>
      <input type='date'/>

      <label>Have you been vactinated?</label>
      <input type="radio" id='yes2' value='Yes'/>
      <label for='yes2'>Yes</label>
      <input type="radio" id='no2' value='No'/>
      <label for='no2'>No</label>

      <label>When did you get your last vaccine?</label>
      <input type='date'/>

      </div>
      <div className="pagination">
        <img onClick={decreasePageIndex} src={prev} height={24}/>
        <img src={balls} height={24}/>
        <img onClick={increasePageIndex} src={next} height={24}/>
      </div>
    </div>
  )
}

export default CovidInput