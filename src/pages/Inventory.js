import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


import InventoryItem from '../components/InventoryItem';
import ModalEdit from '../components/ModalEdit';
import LoginControl from '../components/LoginControl';

function Inventory(props) {
    let history = useHistory();
    let url = "https://6023acfe6bf3e6001766b5db.mockapi.io/inventory";
    const [inventory, setInventory] = useState("");

    const [invenEdit, setInvenEdit] = useState("");

    useEffect(()=>{
        if(!localStorage.user){
            alert("Anda belum login!");
            props.setActive("Login");
            props.setButton(<LoginControl setButton={props.setButton} active={"Sign In"} setActive={props.setActive}/>)
            history.push("/login");
        }else{
            axios.get(url)
            .then((response) => setInventory(response.data))
            .catch(err => "ada error : "+err);
        }
    }, [history, url, props]);

    function submitHandle(e){
        e.preventDefault();
        
        let newInventory = e.target.inputInventoryItem.value;
        
        axios.post(url, {inventory : newInventory})
        .then((result) => setInventory([...inventory, result.data]))
        .catch(err => "ada error : "+err);
    }

    return (
        <>
        {!localStorage.user || inventory === ""
            ? 
            <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border mt-5" role="status">
                </div>
            </div>
            :
            <>
            <ModalEdit invenEdit={invenEdit} setInvenEdit={setInvenEdit}
            inventory={inventory} setInventory={setInventory}
            url={url} clear={""}/>
            <div className="row d-flex mt-5">
                <div className="col-12">
                    <h2>Inventory</h2>
                    <hr></hr>
                </div>

                <div className="col-12 px-4">
                <form onSubmit={submitHandle}>
                    <div className="mb-3">
                        <label htmlFor="labelInven" className="form-label fw-bold">Add Inventory Item </label>
                        
                        <input type="text" placeholder="Inventory item" className="form-control" name="inputInventoryItem" id="inputInventoryItem"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Inventory 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2 bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg></button>
                </form>
                </div>
                
                <div className="col-12 accordion mt-4 px-4" id="accordionExample">
                <label htmlFor="labelInven" className="form-label fw-bold">Inventory Item List</label>
                    {inventory.length <= 0 
                    ? <div className="text-center mt-3">
                        <h2>OOPS,THERE IS NOTHING TO SHOW HERE</h2>
                        <h5>There are 0 items on your Inventory, try to add one</h5>
                    </div> 
                    : inventory.map((item, index) => <InventoryItem key={index} 
                    inventory={inventory} setInventory={setInventory} 
                    setInvenEdit={setInvenEdit}
                    url={url} id={item.id} inventoryData={item.inventory} />)
                    }
                </div>
            </div>
            </>
        }
        
        </>
    )
}

export default Inventory
