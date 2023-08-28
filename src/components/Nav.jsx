import React, { useEffect, useState } from "react";
import Logo from '../assets/icons/logoPurple.svg'

import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
 
const NavList = () => {

  return (
    <ul className="mt-6 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="lg:px-4 py-2 font-normal font-jost text-base text-black border-b-[1px] lg:border-none"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Servicio
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="lg:px-4 py-2 font-normal font-jost text-base text-black border-b-[1px] lg:border-none"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Precio
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="lg:pl-4 pt-2 pb-1 lg:pb-2 font-normal font-jost text-base text-black"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Contacto
        </a>
      </Typography>
    </ul>
  );
}
 
const Nav = () => {

  const [openNav, setOpenNav] = useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
  <div className="fixed top-0 w-full shadow-sm bg-white">
    <Navbar className="mx-auto max-w-[1200px] shadow-none px-4 py-3 lg:px-0 bg-transparent border-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer"
        >
          <img className="w-10" src={Logo} alt="" />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6 text-black" strokeWidth={1.5} />
          ) : (
            <Bars3Icon className="h-6 w-6 text-black" strokeWidth={1.5} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  </div>
  );
}

export default Nav;