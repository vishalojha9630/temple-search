import React from 'react';

const StepIndicator = ({ currentStep, label }) => {
  const steps = 4;

  return (
    <div className="step-indicator mb-4 mt-5">
      {Array.from({ length: steps }, (_, index) => index + 1).map((step, index) => (
        <>
          {currentStep === index + 1 &&
            <div className="label" style={{ left: `${index > 0 ? `${(index * 20)}%` : "-40px"}` }}>
              <span>{label}</span>
            </div>}

          <div
            className={`step ${currentStep >= step ? 'active' : ''}`}
          >
            <div className="circle">{step}</div>
            {index < steps - 1 && <div className="line" />}
          </div>
        </>
      ))}
    </div>
  );
};

export default StepIndicator;