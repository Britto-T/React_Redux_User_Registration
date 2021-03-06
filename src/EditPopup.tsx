import React from "react"
import "./EditPopup.css"

const EditPopup=(props:any)=>{
    return (props.trigger)?(
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn-edit" onClick={()=>props.setTrigger(false)}>Close</button>
                {props.children}
            </div>
        </div>
    ):<></>;
}
export default EditPopup