import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="w-full h-full border-t">
        <div className="w-full h-full md:flex justify-around my-10 px-4 text-white">
          <div className="h-full md:flex-grow-2 block">
            <h2 className="text-base md:text-2xl font-semibold">SUBSCRIBE</h2>
            <div className="md:w-2/3 mb-2">
              <p className="text-[#a5a4a4] text-sm md:text-base mt-3 md:mt-0 font-bold">
                Sign up for our email list to be the first to know about new products and exclusive sales.
              </p>
            </div>
            <div className="w-full h-full flex md:block flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="md:w-[430px] text-black border-2 rounded border-[#ffffff] p-1"
              />
              <button className="px-4 py-1 ml-1 rounded text-base outline-2 outline font-LDR">SUBSCRIBE</button>
            </div>
            <div className="social flex mt-3 ml-1 gap-3 md:mt-7">
              <Link href="https://www.facebook.com/" target="_blank">
                <Image src="/images_lp/instagram.png" alt="facebook" width={24} height={24} />
              </Link>
              <Link href="https://www.twitter.com/" target="_blank">
                <Image src="/images_lp/twitter.png" alt="twitter" width={24} height={24} />
              </Link>
              <Link href="https://www.instagram.com/" target="_blank">
                <Image src="/images_lp/facebook.png" alt="instagram" width={24} height={24} />
              </Link>
            </div>
          </div>
          <div className="w-auto h-full flex flex-grow md:justify-around">
            <div>
              <ul className="font-bold text-[#a5a4a4] mt-3 flex flex-col gap-4">
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
                <li>
                  <Link href="#">Order Lookup</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex-grow font-bold text-[#a5a4a4] ml-3 md:ml-0 mt-3 flex flex-col gap-4">
                <li>
                  <Link href="/faq">FAQs</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Terms of Use</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex-grow hidden md:block font-bold text-[#a5a4a4] mt-3 flex-col gap-4">
                <li>
                  <Link href="#">Teddies VS Monsters</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <h1 className="text-white font-LDR text-lg/relaxed text-center py-14">
            <span className="text-[#b7b7b7]">©</span> WE MAKE GAMES
          </h1>
        </div>
      </footer>
    </>
  );
}
