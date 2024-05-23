import PropTypes from 'prop-types';
import { EyeContext } from "./EyeContext";
import { useContext } from 'react';



export const Description = () =>{
    // const Desc = (article) =>{
    //     if(article.photos.length===2){ 
    //         return(  
    //         <div>
    //             <img key={article.codePro} src={article.photos[0].lienPhoto} alt="" />         
    //         </div>)
    //         }
    // }
   
    const { eyeCart, ajouterDansEye} = useContext(EyeContext)
    console.log(eyeCart.photos.length)
    return(
    <section className="description">
        <div className="options-desc">
            <ul>
                <li><a href="#"><h2  className="active">Description</h2></a></li>
                <li><a href="#"><h2>Additionnal information</h2></a></li>
                <li><a href="#"><h2>Reviews [5]</h2></a></li>
            </ul>
        </div>
        <div className="infos">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis autem sapiente repellendus reiciendis reprehenderit modi recusandae tempore ipsa neque, temporibus est maiores similique, veniam perferendis dignissimos repudiandae. Explicabo, sequi quo.</p>
            <p><br/></p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sint consectetur ea nam vel eum quam alias ratione numquam, facere dicta a consequatur repudiandae fuga hic laborum. Excepturi, enim consequatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam corrupti nemo temporibus architecto vero magni reiciendis, accusantium molestias quam soluta deleniti sunt nostrum minus consectetur error a illum dolorem rerum?</p>
        </div>
        <div className="article">
            <div>
                <img key={eyeCart.codePro} src={eyeCart.photos[0].lienPhoto} alt="" />    
            </div>
            {/* <Desc article={eyeCart}/> */}
            
                 <div>
                     <img key={eyeCart.codePro} src={eyeCart.photos.length===2 ? eyeCart.photos[1].lienPhoto : ''} alt="" />         
                 </div> 
            
        </div>
    </section>
)
}

Description.propTypes = {
    article1: PropTypes.object.isRequired,
    article2: PropTypes.object.isRequired
  };