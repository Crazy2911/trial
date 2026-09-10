import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="border-b border-[#DEE5E0] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">

        {/* Logo and community label */}
        <div className="flex items-center justify-between gap-3">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-[#263F38]"
          >
            Campus<span className="text-[#147765]">Loop</span>
          </Link>

          <span className="rounded-full bg-[#EDF3EF] px-3 py-1 text-xs font-medium text-[#435E50]">
            Campus community
          </span>
        </div>

        {/* Navigation buttons */}
        <nav
          aria-label="Main navigation"
          className="mt-4 grid grid-cols-2 gap-2"
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-link flex min-h-11 items-center justify-center
               rounded-lg px-3 py-2 text-sm font-semibold ${
                 isActive
                   ? 'bg-[#263F38] text-white'
                   : 'bg-[#F3F6F4] text-[#435E50]'
               }`
            }
          >
            Campus board
          </NavLink>

          <NavLink
            to="/create"
            className={({ isActive }) =>
              `nav-link flex min-h-11 items-center justify-center
               rounded-lg px-3 py-2 text-sm font-semibold ${
                 isActive
                   ? 'bg-[#263F38] text-white'
                   : 'bg-[#F3F6F4] text-[#435E50]'
               }`
            }
          >
            Create post
          </NavLink>
        </nav>

      </div>
    </header>
  )
}

export default Header