

const Footer = () => {
  return (
    <div
      className="footer-image bg-cover bg-center bg-no-repeat relative min-h-96">
      <div className="mt-20 text-white p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">NEVER STOP HIKING. TAKE A HIKE TODAY!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem harum aspernatur
              laudantium ullam magni fugit laudantium. Qui!
            </p>
          </div>
          <div className="">
            <h3 className="text-xl font-semibold mb-4 ">EXPLORE</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                 GO HIKING
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  OUR COACHES
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  BLOG
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                 CONTACT US
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">CONTACT US</h3>
            <p>ANYWHERE ST, ANY CITY, ST 12345</p>
            <p>+123-456-7890</p>
            <p>HELLO@HIKINGCLUB.COM</p>
            <p>WWW.HIKINGCLUB.COM</p>
            <div className="flex space-x-4 mt-4">
              <a href="#">
                <img src="https://placehold.co/24x24" alt="Instagram" />
              </a>
              <a href="#">
                <img src="https://placehold.co/24x24" alt="Facebook" />
              </a>
              <a href="#">
                <img src="https://placehold.co/24x24" alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer