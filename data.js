// ============================================================
// 타이틀곡 뮤비 월드컵 후보 데이터 (v1)
// ============================================================
// 이 배열 안의 항목을 자유롭게 추가 / 삭제 / 수정하세요.
// 앱 로직(script.js)은 절대 건드릴 필요 없이, 이 파일만 고치면 됩니다.
//
// [필드 설명]
//   id        : 다른 항목과 겹치지 않는 고유 값
//   name      : 화면에 표시될 이름 (그룹명)
//   group     : 세대 · 데뷔년월 (표시용)
//   song      : 곡 제목 (표시용)
//   gender    : "female"(여돌) 또는 "male"(남돌) — 이 값으로 구분합니다
//   youtubeId : 유튜브 영상 주소의 v= 뒤에 오는 11자리 코드
//   start     : 영상이 몇 초부터 재생될지 (기본 0)
//
// 전부 공식 뮤직비디오(official MV) 기준으로 채웠고, 각 영상은 유튜브 oEmbed로
// title/author_name이 실제 그룹·곡과 일치하는지 확인했습니다.
// 예외(정식 MV가 없어 다른 영상으로 대체한 경우)는 항목 끝 주석에 표시했습니다.
// ============================================================

const CANDIDATES = [
  // ---- 여돌 (female) — 52곡 ----
  { id: "f01", name: "(여자)아이들 ((G)I-DLE)", group: "4세대 · 2018.05 데뷔", song: "TOMBOY", gender: "female", youtubeId: "Jh4QFaPmdss", start: 0 },
  { id: "f02", name: "(여자)아이들 ((G)I-DLE)", group: "4세대 · 2018.05 데뷔", song: "Nxde", gender: "female", youtubeId: "fCO7f0SmrDc", start: 0 },
  { id: "f03", name: "(여자)아이들 ((G)I-DLE)", group: "4세대 · 2018.05 데뷔", song: "퀸카 (Queencard)", gender: "female", youtubeId: "7HDeem-JaSY", start: 0 },
  { id: "f04", name: "(여자)아이들 ((G)I-DLE)", group: "4세대 · 2018.05 데뷔", song: "클락션 (Klaxon)", gender: "female", youtubeId: "rTKqSmX9XhQ", start: 0 },
  { id: "f05", name: "ITZY (있지)", group: "4세대 · 2019.02 데뷔", song: "WANNABE", gender: "female", youtubeId: "fE2h3lGlOsk", start: 0 },
  { id: "f06", name: "ITZY (있지)", group: "4세대 · 2019.02 데뷔", song: "SNEAKERS", gender: "female", youtubeId: "Hbb5GPxXF1w", start: 0 },
  { id: "f07", name: "aespa", group: "4세대 · 2020.11 데뷔", song: "Next Level", gender: "female", youtubeId: "4TWR90KJl84", start: 0 },
  { id: "f08", name: "aespa", group: "4세대 · 2020.11 데뷔", song: "Savage", gender: "female", youtubeId: "WPdWvnAAurg", start: 0 },
  { id: "f09", name: "aespa", group: "4세대 · 2020.11 데뷔", song: "Spicy", gender: "female", youtubeId: "Os_heh8vPfs", start: 0 },
  { id: "f10", name: "aespa", group: "4세대 · 2020.11 데뷔", song: "Drama", gender: "female", youtubeId: "D8VEhcPeSlc", start: 0 },
  { id: "f11", name: "aespa", group: "4세대 · 2020.11 데뷔", song: "Supernova", gender: "female", youtubeId: "phuiiNCxRMg", start: 0 },
  { id: "f12", name: "aespa", group: "4세대 · 2020.11 데뷔", song: "Whiplash", gender: "female", youtubeId: "jWQx2f-CErU", start: 0 },
  { id: "f13", name: "STAYC", group: "4세대 · 2020.11 데뷔", song: "ASAP", gender: "female", youtubeId: "NsY-9MCOIAQ", start: 0 },
  { id: "f14", name: "STAYC", group: "4세대 · 2020.11 데뷔", song: "RUN2U", gender: "female", youtubeId: "grG41kS4MUA", start: 0 },
  { id: "f15", name: "STAYC", group: "4세대 · 2020.11 데뷔", song: "Teddy Bear", gender: "female", youtubeId: "SxHmoifp0oQ", start: 0 },
  { id: "f16", name: "STAYC", group: "4세대 · 2020.11 데뷔", song: "Bubble", gender: "female", youtubeId: "3-ptVHZZdBg", start: 0 },
  { id: "f17", name: "IVE", group: "4세대 · 2021.12 데뷔", song: "LOVE DIVE", gender: "female", youtubeId: "Y8JFxS1HlDo", start: 0 },
  { id: "f18", name: "IVE", group: "4세대 · 2021.12 데뷔", song: "After LIKE", gender: "female", youtubeId: "F0B7HDiY-10", start: 0 },
  { id: "f19", name: "IVE", group: "4세대 · 2021.12 데뷔", song: "I AM", gender: "female", youtubeId: "6ZUIwj3FgUY", start: 0 },
  { id: "f20", name: "IVE", group: "4세대 · 2021.12 데뷔", song: "Baddie", gender: "female", youtubeId: "Da4P2uT4mVc", start: 0 },
  { id: "f21", name: "IVE", group: "4세대 · 2021.12 데뷔", song: "HEYA", gender: "female", youtubeId: "07EzMbVH3QE", start: 0 },
  { id: "f22", name: "IVE", group: "4세대 · 2021.12 데뷔", song: "REBEL HEART", gender: "female", youtubeId: "g36q0ZLvygQ", start: 0 },
  { id: "f23", name: "NewJeans", group: "4세대 · 2022.07 데뷔", song: "Ditto", gender: "female", youtubeId: "pSUydWEqKwE", start: 0 },
  { id: "f24", name: "NewJeans", group: "4세대 · 2022.07 데뷔", song: "OMG", gender: "female", youtubeId: "_ZAgIHmHLdc", start: 0 },
  { id: "f25", name: "NewJeans", group: "4세대 · 2022.07 데뷔", song: "Super Shy", gender: "female", youtubeId: "ArmDp-zijuc", start: 0 },
  { id: "f26", name: "NewJeans", group: "4세대 · 2022.07 데뷔", song: "ETA", gender: "female", youtubeId: "jOTfBlKSQYY", start: 0 },
  { id: "f27", name: "NewJeans", group: "4세대 · 2022.07 데뷔", song: "How Sweet", gender: "female", youtubeId: "Q3K0TOvTOno", start: 0 },
  { id: "f28", name: "LE SSERAFIM", group: "4세대 · 2022.05 데뷔", song: "ANTIFRAGILE", gender: "female", youtubeId: "pyf8cbqyfPs", start: 0 },
  { id: "f29", name: "LE SSERAFIM", group: "4세대 · 2022.05 데뷔", song: "UNFORGIVEN", gender: "female", youtubeId: "tIN8f9gmH4M", start: 0 },
  { id: "f30", name: "LE SSERAFIM", group: "4세대 · 2022.05 데뷔", song: "Perfect Night", gender: "female", youtubeId: "hLvWy2b857I", start: 0 },
  { id: "f31", name: "NMIXX", group: "4세대 · 2022.02 데뷔", song: "DICE", gender: "female", youtubeId: "p1bjnyDqI9k", start: 0 },
  { id: "f32", name: "NMIXX", group: "4세대 · 2022.02 데뷔", song: "Love Me Like This", gender: "female", youtubeId: "EDnwWcFpObo", start: 0 },
  { id: "f33", name: "NMIXX", group: "4세대 · 2022.02 데뷔", song: "DASH", gender: "female", youtubeId: "7UecFm_bSTU", start: 0 }, // 남돌 PLAVE의 동명곡 "Dash"와는 다른 곡
  { id: "f34", name: "Kep1er (케플러)", group: "4세대 · 2022.01 데뷔", song: "Up!", gender: "female", youtubeId: "hr-325mclek", start: 0 },
  { id: "f35", name: "Kep1er (케플러)", group: "4세대 · 2022.01 데뷔", song: "Giddy", gender: "female", youtubeId: "w9ueRzymcU0", start: 0 },
  { id: "f36", name: "EVERGLOW (에버글로우)", group: "4세대 · 2019.03 데뷔", song: "DUN DUN", gender: "female", youtubeId: "NoYKBAajoyo", start: 0 },
  { id: "f37", name: "BABYMONSTER", group: "5세대 · 2023.11 데뷔", song: "SHEESH", gender: "female", youtubeId: "2wA_b6YHjqQ", start: 0 },
  { id: "f38", name: "BABYMONSTER", group: "5세대 · 2023.11 데뷔", song: "DRIP", gender: "female", youtubeId: "Zp-Jhuhq0bQ", start: 0 },
  { id: "f39", name: "BABYMONSTER", group: "5세대 · 2023.11 데뷔", song: "WE GO UP", gender: "female", youtubeId: "wlHwjkYpSr0", start: 0 },
  { id: "f40", name: "Kiss of Life", group: "5세대 · 2023.07 데뷔", song: "Bad News", gender: "female", youtubeId: "U8A5sK5PRCI", start: 0 },
  { id: "f41", name: "Kiss of Life", group: "5세대 · 2023.07 데뷔", song: "Midas Touch", gender: "female", youtubeId: "oKVYm8mIUdo", start: 0 },
  { id: "f42", name: "Kiss of Life", group: "5세대 · 2023.07 데뷔", song: "Sticky", gender: "female", youtubeId: "IajeQM00yfE", start: 0 },
  { id: "f43", name: "Kiss of Life", group: "5세대 · 2023.07 데뷔", song: "Get Loud", gender: "female", youtubeId: "yXRlrix-pPk", start: 0 },
  { id: "f44", name: "ILLIT", group: "5세대 · 2024.03 데뷔", song: "Cherish (My Love)", gender: "female", youtubeId: "tbDGl7jEazA", start: 0 },
  { id: "f45", name: "ILLIT", group: "5세대 · 2024.03 데뷔", song: "NOT CUTE ANYMORE", gender: "female", youtubeId: "x_RYZsOfpKY", start: 0 },
  { id: "f46", name: "ILLIT", group: "5세대 · 2024.03 데뷔", song: "It's Me", gender: "female", youtubeId: "bMhDJ0S0OBA", start: 0 },
  { id: "f47", name: "리센느 (RESCENE)", group: "5세대 · 2024.09 데뷔", song: "LOVE ATTACK", gender: "female", youtubeId: "9XttLI0oH0I", start: 0 },
  { id: "f48", name: "리센느 (RESCENE)", group: "5세대 · 2024.09 데뷔", song: "Pinball", gender: "female", youtubeId: "B8JJ8RNM-60", start: 0 },
  { id: "f49", name: "리센느 (RESCENE)", group: "5세대 · 2024.09 데뷔", song: "Pretty Girl", gender: "female", youtubeId: "qZlu2j2SiBA", start: 0 }, // 정식 MV 없음(KARA 리메이크 싱글) — RESCENE 자체 Special Video로 대체
  { id: "f50", name: "Hearts2Hearts (하츠투하츠)", group: "5세대 · 2024.08 데뷔", song: "RUDE!", gender: "female", youtubeId: "F7sGJVUrkjQ", start: 0 },
  { id: "f51", name: "KiiiKiii (키키)", group: "5세대 · 2024.11 데뷔", song: "DANCING ALONE", gender: "female", youtubeId: "LBh9mouO4iI", start: 0 },
  { id: "f52", name: "KiiiKiii (키키)", group: "5세대 · 2024.11 데뷔", song: "404 (New Era)", gender: "female", youtubeId: "3_l-UI4prVY", start: 0 },

  // ---- 남돌 (male) — 41곡 ----
  { id: "m01", name: "Stray Kids", group: "4세대 · 2018.03 데뷔", song: "神메뉴 (God's Menu)", gender: "male", youtubeId: "TQTlCHxyuu8", start: 0 },
  { id: "m02", name: "Stray Kids", group: "4세대 · 2018.03 데뷔", song: "Back Door", gender: "male", youtubeId: "X-uJtV8ScYk", start: 0 },
  { id: "m03", name: "Stray Kids", group: "4세대 · 2018.03 데뷔", song: "소리꾼 (Thunderous)", gender: "male", youtubeId: "EaswWiwMVs8", start: 0 },
  { id: "m04", name: "Stray Kids", group: "4세대 · 2018.03 데뷔", song: "MANIAC", gender: "male", youtubeId: "OvioeS1ZZ7o", start: 0 }, // 여돌 VIVIZ의 동명곡 "MANIAC"과는 다른, Stray Kids 자체 곡
  { id: "m05", name: "Stray Kids", group: "4세대 · 2018.03 데뷔", song: "특 (S-Class)", gender: "male", youtubeId: "JsOOis4bBFg", start: 0 },
  { id: "m06", name: "Stray Kids", group: "4세대 · 2018.03 데뷔", song: "락 (樂)", gender: "male", youtubeId: "dBDkYofMUs4", start: 0 },
  { id: "m07", name: "Stray Kids", group: "4세대 · 2018.03 데뷔", song: "Chk Chk Boom", gender: "male", youtubeId: "0P0aQreFs8w", start: 0 },
  { id: "m08", name: "TXT (투모로우바이투게더)", group: "4세대 · 2019.03 데뷔", song: "9와 4분의 3 승강장에서 너를 기다려 (Magic)", gender: "male", youtubeId: "6yWPfUz0z94", start: 0 },
  { id: "m09", name: "TXT (투모로우바이투게더)", group: "4세대 · 2019.03 데뷔", song: "Blue Hour", gender: "male", youtubeId: "Vd9QkWsd5p4", start: 0 }, // 공식 제목은 "5시 53분의 하늘에서 발견한 너와 나"
  { id: "m10", name: "TXT (투모로우바이투게더)", group: "4세대 · 2019.03 데뷔", song: "0X1=LOVESONG (I Know I Love You)", gender: "male", youtubeId: "d5bbqKYu51w", start: 0 },
  { id: "m11", name: "TXT (투모로우바이투게더)", group: "4세대 · 2019.03 데뷔", song: "Sugar Rush Ride", gender: "male", youtubeId: "P9tKTxbgdkk", start: 0 },
  { id: "m12", name: "TXT (투모로우바이투게더)", group: "4세대 · 2019.03 데뷔", song: "Deja Vu", gender: "male", youtubeId: "DiHUEWBRQEI", start: 0 },
  { id: "m13", name: "ATEEZ", group: "4세대 · 2018.10 데뷔", song: "BAD", gender: "male", youtubeId: "-q_S27LbNKU", start: 0 },
  { id: "m14", name: "ATEEZ", group: "4세대 · 2018.10 데뷔", song: "WONDERLAND", gender: "male", youtubeId: "Z_BhMhZpAug", start: 0 },
  { id: "m15", name: "ATEEZ", group: "4세대 · 2018.10 데뷔", song: "Guerrilla", gender: "male", youtubeId: "2HcVZm_4qAI", start: 0 },
  { id: "m16", name: "ATEEZ", group: "4세대 · 2018.10 데뷔", song: "BOUNCY (K-HOT CHILI PEPPERS)", gender: "male", youtubeId: "U0G5OA6ZH5w", start: 0 },
  { id: "m17", name: "ENHYPEN", group: "4세대 · 2020.11 데뷔", song: "Drunk-Dazed", gender: "male", youtubeId: "Fc7-Oe0tj5k", start: 0 },
  { id: "m18", name: "ENHYPEN", group: "4세대 · 2020.11 데뷔", song: "Bite Me", gender: "male", youtubeId: "wXFLzODIdUI", start: 0 },
  { id: "m19", name: "ENHYPEN", group: "4세대 · 2020.11 데뷔", song: "XO (Only If You Say Yes)", gender: "male", youtubeId: "FPDYeRk2PO8", start: 0 },
  { id: "m20", name: "TREASURE", group: "4세대 · 2020.08 데뷔", song: "JIKJIN (직진)", gender: "male", youtubeId: "ZJaKdBBzUYk", start: 0 },
  { id: "m21", name: "TREASURE", group: "4세대 · 2020.08 데뷔", song: "HELLO", gender: "male", youtubeId: "aPd9exmH17o", start: 0 },
  { id: "m22", name: "RIIZE", group: "5세대 · 2023.09 데뷔", song: "Talk Saxy", gender: "male", youtubeId: "gJMheHHf4GQ", start: 0 },
  { id: "m23", name: "RIIZE", group: "5세대 · 2023.09 데뷔", song: "Love 119", gender: "male", youtubeId: "0TAAUWHo4Ec", start: 0 },
  { id: "m24", name: "RIIZE", group: "5세대 · 2023.09 데뷔", song: "Boom Boom Bass", gender: "male", youtubeId: "78lNnCitcBM", start: 0 },
  { id: "m25", name: "RIIZE", group: "5세대 · 2023.09 데뷔", song: "Fly Up", gender: "male", youtubeId: "vLUtHODdLzk", start: 0 },
  { id: "m26", name: "TWS (투어스)", group: "5세대 · 2024.02 데뷔", song: "내가 S면 넌 나의 N이 되어줘 (Plot Twist)", gender: "male", youtubeId: "hVAc1Vf2ITU", start: 0 },
  { id: "m27", name: "TWS (투어스)", group: "5세대 · 2024.02 데뷔", song: "OVERDRIVE", gender: "male", youtubeId: "TzbGBkEh9ms", start: 0 },
  { id: "m28", name: "ZEROBASEONE", group: "5세대 · 2023.07 데뷔", song: "GOOD SO BAD", gender: "male", youtubeId: "V5ACuj_jOnc", start: 0 },
  { id: "m29", name: "ZEROBASEONE", group: "5세대 · 2023.07 데뷔", song: "Feel the POP", gender: "male", youtubeId: "L9Ts6kiEAts", start: 0 },
  { id: "m30", name: "BOYNEXTDOOR", group: "5세대 · 2023.05 데뷔", song: "뭣 같아 (But Sometimes)", gender: "male", youtubeId: "97_-_WugRFA", start: 0 },
  { id: "m31", name: "BOYNEXTDOOR", group: "5세대 · 2023.05 데뷔", song: "Earth, Wind & Fire", gender: "male", youtubeId: "u9nP3qXQA4o", start: 0 },
  { id: "m32", name: "BOYNEXTDOOR", group: "5세대 · 2023.05 데뷔", song: "Nice Guy (멋있는 애)", gender: "male", youtubeId: "HJlc_tFkB3M", start: 0 },
  { id: "m33", name: "BOYNEXTDOOR", group: "5세대 · 2023.05 데뷔", song: "오늘만 I LOVE YOU", gender: "male", youtubeId: "B4mLKcVIERs", start: 0 },
  { id: "m34", name: "BOYNEXTDOOR", group: "5세대 · 2023.05 데뷔", song: "I Feel Good", gender: "male", youtubeId: "ic31SJ4uK4Y", start: 0 },
  { id: "m35", name: "BOYNEXTDOOR", group: "5세대 · 2023.05 데뷔", song: "Hollywood Action", gender: "male", youtubeId: "yAtew9dZX_E", start: 0 },
  { id: "m36", name: "NCT WISH", group: "5세대 · 2024.02 데뷔", song: "Steady", gender: "male", youtubeId: "IKlkZZv76Ho", start: 0 },
  { id: "m37", name: "NCT WISH", group: "5세대 · 2024.02 데뷔", song: "poppop", gender: "male", youtubeId: "LNETckymbzk", start: 0 },
  { id: "m38", name: "NCT WISH", group: "5세대 · 2024.02 데뷔", song: "COLOR", gender: "male", youtubeId: "28dAfmIAlCo", start: 0 },
  { id: "m39", name: "PLAVE (플레이브)", group: "5세대 · 2023.03 데뷔", song: "WAY 4 LUV", gender: "male", youtubeId: "Ms6EOeh0NWg", start: 0 }, // 버추얼 아이돌 — 애니메이션 뮤비가 맞음
  { id: "m40", name: "PLAVE (플레이브)", group: "5세대 · 2023.03 데뷔", song: "Pump Up The Volume!", gender: "male", youtubeId: "EYG4ROejmyI", start: 0 },
  { id: "m41", name: "PLAVE (플레이브)", group: "5세대 · 2023.03 데뷔", song: "Dash", gender: "male", youtubeId: "b3GoZMfHJT4", start: 0 }, // 여돌 NMIXX의 동명곡 "DASH"와는 다른 곡
];
