import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import Logo from '../assets/logo.png';

const Register = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', position: 'relative' }}>
      {/* Logo no canto superior esquerdo */}
      <img 
        src={Logo} 
        alt="Logo" 
        style={{
          position: 'absolute',
          top: '10px',
          left: '-40px',
          width: '180px', // Tamanho reduzido
          height: 'auto',
        }} 
      />

      {/* Espaço extra para não sobrepor o conteúdo */}
      <div style={{ marginTop: '120px' }}>
        <h3 style={{ fontSize: '22px', fontWeight: '600' }}>Sign up</h3>
        <p>Lorem Ipsum is simply</p>

        <p style={{ fontSize: '13px' }}>
          If you already have an account register <br />
          You can{' '}
          <span
            style={{ color: '#5b3de5', fontWeight: 'bold', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            Login here !
          </span>
        </p>

        <InputField placeholder="Enter Email" />
        <InputField placeholder="Create User name" />
        <InputField placeholder="Contact number" />
        <InputField type="password" placeholder="Password" />
        <InputField type="password" placeholder="Confirm Password" />

        <button
          style={{
            width: '100%',
            padding: '15px',
            backgroundColor: '#5b3de5',
            color: 'white',
            fontSize: '16px',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(91, 61, 229, 0.4)',
            marginTop: '20px',
          }}
          onClick={() => navigate('/')}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
