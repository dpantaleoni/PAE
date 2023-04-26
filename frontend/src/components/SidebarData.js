import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Add Block',
        path: '/addblock',
        icon: <MdIcons.MdDomainAdd />,
        cName: 'nav-text'
    },
    {
        title: 'Pressure Bomb',
        path: '/pressurebomb',
        icon: <IoIcons.IoMdWater />,
        cName: 'nav-text'
    },
    {
        title: 'Add Sample',
        path: '/addsample',
        icon: <IoIcons.IoIosLeaf />,
        cName: 'nav-text'
    },
    {
        title: 'Spray',
        path: '/spray',
        icon: <GiIcons.GiChemicalBolt />,
        cName: 'nav-text'
    },
    {
        title: 'Add Data',
        path: '/adddata',
        icon: <MdIcons.MdOutlinePostAdd />,
        cName: 'nav-text'
    },
    {
        title: 'Sign Out',
        path: '/signout',
        icon: <FaIcons.FaSignOutAlt />,
        cName: 'nav-text'
    },
]