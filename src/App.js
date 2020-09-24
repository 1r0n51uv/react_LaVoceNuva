import React, { Component } from 'react';
import './App.css';
import Home from "./pages/home";
import Navbar from "./elements/navbar";
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Generic from "./pages/generic";
import Admin from "./pages/admin";
import Single from "./pages/single";
import Newspaper from "./pages/newspaper";



class App extends Component {
  render() {
    return (
        <Router>

          <div className="App">
            <Navbar/>
            <Route exact path="/" component={Home} replace={true}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/associazioni" component={Generic}/>
            <Route exact path="/leggi" component={Generic}/>
            <Route exact path="/scienzamedicina" component={Generic}/>
            <Route exact path="/cultura" component={Generic}/>
            <Route exact path="/fede" component={Generic}/>
            <Route exact path="/curiosita" component={Generic}/>
            <Route exact path="/giornale" component={Newspaper}/>
            <Route exact path="/:id" component={Single}/>
            <Route exact path="/admin" component={Admin}/>
          </div>
        </Router>

    );
  }
}

export default App;
