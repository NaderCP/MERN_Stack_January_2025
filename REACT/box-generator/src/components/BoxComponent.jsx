import React from 'react'

const BoxComponent = ({box}) => {

//const box = props;
  return (
    <>
    <div>BoxComponent</div>
    <div className='flex flex-row'>
        {box.map((box,index)=>(
          <div key={index} className='m-3' style={{
            width: `${box.size}px`,
              height: `${box.size}px`,
              backgroundColor : box.color,         }}>

          </div>
        ))}
    </div>
    </>
  )
}

export default BoxComponent