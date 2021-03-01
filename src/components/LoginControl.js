import React from 'react'

import SignInUp from './SignInUp';
import HelloLogout from './HelloLogout';

let button;

function changeButton() {
    
    if(localStorage.user){
        let dataUser = JSON.parse(localStorage.user);
        button = <HelloLogout name={dataUser.name}/>
    }
    else{
        button = <SignInUp />
    }

}

function LoginControl() { 

    changeButton();
    return (
        <>
            {button}
        </>
    )
}

export {changeButton}
export default LoginControl
