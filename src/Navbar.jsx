import { useState } from "react"
function Navbar() {
    const [open,setOpen] = useState(false)
  return (
    <nav className='flex justify-between items-center p-5 pr-10 bg-[#0F172A] text-white fixed top-0 left-0 w-full z-50'>
        <h1 className="font-black text-xl text-[#38BDF8]">Sameer</h1>
        <nav className="hidden md:block">
        <ul className='flex gap-6 text-xl'>
            <a href="#Home"><li className="hover:border-b-2 hover:border-[#38BDF8]">Home</li></a>
            <a href="#About"><li  className="hover:border-b-2 hover:border-[#38BDF8]">About</li></a>
            <a href="#Project"><li  className="hover:border-b-2 hover:border-[#38BDF8]">Projects</li></a>
            <a href="#Contact"><li  className="hover:border-b-2 hover:border-[#38BDF8]">Contact</li></a>
        </ul>
        </nav>
        <nav className="block md:hidden fixed top-0 ">
        {open && (<ul className='flex flex-col gap-6 text-xl fixed top-15 text-white bg-[#0F172A] left-0 w-full h-50 pl-6 text-center'>
            <nav className="w-full h-full">
            <a href="#Home"><li className="hover:border-b-2 hover:border-[#38BDF8] py-2 border-b-2">Home</li></a>
            <a href="#About"><li  className="hover:border-b-2 hover:border-[#38BDF8] py-2 border-b-2">About</li></a>
            <a href="#Project"><li  className="hover:border-b-2 hover:border-[#38BDF8] py-2 border-b-2">Projects</li></a>
            <a href="#Contact"><li  className="hover:border-b-2 hover:border-[#38BDF8] py-2 border-b-2">Contact</li></a>
            </nav>
        </ul>
        )}
        </nav>
        <button onClick={()=>setOpen(!open)} className="block md:hidden"><i className="bi bi-list"></i></button>
        </nav>
  )
}

export default Navbar