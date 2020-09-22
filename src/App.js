import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Menubar from './Navbar/menubar.js';
import Footer from './Footer/footer.js';
import { BrowserRouter, Route, Switch, Router  } from 'react-router-dom';
import history from './msc/history.js'
import './res/GeneralStyle.scss'


import Home from './Home/Home.js';
import Profile from './Profile/profile.js';
import Setting from './Setting/Setting.js';


function App() {
  return (
    <div className="App">
    <Router history={history}>
    <Menubar />
      <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route exact path="/Profile" component={Profile} ></Route>
        <Route exact path="/Setting" component={Setting} ></Route>
      </Switch>
    </Router>

     <Footer />

    </div>
  );
}

export default App;
