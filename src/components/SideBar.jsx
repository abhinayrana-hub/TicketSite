/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FcSmartphoneTablet } from "react-icons/fc";
import { Link, NavLink } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
// import { links } from '../data/ConstSidebar';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { HiUserGroup } from 'react-icons/hi';
import { HiOutlineDocumentReport } from 'react-icons/hi';


const links = [
    {
        title: 'Pages',
        links:[
            {
                name:'Queues',
                icon: <HiOutlineDocumentText />,
            },
            {
                name:'Customers',
                icon: <HiUserGroup />,
            },
            {
                name:'Report',
                icon: <HiOutlineDocumentReport />,
            },
            

            
        ]
    }
];

const SideBar = () => {

    
    const {   activeMenu, setActiveMenu, screenSize, 
    } = useStateContext();

    const handleCloseSideBar = () => {
        if (activeMenu !== undefined && screenSize <= 900) {
          setActiveMenu(false);
        }
      };

      const activeLink = 'flex items-center font-sans gap-5 font-medium pl-4 pt-3 pb-2.5 rounded-lg  text-gray  text-sm m-2';
      const normalLink = 'flex items-center font-sans gap-5 font-medium pl-4 pt-3 pb-2.5 rounded-lg text-sm text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';


  return (
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
        {activeMenu && (
        <>
        <div className="flex justify-between items-center">
            
            <Link to="/" onClick={handleCloseSideBar} className="flex items-center justify-center text-lg
            h-14 bg-gray-100 text-white font-bold">
                <FcSmartphoneTablet className="h-9 w-9 items-center "/> 
                <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                    CDAO Business OPs</span></Link>
        </div>

        <div className='mt-2'>
            {links.map((item) => (
              <div key={item.title}>
                {/* <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p> */}
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                     {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
            

        
          </>
          )}
    </div>
  )
}

export default SideBar