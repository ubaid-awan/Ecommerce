import React from 'react'
import "./Popular.css"
import Product_Data from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='Popular'>
      <h1>POPULAR IN WOMEN</h1> <hr/>
      <div className="Popular_item">
      {
        Product_Data.map(
          (item, index) => {
            return <Item Key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
        )
      }
      </div>
    </div>
  )
} 

export default Popular