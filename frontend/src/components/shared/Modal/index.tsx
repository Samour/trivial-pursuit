import React, { ReactNode } from 'react';

interface IProps {
  open: boolean;
  title?: string;
  children: ReactNode | ReactNode[];
}

export default function Modal({ open, title, children }: IProps): JSX.Element | null {
  if (!open) {
    return null;
  }

  const ModalTitle = () => {
    if (!title) {
      return null;
    }

    return <div className="modal-title">{title}</div>;
  }

  return (
    <div className="modal-container">
      <div className="modal">
        <ModalTitle />
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
}
