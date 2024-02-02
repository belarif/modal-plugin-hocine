import React from 'react';

interface ModalProps {
    modalContent: string;
    isOpen?: boolean;
}
declare const ModalPlugin: ({ modalContent, isOpen }: ModalProps) => React.JSX.Element;

export { ModalPlugin as Modal };
