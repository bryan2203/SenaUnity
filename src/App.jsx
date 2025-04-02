import { useState, useEffect } from 'react'
import './App.css'
import { Home } from './Pages/Home/Home'
import 'aos/dist/aos.css';
import AOS from 'aos';

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
      <ProfileUser/>
      <LoginPage/>
      
      
      

    </div>

  );
}

export default App
