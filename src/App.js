import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './routes/home/home-route';
import Login from './routes/login/login-route';
import MyPage from './routes/mypage/mypage-route';
import SignUP from './routes/signup/signup-route';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
