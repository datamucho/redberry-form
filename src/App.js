import React, { useState } from 'react'
import Welcome from './components/Welcome'
import PagesRenderer from './components/PagesRenderer'
import Thx from './components/Thx'
import Applications from './components/Applications'

const App = () => {
  const [pageIndex, setPageIndex] = useState(0);
  

  const increasePageIndex = ()=>{
    setPageIndex(prevState => prevState + 1);
  }

  const decreasePageIndex = ()=>{
    setPageIndex(prevState => prevState - 1);
  }

  const changePageIndex = (val)=>{
    setPageIndex(val);
  }

 

  return (
    <div>
      {!pageIndex &&
        <Welcome
        increasePageIndex={increasePageIndex}
        setPageIndex={setPageIndex}
      />
      }
      {pageIndex && pageIndex < 6 &&
      <PagesRenderer
        decreasePageIndex={decreasePageIndex}
        increasePageIndex={increasePageIndex}
        pageIndex={pageIndex}
        changePageIndex={changePageIndex}  
      />}
      {pageIndex === 6 &&
      <div>
      <Thx/>
      {setTimeout(() => {
        setPageIndex(0);
      }, 2000)}
      </div>}

      {pageIndex === 7 && <Applications/>}
    </div>
  )
}

export default App