import React from "react";

export default function Row({transactions}){
    const row = transactions.map((transaction, index) =>{
        return (
            <tr key={index+1}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
            </tr>
        )
    })
 return(
    <>
    {row}
    </>
 )
}