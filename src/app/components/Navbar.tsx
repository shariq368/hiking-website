import { headers } from "next/headers"
import Link from "next/link"
import Image from "next/image"
import Logo from "../../../public/picture/hiking-logo.png"




const Navbar = () => {
    
  return (
<div className="navbar bg-transparent z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className=" lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href={'/'} >HOME</Link ></li>
        <li><Link href={"#explore"} >ABOUT</Link ></li>
        <li><Link href={"#form"} >GO HIKING</Link ></li>
        <li><Link href={"#checkout"} >BLOG</Link ></li>
        <li><Link href={"#contact"} >CONTACT US</Link ></li>
        
      </ul>
    </div>
    <Image 
    src={Logo}
    alt="logo"
    width={100}
    height={100}
    className="w-[8rem]"/>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold text-base">
      <li>
        <Link href={'/'}>
        HOME
      </Link>
      </li>
      <li>
        <Link href={"#explore"}>
        ABOUT
      </Link>
      </li>
      <li>
        <Link href={"#form"}>
        GO HIKING
      </Link>
      </li>
      <li>
        <Link href={"#checkout"}>
        BLOG
      </Link>
      </li>
      <li>
        <Link href={"#contact"}>
        CONTACT US
      </Link>
      </li>
      
     
    </ul>
  </div>
  <div className="navbar-end relative">
  <input type="text" className="bg-[#6bd5f0] dark:bg-white text-white dark:text-zinc-200 rounded-full px-2 py-1 focus:outline-none" placeholder="Search"/>
                <button className="absolute right-0 top-0 mt-1 mr-2 text-white dark:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd"></path></svg>
                </button>
  </div>
</div>
  )
}

export default Navbar