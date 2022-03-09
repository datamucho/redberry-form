import React, {useEffect, useState} from 'react'
import axios from 'axios'
import SingleApp from './SingleApp'

const Applications = () => {
  const [data, setData] = useState([])
  

  useEffect(()=> {
    axios.get('https://bootcamp-2022.devtest.ge/api/applications?token=9ab02592-0cef-44ee-8387-a4e5b130c0dc')
      .then((response) =>{
      setData(response.data);
      console.log(response.data)
      }
      )
      .catch(error =>
        console.log(error)
      );
      }, []);

  return (
    <div>
      <h1 className="apps-heading">Submited Applications</h1>
      {data && data.map((item, idx) => <div className="apps-render">
        <SingleApp 
          key={`id${idx}`}
          name={item.first_name}
          lname={item.last_name}
          email={item.email}
          phone={item.phone}/>
      </div> )} 
    </div>
  )
}

export default Applications