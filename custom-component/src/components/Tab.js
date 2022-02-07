import './Tab.scss';
import { useState } from 'react';

const Tab = () => {
  return (
    <div className="tab-container">
      <ul className="tab-menu">
        <li className="submenu">test</li>
        <li className="submenu">test2</li>
        <li className="submenu">test3</li>
      </ul>
      <span className="tag-desc">test content</span>
    </div>
  );
};

export default Tab;
