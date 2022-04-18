

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import Services from './pages/Home/Services/Services';


function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/services' element={<Services></Services>} ></Route>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/' element={<Home></Home>} ></Route>
      </Routes>



    </div>
  );
}

export default App;
