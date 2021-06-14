// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Architecher from "./Pages/Architecher";
import Interior from "./Relatiable/Interior";
import Graphic from "./Relatiable/Graphic";
import SdVisuligation from "./Relatiable/SdVisuligation";
import Blog from "./learn/Blog";
import Academic from "./learn/Academic";
import Course from "./learn/Course";
import Crew from "./Pages/Crew";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/architecher">
            <Architecher></Architecher>
          </Route>

          <Route path="/intorior">
            <Interior></Interior>
          </Route>

          <Route path="/graphic">
            <Graphic></Graphic>
          </Route>

          <Route path="/sdvisulization">
            <SdVisuligation></SdVisuligation>
          </Route>

          <Route path="/blog">
            <Blog></Blog>
          </Route>

          <Route path="/course">
            <Course></Course>
          </Route>

          <Route path="/academic">
            <Academic></Academic>
          </Route>

          <Route path="/crew">
            <Crew></Crew>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
