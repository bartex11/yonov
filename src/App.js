import React, { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import translationDE from './locales/de.json'
import translationTr from "./locales/tr.json"

// Components
import Loader from './components/Loader';
import Header from './layout/Header';
import Footer from './layout/Footer';

// Pages
const Home = React.lazy(() => import('./pages/Home'));
const Praxis = React.lazy(() => import('./pages/Praxis'));

export default function App() {
  const { i18n } = useTranslation();
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    if (i18n.language === 'de') {
      setAllData(translationDE);
    } else {
      setAllData(translationTr);
    }
  }, [i18n.language]);

  return (
    <Router>

      <Header data={allData} i18n={i18n} />
      <React.Suspense fallback={<Loader />}>
        <main>

          <Switch>
            <Route
              path="/home"
              render={(props) => <Home {...props} data={allData} />}
            />
            <Route
              path="/praxis"
              render={(props) => <Praxis {...props} data={allData} />}
            />
            {/* Redirect */}
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
 
        </main>
        
      </React.Suspense>
      <Footer data={allData} />
 
    
    </Router>
  );
}
