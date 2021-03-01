import React from 'react'
import { Link } from "react-router-dom";

function SignInUp() {
    return (
        <>
            <li className="nav-item">
                <Link to="/login" className="nav-link">Sign In</Link>
            </li>
            <li className="nav-item">
                <Link to="/register" className="nav-link">Sign Up</Link>
            </li>
        </>
    )
}

export default SignInUp
