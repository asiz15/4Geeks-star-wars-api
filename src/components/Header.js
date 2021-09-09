import React from 'react'
import { Favorites } from './Favorites'

export const Header = () => {
  return (
    <header className="w-full bg-gray-300">
      <div className="flex flex-row justify-between items-center w-10/12 mx-auto h-20">
        <img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png" width="110" />
        <Favorites />
      </div>
    </header>
  )
}
