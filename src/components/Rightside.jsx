import React, { useEffect, useState } from 'react';
import {Chart as ChartJS,BarElement,CategoryScale,LinearScale,Title,Tooltip,Legend,LineElement,PointElement} from 'chart.js'
import { Bar, Line } from 'react-chartjs-2';
import Modal from 'react-modal';

ChartJS.register(CategoryScale,BarElement,LinearScale,Title,Tooltip,Legend,LineElement,PointElement)


export default function Rightside({population,country}) {
  const [chartData,setChartData] = useState({datasets:[],})
  const[chartOptions,setChartOptions] = useState({})
  const [modalIsOpen,setModalIsOpen]  = useState(false)
  
  useEffect(()=>{
    setChartData({
      labels:population?.map(pop=>pop.year),
      datasets:[{
        label:'number of population in '+country?.name,
        data:population?.map(pop=>pop.value),
        borderColor:"black",
        backgroundColor:'blue'
    }]});

    setChartOptions({
      responsive:true,
      title:{
        display:true,
        text:'population'
      },
       maintainAspectRatio:false
    })
  },[country,population])
  
  return (
    <section className='right-side'>
      <button className='line-chart' onClick={()=>{setModalIsOpen(true)}}>Line Chart</button>
      <div style={{width:700,height:700}}>
       <Bar height={700} width={700} data={chartData} options={chartOptions} className={modalIsOpen===true?'dark':null} /> 
      </div>
      <Modal isOpen={modalIsOpen} className='modal' ariaHideApp={false} >
        <button className='close' onClick={()=>{setModalIsOpen(false)}}>x</button>
      <Line height={700} width={700} data={chartData} options={chartOptions} />
      </Modal>
    </section>
  )
}
