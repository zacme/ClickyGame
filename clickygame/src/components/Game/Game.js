import React, {useState} from 'react';
import './Game.css';
import Card from '../Card/Card'

export default ({data})=>{
    const [clicked, setClicked]= useState([])
    const [shuffled, setShuffled] = useState({data:data})
    const handleClick =(data)=>{
        console.log(data)
        if(clicked.includes(data)){
            console.log('you lose')
        }else{
            let temp = clicked;
            temp.push(data)
            setClicked(temp);
            let arr = shuffled.data.sort((a,b)=> Math.random()-.5);
            setShuffled({data:arr});
        }
    }

    return <>
        {shuffled.data.map(a=> <Card color={a} handleClick={handleClick}/>)}
    </>
}