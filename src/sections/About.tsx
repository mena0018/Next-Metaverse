'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className="py-12 px-6 sm:p-16 relative z-10">
    <div className="gradient-02 z-0" />

    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center"
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-3 text-xl text-center text-secondary-white sm:text-3xl sm:leading-[1.5]"
      >
        <span className="font-extrabold text-white">Metaverse</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like it's really real, you can feel what you feel in this metaverse
        world, because this is really the
        <span className="font-bold text-white"> madness of the metaverse </span>
        of today, using only <span className="font-bold text-white">VR </span>
        devices you can easily explore the metaverse world you want, turn your
        dreams into reality. Let's
        <span className="font-bold text-white"> explore </span> the madness of
        the metaverse by scrolling down
      </motion.p>

      <motion.div
        className="flex items-center justify-center w-full mt-7"
        variants={fadeIn('up', 'tween', 0.3, 1)}
      >
        <Image src="/arrow-down.svg" alt="scroll down" width={22} height={28} />
      </motion.div>
    </motion.div>
  </section>
);

export default About;
