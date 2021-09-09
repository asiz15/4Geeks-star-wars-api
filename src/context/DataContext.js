import React,{ createContext, useState } from "react";

export const DataContext = createContext()



export const DataProvider = ({ children }) => {
  const [characters, setCharacters] = useState([])
  const [planets, setPlanets] = useState([])
  const [favorites, setFavorites] = useState([])
  const [thumbnails, setThumbnails] = useState([
    {name: 'C-3PO',
     url:'https://wipy.tv/wp-content/uploads/2020/09/pierna-plateada-de-c3po-1200x720.jpg' 
    },
    {
      name: 'R2-D2',
      url: 'https://www.sideshow.com/storage/product-images/2172/r2-d2-deluxe_star-wars_feature.jpg'
    },
    {
      name: 'Luke Skywalker',
      url: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2017/08/10/5fa3c74b1cd74.jpeg'
    },
    {
      name: 'Darth Vader',
      url: 'https://sm.ign.com/t/ign_latam/screenshot/default/vader_g4fz.1280.jpg'
    },
    {name: 'Leia Organa',
    url: 'https://www.concierto.cl/wp-content/uploads/2021/07/Princesa-Leia-Organa-Star-Wars-1024x576.jpeg'
  }
  ])
  return (
    <DataContext.Provider value={{
      characters,
      setCharacters,
      planets,
      setPlanets,
      favorites,
      setFavorites,
      thumbnails
    }}>
      {children}
    </DataContext.Provider>
  )
}
