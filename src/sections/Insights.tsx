'use client';

import { motion } from 'framer-motion';
import { InsightCard, TitleText, TypingText } from '../components';
import { Feature } from '../types';
import { fadeIn } from '../utils/motion';
import { insights } from '../constants/';

const Insights = () => (
  <section className="container-global">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full max-w-7xl mx-auto"
    >
      <TypingText textStyles="text-center" title="| Insight" />
      <TitleText textStyles="text-center">Insight about metaverse</TitleText>

      <motion.div
        variants={fadeIn('up', 'tween', 0.1, 1)}
        className="flex flex-col gap-8 mt-8"
      >
        {insights.map((item: Feature, index: number) => (
          <InsightCard data={item} key={index} index={index} />
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default Insights;
