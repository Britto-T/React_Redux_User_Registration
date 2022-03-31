import React, { useState,useRef,useEffect} from "react"
import EditPopup from "./EditPopup"
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./redux/hooks";
import { editUserDetails } from "./redux/user/userSlice";
import { stringify } from "querystring";

interface IEditUserRegistration{
    userId:string;
   userName:string;
   city:string;
   street:string;
   zipcode:string
}

const EditUserRegistration:React.FC<IEditUserRegistration>=(props:any)=>{

    const [buttonPopup,setButtonPopup] = useState(false);
    const dispatch = useDispatch();
    const user = useAppSelector((state) => state.user.userDetails);
    
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
      } = useForm();

    const onFormSubmit = (data: any) => {
        console.log("Form Submit=" + data);
      };

    const handleNameClick=(event:any)=>{
        console.log(event);
        var editData = { 
            id:props.userId, 
            name:event.target.value
          }
        dispatch(editUserDetails(editData));
    }

    useEffect(()=>{
        
    },[])
    const onerror =()=>{

    }

    return(
        <>
            <button onClick={()=>setButtonPopup(true)}>Edit</button>
            <EditPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h4>Edit User Registration</h4>
                
         <form onSubmit={handleSubmit(onFormSubmit, onerror)}>
          <div>
            <div>
              <label>User Name</label>
            </div>
            <div>
              <input type="text" {...register("name")} value={props.userName} placeholder="User Name" onChange={handleNameClick}/>
            </div>
            <div>
              <label>street Name</label>
            </div> 
            <div>
              <input type="text" {...register("street")} defaultValue={props.street} placeholder="street"/>
            </div>
            <div>
              <label>City Name</label>
            </div> 
            <div>
              <input type="text" {...register("city")} value={props.city} placeholder="city"/>
            </div>
            <div>
              <label>Zip Code</label>
            </div>
            <div>
              <input type="text" {...register("zipcode")} value={props.zipcode} placeholder="Zip Code"/>
            </div>
            {/* <div>
              <button className="btnSubmit">Submit</button>
              <button type="reset" className="btnReset">Reset</button>
            </div> */}
          </div>
        </form>
            </EditPopup>
        </>
    )
}

export default EditUserRegistration
