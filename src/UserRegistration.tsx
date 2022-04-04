import React, { useState } from "react"
import Popup from "./Popup"
import "./UserRegistration.css"
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./redux/hooks";
import { addUserDetails } from "./redux/user/userSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserRegistration=()=>{

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
        const userData =  pushUserData(data);
        dispatch(addUserDetails(userData));
        setButtonPopup(false);
        toast.success("user added successfully",{
          theme:"colored"
        });
      };
    
    const pushUserData = (data: any) => {   
      var userData = { 
        id:'', 
        name:data.name,
        address: {
          street: data.street,
          city: data.city,
          zipcode: data.zipcode,
        },
     };
      return userData;
    };

    const onerror =()=>{

    }
   
    return(
        <div className="userReg">
          <button onClick={()=>setButtonPopup(true)} className="addButton">Add New User</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h4>New User Registration</h4>
                
         <form onSubmit={handleSubmit(onFormSubmit, onerror)}>
          <div className="fieldWrapper">
            <div>
              <label>User Name</label>
            </div>
            <div>
              <input type="text" {...register("name",{required:true})} placeholder="User Name" />
              {errors?.name?.type ==="required" ?(
                <p className="errorSpan">This field is required</p>
              ):null}
            </div>
            <div>
              <label>street Name</label>
            </div> 
            <div>
              <input type="text" {...register("street")} placeholder="street"/>
            </div>
            <div>
              <label>City Name</label>
            </div> 
            <div>
              <input type="text" {...register("city")} placeholder="city"/>
            </div>
            <div>
              <label>Zip Code</label>
            </div>
            <div>
              <input
                type="text" {...register("zipcode", {required: true})} placeholder="Zip Code"
              />
              {errors?.name?.type ==="required" ?(
                <p className="errorSpan">This field is required</p>
              ):null}
            </div>
            <div>
              <button className="btnSubmit">Submit</button>
              <button type="reset" className="btnReset">Reset</button>
            </div>
          </div>
        </form>

            </Popup>
            <ToastContainer />
        </div>
    )
}

export default UserRegistration
