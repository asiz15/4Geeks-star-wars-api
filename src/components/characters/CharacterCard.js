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
    <article className="flex flex-col shadow-md w-1/6 mb-5" style={{minWidth: '300px'}}>
          <img src={`${getThumbnail()}`} style={{height: '140px', objectFit: 'cover' }}/>
          <div className="p-3">
            <h5 className="text-xl">{ character.name }</h5>
            <ul >
              <li>Gender</li>
              <li>Hair color</li>
              <li>Eye color</li>
              
            </ul>
          <div className="w-full mt-5 flex flex-row justify-between">
            <Link to={`/character/${character.uid}`}>
            <button className="bg-green-400 py-2 px-3 text-white shadow-lg">Learn more</button>
            </Link>
            <button className="bg-blue-400 py-2 px-3 text-white shadow-lg" onClick={addToFavorites}>3</button>
          </div>
          </div>
      </article>
  )
}
