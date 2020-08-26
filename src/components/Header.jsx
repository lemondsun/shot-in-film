import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <ul id='header-menu'>
        <Link  to='/' className='header-tab' >
        <li>
            home
        </li>
        </Link>
        <Link to='/portfolio' className='header-tab' >
        <li>
            portfolio
      </li>
        </Link>
        
      </ul>
    </header>
  )
}