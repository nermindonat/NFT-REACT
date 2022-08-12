import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import {useWeb3React} from "web3"
import { injected } from "./components/connectors/injected";
import { Web3ReactProvider } from "@web3-react/core";
import Collection from "./pages/collections/Collection";
//import {} from "web3";


const getLibrary = (provider) => {
  return new Web3ReactProvider(provider);
};
const App = () => {
  const { active, acount, activate, deactivate } = useWeb3React();

  const [isLogin, setIsLogin] = useState(false);

    // click to connect
    const connect = async () => {
      try {
        await activate(injected);
        setIsLogin(true);
  
      } catch (error) {
        console.log(error);
      }
    };
  
  return (


    <>
      {/* {isLogin ? <Collection /> : <Home setIsLogin={setIsLogin}  />} */}
      <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <div className="metamask">
          <div className="connect-metamask">
            <img className="logo" src="/assets/images/logo.png" alt="" />
            <span>Connet to MetaMask</span>
          </div>
          <button className="home-button" onClick={connect}>
            <img
              className="logo"
              src="/assets/images/polygon_logo.png"
              alt=""
            />
            Plygon Network
          </button>

          <button className="home-button" onClick={connect}>
            <img className="logo" src="/assets/images/bsc_logo.png" alt="" />
            BSC Network
          </button>
        </div>
      </div>
    </Web3ReactProvider>
    </>
  
  
  );

};

export default App;
