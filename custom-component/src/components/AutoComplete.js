import './AutoComplete.scss';
import { useState } from 'react';

const AutoComplete = () => {
  return (
    <div className="ac-container">
      <div className="ac-input-box">
        {/* <div className="ac-input-box has-no-text"> */}
        <input type="text" />
        <div className="close-icon">&times;</div>
      </div>
      <ul className="dropdown">
        <li className="selected">test1</li>
        <li>test2</li>
        <li>test3</li>
      </ul>
    </div>
  );
};

export default AutoComplete;
