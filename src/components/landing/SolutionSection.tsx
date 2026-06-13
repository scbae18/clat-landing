'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import LandingImage from '@/components/landing/LandingImage'
import Reveal from '@/components/motion/Reveal'
import Stagger from '@/components/motion/Stagger'
import { solutions } from '@/lib/landing-content'
import { cardHover, fadeUp, scaleIn } from '@/lib/motion-presets'
import * as s from '@/app/landing.css'

export default function SolutionSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="solution" className={`${s.section} ${s.solutionSection}`}>
      <div className={s.solutionBg} aria-hidden>
        <Image
          src="/images/solution-bg.jpg"
          alt=""
          fill
          className={s.solutionBgImage}
          sizes="100vw"
        />
        <div className={s.solutionOverlay} />
      </div>
      <div className={`${s.container} ${s.solutionContent}`}>
        <Reveal>
          <h2 className={s.solutionTitle}>클랫이 해결하는 네 가지 문제</h2>
        </Reveal>

        <Stagger className={s.solutionGrid}>
          {solutions.map((item, index) => (
            <motion.div key={item.title} className={s.solutionColumn} variants={fadeUp}>
              <motion.div className={s.painBadge} variants={scaleIn}>
                <span className={s.painBadgeLabel}>Pain Point {index + 1}</span>
                <p className={s.painBadgeText}>{item.pain}</p>
              </motion.div>
              <motion.div
                className={s.solutionCard}
                whileHover={reduceMotion ? undefined : cardHover}
              >
                <motion.div
                  whileHover={reduceMotion ? undefined : { rotate: [0, -8, 8, 0], transition: { duration: 0.5 } }}
                >
                  <LandingImage
                    src={item.icon}
                    alt=""
                    className={s.solutionIcon}
                    displayWidth={80}
                    displayHeight={80}
                    aria-hidden
                  />
                </motion.div>
                <h3 className={s.solutionCardTitle}>{item.title}</h3>
                <p className={s.solutionCardDesc}>{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
