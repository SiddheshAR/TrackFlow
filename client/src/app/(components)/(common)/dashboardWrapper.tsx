import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function DashboardWrapper({children}:{children:React.ReactNode}) {
  return (
    <div className='flex flex-row min-h-screen w-full bg-gray-50 text-gray-900'>
        {/* Sidebar */}
            <Sidebar/>
        
        {/*  */}
        <main className='flex flex-col w-full md:pl-64'>
            <Navbar/>
            <div>
              {children}
            </div>
        </main>
    </div>
  )
}

export default DashboardWrapper