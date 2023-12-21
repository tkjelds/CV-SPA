import React, { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useLocalStorage from 'use-local-storage';
import './App.css';


function App() {
  const { t, i18n } = useTranslation();

  const [lng, setLng] = useLocalStorage("lng" ? true : false) // true = dk, false = en

  const [theme, setTheme] = useLocalStorage('theme' ? true : false) // true = light, false = dark

  const [sectionContent, setSectionContent] = useState("lorem-ipsum-long")

  const [sectionTitle, setSectionTitle] = useState('selection-title-about-me')

  const [contentSwitch, setContentSwitch] = useState(true) // true = textBasedContent | false = projectBasedContent

  function updateSection(selectionTitle, sectionContent) {
    setContentSwitch(true)
    setSectionTitle(selectionTitle)
    setSectionContent(sectionContent)
  }

  function updateSectionProjects(selectionTitle, sectionContent) {
    setContentSwitch(false)
    setSectionTitle(selectionTitle);
    setTextContent(sectionContent)
  }

  const switchTheme = (checked) => {
    setTheme(checked)
  }

  const changeLanguage = () => {
    setLng(!lng);
    updateSection(sectionTitle, sectionContent)
    lng ? i18n.changeLanguage("dk") : i18n.changeLanguage("en");
  };

  function section() {
    return (
      <div className='section'>
        <h2 className='section-title'>{t(sectionTitle)}</h2>
        <span className='section-content'>
          {switchContent()}
        </span>
      </div>
    )
  };

  return (
    <Suspense >
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
      </style>
      <div className="app" data-theme={theme ? 'dark' : 'light'}>
        <div className='main-container'>
        {languageSwitch()}
            <DarkModeSwitch
              className='DarkModeToggle'
              style={{ marginBottom: '2rem' }}
              checked={theme}
              onChange={switchTheme}
              size={40}
            />
          <div className='content'>
            <div className='left'>
              <h1 className='name'> Tore Kjelds</h1>
              <div className='menu'>
                <a>
                  <span>
                    About
                  </span>
                </a>
                <a>
                  <span>
                    Projects
                  </span>
                </a>
                <a>
                  <span>
                    Contact me
                  </span>
                </a>
              </div>
            </div>
            <div className='right'>
              <h2>about me</h2>
              <p>Nulla aliquip irure cillum velit in consectetur exercitation pariatur do minim. Aliquip nostrud anim excepteur minim consequat cillum aute voluptate nulla velit irure id tempor quis. Reprehenderit duis id laborum Lorem laborum dolore. Labore dolor tempor in sint ea pariatur cupidatat duis in Lorem in aliqua commodo. </p>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );

  function languageSwitch() {
    return <button className='Language_button' type="button" onClick={() => changeLanguage()}>
      {lng ? "EN" : "DK"}
    </button>;
  }

  function switchContent() {
    return contentSwitch ? setTextContent() : setProjectContent()
  }

  function setTextContent() {
    return <p>{t(sectionContent)}</p>;
  }
  function setProjectContent() {
    return <p>{t(sectionContent)}</p>;
  }
}

export default App;
