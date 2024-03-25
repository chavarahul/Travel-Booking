import React from 'react'
import ClipLoader from 'react-loader-spinner'
const Button = ({disabled,label,className}:any) => {
    const def = "w-2/3 bg-blue-500 text-white px-4 py-2 ronded-xl disabled:bg-blue-700"
  return (
    <button 
    disabled={disabled}
    className={className?className:def}
    >
           {
            disabled ? "Hlo":label
           }
    </button>
  )
}

export default Button
