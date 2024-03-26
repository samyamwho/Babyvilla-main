import React from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center; /* Center align content */
  z-index: 10; /* Make sure this popup

  /* Custom styles for message */
  p {
    font-size: 18px;
    color: #333; /* Change color as needed */
    font-family: 'Arial', sans-serif; /* Change font family as needed */
    margin-bottom: 10px;
  }

  img {
    max-width: 80%; /* Ensure image doesn't exceed container width */
    margin-bottom: 10px; /* Add some margin below the image */
  }

  button {
    background-color: teal;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 3px;
  }
`;

const Popup = ({ message, imageSrc, onClose }) => {
  return (
    <PopupContainer>
      {imageSrc && <img src={imageSrc} alt="Thank You" />}
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </PopupContainer>
  );
};

export default Popup;
