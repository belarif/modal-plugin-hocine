import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "antd";
interface ModalProps {
  modalContent: string;
  isOpen?: boolean;
}

export const ModalPlugin = ({ modalContent, isOpen }: ModalProps) => {
  const [isModelOpen, setIsModalOpen] = useState(true);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isOpen &&
        createPortal(
          <Modal open={isModelOpen} footer={null} onCancel={handleCancel}>
            <p>{modalContent}</p>
          </Modal>,
          document.body
        )}
    </>
  );
};
