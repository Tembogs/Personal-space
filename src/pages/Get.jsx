import { useState } from "react"
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router";

export default
function Getty() {
  const [details, setDetails]= useState({Name:'', YourEmail:'', Password:'' });

 const handleInput = (e) => {
  setDetails({...details, [e.target.Name]: e.target.value })
 }

  return (
    <>
     <div className="mx-10 flex items-center justify-center bg-gradient-to-br from-yellow-50 to-orange-100">
        <div className="max-w-md w-full bg-stone-50 mt-8 mb-4  rounded-lg shadow-lg px-5  pb-7 relative">
          <div className="bg-[url('/public/straw.png')] bg-cover text-slate-100 pt-10 h-[50vh] rounded-t-xl">
          <Link>
            <h1 className="flex gap-2 font-bold -mt-5 mx-4 text-black">
            <span className="mt-0.5"><MdChevronLeft className="text-2xl font-bold"/></span>
            Get-Started
          </h1>
          </Link>
             <h1 className="mx-5 text-3xl font-bold text-black">Create a free <br /> account</h1>
          </div>
          
          <form action="" className="">
            <div className="relative">
              <input 
                value={details.Name}
                className="border-gray-300 outline-0 shadow w-full peer rounded-lg py-2 px-2"
                placeholder=""
                name="Name"
                onChange={handleInput}
                type="text" 
              />

              <label htmlFor="Name"
                className="text-sm absolute left-3 transform -translate-y-1/2 px-1 bg-stone-50 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-sm"
                >
                  Your Name
              </label>
            </div>



           <div className="relative mt-8">
             
              <input 
                value={details.YourEmail}
                className="border-gray-300 shadow outline-0 w-full rounded-lg py-2 px-2 peer"
                placeholder=""
                onChange={handleInput}
                type="email" 
              />
              <label 
                className="text-sm absolute left-3 transform -translate-y-1/2 px-1 bg-stone-50 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-sm"
                htmlFor="Name">
                  Email
              </label>
           </div>


           <div className="relative mt-8">
              <input 
                value={details.Password}
                className="border-gray-300 shadow outline-0 w-full peer rounded-lg py-2 px-2"
                placeholder=""
                name="password"
                onChange={handleInput}
                type="password" 
              />

              <label htmlFor="Password"
                className="text-sm absolute left-3 transform -translate-y-1/2 px-1 bg-stone-50 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-sm"
                >
                  Password
              </label>
              </div>

           <div className="relative mt-8">
              <input 
                value={details.Password}
                className="border-gray-300 shadow outline-0 w-full peer rounded-lg py-2 px-2"
                placeholder=""
                name="Name"
                onChange={handleInput}
                type="password" 
              />

              <label htmlFor="password"
                className="text-sm absolute left-3 transform -translate-y-1/2 px-1 bg-stone-50 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-sm"
                >
                  Repeat Password
              </label>
            </div>

            <div className="flex items-center mt-3">
            <input
              id="terms"
              type="checkbox"
              className="mr-2 accent-green-600"
              // onClick={handleCheckedBox}
              required
            />
            <label htmlFor="terms" className="text-xs text-gray-600">
              I agree to the <a href="#" className="underline text-blue-600">Terms of Service</a> and <a href="#" className="underline text-blue-600">Privacy Policy</a>
            </label>
          </div>
         <div className="mt-5 w-full text-white py-2 rounded-3xl bg-green-600 flex items-center ">
           <button
            className=' mx-auto'
            type="submit"
            // onClick={handleSignUp}
            // disabled={!clicked}
          >
            Get started
          </button>
        <span className="rounded-full bg-white mx-1 p-1.5"> <MdChevronRight className="  text-red-500 size-6 "/></span>
         </div>
          </form>

        </div>
      
     </div>
    </>
  )
}