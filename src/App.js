import React from "react";
import "./App.css";
import BookList from "./components/bookslist";
import NavMenu from "./components/navbar";
import Edit from "./components/editbook";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Add from "./components/addbook";

function App() {
  return (
    <Router>
      <div className="App">
        <NavMenu />
        <Switch>
          <Route exact path="/" component={BookList} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/add" component={Add}/>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
