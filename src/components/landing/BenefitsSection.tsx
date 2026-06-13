'use client'

import { motion, useReducedMotion } from 'framer-motion'
import LandingImage from '@/components/landing/LandingImage'
import Reveal from '@/components/motion/Reveal'
import Stagger from '@/components/motion/Stagger'
import { benefits } from '@/lib/landing-content'
import { cardHover, fadeUp, slideFromRight } from '@/lib/motion-presets'
import * as s from '@/app/landing.css'

export default function BenefitsSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="benefits" className={s.section}>
      <div className={s.container}>
        <div className={s.benefitsLayout}>
          <Reveal>
            <h2 className={s.benefitsIntroTitle}>
              수업 외 행정에 쓰던 시간,
              <br />
              클랫이 돌려드립니다.
            </h2>
            <p className={s.benefitsIntroDesc}>
              클랫은 학원 선생님을 위한 수업 관리 도구예요.
              <br />
              수업 기록, 학생 추적, 학부모 알림.
              <br />
              세 가지를 하나의 흐름으로 처리해요.
            </p>
          </Reveal>

          <Stagger className={s.benefitList}>
            {benefits.map((item, index) => (
              <motion.article
                key={item.title}
                className={s.benefitCard}
                variants={index % 2 === 0 ? fadeUp : slideFromRight}
                whileHover={reduceMotion ? undefined : cardHover}
              >
                <span className={s.benefitBadge}>{item.badge}</span>
                <h3 className={s.benefitTitle}>{item.title}</h3>
                <p className={s.benefitDesc}>{item.description}</p>
                <LandingImage
                  src={item.image}
                  alt=""
                  className={s.benefitBgImage}
                  aria-hidden
                />
              </motion.article>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
