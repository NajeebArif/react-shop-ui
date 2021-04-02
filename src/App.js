import logo from './logo.svg';
import './App.css';
import Navigationbar from './components/Navigationbar';
import ThriftRoutes from './components/ThriftRoutes';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <Navigationbar />
        </div>
        <div>
        <ThriftRoutes />
        </div>
      </Router>

    </div>
  );
}

export default App;
