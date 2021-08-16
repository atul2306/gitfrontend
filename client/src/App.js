import React from "react"
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import './App.css';
const App=()=>{
  return(
    <>
     <Navbar/>
     <Switch>
       <Route exact path="/"><Dashboard/></Route>
       <Route path="/about"><About/></Route>
       
       <Route path="/home"><Home/></Route>
       <Route path="/login"><Login/></Route>
       <Route path="/logout"><Logout/></Route>
       <Route path="/profile"><Profile/></Route>
     </Switch>
    
    </>
  )
}
export default App