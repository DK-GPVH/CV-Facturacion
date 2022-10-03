import React from 'react'

import { Button } from "@material-tailwind/react";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
import { IoNotificationsCircle } from "react-icons/io5";
import NavbarUsuario from './NavbarUsuario';




export default function Navbar({ OpenSidebar, setOpenSidebar }) {
  
  return (

    

          <header className="sticky top-0 bg-[#151423]	 border-b border-slate-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between h-16 -mb-px">
        <div className='md:hiden'>
            <Button className='m-0 bg-transparent border-none border shadow-none' onClick={() => setOpenSidebar('left-0')}>
              <GiHamburgerMenu className='text-white h-6 w-6'/>
            </Button>

            <div  className={`absolute -top-2 p-0 md:hidden ${ OpenSidebar === 'left-0' ? 'left-64' : '-left-64' } z-30 transition-all duration-500`}>
            <Button className='bg-transparent border-none border shadow-none' size="lg" onClick={() => setOpenSidebar('-left-64')}>
                <IoIosCloseCircle className="text-gray-100 h-8 w-8"/>
            </Button>

            </div>

          </div>
        
        
          {/* Header */}
          <div className="flex items-center">

            <button  className={`w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-red-700 transition duration-150 rounded-full ml-3`}>
              <IoNotificationsCircle className='h-8 w-8 '/>
            </button>
           
     
            {/*  Divider */}
            <hr className="w-px h-6 bg-gray-200 mx-3" />
            <NavbarUsuario />

          </div>

        </div>
      </div>
    </header>
    
  
  )
}

