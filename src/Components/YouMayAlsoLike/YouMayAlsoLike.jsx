import React from 'react'
import './YouMayAlsoLike.css'
import you_like from '../../assets/you_like'
import Item from '../Item/Item'

const YouMayAlsoLike = () => {
  return (
    <div className='you-may-also-like'>
      <hr />
      <h1>YOU MAY ALSO LIKE </h1>
      <hr/>
      <div className="you-may-also-like-item">
        {you_like.map((item,i)=>{
          return(
            <Item
              key={i} 
              id={item.id} 
              name = {item.name}
              price={item.price} 
              image={item.image} 
            />
          )
        })}

      </div>
    </div>
  )
}

export default YouMayAlsoLike
