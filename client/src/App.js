import React, {useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';

const App = () => {

  const [connectionStatus, setConnectionStatus] = useState({});

  const fetchConnection = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  useEffect(() => {
    const connectToBackEnd = async() => {
      try{
        const resp = await fetchConnection();
        setConnectionStatus({data: resp.data});
      }catch(e){
        console.log(e);
      }
    };

    connectToBackEnd();

  }, []);

  useEffect(() => {
    if(connectionStatus.data !== undefined){
      console.log(`[SERVER] Connection Status is: ${connectionStatus.data}`);
    }
  }, [connectionStatus]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
