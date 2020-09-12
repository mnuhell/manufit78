import React from 'react';
import ReactDOM from 'react-dom';
import ManufitApp from './ManufitApp';
import { BrowserRouter as Router } from "react-router-dom";

import "./tailwind.output.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ManufitApp />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
