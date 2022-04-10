import {data,hours} from "../components/data" 

const total = (sales) => {
const total = 0 
sales.forEach((i) => {
    total += i 
})
return total
} 

const Table =({standArray}) => (
<>
        
            {  <table className="w-1/2 mx-auto my-4">
                <thead>
                <tr className ="odd:bg-emerald-400 even:bg-emerald-300"> 
                <td className="border border-gray-700 bg-emerald-400">Location</td>
                    {hours.map((i) => (
                        <td>{i}</td>     
                    ))}
                </tr>

                </thead>
                <tbody>
                    {standArray.map((i) => (
                        <tr className ="odd:bg-emerald-400 even:bg-emerald-300">
                            <td>{i.location}</td>

                            {i?.hourlySales?.map((sale) =>(
                            <td>{sale}</td>
                            ))}
                            <td> {total(i.hourlySales)} </td> 
   
                        </tr> 
                        ))
                    }
                </tbody>
            </table>  
             } 
</>

)
export default Table

