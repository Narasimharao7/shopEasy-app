import { useEffect } from "react";

function Popup({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="popup">
      <p>{message}</p>
    </div>
  );
}

export default Popup;
