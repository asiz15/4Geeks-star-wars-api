import React, { useContext, useState } from 'react'
import { DataContext } from '../context/DataContext'

export const Favorites = () => {
  const [show, setShow] = useState(false)
  const { favorites, setFavorites } = useContext(DataContext)

  return (
    <div onClick={() => setShow(!show)} className="bg-blue-700 p-3 btn-favorites text-white w-1/6">
      <span>Favorites</span>
      {show && <ul className="bg-indigo-400 p-3 w-full h-50">
        { favorites.map((item,index) => {
          return <li key={index}>{ item.name || item.properties.name }</li>
        }) }
      </ul>}
    </div>
  )
}
