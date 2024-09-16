import React, { useEffect } from "react";

function ToastMessage({ message, toastColor, onClose }) {
  const duration = 3000;
  useEffect(() => {
    // duration 후에 onClose 함수 호출
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    // 컴포넌트 언마운트 시 타이머 클리어
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`absolute right-10
        flex justify-between items-center text-2xl font-semibold p-4 rounded-xl text-${toastColor}-500 bg-white`}
    >
      {message}
      <button onClick={onClose} className="text-black mb-2 ml-10 mr-2">
        x
      </button>
    </div>
  );
}

export default ToastMessage;
