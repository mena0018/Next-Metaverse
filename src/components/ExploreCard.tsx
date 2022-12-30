'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { ExploreProps } from '../types/props';

const ExploreCard = ({ item, index, active, handleClick }: ExploreProps) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative h-[700px] min-w-[170px] flex items-center justify-center transition-[flex] duration-700 ease-out-flex cursor-pointer
    ${
      active === item.id ? 'flex-[10] lg:flex-[3.5]' : 'flex-[2] lg:flex-[0.5]'
    }`}
    onClick={() => handleClick(item.id)}
  >
    <Image
      src={item.imgUrl}
      alt={item.title}
      width={item.width}
      height={item.height}
      className="absolute w-full h-full object-cover rounded-3xl"
    />
    {active === item.id ? (
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-3xl">
        <div className="flex justify-center items-center w-16 h-16 rounded-3xl glassmorphism mb-4">
          <Image
            src="/headset.svg"
            alt="headset"
            width={200}
            height={200}
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <p className="leading-5 text-white uppercase">Enter the metaverse</p>
        <h3 className="mt-6 font-semibold text-white text-2xl sm:text-3xl">
          {item.title}
        </h3>
      </div>
    ) : (
      <h3 className="absolute z-0 font-semibold text-white text-lg sm:text-2xl lg:bottom-20 lg:-rotate-90 lg:origin[0,0]">
        {item.title}
      </h3>
    )}
  </motion.div>
);

export default ExploreCard;
