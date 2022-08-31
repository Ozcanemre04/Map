import React from 'react'
import { Polyline } from 'react-leaflet'

export default function Line({country,location}) {
   const polyline = [[[country?.lat,country?.long],location]]
  return (
    <>
     {location !==undefined && country!==undefined &&
     <Polyline  positions={polyline} />}
    </>
  )
}
