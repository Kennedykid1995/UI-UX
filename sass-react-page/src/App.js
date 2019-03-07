import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="headerContainer" />
        <header>
          <a href="#">ZOOM / ZOOM </a>
        </header>
        <section className="main">
        <section className="card">
          <ul>
            <li>
              <span />
              <strong>How may I help you</strong>
            </li>
            <li>
              <span />
              <strong>I dont know if I can be helped</strong>
            </li>
            <li>
              <span />
              <strong>Thats deep let me help</strong>
            </li>
          </ul>
          </section>
          <section className="primary">
          <h1> Your personal Assistant</h1>
          <p>Get help with your daily tasks</p>
          <a href="#">Get Help!!!</a>
        </section>
        </section>
      </div>
    );
  }
}

export default App;
