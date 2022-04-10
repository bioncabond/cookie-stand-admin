import { useState } from "react";
// import useResource from "../hooks/useResource";

export default function CreateForm({locationHandler}) {
    const [formItems, setFormItems] = useState({});
    // const { createResource } = useResource();

    function handleChange(event) {
        const newFormItems = {
            ...formItems,
            [event.target.name]: event.target.value,
        };
        setFormItems(newFormItems);
    }

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     createResource(formItems);
    // }

    return (
        <form onSubmit={locationHandler} className="w-3/4 p-4 m-4 rounded bg-emerald-400">

            <h2>Create Cookie Stand</h2>
            <div className="mb-6">
              <label>Location</label> 
              <input name="location" className=" w-3/4 m-4 bg-slate-200"></input>
            </div>

            <div className ="flex items-center justify-center">
              <label><span>Minimum Customers per Hour</span>
                <input
                  name="minCustomer" 
                  type="number"
                  min="0" 
                  className=" m-1">
                </input>
              </label>

              <label><span>Maximum Customers per Hour</span>
                <input
                  name="maxCustomer" 
                  type="number"
                  min="0" 
                  className=" m-1">
                </input>
              </label>

              <label><span>Average Cookies per Sale</span>
                <input
                  name="avgSale" 
                  type="number"
                  min="0" 
                  className=" m-1">
                </input>
              </label>

              <button className=" w-4/12 p-4 rounded bg-emerald-500" type="submit">Create</button>
            </div>
          </form>
    )
}