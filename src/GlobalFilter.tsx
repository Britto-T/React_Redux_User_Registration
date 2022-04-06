
import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Slider } from 'primereact/slider';
import{useAppSelector} from "./redux/hooks"
import { useDispatch } from "react-redux";
import { setUserDetails} from "./redux/user/userSlice";
import "./GlobalFilter.css"
import { Toast } from 'primereact/toast';

const GlobalFilter = () => {
    const dispatch = useDispatch();
    const user = useAppSelector((state) => state.user.userDetails);

    const [filters, setFilters] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'id': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'address.street': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'address.city': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'address.zipcode': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] }
    });

    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const onGlobalFilterChange = (e:any) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    }

    const renderHeader = () => {
        return (
            <div className="flex justify-content-between align-items-center">
                <h5 className="m-0">Users</h5>
                <Button type="button" icon="pi pi-filter-slash" label="Clear" className="p-button-outlined" onClick={clearFilter1} />
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        )
    }

    const clearFilter1 = () => {
        initFilters1();
    }

    useEffect(() => {
        initFilters1();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const initFilters1 = () => {
        setFilters({
            'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
            'id': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            'address.street': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            'address.city': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            'address.zipcode': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] }
        });
        setGlobalFilterValue('');
    }

    const header = renderHeader();

    const textEditor = (options:any) => {
        console.log(options);
        console.log(options.value);
        console.log(options.rowData.address.street);
        return (<InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />);
    }

    const onRowEditComplete = (e:any) => {
        let _user = [...user];
        let { newData, index } = e;
        _user[index] = newData;
        dispatch(setUserDetails(_user));
    }
    
    return (
        <div className="datatable-doc-demo">
            <div className="card">
                <DataTable value={user} paginator className="p-datatable-customers" header={header} rows={10}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10,25,50]}
                    dataKey="id" rowHover
                    filters={filters} filterDisplay="menu" responsiveLayout="scroll"
                    globalFilterFields={['id','name', 'address.street', 'address.city', 'address.zipcode']} emptyMessage="No Users found."
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries" editMode="row"
                    onRowEditComplete={onRowEditComplete}>
                    <Column field="id" header="ID"  editor={(options) => textEditor(options)} sortable filter filterPlaceholder="Search by Id" style={{ minWidth: '14rem' }} />
                    <Column field="name" header="Name" editor={(options) => textEditor(options)} sortable filter filterPlaceholder="Search by Name" style={{ minWidth: '14rem' }} />
                    <Column field="address.street" header="Street" editor={(options) => textEditor(options)} sortable filter filterPlaceholder="Search by Street" style={{ minWidth: '14rem' }} />
                    <Column field="address.city" header="City" editor={(options) => textEditor(options)} sortable filter filterPlaceholder="Search by City" style={{ minWidth: '14rem' }} />
                    <Column field="address.zipcode" header="Zipcode" editor={(options) => textEditor(options)} sortable filter filterPlaceholder="Search by Zipcode" style={{ minWidth: '14rem' }} />
                    <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                </DataTable>
            </div>
        </div>
    );
}
export default GlobalFilter