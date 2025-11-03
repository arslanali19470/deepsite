'use client';
import React from "react";

const Page = () => {
  const openApp = () => {
    // Try to open the app using deep link
    window.location.href = "chatbot://open";

    // Optional: Fallback to Play Store if app not installed
    setTimeout(() => {
      window.location.href =
        "https://play.google.com/store/apps";
    }, 1500);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello!</h1>
      <button
        onClick={openApp}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Open Chatbot App
      </button>
    </div>
  );
};

export default Page;
