import './ClickToEdit.scss';
import { useState, useRef, useEffect } from 'react';

const InputEdit = ({ value, handleValueChange }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedValue, setEditedValue] = useState(value);
  const inputEl = useRef(null);

  useEffect(() => {
    if (isEdit) {
      inputEl.current.focus();
    }
  }, [isEdit]);

  const handleBlur = () => {
    setIsEdit(false);
    handleValueChange(editedValue);
  };

  const handleInputChange = (e) => {
    setEditedValue(e.target.value);
  };

  const handleClick = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div className="input-box">
      {isEdit ? (
        <input
          className="input-edit"
          type="text"
          ref={inputEl}
          value={editedValue}
          onBlur={handleBlur}
          onChange={handleInputChange}
          onKeyUp={(e) => (e.key === 'Enter' ? handleBlur() : '')}
        />
      ) : (
        <span onClick={handleClick}>{editedValue}</span>
      )}
    </div>
  );
};

const ClickToEdit = () => {
  const initialInfo = {
    name: '김코딩',
    age: 30,
  };

  const [name, setName] = useState(initialInfo.name);
  const [age, setAge] = useState(initialInfo.age);

  return (
    <div className="cte-container">
      <div className="input-section">
        <span>이름</span>
        <InputEdit
          value={name}
          handleValueChange={(changedValue) => setName(changedValue)}
        />
      </div>
      <div className="input-section">
        <span>나이</span>
        <InputEdit
          value={age}
          handleValueChange={(changedValue) => setAge(changedValue)}
        />
      </div>
      <span>
        이름 {name} 나이 {age}
      </span>
    </div>
  );
};

export default ClickToEdit;
