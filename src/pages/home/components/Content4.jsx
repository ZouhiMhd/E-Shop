import '../../../../public/publicNath/styles/global.css'
import { Link } from 'react-router-dom'
import shirt from '../../../../public/img/Mixte/man.png'

function Content4 () {
    return (
        <section className="content4">
            <img src={shirt} alt='home' className="content4-caillou" />
            <div className="tex">
                <h3>New Arrivals</h3> <br/>
                <h1>All Categories</h1>
                <Link to="/shop" className= "cent">
                    <p>Order Now</p>
                </Link>
            </div>
        </section>
    )
}   

export default Content4