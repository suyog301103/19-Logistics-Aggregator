import React from 'react'
import Card from './cargoLists/card'
import data from '../data'

function cardList() {
    return (
        <div>
          {data.map(item => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      );
}

export default cardList