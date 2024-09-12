import React from 'react';

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed z-[1] top-0 left-0 w-full h-full bg-[rgba(0, 0, 0, 0.5)] flex items-center justify-center">
      <div className="bg-[white] p-[20px] rounded-[8px] relative w-[400px] max-w-[90%]">
        <span className="absolute top-[10px] right-[15px] text-[#333] text-[24px] cursor-pointer" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
