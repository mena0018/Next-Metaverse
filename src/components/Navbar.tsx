'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="px-6 py-8 relative sm:px-16"
  >
    <div className="absolute w-1/2 inset-0 gradient-01" />
    <div className="w-full max-w-7xl mx-auto flex justify-between">
      <Image src="/search.svg" alt="Search svg" width={24} height={24} />
      <h2 className="font-extrabold text-2xl leading-7 text-white">
        METAVERSUS
      </h2>
      <Image src="/menu.svg" alt="Menu svg" width={24} height={24} />
    </div>
  </motion.nav>
);

export default Navbar;
