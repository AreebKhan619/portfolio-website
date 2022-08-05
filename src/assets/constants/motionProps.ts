import { HTMLMotionProps } from "framer-motion"

export const getScaleAnimationProps = (): HTMLMotionProps<"div"> => {
  return ({
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1, scale: 1
    },
    transition: {
      duration: 0.1,
      delay: 0.1,
    }
  })
}

export const getListPopInProps = (i: number): HTMLMotionProps<"div"> => {
  return ({
    initial: { scale: 0.1 },
    whileInView: { scale: 1 },
    transition: {
      duration: 0.1,
      delay: 0.05 * i
    }
  })
}

export const getFadeInProps = (): HTMLMotionProps<"div"> => {
  return ({
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
  })
}

export const getSlideInProps = (): HTMLMotionProps<"div"> => {
  return ({
    initial: {
      height: 0,
      opacity: 0,
    },
    animate: {
      height: 'auto',
      opacity: 1,
    },
    transition: {
      type: 'tween',
      duration: 0.1
    },
    exit: {
      y: '-10%',
      opacity: 0,
    }
  })
}

export const getOnClickAnimationProps = (): HTMLMotionProps<"div"> => {
  return ({
    whileTap: { scale: 0.9 }
  })
}

export const getWaveAnimationProps = (): HTMLMotionProps<"img"> => ({
  animate: {
    borderRadius: ["20%", "10%"],
  }
})