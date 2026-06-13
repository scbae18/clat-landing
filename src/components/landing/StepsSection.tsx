'use client'

import { motion, useReducedMotion } from 'framer-motion'
import LandingImage from '@/components/landing/LandingImage'
import Reveal from '@/components/motion/Reveal'
import { steps, type StepImage } from '@/lib/landing-content'
import { slideFromLeft, slideFromRight } from '@/lib/motion-presets'
import * as s from '@/app/landing.css'

function StepImages({ images }: { images: StepImage }) {
  const reduceMotion = useReducedMotion()

  const imageMotion = reduceMotion
    ? {}
    : {
        whileHover: { scale: 1.02, transition: { duration: 0.35 } },
      }

  if (images.type === 'single') {
    return (
      <motion.div {...imageMotion}>
        <LandingImage
          src={images.src}
          alt={images.alt}
          className={s.stepImageSingle}
          sizes="(max-width: 1024px) 100vw, 560px"
        />
      </motion.div>
    )
  }

  if (images.type === 'double') {
    return (
      <div className={s.stepImageDoubleWrap}>
        <motion.div {...imageMotion}>
          <LandingImage
            src={images.primary}
            alt={images.alt}
            className={s.stepImageDoubleMain}
            sizes="(max-width: 1024px) 100vw, 560px"
          />
        </motion.div>
        <motion.div
          {...(reduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 20, x: 20 },
                whileInView: { opacity: 1, y: 0, x: 0 },
                viewport: { once: true, margin: '-40px' },
                transition: { delay: 0.25, duration: 0.6 },
              })}
        >
          <LandingImage
            src={images.secondary}
            alt=""
            className={s.stepImageDoubleOverlay}
            sizes="(max-width: 1024px) 45vw, 240px"
            aria-hidden
          />
        </motion.div>
      </div>
    )
  }

  const bottomClass =
    images.bottomVariant === 'banner' ? s.stepImageStackWide : s.stepImageBottom

  return (
    <div className={s.stepImageStack}>
      <motion.div {...imageMotion}>
        <LandingImage
          src={images.top}
          alt={images.alt}
          className={s.stepImageTop}
          sizes="(max-width: 1024px) 72vw, 400px"
        />
      </motion.div>
      <motion.div
        {...(reduceMotion
          ? {}
          : {
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: '-40px' },
              transition: { delay: 0.3, duration: 0.6 },
            })}
      >
        <LandingImage
          src={images.bottom}
          alt=""
          className={bottomClass}
          sizes="(max-width: 1024px) 68vw, 380px"
          aria-hidden
        />
      </motion.div>
    </div>
  )
}

export default function StepsSection() {
  return (
    <div id="steps">
      <section className={s.section} style={{ paddingBottom: '40px' }}>
        <div className={s.container}>
          <Reveal>
            <h2 className={s.sectionTitle}>사용 방법, 순서대로</h2>
            <p className={s.sectionSubtitle}>
              처음 한 번만 세팅하면, 이후 수업마다 자동으로 연동됩니다.
            </p>
          </Reveal>
        </div>
      </section>

      {steps.map((step, index) => {
        const textVariant = step.reversed ? slideFromRight : slideFromLeft
        const imageVariant = step.reversed ? slideFromLeft : slideFromRight

        return (
          <section
            key={step.step}
            className={`${s.section} ${s.stepSection}`}
            data-tinted={step.tinted ? 'true' : 'false'}
          >
            <div className={s.container} style={{ position: 'relative' }}>
              <div className={s.stepLayout}>
                <Reveal
                  className={s.textBlock}
                  variant={textVariant}
                  data-reversed={step.reversed ? 'true' : 'false'}
                >
                  <div className={s.stepMeta}>
                    <motion.span
                      className={s.stepBadge}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      {step.step}
                    </motion.span>
                    <span className={s.stepTab}>{step.tab}</span>
                  </div>
                  <h3 className={s.stepTitle}>{step.title}</h3>
                  <div
                    style={{
                      marginTop: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                    }}
                  >
                    {step.description.map((line) => (
                      <p key={line} className={s.stepDescText}>
                        {line}
                      </p>
                    ))}
                  </div>
                </Reveal>

                {step.images && (
                  <Reveal
                    className={`${s.stepImages} ${s.imageBlock}`}
                    variant={imageVariant}
                    data-reversed={step.reversed ? 'true' : 'false'}
                  >
                    <StepImages images={step.images} />
                  </Reveal>
                )}
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
