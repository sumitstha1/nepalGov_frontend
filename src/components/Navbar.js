import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import style from '@/styles/Navbar.module.css'

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);


    return (
        <header>
            <nav className='flex justify-between px-4 container md:px-0'>
                <div className='w-1/2 md:w-1/6 py-8'>
                    <Image src={"/logo.png"} width={741} height={167} alt='NepalGov Logo' />
                </div>
                <div className='py-4 flex justify-center items-center md:hidden'>
                    <button className='text-yellow-300 text-3xl' onClick={() => setNavbar(!navbar)}>
                        <AiOutlineMenu />
                    </button>
                </div>
                <div className={`fixed flex justify-center items-center flex-col md:flex-row right-0 top-0 h-[100vh] md:h-auto w-64 bg-red-950 md:bg-transparent md:static md:w-auto md:translate-x-0 transition-all ease-linear duration-500 delay-100 ${navbar ? 'translate-x-0' : 'translate-x-96'}`}>
                    <button className='text-yellow-300 text-3xl fixed top-9 right-4 md:hidden' onClick={() => setNavbar(!navbar)}>
                        <AiOutlineClose />
                    </button>
                    <div className='my-4 text-slate-50 md:text-black '>
                        <ul className='md:flex md:text-lg md:font-semibold'>
                            <li onClick={() => setNavbar(false)} className='py-2 md:px-6 hover:text-red-900 transition-colors duration-100 delay-75 ease-in'><Link href={"/"}>Home</Link></li>
                            <li onClick={() => setNavbar(false)} className='py-2 md:px-6 hover:text-red-900 transition-colors duration-100 delay-75 ease-in'><Link href={"/"}>Home</Link></li>
                            <li onClick={() => setNavbar(false)} className='py-2 md:px-6 hover:text-red-900 transition-colors duration-100 delay-75 ease-in'><Link href={"/"}>Home</Link></li>
                            <li onClick={() => setNavbar(false)} className='py-2 md:px-6 hover:text-red-900 transition-colors duration-100 delay-75 ease-in'><Link href={"/"}>Home</Link></li>
                        </ul>
                    </div>
                    <div className='my-4 md:ml-[4rem]'>
                        <Link onClick={() => setNavbar(false)} className={`px-[4rem] py-2 rounded-full hover:text-yellow-500 transition-colors duration-100 delay-75 ease-in ${style.bgGradient} text-slate-50 text-lg font-semibold`} href={"/login"}>Login</Link>
                    </div>
                </div>
            </nav>
            <hr className='border-black md:w-[90%] mr-auto ml-auto' />
        </header>
    )
}

export default Navbar
