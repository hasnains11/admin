import { Route,Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import SearchBar from "./SearchBar";
import SideBar from "./sideBar";
import Table from "./Table";

const Main = () => {
    var doctor = [];
    return (
      <div className="container m-0 " style={{ maxWidth: "100%", margin: 0 }}>
        <div className="row">
          <div className="col-xs-3 col-sm-3 col-md-3">
            <SideBar />
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 ms-1 ">
            <div
              style={{ overflowY: "scroll", height: "100vh" }}
              className="example"
            >
              <br />
              <br />
              <br />
              <SearchBar />
              <br />
              <br />
              <Switch>
                <Route path="/table/:id" component={Table} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/" component={Dashboard} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Main;