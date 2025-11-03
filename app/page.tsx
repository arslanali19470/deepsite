'use client';
import React from 'react';

const Page = () => {
  const openHome = () => {
    const ua = navigator.userAgent || '';
    const isAndroid = /Android/i.test(ua);

    if (isAndroid) {
      // Open Home via chatbot://open (mapped to Home screen)
      const intentUrl =
        'intent://open#Intent;scheme=chatbot;package=com.chatbot;S.browser_fallback_url=' +
        encodeURIComponent('https://play.google.com/store/apps/details?id=com.chatbot') +
        ';end';
      window.location.href = intentUrl;
      return;
    }

    // iOS/other: try scheme, then fallback
    window.location.href = 'chatbot://open';
    setTimeout(() => {
      // Fallback: keep it simple — maybe your website or App Store page
      window.location.href = 'https://deepsite-fawn.vercel.app/';
    }, 1500);
  };

  const openWelcomeWithName = (name = 'Farhan') => {
    const ua = navigator.userAgent || '';
    const isAndroid = /Android/i.test(ua);

    if (isAndroid) {
      // Open Welcome with a path param
      const intentUrl =
        `intent://welcome/${encodeURIComponent(name)}#Intent;scheme=chatbot;package=com.chatbot;S.browser_fallback_url=` +
        encodeURIComponent('https://play.google.com/store/apps/details?id=com.chatbot') +
        ';end';
      window.location.href = intentUrl;
      return;
    }

    // iOS/other
    window.location.href = `chatbot://welcome/${encodeURIComponent(name)}`;
    setTimeout(() => {
      window.location.href = `https://deepsite-fawn.vercel.app/welcome/${encodeURIComponent(name)}`;
    }, 1500);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1>Hello!</h1>
      <p>Tap a button on your phone to open the native app.</p>

      <button
        onClick={openHome}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
          marginRight: 10,
        }}
      >
        Open Home (chatbot://open)
      </button>

      <button
        onClick={() => openWelcomeWithName('Farhan')}
        style={{
          backgroundColor: '#28a745',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
        }}
      >
        Open Welcome (name=Farhan)
      </button>
    </div>
  );
};

export default Page;
