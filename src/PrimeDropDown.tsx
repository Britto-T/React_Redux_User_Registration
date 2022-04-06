import React from "react"
import { useState, useEffect, useRef } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Skeleton } from 'primereact/skeleton';
import { getUserDetails} from "./redux/user/userSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./redux/hooks";
import './PrimeDropDown.css';


const PrimeDropDown=()=>{

const [basicDropDown, setBasicDropDown] = useState<any>(null);

const [userDropDown, setuserDropDown] = useState<any>(null);

const [editDropDown, setEditDropDown] = useState<any>(null);
const [userEditDropDown, setUserEditDropDown] = useState<any>(null);

const [selectedGroupedCity, setSelectedGroupedCity] = useState<any>(null);

const [selectedCountry, setSelectedCountry] = useState<any>(null);

const [selectedItem, setSelectedItem] = useState<any>(null);

const [selectedItem2, setSelectedItem2] = useState<any>(null);

const [lazyItems, setLazyItems] = useState<any>([]);

const [lazyLoading, setLazyLoading] = useState<any>(false);

const loadLazyTimeout = useRef(null);

const dispatch = useDispatch();

const user = useAppSelector((state) => state.user.userDetails);
useEffect(() => {
    dispatch(getUserDetails());
  }, []);

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

const groupedCities = [
    {
        label: 'Germany', code: 'DE',
        items: [
            { label: 'Berlin', value: 'Berlin' },
            { label: 'Frankfurt', value: 'Frankfurt' },
            { label: 'Hamburg', value: 'Hamburg' },
            { label: 'Munich', value: 'Munich' }
        ]
    },
    {
        label: 'USA', code: 'US',
        items: [
            { label: 'Chicago', value: 'Chicago' },
            { label: 'Los Angeles', value: 'Los Angeles' },
            { label: 'New York', value: 'New York' },
            { label: 'San Francisco', value: 'San Francisco' }
        ]
    },
    {
        label: 'Japan', code: 'JP',
        items: [
            { label: 'Kyoto', value: 'Kyoto' },
            { label: 'Osaka', value: 'Osaka' },
            { label: 'Tokyo', value: 'Tokyo' },
            { label: 'Yokohama', value: 'Yokohama' }
        ]
    }
];

const countries = [
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
];

const items = Array.from({ length: 100000 }).map((_, i) => ({ label: `Item #${i}`, value: i }));

const onBasicDropDownChange = (e: { value: any}) => {
    setBasicDropDown(e.value);
}
const onUserDropDownChange = (e: { value: any}) => {
    setuserDropDown(e.value);
}

const onChangeEditDropDown = (e: {value: any} ) => {
    setEditDropDown(e.value);
}

const onChangeUserEditDropDown = (e: {value: any} ) => {
    setUserEditDropDown(e.value);
}

const onGroupedCityChange=(e: {value: any})=> {
    setSelectedGroupedCity(e.value);
}

const groupedItemTemplate = (option: any) => {
    return (
        <div className="flex align-items-center country-item">
            <img alt={option.label} src="images/flag/flag_placeholder.png" onError={handleError} className={`flag flag-${option.code.toLowerCase()}`} />
            <div>{option.label}</div>
            {/* <img alt={option.label} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} />
                <div>{option.label}</div> */}
        </div>
    );
}
const handleError=(e:any)=>{
    e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'
}

const onCountryChange = (e: {value: any}) => {
    setSelectedCountry(e.value);
}

const selectedCountryTemplate = (option: { name: string, code: string }, props: { placeholder: string }) => {
    if (option) {
        return (
            <div className="country-item country-item-value">
                <img alt={option.name} src="images/flag/flag_placeholder.png" onError={handleSelectedCountryTemplateError} className={`flag flag-${option.code.toLowerCase()}`} />
                <div>{option.name}</div>
            </div>
        );
    }

    return (
        <span>
            {props.placeholder}
        </span>
    );
}

const handleSelectedCountryTemplateError=(e:any)=>{
    e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'
}

const countryOptionTemplate = (option: any) => {
    return (
        <div className="country-item">
            <img alt={option.name} src="images/flag/flag_placeholder.png" onError={handleSelectedCountryOptionError} className={`flag flag-${option.code.toLowerCase()}`} />
            <div>{option.name}</div>
        </div>
    );
}

const handleSelectedCountryOptionError=(e:any)=>{
    e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'
}

const onItemChange = (e: {value: any}) => {
    setSelectedItem(e.value);
}

useEffect(() => {
    setLazyItems(Array.from({ length: 100000 }));
    setLazyLoading(false);
},[]); // eslint-disable-line react-hooks/exhaustive-deps
const onLazyItemChange = (e: {value: any}) => {
    setSelectedItem2(e.value)
}

const onLazyLoad = (event:any) => {
    setLazyLoading(true);

    if (lazyLoading) {
        clearTimeout(lazyLoading);
    }

    //imitate delay of a backend call
    let loadLazyTimeout = setTimeout(() => {
        const { first, last } = event;
        const _lazyItems = [...lazyItems];

        for (let i = first; i < last; i++) {
            _lazyItems[i] = { label: `Item #${i}`, value: i };
        }

        setLazyItems(_lazyItems);
        setLazyLoading(false);
    }, Math.random() * 1000 + 250);
}



return(
    <div className="dropdown-demo">
    <div className="card">
        <h5>Basic</h5>
        <Dropdown value={basicDropDown} options={cities} onChange={onBasicDropDownChange} optionLabel="name" placeholder="Select a City" />
        <Dropdown value={userDropDown} options={user} onChange={onUserDropDownChange} optionLabel="id" placeholder="Select an User" />

        <h5>Editable</h5>
        <Dropdown value={editDropDown} options={cities} onChange={onChangeEditDropDown} optionLabel="name" editable />
        <Dropdown value={userEditDropDown} options={user} onChange={onChangeUserEditDropDown} optionLabel="name" editable />

        <h5>Grouped</h5>
        <Dropdown value={selectedGroupedCity} options={groupedCities} onChange={onGroupedCityChange} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items"
                    optionGroupTemplate={groupedItemTemplate} />

        <h5>Advanced with Templating, Filtering and Clear Icon</h5>
        <Dropdown value={selectedCountry} options={countries} onChange={onCountryChange} optionLabel="name" filter showClear filterBy="name" placeholder="Select a Country"
        valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} />

        <h5>Virtual Scroll (100000 Items)</h5>
        <Dropdown value={selectedItem} options={items} onChange={onItemChange} virtualScrollerOptions={{ itemSize: 38 }} placeholder="Select Item"/>

        <h5>Virtual Scroll (100000 Items) and Lazy</h5>
                <Dropdown value={selectedItem2} options={lazyItems} onChange={onLazyItemChange} virtualScrollerOptions={{ lazy: true, itemSize: 38, showLoader: true,onLazyLoad: onLazyLoad, loading: lazyLoading, delay: 250, loadingTemplate: (options) => {
                    return (
                        <div className="flex align-items-center p-2" style={{ height: '38px' }}>
                            <Skeleton width={options.even ? '60%' : '50%'} height="1rem" />
                        </div>
                    )}
                }} placeholder="Select Item"/>


    </div>
    </div>
)
}
export default PrimeDropDown