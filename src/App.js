import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import TeamDetail from './components/TeamDetail/TeamDetail';

function App() {
  
  return (
      <Router>
          <Switch>
            <Route path='/home'>
              <Home/>
            </Route>
            <Route path='/team/:teamId'>
                <TeamDetail/>
            </Route>
            <Route exact path='/'>
                <Home headTitle='true'></Home>
            </Route>
            <Route path='*'>
                <NoMatch/>
            </Route>
          </Switch>
      </Router>
  );
}

export default App;
