import Modal from "./components/Modal";
import Todo from "./components/Todo";
import Backdrop from "./components/Backdrop"

function App() {
  return (
    <div>
      <h1>My TODOs</h1>
      <Todo text="sample text1"/>
      <Todo text="sample text2"/>
      <Todo text="sample text3"/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
