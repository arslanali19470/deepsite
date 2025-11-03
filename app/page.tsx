'use client';
import React from 'react';

const Page = () => {
  const playStore = 'https://play.google.com/store/apps';

  const openHome = () => {
    const isAndroid = /Android/i.test(navigator.userAgent || '');
    if (isAndroid) {
      const intentUrl =
        'intent://app/open#Intent;scheme=chatbot;package=com.chatbot;S.browser_fallback_url=' +
        encodeURIComponent(playStore) +
        ';end';
      window.location.replace(intentUrl);
      return;
    }
    // iOS/other
    window.location.href = 'chatbot://app/open';
    setTimeout(() => {
      window.location.href = 'https://deepsite-fawn.vercel.app/';
    }, 1500);
  };

  const openWelcomeWithName = (name = 'Farhan') => {
    const isAndroid = /Android/i.test(navigator.userAgent || '');
    if (isAndroid) {
      const intentUrl =
        `intent://app/welcome/${encodeURIComponent(name)}#Intent;scheme=chatbot;package=com.chatbot;S.browser_fallback_url=` +
        encodeURIComponent(playStore) +
        ';end';
      window.location.replace(intentUrl);
      return;
    }
    // iOS/other
    window.location.href = `chatbot://app/welcome/${encodeURIComponent(name)}`;
    setTimeout(() => {
      window.location.href = `https://deepsite-fawn.vercel.app/welcome/${encodeURIComponent(name)}`;
    }, 1500);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', background: "white", }}>
      <h1 style={{ fontSize: '2rem', color: '#333', marginBottom: '30px' }}>Deep Linking Test</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
        <button
          onClick={openHome}
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            padding: '15px 30px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'background-color 0.3s ease',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
        >
          Open Home (chatbot://app/open)
        </button>

        <button
          onClick={() => openWelcomeWithName('Arslan')}
          style={{
            backgroundColor: '#28a745',
            color: '#fff',
            padding: '15px 30px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'background-color 0.3s ease',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#218838')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#28a745')}
        >
          Open Welcome (name=Arslan)
        </button>
      </div>

      <p style={{ color: '#777', fontSize: '1rem' }}>
        Click the buttons above to test the deep linking functionality.
      </p>
    </div>
  );
};

export default Page;
