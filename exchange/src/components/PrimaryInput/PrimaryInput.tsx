import React, { useState } from 'react'
import "./primaryinput.css"

interface InputProps {
    title: string;
    className?: string;
    value?: number;
    setValue: Function;
    onClick?: () => void;
}

const PrimaryInput: React.FC<InputProps> = ({title, className, value, setValue}) => {
  return (
    <div className='input'>
        <span className='title'>{title}</span>
        <input placeholder='Enter' value={value ? value : ""} onChange={(e) => {setValue(e.target.value)
        }}></input>
    </div>
  )
}

export default PrimaryInput