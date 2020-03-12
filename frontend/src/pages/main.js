import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../styles/main.css";
import Layout from "../components/Layout";
import Productos from "../components/Productos";
import Notfound from "../components/NotFound";

function Main() {
  return (
    <Router>
      <Layout>
        <Switch>
          {/* <Route exact path="/" component={Canales} /> */}
          <Route exact path="/Productos" component={Productos} />
          {/* <Route exact path="/Contactar" component={Contactar} /> */}
          <Route component={Notfound} /> */}
          <Route path="*" component={Productos} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default Main;
