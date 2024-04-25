import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import Question from './pages/Question';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Question' element={<Question/>}/>
      <Route path='/Result' element={<Result/>}/>
    </Routes>
  );
}

export default App;
