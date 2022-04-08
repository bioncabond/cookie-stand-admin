import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Home: NextPage = () => {

  const [stand, setStandDetails] = useState({})

  function locationHandler(event){
    event.preventDefault();

    const json_resp = ["JSON Data"]
    const stand = {
      location: event.target.location.value,
      minCustomer: event.target.minCustomer.value,
      maxCustomer: event.target.maxCustomer.value,
      avgSale: event.target.avgSale.value,
    }
    // const new_stand = Object.keys(stand).map(function (key, index) {
    //   new_stand.push()
    // });

    console.log(stand);
    setStandDetails(stand);
  }


  return (
    <div className="">
      <Head>
        <title>Cookie Stand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> 



      <header className="flex items-center justify-between p-4 bg-emerald-500 text-black-50">
        <h1 className="text-4xl">Cookie Stand Admin</h1>
        <p></p>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center bg-emerald-50">
          <form onSubmit={locationHandler} className="w-3/4 p-4 m-4 rounded bg-emerald-400">

            <h2>Create Cookie Stand</h2>
            <div className="mb-6">
              <label>Location</label> 
              <input name="location" className="flex-auto w-3/4 m-4 bg-slate-200"></input>
            </div>

            <div className ="flex items-center justify-center flex- w-3/4">
              <label><span>Minimum Customers per Hour</span>
                <input
                  name="minCustomer" 
                  type="number"
                  min="0" 
                  className="flex-auto m-1">
                </input>
              </label>

              <label><span>Maximum Customers per Hour</span>
                <input
                  name="maxCustomer" 
                  type="number"
                  min="0" 
                  className="flex-auto m-1">
                </input>
              </label>

              <label><span>Average Cookies per Sale</span>
                <input
                  name="avgSale" 
                  type="number"
                  min="0" 
                  className="flex-auto m-1">
                </input>
              </label>

              <button className="w-4/12 p-4 rounded bg-emerald-50" type="submit">Create</button>
            </div>
          </form>

          <p className="text-grey-100">Stay Tuned For Some Very Interesting Report Table</p>
          <p className="text-grey-100"> &#123; "location": {stand.location} "minCustomer": {stand.minCustomer} "maxCustomer": {stand.maxCustomer} "avgSale": {stand.avgSale} &#125;</p>

        {/* <table className="w-1/2 mx-auto my-4">
          <thead>
            <tr>
              <th className="border border-gray-700">Location</th>
              <th className="border border-gray-700">Minimum Customer</th>
              <th className="border border-gray-700">Maximum Customer</th>
              <th className="border border-gray-700">Average Sale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pl-2 border border-gray-700">{stand.location}</td>
              <td className="pl-2 border border-gray-700">{stand.minCustomer}</td>
              <td className="pl-2 border border-gray-700">{stand.maxCustomer}</td>
              <td className="pl-2 border border-gray-700">{stand.avgSale}</td>
            </tr>
          </tbody>
        </table> */}
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Home
