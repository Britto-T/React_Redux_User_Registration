import React from "react"
import { useDispatch } from "react-redux";
import { useAppSelector } from "./redux/hooks";
import { useEffect} from "react";
import { getUserDetails} from "./redux/user/userSlice";
import {DataTable} from "primereact/datatable"
import { Column } from "primereact/column";


const UserGrid=()=>{ 

  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user.userDetails);
  console.log(user);
  useEffect(() => {
    dispatch(getUserDetails());
  }, []);

    return(
        <div>
            <DataTable value={user} 
            responsiveLayout="scroll"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropDown"
            dataKey="id"
            paginator
            emptyMessage="No users  found"
            className="datatable-responsive"
            currentPageReportTemplate="showing {first} to {last} of TotalRecords Post"
            rows={5}>
            <Column field="id" sortable header ="Id"></Column> 
            <Column field="name" sortable header ="Name"></Column> 
            <Column field="address.street" sortable header ="Street"></Column> 
            <Column field="address.city" sortable header ="City"></Column>       
            <Column field="address.zipcode" sortable header ="Zipcode"></Column> 
            </DataTable>

            <DataTable value={user} 
            editMode="cell" 
            className="editable-cells-table"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropDown"
            dataKey="id"
            paginator
            emptyMessage="No users  found"
            currentPageReportTemplate="showing {first} to {last} of TotalRecords Post"
            rows={5}>
            <Column field="id" sortable header ="Id"></Column> 
            <Column field="name" sortable header ="Name"></Column> 
            <Column field="address.street" sortable header ="Street"></Column> 
            <Column field="address.city" sortable header ="City"></Column>       
            <Column field="address.zipcode" sortable header ="Zipcode"></Column> 
            </DataTable>
           
        </div>
    )
}

export default UserGrid
