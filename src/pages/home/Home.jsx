import React from "react";
import "./home.css";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../../components/connectors/injected";
import { Web3ReactProvider } from "@web3-react/core";
import Collection from "../collections/Collection";

const Home = () => {
  const { active, acount, activate, deactivate } = useWeb3React();

  const getLibrary = (provider) => {
    return new Web3ReactProvider(provider);
  };

  // click to connect
  const connect = async () => {
    try {
      console.log(injected)
      let response = await activate(injected);
      if (response) {
        console.log("response", response);
      }
    } catch (error) {
      console.log(error);
    }
  };

 

  return (
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
  );
};

export default Home;
