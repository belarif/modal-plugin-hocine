import { useState } from "react";
import { createPortal } from "react-dom";
import { Modal, Button } from "antd";

export default function PortalModal({ modalContent }) {
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
            <p>{modalContent}</p>
          </Modal>,
          document.body
        )}
    </>
  );
}
