'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { TypingText, ExploreCard, TitleText } from '../components';
import { exploreWorlds } from '../constants';
import { ExplorerImage } from '../types';
import { staggerContainer } from '../utils/motion';

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
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
          <br className="hidden lg:block" /> to explore
        </TitleText>

        <div className="w-full mt-12 flex gap-5 flex-col lg:flex-row min-h-[70vh]">
          {exploreWorlds.map((item: ExplorerImage, index: number) => (
            <ExploreCard
              key={item.id}
              index={index}
              item={item}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
