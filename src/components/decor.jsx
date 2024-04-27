export const Decor = ({title, imgfond, imglogo}) => {
	return (
        
        <main className="affiche">
            <div className="presentation-check">
                <img 
                    src={imgfond}
                    alt="image-floutée" 
                    style={{opacity : '0.3'}}/>  
                <div className="superposed-word">
                    
                    <div>
                        <img src={imglogo} className="logo"/>  
                    </div> 
                    <div>
                        <h1>{title}</h1>
                    </div>
                    <div>
                        <ul>
                            <li className="active"><a href="#"><strong>Home</strong></a></li>
                            <li><i className="fa-solid fa-chevron-right"></i></li>
                            <li><a href="#">{title}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
        
    )
}
