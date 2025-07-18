import { NavLink } from "react-router"
import { IoReturnUpBack } from 'react-icons/io5';
import { FaBars, FaDownload, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

export default
function Navbar () {
 
 const [open, setOpen] = useState(false)
 
 const handleOpenHambuger = () => {
  setOpen((open) => !open)
 }


  return (
    <>
      <nav className="mt-5 mx-10 flex justify-between">
        <div>
          <p className="mt-2 text-lg font-bold"><span className="bg-orange-500 rounded-full p-1 text-white font-bold">Id8</span> Food</p>
        </div>
       

       {/* Stationary Nav */}
       <div className="md:flex hidden ">
         <div className="space-x-6 flex mx-50 mt-2">
            
            <NavLink className={({isActive}) => isActive ?'text-orange-500 font-extrabold ' :'text-black font-bold hover:text-orange-500'}to={'/'}>
              {({isActive})=> <span>Discover {(isActive) && <IoReturnUpBack className="size-4 rotate-180 -mt-2" /> }</span>}
            </NavLink>
            
            
            
            <NavLink className={({isActive}) => isActive ?'text-orange-500 font-extrabold ' :'text-black font-bold hover:text-orange-500'} to={'/about'}>
              {({isActive})=> <span>About-Us {(isActive) && <IoReturnUpBack className="size-4 rotate-180 -mt-2" /> }</span>}
            </NavLink>
            
            
            <NavLink className={({isActive}) => isActive ?'text-orange-500 font-extrabold' :'text-black font-bold hover:text-orange-500'} to={'/menu'}>
              {({isActive})=> <span>Top-Cities {(isActive) && <IoReturnUpBack className="size-4 rotate-180 -mt-2" /> }</span>}
            </NavLink> 
           
            <NavLink className={({isActive}) => isActive ?'text-orange-500 font-extrabold ' :'text-black font-bold hover:text-orange-500'}to={'/services'}>
              {({isActive})=> <span>Services {(isActive) && <IoReturnUpBack className="size-4 rotate-180 -mt-2" /> }</span>}
            </NavLink>
            
            <NavLink className={({isActive}) => isActive ?'text-orange-500 font-extrabold ' :'text-black font-bold hover:text-orange-500'} to={'/started'}>
              {({isActive})=> <span>Get-Started {(isActive) && <IoReturnUpBack className="size-4 rotate-180 -mt-2" /> }</span>}
            </NavLink>
        </div>
        <div>
          <button className=" flex px-3 gap-2 p-2 rounded-2xl bg-orange-500 text-white shadow-lg font-bold shadow-orange-500 hover:scale-115 transition-all transform duration-300">
            Get Started 
            <FaDownload className="rotate-270 mt-1"/>
          </button>
        </div>
       </div>




       {/* mobile Nav */}
       <div className="md:hidden ">
        <button 
        onClick={handleOpenHambuger}
        className="flex items-center text-orange-500 ml-4"
        aria-label="'Toggle Menu">
          {open ?<FaTimes className="size-5"/> : <FaBars className="size-5"/>}
        </button>
        <div className=""
        >
          <div className={`space-y-2 right-0 left-0 fixed z-100 bg-white mt-5  -mx-1 transistion-all duration-300 ease-in-out flex flex-col text-gray-700 font-bold  rounded-md pt-2 pb-2  ${
            open 
            ? 'opacity-100 translate-x-1   duration-2000 '
            :'opacity-0 transform -translate-x-120 duration-2000'
          }`}>
          
            <NavLink 
             onClick={handleOpenHambuger}
            className={({isActive}) => isActive ?'text-orange-500 font-extrabold bg-gray-300  py-1 px-1 rounded-md shadow-md shadow-black' :' font-bold hover:text-orange-500 '} to={'/'}>
              {({isActive})=> <span>Discover {(isActive) && <IoReturnUpBack className="size-4 rotate-180 -mt-2" /> }</span>}
            </NavLink>
         


          
            <NavLink 
             onClick={handleOpenHambuger}
            className={({isActive}) => isActive ?'text-orange-500 font-extrabold bg-gray-300 py-1 px-1 rounded-md shadow-md shadow-black ' :'font-bold hover:text-orange-500 '} to={'/about'}>
              {({isActive})=> <span>About Us {(isActive) && <IoReturnUpBack className="size-4 rotate-180 -mt-2" /> }</span>}
            </NavLink>
          


          
            <NavLink 
             onClick={handleOpenHambuger}
            className={({isActive}) => isActive ?'text-orange-500 font-extrabold bg-gray-300 py-1 px-1 rounded-md shadow-md shadow-black ' :' font-bold hover:text-orange-500 '} to={'/menu'}>
              {({isActive})=> <span>Top Cities {(isActive) && <IoReturnUpBack className="size-4 rotate-180 -mt-2" /> }</span>}
            </NavLink>
          


         
            <NavLink 
             onClick={handleOpenHambuger}
            className={({isActive}) => isActive ?'text-orange-500 font-extrabold bg-gray-300 py-1 px-1 rounded-md shadow-md shadow-black  ' :' font-bold hover:text-orange-500 '} to={'/services'}>
              {({isActive})=> <span>Services {(isActive) && <IoReturnUpBack className="size-4 rotate-180 -mt-2" /> }</span>}
            </NavLink>
          

         
            <NavLink 
             onClick={handleOpenHambuger}
            className={({isActive}) => isActive ?'text-orange-500 font-extrabold bg-gray-300 py-1 px-1 rounded-md shadow-md shadow-black ' :' font-bold hover:text-orange-500 '} to={'/started'}>
              {({isActive})=> <span>Get Started {(isActive) && <IoReturnUpBack className="size-4 rotate-180 -mt-2" /> }</span>}
            </NavLink>
          
        </div>
        </div>
       </div>
      </nav>
    </>
  )
}