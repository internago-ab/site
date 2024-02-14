
import React from 'react';
import './ProcessSteps.css'; 

const ProcessStep = ({ step }) => (
  <div className="process-step">
    <img src={step.image} alt={step.title} className="process-step-image" />
    <div className="process-step-content">
      <h3>{step.title}</h3>
      <p   dangerouslySetInnerHTML={{ __html: step.description }}></p>
    </div>
  </div>
);

const ProcessSteps = ({ steps }) => (
  <div className="process-steps-container">
    {steps.map((step, index) => (
      <ProcessStep key={index} step={step} />
    ))}
  </div>
);

export default ProcessSteps;
