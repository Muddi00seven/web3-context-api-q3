import React from 'react'
import { useStore } from '../context/globalState';
import Transaction from './transaction';
const TransactionList = () => {
    const [{ transactions }] = useStore();
    console.log("transactions", transactions)
    return (
        <div>
            <h2>
                History
            </h2>
            <ul className="list">
            {
                transactions && transactions.length != 0 ?
                    transactions.map((transaction, index) =>
                        <Transaction transaction={transaction} key={index} />
                    )
                    : ""
            }
            </ul>
        </div>
    )
}

export default TransactionList
