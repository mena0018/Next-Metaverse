'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { planetVariants, fadeIn } from '../utils/motion';
import Planet from '/public/get-started.png';
import { TypingText, TitleText } from '../components/CustomTexts';
import { StartSteps } from '../components';
import { startingFeatures } from '../constants';

const GetStarted = () => (
  <section className="py-12 px-6 sm:p-16">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full max-w-7xl mx-auto flex items-center justify-center gap-6 flex-col lg:flex-row"
    >
      <motion.div
        variants={planetVariants('left')}
        className="flex items-center justify-center"
      >
        <Image
          src={Planet}
          alt="planet"
          placeholder="blur"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>

      <motion.div variants={fadeIn('left', 'tween', 0.2, 1)}>
        <TypingText title="| How Metaversus Works" textStyles="text-left" />
        <TitleText>Get started with just a few clicks</TitleText>

        <div className="mt-8 flex flex-col gap-5 items-start">
          {startingFeatures.map((item: string, index: number) => (
            <StartSteps number={index + 1} content={item} key={index} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
