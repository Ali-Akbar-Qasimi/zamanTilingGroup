import logo from './assests/images/logo.PNG'

import heroImage1 from './assests/images/heroImages/1.jpg'
import heroImage2 from './assests/images/heroImages/2.jpg'
import heroImage3 from './assests/images/heroImages/3.jpg'

import './assests/styles/style.css'

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import 'animate.css';


function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="App">
      {
        screenWidth < 800 ?
          <nav >
            <img className='logo' src={logo} alt="" />

            <ul className={`animate__animated ${!menuOpen ? 'animate__fadeOutUpBig' : 'animate__fadeInDownBig'} `}>
              <li onClick={() => setMenuOpen(!menuOpen)}>Home</li>
              <li onClick={() => setMenuOpen(!menuOpen)}>About</li>
              <li onClick={() => setMenuOpen(!menuOpen)}>Services</li>
              <li onClick={() => setMenuOpen(!menuOpen)}>Contact</li>
            </ul>

            {
              menuOpen ? <CloseIcon className='close' onClick={() => setMenuOpen(!menuOpen)} /> : <MenuIcon className='open' onClick={() => setMenuOpen(!menuOpen)} />
            }
          </nav>
          :
          <nav >
            <img className='logo' src={logo} alt="" />
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </nav>
      }
      <main>
        <div className="hero">
          <div className="text">
            <h1>Zaman Tiling Group pty ltd</h1>
            <p>we are a private tilling compnay with
              years of experience and have done
              outstanding works throughout this journey.
              don’t doubt we will give you the right service.</p>
            <a className='hero-call-to-action' href="https://www.google.com">Get a quote</a>
          </div>
          <div className="images">
            <img className='heroImage1 animate__animated animate__rollIn' src={heroImage1} alt="" />
            <img className='heroImage2 animate__animated animate__jackInTheBox' src={heroImage2} alt="" />
            <img className='heroImage3 animate__animated animate__rollIn' src={heroImage3} alt="" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
