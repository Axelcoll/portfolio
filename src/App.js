import React from 'react';
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import {BrowserRouter, Route} from 'react-router-dom'




function App() {
  return (
    
        <BrowserRouter>
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/portfolio" component={Portfolio}/>

          
        </BrowserRouter>
  )
}

export default App;
