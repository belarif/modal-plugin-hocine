import React from 'react';

interface ModalProps {
    buttonValue: string;
    modalContent: string;
    buttonSize?: "small" | "middle" | "large";
}
declare const ModalPlugin: ({ buttonValue, modalContent, buttonSize, }: ModalProps) => React.JSX.Element;

export { ModalPlugin as Modal };
