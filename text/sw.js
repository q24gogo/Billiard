/* 3Q 당구 교과서 서비스 워커: 설치(홈 화면 바로가기)와 오프라인 열기
   - HTML은 네트워크 우선(새 버전 바로 반영), 안 되면 저장본
   - 아이콘·매니페스트는 저장본 우선
   - 중계(MQTT WebSocket)는 서비스 워커를 거치지 않음 */
const CACHE='q24-text-v3';
const SHELL=['./3q_Text.html','./3q_member.html','./manifest.webmanifest','./member.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>Promise.all(SHELL.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE&&k.startsWith('q24-text-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;
 const html=r.mode==='navigate'||u.pathname.endsWith('.html');
 if(html){e.respondWith(fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp));}return res;}).catch(()=>caches.match(r,{ignoreSearch:true}).then(m=>m||caches.match('./3q_Text.html'))));return;}
 e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp));}return res;})));});
