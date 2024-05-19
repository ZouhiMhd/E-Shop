import ArticleManager2 from "./components/ArticleManager2"
import {MoreInfo} from "../../components/more-infos"
import {Decor} from "../../components/decor"

export default function FavorisUI() {
    return(
    <> 
        <Decor title="Favoris" imgfond="../../../public/vendors/images/image1.jpg" imglogo="../../../public/vendors/images/sauver.png"/>
        <ArticleManager2 />
        <MoreInfo/>
    </>)
}