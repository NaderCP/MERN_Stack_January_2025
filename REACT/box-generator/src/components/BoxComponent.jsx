import React from 'react'

const BoxComponent = ({box}) => {
const deleteBox = (index) =>{
  const element = document.getElementById(index);
element.remove();
}
//const box = props;
  return (
    <>
    <div>BoxComponent</div>
    <div className='flex flex-row'>
        {box.map((box,index)=>(
          <div key={index} id={index} className='m-3' style={{
            width: `${box.size}px`,
              height: `${box.size}px`,
              backgroundColor : box.color,         }}>
            <div ><button onClick= {()=>deleteBox(index)} className='"text-red-500 bg-transparent text-xs rounded-full hover:bg-gray-200 focus:outline-none" ' >x</button></div>
          </div>
        ))}
    </div>
    </>
  )
}

export default BoxComponent