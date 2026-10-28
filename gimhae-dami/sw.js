/* 오프라인 캐시: 한 번 접속하면 행사장 인터넷이 불안정해도 앱이 열립니다 */
const V='ghs-v5';
const ASSETS=['./','index.html','config.js','manifest.json','lib/jsQR.js','lib/html2canvas.min.js',
 'img/logo.png','img/logo.svg','img/logo-anchor.png','img/hello.png','img/joy.png','img/guide.png','img/grad.png','img/fighting.png','img/love.png','img/medi.png',
 'img/nurse.png','img/physio.png','img/ai.png','img/study.png','img/icon-192.png','img/ai-dami.png','img/lab.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request; if(r.method!=='GET') return;
  const url=new URL(r.url);
  // 페이지·설정: 네트워크 우선(설정 변경 즉시 반영), 실패 시 캐시
  if(url.origin===location.origin && (r.mode==='navigate'||url.pathname.endsWith('config.js'))){
    e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(V).then(c=>c.put(r.mode==='navigate'?'index.html':r,cp));return res;}).catch(()=>caches.match(r.mode==='navigate'?'index.html':r,{ignoreSearch:true})));
    return;
  }
  // 나머지(이미지·라이브러리·웹폰트): 캐시 우선
  e.respondWith(caches.match(r,{ignoreSearch:true}).then(m=>m||fetch(r).then(res=>{const cp=res.clone();caches.open(V).then(c=>c.put(r,cp));return res;})));
});
