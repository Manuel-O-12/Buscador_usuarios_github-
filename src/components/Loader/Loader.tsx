import React from 'react';
import './Loader.css';

const Loader: React.FC = () => {
  return (
    <div className="loader" role="status" aria-live="polite">
      <div className="loader__spinner" aria-hidden="true" />
      <p className="loader__text">Buscando usuario…</p>
    </div>
  );
};

export default Loader;
