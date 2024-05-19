import '../../../../public/publicNath/styles/global.css'
import {Link} from "react-router-dom"

export default function Content1 ({img, name}) {
    return (
        <section className="home-content1">
            <div className="Rocket">
                <h1>{name}</h1>
                <Link to="/shop" className= "content1-button">
                    <p>Shop now</p>
                </Link>
            </div>
            <div className="Canape">
                <img src={img} alt='home' className="content1-caillou"/>
            </div>
        </section>
    )
}
