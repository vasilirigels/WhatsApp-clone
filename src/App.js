import Chat from './Chat';
import './App.css';
import Sidebar from './Sidebar';
function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default App;
