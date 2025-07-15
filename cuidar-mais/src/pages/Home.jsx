import React from 'react';

const Home = () => {
  const cards = [
    { label: 'Send', icon: '📤' },
    { label: 'Request', icon: '📥' },
    { label: 'Top up Airtime', icon: '📱' },
    { label: 'Buy Data Bundle', icon: '📶' },
    { label: 'Utilities', icon: '⚡' },
    { label: 'Check In', icon: '🧾' }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2 style={{ fontWeight: '600' }}>Home</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', marginTop: '20px' }}>
        {cards.map((card, index) => (
          <div key={index} style={{
            backgroundColor: '#FFFFFF',
            padding: '20px',
            borderRadius: '15px',
            textAlign: 'center',
            boxShadow: '0 1px 5px rgba(0,0,0,0.05)'
          }}>
            <div style={{ fontSize: '24px' }}>{card.icon}</div>
            <p style={{ fontWeight: '500', margin: '10px 0 0 0' }}>{card.label}</p>
            <p style={{ fontSize: '12px', color: '#aaa' }}>10+ options</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-around' }}>
        <div style={navStyle(true)}>🏠</div>
        <div style={navStyle(false)}>👤</div>
      </div>
    </div>
  );
};

const navStyle = (active) => ({
  backgroundColor: active ? '#5b3de5' : 'transparent',
  color: active ? 'white' : '#888',
  padding: '10px 15px',
  borderRadius: '20px',
  fontSize: '20px'
});

export default Home;
