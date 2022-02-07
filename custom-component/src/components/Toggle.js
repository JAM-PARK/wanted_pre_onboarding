import './Toggle.scss';
import { useState } from 'react';

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="toggle-container" onClick={handleToggle}>
      <div className={`toggle-box ${isOn ? 'toggle-checked' : ''}`} />
      <div className="toggle-circle-container">
        <div className={`toggle-circle ${isOn ? 'toggle-checked' : ''}`} />
      </div>
      <span className="desc">{isOn ? 'Toggle Switch ON' : 'Toggle Switch OFF'}</span>
    </div>
  );
};

export default Toggle;
