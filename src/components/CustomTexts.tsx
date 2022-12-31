'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';
import { TitleProps, TypingProps } from '../types/props';

export const TypingText = ({ title, textStyles }: TypingProps) => (
  <motion.p
    variants={textContainer}
    className={`${textStyles} text-sm text-secondary-white`}
  >
    {Array.from(title).map((letter: string, index: number) => (
      <motion.span key={index} variants={textVariant2}>
        {letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ children, textStyles }: TitleProps) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`${textStyles} mt-4 font-bold text-white text-[40px] md:text-[64px]`}
  >
    {children}
  </motion.h2>
);
