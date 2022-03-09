import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Pagination from '../Pagination';
import remove from '../../Images/Remove.svg'

const SkillsInput = ({
  increasePageIndex, 
  decreasePageIndex, 
  handleSkills, 
  pageIndex, 
  changePageIndex
}) => {

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
    setSkills((prevState) => [...prevState, {'title': selected, 'exp': years}])
    handleSkills(skills);
  }

  const removeSkill = (id) => {
    setSkills((prevState) => prevState.filter(item => item.id !== id))
    handleSkills(skills)
  }


  return (
    <div className="input-page">
      <h1 className="page-title">Tell us about your skills</h1>
      <div className="inputs">

        <div className="add-skill">
        <select defaultValue={'DEFAULT'} onChange={(event)=> setSelected(event.target.value)}>
          {options.map(item =>  
            <option  
              key={`key:${item.id}`} 
              value={item.title}
            >skill {item.title}</option>
          )}
        </select>

        <input 
          type="number" 
          min={0} 
          placeholder="Experience Duration in Years"
          onChange={(event)=> setYears(event.target.value)}
          />

        <button onClick={handleClick} className="add-lan">Add Programming Language</button> 
        </div>

      {skills.map((item, index)=> 
      <div 
        className="skill-item" 
        key={`id:${index}`}>
        <p>{item.title}</p>
        <p>{item.exp} Years of experience</p>
        <img
          src={remove} 
          onClick={()=>removeSkill(item.id)}
          />
      </div>)}

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

export default SkillsInput
