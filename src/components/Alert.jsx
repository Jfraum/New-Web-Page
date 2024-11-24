import React, {useEffect} from 'react';

const AlertMessage = ({ message, isSuccess, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [onClose]);


  return (
    <div
      className={`fixed flex justify-center items-center left-1/2 transform -translate-x-1/2 p-4 rounded-md shadow-xl z-50 ${
        isSuccess ? 'bg-eacdc2 text-1e1e1e' : 'bg- text-1e1e1e'
      }`}
    >
      {message}
    </div>
  );
};

export default AlertMessage;