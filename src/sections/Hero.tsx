'use client';

import { motion } from 'framer-motion';
import { textVariant, slideIn } from '../utils/motion';
import Image from 'next/image';
import Cover from 'public/cover.png';
import Stamp from 'public/stamp.png';

const Hero = () => (
  <section className="py-12 sm:py-16 pl-6 sm:pl-16">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full max-w-7xl mx-auto flex flex-col"
    >
      <div className="flex flex-col justify-center items-center relative z-10">
        <motion.h1 className="hero-heading" variants={textVariant(1.1)}>
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex justify-center items-center"
        >
          <h1 className="hero-heading">Ma</h1>
          <div className="hero-D-text" />
          <h1 className="hero-heading">ness</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full -mt-3 md:-mt-5"
      >
        <div className="w-full absolute -top-8 h-80 hero-gradient rounded-tl-[140px]" />
        <Image
          src={Cover}
          alt="cover hero section"
          className="w-full h-[350px] sm:h-[500px] object-cover relative rounded-tl-[140px]"
          placeholder="blur"
        />

        <div className="w-full flex justify-end -mt-12 sm:-mt-[70px] pr-10 relative z-10">
          <Image
            src={Stamp}
            alt="stamp"
            className="w-24 sm:w-40 h-24 sm:h-40 object-contain"
            placeholder="blur"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
