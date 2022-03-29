import React from "react"

const EditPopup=(props:any)=>{
    return (props.trigger)?(
        <div className="popup">
            <div className="popup-inner">
                <button onClick={()=>props.setTrigger(false)}>Edit</button>
                {props.children}
            </div>
        </div>
    ):<></>;
}
export default EditPopup