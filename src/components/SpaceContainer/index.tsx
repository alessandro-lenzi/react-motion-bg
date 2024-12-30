import clsx from 'clsx'
import { motion } from 'motion/react'

import Particles from '../Particles'

import './styles.css'

type IProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const SpaceContainer = ({ children, ...props }: IProps) => {
  return (
    <div className={clsx('space-container', props.className)} {...props}>
      {children}
      <div className="space-container-frame">
        <div className="space-container-wrapper">
          <motion.div className="shape1"></motion.div>
          <motion.div className="shape2"></motion.div>
          <motion.div className="shape3"></motion.div>
        </div>
      </div>
      <Particles
        className="pointer-events-none absolute inset-0"
        quantity={50}
      />
    </div>
  )
}
