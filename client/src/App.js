import './styles/App.css';
import Home from "./pages/Home";
import ContactMe from "./pages/ContactMe";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route path="/contact" component={ContactMe} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
