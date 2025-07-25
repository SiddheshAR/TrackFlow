"use client"
import React, { useEffect } from 'react'
import {Menu, Moon, Search, Settings, Sun} from 'lucide-react'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/lib/redux/store'
import { setIsDarkMode, setIsSidebarCollapsed } from '@/lib/redux/features/globalSlice'
function Navbar() {
  const dispatch = useAppDispatch()
    const isSidebarCollapsed=useAppSelector(
      (state)=>state.global.isSideBarCollapsed
    )
    const isDarkMode = useAppSelector((state)=>state.global.isDarkMode);
    useEffect(()=>{
      if(isDarkMode){
        document.documentElement.classList.add("dark")
      }else{
        document.documentElement.classList.remove("dark")
      }
    })
  return (
    <div className='flex justify-between items-center bg-white px-4 py-3 dark:bg-black'>
      <div className='flex items-center gap-8'>
        {!isSidebarCollapsed ? null :(<button 
        onClick={()=>dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}>
          <Menu className='h-8 w-8 dark:text-white'/>
        </button>)}
        <div className='relative flex h-min w-[200px]'>
          <Search className='absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white'/>
          <input
           className='w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white'
           type='text'
           placeholder='Search...'
          />
        </div>
        {/* Icons */}
        <div className='flex items-center'>
          <button 
          onClick={()=>{dispatch(setIsDarkMode(!isDarkMode))}}
          className={
            isDarkMode? `rounded p-2 dark:hover:bg-gray-700`
            :`rounded p-2 hover:bg-gray-100`
          }
          >
            {isDarkMode ? <Sun className='h-6 w-6 cursor-pointer dark:text-white'/>:
            <Moon className='h-6 w-6 cursor-pointer dark:text-white'/>}
          </button>
          <Link
          className={
            isDarkMode? `h-min w-min rounded p-2 dark:hover:bg-gray-700`
            :`h-min w-min rounded p-2 hover:bg-gray-100`
          }          href="/settings">
          <Settings className='h-6 w-6 cursor-pointer dark:text-white'/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar