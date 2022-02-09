export const easing = [0.6, -0.06, 0.01, 0.99];

export const fadeInUp = {
  initial: { y: 600, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      ease: easing,
      duration: 0.5,
      stiffness: 300,
    },
  },
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const headerAnimation = {
  hidden: { x: -100, opacity: 0 },
  show: { x: 1, opacity: 1 },
};

export const imageAnimation = {
  hidden: { scale: 2, opacity: 0 },
  show: { scale: 1, opacity: 1 },
};

export const reveal = {
  hidden: { x: -900 },
  show: { x: 0 },
};
export const veal = {
  hidden: { x: 900 },
  show: { x: 0 },
};

export const textAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

export const cardAnimation = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
  },
};

export const fromUp = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};
export const fromDown = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

export const topContainerAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};
export const videoAnimation = {
  hidden: { x: -800, opacity: 0 },
  show: { x: 0, opacity: 1 },
};
export const reasonsAnimation = {
  hidden: { x: 800, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

export const contactAnimation = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export const loadingFromUp = {
  hidden: {
    x: -700,

    rotate: 180,
  },
  show: {
    x: 0,
    rotate: 0,
  },
};
