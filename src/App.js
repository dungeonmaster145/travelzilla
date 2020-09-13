import React from 'react';
import Home from './Home'
import './App.css';
import Header from './Header'
import Footer from './Footer'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import SearchPage from './SearchPage'

function App() {
  return (
    <div className="App">
     <Router>
      
      <Header />
      <Switch> 

        <Route path="/search"><SearchPage/></Route>
        <Route path="/"> <Home /></Route>
       </Switch>
     <Footer/>
      
      {/*Header */}
      {/* Banner */}
      {/* Cards */}
      {/* Footer */}
      {/**these are all a part of the home page and 
       * it will be routed to the search page */}
    
    </Router>
    </div>
  );
}

export default App;
