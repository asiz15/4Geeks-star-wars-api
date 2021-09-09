import React from 'react'
import { useParams } from 'react-router'

export const PlanetDetails = () => {
  let { id } = useParams()
  return (
    <div>
      Details Planet!!
      {id}
    </div>
  )
}
