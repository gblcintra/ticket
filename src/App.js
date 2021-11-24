import './App.scss';
import { BrowserRouter } from 'react-router-dom';

// Import Alerts
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// End Import Alerts

// Import Routes
import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
// End Import Routes

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes />
        <ToastContainer position="top-right" autoClose={3000} />
        <Footer />
      </BrowserRouter>
  );
}

export default App;
