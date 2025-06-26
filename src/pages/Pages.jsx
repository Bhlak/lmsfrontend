import { Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home'

const Pages = () => {
    return (
      <>
        <Routes>
          <Route path={'/Signup'} element={<Signup />} />
          <Route path={'/Login'} element={<Login />} />
          <Route path={'/Home'} element={<Home />} />
        </Routes>
      </>
    );
  };
  
  export default Pages;
  