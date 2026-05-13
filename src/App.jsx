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

  useEffect(() => {
    if (currentPath === '/popvax') {
      document.title = 'Pranav | Chief of Staff @ PopVax';
    } else {
      document.title = 'Pranav | SPM @ Matterway';
    }
  }, [currentPath]);

  useEffect(() => {
    const body = document.body;
    if (currentPath === '/popvax') {
      body.classList.remove('page-matterway');
    } else {
      body.classList.add('page-matterway');
    }
    return () => {
      body.classList.remove('page-matterway');
    };
  }, [currentPath]);

  // PopVax uses constrained app-container; Matterway is full viewport (no cyan/magenta body bleed).
  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          zIndex: 100,
          display: 'flex',
          gap: '0.5rem',
        }}
      >
        <button
          type="button"
          onClick={() => {
            window.history.pushState({}, '', '/');
            setCurrentPath('/');
          }}
          className={`tag ${currentPath !== '/popvax' ? 'active' : ''}`}
          style={{ cursor: 'pointer', border: currentPath !== '/popvax' ? '2px solid' : '1px solid opacity 0.5' }}
        >
          Matterway
        </button>
        <button
          type="button"
          onClick={() => {
            window.history.pushState({}, '', '/popvax');
            setCurrentPath('/popvax');
          }}
          className={`tag ${currentPath === '/popvax' ? 'active' : ''}`}
          style={{ cursor: 'pointer', border: currentPath === '/popvax' ? '2px solid' : '1px solid opacity 0.5' }}
        >
          PopVax
        </button>
      </nav>

      {currentPath === '/popvax' ? (
        <div className="app-container">
          <PopVaxPage />
        </div>
      ) : (
        <MatterwayPage />
      )}
    </>
  );
}

export default App;
