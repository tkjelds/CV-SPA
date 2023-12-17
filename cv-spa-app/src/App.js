import React from 'react';
import { useTranslation } from 'react-i18next';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useLocalStorage from 'use-local-storage';
import './App.css';


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
      <div className="app" data-theme={theme? 'dark' : 'light'}>
        <div className='header'>
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
        <div className='main-container'>
          <div className='main-container-inner'>
            <div className='inner-container'>
              <h1 className='Title'>{t('title')}</h1>
              <div className='section'>
                <h2 className='section-title'>Test</h2>
                <span className='section-contents'>
                  <p>Description</p>
                </span>
              </div>
              <div className='spacer'/>
              <div className='selector-content'>
                <h2 className='selector-title'>profile</h2>
                <div className='selection-wrapper'>
                  <div className='selection'>
                    <a>
                      <span>
                        test1
                      </span>
                    </a>
                    <a>
                      <span>
                        test1
                      </span>
                    </a>
                    <a>
                      <span>
                        test1
                      </span>
                    </a>
                    <a>
                      <span>
                        test1
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer'>
        </div>
      </div>
  );
}

export default App;
