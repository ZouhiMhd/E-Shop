export const Article = ({article}) => {
    return (
        <div>
             {
             article.map(e=>
                <img src ={e.img}/>
            )}
            <br/>
            {
            article.map(e=>
                <p>{e.description}</p>
            )}
            
            {
            article.map(e=>
             <h2  className="price"><br/>
            Rs.{e.price}</h2 >
            )}
        </div>
    )
}