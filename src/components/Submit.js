import React from 'react'

const Submit = ({decreasePageIndex, submit}) => {
  return (
    <div className='submit-page'>
      <button className="start-btn" onClick={submit}>Submit</button>
      <button className="apps-btn" onClick={decreasePageIndex}>go back</button>
    </div>
  )
}

export default Submit