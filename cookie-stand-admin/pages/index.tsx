import type { NextPage } from 'next'
// import Image from 'next/image'
// import Link from 'next/link'
import { useState } from 'react'
import Header from '../components/header'
// import Form from '../components/form'
// import Table from '../components/table'
import Main from '../components/main'  
import Footer from '../components/footer' 
import From from '../components/form'

import {data,locationSales} from '../components/data'


const Home: NextPage = () => {
  const static_sales = [ 48,42,30,24,42,24,36,42,42,48,36,42,24,36 ]

  const [stand, setStandDetails] = useState({}) 
  const [location, setLocation] = useState("") 
  const [minCustomer, setMinCustomer] = useState(0) 
  const [maxCustomer, setMaxCustomer] = useState(0) 
  const [avgSale, setAvgSale] = useState(0) 
  const [hourlySales, setHourlySales] = useState(static_sales) 
  const [formItems, setFormItems] = useState({}) 





  const [standArray, setstandArray] = useState([]) 

  function locationHandler(event){
    event.preventDefault()
    
    setLocation(event.target.location.value);
    setMinCustomer(event.target.minCustomer.value);
    setMaxCustomer(event.target.maxCustomer.value);
    setAvgSale(event.target.avgSale.value);
    setFormItems(event.target.formItems);

    const json_resp = ["JSON Data"]
    const stand = {
      location: location,
      minCustomer: minCustomer,
      maxCustomer: maxCustomer,
      avgSale:avgSale,
      hourlySales: hourlySales,
      // hourlySales: locationSales[event.target.location.value]
    } 
     

    // const lower_case = location.toLowerCase()
    // const sales = locationSales[lower_case]
    // // setHourlySales(sales)


    // const new_stand = Object.keys(stand).map(function (key, index) {
    //   new_stand.push()
    // });

    console.log(stand);
    setStandDetails(stand);
    setstandArray([...standArray,stand]); 
    setLocation;
    setMinCustomer;
    setMaxCustomer;
    setAvgSale;
    setHourlySales;
    setFormItems;
  }


  function handleChange(event) {
    const newFormItems = {
        ...formItems,
        [event.target.name]: event.target.value,
    };
    setFormItems(newFormItems);
}

  return (
    <div className="">
    <Header/>
    <Main 
      locationHandler={locationHandler} 
      standArray ={standArray}
      handleChange = {handleChange}
    />
    <Footer/>
    </div>
  )
}

export default Home
