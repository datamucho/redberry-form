import React from 'react'
import next from '../Images/Next.svg'
import prev from '../Images/Previous.svg'
import hotBall from '../Images/Ellipse 5.svg'
import ball from '../Images/Ellipse 1.svg'

const Pagination = ({
    pageIndex, 
    decreasePageIndex, 
    increasePageIndex, 
    changePageIndex}) => {

    const pag = [1,2,3,4,5];
    
    return (
    <div className="pagination">
        <img onClick={decreasePageIndex} src={prev} height={16}/>
          {
            pag.map((item) => {
              if (item > pageIndex) {
                return <img 
                          key={`id:${item}`}
                          onClick={()=>changePageIndex(item)} 
                          src={hotBall} height={16}
                          />
              }
              return <img 
                        key={`id:${item}`}
                        onClick={()=>changePageIndex(item)}
                        src={ball} height={16}
                        />
            })
          }
          <img onClick={increasePageIndex} src={next} height={16}/>
          </div>
  )
}

export default Pagination