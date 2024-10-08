import React from 'react'
import "./primaryinput.css"

interface InputProps {
    title: string;
    className?: string;
    value?: number;
}

const PrimaryInput: React.FC<InputProps> = ({title, className, value}) => {
  return (
    <div className='input'>
        <span className='title'>{title}</span>
        <input placeholder='Enter' value={value ? value : ""}></input>
    </div>
  )
}

export default PrimaryInput