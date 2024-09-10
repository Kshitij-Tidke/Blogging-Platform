import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../../customCss.css'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className="bg-gray-900 text-white py-3 shadow-md">
    <Container>
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <Logo width="70px" />
          </Link>
        </div>
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            item.active ? (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className="
                    px-6 py-2
                    text-blue-400
                    bg-gray-800
                    rounded-full
                    hover:bg-blue-700
                    hover:text-white
                    transition-colors
                    duration-300
                  "
                >
                  {item.name}
                </button>
              </li>
            ) : null
          ))}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </nav>
    </Container>
  </header>
  )
}

export default Header