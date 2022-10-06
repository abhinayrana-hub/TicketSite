import React from "react";
/* import { UserGroupIcon, ServerIcon, CalendarIcon, ChartSquareBarIcon,PlusCircleIcon, CogIcon
} from '@heroicons/react/solid'; */
import { HiUserGroup } from 'react-icons/hi';
import { RiFolderAddFill } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { FcCalendar } from 'react-icons/fc';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';


export const links = [
    {
        title: 'Pages',
        links:[
            {
                name:'Manage',
                icon: <HiUserGroup />,
            },
            {
                name:'AddProject',
                icon: <RiFolderAddFill />,
            },
            {
                name:'Board',
                icon: <FaServer />,
            },
            {
                name:'Schedule',
                icon: <FcCalendar />,
            },
            {
                name:'Report',
                icon: <HiOutlineDocumentReport />,
            },
            {
                name:'Settings',
                icon: <FiSettings />,
            },

            
        ]
    }
];