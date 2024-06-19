import Content1 from "./components/Content1.jsx";
import Content2 from "./components/Content2.jsx";
import Content3 from "./components/Content3.jsx";
import Content4 from "./components/Content4.jsx";
import Content5 from "./components/Content5.jsx";
import Content6 from "./components/Content6.jsx";
import Content7 from "./components/Content7.jsx";
import habit from "../../../public/banners/habit.png";
import clientSatisfait from "../../../public/banners/client-satisfait.jpg";
import paiment from "../../../public/banners/paiement-simple.png";
import familyShpping from "../../../public/banners/family-shopping.png";
import promotion from "../../../public/banners/promotions.png";
import womanShopping from "../../../public/banners/woman-shopping.png"
import woman from "../../../public/banners/girl-cover.png";
import man from "../../../public/banners/man-cover.png";
import all from "../../../public/banners/all-cover.png";
import kid from "../../../public/banners/kid-cover.png";
const images=[

  {
    img :clientSatisfait,
    id : 2,
    text :"Nos clients satisafait vous le recommandent!"
  },
  {
    img :familyShpping,
    id : 3,
    text : " Shopping pour toute la famille"
  },
  {
    img :womanShopping,
    id : 4,
    text : "Obtenez des articles de choix en quelques clicks!"
  },
  {
    img : paiment,
    id : 5,
    text :"Paiement aisé, rapide et livraison garantie"
  },
  {
    img :promotion,
    id : 6,
    text : "Profitez des dernières soldes!!!"
  }
]

export default function HomeUI() {
 
    
    return (<> 
      <Content7 images={images}/>
      <Content6 img1={woman} img2={man} img3={kid} img4={all}/>
      <Content2 />
      <Content3 />
      <Content4 />
      <Content5 />
    </>)
}







