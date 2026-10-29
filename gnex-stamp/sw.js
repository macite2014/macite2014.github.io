/* 오프라인 캐시: 한 번 접속하면 행사장 인터넷이 불안정해도 앱이 열립니다 */
const V='gnex-v2';
const ASSETS=['./','index.html','config.js','manifest.json','lib/jsQR.js','lib/html2canvas.min.js',
 'img/logo.png','img/logo-anchor.png','img/ai-dami.png','img/medi.png','img/icon-192.png',
 'img/physio.png','img/joy.png','img/fighting.png','img/lab.png','img/love.png','img/study.png',
 'img/eq-vm.png','img/eq-sm.jpg','img/eq-ft.png','img/eq-of.jpg','img/eq-wr.png','img/eq-dm.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request; if(r.method!=='GET') return;
  const url=new URL(r.url);
  if(url.origin===location.origin && (r.mode==='navigate'||url.pathname.endsWith('config.js'))){
    e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(V).then(c=>c.put(r.mode==='navigate'?'index.html':r,cp));return res;}).catch(()=>caches.match(r.mode==='navigate'?'index.html':r,{ignoreSearch:true})));
    return;
  }
  e.respondWith(caches.match(r,{ignoreSearch:true}).then(m=>m||fetch(r).then(res=>{const cp=res.clone();caches.open(V).then(c=>c.put(r,cp));return res;})));
});
