import React from 'react';
import DesktopNav from './Header/DesktopNav'
import Footer from './Footer/Footer'

import routes from './config/routes'
import './App.scss';

function App() {
  return (
    <div className="App">
    <DesktopNav/>
      Hello world yay its working this is the main app

      {routes}
      <Footer/>
    </div>
  );
}

export default App;
