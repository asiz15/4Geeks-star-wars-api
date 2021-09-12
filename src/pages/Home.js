import React from 'react'
import { CharactersGrid } from '../components/characters/CharactersGrid'
import { PlanetsGrid } from '../components/planets/PlanetsGrid'

export const Home = () => {
  return (
    <div className="w-10/12 mx-auto mt-10 text-left pt-6">
      <h2 class="text-3xl mb-5 font-bold">Characters</h2>
      <CharactersGrid />
      <h2 className="text-3xl mb-4">Planets</h2>
      <PlanetsGrid/>
    </div>
  )
}
