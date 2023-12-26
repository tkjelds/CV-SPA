import React, { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useLocalStorage from "use-local-storage";
import "./App.css";
import Name_svg from "./Name_svg";
import About_me from "./Sections/About_me";
import Contact from "./Sections/Contact";
import Projects from "./Sections/Projects";

function App() {
  const { t, i18n } = useTranslation();
  const [lng, setLng] = useLocalStorage("lng" ? true : false); // true = dk, false = en
  const [theme, setTheme] = useLocalStorage("theme" ? true : false); // true = light, false = dark
  const [section, setSection] = useState(About_me());

  const switchTheme = (checked) => {
    setTheme(checked);
  };

  const changeLanguage = () => {
    setLng(!lng);
    lng ? i18n.changeLanguage("dk") : i18n.changeLanguage("en");
  };

  const languageSwitch = () => {
    return (
      <button
        className="Language_button"
        type="button"
        onClick={() => changeLanguage()}
      >
        {lng ? "EN" : "DK"}
      </button>
    );
  };

  return (
    <Suspense>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
      </style>
      <div className="app" data-theme={theme ? "dark" : "light"}>
        <div className="main-container">
          {languageSwitch()}
          <DarkModeSwitch
            className="DarkModeToggle"
            style={{ marginBottom: "2rem" }}
            checked={theme}
            onChange={switchTheme}
            size={40}
          />
          <div className="content">
            <div className="top-right-box gradient gradient-top" />
            <div className="bottom-right-box gradient" />
            <div className="top-right-box" />
            <div className="bottom-right-box" />
            <div className="left">
              {Name_svg()}
              <div className="menu">
                <a onClick={() => setSection(About_me)}>
                  <span> {t("selection-title-about-me")}</span>
                </a>
                <a onClick={() => setSection(Projects)}>
                  <span>{t("selection-title-projects")}</span>
                </a>
                <a onClick={() => setSection(Contact)}>
                  <span>{t("selection-title-contact")}</span>
                </a>
              </div>
            </div>
            <div className="right">{section}</div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
export default App;
