import { SecondMenu } from "./components/second-menu"
import { PresentArticle } from "./components/present-article"
import { Description } from "./components/description"
import { RelatedProduct } from "./components/related-products"

export default function SingleProdUI() {

    const article = [{
		name:"Asggard Safa" ,  
		price : "250,000.00", 
		qte: "1" ,
        img : "../../../public/vendors/images/sauver.png", 
        custumers : "1",
        categorie : "sofa",
        code : "SS001",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia soluta officiis recusandae ratione aliquid! Quibusdam eaque necessitatibus quos sunt. Eum inventore cumque ea dolorem. Quas, eos tempore! Nam, repellat dolorum.",
        typeSize :"XL, XXL, M, ML"
    }]
    return(<>
    <SecondMenu/>

    <PresentArticle  
       article={article}/>
    
    <Description 
        article1={article}
        article2={article}/>

    <RelatedProduct 
        article1={article}
        article2={article}
        article3={article}
        article4={article} />

    </> 
    )
}