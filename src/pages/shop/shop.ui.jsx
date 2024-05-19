import ArticleManager from "./components/ArticleManager";
import {MoreInfo} from "../../components/more-infos"
import {Decor} from "../../components/decor"

export default function ShopUI() {
    return(
    <> 
        <Decor title="Shop" imgfond="../../../public/vendors/images/image1.jpg" imglogo="../../../public/vendors/images/sauver.png"/>
        <ArticleManager />
        <MoreInfo/>
    </>)
}