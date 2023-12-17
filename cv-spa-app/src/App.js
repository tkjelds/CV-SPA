import './App.css';
import useLocalStorage from 'use-local-storage'
import React from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';


function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? true : false)

  const switchTheme = (checked)  => {
    setTheme(checked)
  }

  return (
    <div className="App" data-theme={theme? 'light' : 'dark'}>
      <div className='TopBar'>
      <DarkModeSwitch
      className='DarkModeToggle'
      style={{ marginBottom: '2rem' }}
      checked={theme}
      onChange={switchTheme}
      size={40}
    />
      </div>
      <div className='Content'>
      <h1>Hello World!</h1>
      </div>
      <div className='BottomBar'>

      </div>

    </div>
  );
}

export default App;
