import Image from "next/image"
import line from "../../../public/picture/lines.png"

const Hero = () => {
  return (
    <div>
        <section className=" custom-image relative bg-center bg-no-repeat">
       
            <div className="container mx-auto px-4 py-24 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-5xl sm:text-7xl font-bold text-red-500">Enjoy the <br /> Beauty of <br /> Nature!</h1>
                <p className="mt-4 text-[#2c3e50] dark:text-zinc-300 font-semibold text-xl sm:text-2xl">Lorem ipsum dolor <br /> sit amet, adipisicing <br /> elit. Veniam, facilis.</p>
                <button className="mt-6 bg-red-500 text-white px-20 py-4 rounded-lg font-bold text-2xl">GET STARTED</button>
              </div>
              <div className="md:w-1/2 ml-16  mb-32 md:mt-0">
                <Image src={line} alt="Hiking group" className="" width={500} height={500} />
              </div>
              </div>
   
  
</section>

    </div>
  )
}

export default Hero