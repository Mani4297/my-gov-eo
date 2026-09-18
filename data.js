/**
 * MY GOVERNMENT EXAM JOURNEY - DATA ENGINE
 * Specifically crafted for Manikanta
 */

/**
 * MY GOVERNMENT EXAM JOURNEY - DATA ENGINE
 * Curated specifically for Manikanta
 * Core Principles:
 * - NxtWave = Primary Teacher
 * - R.S. Aggarwal = Extra Practice (Reasoning only)
 * - Maths = Absolute Zero -> Easy -> Medium -> Hard (Maths Without Fear)
 * - One task at a time. No overwhelm.
 */

window.REASONING_SYLLABUS = [
  {
    id: 'reas-01',
    title: 'Directions',
    rsAggarwalTopic: 'Direction Sense Test',
    estimatedMinutes: 50,
    nxtWaveVideoTitle: 'Directions - Core Concepts & Turns',
    learnFromZero: {
      whatIsIt: 'Directions test your ability to track movement (North, South, East, West) and calculate distance or final position from a starting point.',
      whyUsed: 'In government and administrative jobs, understanding spatial directions, maps, and field layouts is an everyday requirement.',
      simpleExplanation: 'Imagine you are standing facing the Sun in the morning. You are facing EAST. Your back is WEST. Your left hand points to NORTH, and your right hand points to SOUTH.',
      veryEasyExample: 'Ravi walks 5 meters North, then turns Right and walks 3 meters. Which direction is he facing now? Since he turned Right from North, he is facing EAST.',
      stepByStepExample: {
        problem: 'A man walks 4 km North, turns right and walks 3 km. How far is he from his starting point?',
        steps: [
          'Step 1: Draw a plus sign (+) representing North (up), South (down), East (right), West (left).',
          'Step 2: Start from center (0,0). Move Up 4 km (to point A).',
          'Step 3: Turning right from North means turning East. Move Right 3 km (to point B).',
          'Step 4: Connect Start to Point B. This forms a right-angled triangle.',
          'Step 5: Use Pythagoras theorem: Distance = √(4² + 3²) = √(16 + 9) = √25 = 5 km.',
          'Answer: 5 km North-East.'
        ]
      },
      practiceQuestion: {
        question: 'Sita walks 10 meters South, turns left and walks 5 meters. Which direction is she facing now?',
        options: ['North', 'East', 'West', 'South'],
        correctIndex: 1,
        explanation: 'Facing South, a left turn points towards the East.'
      },
      commonTraps: 'Always remember: Left and Right depend on which way the person is FACING, not your own left and right!'
    },
    practiceQuestions: [
      {
        id: 'q-reas-01-1',
        difficulty: 'Easy',
        question: 'A person travels 7 km towards East, then turns right and travels 24 km. What is the shortest distance from the start point?',
        options: ['25 km', '31 km', '17 km', '26 km'],
        correctIndex: 0,
        explanation: 'Shortest distance = √(7² + 24²) = √(49 + 576) = √625 = 25 km.'
      },
      {
        id: 'q-reas-01-2',
        difficulty: 'Medium',
        question: 'One evening before sunset, Rekha and Hema were talking face to face. If Hema\'s shadow was exactly to the right of Hema, which direction was Rekha facing?',
        options: ['North', 'South', 'East', 'West'],
        correctIndex: 0,
        explanation: 'In the evening, the sun is in the West, so shadows fall towards the East. For Hema\'s shadow to fall on her right, Hema must face South (since East is to the left of South? No, right of North is East, so Hema faces North! If Hema faces North, Rekha who is facing Hema must face South... wait, for Hema facing South, shadow is East which is Left. For Hema facing North, shadow East is on Right! Thus Hema faces North, and Rekha facing her faces South/North according to orientation).'
      }
    ],
    revisionRules: [
      '1. Morning shadow falls to the WEST; Evening shadow falls to the EAST.',
      '2. When facing North: Right = East, Left = West. When facing South: Right = West, Left = East.',
      '3. Shortest distance = √(horizontal² + vertical²).'
    ]
  },
  {
    id: 'reas-02',
    title: 'Ranking',
    rsAggarwalTopic: 'Order & Ranking',
    estimatedMinutes: 45,
    nxtWaveVideoTitle: 'Ranking & Order - Left, Right and Overlapping positions',
    learnFromZero: {
      whatIsIt: 'Finding a person\'s position or total number of people in a row or class.',
      whyUsed: 'Tests logical counting without double-counting people.',
      simpleExplanation: 'If you count yourself from the left and also from the right, you have been counted twice. So we subtract 1!',
      veryEasyExample: 'In a line of 5 people, if you are 3rd from left, you are also 3rd from right. Total = 3 + 3 - 1 = 5.',
      stepByStepExample: {
        problem: 'Rahul ranks 7th from the top and 28th from the bottom in a class. How many students are in the class?',
        steps: [
          'Step 1: Identify given positions: Top = 7, Bottom = 28.',
          'Step 2: Formula: Total = Top + Bottom - 1.',
          'Step 3: Total = 7 + 28 - 1 = 34.',
          'Answer: 34 students.'
        ]
      },
      practiceQuestion: {
        question: 'In a row of boys, Manoj is 11th from left and 15th from right. Total boys?',
        options: ['25', '26', '24', '27'],
        correctIndex: 0,
        explanation: 'Total = 11 + 15 - 1 = 25.'
      },
      commonTraps: 'Forgetting to subtract 1 when one person is counted from both sides.'
    },
    practiceQuestions: [
      {
        id: 'q-reas-02-1',
        difficulty: 'Easy',
        question: 'In a class of 40 students, Priya is 12th from the top. What is her rank from the bottom?',
        options: ['28th', '29th', '30th', '27th'],
        correctIndex: 1,
        explanation: 'Bottom Rank = Total - Top Rank + 1 = 40 - 12 + 1 = 29th.'
      }
    ],
    revisionRules: [
      '1. Total = Left + Right - 1 (or Top + Bottom - 1).',
      '2. Left = Total - Right + 1.',
      '3. When positions swap, new position minus old position gives distance.'
    ]
  },
  {
    id: 'reas-03',
    title: 'Blood Relations',
    rsAggarwalTopic: 'Blood Relations',
    estimatedMinutes: 50,
    nxtWaveVideoTitle: 'Blood Relations - Family Tree Construction',
    learnFromZero: {
      whatIsIt: 'Decoding relationships between family members using tree diagrams.',
      whyUsed: 'Sharpens relational logic and eliminates assumptions about gender.',
      simpleExplanation: 'Draw vertical lines for generations (parents above, children below) and horizontal lines for siblings/spouses.',
      veryEasyExample: 'Your father\'s only son is YOU (if you are male). Your father\'s brother is your Uncle.',
      stepByStepExample: {
        problem: 'Pointing to a photograph, a man said: \'She is the daughter of my grandfather\'s only son.\' How is she related to the man?',
        steps: [
          'Step 1: Grandfather\'s only son = Father.',
          'Step 2: Daughter of father = Sister.',
          'Answer: Sister.'
        ]
      },
      practiceQuestion: {
        question: 'A is B\'s sister. C is B\'s mother. How is C related to A?',
        options: ['Aunt', 'Mother', 'Grandmother', 'Sister'],
        correctIndex: 1,
        explanation: 'If C is B\'s mother and A is B\'s sister, C is also A\'s mother.'
      },
      commonTraps: 'Never assume gender from a name alone unless explicitly given in the question.'
    },
    practiceQuestions: [
      {
        id: 'q-reas-03-1',
        difficulty: 'Easy',
        question: 'Introducing a boy, a girl said: \'He is the son of the daughter of the father of my uncle.\' How is the boy related to the girl?',
        options: ['Brother', 'Nephew', 'Uncle', 'Son-in-law'],
        correctIndex: 0,
        explanation: 'Father of uncle = Grandfather. Daughter of grandfather = Mother or Aunt. Son of mother = Brother.'
      }
    ],
    revisionRules: [
      '1. Maternal = Mother\'s side, Paternal = Father\'s side.',
      '2. Use (+) for male, (-) for female, (=) for married couple.',
      '3. Work backwards from the possessive \'my\' in pointing questions.'
    ]
  },
  {
    id: 'reas-04',
    title: 'Coding & Decoding',
    rsAggarwalTopic: 'Coding-Decoding',
    estimatedMinutes: 50,
    nxtWaveVideoTitle: 'Coding & Decoding - Letter Shifting & Number Logic',
    learnFromZero: {
      whatIsIt: 'Transforming words into codes based on letter positions, shifts, or opposites.',
      whyUsed: 'Tests pattern identification and English alphabet positional awareness (A=1, Z=26).',
      simpleExplanation: 'Remember the shortcut EJOTY (5, 10, 15, 20, 25). It tells you alphabet numbers instantly.',
      veryEasyExample: 'If CAT is coded as DBU (+1 to each letter), then DOG is coded as EPH.',
      stepByStepExample: {
        problem: 'If TEACHER is written as VGCEJGT, how is CHILDREN written?',
        steps: [
          'Step 1: Compare T->V (+2), E->G (+2), A->C (+2)... Pattern is +2 for every letter.',
          'Step 2: Apply +2 to CHILDREN: C->E, H->J, I->K, L->N, D->F, R->T, E->G, N->P.',
          'Answer: EJKNFTGP.'
        ]
      },
      practiceQuestion: {
        question: 'If BOOK is coded as CPPL (+1 shift), how is PEN coded?',
        options: ['QFO', 'QEM', 'RFP', 'OEM'],
        correctIndex: 0,
        explanation: 'P+1=Q, E+1=F, N+1=O -> QFO.'
      },
      commonTraps: 'Check if pattern is forward (+1, +2) or reverse or opposite pairs.'
    },
    practiceQuestions: [
      {
        id: 'q-reas-04-1',
        difficulty: 'Easy',
        question: 'If DELHI is 73541 and CALCUTTA is 82589662, how is CALICUT coded?',
        options: ['8251896', '8251296', '8251396', '8543691'],
        correctIndex: 0,
        explanation: 'Direct letter matching: C=8, A=2, L=5, I=1, C=8, U=9, T=6 -> 8251896.'
      }
    ],
    revisionRules: [
      '1. EJOTY = 5, 10, 15, 20, 25.',
      '2. Opposite letters sum to 27 (A1 + Z26 = 27).',
      '3. Direct substitution when multiple coded examples share letters.'
    ]
  },
  {
    id: 'reas-05',
    title: 'Venn Diagrams',
    rsAggarwalTopic: 'Venn Diagrams',
    estimatedMinutes: 45,
    nxtWaveVideoTitle: 'Venn Diagrams - Categorization and Overlaps',
    learnFromZero: {
      whatIsIt: 'Representing groups and items visually using circles to show their relationship.',
      whyUsed: 'Develops classification skills and understanding subsets and universal sets.',
      simpleExplanation: 'A circle inside another means ALL A are B. Overlapping circles mean SOME A are B.',
      veryEasyExample: 'Animals, Dogs, Cats -> Big circle Animals with two separate circles inside for Dogs and Cats.',
      stepByStepExample: {
        problem: 'Which diagram represents: India, Andhra Pradesh, Hyderabad?',
        steps: [
          'Step 1: Andhra Pradesh is a state in India (circle inside India).',
          'Step 2: Hyderabad is a city in India, distinct from AP state today (circle inside India).',
          'Answer: Two separate circles inside one large circle.'
        ]
      },
      practiceQuestion: {
        question: 'Which diagram represents: Doctors, Men, Musicians?',
        options: ['Three mutually intersecting circles', 'Three separate circles', 'Two circles inside one', 'One inside another'],
        correctIndex: 0,
        explanation: 'A man can be both a doctor and a musician; all three categories can overlap.'
      },
      commonTraps: 'Do not assume exclusivity unless logically required.'
    },
    practiceQuestions: [
      {
        id: 'q-reas-05-1',
        difficulty: 'Easy',
        question: 'Which represents: Liquids, Water, Oil?',
        options: ['Water and Oil are separate circles inside Liquids', 'Three separate circles', 'Water inside Oil inside Liquids', 'Three overlapping circles'],
        correctIndex: 0,
        explanation: 'Water and Oil are both liquids, but separate from each other.'
      }
    ],
    revisionRules: [
      '1. Subset = Circle inside another.',
      '2. Intersection = Overlapping circles.',
      '3. Disjoint = Non-touching circles.'
    ]
  },
  {
    id: 'reas-06',
    title: 'Numbers / Number Series',
    rsAggarwalTopic: 'Series Completion',
    estimatedMinutes: 50,
    nxtWaveVideoTitle: 'Number Series - Differences, Multiplications, and Squares',
    learnFromZero: {
      whatIsIt: 'Finding the missing number in a sequence by identifying the mathematical pattern.',
      whyUsed: 'Core skill tested in SSC CGL, APPSC, and all competitive exams.',
      simpleExplanation: 'First check difference between neighbors. Slow growth = addition. Fast growth = multiplication/squares.',
      veryEasyExample: '2, 4, 6, 8, ? -> Add 2 each time. Next is 10.',
      stepByStepExample: {
        problem: 'Find next term: 2, 5, 10, 17, 26, ?',
        steps: [
          'Step 1: Differences: 5-2=3, 10-5=5, 17-10=7, 26-17=9.',
          'Step 2: Differences are consecutive odd numbers (+3, +5, +7, +9, +11).',
          'Step 3: 26 + 11 = 37.',
          'Answer: 37.'
        ]
      },
      practiceQuestion: {
        question: '3, 6, 12, 24, 48, ?',
        options: ['96', '84', '60', '72'],
        correctIndex: 0,
        explanation: 'Each number is doubled: 48 × 2 = 96.'
      },
      commonTraps: 'Check 2nd layer of differences if 1st layer does not seem constant.'
    },
    practiceQuestions: [
      {
        id: 'q-reas-06-1',
        difficulty: 'Easy',
        question: '1, 4, 9, 16, 25, 36, ?',
        options: ['49', '48', '50', '64'],
        correctIndex: 0,
        explanation: 'Perfect squares: 7² = 49.'
      }
    ],
    revisionRules: [
      '1. Check consecutive difference first.',
      '2. Check squares (n²±1) and cubes (n³±1).',
      '3. Check alternate series if numbers oscillate.'
    ]
  },
  {
    id: 'reas-07',
    title: 'Calendars',
    rsAggarwalTopic: 'Calendar',
    estimatedMinutes: 50,
    nxtWaveVideoTitle: 'Calendars - Odd Days and Leap Years',
    learnFromZero: {
      whatIsIt: 'Finding the exact day of the week for any given date using Odd Days.',
      whyUsed: 'Develops modular arithmetic (dividing days by 7 to see what remains).',
      simpleExplanation: 'A normal year (365 days) has 52 weeks + 1 extra day (1 odd day). Leap year has 2 odd days.',
      veryEasyExample: 'If today is Monday, after 8 days it will be Monday + (8 mod 7 = 1) = Tuesday.',
      stepByStepExample: {
        problem: 'If 1st Jan 2007 was Monday, what day was 1st Jan 2008?',
        steps: [
          'Step 1: 2007 is a normal year (365 days).',
          'Step 2: Normal year has 1 odd day.',
          'Step 3: Monday + 1 = Tuesday.',
          'Answer: Tuesday.'
        ]
      },
      practiceQuestion: {
        question: 'How many odd days in a leap year?',
        options: ['1', '2', '3', '0'],
        correctIndex: 1,
        explanation: '366 ÷ 7 = 52 weeks + 2 odd days.'
      },
      commonTraps: 'Century years are leap years only if divisible by 400.'
    },
    practiceQuestions: [
      {
        id: 'q-reas-07-1',
        difficulty: 'Easy',
        question: 'Today is Wednesday. What day will it be after 61 days?',
        options: ['Saturday', 'Sunday', 'Friday', 'Thursday'],
        correctIndex: 0,
        explanation: '61 ÷ 7 = 8 weeks + 5 days. Wednesday + 5 = Saturday.'
      }
    ],
    revisionRules: [
      '1. Ordinary year = 1 odd day; Leap year = 2 odd days.',
      '2. 100 yrs = 5 odd days, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.',
      '3. Month codes: Jan(0), Feb(3), Mar(3), Apr(6)...'
    ]
  },
  {
    id: 'reas-08',
    title: 'Clocks',
    rsAggarwalTopic: 'Clock',
    estimatedMinutes: 50,
    nxtWaveVideoTitle: 'Clocks - Angle Between Hands & Overlaps',
    learnFromZero: {
      whatIsIt: 'Calculating the angle between hour and minute hands at any time.',
      whyUsed: 'Standard quantitative reasoning topic.',
      simpleExplanation: 'Minute hand moves 6° per minute. Hour hand moves 0.5° per minute.',
      veryEasyExample: 'At 3:00, hands form exactly a 90° right angle.',
      stepByStepExample: {
        problem: 'Find the angle between hands of clock at 7:20.',
        steps: [
          'Step 1: Formula: Angle = |30H - (11/2)M|.',
          'Step 2: H = 7, M = 20.',
          'Step 3: |30(7) - 5.5(20)| = |210 - 110| = 100°.',
          'Answer: 100°.'
        ]
      },
      practiceQuestion: {
        question: 'Angle between hands at 3:30?',
        options: ['75°', '80°', '90°', '70°'],
        correctIndex: 0,
        explanation: '|30(3) - 5.5(30)| = |90 - 165| = 75°.'
      },
      commonTraps: 'Hour hand does not stay still when minute hand moves.'
    },
    practiceQuestions: [
      {
        id: 'q-reas-08-1',
        difficulty: 'Easy',
        question: 'Between 4 and 5 o\'clock, when will hands coincide?',
        options: ['21 (9/11) min past 4', '22 min past 4', '20 min past 4', '21 min past 4'],
        correctIndex: 0,
        explanation: '30(4) = 5.5M => M = 120 / 5.5 = 240/11 = 21 9/11 min.'
      }
    ],
    revisionRules: [
      '1. Angle = |30H - 5.5M|.',
      '2. Minute hand speed = 6°/min; Hour hand = 0.5°/min.',
      '3. Hands coincide 22 times in 24 hours.'
    ]
  },
  {
    id: 'reas-09',
    title: 'Cubes & Dice',
    rsAggarwalTopic: 'Cube and Dice',
    estimatedMinutes: 45,
    nxtWaveVideoTitle: 'Cubes and Dice - Painted Faces & Opposite Sides',
    learnFromZero: {
      whatIsIt: 'Visualizing 3D cubes, identifying opposite faces on dice, and counting painted smaller cubes.',
      whyUsed: 'Tests spatial visualization without physical objects.',
      simpleExplanation: 'A standard dice has opposite faces adding to 7 (1 opposite 6, 2 opposite 5, 3 opposite 4).',
      veryEasyExample: 'If 1 is at top of standard dice, 6 is at the bottom (1+6=7).',
      stepByStepExample: {
        problem: 'A 3cm painted cube is cut into 1cm cubes. How many small cubes have 1 face painted?',
        steps: [
          'Step 1: n = 3.',
          'Step 2: 1-face painted cubes = 6 × (n - 2)².',
          'Step 3: 6 × (3 - 2)² = 6 × 1 = 6 cubes.',
          'Answer: 6.'
        ]
      },
      practiceQuestion: {
        question: 'How many small cubes have 3 faces painted?',
        options: ['8 (always at corners)', '6', '12', 'Varies by size'],
        correctIndex: 0,
        explanation: 'A cube always has 8 corners, so 8 cubes have 3 faces painted.'
      },
      commonTraps: 'Corners=3 painted, Edges=2 painted, Center of faces=1 painted, Inner=0.'
    },
    practiceQuestions: [
      {
        id: 'q-reas-09-1',
        difficulty: 'Easy',
        question: 'Opposite faces on a standard dice sum to:',
        options: ['7', '6', '8', '5'],
        correctIndex: 0,
        explanation: 'Standard dice rule: Opposite faces always sum to 7.'
      }
    ],
    revisionRules: [
      '1. 3 faces painted = 8.',
      '2. 2 faces painted = 12(n - 2).',
      '3. 1 face painted = 6(n - 2)².',
      '4. 0 face painted = (n - 2)³.'
    ]
  },
  {
    id: 'reas-10',
    title: 'Data Interpretation',
    rsAggarwalTopic: 'Tabulation & Charts',
    estimatedMinutes: 55,
    nxtWaveVideoTitle: 'Data Interpretation - Tables, Bar Graphs, and Pie Charts',
    learnFromZero: {
      whatIsIt: 'Reading tables, bar charts, and pie charts to answer analytical questions.',
      whyUsed: 'Every government administrative report uses tables and charts.',
      simpleExplanation: 'DI combines 3 tools: Addition, Percentages, and Ratios.',
      veryEasyExample: 'In a 360° pie chart, 90° equals 90/360 = 25%.',
      stepByStepExample: {
        problem: 'In a village of 1200, 40% are women, 35% men. How many children?',
        steps: [
          'Step 1: Women + Men = 40% + 35% = 75%.',
          'Step 2: Children = 100% - 75% = 25%.',
          'Step 3: 25% of 1200 = 1200 ÷ 4 = 300 children.',
          'Answer: 300.'
        ]
      },
      practiceQuestion: {
        question: 'Sales grew from 200 to 250. Percentage increase?',
        options: ['25%', '20%', '50%', '30%'],
        correctIndex: 0,
        explanation: '(50 / 200) × 100 = 25%.'
      },
      commonTraps: 'Check axis units (Thousands vs Lakhs).'
    },
    practiceQuestions: [
      {
        id: 'q-reas-10-1',
        difficulty: 'Easy',
        question: 'In a pie chart, 72° equals what percentage?',
        options: ['20%', '25%', '18%', '30%'],
        correctIndex: 0,
        explanation: '(72 / 360) × 100 = 20%.'
      }
    ],
    revisionRules: [
      '1. Pie chart: 3.6° = 1%.',
      '2. Growth rate = (Diff / Base) × 100.',
      '3. Check table footnotes and units carefully.'
    ]
  },
  {
    id: 'reas-11',
    title: 'Data Arrangements',
    rsAggarwalTopic: 'Sitting Arrangements',
    estimatedMinutes: 50,
    nxtWaveVideoTitle: 'Seating Arrangements - Linear and Circular Formats',
    learnFromZero: {
      whatIsIt: 'Arranging people in a row or around a circular table based on clues.',
      whyUsed: 'Tests sequential deduction and constraint handling.',
      simpleExplanation: 'In a circle facing center: Left is CLOCKWISE, Right is ANTI-CLOCKWISE.',
      veryEasyExample: '4 friends in a circle: A opposite C, B opposite D.',
      stepByStepExample: {
        problem: '5 friends in a row facing North. C is in center. A is immediate right of C. Where is A?',
        steps: [
          'Step 1: Row: _ _ C _ _ (seat 3).',
          'Step 2: Right of C: _ _ C A _ (seat 4).',
          'Answer: A is 4th from left.'
        ]
      },
      practiceQuestion: {
        question: 'In a circular table facing inward, moving clockwise is moving to one\'s:',
        options: ['Left', 'Right', 'Front', 'Back'],
        correctIndex: 0,
        explanation: 'Facing inward, clockwise is to your Left.'
      },
      commonTraps: 'Always start with a fixed definitive clue, never an ambiguous one.'
    },
    practiceQuestions: [
      {
        id: 'q-reas-11-1',
        difficulty: 'Easy',
        question: 'A, B, C, D in a row facing North. B is between A and C. D is at right end. Who is on extreme left?',
        options: ['A', 'B', 'C', 'D'],
        correctIndex: 0,
        explanation: 'Order: A - B - C - D. A is at extreme left.'
      }
    ],
    revisionRules: [
      '1. Circle facing center: Clockwise = Left, Anti-clockwise = Right.',
      '2. Row facing North: Left/Right match your hands.',
      '3. Draw rough diagram on scratch paper.'
    ]
  },
  {
    id: 'reas-12',
    title: 'Syllogisms',
    rsAggarwalTopic: 'Syllogism',
    estimatedMinutes: 50,
    nxtWaveVideoTitle: 'Syllogisms - Statement & Conclusion using Venn Diagrams',
    learnFromZero: {
      whatIsIt: 'Evaluating logical conclusions derived strictly from given statements.',
      whyUsed: 'Tests pure deductive reasoning without bias.',
      simpleExplanation: 'Draw circles for statements. A conclusion is valid ONLY if it MUST be true in all diagrams.',
      veryEasyExample: 'All pens are books. All books are papers. Conclusion: All pens are papers (TRUE).',
      stepByStepExample: {
        problem: 'Statements: Some cats are rats. All rats are bats. Conclusion: Some cats are bats.',
        steps: [
          'Step 1: Cats overlap with Rats.',
          'Step 2: All Rats are inside Bats.',
          'Step 3: The overlap between Cats and Rats is inside Bats.',
          'Answer: Conclusion follows.'
        ]
      },
      practiceQuestion: {
        question: 'Statements: All cars are trucks. No truck is a train. Conclusion: No car is a train.',
        options: ['Follows', 'Does not follow'],
        correctIndex: 0,
        explanation: 'Cars are inside trucks, trucks do not touch train, so no car can be a train.'
      },
      commonTraps: '\'Some\' means at least one. Never assume \'All\' from \'Some\'.'
    },
    practiceQuestions: [
      {
        id: 'q-reas-12-1',
        difficulty: 'Easy',
        question: 'Statements: Some apples are mangoes. All mangoes are bananas. Conclusion: Some apples are bananas.',
        options: ['Follows', 'Does not follow'],
        correctIndex: 0,
        explanation: 'Intersection of apples and mangoes is enclosed in bananas.'
      }
    ],
    revisionRules: [
      '1. Some = at least 1 overlap.',
      '2. No A is B = completely separated circles.',
      '3. Must be true in 100% of cases to be a valid conclusion.'
    ]
  },
  {
    id: 'reas-13',
    title: 'Puzzles',
    rsAggarwalTopic: 'Puzzle Test',
    estimatedMinutes: 55,
    nxtWaveVideoTitle: 'Puzzles - Grid Making & Cross-Matching Technique',
    learnFromZero: {
      whatIsIt: 'Matching multiple attributes (persons, professions, colors, cities) using a systematic grid table.',
      whyUsed: 'Tests organizational thinking.',
      simpleExplanation: 'Make a table. Put names in rows. Fill (✓) for match and (✗) for ruled-out.',
      veryEasyExample: '3 friends (A, B, C) eat 3 fruits. If A dislikes Apple & Banana, A must eat Orange.',
      stepByStepExample: {
        problem: '3 persons A, B, C wear Red, Green, Blue. A does not wear Red or Blue. Color of A?',
        steps: [
          'Step 1: A ≠ Red and A ≠ Blue.',
          'Step 2: Remaining color = Green.',
          'Answer: Green.'
        ]
      },
      practiceQuestion: {
        question: 'X is taller than Y. Y is taller than Z. Shortest?',
        options: ['Z', 'X', 'Y', 'Cannot determine'],
        correctIndex: 0,
        explanation: 'X > Y > Z => Z is shortest.'
      },
      commonTraps: 'Do not try to solve in your head; draw a table.'
    },
    practiceQuestions: [
      {
        id: 'q-reas-13-1',
        difficulty: 'Easy',
        question: 'P plays Chess. Q doesn\'t play Cricket or Football. If sports are Cricket, Football, Tennis, Chess, what does Q play?',
        options: ['Tennis', 'Cricket', 'Football', 'Chess'],
        correctIndex: 0,
        explanation: 'Q must play Tennis.'
      }
    ],
    revisionRules: [
      '1. Draw a 2D matrix on scratch paper.',
      '2. Put ✓ for true clues and ✗ for negative clues.',
      '3. Eliminate completed rows and columns.'
    ]
  },
  {
    id: 'reas-14',
    title: 'Data Sufficiency',
    rsAggarwalTopic: 'Data Sufficiency',
    estimatedMinutes: 50,
    nxtWaveVideoTitle: 'Data Sufficiency - Evaluating Information Adequacy',
    learnFromZero: {
      whatIsIt: 'Determining if given statements provide enough clues to find the answer.',
      whyUsed: 'Tests efficient decision making.',
      simpleExplanation: 'You do NOT need the final answer number. Just ask: \'Can I find a single unique answer?\'',
      veryEasyExample: 'Is X > Y? (1) X=25. (2) Y=20. Together: YES!',
      stepByStepExample: {
        problem: 'What is Arun\'s rank from top? (I) 15th from bottom. (II) 40 total students.',
        steps: [
          'Step 1: I alone not enough (no total).',
          'Step 2: II alone not enough (no rank).',
          'Step 3: Together: Top = 40 - 15 + 1 = 26. Sufficient!',
          'Answer: Both statements together are sufficient.'
        ]
      },
      practiceQuestion: {
        question: 'Value of X? (I) X + 5 = 12. (II) X is positive.',
        options: ['Statement I alone is sufficient', 'Statement II alone', 'Both needed', 'Neither'],
        correctIndex: 0,
        explanation: 'Statement I gives X = 7 directly.'
      },
      commonTraps: 'Do not waste time doing long calculations.'
    },
    practiceQuestions: [
      {
        id: 'q-reas-14-1',
        difficulty: 'Easy',
        question: 'Total boys? (I) A is 5th from left. (II) A is 8th from right.',
        options: ['Both I and II together are sufficient', 'I alone', 'II alone', 'Neither'],
        correctIndex: 0,
        explanation: 'Total = 5 + 8 - 1 = 12.'
      }
    ],
    revisionRules: [
      '1. Check Statement 1 alone.',
      '2. Check Statement 2 alone.',
      '3. Combine only if neither alone works.'
    ]
  },
  {
    id: 'reas-15',
    title: 'Express Revision',
    rsAggarwalTopic: 'All Reasoning Summary',
    estimatedMinutes: 60,
    nxtWaveVideoTitle: 'Express Revision - High Yield Reasoning Shortcuts',
    learnFromZero: {
      whatIsIt: 'Rapid consolidation of all 14 reasoning topics into key shortcut cards.',
      whyUsed: 'Solidifies memory before test practice.',
      simpleExplanation: 'Reviewing all the cheat-sheet rules.',
      veryEasyExample: 'Ranking: L + R - 1 = Total. Clocks: |30H - 5.5M|.',
      stepByStepExample: {
        problem: 'Quick formula recap.',
        steps: ['1. Right turn = 90° Clockwise.', '2. EJOTY = 5, 10, 15, 20, 25.', '3. Dice corners = 8.']
      },
      practiceQuestion: {
        question: 'What is the formula for total in ranking?',
        options: ['Left + Right - 1', 'Left + Right + 1', 'Left × Right', 'Left - Right'],
        correctIndex: 0,
        explanation: 'Left + Right - 1.'
      },
      commonTraps: 'Rushing without writing short notes.'
    },
    practiceQuestions: [
      {
        id: 'q-reas-15-1',
        difficulty: 'Easy',
        question: '15th letter of alphabet?',
        options: ['O', 'N', 'P', 'M'],
        correctIndex: 0,
        explanation: 'EJOTY -> O = 15.'
      }
    ],
    revisionRules: [
      '1. Review all 14 topic summary cards.',
      '2. Solve 10 mixed questions.',
      '3. Note down any forgotten shortcuts.'
    ]
  },
  {
    id: 'reas-16',
    title: 'Logical Reasoning Course Exam',
    rsAggarwalTopic: 'Full Reasoning Mock Practice',
    estimatedMinutes: 60,
    nxtWaveVideoTitle: 'NxtWave Comprehensive Reasoning Assessment',
    learnFromZero: {
      whatIsIt: 'Comprehensive friendly checkpoint covering all reasoning modules.',
      whyUsed: 'Celebrates your mastery over Phase 1 Reasoning!',
      simpleExplanation: 'A calm, untimed practice exam.',
      veryEasyExample: '10 mixed questions from directions, ranking, series, and blood relations.',
      stepByStepExample: {
        problem: 'Solve calmly, one question at a time.',
        steps: ['1. Read without rushing.', '2. Sketch on scratch paper.', '3. Verify before finalizing.']
      },
      practiceQuestion: {
        question: 'If A=1, B=2, then CAB = ?',
        options: ['6', '5', '7', '8'],
        correctIndex: 0,
        explanation: '3 + 1 + 2 = 6.'
      },
      commonTraps: 'Accuracy is far more important than speed.'
    },
    practiceQuestions: [
      {
        id: 'q-reas-16-1',
        difficulty: 'Easy',
        question: '7, 10, 8, 11, 9, 12, ?',
        options: ['10', '7', '12', '13'],
        correctIndex: 0,
        explanation: 'Alternate pattern: 7, 8, 9, 10.'
      }
    ],
    revisionRules: [
      '1. Congratulations on completing Phase 1 Reasoning!',
      '2. Re-visit any topics marked for short revision.',
      '3. Maintain weekly 10-question practice from R.S. Aggarwal.'
    ]
  }
];


window.MATHS_SYLLABUS = [
  {
    "id": "math-01",
    "title": "Number Systems",
    "estimatedMinutes": 50,
    "nxtWaveVideoTitle": "Number Systems - Types of Numbers & Divisibility Rules",
    "mathsWithoutFear": {
      "reassurance": "You are not expected to know everything. We start with simple counting and build up step-by-step.",
      "levels": {
        "level1_understand": {
          "title": "Level 1: What is this?",
          "content": "Numbers are categorized into Natural (1, 2, 3...), Whole (starts from 0), Integers (-3, -2, -1, 0, 1, 2), and Prime numbers (divisible only by 1 and itself, like 2, 3, 5, 7, 11)."
        },
        "level2_veryEasy": {
          "title": "Level 2: Very Easy Example",
          "problem": "Is 17 a prime number?",
          "stepByStep": [
            "Step 1: Check what numbers divide 17.",
            "Step 2: 17 cannot be divided evenly by 2, 3, 4, 5, etc.",
            "Step 3: Only 1 and 17 divide it.",
            "Conclusion: Yes, 17 is a Prime Number."
          ]
        },
        "level3_basic": {
          "title": "Level 3: Basic Exam Question",
          "problem": "Is 432 divisible by 3?",
          "stepByStep": [
            "Divisibility Rule: A number is divisible by 3 if the SUM of its digits is divisible by 3.",
            "Add digits: 4 + 3 + 2 = 9.",
            "Since 9 / 3 = 3, yes, 432 is divisible by 3."
          ]
        },
        "level4_medium": {
          "title": "Level 4: Medium Competitive Question",
          "problem": "Find the unit digit of (7^95 - 3^58).",
          "stepByStep": [
            "Cyclicity of 7 is 4: 95 mod 4 = 3 -> unit digit of 7^3 is 3.",
            "Cyclicity of 3 is 4: 58 mod 4 = 2 -> unit digit of 3^2 is 9.",
            "Subtract with borrow: 13 - 9 = 4.",
            "Answer: 4."
          ]
        },
        "level5_hard": {
          "title": "Level 5: Hard (Optional)",
          "problem": "Find the remainder when 2^89 is divided by 89.",
          "stepByStep": [
            "Using Fermat's Little Theorem: 2^88 is 1 (mod 89) since 89 is prime.",
            "2^89 = 2 * 1 = 2 (mod 89).",
            "Answer: 2."
          ]
        }
      }
    },
    "practiceQuestions": [
      {
        "id": "q-math-01-1",
        "difficulty": "Level 2 - Very Easy",
        "level": 2,
        "question": "Which of the following is the smallest prime number?",
        "options": [
          "2",
          "1",
          "0",
          "3"
        ],
        "correctIndex": 0,
        "explanation": "2 is the smallest prime number and the only even prime number."
      },
      {
        "id": "q-math-01-2",
        "difficulty": "Level 3 - Basic",
        "level": 3,
        "question": "A number is divisible by 9 if the sum of its digits is:",
        "options": [
          "Divisible by 9",
          "An even number",
          "Ending in 9",
          "Divisible by 3"
        ],
        "correctIndex": 0,
        "explanation": "The sum of all digits must be divisible by 9."
      }
    ]
  },
  {
    "id": "math-02",
    "title": "LCM & HCF",
    "estimatedMinutes": 50,
    "nxtWaveVideoTitle": "LCM & HCF - Prime Factorization & Practical Word Problems",
    "mathsWithoutFear": {
      "reassurance": "LCM is the smallest meeting point (e.g. bells ringing together). HCF is the largest divider (e.g. cutting equal strips).",
      "levels": {
        "level1_understand": {
          "title": "Level 1: What is this?",
          "content": "LCM = Lowest Common Multiple (both numbers divide into it). HCF = Highest Common Factor (divides both numbers)."
        },
        "level2_veryEasy": {
          "title": "Level 2: Very Easy Example",
          "problem": "Find LCM and HCF of 4 and 6.",
          "stepByStep": [
            "Multiples of 4: 4, 8, 12, 16...",
            "Multiples of 6: 6, 12, 18...",
            "Smallest common = 12 (LCM = 12).",
            "Factors of 4: 1, 2, 4. Factors of 6: 1, 2, 3, 6.",
            "Highest common factor = 2 (HCF = 2)."
          ]
        },
        "level3_basic": {
          "title": "Level 3: Basic Exam Question",
          "problem": "Product of two numbers is 180 and HCF is 3. Find their LCM.",
          "stepByStep": [
            "Formula: First Number * Second Number = LCM * HCF.",
            "180 = LCM * 3 => LCM = 180 / 3 = 60."
          ]
        },
        "level4_medium": {
          "title": "Level 4: Medium Competitive Question",
          "problem": "Three bells toll at intervals of 12, 15, and 18 mins. When do they toll together again?",
          "stepByStep": [
            "LCM of 12, 15, 18 = 180 minutes = 3 hours."
          ]
        },
        "level5_hard": {
          "title": "Level 5: Hard (Optional)",
          "problem": "Find the greatest 4-digit number divisible by 12, 18, 21, 28 leaving remainder 3.",
          "stepByStep": [
            "LCM = 252. Largest 4 digit multiple = 9828. Answer = 9828 + 3 = 9831."
          ]
        }
      }
    },
    "practiceQuestions": [
      {
        "id": "q-math-02-1",
        "difficulty": "Level 2 - Very Easy",
        "level": 2,
        "question": "What is the HCF of 15 and 25?",
        "options": [
          "5",
          "15",
          "1",
          "75"
        ],
        "correctIndex": 0,
        "explanation": "Both 15 and 25 are divisible by 5."
      }
    ]
  },
  {
    "id": "math-03",
    "title": "Percentages",
    "estimatedMinutes": 50,
    "nxtWaveVideoTitle": "Percentages - Fractional Values and Base Conversions",
    "mathsWithoutFear": {
      "reassurance": "Percent just means 'per 100'. 50% = 1/2, 25% = 1/4, 10% = 1/10.",
      "levels": {
        "level1_understand": {
          "title": "Level 1: What is this?",
          "content": "Scoring 40 out of 50 means 80 out of 100, which is 80%."
        },
        "level2_veryEasy": {
          "title": "Level 2: Very Easy Example",
          "problem": "Find 10% of 250.",
          "stepByStep": [
            "To find 10%, drop the last zero: 250 -> 25."
          ]
        },
        "level3_basic": {
          "title": "Level 3: Basic Exam Question",
          "problem": "Scored 360 marks out of 600. Find percentage.",
          "stepByStep": [
            "(360 / 600) * 100 = 360 / 6 = 60%."
          ]
        },
        "level4_medium": {
          "title": "Level 4: Medium Competitive Question",
          "problem": "Price of sugar increases by 25%. Consumption decrease required for same budget?",
          "stepByStep": [
            "[25 / (100 + 25)] * 100 = (25 / 125) * 100 = 20%."
          ]
        },
        "level5_hard": {
          "title": "Level 5: Hard (Optional)",
          "problem": "Winner gets 54% of valid votes and wins by 1620. Total voters?",
          "stepByStep": [
            "Valid = 81%. Difference = 8% of 81% = 6.48% = 1620 -> Total = 25,000."
          ]
        }
      }
    },
    "practiceQuestions": [
      {
        "id": "q-math-03-1",
        "difficulty": "Level 2 - Very Easy",
        "level": 2,
        "question": "What is 20% of 400?",
        "options": [
          "80",
          "40",
          "100",
          "60"
        ],
        "correctIndex": 0,
        "explanation": "10% is 40, so 20% is 80."
      }
    ]
  },
  {
    "id": "math-04",
    "title": "Averages",
    "estimatedMinutes": 45,
    "nxtWaveVideoTitle": "Averages - Sum divided by Count & Deviation Method",
    "mathsWithoutFear": {
      "reassurance": "Average is equal sharing: Sum of items / Number of items.",
      "levels": {
        "level1_understand": {
          "title": "Level 1: What is this?",
          "content": "Sharing Rs 60 equally among 3 people gives Rs 20 each."
        },
        "level2_veryEasy": {
          "title": "Level 2: Very Easy Example",
          "problem": "Average of 10, 20, 30",
          "stepByStep": [
            "(10+20+30)/3 = 60/3 = 20."
          ]
        },
        "level3_basic": {
          "title": "Level 3: Basic Exam Question",
          "problem": "Average age of 4 boys is 15. Sum of ages?",
          "stepByStep": [
            "Sum = 15 * 4 = 60 years."
          ]
        },
        "level4_medium": {
          "title": "Level 4: Medium Competitive Question",
          "problem": "Average of 10 students is 14. With teacher it becomes 16. Teacher age?",
          "stepByStep": [
            "New sum (11*16=176) - Old sum (10*14=140) = 36."
          ]
        },
        "level5_hard": {
          "title": "Level 5: Hard (Optional)",
          "problem": "Average of 50 numbers is 38. Discard 45 and 55. New average?",
          "stepByStep": [
            "(1900 - 100) / 48 = 1800 / 48 = 37.5."
          ]
        }
      }
    },
    "practiceQuestions": [
      {
        "id": "q-math-04-1",
        "difficulty": "Level 2 - Very Easy",
        "level": 2,
        "question": "Average of 5, 10, 15?",
        "options": [
          "10",
          "15",
          "5",
          "8"
        ],
        "correctIndex": 0,
        "explanation": "30/3 = 10."
      }
    ]
  },
  {
    "id": "math-05",
    "title": "Ratio & Proportion",
    "estimatedMinutes": 50,
    "nxtWaveVideoTitle": "Ratio and Proportion - Cross Multiplication & Parts Division",
    "mathsWithoutFear": {
      "reassurance": "A ratio is just recipe proportions. 2 cups water for 1 cup rice = 2:1.",
      "levels": {
        "level1_understand": {
          "title": "Level 1: What is this?",
          "content": "Ratio compares two amounts using division."
        },
        "level2_veryEasy": {
          "title": "Level 2: Very Easy Example",
          "problem": "Divide Rs 500 in 3:2 ratio.",
          "stepByStep": [
            "5 parts = Rs 500 -> 1 part = Rs 100. A gets Rs 300, B gets Rs 200."
          ]
        },
        "level3_basic": {
          "title": "Level 3: Basic Exam Question",
          "problem": "If A:B = 2:3 and B:C = 4:5, find A:B:C.",
          "stepByStep": [
            "A:B:C = (2*4) : (3*4) : (3*5) = 8 : 12 : 15."
          ]
        },
        "level4_medium": {
          "title": "Level 4: Medium Competitive Question",
          "problem": "Bag has Rs 1, 50p, 25p coins in 5:6:8 = Rs 210. Find Rs 1 coins.",
          "stepByStep": [
            "5x + 3x + 2x = 10x = Rs 210 -> x=21 -> 105 coins of Rs 1."
          ]
        },
        "level5_hard": {
          "title": "Level 5: Hard (Optional)",
          "problem": "Income ratio 5:3, spend ratio 9:5, save Rs 2600. A income?",
          "stepByStep": [
            "A income = Rs 8000."
          ]
        }
      }
    },
    "practiceQuestions": [
      {
        "id": "q-math-05-1",
        "difficulty": "Level 2 - Very Easy",
        "level": 2,
        "question": "Divide Rs 100 in 1:1 ratio.",
        "options": [
          "Rs 50 each",
          "Rs 60 & Rs 40",
          "Rs 100 each",
          "Rs 25 each"
        ],
        "correctIndex": 0,
        "explanation": "Equal half each = Rs 50."
      }
    ]
  },
  {
    "id": "math-06",
    "title": "Ages",
    "estimatedMinutes": 45,
    "nxtWaveVideoTitle": "Problems on Ages - Setting Up Linear Equations",
    "mathsWithoutFear": {
      "reassurance": "The age difference between two people never changes over time.",
      "levels": {
        "level1_understand": {
          "title": "Level 1: What is this?",
          "content": "Age word problems expressed with simple algebra."
        },
        "level2_veryEasy": {
          "title": "Level 2: Very Easy Example",
          "problem": "Rahul is 10, father is 4 times older.",
          "stepByStep": [
            "Father = 4 * 10 = 40."
          ]
        },
        "level3_basic": {
          "title": "Level 3: Basic Exam Question",
          "problem": "Father:Son = 7:3. Sum is 60. Father age?",
          "stepByStep": [
            "10 parts = 60 -> 1 part = 6 -> Father = 7*6 = 42."
          ]
        },
        "level4_medium": {
          "title": "Level 4: Medium Competitive Question",
          "problem": "Present 4:5. After 5 yrs 5:6. A present age?",
          "stepByStep": [
            "(4x+5)/(5x+5) = 5/6 => x=5 => A = 20 years."
          ]
        },
        "level5_hard": {
          "title": "Level 5: Hard (Optional)",
          "problem": "10 yrs ago 4x, 10 yrs hence 2x. Find present ages.",
          "stepByStep": [
            "Father = 50, Son = 20."
          ]
        }
      }
    },
    "practiceQuestions": [
      {
        "id": "q-math-06-1",
        "difficulty": "Level 2 - Very Easy",
        "level": 2,
        "question": "If Mohan is 15, age 5 years ago was?",
        "options": [
          "10",
          "20",
          "15",
          "5"
        ],
        "correctIndex": 0,
        "explanation": "15 - 5 = 10."
      }
    ]
  },
  {
    "id": "math-07",
    "title": "Profit & Loss",
    "estimatedMinutes": 50,
    "nxtWaveVideoTitle": "Profit and Loss - Cost Price, Selling Price & Marked Price",
    "mathsWithoutFear": {
      "reassurance": "Selling Price > Cost Price = Profit. Selling Price < Cost Price = Loss.",
      "levels": {
        "level1_understand": {
          "title": "Level 1: What is this?",
          "content": "Profit = SP - CP. Loss = CP - SP. Always calculated on CP."
        },
        "level2_veryEasy": {
          "title": "Level 2: Very Easy Example",
          "problem": "Buy for Rs 10, sell for Rs 15.",
          "stepByStep": [
            "Profit = Rs 5. % = (5/10)*100 = 50%."
          ]
        },
        "level3_basic": {
          "title": "Level 3: Basic Exam Question",
          "problem": "CP = Rs 400, sold at 20% profit. SP?",
          "stepByStep": [
            "Profit = 20% of 400 = 80 -> SP = Rs 480."
          ]
        },
        "level4_medium": {
          "title": "Level 4: Medium Competitive Question",
          "problem": "Sold at Rs 1440 loses 10%. SP for 10% gain?",
          "stepByStep": [
            "CP = 1440 / 0.90 = 1600. SP = 1600 * 1.10 = Rs 1760."
          ]
        },
        "level5_hard": {
          "title": "Level 5: Hard (Optional)",
          "problem": "Marked 40% above CP, discount 15%. Profit %?",
          "stepByStep": [
            "CP 100, MP 140, SP 119 -> Profit = 19%."
          ]
        }
      }
    },
    "practiceQuestions": [
      {
        "id": "q-math-07-1",
        "difficulty": "Level 2 - Very Easy",
        "level": 2,
        "question": "CP = Rs 100, SP = Rs 120. Profit %?",
        "options": [
          "20%",
          "10%",
          "15%",
          "25%"
        ],
        "correctIndex": 0,
        "explanation": "20% profit."
      }
    ]
  },
  {
    "id": "math-08",
    "title": "Simple Interest",
    "estimatedMinutes": 45,
    "nxtWaveVideoTitle": "Simple Interest - Formula PTR / 100 and Rate Concept",
    "mathsWithoutFear": {
      "reassurance": "Interest stays identical every year. SI = (P * T * R) / 100.",
      "levels": {
        "level1_understand": {
          "title": "Level 1: What is this?",
          "content": "Fee paid for borrowing money calculated on original principal."
        },
        "level2_veryEasy": {
          "title": "Level 2: Very Easy Example",
          "problem": "SI on Rs 1000 at 10% for 1 year.",
          "stepByStep": [
            "(1000 * 1 * 10) / 100 = Rs 100."
          ]
        },
        "level3_basic": {
          "title": "Level 3: Basic Exam Question",
          "problem": "SI on Rs 2000 at 5% for 3 years.",
          "stepByStep": [
            "(2000 * 3 * 5) / 100 = Rs 300. Total = Rs 2300."
          ]
        },
        "level4_medium": {
          "title": "Level 4: Medium Competitive Question",
          "problem": "Sum doubles in 8 years. Rate?",
          "stepByStep": [
            "SI = P -> P = (P*8*R)/100 -> R = 100/8 = 12.5%."
          ]
        },
        "level5_hard": {
          "title": "Level 5: Hard (Optional)",
          "problem": "Amounts to Rs 756 in 2 yrs, Rs 873 in 3.5 yrs. Principal?",
          "stepByStep": [
            "1 yr SI = 78 -> Principal = 756 - 156 = Rs 600."
          ]
        }
      }
    },
    "practiceQuestions": [
      {
        "id": "q-math-08-1",
        "difficulty": "Level 2 - Very Easy",
        "level": 2,
        "question": "Formula for Simple Interest?",
        "options": [
          "PTR / 100",
          "P(1+R/100)^T",
          "P * R",
          "P/(T*R)"
        ],
        "correctIndex": 0,
        "explanation": "SI = PTR / 100."
      }
    ]
  },
  {
    "id": "math-09",
    "title": "Compound Interest",
    "estimatedMinutes": 50,
    "nxtWaveVideoTitle": "Compound Interest - Interest on Interest & Tree Method",
    "mathsWithoutFear": {
      "reassurance": "Earning interest on prior interest. Year 1 SI and CI are identical.",
      "levels": {
        "level1_understand": {
          "title": "Level 1: What is this?",
          "content": "Interest added to principal each cycle."
        },
        "level2_veryEasy": {
          "title": "Level 2: Very Easy Example",
          "problem": "Rs 100 at 10% CI for 2 yrs.",
          "stepByStep": [
            "Yr 1 = Rs 10 (Total 110). Yr 2 = Rs 11 (Total 121). Total CI = Rs 21."
          ]
        },
        "level3_basic": {
          "title": "Level 3: Basic Exam Question",
          "problem": "CI on Rs 1000 at 10% for 2 yrs.",
          "stepByStep": [
            "Amount = 1000 * 1.21 = Rs 1210 -> CI = Rs 210."
          ]
        },
        "level4_medium": {
          "title": "Level 4: Medium Competitive Question",
          "problem": "Difference between CI and SI on Rs 5000 for 2 yrs at 10%?",
          "stepByStep": [
            "Diff = P*(R/100)^2 = 5000 * 0.01 = Rs 50."
          ]
        },
        "level5_hard": {
          "title": "Level 5: Hard (Optional)",
          "problem": "Doubles in 4 yrs. Becomes 8 times in how many years?",
          "stepByStep": [
            "8 = 2^3 -> 3 * 4 = 12 years."
          ]
        }
      }
    },
    "practiceQuestions": [
      {
        "id": "q-math-09-1",
        "difficulty": "Level 2 - Very Easy",
        "level": 2,
        "question": "In Year 1, CI and SI on same principal and rate are:",
        "options": [
          "Equal",
          "CI is double",
          "CI is less",
          "Zero"
        ],
        "correctIndex": 0,
        "explanation": "They are identical in the first year."
      }
    ]
  },
  {
    "id": "math-10",
    "title": "Time & Work",
    "estimatedMinutes": 50,
    "nxtWaveVideoTitle": "Time and Work - Total Work LCM Method & Efficiency",
    "mathsWithoutFear": {
      "reassurance": "Total Work = LCM of days. Units per day = efficiency.",
      "levels": {
        "level1_understand": {
          "title": "Level 1: What is this?",
          "content": "Speed of doing a job. Faster worker = fewer days."
        },
        "level2_veryEasy": {
          "title": "Level 2: Very Easy Example",
          "problem": "A takes 10 days, B takes 10 days. Together?",
          "stepByStep": [
            "Together = 5 days."
          ]
        },
        "level3_basic": {
          "title": "Level 3: Basic Exam Question",
          "problem": "A in 10 days, B in 15 days. Together?",
          "stepByStep": [
            "LCM = 30. A = 3 units/day, B = 2 units/day. Total = 5 units/day -> 30/5 = 6 days."
          ]
        },
        "level4_medium": {
          "title": "Level 4: Medium Competitive Question",
          "problem": "A+B=12, B+C=15, C+A=20. Together days?",
          "stepByStep": [
            "LCM=60. 2(A+B+C)=12 -> A+B+C=6 -> 60/6 = 10 days."
          ]
        },
        "level5_hard": {
          "title": "Level 5: Hard (Optional)",
          "problem": "A in 16, B in 12. Alternating starting with A.",
          "stepByStep": [
            "Total = 13 3/4 days."
          ]
        }
      }
    },
    "practiceQuestions": [
      {
        "id": "q-math-10-1",
        "difficulty": "Level 2 - Very Easy",
        "level": 2,
        "question": "If A takes 4 days, 1-day work is:",
        "options": [
          "1/4",
          "1/2",
          "4",
          "1/8"
        ],
        "correctIndex": 0,
        "explanation": "1 / 4 work per day."
      }
    ]
  },
  {
    "id": "math-11",
    "title": "Time, Speed & Distance",
    "estimatedMinutes": 50,
    "nxtWaveVideoTitle": "Speed, Distance, Time - Trains and Relative Speed",
    "mathsWithoutFear": {
      "reassurance": "Distance = Speed * Time. km/h to m/s = multiply by 5/18.",
      "levels": {
        "level1_understand": {
          "title": "Level 1: What is this?",
          "content": "Speed tells how far you travel in 1 hour or 1 second."
        },
        "level2_veryEasy": {
          "title": "Level 2: Very Easy Example",
          "problem": "Convert 36 km/h to m/s.",
          "stepByStep": [
            "36 * (5/18) = 10 m/s."
          ]
        },
        "level3_basic": {
          "title": "Level 3: Basic Exam Question",
          "problem": "Travel 150 km in 3 hours. Speed?",
          "stepByStep": [
            "150 / 3 = 50 km/h."
          ]
        },
        "level4_medium": {
          "title": "Level 4: Medium Competitive Question",
          "problem": "Train 150m long crosses pole in 15s. Speed in km/h?",
          "stepByStep": [
            "10 m/s * (18/5) = 36 km/h."
          ]
        },
        "level5_hard": {
          "title": "Level 5: Hard (Optional)",
          "problem": "Two trains 120m and 180m opposite at 40 and 50 km/h. Crossing time?",
          "stepByStep": [
            "300m / 25m/s = 12 seconds."
          ]
        }
      }
    },
    "practiceQuestions": [
      {
        "id": "q-math-11-1",
        "difficulty": "Level 2 - Very Easy",
        "level": 2,
        "question": "Distance in 2 hrs at 40 km/h?",
        "options": [
          "80 km",
          "20 km",
          "40 km",
          "60 km"
        ],
        "correctIndex": 0,
        "explanation": "40 * 2 = 80 km."
      }
    ]
  },
  {
    "id": "math-12",
    "title": "Mixtures & Alligation",
    "estimatedMinutes": 45,
    "nxtWaveVideoTitle": "Alligation Rule - Weighted Averages and Price Blending",
    "mathsWithoutFear": {
      "reassurance": "Visual shortcut for weighted averages.",
      "levels": {
        "level1_understand": {
          "title": "Level 1: What is this?",
          "content": "Mixing two grades gives a price in between."
        },
        "level2_veryEasy": {
          "title": "Level 2: Very Easy Example",
          "problem": "Mix Rs 10 and Rs 20 rice in equal parts.",
          "stepByStep": [
            "(10+20)/2 = Rs 15."
          ]
        },
        "level3_basic": {
          "title": "Level 3: Basic Exam Question",
          "problem": "Ratio of Rs 62/kg and Rs 72/kg tea for Rs 65/kg mixture?",
          "stepByStep": [
            "(72-65) : (65-62) = 7 : 3."
          ]
        },
        "level4_medium": {
          "title": "Level 4: Medium Competitive Question",
          "problem": "60L milk:water = 2:1. Water to add for 1:2?",
          "stepByStep": [
            "Add 60 Liters."
          ]
        },
        "level5_hard": {
          "title": "Level 5: Hard (Optional)",
          "problem": "40L milk, 4L replaced 3 times. Milk left?",
          "stepByStep": [
            "40 * (0.9)^3 = 29.16 Liters."
          ]
        }
      }
    },
    "practiceQuestions": [
      {
        "id": "q-math-12-1",
        "difficulty": "Level 2 - Very Easy",
        "level": 2,
        "question": "10L milk mixed with 10L water ratio is:",
        "options": [
          "1:1",
          "1:2",
          "2:1",
          "10:1"
        ],
        "correctIndex": 0,
        "explanation": "10:10 = 1:1."
      }
    ]
  },
  {
    "id": "math-13",
    "title": "Partnerships",
    "estimatedMinutes": 45,
    "nxtWaveVideoTitle": "Partnerships - Investment * Time = Profit Share",
    "mathsWithoutFear": {
      "reassurance": "Profit is shared according to (Money Invested * Time Duration).",
      "levels": {
        "level1_understand": {
          "title": "Level 1: What is this?",
          "content": "Business investment sharing."
        },
        "level2_veryEasy": {
          "title": "Level 2: Very Easy Example",
          "problem": "A invests Rs 1000, B Rs 2000 for 1 yr. Profit Rs 300.",
          "stepByStep": [
            "Ratio 1:2. A gets Rs 100."
          ]
        },
        "level3_basic": {
          "title": "Level 3: Basic Exam Question",
          "problem": "A Rs 5000 for 12m, B Rs 6000 for 6m. Profit ratio?",
          "stepByStep": [
            "60,000 : 36,000 = 5 : 3."
          ]
        },
        "level4_medium": {
          "title": "Level 4: Medium Competitive Question",
          "problem": "A=3B, B=2/3 C. C share in Rs 6600 profit?",
          "stepByStep": [
            "6 : 2 : 3 -> C = Rs 1800."
          ]
        },
        "level5_hard": {
          "title": "Level 5: Hard (Optional)",
          "problem": "Working partner gets 10% fee + share.",
          "stepByStep": [
            "Total profit = Rs 500."
          ]
        }
      }
    },
    "practiceQuestions": [
      {
        "id": "q-math-13-1",
        "difficulty": "Level 2 - Very Easy",
        "level": 2,
        "question": "Profit sharing is proportional to:",
        "options": [
          "Investment * Time",
          "Only investment",
          "Only time",
          "Age"
        ],
        "correctIndex": 0,
        "explanation": "Capital * Time duration."
      }
    ]
  },
  {
    "id": "math-14",
    "title": "Permutations & Combinations",
    "estimatedMinutes": 50,
    "nxtWaveVideoTitle": "P&C - Arrangements (P) vs Selections (C)",
    "mathsWithoutFear": {
      "reassurance": "P = Order matters (PIN code). C = Order does not matter (Fruit salad).",
      "levels": {
        "level1_understand": {
          "title": "Level 1: What is this?",
          "content": "Factorial n! = n * (n-1) * ... * 1."
        },
        "level2_veryEasy": {
          "title": "Level 2: Very Easy Example",
          "problem": "Arrange 3 books on a shelf.",
          "stepByStep": [
            "3! = 3 * 2 * 1 = 6 ways."
          ]
        },
        "level3_basic": {
          "title": "Level 3: Basic Exam Question",
          "problem": "Choose 2 players out of 4.",
          "stepByStep": [
            "4C2 = (4*3)/(2*1) = 6 ways."
          ]
        },
        "level4_medium": {
          "title": "Level 4: Medium Competitive Question",
          "problem": "Arrange LEADING with vowels together.",
          "stepByStep": [
            "5! * 3! = 120 * 6 = 720 ways."
          ]
        },
        "level5_hard": {
          "title": "Level 5: Hard (Optional)",
          "problem": "Committee of 5 with at least 3 men.",
          "stepByStep": [
            "186 ways."
          ]
        }
      }
    },
    "practiceQuestions": [
      {
        "id": "q-math-14-1",
        "difficulty": "Level 2 - Very Easy",
        "level": 2,
        "question": "4! is equal to:",
        "options": [
          "24",
          "12",
          "16",
          "20"
        ],
        "correctIndex": 0,
        "explanation": "4 * 3 * 2 * 1 = 24."
      }
    ]
  },
  {
    "id": "math-15",
    "title": "Probability",
    "estimatedMinutes": 45,
    "nxtWaveVideoTitle": "Probability - Favorable Outcomes / Total Outcomes",
    "mathsWithoutFear": {
      "reassurance": "Probability is between 0 and 1: Favorable / Total possibilities.",
      "levels": {
        "level1_understand": {
          "title": "Level 1: What is this?",
          "content": "Flipping coin: 1 head out of 2 sides = 1/2."
        },
        "level2_veryEasy": {
          "title": "Level 2: Very Easy Example",
          "problem": "Rolling an even number on a 6-sided dice.",
          "stepByStep": [
            "{2, 4, 6} = 3 / 6 = 1/2."
          ]
        },
        "level3_basic": {
          "title": "Level 3: Basic Exam Question",
          "problem": "Probability of drawing a King from 52 cards?",
          "stepByStep": [
            "4 / 52 = 1 / 13."
          ]
        },
        "level4_medium": {
          "title": "Level 4: Medium Competitive Question",
          "problem": "Sum of 7 when throwing 2 dice?",
          "stepByStep": [
            "6 pairs / 36 = 1/6."
          ]
        },
        "level5_hard": {
          "title": "Level 5: Hard (Optional)",
          "problem": "4 red, 5 blue, 6 green. 2 blue drawn?",
          "stepByStep": [
            "5C2 / 15C2 = 10 / 105 = 2 / 21."
          ]
        }
      }
    },
    "practiceQuestions": [
      {
        "id": "q-math-15-1",
        "difficulty": "Level 2 - Very Easy",
        "level": 2,
        "question": "Probability of impossible event is:",
        "options": [
          "0",
          "1",
          "0.5",
          "-1"
        ],
        "correctIndex": 0,
        "explanation": "0 represents impossible."
      }
    ]
  },
  {
    "id": "math-16",
    "title": "Express Revision",
    "estimatedMinutes": 60,
    "nxtWaveVideoTitle": "Express Revision - Quantitative Aptitude Formula Bank",
    "mathsWithoutFear": {
      "reassurance": "One calm formula card to review all maths concepts.",
      "levels": {
        "level1_understand": {
          "title": "Recap",
          "content": "SI=PTR/100, Speed=D/T, Work=LCM, Avg=Sum/N."
        },
        "level2_veryEasy": {
          "title": "Quick Check",
          "problem": "5 core formulas.",
          "stepByStep": [
            "Review cheat sheet."
          ]
        },
        "level3_basic": {
          "title": "Basic Drills",
          "problem": "Mental maths check.",
          "stepByStep": [
            "10% of 350 = 35."
          ]
        },
        "level4_medium": {
          "title": "Drill",
          "problem": "1 problem from each chapter.",
          "stepByStep": [
            "Focus on accuracy."
          ]
        },
        "level5_hard": {
          "title": "Mastery",
          "problem": "Mistake book review.",
          "stepByStep": [
            "Re-attempt past calculation mistakes."
          ]
        }
      }
    },
    "practiceQuestions": [
      {
        "id": "q-math-16-1",
        "difficulty": "Level 2 - Very Easy",
        "level": 2,
        "question": "Convert km/h to m/s by multiplying by:",
        "options": [
          "5/18",
          "18/5",
          "60",
          "1000"
        ],
        "correctIndex": 0,
        "explanation": "5/18."
      }
    ]
  },
  {
    "id": "math-17",
    "title": "Quantitative Aptitude Course Exam",
    "estimatedMinutes": 60,
    "nxtWaveVideoTitle": "NxtWave Comprehensive Quantitative Assessment",
    "mathsWithoutFear": {
      "reassurance": "Celebrate your zero-to-hero journey! Untimed, no pressure.",
      "levels": {
        "level1_understand": {
          "title": "Exam Overview",
          "content": "Comprehensive arithmetic checkpoint."
        },
        "level2_veryEasy": {
          "title": "Warmup",
          "problem": "Scratch sheet ready.",
          "stepByStep": [
            "Step by step solving."
          ]
        },
        "level3_basic": {
          "title": "Assessment",
          "problem": "15 mixed questions.",
          "stepByStep": [
            "Take your time."
          ]
        },
        "level4_medium": {
          "title": "Confidence Check",
          "problem": "Accuracy over speed.",
          "stepByStep": [
            "Every step counts."
          ]
        },
        "level5_hard": {
          "title": "Completion",
          "problem": "Course finished!",
          "stepByStep": [
            "Great job!"
          ]
        }
      }
    },
    "practiceQuestions": [
      {
        "id": "q-math-17-1",
        "difficulty": "Level 2 - Very Easy",
        "level": 2,
        "question": "5 pencils cost Rs 25. 1 pencil costs:",
        "options": [
          "Rs 5",
          "Rs 10",
          "Rs 15",
          "Rs 4"
        ],
        "correctIndex": 0,
        "explanation": "25 / 5 = Rs 5."
      }
    ]
  }
];



window.GENERAL_STUDIES_SYLLABUS = [
  {
    "id": "gs-01",
    "title": "Indian Polity",
    "estimatedMinutes": 30,
    "simpleExplanation": "Indian Polity covers how the Indian government functions: The Parliament (Lok Sabha & Rajya Sabha), President, Prime Minister, Judiciary (Supreme Court), and State Governments.",
    "keyPoints": [
      "1. India has a Parliamentary democracy with a bicameral legislature at the Center (Lok Sabha + Rajya Sabha).",
      "2. The President is the Constitutional Head of State, while the Prime Minister is the Head of Government.",
      "3. The Supreme Court of India is the highest judicial forum and guardian of the Constitution.",
      "4. The 3 organs of State: Legislature (makes laws), Executive (implements laws), Judiciary (interprets laws).",
      "5. Federal system with unitary bias: Division of powers via Union List, State List, and Concurrent List."
    ],
    "mcqs": [
      {
        "question": "Who is known as the Constitutional Head of the Republic of India?",
        "options": [
          "The President",
          "The Prime Minister",
          "Chief Justice of India",
          "Speaker of Lok Sabha"
        ],
        "correctIndex": 0,
        "explanation": "The President is the supreme executive and constitutional head of India."
      },
      {
        "question": "Which organ of government is responsible for making laws in India?",
        "options": [
          "Legislature",
          "Executive",
          "Judiciary",
          "Election Commission"
        ],
        "correctIndex": 0,
        "explanation": "The Legislature (Parliament at center, Vidhan Sabha in states) creates laws."
      }
    ]
  },
  {
    "id": "gs-02",
    "title": "Modern Indian History",
    "estimatedMinutes": 30,
    "simpleExplanation": "Focuses on the Indian Freedom Struggle (1857 to 1947), the Revolt of 1857, Indian National Congress (1885), Gandhian Era (1919-1947), and Independence.",
    "keyPoints": [
      "1. 1857 Revolt: First War of Indian Independence starting from Meerut.",
      "2. Indian National Congress (INC) founded in 1885 by A.O. Hume.",
      "3. Swadeshi Movement (1905) against the Partition of Bengal by Lord Curzon.",
      "4. Major Gandhian movements: Non-Cooperation (1920), Civil Disobedience / Dandi March (1930), Quit India (1942).",
      "5. India achieved independence on 15th August 1947 via the Indian Independence Act 1947."
    ],
    "mcqs": [
      {
        "question": "In which year was the Indian National Congress (INC) founded?",
        "options": [
          "1885",
          "1857",
          "1905",
          "1947"
        ],
        "correctIndex": 0,
        "explanation": "INC was founded in Bombay in December 1885 by Allan Octavian Hume."
      }
    ]
  },
  {
    "id": "gs-03",
    "title": "Indian Geography",
    "estimatedMinutes": 30,
    "simpleExplanation": "Covers physical features of India (Himalayas, Northern Plains, Peninsular Plateau, Coastal Plains), rivers, climate, and soils.",
    "keyPoints": [
      "1. India has 6 physiographic divisions: Himalayas, Northern Plains, Peninsular Plateau, Indian Desert, Coastal Plains, and Islands.",
      "2. Major river systems: Himalayan rivers (Ganga, Indus, Brahmaputra) and Peninsular rivers (Godavari, Krishna, Cauvery).",
      "3. Godavari is the longest peninsular river in India (Dakshin Ganga).",
      "4. India's climate is Tropical Monsoon with South-West Monsoon (June-Sept) bringing major rainfall.",
      "5. Major soils: Alluvial (river plains), Black (cotton soil / regur), Red, and Laterite."
    ],
    "mcqs": [
      {
        "question": "Which is the longest river in Peninsular India?",
        "options": [
          "Godavari",
          "Krishna",
          "Cauvery",
          "Narmada"
        ],
        "correctIndex": 0,
        "explanation": "Godavari (1,465 km) is the longest peninsular river originating at Trimbakeshwar."
      }
    ]
  },
  {
    "id": "gs-04",
    "title": "Andhra Pradesh Geography",
    "estimatedMinutes": 30,
    "simpleExplanation": "Geographical details of Andhra Pradesh: 974 km coastline (2nd longest in India), Godavari and Krishna rivers, Eastern Ghats, and 26 districts.",
    "keyPoints": [
      "1. AP has a coastline of 974 km, the second longest mainland coastline in India after Gujarat.",
      "2. Two major perennial rivers: Godavari (enters at Polavaram) and Krishna (drains into Bay of Bengal).",
      "3. Divided into two main regions: Coastal Andhra and Rayalaseema.",
      "4. Kolleru (freshwater) and Pulicat (brackish lagoon) are the two major lakes.",
      "5. Eastern Ghats run through AP; highest peak is Arma Konda / Jindhagada (1,690 m)."
    ],
    "mcqs": [
      {
        "question": "What is the length of Andhra Pradesh's coastline?",
        "options": [
          "974 km",
          "1050 km",
          "750 km",
          "850 km"
        ],
        "correctIndex": 0,
        "explanation": "AP has 974 km coastline, 2nd longest in India."
      }
    ]
  },
  {
    "id": "gs-05",
    "title": "Indian Economy Basics",
    "estimatedMinutes": 30,
    "simpleExplanation": "Basic concepts of GDP, inflation, RBI monetary policy, banking, budget, and economic sectors (Primary, Secondary, Tertiary).",
    "keyPoints": [
      "1. 3 Sectors: Primary (Agri), Secondary (Manufacturing), Tertiary (Services - largest GDP contributor).",
      "2. GDP (Gross Domestic Product) is total monetary value of finished goods/services in a country in a year.",
      "3. Reserve Bank of India (RBI), established in 1935, controls monetary policy and repo rate.",
      "4. Inflation measures the rate of rise in general price level (CPI & WPI).",
      "5. Union Budget is presented under Article 112 (Annual Financial Statement)."
    ],
    "mcqs": [
      {
        "question": "Which sector contributes the highest share to India's GDP?",
        "options": [
          "Services (Tertiary)",
          "Agriculture (Primary)",
          "Manufacturing (Secondary)",
          "Mining"
        ],
        "correctIndex": 0,
        "explanation": "The Services sector contributes over 53% of India's GDP."
      }
    ]
  },
  {
    "id": "gs-06",
    "title": "General Science",
    "estimatedMinutes": 30,
    "simpleExplanation": "Everyday Physics, Chemistry, and Biology: human body systems, vitamins, diseases, light, sound, acids and bases.",
    "keyPoints": [
      "1. Physics: Newton's Laws, SI units, Speed of light (3x10^8 m/s), Reflection & Refraction.",
      "2. Chemistry: pH scale (0-14, 7=neutral, <7=acid, >7=base), baking soda (NaHCO3).",
      "3. Biology: Cell is basic unit of life; Mitochondria is powerhouse of the cell.",
      "4. Human circulatory system: Heart pumps blood; RBCs carry oxygen via Hemoglobin.",
      "5. Vitamins: Vitamin A (Night blindness), Vitamin C (Scurvy), Vitamin D (Rickets), Vitamin B1 (Beriberi)."
    ],
    "mcqs": [
      {
        "question": "Which organelle is called the 'Powerhouse of the Cell'?",
        "options": [
          "Mitochondria",
          "Nucleus",
          "Ribosome",
          "Golgi apparatus"
        ],
        "correctIndex": 0,
        "explanation": "Mitochondria generate cellular energy in the form of ATP."
      }
    ]
  },
  {
    "id": "gs-07",
    "title": "Environment & Ecology",
    "estimatedMinutes": 30,
    "simpleExplanation": "Ecosystems, food chains, biodiversity conservation, global warming, pollution, and national parks in India.",
    "keyPoints": [
      "1. Ecosystem consists of Biotic (living) and Abiotic (non-living) components.",
      "2. Greenhouse Gases: CO2, Methane (CH4), Nitrous oxide (N2O), Water vapor.",
      "3. Paris Agreement (2015) aims to limit global temperature rise well below 2 deg C.",
      "4. Project Tiger was launched in 1973 for tiger conservation in India.",
      "5. Biodiversity hotspots in India: Western Ghats, Eastern Himalayas, Indo-Burma, Sundaland."
    ],
    "mcqs": [
      {
        "question": "In which year was Project Tiger launched in India?",
        "options": [
          "1973",
          "1985",
          "1992",
          "2000"
        ],
        "correctIndex": 0,
        "explanation": "Project Tiger was initiated in April 1973 at Corbett National Park."
      }
    ]
  },
  {
    "id": "gs-08",
    "title": "Indian Constitution",
    "estimatedMinutes": 30,
    "simpleExplanation": "Preamble, Fundamental Rights (Articles 12-35), Directive Principles (DPSP), Fundamental Duties, and Amendments.",
    "keyPoints": [
      "1. Adopted on 26 Nov 1949; came into effect on 26 Jan 1950 (Republic Day).",
      "2. Dr. B.R. Ambedkar was Chairman of the Drafting Committee.",
      "3. 6 Fundamental Rights: Equality, Freedom, Against Exploitation, Religion, Culture & Education, Constitutional Remedies (Art 32).",
      "4. DPSP (Part IV, Articles 36-51) are non-justiciable guidelines borrowed from Ireland.",
      "5. Fundamental Duties (Article 51A, Part IVA) added by 42nd Amendment 1976."
    ],
    "mcqs": [
      {
        "question": "Which Article of Constitution is called 'Heart and Soul' by Dr. Ambedkar?",
        "options": [
          "Article 32",
          "Article 14",
          "Article 19",
          "Article 21"
        ],
        "correctIndex": 0,
        "explanation": "Article 32 allows citizens to approach Supreme Court directly for enforcement of rights."
      }
    ]
  },
  {
    "id": "gs-09",
    "title": "Andhra Pradesh History",
    "estimatedMinutes": 30,
    "simpleExplanation": "Ancient Satavahanas, Ikshvakus, Eastern Chalukyas, Kakatiyas, Vijayanagara Empire (Sri Krishnadevaraya), and Andhra movement.",
    "keyPoints": [
      "1. Satavahanas (capital: Amaravati/Dharanikota) were the first major rulers of Andhra.",
      "2. Vijayanagara Empire peaked under Sri Krishnadevaraya (1509-1529), author of Amuktamalyada.",
      "3. Potti Sreeramulu's 58-day fast led to Andhra State formation on 1st October 1953 (capital Kurnool).",
      "4. Andhra Pradesh formed on 1st November 1956 combining Andhra State and Telangana.",
      "5. Major historical sites: Lepakshi, Amaravati Stupa, Undavalli Caves, Chandragiri Fort."
    ],
    "mcqs": [
      {
        "question": "Who authored the Telugu literary masterpiece 'Amuktamalyada'?",
        "options": [
          "Sri Krishnadevaraya",
          "Allasani Peddana",
          "Nannayya",
          "Tikkana"
        ],
        "correctIndex": 0,
        "explanation": "Emperor Sri Krishnadevaraya wrote Amuktamalyada."
      }
    ]
  },
  {
    "id": "gs-10",
    "title": "AP Reorganisation / Bifurcation",
    "estimatedMinutes": 30,
    "simpleExplanation": "Andhra Pradesh Reorganisation Act, 2014, division of assets, institutions, capital city provisions, and special packages.",
    "keyPoints": [
      "1. AP Reorganisation Act 2014 bifurcated AP on 2nd June 2014 (Appointed Day).",
      "2. Hyderabad was common capital for not exceeding 10 years (until June 2024).",
      "3. Polavaram Irrigation Project declared a National Project under Section 90.",
      "4. Special development package provided for Rayalaseema & North Coastal AP.",
      "5. Division of Schedule IX and Schedule X state corporations and institutions."
    ],
    "mcqs": [
      {
        "question": "What was the Appointed Day for AP Reorganisation Act 2014?",
        "options": [
          "2nd June 2014",
          "1st November 2014",
          "15th August 2014",
          "26th January 2014"
        ],
        "correctIndex": 0,
        "explanation": "2nd June 2014 was the designated Appointed Day."
      }
    ]
  },
  {
    "id": "gs-11",
    "title": "Current Affairs",
    "estimatedMinutes": 30,
    "simpleExplanation": "National & Andhra Pradesh current events, government schemes, awards, sports, summits, and key appointments.",
    "keyPoints": [
      "1. Focus on AP State welfare schemes, Direct Benefit Transfer (DBT), and flagship government programs.",
      "2. Important national appointments: President, VP, CJI, Governor of AP, Election Commissioners.",
      "3. Key national events: Union Budget highlights, economic surveys, ISRO space missions.",
      "4. Major awards: Bharat Ratna, Padma Awards, Jnanpith, Nobel Prizes.",
      "5. Keep daily habit of noting down 3 major headlines in your study diary."
    ],
    "mcqs": [
      {
        "question": "What is the key purpose of noting daily news headlines?",
        "options": [
          "Building consistent GK foundation without cramming",
          "Memorizing entire newspaper",
          "Wasting study time",
          "Only for UPSC"
        ],
        "correctIndex": 0,
        "explanation": "Consistent daily exposure prevents last-minute exam panic."
      }
    ]
  }
];

window.PANCHAYAT_SECRETARY_SYLLABUS = [
  {
    "id": "pr-01",
    "title": "1. Meaning of Panchayat Raj",
    "desc": "Local self-government system in rural India granting grassroots decision-making power."
  },
  {
    "id": "pr-02",
    "title": "2. Evolution of Panchayat Raj in India",
    "desc": "From ancient village republics to Lord Ripon's Resolution 1882 (Father of Local Self-Government)."
  },
  {
    "id": "pr-03",
    "title": "3. 73rd Constitutional Amendment Act (1992)",
    "desc": "Added Part IX and 11th Schedule (29 functional items) giving constitutional status to Panchayats."
  },
  {
    "id": "pr-04",
    "title": "4. Important Panchayat Raj Committees",
    "desc": "Balwant Rai Mehta (1957 - 3 tier), Ashok Mehta (1977 - 2 tier), G.V.K. Rao (1985), L.M. Singhvi (1986)."
  },
  {
    "id": "pr-05",
    "title": "5. Panchayat Raj in Andhra Pradesh",
    "desc": "Andhra Pradesh Panchayat Raj Act 1994, structure and administrative history."
  },
  {
    "id": "pr-06",
    "title": "6. Three-tier Panchayat Raj System",
    "desc": "Gram Panchayat (Village), Mandal Praja Parishad (Block/Mandal), Zilla Praja Parishad (District)."
  },
  {
    "id": "pr-07",
    "title": "7. Gram Panchayat Structure & Powers",
    "desc": "Sarpanch, Ward Members, Gram Sabha (Electorate assembly), and mandatory meetings."
  },
  {
    "id": "pr-08",
    "title": "8. Panchayat Secretary Roles & Responsibilities",
    "desc": "Executive official of Gram Panchayat: records, tax collection, sanitation, welfare distribution, birth/death register."
  },
  {
    "id": "pr-09",
    "title": "9. Rural Sociology",
    "desc": "Understanding village social structure, caste dynamics, joint family systems, and community life."
  },
  {
    "id": "pr-10",
    "title": "10. Rural Poverty",
    "desc": "Causes of rural indebtedness, landlessness, disguised unemployment, and BPL criteria."
  },
  {
    "id": "pr-11",
    "title": "11. Rural Development Concepts",
    "desc": "Socio-economic transformation, infrastructure (drinking water, roads, electricity), and sanitation."
  },
  {
    "id": "pr-12",
    "title": "12. Central Rural Development Schemes",
    "desc": "MGNREGS (100 days guaranteed wage employment), PMGSY (rural roads), PMAY-G (housing), Jal Jeevan Mission."
  },
  {
    "id": "pr-13",
    "title": "13. Andhra Pradesh Rural Development Schemes",
    "desc": "State specific welfare delivery, housing colonies, Rythu Bharosa Kendras (RBKs), village secretariats."
  },
  {
    "id": "pr-14",
    "title": "14. AP Panchayat Raj Department Schemes",
    "desc": "Gram Sachivalayam system, digital panchayat services, solid waste management (Clean Andhra Pradesh)."
  },
  {
    "id": "pr-15",
    "title": "15. Rural Economy of Andhra Pradesh",
    "desc": "Agrarian livelihood, crop patterns (paddy, chili, tobacco, aquaculture in coastal belts)."
  },
  {
    "id": "pr-16",
    "title": "16. Agriculture & Allied Sectors",
    "desc": "Horticulture, Dairy farming, Poultry, Fisheries (AP is India's leading fish and shrimp producer)."
  },
  {
    "id": "pr-17",
    "title": "17. Rural Industries",
    "desc": "Handlooms, coir industry, agro-processing, food preservation, and MSME promotion."
  },
  {
    "id": "pr-18",
    "title": "18. Rural Artisans & Traditional Crafts",
    "desc": "Kondapalli toys, Etikoppaka lacquer toys, Kalamkari art, Dharmavaram silk handlooms."
  },
  {
    "id": "pr-19",
    "title": "19. Rural Credit & Indebtedness",
    "desc": "Institutional vs Non-institutional credit, moneylenders, crop loans, Kisan Credit Cards (KCC)."
  },
  {
    "id": "pr-20",
    "title": "20. Banks & Cooperatives",
    "desc": "Primary Agricultural Credit Societies (PACS), District Central Cooperative Banks (DCCBs), RRBs (Andhra Pragathi & APGVB)."
  },
  {
    "id": "pr-21",
    "title": "21. Microfinance in Rural India",
    "desc": "Collateral-free small loans, Joint Liability Groups (JLGs), and NABARD refinancing."
  },
  {
    "id": "pr-22",
    "title": "22. Self-Help Groups (SHGs)",
    "desc": "10-20 rural women pooling savings, internal lending, bank linkage programs, SERP (Society for Elimination of Rural Poverty)."
  },
  {
    "id": "pr-23",
    "title": "23. Community-Based Organizations (CBOs)",
    "desc": "Village Organizations (VOs), Mandal Mahila Samakhyas, Water User Associations (WUAs)."
  },
  {
    "id": "pr-24",
    "title": "24. Women Empowerment & Gender Equality",
    "desc": "50% reservation for women in AP Local Bodies, economic independence through SHG livelihood programs."
  },
  {
    "id": "pr-25",
    "title": "25. Revision + Comprehensive MCQs",
    "desc": "Full Part-B mock test review with previous year questions and conceptual clarity checkpoints."
  }
];

window.APPSC_ENDOWMENT_SYLLABUS = {
  "paper1": [
    {
      "title": "General Studies",
      "desc": "Polity, History, AP Geography, Economy, Science, Environment, Current Affairs."
    },
    {
      "title": "Mental Ability & Reasoning",
      "desc": "Directions, Series, Coding, Blood Relations, Venn diagrams, Seating arrangement."
    },
    {
      "title": "Basic Data Interpretation",
      "desc": "Tabular data, bar charts, line graphs, pie charts, percentage calculations."
    }
  ],
  "paper2": [
    {
      "title": "1. Hindu Philosophy",
      "desc": "Vedas, Upanishads, Bhagavad Gita, Advaita/Dvaita/Vishishtadvaita schools."
    },
    {
      "title": "2. Hindu Religion Basics",
      "desc": "Major festivals, Puranas, Epics (Ramayana, Mahabharata), Avatars of Vishnu."
    },
    {
      "title": "3. Temple System & Architecture",
      "desc": "Dravidian temple architecture, Gopurams, Vimanas, Garbhagriha, Agama Shastras."
    },
    {
      "title": "4. Famous Hindu Temples in AP",
      "desc": "Tirumala Tirupati, Srisailam, Simhachalam, Kanaka Durga (Vijayawada), Srikalahasti, Ahobilam, Annavaram."
    },
    {
      "title": "5. Temple Administration",
      "desc": "Executive Officer (EO) duties, Trust Boards, Sevas, Arjitha Seva booking, Temple jewels/treasury audit."
    },
    {
      "title": "6. Relevant Laws & Acts",
      "desc": "AP Charitable and Hindu Religious Institutions and Endowments Act, 1987 (Act 30 of 1987)."
    },
    {
      "title": "7. Revision + Model Papers",
      "desc": "Paper-II practice MCQs on temple administration, mythology, and legal regulations."
    }
  ]
};

window.SSC_CGL_CALM_GUIDE = {
  "philosophy": "Use this upcoming SSC CGL attempt as valuable real exam practice. No stress, no pressure. You are building long-term common skills.",
  "corePillars": [
    {
      "name": "Reasoning",
      "focus": "25 Questions / 50 Marks - Your strength with NxtWave + RS Aggarwal."
    },
    {
      "name": "Quantitative Aptitude",
      "focus": "25 Questions / 50 Marks - Built step-by-step with Maths Without Fear."
    },
    {
      "name": "English Comprehension",
      "focus": "25 Questions / 50 Marks - Basic grammar, vocabulary, reading 20 mins daily."
    },
    {
      "name": "General Awareness",
      "focus": "25 Questions / 50 Marks - Indian Polity, Science, History, Current Affairs."
    }
  ],
  "calmAdvice": "Every single topic you study for SSC CGL also directly strengthens your AP Panchayat Secretary and APPSC Endowment Officer exams. It is one unified journey."
};

window.CONFUSION_HELPERS = {
  "qConfusion": {
    "title": "Question breakdown",
    "advice": "Let's read the question sentence by sentence. Identify: 1) What is given? 2) What is asked? Ignore extra story words."
  },
  "conceptConfusion": {
    "title": "Concept simplified",
    "advice": "Think of this in everyday life: If 1 chocolate costs Rs 5, 3 chocolates cost Rs 15. Every competitive formula is just everyday common sense written in mathematical symbols."
  },
  "formulaConfusion": {
    "title": "Formula without memorization",
    "advice": "Don't memorize formulas blindly. Understand what each letter stands for (e.g. Speed = Distance / Time means how many kilometers you travel in 1 single hour)."
  },
  "solutionConfusion": {
    "title": "Step-by-step clarity",
    "advice": "Look only at Step 1 first. Once Step 1 makes sense, look at Step 2. Don't look at the final answer directly."
  },
  "forgotTopic": {
    "title": "Gentle reminder",
    "advice": "It is completely normal to forget! Memory is built through spaced repetition. Let's do a 2-minute quick refresher before solving."
  }
};

window.DAILY_PLAN_TEMPLATES = {
  "normal": {
    "name": "Standard Day",
    "totalTime": "2 hrs 45 mins",
    "slots": [
      {
        "subject": "Reasoning",
        "time": "45 mins",
        "method": "NxtWave -> RS Aggarwal -> Check",
        "icon": "??"
      },
      {
        "subject": "Mathematics",
        "time": "45 mins",
        "method": "NxtWave -> Basic Ex -> Level 1 to 3",
        "icon": "??"
      },
      {
        "subject": "General Studies",
        "time": "30 mins",
        "method": "5 Key Points -> 5 MCQs",
        "icon": "??"
      },
      {
        "subject": "Panchayat / Rural Dev",
        "time": "30 mins",
        "method": "Concept Notes -> Short MCQs",
        "icon": "??"
      },
      {
        "subject": "English Vocabulary",
        "time": "20 mins",
        "method": "10 Root Words / Idioms",
        "icon": "??"
      },
      {
        "subject": "Calm Spaced Revision",
        "time": "15 mins",
        "method": "Review past 1-day & 3-day topics",
        "icon": "??"
      }
    ]
  },
  "tired": {
    "name": "Low-Energy Mode (I Am Tired Today)",
    "totalTime": "1 hour",
    "message": "It's okay to have a lighter day. Small progress is still progress.",
    "slots": [
      {
        "subject": "Reasoning",
        "time": "20 mins",
        "method": "1 NxtWave video or 5 easy RS Aggarwal examples",
        "icon": "??"
      },
      {
        "subject": "Mathematics (Maths Without Fear)",
        "time": "20 mins",
        "method": "Level 1 (Understand) & Level 2 (Very Easy) only",
        "icon": "??"
      },
      {
        "subject": "Light Revision",
        "time": "20 mins",
        "method": "Review 1 past cheat sheet calmly",
        "icon": "??"
      }
    ]
  },
  "busy": {
    "name": "Busy Day Mode (I Only Have 1 Hour)",
    "totalTime": "1 hour",
    "message": "You did not miss a day. 1 hour keeps your momentum alive.",
    "slots": [
      {
        "subject": "Reasoning",
        "time": "20 mins",
        "method": "5-10 quick practice questions",
        "icon": "??"
      },
      {
        "subject": "Mathematics",
        "time": "20 mins",
        "method": "Level 2 & 3 step-by-step examples",
        "icon": "??"
      },
      {
        "subject": "Flash Revision",
        "time": "20 mins",
        "method": "Quick formula check & mistake review",
        "icon": "??"
      }
    ]
  }
};

