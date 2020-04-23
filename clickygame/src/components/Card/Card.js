import React from 'react';
import './Card.css'
export default ({color, handleClick})=>{
    return <button name={color} onClick={(e)=>{handleClick(e.target.name)}} className = 'button' style={{background: color}}/>
}