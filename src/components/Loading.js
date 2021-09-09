import React from 'react'
import DVader from '../assets/dvader.png'

export const Loading = () => {
  return (
    <div className="fullwidth-loader bg-indigo-600 bg-opacity-70 text-white">
      <img src={DVader} />
      <h3 className="text-4xl">Loading...</h3>
    </div>
  )
}
