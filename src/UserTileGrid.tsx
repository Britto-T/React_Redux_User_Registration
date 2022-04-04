import React from "react"
import { useState } from "react";
import Users from "./Users"
import { InputSwitch } from 'primereact/inputswitch';
import PrimeGrid from "./PrimeGrid";
import UserRegistration from "./UserRegistration";
import { useEffect} from "react";
import { getUserDetails} from "./redux/user/userSlice";
import { useDispatch } from "react-redux";

const UserTileGrid=()=>{
    const[selectMode,setSelectMode] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserDetails());
      }, []);

    return(
        <>
        <InputSwitch checked={selectMode} onChange={(e) => setSelectMode(e.target.value)}/>
          {!selectMode?  
        <Users/> :<PrimeGrid/>}
        </>
    )
}

export default UserTileGrid