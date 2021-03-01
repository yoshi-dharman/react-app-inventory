import React from 'react'
import { useHistory } from "react-router-dom";

let logout = (history) => {
    localStorage.removeItem("user");
    window.location.href = "./"
    // history.push("/");
}

function HelloLogout(props) {
let history = useHistory();

    return (
        <>
            <li className="nav-item">
                <span className="nav-link text-white">Hello, {props.name}</span>
            </li>
            <li className="nav-item">
                <button onClick={() => {logout(history)}} className="btn btn-outline-danger">Logout</button>
            </li>
        </>
    )
}

export default HelloLogout
