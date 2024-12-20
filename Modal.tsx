import React from 'react';
import './Modal.css';

interface ModalProps {
  onCancel: () => void;
  onEndClass: () => void;
}

const Modal: React.FC<ModalProps> = ({ onCancel, onEndClass }) => {
  return (
    <div className="modal-section">
      <div className="modal">
        <h2>Select a reason to end class</h2>
        <div className="modal-options">
          <label><input type="radio" name="reason" /> Class completed</label>
          <label><input type="radio" name="reason" /> Class interrupted/aborted</label>
          <label><input type="radio" name="reason" /> Student didn’t show up</label>
          <label><input type="radio" name="reason" /> I got disconnected</label>
        </div>
        <div className="modal-buttons">
          <button onClick={onEndClass} className="end-button">End Class</button>
          <button onClick={onCancel} className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
