import {data} from '../components/data'  
import Form from '../components/form'
import Table from '../components/table'

const Main =({standArray,locationHandler}) => (
<> 
    <div className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center bg-emerald-50"> 
    <Form locationHandler = {locationHandler}/>
    <Table standArray = {standArray}/>   
    </div>
</>
)

export default Main