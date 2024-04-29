import React, { useState } from 'react';
const TransactionForm = (props) => {
    const [description, SetDescription] = useState('');
    const [amount, SetAmount] = useState('');
    const [date, SetDate] = useState('');
    const [category, SetCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddTransaction({ description, amount, date, category });
        SetDescription('');
        SetAmount('');
        SetDate('');
        SetCategory('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <input
                    type="date"
                    placeholder="Date"
                    value={date}
                    onChange={(e) => SetDate(e.target.value)}
                />
    
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => SetDescription(e.target.value)}
                />
    
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => SetCategory(e.target.value)}
                />
    
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => SetAmount(e.target.value)}
                />
    
                <button type="submit">Add Transaction</button>
            </fieldset>
    
        </form>
    )
}



export default TransactionForm;