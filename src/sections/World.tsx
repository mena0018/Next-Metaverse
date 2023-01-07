'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import { fadeIn } from '../utils/motion';
import { TitleText } from '../components/CustomTexts';
import Map from '/public/map.png';
import Image from 'next/image';
import BottomRight from '/public/people-01.png';
import TopLeft from '/public/people-02.png';
import Middle from '/public/people-03.png';

const World = () => (
  <section className="py-12 px-6 sm:p-16">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full max-w-7xl mx-auto flex flex-col"
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText textStyles="text-center">
        Track friends around you and invite them to play together in the same
        world
      </TitleText>

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative w-full h-[60vh] mt-16"
      >
        <Image src={Map} alt="map" className="w-full h-full object-cover" />

        <div className="w-16 h-16 p-1 rounded-full bg-slate-500 absolute top-10 left-20">
          <Image src={TopLeft} alt="people 1" />
        </div>

        <div className="w-16 h-16 p-1 rounded-full bg-slate-500  absolute bottom-1/2 right-1/2">
          <Image src={Middle} alt="people 2" />
        </div>

        <div className="w-16 h-16 p-1 rounded-full bg-slate-500 absolute bottom-20 right-20">
          <Image src={BottomRight} alt="people 3" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
