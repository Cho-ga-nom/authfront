import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './routes/home/home-route';
import Login from './routes/login/login-route';
import SignUP from './routes/signup/signup-route';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route patt="/signup" element={<SignUP />} />
      </Routes>
    </Router>
  );
}

export default App;
