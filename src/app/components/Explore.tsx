import Image from "next/image"
import sec from "../../../public/picture/core-section.png"

const Explore = () => {
  return (
            <div id="explore">
        <div className="mt-40">
            <div className="text-center mb-8">
            <h2 className="text-5xl font-bold text-red-500 ">EXPLORE THE BEST TRIPS</h2>
            <p className="mt-4 text-slate-600 text-xl dark:text-zinc-300">Lorem ipsum dolor sit amet, adipisicing elit. Veniam, facilis.</p>
            </div>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2">
              <Image src={sec} alt="Travelers" className=" "
              width={1000} height={1000}/>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
              
                            <div className="mt-8 space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-red-600 dark:text-red-400">HIKING EXPEDITION</h3>
                  <p className="mt-2 text-slate-600 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem harum aspernatur sapiente error, voluptas fuga, laudantium ullam magni fugit. Qui!</p>
                  <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded-full hover:scale-105 duration-300 ">Read More</button>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-red-600 dark:text-red-400">TREKKING EXPEDITION</h3>
                  <p className="mt-2 text-slate-600 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem harum aspernatur sapiente error, voluptas fuga, laudantium ullam magni fugit. Qui!</p>
                  <button className="mt-4 bg-red-500 text-white  py-2 px-4 rounded-full hover:scale-105 duration-300">Read More</button>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-red-600 dark:text-red-400">CANYOUNING EXPEDITION</h3>
                  <p className="mt-2 text-slate-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem harum aspernatur sapiente error, voluptas fuga, laudantium ullam magni fugit. Qui!</p>
                  <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded-full hover:scale-105 duration-300">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div> 
    
  
  )
}


export default Explore