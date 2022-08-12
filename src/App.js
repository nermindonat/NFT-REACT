import "./App.css";
import Home from "./pages/home/Home";
import { Web3ReactProvider } from "@web3-react/core";
import {Web3} from "web3";
import Collection from "./components/collections/Collection";


const getLibrary = provider => {
  return new Web3(provider)
}

const App = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <Home />
        <Collection />
      </div>
    </Web3ReactProvider>
  );
};

export default App;
