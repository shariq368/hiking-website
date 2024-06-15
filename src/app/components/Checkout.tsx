import Image from "next/image"
import check from "../../../public/picture/another-section2.png"
import book from "../../../public/picture/book-image.png"
import Link from "next/link"

const Checkout = () => {
  return (
    <div className="flex flex-col md:flex-row items-center dark:bg-zinc-800 p-6 mt-20 rock-image bg-no-repeat bg-center sm:bg-right relative ">
          <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-xl md:text-4xl font-bold text-orange-500 mb-2">CHECK OUT OUR ULTIMATE <br /> GUIDE TO HIKING!</h2>
            <p className="text-slate-950 dark:text-zinc-300 mb-4">A complete guide to sustainable <br /> and environmentally safe hiking.</p>
            <Image src={book} alt="Ultimate Guide to Hiking" className="mx-auto md:mx-0 mb-4 md:mb-0"/>
            <Link href="#" className="inline-block bg-orange-500 text-white py-2 px-4 rounded-lg mt-4">GET THE GUIDE</Link>
          </div>
          {/* <div className="md:w-1/2">
            <Image src={check} alt="Person sitting on rock" className="w-full rounded-lg shadow-lg"/>
          </div> */}
        </div>
  )
}

export default Checkout