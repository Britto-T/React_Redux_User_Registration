import React from "react"
import { useDispatch } from "react-redux";
import { useAppSelector } from "./redux/hooks";
import { useEffect} from "react";
import { getUserDetails} from "./redux/user/userSlice";
import {DataTable} from "primereact/datatable"
import { Column } from "primereact/column";
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Tooltip } from 'primereact/tooltip';
import { saveAs } from "file-saver"; 
import { Toast } from 'primereact/toast';
import * as XLSX from 'xlsx';



const PrimeGrid=()=>{ 

  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user.userDetails);
  console.log(user);
  useEffect(() => {
    dispatch(getUserDetails());
  }, []);

  const exportExcel = () => {
    import('xlsx').then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(user);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        saveAsExcelFile(excelBuffer, 'products');
    });
}

const saveAsExcelFile = (buffer:any, fileName:any) => {
    import('file-saver').then(FileSaver => {
        let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
}

const header = (
    <div className="flex align-items-center export-buttons">
        <Button type="button" icon="pi pi-file-excel" onClick={exportExcel} className="p-button-success mr-2" data-pr-tooltip="XLS" />
    </div>
); 

    return(
        <div>
            <Tooltip target=".export-buttons>button" position="bottom" />
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

            <Tooltip target=".export-buttons>button" position="bottom" />
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

export default PrimeGrid
