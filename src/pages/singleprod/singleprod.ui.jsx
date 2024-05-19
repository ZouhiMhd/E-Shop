import { SecondMenu } from "./components/second-menu"
import { PresentArticle } from "./components/present-article"
import { Description } from "./components/description"
import { RelatedProduct } from "./components/related-products"
import { articleE,articleH,articleF,articleM } from "../../../public/datas/ArticleList"

export default function SingleProdUI() {


    return(<div id="conteneur">
    <SecondMenu/>

    <PresentArticle  
       article={articleF[0]}/>
    
    <Description 
        article1={articleM[0]}
        article2={articleE[0]}/>

    <RelatedProduct 
        article1={articleF[1]}
        article2={articleM[1]}
        article3={articleH[1]}
        article4={articleE[1]} />

    </div> 
    )
}