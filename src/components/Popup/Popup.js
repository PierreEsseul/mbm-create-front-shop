import React from "react";

import "./Popup.css";

export const Popup = ({ text, closePopup }) => {
  return (
    <div className="popup-container">
     <div className="popup-body">
        <p>{text}</p>
      <button className="close" onClick={closePopup}>Fermer</button>
     </div>
    </div>
  );
};