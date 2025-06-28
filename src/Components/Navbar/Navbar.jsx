import { react } from 'react'
import "./Navbar.css"


function Navbar({name}) {

  console.log(name)

  return (
    <nav className = {`product-bar`}>
      <p>Hello, {name}</p>
    <div className='shopbells'>
      <input type='search' className="searching" placeholder='search'/>
      
      <div className='gg--shopping-cart'></div>
      <div className='mage--notification-bell'></div>
    </div>
    </nav>
  )
}

export default Navbar
