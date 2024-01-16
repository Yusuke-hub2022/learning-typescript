import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayText from './DisplayText';

function App() {
  const getUserFullname = async (username: string): Promise<string> => {
    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users')
    if (userResponse.ok) {
      const users = await userResponse.json()
      const userByName = users.find((usr: any) => {
        return usr.username.toLowerCase() === username
      })
      return userByName.name
    }
    return ""
  }

  return (
    <div className="App">
      <header className="App-header">
        <DisplayText getUserFullname={getUserFullname} />
      {/*
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      */}
      </header>
    </div>
  );
}

export default App;
