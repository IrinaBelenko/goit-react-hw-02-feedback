import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  onLeaveFeedback = e => {
    let countGood = 0;
    let countNeutral = 0;
    let countBad = 0;
    switch (e.target.textContent) {
      case 'Good':
        countGood = 1;
        break;

      case 'Neutral':
        countNeutral = 1;
        break;

      case 'Bad':
        countBad = 1;
        break;

      default:
        console.log('Invalid subscription type');
    }

    this.setState(prev => ({
      good: prev.good + countGood,
      neutral: prev.neutral + countNeutral,
      bad: prev.bad + countBad,
      total: this.countTotalFeedback(
        prev.good + countGood,
        prev.neutral + countNeutral,
        prev.bad + countBad
      ),
      positivePercentage: this.countPositiveFeedbackPercentage(
        prev.good + countGood,
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
      <>
        <Section title="Please leave feedback">
          Please leave feedback
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          Statistics
          {this.state.total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positivePercentage}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}
