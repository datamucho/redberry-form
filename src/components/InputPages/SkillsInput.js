import React, {useState, useEffect} from 'react'
import axios from 'axios'
import next from '../../Images/Next.svg'
import prev from '../../Images/Previous.svg'
import balls from '../../Images/balls (1).svg'

const SkillsInput = ({increasePageIndex, decreasePageIndex, handleSkills}) => {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState('Skill')
  const [years, setYears] = useState(0);
  const [skills, setSkills] = useState([]);

  useEffect(()=>{
    const getOptions = async () => {
      const token = {
        token: '8dd1198d-c45a-4c9d-a06e-6f6d923c5aa1'
      }
      try {     
        const response = await axios.get("https://bootcamp-2022.devtest.ge/api/skills", token);
        const data = response.data;
        setOptions(data);
      } catch (err) {
        console.error(err);
      }
    }
    getOptions();
  }, [])

  const handleClick = () => {
    setSkills((prevState) => [...prevState, {title: selected, exp: years}])
    handleSkills(skills);
  }

  const removeSkill = (title) => {
    setSkills((prevState) => prevState.filter(item => item.title !== title))
    handleSkills(skills)
  }


  return (
    <div className="input-page">
      <h1 className="page-title">Tell us about your skills</h1>
      <div className="inputs">
      <select defaultValue={'DEFAULT'} onChange={(event)=> setSelected(event.target.value)}>
        {options.map(item =>  
          <option  
            key={`key:${item.id}`} 
            value={item.title}
          >skill {item.title}</option>
        )}
      </select>
      <input type="number" min={0} placeholder="Experience Duration in Years"
      onChange={(event)=> setYears(event.target.value)}/>
      <button onClick={handleClick}>Add Programming Language</button> 

      {skills.map((item, index)=> 
      <div key={`id:${index}`}>
        <p>{item.title}</p>
        <p>{item.exp} Years of experience</p>
        <button onClick={()=>removeSkill(item.title)}>remove</button>
      </div>)}

      </div>

      <div className="pagination">
        <img onClick={decreasePageIndex} src={prev} height={24}/>
        <img src={balls} height={24}/>
        <img onClick={increasePageIndex} src={next} height={24}/>
      </div>
    </div>
  )
}

export default SkillsInput
