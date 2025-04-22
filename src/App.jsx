import { useState, useEffect } from 'react'
import './App.css'
import { Home } from './Pages/Home/Home'
import 'aos/dist/aos.css';
import AOS from 'aos';
import LoginPage from './Pages/LoginPage/LoginPage';
import ProfileUser from './Pages/CrearPerfil/ProfileUser';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className='app'>

      <Home />
      {/* <ProfileUser/> */}
      {/* <LoginPage/> */}

      <LoginPage/>

    </div>
  );
}

export default App
