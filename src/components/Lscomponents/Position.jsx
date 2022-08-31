import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { Marker,Popup, Circle} from 'react-leaflet'

export default function Position({setLocation,location}) {

  function handleclick() { 
    navigator.geolocation.getCurrentPosition(function(position) {
    setLocation([position.coords.latitude,position.coords.longitude])})}

  const blue ={fillColor:'blue'};
  return (
    <>
     <button onClick={handleclick} className='position'>
      <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
     </button>
      {location !== undefined &&
     <Marker position={location}>
      <Popup>your location</Popup>
      <Circle center={location} radius={50} pathOptions={blue}></Circle>
     </Marker> 
     }
    </>
  )
}
