import React from 'react';
import './App.css';
import Content from './components/spa/contents/content';
import Header from './components/spa/header/header';
import Footer from './components/spa/footer/footer';
// import { HashRouter, browserHistory } from 'react-router-dom';

function App() {
  return (
    <div>
        <Header />
        <div className="content">
          <Content />
        </div>
        <Footer />
    </div>
  );
}

export default App;
