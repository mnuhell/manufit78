import React from 'react';
import ReactDOM from 'react-dom';
import ManufitApp from './ManufitApp';
import { BrowserRouter as Router } from "react-router-dom";

import "./tailwind.output.css";

ReactDOM.render(
    <Router>
      <ManufitApp />
    </Router>,
  document.getElementById('root')
);
