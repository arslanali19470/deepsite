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
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1>Deep Linking Test</h1>
      <button onClick={openHome} style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: 6, cursor: 'pointer', marginRight: 10 }}>
        Open Home (chatbot://app/open)
      </button>
      <button onClick={() => openWelcomeWithName('Farhan')} style={{ backgroundColor: '#28a745', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
        Open Welcome (name=Farhan)
      </button>
    </div>
  );
};

export default Page;
