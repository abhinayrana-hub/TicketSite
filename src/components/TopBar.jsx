/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import GmIcon from '../data/gm_icon.svg';
import { CgMenuGridR } from 'react-icons/cg';
import { MdAddCircle } from 'react-icons/md';
import { SiGeneralmotors } from 'react-icons/si';
import { IoIosArrowDown } from 'react-icons/io';
import Popup from './Popup';
import { useStateContext } from '../contexts/ContextProvider';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <Tippy content={title} position="BottomCenter">
      <button
        type="button"
        onClick={() => customFunc()}
        style={{ color }}
        className="relative text-xl rounded-full px-2 hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
    </Tippy>
  );

const TopBar = () => {

    const{ setOpenPopup } = useStateContext();

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     console.log('The link was clicked.');
    //     setOpenPopup(true);
    //   };
      
  return (
    <div className='flex justify-between p-1 relative bg-gradient-to-r from-blue-900
    to-blue-800 w-full items-center pr-5'>
        <div class="flex justify-start lg:w-0 lg:flex-1">
        <div className="grid grid-rows-1 grid-flow-col gap-4 ">

                  <NavButton title="Menu" color="white" icon={<CgMenuGridR className='h-7 w-7'  />} />

                  <a href="#" className='flex flex-row justify-center items-center pl-2'>
                      <span className="sr-only">Your Company</span>
                      <SiGeneralmotors className='h-9 w-9 items-center' />
                      <h1 className='text-2xl text-white p-1 font-sans font-medium text-center'>Platform Operations Ticket Manager</h1>
                  </a>

                  <div className='container mx-auto px-2  rounded-lg flex flex-row items-center  justify-center hover:shadow-lg '>
                  <a href="#" className="text-sm text-white w-fit  align-middle font-sans font-medium text-center hover:text-gray-600">Dashboards  </a>
                  <IoIosArrowDown className='fill-white' />
         
                  </div>

                  <div className='container mx-auto px-2  rounded-lg flex flex-row items-center  justify-center hover:shadow-lg '>
                  <a href="#" className="text-sm text-white w-fit  align-middle font-sans font-medium text-center hover:text-gray-600">Projects  </a>
                  <IoIosArrowDown className='fill-white' />
         
                  </div>

                  <div className='container mx-auto px-2  rounded-lg flex flex-row items-center  justify-center hover:shadow-lg '>
                  <a href="#" className="text-sm text-white w-fit  align-middle font-sans font-medium text-center hover:text-gray-600">Issues  </a>
                  <IoIosArrowDown className='fill-white' />
         
                  </div>

                  <div className='container mx-auto px-1 rounded-lg flex flex-row items-center justify-center hover:shadow-lg '>
                  <a href="#" className="text-sm text-white w-fit p-2 align-middle font-sans font-medium text-center hover:text-gray-600">Tests</a>
        
                  </div>

                  

                  <div className='container mx-auto px-2  rounded-lg flex flex-row items-center  justify-center hover:shadow-lg '>
                  <Link to="/createticket" className="text-sm text-white w-fit  align-middle font-sans font-medium text-center hover:text-gray-600">
                  <button onClick={() => setOpenPopup(true)} type="button">
                          Create
                      </button>
                      {/* <MdAddCircle className='fill-white' /> */}
                  </Link>
        
                  
         
                  </div>
                  
            </div>
        
      </div>
    </div>
  )
}

export default TopBar