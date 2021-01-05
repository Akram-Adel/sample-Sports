import React from 'react';
import './App.sass';

import RootRouter from 'routers/rootRouter';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />

      <div className="container-fluid" style={{ flexGrow: 1 }}>
        <RootRouter />
      </div>

      <Footer />
    </>
  );
}

export default App;
