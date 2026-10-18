import React from 'react';
import './ErrorMessage.css';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="error-message" role="alert">
      <span className="error-message__icon" aria-hidden="true">⚠️</span>
      <p className="error-message__text">{message}</p>
    </div>
  );
};

export default ErrorMessage;
