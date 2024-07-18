import React, { useState, useEffect } from 'react';
import './popup.scss';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    // Optional: Show the popup only once using local storage
    if (localStorage.getItem('popupShown') !== 'true') {
      setShowPopup(true);
      localStorage.setItem('popupShown', 'true');
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="popup">
        <div className="popup-content">
          <button className="close-btn" onClick={closePopup}>
            &times;
          </button>
          <h2>Welcome!</h2>
          <p>This is a short info message.</p>
        </div>
      </div>
    )
  );
};

export default Popup;
