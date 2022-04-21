import web3 from './web3';
const address = '0x0608a73A403f554741dbe4b497DD26DE9b1b9544';
const abi =  [
    { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
    {
      inputs: [],
      name: 'getBalance',
      outputs: [ [Object] ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'manager',
      outputs: [ [Object] ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [ [Object] ],
      name: 'participants',
      outputs: [ [Object] ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'random',
      outputs: [ [Object] ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'selectWinner',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    { stateMutability: 'payable', type: 'receive' }
  ]


  export default new web3.eth.Contract(abi, address);

  
