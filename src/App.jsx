
import React, { lazy, Suspense, useState, useEffect, useCallback } from 'react';
import Cursor from './components/Cursor';
import MorphingText from './components/loader/MorphingText';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";


const App = () => {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 400);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    const loadImage = async (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.src = src;
      });
    };

    Promise.all([
      loadImage('https://i.ibb.co/YjT4kps/herobg.png'),
      loadImage('https://i.ibb.co/DQC6SNb/deviladd.png'),
      loadImage('https://i.ibb.co/rkWRLPy/css.png'),
      loadImage('https://i.ibb.co/3vw6Rvb/html.png'),
      loadImage('https://i.ibb.co/WczkVyB/tailwind.png'),
      loadImage('https://i.ibb.co/w6CDt8R/javascript.png'),
      loadImage('https://i.ibb.co/khWxkkH/reactjs.png'),
      loadImage('https://i.ibb.co/JrvnT68/redux.png'),
      loadImage('https://i.ibb.co/kQQtFn5/mongodb.png'),
      loadImage('https://i.ibb.co/9Wpprj3/nodejs.png'),
      loadImage('https://i.ibb.co/3Ss4F6b/Mui.png'),
      loadImage('https://i.ibb.co/MZjZ0Wh/git.png'),
      loadImage("https://i.ibb.co/59YD9P9/NPM.png"),



    ]).then(() => {
      setTimeout(() => {
        setLoading(false);
      }, 7500);
    });
  }, []);

  return (
    <>


      {loading ? (
        <MorphingText />
      ) : (

        <div id="bg" style={{ backgroundColor: 'black' }}>
          <Suspense fallback={<MorphingText />}>
            <Cursor />
            <div className='relative z-0 bg-primary'>
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <Hero />
              </div>

              <div className='relative z-0'>
                <About />
                <Experience />
                <Tech />
                <Works />
        
                <div className='hidden md:block'>
                  <StarsCanvas />
                </div>
              </div>

              <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
              </div>
            </div>
          </Suspense>

        </div>
      )}
    </>
  );
};

export default App;
