import { useEffect, useState } from 'react';

import './App.css';
import axios from "axios";
import Rightside from './components/Rightside';
import Leftside from './components/Leftside';

function App() {
  const [country,setCountry] = useState()
  const [input,setInput] = useState()
  const [location,setLocation]  =useState()
  const [flag,setFlag] = useState()
  const [population,setPopulation] = useState()
  

function submitHandle(e){
e.preventDefault()
axios.post('https://countriesnow.space/api/v0.1/countries/positions',{
  'country':input
})
.then(res=>setCountry(res.data.data))
}
useEffect(()=>{
axios.post('https://countriesnow.space/api/v0.1/countries/flag/images',{
  "iso2":country?.iso2
})
.then(res=>setFlag(res.data.data.flag))
},[country])


useEffect(()=>{
  axios.post('https://countriesnow.space/api/v0.1/countries/population',{
    'country':country?.name
  })
  .then(res=>setPopulation(res.data.data.populationCounts))
},[country])

  console.log(location);

  return (
    <main>
      <Rightside  population={population} country={country} />
      <Leftside  country={country} setLocation={setLocation} location={location} flag={flag} submitHandle={submitHandle} setInput={setInput}/>
    </main>
  );
}

export default App;
