import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container left">
          <div className="header">
            <img src="/logo-ub.png" alt="" />
            <h1>SIAM</h1>
          <h2>UNIVERSITAS BRAWIJAYA</h2>
          
          </div>

          <div className="berita">
            <h2>Berita</h2>
            <div>
              <div className="list">Jadwal</div>
              <div className="list">Jadwal</div>
              <div className="list">Jadwal</div>
              <div className="list">Jadwal</div>
            </div>
          </div>
          <div className="panduan">
            <h1>Panduan</h1>
            <div>
              <div className="list">Klik disini </div>
            </div>
          </div>

          <div className="footer">
            Copyright
          </div>
        </div>
      </div>
    );
  }
}

export default App;
