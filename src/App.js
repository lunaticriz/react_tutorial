import logo from './logo.svg';
import './App.css';

import Rizwan from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentClass from './components/ParentClass';

function App() {
  return (
    <div className="App">
      <ParentClass />
      {/* <EventBind /> 
      <FunctionClick />
      <ClassClick />
      <Counter />
      <Hello /> 
      <Rizwan name="Rahul">
        <p>This is child props from function components</p>
      </Rizwan>
      {/* <Rizwan name="Merry">
        <button>Submit from function components</button>
      </Rizwan>
      <Rizwan name="John" />

      <Welcome name="Nisha">
        <p>This is child props from class components</p>
      </Welcome>
      <Welcome name="Danish" />
        <button>Submit from class components</button>
      <Welcome name="Henry" /> */}
    </div>
  );
}

export default App;
