import { motion } from "framer-motion";

export const AnimateFromBottom = ({ children, delay = 0 }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    }}
    className="opacity-0"
  >
    {children}
  </motion.div>
);

export const AnimateFromRight = ({ children, delay = 0 }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
    variants={{
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    }}
    className="opacity-0"
  >
    {children}
  </motion.div>
);

export const AnimateFromLeft = ({ children, delay = 0 }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
    variants={{
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    }}
    className="opacity-0"
  >
    {children}
  </motion.div>
);

export const AnimateFromInside = ({ children, delay = 0 }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
    variants={{
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    }}
    className="opacity-0"
  >
    {children}
  </motion.div>
);

export const AnimateFromTop = ({ children, delay = 0 }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
    variants={{
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 },
    }}
    className="opacity-0"
  >
    {children}
  </motion.div>
);
