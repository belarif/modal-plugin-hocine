import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Modal, Button } from "antd";

const PortalModal: React.FC = () => {
  const [isModelOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={showModal}>Open</Button>
      {isModelOpen &&
        createPortal(
          <Modal open={isModelOpen} footer={null} onCancel={handleCancel}>
            <p>modal content</p>
          </Modal>,
          document.body
        )}
    </>
  );
};

export default PortalModal;
