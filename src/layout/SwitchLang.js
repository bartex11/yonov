import React, { useState, useEffect } from 'react';

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
    de: { title: "Deutsch", class: "de",  src: "images/de.png"},
    tr: { title: "Türkisch", class: "tr", src: "images/tr.png" }
  
  };

  return (
    <div className="switch-languages">

      {Object.keys(locales).map((locale) => (
        <span style={{ fontWeight: currentLang === locale ? 'bold' : 'normal' }} 
        className= {locales[locale].class} key= {locales[locale].class}
        type="submit" onClick={() => i18n.changeLanguage(locale)}>
          <img
            src={locales[locale].src}
            alt="Smiley face"
            height="42"
            width="42"
          />
        </span>
      ))}

    </div>
  );
}
