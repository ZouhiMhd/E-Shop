import { SecondMenu } from "./components/second-menu"
import { PresentArticle } from "./components/present-article"
import { Description } from "./components/description"
import { RelatedProduct } from "./components/related-products"
import { articleE,articleH,articleF,articleM } from "../../../public/datas/ArticleList"
import { useContext } from "react"
import { EyeContext } from "./components/EyeContext"
import Content3 from "../home/components/Content3"
export default function SingleProdUI() {

    
    const { eyeCart, ajouterDansEye} = useContext(EyeContext)
 
    return(<div id="conteneur">
    <SecondMenu/>

    <PresentArticle/>
    
    <Description/>
    <div style={{display:'flex', justifyContent:'center', width:'100%', padding:'40px'}}>
        <h1>Related Products</h1>
    </div>
    <Content3 />
{/*     
    <RelatedProduct 
        article1={articleF[1]}
        article2={articleM[1]}
        article3={articleH[1]}
        article4={articleE[1]} /> */}

    </div> 
    )
}