import React from "react";
import styled from "styled-components";

const ConfirmDialog = ({ message, onConfirm, onCancel }) => {
  return (
    <Overlay>
      <Modal>
        <p>{message || "Are you sure?"}</p>
        <div>
          <ButtonYes onClick={onConfirm}>Yes</ButtonYes>
          <ButtonNo onClick={onCancel}>No</ButtonNo>
        </div>
      </Modal>
    </Overlay>
  );
};

export default ConfirmDialog;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  min-width: 250px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const ButtonYes = styled.button`
  background: #4caf50;
  color: white;
  border: none;
  margin: 5px;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: #45a049;
  }
`;

const ButtonNo = styled.button`
  background: #f44336;
  color: white;
  border: none;
  margin: 5px;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: #d32f2f;
  }
`;
