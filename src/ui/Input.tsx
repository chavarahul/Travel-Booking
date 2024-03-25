import React from 'react'

const Input = ({type,placeholder,className,id=undefined,step=undefined,register}:any) => {
    const def = "text-slate-400 rounded-md w-2/3 outline-none p-2"
  return (
    <div>
        <input type={type} className={className? className : def} placeholder={placeholder}  step={step} id={id} {...register}/>
      
    </div>
  )
}

export default Input
