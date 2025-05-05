import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5001')
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>MERN Authentication App</h1>
        <p>Backend Message: {message}</p>
      </header>
    </div>
  );
}

export default App;
