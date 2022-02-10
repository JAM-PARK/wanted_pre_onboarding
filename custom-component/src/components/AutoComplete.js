import './AutoComplete.scss';
import { useState, useEffect } from 'react';

const AutoComplete = () => {
  const list = [
    'antique',
    'vintage',
    '중고A급',
    'rustic',
    'refurbished',
    'respect',
    'radio',
  ];

  const [inputValue, setInputValue] = useState('');
  const [hasText, setHasText] = useState(false);
  const [contents, setContents] = useState(list);
  const [selected, setSelected] = useState(-1);

  useEffect(() => {
    if (inputValue === '') {
      setHasText(false);
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    e.target.value ? setHasText(true) : setHasText(false);
    setInputValue(e.target.value);

    const Regex = new RegExp(e.target.value, 'i');
    const filteredContents = list.filter((content) => content.match(Regex));
    setContents(filteredContents);

    if (e.target.value === filteredContents[0]) {
      setHasText(false);
    }
  };

  const handleKeyUp = (e) => {
    if (hasText) {
      if (e.code === 'ArrowDown' && contents.length - 1 > selected) {
        setSelected(selected + 1);
      }
      if (e.code === 'ArrowUp' && selected >= 0) {
        setSelected(selected - 1);
      }
      if (e.code === 'Enter' && selected >= 0) {
        handleDropDown(contents[selected]);
        setSelected(-1);
      }
    }
  };

  const handleDelete = () => {
    setInputValue('');
  };

  const handleDropDown = (clickedContent) => {
    setInputValue(clickedContent);

    const filteredContents = list.filter((content) => content === clickedContent);
    setContents(filteredContents);

    setHasText(false);
  };

  return (
    <div className="ac-container">
      <div className={hasText ? 'ac-input-box ' : 'ac-input-box has-no-text'}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
        />
        <div className="close-icon" onClick={handleDelete}>
          &times;
        </div>
      </div>
      {hasText ? (
        <ul className="ac-dropdown">
          {contents.map((content, idx) => (
            <li
              key={idx}
              onClick={() => handleDropDown(content)}
              className={selected === idx ? 'selected' : ''}
            >
              {content}
            </li>
          ))}
        </ul>
      ) : (
        ''
      )}
    </div>
  );
};

export default AutoComplete;
