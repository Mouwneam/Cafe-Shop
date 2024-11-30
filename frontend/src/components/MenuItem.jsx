import React from 'react'

const MenuItem = (props) => {


  return (
    <div className='flex justify-center items-center gap-10 mt-20 max-lg:flex-col'>
        <div className='   rounded-xl object-cover'>
            <img 
                src={props.data.img} 
                alt=""
                className='h-[400px] w-[400px] rounded-full object-cover' 
            />
        </div>
        <div className='bg-gray-100 p-20 max-xl:p-5 '>
            {props.data.list.map((list, index) => (
                <div key={index} className='my-8'> 
                    <p className='font-bold'>{list.name}  ${list.price}</p>
                    <p className='font-thin text-gray-500 text-sm'>{list.detail}</p>
                    <p></p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MenuItem
