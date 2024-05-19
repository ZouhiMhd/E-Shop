import Content1 from "./components/Content1.jsx";
import Content2 from "./components/Content2.jsx";
import Content3 from "./components/Content3.jsx";
import Content4 from "./components/Content4.jsx";
import Content5 from "./components/Content5.jsx";
import Content6 from "./components/Content6.jsx";
import habit from "../../../public/img/Mixte/habit.png";
import woman from "../../../public/banners/girl-cover.png";
import man from "../../../public/banners/man-cover.png";
import all from "../../../public/banners/all-cover.png";
import kid from "../../../public/banners/kid-cover.png";


export default function HomeUI() {
    
  // const header = document.querySelector('header');
  // header.style.backgroundColor = 'transparent';
    return (<> 
      <Content1 img={habit} name="Bienvenue Sur E-Shop"/>
      <Content2 />
      <Content3 />
      <Content6 img1={woman} img2={man} img3={kid} img4={all}/>
      <Content4 />
      <Content5 />
    </>)
}







