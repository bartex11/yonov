import React, { useState, useEffect } from 'react';
import logoDe from '../images/de.png'
import logoTr from '../images/tr.png'
import {Helmet} from "react-helmet";

import favicon from '../images/favicon.ico'

export default function SwitchLang({ i18n }) {
  const [currentLang, setCurrentLang] = useState();

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n]);

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
    setCurrentLang(e.target.value);
  };

  const locales = {
    de: { title: "Deutsch", class: "de",  src: "{logoDe}"},
    tr: { title: "Türkisch", class: "tr", src: "images/tr.png" }
  
  };

  return (

    
    <div className="switch-languages">
      <Helmet>
        <html lang={currentLang}/>
        <meta charset="UTF-8"></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="shortcut icon" href={favicon} type="image/x-icon"></link>
      </Helmet>
    
      {Object.keys(locales).map((locale) => (
        <span style={{ fontWeight: currentLang === locale ? 'bold' : 'normal' }} 
        className= {'switch-languages__item ' + 'switch-languages__item--' + locales[locale].class} key= {locales[locale].class}
        type="submit" onClick={() => i18n.changeLanguage(locale)}>
          <img
            src={ locales[locale].class == 'de' ? logoDe  : logoTr}
            alt={locales[locale].title}
            height="32"
    
          />
          
        </span>
      ))}

    </div>
  );
}
