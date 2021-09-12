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
    },
    {
      name: 'Owen Lars',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnH6UmjrBQuY58y-QJ6Xs2cscIH3GrriHvaw&usqp=CAU'
    },
    {
      name: 'Beru Whitesun lars',
      url: 'https://i.pinimg.com/originals/2b/bb/71/2bbb712405c574c6ce78730e00464a8e.jpg'
    },
    {
      name: 'R5-D4',
      url: 'https://static.turbosquid.com/Preview/2020/11/06__17_03_12/Product1.jpgAC5FE421-A3B4-4DD0-B811-AEAA5642D041Large.jpg'
    },{
      name: 'Biggs Darklighter',
      url: 'https://comicvine.gamespot.com/a/uploads/scale_medium/14/145984/4902632-8136336329-biggs.jpg'
    },
    {
      name: 'Obi-Wan Kenobi',
      url: 'https://i0.wp.com/hipertextual.com/wp-content/uploads/2019/08/hipertextual-se-confirma-serie-obi-wan-kenobi-con-ewan-mcgregor-disney-2019892534-scaled.jpg?fit=2560%2C1707&ssl=1'
    }
  ])
  const [planetBgs, setPlanetBgs] = useState([
    {
      name: 'Tatooine',
      uid: 1,
      url: 'https://images.alphacoders.com/726/726264.jpg'
    },
    {
      name: 'Alderaan',
      uid: 2,
      url: 'https://d23.com/app/uploads/2017/11/1180w-600h_111717_star-tours-star-wars-780x440.jpg'
    },
    {
      name: 'Yavin IV',
      uid: 3,
      url: 'https://lumiere-a.akamaihd.net/v1/images/databank_yavin4_01_169_b6945e20.jpeg?region=0%2C0%2C1560%2C878&width=960'
    },
    {
      name: 'Hoth',
      uid: 4,
      url: 'https://pm1.narvii.com/6592/17fa9c214dad4ac1671fb301286aa9095e3a5dab_hq.jpg'
    },
    {
      name: 'Dagobah',
      uid: 5,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB9nde8queJVH45VhiK6jKy0bp-PVV8A6aGA&usqp=CAU'
    },
    {
      name: 'Bespin',
      uid: 6,
      url: 'https://static3.srcdn.com/wordpress/wp-content/uploads/2020/02/Bespin-Feature-Image-1.jpg'
    },
    {
      name: 'Endor',
      uid: 7,
      url: 'https://cdna.artstation.com/p/assets/images/images/008/732/162/large/nicolas-potie-endor.jpg?1514937228'
    },
    {
      name: 'Naboo',
      uid: 8,
      url: 'https://media.contentapi.ea.com/content/dam/walrus/images/2018/11/mapvista-theed-grid.jpg.adapt.crop191x100.628p.jpg'
    },
    {
      name: 'Coruscant',
      uid: 9,
      url: 'https://lumiere-a.akamaihd.net/v1/images/Coruscant_03db43b4.jpeg?region=0%2C0%2C1536%2C864&width=960'
    },
    {
      name: 'Kamino',
      uid: 10,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0p262Os3vV4uM-o4-G3n2fUFz9ai6TX2dSw&usqp=CAU'
    },
  ])
  return (
    <DataContext.Provider value={{
      characters,
      setCharacters,
      planets,
      setPlanets,
      favorites,
      setFavorites,
      thumbnails,
      planetBgs
    }}>
      {children}
    </DataContext.Provider>
  )
}
