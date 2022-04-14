import React from "react"
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from "./Home"
import Users from "./Users"
import PrimeGrid from "./PrimeGrid"
import UserTileGrid from "./UserTileGrid"
import PrimeDropDown from "./PrimeDropDown"
import PrimeFileUpload from "./PrimeFileUpload"
import LeafletMap from "./LeafletMap"
import LayersControlExample from "./LayersControl"
import MapEvents from "./MapEvents"
import MapVectorLayers from "./MapVectorLayers"
import SVGOverlayExample from "./SvgOverlay"
import OtherLayersExample from "./OtherLayers"
import { Tooltip } from "leaflet"
import TooltipsExample from "./ToolTips"
import PanesExample from "./Panes"
import DraggableMarkerExample from "./DraggableMarker"
import ViewBounds from "./ViewBounds"
import AnimateExample from "./AnimatedPane"
import MapWithPlaceholder from "./MapPlaceHolder"
import ReactControlExample from "./ReactControl"

const NavBar=()=>{
    return(
       
    <BrowserRouter>
     <header className="header">
		<h1 className="logo"><a href="#">React Training</a></h1>
    <div>
      <ul className="main-nav">
          <li><Link to="Home">Home</Link></li>
          <li><Link to="Users">Users</Link></li>
          <li><Link to="PrimeGrid">Prime Grid</Link></li>
          <li><Link to="Tile-Grid">Tile-Grid</Link></li>
          <li><Link to="PrimeDropDown">DropDown</Link></li>
          <li><Link to="PrimeFileUpload">File Upload</Link></li>
          <li><Link to="Leaflet">Map</Link></li>
          <li><Link to="LayersControlExample">LayersControl</Link></li>
          <li><Link to="MapEvents">MapEvents</Link></li>
          <li><Link to="MapVectorLayers">Vectors</Link></li>
          <li><Link to="SVGOverlay">SVGOverlay</Link></li>
          <li><Link to="OtherLayers">OtherLayers</Link></li>
          <li><Link to="ToolTips">ToolTips</Link></li>
          <li><Link to="Panes">Panes</Link></li>
          <li><Link to="DraggableMarker">DraggableMarker</Link></li>
          <li><Link to="ViewBounds">ViewBounds</Link></li>
          <li><Link to="AnimatedPane">AnimatedPane</Link></li>
          {/* <li><Link to="ExternalState">ExternalState</Link></li> */}
          <li><Link to="Placeholder">Placeholder</Link></li>
          <li><Link to="ReactControl">ReactControl</Link></li>
          <li><a href="#">Factorial</a></li>
          <li><Link to="Student">Student</Link></li>
      </ul>    
      </div>
      </header> 
      <Routes>
        <Route path="Home" element={<Home/>}></Route>
        <Route path="Users" element={<Users/>}></Route>
        <Route path="PrimeGrid" element={<PrimeGrid/>}></Route>
        <Route path="Tile-Grid" element={<UserTileGrid/>}></Route>
        <Route path="PrimeDropDown" element={<PrimeDropDown/>}></Route>
        <Route path="PrimeFileUpload" element={<PrimeFileUpload/>}></Route>
        <Route path="Leaflet" element={<LeafletMap/>}></Route>
        <Route path="LayersControlExample" element={<LayersControlExample/>}></Route>
        <Route path="MapEvents" element={<MapEvents/>}></Route>
        <Route path="MapVectorLayers" element={<MapVectorLayers/>}></Route>
        <Route path="SVGOverlay" element={<SVGOverlayExample/>}></Route>
        <Route path="OtherLayers" element={<OtherLayersExample/>}></Route>
        <Route path="ToolTips" element={<TooltipsExample/>}></Route>
        <Route path="Panes" element={<PanesExample/>}></Route>
        <Route path="DraggableMarker" element={<DraggableMarkerExample/>}></Route>
        <Route path="ViewBounds" element={<ViewBounds/>}></Route>
        <Route path="AnimatedPane" element={<AnimateExample/>}></Route>
        {/* <Route path="ExternalState" element={<ExternalStateExample/>}></Route> */}
        <Route path="Placeholder" element={<MapWithPlaceholder/>}></Route>
        <Route path="ReactControl" element={<ReactControlExample/>}></Route>
      </Routes>
    </BrowserRouter>
    )
}

export default NavBar