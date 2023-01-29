import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './login';
import Navbar from './nav';
import Registration from './reg';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
