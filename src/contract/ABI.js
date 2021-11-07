
export const CONTRACT_ADDRESS = "0x86F5a7e90c2e923707e999e4001d399afa5554dA"

export const CONTRACT_ABI = [
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
		"name": "balance",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
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
		"type": "function"
	}
]