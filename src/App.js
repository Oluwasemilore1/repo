import "./App.css";
import SignIn from "./Page/SignIn";
import Dashboard from "./Page/Dashboard";
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      <Router>
      
      
<Routes>
  <Route path="/Dashboard" element={<Dashboard />} />
  <Route path="/SignIn" element={<SignIn/>}/>
</Routes>

</Router>
    </div>
  );
}

export default App;