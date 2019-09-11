import React from 'react'
import { Route } from "react-router-dom";
import HomepageLayout from "./components/Home";
import Projects from './containers/listPorjects'
import Hoc from "./Hoc/Hoc";

const BaseRouter = () => (
    <Hoc>
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/" component={HomepageLayout} />
    </Hoc>
  );
  
  export default BaseRouter;
  
