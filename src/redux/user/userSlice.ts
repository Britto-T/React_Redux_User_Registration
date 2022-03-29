import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import axios from "axios";
import UserDetails from '../../UserDetails';
import { isThrowStatement } from 'typescript';

interface IUser{
    userDetails:any
}

const initialState:IUser={
    userDetails:[]
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUserDetails(state,action:PayloadAction<any>){
            state.userDetails = action.payload;
        },
        addUserDetails(state,action:PayloadAction<any>){  
            action.payload.id=state.userDetails.length+1;
            state.userDetails.push(action.payload);
        },
        deleteUserDetails(state,action:PayloadAction<number>){
            state.userDetails =  state.userDetails.filter((item:any) =>item.id !== action.payload);
        },
        editUserDetails(state,action:PayloadAction<any>){
            state.userDetails.forEach(function (item:any) {
                if(item.id == action.payload.id){
                    item.name = action.payload.id
                }
            });
            console.log(state.userDetails);
        }
    }
})

export const getUserDetails=():AppThunk=>async(dispatch)=>{
  
    try{
        const result = await axios.get('https://jsonplaceholder.typicode.com/users')      
        if(result.data)
        {
            const UserData =  UserDetails(result.data);
            console.log(UserData);
            dispatch(setUserDetails(UserData));
        }
    }
    catch{

    }
}

export const {setUserDetails,addUserDetails,deleteUserDetails,editUserDetails} = userSlice.actions
export default userSlice.reducer