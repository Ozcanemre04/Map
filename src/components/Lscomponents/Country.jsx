import React from 'react'
import { Marker,Popup,useMap } from 'react-leaflet'
import L from "leaflet";

export default function Country({country,flag}) {

    function SetViewOnClick({ coords }) {
        const map = useMap();
        map.setView(coords, map.getZoom());
        return null;}

    const flagImg = new  L.Icon({iconUrl:flag,iconSize:[30,30]})
      
  return (
    <>
       {country !== undefined && flag!==undefined &&
      <Marker position={[country?.lat,country?.long]} icon={flagImg}>
        <Popup>
          <p>{country?.name}</p>
        </Popup>
        <SetViewOnClick coords={[country?.lat,country?.long]} />
      </Marker>
     }
    </>
  )
}
