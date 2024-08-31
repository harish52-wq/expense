import React from "react"
import {context} from "./App"
import { useContext } from "react"
export default function Transactions(){
    const {setBalance,formData,setFormData,setIncome,setExpense}=React.useContext(context)
    const [inputData,setInputData]=React.useState({
        "name":"",
        "amount":""
    })
    function handleSubmit(e){
       e.preventDefault()
        setFormData(prev=>[...prev,inputData])
      
        if(inputData.amount>0){
            setIncome(prev=>parseInt(prev)+parseInt(inputData.amount))
            setBalance(prev=>parseInt(prev)+parseInt(inputData.amount))
        }
        else if(inputData.amount<0){
          
        const absoluteAmount = Math.abs(inputData.amount);
        setExpense((prev) => prev + absoluteAmount);
        setBalance((prev) => prev - absoluteAmount);
        }

        setInputData({  "name":"",
            "amount":""})
    }
   
    function handleChange(e){
        
        setInputData(prev=>{
            return {...prev,
                [e.target.name]:e.target.value
            }
        })

    }

    return (
        <div className="mt-12 flex-col">
    <form onSubmit={handleSubmit}>    
        <h1 className="ml-14 mb-8">Add New Transactions</h1>
        <input
        onChange={handleChange}
     name="name"
     type="text"
     required
     className="border-2 flex px-2 py-2 ml-12 rounded-2xl"
     placeholder="Enter the text"  
        value={inputData.name}
     />
     <input
     required
     value={inputData.amount}
     onChange={handleChange}
     name="amount"
     type="number"
     className="border-2 mt-4 px-2 flex py-2 ml-12 rounded-2xl"
     placeholder="Enter the Amount"  
     />
     <button className="ml-24 mt-4 bg-slate-400 text-white px-8 py-2 rounded-md">Submit</button>
</form>
 
     
    </div>
    )
}