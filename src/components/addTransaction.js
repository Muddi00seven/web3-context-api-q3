import React, { useState } from 'react'
import { addTransactionAsync,transactionHistoryAsync } from '../store/asyncAction';
import { useStore } from '../context/globalState';

const AddTransaction = () => {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const [{ web3, contract, accounts }, dispatch] = useStore();

    const handleSubmit = async () => {
        try {
            await addTransactionAsync(contract, description, amount, accounts);
            await transactionHistoryAsync(contract,dispatch)
        }
        catch (error) {
            console.log("error", error)
        }
    }
    return (
        <div>
            <h2>
                Add new Transaction
        </h2>
            <div className="">
                <label>
                    Description
                </label>
                <input
                    onChange={(e) => setDescription(e.target.value)}
                    value={description} 
                    type="text"
                    placeholder="Enter description"/>
            </div>
            <div>
                <label>
                    Amount
                </label>
                <input type="number" onChange={(e) => setAmount(e.target.value)}
                    value={amount} placeholder="Enter amount"/>
            </div>
            <div>
                <button className="btn" onClick={handleSubmit}>
                    Submit
            </button>
            </div>
        </div>
    )
}

export default AddTransaction
