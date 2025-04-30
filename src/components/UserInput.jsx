import { useState } from 'react';

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => ({
      ...prevInput,
      [inputIdentifier]: newValue,
    }));
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            type="number"
            id="initial-investment"
            required
            defaultValue={userInput.initialInvestment}
            onChange={(e) => handleChange('initialInvestment', e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            type="number"
            id="annual-investment"
            required
            defaultValue={userInput.annualInvestment}
            onChange={(e) => handleChange('annualInvestment', e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input
            type="number"
            id="expected-return"
            required
            defaultValue={userInput.expectedReturn}
            onChange={(e) => handleChange('expectedReturn', e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            required
            defaultValue={userInput.duration}
            onChange={(e) => handleChange('duration', e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
