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
                    <td><Link to="/" className="active">Home</Link></td>
                    <td><Link to="/about" className="active">More Options</Link></td>
                    <td><input placeholder="Enter your Email Adress"/></td>
                    <td><button><u className="active">SUSCRIBE</u></button></td>
                </tr>
                <tr>
                    <td><Link to="/shop" className="active">Shop</Link></td>
                    <td><Link to="/" className="active">Returns</Link></td>
                </tr>
                <tr>
                    <td><Link to="/about" className="active">About</Link></td>
                    <td><Link to="/about" className="active">Privacy Policies</Link></td>
                </tr>
                <tr>
                    <td><Link to="/contact" className="active">Contact</Link></td>
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