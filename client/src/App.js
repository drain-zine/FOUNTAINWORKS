import React, {useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';
import {API_ENDPOINTS} from "./constants.js";

const App = () => {

  const [connectionStatus, setConnectionStatus] = useState({});
  const [images, setImages] = useState({});

  const fetchConnection = async (url) => {
    console.log(url);
    const response = await fetch(url);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  useEffect(() => {
    console.log(API_ENDPOINTS);
    const connectToBackEnd = async() => {
      try{
        const resp = await fetchConnection(API_ENDPOINTS.CONNECT);
        setConnectionStatus({data: resp.data});
      }catch(e){
        console.log(e);
      }
    };

    const fetchImages = async() => {
      try{
        const resp = await fetchConnection(`${API_ENDPOINTS.ALL_IMAGES}/pages/HomePage/WestonCage.jpg`);
        console.log(resp);
        setImages({images: resp});
      }catch(e){
        console.log(e);
      }
    }

    connectToBackEnd();
    fetchImages();

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
