import React from "react";
import { Router } from 'react-router-dom';
import Routes from './routes/routes';
import history from './config/services/history';

function App() {
  return (
      <Router history={history}>
        <Routes />
      </Router>
  );
}
export default App;
