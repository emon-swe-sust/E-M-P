import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

function Navbar() {
  const [navShow, setNavShow] = useState(false)
  const history = useHistory()
  function buttonLogOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    history.push('')
  }

  const element =
    (
      <div className="text-lg md:flex md:justify-between">
        <Link to="/employees/" className="block mt-4 md:inline-block md:mt-0 text-white 
        hover:bg-white hover:text-blue-500 px-3 rounded-lg py-2
        hover:shadow-xl hover:-translate-y-1 transform transition font-bold">
          Employees
        </Link>
        <Link to="/teams/" className="block mt-4 md:inline-block md:mt-0 text-white hover:bg-white hover:text-blue-500 px-3 rounded-lg py-2 
        hover:shadow-xl hover:-translate-y-1 transform transition font-bold">
          Teams
        </Link>
        <Link to="/projects/" className="block mt-4 md:inline-block md:mt-0 text-white hover:bg-white hover:text-blue-500 px-3 rounded-lg py-2 
        hover:shadow-xl hover:-translate-y-1 transform transition font-bold">
          Projects
        </Link>
        <Link to="/leave/" className="block mt-4 md:inline-block md:mt-0 text-white hover:bg-white hover:text-blue-500 px-3 rounded-lg py-2 
        hover:shadow-xl hover:-translate-y-1 transform transition font-bold">
          Leave
        </Link>
        <Link to="/holidays" className="block mt-4 md:inline-block md:mt-0 text-white hover:bg-white hover:text-blue-500 px-3 rounded-lg py-2 
        hover:shadow-xl hover:-translate-y-1 transform transition font-bold">
          Holidays
        </Link>
        <hr className='md:hidden mt-5' />
        <div className='mt-4 md:inline-block md:ml-auto md:mt-0 text-white  hover:bg-red-500 hover:text-white px-3 rounded-lg py-2 mr-2
        hover:shadow-xl hover:-translate-y-1 transform transition font-bold'>
          <button className="flex rounded-lg
          hover:-translate-y-1 transform transition
          hover:opacity-80"
            onClick={buttonLogOut}
          >
            {/* strokeLine="round" */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>
      </div>
    )

  return (
    <nav className='flex items-center justify-between flex-wrap bg-blue-400 p-6 shadow-2xl md:w-9/12 md:m-auto'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <span className='font-semibold text-xl tracking-tight'>E M S</span>
      </div>

      <div className='block md:hidden'>
        <button
          className='block items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'
          onClick={() => setNavShow(!navShow)}
        >
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
        {
          navShow ? (
            element
          ) : (
            <div className="hidden md:flex w-full"> {element} </div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar
