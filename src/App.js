import React from "react";
import PizzaMachine from './PizzaMachine'
import Home from './Home'
import Success from "./Success";
import {Route} from "react-router-dom";


const App = () => {

  return(
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/pizza" component={PizzaMachine}/>
      <Route path="/success" component={Success}/>
    </div>
  )
}
export default App;
