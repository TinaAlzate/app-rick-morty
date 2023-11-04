import { NavLink } from "react-router-dom"

export const ItemNavbar = ({ to, item }) => {
  return (
    <div
      className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
      data-te-nav-item-ref>
      <NavLink
        className='p-0 text-neutral-500 transition duration-200 hover:ease-in-out hover:text-amber-500 focus:text-amber-500 motion-reduce:transition-none lg:px-2 [&.active]:text-amber-500 dark:text-neutral-200  dark:[&.active]:text-amber-500 dark:hover:text-amber-500 dark:focus:text-amber-500 '
        aria-current="page"
        to={ to }
        data-te-nav-link-ref>
        { item }
      </NavLink>
    </div>
  )
}
