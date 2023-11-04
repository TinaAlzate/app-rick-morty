import { useEffect } from "react";
import { Link } from "react-router-dom"
import { Collapse, initTE } from "tw-elements";
import { Logo, ItemNavbar, ButtonTheme, useTheme, ButtonBurguer } from "../";
import { SearchCharacters } from "../../rickandmorty";

export const Navbar = () => {

  useEffect(() => {
    initTE({ Collapse });
  }, []);
  
  const { darkMode } = useTheme()

  return (
    <>
      <nav
        className="sticky top-0 z-20 flex w-full flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-md hover:text-amber-500 focus:text-amber-500  lg:flex-wrap lg:justify-start lg:py-4 dark:bg-zinc-600"
        data-te-navbar-ref>

        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="ml-2">
            <Link>
              {
                darkMode ? <Logo fill='#dce5e5' /> : <Logo fill='#333' />
              }
            </Link>
          </div>

          <ButtonBurguer />

          <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent3"
            data-te-collapse-item>
            <div
              className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
              data-te-navbar-nav-ref>
              <ItemNavbar to={'/characters'} item={'Characters'} />
              <ItemNavbar to={'/human'} item={'Human'} />
              <ItemNavbar to={'/alien'} item={'Alien'} />
            </div>

            <div className="relative flex items-center justify-between lg:mr-5 gap-2 md:gap-5">
              <SearchCharacters />
              <ButtonTheme />
            </div>
          </div>

        </div>
      </nav>
    </>
  )
}
