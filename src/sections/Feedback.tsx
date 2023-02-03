'use client';

import { motion } from 'framer-motion';
import { fadeIn, zoomIn } from '../utils/motion';
import Image from 'next/image';
import Planet from '/public/planet-09.png';
import Stamp from '/public//stamp.png';

const Feedback = () => (
  <section className="container-global">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full max-w-7xl mx-auto flex gap-8 flex-col lg:flex-row"
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] flex flex-col justify-end relative text-white border border-x-secondary-white rounded-3xl p-4 sm:p-8 lg:max-w-sm"
      >
        <div className="feedback-gradient" />

        <h2 className="font-bold text-3xl md:text-4xl">Samantha</h2>
        <p className="mt-2 mb-8 text-sm md:text-lg">Fonder Metaversus</p>
        <p className="text-lg md:text-2xl leading-9 md:leading-[3rem]">
          "With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-1 relative"
      >
        <Image
          src={Planet}
          alt="planet cover"
          className="h-auto min-h-[210px] object-cover rounded-3xl lg:h-[600px]"
        />
        <motion.div
          variants={zoomIn(0.5, 1)}
          className="absolute top-10 -left-24 hidden lg:block"
        >
          <Image src={Stamp} alt="stamp" className="w-40 h-40 object-cover" />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
