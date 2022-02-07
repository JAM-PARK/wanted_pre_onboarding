import './Toggle.scss';

const Toggle = () => {
  return (
    <>
      <div className="container">
        <div className="toggle-container toggle-checked" />
        <div className="toggle-circle-container">
          <div className="toggle-circle toggle-checked" />
        </div>
        <span className="desc">Toggle Switch ON</span>
      </div>
    </>
  );
};

export default Toggle;
