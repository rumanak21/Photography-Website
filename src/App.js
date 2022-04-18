

import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './pages/AboutMe/AboutMe';
import Blog from './pages/Blog/Blog';
import CheckOut from './pages/Home/CheckOut/CheckOut';
import Footer from './pages/Home/Footer/Footer';
import Header from './pages/Home/Header/Header';
import Home from './pages/Home/Home/Home';
import Services from './pages/Home/Services/Services';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import SignUp from './pages/SignUp/SignUp';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/services' element={<Services></Services>} ></Route>
        <Route path='/blog' element={<Blog></Blog>} ></Route>
        <Route path='/blog' element={<Blog></Blog>} ></Route>
        <Route path='/about-me' element={<AboutMe></AboutMe>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/signup' element={<SignUp></SignUp>} ></Route>
        <Route path='/checkout' element={<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>}

        ></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>} ></Route>
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
