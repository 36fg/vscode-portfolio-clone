import React from 'react'

const TextConteiner = ({children, className}) => {
  return (
    <div className={` ${className} w-auto flex justify-start gap-[0.7vh]`}>{children}</div>
  )
}

export default TextConteiner