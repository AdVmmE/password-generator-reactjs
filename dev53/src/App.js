import React, { useState } from 'react';

function App() {
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const length = 12; // Length of the password
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }
    setPassword(generatedPassword);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Password Generator</h1>
      <button onClick={generatePassword} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Generate Password
      </button>
      {password && (
        <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
          Generated Password: <span style={{ color: 'blue' }}>{password}</span>
        </div>
      )}
    </div>
  );
}

export default App;
