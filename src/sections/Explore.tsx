'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { TypingText, ExploreCard, TitleText } from '../components';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';

const Explore = () => (
  <section className="py-12 px-6 sm:p-16" id="explore">
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center"
    >
      <TypingText title="| The World" textStyles="text-center" />
      <TitleText textStyles="text-center">
        Choose the world you want
        <br className="hidden md:block" /> to explore
      </TitleText>
    </motion.div>
  </section>
);

export default Explore;
