import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  onGoodClick = () => {
    this.setState(prev => ({
      good: prev.good + 1,
      total: this.countTotalFeedback(prev.good + 1, prev.neutral, prev.bad),
      positivePercentage: this.countPositiveFeedbackPercentage(
        prev.good + 1,
        prev.total + 1
      ),
    }));
  };

  onNeutralClick = () => {
    this.setState(prev => ({
      neutral: prev.neutral + 1,
      total: this.countTotalFeedback(prev.good, prev.neutral + 1, prev.bad),
      positivePercentage: this.countPositiveFeedbackPercentage(
        prev.good,
        prev.total + 1
      ),
    }));
  };

  onBadClick = () => {
    this.setState(prev => ({
      bad: prev.bad + 1,
      total: this.countTotalFeedback(prev.good, prev.neutral, prev.bad + 1),
      positivePercentage: this.countPositiveFeedbackPercentage(
        prev.good,
        prev.total + 1
      ),
    }));
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, total) => {
    return Math.round((good / total) * 100);
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
          <li>Total: {this.state.total}</li>
          <li>Positive feedback: {this.state.positivePercentage}%</li>
        </ul>
      </div>
    );
  }
}
