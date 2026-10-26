export interface VocabItem {
  id: string;
  word: string;
  phonetic: string;
  meaning: string;
  unit: 1 | 2 | 3;
  lesson: string;
  illustration: string;
  example: string;
  exampleVi: string;
}

export interface StructureItem {
  id: string;
  unit: 1 | 2 | 3;
  title: string;
  titleVi: string;
  pattern: string;
  explanation: string;
  examples: {
    en: string;
    vi: string;
  }[];
  tip?: string;
}

export interface MultipleChoiceQuestion {
  id: string;
  unit: 1 | 2 | 3;
  question: string;
  questionVi: string;
  illustration?: string;
  options: { label: 'A' | 'B' | 'C'; text: string }[];
  correctAnswer: 'A' | 'B' | 'C';
  explanation: string;
}

export interface TickCrossQuestion {
  id: string;
  unit: 1 | 2 | 3;
  word: string;
  illustration: string;
  isCorrect: boolean; // true = Tick (✓), false = Cross (✗)
  correctWordIfFalse?: string;
  explanation: string;
}

export interface UnscrambleQuestion {
  id: string;
  unit: 1 | 2 | 3;
  word: string;
  scrambled: string[];
  illustration: string;
  hintVi: string;
}

export interface OneWordQuestion {
  id: string;
  unit: 1 | 2 | 3;
  prompt: string;
  illustration: string;
  answer: string;
  acceptableAnswers?: string[];
  hint: string;
}

// ======================= VOCABULARY =======================
export const VOCABULARY_LIST: VocabItem[] = [
  // UNIT 1: FIRST DAY
  {
    id: 'u1-pen',
    word: 'pen',
    phonetic: '/pen/',
    meaning: 'cây bút mực',
    unit: 1,
    lesson: 'Lesson 1: School Supplies',
    illustration: 'pen',
    example: "It's a pen.",
    exampleVi: 'Nó là một cây bút mực.',
  },
  {
    id: 'u1-pencil',
    word: 'pencil',
    phonetic: '/ˈpen.səl/',
    meaning: 'cây bút chì',
    unit: 1,
    lesson: 'Lesson 1: School Supplies',
    illustration: 'pencil',
    example: "It's a pencil.",
    exampleVi: 'Nó là một cây bút chì.',
  },
  {
    id: 'u1-eraser',
    word: 'eraser',
    phonetic: '/ɪˈreɪ.sər/',
    meaning: 'cục tẩy, cục gôm',
    unit: 1,
    lesson: 'Lesson 1: School Supplies',
    illustration: 'eraser',
    example: "It's an eraser.",
    exampleVi: 'Nó là một cục tẩy.',
  },
  {
    id: 'u1-ruler',
    word: 'ruler',
    phonetic: '/ˈruː.lər/',
    meaning: 'cây thước kẻ',
    unit: 1,
    lesson: 'Lesson 1: School Supplies',
    illustration: 'ruler',
    example: "It's a ruler.",
    exampleVi: 'Nó là một cây thước kẻ.',
  },
  {
    id: 'u1-pencil-case',
    word: 'pencil case',
    phonetic: '/ˈpen.səl keɪs/',
    meaning: 'hộp bút, bóp viết',
    unit: 1,
    lesson: 'Lesson 1: School Supplies',
    illustration: 'pencil-case',
    example: "It's a pencil case.",
    exampleVi: 'Nó là một cái hộp bút.',
  },
  {
    id: 'u1-backpack',
    word: 'backpack',
    phonetic: '/ˈbæk.pæk/',
    meaning: 'ba lô, cặp sách',
    unit: 1,
    lesson: 'Lesson 1: School Supplies',
    illustration: 'backpack',
    example: "It's a backpack.",
    exampleVi: 'Nó là một cái ba lô.',
  },
  {
    id: 'u1-book',
    word: 'book',
    phonetic: '/bʊk/',
    meaning: 'quyển sách',
    unit: 1,
    lesson: 'Lesson 2: School Supplies',
    illustration: 'book',
    example: "It's a book. It isn't a notebook.",
    exampleVi: 'Nó là quyển sách. Nó không phải cuốn vở.',
  },
  {
    id: 'u1-notebook',
    word: 'notebook',
    phonetic: '/ˈnəʊt.bʊk/',
    meaning: 'quyển vở ghi',
    unit: 1,
    lesson: 'Lesson 2: School Supplies',
    illustration: 'notebook',
    example: "It's a notebook.",
    exampleVi: 'Nó là một quyển vở.',
  },
  {
    id: 'u1-desk',
    word: 'desk',
    phonetic: '/desk/',
    meaning: 'bàn học sinh',
    unit: 1,
    lesson: 'Lesson 2: School Supplies',
    illustration: 'desk',
    example: "It's a desk. It isn't a chair.",
    exampleVi: 'Nó là cái bàn học.',
  },
  {
    id: 'u1-chair',
    word: 'chair',
    phonetic: '/tʃeər/',
    meaning: 'cái ghế tựa',
    unit: 1,
    lesson: 'Lesson 2: School Supplies',
    illustration: 'chair',
    example: "It's a chair.",
    exampleVi: 'Nó là cái ghế.',
  },
  {
    id: 'u1-circle',
    word: 'circle',
    phonetic: '/ˈsɜː.kəl/',
    meaning: 'hình tròn',
    unit: 1,
    lesson: 'Lesson 4: Shapes',
    illustration: 'circle',
    example: 'Is it a circle? - Yes, it is.',
    exampleVi: 'Nó có phải hình tròn không? - Vâng, đúng rồi.',
  },
  {
    id: 'u1-square',
    word: 'square',
    phonetic: '/skweər/',
    meaning: 'hình vuông',
    unit: 1,
    lesson: 'Lesson 4: Shapes',
    illustration: 'square',
    example: 'Is it a square? - Yes, it is.',
    exampleVi: 'Nó có phải hình vuông không? - Vâng, đúng rồi.',
  },
  {
    id: 'u1-triangle',
    word: 'triangle',
    phonetic: '/ˈtraɪ.æŋ.ɡəl/',
    meaning: 'hình tam giác',
    unit: 1,
    lesson: 'Lesson 4: Shapes',
    illustration: 'triangle',
    example: 'Is it a triangle? - Yes, it is.',
    exampleVi: 'Nó có phải hình tam giác không? - Vâng, đúng rồi.',
  },
  {
    id: 'u1-rectangle',
    word: 'rectangle',
    phonetic: '/ˈrek.tæŋ.ɡəl/',
    meaning: 'hình chữ nhật',
    unit: 1,
    lesson: 'Lesson 4: Shapes',
    illustration: 'rectangle',
    example: "Look! It's a rectangle.",
    exampleVi: 'Nhìn kìa! Nó là một hình chữ nhật.',
  },

  // UNIT 2: ART CLASS
  {
    id: 'u2-paint',
    word: 'paint',
    phonetic: '/peɪnt/',
    meaning: 'màu vẽ, sơn',
    unit: 2,
    lesson: 'Lesson 1: Art Supplies',
    illustration: 'paint',
    example: 'This is paint.',
    exampleVi: 'Đây là màu vẽ.',
  },
  {
    id: 'u2-paper',
    word: 'paper',
    phonetic: '/ˈpeɪ.pər/',
    meaning: 'giấy thủ công',
    unit: 2,
    lesson: 'Lesson 1: Art Supplies',
    illustration: 'paper',
    example: 'This is paper.',
    exampleVi: 'Đây là giấy vẽ.',
  },
  {
    id: 'u2-chalk',
    word: 'chalk',
    phonetic: '/tʃɔːk/',
    meaning: 'phấn viết',
    unit: 2,
    lesson: 'Lesson 1: Art Supplies',
    illustration: 'chalk',
    example: 'This is chalk.',
    exampleVi: 'Đây là phấn viết.',
  },
  {
    id: 'u2-yarn',
    word: 'yarn',
    phonetic: '/jɑːn/',
    meaning: 'len sợi',
    unit: 2,
    lesson: 'Lesson 1: Art Supplies',
    illustration: 'yarn',
    example: 'This is yarn.',
    exampleVi: 'Đây là sợi len.',
  },
  {
    id: 'u2-glue',
    word: 'glue',
    phonetic: '/ɡluː/',
    meaning: 'keo dán, hồ dán',
    unit: 2,
    lesson: 'Lesson 1: Art Supplies',
    illustration: 'glue',
    example: 'This is glue.',
    exampleVi: 'Đây là keo dán.',
  },
  {
    id: 'u2-tape',
    word: 'tape',
    phonetic: '/teɪp/',
    meaning: 'băng dính',
    unit: 2,
    lesson: 'Lesson 1: Art Supplies',
    illustration: 'tape',
    example: 'This is tape.',
    exampleVi: 'Đây là băng dính.',
  },
  {
    id: 'u2-red',
    word: 'red',
    phonetic: '/red/',
    meaning: 'màu đỏ',
    unit: 2,
    lesson: 'Lesson 2: Colors',
    illustration: 'color-red',
    example: "What color is it? - It's red.",
    exampleVi: 'Nó là màu gì? - Nó màu đỏ.',
  },
  {
    id: 'u2-yellow',
    word: 'yellow',
    phonetic: '/ˈjel.əʊ/',
    meaning: 'màu vàng',
    unit: 2,
    lesson: 'Lesson 2: Colors',
    illustration: 'color-yellow',
    example: "It's yellow.",
    exampleVi: 'Nó màu vàng.',
  },
  {
    id: 'u2-blue',
    word: 'blue',
    phonetic: '/bluː/',
    meaning: 'màu xanh da trời',
    unit: 2,
    lesson: 'Lesson 2: Colors',
    illustration: 'color-blue',
    example: "It's a backpack. It's blue.",
    exampleVi: 'Nó là cái ba lô. Nó màu xanh da trời.',
  },
  {
    id: 'u2-white',
    word: 'white',
    phonetic: '/waɪt/',
    meaning: 'màu trắng',
    unit: 2,
    lesson: 'Lesson 2: Colors',
    illustration: 'color-white',
    example: "It's white.",
    exampleVi: 'Nó màu trắng.',
  },
  {
    id: 'u2-black',
    word: 'black',
    phonetic: '/blæk/',
    meaning: 'màu đen',
    unit: 2,
    lesson: 'Lesson 2: Colors',
    illustration: 'color-black',
    example: "It's black.",
    exampleVi: 'Nó màu đen.',
  },
  {
    id: 'u2-green',
    word: 'green',
    phonetic: '/ɡriːn/',
    meaning: 'màu xanh lá cây',
    unit: 2,
    lesson: 'Lesson 4: Colors',
    illustration: 'color-green',
    example: 'Blue and yellow make green.',
    exampleVi: 'Xanh da trời và vàng tạo thành xanh lá.',
  },
  {
    id: 'u2-purple',
    word: 'purple',
    phonetic: '/ˈpɜː.pəl/',
    meaning: 'màu tím',
    unit: 2,
    lesson: 'Lesson 4: Colors',
    illustration: 'color-purple',
    example: "Look! It's purple.",
    exampleVi: 'Nhìn kìa! Nó màu tím.',
  },
  {
    id: 'u2-orange',
    word: 'orange',
    phonetic: '/ˈɒr.ɪndʒ/',
    meaning: 'màu cam',
    unit: 2,
    lesson: 'Lesson 4: Colors',
    illustration: 'color-orange',
    example: 'Red and yellow make orange.',
    exampleVi: 'Đỏ và vàng tạo thành màu cam.',
  },
  {
    id: 'u2-pink',
    word: 'pink',
    phonetic: '/pɪŋk/',
    meaning: 'màu hồng',
    unit: 2,
    lesson: 'Lesson 4: Colors',
    illustration: 'color-pink',
    example: 'Red and white make pink.',
    exampleVi: 'Đỏ và trắng tạo thành màu hồng.',
  },
  {
    id: 'u2-gray',
    word: 'gray',
    phonetic: '/ɡreɪ/',
    meaning: 'màu xám',
    unit: 2,
    lesson: 'Lesson 4: Colors',
    illustration: 'color-gray',
    example: 'Black and white make gray.',
    exampleVi: 'Đen và trắng tạo thành màu xám.',
  },
  {
    id: 'u2-brown',
    word: 'brown',
    phonetic: '/braʊn/',
    meaning: 'màu nâu',
    unit: 2,
    lesson: 'Lesson 4: Colors',
    illustration: 'color-brown',
    example: "It's brown.",
    exampleVi: 'Nó màu nâu.',
  },

  // UNIT 3: BIRTHDAY PARTY
  {
    id: 'u3-numbers',
    word: 'one to twelve',
    phonetic: '/wʌn/ ... /twelv/',
    meaning: 'các số đếm từ 1 đến 12',
    unit: 3,
    lesson: 'Lesson 1: Numbers',
    illustration: 'cake-7',
    example: "How old are you? - I'm eight.",
    exampleVi: 'Bạn mấy tuổi rồi? - Mình 8 tuổi.',
  },
  {
    id: 'u3-doll',
    word: 'doll / dolls',
    phonetic: '/dɒl/',
    meaning: 'búp bê',
    unit: 3,
    lesson: 'Lesson 2: Toys',
    illustration: 'doll',
    example: 'How many dolls? - One doll. / Two dolls.',
    exampleVi: 'Có bao nhiêu búp bê? - Một búp bê. / Hai búp bê.',
  },
  {
    id: 'u3-ball',
    word: 'ball / balls',
    phonetic: '/bɔːl/',
    meaning: 'quả bóng',
    unit: 3,
    lesson: 'Lesson 2: Toys',
    illustration: 'ball',
    example: 'How many balls? - Four balls!',
    exampleVi: 'Có bao nhiêu quả bóng? - Bốn quả bóng!',
  },
  {
    id: 'u3-car',
    word: 'car / cars',
    phonetic: '/kɑːr/',
    meaning: 'xe ô tô đồ chơi',
    unit: 3,
    lesson: 'Lesson 2: Toys',
    illustration: 'car',
    example: 'How many cars? - Two cars!',
    exampleVi: 'Có bao nhiêu ô tô? - Hai chiếc ô tô!',
  },
  {
    id: 'u3-kite',
    word: 'kite / kites',
    phonetic: '/kaɪt/',
    meaning: 'con diều',
    unit: 3,
    lesson: 'Lesson 2: Toys',
    illustration: 'kite',
    example: 'How many kites? - One kite!',
    exampleVi: 'Có bao nhiêu con diều? - Một con diều!',
  },
  {
    id: 'u3-game',
    word: 'game / games',
    phonetic: '/ɡeɪm/',
    meaning: 'trò chơi cờ bàn (board game)',
    unit: 3,
    lesson: 'Lesson 4: Toys',
    illustration: 'game',
    example: 'I have one game. / I have two games.',
    exampleVi: 'Mình có một trò chơi. / Mình có hai trò chơi.',
  },
  {
    id: 'u3-marble',
    word: 'marble / marbles',
    phonetic: '/ˈmɑː.bəl/',
    meaning: 'viên bi',
    unit: 3,
    lesson: 'Lesson 4: Toys',
    illustration: 'marble',
    example: 'I have twelve marbles.',
    exampleVi: 'Mình có 12 viên bi.',
  },
  {
    id: 'u3-puzzle',
    word: 'puzzle / puzzles',
    phonetic: '/ˈpʌz.əl/',
    meaning: 'tranh ghép hình',
    unit: 3,
    lesson: 'Lesson 4: Toys',
    illustration: 'puzzle',
    example: 'I have one puzzle.',
    exampleVi: 'Mình có một bộ ghép hình.',
  },
  {
    id: 'u3-card',
    word: 'card / cards',
    phonetic: '/kɑːd/',
    meaning: 'thẻ bài đồ chơi',
    unit: 3,
    lesson: 'Lesson 4: Toys',
    illustration: 'card',
    example: 'I have seven cards.',
    exampleVi: 'Mình có 7 thẻ bài.',
  },
];

// ======================= STRUCTURES =======================
export const STRUCTURE_LIST: StructureItem[] = [
  {
    id: 'st-u1-1',
    unit: 1,
    title: "1. Hỏi & Trả lời về đồ dùng học tập: 'What is it?'",
    titleVi: "Hỏi 'Nó là cái gì?'",
    pattern: "Q: What is it?\nA: It's a / an [đồ vật].",
    explanation:
      "Dùng khi hỏi đồ vật ở trước mặt là cái gì. Chú ý: 'It's' là viết tắt của 'It is'. Dùng 'an' trước các từ bắt đầu bằng nguyên âm (như an eraser), dùng 'a' với các từ còn lại (a pen, a pencil, a ruler, a backpack).",
    examples: [
      { en: "What is it? - It's a pen.", vi: 'Nó là cái gì? - Nó là cây bút mực.' },
      { en: "What is it? - It's an eraser.", vi: 'Nó là cái gì? - Nó là cục tẩy (dùng an).' },
      { en: "What is it? - It's a ruler.", vi: 'Nó là cái gì? - Nó là cây thước kẻ.' },
    ],
    tip: "Mẹo cho bé: 'an eraser' vì chữ 'e' đứng đầu! Các từ khác dùng 'a'.",
  },
  {
    id: 'st-u1-2',
    unit: 1,
    title: "2. Khẳng định & Phủ định: 'It's a... It isn't a...'",
    titleVi: "Nó là... Nó không phải là...",
    pattern: "It's a [đồ vật A]. It isn't a [đồ vật B].",
    explanation:
      "'It isn't' là viết tắt của 'It is not' mang nghĩa 'Nó không phải là...'. Cấu trúc này dùng để phân biệt hai đồ vật gần giống nhau.",
    examples: [
      { en: "It's a book. It isn't a notebook.", vi: 'Nó là quyển sách. Nó không phải là quyển vở.' },
      { en: "It's a desk. It isn't a chair.", vi: 'Nó là cái bàn học. Nó không phải cái ghế.' },
    ],
  },
  {
    id: 'st-u1-3',
    unit: 1,
    title: "3. Chào hỏi & Thăm hỏi sức khỏe: 'How are you?'",
    titleVi: "Bạn có khỏe không?",
    pattern: "Q: How are you?\nA: I'm fine / I'm good / I'm OK / I'm great! Thank you.",
    explanation:
      "Khi gặp bạn bè hoặc thầy cô, bé có thể chào và hỏi thăm sức khỏe. 'I'm' viết tắt của 'I am'. Luôn nhớ nói 'Thank you' (Cảm ơn bạn) thật lịch sự nhé!",
    examples: [
      { en: "Hi, Emma! How are you? - I'm fine. Thank you.", vi: 'Chào Emma! Cậu có khỏe không? - Mình khỏe. Cảm ơn cậu.' },
      { en: "How are you, Mike? - I'm great! Thank you.", vi: 'Mike ơi cậu khỏe không? - Mình rất tuyệt! Cảm ơn cậu.' },
    ],
  },
  {
    id: 'st-u1-4',
    unit: 1,
    title: "4. Hỏi hình dạng: 'Is it a circle?'",
    titleVi: "Nó có phải hình... không?",
    pattern: "Q: Is it a [hình dạng]?\nA: Yes, it is. / No, it isn't.",
    explanation:
      "Hỏi xem hình dạng có đúng không. Nếu đúng trả lời 'Yes, it is.', nếu sai trả lời 'No, it isn't.'",
    examples: [
      { en: 'Is it a circle? - Yes, it is.', vi: 'Nó có phải hình tròn không? - Vâng, đúng rồi.' },
      { en: "Is it a triangle? - No, it isn't. It is a square.", vi: 'Nó có phải hình tam giác không? - Không phải đâu, nó là hình vuông.' },
    ],
  },

  // UNIT 2
  {
    id: 'st-u2-1',
    unit: 2,
    title: "5. Hỏi & giới thiệu dụng cụ mỹ thuật: 'What's this? - This is...'",
    titleVi: "Đây là cái gì? - Đây là...",
    pattern: "Q: What's this?\nA: This is [dụng cụ mỹ thuật].",
    explanation:
      "Với các chất liệu mỹ thuật như paint (màu vẽ), paper (giấy vẽ), chalk (phấn), yarn (len), glue (keo), tape (băng dính), ta không dùng 'a/an' mà nói thẳng: 'This is paint.', 'This is glue.'",
    examples: [
      { en: "What's this? - This is paint.", vi: 'Đây là cái gì? - Đây là màu vẽ.' },
      { en: "What's this? - This is yarn.", vi: 'Đây là cái gì? - Đây là sợi len.' },
      { en: "What's this? - This is glue.", vi: 'Đây là cái gì? - Đây là keo dán.' },
    ],
    tip: "Chú ý: paint, paper, chalk, yarn, glue, tape không có 'a' ở phía trước bé nhé!",
  },
  {
    id: 'st-u2-2',
    unit: 2,
    title: "6. Hỏi màu sắc: 'What color is it?'",
    titleVi: "Nó màu gì vậy?",
    pattern: "Q: What color is it?\nA: It's [màu sắc].\nHoặc: It's a [đồ vật]. It's [màu sắc].",
    explanation:
      "Dùng để hỏi màu sắc của một vật. Khi tả đồ vật có màu gì, ta có thể nói 'It's red.' hoặc ghép 'It's a blue backpack.'",
    examples: [
      { en: "What color is it? - It's red.", vi: 'Nó màu gì vậy? - Nó màu đỏ.' },
      { en: "It's a backpack. It's blue.", vi: 'Nó là chiếc ba lô. Nó màu xanh da trời.' },
    ],
  },
  {
    id: 'st-u2-3',
    unit: 2,
    title: "7. Pha màu & Bài học chia sẻ: 'Let's share.'",
    titleVi: "Pha trộn màu sắc & Chia sẻ cùng bạn",
    pattern: "[Màu 1] and [Màu 2] make [Màu mới].\nLet's share! - OK.",
    explanation:
      "Cách nói khi pha 2 màu lại với nhau trong môn Mỹ thuật và câu rủ bạn cùng chia sẻ đồ dùng học tập.",
    examples: [
      { en: 'Blue and yellow make green.', vi: 'Màu xanh da trời và màu vàng tạo thành màu xanh lá cây.' },
      { en: 'Red and yellow make orange.', vi: 'Màu đỏ và màu vàng tạo thành màu cam.' },
      { en: "Let's share. - OK! Cool!", vi: 'Chúng mình cùng dùng chung nhé. - Được thôi! Tuyệt quá!' },
    ],
  },

  // UNIT 3
  {
    id: 'st-u3-1',
    unit: 3,
    title: "8. Hỏi tuổi: 'How old are you?'",
    titleVi: "Bạn mấy tuổi rồi?",
    pattern: "Q: How old are you?\nA: I'm [số tuổi: seven / eight...].",
    explanation:
      "Dùng trong tiệc sinh nhật hoặc khi làm quen để hỏi tuổi. 'I'm' = 'I am'.",
    examples: [
      { en: "How old are you? - I'm seven.", vi: 'Bạn mấy tuổi? - Mình 7 tuổi.' },
      { en: "How old are you? - I'm eight.", vi: 'Bạn mấy tuổi? - Mình 8 tuổi.' },
    ],
  },
  {
    id: 'st-u3-2',
    unit: 3,
    title: "9. Hỏi số lượng đồ chơi: 'How many...?'",
    titleVi: "Có bao nhiêu món đồ chơi?",
    pattern: "Q: How many [đồ chơi thêm -s]?\nA: One [số ít] / Two [số nhiều thêm -s].",
    explanation:
      "Nếu chỉ có 1 ta dùng từ gốc: 'One doll', 'One ball', 'One car'. Từ 2 trở lên ta thêm chữ 's' ở sau: 'Two dolls', 'Three cars', 'Four kites'.",
    examples: [
      { en: 'How many dolls? - One doll. / Two dolls.', vi: 'Có mấy búp bê? - Một búp bê. / Hai búp bê.' },
      { en: 'How many kites? - Three kites!', vi: 'Có mấy con diều? - Ba con diều!' },
    ],
    tip: "Ghi nhớ: 1 cái không có 's', từ 2 cái trở lên nhớ thêm 's' ở đuôi nhé!",
  },
  {
    id: 'st-u3-3',
    unit: 3,
    title: "10. Giới thiệu đồ mình có: 'I have...'",
    titleVi: "Mình có...",
    pattern: "I have [số lượng] [đồ chơi].",
    explanation:
      "Dùng khi khoe những món đồ chơi bé đang có trong phòng.",
    examples: [
      { en: 'I have one game.', vi: 'Mình có một bộ cờ trò chơi.' },
      { en: 'I have seven cards.', vi: 'Mình có bảy tấm thẻ bài.' },
      { en: 'I have twelve marbles.', vi: 'Mình có mười hai viên bi.' },
    ],
  },
];

// ======================= EXERCISE QUESTIONS =======================

// Dạng 1: Multiple Choice (A, B, C)
export const MULTIPLE_CHOICE_QUESTIONS: MultipleChoiceQuestion[] = [
  {
    id: 'mc-1',
    unit: 1,
    question: "What is it? - It's a ______.",
    questionVi: 'Nó là cái gì? - Nó là cây ______.',
    illustration: 'pen',
    options: [
      { label: 'A', text: 'pen' },
      { label: 'B', text: 'eraser' },
      { label: 'C', text: 'chair' },
    ],
    correctAnswer: 'A',
    explanation: 'Hình minh họa là cây bút mực (pen).',
  },
  {
    id: 'mc-2',
    unit: 1,
    question: "It's ______ eraser.",
    questionVi: 'Nó là một cục tẩy. (Chọn a hay an)',
    illustration: 'eraser',
    options: [
      { label: 'A', text: 'a' },
      { label: 'B', text: 'an' },
      { label: 'C', text: 'two' },
    ],
    correctAnswer: 'B',
    explanation: "Từ 'eraser' bắt đầu bằng chữ 'e' nên đi với 'an' (an eraser).",
  },
  {
    id: 'mc-3',
    unit: 1,
    question: "What is it? - It's a ______.",
    questionVi: 'Nó là cái gì? - Nó là cây ______.',
    illustration: 'ruler',
    options: [
      { label: 'A', text: 'notebook' },
      { label: 'B', text: 'ruler' },
      { label: 'C', text: 'desk' },
    ],
    correctAnswer: 'B',
    explanation: 'Hình minh họa là cây thước kẻ (ruler).',
  },
  {
    id: 'mc-4',
    unit: 1,
    question: 'Is it a circle?',
    questionVi: 'Nó có phải là hình tròn không?',
    illustration: 'circle',
    options: [
      { label: 'A', text: 'Yes, it is.' },
      { label: 'B', text: "No, it isn't." },
      { label: 'C', text: "It's a book." },
    ],
    correctAnswer: 'A',
    explanation: 'Đúng rồi, hình vẽ là một hình tròn (circle) nên chọn "Yes, it is.".',
  },
  {
    id: 'mc-5',
    unit: 1,
    question: "It's a book. It ______ a notebook.",
    questionVi: 'Nó là quyển sách. Nó không phải là cuốn vở.',
    illustration: 'book',
    options: [
      { label: 'A', text: 'is' },
      { label: 'B', text: "isn't" },
      { label: 'C', text: 'are' },
    ],
    correctAnswer: 'B',
    explanation: "Cấu trúc phủ định: 'It isn't a notebook' (Nó không phải là cuốn vở).",
  },
  {
    id: 'mc-6',
    unit: 2,
    question: "What's this? - This is ______.",
    questionVi: 'Đây là cái gì? - Đây là ______.',
    illustration: 'paint',
    options: [
      { label: 'A', text: 'paint' },
      { label: 'B', text: 'tape' },
      { label: 'C', text: 'chalk' },
    ],
    correctAnswer: 'A',
    explanation: 'Hình hũ màu vẽ là "paint".',
  },
  {
    id: 'mc-7',
    unit: 2,
    question: "What's this? - This is ______.",
    questionVi: 'Đây là cái gì? - Đây là sợi len.',
    illustration: 'yarn',
    options: [
      { label: 'A', text: 'glue' },
      { label: 'B', text: 'yarn' },
      { label: 'C', text: 'paper' },
    ],
    correctAnswer: 'B',
    explanation: 'Cuộn len sợi trong tiếng Anh là "yarn".',
  },
  {
    id: 'mc-8',
    unit: 2,
    question: "What color is it? - It's ______.",
    questionVi: 'Nó là màu gì? - Nó màu xanh da trời.',
    illustration: 'color-blue',
    options: [
      { label: 'A', text: 'red' },
      { label: 'B', text: 'blue' },
      { label: 'C', text: 'yellow' },
    ],
    correctAnswer: 'B',
    explanation: 'Vệt màu xanh da trời là "blue".',
  },
  {
    id: 'mc-9',
    unit: 2,
    question: 'Blue and yellow make ______.',
    questionVi: 'Màu xanh da trời và vàng tạo thành màu ______.',
    illustration: 'color-green',
    options: [
      { label: 'A', text: 'green' },
      { label: 'B', text: 'black' },
      { label: 'C', text: 'purple' },
    ],
    correctAnswer: 'A',
    explanation: 'Màu xanh da trời (blue) pha với màu vàng (yellow) sẽ ra màu xanh lá cây (green).',
  },
  {
    id: 'mc-10',
    unit: 3,
    question: "How old are you? [Bánh có 7 cây nến]",
    questionVi: 'Bạn mấy tuổi rồi? (Bé đếm số nến trên bánh nhé)',
    illustration: 'cake-7',
    options: [
      { label: 'A', text: "I'm six." },
      { label: 'B', text: "I'm seven." },
      { label: 'C', text: "I'm eight." },
    ],
    correctAnswer: 'B',
    explanation: 'Bánh sinh nhật có 7 cây nến, nên bạn ấy 7 tuổi: "I\'m seven."',
  },
  {
    id: 'mc-11',
    unit: 3,
    question: 'How many dolls? [Hình 2 bạn búp bê]',
    questionVi: 'Có bao nhiêu búp bê?',
    illustration: 'dolls',
    options: [
      { label: 'A', text: 'One doll' },
      { label: 'B', text: 'Two dolls' },
      { label: 'C', text: 'Two doll' },
    ],
    correctAnswer: 'B',
    explanation: 'Có 2 bạn búp bê nên phải có chữ "s" ở sau: "Two dolls".',
  },
  {
    id: 'mc-12',
    unit: 3,
    question: 'I have twelve ______.',
    questionVi: 'Mình có 12 viên bi.',
    illustration: 'marbles',
    options: [
      { label: 'A', text: 'marble' },
      { label: 'B', text: 'marbles' },
      { label: 'C', text: 'game' },
    ],
    correctAnswer: 'B',
    explanation: 'Số lượng 12 là số nhiều nên cần thêm "s" -> "marbles".',
  },
];

// Dạng 2: Look at the picture and the word: Write Tick (✓) or Cross (✗)
export const TICK_CROSS_QUESTIONS: TickCrossQuestion[] = [
  {
    id: 'tc-1',
    unit: 1,
    word: 'pencil',
    illustration: 'pencil',
    isCorrect: true,
    explanation: 'Đúng (✓)! Hình này chính là cây bút chì (pencil).',
  },
  {
    id: 'tc-2',
    unit: 1,
    word: 'chair',
    illustration: 'desk',
    isCorrect: false,
    correctWordIfFalse: 'desk',
    explanation: 'Sai (✗)! Hình này là cái bàn học (desk), không phải ghế (chair).',
  },
  {
    id: 'tc-3',
    unit: 1,
    word: 'backpack',
    illustration: 'backpack',
    isCorrect: true,
    explanation: 'Đúng (✓)! Hình này là chiếc ba lô (backpack).',
  },
  {
    id: 'tc-4',
    unit: 1,
    word: 'triangle',
    illustration: 'triangle',
    isCorrect: true,
    explanation: 'Đúng (✓)! Hình này là hình tam giác (triangle).',
  },
  {
    id: 'tc-5',
    unit: 1,
    word: 'square',
    illustration: 'circle',
    isCorrect: false,
    correctWordIfFalse: 'circle',
    explanation: 'Sai (✗)! Đây là hình tròn (circle), không phải hình vuông (square).',
  },
  {
    id: 'tc-6',
    unit: 2,
    word: 'glue',
    illustration: 'glue',
    isCorrect: true,
    explanation: 'Đúng (✓)! Đây là lọ keo dán (glue).',
  },
  {
    id: 'tc-7',
    unit: 2,
    word: 'chalk',
    illustration: 'tape',
    isCorrect: false,
    correctWordIfFalse: 'tape',
    explanation: 'Sai (✗)! Đây là cuộn băng dính (tape), không phải phấn viết (chalk).',
  },
  {
    id: 'tc-8',
    unit: 2,
    word: 'red',
    illustration: 'color-red',
    isCorrect: true,
    explanation: 'Đúng (✓)! Vệt màu này là màu đỏ (red).',
  },
  {
    id: 'tc-9',
    unit: 2,
    word: 'green',
    illustration: 'color-yellow',
    isCorrect: false,
    correctWordIfFalse: 'yellow',
    explanation: 'Sai (✗)! Đây là màu vàng (yellow), không phải màu xanh lá cây (green).',
  },
  {
    id: 'tc-10',
    unit: 3,
    word: 'kite',
    illustration: 'kite',
    isCorrect: true,
    explanation: 'Đúng (✓)! Đây là con diều (kite).',
  },
  {
    id: 'tc-11',
    unit: 3,
    word: 'car',
    illustration: 'ball',
    isCorrect: false,
    correctWordIfFalse: 'ball',
    explanation: 'Sai (✗)! Đây là quả bóng (ball), không phải xe ô tô (car).',
  },
  {
    id: 'tc-12',
    unit: 3,
    word: 'puzzle',
    illustration: 'puzzle',
    isCorrect: true,
    explanation: 'Đúng (✓)! Đây là bộ tranh ghép hình (puzzle).',
  },
];

// Dạng 3: Unscramble letters (Sắp xếp lại chữ cái)
export const UNSCRAMBLE_QUESTIONS: UnscrambleQuestion[] = [
  {
    id: 'un-1',
    unit: 1,
    word: 'pen',
    scrambled: ['e', 'p', 'n'],
    illustration: 'pen',
    hintVi: 'Cây bút mực (3 chữ cái)',
  },
  {
    id: 'un-2',
    unit: 1,
    word: 'book',
    scrambled: ['o', 'b', 'k', 'o'],
    illustration: 'book',
    hintVi: 'Quyển sách (4 chữ cái)',
  },
  {
    id: 'un-3',
    unit: 1,
    word: 'desk',
    scrambled: ['s', 'd', 'k', 'e'],
    illustration: 'desk',
    hintVi: 'Bàn học sinh (4 chữ cái)',
  },
  {
    id: 'un-4',
    unit: 1,
    word: 'ruler',
    scrambled: ['u', 'r', 'l', 'e', 'r'],
    illustration: 'ruler',
    hintVi: 'Cây thước kẻ (5 chữ cái)',
  },
  {
    id: 'un-5',
    unit: 2,
    word: 'paint',
    scrambled: ['a', 'p', 't', 'n', 'i'],
    illustration: 'paint',
    hintVi: 'Hũ màu vẽ (5 chữ cái)',
  },
  {
    id: 'un-6',
    unit: 2,
    word: 'glue',
    scrambled: ['u', 'g', 'e', 'l'],
    illustration: 'glue',
    hintVi: 'Lọ keo dán (4 chữ cái)',
  },
  {
    id: 'un-7',
    unit: 2,
    word: 'blue',
    scrambled: ['l', 'b', 'e', 'u'],
    illustration: 'color-blue',
    hintVi: 'Màu xanh da trời (4 chữ cái)',
  },
  {
    id: 'un-8',
    unit: 2,
    word: 'chalk',
    scrambled: ['h', 'c', 'l', 'a', 'k'],
    illustration: 'chalk',
    hintVi: 'Phấn viết bảng (5 chữ cái)',
  },
  {
    id: 'un-9',
    unit: 3,
    word: 'ball',
    scrambled: ['l', 'b', 'a', 'l'],
    illustration: 'ball',
    hintVi: 'Quả bóng tròn (4 chữ cái)',
  },
  {
    id: 'un-10',
    unit: 3,
    word: 'kite',
    scrambled: ['t', 'k', 'i', 'e'],
    illustration: 'kite',
    hintVi: 'Con diều giấy (4 chữ cái)',
  },
  {
    id: 'un-11',
    unit: 3,
    word: 'doll',
    scrambled: ['o', 'd', 'l', 'l'],
    illustration: 'doll',
    hintVi: 'Em búp bê xinh (4 chữ cái)',
  },
  {
    id: 'un-12',
    unit: 3,
    word: 'game',
    scrambled: ['m', 'g', 'e', 'a'],
    illustration: 'game',
    hintVi: 'Bộ trò chơi cờ bàn (4 chữ cái)',
  },
];

// Dạng 4: Look at the picture and write 1-word answer
export const ONE_WORD_QUESTIONS: OneWordQuestion[] = [
  {
    id: 'ow-1',
    unit: 1,
    prompt: 'Nhìn hình và viết 1 từ tiếng Anh:',
    illustration: 'pencil',
    answer: 'pencil',
    hint: 'Bắt đầu bằng chữ p...... (6 chữ cái)',
  },
  {
    id: 'ow-2',
    unit: 1,
    prompt: 'Nhìn hình và viết 1 từ tiếng Anh:',
    illustration: 'chair',
    answer: 'chair',
    hint: 'Bắt đầu bằng chữ c...... (5 chữ cái)',
  },
  {
    id: 'ow-3',
    unit: 1,
    prompt: 'Nhìn hình và viết 1 từ chỉ hình tròn:',
    illustration: 'circle',
    answer: 'circle',
    hint: 'Bắt đầu bằng chữ c...... (6 chữ cái)',
  },
  {
    id: 'ow-4',
    unit: 1,
    prompt: 'Nhìn hình và viết 1 từ tiếng Anh:',
    illustration: 'eraser',
    answer: 'eraser',
    hint: 'Bắt đầu bằng chữ e...... (6 chữ cái)',
  },
  {
    id: 'ow-5',
    unit: 2,
    prompt: 'Nhìn hình và viết tên vật liệu này:',
    illustration: 'tape',
    answer: 'tape',
    hint: 'Bắt đầu bằng chữ t...... (4 chữ cái)',
  },
  {
    id: 'ow-6',
    unit: 2,
    prompt: 'Nhìn hình và viết tên màu sắc này:',
    illustration: 'color-red',
    answer: 'red',
    hint: 'Bắt đầu bằng chữ r...... (3 chữ cái)',
  },
  {
    id: 'ow-7',
    unit: 2,
    prompt: 'Nhìn hình và viết tên màu sắc này:',
    illustration: 'color-yellow',
    answer: 'yellow',
    hint: 'Bắt đầu bằng chữ y...... (6 chữ cái)',
  },
  {
    id: 'ow-8',
    unit: 2,
    prompt: 'Nhìn hình và viết tên cuộn sợi này:',
    illustration: 'yarn',
    answer: 'yarn',
    hint: 'Bắt đầu bằng chữ y...... (4 chữ cái)',
  },
  {
    id: 'ow-9',
    unit: 3,
    prompt: 'Nhìn hình và viết 1 từ tiếng Anh:',
    illustration: 'car',
    answer: 'car',
    hint: 'Bắt đầu bằng chữ c...... (3 chữ cái)',
  },
  {
    id: 'ow-10',
    unit: 3,
    prompt: 'Bé đếm số nến và viết chữ số bằng tiếng Anh (7):',
    illustration: 'cake-7',
    answer: 'seven',
    hint: 'Bắt đầu bằng chữ s...... (5 chữ cái)',
  },
  {
    id: 'ow-11',
    unit: 3,
    prompt: 'Nhìn hình và viết tên món đồ chơi này:',
    illustration: 'puzzle',
    answer: 'puzzle',
    hint: 'Bắt đầu bằng chữ p...... (6 chữ cái)',
  },
  {
    id: 'ow-12',
    unit: 3,
    prompt: 'Nhìn hình và viết tên đồ chơi này:',
    illustration: 'card',
    answer: 'card',
    acceptableAnswers: ['card', 'cards'],
    hint: 'Bắt đầu bằng chữ c...... (4 chữ cái)',
  },
];
