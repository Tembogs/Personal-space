import { FaInstagram, FaInstagramSquare, FaTwitter } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa6"
import { Link } from "react-router"
export default
function Footly() {
  return (
    <>
     <div className="mx-10 bg-gray-200 px-5  pt-6 pb-6 rounded-md shadow">
        <div className="flex sm:flex-row sm:justify-between sm:mx-10 flex-col sm:space-x-3 space-y-4 border-b-1 pb-10">
          
          <div>
            <div className="mx-20 sm:mx-0">
                <div className="size-5 bg-orange-400 rounded-full mx-4"></div>
                <div className="flex-row flex -my-0.5">
                  <div className="size-5 bg-orange-300 rounded-full -my-2.5"></div>
                  <div className="size-5 bg-orange-200 rounded-full -my-1 -mx-1 "></div>
                </div>
            </div>
            <p className="mt-4 mx-15 sm:mx-0 "><strong className="text-xl">ADEYEYE</strong></p>
            <p className="mt-3 text-stone-800 text-[1rem]">We are taking your food to the next level  <br /> of getting it easier on international scale.</p>
          </div>
          <div className="flex sm:flex-row  flex-col gap-10 mx-auto sm:mx-0">
            <div className="">
              <h1 className="font-bold">Company</h1>
              <ul className="text-[1rem] space-y-3 mt-3">
                <li><Link to={'/'}>Blog</Link></li>
                <li><Link to={'/careers'}>Careers</Link></li>
                <li><Link to={'/pricing'}>Pricing</Link></li>
              </ul>
              
            </div>
            <div>
              <h1 className="font-bold">Resources</h1>
              <ul className="text-[1rem] space-y-3 mt-3 ">
                <li><Link to={'/'}>Documentation</Link></li>
                <li><Link to={'/careers'}>Papers</Link></li>
                <li><Link to={'/pricing'}>Press Conferences</Link></li>
              </ul>
            </div>

            <div>
              <h1 className="font-bold">Legal</h1>
              <ul className="text-[1rem] space-y-3 mt-3">
                <li><Link to={'/'}>Terms of Service</Link></li>
                <li><Link to={'/careers'}>Privacy Policy</Link></li>
                <li><Link to={'/pricing'}>Cookies Policy</Link></li>
                <li><Link to={'/ok'}>Data Processing</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex sm:flex-row sm:justify-between sm:mx-10 flex-col sm:space-x-3 space-y-4 mt-6">
            <p className="text-[1rem]">{'\u00A9'} {new Date().getFullYear()} Temitope Inc. All rights reserved.</p>

            <div className="flex gap-6">
              <Link to={'/nns'}><FaFacebook className="size-5 hover:text-orange-400"/></Link>
              <Link to={'/nns'}><FaInstagramSquare className="size-5 hover:text-orange-400"/></Link>
              <Link to={'/nns'}><FaTwitter className="size-5 hover:text-orange-400"/></Link>
            </div>
        </div>
     </div>
    </>
  )
}