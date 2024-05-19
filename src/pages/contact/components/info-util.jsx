export const InfoUtil = ({title,impath,text1,text2}) => {
   

    return (<>
        <div className="info">
			<img src={impath}/>
			<div>
				<h3>{title}</h3>
				<p>{text1}</p>
				<p>{text2}</p>
			</div>
		</div>
    </>)
}