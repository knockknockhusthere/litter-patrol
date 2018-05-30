import React, { Component } from 'react';
import './App.css';
import Trash from './components/Trash.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bins: this.getBinsState(),
      points: 0
    };

    this.startGame();
    console.log(this.state.bins);
  }

// resets and re randomizes the states of all the litter bins eevry 1.5seconds
  startGame() {
    setInterval(() => {
      this.setState( {
        bins: this.getBinsState()
      });
    }, 1500);
  }

// will return 0 if rounds down, and 0 and 1 are whether the trash is on the bin
  getBinsState() {
    let bins = [];
    for (let i = 0; i < 9; i++){
      bins.push({ isTrashVisible: (Math.round(Math.random()) ? true : false )});
    }

    return bins;
  }

  onTrashClicked = () => {
    console.log(`Increasing points`);
    this.setState({ points: this.state.points + 1 });
  }

  render() {
    const bins = this.state.bins.map((bin, index) => {
      return (
        <Trash key={`trash-${index}`}
        clickedLitterCallback={ this.onTrashClicked }
        visible = { bin.isTrashVisible }/>
      );
    });

    return (
      <div className="App">
        <section className="overall-data">
          <h1>Litter Patrol</h1>
          <h2>Points: { this.state.points }</h2>

        </section>

        <section className="bins">
          { bins }
        </section>
      </div>
    );
  }
}

export default App;
