import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './login';
import Navbar from './nav';
import Registration from './reg';
import CreateBlog from './createBlog';
import BlogList from './blogList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Registration />} />
        <Route path="/createblog" element={<CreateBlog />} />
      </Routes>
    </div>
  );
}

export default App;
