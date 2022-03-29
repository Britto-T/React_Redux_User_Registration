import React, { useState } from "react"
import Popup from "./Popup"
import "./UserRegistration.css"
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./redux/hooks";
import { useEffect } from "react";
import { getUserDetails,setUserDetails,addUserDetails } from "./redux/user/userSlice";

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
            {/* <div>
              <label>Phone Number</label>
            </div> */}
            {/* <div>
              <input
                type="text" {...register("phone",{required:true,maxLength:15})} placeholder="Phone Number"/>
               {errors?.name?.type ==="required" ?(
                <p className="errorSpan">This field is required</p>
              ):null}
            </div> */}
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

            {/* <div>
              <label>E-Mail</label>
            </div>
            <div>
              <input type="email" {...register("email", {required:true, 
              pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message:'Please enter a valid email'}
            })} placeholder="E-Mail" />
              {errors?.name?.type ==="required" ?(
                <p className="errorSpan">This field is required</p>
              ):null}
               {errors?.name?.type ==="required" ?(
                <p className="errorSpan">Please Enter a valid E-mail</p>
              ):null}
            </div> */}
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
        </div>
    )
}

export default UserRegistration
