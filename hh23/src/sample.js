import React, { useState } from 'react';

function SymptomChecker() {
  const [symptoms, setSymptoms] = useState('');
  const [prediction, setPrediction] = useState('');

  function handleSymptomsChange(e) {
    setSymptoms(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // call the machine learning model to get the prediction
    const res = await fetch('/predict', {
      method: 'POST',
      body: JSON.stringify({ symptoms }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    setPrediction(data.prediction);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Symptoms:
          <input
            type="text"
            value={symptoms}
            onChange={handleSymptomsChange}
          />
        </label>
        <button type="submit">Check Symptoms</button>
      </form>
      <p>Prediction: {prediction}</p>
    </div>
  );
}

export default SymptomChecker;
