import React from "react";

const CallButton = ({ phoneNumber }) => {
  return (
    <a
      href={`tel:${phoneNumber}`}
      className="fixed bottom-4 left-4 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 flex items-center justify-center shadow-lg transition-colors"
      aria-label={`Call ${phoneNumber}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5h2l3 7-4 4a11 11 0 006 6l4-4 7 3v2a2 2 0 01-2 2h-1a17 17 0 01-17-17V5z"
        />
      </svg>
    </a>
  );
};

export default CallButton;
