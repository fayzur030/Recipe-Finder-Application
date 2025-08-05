import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const NavBar: React.FC = () => {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Favourite', path: '/favourite' },
  ]

  return (
    <div className='w-full bg-[#E4DBC4] text-black shadow-md py-3'>
      <div className='navbar flex flex-wrap justify-between items-center px-4 py-2'>
        {/* Left: Logo and Mobile Dropdown */}
        <div className='flex items-center justify-between w-full lg:w-auto'>
          <div className='flex items-center gap-3 text-2xl font-bold text-orange-600 tracking-wide'>
            <img
              src={logo}
              alt='logo'
              className='w-12 h-12 rounded-full object-cover border-2 border-orange-100 shadow-lg'
            />
            <span className='text-shadow-sm'>Recipe Finder</span>
          </div>

          {/* Mobile Dropdown */}
          <div className='dropdown dropdown-end lg:hidden '>
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
              className='menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#FFF9F1] rounded-box w-52'
            >
              {menuItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md text-lg font-medium transition duration-200 ${
                        isActive
                          ? 'bg-[#F29C50] text-white'
                          : 'text-[#333333] hover:bg-[#DEC1B3] hover:text-[#5D9C6B]'
                      }`
                    }
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
              className={({ isActive }) =>
                `text-lg font-medium transition duration-300 ${
                  isActive
                    ? ' text-black border-b-2 border-[#5D9C6B]'
                    : ' text-black hover:text-[#F29C50]'
                }`
              }
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
