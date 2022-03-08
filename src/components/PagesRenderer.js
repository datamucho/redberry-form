import React, { useState } from 'react'
import WhoInput from './InputPages/WhoInput'
import WhoInfo from './InfoPages/WhoInfo'
import SkillsInput from './InputPages/SkillsInput'
import SkillsInfo from './InfoPages/SkillsInfo'
import AboutInput from './InputPages/AboutInput'
import AboutInfo from './InfoPages/AboutInfo'
import CovidInput from './InputPages/CovidInput'
import CovidInfo from './InfoPages/CovidInfo'
import Submit from './Submit'
import axios from 'axios'


const PagesRenderer = ({pageIndex, increasePageIndex, decreasePageIndex}) => {
  const [fname, setFname] = useState(null)
  const [lname, setLname] = useState(null)
  const [email, setEmail] = useState(null)
  const [skills, setSkills] = useState([])
  const [phone, setPhone] = useState(null)
  const [workPref, setWorkPref] = useState(null)
  const [hadCovid, setHadCovid] = useState(null)
  const [hadCovidAt, setHadCovidAt] = useState(null)
  const [vaccinated, setVaccinated] = useState(null)
  const [vaccinatedAt, setVaccinatedAt] = useState(null)
  const [devtalk, setDevtalk] = useState(null)
  const [devtalkTop, setDevtalkTop] = useState(null)
  const [special, setSpecial] = useState(null)



  const submit = ()=>{
    increasePageIndex();
    axios.post('https://bootcamp-2022.devtest.ge/api/application', {
      "token": "8dd1198d-c45a-4c9d-a06e-6f6d923c5aa1",
      "first_name": fname,
      "last_name": lname,
      "email": email,
      "phone": phone,
      "skills": skills,
      "work_preference": workPref,
      "had_covid": hadCovid,
      "had_covid_at": hadCovidAt,
      "vaccinated": vaccinated,
      "vaccinated_at": vaccinatedAt,
      "will_organize_devtalk": devtalk,
      "devtalk_topic": devtalkTop,
      "something_special": special
    }
    )
    .then(response =>
      console.log(response)
    )
    .catch(error =>
      console.log(error)
    );
  }

  return (    
    <div>
      {
        pageIndex === 1?
        <div className='page'>
          <WhoInput
            increasePageIndex={increasePageIndex}
            decreasePageIndex={decreasePageIndex}
            handleFname={(name)=> setFname(name)}
            handleLname={(name)=> setLname(name)}
            handleEmail={(email)=> setEmail(email)}
            handlePhone={(phone)=> setPhone(phone)}
          />
          <WhoInfo/> 
        </div>
        : pageIndex === 2?
        <div className='page'>
          <SkillsInput
            increasePageIndex={increasePageIndex}
            decreasePageIndex={decreasePageIndex}
            handleSkills={(skills) => setSkills(skills)}
          />
          <SkillsInfo/> 
        </div>
        : pageIndex === 3?
       <div className='page'>
          <CovidInput
            increasePageIndex={increasePageIndex}
            decreasePageIndex={decreasePageIndex}
          />
          <CovidInfo/> 
        </div>
        : pageIndex === 4?
        <div className='page'>
          <AboutInput
            increasePageIndex={increasePageIndex}
            decreasePageIndex={decreasePageIndex}
          />
          <AboutInfo/> 
        </div>
        : <Submit
          decreasePageIndex={decreasePageIndex}
          submit={submit}
        />
      }
           
    </div>
  )
}

export default PagesRenderer