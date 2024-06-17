import Image from "next/image"
import mount from "../../../public/picture/mount-pic.png"
import timer from "../../../public/picture/timer 1.png"
import bags from "../../../public/picture/bags.png"

const Adventuresec = () => {
  return (
    <div className="mt-14 py-12">
    <div className="text-center mb-8">
      <h2 className="text-5xl font-bold text-[#3190a8]">IT S TIME TO START YOUR ADVENTURES</h2>
      <p className="text-slate-600">LOREM IPSUM DOLOR SIT AMET ADIPISCING ELIT. VENIAM FACILIS.</p>
    </div>
    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
      <div className="text-center">
        <Image src={mount} alt="Mountain Icon" className="mx-auto mb-4"/>
        <h3 className="text-lg font-bold text-orange-500">IN EVERY CONDITIONS</h3>
        <p className="text-slate-600 mt-5 px-16">Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolorem harum aspernatur sapiente error voluptas fuga laudantium ullam magni fugit. Qui!</p>
      </div>
      <div className="text-center">
        <Image src={timer}  alt="Compass Icon" className="mx-auto mb-4"/>
        <h3 className="text-lg font-bold text-orange-500">PROFESSIONAL TEAM</h3>
        <p className="text-slate-600 mt-5 px-16">Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolorem harum aspernatur sapiente error voluptas fuga laudantium ullam magni fugit. Qui!</p>
      </div>
      <div className="text-center">
        <Image src={bags} alt="Backpack Icon" className="mx-auto mb-4"/>
        <h3 className="text-lg font-bold text-orange-500">EXPERT HIKERS</h3>
        <p className="text-slate-600 mt-5 px-16">Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolorem harum aspernatur sapiente error voluptas fuga laudantium ullam magni fugit. Qui!</p>
      </div>
    </div>
  </div>
)
 
}

export default Adventuresec