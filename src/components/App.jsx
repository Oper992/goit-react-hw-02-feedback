import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions"

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addState = evt => {
    const buttonName = evt.target.name;

    this.setState(prevState => {
      if (buttonName === 'good') {
        return { good: prevState.good + 1 };
      }
      if (buttonName === 'neutral') {
        return { neutral: prevState.neutral + 1 };
      } else {
        return { bad: prevState.bad + 1 };
      }
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();

    return Math.round((this.state.good / total) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button" name="good" onClick={this.addState}>
          Good
        </button>
        <button type="button" name="neutral" onClick={this.addState}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.addState}>
          Bad
        </button>
        <FeedbackOptions options={} onLeaveFeedback={}/>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
