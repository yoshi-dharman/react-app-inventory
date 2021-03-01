import React, {useState} from 'react';
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

function activeNav(event,setActive){
    setActive(event.target.innerText);
}

function Navbar(props) {

    const [active, setActive] = useState("Home");

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-between w-100">
                        {/* <a class="nav-link active" aria-current="page" href="#">tes</a> */}
                        <div className="flex-lg-row flex-column d-flex">
                            <li className="nav-item">      
                                <Link onClick={(event) => activeNav(event,setActive)} to="/" className={active === "Home" ?
                                "nav-link active" : "nav-link"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={(event) => activeNav(event,setActive)} to="/inventory" className={active === "Inventory" ?
                                "nav-link active" : "nav-link"}>Inventory</Link>
                            </li>
                        </div>
                        <div className="flex-lg-row flex-column d-flex">
                            {props.button}
                        </div>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
