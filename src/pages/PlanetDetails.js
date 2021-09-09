import React from 'react'
import { useParams } from 'react-router'

export const PlanetDetails = () => {
  let { id } = useParams()
  return (
    <div className="planet-profile" style={{backgroundImage: "url('https://images.alphacoders.com/726/726264.jpg')"}}>
      <div className="overlay"></div>
      Details Planet!!
      {id}
    </div>
  )
}
