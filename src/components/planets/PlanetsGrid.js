import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../context/DataContext'
import { PlanetCard } from './PlanetCard'


export const PlanetsGrid = () => {
  const { planets, setPlanets } = useContext(DataContext)

  const getPlanets = () => {
    axios.get('https://www.swapi.tech/api/planets')
      .then(res =>{
        console.log(res)
        setPlanets(res.data.results)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getPlanets()
  }, [])
  return (
    <div
      className="flex flex-row flex-wrap gap-x-5 pb-5"

    >
      { planets.map(planet => {
        return <PlanetCard key={planet.uid} planet={planet}/>
      }) }
    </div>
  )
}
