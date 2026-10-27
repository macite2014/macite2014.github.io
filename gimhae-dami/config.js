/* ==========================================================
   김해대학교 디지털헬스케어관 · 체험 스탬프 앱 설정 파일
   ※ 현장 상황에 맞게 이 파일만 수정하면 됩니다. (메모장으로 열어 수정)
   ========================================================== */
window.APP_CONFIG = {
  eventName: "2026 김해의생명축제 with 의료박람회",
  boothName: "김해대학교 디지털헬스케어관",
  eventDate: "2026. 10. 30(금) – 31(토)",

  /* 경품 지급 조건: 몇 개 구역 스탬프를 모으면 경품을 줄지 (1~6) */
  prizeThreshold: 6,

  /* 경품 데스크 스태프 확인 PIN (4자리 숫자 권장, 참가자에게 노출 금지) */
  staffPin: "2026",

  /* 만족도 조사 링크 (구글폼 등). 비워두면 버튼이 숨겨집니다. */
  surveyUrl: "",

  /* (선택) 참여 통계 수집용 구글 Apps Script 웹앱 주소. 비워두면 통계 전송 안 함.
     ※ 건강 수치는 절대 전송하지 않고, '익명ID·구역·시간'만 전송합니다. */
  statsEndpoint: "",

  /* ---------- 6개 체험 구역 ----------
     id      : 내부 구분값 (수정 금지)
     token   : QR에 들어가는 고유 코드 (바꾸면 QR 패널을 다시 출력해야 함)
     code    : QR 인식이 안 될 때 직접 입력하는 4자리 숫자 (패널 하단에 표기)
     fields  : 건강기록 입력 항목
       type "number" : 숫자 1개      {key,label,unit,min,max,step}
       type "bp"     : 혈압(수축/이완) {key,label}
       type "grade"  : 결과 등급 선택  {key,label,options:[...]}
  ------------------------------------ */
  zones: [
    {
      id: "z1", no: 1, name: "Virtual Mate", sub: "혈압 · 체성분 · AI 운동",
      color: "#2F6FE0", img: "img/nurse.png",
      token: "GHVM31", code: "3101",
      desc: "혈압과 체성분을 측정하고, 매트 위에서 AI 운동 동작을 체험해요.",
      fields: [
        { type: "bp", key: "bp", label: "혈압" },
        { type: "number", key: "pulse", label: "맥박", unit: "회/분", min: 30, max: 200 },
        { type: "number", key: "weight", label: "체중", unit: "kg", min: 10, max: 250, step: 0.1 },
        { type: "number", key: "fat", label: "체지방률", unit: "%", min: 1, max: 70, step: 0.1 },
        { type: "number", key: "muscle", label: "골격근량", unit: "kg", min: 1, max: 80, step: 0.1 },
        { type: "number", key: "bmi", label: "BMI", unit: "", min: 8, max: 60, step: 0.1 },
        { type: "number", key: "score", label: "AI 운동 점수", unit: "점", min: 0, max: 1000 }
      ]
    },
    {
      id: "z2", no: 2, name: "BT CARE", sub: "스마트 헬스 측정",
      color: "#2E9E4F", img: "img/physio.png",
      token: "GHBT52", code: "5202",
      desc: "기기에 올라서서 손잡이를 잡고 몸 상태를 측정해요.",
      fields: [
        { type: "number", key: "score", label: "측정 점수", unit: "점", min: 0, max: 1000 },
        { type: "grade", key: "grade", label: "결과 등급", options: ["좋음", "보통", "관리 필요"] }
      ]
    },
    {
      id: "z3", no: 3, name: "옴니핏", sub: "스트레스 · 두뇌 건강",
      color: "#F0702A", img: "img/ai.png",
      token: "GHOF73", code: "7303",
      desc: "뇌파·맥파를 측정해 스트레스와 두뇌 컨디션을 확인해요.",
      fields: [
        { type: "number", key: "stress", label: "스트레스 지수", unit: "점", min: 0, max: 100 },
        { type: "number", key: "brain", label: "두뇌 건강(집중도)", unit: "점", min: 0, max: 100 },
        { type: "grade", key: "grade", label: "결과 등급", options: ["좋음", "보통", "관리 필요"] }
      ]
    },
    {
      id: "z4", no: 4, name: "위로미", sub: "마음 건강 체크",
      color: "#E8384F", img: "img/love.png",
      token: "GHWR84", code: "8404",
      desc: "키오스크에서 오늘의 마음 건강 상태를 체크해요.",
      fields: [
        { type: "number", key: "mind", label: "마음 건강 점수", unit: "점", min: 0, max: 100 },
        { type: "grade", key: "grade", label: "스트레스 수준", options: ["낮음", "보통", "높음"] }
      ]
    },
    {
      id: "z5", no: 5, name: "피트러스", sub: "스마트 신체 측정",
      color: "#8B3FE0", img: "img/fighting.png",
      token: "GHFR95", code: "9505",
      desc: "기기 앞에 서서 간편하게 신체 컨디션을 측정해요.",
      fields: [
        { type: "number", key: "score", label: "측정 점수", unit: "점", min: 0, max: 1000 },
        { type: "grade", key: "grade", label: "결과 등급", options: ["좋음", "보통", "관리 필요"] }
      ]
    },
    {
      id: "z6", no: 6, name: "딥메디", sub: "얼굴 촬영 비접촉 측정",
      color: "#1595C9", img: "img/study.png",
      token: "GHDM16", code: "1606",
      desc: "화면을 바라보기만 하면 심박·혈압·스트레스를 측정해요.",
      fields: [
        { type: "number", key: "hr", label: "심박수", unit: "회/분", min: 30, max: 200 },
        { type: "bp", key: "bp", label: "혈압" },
        { type: "number", key: "spo2", label: "산소포화도", unit: "%", min: 70, max: 100 },
        { type: "grade", key: "stress", label: "스트레스", options: ["낮음", "보통", "높음"] }
      ]
    }
  ]
};
