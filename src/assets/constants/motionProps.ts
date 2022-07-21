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

export const getFadeInProps = (): HTMLMotionProps<"div"> => {
  return ({
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
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