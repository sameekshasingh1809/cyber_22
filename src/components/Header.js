import React from 'react';

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-card">
        <img 
          src="/myphoto.jpg" 
          alt="Sameeksha Singh" 
          className="header-photo"
        />
        <h2>Sameeksha’s Expense Tracker </h2>
        <p className="header-subtitle">Track your spending. Balance your vibe ✨</p>
      </div>
    </div>
  );
};
