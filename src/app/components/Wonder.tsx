import Image from "next/image"
import team from "../../../public/picture/our-service.png"
import style from "../../../public/picture/our-service2.png"
import style2 from "../../../public/picture/our-service3.png"

const Wonder = () => {
  return (
    <div>
         <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-red-500">OUR WONDERFUL TEAM</h2>
            <p className="text-zinc-600 dark:text-zinc-300">Lorem ipsum dolor sit amet, adipisicing elit. Veniam, facilis.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center">
              <div className="relative inline-block">
                <Image className="rounded-full w-60 h-60 object-cover"
                src={team}
                 alt="Jessica Owen"/>
                <div className="absolute inset-0 bg-white dark:bg-zinc-700 rounded-full mix-blend-multiply"></div>
              </div>
              <h3 className="mt-4 text-xl font-semibold">JESSICA <span className="text-red-500">OWEN</span></h3>
              <p className="text-zinc-600 dark:text-zinc-300 mt-2 px-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ullam fugit. Qui!</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center">
              <div className="relative inline-block">
                <Image className="rounded-full w-60 h-60 object-cover" 
                src={style}
                 alt="Robert Doe"/>
                <div className="absolute inset-0 bg-white dark:bg-zinc-700 rounded-full mix-blend-multiply"></div>
              </div>
              <h3 className="mt-4 text-xl font-semibold">ROBERT <span className="text-red-500">DOE</span></h3>
              <p className="text-zinc-600 dark:text-zinc-300 mt-2 px-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ullam fugit. Qui!</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center">
              <div className="relative inline-block">
                <Image className="rounded-full w-60 h-60 object-cover" src={style2} 
                alt="John Brown"/>
                <div className="absolute inset-0 bg-white dark:bg-zinc-700 rounded-full mix-blend-multiply"></div>
              </div>
              <h3 className="mt-4 text-xl font-semibold">JOHN <span className="text-red-500">BROWN</span></h3>
              <p className="text-zinc-600 dark:text-zinc-300 mt-2 px-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ullam fugit. Qui!</p>
            </div>
          </div>
    </div>
  )
}

export default Wonder