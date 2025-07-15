import React from 'react';

const InputField = ({ type = "text", placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        width: '93%',
        padding: '15px',
        marginBottom: '15px',
        borderRadius: '10px',
        border: 'none',
        backgroundColor: '#f2f1ff',
        fontSize: '14px',
        outline: 'none',
      }}
    />
  );
};

export default InputField;
