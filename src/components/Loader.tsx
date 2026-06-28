"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Transition } from "./ui/Transitions";

interface PageLoadProps {
  setHideLoader: (value: boolean) => void;
}

const Loader = ({ setHideLoader }: PageLoadProps) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      if (counter < 100) {
        setCounter(counter + 2);
      } else {
        clearInterval(count);
      }
    }, 25);

    return () => {
      clearInterval(count);
    };
  }, [counter]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 2.5, duration: 1, type: "tween" }}
      onAnimationComplete={() => setHideLoader(false)}
      className="fixed top-0 left-0 z-[9999] w-full h-full bg-background"
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        <Transition transition={{ delay: 0.2 }}>
          <span className="font-semibold text-white/40">SANGAM</span>
        </Transition>
        <Transition transition={{ delay: 0.4 }}>
          <div className="md:text-9xl text-7xl font-bold">
            Namaste
          </div>
        </Transition>
        <motion.span className="md:text-9xl text-7xl font-semibold md:font-bold">
          {counter}%
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Loader;
