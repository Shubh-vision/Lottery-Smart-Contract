/* eslint-disable react/jsx-no-comment-textnodes */
import './App.css';
import React, { useState, useEffect } from "react";
import lottery from './lottery.js';
import web3 from './web3';



// import Web3 from "web3";
// import detectEthereumProvider from "@metamask/detect-provider";


function App() {

const[manager, setManager ]=useState('');
const[players, setPlayer ]=useState([]);
const[balance, setBalance ]=useState('');
const[value, setValue ]=useState('');
const[message, setMessage ]=useState('');
const[loader, setLoader] = useState('');



  const getManager = async() =>{
  
    const manager= await lottery.methods.manager().call();
    setManager(manager);
  };
  
  const getPlayers = async() => {
    const players = await lottery.methods.participants().call();
  
    setPlayer(players);
  };
  
  const getBalance = async() => {
    const balance =  await web3.eth.getBalance(lottery.options.address);
  
  setBalance(balance);
  };

  useEffect(()=> {
    getManager();
    getPlayers();
    getBalance();
  
  
  }, [balance]);

  const onSubmit = async(event)=>{
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    console.log(accounts);

    await lottery.methods.enter().send(
      {
        from:accounts[0],
        value:web3.utils.toWei(value, 'ether')
      }
    )
setLoader(!loader);
setMessage("You have been Entered!");
  };

const onEnter = ()=> {
setLoader(!loader);

}

  return (
 <div>

<h2>Lottery Contracts</h2>
<p>This Contract is Managed by {manager}
<br />
There are currently {players.length} people enter to win{" "} 
{web3.utils.fromWei(balance)} ether!!
</p>
<hr />
<form onSubmit = {onSubmit}>
  <h4>Want to Try your Luck ??</h4>
  <div>
<label> Amount of Ether to enter </label>
<input value = {value} onChange = {(event) => setValue(event.target.value)} />
  </div>
  <button onClick = {onEnter}>Enter</button>
</form>

 </div>
  );

}

export default App;
