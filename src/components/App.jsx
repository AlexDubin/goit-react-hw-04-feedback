import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import ResetButton from './ResetButton/ResetButton';
import css from './App.module.css';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleNewState = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const resetStatistics = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  const total = good + neutral + bad;
  const positivePercentage = total ? Math.round((good / total) * 100) : 0;
  const hasFeedback = total > 0;

  return (
    <div className={css['feedback-cont']}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleNewState}
        />
      </Section>

      <div className={css['feedback-item-cont']}>
        {hasFeedback ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
            <ResetButton onClick={resetStatistics} />
          </Section>
        ) : (
          <Notification message="There is no feedback!" />
        )}
      </div>
      
    </div>
  );
}

export default App;
