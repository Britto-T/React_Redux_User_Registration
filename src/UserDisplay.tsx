import react, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./redux/hooks";
import { useEffect} from "react";
import { getUserDetails,deleteUserDetails,editUserDetails } from "./redux/user/userSlice";
import "./UserDisplay.css";
import UserRegistration from "./UserRegistration";
import EditUserRegistration from "./EditRegistration";

const UserDisplay = () => {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user.userDetails);
  const [searchUser,setSearchUser] = useState("");

  return (
    <div>
      <input type="text" name="text" className="search" placeholder="Search here!" onChange={(event) => setSearchUser(event.target.value)}/>
        <UserRegistration/>
      {       
        <div className="wrapper">
          {user.filter((item:any)=>item.name.toLowerCase().includes(searchUser.toLowerCase())).map((item: any, key: any) => {
            return (
              <div className="card" key={key}>
                <div>Id:{item?.id}</div>
                <div>Name: {item?.name}</div>
                <div>Address</div>
                <div>Street: {item?.address?.street}</div>
                <div>City: {item?.address?.city}</div>
                <div>ZipCode: {item?.address?.zipcode}</div>
                <EditUserRegistration userId={item?.id} userName={item?.name} street={item?.address?.street} city={item?.address?.city} zipcode={item?.address?.zipcode} />
                <button onClick={()=>dispatch(deleteUserDetails(item?.id))}>Delete</button>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
};

export default UserDisplay;
