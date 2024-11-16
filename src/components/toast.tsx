import React, { useEffect } from 'react';

interface ToastProps {
  msg: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ msg, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="w-72 h-18 rounded-lg z-50 text-gray-900  bg-white px-3 py-2 flex items-center justify-center relative animate-slideIn md:text-base text-sm">
      {msg}
      <div className="absolute left-0 bottom-0 w-full h-1 bg-emerald-300 animate-progressBar"></div>
    </div>
  );
};

export default Toast;

