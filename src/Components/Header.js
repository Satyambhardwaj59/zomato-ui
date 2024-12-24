import { background } from "../utils/constant";

const Header = () => {
    return (
        <div className="header" style={background}>
            <div className="logo">
                 <img className = "logo-img" src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png" alt="logo img" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
        
    )
}

export default Header;