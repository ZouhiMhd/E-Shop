import {Link} from "react-router-dom";
export const Footer = () => {
	return (
		<div>
			<section className="other">
        <div className="about-us">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quia veritatis reprehenderit dolorem, omnis nihil molestias, iure quis, tenetur ad harum ut fuga distinctio possimus quisquam sequi explicabo numquam? Ut.</p>
        </div>
        <div className="more">
            <table>
                <thead>
                <tr>
                    <th>Links</th>
                    <th>Help</th>
                    <th>Newsletter</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><Link to="/home" className="active">Home</Link></td>
                    <td><Link to="/" className="active">Payment Options</Link></td>
                    <td><Link to="/"><u>Enter your Email Adress</u></Link></td>
                    <td><Link to="/"><u className="active">SUSCRIBE</u></Link></td>
                </tr>
                <tr>
                    <td><Link to="/" className="active">Shop</Link></td>
                    <td><Link to="/" className="active">Returns</Link></td>
                </tr>
                <tr>
                    <td><Link to="/" className="active">About</Link></td>
                    <td><Link to="/" className="active">Privacy Policies</Link></td>
                </tr>
                <tr>
                    <td><Link to="/" className="active">Contact</Link></td>
                </tr>
                </tbody>
            </table>
        </div>
     </section>
     <footer>
        <p>2024 E-Shop. All rights reserved</p>
     </footer>
    </div>

    )
}