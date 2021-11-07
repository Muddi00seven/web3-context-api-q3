import React from 'react';
import { useStore } from '../context/globalState';

const Balance = () => {
    const [{ transactions }] = useStore();
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    return (
        <div>
        <h3>
            Your Balance
        </h3>
        <h1>${total}</h1>
        </div>
    )
}

export default Balance
