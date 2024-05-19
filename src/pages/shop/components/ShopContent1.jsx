import { FaChevronRight } from "react-icons/fa";
import { article } from '../../../../public/publicNath/datas/ArticleList';
import '../../../../public/publicNath/styles/global2.css'
import image1 from "../../../../public/banners/image1.jpg"
export default function ShopContent({namePage}) {
    let img = image1
    return (
        <section className="shop-content1">
            <img src={img} width='35px' />
            <h1>{namePage}</h1>
            <div className="fi">
                <h4>Home</h4>
                <FaChevronRight />
                <p>{namePage}</p>
            </div>
        </section>
    )
}