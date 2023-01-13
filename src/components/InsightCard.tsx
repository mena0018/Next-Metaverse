'use client';

import Image from 'next/image';
import { InsightProps } from '../types/props';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import Arrow from '/public/arrow.svg';

const InsightCard = ({ data, index }: InsightProps) => (
  <motion.div
    variants={fadeIn('up', 'tween', 0.5 * index, 1)}
    className="flex gap-4 flex-col justify-around items-center md:flex-row md:gap-10"
  >
    <Image
      src={data.imgUrl}
      alt={data.title}
      width={data.width}
      height={data.height}
      className="w-full h-60 object-cover rounded-3xl md:w-64"
    />

    <div className="flex flex-col max-w-2xl">
      <h2 className="text-white font-normal text-3xl lg:text-4xl">
        {data.title}
      </h2>
      <p className="text-secondary-white mt-5 text-sm lg:text-xl">
        {data.subtitle}
      </p>
    </div>

    <div className="min-w-[96px] w-24 h-24 hidden lg:flex items-center justify-center border-2 border-white rounded-full">
      <Image src={Arrow} alt="arrow" className="w-1/2 h-1/2 object-contain" />
    </div>
  </motion.div>
);

export default InsightCard;
