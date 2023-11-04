import { Hamburger } from "../"

export const ButtonBurguer = () => {
  return (
    <button
      className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
      type="button"
      data-te-collapse-init
      data-te-target="#navbarSupportedContent3"
      aria-controls="navbarSupportedContent3"
      aria-expanded="false"
      aria-label="Toggle navigation">

      <span className="[&>svg]:w-7">
        <Hamburger />
      </span>
    </button>
  )
}
