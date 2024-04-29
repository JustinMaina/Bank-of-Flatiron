import Row from './Row';
export default function Table() {
  
    const transactions = [
        {
            date: "14/04/2024",
            description: "Movies",
            category: "Horror",
            amount: 4000
        },
        {    date: "15/04/2024",
            description: "Business",
            category: "Logistics",
            amount: 50000
        },
        {
            date: "16/04/2024",
            description: "Salary",
            category: "Income",
            amount: 60000
        },
        {
            date: "17/04/2024",
            description: "Personal use",
            category: "Shopping",
            amount: 7000
        }    
    ]

    return(
        <table className = "table table-light">
            <thead>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Action</th>
            </tr>  
            </thead>
           <tbody>
                <Row transactions = {transactions}/>
           </tbody>

        </table>
    )
}
