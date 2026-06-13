import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '클랫 — 학원 선생님을 위한 수업 관리 도구',
  description:
    '수업 기록, 학생 추적, 학부모 알림을 하나의 흐름으로. 수업은 가르치는 것만으로도 충분해야 합니다.',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    title: '클랫 — 학원 선생님을 위한 수업 관리 도구',
    description: '수업 외 행정에 쓰던 시간, 클랫이 돌려드립니다.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
