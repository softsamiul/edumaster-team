import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import FooterComp from "./components/Footer/FooterComp";
import Header from "./components/Header/Header";
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Services from "./pages/Services";

function App() {
  return (
    <div className="">

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <FooterComp></FooterComp>
      </Router>
    </div>
  );
}

export default App;
