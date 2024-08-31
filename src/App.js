import logo from './logo.svg';
import './App.css';
import { createContext } from 'react';
import React from "react"
import Transactions from './Transactions';
import Balance from "./balance"
import History from "./History"
const context=React.createContext()


export default function App() {
    const [balance,setBalance]=React.useState(0)
    const [income,setIncome]=React.useState(0)
    const [expense,setExpense]=React.useState(0)
    const [formData,setFormData]=React.useState([{
      "name":"",
      "amount":""
    }])
    return (
      <context.Provider value={{setExpense,setIncome,setBalance,formData,setFormData,balance,income,expense}}>
        <div className="flex flex-col text-xl justify-start mt-24 h-screen items-center ">
        <Balance/>
        <History/>
        <Transactions/>
        </div>

      </context.Provider>
    )

 
}

export  {context}
