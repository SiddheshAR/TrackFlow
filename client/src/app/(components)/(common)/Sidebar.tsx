"use client"
import { LockIcon, LockOpenIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

function Sidebar() {
  const [showProjects,setShowProjects] = useState(true);
  const [showPriority,setShowPriority]=useState(true);

  const sidebarClassNames = 'fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white w-64'
  return (
    <div className='w-64 absolute z-40 left-0 top-0 border border-amber-500 min-h-screen'>
      {/* Logo */}
        <div className='z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black '>
          <div className='text-xl font-bold text-gray-800 dark:text-white'>
            Taskify
          </div>
        </div>
        <div className='flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700 '>
            {/* <Image src="/logo" */}
            <Image src="/logo.png" alt="Logo" width={40} height={40}/>
            <div>
              <h3 className='text-md font-bold tracking-wide dark:text-gray-200'>
                EDROH TEAM
              </h3>
              <div className='mt-1 flex items-start gap-2'>
                 <LockOpenIcon className='mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400'/>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default Sidebar