import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
//import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SignIn from './components/Login/SignIn';
import Navbar from './components/Navbar/Navbar';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     <p>Name: {loggedInUser.name}</p> 
    <Router>
      <Navbar></Navbar>
      <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          {/* <Route path="/logIn">
            <Login></Login>
           </Route> */}
           <Route path="/signIn">
             <SignIn />
           </Route>
           <PrivateRoute path="/add/:id">
             <Register></Register>
             </PrivateRoute>
           <Route exact path="/">
             <Home></Home>
           </Route>
          </Switch>
    </Router>
  </UserContext.Provider>
   
  );
}

export default App;
