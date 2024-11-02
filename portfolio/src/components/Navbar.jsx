import React,{useRef} from 'react'

import IconBars from './IconBars'
import IconClose from './IconClose'

function Navbar() {
  const navRef = useRef();
  const handleClick = () => {
    navRef.current.classList.toggle('show');
  }

  return (
    <>
      <header className='header'>
        <div className="container">
        <div className=" menuHeader">
          <h1 className='Logo'>MD MA<span>MUN</span></h1>
          <nav className='navMenu'>
            <ul className='menuList'ref={navRef}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Contact</a></li>
                <div className="mobileIcon closeIcon" onClick={handleClick} ><IconClose/></div>
              </ul>
              <div className="mobileIcon" onClick={handleClick} ><IconBars/></div>
          </nav>   
        </div>
      </div>
      </header>
      
    </>
  )
}

export default Navbar
