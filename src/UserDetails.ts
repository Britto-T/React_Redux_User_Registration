import React from "react";

const UserDetails = (UserData: any) => {
  const userInfo: any = [];
  let i=0;                          //unique id randomly generated
  UserData.map((item: any,) => {
    i=i+1;
    userInfo.push({
      id:i,
      name: item?.name,
      address:{
          street:item?.address?.street,
          city:item?.address?.city,
          zipcode:item?.address?.zipcode
      }
    });
  });
  return userInfo;
};

export default UserDetails;
