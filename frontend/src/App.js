/*I divided my task into various component.and according to uses of that particular component
i use those.*/

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NavBar from './Components/navBar';
import Login from './Components/logIn';
import Signup from './Components/signUp';
import Home from './Components/home';
import Profile from './Components/profile';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/logIn">
          <Login/>
        </Route>

        <Route path="/signUp">
          <Signup/>
        </Route>

        <Route path="/profile">
          <Profile/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
