import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const CLASS_NAME = 'Modal';

export function Modal({ children, isOpened, onClose }: any) {
  const el = useMemo(() => document.getElementById('portal'), []);

  return (
    el &&
    ReactDOM.createPortal(
      isOpened && (
        <div className={`${CLASS_NAME}__wrapper`}>
          <div className={`${CLASS_NAME}`}>
            <div className={`${CLASS_NAME}__close`}>
              <button onClick={onClose} type="button">
                Close
              </button>
            </div>
            {children}
          </div>
        </div>
      ),
      el
    )
  );
}
