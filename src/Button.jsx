import React from 'react'
import './button.css'

const Button = ({btncolor , name , color}) => {

    
  return (
    <div className='btn' style={{backgroundColor : btncolor  }} onClick={()=> color(btncolor)} ><p>{name}</p></div>
  )
}

export default Button