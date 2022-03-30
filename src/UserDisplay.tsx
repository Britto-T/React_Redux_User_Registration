import react from "react";
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

  useEffect(() => {
    dispatch(getUserDetails());
  }, []);

  const handleclick=(id:any,name:any,city:any,street:any,zipcode:any)=>{
    var editData = { 
      id:id, 
      name:name,
      city:city,
      street:street,
      zipcode:zipcode
    }
    dispatch(editUserDetails(editData));
  }

  return (
    <div>
        <UserRegistration/>
      {
        <div className="wrapper">
          {user.map((item: any, key: any) => {
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
