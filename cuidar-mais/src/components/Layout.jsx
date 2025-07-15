import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterPages from '../../routes/RouterPages';

const Layout = () => {
  return (
    <BrowserRouter>
      <div style={styles.container}>
        <RouterPages />
      </div>
    </BrowserRouter>
  );
};

const styles = {
  container: {
    maxWidth: '480px',
    margin: '0 auto',
    backgroundColor: '#fff',
    minHeight: '100vh',
    boxShadow: '0 0 20px rgba(0,0,0,0.05)',
  },
};

export default Layout;
