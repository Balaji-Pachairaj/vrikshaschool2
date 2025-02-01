import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const NotificationPopup = ({ type, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // Auto close after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className={`relative w-[400px] shadow-[0_8px_32px_0_rgba(255,255,255,0.15)] backdrop-blur-[12px] border border-white/20 p-6 rounded-[20px] bg-black/25 transform transition-all ${
        type === 'success' 
          ? 'border-l-[3px] border-l-[#00c4cc]' 
          : 'border-l-[3px] border-l-red-500'
      }`}>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white/60 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="flex items-start gap-4">
          <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
            type === 'success'
              ? 'bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]'
              : 'bg-gradient-to-r from-red-500 to-red-600'
          }`}>
            {type === 'success' ? (
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            )}
          </div>
          
          <div>
            <h3 className={`text-lg font-kanit uppercase tracking-wider ${
              type === 'success'
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]'
                : 'text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600'
            }`}>
              {type === 'success' ? 'Success!' : 'Error'}
            </h3>
            <p className="mt-1 text-[14px] text-white/80 font-kanit">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;
