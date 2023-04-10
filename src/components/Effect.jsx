
import { motion } from 'framer-motion'
import React from 'react'
import { textVariant } from "../utils/motion";

const Effect = () => {
  return (
    <>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          zIndex: -1,
        }}
      >
        <div
          style={{
            top: '-250px',
            position: 'absolute',
            width: '100vw',
            height: '500px',
            alignSelf: 'center',

            WebkitMaskImage: 'radial-gradient(100% 50% at center center, black, transparent)',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              display: 'flex',
            }}
          >
            <motion.div variants={textVariant()}
              style={{
                position: 'absolute',
                height: '100%',
                width: '50%',
                left: 0,
              }}
              initial={{
                background: `conic-gradient(from 90deg at 80% 48%, #b4a3ea, #000000)`,
                opacity: 0.2,
              }}
              animate="whileInView"
              variants={{
                whileInView: {
                  background: `conic-gradient(from 90deg at 70% 48%, #8b71de, #000000)`,
                  opacity: 1,
                  transition: { duration: 0.4 },
                },
              }}
              viewport={{
                amount: 0.9,
                margin: '20% 0px -5% 0px',
              }}
            />
            <motion.div variants={textVariant()}
              style={{
                position: 'absolute',
                right: 0,
                height: '100%',
                width: '50%',
              }}
              initial={{
                background: `conic-gradient(from 270deg at 20% 48%, #000000, #b4a3ea)`,
                opacity: 0.2,
              }}
              animate="whileInView"
              variants={{
                whileInView: {
                  background: `conic-gradient(from 270deg at 30% 48%, #000000, #8b71de)`,
                  opacity: 1,
                  transition: { duration: 0.4 },
                },
              }}
              viewport={{
                amount: 0.9,
                margin: '10% 0px 0% 0px',
              }}
            />
          </div>
        </div>
      </div>

    </>
  )
}

export default Effect;
