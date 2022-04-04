import React from "react"
import { useDispatch } from "react-redux";
import { useAppSelector } from "./redux/hooks";
import { useEffect} from "react";
import { getUserDetails} from "./redux/user/userSlice";
import {DataTable} from "primereact/datatable"
import { Column } from "primereact/column";
import { Tooltip } from 'primereact/tooltip';

const PrimeGrid=()=>{ 

  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user.userDetails);
  
  const filterClearTemplate = (options:any) => {
    return <>
    <button type="button" onClick={options.filterClearCallback} className="p-button-secondary"></button>
    </>
}


    return (
      <div>
        <Tooltip target=".export-buttons>button" position="bottom" />
        <DataTable
          value={user}
          responsiveLayout="scroll"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropDown"
          dataKey="id"
          paginator
          emptyMessage="No users  found"
          className="datatable-responsive"
          currentPageReportTemplate="showing {first} to {last} of TotalRecords Post"
          rows={5}
        >
          <Column field="id" sortable header="Id"></Column>
          <Column field="name" sortable header="Name"></Column>
          <Column field="address.street" sortable header="Street"></Column>
          <Column field="address.city" sortable header="City"></Column>
          <Column field="address.zipcode" sortable header="Zipcode"></Column>
        </DataTable>

        <div className="datatable-filter-demo">
          <DataTable
            value={user}
            filterDisplay="row"
            editMode="cell"
            className="editable-cells-table"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropDown"
            dataKey="id"
            paginator
            emptyMessage="No users  found"
            currentPageReportTemplate="showing {first} to {last} of TotalRecords Post"
            rows={5}>
            <Column field="id" sortable header="Id"></Column>
            <Column field="name" sortable header="Name" filter filterPlaceholder="Search by name"></Column>
            <Column field="address.street" sortable header="Street"  filter filterPlaceholder="Search by street"></Column>
            <Column field="address.city" sortable header="City" filter filterPlaceholder="Search by city"></Column>
            <Column field="address.zipcode" sortable header="Zipcode" filter filterPlaceholder="Search by zipcode"></Column>
          </DataTable>
        </div>
        
        <div className="datatable-filter-demo">
          <DataTable
            value={user}
            filterDisplay="menu"
            dataKey="id" 
            globalFilterFields={['name', 'address.street', 'address.city', 'address.zipcode']}
            editMode="cell"
            className="editable-cells-table"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropDown"
            paginator
            emptyMessage="No users  found"
            currentPageReportTemplate="showing {first} to {last} of TotalRecords Post"
            rows={5}>
            <Column field="id" sortable header="Id"></Column>
            <Column field="name" sortable header="Name" filter filterPlaceholder="Search by name"></Column>
            <Column field="address.street" sortable header="Street"  filter filterPlaceholder="Search by street"></Column>
            <Column field="address.city" sortable header="City" filter filterPlaceholder="Search by city"></Column>
            <Column field="address.zipcode" sortable header="Zipcode" filter filterPlaceholder="Search by zipcode"></Column>
          </DataTable>
        </div>
      </div>
    );
}

export default PrimeGrid
