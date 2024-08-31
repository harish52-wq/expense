import React from "react"
import {context} from "./App"
import { useContext } from "react"
export default function Balance(){
    const {balance,income,expense}=React.useContext(context)

    return (
        <div className=" ">
              <h1 className="mb-4">Expense Tracker</h1>
            <h1 className=" ">YOUR BALANCE</h1>
            <h1 className="text-2xl text-left w-32">${balance}.00</h1>
            <div  className="w-32 flex flex-row">
               <div className="mr-8">
                 <h1 className="mt-4">INCOME</h1>
                <h1 style={{color:"green"}}>{income}</h1>
            </div>
            <div>
                
            <h1 className="mt-4">EXPENSE</h1>
                <h1 style={{color:"red"}}>{expense}</h1>
            </div>
            </div>
        </div>
    )
}