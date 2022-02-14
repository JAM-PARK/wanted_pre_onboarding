import './App.scss';
import Toggle from './components/Toggle';
import Modal from './components/Modal';
import Tab from './components/Tab';
import Tag from './components/Tag';
import AutoComplete from './components/AutoComplete';
import ClickToEdit from './components/ClickToEdit';

const App = () => {
  return (
    <div id="container">
      <div id="title">Custom Component</div>
      <div className="box">
        <div className="sub-title">Toggle</div>
        <Toggle />
      </div>
      <div className="box">
        <div className="sub-title">Modal</div>
        <Modal />
      </div>
      <div className="box">
        <div className="sub-title">Tab</div>
        <Tab />
      </div>
      <div className="box">
        <div className="sub-title">Tag</div>
        <Tag />
      </div>
      <div className="box">
        <div className="sub-title">AutoComplete</div>
        <AutoComplete />
      </div>
      <div className="box">
        <div className="sub-title">ClickToEdit</div>
        <ClickToEdit />
      </div>
    </div>
  );
};

export default App;
