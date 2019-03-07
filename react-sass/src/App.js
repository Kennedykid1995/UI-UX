import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <>
        <section>
          <div className="header box">
            <header>
              <ul>
                <li>
                  <strong>Welcome to Track</strong>
                </li>
                <li>
                  <strong>Keep up with the News you want</strong>
                </li>
              </ul>
            </header>
          </div>
        </section>
        <section className="middle-section">
          <div className="row">
            <div className="card" />
          </div>
          <div className="row">
            <div className="card" />
          </div>
          <div className="row">
            <div className="card" />
          </div>
        </section>
      </>
    );
  }
}

export default App;
