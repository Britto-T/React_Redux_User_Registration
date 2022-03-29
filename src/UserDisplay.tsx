import react from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./redux/hooks";
import { useEffect} from "react";
import { getUserDetails,deleteUserDetails,editUserDetails } from "./redux/user/userSlice";
import "./UserDisplay.css";
import UserRegistration from "./UserRegistration";

const UserDisplay = () => {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user.userDetails);

  useEffect(() => {
    dispatch(getUserDetails());
  }, []);

  const handleclick=(id:any,name:any)=>{
    var editData = { 
      id:id, 
      name:name
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
              // <div className="card" key={key}>
              //   <div>Id:{item?.id}</div>
              //   <div>Id:<input value={item?.id}/></div>
              //   <div>Name: {item?.name}</div>
              //   <div>Address</div>
              //   <div>Street: {item?.address?.street}</div>
              //   <div>City: {item?.address?.city}</div>
              //   <div>ZipCode: {item?.address?.zipcode}</div>
              //   <div><button>Edit</button>
              //   <button onClick={()=>dispatch(deleteUserDetails(item?.id))}>Delete</button></div>
              // </div>
              <div className="card" key={key}>
                <div>Id:<input value={item?.id}/></div>
                <div>Name:<input value={item?.name}/></div>
                <div>Address</div>
                <div>Street:<input value={item?.address?.street}/></div>
                <div>City: <input value={item?.address?.city}/></div>
                <div>ZipCode:<input value={item?.address?.zipcode}/></div>
                <div><button onClick={()=>handleclick(item?.id,item?.name)}>Edit</button>
                <button onClick={()=>dispatch(deleteUserDetails(item?.id))}>Delete</button></div>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
};

export default UserDisplay;
