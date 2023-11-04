import { Link } from "react-router-dom"
import { NotFoundIcon } from ".."

export const NotFound = () => {
  return (
    <section className="bg-white h-screen dark:bg-zinc-800">
      <div className="container h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="w-full lg:w-1/2">
          <p className="text-sm font-medium text-amber-500 dark:text-amber-400">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Page not found</h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for does not exist.</p>
          <div className="flex items-center mt-6 gap-x-3">
            <Link to="/" className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-amber-500 rounded-lg shrink-0 sm:w-auto hover:bg-amber-600 dark:hover:bg-amber-500 dark:bg-amber-600">Go to characters</Link>
          </div>
        </div>

        <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
          <NotFoundIcon />
        </div>
      </div>
    </section>
  )
}
