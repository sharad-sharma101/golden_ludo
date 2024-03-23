import React from "react";
import LoduIcon from '../../assets/golden-ludo.svg';
import GameCards from "../../component/gameCards";
import { Link } from "react-router-dom";

const Home: React.FC  = () => {

  const games = [
    { id: "1", title: "Golden Ludo", subheading: ["100", "500"], icons: LoduIcon},
    { id: "2",title: "Golden Ludo", subheading: ["100", "500"], icons: LoduIcon},
    { id: "3", title: "Golden Ludo", subheading: ["100", "500"], icons: LoduIcon}
  ]
  const FOOTER_LINKS = [
    { id: 1, title: "About", link: "/home" },
    { id: 2, title: "Wallet", link: "/home" },
    { id: 4, title: "Platform Comission", link: "/home" },
    { id: 5, title: "Private Policy", link: "/home" },
    { id: 6, title: "Contact us", link: "/home" },
    { id: 7, title: "Terms & Condition", link: "/home" },
    { id: 8, title: "Refund/Cancelation Policy", link: "/home" },
  ]

  return (
    <div className='gd-home bg-white' >
      <div className="notification-gd flex justify-center items-center gap-2.5 bg-[#1B7DE1] px-2 py-1 mb-4">
        <p className="text-white text-center text-[11px] font-normal leading-4" >
          किसी भी यूजर्स का पेमेंट ID से कट हुवा हैं तो यूजर परेशान ना हो सब का पेमेंट रिफंड हो जायेगा with in 24 Hrs में।🙏🏼🙏🏼
        </p>
      </div>
      <div className="flex flex-col items-start gap-3 p-4" >
        <div className="text-[#080807] text-sm font-medium leading-5" >Our Games</div>
        <div className="flex items-start gap-4 flex-wrap" >
          {games.map((game) => (
            <GameCards 
              key={game.id}
              title={game.title}
              priceRange={game.subheading}
              logo={game.icons}
            />
          ))}
        </div>
      </div>
      <div className="gd-terms-condition  flex w-[360px] flex-col items-start gap-5 p-6">
        <div className="w-[88.145px] h-[43.115px] shrink-0" >
          <img src={LoduIcon} alt="" style={{width: "100%", height: "100%"}} />
        </div>
        <div className=" flex flex-col items-start gap-3 self-stretch" >
          {
            FOOTER_LINKS.map((item) => (
              <Link to={item.link} key={item.id} className=" text-[rgba(8,8,7,0.40)] text-sm font-normal leading-5 tracking-[0.25px]" >{item.title}</Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home
