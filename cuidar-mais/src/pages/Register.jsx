import React from 'react';
import InputField from '../components/InputField';

const Register = () => {
  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif' }}>
      <h2>Your Logo</h2>
      <h3 style={{ fontSize: '22px', fontWeight: '600' }}>Sign in up</h3>
      <p>Lorem Ipsum is simply</p>

      <p style={{ fontSize: '13px' }}>
        If you already have an account register <br />
        You can <span style={{ color: '#5b3de5', fontWeight: 'bold', cursor: 'pointer' }}>Login here !</span>
      </p>

      <InputField placeholder="Enter Email" />
      <InputField placeholder="Create User name" />
      <InputField placeholder="Contact number" />
      <InputField type="password" placeholder="Password" />
      <InputField type="password" placeholder="Confirm Password" />

      <button style={{
        width: '100%',
        padding: '15px',
        backgroundColor: '#5b3de5',
        color: 'white',
        fontSize: '16px',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(91, 61, 229, 0.4)',
      }}>
        Register
      </button>
    </div>
  );
};

export default Register;
