import React from 'react';

import NZBBTEFVisualise from './components/NZBBTEFVisualise';
import logo from './assets/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="bg-light py-5">
        <div className="container">
          <img src={logo} alt="NZBBTEF" className="mb-3" />
          <h1>Prototype</h1>
          <p className="lead">
            New Zealand Bird Band Text Exchange Format
          </p>
          <ul className="list-unstyled mb-0">
            <li><a href="https://gist.github.com/georgemoon/0c06e7ad0004ae9c47dd4ac0e1b425d5">Working Document</a></li>
            <li><a href="https://github.com/electricmagnetic/nzbbtef-prototype">Prototype Repository</a></li>
          </ul>
        </div>
      </header>
      <main>
        <div className="container">
          <NZBBTEFVisualise />
        </div>
      </main>
    </div>
  );
}

export default App;
