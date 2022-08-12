import React from 'react'
import "./home.css"
import { useWeb3React } from '@web3-react/core'
import { injected } from '../../components/connectors/injected';

const Home = () => {
  const {active, acount, activate, deactivate} = useWeb3React();
  
  // click to connect
  const connect = async() => {
    try {
      await activate(injected)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button className='home-button' onClick={connect}>
        <img className='logo' src="/assets/images/logo.png" alt="" />
        Connet to MetaMask
      </button>
    </div>
  )
}

export default Home