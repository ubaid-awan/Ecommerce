import React from 'react'
import './Newcolection.css'
import New_Colection from '../Assets/new_collections'
import Item from '../Item/Item'

const Newcolection = () => {
  return (
    <div className='Newcolection'>
      <h1>NEW COLLECTION</h1> <hr/>
      <div className="Newcolection_item">
      {
        New_Colection.map(
          (item, index) => {
            return <Item Key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
        )
      }
      </div>
    </div>
  )
}

export default Newcolection