import React, { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const toggleOn = () => {
    setIsOn((isOn) => !isOn);
  };

  const color = isOn ? 'white' : 'red';
  return (
    <button style={{ backgroundColor: color }} onClick={toggleOn}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}

export default Toggle;
