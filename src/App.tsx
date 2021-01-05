import React from 'react';
import './App.sass';

import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />

      <div className="container-fluid" style={{ flexGrow: 1 }}>
        Hello
      </div>

      <Footer />
    </>
  );
}

export default App;
