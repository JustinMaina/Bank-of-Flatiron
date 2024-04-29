import React from "react";
import { useState } from "react";

export default function Form({transactionn, setTransactionn}){

    const [formData, setformData] = useState({
        date:"",
        description:"",
        category:"",
        amount:""
     })

    function handleSubmit(event){
         event.preventDefault();
         setTransactionn([...transactionn ,formData])

    }
    function handleChange(event){
       setformData(
        {
            ...formData,
            [event.target.name] : event.target.value
        }
       )
       console.log(formData)
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <div className="row m-4"> 
            
              <div className="col-3 d-flex ">
              <span>Date:</span>
                 <input className="form-control form-control-sm" name="date" onChange={handleChange} value={formData.date} type="date"/>
              </div>
              <div className="col-3">
                 <input className="form-control form-control-sm" name="description" onChange={handleChange} value={formData.description} placeholder="Enter Description"  type="text"/>
              </div>
              <div className="col-3">
                 <input className="form-control form-control-sm" name="category" onChange={handleChange} value={formData.category} placeholder="Enter Category"  type="text"/>
              </div>
              <div className="col-3">
                 <input className="form-control form-control-sm" name="amount" onChange={handleChange} value={formData.amount} placeholder="Enter Amount"  type="text"/>
              </div>
              <div className="col-4 mx-auto mt-2">
              <button type="submit" className="btn btn-light">Add Transaction</button>
              </div>
            </div>
        </form>
        </>
    )
}