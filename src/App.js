import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import AddEditProduct from './pages/AddEditProduct';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/detail" element={<Detail />} />
      <Route exact path="/add" element={<AddEditProduct />} />
    </Routes>
  );
}

export default App;
