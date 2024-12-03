
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Components/Router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
