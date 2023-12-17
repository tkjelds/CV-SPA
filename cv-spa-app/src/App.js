import './App.css';
import useLocalStorage from 'use-local-storage'
import React, { Suspense } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { I18nContext, useTranslation } from 'react-i18next';


function App() {
  const { t, i18n } = useTranslation();

  const [lng, setLng] = useLocalStorage("lng" ? true : false) // true = dk, false = en

  const [theme, setTheme] = useLocalStorage('theme' ? true : false) // true = light, false = dark

  const switchTheme = (checked)  => {
    setTheme(checked)
  }

  const changeLanguage = () => {
    setLng(!lng);
    lng ? i18n.changeLanguage("dk") : i18n.changeLanguage("en");
  };

  return (
      <div className="App" data-theme={theme? 'dark' : 'light'}>
        <div className='TopBar'>
          <DarkModeSwitch
          className='DarkModeToggle'
          style={{ marginBottom: '2rem' }}
          checked={theme}
          onChange={switchTheme}
          size={40}
          />
        <button className='Language_button' type="button" onClick={() => changeLanguage()}>
          {lng ? "EN" : "DK"}
        </button>
        </div>
        <div className='Content'>
        <h1 className='Title'>{t('title')}</h1>
        </div>
        <div className='BottomBar'>
        </div>
      </div>
  );
}

export default App;
