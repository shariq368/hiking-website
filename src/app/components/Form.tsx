

const Form = () => {
  return (
    <div id="form">
    <div className="mt-10 dark:bg-zinc-800 p-4 text-center">
    <h1 className="text-red-500 font-bold text-2xl md:text-xl lg:text-4xl">
      SUBSCRIBE TO THE MONTHLY EDITION OF THE HIKING CLUB
    </h1>
    <p className="text-slate-950 dark:text-zinc-300 mt-2 text-sm md:text-lg lg:text-xl">
      LOREM IPSUM DOLOR SIT AMET, ADIPISICING ELIT. VENIAM, FACILIS.
    </p>
    <div className="flex items-center justify-center mt-20 ">
          <div className=" dark:bg-zinc-700 p-10 rounded-lg shadow-lg border-2 border-red-300 max-w-2xl w-full">
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 rounded-full border border-zinc-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-300 dark:focus:ring-red-500"/>
              <input type="email" placeholder="Your Email" className="w-full p-3 rounded-full border border-zinc-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-300 dark:focus:ring-red-500"/>
              <button type="submit" className="w-full p-3 bg-red-400 text-white font-bold rounded-full hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-300 dark:focus:ring-red-500">SUBSCRIBE</button>
            </form>
          </div>
        </div>
  </div>
  </div>
  )
}

export default Form