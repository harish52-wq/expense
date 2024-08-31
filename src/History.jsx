import React from "react"
import {context} from "./App"
import {useContext} from "react"
import { v4 as uuidv4 } from 'uuid';
export default function History(){
    const {formData}=useContext(context)
    console.log((formData))
    return (
        <div className="w-40 mt-4">
            <h1>History</h1>
            {formData
            .filter((x)=>x.name.trim()!=="")
            .map(x=>{
                if(x.name!=" "){
                return (
                    <div style={{backgroundColor:"#D1D9E0"}} className="rounded-2xl px-2 w-56 py-3 mt-2 flex justify-between" key={uuidv4()}>
                        <h1 className="">{x.name}</h1>
                        <h1>  ${x.amount}</h1>
                    </div>
                )
         }         })}
        
        </div>
    )
}