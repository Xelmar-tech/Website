"use client"

import Image from 'next/image'
import { useState } from "react";



function Navbar(){
    const [navbar, setNavbar] = useState(false);

    return ( 
        <nav className="flex items-center max-w-7xl mx-auto py-6 px-5 bg-black font-mori2">
            <div className="flex justify-between items-center w-full">
              <div>
                  <a href="https://www.xelmar.xyz" className="flex items-center gap-5 cursor-pointer"  >
                    <Image src="/logo.svg" alt="logo" width="40" height="40"/>
                  </a>
              </div>
              <div className='flex items-center gap-8'>
                <div className='md:static absolute bg-black md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5' >
                  <ul className={'flex md:flex-row flex-col absolute md:static md:z-auto z-[-1] md:gap-6 gap-8 md:items-center md:pl-0 pl-9 transition-all duration-500 ease-in'}> 
                    <a href='/'>
                        <li className="text-white hover:text-[#0000EE] cursor-pointer">Home</li>
                    </a>
                      
                      <li className="text-[#707070] hover:text-[#0000EE] cursor-pointer">About</li>
                      <li className="text-[#707070] hover:text-[#0000EE] cursor-pointer">Work</li>
                      <li className="text-[#707070] hover:text-[#0000EE] cursor-pointer">Services</li>
                      <li className="text-[#707070] hover:text-[#0000EE] cursor-pointer">Team</li>
                  </ul>
                </div>
                <div className='flex items-center gap-6'>
                  <button className='font-mori2 text-lg text-white flex items-center gap-2 py-3 px-5 bg-[#18181B] hover:bg-[#464646] rounded-xl border-transparent cursor-pointer'>
                    Contact
                    <Image src="/button-icon.svg" alt="button icon" width="30" height="30"/>
                  </button>
                  <div onClick={()=> setNavbar(!navbar)} 
                    className='text-3xl cursor-pointer md:hidden flex items-center'>
                    <ion-icon name={navbar ? 'close':'menu'}></ion-icon>
                  </div>
                </div>
              </div>
            
            </div>
          </nav>
    );
}

export default Navbar;