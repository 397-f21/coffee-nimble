import logo from './logo.svg';
import './App.css';
import AddButton from './components/AddButton';
import TaskCard from "./components/TaskCard";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="body">
        <AddButton/>
      </div>
      <TaskCard></TaskCard>
    </div>
  );
}

export default App;
