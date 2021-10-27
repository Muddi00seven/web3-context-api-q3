import Web3 from 'web3';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../contract/ABI';
import { loadWeb3 } from './action';
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

            //contract load
            const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            console.log("contract", contract)
            console.log("contract methods", contract.methods);

            //transaction count
            const transactionCount = await contract.methods.transactionCount().call();
            console.log("transactionCount", transactionCount);

            //add transaction
            const addTransaction = await contract.methods.addTransaction("This is my first transaction", 1500).
                send({ from: accounts[0] });
            console.log("addTransaction", addTransaction)

        }
    }
    catch (error) {
        console.log("web3 error", error)
    }
}