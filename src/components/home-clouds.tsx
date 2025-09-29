'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

function HomeClouds() {
  return (
    <div>
      <motion.div
        animate={{ x: ['0%', '50%'] }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute w-max flex -bottom-[80px] md:-bottom-[28%] overflow-hidden"
      >
        <figure className="w-[100vw] max-sm:w-[170vw] z-0 pointer-events-none scale-x-[-1]">
          <Image
            src="/assets/images/static/Clouds.png"
            alt="hero"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </figure>
        <figure className="w-[100vw] max-sm:w-[170vw] z-0 pointer-events-none">
          <Image
            src="/assets/images/static/Clouds.png"
            alt="hero"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </figure>
        <figure className="w-[100vw] max-sm:w-[170vw] z-0 pointer-events-none scale-x-[-1]">
          <Image
            src="/assets/images/static/Clouds.png"
            alt="hero"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </figure>
        <figure className="w-[100vw] max-sm:w-[170vw] z-0 pointer-events-none">
          <Image
            src="/assets/images/static/Clouds.png"
            alt="hero"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </figure>
      </motion.div>
      <motion.figure
        animate={{ y: [15, 0, 15, 0, 15] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatDelay: 0,
          ease: 'easeInOut',
        }}
        className={
          'w-full max-lg:w-[120vw] max-sm:w-[170vw] max-sm:-bottom-12 absolute -bottom-[80px] lg:-bottom-[15%] z-0 pointer-events-none'
        }
      >
        <Image
          src={'/assets/images/static/Clouds.png'}
          alt={'hero'}
          width={1920}
          height={1080}
          className={'w-full h-full object-cover'}
        />
      </motion.figure>
    </div>
  );
}
export default HomeClouds;
