import './Tag.scss';
import { useState } from 'react';

const Tag = () => {
  const initialTags = ['wanted', 'CODESTATES', '프리온보딩', '프론트엔드'];
  const [tags, setTags] = useState(initialTags);

  const deleteTags = (idxToDelete) => {
    setTags(tags.filter((_, idx) => idx !== idxToDelete));
  };

  const addTags = (e) => {
    const filteredTags = tags.filter((el) => el === e.target.value);
    if (e.target.value !== '' && filteredTags.length === 0) {
      setTags([...tags, e.target.value]);
      e.target.value = '';
    }
  };

  return (
    <div className="tag-container">
      <div className="tag-input">
        <ul>
          {tags.map((tag, idx) => (
            <li key={idx} className="tag">
              <span>{tag}</span>
              <span className="tag-close-icon" onClick={() => deleteTags(idx)}>
                &times;
              </span>
            </li>
          ))}
        </ul>
        <input
          type="text"
          onKeyUp={(e) => (e.key === 'Enter' ? addTags(e) : '')}
          placeholder="Press enter to add tag"
        />
      </div>
    </div>
  );
};

export default Tag;
