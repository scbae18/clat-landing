export type ImageMeta = {
  width: number
  height: number
  /** 표시 최대 너비(px). 미설정 시 100% */
  maxWidth?: number
}

export const IMAGE_META: Record<string, ImageMeta> = {
  '/images/logo.png': { width: 347, height: 115, maxWidth: 121 },
  '/images/logo-light.png': { width: 608, height: 203, maxWidth: 120 },
  '/images/hero-screenshot.png': { width: 1440, height: 1135 },
  '/images/pain-excel.png': { width: 1024, height: 1024, maxWidth: 220 },
  '/images/pain-message.png': { width: 1280, height: 698, maxWidth: 320 },
  '/images/pain-search.png': { width: 1067, height: 1008, maxWidth: 260 },
  '/images/icon-folder.png': { width: 256, height: 256, maxWidth: 80 },
  '/images/icon-star.png': { width: 256, height: 256, maxWidth: 80 },
  '/images/icon-message.png': { width: 256, height: 256, maxWidth: 80 },
  '/images/icon-click.png': { width: 256, height: 256, maxWidth: 80 },
  '/images/value-clock.png': { width: 1024, height: 559, maxWidth: 280 },
  '/images/value-rocket.png': { width: 1024, height: 559, maxWidth: 280 },
  '/images/value-target.png': { width: 1024, height: 559, maxWidth: 280 },
  '/images/step0-class.png': { width: 1282, height: 1166 },
  '/images/step0-upload.png': { width: 1282, height: 1312 },
  '/images/step1-template.png': { width: 1440, height: 1127 },
  '/images/step2-lesson-main.png': { width: 3024, height: 1890 },
  '/images/step2-lesson-preview.png': { width: 962, height: 1086 },
  '/images/step6-dashboard.png': { width: 1278, height: 1450 },
  '/images/step6-complete.png': { width: 1078, height: 132 },
  '/images/cta-gift.png': { width: 1024, height: 1024, maxWidth: 500 },
  '/images/solution-bg.jpg': { width: 4096, height: 2731 },
}

export function getImageMeta(src: string): ImageMeta {
  return IMAGE_META[src] ?? { width: 1200, height: 800 }
}
