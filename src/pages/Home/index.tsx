import React from "react";
import LoduIcon from '../../assets/ludo-game.png';

const Home: React.FC  = () => {

  const games = [
    {title: "Golden Ludo", subheading: "100 - 500 money", icons: LoduIcon},
    {title: "Golden Ludo", subheading: "100 - 500 money", icons: LoduIcon},
    {title: "Golden Ludo", subheading: "100 - 500 money", icons: LoduIcon}
  ]

  return (
    <div className='gd-home' >
      <div className="notification-gd"></div>
      <div className="gd-main-game-container">
        {
          games.map((game) => (
            <div className='flex flex-col p-2' >
              <p className="text-xl" >{game.title}</p>
              <p className="text-xl" >{game.subheading}</p>
              <img src={game.icons} />
            </div>
          ))
        }
      </div>
      <div className="gd-terms-condition">

      </div>
    </div>
  )
}

export default Home
