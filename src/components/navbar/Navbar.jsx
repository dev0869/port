import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from 'framer-motion';
import { styles } from "../../styles";
import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";
import styled from 'styled-components';

const Item = styled(motion.li)`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};

  @media (max-width: 40em) {
    flex-direction:column;
    padding:0.5rem 0;

  }
`;

const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
const Navbar = () => {

  let easeing = [0.6, -0.05, 0.01, 0.99];

  const stagger = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.3,
        staggerDirection: 1
      }
    }
  }

  const header = {
    initial: {
      y: 0,
      opacity: 0,
      transition: { duration: 0.05, ease: easeing, delay: 0, }
    },
    animate: {
      y: 0,
      opacity: 1,

      animation: {
        duration: 0.6,
        ease: easeing,
        delay: 1.5,
      }
    }
  };

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    setIsTouch(isTouchDevice());

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <motion.nav style={{ zIndex: 9999 }} initial='initial' animate='animate'
      className={`${styles.paddingX
        } w-full flex items-center  py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >


      <motion.div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <motion.img variants={header} src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <motion.p variants={header} className='text-white text-[18px] font-bold cursor-pointer flex '>
            Devesh &nbsp;
            <span className='lg:block hidden'> | fRontend Developer</span>
          </motion.p>
        </Link>

        <motion.ul variants={stagger} className='list-none hidden lg:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <motion.li variants={header}
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[14px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <Item
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9, y: 0 }}

              >
                <Link
                  activeClass="active"
                  to={nav.id}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}>
                  <p>{nav.title}</p>
                </Link>
              </Item>

            </motion.li>
          ))}
        </motion.ul>

        <div className='lg:hidden flex flex-1 justify-end items-center'>

          <div className='lg:hidden flex flex-1 justify-end items-center'>
            
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain'
              onClick={() => setToggle(!toggle)} loading='lazy'
            />

            <div
              className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className='list-none flex justify-end items-start flex-1 text-center flex-col gap-4'>

                <li>
              

                  <Link
                    activeClass="active"
                    to={'home'}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>

                    <div className="flex items-center gap-2">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path></svg>
                      <p>Home</p>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link
                    activeClass="active"
                    to={'dev'}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>
                    <div className="flex items-center gap-2">
                      <svg stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg>  <p>About</p>

                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to={'skills'}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>
                    <div className="flex items-center gap-2">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-260 72h96v209.9L621.5 312 572 347.4V136zm220 752H232V136h280v296.9c0 3.3 1 6.6 3 9.3a15.9 15.9 0 0 0 22.3 3.7l83.8-59.9 81.4 59.4c2.7 2 6 3.1 9.4 3.1 8.8 0 16-7.2 16-16V136h64v752z"></path></svg>
                      <p>Skills</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to={'projects'}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>
                    <div className="flex items-center gap-2">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M280 752h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8zm192-280h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8zm192 72h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8zm216-432H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>
                      <p>Projects</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to={'contact'}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>
                    <div className="flex items-center gap-2">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M2 8.994A5.99 5.99 0 0 1 8 3h8c3.313 0 6 2.695 6 5.994V21H8c-3.313 0-6-2.695-6-5.994V8.994zM20 19V8.994A4.004 4.004 0 0 0 16 5H8a3.99 3.99 0 0 0-4 3.994v6.012A4.004 4.004 0 0 0 8 19h12zm-6-8h2v2h-2v-2zm-6 0h2v2H8v-2z"></path></g></svg>
                      <p>Contact</p>
                    </div>

                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

    </motion.nav>

  );
};

export default Navbar;
