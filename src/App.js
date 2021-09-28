import Home from './Component/Home/Home/Home';
import './Component/Styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route><Home /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
