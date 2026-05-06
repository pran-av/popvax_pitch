import React, { useState, useEffect } from 'react';
import PopVaxPage from './components/PopVaxPage';
import MatterwayPage from './components/MatterwayPage';
import './App.css';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Simple routing logic
  const renderPage = () => {
    if (currentPath === '/matterway') {
      return <MatterwayPage />;
    }
    return <PopVaxPage />;
  };

  return (
    <div className="app-container">
      {/* Navigation for easier testing/switching */}
      <nav style={{ 
        position: 'fixed', 
        top: '1rem', 
        right: '1rem', 
        zIndex: 100,
        display: 'flex',
        gap: '0.5rem'
      }}>
        <button 
          onClick={() => { window.history.pushState({}, '', '/'); setCurrentPath('/'); }}
          className={`tag ${currentPath !== '/matterway' ? 'active' : ''}`}
          style={{ cursor: 'pointer', border: currentPath !== '/matterway' ? '2px solid' : '1px solid opacity 0.5' }}
        >
          PopVax
        </button>
        <button 
          onClick={() => { window.history.pushState({}, '', '/matterway'); setCurrentPath('/matterway'); }}
          className={`tag ${currentPath === '/matterway' ? 'active' : ''}`}
          style={{ cursor: 'pointer', border: currentPath === '/matterway' ? '2px solid' : '1px solid opacity 0.5' }}
        >
          Matterway
        </button>
      </nav>

      {renderPage()}
    </div>
  );
}

export default App;
