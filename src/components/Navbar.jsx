import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white '>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

                <div className="logo font-bold text-white text-2xl md-mynavbar">

                    <span className='text-green-500'> &lt;</span>
                   
                    <span>Pass</span><span className='text-green-500'>OP/&gt;</span>
                    
                </div>

                <div className='flex items-center justify-between gap-2'>
                
                    <a className='text-white bg-green-700 my-5 mx-2 rounded-full flex  justify-between items-center ring-white ring-1' href="https://github.com/Chaotic-karia196">
                        <img className='invert  w-10 p-1' src="/icons/github.svg" alt="github logo" />
                        <span className='font-bold px-2 hidden md:inline'>GitHub</span>
                    </a>

                    <a className='text-white bg-green-700 my-5 mx-2 rounded-full flex  justify-between items-center ring-white ring-1' href="https://www.linkedin.com/in/ronak-karia">
                        <img className='filter grayscale contrast-200 w-10 p-1 rounded-full' src="/icons/linkedin.svg" alt="linkedin logo" />
                        <span className='font-bold px-2 hidden md:inline'>LinkedIn</span>
                    </a>

                </div>

            </div>
        </nav>
    )
}

export default Navbar
