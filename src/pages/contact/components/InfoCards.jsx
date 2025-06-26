import React from 'react'

const InfoCards = ({data}) => {
  return (
    <div onClick={() => window.open(data.link, '_blank')} className='w-[60vh] h-[4vh] gap-[1vh] cursor-pointer hover:bg-[#1E293B] rounded-[0.7vh] flex items-center'>
        {data.icon}
        <p className='text-[#94A3B8] text-[1.6vh]'>{data.name}</p>
        <p className=' text-[1.6vh] text-white'>{data.text}</p>
    </div>
  )
}

export default InfoCards