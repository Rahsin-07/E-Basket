import React from 'react';
import './Banner.css';

const Banner = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="banner">
      <h1>Groceries Delivered in 90 minutes</h1>
      <p style={{ marginLeft: '100px' }}>
        Get Your Healthy foods and snacks at your doorstep
      </p>

      <div style={{ marginTop: '20px', marginLeft: '100px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Search for groceries..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '10px 15px',
            width: '300px',
            border: 'none',
            borderRadius: '5px',
          }}
        />
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          disabled
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
