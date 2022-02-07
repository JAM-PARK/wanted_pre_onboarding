import './Tab.scss';
import { useState } from 'react';

const Tab = () => {
  const [curTabIdx, setCurTabIdx] = useState(0);

  const tabArr = [
    { menu: 'Tab1', desc: 'Tab menu ONE' },
    { menu: 'Tab2', desc: 'Tab menu TWO' },
    { menu: 'Tab3', desc: 'Tab menu THREE' },
    { menu: 'Tab4', desc: 'Tab menu FOUR' },
    { menu: 'Tab5', desc: 'Tab menu FIVE' },
  ];

  const handleTabIdx = (idx) => {
    setCurTabIdx(idx);
  };

  return (
    <div className="tab-container">
      <ul className="tab-menu">
        {tabArr.map((tab, idx) => (
          <li
            key={idx}
            className={curTabIdx === idx ? 'sub-menu focus' : 'sub-menu'}
            onClick={() => handleTabIdx(idx)}
          >
            {tab.menu}
          </li>
        ))}
      </ul>
      <span className="tag-desc">{tabArr[curTabIdx].desc}</span>
    </div>
  );
};

export default Tab;
