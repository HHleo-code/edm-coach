import { StepData, CheatsheetSection, CheatsheetEmotionMapping } from './types';

export const STEPS: StepData[] = [
  {
    id: 1,
    label: 'STEP 1',
    title: '과거 탐색',
    questions: [
      {
        title: '질문 1-1',
        text: '"지금까지 살면서 \'아, 이럴 때 내가 진짜 살아있다!\'라고 느꼈던 순간을 하나 말씀해주실 수 있나요?"',
        deepProcess: [
          { label: 'D (묘사)', description: '구체적으로 언제, 어디서, 무엇을 하셨나요?' },
          { label: 'E (감정)', description: '그때 어떤 기분이셨나요?' },
          { label: 'E (의미)', description: '왜 그 순간이 특별하게 느껴지셨나요?' },
          { label: 'P (연결)', description: '비슷한 경험이 또 있으신가요?' },
        ],
        tip: { label: '💡 막히면', text: '"작은 순간도 괜찮아요. 꼭 대단한 게 아니어도 됩니다"' },
      },
      {
        title: '질문 1-2',
        text: '"그 순간에 어떤 능력이나 강점을 발휘하셨던 것 같으신가요?"',
        deepProcess: [
          { label: 'D (묘사)', description: '구체적으로 어떤 행동을 하셨나요?' },
          { label: 'E (감정)', description: '하실 때 기분은 어떠셨나요? 자연스러우셨나요?' },
          { label: 'E (의미)', description: '주변에서는 뭐라고 하던가요?' },
          { label: 'P (연결)', description: '일이나 다른 활동에서도 그 강점을 발휘하신 적 있으신가요?' },
        ],
        tip: { label: '💡 막히면', text: '"다른 분들은 힘들어하는데 본인은 자연스럽게 되셨던 게 있으신가요?"' },
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
        text: '"지금 어떤 일, 어떤 방향으로 가고 싶으신가요? 그쪽으로 가고 싶은 이유가 무엇인가요?"',
        deepProcess: [
          { label: 'D (묘사)', description: '목표하시는 직무나 분야가 구체적으로 어떻게 되시나요?' },
          { label: 'E (감정)', description: '그 방향을 생각하면 어떤 기분이 드시나요? 무엇이 끌리시나요?' },
          { label: 'E (의미)', description: '그 일에서 가장 중요하게 여기시는 게 무엇인가요?' },
          { label: 'P (연결)', description: '그 가치가 지금 상황에서도 여전히 중요하게 느껴지시나요?' },
        ],
        tip: { label: '💡 막히면', text: '"지금까지 해오신 일이나 경험 중에 가장 보람 있었던 게 무엇인가요?"' },
      },
      {
        title: '질문 2-2',
        text: '"지금 취업(또는 이직)을 준비하시면서 가장 막막하거나 어려운 부분이 무엇인가요?"',
        deepProcess: [
          { label: 'D (묘사)', description: '막막하다는 게 구체적으로 어떤 상황인가요?' },
          { label: 'E (감정)', description: '그럴 때 어떤 기분이 드시나요? 무엇이 불안하거나 답답하신가요?' },
          { label: 'E (의미)', description: '제약이 없다면 지금 당장 무엇을 하고 싶으신가요?' },
          { label: 'P (연결)', description: '결국 지금 가장 필요한 게 무엇인 것 같으신가요?' },
        ],
        tip: { label: '💡 정리', text: '"[가치]를 중요하게 여기시는데, 지금은 [욕구]가 필요하신 거군요"' },
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
        text: '"10년 후, \'아 내 인생 잘 살고 있다\'라고 느끼는 모습은 어떤 모습인가요?"',
        deepProcess: [
          { label: 'D (묘사)', description: '눈을 감고 상상해보세요. 아침에 무엇을 하고 계신가요?' },
          { label: 'E (감정)', description: '그 순간 기분이 어떠신가요?' },
          { label: 'E (의미)', description: '왜 그 모습이 \'잘 살고 있다\'는 느낌을 주는 것 같으신가요?' },
          { label: 'P (연결)', description: '앞서 말씀하신 강점이나 가치와 연결되는 부분이 있으신가요?' },
        ],
        tip: { label: '💡 막히면', text: '"어디 계신가요? 누구와 함께 계신가요? 무엇을 하고 계신가요?"' },
      },
      {
        title: '질문 3-2',
        text: '"그 미래의 본인은 어떤 일을 하고 있고, 누구에게 어떤 가치를 드리고 있나요?"',
        deepProcess: [
          { label: 'D (묘사)', description: '어떤 일을 하고 계신가요? 어떤 조직이나 환경인가요?' },
          { label: 'E (감정)', description: '그 일을 하실 때 어떤 기분일 것 같으신가요?' },
          { label: 'E (의미)', description: '왜 그 일과 그 사람들이 중요하게 느껴지시나요?' },
          { label: 'P (연결)', description: '삶에서 [___]하는 것이 중요하다는 걸 느끼시는군요?' },
        ],
        tip: { label: '💡 정리', text: '"[강점]을 가지고, [가치]를 중요하게 여기며, [기여]를 통해 의미를 느끼시는군요"' },
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
        text: '"오늘 대화를 통해 새롭게 알게 된 점이 있으신가요?"',
        deepProcess: [
          { label: 'D (묘사)', description: '무엇이 가장 인상 깊으셨나요?' },
          { label: 'E (감정)', description: '그걸 깨달으셨을 때 어떤 기분이셨나요?' },
          { label: 'E (의미)', description: '앞으로 어떤 영향을 줄 것 같으신가요?' },
          { label: 'P (연결)', description: '정리하면, [___]하실 때 빛나고, [___]을 중요하게 여기시는 것 같습니다' },
        ],
        tip: { label: '💡 막히면', text: '"오늘 대화하면서 \'아!\' 하셨던 순간이 있으신가요?"' },
      },
      {
        title: '질문 4-2',
        text: '"이번 주에 하실 수 있는 작은 행동 하나는 무엇인가요?"',
        deepProcess: [
          { label: 'D (묘사)', description: '무엇을, 언제, 어디서, 어떻게 하실 건가요?' },
          { label: 'E (감정)', description: '실제로 하실 수 있을 것 같으신가요? (10점 만점에 몇 점?)' },
          { label: 'E (의미)', description: '그것을 하면 어떤 도움이 될 것 같으신가요?' },
          { label: 'P (연결)', description: '방해 요소는 없으신가요? 실제로 해보실 수 있으신가요?' },
        ],
        tip: { label: '💡 7점 이하면', text: '"더 작게 만들어볼까요?" / 너무 막연하면: "구체적으로 언제 하실 건가요?"' },
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
