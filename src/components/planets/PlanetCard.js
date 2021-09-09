import React from 'react'
import { Link } from 'react-router-dom'

export const PlanetCard = ({ planet }) => {
  return (
    <article className="flex flex-col shadow-md w-1/6 mb-5" style={{minWidth: '300px'}}>
          <img src="https://via.placeholder.com/350x200" />
          <div className="p-3">
            <h5 className="text-xl">{planet.name}</h5>
            <ul >
              <li>Gender</li>
              <li>Hair color</li>
              <li>Eye color</li>
              
            </ul>
          <div className="w-full mt-5 flex flex-row justify-between">
            {/* <Link to={`/character/${character.uid}`}>
            <button className="bg-green-400 py-2 px-3 text-white shadow-lg">Learn more</button>
            </Link> */}
            <button className="bg-blue-400 py-2 px-3 text-white shadow-lg">3</button>
          </div>
          </div>
      </article>
  )
}
