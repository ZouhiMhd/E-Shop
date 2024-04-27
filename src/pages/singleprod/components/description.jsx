export const Description = ({article1, article2}) =>{
    return(
    <section className="description">
        <div className="options-desc">
            <ul>
                <li><a href="#"><h2  className="active">Desciption</h2></a></li>
                <li><a href="#"><h2>Additionnal information</h2></a></li>
                <li><a href="#"><h2>Reviews [5]</h2></a></li>
            </ul>
        </div>
        <div className="infos">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis autem sapiente repellendus reiciendis reprehenderit modi recusandae tempore ipsa neque, temporibus est maiores similique, veniam perferendis dignissimos repudiandae. Explicabo, sequi quo.</p>
            <p><br/></p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sint consectetur ea nam vel eum quam alias ratione numquam, facere dicta a consequatur repudiandae fuga hic laborum. Excepturi, enim consequatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam corrupti nemo temporibus architecto vero magni reiciendis, accusantium molestias quam soluta deleniti sunt nostrum minus consectetur error a illum dolorem rerum?</p>
        </div>
        <div className="article">
            <div>
                {article1.map(e=> <img src={e.img}/>)}     
            </div>
            <div>
                {article2.map(e=> <img src={e.img}/>)}     
            </div>
            
        </div>
    </section>
)
}