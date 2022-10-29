import "./App.css";
import SideBar from "./components/sideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Main from "./components/Main";
function App() {
  var doctor = [];
  return (

    <Switch>  
      <Route path="/main" component={Main}></Route>
      <Route path="/" component={Login}></Route>
    </Switch>

  );
}

export default App;
