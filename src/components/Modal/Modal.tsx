import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Modal, Button } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";

interface ModalProps {
  buttonValue: string;
  modalContent: string;
  buttonSize?: "small" | "middle" | "large";
}

export const ModalPlugin = ({
  buttonValue,
  modalContent,
  buttonSize,
}: ModalProps) => {
  const [isModelOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button size={buttonSize} onClick={showModal}>
        {buttonValue}
      </Button>
      {isModelOpen &&
        createPortal(
          <Modal open={isModelOpen} footer={null} onCancel={handleCancel}>
            <p>{modalContent}</p>
          </Modal>,
          document.body
        )}
    </>
  );
};
