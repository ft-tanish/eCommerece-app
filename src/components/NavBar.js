import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogoImg } from "../utils/cdn";
import "../assests/styles/navbar.css"

const NavBar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="header">
            <div className="logo">
                <Link to="/">
                    <img style={{ width: "4rem", padding: "1rem" }} src={LogoImg} alt='ShowNow' />
                </Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            Cart
                        </Link>
                    </li>
                </ul>
            </div>
            {/* <div >
                {isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}> Logout</button>
                    : <button onClick={() => setIsLoggedIn(true)}>Login</button>}
            </div> */}
        </div >
    )
}

export default NavBar;