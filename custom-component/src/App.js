import './App.scss';
import Toggle from './components/Toggle';
import Modal from './components/Modal';
import Tab from './components/Tab';
import Tag from './components/Tag';
import AutoComplete from './components/AutoComplete';
import ClickToEdit from './components/ClickToEdit';

const App = () => {
  return (
    <>
      <div>custom-component</div>
      <Toggle />
      <Modal />
      <Tab />
      <Tag />
      <AutoComplete />
      <ClickToEdit />
    </>
  );
};

export default App;
