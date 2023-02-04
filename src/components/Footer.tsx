'use client';

import { motion } from 'framer-motion';
import { footerVariants } from '../utils/motion';
import { socials } from '../constants';
import Image from 'next/image';
import Headset from '/public/headset.svg';

const Footer = () => (
  <footer className="container-global">
    <div className="footer-gradient" />

    <motion.div
      initial="hidden"
      whileInView="show"
      className="w-full max-w-7xl mx-auto flex flex-col gap-8"
      variants={footerVariants}
    >
      <div className="flex flex-wrap gap-5 justify-between items-center">
        <h2 className="text-white font-bold text-[45px] md:text-6xl">
          Enter the Metaverse
        </h2>
        <button className="bg-cyan-700 w-fit h-fit py-3 px-6 flex items-center justify-center gap-3 text-white rounded-3xl cursor-pointer">
          <Image src={Headset} alt="headset svg" />
          <span>Enter Metaverse</span>
        </button>
      </div>

      <hr className="my-8 opacity-50" />

      <div className="flex flex-wrap gap-5 justify-between items-center ">
        <h2 className="uppercase text-white font-bold text-xl md:text-2xl">
          Metaversus
        </h2>
        <p className="text-secondary-white text-sm">
          Copyright © 2021 - 2022 Metaversus. All rights reserved.
        </p>
        <div className="flex gap-4">
          {socials.map((item, index) => (
            <Image
              src={item.url}
              alt={item.name}
              key={index}
              width={28}
              height={28}
            />
          ))}
        </div>
      </div>
    </motion.div>
  </footer>
);

export default Footer;
