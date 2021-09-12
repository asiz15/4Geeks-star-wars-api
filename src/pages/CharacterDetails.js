import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { Loading } from '../components/Loading'
import { DataContext } from '../context/DataContext'
import { Link } from 'react-router-dom'
import DVader from '../assets/dvader.png'


export const CharacterDetails = () => {
  let { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [character, setCharacter] = useState(null)

  const {favorites, setFavorites, thumbnails} = useContext(DataContext)

  const getThumbnail = () => {
    const thumbnail = thumbnails.find(thumb => thumb.name == character?.properties.name)

    return thumbnail ? thumbnail.url : null
    
  }

  const addToFavorites = () => {
    const arr = [...favorites]
    arr.push(character)
    setFavorites(arr)
  }

  const planetId = () => {
    const id = character?.properties.homeworld[character?.properties.homeworld.length - 1]
    return id === 0 ? 10 : id
  }

  const getInfo = () => {
    axios.get(`https://www.swapi.tech/api/people/${id}`)
      .then(res => {
        console.log(res)
        setLoading(false)
        setCharacter(res.data.result)

      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }

  useEffect(() => {
    if(character === null){
      setLoading(true)
      getInfo()
    }
  }, [])
  return (
    <div className="w-10/12 mx-auto text-center py-10 h-100 flex flex-col justify-center items-center" style={{minHeight: '70vh'}}>
      <Link to="/" className="self-start">
      {  !loading && 
        <div className=" cursor-pointer text-yellow-400 font-black px-3 py-1"><i className="fa fa-arrow-left" aria-hidden="true"></i>  Go Back</div>
      }
      </Link>
      { loading ?
        <div className="flex flex-col text-center">
          <img src={DVader} width="250px"></img>
          <span className="text-xl  mt-5">Loading data</span>
        </div> :
        <>
        <img src={getThumbnail()} width="330px"/>
      <h2 className="text-6xl font-extrabold mt-5">{ character?.properties?.name }</h2>
      <p className="mt-3 text-lg">"{ character?.description }"</p>
      <div className="p-4  w-4/6 mt-5 mb-5 mx-auto">
        <h5 className="text-xl font-bold">Details</h5>
        <div className="flex flex-row justify-around mt-5">
          <div className="w-1/3 text-left">
            <ul>
              <li>Birth year: { character?.properties?.birth_year }</li>
              <li>Gender: { character?.properties?.gender }</li>
              <li>Height: { character?.properties?.height } cms</li>
              <li>Mass: { character?.properties?.mass }</li>
            </ul>
          </div>
          <div className="w-1/3 text-left">
            <ul>
              <li>Hair color: { character?.properties?.hair_color }</li>
              <li>Eye color: { character?.properties?.eye_color }</li>
              <li>Skin color: { character?.properties?.skin_color }</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
      <Link to={`/planet/${planetId()}`}>
        <button className="bg-blue-600 px-4 mt-5 py-2 text-white">View homeworld</button>
      </Link>
      <button className="bg-indigo-700 px-4 mt-5 py-2 text-white ml-3" onClick={addToFavorites}>Add to favorites</button>
      </div>
        </>
        
      }
    </div>
  )
}
