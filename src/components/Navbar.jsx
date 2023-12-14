"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiFillLinkedin, AiFillYoutube, AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsChevronDown, BsFillPersonLinesFill } from 'react-icons/bs';
import NavLogo from '/public/assets/images/logo.png'
import { MenuList } from '@/json_data/MenuList';
import { RiArrowDropDownFill } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [linkColor, setLinkColor] = useState('#1f2937');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 1) {
        setShadow(true);
        setSubMenuOpen(false);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div className={` bg-navbarbanner ${shadow ? 'fixed w-full h-16 shadow-xl z-[100] ease-in-out duration-300' : 'fixed w-full h-16 z-[100]'}`}
    >
      <div className='flex justify-between items-center flex-wrap max-w-screen-xl mx-auto w-full h-full px-2 2xl:px-16 '>
        <Link href='/'>
          <Image
            src={NavLogo}
            alt='/'
            width='1000'
            height='1000'
            className='cursor-pointer w-44'
          />
        </Link>
        <div>

          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>

            {
              MenuList?.map((menu, i) => (
                <div key={menu.name} className='md:mb-1'>
                  
                  <li className='w-1/3 border border-[#75EAE2] border-b-2 border-l-0 border-r-0 border-t-0 flex mx-5 text-[15px]'>
                    <Link href={menu?.link} onClick={() => setSubMenuOpen(subMenuOpen !== menu.name ? menu.name : "")} className='capitalize'>{menu?.name}</Link>

                    {/* {menu.submenu && (
                      <span onClick={() => setSubMenuOpen(subMenuOpen !== menu.name ? menu.name : "")}
                        className={`${subMenuOpen && subMenuOpen === menu.name && menu.submenu ? 'rotate-180' : ''} duration-200 text-xl md:mt-1 md:ml-0 md:block hidden group-hover:rotate-180 group-hover:-mt-2`}>
                        <RiArrowDropDownFill></RiArrowDropDownFill>
                      </span>
                    )} */}

                  </li>

                  {subMenuOpen && subMenuOpen === menu.name && menu.submenu && (
                    <div className='absolute z-50 bg-white divide-y md:mt-2 divide-gray-100 rounded-lg shadow w-auto dark:bg-gray-700'>
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        {menu.submenu.map((subMenuItem, idx) => (
                          <li key={subMenuItem.name} onClick={() => setSubMenuOpen(subMenuOpen == menu.name ? !subMenuOpen : subMenuOpen) }>
                            <Link href={subMenuItem.link}
                              className={` ${menu?.margin && "my-2"} block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
                            >
                              {subMenuItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>

              ))
            }

          </ul>

          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>

        <div className="hidden md:flex justify-between items-center">
          <Link href="/pages/get-in-touch" className="ml-6 hover:scale-105 ease-in duration-100 text-white items-start bg-[#3f9c59] focus:ring-4 font-medium mb-2 capitalize dark:focus:ring-[#152C4E] px-6 py-2 text-[14px]">Get in touch</Link>
        </div>

      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <Image
                  src={NavLogo}
                  width='87'
                  height='35'
                  alt='/'
                />
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>

          </div>
          <div className='py-4 flex flex-col'>
            <ul className='capitalize'>
              {
                MenuList?.map((list, i) => (
                  <div key={list.name} className=''>
                    <li className='py-4 text-md flex justify-between'>
                      <Link href={list?.link}>
                        {list?.name}
                      </Link>

                      {/* {list.submenu && (
                        <span onClick={() => setSubMenuOpen(!subMenuOpen !== list.name ? list.name : "")}
                          className={`${subMenuOpen && 'rotate-180'} duration-200 text-xl md:block group-hover:rotate-180`}>
                          <RiArrowDropDownFill name="chevron-down"></RiArrowDropDownFill>
                        </span>
                      )} */}
                    </li>

                    {subMenuOpen && subMenuOpen === list.name && list.submenu && (
                      <div className='absolute z-50 bg-white divide-y md:mt-2 divide-gray-100 rounded-lg shadow w-auto dark:bg-gray-700'>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                          {list.submenu.map((subMenuItem, idx) => (
                            <li key={subMenuItem.name}>
                              <Link href={subMenuItem.link}
                                className={` ${list?.margin && "my-2"} block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
                              >
                                {subMenuItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  </div>
                ))
              }
            </ul>

            <div className='border-t border-gray-800 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                #60, 31st Main, Lake Shore Road,<br /> BTM 2nd Stage, Bangalore - 560076 <br /> create@slyds.com
              </p>

              <div className='flex gap-4'>
                <AiFillLinkedin className='text-2xl -mt-1' />
                <AiFillYoutube className='text-2xl -mt-1' />
              </div>

            </div>

            <div className='pt-40'>
              <p className='capitalize tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>

                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedinIn />
                </div>

                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub />
                </div>

                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
