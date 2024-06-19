import '../../../../public/publicNath/styles/global.css'
import {Link} from "react-router-dom"
export default function Content7 ({images}) {
    
    return (
        <section className="home-content1">
            {/* <div className="Rocket">
                <h1>{name}</h1>
                <Link to="/shop" className= "content1-button">
                    <p>Shop now</p>
                </Link>
            </div> */}
            
            <div className="slider-container slider-2" >
                <div className='slider'>
                    {images.map((image)=>(
                    <div key={image.id} style={{height : '500px', width:'1100px'}}> 
                    
                        <img src={image.img} style={{height:'500px', width:'50%'}}/>
                        <h1 style={{ width:'500px'}}>{image.text}</h1>
                    </div>
                    ))}
                </div>
            
            </div>
        </section>
    )
}
