import { Navigate, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home'
import BookSearch from './BookSearch';

const Pages = () => {
    return (
      <>
        <Routes>
          <Route path={'/'} element={<Navigate replace to="/Home" />  }/>
          <Route path={'/Signup'} element={<Signup />} />
          <Route path={'/Login'} element={<Login />} />
          <Route path={'/Home'} element={<Home />} />
          <Route path={'/Search'} element={<BookSearch />} />
        </Routes>
      </>
    );
  };
  
  export default Pages;
  