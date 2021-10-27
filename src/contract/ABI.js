
export const CONTRACT_ADDRESS = "0xAfc45550be02105f374D207c8025ba5a108270f0"

export const CONTRACT_ABI = [
    {
        "inputs": [],
        "name": "balance",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "transaction",
        "outputs": [
            {
                "internalType": "address",
                "name": "transactionOwner",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "transactionDescription",
                "type": "string"
            },
            {
                "internalType": "int64",
                "name": "amount",
                "type": "int64"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "int64",
                "name": "amount",
                "type": "int64"
            }
        ],
        "name": "addTransaction",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "transactionCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "getHello",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "pure",
        "type": "function",
        "constant": true
    }
]