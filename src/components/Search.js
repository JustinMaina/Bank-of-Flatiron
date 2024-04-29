import React from "react";

export default function Search({transactionn , setTransactionn , transactions}){

    function handleChange(event){
        const value = event.target.value.toLowerCase(); // Convert input value to lowercase
        const filteredTransactions = transactions.filter((transaction) => {
            return transaction.description.toLowerCase().includes(value);
        });
        setTransactionn(filteredTransactions);
    }

    return (
        <>
          <div className="input-group mb-3 p-4">
  <input onChange={handleChange} type="text" className="form-control" placeholder="Filter" aria-describedby="basic-addon2"/>
 
</div>
        </>
    )
}