import { StepData, CheatsheetSection, CheatsheetEmotionMapping } from './types';

export const STEPS: StepData[] = [
  {
    id: 1,
    label: 'STEP 1',
    title: '과거 탐색',
    questions: [
      {
        title: '질문 1-1',
        text: '"지금까지 살면서 \'아, 이럴 때 내가 진짜 살아있다!\'라고 느꼈던 순간을 하나 말해줄래?"',
        deepProcess: [
          { label: 'D (묘사)', description: '구체적으로? 언제, 어디서, 무엇을?' },
          { label: 'E (감정)', description: '그때 어떤 기분이었어?' },
          { label: 'E (의미)', description: '왜 특별했어?' },
          { label: 'P (연결)', description: '비슷한 경험 또 있어?' },
        ],
        tip: { label: '💡 막히면', text: '"작은 순간도 괜찮아. 꼭 대단한 게 아니어도 돼"' },
      },
      {
        title: '질문 1-2',
        text: '"그 순간에 네가 어떤 능력이나 강점을 발휘했던 것 같아?"',
        deepProcess: [
          { label: 'D (묘사)', description: '구체적으로 뭘 했어?' },
          { label: 'E (감정)', description: '할 때 기분은? 자연스러웠어?' },
          { label: 'E (의미)', description: '주변에서 뭐라고 했어?' },
          { label: 'P (연결)', description: '다른 곳에서도 쓴 적 있어?' },
        ],
        tip: { label: '💡 막히면', text: '"다른 사람은 어려워하는데 너는 쉬웠던 부분이 있어?"' },
      },
    ],
  },
  {
    id: 2,
    label: 'STEP 2',
    title: '현재 탐색',
    questions: [
      {
        title: '질문 2-1',
        text: '"지금의 전공(또는 진로)을 선택한 이유가 뭐야?"',
        deepProcess: [
          { label: 'D (묘사)', description: '선택할 당시에 어떤 생각 했었어?' },
          { label: 'E (감정)', description: '선택할 때 어떤 기분? → 뭐가 그렇게 만들었어?' },
          { label: 'E (의미)', description: '네게 정말 중요한 게 뭐야?' },
          { label: 'P (연결)', description: '그 가치가 지금도 중요해?' },
        ],
        tip: { label: '💡 막히면', text: '"다시 선택해도 똑같이 할 거야? 왜?"' },
      },
      {
        title: '질문 2-2',
        text: '"지금 진로에 대해 가장 막막한 점은 정확히 뭐야?"',
        deepProcess: [
          { label: 'D (묘사)', description: '막막하다는 게 구체적으로 뭐야?' },
          { label: 'E (감정)', description: '그럴 때 어떤 기분? → 뭐가 불안해/답답해?' },
          { label: 'E (의미)', description: '제약 없다면 뭘 하고 싶어?' },
          { label: 'P (연결)', description: '네게 필요한 건 결국 뭔 것 같아?' },
        ],
        tip: { label: '💡 정리', text: '"너는 [가치]를 중요하게 여기는데, 지금은 [욕구]가 필요한 거구나"' },
      },
    ],
  },
  {
    id: 3,
    label: 'STEP 3',
    title: '미래 상상',
    questions: [
      {
        title: '질문 3-1',
        text: '"10년 후, 네가 \'아 내 인생 잘 살고 있다\'라고 느끼는 모습은?"',
        deepProcess: [
          { label: 'D (묘사)', description: '눈 감고 상상. 아침에 뭐하고 있어?' },
          { label: 'E (감정)', description: '그 순간 네 기분은?' },
          { label: 'E (의미)', description: '왜 그게 \'잘 살고 있다\'는 느낌을 줄까?' },
          { label: 'P (연결)', description: '아까 얘기한 강점/가치랑 연결되지?' },
        ],
        tip: { label: '💡 막히면', text: '"어디 있어? 누구랑 있어? 뭐하고 있어?"' },
      },
      {
        title: '질문 3-2',
        text: '"그 미래의 너는 어떤 문제를 해결하거나, 누구에게 도움을 주고 있어?"',
        deepProcess: [
          { label: 'D (묘사)', description: '구체적으로 누구를 어떻게 돕고 있어?' },
          { label: 'E (감정)', description: '그 일 할 때 어떤 기분일 것 같아?' },
          { label: 'E (의미)', description: '왜 그 사람들을 돕고 싶어?' },
          { label: 'P (연결)', description: '네 인생에서 [___]하는 게 중요하구나?' },
        ],
        tip: { label: '💡 정리', text: '"너는 [강점]을 가지고, [가치]를 중요하게 여기며, [기여]를 통해 의미를 느끼는구나"' },
      },
    ],
  },
  {
    id: 4,
    label: 'STEP 4',
    title: '실마리 찾기',
    questions: [
      {
        title: '질문 4-1',
        text: '"오늘 대화를 통해 새롭게 알게 된 점이 있어?"',
        deepProcess: [
          { label: 'D (묘사)', description: '뭐가 가장 인상 깊었어?' },
          { label: 'E (감정)', description: '그걸 깨달았을 때 어땠어?' },
          { label: 'E (의미)', description: '앞으로 어떤 영향을 줄 것 같아?' },
          { label: 'P (연결)', description: '정리하면, 넌 [___]할 때 빛나고, [___]을 중요하게 여기는 거 같아' },
        ],
        tip: { label: '💡 막히면', text: '"오늘 대화하면서 \'아!\' 했던 순간 있었어?"' },
      },
      {
        title: '질문 4-2',
        text: '"이번 주에 할 수 있는 작은 행동 하나는?"',
        deepProcess: [
          { label: 'D (묘사)', description: '무엇을? 언제? 어디서? 어떻게?' },
          { label: 'E (감정)', description: '할 수 있을 것 같아? (10점 만점에 몇 점?)' },
          { label: 'E (의미)', description: '그걸 하면 네게 어떤 도움이 될까?' },
          { label: 'P (연결)', description: '방해 요소는 없어? 진짜 할 수 있어?' },
        ],
        tip: { label: '💡 7점 이하면', text: '"더 작게 만들어볼까?" / 너무 막연하면: "구체적으로 언제?"' },
      },
    ],
  },
];

export const CHEATSHEET_CONTENT: CheatsheetSection[] = [
  {
    title: '📌 DEEP 프로세스 (모든 질문 공통)',
    type: 'list',
    content: [
      'D - Describe (묘사하기)<br>"구체적으로?" "예를 들면?"',
      'E - Emotion (감정 확인)<br>"그때 어떤 기분?" "어떻게 느껴졌어?"',
      'E - Explore (의미 탐색)<br>"왜 중요해?" "네게 어떤 의미야?"',
      'P - Plan (연결 짓기)<br>"다른 것과 연결되지?" "요약하면..."',
    ],
  },
  {
    title: '💡 감정 → 욕구 찾기',
    type: 'table',
    content: [
      { emotion: '설레요', question: '뭐가 설레게 했어?', need: '새로움, 가능성' },
      { emotion: '불안해요', question: '뭐가 불안해?', need: '확실함, 안전' },
      { emotion: '답답해요', question: '뭐가 막혔어?', need: '돌파구, 명확함' },
      { emotion: '무기력해요', question: '뭐가 의욕을 떨어뜨려?', need: '동기, 의미' },
      { emotion: '초조해요', question: '뭐가 조급해?', need: '방향성, 속도' },
      { emotion: '혼란스러워요', question: '뭐 때문에 헷갈려?', need: '기준, 정리' },
    ] as CheatsheetEmotionMapping[],
  },
  {
    title: '🎯 가치 찾기 마법 질문',
    type: 'list',
    content: [
      '"다시 선택해도 똑같이 할 거야? 왜?"',
      '"그거 안 했으면 뭘 후회했을 것 같아?"',
      '"부모님이 반대해도 할 거야?"',
    ],
  },
  {
    title: '🔍 진짜 욕구 찾기 3단 질문',
    type: 'block',
    content: [
      '<strong>1단:</strong> "뭘 하고 싶어?" → "의사"<br>',
      '<strong>2단:</strong> "왜?" → "사람 돕고 싶어서"<br>',
      '<strong>3단:</strong> "그럼 네게 뭐가 좋아?" → "의미 있는 삶"<br>',
      '<span class="text-indigo-500">✅ 진짜 욕구 = 의미 있는 삶</span>',
    ],
  },
  {
    title: '⚠️ 막힐 때 마법 질문',
    type: 'list',
    content: [
      '"조금 더 자세히 말해줄 수 있어?"',
      '"예를 들어?"',
      '"그게 네게는 어떻게 느껴져?"',
      '"이 중에 뭐야?" (선택지 주기)',
    ],
  },
  {
    title: '❌ 절대 하지 말 것',
    type: 'list',
    style: 'negative',
    content: [
      '"나 같으면..."',
      '"그건 아닌 것 같은데"',
      '상대 말 끊기',
      '조언하기',
    ],
  },
  {
    title: '✅ 꼭 할 것',
    type: 'list',
    style: 'positive',
    content: [
      '고개 끄덕이며 듣기',
      '핵심 단어 메모하기',
      '"그럼 ~한 거구나?" 확인',
      '침묵 괜찮아 (생각할 시간)',
    ],
  },
];
