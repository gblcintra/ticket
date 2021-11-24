
// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
// import Orders from '../Orders';
import './index.scss'

import LoadingComponents from '../../components/LodingComponents';
import Title from '../../components/Title';

import Ticket from '../../components/Tickets';
const tickets = [
  {
    name: 'Gabriel',
    lastname: 'Cintra',
    category: 'Familia',
    section: 'Sessão 1',
    movie: 'Matrix',
    hours: '18:00',
    code: '35CF2'
  },
  {
    name: 'Gabriel',
    lastname: 'Cintra',
    category: 'Familia',
    section: 'Sessão 1',
    movie: 'Matrix',
    hours: '18:00',
    code: '35CF2'
  },
  {
    name: 'Gabriel',
    lastname: 'Cintra',
    category: 'Familia',
    section: 'Sessão 1',
    movie: 'Matrix',
    hours: '18:00',
    code: '35CF2'
  }
]
export default function Dashboard() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadItens() {

      setLoading(false);
    }
    loadItens();
  }, []);

  useEffect(() => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }
    
  }, [])
  useEffect(()=>{
    window.navigator.vibrate(200)

  })
  
  if (loading) {
    return (
      <div>
        <LoadingComponents />
      </div>
    );
  }

  return (
    <div className='dashboard'>
      <Title title="Dashboard" bodyClass="dashboard" />
      <div className="tickets">
        <div className='tickets__box'>
          {tickets.map((ticket, index) => (
            <Ticket key={index} ticket={ticket} />
          ))}
        </div>
      </div>
    </div>
  );
}