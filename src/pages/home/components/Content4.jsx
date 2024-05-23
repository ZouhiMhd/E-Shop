import '../../../../public/publicNath/styles/global.css'
import { Link } from 'react-router-dom'
import shirt from '../../../../public/img/Mixte/man.png'

function Content4 () {
    return (
        <section className="content4" style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-around",
            height:"400px"
        }}>
            <img src={shirt} alt='home' className="content4-caillou" style={{
                width:"auto",
                height:"80%"
            }} />
            <div className="tex">
                <h3>New Arrivals</h3> <br/>
                <h1>All Categories</h1>
                <Link to="/shop" className= "cent">
                    <p style={{width:"350px"}}>Let's Shop Now</p>
                </Link>
            </div>
        </section>
    )
}   

export default Content4