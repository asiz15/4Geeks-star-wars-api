import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../context/DataContext'

export const CharacterCard = ({ character }) => {

  const { favorites, setFavorites, thumbnails } = useContext(DataContext)

  const addToFavorites = () => {
    const arr = [...favorites]
    arr.push(character)
    setFavorites(arr)
  }

  const getThumbnail = () => {
    const thumbnail = thumbnails.find(thumb => thumb.name == character.name)

    return thumbnail ? thumbnail.url : null
    
  }

  return (
    <article className="flex flex-col shadow-md w-100 mb-5 bg-gray-800 rounded-lg">
          <img src={`${getThumbnail()}`} style={{height: '140px', objectFit: 'cover' }} className="rounded-lg rounded-br-none rounded-bl-none"/>
          <div className="p-3">
            <h5 className="text-xl font-black">{ character.name }</h5>
          <div className="w-full mt-5 flex flex-row justify-between">
            <Link to={`/character/${character.uid}`}>
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
