import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main />
    </div>
  );
}

export default App;