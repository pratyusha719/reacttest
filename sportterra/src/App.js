
import React from 'react';
import './App.css';
import Navigation from './components/Page_0';
import { IntlProvider } from 'react-intl'
 
function App() {
  const locale = 'en-US';
  return (
    <IntlProvider locale={locale} key={locale}><div>
      <Navigation />
    </div></IntlProvider>
  );
}
 

export default App;
