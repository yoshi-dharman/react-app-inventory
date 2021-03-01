import React, {useState, useEffect} from 'react'
import axios from 'axios';

function ModalEdit(props) {

    const [input, setInput] = useState("")

    function editHandle(){
        axios.put(props.url+"/"+props.invenEdit.id, {inventory : input})
        .then((result) => {
            let newData = props.inventory.map(item => {
                if(item.id === result.data.id){
                    return {id : item.id, inventory : result.data.inventory};
                }
                else{
                    return item;
                }
                
            })
            setInput("");
            document.getElementById("closeIt").click();
            props.setInventory(newData);
        })
    }

    function newInput(e){
        setInput(e.target.value);
    }

    useEffect(() => {
        document.getElementById("inputInventory").value ="";  
    })


    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{props.invenEdit.inventory}</h5>
                <button id="closeIt" type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <input onChange={newInput} value={input} type="text" className="form-control" id="inputInventory" placeholder="Input New Inventory"></input>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button onClick={editHandle} type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default ModalEdit
