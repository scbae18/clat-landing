export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.clat.kr'

export const painPoints = [
  {
    lines: [
      { parts: ['수업 끝나고 출결·점수·과제를'] },
      { parts: ['엑셀이랑 메모장에 ', '따로따로 정리'], highlight: '따로따로 정리' },
    ],
    image: '/images/pain-excel.png',
  },
  {
    lines: [
      { parts: ['학부모 문자,'] },
      { parts: ['학생 수만큼 ', '하나하나 직접 작성'], highlight: '하나하나 직접 작성' },
    ],
    image: '/images/pain-message.png',
  },
  {
    lines: [
      { parts: ['"이 학생 과제 냈던가?"'] },
      { parts: ['명단 ', '처음부터 다시 훑기'], highlight: '처음부터 다시 훑기' },
    ],
    image: '/images/pain-search.png',
  },
]

export const solutions = [
  {
    pain: '여러 학원 오가며\n관리할 시간 부족',
    title: '한 곳에서 모든 반 관리',
    description: '학원이 여러 곳이어도\n반과 학생을 한 화면에서 확인해요',
    icon: '/images/icon-folder.png',
  },
  {
    pain: '출결·과제·문자\n전부 혼자 챙김',
    title: '수업 기록 · 추적 자동화',
    description: '미완료 학생을 자동으로 추려줘서\n놓치는 일이 없어요',
    icon: '/images/icon-star.png',
  },
  {
    pain: '학부모 문자\n30분 이상 소요',
    title: '문자 자동 생성',
    description: '수업 데이터 입력하면\n학생별 문자가 자동으로 완성돼요',
    icon: '/images/icon-message.png',
  },
  {
    pain: '체계는 필요한데\n시스템은 부담스러움',
    title: '가입 후 바로 시작',
    description: '설치도, 미팅도 필요 없어요.\n오늘 당장 쓸 수 있어요',
    icon: '/images/icon-click.png',
  },
]

export const benefits = [
  {
    badge: '핵심 가치 1',
    title: '빠른 수업 정리',
    description: '템플릿 한 번 만들고 매 수업마다 재사용하세요. 문자도 자동으로 완성돼요.',
    image: '/images/value-clock.png',
  },
  {
    badge: '핵심 가치 2',
    title: '간편한 도입',
    description: '설치도, 미팅도 필요 없어요. 가입하고 오늘 바로 시작하세요.',
    image: '/images/value-rocket.png',
  },
  {
    badge: '핵심 가치 3',
    title: '꼼꼼한 추적',
    description: '미완성 학생을 자동으로 추려줘요. 놓치는 학생이 없어요.',
    image: '/images/value-target.png',
  },
]

export type StepImage =
  | { type: 'single'; src: string; alt: string }
  | { type: 'double'; primary: string; secondary: string; alt: string }
  | { type: 'stack'; top: string; bottom: string; alt: string; bottomVariant?: 'card' | 'banner' }

export type Step = {
  step: string
  tab: string
  title: string
  description: string[]
  images?: StepImage
  reversed?: boolean
  tinted?: boolean
}

export const steps: Step[] = [
  {
    step: 'STEP 0',
    tab: '학생 · 반 관리',
    title: '먼저 반과 학생을\n등록해 주세요.',
    description: [
      '반 이름을 만들고 학생 정보를 입력합니다. 엑셀 파일로 한 번에 업로드할 수도 있습니다.',
      '처음 한 번만 세팅해두면, 이후 수업마다 자동으로 연동됩니다.',
    ],
    images: {
      type: 'stack',
      top: '/images/step0-class.png',
      bottom: '/images/step0-upload.png',
      alt: '반·학생 등록 화면',
    },
    tinted: true,
  },
  {
    step: 'STEP 1',
    tab: '수업 템플릿',
    title: '내 수업에 맞는\n템플릿을 만들어 보세요.',
    description: [
      '출결, 점수, 과제 등 필요한 항목을 직접 구성합니다. 한 번 만들어두면 매 수업마다 재사용됩니다.',
      '학부모 문자에 포함할 항목도 미리 선택해둘 수 있습니다.',
    ],
    images: {
      type: 'single',
      src: '/images/step1-template.png',
      alt: '수업 템플릿 설정 화면',
    },
  },
  {
    step: 'STEP 2',
    tab: 'AI 조교',
    title: 'AI 조교를\n설정해 보세요.',
    description: [
      '학생의 수업 데이터를 바탕으로 학부모 피드백을 자동으로 생성합니다.',
      '말투, 길이, 내용 방향까지 선생님이 원하는 대로 설정할 수 있어, 매번 문자를 직접 쓰지 않아도 됩니다.',
    ],
    images: {
      type: 'single',
      src: '/images/hero-screenshot.png',
      alt: 'AI 조교 설정 화면',
    },
    reversed: true,
    tinted: true,
  },
  {
    step: 'STEP 3',
    tab: '출결',
    title: '수업 전,\n출결을 시작하세요.',
    description: [
      '수업 전에 출결을 열어두면, 설정한 시간에 맞춰 학생에게 출결 링크가 알림톡으로 자동 발송됩니다.',
    ],
    images: {
      type: 'single',
      src: '/images/step2-lesson-main.png',
      alt: '출결 시작 화면',
    },
  },
  {
    step: 'STEP 4',
    tab: '수업 입력',
    title: '수업이 끝나면\n데이터를 입력해 보세요.',
    description: [
      '수업 후 날짜 → 반 → 항목 순서로 입력합니다.',
      '저장하는 순간 학생별 문자 내용이 자동으로 생성되고, 엑셀로도 바로 출력할 수 있습니다.',
    ],
    images: {
      type: 'double',
      primary: '/images/step2-lesson-main.png',
      secondary: '/images/step2-lesson-preview.png',
      alt: '수업 데이터 입력 화면',
    },
    reversed: true,
  },
  {
    step: 'STEP 5',
    tab: '알림톡 발송',
    title: '버튼 하나로\n알림톡을 보내세요.',
    description: [
      '버튼 하나로 학부모에게 알림톡이 전송됩니다.',
      '함께 전달되는 학부모 대시보드에는 AI 피드백, 수업 이력, 미완료 항목이 정리되어 표시됩니다.',
    ],
    images: {
      type: 'single',
      src: '/images/step2-lesson-preview.png',
      alt: '알림톡 발송 화면',
    },
    tinted: true,
  },
  {
    step: 'STEP 6',
    tab: '학생 대시보드',
    title: '학생 현황을\n한눈에 확인하세요.',
    description: [
      '선생님도 학생 대시보드에서 미완료 항목, 점수 추이, 수업 이력을 한눈에 확인할 수 있습니다.',
      '미완료 항목은 페이지에서 바로 완료 처리가 가능하고, AI 조교가 어떤 학생을 더 신경 써야 할지 분석해줍니다.',
    ],
    images: {
      type: 'stack',
      top: '/images/step6-dashboard.png',
      bottom: '/images/step6-complete.png',
      bottomVariant: 'banner',
      alt: '학생 대시보드 화면',
    },
    reversed: true,
    tinted: true,
  },
]
