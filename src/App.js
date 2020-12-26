import Navbar from "./Components/Layout/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';


function App() {  
  return (
      <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
        </div>
      </Router>
  );
}

export default App;
