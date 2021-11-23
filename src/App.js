import './App.scss';
import { BrowserRouter } from 'react-router-dom';

// Import Alerts
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// End Import Alerts

// Import Routes
import Routes from './routes';
// End Import Routes

function App() {
  return (
      <BrowserRouter>
        {/* <div className="container"> */}
        <Routes />
        <ToastContainer position="top-right" autoClose={3000} />
        {/* </div>      */}
      </BrowserRouter>
  );
}

export default App;
