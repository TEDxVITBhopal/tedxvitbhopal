import './App.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';
import Header from '../components/Header';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<><Header /><Home /></>} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
