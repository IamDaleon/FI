import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <header className="text-white body-font">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <Link className="flex title-font font-medium items-center text-white-900 mb-4 md:mb-0" href={'/'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">FastIncense</span>
            </Link>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <Link className="mr-5 hover:text-gray-900" href='/kratom'>Kratom</Link>
                <a className="mr-5 hover:text-gray-900">|</a>
                <a className="mr-5 hover:text-gray-900">Kratom Alternative</a>
                <a className="mr-5 hover:text-gray-900">|</a>
                <a className="mr-5 hover:text-gray-900">Incense & Smudge</a>
                <a className="mr-5 hover:text-gray-900">|</a>
                <a className="mr-5 hover:text-gray-900">Speciality Herbs</a>
            </nav>
            <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded text-base mt-4 md:mt-0">Shop Now
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
    </header>
    </>
  )
}

export default Navbar