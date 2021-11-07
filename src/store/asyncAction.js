import Web3 from 'web3';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../contract/ABI';
import { loadWeb3, loadContract, loadAccounts, loadTransacitons } from './action';
export const loadBlockchain = async (dispatch) => {
    try {
        if (Web3.givenProvider) {
            const web3 = new Web3(Web3.givenProvider);
            //web3 enable
            await Web3.givenProvider.enable();
            dispatch(loadWeb3(web3))
            //accounts load
            const accounts = await web3.eth.getAccounts();
            console.log("accounts", accounts[0]);
            dispatch(loadAccounts(accounts))
            //contract load
            const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            console.log("contract", contract)
            console.log("contract methods", contract.methods);
            dispatch(loadContract(contract))
            await transactionHistoryAsync(contract, dispatch)

        }
    }
    catch (error) {
        console.log("web3 error", error)
    }
}

export const addTransactionAsync = async (contract, description, amount, accounts) => {
    try {
        const receipt = await contract.methods.addTransaction(description, amount).send({ from: accounts[0] });
        return receipt
    }
    catch (error) {
        console.log("error", error)
    }
}

export const transactionHistoryAsync = async (contract, dispatch) => {
    try {
        let transactionCount = await contract.methods.transactionCount().call();
        let arr = [];
        for (let i = 0; i < transactionCount; i++) {
            const { amount, transactionDescription, transactionOwner } = await contract.methods.transaction(i).call();
            console.log("transactionDesciption", transactionDescription)
            let transactionObj = {
                amount: parseInt(amount),
                transactionDescription,
                transactionOwner
            }
            arr.push(transactionObj)
        }
        dispatch(loadTransacitons(arr))
    }
    catch (error) {

    }
}