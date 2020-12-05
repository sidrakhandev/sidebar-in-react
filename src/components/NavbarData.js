import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as IoIcons from "react-icons/io"
import * as RiIcons from "react-icons/ri"
import * as ImIcons from "react-icons/im"


export const NavbarData=[
    {
        title:'Send Request',
        path:'/sendRequest',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        cName:'nav-text'
    },
     {
        title:'Search Donor',
        path:'/searchDonor',
        icon: <RiIcons.RiUserSearchLine/>,
        cName:'nav-text'
    },
     {
        title:'View Request',
        path:'/viewRequest',
        icon: <IoIcons.IoIosPaper/>,
        cName:'nav-text'
    },
     {
        title:'Profile',
        path:'/Profile',
        icon: <ImIcons.ImProfile/>,
        cName:'nav-text'
    }

]