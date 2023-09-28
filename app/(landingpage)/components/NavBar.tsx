import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [cartHover, setCartHover] = useState<boolean>(false);
  const [userHover, setUserHover] = useState<boolean>(false);

  useEffect(() => {
    const jwt = localStorage.getItem('tvsm_jwt');
    if (jwt) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 50;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="pt-2 fixed bg-black z-50 flex top-0 w-full h-[109px] justify-between items-center max-w-[1500px]">
      <Link href="/" className="">
        <Image src="/images_lp/Logo.png" alt="Logo" className="pl-2" width={300} height={150} />
      </Link>
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon
            icon={!isOpen ? faBars : faTimes}
            className="text-white text-3xl w-8 h-8 absolute top-12 right-8 z-[201]"
          />
        </button>
      </div>
      <div
        className={`w-full h-1/2 md:relative lg:relative${
          isOpen
            ? ' xs:absolute xs:left-0 xs:mt-[calc(200px+2rem)] xs:text-center xs:w-full xs:h-max z-[200] bg-black  duration-300 ease-linear fixed top-[0%]'
            : 'lg:absolute lg:text-center max-h-0 fixed lg:top-[-40%] sm:top-[-800%] top-[-100%]'
        }`}
      >
        <ul
          className={`font-medium inline-flex items-center gap-[32px] lg:absolute lg:right-0 lg:mr-10 text-base flex-col lg:flex-row pr-2 ${
            isOpen && `bg-black w-full`
          } `}
        >
          <Link href="/about">
            <li
              key="about-us-page"
              className="cursor-pointer p-4 rounded-md text-white hover:bg-[#CE8C3D] transition duration-300"
            >
              About Us
            </li>
          </Link>
          <Link href="meetCharacter">
            <li
              key="characters-page"
              className="cursor-pointer p-4 rounded-md text-white hover:bg-[#CE8C3D] after:bg-[#1b1a18] transition duration-300"
            >
              Characters
            </li>
          </Link>
          <Link href="online-shop">
            <li
              key="kickstarter-page"
              className="cursor-pointer p-4 rounded-md text-white hover:bg-[#CE8C3D] transition duration-300"
            >
              Online Store
            </li>
          </Link>
          <li
            key="news-and-events-page"
            className="cursor-pointer p-4 rounded-md text-white hover:bg-[#CE8C3D] transition duration-300"
            onClick={() => {
              scrollToSection('#');
            }}
          >
            News and Events
          </li>
          <Link href={isLoggedIn ? '/orders' : '/signin'}>
            <li
              className="cursor-pointer p-4 rounded-md text-white hover:bg-[#CE8C3D] transition duration-300"
              onMouseOver={() => setUserHover(true)}
              onMouseLeave={() => setUserHover(false)}
            >
              <FontAwesomeIcon
                icon={faUser}
                style={userHover ? { color: '#CE8C3D' } : { color: '#ffffff' }}
                className="xs:hidden lg:inline-block"
              />
              <span className="xs:inline-block lg:hidden ml-1">{isLoggedIn ? 'My Order' : 'Sign In'}</span>
            </li>
          </Link>

          {isLoggedIn && (
            <Link href="/cart">
              <li
                className="cursor-pointer p-4 rounded-md text-white hover:bg-[#CE8C3D] transition duration-300"
                onMouseOver={() => setCartHover(true)}
                onMouseLeave={() => setCartHover(false)}
              >
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={cartHover ? { color: '#CE8C3D' } : { color: '#ffffff' }}
                  className="xs:hidden lg:inline-block"
                />
                <span className="xs:inline-block lg:hidden ml-1">Cart</span>
              </li>
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
}
