import { Article } from "./article"

export const RelatedProduct =({article1,article2,article3,article4}) =>{
    return (
        <section className="related">
        <div>
            <h1>Related Products</h1>
        </div>
        
        <div className="list-articles">
            <Article article={article1}/>
            <Article article={article2}/>
            <Article article={article3}/>
            <Article article={article4}/>
        </div>
        <div > 
            <h1><br/>View-product</h1>
            <hr/>
        </div>
    </section>
    )
}