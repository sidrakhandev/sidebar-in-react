import { faRoute } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import sendRequest from "./pages/sendRequest";
import searchDonor from "./pages/searchDonor";
import viewRequest from "./pages/viewRequest";
import Profile from "./pages/Profile";
import './App.css';


function App() {
  return (
   <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/sendRequest'  component={sendRequest} />
         <Route path='/searchDonor' component={searchDonor} />
          <Route path='/viewRequest' component={viewRequest} />
           <Route path='/Profile' component={Profile} />
        </Switch>
      </Router>
      </>
    
  );
}

export default App;



