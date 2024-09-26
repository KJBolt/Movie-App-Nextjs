import React from 'react'
import MenuItems from './MenuItems'
import { BiHomeAlt2 } from "react-icons/bi";
import { GrCircleInformation } from "react-icons/gr";
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
        <div className='flex gap-4'>
            <MenuItems title='Home' address='/' Icon={BiHomeAlt2} />
            <MenuItems title='About' address='/about' Icon={GrCircleInformation} />
        </div>

        <div className='flex items-center gap-4'>
            <DarkModeSwitch />
            <Link href='/' className='flex gap-1 items-center'>
                <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded'>IMDB</span>
                <span className='text-xl hidden sm:inline'>Clone</span>
            </Link>
        </div>
        
    </div>
  )
}

export default Header