/* ==========================================================
   김해대학교 G-NEX 스마트헬스 체험 스탬프 앱 설정 파일
   ※ 현장 상황에 맞게 이 파일만 수정하면 됩니다. (메모장으로 열어 수정)
   ========================================================== */
window.APP_CONFIG = {
  eventName: "2026 경남 글로벌 혁신 페스타(G-NEX)",
  boothName: "김해대학교 스마트헬스 체험관",
  eventDate: "2026. 11. 2(월) – 4(수)",

  /* 웹앱 주소 (QR 패널에 들어가는 주소). GitHub Pages에 올린 주소와 반드시 같아야 합니다. */
  appUrl: "https://macite2014.github.io/gnex-stamp/",

  /* 기념품 뽑기 참여 조건: 스탬프 몇 개 이상 모으면 기회를 줄지 (1~6) */
  prizeThreshold: 3,
  prizeName: "기념품 뽑기",

  /* 기념품 뽑기 스태프 확인 PIN (참가자에게 노출 금지) */
  staffPin: "1102",

  /* 결과 사진 최대 장수 (체험 1개당) */
  maxPhotos: 4,

  /* 만족도 조사 링크 (구글폼 등). 비워두면 버튼이 숨겨집니다. */
  surveyUrl: "",

  /* (선택) 참여 통계 수집용 구글 Apps Script 웹앱 주소. 비워두면 통계 전송 안 함.
     ※ 건강 수치·사진은 절대 전송하지 않고, '익명ID·구역·시간'만 전송합니다. */
  statsEndpoint: "",

  /* ---------- 6개 체험 프로그램 (2026 G-NEX 기자재 목록 기준) ----------
     id      : 내부 구분값 (수정 금지)
     token   : QR에 들어가는 고유 코드 (바꾸면 QR 패널을 다시 출력해야 함)
     code    : QR 인식이 안 될 때 직접 입력하는 4자리 숫자 (패널 하단에 표기)
     result  : 결과지 받는 방법 / photoTip : 사진 촬영 안내
     fields  : 결과 직접 입력 항목
       type "number" : 숫자      {key,label,unit,min,max,step,half,ref:[최소,최대],kind:"bmi"}
       type "bp"     : 혈압(최고/최저) {key,label}
       type "grade"  : 선택형    {key,label,options:[...]}
       type "text"   : 글자 입력 {key,label,placeholder}
  ------------------------------------------------------------------ */
  zones: [
    {
      id: "z1", no: 1, name: "Virtual Mate", sub: "AI 자세 · 체력 · 혈압 · 체성분",
      color: "#2F6FE0", img: "img/physio.png", eq: "img/eq-vm.png",
      token: "GXVM21", code: "2101",
      desc: "혈압과 체성분을 측정하고, 매트 위에서 AI가 자세와 체력을 분석해요.",
      result: "용지 출력 — 혈압계·체성분계 결과지가 출력돼요",
      photoTip: "출력된 혈압 결과지와 체성분 결과지를 찍어 두세요",
      fields: [
        { type: "bp", key: "bp", label: "혈압 (최고 / 최저)" },
        { type: "number", key: "pulse", label: "맥박수", unit: "bpm", min: 30, max: 200, ref: [60, 100] },
        { type: "number", key: "weight", label: "체중", unit: "kg", min: 10, max: 250, step: 0.1, half: true },
        { type: "number", key: "muscle", label: "골격근량", unit: "kg", min: 1, max: 80, step: 0.1, half: true },
        { type: "number", key: "fat", label: "체지방률", unit: "%", min: 1, max: 70, step: 0.1, half: true },
        { type: "number", key: "bmi", label: "BMI", unit: "kg/㎡", min: 8, max: 60, step: 0.1, half: true, kind: "bmi" },
        { type: "number", key: "bmr", label: "기초대사량", unit: "kcal", min: 500, max: 4000, half: true },
        { type: "number", key: "score", label: "종합점수", unit: "점", min: 0, max: 100, half: true }
      ]
    },
    {
      id: "z2", no: 2, name: "시메트라", sub: "AI 피부 상태 측정",
      color: "#D9558C", img: "img/joy.png", eq: "img/eq-sm.jpg",
      token: "GXSM32", code: "3202",
      desc: "얼굴을 촬영하면 AI가 모공·주름·잡티·피부톤 등 피부 상태를 분석해요.",
      result: "QR — 화면의 QR을 찍으면 결과를 받을 수 있어요",
      photoTip: "피부 점수와 레이더 차트가 보이는 결과 화면을 찍어 두세요",
      fields: [
        { type: "number", key: "score", label: "피부 점수", unit: "점", min: 0, max: 100, half: true },
        { type: "number", key: "age", label: "피부 나이", unit: "세", min: 1, max: 120, half: true },
        { type: "number", key: "sens", label: "민감", unit: "점", min: 0, max: 100, half: true },
        { type: "number", key: "spot", label: "스팟", unit: "점", min: 0, max: 100, half: true },
        { type: "number", key: "pig", label: "색소", unit: "점", min: 0, max: 100, half: true },
        { type: "number", key: "wrinkle", label: "주름", unit: "점", min: 0, max: 100, half: true },
        { type: "number", key: "pore", label: "모공", unit: "점", min: 0, max: 100, half: true },
        { type: "number", key: "black", label: "블랙헤드", unit: "점", min: 0, max: 100, half: true },
        { type: "number", key: "dark", label: "다크서클", unit: "점", min: 0, max: 100, half: true },
        { type: "number", key: "acne", label: "여드름", unit: "점", min: 0, max: 100, half: true }
      ]
    },
    {
      id: "z3", no: 3, name: "피트러스", sub: "Fitrus AI 체성분 측정",
      color: "#8B3FE0", img: "img/fighting.png", eq: "img/eq-ft.png",
      token: "GXFT43", code: "4303",
      desc: "손에 쥐는 측정기로 체지방률·근육량·BMI 등 체성분을 간편하게 측정해요.",
      result: "이메일 · 태블릿 결과 화면",
      photoTip: "태블릿에 나온 결과 화면(차트·수치)을 찍어 두세요",
      fields: [
        { type: "number", key: "fat", label: "체지방률", unit: "%", min: 1, max: 70, step: 0.1, half: true },
        { type: "number", key: "fatMass", label: "체지방량", unit: "kg", min: 0, max: 150, step: 0.1, half: true },
        { type: "number", key: "muscle", label: "골격근량", unit: "kg", min: 1, max: 80, step: 0.1, half: true },
        { type: "number", key: "weight", label: "체중", unit: "kg", min: 10, max: 250, step: 0.1, half: true },
        { type: "number", key: "bmi", label: "BMI", unit: "kg/㎡", min: 8, max: 60, step: 0.1, half: true, kind: "bmi" },
        { type: "number", key: "bmr", label: "기초대사량", unit: "kcal", min: 500, max: 4000, half: true }
      ]
    },
    {
      id: "z4", no: 4, name: "옴니핏", sub: "뇌파 · 맥파 스트레스 측정",
      color: "#F0702A", img: "img/lab.png", eq: "img/eq-of.jpg",
      token: "GXOF54", code: "5404",
      desc: "뇌파(EEG)·맥파(PPG)를 측정해 스트레스·자율신경 균형·집중도를 확인해요.",
      result: "용지 출력 · 이메일 · 옴니핏 앱",
      photoTip: "출력된 '검사 결과 요약서'를 찍어 두세요",
      fields: [
        { type: "number", key: "brain", label: "두뇌 컨디션 점수", unit: "점", min: 0, max: 100, half: true },
        { type: "number", key: "anAge", label: "자율신경 나이", unit: "세", min: 1, max: 120, half: true },
        { type: "grade", key: "focus", label: "집중도", options: ["매우 낮음", "낮음", "보통", "높음", "매우 높음"] },
        { type: "grade", key: "stress", label: "스트레스", options: ["낮음", "적정", "높음"] },
        { type: "grade", key: "fatigue", label: "누적 피로도", options: ["양호", "관심", "주의", "위험"] }
      ]
    },
    {
      id: "z5", no: 5, name: "위로미", sub: "AI 마음 상담 · 심리 체크",
      color: "#E8384F", img: "img/love.png", eq: "img/eq-wr.png",
      token: "GXWR65", code: "6505",
      desc: "우울·불안·스트레스를 자가검사하고, AI와 음성으로 고민을 상담해요.",
      result: "용지 출력 — 마음건강 결과표와 '오늘의 행운'이 출력돼요",
      photoTip: "출력된 마음건강 결과표를 찍어 두세요",
      fields: [
        { type: "grade", key: "test", label: "검사 종류", options: ["우울", "불안", "스트레스"] },
        { type: "text", key: "result", label: "검사 결과", placeholder: "예) 불안 증상 없음" },
        { type: "number", key: "luckyNo", label: "행운의 숫자", unit: "", min: 0, max: 999, half: true },
        { type: "text", key: "luckyColor", label: "행운의 컬러", placeholder: "예) 바닐라", half: true },
        { type: "text", key: "msg", label: "오늘의 한마디", placeholder: "예) 가능성을 의심하지 말고 도전해." }
      ]
    },
    {
      id: "z6", no: 6, name: "딥메디", sub: "카메라 기반 생체신호 측정",
      color: "#1595C9", img: "img/study.png", eq: "img/eq-dm.jpg",
      token: "GXDM76", code: "7606",
      desc: "화면을 바라보기만 하면 심박·호흡·피로도·스트레스를 비접촉으로 측정해요.",
      result: "QR · 이메일 — 화면의 QR로 결과를 받을 수 있어요",
      photoTip: "심박수·호흡수·피로도·스트레스가 보이는 결과 화면을 찍어 두세요",
      fields: [
        { type: "number", key: "hr", label: "심박수", unit: "회/분", min: 30, max: 200, half: true, ref: [61, 99] },
        { type: "number", key: "rr", label: "호흡수", unit: "회/분", min: 1, max: 60, half: true, ref: [6, 18] },
        { type: "number", key: "fatigue", label: "피로도", unit: "", min: 0, max: 100, half: true, ref: [0, 50] },
        { type: "number", key: "stress", label: "스트레스", unit: "", min: 0, max: 100, half: true, ref: [0, 50] }
      ]
    }
  ]
};
