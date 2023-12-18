import React, { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useLocalStorage from 'use-local-storage';
import './App.css';


function App() {
  const { t, i18n } = useTranslation();

  const [lng, setLng] = useLocalStorage("lng" ? true : false) // true = dk, false = en

  const [theme, setTheme] = useLocalStorage('theme' ? true : false) // true = light, false = dark
  
  const [sectionContent, setSectionContent] = useState("section-text-about-me")

  const [sectionTitle, setSectionTitle] = useState('selection-title-about-me')

  const [contentSwitch, setContentSwitch] = useState(true) // true = textBasedContent | false = projectBasedContent

  function updateSection(selectionTitle, sectionContent) {
    setContentSwitch(true)
    setSectionTitle(selectionTitle)
    setSectionContent(sectionContent)
  }

  function updateSectionProjects(selectionTitle, sectionContent){
    setContentSwitch(false)
    setSectionTitle(selectionTitle);
    setTextContent(sectionContent)
  }

  const switchTheme = (checked)  => {
    setTheme(checked)
  }

  const changeLanguage = () => {
    setLng(!lng);
    updateSection(sectionTitle,sectionContent)
    lng ? i18n.changeLanguage("dk") : i18n.changeLanguage("en");
  };

  function section()
  {              
    return(
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
              <div className='Title-spacer'></div>
              <div className='selector-content'>
                <h2 className='selector-title'>{t(sectionTitle)}</h2>
                <div className='selection-wrapper'>
                  <div className='selection'>
                    <a>
                      <span onClick={() => updateSection("selection-title-about-me","section-text-about-me")}>
                        {t('selection-title-about-me')}
                      </span>
                    </a>
                    <a>
                      <span onClick={() => updateSection("selection-title-projects","section-text-projects")}>
                        {t('selection-title-projects')}
                      </span>
                    </a>
                    <a>
                      <span onClick={() => updateSectionProjects("selection-title-contact","section-text-contact")}>
                        {t('selection-title-contact')}
                      </span>
                    </a>
                  </div>
                </div>
              </div>       
              {section()}     
              <div className='spacer'/>
            </div>
          </div>
        </div>
        <div className='footer'>
        </div>
      </div>
      </Suspense>
  );

  function switchContent(){
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
