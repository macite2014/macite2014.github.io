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

  /* ---------- 데이터 수집 서버 (구글 Apps Script 웹앱 주소) ----------
     동의한 참여자의 데이터만 이 주소로 전송되어 구글 스프레드시트·드라이브에 모입니다.
     비워두면 아무것도 전송하지 않고, 휴대폰에 대기열로 보관했다가 주소가 입력되면 전송합니다.
     설정 방법: server/데이터수집_설정가이드.md 참고 */
  dataEndpoint: "",

  /* ---------- 개인정보 수집·이용 및 연구 활용 동의서 ----------
     (김해대학교 동의서 A4 원문 기준. 문구를 바꾸면 version도 올려주세요) */
  consent: {
    version: "2026-10-30",
    title: "개인정보 수집·이용 및 연구 활용 동의서",
    org: "김해대학교",
    intro: "김해대학교는 의료기기 체험 운영 및 연구자료 활용과 관련하여 다음과 같이 동의를 받고자 합니다.",
    privacyContact: "",   /* 개인정보 관리책임자 연락처 (예: 김해대학교 ○○팀 055-000-0000) — 입력하면 동의 화면에 표시 */
    sections: [
      {
        key: "c1", required: true,
        title: "1. 개인정보 수집·이용에 대한 동의 (필수)",
        rows: [
          ["수집하는 개인정보 항목", "성명, 생년월일, 연락처(휴대전화), 체험일자, 체험 의료기기명"],
          ["수집 및 이용목적", "체험 참여자 확인, 체험 진행·안전관리, 체험 관련 안내 및 문의 대응"],
          ["보유 및 이용기간", "체험 종료일로부터 1년간 보유 후 지체 없이 파기(관련 법령에 별도 보존 의무가 있는 경우 그 기간까지)"]
        ],
        notice: "동의를 거부할 권리가 있으나, 필수정보 수집에 동의하지 않으면 체험 참여가 제한될 수 있습니다."
      },
      {
        key: "c2", required: true,
        title: "2. 민감정보 수집·이용에 대한 별도 동의 (필수)",
        rows: [
          ["수집하는 민감정보 항목", "의료기기 체험 중 측정·기록되는 신체·건강 관련 정보(예: 혈압, 체성분 등 해당 측정항목) — 앱에 직접 입력한 측정값·결과지 사진 포함"],
          ["수집 및 이용목적", "체험 결과 확인 및 참여자에게 결과 안내, 기기 체험 운영·안전관리"],
          ["보유 및 이용기간", "체험 종료일로부터 1년간 보유 후 지체 없이 파기(관련 법령상 보존 의무가 있는 경우 제외)"]
        ],
        notice: "동의를 거부할 수 있으며, 건강정보 측정·기록이 필요한 체험은 참여가 제한될 수 있습니다."
      },
      {
        key: "c3", required: false,
        title: "3. 연구 활용을 위한 개인정보 추가 이용 동의 (선택)",
        rows: [
          ["이용 항목 및 목적", "체험 참여 정보 및 측정 결과를 의료기기 체험 효과·만족도 분석, 교육·학술연구, 통계자료 작성에 활용"],
          ["연구 활용 방식", "연구 분석 시 직접 식별정보를 분리하고 가명처리 등 보호조치를 적용하며, 결과 발표 시 개인을 식별할 수 없도록 처리"],
          ["보유 및 이용기간", "연구 종료 후 3년간 보유 후 파기(법령 또는 IRB 승인조건에 따라 조정 필요)"]
        ],
        notice: "연구 활용 동의를 거부하더라도 의료기기 체험 참여에 불이익은 없습니다."
      }
    ],
    footer: [
      "개인정보 제공자가 동의한 내용 외의 다른 목적으로 활용하지 않으며, 제공된 개인정보를 변경하고자 할 때에는 개인정보 관리책임자를 통해 열람, 정정을 요구할 수 있습니다.",
      "수집한 개인정보는 정보주체의 동의 없이 수집한 목적 외로 사용하지 않으며 보유 및 이용기간 만료 이후에는 즉시 파기합니다.",
      "만 14세 미만 아동은 법정대리인(보호자)의 동의가 필요합니다."
    ],
    pledge: "본인은 위 내용을 충분히 안내받고, 「개인정보보호법」 등 관련 법규에 의거하여 위와 같이 개인정보 수집 및 활용에 동의합니다."
  },

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
