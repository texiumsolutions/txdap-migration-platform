import React, { useState } from 'react';
import './ProgressBar.css'

const ProgressBar = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

    const handleClick = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    return (
        <div className="progress-bar">
            {steps.map((step, index) => {
                const isActive = index + 1 === currentStep;
                const isCompleted = index + 1 < currentStep;
                return (
                    <div
                        key={step}
                        className={`progress-bar__step ${isActive ? 'progress-bar__step--active' : ''
                            } ${isCompleted ? 'progress-bar__step--completed' : ''}`}
                    >
                        {step}
                    </div>
                );
            })}
            <div
                className="progress-bar__bar"
                style={{ width: `${(currentStep / steps.length) * 100}%` }}
            />
            <button onClick={handleClick}>Next Step</button>
        </div>
    );
};

export default ProgressBar;
