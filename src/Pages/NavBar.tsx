import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar: React.FC = () => {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ]

  return (
    <div className='w-full bg-gradient-to-r from-green-700 to-lime-500 text-white shadow-sm'>
      <div className='navbar flex flex-wrap justify-between items-center px-4 py-2'>
        {/* Left: Logo and Mobile Dropdown */}
        <div className='flex items-center justify-between w-full lg:w-auto'>
          <div className='flex items-center gap-2 text-xl font-bold'>
            <img
              src='/src/assets/logo.png'
              alt='logo'
              className='w-10 h-10 rounded-full object-cover'
            />
            Recipe Finder
          </div>

          {/* Mobile Dropdown */}
          <div className='dropdown dropdown-end lg:hidden'>
            <label tabIndex={0} className='btn btn-ghost btn-circle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 p-2 shadow bg-gray-900 rounded-box w-52'
            >
              {menuItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className='text-lg font-medium hover:text-yellow-300 transition duration-300'
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Center: Search bar */}
        {/* <div className='w-full lg:w-[60%] my-2 lg:my-0'>
          <Search />
        </div> */}

        {/* Right: Menu items (desktop only) */}
        <div className='hidden lg:flex gap-6'>
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className='text-lg font-medium hover:text-yellow-300 transition duration-300'
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NavBar
