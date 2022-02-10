import './ClickToEdit.scss';
import { useState, useEffect } from 'react';

const ClickToEdit = () => {
  return (
    <div className="cte-container">
      <div className="input-section">
        <span>이름</span>
        <div className="input-box">
          <input className="input-edit" type="text"></input>
          {/* <span>test</span> */}
        </div>
      </div>
      <div className="input-section">
        <span>나이</span>
        <div className="input-box">
          <input className="input-edit" type="text"></input>
          {/* <span>test</span> */}
        </div>
      </div>
      <span>이름 김코딩 나이 22</span>
    </div>
  );
};

export default ClickToEdit;
