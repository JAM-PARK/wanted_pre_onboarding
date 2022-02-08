import './Tag.scss';
import { useState } from 'react';

const Tag = () => {
  return (
    <div className="tag-container">
      <div className="tag-input">
        <ul>
          <li className="tag">
            <span>test1</span>
            <span className="tag-close-icon">&times;</span>
          </li>
          <li className="tag">
            <span>test2</span>
            <span className="tag-close-icon">&times;</span>
          </li>
          <li className="tag">
            <span>test3</span>
            <span className="tag-close-icon">&times;</span>
          </li>
        </ul>
        <input type="text" placeholder="Press enter to add tag" />
      </div>
    </div>
  );
};

export default Tag;
