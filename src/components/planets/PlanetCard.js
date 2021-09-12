import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../context/DataContext'

export const PlanetCard = ({ planet }) => {
  const {planetBgs} = useContext(DataContext)
  const addToFavorites = () => {

  }
  const getBackground = () => {
    const background = planetBgs.find(bg => bg.name == planet.name)

    return background ? background.url : null
  }
  return (
    <article className="flex flex-col shadow-md w-100 mb-5 bg-gray-800 rounded-lg">
          <img src={getBackground()} style={{height: '140px', objectFit: 'cover' }} className="rounded-lg rounded-br-none rounded-bl-none"/>
          <div className="p-3">
            <h5 className="text-xl font-black">{ planet.name }</h5>
          <div className="w-full mt-5 flex flex-row justify-between">
            <Link to={`/planet/${planet.uid}`}>
            <button className="bg-yellow-400 text-gray-800 py-2 px-3 text-white shadow-lg rounded-md">Learn more</button>
            </Link>
            <button className="bg-indigo-700 py-2 px-3 text-white shadow-lg rounded-md" onClick={addToFavorites}>
            <i class="fa fa-star" aria-hidden="true"></i>
            </button>
          </div>
          </div>
      </article>
  )
}
