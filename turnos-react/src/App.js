import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Perfil from "./perfil/Perfil";
import Home from './Home/Home';
import Inicio from './P-inicio/Login';
import Login from './P-inicio/Login';
import Singin from './sing-in/Sing-in';
import Ssignin from './S-signin/S-signin';


function App() {
  return (
      <Router>
          <Switch>
            <Route path="/perfil">
              <Perfil />
              </Route>
            <Route path="/Singin">
              <Singin/>
            </Route>
            
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/Ssignin">
              <Ssignin/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
            
          </Switch>
      </Router>
  );
}

export default App;
