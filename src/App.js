import React, { useState } from 'react'
import Welcome from './components/Welcome'
import PagesRenderer from './components/PagesRenderer'
import Thx from './components/Thx'

const App = () => {
  const [pageIndex, setPageIndex] = useState(0);
  

  const increasePageIndex = ()=>{
    setPageIndex(prevState => prevState + 1);
  }

  const decreasePageIndex = ()=>{
    setPageIndex(prevState => prevState - 1);
  }

 

  return (
    <div>
      {!pageIndex &&
        <Welcome
        increasePageIndex={increasePageIndex}
      />
      }
      {pageIndex && pageIndex < 6 &&
      <PagesRenderer
        decreasePageIndex={decreasePageIndex}
        increasePageIndex={increasePageIndex}
        pageIndex={pageIndex}  
      />}
      {pageIndex === 6 &&
      <div>
      <Thx/>
      {setTimeout(() => {
        setPageIndex(0);
      }, 2000)}
      </div>}
    </div>
  )
}

export default App