import React from 'react';

import Footer from './Footer/Footer'

import routes from './config/routes'
import './App.scss';

function App() {
  return (
    <div className="App">
      {routes}
    
      Hello world yay its working this is the main app

      
      <Footer/>
    </div>
  );
}

export default App;
