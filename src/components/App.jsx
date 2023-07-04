import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGoodClick = () => {
    this.setState(prev => ({ good: prev.good + 1 }));
  };

  onNeutralClick = () => {
    this.setState(prev => ({ neutral: prev.neutral + 1 }));
  };

  onBadClick = () => {
    this.setState(prev => ({ bad: prev.bad + 1 }));
  };

  render() {
    return (
      <div>
        <p>Please leave feedback</p>

        <div>
          <button type="button" onClick={this.onGoodClick}>
            Good
          </button>
          <button type="button" onClick={this.onNeutralClick}>
            Neutral
          </button>
          <button type="button" onClick={this.onBadClick}>
            Bad
          </button>
        </div>
        <p>Statistics</p>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: 2</li>
          <li>Positive feedback: 43%</li>
        </ul>
      </div>
    );
  }
}
