import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f4f4f9',
        padding: '0 20px',
      }}
    >
      <h1
        style={{
          fontSize: '6rem',
          fontWeight: 'bold',
          color: '#ff4a4a',
          margin: '0',
        }}
      >
        404
      </h1>
      <p
        style={{
          fontSize: '1.5rem',
          color: '#555',
          margin: '10px 0 20px',
        }}
      >
        Sorry, the page you’re looking for doesn’t exist.
      </p>
      <button
        onClick={() => navigate('')}
        style={{
          padding: '10px 20px',
          fontSize: '1rem',
          fontWeight: 'bold',
          color: '#fff',
          backgroundColor: '#007bff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
      >
        Go Back Home
      </button>
    </div>
  );
};

export default Error;
