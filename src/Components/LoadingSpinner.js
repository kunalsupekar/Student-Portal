import React from 'react';
import { PacmanLoader } from 'react-spinners';
import styled from 'styled-components';

const SpinnerOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const Label = styled.p`
  color: #ffffff;
  font-size: 18px;
  margin-top: 10px;
`;

const LoadingSpinner = ({ label }) => {
  return (
    <SpinnerOverlay>
      <PacmanLoader color="#ffffff" />
      <Label>{label}</Label>
    </SpinnerOverlay>
  );
};

export default LoadingSpinner;