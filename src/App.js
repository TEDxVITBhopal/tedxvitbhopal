import './App.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
