import React from 'react'
import { MapContainer, TileLayer,Marker,Popup,} from 'react-leaflet'
import Position from './Lscomponents/Position';
import Line from './Lscomponents/Line';
import Country from './Lscomponents/Country';
import L from "leaflet";
import MarkerClusterGroup from 'react-leaflet-markercluster';


export default function Leftside({setLocation,country,location,flag,submitHandle,setInput}) {
   
      
    const communes= [[50.8783604,4.326155],[50.8626258,4.3823797],
    [50.8688122,4.4096791],[50.8331141,4.3668279],[50.8380996,4.390414],
    [50.8346853,4.3039761],[50.8553934,4.3291109],[50.8735418,4.3068262],
    [50.8617467,4.327459],[50.8311907,4.3416799],[50.8594359,4.2951187],[50.8529853,4.3720152],
    [50.8471177,4.4335809],[50.8319061,4.4195913],[50.7974173,4.3445519],[50.8165234,4.3266189],
    [50.8011964,4.4134357],[50.8465573,4.351697],[50.8150987,4.4234334]]
   
   
    function handleChange(e){
        console.log(e.target.value);
        setInput(e.target.value);
      }
      const communeImg = new L.Icon({
        iconUrl:'city-hall.svg',
        iconSize:[25,25]
      });
      
   
  return (
    <section className='left-side'>
    <MapContainer center={[50.850346, 4.351721]} zoom={10} scrollWheelZoom={true}>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

      <MarkerClusterGroup showCoverageOnHover={false} >
      {communes.map((commune,index)=>
      <Marker position={commune} className='commune' icon={communeImg} key={index}>
      <Popup>commune</Popup>
      </Marker>)}
      </MarkerClusterGroup>

      <section className='form'>
        <form action="" onSubmit={submitHandle}>
        <input type="text" onChange={handleChange} placeholder='write a country name' />
          <button type='submit'>search</button>
        </form>
      </section>

      <Position setLocation={setLocation} location={location} />
      <Country country={country} flag={flag} />
      <Line country={country} location={location} />

    </MapContainer>

    </section>
  )
}
