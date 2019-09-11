import React from 'react';
import BaseRouter from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from './containers/Layout'

function App() {
  return (
      <Router>
        <Layout>
          <BaseRouter/>
        </Layout>
      </Router>

  );
}

export default App;
