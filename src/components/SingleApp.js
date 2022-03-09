import React, { useState } from 'react'
import vector from '../Images/Vector (1).svg'

const SingleApp = ({
    name, lastName, email, phone,
    skills, work, covid, covidAt, 
    vaccine, vaccineAt, devtalk, devtalkTop, special }) => {
    
  const [expand, setExpand] = useState(false);

  return (
    <div >
      <div className="single-app">
        1 
        <img 
          src={vector} 
          height={10}
          onClick={() => setExpand(prevState => !prevState)}/>
        </div>
      {expand && <div className="row">
        <div className="personal-info col-6">
          <p>First Name  {name}</p>
          <p>Last Name   {lastName}</p>
          <p>E mail  {email}</p>
          <p>Phone:   {phone}</p>
        </div>
        <div className="skill-set col-6">
          {/* {skills.map((item, idx)=>
            <div key={`id:${idx}`}>
              
            </div>
          )} */
          
          }skills: skill1 skill2
          </div>
          
          <div className="covid-sit col-6">
            aa
            </div>
            <div className="insights col-6">
          aa
            </div>
      </div>}
    </div>
  )
}

export default SingleApp