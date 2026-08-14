const IMG = "assets/test8-images/";
const TOTAL_POINTS = 60;

const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1 });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image, points: 1 });
const paired = (id, prompt, parts, image = "") => ({ id, type: "paired", prompt, points: parts.length, parts, image });

const sections = [
  { key: "A", label: "A", title: "Match each sentence to a picture.", note: "The pictures keep their original top-to-bottom order and are numbered below each clean illustration.", points: 4, sectionImage: IMG + "a-picture-strip.png", questions: [
    choice("A1", "1. An earthquake can cause huge cracks in the ground.", ["Picture 1", "Picture 2", "Picture 3", "Picture 4"], "Picture 3", "Picture 3 shows large cracks caused by an earthquake."),
    choice("A2", "2. Too much rain can cause a flood.", ["Picture 1", "Picture 2", "Picture 3", "Picture 4"], "Picture 1", "Picture 1 shows houses surrounded by floodwater."),
    choice("A3", "3. Power lines can fall down in a bad storm.", ["Picture 1", "Picture 2", "Picture 3", "Picture 4"], "Picture 4", "Picture 4 shows power lines damaged by severe weather."),
    choice("A4", "4. Thunderstorms are sometimes loud.", ["Picture 1", "Picture 2", "Picture 3", "Picture 4"], "Picture 2", "Picture 2 shows lightning during a thunderstorm.")
  ]},
  { key: "B", label: "B", title: "Complete the sentences.", note: "Use the Unit 15 vocabulary that best fits each context.", points: 4, questions: [
    input("B1", "1. There isn't a lot of rain falling, just a few ___.", ["raindrops", "rain drops"], "Raindrops are individual drops of rain."),
    input("B2", "2. The mud and rocks from the ___ on the mountain knocked down many trees.", ["landslide", "land slide"], "A landslide is a mass of rock and earth moving down a slope."),
    input("B3", "3. It takes a lot of ___ to work together to repair a town after a bad storm.", ["teamwork", "team work"], "Teamwork is the combined effort of people working toward the same goal."),
    input("B4", "4. The ten ___ of the storm were brought to the hospital.", ["victims"], "Victims are people who are harmed by an accident or disaster.")
  ]},
  { key: "C", label: "C", title: "Unscramble and match.", note: "Unscramble each natural-disaster word, then choose its definition.", points: 8, questions: [
    paired("C1", "1. o p c l e l s a", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["collapse"], explanation: "The letters form collapse." },
      { key: "match", label: "Definition", type: "choice", options: ["a. Strong winds and a dangerous amount of snow", "b. To fall down suddenly", "c. A terrible storm with very strong winds", "d. A very dangerous, long, high wave in the ocean"], answers: ["b. To fall down suddenly"], explanation: "Collapse means to fall down suddenly, so it matches b." }
    ]),
    paired("C2", "2. c r u e h i n a r", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["hurricane"], explanation: "The letters form hurricane." },
      { key: "match", label: "Definition", type: "choice", options: ["a. Strong winds and a dangerous amount of snow", "b. To fall down suddenly", "c. A terrible storm with very strong winds", "d. A very dangerous, long, high wave in the ocean"], answers: ["c. A terrible storm with very strong winds"], explanation: "A hurricane is a powerful tropical storm with very strong winds, so it matches c." }
    ]),
    paired("C3", "3. a n i s u t m", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["tsunami"], explanation: "The letters form tsunami." },
      { key: "match", label: "Definition", type: "choice", options: ["a. Strong winds and a dangerous amount of snow", "b. To fall down suddenly", "c. A terrible storm with very strong winds", "d. A very dangerous, long, high wave in the ocean"], answers: ["d. A very dangerous, long, high wave in the ocean"], explanation: "A tsunami is a series of extremely large ocean waves, so it matches d." }
    ]),
    paired("C4", "4. z b z r d a i l", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["blizzard"], explanation: "The letters form blizzard." },
      { key: "match", label: "Definition", type: "choice", options: ["a. Strong winds and a dangerous amount of snow", "b. To fall down suddenly", "c. A terrible storm with very strong winds", "d. A very dangerous, long, high wave in the ocean"], answers: ["a. Strong winds and a dangerous amount of snow"], explanation: "A blizzard combines strong winds with heavy snow, so it matches a." }
    ])
  ]},
  { key: "D", label: "D", title: "Look and write questions. Use the present perfect and ever.", note: "Use Has with a singular third-person subject and Have with you or plural subjects.", points: 4, questions: [
    input("D1", "1. he / drive / in thunderstorms", ["Has he ever driven in thunderstorms"], "Use Has + he + ever + past participle driven.", IMG + "d1.png"),
    input("D2", "2. tornadoes / happen / in your town", ["Have tornadoes ever happened in your town", "Have tornados ever happened in your town"], "Tornadoes is plural, so use Have; happened is the past participle of happen.", IMG + "d2.png"),
    input("D3", "3. you / be / in an earthquake", ["Have you ever been in an earthquake"], "Use Have + you + ever + past participle been.", IMG + "d3.png"),
    input("D4", "4. this desert / have / snow", ["Has this desert ever had snow"], "This desert is singular, so use Has; had is the past participle of have.", IMG + "d4.png")
  ]},
  { key: "E", label: "E", title: "Complete the sentences. Write Has or Have.", note: "Choose the auxiliary that agrees with the subject.", points: 4, questions: [
    input("E1", "1. ___ you ever been in a flood?", ["have"], "You takes Have in a present-perfect question."),
    input("E2", "2. ___ she ever experienced a tornado?", ["has"], "She is third-person singular, so use Has."),
    input("E3", "3. ___ you ever learned about thunderstorms?", ["have"], "You takes Have."),
    input("E4", "4. ___ they ever felt an earthquake?", ["have"], "They is plural, so use Have.")
  ]},
  { key: "F", label: "F", title: "Write the words in the correct order. Then listen and write the answers.", note: "First make the present-perfect question. Then play the audio and write the short answer.", points: 6, audio: "assets/audio-f.mp3", questions: [
    paired("F1", "1. seen / ever / a / you / Have / tornado", [
      { key: "question", label: "Question", type: "input", answers: ["Have you ever seen a tornado"], explanation: "Use Have + you + ever + past participle seen." },
      { key: "answer", label: "Listening answer", type: "input", answers: ["No, I haven't", "No I haven't", "No, I have not", "No I have not"], explanation: "The speaker answers negatively: No, I haven't." }
    ]),
    paired("F2", "2. office / worked / an / Have / ever / in / you", [
      { key: "question", label: "Question", type: "input", answers: ["Have you ever worked in an office"], explanation: "Use Have + you + ever + past participle worked + place." },
      { key: "answer", label: "Listening answer", type: "input", answers: ["Yes, I have", "Yes I have"], explanation: "The speaker answers positively: Yes, I have." }
    ]),
    paired("F3", "3. snow / ever / home / Have / because / you / of / stayed", [
      { key: "question", label: "Question", type: "input", answers: ["Have you ever stayed home because of snow"], explanation: "Use Have + you + ever + past participle stayed, followed by the reason." },
      { key: "answer", label: "Listening answer", type: "input", answers: ["No, I haven't", "No I haven't", "No, I have not", "No I have not"], explanation: "The speaker answers negatively: No, I haven't." }
    ])
  ]},
  { key: "G", label: "G", title: "Listen and write the letter.", note: "Listen carefully and choose a, b, or c.", points: 4, audio: "assets/audio-g.mp3", questions: [
    choice("G1", "1.", ["a. sleeping bag", "b. storm shutters", "c. first-aid kit"], "a. sleeping bag", "The recording describes a sleeping bag, so the correct letter is a."),
    choice("G2", "2.", ["a. inland", "b. cash", "c. storm shelter"], "c. storm shelter", "The recording describes a storm shelter, so the correct letter is c."),
    choice("G3", "3.", ["a. supplies", "b. batteries", "c. bottled water"], "b. batteries", "The recording describes batteries, so the correct letter is b."),
    choice("G4", "4.", ["a. first-aid kit", "b. flashlight", "c. trunk"], "a. first-aid kit", "The recording describes a first-aid kit, so the correct letter is a.")
  ]},
  { key: "H", label: "H", title: "Unscramble the words.", note: "Use every letter to make one Unit 16 word.", points: 4, questions: [
    input("H1", "1. y d o d e t s e r", ["destroyed"], "The letters form destroyed, meaning damaged completely."),
    input("H2", "2. r u k n t", ["trunk"], "The letters form trunk, the main woody stem of a tree or a large storage compartment."),
    input("H3", "3. g y m c e r e n e", ["emergency"], "The letters form emergency, a serious unexpected situation requiring immediate action."),
    input("H4", "4. l t e t i o r a p e p", ["toilet paper"], "The letters form toilet paper.")
  ]},
  { key: "I", label: "I", title: "Complete the sentences. Then match them to the correct pictures.", note: "Write the missing emergency-supply word, then choose picture a, b, c, or d.", points: 8, sectionImage: IMG + "i-picture-strip.png", questions: [
    paired("I1", "1. I used my ___ to see outside in the dark.", [
      { key: "word", label: "Missing word", type: "input", answers: ["flashlight", "torch"], explanation: "A flashlight provides portable light in the dark." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["c"], explanation: "Picture c shows a flashlight." }
    ]),
    paired("I2", "2. You don't need to keep ___ in the refrigerator.", [
      { key: "word", label: "Missing word", type: "input", answers: ["canned food", "tinned food"], explanation: "Unopened canned food can be stored safely without refrigeration." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["d"], explanation: "Picture d shows canned food." }
    ]),
    paired("I3", "3. It is safe to drink ___.", [
      { key: "word", label: "Missing word", type: "input", answers: ["bottled water"], explanation: "Sealed bottled water is an important emergency supply." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["b"], explanation: "Picture b shows bottled water." }
    ]),
    paired("I4", "4. I always use ___ to buy things.", [
      { key: "word", label: "Missing word", type: "input", answers: ["cash", "money"], explanation: "Cash or money can be used to pay for goods, including when electronic systems are unavailable." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["a"], explanation: "Picture a shows cash." }
    ])
  ]},
  { key: "J", label: "J", title: "Complete the sentences. Write yet, just, or already.", note: "Use just for something very recent, yet in questions and negatives, and already for something completed earlier than expected.", points: 5, questions: [
    input("J1", "1. He has ___ got cash from the ATM. I saw him at the machine a few minutes ago.", ["just"], "A few minutes ago indicates a very recent action, so use just."),
    input("J2", "2. Have you asked your teacher about the test ___?", ["yet"], "Yet commonly appears at the end of a present-perfect question."),
    input("J3", "3. They've ___ come home from the supermarket five minutes ago.", ["just"], "The intended meaning is a very recent return, so the answer key uses just."),
    input("J4", "4. He hasn't used his new computer ___.", ["yet"], "Yet appears at the end of a negative present-perfect sentence."),
    input("J5", "5. I've ___ read that book five times!", ["already"], "Already emphasizes that the action has been completed repeatedly before now.")
  ]},
  { key: "K", label: "K", title: "Circle the correct words.", note: "Choose the word that occupies the correct position and expresses the intended time relationship.", points: 5, questions: [
    choice("K1", "1. Have you called your mother ___?", ["just", "yet"], "yet", "Yet is used at the end of a present-perfect question."),
    choice("K2", "2. I've ___ finished my homework.", ["just", "yet"], "just", "Just goes between have and the past participle to describe a recent action."),
    choice("K3", "3. My mom has ___ left for work.", ["yet", "already"], "already", "Already fits an affirmative present-perfect statement."),
    choice("K4", "4. We haven't learned about tornadoes ___.", ["yet", "just"], "yet", "Yet is used at the end of a negative present-perfect sentence."),
    choice("K5", "5. Have you ___ finished watching the movie?", ["yet", "just"], "just", "Just can be placed before finished to ask whether the action happened moments ago.")
  ]},
  { key: "L", label: "L", title: "Look and write sentences. Use the present perfect.", note: "Place just, already, or yet in the correct position and use the past participle.", points: 4, questions: [
    input("L1", "1. He / already get cash / from the ATM", ["He has already gotten cash from the ATM", "He has already got cash from the ATM"], "Use has + already + past participle. Gotten is standard American English; got is also accepted in British English.", IMG + "l1.png"),
    input("L2", "2. She / just eat / lunch", ["She has just eaten lunch"], "Use has + just + past participle eaten.", IMG + "l2.png"),
    input("L3", "3. The hurricane / not make landfall / yet", ["The hurricane has not made landfall yet", "The hurricane hasn't made landfall yet"], "Use has not + past participle made, with yet at the end.", IMG + "l3.png"),
    input("L4", "4. I / just buy / the first-aid kit", ["I have just bought the first-aid kit", "I have just bought the first aid kit"], "Use have + just + past participle bought.", IMG + "l4.png")
  ]}
];
