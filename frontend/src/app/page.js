"use client"

import NavBar from "../../components/NavBar";
import axios from "axios";
import TotalExpenses from "../../components/TotalExpenses";
import { useState, useEffect } from "react";

export default function Page() {
  const [selectMonth, setSelectMonth] = useState("2023-10")
  const [data, setData] = useState()
  
  //Get the data from the rest API expense endpoint
  useEffect(() => {
    axios.get("http://localhost:8000/expenses")
      .then(res => {
        console.log(res.data)
        setData(res.data) //set the data expenses to this data variable
      })
      .catch(error => {
        console.error("Axios Error:", error)
      })
    }, [])
  
  return (
    <>
      <NavBar />
      <h1>This is home page</h1>
      <select 
        value={selectMonth}
        onChange={(e) => setSelectMonth(e.target.value)}>
          <option value="2023-12">December 2023</option>
          <option value="2023-11">November 2023</option>
          <option value="2023-10">October 2023</option>
          <option value="2023-09">September 2023</option>
          <option value="2023-08">August 2023</option>
          <option value="2023-07">July 2023</option>
          <option value="2023-06">June 2023</option>
          <option value="2023-05">May 2023</option>
          <option value="2023-04">April 2023</option>
          <option value="2023-03">March 2023</option>
          <option value="2023-02">February 2023</option>
          <option value="2023-01">January 2023</option>
      </select>
      <TotalExpenses data={data} selectMonth={selectMonth}/>
    </>
  )
}