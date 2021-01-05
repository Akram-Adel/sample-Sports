import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.sass';

import RootRouter from 'routers/rootRouter';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Header />

      <div className="container-fluid" style={{ flexGrow: 1 }}>
        <RootRouter />
      </div>

      <Footer />
    </Router>
  );
}

export default App;
