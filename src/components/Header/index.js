

import './index.scss'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FaHome, FaSearch, FaBell, FaCog } from "react-icons/fa";
export default function Header() {
  useEffect(() => {

  }, [])

  return (
    <>
      <h1 className='header-desktop-title'>Ticket</h1>
      <header className='header-desktop'>
        <nav className='header-desktop__nav'>
          <Link className='header-desktop__nav__link' to="#">Home</Link>
          <Link className='header-desktop__nav__link' to="#">Search</Link>
          <Link className='header-desktop__nav__link' to="#">Notification</Link>
          <Link className='header-desktop__nav__link' to="#">Settings</Link>
        </nav>
      </header>
      <header className='header-mobile'>
        <div className="containers">

          <ul className="list">

            <li className="item-list">
              <Link className="item-link l5" to="#">
                <div><i className="fas fa-home icon"><FaHome /></i></div>
                <p>Home</p>
              </Link>
            </li>

            <li className="item-list">
              <Link className="item-link l5" to="#">
                <div><i className="fas fa-search icon"><FaSearch /></i></div>
                <p>Search</p>
              </Link>
            </li>

            <li className="item-list">
              <Link className="item-link l5" to="#">
                <div><i className="fas fa-bell icon"><FaBell /></i></div>
                <p>Notification</p>
              </Link>
            </li>

            <li className="item-list">
              <Link className="item-link l5" to="#">
                <div><i className="fas fa-cog icon"><FaCog /></i></div>
                <p>Settings</p>
              </Link>
            </li>

          </ul>
        </div>
      </header>
    </>

  )
}