import "./App.css";
import SideBar from "./components/sideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
function App() {
  var doctor = [];
  return (
    <div className="container m-0 " style={{maxWidth: '100%',
    margin: 0}}>
      <div className="row">
        <div className="col-xs-3 col-sm-3 col-md-3" >
          <SideBar />
        </div>
        <div className="col-xs-8 col-sm-8 col-md-8 ms-1 ">
        <div style={{overflowY:'scroll',height:'100vh'}} className="example" >
         <br /><br /><br />
          <SearchBar />
          <br />
          <br />
          <Switch>
            <Route path="/table/:id" component={Table} />
            <Route path="/dashboard" component={Dashboard} />

          </Switch>
         </div>
        </div>
      </div>
    </div>
  );
}

export default App;
