import React from "react";
import Row from "./Row";
import { useState } from "react";
import Search from "./Search";
import Form from "./Form";

export default function Table(){

let transactions = [
    {
        date: "2024-04-12",
        description: "Debt",
        category: "Income",
        amount: 3000
    },
    {
        date: "2024-04-13",
        description: "Business",
        category: "Expenses",
        amount: 40000
    },
    {
        date: "2024-04-14",
        description: "Bank loans",
        category: "Expenses",
        amount: 20000
    },
    {
        date: "2024-04-15",
        description: "Personal use",
        category: "Household",
        amount: 10000
    }
]

const [transactionn, setTransactionn] = useState(transactions)

return (
    <>
  <Search transactionn={transactionn} setTransactionn = {setTransactionn} transactions = {transactions}/>
  <Form transactionn={transactionn} setTransactionn = {setTransactionn} />
    <table className="table table-secondary">
<thead>
   <tr>
     <th>Date</th>
     <th>Description</th>
     <th>Category</th>
     <th>Amount</th>
   </tr>
</thead>
<tbody>
    <Row transactions={transactionn}/>
</tbody>
</table>
    </>
)

}