'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Reveal from '@/components/motion/Reveal'
import Stagger from '@/components/motion/Stagger'
import { cardHover, fadeUp } from '@/lib/motion-presets'
import * as s from '@/app/landing.css'

const FEATURES = [
  {
    icon: '📋',
    title: '수업 기록',
    desc: '출결, 점수, 과제를 한 흐름으로',
  },
  {
    icon: '🔔',
    title: '학부모 알림',
    desc: '알림톡으로 자동 발송',
  },
  {
    icon: '📊',
    title: '학생 추적',
    desc: '미완료 항목 자동 추적',
  },
]

export default function AboutSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="about" className={`${s.section} ${s.aboutSection}`}>
      <div className={s.container}>
        <Reveal className={s.aboutContent}>
          <h2 className={s.sectionTitle}>클랫이란?</h2>
          <p className={s.aboutBody}>
            클랫은 &ldquo;학원 선생님을 위한 수업 관리 도구&rdquo;입니다. 수업 기록, 학생 추적,
            학부모 알림, 이 세 가지를 하나의 흐름으로 처리합니다. 설치도, 미팅도 필요 없습니다.
            가입하는 날 바로 시작할 수 있습니다.
          </p>
        </Reveal>

        <Stagger className={s.aboutFeatureGrid}>
          {FEATURES.map((f) => (
            <motion.div
              key={f.title}
              className={s.aboutFeatureCard}
              variants={fadeUp}
              whileHover={reduceMotion ? undefined : cardHover}
            >
              <div className={s.aboutFeatureIcon} aria-hidden>
                {f.icon}
              </div>
              <h3 className={s.aboutFeatureTitle}>{f.title}</h3>
              <p className={s.aboutFeatureDesc}>{f.desc}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
