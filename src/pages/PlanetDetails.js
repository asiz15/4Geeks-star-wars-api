import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { DataContext } from '../context/DataContext'

export const PlanetDetails = () => {
  let { id } = useParams()
  const {planetBgs} = useContext(DataContext)
  const [loading, setLoading] = useState(false)
  const [planet, setPlanet] = useState(null)
  const getBackground = () => {
    const background = planetBgs.find(bg => bg.uid == id)

    return background ? background.url : null
  }
  const getInfo = () => {
    axios.get(`https://www.swapi.tech/api/planets/${id}`)
      .then(res => {
        console.log(res)
        setLoading(false)
        setPlanet(res.data.result)

      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }
  useEffect(() => {
    setLoading(true)
    getInfo()
  }, [])
  return (
    <div className="planet-profile flex justify-center items-center text-center w-100" style={{backgroundImage: `url(${getBackground()})`}}>
      <div className="overlay"></div>
      <div style={{position: 'relative', zIndex: 999}}>
      <h2 className="text-6xl font-extrabold mt-5">{planet?.properties.name}</h2>
      <p className="mt-3 text-lg">"{ planet?.description }"</p>
      <div className="grid grid-cols-4 w-100 mt-10">
        <div className="">
          <span>Gravity: { planet?.properties?.gravity }</span>
        </div>
        <div>
          <span>Population:{ planet?.properties?.population }</span>
        </div>
        <div>
          <span>Terrain:{ planet?.properties?.terrain }</span>
        </div>
        <div>
          <span>Climate: { planet?.properties?.climate }</span>
        </div>
        <div>
          <span>Surface Water: { planet?.properties?.surface_water }</span>
        </div>
        <div>
          <span>Orbital period: { planet?.properties?.orbital_period }</span>
        </div>
        <div>
          <span>Rotation pediod: { planet?.properties?.rotation_period }</span>
        </div>
        <div>
          <span>Diameter: { planet?.properties?.diameter }</span>
        </div>
      </div>
      </div>
      
    </div>
  )
}
