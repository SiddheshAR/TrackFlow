"use client"
import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import StoreProvider, { useAppSelector } from '@/lib/redux/store'

function DashboardLayout({children}:{children:React.ReactNode}) {
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
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
        {/* Sidebar */}
            <Sidebar/>
        
        {/*  */}
        <main className={`flex flex-col bg-gray-50 dark:bg-dark-bg w-full ${isSidebarCollapsed ? " ":"md:pl-64"}`}>
            <Navbar/>
            <div>
              {children}
            </div>
        </main>
    </div>
  )
}
function DashboardWrapper({children}:{children:React.ReactNode}){
  return(
    <StoreProvider>
        <DashboardLayout>
          {children}
        </DashboardLayout>
    </StoreProvider>
  )
}

export default DashboardWrapper