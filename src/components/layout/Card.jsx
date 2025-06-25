

const Card = ({children}) => {
  return (
    <div className='w-[100%] h-[5vh] gap-[1vh] bg-[#24262B] rounded-[0.7vh] flex justify-center items-center'>
        {children}
    </div>
  )
}

export default Card