import React from "react";
interface ModalProps {
    buttonValue: string;
    modalContent: string;
    buttonSize?: "small" | "middle" | "large";
}
export declare const ModalPlugin: ({ buttonValue, modalContent, buttonSize, }: ModalProps) => React.JSX.Element;
export {};
