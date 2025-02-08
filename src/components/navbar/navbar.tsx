import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'

const Navbar = ({ toggle }: { toggle: () => void }) => {
    return (
        <>
            <div className='w-full h-20 bg-emerald-800 sticky top-0'>
                <div className='container mx-auto px-4 h-full'>
                    <div className='flex justify-between items-center h-full'>
                        {/* <Logo /> */}
                        <h1>Logo</h1>
                        <ul className='hidden md:flex gap-x-6 text-white'>
                            <li>
                                <Link href='/about'>
                                    <p>About Us</p>
                                </Link>
                            </li>
                            <li>
                                <Link href='/services'>
                                    <p>Services</p>
                                </Link>
                            </li>
                            <li>
                                <Link href='/contacts'>
                                    <p>Contacts</p>
                                </Link>
                            </li>
                        </ul>
                        {/* <Button /> */}
                        <Button onClick={toggle}>Button Here</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
