import React from 'react'
import { useHistory } from "react-router-dom";


let registerHandle = (event, history) => {
    event.preventDefault();
    let name = event.target.nameRegister.value;
    let email = event.target.emailRegister.value;
    let pass = event.target.passwordRegister.value;
    let passCheck = event.target.passwordCheckRegister.value;
    let biodata = event.target.biodataRegister.value;

    if(pass !== passCheck){
        alert("Password anda dengan Confirm Password tidak sama!");
    }
    else{
        let url = "https://6023acfe6bf3e6001766b5db.mockapi.io/reactGallery";

        fetch(url)
        .then(respon => respon.json())
        .then(data => {

            let dataUser = data.filter((item)=>{
                return email === item.email
            });

            if(dataUser.length > 0){
                alert("Email sudah terpakai");
            }
            else{
                fetch(url,{
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        name : name,
                        email : email,
                        password : pass,
                        biodata : biodata,
                    })
                }).then(respon => respon.json())
                .then()
                .catch(error => console.error("ini error "+ error))
        
                history.push("/login");
            }
        })

        

    }
}

function Register() {
    let history = useHistory();

    return (
        <div className="row mt-5">
        <div className="col-12 text-center ">
            <h1>Register User</h1>
        </div>
        <div className="d-flex justify-content-center mt-4">
            <form onSubmit={(event) => registerHandle(event,history)} className="col-6">
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input required name="nameRegister" type="text" className="form-control" id="inputNameRegister"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input required name="emailRegister" type="email" className="form-control" id="inputEmailRegister" aria-describedby="emailHelp"></input>
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input required name="passwordRegister" type="password" className="form-control" id="inputPasswordRegister"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                    <input required name="passwordCheckRegister" type="password" className="form-control" id="inputPasswordRegisterCheck"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputBiodata" className="form-label">Biodata</label>
                    <textarea required name="biodataRegister" rows="3" className="form-control" id="inputBiodataRegister"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
        </div>
    )
}

export default Register
