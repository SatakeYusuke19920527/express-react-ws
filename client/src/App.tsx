import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { io } from 'socket.io-client';

const ENDPOINT = 'http://localhost:3001/';

const App = () => {
  useEffect(() => {
    const socket = io(ENDPOINT);
    console.log('🚀 ~ file: App.tsx ~ line 11 ~ useEffect ~ socket', socket);
    socket.on('connect', () => console.log('==========================='));
  }, []);

  const handleClick = async () => {
    try {
      const res = await axios.get('http://localhost:3001/users');
      console.log(res.data);
    } catch (error) {
      console.log('🚀 ~ file: App.tsx ~ line 9 ~ handleClick ~ error', error);
    }
  };
  return (
    <div className="App">
      <h1>hello world</h1>
      <button onClick={handleClick}>fetch</button>
    </div>
  );
};

export default App;
