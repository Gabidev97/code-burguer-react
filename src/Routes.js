import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Containers/Home'
import Response from "./Containers/Response";

function Routes() {


  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pedidos" component={Response} />
      </Switch>
    </Router>


  )




}


export default Routes