'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { staggerContainer, planetVariants, fadeIn } from '../utils/motion';
import Planet from '/public/whats-new.png';
import { TypingText, TitleText } from '../components/CustomTexts';
import { newFeatures } from '../constants';
import { Feature } from '../types';
import { NewFeatures } from '../components';

const WhatsNew = () => (
  <section className="py-12 px-6 sm:p-16">
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full max-w-7xl mx-auto flex items-center justify-center gap-8 flex-col lg:flex-row"
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex flex-col justify-center flex-[0.9]"
      >
        <TypingText title="| What's new " textStyles="text-left" />
        <TitleText>What's new about Metaversus?</TitleText>

        <div className="mt-12 flex flex-wrap justify-between">
          {newFeatures.map((item: Feature, index: number) => (
            <NewFeatures key={index} data={item} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className="flex items-center justify-center flex-1"
      >
        <Image
          src={Planet}
          alt="planet"
          placeholder="blur"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
