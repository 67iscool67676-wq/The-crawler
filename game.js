(function(){
const __boot=function(CACHE){
'use strict';
let CI_T=0,CI_S=0;const COUT={t:[],s:[]};window.__COUT=COUT;window.__CACHED=!!CACHE;
window.addEventListener('error',e=>{try{let d=document.getElementById('errshow');if(!d){d=document.createElement('div');d.id='errshow';d.style.cssText='position:fixed;left:8px;bottom:30px;z-index:99;color:#f88;font:12px monospace;background:rgba(0,0,0,.7);padding:4px;max-width:90vw;pointer-events:none';document.body.appendChild(d);}d.textContent='ERR: '+e.message+' @'+(e.lineno||'')+':'+(e.colno||'');}catch(_){}});
(function(){try{const st=document.createElement('style');st.textContent='#grain{opacity:.025!important}#hud{opacity:.72}#hud,#hud *{text-shadow:none!important}';(document.head||document.body).appendChild(st);}catch(e){}})();
(function(){try{const st=document.createElement('style');st.textContent=
 'button{transition:background .18s,box-shadow .18s,transform .08s,border-color .18s}'+
 'button:hover{background:#7d1010!important;border-color:#e04040!important;box-shadow:0 0 22px rgba(210,30,30,.45)}'+
 'button:active{transform:scale(.96)}'+
 '.screen{animation:scrIn .45s ease-out}@keyframes scrIn{from{opacity:0}to{opacity:1}}'+
 '#go{animation:goPulse 2.6s ease-in-out infinite}@keyframes goPulse{0%,100%{box-shadow:0 0 0 rgba(200,20,20,0)}50%{box-shadow:0 0 26px rgba(200,20,20,.55)}}'+
 '#obj{transition:opacity .4s}#hud{transition:opacity .4s}';(document.head||document.body).appendChild(st);}catch(e){}})();
(function(){try{const st=document.createElement('style');st.textContent='.mod[data-m=winter],.mod[data-m=halloween],.mod[data-m=endless],.mod[data-m=daily]{display:none!important}#cmp{display:none!important}#ach,#ach+*{}';(document.head||document.body).appendChild(st);}catch(e){}})();
const $=id=>document.getElementById(id);
const TMK=[['js-start',performance.now()]];function tmk(l){TMK.push([l,performance.now()]);if(!window.__SHOWTMK)return;try{let d=document.getElementById('tmk');if(!d){d=document.createElement('div');d.id='tmk';d.style.cssText='position:fixed;right:6px;top:70px;z-index:99;color:#9f9;font:11px monospace;background:rgba(0,0,0,.75);padding:4px;white-space:pre;pointer-events:none';document.body.appendChild(d);}d.textContent=TMK.map((m,i)=>m[0]+' '+(m[1]/1000).toFixed(1)+'s'+(i?' (+'+((m[1]-TMK[i-1][1])/1000).toFixed(1)+')':'')).join('\n');}catch(e){}}
let FIRSTRUN=false,EZ1=false;try{const st2=document.createElement('style');st2.textContent='body.nomsg #msg{display:none!important}';(document.head||document.body).appendChild(st2);}catch(e){}try{const st=document.createElement('style');st.textContent='#state{display:none!important}';(document.head||document.body).appendChild(st);}catch(e){}try{const ks=[];for(let i=0;i<localStorage.length;i++)ks.push(localStorage.key(i));FIRSTRUN=!ks.some(k=>k&&k.indexOf('crawler')===0);}catch(e){FIRSTRUN=false;}
if(!window.THREE){$('err').style.display='flex';$('start').style.display='none';return;}
function mulberry(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return ((t^t>>>14)>>>0)/4294967296;};}
let RNG=mulberry(1987);const MOD={blood:false,one:false,dark:false,winter:false,daily:false,halloween:false,hardcore:false,endless:false};const CUTMOD={winter:1,daily:1,halloween:1,endless:1};let SCARE=1;try{SCARE=+localStorage.getItem('crawler_scare')||1;}catch(e){}
try{const _Cy=THREE.CylinderGeometry,_Sp=THREE.SphereGeometry,_Co=THREE.ConeGeometry,_To=THREE.TorusGeometry;
 THREE.CylinderGeometry=class extends _Cy{constructor(a,b,h,rs,hs,oe,ts,tl){super(a,b,h,Math.max(rs||8,14),hs||1,oe,ts,tl);}};
 THREE.SphereGeometry=class extends _Sp{constructor(r,w,h,ps,pl,ts,tl){super(r,Math.max(w||8,16),Math.max(h||6,12),ps,pl,ts,tl);}};
 THREE.ConeGeometry=class extends _Co{constructor(r,h,rs,hs,oe,ts,tl){super(r,h,Math.max(rs||8,14),hs||1,oe,ts,tl);}};
 THREE.TorusGeometry=class extends _To{constructor(r,t,rs,ts,a){super(r,t,Math.max(rs||8,10),Math.max(ts||6,24),a);}};}catch(e){}
const T=THREE,R=()=>RNG(),rr=(a,b)=>a+R()*(b-a),H=146,E=H-5,C=46,CE=C-5;
let renderer;
try{renderer=new T.WebGLRenderer({antialias:true,powerPreference:'high-performance'});}
catch(e){$('err').style.display='flex';$('start').style.display='none';return;}
let isTouch=false;const mobile=!!(window.matchMedia&&matchMedia('(pointer:coarse)').matches);let HI=!mobile,DBG=false;const DEVOK=!/github\.io$/.test(location.hostname);addEventListener('keydown',e=>{if(e.code==='Backquote'&&DEVOK)DBG=!DBG;});
renderer.setPixelRatio(1);renderer.setSize(innerWidth,innerHeight);
renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;
renderer.outputEncoding=T.sRGBEncoding;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;
const canvas=renderer.domElement;document.body.insertBefore(canvas,document.body.firstChild);
const scene=new T.Scene(),SKYD=new T.Color(0x4a5562),SKY=new T.Color(0x05070c),SKYF=new T.Color(0x56607a);
scene.background=SKY.clone();scene.fog=new T.FogExp2(0x070a10,0.05);
const camera=new T.PerspectiveCamera(75,innerWidth/innerHeight,0.05,700);
camera.rotation.order='YXZ';scene.add(camera);
addEventListener('resize',()=>{renderer.setSize(innerWidth,innerHeight);try{if(COMP)COMP.setSize(innerWidth,innerHeight);}catch(e){}camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();});
(function(){try{const c=document.createElement('canvas');c.width=c.height=96;const x=c.getContext('2d'),d=x.createImageData(96,96);for(let i=0;i<d.data.length;i+=4){const v=R()*255;d.data[i]=d.data[i+1]=d.data[i+2]=v;d.data[i+3]=255;}x.putImageData(d,0,0);$('grain').style.backgroundImage='url('+c.toDataURL()+')';}catch(e){}})();

(function(){try{const c=document.createElement('canvas');c.width=640;c.height=400;const x=c.getContext('2d');x.fillStyle='#000';x.fillRect(0,0,640,400);
 const g=x.createRadialGradient(320,190,20,320,200,250);g.addColorStop(0,'#cfc8ba');g.addColorStop(.7,'#7d766c');g.addColorStop(1,'#000');x.fillStyle=g;x.beginPath();x.ellipse(320,200,175,240,0,0,7);x.fill();
 x.fillStyle='#000';[[235,150],[405,150]].forEach(p=>{x.beginPath();x.ellipse(p[0],p[1],58,66,0,0,7);x.fill();});x.fillStyle='#fff';x.beginPath();x.arc(240,158,4,0,7);x.arc(400,158,4,0,7);x.fill();
 x.fillStyle='#000';x.beginPath();x.ellipse(306,232,6,14,0,0,7);x.ellipse(334,232,6,14,0,0,7);x.fill();x.beginPath();x.ellipse(320,330,120,84,0,0,7);x.fill();
 x.fillStyle='#d6cc9c';for(let i=0;i<19;i++){const a=(i-9)/9,px=320+a*108,w=7;x.beginPath();x.moveTo(px-w,262+a*a*30);x.lineTo(px+w,262+a*a*30);x.lineTo(px+rr(-3,3),262+a*a*30+rr(26,58));x.fill();x.beginPath();x.moveTo(px-w,402-a*a*18);x.lineTo(px+w,402-a*a*18);x.lineTo(px+rr(-3,3),402-a*a*18-rr(22,50));x.fill();}
 x.strokeStyle='rgba(40,20,30,.5)';for(let i=0;i<60;i++){x.lineWidth=rr(.5,2);let px=rr(170,470),py=rr(20,380);x.beginPath();x.moveTo(px,py);for(let j=0;j<6;j++){px+=rr(-18,18);py+=rr(-18,18);x.lineTo(px,py);}x.stroke();}
 x.strokeStyle='#050505';for(let i=0;i<70;i++){x.lineWidth=rr(2,7);const px=rr(120,520);x.beginPath();x.moveTo(px,0);x.quadraticCurveTo(px+rr(-40,40),rr(80,200),px+rr(-60,60),rr(150,400));x.stroke();}
 $('face').style.backgroundImage='url('+c.toDataURL('image/jpeg',.85)+')';}catch(e){}})();
/* ---------- lights ---------- */
const hemi=new T.HemisphereLight(0x3a4c70,0x090a08,0.27);scene.add(hemi);
const moon=new T.DirectionalLight(0x8fa6d8,0.38);moon.position.set(-60,90,-45);moon.castShadow=true;
moon.shadow.mapSize.set(2048,2048);const sc=moon.shadow.camera;sc.left=-48;sc.right=48;sc.top=48;sc.bottom=-48;sc.near=1;sc.far=280;moon.shadow.radius=3;moon.shadow.bias=-0.001;
moon.shadow.autoUpdate=false;moon.shadow.needsUpdate=true;scene.add(moon);scene.add(moon.target);
const lamp=new T.PointLight(0xffa860,2.1,24,1.35);lamp.position.set(0.3,-0.15,-0.3);camera.add(lamp);
lamp.castShadow=HI;lamp.shadow.mapSize.set(512,512);lamp.shadow.camera.near=.15;lamp.shadow.camera.far=18;lamp.shadow.autoUpdate=false;lamp.shadow.needsUpdate=true;lamp.shadow.bias=-.008;
const FP={ox:0,oy:0,th:0,tv:0,fh:0,fv:0,spd:0,lf:0,thr:0,gup:1,gw:false,pumped:1};const lantern=new T.Group();lantern.scale.setScalar(.5);lantern.position.set(0.17,-0.15,-0.31);camera.add(lantern);
(function(){const dark=new T.MeshStandardMaterial({color:0x14110d,roughness:.5,metalness:.8});
 lantern.add(new T.Mesh(new T.CylinderGeometry(.022,.026,.085,12),new T.MeshBasicMaterial({color:0xff9a3a,fog:false,toneMapped:false})));
 const fl=new T.Mesh(new T.SphereGeometry(.012,8,8),new T.MeshBasicMaterial({color:0xfff0c0,fog:false,toneMapped:false}));fl.scale.y=1.8;lantern.add(fl);
 for(let i=0;i<4;i++){const a=i*1.57+.78;const b=new T.Mesh(new T.CylinderGeometry(.0025,.0025,.1,4),dark);b.position.set(Math.cos(a)*.03,0,Math.sin(a)*.03);lantern.add(b);}
 const cap=new T.Mesh(new T.ConeGeometry(.042,.035,14),dark);cap.position.y=.065;lantern.add(cap);const cap2=new T.Mesh(new T.CylinderGeometry(.012,.012,.02,8),dark);cap2.position.y=.09;lantern.add(cap2);
 const base=new T.Mesh(new T.CylinderGeometry(.036,.04,.022,14),dark);base.position.y=-.053;lantern.add(base);
 const h=new T.Mesh(new T.TorusGeometry(.04,.003,5,18,Math.PI),dark);h.position.y=.085;lantern.add(h);})();
// first-person shotgun
const camFP=new T.Group();camFP.visible=false;camera.add(camFP);{const cm=new T.MeshStandardMaterial({color:0x151515,roughness:.5,metalness:.3});const b=new T.Mesh(new T.BoxGeometry(.2,.12,.08),cm);camFP.add(b);const l=new T.Mesh(new T.CylinderGeometry(.035,.04,.06,14),new T.MeshStandardMaterial({color:0x080808,roughness:.2,metalness:.6}));l.rotation.x=Math.PI/2;l.position.set(.03,0,-.06);camFP.add(l);const fb=new T.Mesh(new T.BoxGeometry(.07,.045,.03),new T.MeshStandardMaterial({color:0xdddddd,emissive:0x222222,roughness:.3,metalness:.7}));fb.position.set(-.05,.08,-.02);camFP.add(fb);camFP.userData.fb=fb;}
const gunFP=new T.Group();gunFP.scale.setScalar(.5);gunFP.position.set(-.13,-.15,-.275);gunFP.visible=false;camera.add(gunFP);
(function(){const st=new T.MeshStandardMaterial({color:0x17181b,roughness:.35,metalness:.9}),wd=new T.MeshStandardMaterial({color:0x4a2c18,roughness:.6});
 [-.022,.022].forEach(x=>{const b=new T.Mesh(new T.CylinderGeometry(.02,.022,.75,10),st);b.rotation.x=Math.PI/2;b.position.set(x,.02,-.25);gunFP.add(b);});
 const p=new T.Mesh(new T.CylinderGeometry(.035,.035,.2,10),wd);p.rotation.x=Math.PI/2;p.position.set(0,-.03,-.2);gunFP.add(p);
 const s=new T.Mesh(new T.CylinderGeometry(.03,.05,.4,10),wd);s.rotation.x=Math.PI/2-.2;s.position.set(0,-.03,.3);gunFP.add(s);gunFP.rotation.y=.06;})();

/* ---------- textures ---------- */
function tex(size,fn,rep,srgb){const c=document.createElement('canvas');c.width=c.height=size;fn(c.getContext('2d'),size);
 const t=new T.CanvasTexture(c);t.wrapS=t.wrapT=T.RepeatWrapping;if(rep)t.repeat.set(rep,rep);if(srgb!==false)t.encoding=T.sRGBEncoding;return t;}
function speck(x,s,n,cols,mn,mx){for(let i=0;i<n;i++){x.fillStyle=cols[(R()*cols.length)|0];x.globalAlpha=rr(.15,.7);const r=rr(mn,mx);x.beginPath();x.arc(R()*s,R()*s,r,0,7);x.fill();}x.globalAlpha=1;}
const groundFn=(x,s)=>{x.fillStyle='#1c2216';x.fillRect(0,0,s,s);speck(x,s,300,['#14180f','#2a2a1b','#252f1a','#30281c','#191a12'],8,46);speck(x,s,12000,['#2f3d22','#11150c','#3a3323','#26301c','#454232','#0c0f08'],.6,2.4);
 for(let i=0;i<900;i++){x.strokeStyle=R()<.5?'#34432a':'#1a2112';x.globalAlpha=.5;const px=R()*s,py=R()*s;x.beginPath();x.moveTo(px,py);x.lineTo(px+rr(-4,4),py-rr(3,9));x.stroke();}x.globalAlpha=1;};
const stoneFn=(x,s)=>{x.fillStyle='#7c7a74';x.fillRect(0,0,s,s);speck(x,s,200,['#66645f','#8d8b84','#5b5a55','#4f4e4a'],8,36);speck(x,s,7000,['#55534e','#9a9890','#6d6b66','#454440'],.5,2);
 x.strokeStyle='#2c2b28';x.lineWidth=1.2;for(let i=0;i<12;i++){let px=R()*s,py=R()*s;x.globalAlpha=.6;x.beginPath();x.moveTo(px,py);for(let j=0;j<7;j++){px+=rr(-22,22);py+=rr(4,26);x.lineTo(px,py);}x.stroke();}
 x.globalAlpha=1;speck(x,s,90,['#3d4a2a','#2f3b22','#26301c'],5,24);for(let i=0;i<10;i++){x.fillStyle='#1c1b19';x.globalAlpha=.25;x.fillRect(R()*s,0,rr(2,7),rr(s*.3,s));}x.globalAlpha=1;};
const barkFn=(x,s)=>{x.fillStyle='#1d1711';x.fillRect(0,0,s,s);for(let i=0;i<700;i++){x.strokeStyle=R()<.5?'#0d0a07':'#31271c';x.globalAlpha=.6;x.lineWidth=rr(1,3);const px=R()*s;x.beginPath();x.moveTo(px,R()*s);x.lineTo(px+rr(-5,5),R()*s);x.stroke();}x.globalAlpha=1;};
const woodFn=(x,s)=>{x.fillStyle='#3b2c1e';x.fillRect(0,0,s,s);for(let i=0;i<8;i++){x.fillStyle=i%2?'#33261a':'#42311f';x.fillRect(i*s/8,0,s/8-2,s);}for(let i=0;i<300;i++){x.strokeStyle='#1f160e';x.globalAlpha=.5;const px=R()*s;x.beginPath();x.moveTo(px,R()*s);x.lineTo(px+rr(-2,2),R()*s);x.stroke();}x.globalAlpha=1;};
const skinFn=(x,s)=>{x.fillStyle='#b3a99b';x.fillRect(0,0,s,s);speck(x,s,110,['#8f867b','#a39a8d','#7c6f6a','#c9c1b4','#6f5f5e'],8,34);speck(x,s,3500,['#6f6258','#d2cabd','#544a48'],.5,1.8);
 for(let i=0;i<90;i++){x.strokeStyle=R()<.5?'#4a3f55':'#5b2f33';x.globalAlpha=.5;x.lineWidth=rr(.6,2);let px=R()*s,py=R()*s;x.beginPath();x.moveTo(px,py);for(let j=0;j<9;j++){px+=rr(-16,16);py+=rr(-16,16);x.lineTo(px,py);}x.stroke();}
 for(let i=0;i<18;i++){x.fillStyle='#3a2622';x.globalAlpha=.35;x.beginPath();x.ellipse(R()*s,R()*s,rr(6,20),rr(3,9),R()*3,0,7);x.fill();}x.globalAlpha=1;};
const clothFn=(x,s)=>{x.fillStyle='#24211d';x.fillRect(0,0,s,s);speck(x,s,60,['#16130f','#322c24','#1c2018'],8,30);for(let i=0;i<s;i+=3){x.strokeStyle='#0f0d0b';x.globalAlpha=.3;x.beginPath();x.moveTo(0,i);x.lineTo(s,i+rr(-2,2));x.stroke();}x.globalAlpha=1;};
const leafFn=(x,s)=>{x.clearRect(0,0,s,s);const cols=['#4a3418','#5c3d1a','#3b2a14','#6b4a22','#2f2110'];for(let i=0;i<260;i++){const a=R()*7,d=Math.sqrt(R())*s*.46;x.save();x.translate(s/2+Math.cos(a)*d,s/2+Math.sin(a)*d);x.rotate(R()*7);x.fillStyle=cols[(R()*cols.length)|0];x.globalAlpha=rr(.6,1);x.beginPath();x.ellipse(0,0,rr(4,9),rr(2,4),0,0,7);x.fill();x.restore();}};
const mistFn=(x,s)=>{const g=x.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);g.addColorStop(0,'rgba(255,255,255,1)');g.addColorStop(1,'rgba(255,255,255,0)');x.fillStyle=g;x.fillRect(0,0,s,s);};
const skinFn2=(x,s)=>{x.fillStyle='#8c847a';x.fillRect(0,0,s,s);for(let i=0;i<260;i++){const g=x.createRadialGradient(0,0,0,0,0,1);const cx=R()*s,cy=R()*s,r=rr(8,48);const cc=R()<.4?'60,48,46':R()<.6?'120,112,100':'72,60,70';x.fillStyle='rgba('+cc+','+rr(.08,.3)+')';x.beginPath();x.ellipse(cx,cy,r,r*rr(.4,1),R()*3,0,7);x.fill();}
 for(let i=0;i<9000;i++){x.fillStyle=R()<.5?'rgba(40,32,30,.35)':'rgba(170,160,150,.25)';x.fillRect(R()*s,R()*s,rr(.6,1.6),rr(.6,1.6));}
 x.lineCap='round';for(let i=0;i<140;i++){let px=R()*s,py=R()*s,w=rr(.6,2.4);x.strokeStyle=R()<.5?'rgba(55,40,72,.55)':'rgba(90,30,36,.5)';x.lineWidth=w;x.beginPath();x.moveTo(px,py);for(let j=0;j<10;j++){px+=rr(-14,14);py+=rr(-14,14);x.lineTo(px,py);if(R()<.25){x.stroke();x.lineWidth=w*=.7;x.beginPath();x.moveTo(px,py);}}x.stroke();}
 for(let i=0;i<40;i++){x.fillStyle='rgba(30,14,12,'+rr(.2,.45)+')';x.beginPath();x.ellipse(R()*s,R()*s,rr(4,16),rr(2,7),R()*3,0,7);x.fill();}
 for(let i=0;i<70;i++){x.strokeStyle='rgba(20,14,12,.5)';x.lineWidth=rr(.5,1.2);const px=R()*s,py=R()*s;x.beginPath();x.moveTo(px,py);x.quadraticCurveTo(px+rr(-6,6),py+rr(-6,6),px+rr(-12,12),py+rr(-4,4));x.stroke();}};
const groundT=tex(512,groundFn,50),groundB=tex(512,groundFn,50,false),stoneT=tex(256,stoneFn,1),barkT=tex(128,barkFn,1),woodT=tex(128,woodFn,1),skinT=tex(512,skinFn2,1),skinB=tex(256,skinFn,1,false),clothT=tex(128,clothFn,1),leafT=tex(256,leafFn,0),mistT=tex(64,mistFn,0);
const stoneB=tex(256,stoneFn,1,false);
const stoneM=new T.MeshStandardMaterial({map:stoneT,bumpMap:stoneB,bumpScale:.035,roughness:.95,color:0x9b9b96});
const darkStoneM=new T.MeshStandardMaterial({map:stoneT,bumpMap:stoneB,bumpScale:.045,roughness:.95,color:0x5f6064});
const barkM=new T.MeshStandardMaterial({map:barkT,bumpMap:barkT,bumpScale:.03,roughness:1,color:0x7a6a5a});
const woodM=new T.MeshLambertMaterial({map:woodT,color:0x9a8a78});
const ironM=new T.MeshStandardMaterial({color:0x101114,roughness:.55,metalness:.8});
const rustM=new T.MeshStandardMaterial({color:0x4a2a1c,roughness:.85,metalness:.3});
const genM=new T.MeshStandardMaterial({color:0x26382a,roughness:.7,metalness:.4});
const bushM=new T.MeshLambertMaterial({color:0x141a10});
const waterM=new T.MeshStandardMaterial({color:0x0a1218,roughness:.08,metalness:.7,transparent:true,opacity:.88});
const blackM=new T.MeshBasicMaterial({color:0x000000});
const pathBulbM=new T.MeshBasicMaterial({color:0x1c1a16});

// fractal noise -> colour map + normal map, so surfaces catch the lantern light like real stone, bark and dirt
function fbm(size,oct,base){const out=new Float32Array(size*size);let amp=1,tot=0;for(let o=0;o<oct;o++){const n=base<<o;if(n>size)break;const g=new Float32Array(n*n);for(let i=0;i<g.length;i++)g[i]=R();
  for(let y=0;y<size;y++){const fy=y/size*n,y0=fy|0,ty=fy-y0,sy=ty*ty*(3-2*ty),y1=(y0+1)%n;for(let x=0;x<size;x++){const fx=x/size*n,x0=fx|0,tx=fx-x0,sx=tx*tx*(3-2*tx),x1=(x0+1)%n;
    const a=g[y0*n+x0],b=g[y0*n+x1],c=g[y1*n+x0],d=g[y1*n+x1];out[y*size+x]+=(a+(b-a)*sx+(c-a)*sy+(a-b-c+d)*sx*sy)*amp;}}tot+=amp;amp*=.55;}
 for(let i=0;i<out.length;i++)out[i]/=tot;return out;}
function fbmSkip(size,oct,base){for(let o=0;o<oct;o++){const n=base<<o;if(n>size)break;for(let i=0;i<n*n;i++)R();}}
function matTex(size,oct,base,colFn,str,rep){const ck=CI_T++,cc=(CACHE&&CACHE.t&&CACHE.t[ck]&&CACHE.t[ck].size===size)?CACHE.t[ck]:null;let h,h2;if(cc){fbmSkip(size,oct,base);fbmSkip(size,3,base);}else{h=fbm(size,oct,base);h2=fbm(size,3,base);}const c=document.createElement('canvas');c.width=c.height=size;const x=c.getContext('2d'),im=x.createImageData(size,size),c2=document.createElement('canvas');c2.width=c2.height=size;const x2=c2.getContext('2d'),nm=x2.createImageData(size,size);
 if(cc){im.data.set(cc.a);nm.data.set(cc.b);}else for(let y=0;y<size;y++)for(let xx=0;xx<size;xx++){const i=y*size+xx,col=colFn(h[i],h2[i]);im.data[i*4]=col[0];im.data[i*4+1]=col[1];im.data[i*4+2]=col[2];im.data[i*4+3]=255;
  const l=h[y*size+(xx+size-1)%size],r=h[y*size+(xx+1)%size],u=h[((y+size-1)%size)*size+xx],d=h[((y+1)%size)*size+xx],nx=(l-r)*str,ny=(d-u)*str,L=Math.hypot(nx,ny,1);nm.data[i*4]=(nx/L*.5+.5)*255;nm.data[i*4+1]=(ny/L*.5+.5)*255;nm.data[i*4+2]=(1/L*.5+.5)*255;nm.data[i*4+3]=255;}
 if(!cc)COUT.t[ck]={size,a:new Uint8Array(im.data),b:new Uint8Array(nm.data)};x.putImageData(im,0,0);x2.putImageData(nm,0,0);const m=new T.CanvasTexture(c),n=new T.CanvasTexture(c2);[m,n].forEach(t=>{t.wrapS=t.wrapT=T.RepeatWrapping;if(rep)t.repeat.set(rep,rep);});m.encoding=T.sRGBEncoding;return {map:m,nor:n,canvas:c};}
const TS=matTex(512,7,4,(v,w)=>{const g=46+v*140,m=Math.max(0,(w-.56)*3.2),l=Math.max(0,(v-.62)*4);return [g*(1-m*.5)+l*40,g*(1-m*.28)+m*6+l*34,g*(1-m*.6)+l*6];},10);
(function(){const x=TS.canvas.getContext('2d'),S2=512;x.lineCap='round';
 for(let i=0;i<22;i++){let px=R()*S2,py=R()*S2;x.strokeStyle='rgba(20,18,16,'+rr(.4,.8)+')';x.lineWidth=rr(.6,2);x.beginPath();x.moveTo(px,py);for(let j=0;j<12;j++){px+=rr(-14,14);py+=rr(4,22);x.lineTo(px,py);if(R()<.15){const bx2=px,by=py;x.moveTo(bx2,by);x.lineTo(bx2+rr(-20,20),by+rr(5,20));x.moveTo(px,py);}}x.stroke();}
 for(let i=0;i<70;i++){const cx=R()*S2,cy=R()*S2,r=rr(3,14),c=R()<.6?'rgba(150,150,70,':'rgba(180,120,40,';for(let k=0;k<14;k++){x.fillStyle=c+rr(.15,.45)+')';x.beginPath();x.arc(cx+rr(-r,r),cy+rr(-r,r),rr(1,r*.5),0,7);x.fill();}}
 for(let i=0;i<26;i++){const px=R()*S2,g=x.createLinearGradient(px,0,px,S2);g.addColorStop(0,'rgba(10,10,8,0)');g.addColorStop(.3,'rgba(10,10,8,.22)');g.addColorStop(1,'rgba(10,10,8,0)');x.fillStyle=g;x.fillRect(px,R()*S2*.4,rr(3,12),S2);}
 TS.map.needsUpdate=true;})();
const TG=matTex(1024,7,8,(v,w)=>{const t=Math.min(1,Math.max(0,(w-.44)*5)),a=28+v*74,mud=Math.max(0,(.36-w)*4);return [a*(1-t*.45)*(1-mud*.3),a*(.86+t*.07)*(1-mud*.35),a*(.62-t*.2)*(1-mud*.4)];},7,46);
(function(){const x=TG.canvas.getContext('2d'),S2=1024;
 for(let i=0;i<5000;i++){const px=R()*S2,py=R()*S2,r=rr(.6,2.6),g=rr(60,150);x.fillStyle='rgba('+g+','+(g*.95|0)+','+(g*.85|0)+','+rr(.4,.9)+')';x.beginPath();x.ellipse(px,py,r,r*rr(.6,1),R()*3,0,7);x.fill();x.fillStyle='rgba(0,0,0,.35)';x.beginPath();x.ellipse(px+r*.5,py+r*.6,r,r*.6,0,0,7);x.fill();}
 const lc=['#5a3a18','#6b4a20','#3e2a12','#7a5222','#4a3214'];for(let i=0;i<2600;i++){x.save();x.translate(R()*S2,R()*S2);x.rotate(R()*7);x.fillStyle=lc[(R()*lc.length)|0];x.globalAlpha=rr(.35,.8);x.beginPath();x.ellipse(0,0,rr(2,5),rr(1,2.4),0,0,7);x.fill();x.restore();}
 for(let i=0;i<4000;i++){const px=R()*S2,py=R()*S2;x.strokeStyle=R()<.5?'rgba(70,90,40,.55)':'rgba(40,52,24,.6)';x.lineWidth=rr(.6,1.4);x.beginPath();x.moveTo(px,py);x.lineTo(px+rr(-3,3),py-rr(3,9));x.stroke();}
 x.globalAlpha=1;TG.map.needsUpdate=true;})();
const TB=(function(){const c=document.createElement('canvas'),S2=256;c.width=c.height=S2;const x=c.getContext('2d');x.fillStyle='#2a221a';x.fillRect(0,0,S2,S2);
 for(let i=0;i<70;i++){let px=R()*S2;const w=rr(2,7),dark=R()<.6;x.strokeStyle=dark?'rgba(8,6,4,.85)':'rgba(70,58,44,.6)';x.lineWidth=w;x.beginPath();x.moveTo(px,-10);for(let y=0;y<S2+20;y+=12){px+=rr(-3,3);x.lineTo(px,y);}x.stroke();}
 for(let i=0;i<1400;i++){x.fillStyle=R()<.5?'rgba(0,0,0,.4)':'rgba(90,80,64,.35)';x.fillRect(R()*S2,R()*S2,rr(1,3),rr(2,9));}
 for(let i=0;i<30;i++){const cx=R()*S2,cy=R()*S2;for(let k=0;k<10;k++){x.fillStyle='rgba(110,120,70,'+rr(.2,.5)+')';x.beginPath();x.arc(cx+rr(-8,8),cy+rr(-8,8),rr(1,4),0,7);x.fill();}}
 const m=new T.CanvasTexture(c);m.wrapS=m.wrapT=T.RepeatWrapping;m.encoding=T.sRGBEncoding;const id=x.getImageData(0,0,S2,S2).data,c2=document.createElement('canvas');c2.width=c2.height=S2;const x2=c2.getContext('2d'),nm=x2.createImageData(S2,S2);
 const L=(i,j)=>id[(((j+S2)%S2)*S2+((i+S2)%S2))*4]/255;for(let j=0;j<S2;j++)for(let i=0;i<S2;i++){const nx=(L(i-1,j)-L(i+1,j))*7,ny=(L(i,j+1)-L(i,j-1))*7,l=Math.hypot(nx,ny,1),k=(j*S2+i)*4;nm.data[k]=(nx/l*.5+.5)*255;nm.data[k+1]=(ny/l*.5+.5)*255;nm.data[k+2]=(1/l*.5+.5)*255;nm.data[k+3]=255;}
 x2.putImageData(nm,0,0);const n=new T.CanvasTexture(c2);n.wrapS=n.wrapT=T.RepeatWrapping;return {map:m,nor:n,canvas:c};})();
const TR=matTex(256,6,6,(v,w)=>{const r=Math.max(0,Math.min(1,(w-.42)*3));const a=40+v*60;return [a*(1-r)+(110+v*70)*r,a*.85*(1-r)+(48+v*30)*r,a*.7*(1-r)+(18+v*10)*r];},8);
const TP=matTex(256,6,6,(v,w)=>{const ch=w>.6?1:0,a=30+v*40;return ch?[90+v*40,46+v*20,20]:[a*.7,a*1.05,a*.75];},6);
const TW=(function(){const c=document.createElement('canvas'),S2=256;c.width=c.height=S2;const x=c.getContext('2d');const pw=S2/5;
 for(let p=0;p<5;p++){const b=rr(40,62);x.fillStyle='rgb('+(b+12|0)+','+(b|0)+','+(b*.72|0)+')';x.fillRect(p*pw,0,pw,S2);
  for(let i=0;i<46;i++){let py=R()*S2;x.strokeStyle='rgba('+(R()<.5?'20,14,8,':'95,78,55,')+rr(.2,.55)+')';x.lineWidth=rr(.5,1.6);x.beginPath();const x0=p*pw+R()*pw;x.moveTo(x0,0);for(let y=0;y<=S2;y+=8)x.lineTo(x0+Math.sin(y*.05+i)*rr(1,3),y);x.stroke();}
  if(R()<.6){const ky=R()*S2,kx=p*pw+pw/2+rr(-6,6);for(let r=9;r>1;r-=1.5){x.strokeStyle='rgba(25,16,8,.5)';x.beginPath();x.ellipse(kx,ky,r*.7,r*1.6,0,0,7);x.stroke();}}
  x.fillStyle='rgba(8,5,2,.85)';x.fillRect(p*pw,0,2,S2);}
 for(let i=0;i<20;i++){const px=R()*S2,py=R()*S2;x.fillStyle='rgba(20,30,10,.25)';x.beginPath();x.arc(px,py,rr(6,20),0,7);x.fill();}
 const m=new T.CanvasTexture(c);m.wrapS=m.wrapT=T.RepeatWrapping;m.encoding=T.sRGBEncoding;return m;})();
woodM.map=TW;woodM.color.setHex(0xb0a090);woodM.needsUpdate=true;
rustM.map=TR.map;rustM.normalMap=TR.nor;rustM.color.setHex(0xffffff);rustM.needsUpdate=true;
genM.map=TP.map;genM.normalMap=TP.nor;genM.color.setHex(0xffffff);genM.needsUpdate=true;
const TK=matTex(128,5,8,()=>[128,128,128],5,3);
[stoneM,darkStoneM].forEach(m=>{m.map=TS.map;m.bumpMap=null;m.normalMap=TS.nor;m.normalScale.set(1.4,1.4);});stoneM.color.setHex(0xb4b4ae);darkStoneM.color.setHex(0x74767c);
barkM.map=TB.map;barkM.bumpMap=null;barkM.normalMap=TB.nor;barkM.normalScale.set(1.6,1.6);barkM.color.setHex(0xc0b0a0);

/* ---------- helpers ---------- */
const LK={x:100,z:5,r:30,ir:7};function inDeep(x,z,m){const d=Math.hypot(x-LK.x,z-LK.z);return d>LK.ir+1.2-m&&d<LK.r-1.2+m;}
let MUF=null,VERB=null,distN=null,SURF='grass',ENV='out';
function mkVerb(cp){const sr=actx.sampleRate;master.disconnect();MUF=actx.createBiquadFilter();MUF.type='lowpass';MUF.frequency.value=20000;MUF.Q.value=.5;master.connect(MUF);MUF.connect(cp);
 const ir=(len,decay,dens,bright)=>{const b=actx.createBuffer(2,Math.floor(sr*len),sr);for(let c=0;c<2;c++){const a=b.getChannelData(c);let lp=0;for(let i=0;i<a.length;i++){const t=i/a.length;let v=(Math.random()<dens?Math.random()*2-1:0)*Math.pow(1-t,decay);lp+=(v-lp)*bright;a[i]=lp*(i<sr*.004?0:1);}}return b;};
 VERB={};[['out',2.2,3.4,.35,.25],['in',.7,2.2,1,.6],['cave',4.2,1.6,1,.35],['woods',1.4,3,.6,.3]].forEach(v=>{const cv=actx.createConvolver();cv.buffer=ir(v[1],v[2],v[3],v[4]);const g=actx.createGain();g.gain.value=0;MUF.connect(cv);cv.connect(g);g.connect(cp);VERB[v[0]]=g;});
 distN=actx.createWaveShaper();const cu=new Float32Array(1024);for(let i=0;i<1024;i++){const x=i/512-1;cu[i]=Math.tanh(x*7)*.6;}distN.curve=cu;distN.oversample='2x';const dg=actx.createGain();dg.gain.value=.5;distN.connect(dg);dg.connect(wet);}
let grassSh=null,GRASS=null;const circles=[],boxes=[],spots=[],avoid=[],acts=[],tombs=[];
let cIdx=null,cN=0,cMax=0;function cCells(){if(!cIdx)cIdx=new Map();if(cN===circles.length)return cIdx;for(let q=cN;q<circles.length;q++){const c=circles[q];cMax=Math.max(cMax,c.r);const i0=Math.floor((c.x-c.r)/8),i1=Math.floor((c.x+c.r)/8),j0=Math.floor((c.z-c.r)/8),j1=Math.floor((c.z+c.r)/8);for(let i=i0;i<=i1;i++)for(let j=j0;j<=j1;j++){const k=(i+500)*1000+(j+500);let a=cIdx.get(k);if(!a){a=[];cIdx.set(k,a);}a.push(c);}}cN=circles.length;return cIdx;}
function nearC(x,z,r,f){const G=cCells(),i0=Math.floor((x-r)/8),i1=Math.floor((x+r)/8),j0=Math.floor((z-r)/8),j1=Math.floor((z+r)/8);for(let i=i0;i<=i1;i++)for(let j=j0;j<=j1;j++){const a=G.get((i+500)*1000+(j+500));if(a)for(const c of a)if(f(c))return true;}return false;}
function resolve(p,rad){
 {const dx=p.x-LK.x,dz=p.z-LK.z,d=Math.hypot(dx,dz),a=LK.ir+1.2+rad,b=LK.r-1.2-rad;if(d>a&&d<b){const t=(d-a<b-d)?a:b;p.x=LK.x+dx/d*t;p.z=LK.z+dz/d*t;}}
 nearC(p.x,p.z,rad+.01,c=>{const dx=p.x-c.x,dz=p.z-c.z,d=Math.hypot(dx,dz),m=c.r+rad;if(d<m){if(d<1e-4){p.x+=m;return false;}p.x=c.x+dx/d*m;p.z=c.z+dz/d*m;}return false;});
 for(const b of boxes){if(b.off)continue;if(p.x>b.x0-rad&&p.x<b.x1+rad&&p.z>b.z0-rad&&p.z<b.z1+rad){const l=p.x-(b.x0-rad),r=(b.x1+rad)-p.x,n=p.z-(b.z0-rad),f=(b.z1+rad)-p.z,mn=Math.min(l,r,n,f);
  if(mn===l)p.x=b.x0-rad;else if(mn===r)p.x=b.x1+rad;else if(mn===n)p.z=b.z0-rad;else p.z=b.z1+rad;}}
}
const smn=(a,b,k)=>{const h=Math.max(k-Math.abs(a-b),0)/k;return Math.min(a,b)-h*h*k*.25;};
function blocked(x,z,pad){pad=pad||0;if(inDeep(x,z,pad))return true;for(const b of boxes){if(b.off)continue;if(x>b.x0-pad&&x<b.x1+pad&&z>b.z0-pad&&z<b.z1+pad)return true;}if(nearC(x,z,Math.max(0,pad)+.01,c=>{const m=c.r+pad;return (x-c.x)*(x-c.x)+(z-c.z)*(z-c.z)<m*m;}))return true;return false;}
const UP=new T.Vector3(0,1,0),V=(x,y,z)=>new T.Vector3(x,y,z);
// weathering: push every vertex by smooth noise so nothing is a perfect box or ball
function org(g,amp,seed,f){seed=seed||0;f=f||1.5;const p=g.attributes.position;for(let i=0;i<p.count;i++){const x=p.getX(i)*f,y=p.getY(i)*f,z=p.getZ(i)*f;
 const a=Math.sin(x*3.3+y*2.1+seed)+Math.sin(z*2.7-y*1.3+seed*1.7)+.5*Math.sin(x*7.7+z*6.1),b=Math.sin(y*3.1+z*2.3+seed*2.1)+Math.sin(x*2.9+z*1.1)+.5*Math.sin(y*8.3+x*5.9),c=Math.sin(z*3.7+x*1.9+seed*.7)+Math.sin(y*2.1-x*2.7)+.5*Math.sin(z*7.1+y*6.7);
 p.setXYZ(i,p.getX(i)+a*amp*.4,p.getY(i)+b*amp*.4,p.getZ(i)+c*amp*.4);}g.computeVertexNormals();return g;}
function limb(a,b,r0,r1,mat,seg){const d=new T.Vector3().subVectors(b,a),len=d.length();const m=new T.Mesh(new T.CylinderGeometry(r1,r0,len,seg||6),mat);
 m.position.copy(a).addScaledVector(d,.5);m.quaternion.setFromUnitVectors(UP,d.normalize());return m;}
function bx(w,h,d,x,y,z,mat){const m=new T.Mesh(new T.BoxGeometry(w,h,d),mat);m.position.set(x,y,z);return m;}
function wbx(w,h,d,x,y,z,mat,amp){const sg=v=>Math.max(1,Math.min(8,Math.ceil(v/.9)));const m=new T.Mesh(org(new T.BoxGeometry(w,h,d,sg(w),sg(h),sg(d)),(amp||.06)*.45,x+z,1.2),mat);m.position.set(x,y,z);return m;}
function cyl(r0,r1,h,x,y,z,mat,seg){const m=new T.Mesh(new T.CylinderGeometry(r0,r1,h,seg||10),mat);m.position.set(x,y,z);return m;}
function glow(x,y,z,col,size,op){const s=new T.Sprite(new T.SpriteMaterial({map:mistT,color:col,transparent:true,opacity:op||.5,depthWrite:false}));s.scale.set(size,size,1);s.position.set(x,y,z);scene.add(s);return s;}
const S=new T.Group();
function bake(){S.updateMatrixWorld(true);const by=new Map();S.traverse(o=>{if(!o.isMesh)return;let a=by.get(o.material);if(!a){a=[];by.set(o.material,a);}a.push(o);});
 by.forEach((arr,mat)=>{let n=0;const gs=arr.map(o=>{const g=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();g.applyMatrix4(o.matrixWorld);n+=g.attributes.position.count;return g;});
  const pos=new Float32Array(n*3),nor=new Float32Array(n*3),uv=new Float32Array(n*2);let k=0;
  gs.forEach(g=>{pos.set(g.attributes.position.array,k*3);nor.set(g.attributes.normal.array,k*3);uv.set(g.attributes.uv.array,k*2);k+=g.attributes.position.count;g.dispose();});
  const G=new T.BufferGeometry();G.setAttribute('position',new T.BufferAttribute(pos,3));G.setAttribute('normal',new T.BufferAttribute(nor,3));G.setAttribute('uv',new T.BufferAttribute(uv,2));
  const m=new T.Mesh(G,mat);m.castShadow=!!mat.isMeshStandardMaterial||!!mat.isMeshLambertMaterial;m.receiveShadow=true;scene.add(m);});}
function clear(x,z,pad){for(const b of boxes)if(x>b.x0-pad&&x<b.x1+pad&&z>b.z0-pad&&z<b.z1+pad)return false;if(nearC(x,z,Math.max(0,pad)+.01,c=>Math.hypot(x-c.x,z-c.z)<c.r+pad))return false;for(const a of avoid)if(Math.hypot(x-a.x,z-a.z)<a.r)return false;for(const k of spots)if(Math.hypot(x-k[0],z-k[1])<pad+.6)return false;return true;}

/* ---------- ground / sky ---------- */
const skyG=new T.Group();scene.add(skyG);
tmk('textures');const ground=(function(){const g=new T.PlaneGeometry(2*H+40,2*H+40,140,140);g.rotateX(-Math.PI/2);const p=g.attributes.position,col=new Float32Array(p.count*3),n=fbm(128,3,16);
 for(let i=0;i<p.count;i++){const u=((p.getX(i)+H+20)/(2*H+40)*127)|0,v=((p.getZ(i)+H+20)/(2*H+40)*127)|0,k=.5+n[v*128+u]*1;col[i*3]=k*1.05;col[i*3+1]=k;col[i*3+2]=k*.88;}
 g.setAttribute('color',new T.BufferAttribute(col,3));const m=new T.Mesh(g,new T.MeshStandardMaterial({map:TG.map,normalMap:TG.nor,roughness:1,vertexColors:true}));m.receiveShadow=true;scene.add(m);return m;})();
const pathT=tex(256,(x,s)=>{x.fillStyle='#3a3630';x.fillRect(0,0,s,s);speck(x,s,6000,['#57524a','#2a2622','#6a655c','#1d1a17'],.8,3.4);},0);pathT.repeat.set(1.5,62*H/46);
const path=new T.Mesh(new T.PlaneGeometry(3,2*H+12),new T.MeshStandardMaterial({map:pathT,bumpMap:pathT,bumpScale:.05,roughness:1}));path.rotation.x=-Math.PI/2;path.position.set(0,.012,-6);path.receiveShadow=true;scene.add(path);
(function(){const n=600,pos=new Float32Array(n*3);for(let i=0;i<n;i++){const a=R()*6.283,e=rr(.08,1.5),r=450;pos[i*3]=Math.cos(a)*Math.cos(e)*r;pos[i*3+1]=Math.sin(e)*r;pos[i*3+2]=Math.sin(a)*Math.cos(e)*r;}
 const g=new T.BufferGeometry();g.setAttribute('position',new T.BufferAttribute(pos,3));skyG.add(new T.Points(g,new T.PointsMaterial({color:0xaab4d0,size:1.3,sizeAttenuation:false,fog:false,transparent:true,opacity:.7})));
 const mo=new T.Mesh(new T.SphereGeometry(13,24,24),new T.MeshBasicMaterial({color:0xdde4f5,fog:false}));mo.position.set(-130,150,-250);skyG.add(mo);
 const halo=new T.Sprite(new T.SpriteMaterial({map:mistT,color:0x8fa0c8,fog:false,transparent:true,opacity:.2,depthWrite:false}));halo.scale.set(70,70,1);halo.position.copy(mo.position);skyG.add(halo);})();

(function(){const c=document.createElement('canvas');c.width=1024;c.height=512;const x=c.getContext('2d');const g=x.createLinearGradient(0,0,0,512);g.addColorStop(0,'#010205');g.addColorStop(.42,'#060a13');g.addColorStop(.5,'#0b101a');g.addColorStop(1,'#0b101a');x.fillStyle=g;x.fillRect(0,0,1024,512);
 const n=fbm(256,5,4),im=x.getImageData(0,0,1024,256);for(let y=0;y<256;y++)for(let xx=0;xx<1024;xx++){const v=n[y*256+((xx>>2)&255)],a=Math.max(0,v-.48)*2.6*(y/256),i=(y*1024+xx)*4;im.data[i]+=a*44;im.data[i+1]+=a*52;im.data[i+2]+=a*74;}x.putImageData(im,0,0);
 const t=new T.CanvasTexture(c);t.encoding=T.sRGBEncoding;const d=new T.Mesh(new T.SphereGeometry(520,24,16),new T.MeshBasicMaterial({map:t,side:T.BackSide,fog:false,depthWrite:false}));d.renderOrder=-1;skyG.add(d);
 const tt=tex(256,(x,s)=>{x.clearRect(0,0,s,s);x.strokeStyle='#000';x.lineCap='round';function br(px,py,a,len,w,dp){const ex=px+Math.cos(a)*len,ey=py+Math.sin(a)*len;x.lineWidth=w;x.beginPath();x.moveTo(px,py);x.lineTo(ex,ey);x.stroke();if(dp<=0)return;const k=2+(R()*2|0);for(let i=0;i<k;i++)br(ex,ey,a+rr(-.7,.7),len*rr(.6,.8),w*.62,dp-1);}
  for(let i=0;i<3;i++)br(s*(.2+i*.3)+rr(-10,10),s,-1.57+rr(-.15,.15),s*rr(.22,.3),rr(7,11),5);},0);
 const pg=new T.PlaneGeometry(1,1);pg.translate(0,.5,0);const N=360,im2=new T.InstancedMesh(pg,new T.MeshBasicMaterial({map:tt,color:0x020304,alphaTest:.3,side:T.DoubleSide}),N),o=new T.Object3D();
 for(let i=0;i<N;i++){const side=i%4,q=rr(-H-12,H+12),dd=H+rr(4,14);if(side===0)o.position.set(q,0,dd);else if(side===1)o.position.set(q,0,-dd);else if(side===2)o.position.set(dd,0,q);else o.position.set(-dd,0,q);o.rotation.y=side<2?0:Math.PI/2;const sc2=rr(11,19);o.scale.set(sc2,sc2,1);o.updateMatrix();im2.setMatrixAt(i,o.matrix);}scene.add(im2);})();

/* ---------- fence + gate ---------- */
(function(){const bars=[];for(let t=-H;t<=H;t+=.62){bars.push([t,H],[-H,t],[H,t]);if(Math.abs(t)>2.3)bars.push([t,-H]);}
 const g=new T.CylinderGeometry(.025,.025,2.3,5);g.translate(0,1.15,0);const im=new T.InstancedMesh(g,ironM,bars.length);const o=new T.Object3D();
 bars.forEach((b,i)=>{o.position.set(b[0],0,b[1]);o.rotation.set(rr(-.03,.03),0,rr(-.03,.03));o.updateMatrix();im.setMatrixAt(i,o.matrix);});scene.add(im);
 const tip=new T.ConeGeometry(.05,.22,5);tip.translate(0,2.4,0);const im2=new T.InstancedMesh(tip,ironM,bars.length);bars.forEach((b,i)=>{o.position.set(b[0],0,b[1]);o.rotation.set(0,0,0);o.updateMatrix();im2.setMatrixAt(i,o.matrix);});scene.add(im2);
 const rail=(x,z,w,d)=>{[.35,1.9].forEach(y=>S.add(bx(w,.06,d,x,y,z,ironM)));};const L=2*H,hw=(H-2.45)/2+1.2;
 rail(0,H,L,.05);rail(-H,0,.05,L);rail(H,0,.05,L);rail(-(H+2.45)/2,-H,H-2.45,.05);rail((H+2.45)/2,-H,H-2.45,.05);
 [-2.45,2.45].forEach(x=>{S.add(wbx(.85,3.4,.85,x,1.7,-H,darkStoneM,.05));const c=new T.Mesh(new T.ConeGeometry(.7,.6,4),darkStoneM);c.rotation.y=Math.PI/4;c.position.set(x,3.7,-H);S.add(c);circles.push({x:x,z:-H,r:.62});});
 S.add(cyl(.07,.1,4.6,3.6,2.3,-H-4,ironM,8));
 const bulb=new T.Mesh(new T.SphereGeometry(.28,12,12),new T.MeshBasicMaterial({color:0xffd9a0,fog:false}));bulb.position.set(3.6,4.7,-H-4);scene.add(bulb);
 const gl=new T.Sprite(new T.SpriteMaterial({map:mistT,color:0xffb870,fog:false,transparent:true,opacity:.35,depthWrite:false}));gl.scale.set(2.6,2.6,1);gl.position.copy(bulb.position);scene.add(gl);
 const pl=new T.PointLight(0xffb060,1.3,22,1.5);pl.position.set(3.2,4.4,-H-3.5);pl.visible=false;scene.add(pl);
})();
const gateL=new T.Group(),gateR=new T.Group();
[[gateL,-2.05,1],[gateR,2.05,-1]].forEach(a=>{const g=a[0],s=a[2];g.position.set(a[1],0,-H);
 for(let i=0;i<=8;i++)g.add(cyl(.03,.03,2.6+Math.sin(i/8*1.57)*.5,s*i*.25,1.3+Math.sin(i/8*1.57)*.25,0,ironM,6));
 [.3,1.5,2.4].forEach(y=>g.add(bx(2,.07,.05,s*1,y,0,ironM)));scene.add(g);});

/* ---------- buildings & landmarks ---------- */
const CRYPTS=[[-30,-22],[30,-26],[-31,15],[28,10],[12,-36]],OGR=[[-13,-34],[15,31],[-39,-4],[34,-15]],CH={x:37,z:37},SH={x:-40,z:38},WELL={x:12,z:-12},SCR={x:21,z:-34};
const BLD=[],DOORS=[];function setDoor(d,o){d.open=o;d.b.off=o;d.bash=0;}
function room(cx,cz,w,d,h,side,dw,mat,amp){const t=.3,hx=w/2,hz=d/2,g=new T.Group();g.position.set(cx,0,cz);
 const wall=(x0,x1,z0,z1,y0,y1,col)=>{g.add(wbx(x1-x0,y1-y0,z1-z0,(x0+x1)/2,(y0+y1)/2,(z0+z1)/2,mat,amp));if(col!==false)boxes.push({x0:cx+x0,x1:cx+x1,z0:cz+z0,z1:cz+z1});};
 const sides={n:[-hx,hx,-hz,-hz+t],s:[-hx,hx,hz-t,hz],w:[-hx,-hx+t,-hz,hz],e:[hx-t,hx,-hz,hz]};
 for(const k in sides){const a=sides[k];if(k!==side){wall(a[0],a[1],a[2],a[3],0,h);continue;}
  if(k==='n'||k==='s'){wall(-hx,-dw/2,a[2],a[3],0,h);wall(dw/2,hx,a[2],a[3],0,h);wall(-dw/2,dw/2,a[2],a[3],2.3,h,false);}
  else{wall(a[0],a[1],-hz,-dw/2,0,h);wall(a[0],a[1],dw/2,hz,0,h);wall(a[0],a[1],-dw/2,dw/2,2.3,h,false);}}
 g.add(bx(w-.1,.06,d-.1,0,.03,0,darkStoneM));g.add(bx(w-.2,.1,d-.2,0,h-.05,0,darkStoneM));
 const o={n:[0,-hz-1.3,0,-hz+1.3],s:[0,hz+1.3,0,hz-1.3],w:[-hx-1.3,0,-hx+1.3,0],e:[hx+1.3,0,hx-1.3,0]}[side];
 {const D0={open:false,bash:0,t:0};let px,pz;
  if(side==='n'||side==='s'){const zz=side==='s'?hz-.15:-hz+.15;D0.x=cx;D0.z=cz+zz;D0.b={x0:cx-dw/2,x1:cx+dw/2,z0:cz+zz-.15,z1:cz+zz+.15};px=cx-dw/2;pz=cz+zz;D0.ry0=0;D0.delta=side==='s'?-1.5:1.5;}
  else{const xx=side==='e'?hx-.15:-hx+.15;D0.x=cx+xx;D0.z=cz;D0.b={x0:cx+xx-.15,x1:cx+xx+.15,z0:cz-dw/2,z1:cz+dw/2};px=cx+xx;pz=cz-dw/2;D0.ry0=-Math.PI/2;D0.delta=side==='e'?1.5:-1.5;}
  const piv=new T.Group();piv.position.set(px,0,pz);piv.rotation.y=D0.ry0;const leaf=new T.Mesh(new T.BoxGeometry(dw-.06,2.25,.09),woodM);leaf.position.set(dw/2,1.13,0);leaf.castShadow=true;piv.add(leaf);
  [.5,1.8].forEach(y=>{const bd=new T.Mesh(new T.BoxGeometry(dw-.1,.07,.12),ironM);bd.position.set(dw/2,y,0);piv.add(bd);});const kn=new T.Mesh(new T.SphereGeometry(.045,8,6),ironM);kn.position.set(dw-.2,1.05,.09);piv.add(kn);const bar=new T.Mesh(new T.BoxGeometry(dw+.5,.16,.07),woodM);bar.position.set(dw/2,1.15,-.1*Math.sign(D0.delta));bar.visible=false;piv.add(bar);D0.bar=bar;scene.add(piv);D0.piv=piv;
  D0.b.door=true;boxes.push(D0.b);DOORS.push(D0);acts.push({x:D0.x,z:D0.z,r:1.7,hold:0,label:()=>D0.open?(inv.plank>0?'Close and BAR the door (uses a plank)':'Close the door'):(D0.barred?'Unbar and open the door':'Open the door (it creaks)'),can:()=>true,done(){const was=D0.open;setDoor(D0,!D0.open);if(was&&inv.plank>0){inv.plank--;D0.barred=true;sfx.clunk();hud();msg('You drop the plank across the door. That will hold it for a while.',3);}else D0.barred=false;D0.bar.visible=!!D0.barred;sfx.door();noiseLvl=.5;hear(D0,13);}});}
 BLD.push({x0:cx-hx,x1:cx+hx,z0:cz-hz,z1:cz+hz,out:{x:cx+o[0],z:cz+o[1]},inn:{x:cx+o[2],z:cz+o[3]}});
 avoid.push({x:cx,z:cz,r:Math.hypot(hx,hz)+1.6});S.add(g);return g;}
function route(p,t){for(const b of BLD){const ti=t.x>b.x0&&t.x<b.x1&&t.z>b.z0&&t.z<b.z1,mi=p.x>b.x0&&p.x<b.x1&&p.z>b.z0&&p.z<b.z1;
 if(ti&&!mi)return Math.hypot(p.x-b.out.x,p.z-b.out.z)<.9?b.inn:b.out;if(mi&&!ti)return Math.hypot(p.x-b.inn.x,p.z-b.inn.z)<.9?b.out:b.inn;}return t;}
CRYPTS.forEach((c,i)=>{const g=room(c[0],c[1],4,5,3,'s',1.6,darkStoneM,.07);
 const r=new T.Mesh(org(new T.ConeGeometry(3.7,1.7,4,3),.08,i,1),darkStoneM);r.rotation.y=Math.PI/4;r.scale.z=1.25;r.position.y=3.85;g.add(r);
 [-1.2,1.2].forEach(x=>{const cm=new T.Mesh(org(new T.CylinderGeometry(.18,.21,3,10,5),.03,x,2),stoneM);cm.position.set(x,1.5,2.75);g.add(cm);});g.add(wbx(3.4,.16,1.1,0,.06,3,stoneM,.04));
 g.add(bx(.12,.9,.12,0,5,0,stoneM));g.add(bx(.5,.12,.12,0,5.15,0,stoneM));
 g.add(wbx(.95,.7,2.1,-.75,.35,-.9,stoneM,.04));g.add(wbx(1.05,.12,2.2,-.75,.76,-.9,darkStoneM,.03));boxes.push({x0:c[0]-1.25,x1:c[0]-.25,z0:c[1]-2,z1:c[1]+.2});
 const cf=bx(.7,1.9,.28,i%2?2.6:-2.6,.92,1,woodM);cf.rotation.z=i%2?-.22:.22;g.add(cf);
 spots.push([c[0]+.9,c[1]+.3]);g.add(bx(.9,.07,.9,1.15,.07,-1.7,woodM));g.add(bx(.95,.03,.1,1.15,.11,-1.9,ironM));g.add(bx(.95,.03,.1,1.15,.11,-1.5,ironM));});
[[0,3],[1,2]].forEach(p=>p.forEach((ci,k)=>{const c=CRYPTS[ci],o=CRYPTS[p[1-k]];acts.push({x:c[0]+1.15,z:c[1]-1.7,r:1.25,hold:1.6,label:()=>'Crawl into the tunnel under the floor',can:()=>true,tick(){},done(){P.x=o[0]+1.15;P.z=o[1]-.7;P.sneak=true;$('bSneak').classList.add('on');sfx.fall();flashT=0;$('intro').style.display='none';msg('You crawl through the wet dark and come up under another crypt.',4);}});}));
let statueMesh=null;
(function(){S.add(wbx(1.6,1.2,1.6,0,.6,0,darkStoneM,.05));
 const g=sdfMesh((x,y,z)=>{const ax=Math.abs(x);let d=cap(x,y,z,0,1.2,0,0,3.15,0,.6,.24);d=smn(d,ell(x,y,z,0,3.02,0,.42,.2,.27),.12);d=smn(d,ell(x,y,z,0,3.5,.02,.29,.33,.3),.08);d=Math.max(d,-ell(x,y,z,0,3.45,.24,.17,.21,.16));d=smn(d,ell(x,y,z,0,3.42,.1,.13,.16,.1),.03);
  d=smn(d,cap(ax,y,z*2.6,.3,3.15,-.7,1.05,2.1,-.95,.34,.07),.08);d=smn(d,cap(ax,y,z,.32,2.9,.12,.05,2.5,.36,.1,.08),.06);
  if(y<2.9)d+=Math.sin(Math.atan2(z,x)*14)*.014*Math.min(1,2.9-y);return d+(Math.sin(x*23)+Math.sin(y*19)+Math.sin(z*21))*.006;},[-1.45,1.15,-.85],[1.45,3.95,.75],.045);
 statueMesh=new T.Mesh(g,stoneM);statueMesh.castShadow=true;statueMesh.receiveShadow=true;scene.add(statueMesh);circles.push({x:0,z:0,r:1.25});spots.push([0,2.6]);})();
OGR.forEach(p=>{const h=new T.Mesh(new T.PlaneGeometry(1.2,2.3),blackM);h.rotation.x=-Math.PI/2;h.position.set(p[0],.02,p[1]);scene.add(h);
 const m=new T.Mesh(org(new T.SphereGeometry(1,12,8),.2,p[0],1.5),new T.MeshLambertMaterial({map:groundT,color:0x5a4a3a}));m.scale.set(1,.45,1.3);m.position.set(p[0]+1.7,0,p[1]);S.add(m);
 circles.push({x:p[0]+1.7,z:p[1],r:.9});spots.push([p[0]-1.5,p[1]]);});
// chapel
const HATCH={x:CH.x+2.3,z:CH.z};
(function(){const g=room(CH.x,CH.z,8,8,5,'w',1.8,darkStoneM,.09);
 const r=new T.Mesh(org(new T.ConeGeometry(6.3,3,4,4),.1,3,1),darkStoneM);r.rotation.y=Math.PI/4;r.position.y=6.5;g.add(r);
 g.add(wbx(2.4,9,2.4,5.2,4.5,-2.8,stoneM,.07));boxes.push({x0:CH.x+4,x1:CH.x+6.4,z0:CH.z-4,z1:CH.z-1.6});const st=new T.Mesh(new T.ConeGeometry(1.9,4,4),darkStoneM);st.rotation.y=Math.PI/4;st.position.set(5.2,11,-2.8);g.add(st);
 g.add(bx(.1,1.4,.1,5.2,13.6,-2.8,ironM));g.add(bx(.7,.1,.1,5.2,13.9,-2.8,ironM));
 const win=new T.MeshBasicMaterial({color:0x3a0c0c});[-2.8,2.8].forEach(z=>g.add(bx(.36,1.6,.6,-3.86,3.2,z,win)));
 [-2.4,-.9,.6].forEach(x=>[-2.2,2.2].forEach(z=>{g.add(bx(.45,.5,2,x,.25,z,woodM));g.add(bx(.08,.5,2,x+.25,.7,z,woodM));boxes.push({x0:CH.x+x-.25,x1:CH.x+x+.3,z0:CH.z+z-1,z1:CH.z+z+1});}));
 g.add(wbx(1,1,2.2,3.1,.5,-2.3,stoneM,.03));boxes.push({x0:CH.x+2.6,x1:CH.x+3.6,z0:CH.z-3.4,z1:CH.z-1.2});g.add(bx(.12,2,.12,3.5,2.3,0,woodM));g.add(bx(.12,.12,1,3.5,2.8,0,woodM));
 const h=bx(1.5,.2,1.5,2.3,.14,0,woodM);g.add(h);g.add(bx(1.55,.06,.12,2.3,.26,-.4,ironM));g.add(bx(1.55,.06,.12,2.3,.26,.4,ironM));
 spots.push([CH.x+.3,CH.z+2.9]);})();
// shed + safe
const SAFE={x:SH.x-1.7,z:SH.z};
(function(){const g=room(SH.x,SH.z,5,5,2.6,'e',1.6,woodM,.03);const rf=bx(5.8,.15,5.8,0,2.75,0,rustM);rf.rotation.z=.1;g.add(rf);
 g.add(bx(.8,1,.7,-1.7,.5,0,ironM));const d=cyl(.12,.12,.05,-1.29,.6,0,stoneM,12);d.rotation.z=Math.PI/2;g.add(d);circles.push({x:SAFE.x,z:SAFE.z,r:.6});
 g.add(bx(1.6,.08,.6,-.5,.9,-1.9,woodM));g.add(bx(.08,.9,.6,-1.2,.45,-1.9,woodM));g.add(bx(.08,.9,.6,.2,.45,-1.9,woodM));boxes.push({x0:SH.x-1.4,x1:SH.x+.4,z0:SH.z-2.2,z1:SH.z-1.5});
 spots.push([SH.x+1.2,SH.z+1.2]);avoid.push({x:SH.x+5,z:SH.z-1,r:5});S.add(cyl(.5,.5,.9,SH.x+3.6,.45,SH.z+3.6,rustM,12));})();
// Voss's cottage: two rooms, a bed, a table with a candle, a wardrobe to hide in
const COT={x:-33,z:-37};
(function(){const g=room(COT.x,COT.z,7,6,2.8,'e',1.6,woodM,.03);const rf=bx(8,.18,7,0,2.95,0,rustM);rf.rotation.z=.07;g.add(rf);
 g.add(wbx(.2,2.8,3.9,-.4,1.4,-1.05,woodM,.02));boxes.push({x0:COT.x-.5,x1:COT.x-.3,z0:COT.z-3,z1:COT.z+.9});
 g.add(bx(1,.4,2,-2.6,.3,-1.6,woodM));g.add(bx(.95,.14,1.9,-2.6,.56,-1.6,new T.MeshLambertMaterial({map:clothT,color:0x8a7a6a})));boxes.push({x0:COT.x-3.1,x1:COT.x-2.1,z0:COT.z-2.6,z1:COT.z-.6});
 g.add(bx(1.1,2.1,.6,-2.5,1.05,2.4,woodM));g.add(bx(.03,1.9,.02,-2.5,1.05,2.09,blackM));boxes.push({x0:COT.x-3.05,x1:COT.x-1.95,z0:COT.z+2.1,z1:COT.z+2.7});
 g.add(bx(1.2,.07,.8,1.6,.78,-1.8,woodM));[[1.1,-2.1],[2.1,-2.1],[1.1,-1.5],[2.1,-1.5]].forEach(p=>g.add(bx(.07,.78,.07,p[0],.39,p[1],woodM)));boxes.push({x0:COT.x+1,x1:COT.x+2.2,z0:COT.z-2.2,z1:COT.z-1.4});
 g.add(cyl(.03,.035,.14,1.6,.89,-1.8,new T.MeshLambertMaterial({color:0xc9c0a8}),6));glow(COT.x+1.6,1.02,COT.z-1.8,0xffb050,.3,.95);
 g.add(bx(.5,.5,.5,2.8,.25,2.3,woodM));g.add(bx(.45,.9,.06,2.8,.7,2.56,woodM));
 spots.push([COT.x+1.8,COT.z+.6]);spots.push([COT.x-1.7,COT.z+.4]);})();
// truck
const TRUCK={x:41,z:-8};
(function(){const g=new T.Group();g.position.set(TRUCK.x,0,TRUCK.z);
 {const rb=(x,y,z,cx,cy,cz,hx,hy,hz,r)=>{const qx=Math.abs(x-cx)-hx+r,qy=Math.abs(y-cy)-hy+r,qz=Math.abs(z-cz)-hz+r;return Math.hypot(Math.max(qx,0),Math.max(qy,0),Math.max(qz,0))+Math.min(Math.max(qx,qy,qz),0)-r;},mn=(a,b,k)=>{const h=Math.max(k-Math.abs(a-b),0)/k;return Math.min(a,b)-h*h*k*.25;};
  const tm=new T.Mesh(sdfMesh((x,y,z)=>{let d=rb(x,y,z,.9,1.45,0,.95,.75,.9,.28);d=mn(d,rb(x,y,z,2.45,1.05,0,.75,.42,.86,.2),.18);d=mn(d,rb(x,y,z,-1.4,.92,0,1.35,.34,.92,.08),.1);
   d=Math.max(d,-rb(x,y,z,-1.4,1.25,0,1.2,.36,.78,.05));const az=Math.abs(z);d=Math.max(d,-(Math.hypot(x-2.2,y-.42,az-.98)-.56));d=Math.max(d,-(Math.hypot(x+1.7,y-.42,az-.98)-.56));
   return d+(Math.sin(x*9+z*4)+Math.sin(y*11+x*3)+Math.sin(z*8))*.006;},[-2.95,.3,-1.1],[3.4,2.35,1.1],.04),new T.MeshStandardMaterial({color:0x5e2a24,roughness:.55,metalness:.45,normalMap:TK.nor,normalScale:new T.Vector2(.25,.25)}));g.add(tm);{const ch=new T.MeshStandardMaterial({color:0x9a9a94,roughness:.3,metalness:.85});g.add(bx(.12,.2,1.9,3.36,.72,0,ch));g.add(bx(.1,.16,1.9,-2.86,.66,0,ch));[[-1.7,.98],[-1.7,-.98],[2.2,.98],[2.2,-.98]].forEach(w=>{const h=new T.Mesh(new T.CylinderGeometry(.17,.17,.06,14),ch);h.rotation.x=Math.PI/2;h.position.set(w[0],.42,w[1]+Math.sign(w[1])*.1);g.add(h);});}
  const gl=new T.MeshStandardMaterial({color:0x07090c,roughness:.08,metalness:.9});g.add(bx(.06,.62,1.5,1.83,1.78,0,gl));[-.9,.9].forEach(z=>g.add(bx(1.1,.55,.04,.95,1.8,z,gl)));
  [-.6,.6].forEach(z=>{const hl=new T.Mesh(new T.SphereGeometry(.13,10,8),new T.MeshStandardMaterial({color:0x8a8a80,roughness:.2,metalness:.6}));hl.position.set(3.18,1.05,z);g.add(hl);});}
 [[-1.7,.98],[-1.7,-.98],[2.2,.98],[2.2,-.98]].forEach(w=>{const c=new T.Mesh(new T.TorusGeometry(.3,.14,8,14),blackM);c.position.set(w[0],.42,w[1]);g.add(c);});
 S.add(g);boxes.push({x0:TRUCK.x-2.9,x1:TRUCK.x+3.3,z0:TRUCK.z-1.1,z1:TRUCK.z+1.1});})();
// well
(function(){const X=WELL.x,Z=WELL.z;const w=new T.Mesh(org(new T.CylinderGeometry(1,1.05,.9,16,3,true),.05,1,2),new T.MeshStandardMaterial({map:TS.map,normalMap:TS.nor,roughness:1,side:T.DoubleSide,color:0x8a8a86}));w.position.set(X,.45,Z);S.add(w);
 const d=new T.Mesh(new T.CircleGeometry(1,16),blackM);d.rotation.x=-Math.PI/2;d.position.set(X,.3,Z);scene.add(d);
 S.add(limb(V(X-1,0,Z),V(X-1,2.4,Z),.07,.07,woodM));S.add(limb(V(X+1,0,Z),V(X+1,2.4,Z),.07,.07,woodM));S.add(limb(V(X-1.2,2.3,Z),V(X+1.2,2.3,Z),.06,.06,woodM));
 S.add(cyl(.18,.14,.3,X,1.5,Z,rustM,10));circles.push({x:X,z:Z,r:1.2});spots.push([X,Z+2.4]);})();
// bell
const BELL={x:-10,z:22};let bellMesh;
(function(){const X=BELL.x,Z=BELL.z;S.add(limb(V(X-.8,0,Z),V(X-.8,2.8,Z),.08,.07,woodM));S.add(limb(V(X+.8,0,Z),V(X+.8,2.8,Z),.08,.07,woodM));S.add(limb(V(X-1,2.7,Z),V(X+1,2.7,Z),.07,.07,woodM));
 bellMesh=new T.Mesh(new T.CylinderGeometry(.12,.38,.55,16,1,true),new T.MeshStandardMaterial({color:0x6a5426,metalness:.8,roughness:.4,side:T.DoubleSide}));bellMesh.position.set(X,2.3,Z);scene.add(bellMesh);
 circles.push({x:X-.8,z:Z,r:.25},{x:X+.8,z:Z,r:.25});spots.push([X,Z+2.2]);})();
// generators
const genG=(function(){const rb=(x,y,z,cx,cy,cz,hx,hy,hz,r)=>{const qx=Math.abs(x-cx)-hx+r,qy=Math.abs(y-cy)-hy+r,qz=Math.abs(z-cz)-hz+r;return Math.hypot(Math.max(qx,0),Math.max(qy,0),Math.max(qz,0))+Math.min(Math.max(qx,qy,qz),0)-r;},mn=(a,b,k)=>{const h=Math.max(k-Math.abs(a-b),0)/k;return Math.min(a,b)-h*h*k*.25;};
 return sdfMesh((x,y,z)=>{let d=rb(x,y,z,0,.5,0,.72,.42,.42,.1);d=mn(d,cap(x,y,z,-.42,1.05,0,.42,1.05,0,.21,.21),.08);d=mn(d,cap(x,y,z,.5,.9,.2,.5,1.5,.2,.045,.04),.04);d=mn(d,rb(x,y,z,-.5,.06,0,.12,.07,.5,.03),.03);d=mn(d,rb(x,y,z,.5,.06,0,.12,.07,.5,.03),.03);
  if(Math.abs(z)>.36&&y>.25&&y<.8)d+=Math.max(0,Math.sin(x*42))*.012;return d;},[-.9,-.05,-.6],[.9,1.6,.6],.03);})();
const GEN=[[-86,-96,-86,-93.6],[103,3,103,5.4],[99,-101,99,-98.6]].map(p=>{const g=new T.Group();g.position.set(p[0],0,p[1]);g.add(new T.Mesh(genG,genM));
 g.add(limb(V(-.9,0,0),V(-.9,3.6,0),.06,.05,ironM));g.add(limb(V(-.9,3.5,0),V(-.3,3.6,0),.03,.03,ironM));
 const bm=new T.MeshBasicMaterial({color:0x1c1a16});const b=new T.Mesh(new T.SphereGeometry(.16,10,10),bm);b.position.set(-.3,3.45,0);g.add(b);S.add(g);
 const gl=glow(p[0]-.3,3.45,p[1],0xffc070,5,.6);gl.material.fog=false;gl.visible=false;circles.push({x:p[0],z:p[1],r:.95});spots.push([p[2],p[3]]);
 return {x:p[0],z:p[1],on:false,bm:bm,gl:gl,t:0};});
// flooded hollow + breaker
const HOL={x:-15,z:6,r:3.6},BRK={x:-22.5,z:6};let spark,lever;
(function(){const X=HOL.x,Z=HOL.z;const w=new T.Mesh(org(new T.CircleGeometry(HOL.r,26),.25,2,1),waterM);w.rotation.x=-Math.PI/2;w.position.set(X,.03,Z);scene.add(w);
 S.add(limb(V(X-4.2,0,Z),V(X-4.2,4,Z+.2),.09,.07,woodM));S.add(limb(V(X-4.2,3.8,Z+.2),V(X-1.4,.05,Z),.025,.025,blackM,5));circles.push({x:X-4.2,z:Z,r:.3});
 S.add(limb(V(BRK.x,0,BRK.z),V(BRK.x,1.6,BRK.z),.07,.07,woodM));S.add(bx(.5,.6,.2,BRK.x,1.4,BRK.z+.12,genM));
 lever=bx(.06,.35,.06,BRK.x+.3,1.5,BRK.z+.2,new T.MeshBasicMaterial({color:0xb01818}));lever.rotation.z=-.6;scene.add(lever);
 circles.push({x:BRK.x,z:BRK.z,r:.3});spark=glow(X-1.3,.25,Z,0x9fd0ff,1.4,.9);spark.visible=false;avoid.push({x:X,z:Z,r:5});})();
const puddles=[HOL];
for(let i=0;i<34;i++){const p={x:rr(-E,E),z:rr(-E,E-6),r:rr(1,1.8)};if(Math.abs(p.x)<4)p.x+=8;if(!clear(p.x,p.z,2))continue;const w=new T.Mesh(org(new T.CircleGeometry(p.r,14),.2,i,1),waterM);w.rotation.x=-Math.PI/2;w.position.set(p.x,.028,p.z);scene.add(w);puddles.push(p);avoid.push({x:p.x,z:p.z,r:p.r+.6});}
// Marrow's grave
const GRAVE={x:-21,z:-9.6};let graveDirt,graveHole,graveMound;
(function(){const plate=tex(256,(x,s)=>{stoneFn(x,s);x.fillStyle='#1b1a18';x.textAlign='center';x.font='bold 40px Georgia';x.fillText('E. MARROW',s/2,110);x.font='26px Georgia';x.fillText('1946 – 1987',s/2,160);x.font='18px Georgia';x.fillText('HE DUG FOR US ALL',s/2,205);},0);
 const m=new T.Mesh(new T.BoxGeometry(1.4,1.8,.3),[stoneM,stoneM,stoneM,stoneM,new T.MeshStandardMaterial({map:plate,roughness:.95}),stoneM]);m.position.set(GRAVE.x,.9,GRAVE.z-1.4);m.rotation.x=-.06;m.castShadow=true;scene.add(m);
 circles.push({x:GRAVE.x,z:GRAVE.z-1.4,r:.75});
 graveDirt=new T.Mesh(new T.PlaneGeometry(1.3,2.3),new T.MeshLambertMaterial({map:groundT,color:0x6a5238}));graveDirt.rotation.x=-Math.PI/2;graveDirt.position.set(GRAVE.x,.022,GRAVE.z);scene.add(graveDirt);
 graveHole=new T.Mesh(new T.PlaneGeometry(1.3,2.3),blackM);graveHole.rotation.x=-Math.PI/2;graveHole.position.set(GRAVE.x,.024,GRAVE.z);graveHole.visible=false;scene.add(graveHole);
 graveMound=new T.Mesh(org(new T.SphereGeometry(.9,12,8),.2,5,1.5),new T.MeshLambertMaterial({map:groundT,color:0x5a4a3a}));graveMound.scale.set(1,.5,1.2);graveMound.position.set(GRAVE.x+1.7,0,GRAVE.z);graveMound.visible=false;scene.add(graveMound);
 avoid.push({x:GRAVE.x,z:GRAVE.z,r:3});})();
// benches, path lamps, scarecrow, ruined walls
[[2.5,32],[2.5,20],[-2.5,7],[-2.5,-18],[2.5,-31]].forEach(b=>{const g=new T.Group();g.position.set(b[0],0,b[1]);g.rotation.y=b[0]>0?-Math.PI/2:Math.PI/2;
 g.add(bx(1.6,.07,.5,0,.45,0,woodM));g.add(bx(1.6,.5,.06,0,.8,-.25,woodM));[-.7,.7].forEach(x=>g.add(bx(.08,.45,.5,x,.22,0,ironM)));S.add(g);circles.push({x:b[0],z:b[1],r:.75});spots.push([b[0]+(b[0]>0?1.6:-1.6),b[1]]);});
const pathGlows=[];
[[-2.2,33],[2.2,18],[-2.2,4],[2.2,-11],[-2.2,-26],[2.2,-41]].forEach(l=>{S.add(limb(V(l[0],0,l[1]),V(l[0],3.3,l[1]),.06,.045,ironM,8));const s=l[0]>0?-1:1;S.add(limb(V(l[0],3.25,l[1]),V(l[0]+s*.6,3.4,l[1]),.03,.03,ironM));
 const b=new T.Mesh(new T.SphereGeometry(.15,10,10),pathBulbM);b.position.set(l[0]+s*.6,3.25,l[1]);S.add(b);const g=glow(l[0]+s*.6,3.25,l[1],0xffc070,2.2,.42);g.material.fog=false;g.visible=false;pathGlows.push(g);circles.push({x:l[0],z:l[1],r:.22});});
(function(){const x=SCR.x,z=SCR.z;S.add(limb(V(x,0,z),V(x,2.3,z),.05,.05,woodM));S.add(limb(V(x-.9,1.6,z),V(x+.9,1.6,z),.04,.04,woodM));
 const sack=new T.Mesh(org(new T.SphereGeometry(.22,10,8),.04,1,4),new T.MeshLambertMaterial({color:0x6b5a3a}));sack.position.set(x,2.2,z);S.add(sack);const hat=new T.Mesh(new T.ConeGeometry(.3,.4,10),blackM);hat.position.set(x,2.55,z);S.add(hat);
 const sh=new T.Mesh(org(new T.BoxGeometry(.7,.9,.2,4,5,1),.07,2,3),new T.MeshLambertMaterial({map:clothT}));sh.position.set(x,1.3,z);S.add(sh);circles.push({x:x,z:z,r:.3});spots.push([SCR.x,SCR.z+2.2]);})();
[[-25,28,8,0],[24,22,7,1],[-34,-28,9,0],[18,-21,7,1],[-9,-22,6,0],[8,18,7,0],[34,3,8,1],[-22,-39,9,0],[-37,25,7,1]].forEach((w,i)=>{const lx=w[3]?.55:w[2],lz=w[3]?w[2]:.55;
 const m=new T.Mesh(org(new T.BoxGeometry(lx,1.3,lz,w[3]?2:10,4,w[3]?10:2),.1,i*3,1.1),darkStoneM);m.position.set(w[0],.6,w[1]);S.add(m);boxes.push({x0:w[0]-lx/2,x1:w[0]+lx/2,z0:w[1]-lz/2,z1:w[1]+lz/2});});

// headstones: real silhouettes (arched, shouldered, gothic, cross) with bevelled edges and carved epitaphs
(function(){const W=.8;function shp(k){const s=new T.Shape();if(k===0){s.moveTo(0,0);s.lineTo(W,0);s.lineTo(W,.85);s.absarc(W/2,.85,W/2,0,Math.PI,false);s.lineTo(0,0);}
  else if(k===1){s.moveTo(0,0);s.lineTo(W,0);s.lineTo(W,.9);s.lineTo(W-.12,.9);s.absarc(W/2,.9,W/2-.12,0,Math.PI,false);s.lineTo(0,.9);s.lineTo(0,0);}
  else if(k===2){s.moveTo(0,0);s.lineTo(W,0);s.lineTo(W,.8);s.quadraticCurveTo(W,1.15,W/2,1.3);s.quadraticCurveTo(0,1.15,0,.8);s.lineTo(0,0);}
  else{const a=.13;s.moveTo(W/2-a,0);s.lineTo(W/2+a,0);s.lineTo(W/2+a,.85);s.lineTo(W,.85);s.lineTo(W,.85+2*a);s.lineTo(W/2+a,.85+2*a);s.lineTo(W/2+a,1.5);s.lineTo(W/2-a,1.5);s.lineTo(W/2-a,.85+2*a);s.lineTo(0,.85+2*a);s.lineTo(0,.85);s.lineTo(W/2-a,.85);s.lineTo(W/2-a,0);}return s;}
 const geos=[0,1,2,3].map(k=>{const g=new T.ExtrudeGeometry(shp(k),{depth:.15,bevelEnabled:true,bevelThickness:.025,bevelSize:.025,bevelSegments:2,curveSegments:10});g.translate(-W/2,0,-.075);const p=g.attributes.position,u=g.attributes.uv;for(let i=0;i<p.count;i++)u.setXY(i,(p.getX(i)+W/2)/W,p.getY(i)/1.5);return g;});
 const GN=['A. HOLLIS','M. VANE','T. ASHBY','E. CROWE','J. PIKE','R. MOSS','L. DREAD','S. WREN','H. GRIMM','O. BLACK'];
 const mats=[];for(let i=0;i<7;i++){const name=GN[(R()*GN.length)|0];const t=tex(256,(x,s)=>{x.drawImage(TS.canvas,0,0,s,s);const g=x.createLinearGradient(0,0,0,s);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(.55,'rgba(10,14,6,.2)');g.addColorStop(1,'rgba(8,14,4,.8)');x.fillStyle=g;x.fillRect(0,0,s,s);
   for(let k=0;k<14;k++){x.fillStyle='rgba(12,12,10,'+rr(.08,.28)+')';x.fillRect(R()*s,0,rr(2,8),rr(s*.2,s));}
   x.textAlign='center';const eng=(tx,y,f)=>{x.font=f;x.fillStyle='rgba(255,255,255,.2)';x.fillText(tx,s/2+1.5,y+1.5);x.fillStyle='rgba(6,6,6,.85)';x.fillText(tx,s/2,y);};
   eng('R.I.P',76,'bold 34px Georgia');eng(name,122,'bold 24px Georgia');const b=1780+(R()*150|0);eng(b+' – '+(b+18+(R()*60|0)),152,'18px Georgia');x.strokeStyle='rgba(6,6,6,.6)';x.lineWidth=2;x.beginPath();x.moveTo(64,168);x.lineTo(192,168);x.stroke();},0);
  mats.push(new T.MeshStandardMaterial({map:t,normalMap:TS.nor,normalScale:new T.Vector2(1.2,1.2),roughness:.92,color:i%2?0xb8b8b2:0x8c8e92}));}
 const obG=org(new T.CylinderGeometry(.1,.26,1.9,4,6),.012,5,3),plG=new T.BoxGeometry(1,.14,.36),obB=new T.BoxGeometry(.7,.35,.7);
 window.__TK={geos:typeof geos!=='undefined'?geos:null,mats:mats};for(let gx=-C+5;gx<=C-5;gx+=4)for(let gz=-C+6;gz<=C-10;gz+=5){if(R()<.36)continue;const x=gx+rr(-.8,.8),z=gz+rr(-1,1);if(Math.abs(x)<3.3||Math.hypot(x,z-(C-7))<5||!clear(x,z,1.7))continue;
  const g=new T.Group();g.position.set(x,0,z);const k=R(),s=rr(.85,1.3),sm=R()<.5?stoneM:darkStoneM;let h=1.3;
  if(k<.86){const ty=k<.3?0:k<.55?1:k<.72?2:3;h=ty===3?1.5:1.3;const st=new T.Mesh(geos[ty],ty===3?sm:mats[(R()*mats.length)|0]);st.position.y=.1;st.rotation.set(rr(-.13,.13),0,rr(-.12,.12));if(R()<.07){st.rotation.x=-1.45;st.position.set(0,.12,.5);h=.3;}g.add(st);const pl=new T.Mesh(plG,sm);pl.position.y=.07;g.add(pl);}
  else{const a=new T.Mesh(obB,sm);a.position.y=.17;g.add(a);const o=new T.Mesh(obG,sm);o.rotation.y=Math.PI/4;o.position.y=1.3;g.add(o);h=2.25;}
  g.rotation.y=rr(-.3,.3);g.scale.setScalar(s);S.add(g);circles.push({x:x,z:z,r:.5});if(h>1)tombs.push({x:x,z:z,h:h*s+.08});}
})();
(function(){const cm=new T.MeshLambertMaterial({color:0xc9c0a8});for(let i=0;i<26&&tombs.length;i++){const t=tombs[(R()*tombs.length)|0];const x=t.x+rr(-.3,.3),z=t.z+.45;S.add(cyl(.03,.035,.16,x,.08,z,cm,6));glow(x,.22,z,0xffb050,.3,.95);}})();
// crows
const crowG=sdfMesh((x,y,z)=>{const ax=Math.abs(x);let d=ell(x,y,z,0,0,0,.085,.085,.16);d=smn(d,Math.hypot(x,y-.085,z-.13)-.055,.04);d=smn(d,cap(x,y,z,0,.08,.17,0,.065,.26,.02,.004),.015);d=smn(d,cap(x,y*1.8,z,0,0,-.12,0,-.05,-.3,.05,.025),.04);d=smn(d,ell(ax,y,z,.08,.015,-.03,.03,.07,.14),.03);return d;},[-.15,-.12,-.33],[.15,.17,.29],.016),wingG=new T.SphereGeometry(.17,10,6);
const crows=[];
(function(){const cm=new T.MeshLambertMaterial({color:0x050505});const used={};for(let i=0;i<7&&tombs.length;i++){const k=(R()*tombs.length)|0;if(used[k])continue;used[k]=1;const t=tombs[k];
 const g=new T.Group();g.add(new T.Mesh(crowG,cm));const w1=new T.Mesh(wingG,cm),w2=new T.Mesh(wingG,cm);w1.scale.set(1,.07,.45);w2.scale.set(1,.07,.45);w1.position.set(.17,.04,0);w2.position.set(-.17,.04,0);w1.visible=w2.visible=false;g.add(w1);g.add(w2);g.userData.w=[w1,w2];
 scene.add(g);crows.push({g:g,x:t.x,z:t.z,h:t.h+.08,fly:0,gone:false});}})();
// tripwires
const wires=[];
(function(){const wm=new T.MeshBasicMaterial({color:0x6a6a6a}),canM=new T.MeshStandardMaterial({color:0x8a8f93,metalness:.8,roughness:.4});let n=0,tr=0;
 while(n<4&&tr<500){tr++;const cx=rr(-E,E),cz=rr(-E,E-8),a=R()*3.14,ax=cx+Math.cos(a)*2.2,az=cz+Math.sin(a)*2.2,bx2=cx-Math.cos(a)*2.2,bz2=cz-Math.sin(a)*2.2;
  if(Math.hypot(cx,cz-(C-7))<9||!clear(cx,cz,3))continue;
  S.add(limb(V(ax,0,az),V(ax,.55,az),.03,.025,woodM,6));S.add(limb(V(bx2,0,bz2),V(bx2,.55,bz2),.03,.025,woodM,6));S.add(limb(V(ax,.4,az),V(bx2,.4,bz2),.007,.007,wm,3));
  for(let i=1;i<4;i++){const t=i/4;S.add(cyl(.04,.04,.1,ax+(bx2-ax)*t,.3,az+(bz2-az)*t,canM,8));}
  wires.push({ax:ax,az:az,bx:bx2,bz:bz2,cd:0});n++;}})();
// rocks and brambles
(function(){for(let i=0;i<160;i++){const x=rr(-E,E),z=rr(-E,E),r=rr(.25,1.1);if(Math.abs(x)<3||!clear(x,z,r+.8))continue;const m=new T.Mesh(org(new T.SphereGeometry(r,9,7),r*.45,i,1.6/r),R()<.5?stoneM:darkStoneM);m.scale.y=rr(.45,.8);m.position.set(x,r*.15,z);m.rotation.y=R()*6;S.add(m);if(r>.55)circles.push({x:x,z:z,r:r*.8});}
 for(let i=0;i<20;i++){const x=rr(-E,E),z=rr(-E,E);if(Math.abs(x)<3||!clear(x,z,1.6))continue;for(let k=0;k<4;k++){const r=rr(.35,.75);const m=new T.Mesh(org(new T.SphereGeometry(r,8,6),r*.5,i+k,2.4/r),bushM);m.position.set(x+rr(-.6,.6),r*.6,z+rr(-.6,.6));S.add(m);}
  for(let k=0;k<7;k++){const a=V(x+rr(-.5,.5),.2,z+rr(-.5,.5));S.add(limb(a,a.clone().add(V(rr(-.7,.7),rr(.6,1.3),rr(-.7,.7))),.02,.005,barkM,4));}}
 const pg=org(new T.SphereGeometry(.06,5,4),.03,1,20),N=6000,im=new T.InstancedMesh(pg,stoneM,N),o=new T.Object3D();for(let i=0;i<N;i++){o.position.set(rr(-H,H),.01,rr(-H,H));const s=rr(.4,1.6);o.scale.set(s,s*.6,s);o.rotation.y=R()*6;o.updateMatrix();im.setMatrixAt(i,o.matrix);}scene.add(im);})();
// dead trees
const stonePicks=[];
(function(){const vars=[];for(let v=0;v<3;v++){const caps=[],rad=rr(.3,.44);
  (function br(a,dir,len,r,depth){const b=[a[0]+dir[0]*len,a[1]+dir[1]*len,a[2]+dir[2]*len];caps.push([a,b,r,r*.62]);if(depth<=0)return;const n=depth>1?2:(R()<.6?2:3);for(let i=0;i<n;i++){let d=[dir[0]+rr(-.9,.9),dir[1]+rr(-.1,.7),dir[2]+rr(-.9,.9)];const L=Math.hypot(d[0],d[1],d[2]);br(b,[d[0]/L,d[1]/L,d[2]/L],len*rr(.6,.8),r*.62,depth-1);}})([0,0,0],[rr(-.14,.14),1,rr(-.14,.14)],rr(2.6,3.6),rad,4);
  for(let k=0;k<5;k++){const a=k*1.26+R();caps.push([[Math.cos(a)*rad*.4,.5,Math.sin(a)*rad*.4],[Math.cos(a)*rad*3,-.1,Math.sin(a)*rad*3],rad*.5,rad*.14]);}
  const lo=[9,9,9],hi=[-9,-9,-9];caps.forEach(c=>{[c[0],c[1]].forEach(p=>{for(let q=0;q<3;q++){lo[q]=Math.min(lo[q],p[q]-c[2]-.15);hi[q]=Math.max(hi[q],p[q]+c[2]+.15);}});});lo[1]=-.05;
  vars.push(sdfMesh((x,y,z)=>{let d=9;for(const c of caps){const cd=cap(x,y,z,c[0][0],c[0][1],c[0][2],c[1][0],c[1][1],c[1][2],c[2],c[3]);if(cd<.6)d=smn(d,cd,.1);}return d+(Math.sin(y*26+x*9)+Math.sin(x*31+z*17)+Math.sin(z*29))*.012;},lo,hi,.1));}
 const place=[[],[],[]];
 let n=0,tries=0;while(n<24&&tries<900){tries++;const x=rr(-CE-2,CE+2),z=rr(-CE-2,CE+2);if(Math.abs(x)<4||Math.hypot(x,z-(C-7))<7||!clear(x,z,1.5))continue;
  place[n%3].push([x,z,R()*6.28,rr(.85,1.2)]);circles.push({x:x,z:z,r:.6});
  if(n%2===0){const s=new T.Mesh(org(new T.SphereGeometry(.12,7,6),.05,n,8),stoneM);s.position.set(x+1,.08,z+.6);scene.add(s);stonePicks.push(s);}n++;}
 window.__TV=vars;vars.forEach((geo,v)=>{const im=new T.InstancedMesh(geo,barkM,Math.max(1,place[v].length)),o=new T.Object3D();place[v].forEach((p,i)=>{o.position.set(p[0],0,p[1]);o.rotation.y=p[2];o.scale.setScalar(p[3]);o.updateMatrix();im.setMatrixAt(i,o.matrix);});if(!place[v].length){o.position.set(0,-50,0);o.updateMatrix();im.setMatrixAt(0,o.matrix);}im.castShadow=true;im.receiveShadow=true;im.frustumCulled=false;scene.add(im);});
})();
let RADIO={x:COT.x+1.25,z:COT.z-1.5};
(function(){const r=new T.Group();r.position.set(COT.x+1.2,.82,COT.z-1.85);const om=new T.MeshStandardMaterial({color:0x3c4428,roughness:.7,metalness:.3});
 r.add(bx(.42,.26,.22,0,.13,0,om));r.add(bx(.3,.09,.01,0,.16,.112,new T.MeshStandardMaterial({color:0x111111,roughness:.3})));[-.12,-.04,.04].forEach(x=>{const k=cyl(.018,.018,.02,x,.08,.115,ironM,8);k.rotation.x=Math.PI/2;r.add(k);});
 r.add(cyl(.004,.004,.7,.16,.6,-.05,ironM,4));scene.add(r);})();
let MYGRAVE=null;(function(){let p=null;for(let q=0;q<80&&!p;q++){const x=rr(-9,-4),z=rr(18,30);if(clear(x,z,1.3)&&!blocked(x,z,1))p=[x,z];}if(!p)p=[-6,24];
 const plate=tex(256,(x,s)=>{x.drawImage(TS.canvas,0,0,s,s);x.fillStyle='#16140f';x.textAlign='center';x.font='bold 30px Georgia';x.fillText('HERE LIES',s/2,70);x.font='bold 26px Georgia';x.fillText('THE NIGHT',s/2,112);x.fillText('WATCHMAN',s/2,142);x.font='20px Georgia';x.fillText('11:42 PM — TONIGHT',s/2,186);x.font='italic 15px Georgia';x.fillText('“he answered”',s/2,214);},0);
 const m=new T.Mesh(new T.BoxGeometry(.85,1.2,.2),[stoneM,stoneM,stoneM,stoneM,new T.MeshStandardMaterial({map:plate,normalMap:TS.nor,roughness:.95}),stoneM]);m.position.set(p[0],.6,p[1]);m.rotation.set(-.05,0,.03);m.castShadow=true;scene.add(m);
 const d=new T.Mesh(new T.PlaneGeometry(1,2),new T.MeshLambertMaterial({map:groundT,color:0x6a5238}));d.rotation.x=-Math.PI/2;d.position.set(p[0],.022,p[1]+1.3);scene.add(d);
 const sh=new T.Mesh(org(new T.SphereGeometry(.5,10,8),.1,2,3),new T.MeshLambertMaterial({map:groundT,color:0x5a4a3a}));sh.scale.set(1,.4,1);sh.position.set(p[0]+.9,0,p[1]+1.3);scene.add(sh);
 circles.push({x:p[0],z:p[1],r:.55});MYGRAVE={x:p[0],z:p[1]+1.2};})();
const PH={x:7,z:-H+4.5,ring:0,cd:200,uses:0,pn:null,lt:null,gl:null,bt:0};
(function(){let x=PH.x,z=PH.z;for(let q=0;q<60&&!clear(x,z,1.1);q++){x=rr(4,14);z=-H+rr(3.5,7);}PH.x=x;PH.z=z;
 const g=new T.Group();g.position.set(x,0,z);const red=new T.MeshStandardMaterial({color:0x5a1512,roughness:.75,metalness:.2}),gl=new T.MeshStandardMaterial({color:0x3a4848,roughness:.15,metalness:.1,transparent:true,opacity:.22,depthWrite:false});
 [[-.48,-.48],[.48,-.48],[-.48,.48],[.48,.48]].forEach(c=>g.add(bx(.07,2.35,.07,c[0],1.175,c[1],red)));
 g.add(bx(1.08,.14,1.08,0,2.38,0,red));g.add(bx(1.04,.08,1.04,0,.04,0,new T.MeshStandardMaterial({color:0x222222,roughness:.9})));
 g.add(bx(.9,.22,.04,0,2.2,.52,new T.MeshStandardMaterial({color:0xd8d2b8,emissive:0x2a2820,roughness:.6})));
 g.add(bx(.9,1.9,.02,0,1.1,-.48,gl));g.add(bx(.02,1.9,.9,-.48,1.1,0,gl));g.add(bx(.02,1.9,.9,.48,1.1,0,gl));
 g.add(bx(.26,.38,.12,0,1.4,-.4,new T.MeshStandardMaterial({color:0x111111,roughness:.4,metalness:.6})));
 const hs=bx(.06,.24,.07,.1,1.42,-.32,new T.MeshStandardMaterial({color:0x080808,roughness:.3}));g.add(hs);PH.hs=hs;
 g.add(limb(V(.1,1.3,-.32),V(.02,1.2,-.36),.008,.008,blackM,4));
 PH.lt=new T.PointLight(0xcfe6ff,.55,7,1.6);PH.lt.position.set(0,2.15,0);PH.lt.visible=false;g.add(PH.lt);
 g.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});scene.add(g);PH.g=g;circles.push({x:x,z:z,r:.72});})();

// ===================== THE WIDER GROUNDS (10x map) =====================
function fixIM(im){const m=new T.Matrix4(),p=new T.Vector3(),bb=new T.Box3();for(let i=0;i<im.count;i++){im.getMatrixAt(i,m);p.setFromMatrixPosition(m);bb.expandByPoint(p);}if(bb.isEmpty())return;const g=im.geometry.clone();g.computeBoundingSphere();const r0=g.boundingSphere.radius*2.2,c=new T.Vector3();bb.getCenter(c);g.boundingSphere=new T.Sphere(c,bb.getSize(new T.Vector3()).length()/2+r0);im.geometry=g;im.frustumCulled=true;}
const __sc0=scene.children.length;
const CAB={x:-102,z:28},MAUS={x:95,z:-100},TOWR={x:28,z:112},RAILZ=50,CORNA={x0:58,x1:138,z0:60,z1:138},WOODA={x0:-140,x1:-58,z0:-48,z1:136},FIELDA={x0:-44,x1:44,z0:60,z1:138};
const VILL=[[-74,-80,'s'],[-96,-78,'s'],[-70,-112,'n'],[-100,-114,'n'],[-118,-96,'e']];
const ZN=[
 {n:'THE OLD YARD',sub:'Where it all began',t:(x,z)=>Math.abs(x)<C&&Math.abs(z)<C},
 {n:'WHISPERING WOODS',sub:'Do not follow the lights',t:(x,z)=>x<WOODA.x1&&z>WOODA.z0},
 {n:'BLACK LAKE',sub:'It cannot swim. Probably.',t:(x,z)=>Math.hypot(x-LK.x,z-LK.z)<LK.r+6},
 {n:"PAUPERS' FIELD",sub:'Four hundred nameless crosses',t:(x,z)=>x>FIELDA.x0&&x<FIELDA.x1&&z>FIELDA.z0-4},
 {n:'THE CORNFIELD',sub:'Crouch, and it loses you',t:(x,z)=>x>CORNA.x0-3&&z>CORNA.z0-3},
 {n:"GRAVEDIGGER'S ROW",sub:'Nobody has lived here since 1987',t:(x,z)=>x<-58&&z<-58},
 {n:'MAUSOLEUM HILL',sub:'The Voss family vault',t:(x,z)=>x>58&&z<-58},
 {n:'THE RAILWAY',sub:'The midnight train still runs',t:(x,z)=>Math.abs(z-RAILZ)<4},
 {n:'THE NORTH ROWS',sub:'The newer graves',t:(x,z)=>z<-C}];
const ZSP=[];const zspot=(x,z)=>{spots.push([x,z]);ZSP.push([x,z]);};
(function(){
 // ---------- Whispering Woods: hundreds of dead trees + black pines ----------
 const TV=window.__TV||[];const place=[[],[],[]];let n=0,tr=0;
 while(n<420&&tr<6000){tr++;const x=rr(WOODA.x0,WOODA.x1),z=rr(WOODA.z0,WOODA.z1);if(Math.abs(z-RAILZ)<4||Math.hypot(x-CAB.x,z-CAB.z)<8||!clear(x,z,1.3))continue;place[n%3].push([x,z,R()*6.28,rr(.9,1.45)]);circles.push({x:x,z:z,r:.55});n++;}
 TV.forEach((geo,v)=>{const im=new T.InstancedMesh(geo,barkM,Math.max(1,place[v].length)),o=new T.Object3D();place[v].forEach((p,i)=>{o.position.set(p[0],0,p[1]);o.rotation.y=p[2];o.scale.setScalar(p[3]);o.updateMatrix();im.setMatrixAt(i,o.matrix);});im.castShadow=true;im.receiveShadow=true;scene.add(im);});
 const pg=(function(){const parts=[[2.2,3.6,2.2],[1.7,3.2,4.2],[1.15,2.8,6.1],[.6,2.2,7.8]].map((q,i)=>{const g=org(new T.ConeGeometry(q[0],q[1],9,3),.22,i*5+3,2.2).toNonIndexed();g.translate(0,q[2],0);return g;});let n=0;parts.forEach(g=>n+=g.attributes.position.count);const P2=new Float32Array(n*3),N2=new Float32Array(n*3);let k=0;parts.forEach(g=>{P2.set(g.attributes.position.array,k*3);N2.set(g.attributes.normal.array,k*3);k+=g.attributes.position.count;});const G=new T.BufferGeometry();G.setAttribute('position',new T.BufferAttribute(P2,3));G.setAttribute('normal',new T.BufferAttribute(N2,3));G.computeVertexNormals();return G;})();const pm=new T.MeshStandardMaterial({color:0x030503,roughness:1,flatShading:true}),pines=[];
 for(let k=0;k<260;k++){const x=rr(WOODA.x0-4,WOODA.x1),z=rr(WOODA.z0,WOODA.z1+6);if(Math.abs(z-RAILZ)<4||Math.hypot(x-CAB.x,z-CAB.z)<9||!clear(x,z,1.6))continue;pines.push([x,z,rr(.8,1.4)]);circles.push({x:x,z:z,r:.45});}
 {const im=new T.InstancedMesh(pg,pm,pines.length),o=new T.Object3D();pines.forEach((p,i)=>{o.position.set(p[0],0,p[1]);o.scale.set(p[2]*.62,p[2]*rr(1,1.35),p[2]*.62);o.rotation.y=R()*6;o.updateMatrix();im.setMatrixAt(i,o.matrix);});im.castShadow=true;scene.add(im);const tk=cyl(.18,.25,1.2,0,.6,0,barkM,6);const im2=new T.InstancedMesh(tk.geometry,barkM,pines.length);pines.forEach((p,i)=>{o.position.set(p[0],.6,p[1]);o.scale.set(1,1,1);o.updateMatrix();im2.setMatrixAt(i,o.matrix);});scene.add(im2);}
 // hermit's cabin
 room(CAB.x,CAB.z,6,5,3,'e',1.4,woodM,.04);{const r=new T.Mesh(new T.ConeGeometry(4.9,2.2,4),darkStoneM);r.rotation.y=Math.PI/4;r.scale.set(1,1,.85);r.position.set(CAB.x,4.1,CAB.z);S.add(r);}
 S.add(bx(1.9,.45,.95,CAB.x+1.6,.23,CAB.z+1.4,woodM));S.add(bx(.9,.8,.5,CAB.x-2.2,.4,CAB.z-1.8,woodM));S.add(bx(.35,.25,.22,CAB.x-2.2,.92,CAB.z-1.8,blackM));
 zspot(CAB.x+1,CAB.z-1);zspot(-80,-20);zspot(-120,100);zspot(-75,80);
 // ---------- Black Lake ----------
 const nt=TG.nor.clone();nt.needsUpdate=true;nt.wrapS=nt.wrapT=T.RepeatWrapping;nt.repeat.set(14,14);window.__wnt=nt;
 const wm=new T.MeshStandardMaterial({color:0x060a10,metalness:.9,roughness:.16,normalMap:nt,normalScale:new T.Vector2(.35,.35)});
 const water=new T.Mesh(new T.RingGeometry(LK.ir-.2,LK.r+.6,80,2),wm);water.rotation.x=-Math.PI/2;water.position.set(LK.x,.06,LK.z);water.receiveShadow=true;scene.add(water);window.__water=water;
 const mud=new T.Mesh(new T.RingGeometry(LK.r+.4,LK.r+3.4,80,1),new T.MeshStandardMaterial({color:0x1a140e,roughness:.55}));mud.rotation.x=-Math.PI/2;mud.position.set(LK.x,.03,LK.z);scene.add(mud);
 const isl=new T.Mesh(org(new T.SphereGeometry(LK.ir+.3,24,10,0,Math.PI*2,0,Math.PI/2),.15,7,1),new T.MeshStandardMaterial({map:TG.map,color:0x5a5040,roughness:1}));isl.scale.y=.12;isl.position.set(LK.x,0,LK.z);S.add(isl);
 for(let k=0;k<5;k++){const a=k*1.25,x=LK.x+Math.cos(a)*3.6,z=LK.z+Math.sin(a)*3.6;S.add(cyl(.16,.2,rr(1.6,2.4),x,.9,z,darkStoneM,6));}
 // docks
 S.add(bx(5,.12,1.6,LK.x-LK.r+.4,.32,LK.z,woodM));for(let k=0;k<3;k++)S.add(cyl(.08,.08,1,LK.x-LK.r-1.6+k*2,.1,LK.z+.75,woodM,5));
 S.add(bx(3,.12,1.4,LK.x-LK.ir-.4,.32,LK.z,woodM));
 // reeds
 {const rg=new T.CylinderGeometry(.01,.015,1.3,3);rg.translate(0,.65,0);const im=new T.InstancedMesh(rg,new T.MeshLambertMaterial({color:0x2a3018}),700),o=new T.Object3D();for(let i=0;i<700;i++){const a=R()*6.28,r=R()<.8?LK.r+rr(-1.2,1.4):LK.ir+rr(-.4,1.1);o.position.set(LK.x+Math.cos(a)*r,0,LK.z+Math.sin(a)*r);o.rotation.set(rr(-.2,.2),0,rr(-.2,.2));o.scale.y=rr(.6,1.4);o.updateMatrix();im.setMatrixAt(i,o.matrix);}scene.add(im);}
 zspot(LK.x+2,LK.z+3);zspot(LK.x-LK.r-4,LK.z-8);zspot(LK.x+LK.r+4,LK.z+6);
 // ---------- railway across the whole map ----------
 {const L=2*H+60,rm=new T.MeshStandardMaterial({color:0x4a4038,metalness:.8,roughness:.45});[-.72,.72].forEach(o=>S.add(bx(L,.12,.08,0,.16,RAILZ+o,rm)));
  const bed=new T.Mesh(new T.PlaneGeometry(L,3.4),new T.MeshStandardMaterial({map:pathT,color:0x77706a,roughness:1}));bed.rotation.x=-Math.PI/2;bed.position.set(0,.014,RAILZ);scene.add(bed);
  const sg=new T.BoxGeometry(.24,.1,2.2),im=new T.InstancedMesh(sg,woodM,Math.floor(L/1.1)),o=new T.Object3D();for(let i=0;i<im.count;i++){o.position.set(-L/2+i*1.1,.07,RAILZ);o.rotation.y=rr(-.04,.04);o.updateMatrix();im.setMatrixAt(i,o.matrix);}scene.add(im);}
 // ---------- Paupers' Field: rows of wooden crosses + fire tower ----------
 {const pts=[];for(let z=FIELDA.z0+2;z<FIELDA.z1;z+=2.6)for(let x=FIELDA.x0;x<FIELDA.x1;x+=2.1){if(Math.abs(x)<3.5||R()<.3)continue;const px=x+rr(-.3,.3),pz=z+rr(-.3,.3);if(Math.hypot(px-TOWR.x,pz-TOWR.z)<5)continue;pts.push([px,pz,rr(-.15,.15),rr(-.12,.12)]);circles.push({x:px,z:pz,r:.18});}
  const cm=new T.MeshStandardMaterial({map:woodM.map||null,color:0x5a4a38,roughness:1}),a=new T.BoxGeometry(.09,1.15,.09),b=new T.BoxGeometry(.6,.09,.09);a.translate(0,.57,0);b.translate(0,.82,0);
  [a,b].forEach(g=>{const im=new T.InstancedMesh(g,cm,pts.length),o=new T.Object3D();pts.forEach((p,i)=>{o.position.set(p[0],0,p[1]);o.rotation.set(p[2],R()*.3-.15,p[3]);o.updateMatrix();im.setMatrixAt(i,o.matrix);});im.castShadow=true;scene.add(im);});}
 {const x=TOWR.x,z=TOWR.z;[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]].forEach(q=>S.add(limb(V(x+q[0]*1.3,0,z+q[1]*1.3),V(x+q[0],9.8,z+q[1]),.11,.09,woodM,6)));
  S.add(bx(3.6,.2,3.6,x,9.9,z,woodM));[[0,1.75],[0,-1.75]].forEach(q=>S.add(bx(3.6,.9,.08,x,10.45,z+q[1],woodM)));[[1.75,0],[-1.75,0]].forEach(q=>S.add(bx(.08,.9,3.6,x+q[0],10.45,z,woodM)));
  for(let y=1;y<9.8;y+=2.4){S.add(limb(V(x-1.8,y,z-1.8),V(x+1.8,y+2.2,z-1.8),.04,.04,woodM,4));}
  const rf=new T.Mesh(new T.ConeGeometry(3,1.6,4),darkStoneM);rf.rotation.y=Math.PI/4;rf.position.set(x,12.6,z);S.add(rf);[[-1.6,-1.6],[1.6,-1.6],[-1.6,1.6],[1.6,1.6]].forEach(q=>S.add(cyl(.05,.05,1.8,x+q[0],11.2,z+q[1],woodM,4)));
  S.add(limb(V(x+.4,0,z+2.3),V(x+.4,9.9,z+1.7),.03,.03,ironM,4));S.add(limb(V(x-.4,0,z+2.3),V(x-.4,9.9,z+1.7),.03,.03,ironM,4));boxes.push({x0:x-1.9,x1:x+1.9,z0:z-1.9,z1:z+1.9});}
 zspot(-25,90);zspot(25,128);zspot(-36,120);zspot(10,75);
 // ---------- the cornfield ----------
 {const ct=tex(64,(x,s2)=>{x.clearRect(0,0,s2,s2);x.strokeStyle='#5a5226';x.lineWidth=3;x.beginPath();x.moveTo(32,64);x.lineTo(33,0);x.stroke();for(let k=0;k<7;k++){const y=56-k*7,sd=k%2?1:-1;x.strokeStyle=k%3?'#6a6230':'#4e4a22';x.lineWidth=2.5;x.beginPath();x.moveTo(32,y);x.quadraticCurveTo(32+sd*14,y-8,32+sd*28,y+4);x.stroke();}x.fillStyle='#8a7a3a';x.fillRect(29,8,7,12);},0);
  const g=new T.PlaneGeometry(1.3,2.6);g.translate(0,1.3,0);const cm=new T.MeshLambertMaterial({map:ct,alphaTest:.4,side:T.DoubleSide});const pts=[];
  for(let z=CORNA.z0;z<CORNA.z1;z+=1.25)for(let x=CORNA.x0;x<CORNA.x1;x+=.95){if(((x-CORNA.x0)%26)<2.2||((z-CORNA.z0)%22)<2.2)continue;pts.push([x+rr(-.25,.25),z+rr(-.2,.2),rr(.75,1.15)]);}
  [0,Math.PI/2].forEach(ry=>{const im=new T.InstancedMesh(g,cm,pts.length),o=new T.Object3D();pts.forEach((p,i)=>{o.position.set(p[0],0,p[1]);o.rotation.set(rr(-.06,.06),ry+rr(-.4,.4),0);o.scale.set(1,p[2],1);o.updateMatrix();im.setMatrixAt(i,o.matrix);});scene.add(im);});}
 zspot(CORNA.x0+13,CORNA.z0+11);zspot(CORNA.x0+52,CORNA.z0+44);zspot(CORNA.x1-10,CORNA.z1-12);
 // ---------- Gravedigger's Row ----------
 VILL.forEach((v,i)=>{room(v[0],v[1],6.5,5.5,3.1,v[2],1.4,i%2?woodM:darkStoneM,.05);const r=new T.Mesh(new T.ConeGeometry(5.1,2.4,4),darkStoneM);r.rotation.y=Math.PI/4;r.scale.set(1,1,.85);r.position.set(v[0],4.3,v[1]);S.add(r);
  S.add(bx(.7,1.3,.7,v[0]+2,4.5,v[1]-1,darkStoneM));zspot(v[0]+rr(-1.5,1.5),v[1]+rr(-1.2,1.2));});
 {const x=-86,z=-96;S.add(cyl(.12,.14,1.1,x+3,.55,z+3,ironM,6));S.add(limb(V(x+3,1.05,z+3),V(x+3.5,1,z+3.3),.03,.03,ironM,4));S.add(bx(.7,.5,.7,x+3,.25,z+3.6,darkStoneM));}
 // ---------- Mausoleum Hill ----------
 {const x=MAUS.x,z=MAUS.z;room(x,z,12,10,5.5,'w',2.2,darkStoneM,.06);S.add(bx(13,.6,11,x,5.8,z,darkStoneM));
  const ped=new T.Mesh(new T.CylinderGeometry(0,6.4,2.2,3,1),darkStoneM);ped.rotation.set(0,0,Math.PI/2);ped.scale.set(1,1,.5);
  for(let k=0;k<4;k++){S.add(cyl(.35,.4,5.2,x-7,2.6,z-3.8+k*2.53,stoneM,10));circles.push({x:x-7,z:z-3.8+k*2.53,r:.45});}S.add(bx(1.4,.6,10,x-7,5.8,z,darkStoneM));
  for(let k=0;k<3;k++)S.add(bx(1.2,.18,6,x-8.2-k*.6,.09+k*.0,z,stoneM));
  [[2,-3],[2,3.3],[-1.5,-3]].forEach(q=>{S.add(bx(2.2,.9,1,x+q[0],.45,z+q[1],stoneM));});boxes.push({x0:x+.9,x1:x+3.1,z0:z-3.5,z1:z-2.5},{x0:x-2.6,x1:x-.4,z0:z-3.5,z1:z-2.5});
  S.add(bx(2.2,.9,1,x+3.4,.3,z+3.3,stoneM));
  zspot(x-9.5,z-5);zspot(x-12,z+6);}
 // ---------- the north rows: newer headstones ----------
 {const K=window.__TK,G=K&&K.geos?K.geos[0]:new T.BoxGeometry(.8,1,.15),pts=[];
  for(let gz=-C-10;gz>-H+8;gz-=4.5)for(let gx=-54;gx<56;gx+=3.4){if(Math.abs(gx)<4.5||R()<.4)continue;const x=gx+rr(-.5,.5),z=gz+rr(-.6,.6);if(!clear(x,z,1.4))continue;pts.push([x,z,rr(.85,1.2)]);circles.push({x:x,z:z,r:.42});}
  const mm=(K&&K.mats&&K.mats[0])||stoneM,im=new T.InstancedMesh(G,mm,pts.length),o=new T.Object3D();pts.forEach((p,i)=>{o.position.set(p[0]-.4*p[2],.05,p[1]);o.rotation.set(rr(-.1,.1),rr(-.2,.2),rr(-.08,.08));o.scale.setScalar(p[2]);o.updateMatrix();im.setMatrixAt(i,o.matrix);});im.castShadow=true;im.receiveShadow=true;scene.add(im);
  pts.filter((p,i)=>i%9===0).forEach(p=>tombs.push({x:p[0],z:p[1],h:1.1*p[2]}));}
 zspot(-30,-80);zspot(30,-110);zspot(-12,-130);zspot(44,-70);
 // ---------- gas lamps along the long path + signposts ----------
 window.__LAMPS=[];for(let z=-H+10,k=0;z<H-6;z+=19,k++){const x=k%2?2.3:-2.3;S.add(cyl(.06,.08,3.2,x,1.6,z,ironM,6));S.add(bx(.3,.4,.3,x,3.35,z,blackM));if(R()<.75){const g=glow(x,3.35,z,0xffb860,1.5,.5);window.__LAMPS.push({x,z,g,ph:R()*6});}}
 [[3.6,-C-4,'← GRAVEDIGGER’S ROW|MAUSOLEUM HILL →|↑ FRONT GATE'],[3.6,C+3,'← WHISPERING WOODS|CORNFIELD →|↓ PAUPERS’ FIELD'],[C+3,-3.6,'BLACK LAKE →|↑ MAUSOLEUM HILL'],[-C-3,-3.6,'← WHISPERING WOODS|↑ GRAVEDIGGER’S ROW']].forEach(sg=>{
  const t=tex(256,(x,s2)=>{x.fillStyle='#3a2a1c';x.fillRect(0,0,s2,s2);x.fillStyle='#d8ccb0';x.font='bold 22px Georgia';x.textAlign='center';sg[2].split('|').forEach((l,i)=>x.fillText(l,128,70+i*52));},0);
  S.add(cyl(.06,.07,2.6,sg[0],1.3,sg[1],woodM,5));const b=new T.Mesh(new T.PlaneGeometry(1.7,1.7),new T.MeshLambertMaterial({map:t,side:T.DoubleSide}));b.position.set(sg[0],2.1,sg[1]);b.rotation.y=Math.atan2(-sg[0],-sg[1]);scene.add(b);});
})();
// moving things in the new areas (not baked)
const BOAT={side:0,g:null};(function(){const g=new T.Group(),wm=new T.MeshStandardMaterial({color:0x3a2a1a,roughness:.9});g.add(bx(1,.3,2.6,0,.18,0,wm));[-1,1].forEach(sd=>{const s2=bx(.08,.35,2.6,sd*.5,.33,0,wm);g.add(s2);});const oar=cyl(.025,.025,2.2,0,.5,0,woodM,4);oar.rotation.z=1.3;g.add(oar);g.rotation.y=Math.PI/2;scene.add(g);BOAT.g=g;})();
function boatAt(side){BOAT.side=side;BOAT.g.position.set(side?LK.x-LK.ir-2.3:LK.x-LK.r+3.3,.12,LK.z+1.4);}boatAt(0);
const TOWER={t:0,rev:0},CRATES=[],WISPS=[],CSCR=[],HRAD={x:CAB.x-2.2,z:CAB.z-1.8,t:0,used:false};
const TRN={on:false,x:-999,cd:200,g:null,hit:false,mhit:false,lt:null};
(function(){const g=new T.Group(),bm=new T.MeshStandardMaterial({color:0x1a2230,emissive:0x0a1828,metalness:.6,roughness:.5,transparent:true,opacity:.6,depthWrite:false}),wm=new T.MeshBasicMaterial({color:0xffd890,transparent:true,opacity:.75,fog:true});
 for(let c=0;c<4;c++){const cx=-c*11;g.add(bx(10,3.2,2.9,cx,2,0,bm));for(let w=0;w<5;w++){g.add(bx(1,.7,3,cx-4+w*2,2.5,0,wm));}g.add(cyl(.5,.5,.3,cx-3.5,.5,1.5,blackM,10));g.add(cyl(.5,.5,.3,cx+3.5,.5,1.5,blackM,10));g.add(cyl(.5,.5,.3,cx-3.5,.5,-1.5,blackM,10));g.add(cyl(.5,.5,.3,cx+3.5,.5,-1.5,blackM,10));}
 const st=cyl(.45,.55,1.6,3.6,4.3,0,bm,10);g.add(st);const hl=glow(5.2,2.2,0,0xfff0c0,4,1);hl.material.fog=false;scene.remove(hl);g.add(hl);
 const cone=new T.Mesh(new T.ConeGeometry(3.5,22,16,1,true),new T.MeshBasicMaterial({color:0xfff0c8,transparent:true,opacity:.06,depthWrite:false,side:T.DoubleSide,blending:T.AdditiveBlending}));cone.rotation.z=Math.PI/2;cone.position.set(16,2,0);g.add(cone);
 TRN.lt=new T.PointLight(0xfff0c8,0,40,1.6);TRN.lt.position.set(8,3,0);TRN.lt.visible=false;g.add(TRN.lt);g.visible=false;g.position.set(-999,0,RAILZ);scene.add(g);TRN.g=g;})();
(function(){
 // supply crates
 [[CAB.x-.5,CAB.z+1.6],[VILL[1][0]+1.5,VILL[1][1]-.8],[MAUS.x+3,MAUS.z],[TOWR.x+3,TOWR.z-3],[CORNA.x0+40,CORNA.z0+30],[LK.x+1.5,LK.z-2.5],[-126,-30]].forEach((c,i)=>{const g=new T.Group();g.add(bx(.9,.6,.6,0,.3,0,woodM));g.add(bx(.92,.06,.62,0,.45,0,ironM));g.position.set(c[0],0,c[1]);g.rotation.y=R()*3;scene.add(g);circles.push({x:c[0],z:c[1],r:.5});
  const cr={x:c[0],z:c[1],g:g,open:false};CRATES.push(cr);acts.push({x:c[0],z:c[1],r:1.4,hold:.8,label:()=>cr.open?null:'Pry open the supply crate',can:()=>!cr.open,done(){cr.open=true;g.children[1].rotation.z=.9;g.children[1].position.y=.6;try{sfx.creak();}catch(e){}hear(P,9);
   const L=[()=>{stones+=4;return 'four good throwing stones';},()=>{inv.oil=Math.min(1,inv.oil+.6);return 'a tin of lamp oil';},()=>{inv.bottle+=2;return 'two glass bottles';},()=>{inv.band++;return 'a roll of bandages';},()=>{inv.holy++;return 'a flask of holy water';},()=>{inv.toy++;return 'a wind-up toy';},()=>{inv.fire=(inv.fire||0)+2;return 'two firecrackers';}];
   const a=L[(R()*L.length)|0](),b=L[(R()*L.length)|0]();hud();msg('Inside: '+a+(R()<.6?' and '+b:'')+'.',3);}});});
 // will-o'-the-wisps that lead deeper into the woods
 const chain=[[-64,10],[-78,4],[-92,-6],[-104,-14],[-116,-24],[-126,-30]];chain.forEach((c,i)=>{const g=glow(c[0],1.3,c[1],0x7fe8ff,1.1,0);g.material.fog=false;g.material.blending=T.AdditiveBlending;WISPS.push({g,x:c[0],z:c[1],i,on:i===0,a:0,gone:false});});
 // scarecrows in the corn (one of them moves)
 for(let k=0;k<3;k++){const g=new T.Group(),x=CORNA.x0+15+k*25,z=CORNA.z0+20+k*18;g.add(cyl(.05,.05,2.3,0,1.15,0,woodM,5));g.add(cyl(.04,.04,1.8,0,1.6,0,woodM,5).rotateZ(Math.PI/2));const hd=new T.Mesh(org(new T.SphereGeometry(.22,9,7),.04,k,4),new T.MeshLambertMaterial({color:0x6b5a3a}));hd.position.y=2.2;g.add(hd);g.add(bx(.7,.9,.2,0,1.3,0,new T.MeshLambertMaterial({color:0x2a2a30})));const h2=new T.Mesh(new T.ConeGeometry(.3,.4,9),blackM);h2.position.y=2.55;g.add(h2);g.position.set(x,0,z);scene.add(g);CSCR.push({g,x,z,mover:k===1,cd:0});}
 // climbing the fire tower
 acts.push({x:TOWR.x,z:TOWR.z+2.7,r:1.4,hold:1.2,label:()=>TOWER.t>0?null:'Climb the fire tower (you can see everything from up there)',can:()=>TOWER.t<=0,done(){TOWER.t=9;TOWER.x=P.x;TOWER.z=P.z;try{sfx.creak();}catch(e){}msg('You climb to the top. The whole graveyard spreads out below you. Its position is on your map now.',4);TOWER.rev=25;award('tower');
  for(let j=0;j<VIS.n;j++)for(let i=0;i<VIS.n;i++){const cx2=-H+(i+.5)*2*H/VIS.n,cz2=-H+(j+.5)*2*H/VIS.n;if(Math.hypot(cx2-TOWR.x,cz2-TOWR.z)<85)VIS.g[j*VIS.n+i]=1;}}});
 // the rowing boat
 acts.push({x:LK.x-LK.r+2.4,z:LK.z,r:1.6,hold:.6,label:()=>BOAT.side===0?'Row the boat out to the island':'The boat is on the island side',can:()=>BOAT.side===0,done(){rowBoat(1);}});
 acts.push({x:LK.x-LK.ir-1.2,z:LK.z,r:1.6,hold:.6,label:()=>BOAT.side===1?'Row the boat back to the shore':'The boat is on the far shore',can:()=>BOAT.side===1,done(){rowBoat(0);}});
 // the hermit's radio
 acts.push({x:HRAD.x+.6,z:HRAD.z+.5,r:1.3,hold:0,label:()=>HRAD.used?'The radio is dead':'Turn on the old radio (LOUD — it will go to the radio, not you)',can:()=>!HRAD.used,done(){HRAD.used=true;HRAD.t=16;msg('Static… then a crackly old song, far too loud. Get away from here.',3.5);}});
})();
function rowBoat(to){const f=$('fade');if(f){f.style.transition='opacity .6s';f.style.opacity=1;}P.hidden=null;try{for(let i=0;i<6;i++)nz({type:'lowpass',f:700,f2:300,g:.35,dur:.4,at:i*.35});}catch(e){}hear(P,22);
 setTimeout(()=>{boatAt(to);if(to){P.x=LK.x-LK.ir+.6;P.z=LK.z+.4;}else{P.x=LK.x-LK.r-2.6;P.z=LK.z;}P.yaw=to?-Math.PI/2:Math.PI/2;if(f)f.style.opacity=0;msg(to?'You drag the boat up onto the island. It cannot swim out here… you hope.':'Back on the shore.',3);if(to&&!TH.isl){TH.isl=1;setTimeout(()=>msg('Something is pacing the shoreline. Waiting.',3),4000);}},1300);}
for(const L of window.__LAMPS)L.g.userData.base=L.g.material.opacity;
// grass must not poke out of the lake or grow inside the new houses
(function(){if(!GRASS)return;const o=new T.Object3D(),m=new T.Matrix4(),p=new T.Vector3(),q=new T.Quaternion(),sc=new T.Vector3();for(let i=0;i<GRASS.count;i++){GRASS.getMatrixAt(i,m);m.decompose(p,q,sc);const d=Math.hypot(p.x-LK.x,p.z-LK.z);let kill=d<LK.r+.6&&d>LK.ir-.3;if(!kill)for(const b of BLD)if(p.x>b.x0-.2&&p.x<b.x1+.2&&p.z>b.z0-.2&&p.z<b.z1+.2){kill=true;break;}if(!kill&&Math.abs(p.z-RAILZ)<1.7)kill=true;if(kill){p.y=-9;m.compose(p,q,sc);GRASS.setMatrixAt(i,m);}}GRASS.instanceMatrix.needsUpdate=true;})();

for(let i=__sc0;i<scene.children.length;i++){const o=scene.children[i];if(o.isInstancedMesh)fixIM(o);}
tmk('world');bake();tmk('bake');
const GS=.5,GN=Math.ceil(2*H/GS),grid=new Uint8Array(GN*GN),gCost=new Float32Array(GN*GN),gFrom=new Int32Array(GN*GN),gSeen=new Uint32Array(GN*GN);let gStamp=0;
(function(){const inf=.5,cx=i=>-H+(i+.5)*GS,ci=v=>Math.max(0,Math.min(GN-1,Math.floor((v+H)/GS)));
 const area=(x0,x1,z0,z1,f)=>{const i0=ci(x0)-1,i1=ci(x1)+1,j0=ci(z0)-1,j1=ci(z1)+1;for(let j=Math.max(0,j0);j<=Math.min(GN-1,j1);j++)for(let i=Math.max(0,i0);i<=Math.min(GN-1,i1);i++)if(f(cx(i),cx(j)))grid[j*GN+i]=1;};
 for(const q of boxes){if(q.door)continue;area(q.x0-inf,q.x1+inf,q.z0-inf,q.z1+inf,(x,z)=>x>q.x0-inf&&x<q.x1+inf&&z>q.z0-inf&&z<q.z1+inf);}
 for(const c of circles){if(c.r<.3)continue;const m=c.r+.4;area(c.x-m,c.x+m,c.z-m,c.z+m,(x,z)=>(x-c.x)*(x-c.x)+(z-c.z)*(z-c.z)<m*m);}
 area(LK.x-LK.r,LK.x+LK.r,LK.z-LK.r,LK.z+LK.r,(x,z)=>inDeep(x,z,.4));})();
const gi=v=>Math.max(0,Math.min(GN-1,Math.floor((v+H)/GS)));
function freeCell(i,j){if(!grid[j*GN+i])return [i,j];for(let r=1;r<9;r++)for(let dj=-r;dj<=r;dj++)for(let di=-r;di<=r;di++){const a=i+di,b=j+dj;if(a>=0&&b>=0&&a<GN&&b<GN&&!grid[b*GN+a])return [a,b];}return null;}
tmk('grid');function findPath(sx,sz,tx,tz){if(inCatXZ(sx,sz))return catPath(sx,sz,tx,tz);{const d=Math.hypot(tx-LK.x,tz-LK.z);if(d<LK.r){const k=(LK.r+1.5)/(d||1);tx=LK.x+(tx-LK.x)*k;tz=LK.z+(tz-LK.z)*k;}}const s0=freeCell(gi(sx),gi(sz)),t0=freeCell(gi(tx),gi(tz));if(!s0||!t0)return null;const S0=s0[1]*GN+s0[0],T0=t0[1]*GN+t0[0];gStamp++;const heap=[];
 const push=(n,f)=>{heap.push([f,n]);let i=heap.length-1;while(i>0){const p=(i-1)>>1;if(heap[p][0]<=heap[i][0])break;const q=heap[p];heap[p]=heap[i];heap[i]=q;i=p;}};
 const pop=()=>{const top=heap[0],last=heap.pop();if(heap.length){heap[0]=last;let i=0;for(;;){const l=i*2+1,r=l+1;let m=i;if(l<heap.length&&heap[l][0]<heap[m][0])m=l;if(r<heap.length&&heap[r][0]<heap[m][0])m=r;if(m===i)break;const q=heap[m];heap[m]=heap[i];heap[i]=q;i=m;}}return top;};
 gCost[S0]=0;gSeen[S0]=gStamp;gFrom[S0]=-1;push(S0,0);let n=0;
 while(heap.length&&n++<14000){const cur=pop()[1];if(cur===T0)break;const ci=cur%GN,cj=(cur/GN)|0,cc=gCost[cur];
  for(let dj=-1;dj<=1;dj++)for(let di=-1;di<=1;di++){if(!di&&!dj)continue;const a=ci+di,b=cj+dj;if(a<0||b<0||a>=GN||b>=GN)continue;const nb=b*GN+a;if(grid[nb])continue;if(di&&dj&&(grid[cj*GN+a]||grid[b*GN+ci]))continue;
   const nc=cc+(di&&dj?1.414:1);if(gSeen[nb]===gStamp&&gCost[nb]<=nc)continue;gSeen[nb]=gStamp;gCost[nb]=nc;gFrom[nb]=cur;const hx=Math.abs(a-t0[0]),hz=Math.abs(b-t0[1]);push(nb,nc+Math.max(hx,hz)+.414*Math.min(hx,hz));}}
 if(gSeen[T0]!==gStamp)return null;const out=[];let c=T0,g=0;while(c>=0&&g++<5000){out.push({x:-H+(c%GN+.5)*GS,z:-H+(((c/GN)|0)+.5)*GS});c=gFrom[c];}out.reverse();out.push({x:tx,z:tz});return out;}
function clearLine(ax,az,bx2,bz){if(inCatXZ(ax,az)||inCatXZ(bx2,bz)){const d=Math.hypot(bx2-ax,bz-az),n=Math.ceil(d/.3);for(let i=1;i<n;i++){const t=i/n;if(blocked(ax+(bx2-ax)*t,az+(bz-az)*t,.32))return false;}return true;}const d=Math.hypot(bx2-ax,bz-az),n=Math.ceil(d/.25);for(let i=1;i<n;i++){const t=i/n;if(grid[gi(az+(bz-az)*t)*GN+gi(ax+(bx2-ax)*t)])return false;}return true;}
(function(){const t=tex(128,(x,s)=>{x.clearRect(0,0,s,s);for(let i=0;i<46;i++){const b0=s/2+rr(-s*.1,s*.1),tip=s/2+rr(-s*.48,s*.48),h=rr(s*.3,s*.98)*(1-Math.abs(tip-s/2)/s*.9),g=x.createLinearGradient(0,s,0,s-h),c=R();g.addColorStop(0,'#10160a');g.addColorStop(1,c<.4?'#6e6c3c':c<.75?'#46582c':'#80704a');x.strokeStyle=g;x.lineWidth=rr(1.2,3);x.beginPath();x.moveTo(b0,s);x.quadraticCurveTo(b0+(tip-b0)*.2,s-h*.6,tip,s-h);x.stroke();}},0);
 const pos=[],uv=[],nor=[],idx=[];[[1,0],[0,1],[.7,.7]].forEach((d,k)=>{const o=k*4;pos.push(-.5*d[0],0,-.5*d[1],.5*d[0],0,.5*d[1],.5*d[0],1,.5*d[1],-.5*d[0],1,-.5*d[1]);uv.push(0,0,1,0,1,1,0,1);for(let i=0;i<4;i++)nor.push(0,1,0);idx.push(o,o+1,o+2,o,o+2,o+3);});
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pos,3));g.setAttribute('normal',new T.Float32BufferAttribute(nor,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(idx);
 const gm=new T.MeshLambertMaterial({map:t,alphaTest:.35,side:T.DoubleSide});gm.onBeforeCompile=sh=>{sh.uniforms.uT={value:0};sh.vertexShader='uniform float uT;\n'+sh.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\n transformed.x+=sin(uT*1.6+instanceMatrix[3][0]*.55+instanceMatrix[3][2]*.4)*.14*uv.y;transformed.z+=sin(uT*1.1+instanceMatrix[3][2]*.5)*.07*uv.y;');grassSh=sh;};
 const N=mobile?5000:12000,im=new T.InstancedMesh(g,gm,N),o=new T.Object3D(),c=new T.Color();
 for(let i=0;i<N;i++){let x=rr(-H-3,H+3),z=rr(-H-3,H+3);if(Math.abs(x)<1.7)x+=x<0?-1.7:1.7;let gy=blocked(x,z,-.08)?-9:0;for(const b of BLD)if(x>b.x0-.2&&x<b.x1+.2&&z>b.z0-.2&&z<b.z1+.2)gy=-9;o.position.set(x,gy,z);o.rotation.set(0,R()*6,0);const w=rr(.5,.95);o.scale.set(w,rr(.3,.9),w);o.updateMatrix();im.setMatrixAt(i,o.matrix);const k=rr(.5,1);c.setRGB(k,k*rr(.88,1),k*.78);im.setColorAt(i,c);}
 scene.add(im);GRASS=im;try{fixIM(im);}catch(e){}})();
const leaves=[];
(function(){const g=new T.CircleGeometry(1.4,12),m=new T.MeshLambertMaterial({map:leafT,transparent:true,depthWrite:false});
 for(let i=0;i<18;i++){const x=rr(-E,E),z=rr(-E,E-8);const q=new T.Mesh(g,m);q.rotation.x=-Math.PI/2;q.rotation.z=R()*6;q.position.set(x,.035+i*.0004,z);scene.add(q);leaves.push({x:x,z:z});}})();
const mists=[];
(function(){const m=new T.SpriteMaterial({map:mistT,transparent:true,opacity:.035,depthWrite:false,color:0x9fb0d0});
 for(let i=0;i<40;i++){const s=new T.Sprite(m);const k=rr(10,19);s.scale.set(k,k*.35,1);s.position.set(rr(-H-6,H+6),rr(.4,1.3),rr(-H-6,H+6));s.userData.v=rr(.15,.5)*(R()<.5?-1:1);scene.add(s);mists.push(s);}})();
moon.shadow.needsUpdate=true;
const rain=(function(){const N=mobile?400:900,pos=new Float32Array(N*6),g=new T.BufferGeometry();for(let i=0;i<N;i++){const x=rr(-14,14),y=rr(0,12),z=rr(-14,14);pos.set([x,y,z,x+.04,y-.55,z],i*6);}
 g.setAttribute('position',new T.BufferAttribute(pos,3));const m=new T.LineSegments(g,new T.LineBasicMaterial({color:0x8fa0b8,transparent:true,opacity:.2}));m.frustumCulled=false;scene.add(m);return {m:m,pos:pos,N:N,g:g};})();

/* ---------- the road out (truck escape) ---------- */
const RD={z:420,len:760},OBS=[];const cab=new T.Group();cab.visible=false;camera.add(cab);
(function(){const TA=matTex(128,5,8,v=>{const g=20+v*46;return [g,g,g*1.06];},6);TA.map.repeat.set(120,2);TA.nor.repeat.set(120,2);
 const rd=new T.Mesh(new T.PlaneGeometry(RD.len+120,9.5),new T.MeshStandardMaterial({map:TA.map,normalMap:TA.nor,roughness:.95}));rd.rotation.x=-Math.PI/2;rd.position.set(RD.len/2,.02,RD.z);rd.receiveShadow=true;scene.add(rd);
 const g2=new T.Mesh(new T.PlaneGeometry(RD.len+300,260),new T.MeshLambertMaterial({color:0x0b0e09}));g2.rotation.x=-Math.PI/2;g2.position.set(RD.len/2,-.01,RD.z);scene.add(g2);
 const dg=new T.BoxGeometry(1.6,.02,.16),dm=new T.InstancedMesh(dg,new T.MeshBasicMaterial({color:0x8a8468}),100),o=new T.Object3D();for(let i=0;i<100;i++){o.position.set(i*8,.04,RD.z);o.updateMatrix();dm.setMatrixAt(i,o.matrix);}scene.add(dm);
 const tt=tex(256,(x,s)=>{x.clearRect(0,0,s,s);x.strokeStyle='#000';x.lineCap='round';function br(px,py,a,len,w,dp){const ex=px+Math.cos(a)*len,ey=py+Math.sin(a)*len;x.lineWidth=w;x.beginPath();x.moveTo(px,py);x.lineTo(ex,ey);x.stroke();if(dp<=0)return;const k=2+(R()*2|0);for(let i=0;i<k;i++)br(ex,ey,a+rr(-.7,.7),len*rr(.6,.8),w*.62,dp-1);}
  for(let i=0;i<2;i++)br(s*(.3+i*.4)+rr(-10,10),s,-1.57+rr(-.15,.15),s*rr(.24,.32),rr(8,12),5);},0);
 const pg=new T.PlaneGeometry(1,1);pg.translate(0,.5,0);const N=230,im=new T.InstancedMesh(pg,new T.MeshBasicMaterial({map:tt,color:0x050607,alphaTest:.3,side:T.DoubleSide}),N);
 for(let i=0;i<N;i++){o.position.set(rr(-30,RD.len+60),0,RD.z+(i%2?1:-1)*rr(7,24));o.rotation.y=rr(-.5,.5);const sc2=rr(9,17);o.scale.set(sc2,sc2,1);o.updateMatrix();im.setMatrixAt(i,o.matrix);}scene.add(im);
 for(let x=70;x<RD.len-40;x+=rr(30,44)){if(x>400&&x<560)continue;const lat=rr(-3.2,3.2),m=new T.Mesh(org(new T.CylinderGeometry(.34,.4,3.4,9,4),.08,x,2),barkM);m.rotation.x=Math.PI/2;m.rotation.z=rr(-.5,.5);m.position.set(x,.34,RD.z+lat);m.castShadow=true;scene.add(m);OBS.push({x:x,lat:lat,m:m,hit:false});}
 // the cab you sit in
 const dk=new T.MeshStandardMaterial({color:0x0e0e10,roughness:.7});
 const hood=new T.Mesh(org(new T.BoxGeometry(1.9,.3,1.7,4,1,4),.03,2,2),rustM);hood.position.set(0,-.78,-1.75);cab.add(hood);cab.add(bx(2.2,.4,.35,0,-.6,-.82,dk));
 [-1.05,1.05].forEach(x=>{const p=bx(.09,1.3,.09,x,.05,-.85,dk);p.rotation.z=x>0?-.12:.12;cab.add(p);});cab.add(bx(2.3,.1,.5,0,.7,-.7,dk));
 const sw=new T.Mesh(new T.TorusGeometry(.19,.018,8,24),dk);sw.position.set(-.38,-.42,-.62);sw.rotation.x=-.5;cab.add(sw);cab.userData.sw=sw;})();
const DR={x:0,lat:0,v:0,gap:22,phase:0,mx:0,mlat:0,shake:0,ht:0};
function animGallop(ph){gaitLimb(arms[0],ph,.62,1.1,-.1);gaitLimb(arms[1],ph-.75,.62,1.1,-.1);gaitLimb(legs[0],ph+3.14,.5,.9,.1);gaitLimb(legs[1],ph+3.14-.75,.5,.9,.1);rig.rotation.set(Math.sin(ph-.4)*.2,0,Math.sin(ph-.37)*.07);rig.position.y=.12+Math.max(0,Math.sin(ph+.9))*.13;head.rotation.set(-.8-rig.rotation.x*.95,M.tilt*.25,M.tilt);jaw.rotation.x=.9;}
function startDrive(){mode='drive';$('mini').style.display='none';Object.assign(DR,{x:0,lat:0,v:6,gap:monDead?999:34,phase:monDead?2:0,shake:1,ht:0,t:0});lantern.visible=false;gunFP.visible=false;cab.visible=true;OBS.forEach(o=>{o.hit=false;o.m.visible=true;});
 lamp.position.set(0,-.62,-2.9);lamp.color.setHex(0xfff0d8);lamp.distance=70;lamp.intensity=3.4;$('prompt').style.display='none';$('down').style.display='none';P.down=false;camera.fov=78;camera.updateProjectionMatrix();
 sfx.crash();sfx.engine();if(!monDead)sfx.screech();msg(monDead?'You smash through the side fence onto the old road. Drive.':'You smash through the fence. IT IS RIGHT BEHIND YOU. W = gas, A / D = steer.',5);}
function endDrive(){cab.visible=false;lantern.visible=true;lamp.position.set(.3,-.15,-.3);try{applyLamp();}catch(e){lamp.color.setHex(0xffa860);}mon.visible=true;}
function updDrive(dt){const gas=K.KeyW||K.ArrowUp||(joy.id!==null&&joy.dy<-.3),brake=K.KeyS||K.KeyX||K.ArrowDown||(joy.id!==null&&joy.dy>.5);
 DR.v+=(gas?7.5:-2.5)*dt;if(brake)DR.v-=14*dt;DR.v=Math.max(0,Math.min(25,DR.v));
 const st=(K.KeyD||K.ArrowRight?1:0)-(K.KeyA||K.ArrowLeft?1:0)+(joy.id!==null?joy.dx:0);DR.lat=Math.max(-3.7,Math.min(3.7,DR.lat+st*6.5*dt*Math.min(1,DR.v/6)));if(Math.abs(DR.lat)>3.5)DR.v*=1-dt*.8;
 DR.x+=DR.v*dt;DR.shake*=.92;M.tiltT-=dt;if(M.tiltT<=0){M.tiltT=rr(.5,1.5);M.tiltG=rr(-.7,.7);}M.tilt+=(M.tiltG-M.tilt)*Math.min(1,dt*14);
 for(const o of OBS)if(!o.hit&&Math.abs(o.x-DR.x-1.6)<1.3&&Math.abs(o.lat-DR.lat)<2.3){o.hit=true;o.m.visible=false;DR.v*=.3;DR.shake=1.4;sfx.crash();msg('You hit a fallen tree!',1.5);}
 DR.t+=dt;if(DR.phase===0){const vm=(15.5+DR.x/RD.len*5.5)*D.s*Math.min(1,DR.t/5);DR.gap=Math.min(46,DR.gap+(DR.v-vm)*dt);mon.position.set(DR.x-DR.gap,0,RD.z+DR.lat*.6);mon.rotation.y=Math.PI/2;M.phase+=vm*dt*2.5;animGallop(M.phase);
  $('state').textContent='IT IS '+Math.max(0,DR.gap-2).toFixed(0)+' m BEHIND YOU';$('state').style.color='#f44';$('danger').style.opacity=Math.max(0,Math.min(.9,1-DR.gap/24));
  DR.ht-=dt;if(DR.ht<=0){DR.ht=Math.max(.3,DR.gap/22);sfx.heart(.5);if(R()<.2)sfx.screech();}
  if(DR.gap<2.4){driveDeath();return;}
  if(DR.x>440){DR.phase=1;DR.mx=DR.x+100;DR.mlat=0;sfx.screech();msg('IT CUT THROUGH THE TREES — IT IS ON THE ROAD AHEAD. RAM IT. DO NOT BRAKE!',5);}}
 else if(DR.phase===1){DR.mx-=11*dt;DR.mlat+=(DR.lat-DR.mlat)*Math.min(1,dt*.9);mon.position.set(DR.mx,0,RD.z+DR.mlat);mon.rotation.y=-Math.PI/2;M.phase+=11*dt*2.5;animGallop(M.phase);
  $('state').textContent='RAM IT';$('danger').style.opacity=.3;const dxm=DR.mx-DR.x;
  if(dxm<3.2&&dxm>-1&&Math.abs(DR.mlat-DR.lat)<2.1){if(DR.v>=13){monDead=true;killWay='truck';DR.phase=2;DR.v*=.55;DR.shake=2.2;mon.position.set(DR.x-3,0,RD.z+DR.mlat);M.deadT=1.6;sfx.crash();sfx.die();truckKillCut();$('danger').style.opacity=0;msg('You hit it at full speed. Something heavy goes under the wheels.',5);}else{driveDeath();return;}}
  else if(dxm<-2){DR.phase=0;DR.gap=8;msg('You missed it — it is right behind you!',2.5);}}
 else{$('state').textContent='THE ROAD IS QUIET';$('state').style.color='#888';}
 const sh=DR.shake*.05+DR.v*.0006;camera.position.set(DR.x+rr(-sh,sh),1.78+rr(-sh,sh),RD.z+DR.lat+rr(-sh,sh));camera.rotation.set(rr(-sh,sh)*.4,-Math.PI/2-st*.06,st*.025);cab.userData.sw.rotation.z=-st*.9;
 lamp.intensity=3.2+R()*.3;$('hand').textContent=Math.round(DR.v*3.6)+' km/h';pulse(DR,dt,.28,()=>sfx.hum(.12+DR.v/90));updAudioPos(1,0);
 if(DR.x>RD.len-30)win('truck');}
function driveDeath(){P.x=DR.x;P.z=RD.z+DR.lat;P.yaw=-Math.PI/2;P.pitch=0;endDrive();lamp.distance=24;caught();}

/* ---------- pickups (lying on the ground, no glow) ---------- */
const pickGroup=new T.Group();scene.add(pickGroup);let picks=[];
function makeKey(col){const g=new T.Group(),m=new T.MeshStandardMaterial({color:col,metalness:.85,roughness:.35});
 const ring=new T.Mesh(new T.TorusGeometry(.09,.022,8,16),m);ring.position.y=.16;g.add(ring);g.add(cyl(.018,.018,.3,0,-.07,0,m,8));g.add(bx(.09,.025,.02,.045,-.17,0,m));g.add(bx(.09,.025,.02,.045,-.1,0,m));
 g.rotation.x=Math.PI/2;const w=new T.Group();w.add(g);w.position.y=.03;return w;}
const NAMES={photo:'an old photograph',binoc:'binoculars',coin:'a silver coin',tape:'a cassette tape',candle:'a church candle',watch:'a pocket watch',cutters:'wire cutters',collar:'an old dog collar',ticket:'a conductor\u2019s ticket',toy:'a wind-up toy',band:'bandages',doll:'a cursed doll',pick:'a set of lockpicks',holy:'a flask of holy water',nv:'a night-vision monocle',journal:'a watchman\u2019s journal',cam:'the old flash camera',fire:'the firecrackers',flare:'the flare gun',salt:'the bag of salt',oil:'the lantern oil',battery:'the car battery',trap:'the bear trap',plank:'the plank',boots:'the soft boots',box:'the wind-up music box',map:'the caretaker\'s map',key:'the brass key',tkey:'the truck key',page:'the torn page',shovel:'the shovel',fuel:'the fuel can'};
function makePick(type){let g;
 if(type==='map'){g=new T.Group();const p=new T.Mesh(org(new T.BoxGeometry(.34,.008,.44,4,1,5),.014,3,9),new T.MeshLambertMaterial({color:0xc8b88c}));p.position.y=.02;g.add(p);g.rotation.y=R()*6;return g;}
 if(type==='key')g=makeKey(0xb08a30);else if(type==='tkey')g=makeKey(0x8a939c);
 else if(type==='page'){g=new T.Group();const p=new T.Mesh(org(new T.BoxGeometry(.22,.006,.3,3,1,4),.012,R()*9,9),new T.MeshLambertMaterial({color:0xb8ae94}));p.position.y=.02;g.add(p);}
 else if(type==='fire'){g=new T.Group();const rm=new T.MeshStandardMaterial({color:0x9a1a12,roughness:.6});for(let i=0;i<4;i++){const c=cyl(.018,.018,.13,(i-1.5)*.04,.02,0,rm,8);c.rotation.z=Math.PI/2;g.add(c);}g.add(limb(V(-.08,.02,0),V(-.16,.04,.04),.003,.003,blackM,3));}
 else if(type==='holy'){g=new T.Group();const gm=new T.MeshStandardMaterial({color:0x8fb0c8,roughness:.1,metalness:.1,transparent:true,opacity:.75});g.add(cyl(.045,.05,.14,0,.07,0,gm,12));g.add(cyl(.016,.02,.05,0,.165,0,gm,8));g.add(bx(.012,.05,.004,0,.08,.05,new T.MeshStandardMaterial({color:0xc8b070,metalness:.8,roughness:.3})));g.add(bx(.03,.012,.004,0,.09,.05,new T.MeshStandardMaterial({color:0xc8b070,metalness:.8,roughness:.3})));g.rotation.z=1.4;g.position.y=.05;}
 else if(type==='nv'){g=new T.Group();const m=new T.MeshStandardMaterial({color:0x1d221a,roughness:.5,metalness:.4});const t=cyl(.03,.035,.14,0,.04,0,m,12);t.rotation.z=Math.PI/2;g.add(t);g.add(bx(.06,.05,.05,-.05,.05,0,m));const l=cyl(.024,.024,.005,.072,.04,0,new T.MeshStandardMaterial({color:0x103020,emissive:0x0a2a10,roughness:.1}),12);l.rotation.z=Math.PI/2;g.add(l);g.rotation.y=R()*6;}
 else if(type==='photo'){g=new T.Group();const t=new T.Mesh(new T.PlaneGeometry(.13,.1),new T.MeshLambertMaterial({color:0xd8c8a0,side:T.DoubleSide}));t.rotation.x=-Math.PI/2;t.position.y=.012;g.add(t);g.rotation.y=R()*6;}
 else if(type==='binoc'){g=new T.Group();[-1,1].forEach(sd=>{const c=cyl(.035,.04,.14,sd*.045,.04,0,blackM,10);c.rotation.x=Math.PI/2;g.add(c);});g.rotation.y=R()*6;}
 else if(type==='coin'){g=new T.Group();g.add(cyl(.06,.06,.012,0,.02,0,new T.MeshStandardMaterial({color:0xc8ccd0,metalness:.9,roughness:.25}),12));}
 else if(type==='tape'){g=new T.Group();g.add(bx(.11,.022,.07,0,.012,0,new T.MeshStandardMaterial({color:0x151515,roughness:.5})));g.add(bx(.08,.024,.03,0,.013,-.01,new T.MeshStandardMaterial({color:0xd8d0b8})));g.rotation.y=R()*6;}
 else if(type==='candle'){g=new T.Group();g.add(cyl(.035,.04,.22,0,.11,0,new T.MeshStandardMaterial({color:0xe8e0c8,roughness:.6}),8));g.rotation.z=1.3;g.position.y=.04;}
 else if(type==='watch'){g=new T.Group();const w=cyl(.05,.05,.016,0,.01,0,new T.MeshStandardMaterial({color:0xc89a40,metalness:.9,roughness:.3}),14);g.add(w);}
 else if(type==='cutters'){g=new T.Group();const rm=new T.MeshStandardMaterial({color:0x8a1a10,roughness:.6});const a=bx(.03,.015,.28,-.02,.01,0,rm);a.rotation.y=.12;g.add(a);const b=bx(.03,.015,.28,.02,.01,0,rm);b.rotation.y=-.12;g.add(b);g.add(bx(.05,.018,.08,0,.011,.17,ironM));g.rotation.y=R()*6;}
 else if(type==='collar'){g=new T.Group();const t=new T.Mesh(new T.TorusGeometry(.09,.016,6,16),new T.MeshStandardMaterial({color:0x7a1a12,roughness:.8}));t.rotation.x=Math.PI/2;t.position.y=.02;g.add(t);}
 else if(type==='ticket'){g=new T.Group();const t=new T.Mesh(new T.PlaneGeometry(.14,.07),new T.MeshLambertMaterial({color:0xd8c070,side:T.DoubleSide}));t.rotation.x=-Math.PI/2;t.position.y=.012;g.add(t);g.rotation.y=R()*6;}
 else if(type==='toy'){g=new T.Group();g.add(bx(.12,.1,.16,0,.05,0,new T.MeshStandardMaterial({color:0x8a2a1a,metalness:.4,roughness:.5})));g.add(bx(.07,.04,.008,0,.13,-.08,ironM));g.rotation.y=R()*6;}
 else if(type==='band'){g=new T.Group();const b=cyl(.05,.05,.07,0,.035,0,new T.MeshStandardMaterial({color:0xe8e0d0,roughness:1}),12);b.rotation.z=Math.PI/2;g.add(b);g.rotation.y=R()*6;}
 else if(type==='doll'){g=new T.Group();const cm=new T.MeshStandardMaterial({color:0xb8a890,roughness:.95}),dm=new T.MeshStandardMaterial({color:0x6a1a1a,roughness:.9});g.add(cyl(.05,.07,.16,0,.08,0,dm,8));const hh=new T.Mesh(new T.SphereGeometry(.055,10,8),cm);hh.position.y=.21;g.add(hh);[-1,1].forEach(sd=>{const e=new T.Mesh(new T.SphereGeometry(.012,6,5),blackM);e.position.set(sd*.02,.22,.05);g.add(e);});g.rotation.set(0,R()*6,1.2);g.position.y=.05;}
 else if(type==='pick'){g=new T.Group();const mm=new T.MeshStandardMaterial({color:0x9a9aa0,metalness:.9,roughness:.3});for(let k=0;k<3;k++){const r=cyl(.004,.004,.14,k*.012-.012,.01,0,mm,4);r.rotation.x=Math.PI/2;g.add(r);}g.add(bx(.05,.012,.04,0,.01,-.07,new T.MeshStandardMaterial({color:0x3a2a1a,roughness:.8})));g.rotation.y=R()*6;}
 else if(type==='journal'){g=new T.Group();g.add(bx(.2,.035,.27,0,.02,0,new T.MeshStandardMaterial({color:0x3a2416,roughness:.9})));g.add(bx(.19,.03,.255,.005,.022,0,new T.MeshStandardMaterial({color:0xd8ccaa,roughness:1})));g.rotation.y=R()*6;}
 else if(type==='cam'){g=new T.Group();const cm=new T.MeshStandardMaterial({color:0x161616,roughness:.5,metalness:.3});g.add(bx(.18,.11,.07,0,.06,0,cm));const ln=cyl(.03,.035,.05,0,.06,.05,new T.MeshStandardMaterial({color:0x0a0a0a,roughness:.2,metalness:.6}),12);ln.rotation.x=Math.PI/2;g.add(ln);g.add(bx(.07,.04,.04,.05,.13,0,new T.MeshStandardMaterial({color:0xcccccc,roughness:.3,metalness:.8})));g.rotation.y=R()*6;}
 else if(type==='flare'){g=new T.Group();const om=new T.MeshStandardMaterial({color:0xd0541a,roughness:.5});g.add(bx(.08,.05,.24,0,.03,0,om));const b=cyl(.028,.028,.18,0,.05,.16,om,10);b.rotation.x=Math.PI/2;g.add(b);g.add(bx(.05,.1,.05,0,.03,-.08,om));}
 else if(type==='salt'){g=new T.Group();const sk=new T.Mesh(org(new T.SphereGeometry(.12,10,8),.02,3,9),new T.MeshLambertMaterial({map:clothT,color:0xd8d0c0}));sk.scale.set(1,.7,1.2);sk.position.y=.08;g.add(sk);}
 else if(type==='oil'){g=new T.Group();g.add(cyl(.07,.07,.18,0,.09,0,rustM,12));g.add(cyl(.012,.02,.08,.04,.2,0,rustM,6));}
 else if(type==='battery'){g=new T.Group();g.add(bx(.3,.2,.18,0,.1,0,new T.MeshStandardMaterial({color:0x151515,roughness:.5})));g.add(cyl(.02,.02,.03,-.09,.21,0,new T.MeshStandardMaterial({color:0xaa2222}),8));g.add(cyl(.02,.02,.03,.09,.21,0,ironM,8));}
 else if(type==='trap'){g=new T.Group();const r1=new T.Mesh(new T.TorusGeometry(.2,.018,6,18),ironM);r1.rotation.x=Math.PI/2;r1.position.y=.03;g.add(r1);for(let i=0;i<10;i++){const a=i*.628,t=new T.Mesh(new T.ConeGeometry(.014,.07,4),ironM);t.position.set(Math.cos(a)*.2,.07,Math.sin(a)*.2);g.add(t);}g.add(cyl(.05,.05,.015,0,.02,0,rustM,8));}
 else if(type==='plank'){g=new T.Group();g.add(bx(1.5,.05,.18,0,.03,0,woodM));}
 else if(type==='boots'){g=new T.Group();[-.08,.08].forEach(x=>{const b=new T.Mesh(org(new T.SphereGeometry(.07,8,6),.02,x,9),new T.MeshLambertMaterial({color:0x1c1612}));b.scale.set(.8,.9,1.7);b.position.set(x,.06,0);g.add(b);});}
 else if(type==='box'){g=new T.Group();g.add(new T.Mesh(org(new T.BoxGeometry(.16,.1,.12,3,2,3),.006,4,9),woodM)).position;g.children[0].position.y=.05;const ck=cyl(.006,.006,.07,.1,.06,0,ironM,5);ck.rotation.z=Math.PI/2;g.add(ck);g.add(cyl(.012,.012,.02,.14,.06,0,ironM,6));}
 else if(type==='shovel'){g=new T.Group();const h=cyl(.02,.02,1,0,.035,0,woodM,8);h.rotation.z=Math.PI/2;g.add(h);g.add(bx(.26,.02,.2,.6,.03,0,ironM));}
 else{g=new T.Group();const can=new T.Mesh(org(new T.BoxGeometry(.3,.36,.16,3,3,2),.012,2,6),new T.MeshStandardMaterial({color:0x7a1812,roughness:.6}));can.position.y=.18;g.add(can);g.add(cyl(.03,.03,.08,.08,.4,0,ironM,8));}
 g.rotation.y=R()*6;return g;}

/* ---------- the monster ---------- */
const mon=new T.Group(),rig=new T.Group();mon.add(rig);mon.scale.setScalar(1.35);scene.add(mon);
const bloodSkinT=tex(512,(x,s2)=>{x.drawImage(skinT.image||skinT.source&&skinT.source.data,0,0,s2,s2);x.fillStyle='rgba(235,228,214,.78)';x.fillRect(0,0,s2,s2);
  speck(x,s2,2500,['#cfc6b6','#e8e2d6','#b8ae9c','#d9d0c0'],.5,2.4);
  const blob=(cx,cy,r,a)=>{const g=x.createRadialGradient(cx,cy,0,cx,cy,r);g.addColorStop(0,'rgba(90,6,6,'+a+')');g.addColorStop(.6,'rgba(120,10,8,'+a*.7+')');g.addColorStop(1,'rgba(120,10,8,0)');x.fillStyle=g;x.beginPath();x.arc(cx,cy,r,0,7);x.fill();};
  for(let i=0;i<46;i++)blob(R()*s2,R()*s2,8+R()*42,.55+R()*.4);
  for(let i=0;i<60;i++){const cx=R()*s2,cy=R()*s2,L=20+R()*120,w=2+R()*5;x.strokeStyle='rgba('+(70+R()*50|0)+',4,4,'+(.5+R()*.4)+')';x.lineWidth=w;x.lineCap='round';x.beginPath();x.moveTo(cx,cy);x.quadraticCurveTo(cx+R()*10-5,cy+L*.5,cx+R()*8-4,cy+L);x.stroke();x.fillStyle=x.strokeStyle;x.beginPath();x.arc(cx+R()*8-4,cy+L,w*.9,0,7);x.fill();}
  for(let i=0;i<500;i++){x.fillStyle='rgba(100,6,6,'+(.4+R()*.5)+')';x.fillRect(R()*s2,R()*s2,1+R()*2,1+R()*2);}},0);
const skinM=new T.MeshStandardMaterial({map:bloodSkinT,normalMap:TK.nor,roughness:.5,metalness:0,color:0xd6cfc4});
const bellyM=new T.MeshStandardMaterial({map:bloodSkinT,normalMap:TK.nor,roughness:.4,color:0xcbbfb0});
const stainM=new T.MeshStandardMaterial({map:skinT,roughness:.4,color:0x2a0c0a});
const clawM=new T.MeshStandardMaterial({color:0x1c1612,roughness:.4});
const toothM=new T.MeshStandardMaterial({color:0xd6cc9c,roughness:.35});
const faceM=new T.MeshStandardMaterial({map:(()=>{try{const t=bloodSkinT.clone();t.wrapS=t.wrapT=T.RepeatWrapping;t.repeat.set(3.2,3.2);t.needsUpdate=true;return t;}catch(e){return bloodSkinT;}})(),normalMap:TK.nor,roughness:.5,metalness:0,color:0xd6cfc4}),tearM=new T.MeshBasicMaterial({color:0x050303}),pupils=[],hairM=new T.MeshLambertMaterial({color:0x070606}),boneM=new T.MeshStandardMaterial({map:TS.map,normalMap:TK.nor,roughness:.8,color:0x4a443c});
const eyeM=new T.MeshStandardMaterial({color:0xd8dde8,emissive:0x59606c,roughness:.12});
function blob(r,sx,sy,sz,x,y,z,mat,amp,ws,hs){const g=new T.SphereGeometry(r,ws||18,hs||14);if(amp)org(g,amp,x*7+y*3+z,3.2/Math.max(r,.08)*.3);const m=new T.Mesh(g,mat);m.scale.set(sx,sy,sz);m.position.set(x,y,z);return m;}
function olimb(a,b,r0,r1,mat,seg){const m=limb(a,b,r0,r1,mat,seg||12);const p=m.geometry.attributes.position,L=a.distanceTo(b);for(let i=0;i<p.count;i++){const y=p.getY(i)/L+.5,k=1+Math.sin(y*3.14)*.22;p.setX(i,p.getX(i)*k);p.setZ(i,p.getZ(i)*k);}m.geometry.computeVertexNormals();return m;}
// Bodies are grown as one continuous skin from blended volumes, then meshed — no visible balls and tubes.
const sm=(a,b,k)=>{const h=Math.max(k-Math.abs(a-b),0)/k;return Math.min(a,b)-h*h*k*.25;},ssub=(a,b,k)=>-sm(-a,b,k);
function cap(px,py,pz,ax,ay,az,bx2,by,bz,ra,rb){const ux=bx2-ax,uy=by-ay,uz=bz-az;let t=((px-ax)*ux+(py-ay)*uy+(pz-az)*uz)/(ux*ux+uy*uy+uz*uz);t=t<0?0:t>1?1:t;return Math.hypot(px-ax-ux*t,py-ay-uy*t,pz-az-uz*t)-(ra+(rb-ra)*t);}
function ell(px,py,pz,cx,cy,cz,rx,ry,rz){return (Math.hypot((px-cx)/rx,(py-cy)/ry,(pz-cz)/rz)-1)*Math.min(rx,ry,rz);}
function sdfMesh(f,lo,hi,res){const ck=CI_S++,sig=lo.join()+'|'+hi.join()+'|'+res,cc=CACHE&&CACHE.s&&CACHE.s[ck];if(cc&&cc.sig===sig){const g=new T.BufferGeometry();g.setAttribute('position',new T.BufferAttribute(cc.p,3));g.setAttribute('uv',new T.BufferAttribute(cc.u,2));g.setAttribute('normal',new T.BufferAttribute(cc.n,3));g.setIndex(new T.BufferAttribute(cc.i,1));return g;}
 const g0=sdfMesh0(f,lo,hi,res);COUT.s[ck]={sig,p:g0.attributes.position.array.slice(),u:g0.attributes.uv.array.slice(),n:g0.attributes.normal.array.slice(),i:g0.index.array.slice()};return g0;}
function sdfMesh0(f,lo,hi,res){const nx=Math.ceil((hi[0]-lo[0])/res)+2,ny=Math.ceil((hi[1]-lo[1])/res)+2,nz=Math.ceil((hi[2]-lo[2])/res)+2,val=new Float32Array(nx*ny*nz),id=(i,j,k)=>i+nx*(j+ny*k);
 for(let k=0;k<nz;k++)for(let j=0;j<ny;j++)for(let i=0;i<nx;i++)val[id(i,j,k)]=f(lo[0]+i*res,lo[1]+j*res,lo[2]+k*res);
 const vi=new Int32Array(nx*ny*nz).fill(-1),pos=[],idx=[],C=[[0,0,0],[1,0,0],[0,1,0],[1,1,0],[0,0,1],[1,0,1],[0,1,1],[1,1,1]],ED=[[0,1],[2,3],[4,5],[6,7],[0,2],[1,3],[4,6],[5,7],[0,4],[1,5],[2,6],[3,7]];
 for(let k=0;k<nz-1;k++)for(let j=0;j<ny-1;j++)for(let i=0;i<nx-1;i++){let sx=0,sy=0,sz=0,n=0;const v=[];for(let c=0;c<8;c++)v.push(val[id(i+C[c][0],j+C[c][1],k+C[c][2])]);
  for(const e of ED){const a=v[e[0]],b=v[e[1]];if((a<0)!==(b<0)){const t=a/(a-b),A=C[e[0]],B=C[e[1]];sx+=A[0]+(B[0]-A[0])*t;sy+=A[1]+(B[1]-A[1])*t;sz+=A[2]+(B[2]-A[2])*t;n++;}}
  if(n){vi[id(i,j,k)]=pos.length/3;pos.push(lo[0]+(i+sx/n)*res,lo[1]+(j+sy/n)*res,lo[2]+(k+sz/n)*res);}}
 const quad=(a,b,c,d,ax,sgn)=>{if(a<0||b<0||c<0||d<0)return;const p=q=>[pos[q*3],pos[q*3+1],pos[q*3+2]],A=p(a),B=p(b),Cc=p(c),u=[B[0]-A[0],B[1]-A[1],B[2]-A[2]],w=[Cc[0]-A[0],Cc[1]-A[1],Cc[2]-A[2]],nrm=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]];
  if(nrm[ax]*sgn>=0)idx.push(a,b,c,a,c,d);else idx.push(a,c,b,a,d,c);};
 for(let k=1;k<nz-1;k++)for(let j=1;j<ny-1;j++)for(let i=1;i<nx-1;i++){const a=val[id(i,j,k)];
  let b=val[id(i+1,j,k)];if((a<0)!==(b<0))quad(vi[id(i,j-1,k-1)],vi[id(i,j,k-1)],vi[id(i,j,k)],vi[id(i,j-1,k)],0,a<0?1:-1);
  b=val[id(i,j+1,k)];if((a<0)!==(b<0))quad(vi[id(i-1,j,k-1)],vi[id(i-1,j,k)],vi[id(i,j,k)],vi[id(i,j,k-1)],1,a<0?1:-1);
  b=val[id(i,j,k+1)];if((a<0)!==(b<0))quad(vi[id(i-1,j-1,k)],vi[id(i,j-1,k)],vi[id(i,j,k)],vi[id(i-1,j,k)],2,a<0?1:-1);}
 const uv=[];for(let q=0;q<pos.length;q+=3)uv.push(pos[q]*3+pos[q+2]*1.7,pos[q+1]*3+pos[q+2]*.9);
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pos,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();return g;}
const wrk=(x,y,z)=>(Math.sin(x*41)+Math.sin(y*37+1)+Math.sin(z*43+2))*.0032;
const gumM=new T.MeshStandardMaterial({color:0x2a090b,roughness:.25}),tongM=new T.MeshStandardMaterial({color:0x260a0c,roughness:.3});
const head=new T.Group(),arms=[],legs=[];let jaw,belly,tongue,torMesh;
(function(){
 const core=new T.Group();core.position.y=.05;rig.add(core);
 const spine=[];for(let i=0;i<13;i++)spine.push([-.66+i*.1,.5+Math.sin(i/12*3.14)*.09]);
 const torM=new T.Mesh(sdfMesh((x,y,z)=>{const ax=Math.abs(x);let d=ell(x,y,z,0,.43,.3,.165,.215,.31);d=sm(d,ell(ax,y,z,.13,.52,-.56,.05,.055,.08),.04);
  d=sm(d,ell(x,y,z,0,.47,-.2,.085,.075,.3),.09);d=sm(d,ell(x,y,z,0,.4,-.6,.17,.125,.2),.09);
  d=sm(d,cap(x,y,z,0,.5,.44,0,.63,.8,.085,.055),.09);d=sm(d,ell(ax,y,z,.19,.5,.4,.09,.075,.1),.09);d=sm(d,ell(ax,y,z,.13,.42,-.58,.095,.085,.11),.09);d=sm(d,ell(ax,y,z,.13,.585,.36,.085,.03,.1),.07);
  for(let q=0;q<spine.length;q++){const s=spine[q],L=.025+.025*Math.sin(q/12*3.14);d=sm(d,cap(x,y,z,0,s[1]+.03,s[0],0,s[1]+.04+L,s[0]-.03,.02,.008),.05);}
  if(z>.02&&z<.56&&ax>.05)d+=Math.sin(z*58)*.017*Math.min(1,(ax-.05)*12);
  return d+wrk(x,y,z)+Math.sin((x*1.3+y)*85+Math.sin(z*14)*2)*.0016;},[-.34,.16,-.9],[.34,1.02,.86],.016),skinM);torM.scale.set(.86,1,1.06);core.add(torM);torMesh=torM;
 belly=new T.Mesh(sdfMesh((x,y,z)=>{let d=ell(x,y,z,0,0,0,.27,.24,.4);d=sm(d,Math.hypot(x-.14,y+.1,z-.08)-.1,.06);d=sm(d,Math.hypot(x+.16,y+.06,z+.18)-.08,.05);d=sm(d,Math.hypot(x-.04,y+.17,z+.2)-.07,.05);return d+wrk(x,y,z)*1.5;},[-.36,-.36,-.48],[.36,.3,.48],.022),bellyM);belly.position.set(0,.35,-.1);belly.visible=false;core.add(belly);
 // head: one skull with carved sockets, nose and palate
 head.position.set(0,.6,.93);head.scale.setScalar(.8);core.add(head);
 head.add(new T.Mesh(sdfMesh((x,y,z)=>{const ax=Math.abs(x);let d=ell(x,y,z,0,.01,0,.172,.215,.205);d=sm(d,ell(x,y,z,0,.105,.15,.135,.036,.06),.03);d=sm(d,ell(ax,y,z,.105,-.015,.12,.05,.04,.045),.03);d=sm(d,ell(x,y,z,0,-.06,.13,.105,.06,.085),.03);d=sm(d,ell(ax,y,z,.175,0,-.02,.018,.04,.03),.015);
  d=ssub(d,Math.hypot(ax-.078,y-.05,z-.185)-.056,.02);d=ssub(d,ell(x,y,z,0,-.02,.215,.022,.034,.03),.01);d=ssub(d,ell(x,y,z,0,-.215,.13,.2,.125,.17),.02);d=sm(d,cap(x,y,z,0,-.04,-.13,0,-.11,-.38,.06,.075),.05);return d+wrk(x,y,z);},[-.26,-.5,-.46],[.26,.27,.27],.0105),faceM));
 [-1,1].forEach(s=>{const so=new T.Mesh(new T.SphereGeometry(.05,10,8),blackM);so.position.set(s*.078,.05,.15);head.add(so);
  const e=new T.Mesh(new T.SphereGeometry(.0035,8,8),new T.MeshBasicMaterial({color:0xffffff,fog:false,toneMapped:false}));e.position.set(s*.078,.05,.2);head.add(e);pupils.push(e);});
 const mb=new T.Mesh(new T.SphereGeometry(.1,12,10),blackM);mb.scale.set(1.45,.9,.85);mb.position.set(0,-.15,.08);head.add(mb);
 jaw=new T.Group();jaw.position.set(0,-.1,.02);head.add(jaw);
 {const arc=(yy,zz,rx,k)=>{const P2=[];for(let q=0;q<=10;q++){const a=(q-5)*.24;P2.push([Math.sin(a)*rx,yy+Math.abs(a)*k,zz+.19*Math.cos(a)]);}return (x,y,z)=>{let d=9;for(let q=0;q<10;q++)d=sm(d,cap(x,y,z,P2[q][0],P2[q][1],P2[q][2],P2[q+1][0],P2[q+1][1],P2[q+1][2],.015,.015),.008);return d;};};
  
  
  tongue=new T.Mesh(sdfMesh((x,y,z)=>{let d=cap(x,y*1.8,z,0,0,0,0,-.02,.1,.032,.028);d=sm(d,cap(x,y*1.8,z,0,-.02,.1,0,-.1,.2,.028,.02),.02);d=sm(d,cap(x,y*1.8,z,0,-.1,.2,0,-.24,.27,.02,.008),.02);return d;},[-.05,-.16,-.04],[.05,.03,.3],.008),tongM);tongue.position.set(0,-.03,.04);tongue.visible=false;jaw.add(tongue);}
 jaw.add(new T.Mesh(sdfMesh((x,y,z)=>{let d=ell(x,y,z,0,-.03,.03,.095,.032,.11);d=ssub(d,ell(x,y,z,0,.005,.03,.075,.035,.09),.012);return d+wrk(x,y,z);},[-.18,-.15,-.13],[.18,.06,.25],.012),stainM));
 // THE GRIN: a mouth far too wide for the skull, pulled up into the cheeks, lips bulging, packed with needle teeth
 {const W=.215,u2=x=>{const u=Math.min(1,Math.abs(x)/W);return u*u;},yU=x=>-.05+.07*u2(x),yL=x=>-.215+.23*u2(x),zC=x=>.232-.16*u2(x),JP=V(0,-.1,.02);
  const arcF=(yf,r0,r1)=>(x,y,z)=>{let d=9;const N=22;for(let q=0;q<N;q++){const x0=-W+2*W*q/N,x1=-W+2*W*(q+1)/N,ra=r0+(r1-r0)*(1-u2(x0)),rb=r0+(r1-r0)*(1-u2(x1));d=sm(d,cap(x,y,z,x0,yf(x0),zC(x0),x1,yf(x1),zC(x1),ra,rb),.012);}return d;};
  // cavity: a black curved slab behind the lips, deeper than the jaw can open
  const cav=new T.Mesh(sdfMesh((x,y,z)=>{const zc=zC(x)-.05;return Math.max(Math.abs(x)-W*.95,y-yU(x)+.01,(yL(x)-.07)-y,Math.abs(z-zc)-.025);},[-.24,-.4,-.02],[.24,.04,.28],.009),blackM);head.add(cav);
  // upper lip + cheek folds (on the skull)
  const ul=new T.Mesh(sdfMesh((x,y,z)=>{let d=arcF(yU,.011,.02)(x,y+.008,z);const ax=Math.abs(x);d=sm(d,cap(ax,y,z,W-.012,yU(W)+.004,zC(W)+.01,W-.05,.07,.15,.009,.004),.02);d=sm(d,ell(ax,y,z,W-.015,yU(W),zC(W)+.004,.02,.022,.02),.02);return d+wrk(x,y,z);},[-.26,-.1,.02],[.26,.13,.28],.0075),faceM);head.add(ul);
  // lower lip on the jaw, so the whole bottom of the grin drops open
  const ll=new T.Mesh(sdfMesh((x,y,z)=>arcF(yL,.008,.016)(x,y-.006,z)+wrk(x,y,z),[-.26,-.28,.02],[.26,.06,.3],.0075),faceM);ll.position.sub(JP);jaw.add(ll);
  // needle teeth: two crowded rows, longest in the middle, crooked
  const tM=new T.MeshStandardMaterial({color:0xe2dcc0,roughness:.3,emissive:0x15130c});
  for(let i=0;i<36;i++){const x=-W*.94+i*(W*1.88/35)+rr(-.002,.002),k=1-u2(x)*.5,L=rr(.05,.09)*k;const t=new T.Mesh(new T.ConeGeometry(rr(.0045,.0065),L,5),tM);t.position.set(x,yU(x)-.012-L/2,zC(x)-.006);t.rotation.set(Math.PI+rr(-.25,.18),rr(-.3,.3),rr(-.22,.22)+x*.6);head.add(t);}
  for(let i=0;i<32;i++){const x=-W*.92+i*(W*1.84/31)+rr(-.002,.002),k=1-u2(x)*.45,L=rr(.05,.095)*k;const t=new T.Mesh(new T.ConeGeometry(rr(.0045,.0065),L,5),tM);t.position.set(x,yL(x)+.014+L/2,zC(x)-.008).sub(JP);t.rotation.set(rr(-.18,.25),rr(-.3,.3),rr(-.22,.22)-x*.6);jaw.add(t);}
  {const bm2=new T.MeshStandardMaterial({color:0x3a0303,roughness:.2,metalness:.1});for(let i=0;i<14;i++){const x0=-W*.85+R()*W*1.7,yl=yL(x0)-.03,z0=zC(x0)+.012,L2=rr(.025,.085);const d=limb(V(x0,yl,z0),V(x0+rr(-.01,.01),yl-L2,z0-.01),.007,.003,bm2,5);d.position.sub(JP);jaw.add(d);}
  for(let i=0;i<6;i++){const x0=-W*.7+R()*W*1.4,yu=yU(x0)+.02,z0=zC(x0)+.02;head.add(limb(V(x0,yu,z0),V(x0,yu+rr(.02,.05),z0-.01),.006,.003,bm2,4));}}
 // a second, inner row further back — you only see it when it opens wide
  for(let i=0;i<22;i++){const x=-W*.75+i*(W*1.5/21),L=rr(.025,.05);const t=new T.Mesh(new T.ConeGeometry(.005,L,5),tM);t.position.set(x,yU(x)-.012-L/2,zC(x)-.045);t.rotation.set(Math.PI+rr(-.3,.3),0,rr(-.3,.3));head.add(t);
   const b2=new T.Mesh(new T.ConeGeometry(.005,L,5),tM);b2.position.set(x,yL(x)+.014+L/2,zC(x)-.048).sub(JP);b2.rotation.set(rr(-.3,.3),0,rr(-.3,.3));jaw.add(b2);}}
 for(let i=0;i<4;i++)jaw.add(limb(V(rr(-.07,.07),-.1,.16),V(rr(-.07,.07),-.1-rr(.08,.2),.17),.006,.002,stainM,5));
 [-1,1].forEach(sd=>{for(let q=0;q<4;q++){const x0=sd*(.05+q*.02),top=V(x0,.0,.196-Math.abs(q-1.5)*.012),bot=V(x0+sd*rr(-.01,.02),-rr(.07,.16),.2-Math.abs(q-1.5)*.014);head.add(limb(top,bot,.006,.002,tearM,4));}});
 // limbs: each bone is one sculpted piece with joints and muscle, the hand is one piece with its fingers
 function seg(a,b,r0,r1,flare){const p=r0*2.1,lo=[Math.min(a.x,b.x)-p,Math.min(a.y,b.y)-p,Math.min(a.z,b.z)-p],hi=[Math.max(a.x,b.x)+p,Math.max(a.y,b.y)+p,Math.max(a.z,b.z)+p],mx=a.x+(b.x-a.x)*.35,my=a.y+(b.y-a.y)*.35,mz=a.z+(b.z-a.z)*.35,dd=new T.Vector3().subVectors(b,a).normalize();
  return new T.Mesh(sdfMesh((x,y,z)=>{let d=cap(x,y,z,a.x,a.y,a.z,b.x,b.y,b.z,r0,r1);d=sm(d,Math.hypot(x-a.x,y-a.y,z-a.z)-r0*1.3,r0*1.1);d=sm(d,Math.hypot(x-b.x,y-b.y,z-b.z)-r1*1.3,r1*1.1);d=sm(d,Math.hypot(x-mx,y-my,z-mz)-r0*1.12,r0*1.3);
   if(flare)d=sm(d,Math.hypot((x-a.x+dd.x*r0*.8)/1.5,y-a.y+dd.y*r0*.8,(z-a.z+dd.z*r0*.8)/1.3)-r0*1.5,r0*1.2);
   return d+wrk(x,y,z)*.6+Math.sin((x+y*.7+z*.6)*95)*.001;},lo,hi,Math.max(.007,r0*.18)),skinM);}
 function handG(at){const F=[];for(let i=0;i<5;i++){const sp=(i-2)*.026,a=[at.x+sp,at.y+.006,at.z+.06],b=[a[0]+sp*1.2,a[1]+.01,a[2]+.12+((i*7)%3)*.012],c=[b[0]+sp*.7,b[1]-.03,b[2]+.13];F.push([a,b,c]);}
  return new T.Mesh(sdfMesh((x,y,z)=>{let d=ell(x,y,z,at.x,at.y+.008,at.z+.03,.05,.021,.064);for(const f of F){d=sm(d,cap(x,y,z,f[0][0],f[0][1],f[0][2],f[1][0],f[1][1],f[1][2],.0105,.009),.022);d=sm(d,cap(x,y,z,f[1][0],f[1][1],f[1][2],f[2][0],f[2][1],f[2][2],.009,.0025),.011);}return d;},[at.x-.14,at.y-.05,at.z-.05],[at.x+.14,at.y+.055,at.z+.36],.006),skinM);}
 function mk(root,el,wr2,r0,r1,r2){const G=new T.Group();G.position.copy(root);G.add(seg(V(0,0,0),el,r0,r1,1));const E=new T.Group();E.position.copy(el);G.add(E);const fw=wr2.clone().sub(el);E.add(seg(V(0,0,0),fw,r1,r2));E.add(handG(fw));G.userData.e=E;G.userData.s=Math.sign(root.x);G.userData.ik={L1:el.length(),L2:fw.length(),u0:el.clone().normalize(),f0:fw.clone().normalize()};core.add(G);return G;}
 function mk3(root,kn,hk,ft,r0,r1,r2,r3){const G=new T.Group();G.position.copy(root);G.add(seg(V(0,0,0),kn,r0,r1,1));const E=new T.Group();E.position.copy(kn);G.add(E);const a=hk.clone().sub(kn);E.add(seg(V(0,0,0),a,r1,r2));const F=new T.Group();F.position.copy(a);E.add(F);const b=ft.clone().sub(hk);F.add(seg(V(0,0,0),b,r2,r3));F.add(handG(b));G.userData.e=E;G.userData.f=F;G.userData.s=Math.sign(root.x);{const ef=ft.clone().sub(kn);G.userData.ik={L1:kn.length(),L2:ef.length(),u0:kn.clone().normalize(),f0:ef.clone().normalize()};}core.add(G);return G;}
 [-1,1].forEach(s=>{arms.push(mk(V(s*.2,.5,.38),V(s*.24,-.17,.17),V(s*.33,-.6,.5),.036,.027,.019));legs.push(mk3(V(s*.13,.42,-.58),V(s*.3,-.1,.12),V(s*.34,-.35,-.16),V(s*.36,-.44,-.3),.056,.038,.026,.02));});
})();
mon.traverse(o=>{if(o.isMesh)o.castShadow=true;});
/* ---------- zombies ---------- */
const zskinM=new T.MeshStandardMaterial({map:skinT,normalMap:TK.nor,roughness:.6,color:0x8a9482});
const clothM=new T.MeshLambertMaterial({map:clothT});
const ZG=(function(){
 const torso=sdfMesh((x,y,z)=>{let d=ell(x,y,z,0,1.25,0,.2,.27,.13);d=sm(d,ell(x,y,z,0,1.47,.01,.25,.1,.12),.08);d=sm(d,ell(x,y,z,0,1,0,.19,.14,.13),.08);d=sm(d,cap(x,y,z,0,1.5,0,0,1.64,.04,.05,.045),.04);return d+wrk(x,y,z)*2.5;},[-.34,.82,-.2],[.34,1.72,.22],.022);
 const hd=sdfMesh((x,y,z)=>{const ax=Math.abs(x);let d=ell(x,y,z,0,0,0,.115,.14,.13);d=sm(d,ell(x,y,z,0,-.08,.05,.08,.06,.07),.03);d=sm(d,ell(x,y,z,0,.06,.09,.09,.025,.04),.02);d=ssub(d,Math.hypot(ax-.05,y-.03,z-.115)-.036,.012);d=ssub(d,ell(x,y,z,0,-.09,.12,.055,.04,.05),.01);return d+wrk(x,y,z);},[-.16,-.18,-.16],[.16,.17,.17],.011);
 const leg=s=>sdfMesh((x,y,z)=>{let d=cap(x,y,z,0,0,0,s*.01,-.45,.05,.088,.066);d=sm(d,cap(x,y,z,s*.01,-.45,.05,s*.02,-.88,0,.066,.045),.03);d=sm(d,ell(x,y,z,s*.02,-.91,.07,.05,.036,.11),.03);return d+wrk(x,y,z)*2;},[-.14,-1,-.12],[.14,.11,.22],.02);
 const arm=s=>sdfMesh((x,y,z)=>{let d=cap(x,y,z,0,0,0,s*.02,-.08,.3,.058,.046);d=sm(d,cap(x,y,z,s*.02,-.08,.3,0,-.04,.6,.044,.03),.03);d=sm(d,ell(x,y,z,0,-.04,.66,.04,.02,.055),.02);for(let i=0;i<4;i++)d=sm(d,cap(x,y,z,(i-1.5)*.02,-.04,.69,(i-1.5)*.03,-.08,.79,.009,.004),.008);return d+wrk(x,y,z);},[-.1,-.16,-.08],[.1,.08,.82],.014);
 const hand=sdfMesh((x,y,z)=>{let d=cap(x,y,z,0,-.3,0,.03,.28,.04,.046,.033);d=sm(d,ell(x,y,z,.03,.32,.05,.046,.05,.03),.02);for(let i=0;i<4;i++)d=sm(d,cap(x,y,z,.03+(i-1.5)*.022,.35,.06,.03+(i-1.5)*.04,.46,.11+i*.008,.0095,.004),.008);d=sm(d,cap(x,y,z,.07,.3,.05,.11,.36,.08,.01,.005),.008);return d+wrk(x,y,z);},[-.08,-.34,-.07],[.14,.5,.17],.012);
 return {torso:torso,hd:hd,leg:[leg(-1),leg(1)],arm:[arm(-1),arm(1)],hand:hand};})();
function mkZombie(){const g=new T.Group(),u={};[-1,1].forEach((s,i)=>{const L=new T.Group();L.position.set(s*.12,.95,0);L.add(new T.Mesh(ZG.leg[i],clothM));g.add(L);u[s<0?'ll':'rl']=L;const A=new T.Group();A.position.set(s*.27,1.45,0);A.add(new T.Mesh(ZG.arm[i],zskinM));g.add(A);u[s<0?'la':'ra']=A;});
 g.add(new T.Mesh(ZG.torso,clothM));const hd=new T.Group();hd.position.set(0,1.7,.05);hd.add(new T.Mesh(ZG.hd,zskinM));[-1,1].forEach(s=>{const so=new T.Mesh(new T.SphereGeometry(.03,8,6),blackM);so.position.set(s*.05,.03,.092);hd.add(so);const e=new T.Mesh(new T.SphereGeometry(.004,6,6),new T.MeshBasicMaterial({color:0xdfe6ff,toneMapped:false}));e.position.set(s*.05,.03,.123);hd.add(e);});
 const mo=new T.Mesh(new T.SphereGeometry(.04,8,6),blackM);mo.position.set(0,-.09,.085);hd.add(mo);hd.rotation.set(.25,0,.3);g.add(hd);u.hd=hd;g.userData=u;g.traverse(o=>{if(o.isMesh)o.castShadow=true;});return g;}

// ===================== real people (Voss, you, Old Tom) =====================
const HG=(function(){
 const head=sdfMesh((x,y,z)=>{const ax=Math.abs(x);let d=ell(x,y,z,0,.02,-.005,.098,.122,.112);
  d=sm(d,ell(x,y,z,0,-.065,.03,.082,.062,.082),.035);d=sm(d,ell(x,y,z,0,-.118,.06,.034,.026,.03),.02);
  d=sm(d,ell(ax,y,z,.058,-.015,.07,.032,.026,.03),.02);d=sm(d,ell(x,y,z,0,.046,.088,.082,.016,.03),.015);
  d=sm(d,cap(x,y,z,0,.03,.1,0,-.028,.13,.011,.017),.012);d=sm(d,ell(ax,y,z,.014,-.03,.122,.013,.01,.012),.008);
  d=sm(d,ell(ax,y,z,.099,.0,-.006,.014,.033,.024),.01);
  d=ssub(d,Math.hypot(ax-.038,y-.022,z-.098)-.02,.012);d=ssub(d,ell(x,y,z,0,-.068,.106,.028,.004,.02),.006);
  d=sm(d,cap(x,y,z,0,-.09,-.03,0,-.2,-.03,.045,.05),.04);return d+wrk(x,y,z)*.6;},[-.13,-.25,-.15],[.13,.16,.16],.0075);
 const hair=(beard)=>sdfMesh((x,y,z)=>{let d=ell(x,y,z,0,.035,-.012,.106,.13,.122);d=Math.max(d,-(y-.03+(z>.04?(z-.04)*-3:0)));d=Math.max(d,-(-(z-.07)));
  let h=Math.max(d,-ell(x,y,z,0,.02,-.005,.096,.12,.11));
  if(beard){let b=ell(x,y,z,0,-.085,.05,.09,.065,.082);b=Math.max(b,y+.035);b=Math.max(b,-ell(x,y,z,0,-.06,.03,.078,.058,.076));b=Math.min(b,cap(x,y,z,-.032,-.043,.118,.032,-.043,.118,.009,.009));b=Math.max(b,-(z-.0));h=Math.min(h,b);}
  return h;},[-.13,-.18,-.15],[.13,.18,.16],.0075);
 return {head:head,hair:hair(false),beard:hair(true)};})();
function humanize(g,o){o=o||{};const u=g.userData,skin=new T.MeshStandardMaterial({map:skinT,normalMap:TK.nor,color:o.skin||0xc9a28a,roughness:.62}),
  coat=new T.MeshStandardMaterial({map:clothT,color:o.coat||0x4a3a2c,roughness:.92,side:T.DoubleSide}),trou=new T.MeshStandardMaterial({map:clothT,color:o.trou||0x2a2a2c,roughness:.9}),
  boot=new T.MeshStandardMaterial({color:0x1a1410,roughness:.55}),hairM2=new T.MeshStandardMaterial({color:o.hair||0x5a5852,roughness:.95});
 g.traverse(m=>{if(!m.isMesh)return;if(m.geometry===ZG.torso)m.material=coat;else if(m.geometry===ZG.leg[0]||m.geometry===ZG.leg[1])m.material=trou;else if(m.geometry===ZG.arm[0]||m.geometry===ZG.arm[1])m.material=coat;});
 // head
 u.hd.children.forEach(c=>{c.visible=false;});u.hd.add(new T.Mesh(HG.head,skin));u.hd.add(new T.Mesh(o.beard?HG.beard:HG.hair,hairM2));
 const wm=new T.MeshStandardMaterial({color:0xe8e4dc,roughness:.3}),im=new T.MeshStandardMaterial({color:o.eye||0x4a5a6a,roughness:.3}),bk=new T.MeshBasicMaterial({color:0x050505});
 [-1,1].forEach(sd=>{const e=new T.Mesh(new T.SphereGeometry(.0125,10,8),wm);e.position.set(sd*.038,.022,.096);u.hd.add(e);const ir=new T.Mesh(new T.SphereGeometry(.0068,8,6),im);ir.position.set(sd*.038,.022,.107);u.hd.add(ir);const pp=new T.Mesh(new T.SphereGeometry(.0034,6,5),bk);pp.position.set(sd*.038,.022,.112);u.hd.add(pp);
  const br=bx(.034,.0075,.012,sd*.039,.047,.11,hairM2);br.rotation.z=sd*(o.angry?-.25:-.08);u.hd.add(br);});
 if(o.cap){const cm=new T.MeshStandardMaterial({map:clothT,color:0x2e2820,roughness:.95});const c=new T.Mesh(new T.SphereGeometry(.124,18,10,0,Math.PI*2,0,Math.PI/2),cm);c.scale.set(1,.9,1.06);c.position.set(0,.06,-.006);c.rotation.x=-.1;u.hd.add(c);const b=bx(.2,.014,.085,0,.07,.115,cm);b.rotation.x=.18;u.hd.add(b);}
 u.hd.rotation.set(o.stoop?.12:.04,0,0);
 // coat body, collar, boots, gloves
 const sk=new T.Mesh(new T.CylinderGeometry(.25,o.long?.32:.27,o.long?.85:.5,18,1,true),coat);sk.position.y=o.long?.95:1.12;sk.scale.z=.72;g.add(sk);
 const ch=new T.Mesh(new T.SphereGeometry(1,16,12),coat);ch.scale.set(.25,.3,.17);ch.position.set(0,1.28,.0);g.add(ch);
 const sh=new T.Mesh(new T.SphereGeometry(1,14,8),coat);sh.scale.set(.3,.09,.15);sh.position.set(0,1.46,0);g.add(sh);
 const co=new T.Mesh(new T.TorusGeometry(.075,.026,6,14),coat);co.rotation.x=Math.PI/2;co.position.set(0,1.58,.0);g.add(co);
 [u.ll,u.rl].forEach(L=>{L.add(bx(.12,.12,.26,0,-.9,.06,boot));});
 [u.la,u.ra].forEach(A=>{const gl=new T.Mesh(new T.SphereGeometry(.046,10,8),o.gloves?boot:skin);gl.scale.set(1,.75,1.5);gl.position.set(0,-.045,.7);A.add(gl);});
 if(o.shovel){const sv=new T.Group();sv.position.set(0,-.04,.7);const dir=new T.Vector3(0,-.41,.91).normalize();sv.quaternion.setFromUnitVectors(new T.Vector3(0,-1,0),dir);
  const wd=new T.MeshStandardMaterial({color:0x6a4a2a,roughness:.8}),mt=new T.MeshStandardMaterial({map:TR.map,color:0x7a6a5a,metalness:.6,roughness:.55});
  sv.add(cyl(.016,.018,1.3,0,-.4,0,wd,8));sv.add(bx(.22,.27,.018,0,-1.15,.02,mt));const tg=new T.Mesh(new T.TorusGeometry(.045,.01,6,12,Math.PI),wd);tg.position.y=.27;sv.add(tg);u.ra.add(sv);u.shovel=sv;}
 g.traverse(m=>{if(m.isMesh)m.castShadow=true;});return g;}
let CUT=null;const cv1=new T.Vector3(),cv2=new T.Vector3();
const ss=k=>k*k*(3-2*k),lerpV=(a,b,k)=>[a[0]+(b[0]-a[0])*k,a[1]+(b[1]-a[1])*k,a[2]+(b[2]-a[2])*k];
function camAt(p,l){camera.position.set(p[0],p[1],p[2]);camera.lookAt(l[0],l[1],l[2]);}
function camMove(a,b,la,lb,k){const q=ss(k);camAt(lerpV(a,b,q),lerpV(la,lb||la,q));}
function playCut(shots,done){CUT={shots:shots,i:0,t:0,done:done,prev:mode};mode='cut';document.body.classList.add('cine');lantern.visible=false;gunFP.visible=false;cab.visible=false;bfog.visible=false;
 $('prompt').style.display='none';$('down').style.display='none';$('danger').style.opacity=0;$('face').style.display='none';camera.fov=60;camera.updateProjectionMatrix();startShot();}
function startShot(){const s=CUT.shots[CUT.i];CUT.t=0;const e=$('sub');e.textContent=s.sub||'';e.style.opacity=s.sub?1:0;if(s.start)s.start();}
function updCut(dt){if(!CUT){mode='play';return;}const s=CUT.shots[CUT.i];CUT.t+=dt;s.cam(Math.min(1,CUT.t/s.dur),CUT.t,dt);if(s.sub2&&CUT.t>s.dur*.5&&$('sub').textContent!==s.sub2){$('sub').textContent=s.sub2;$('sub').style.opacity=1;}
 if(CUT.t>=s.dur){if(s.end)s.end();CUT.i++;if(CUT.i>=CUT.shots.length)endCut();else startShot();}}
function endCut(){const c=CUT;if(!c)return;CUT=null;document.body.classList.remove('cine');$('sub').style.opacity=0;$('fade').style.opacity=0;camera.fov=OPT.fov;camera.updateProjectionMatrix();lantern.visible=true;if(c.done)c.done(c.prev);}
function skipCut(){if(!CUT)return;const s=CUT.shots[CUT.i];if(s&&s.end)s.end();for(let i=CUT.i+1;i<CUT.shots.length;i++){if(CUT.shots[i].start)CUT.shots[i].start();if(CUT.shots[i].end)CUT.shots[i].end();}endCut();}
function poseRear(k,t){rig.rotation.set(-k,0,0);rig.position.set(0,.64*k,0);arms.forEach((a,i)=>{a.rotation.set(.95*k+Math.sin(t*8+i)*.25*k,0,0);a.userData.e.rotation.x=-.5*k;});legs.forEach(l=>{l.rotation.set(0,0,0);l.userData.e.rotation.x=0;if(l.userData.f)l.userData.f.rotation.x=0;});head.rotation.set(.15,Math.sin(t*1.3)*.5,Math.sin(t*.7)*.5);jaw.rotation.x=.9;}
const zombies=[];for(let i=0;i<3;i++){const g=mkZombie();g.visible=false;scene.add(g);zombies.push({g:g,state:'off',t:0,ph:R()*6,cd:0,x:0,z:0});}
// grabbing arms in the ground
const pl=mkZombie();{const coatM=new T.MeshStandardMaterial({map:clothT,color:0x3a3530,roughness:.9}),plSkin=new T.MeshStandardMaterial({map:skinT,normalMap:TK.nor,color:0xc8a890,roughness:.7});
 pl.traverse(o=>{if(!o.isMesh)return;if(o.material===clothM)o.material=coatM;else if(o.material===zskinM)o.material=plSkin;else o.visible=false;});
 const u=pl.userData;[u.la,u.ra].forEach(a=>a.traverse(o=>{if(o.isMesh)o.material=coatM;}));u.la.rotation.x=1.45;u.ra.rotation.x=1.2;const ln=new T.PointLight(0xffa860,1.6,12,1.4);ln.position.set(0,-.04,.66);u.ra.add(ln);const lg=new T.Sprite(new T.SpriteMaterial({map:mistT,color:0xffb060,transparent:true,depthWrite:false}));lg.scale.set(.5,.5,1);lg.position.copy(ln.position);u.ra.add(lg);pl.visible=false;scene.add(pl);}
humanize(pl,{coat:0x3a3530,hair:0x2a2018,skin:0xc8a890,long:1});
function plWalk(ph){const u=pl.userData,s=Math.sin(ph);u.ll.rotation.x=s*.5;u.rl.rotation.x=-s*.5;u.la.rotation.x=1.45+s*.12;u.ra.rotation.x=1.2-s*.08;pl.position.y=Math.abs(Math.cos(ph))*.03;}
const voss=mkZombie();{const vm=new T.MeshStandardMaterial({map:clothT,color:0x55504a,roughness:.9}),vs=new T.MeshStandardMaterial({map:skinT,color:0xb09888,roughness:.7});voss.traverse(o=>{if(!o.isMesh)return;if(o.material===clothM)o.material=vm;else if(o.material===zskinM)o.material=vs;else o.visible=false;});humanize(voss,{beard:1,cap:1,long:1,gloves:1,shovel:1,stoop:1,angry:1,coat:0x3e3226,hair:0x5e5c58,skin:0xc09684,eye:0x5a6a5a});voss.userData.la.rotation.x=1.45;voss.userData.ra.rotation.x=1.15;voss.visible=false;scene.add(voss);}
const gArm=new T.Group();gArm.userData.t=0;gArm.visible=false;scene.add(gArm);
const hands=[];
for(let i=0;i<9;i++){const g=new T.Group();g.scale.setScalar(1.5);g.add(new T.Mesh(ZG.hand,zskinM));g.visible=false;scene.add(g);hands.push({g:g,x:0,z:0,on:false,cd:0,up:0});}
gArm.scale.setScalar(2.2);gArm.add(new T.Mesh(ZG.hand,zskinM));
// blood
const BN=80,bpos=new Float32Array(BN*3),bvel=[];for(let i=0;i<BN;i++){bpos[i*3+1]=-10;bvel.push(V(0,0,0));}
const bgeo=new T.BufferGeometry();bgeo.setAttribute('position',new T.BufferAttribute(bpos,3));
const bpts=new T.Points(bgeo,new T.PointsMaterial({color:0x5c0606,size:.075,map:tex(32,(x,s2)=>{x.clearRect(0,0,s2,s2);x.fillStyle='#fff';x.beginPath();x.arc(s2/2,s2/2,s2/2-1,0,7);x.fill();},0),alphaTest:.5,transparent:true}));bpts.frustumCulled=false;scene.add(bpts);let bi=0;
function bleed(x,y,z,n,pw){for(let k=0;k<n;k++){bi=(bi+1)%BN;bpos[bi*3]=x;bpos[bi*3+1]=y;bpos[bi*3+2]=z;bvel[bi].set(rr(-1,1)*pw,rr(.3,1.4)*pw,rr(-1,1)*pw);}}
const pool=new T.Mesh(org(new T.CircleGeometry(1,22),.2,3,1.5),new T.MeshStandardMaterial({color:0x2c0404,roughness:.15}));pool.rotation.x=-Math.PI/2;pool.visible=false;scene.add(pool);
function splat(n){const b=$('blood');for(let i=0;i<n;i++){const d=document.createElement('div');d.className='bl';const s=rr(60,260);d.style.width=d.style.height=s+'px';d.style.left=rr(-5,95)+'%';d.style.top=rr(-5,90)+'%';d.style.opacity=rr(.6,.95);b.appendChild(d);
  if(R()<.6){const r=document.createElement('div');r.className='dr';r.style.left='calc('+d.style.left+' + '+(s/2)+'px)';r.style.top='calc('+d.style.top+' + '+(s*.6)+'px)';b.appendChild(r);const h=rr(80,340);setTimeout(()=>{r.style.height=h+'px';},30);}}}

/* ---------- audio ---------- */
let actx=null,master,nbuf,panner,wet,dist;
function silentWav(){const n=800,b=new ArrayBuffer(44+n*2),v=new DataView(b),w=(o,t)=>{for(let i=0;i<t.length;i++)v.setUint8(o+i,t.charCodeAt(i));};w(0,'RIFF');v.setUint32(4,36+n*2,true);w(8,'WAVE');w(12,'fmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,1,true);v.setUint32(24,8000,true);v.setUint32(28,16000,true);v.setUint16(32,2,true);v.setUint16(34,16,true);w(36,'data');v.setUint32(40,n*2,true);return URL.createObjectURL(new Blob([b],{type:'audio/wav'}));}
// phones/tablets (and some Chromebooks) keep web audio silent until it is woken by a real tap/key; wake it on every input until it is running
function audioUnlock(){try{if(navigator.audioSession)navigator.audioSession.type='playback';}catch(e){}try{if(!window.__SIL){const el=new Audio(silentWav());el.loop=true;el.setAttribute('playsinline','');window.__SIL=el;}const pr=window.__SIL.play();if(pr&&pr.catch)pr.catch(()=>{});}catch(e){}if(actx&&actx.state!=='running'&&actx.state!=='closed'){try{const r=actx.resume();if(r&&r.catch)r.catch(()=>{});}catch(e){}}}
['pointerdown','touchend','keydown','click'].forEach(ev=>addEventListener(ev,()=>{if(!actx||actx.state!=='running'||!window.__SIL)audioUnlock();},true));
let SHN=0;function sndHint(){if((SHN=(SHN+1)%40))return;try{let el=document.getElementById('sndhint');const bad=mode==='play'&&actx&&actx.state!=='running';const zero=mode==='play'&&VOL<.03;if(!el){el=document.createElement('div');el.id='sndhint';el.style.cssText='position:fixed;right:14px;bottom:14px;z-index:30;color:#e8dcc0;font:14px Georgia;background:rgba(0,0,0,.6);padding:6px 12px;border:1px solid #6a5a40;border-radius:4px;pointer-events:none;display:none';document.body.appendChild(el);}el.textContent=zero?'Sound is off — turn Volume up in the TAB menu':'No sound? Click or press any key';el.style.display=(bad||zero)?'block':'none';}catch(e){}}
function initAudio(){if(actx){if(actx.state!=='running'&&actx.state!=='closed'){try{actx.resume();}catch(e){}}return;}audioUnlock();
 try{const AC=window.AudioContext||window.webkitAudioContext;actx=new AC();setTimeout(()=>{try{mvPreload();}catch(e){}},300);}catch(e){actx=null;return;}
 master=actx.createGain();master.gain.value=VOL;try{const cp=actx.createDynamicsCompressor();cp.threshold.value=-16;cp.knee.value=14;cp.ratio.value=3.5;cp.attack.value=.004;cp.release.value=.18;const lim=actx.createDynamicsCompressor();lim.threshold.value=-2;lim.knee.value=0;lim.ratio.value=20;lim.attack.value=.001;lim.release.value=.06;master.connect(cp);cp.connect(lim);try{mkVerb(cp);}catch(e){}lim.connect(actx.destination);}catch(e){master.connect(actx.destination);}
 const sr=actx.sampleRate;nbuf=actx.createBuffer(1,sr*2,sr);const d=nbuf.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=R()*2-1;
 // cavernous reverb + a cold slap-back: everything unnatural goes through "wet"
 wet=actx.createGain();wet.connect(master);
 try{const ir=actx.createBuffer(2,sr*3.2,sr);for(let c=0;c<2;c++){const a=ir.getChannelData(c);for(let i=0;i<a.length;i++){const t=i/a.length;a[i]=(R()*2-1)*Math.pow(1-t,2.6)*(1+.5*Math.sin(i*.0007*(c+1)));}}
  const cv=actx.createConvolver();cv.buffer=ir;const cg=actx.createGain();cg.gain.value=.75;wet.connect(cv);cv.connect(cg);cg.connect(master);}catch(e){}
 const dl=actx.createDelay(1);dl.delayTime.value=.37;const fb=actx.createGain();fb.gain.value=.38;const lp=actx.createBiquadFilter();lp.type='lowpass';lp.frequency.value=1300;const eo=actx.createGain();eo.gain.value=.4;
 wet.connect(dl);dl.connect(lp);lp.connect(fb);fb.connect(dl);lp.connect(eo);eo.connect(master);
 dist=actx.createWaveShaper();const cu=new Float32Array(512);for(let i=0;i<512;i++){const x=i/256-1;cu[i]=Math.tanh(x*5);}dist.curve=cu;dist.connect(wet);
 panner=actx.createPanner();try{panner.panningModel='HRTF';}catch(e){}panner.distanceModel='inverse';panner.refDistance=3;panner.rolloffFactor=1.1;panner.connect(wet);
 const s=actx.createBufferSource();s.buffer=nbuf;s.loop=true;const f=actx.createBiquadFilter();f.type='bandpass';f.frequency.value=280;f.Q.value=.7;const g=actx.createGain();g.gain.value=.2;
 const lfo=actx.createOscillator(),lg=actx.createGain();lfo.frequency.value=.09;lg.gain.value=.13;lfo.connect(lg);lg.connect(g.gain);lfo.start();
 const lfo2=actx.createOscillator(),lg2=actx.createGain();lfo2.frequency.value=.05;lg2.gain.value=200;lfo2.connect(lg2);lg2.connect(f.frequency);lfo2.start();
 s.connect(f);f.connect(g);g.connect(master);s.start();
 {const rs=actx.createBufferSource();rs.buffer=nbuf;rs.loop=true;const rf=actx.createBiquadFilter();rf.type='highpass';rf.frequency.value=3800;const rg=actx.createGain();rg.gain.value=.03;rs.connect(rf);rf.connect(rg);rg.connect(master);rs.start(0,.7);}
 // sour, slowly beating drone
 [[41,.06],[43.6,.05],[61.5,.02],[277,.004],[293.3,.004],[554,.0018],[1109,.0009]].forEach((a,i)=>{const o=actx.createOscillator(),og=actx.createGain();o.frequency.value=a[0];og.gain.value=a[1];const l=actx.createOscillator(),ll=actx.createGain();l.frequency.value=.03+i*.017;ll.gain.value=a[1]*.8;l.connect(ll);ll.connect(og.gain);l.start();o.connect(og);og.connect(i>2?wet:master);o.start();});
}
function env(g,t,a,peak,d){if(!isFinite(peak))peak=.1;if(!(d>0))d=.1;if(!(a>0))a=.005;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(Math.max(peak,.0002),t+a);g.gain.exponentialRampToValueAtTime(.0001,t+a+d);}
let VOICES=0;function vOK(o,cost){if(!actx||actx.state!=='running')return false;if(!isFinite(o.f)||!(o.dur>0)||!isFinite(o.g===undefined?1:o.g))return false;if(VOICES>(mobile?48:90)&&(o.g||1)<.5)return false;VOICES+=cost;setTimeout(()=>{VOICES=Math.max(0,VOICES-cost);},((o.at||0)+o.dur+.5)*1000);return true;}
function nz(o){if(!vOK(o,1))return;const t=actx.currentTime+(o.at||0),s=actx.createBufferSource();s.buffer=nbuf;s.loop=true;const f=actx.createBiquadFilter();f.type=o.type||'bandpass';f.frequency.setValueAtTime(o.f,t);f.Q.value=o.q||1;
 if(o.f2)f.frequency.exponentialRampToValueAtTime(o.f2,t+o.dur);const g=actx.createGain();env(g,t,o.a||.005,o.g,o.dur);s.connect(f);f.connect(g);g.connect(o.dest||master);s.start(t,R()*1.5);s.stop(t+o.dur+(o.a||0)+.1);}
function tone(o){if(!vOK(o,1))return;const t=actx.currentTime+(o.at||0),s=actx.createOscillator();s.type=o.type||'sine';s.frequency.setValueAtTime(o.f,t);if(o.f2)s.frequency.exponentialRampToValueAtTime(o.f2,t+o.dur);
 if(o.vib){const v=actx.createOscillator(),vg=actx.createGain();v.frequency.value=o.vib;vg.gain.value=o.vd||40;v.connect(vg);vg.connect(s.frequency);v.start(t);v.stop(t+o.dur+.3);}
 const g=actx.createGain();env(g,t,o.a||.005,o.g,o.dur);s.connect(g);g.connect(o.dest||master);s.start(t);s.stop(t+o.dur+(o.a||0)+.1);}
// a throat: buzzing cords pushed through two or three formants, with breath
function vox(o){if(!vOK(o,2))return;const t=actx.currentTime+(o.at||0),s=actx.createOscillator();s.type='sawtooth';s.frequency.setValueAtTime(o.f,t);s.frequency.exponentialRampToValueAtTime(o.f2||o.f,t+o.dur);
 const v=actx.createOscillator(),vg=actx.createGain();v.frequency.value=o.vib||6;vg.gain.value=o.vd||o.f*.06;v.connect(vg);vg.connect(s.frequency);v.start(t);v.stop(t+o.dur+.4);
 const n=actx.createBufferSource();n.buffer=nbuf;n.loop=true;const ng=actx.createGain();ng.gain.value=o.br||.25;n.connect(ng);const g=actx.createGain();env(g,t,o.a||.08,o.g,o.dur);
 (o.fm||[600,1100]).forEach((fq,i)=>{const b=actx.createBiquadFilter();b.type='bandpass';b.frequency.setValueAtTime(fq,t);if(o.fm2)b.frequency.linearRampToValueAtTime(o.fm2[i],t+o.dur);b.Q.value=o.q||6;s.connect(b);ng.connect(b);b.connect(g);});
 g.connect(o.dest||wet);s.start(t);n.start(t,R());s.stop(t+o.dur+.3);n.stop(t+o.dur+.3);}
function pan(){if(!actx||!actx.createStereoPanner)return wet;const p=actx.createStereoPanner();p.pan.value=rr(-1,1);p.connect(wet);return p;}
const sfx={
 step(v,leaf,wetS){if(!wetS&&P.wade)wetS=true;if(!leaf&&!wetS&&SURF!=='grass'){const k=SURF;
  if(k==='gravel'){nz({f:1900,q:.6,g:v*1.5,dur:.13});nz({f:4300,q:1.2,g:v*.7,dur:.07,at:.02});for(let i=0;i<3;i++)nz({f:rr(3000,6000),q:4,g:v*.4,dur:.02,at:.01+i*.025});}
  else if(k==='wood'){tone({f:120,f2:70,g:v*1.3,dur:.1});nz({type:'lowpass',f:700,g:v*1.1,dur:.11});if(R()<.18)vox({f:rr(260,420),f2:rr(180,260),dur:.35,g:.05,fm:[700,1300],q:6,br:.4,at:.05});}
  else if(k==='stone'){nz({f:2600,q:3,g:v*1.1,dur:.045});tone({f:190,f2:150,g:v*.6,dur:.05});nz({f:5200,q:2,g:v*.35,dur:.03,at:.01});}
  else if(k==='corn'){nz({f:3600,q:.8,g:v*1.7,dur:.26});nz({f:1800,q:1,g:v*.6,dur:.2,at:.05});}
  else if(k==='snow'){nz({type:'lowpass',f:900,g:v*1.3,dur:.2});nz({f:2600,q:2,g:v*.25,dur:.14,at:.03});}
  return;}
  if(wetS){nz({f:900,f2:300,q:.7,g:.5,dur:.28});nz({f:3000,q:1,g:.2,dur:.12,at:.04});return;}nz({f:leaf?2600:rr(300,520),q:.8,g:leaf?.5:v,dur:leaf?.22:.11});if(leaf)nz({f:5200,q:2,g:.3,dur:.09,at:.05});},
 rattle(g,dest){const n=16+(R()*16|0);let t=0,gap=.026;for(let i=0;i<n;i++){nz({f:rr(500,950),q:6,g:(g||.6)*(1-i/n*.5),dur:.03,at:t,dest:dest||panner});tone({type:'square',f:rr(55,90),g:(g||.6)*.5,dur:.025,at:t,dest:dest||panner});t+=gap;gap*=1.085;}
  vox({f:70,f2:48,dur:1.2,g:(g||.6)*.5,fm:[420,900],br:.6,at:t*.5,dest:dest||panner});},
 breath(){vox({f:60,f2:52,dur:1.3,g:.3,a:.5,fm:[700,1500],br:1.2,q:2,dest:panner});vox({f:55,f2:45,dur:1.6,g:.3,a:.4,fm:[500,1100],br:1.2,q:2,at:1.6,dest:panner});},
 screech(){vox({f:rr(520,640),f2:rr(900,1300),dur:1,g:.9,a:.03,vib:rr(30,48),vd:140,fm:[1100,2500,3400],fm2:[1500,3000,3800],br:.5,q:4,dest:panner});vox({f:rr(770,930),f2:420,dur:1,g:.5,a:.03,vib:41,vd:200,fm:[900,2100],q:3,dest:panner});nz({f:2800,q:1.5,g:.4,dur:.9,dest:panner});if(distN){vox({f:rr(300,380),f2:rr(700,900),dur:.9,g:.35,a:.02,vib:37,vd:120,fm:[900,2200],q:3,dest:distN});nz({f:1500,q:.7,g:.45,dur:.7,dest:distN});}},
 scrabble(){nz({f:rr(900,1700),q:2,g:.6,dur:.05,dest:panner});tone({type:'square',f:rr(50,70),g:.3,dur:.04,dest:panner});},
 heart(v){tone({f:62,f2:40,g:v,dur:.13});tone({f:55,f2:38,g:v*.7,dur:.13,at:.19});},
 chime(){[880,1245,1661].forEach((f,i)=>tone({f:f,g:.16,dur:1.3,at:i*.1,dest:wet}));},
 paper(){nz({f:4000,q:.8,g:.2,dur:.18});nz({f:3000,q:.8,g:.15,dur:.15,at:.12});},
 clack(){tone({type:'triangle',f:1400,f2:500,g:.5,dur:.07,dest:wet});nz({f:2200,q:2,g:.4,dur:.06});},
 whoosh(){nz({f:500,f2:1500,q:1.2,g:.15,dur:.25,a:.08});},
 creak(){for(let i=0;i<7;i++)vox({f:rr(160,240),f2:rr(300,620),dur:.5,g:.3,a:.1,at:i*.55,fm:[900,2300],q:9,vib:9,vd:25});nz({f:900,q:8,g:.2,dur:4,a:.3,dest:wet});},
 thunder(){const n=R();nz({f:5000,q:.4,g:.32,dur:.22,at:.02});nz({f:1400,f2:400,q:.6,g:.34,dur:.9,a:.02,at:.06});nz({f:6000,f2:9000,q:.5,g:.04,dur:.5,a:.45,dest:wet});
  for(let i=0;i<5;i++)nz({type:'lowpass',f:rr(110,240),f2:rr(50,90),g:rr(.18,.32),dur:rr(1.6,3.4),a:rr(.1,.5),at:.35+i*rr(.35,.7)});tone({f:44,f2:26,g:.45,dur:2.6,a:.08,at:.3});nz({type:'lowpass',f:900,f2:150,g:.28,dur:.6,at:.45});},
 wail(){const d=pan(),f=rr(380,470);vox({f:f,f2:f*.62,dur:3.6,g:.16,a:1.3,vib:5,vd:16,fm:[700,1200,2600],fm2:[450,900,2400],q:7,br:.15,dest:d});},
 sob(){const d=pan();for(let i=0;i<5;i++){const f=rr(380,450);vox({f:f,f2:f*.8,dur:rr(.14,.3),g:.1,a:.03,at:i*rr(.3,.42),fm:[800,1400],q:6,br:.4,dest:d});}},
 whisper(){const d=pan();let t=0;const n=6+(R()*7|0);for(let i=0;i<n;i++){const du=rr(.07,.24);nz({f:rr(1800,3800),q:rr(3,7),g:rr(.06,.13),dur:du,a:.03,at:t,dest:d});t+=du+rr(.02,.1);}},
 musicbox(){const d=pan(),notes=[659,622,523,494,440,415,392];let t=0;for(let i=0;i<7;i++){const f=notes[(R()*notes.length)|0]*rr(.97,1.02);tone({f:f,f2:f*rr(.96,1),g:.05,dur:1.8,a:.004,at:t,dest:d});tone({type:'triangle',f:f*2.01,g:.014,dur:.7,at:t,dest:d});t+=rr(.3,.6)*(1+i*.16);}},
 laugh(){const d=pan();for(let i=0;i<7;i++)vox({f:rr(480,560)*(1-i*.05),f2:330,dur:.13,g:.09,a:.02,at:i*.2,fm:[850,1300],q:5,dest:d});},
 scrape(){const d=pan();nz({f:rr(1700,2300),f2:rr(2400,3100),q:14,g:.12,dur:2.2,a:.4,dest:d});nz({f:340,q:9,g:.1,dur:2.2,a:.4,dest:d});},
 knock(){const d=pan();[0,.42,.84].forEach(t=>{tone({f:95,f2:55,g:.3,dur:.14,at:t,dest:d});nz({f:300,q:2,g:.12,dur:.06,at:t,dest:d});});},
 behind(){nz({f:900,f2:1500,q:1.5,g:.16,dur:.9,a:.5});nz({f:1300,f2:600,q:1.5,g:.14,dur:1.2,a:.3,at:1.2});},
 groan(g,dest){const f=rr(72,104);vox({f:f,f2:f*rr(.6,.8),dur:rr(1.2,1.9),g:g||.5,a:.25,vib:rr(4,9),vd:7,fm:[rr(300,420),rr(850,1050),2300],fm2:[rr(500,650),rr(700,900),2100],q:5,br:.5,dest:dest||wet});},
 caw(){for(let i=0;i<3;i++)vox({f:rr(620,740),f2:470,dur:.2,g:.5,a:.01,at:i*.27,vib:60,vd:130,fm:[1400,2600],q:3,br:.8});nz({f:400,q:1,g:.2,dur:.5,at:.2});},
 cans(){for(let i=0;i<9;i++)tone({type:'square',f:rr(1800,3400),g:.12,dur:.05,at:i*rr(.04,.09),dest:wet});},
 bell(){[196,392.5,587,781,1010,1307].forEach((f,i)=>tone({f:f,f2:f*.995,g:.4/(i+1),dur:5,a:.004,vib:.7,vd:2,dest:wet}));nz({f:2500,q:3,g:.2,dur:.05});},
 crank(){nz({f:240,q:3,g:.5,dur:.12});tone({type:'sawtooth',f:55,f2:80,g:.3,dur:.3});},
 genStart(){tone({type:'sawtooth',f:30,f2:72,g:.5,dur:1.6,a:.3});nz({type:'lowpass',f:300,g:.4,dur:1.6,a:.2});},
 hum(v){tone({type:'sawtooth',f:58,g:v,dur:.5,a:.2});tone({type:'square',f:29,g:v*.6,dur:.5,a:.2});},
 dig(){nz({f:500,f2:160,q:1,g:.7,dur:.2});tone({f:80,f2:45,g:.5,dur:.15});nz({f:2400,q:1,g:.15,dur:.3,at:.25});},
 clunk(){tone({type:'square',f:120,f2:60,g:.3,dur:.08});nz({f:1800,q:3,g:.2,dur:.04});},
 engine(){for(let i=0;i<5;i++)tone({type:'sawtooth',f:rr(40,55),f2:30,g:.5,dur:.12,at:i*.12});nz({type:'lowpass',f:400,g:.4,dur:.6});},
 shot(){nz({type:'lowpass',f:5000,f2:200,g:1.6,dur:.45,a:.001});tone({f:110,f2:28,g:1.2,dur:.4});nz({f:700,q:.5,g:.5,dur:2,a:.01,dest:wet});tone({type:'square',f:900,f2:300,g:.2,dur:.08,at:.5});nz({f:2000,q:3,g:.25,dur:.06,at:.62});},
 zap(){for(let i=0;i<14;i++)nz({type:'highpass',f:rr(2000,5000),g:.5,dur:.05,at:i*.09+rr(0,.03)});tone({type:'sawtooth',f:100,g:.5,dur:1.4,vib:100,vd:60});tone({type:'square',f:50,g:.4,dur:1.4});},
 fall(){tone({f:90,f2:35,g:.9,dur:.25});nz({type:'lowpass',f:500,g:.6,dur:.3});},
 die(){vox({f:560,f2:95,dur:2.8,g:1,a:.03,vib:33,vd:150,fm:[1200,2600,3300],fm2:[450,900,2000],q:4,br:.6,dest:panner});vox({f:840,f2:120,dur:2.6,g:.5,a:.03,vib:27,vd:200,fm:[900,2000],fm2:[350,800],q:3,dest:panner});setTimeout(()=>sfx.rattle(.7),2400);},
 scare(){[311,415,466,622,740,932,1245,1480].forEach(f=>tone({type:'sawtooth',f:f,f2:f*rr(1.3,1.9),g:.4,dur:1.7,a:.008,vib:rr(20,45),vd:f*.12}));nz({type:'highpass',f:900,g:1,dur:1.7,a:.004});nz({type:'lowpass',f:320,g:1.4,dur:.5,a:.002});tone({f:64,f2:26,g:1.5,dur:1.5,a:.002});
  [410,620,890].forEach(f=>vox({f:f,f2:f*1.7,dur:1.5,g:.8,a:.02,vib:rr(25,50),vd:f*.15,fm:[1000,2400,3500],fm2:[1700,3100,4000],q:3,br:.6,dest:dist}));sfx.rattle(.9,master);},
 sting(g){g=g||1;[233,247,466,494,932,988].forEach(f=>tone({type:'sawtooth',f:f,f2:f*1.04,g:.3*g,dur:.9,a:.004,vib:9,vd:f*.03}));nz({type:'highpass',f:2500,g:.5*g,dur:.25,a:.002});tone({f:70,f2:30,g:1.1*g,dur:.6,a:.002});vox({f:900,f2:1500,dur:.7,g:.6*g,a:.01,vib:40,vd:150,fm:[1500,3000],q:3,dest:dist});},
 crash(){nz({type:'lowpass',f:2500,f2:200,g:1.4,dur:.5,a:.002});tone({f:90,f2:30,g:1.3,dur:.4,a:.002});for(let i=0;i<6;i++)tone({type:'square',f:rr(700,2600),g:.2,dur:.07,at:.05+i*.05});},
 bang(){nz({type:'highpass',f:900,g:.9,dur:.12,a:.001,dest:wet});tone({f:180,f2:60,g:.6,dur:.1});},
 siren(){tone({type:'sawtooth',f:420,f2:880,g:.18,dur:1.2,a:.1,dest:wet});tone({type:'sawtooth',f:880,f2:420,g:.18,dur:1.2,a:.05,at:1.3,dest:wet});},
 stat(){nz({f:2400,q:.6,g:.35,dur:1.4,a:.02});for(let i=0;i<5;i++)tone({type:'square',f:rr(700,1300),g:.05,dur:.08,at:i*.25});},
 scratch(){for(let i=0;i<6;i++)nz({f:rr(2600,4200),q:8,g:.25,dur:.06,at:i*rr(.05,.11),dest:panner});},
 sniff(){for(let i=0;i<3;i++)nz({f:1400,q:2,g:.3,dur:.12,a:.03,at:i*.18,dest:panner});},
 nuke(){nz({type:'lowpass',f:120,f2:30,g:1.8,dur:7,a:.05,at:.6});tone({f:40,f2:18,g:1.4,dur:6,a:.1,at:.6});nz({type:'lowpass',f:2000,f2:200,g:1,dur:2.5,a:.01,at:.6,dest:wet});},
 door(){vox({f:rr(170,230),f2:rr(330,520),dur:.75,g:.4,a:.1,fm:[900,2300],q:9,vib:9,vd:25});nz({f:900,q:8,g:.12,dur:.7,a:.1,dest:wet});},
 slam(){tone({f:80,f2:40,g:1.1,dur:.3,a:.002,dest:wet});nz({type:'lowpass',f:700,g:.9,dur:.2,a:.002,dest:wet});},
 tear(){nz({f:400,f2:3800,q:.7,g:1,dur:.7,a:.02});nz({type:'lowpass',f:200,g:.9,dur:.9,a:.01});tone({f:70,f2:25,g:1,dur:1});for(let i=0;i<5;i++)nz({f:rr(300,700),q:2,g:.6,dur:.09,at:.1+i*.1});nz({f:500,f2:200,q:.8,g:.5,dur:1.2,at:.6});}
};
Object.keys(sfx).forEach(k=>{const f=sfx[k];sfx[k]=function(){try{return f.apply(sfx,arguments);}catch(e){try{console.error('sfx '+k,e);}catch(_){}}};});
function updAudioPos(fx,fz){if(!actx)return;const L=actx.listener,p=camera.position;{const n=Math.hypot(fx,fz);if(!isFinite(n)||n<1e-4){fx=0;fz=-1;}else{fx/=n;fz/=n;}}if(!isFinite(p.x+p.y+p.z)||!isFinite(mon.position.x+mon.position.z))return;
 if(L.positionX){L.positionX.value=p.x;L.positionY.value=p.y;L.positionZ.value=p.z;L.forwardX.value=fx;L.forwardY.value=0;L.forwardZ.value=fz;L.upX.value=0;L.upY.value=1;L.upZ.value=0;}
 else{L.setPosition(p.x,p.y,p.z);L.setOrientation(fx,0,fz,0,1,0);}
 if(panner.positionX){panner.positionX.value=mon.position.x;panner.positionY.value=.5;panner.positionZ.value=mon.position.z;}else panner.setPosition(mon.position.x,.5,mon.position.z);}

const ghost=(function(){const t=tex(128,(x,s)=>{x.clearRect(0,0,s,s);x.fillStyle='#000';x.beginPath();x.ellipse(s/2,s*.16,s*.07,s*.09,0,0,7);x.fill();x.beginPath();x.moveTo(s*.4,s*.24);x.lineTo(s*.6,s*.24);x.lineTo(s*.64,s);x.lineTo(s*.36,s);x.fill();x.lineWidth=5;x.strokeStyle='#000';x.beginPath();x.moveTo(s*.41,s*.27);x.lineTo(s*.28,s*.74);x.moveTo(s*.59,s*.27);x.lineTo(s*.72,s*.74);x.stroke();x.fillStyle='#dfe6ff';x.beginPath();x.arc(s*.47,s*.15,2,0,7);x.arc(s*.53,s*.15,2,0,7);x.fill();},0);
 const sp=new T.Sprite(new T.SpriteMaterial({map:t,transparent:true,opacity:0,depthWrite:false}));sp.scale.set(2.3,2.3,1);sp.visible=false;scene.add(sp);return sp;})();let ghostT=0;

/* ---------- story ---------- */
const STORY=[
['JOB ADVERT — FOLDED IN YOUR POCKET','NIGHT WATCHMAN WANTED — Hollow Rest Cemetery. One night. $400 cash at dawn. No questions. Ask for Mr. Voss.\n\nYou asked no questions. Voss walked you to the middle of the yard, said "whatever you hear tonight, do not answer it," and chained the gate behind him.'],
['WATCHMAN\'S LOG — THE ONE BEFORE YOU','11pm. Something is clicking out past the statue. Voss said foxes.\n1am. It is not foxes. It stopped clicking the moment my boot hit the gravel. It is LISTENING to me.\n2am. The gate is chained from the outside. He knew. He KNEW.\nIf you are reading this I am in the ground now. I am sorry about your ankles.'],
['THE COUNTY HERALD, 1987','GRAVEDIGGER BURIED ALIVE. Elias Marrow, 41, was digging beneath the old chapel when the vault roof came down. Caretaker Henry Voss told police the supports "just went." For nine nights the town heard the cemetery bell ring with no one at the rope. Then it stopped.'],
['SCRATCHED INSIDE A COFFIN LID','voss cut the props. i saw his boots. i saw what he was hiding down here.\nno light. roof too low to stand. so i crawl.\ni hear the rats before i feel them. i ate what was down here with me. it does not fill me. NOTHING FILLS ME.\ni can hear his heart from here.'],
['VOSS\'S DIARY','Margaret never ran away. I told the town she did. She is under the chapel floor, where I put her, and Marrow found her ring while he was shoring up the vault. He looked at me like he knew. So I cut the props. God forgive me, I cut them.\nIt dug itself out on the fortieth night. Eyes like milk, its body gone black as root, all spine and rib. It never walked upright again — but sometimes, when it is listening, it stands. It went straight past me — it cannot see — and took the dog, because the dog barked.\nSo I made a bargain with the dark. One watchman a season, and it stays inside the fence. The ones it does not finish do not lie still. They wait under the soil for anything warm.'],
['VOSS\'S DIARY — LAST PAGE','I am too old to keep feeding it. What I know:\n• It hunts by SOUND alone. The bell will drag it anywhere.\n• Water and wire will stop its heart — the flooded hollow, the breaker, all three generators running.\n• Marrow\'s shotgun is in the safe inside my shed. I buried the key in his empty grave. Two shells, close. The dead guard it. One of them wears my coat.\n• The gate is electric. The chapel tunnel has three brass locks, inside, by the altar. The truck wants fuel and its key — and if it follows you down the road, DO NOT BRAKE.']
];

/* ---------- state ---------- */
const DIFF=[{s:.88,h:.9,n:'Easy',m:5},{s:1,h:1.1,n:'Normal',m:7},{s:1.12,h:1.35,n:'Nightmare',m:10},{s:1,h:1,n:'Practice',m:4,practice:true},{s:.5,h:.75,n:'Tutorial',m:3,tut:true}];let D=DIFF[1];
const P={x:0,z:C-7,yaw:0,pitch:0,roll:0,sneak:false,stam:1,stepAcc:0,bob:0,h:1.6,down:false,need:0,src:null,gt:0,rise:0};
const M={state:'wander',target:V(0,0,-20),timer:0,phase:0,voice:2,stuck:0,detour:0,detSide:1,last:V(0,0,0),center:V(0,0,0),hp:2,stun:0,deadT:0,tw:0,twT:0,tilt:0,tiltT:0,tiltG:0,pause:0};
const inv={fire:0,flare:0,salt:0,oil:1,battery:false,c1:false,c2:false,trap:0,plank:0,boots:false,secret:false,box:0,map:false,shovel:false,safeKey:false,gun:false,ammo:0,fuel:false,tkey:false,pages:0};
let mode='menu',keys=0,stones=2,gens=0,noiseLvl=0,gate=0,gateOpening=false,elapsed=0,scareT=0,capture=false,heartT=0,eventT=30,flashT=0,msgT=0,gateHint=0,everLocked=false;
let monDead=false,killWay='',sel='stone',dug=false,safeOpen=false,breakerCd=0,bellCd=0,shotCd=0,muzzleT=0,actCur=null,actProg=0,splatDone=false,mx=.5,my=.5,late=false,kick=0,raise=0;
const proj={mesh:new T.Mesh(org(new T.SphereGeometry(.09,7,6),.04,1,10),stoneM),v:V(0,0,0),on:false};proj.mesh.visible=false;scene.add(proj.mesh);
function msg(t,d){const e=$('msg');e.textContent=t;e.style.opacity=1;msgT=d||3;}
function objective(){if(TUT.on)return TUT.txt;if(CAT.on)return CAT.burned?'CATACOMBS — the ladder back up is at the west end':'CATACOMBS — find the coffin Elias was buried alive in (deepest chamber). It sleeps there. Burn it: the flare. Ladder out at the west end.';if(VB.on&&!VB.fall)return dug?'VOSS IS HUNTING YOU — lead him over Marrow’s open grave (or trap him)':'VOSS IS HUNTING YOU — dig Marrow’s grave open with the shovel, then lead him into it';if(mode==='drive')return 'DRIVE — W gas · A / D steer · do not slow down';if(nukeT>0)return '☢ IMPACT IN '+Math.ceil(nukeT)+'s — GET INSIDE A STONE CRYPT'+((inCrypt()||P.hidden)?'   ✔ you are under stone':'');if(P.down||P.hidden)return '';
 if(!inv.map)return 'Pick up the map lying on the path ahead (walk to it, press E)';
 if(dawnOn)return 'DAWN — the north gate is open. Walk out.';
 if(gens>=3)return gateOpening?'RUN through the gate!':'The gate has power — get to the north gate (top of the map)';
 if(keys>=3)return 'You have 3 brass keys — the tunnel hatch is inside the chapel (bottom-right of the Old Yard on your map)';
 if(inv.fuel&&inv.tkey)return 'You have fuel and the key — start the truck (east fence)';
 if(night===1&&elapsed<420&&gens===0&&keys===0&&!inv.fuel&&!inv.tkey)return 'GOAL: turn on the 3 generators ⚡ (marked on your map) to power the gate  ·  '+gens+'/3';
 if(night===1&&elapsed<420&&gens>0&&gens<3&&keys===0&&!inv.fuel&&!inv.tkey)return 'GOAL: turn on the other generators ⚡ '+gens+'/3 — they are loud, so make sure it is far away';
 const a=[];a.push('start generators ⚡'+gens+'/3');a.push('find brass keys 🗝'+keys+'/3');a.push(inv.fuel?'find the truck key':inv.tkey?'find the fuel can':'find fuel + truck key');
 return 'Escape: '+a.join('  ·  ')+'  ·  or survive until 6 AM   —   TAB = map · H = ask the dead';}
const TIPS=[[9,'It is blind. It only hears you. Watch the YOUR NOISE bar (top right).'],[30,'C = sneak (silent). Running (Shift) is very loud.'],[60,'T throws a stone. It goes to the sound instead of you.'],[100,'You can HIDE in stone coffins, the shed workbench and the chapel altar (press E).'],[150,'The red mark at the edge of the screen shows where its sounds come from.'],[210,'Hold F to raise the lantern and see farther. TAB opens your bag — every control is there.']];let tipI=0,objT=0,secT=70,behind=0,chapelSeen=false,graveSeen={};
const moths=[];for(let i=0;i<4;i++){const m=new T.Sprite(new T.SpriteMaterial({map:mistT,color:0x6a6050,transparent:true,depthWrite:false}));m.scale.set(.012,.012,1);scene.add(m);moths.push(m);}
const bfog=new T.Sprite(new T.SpriteMaterial({map:mistT,color:0xdde4ee,transparent:true,opacity:0,depthWrite:false}));bfog.scale.set(.5,.35,1);bfog.position.set(0,-.12,-.55);bfog.visible=false;camera.add(bfog);
const benchMan=new T.Sprite(new T.SpriteMaterial({map:ghost.material.map,transparent:true,opacity:.9,depthWrite:false}));benchMan.scale.set(1.9,1.9,1);benchMan.position.set(2.3,1.05,20);scene.add(benchMan);
const bedArm=new T.Group();{const hm=new T.Mesh(ZG.hand,zskinM);hm.rotation.z=-Math.PI/2;bedArm.add(hm);bedArm.scale.setScalar(1.5);bedArm.position.set(COT.x-2.4,.18,COT.z-1.6);bedArm.visible=false;scene.add(bedArm);}let bedT=0;
const watcher=new T.Sprite(new T.SpriteMaterial({map:ghost.material.map,transparent:true,opacity:.96,depthWrite:false}));watcher.scale.set(2.5,2.5,1);watcher.visible=false;scene.add(watcher);let watchT=0;
function startWatcher(){const a=P.yaw+rr(-.5,.5);watcher.position.set(P.x-Math.sin(a)*15,1.25,P.z-Math.cos(a)*15);watcher.visible=true;watchT=50;}
const winFace=new T.Sprite(new T.SpriteMaterial({map:tex(64,(x,s)=>{x.clearRect(0,0,s,s);const g=x.createRadialGradient(s/2,s/2,2,s/2,s/2,s/2);g.addColorStop(0,'#d8d0c0');g.addColorStop(.75,'#8a8276');g.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=g;x.beginPath();x.ellipse(s/2,s/2,s*.34,s*.46,0,0,7);x.fill();x.fillStyle='#000';x.beginPath();x.ellipse(s*.37,s*.4,s*.09,s*.11,0,0,7);x.ellipse(s*.63,s*.4,s*.09,s*.11,0,0,7);x.ellipse(s/2,s*.72,s*.14,s*.17,0,0,7);x.fill();},0),transparent:true,depthWrite:false}));winFace.scale.set(.75,.95,1);winFace.position.set(CH.x-4.15,3.2,CH.z+2.8);winFace.visible=false;scene.add(winFace);
function updProps(dt){if(benchMan.visible&&Math.hypot(P.x-2.3,P.z-20)<11){benchMan.visible=false;}
 if(!TH.bed&&elapsed>20&&Math.hypot(P.x-(COT.x-2.6),P.z-(COT.z-1.6))<2.4){TH.bed=1;bedT=1.6;bedArm.visible=true;sfx.sting(.6);}
 if(bedT>0){bedT-=dt;const k=bedT>1.3?(1.6-bedT)/.3:bedT<.4?bedT/.4:1;bedArm.position.x=COT.x-2.4+k*.8;if(bedT<=0)bedArm.visible=false;}
 if(MYGRAVE&&!TH.grave&&Math.hypot(P.x-MYGRAVE.x,P.z-MYGRAVE.z)<2.2){TH.grave=1;sfx.sting(.5);msg('The earth in front of this stone is freshly dug. The name on it is your job.',4.5);}
if(statueMesh){const gd=Math.hypot(P.x,P.z)||1,fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw);if((-P.x*fx-P.z*fz)/gd<.45&&gd<26){let df=Math.atan2(P.x,P.z)-statueMesh.rotation.y;df=Math.atan2(Math.sin(df),Math.cos(df));statueMesh.rotation.y+=df*Math.min(1,dt*.9);}}
 if(!TH.win&&P.x<CH.x-4.6&&Math.hypot(P.x-(CH.x-4.2),P.z-(CH.z+2.8))<8){TH.win=1;winT=1.7;winFace.visible=true;}
 if(winT>0){winT-=dt;winFace.material.opacity=Math.min(1,winT*2.5);if(winT<=0){winFace.visible=false;sfx.sting(.5);}}}
function updWatcher(dt){if(watchT<=0)return;watchT-=dt;const fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw),gx=watcher.position.x-P.x,gz=watcher.position.z-P.z,gd=Math.hypot(gx,gz)||1;
 if((gx*fx+gz*fz)/gd<.35&&!P.hidden){watcher.position.x-=gx/gd*3.4*dt;watcher.position.z-=gz/gd*3.4*dt;}
 if(gd<2.2){watchT=0;faceFlash();}if(watchT<=0)watcher.visible=false;}
let scareBag=[],lastScare='';function nextScare(){if(!scareBag.length){scareBag=['behind','face','lamp','door','watch','neck','crawl','name'].sort(()=>R()-.5);if(scareBag[0]===lastScare)scareBag.push(scareBag.shift());}lastScare=scareBag.shift();return lastScare;}
function faceFlash(){const f=$('face');f.className='fx';f.style.opacity=1;f.style.display='block';sfx.sting(1.2);setTimeout(()=>{f.style.display='none';},230);}
function behindYou(){const fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw);ghost.position.set(P.x-fx*1.9,1.2,P.z-fz*1.9);ghost.scale.set(2.3,2.3,1);ghost.material.opacity=.97;ghost.visible=true;ghostT=0;behind=25;sfx.behind();}
function secrets(dt){
 if(behind>0){behind-=dt;const fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw),gx=ghost.position.x-P.x,gz=ghost.position.z-P.z,gd=Math.hypot(gx,gz)||1;
  if(behind>24.4){}else if(behind>.5&&(gx*fx+gz*fz)/gd>.55){behind=.45;sfx.sting(1);}
  if(behind<=.45){const k=1-behind/.45;ghost.position.set(P.x+gx*(1-k*.25),1.2+k*.3,P.z+gz*(1-k*.25));ghost.scale.set(2.3+k*5,2.3+k*5,1);}
  if(behind<=0||gd>7){behind=0;ghost.visible=false;ghost.scale.set(2.3,2.3,1);}}
 secT-=dt;if(secT<=0&&!P.down&&!P.hidden){secT=rr(55,110)/SCARE;if(!FAKEU&&elapsed>400&&R()<.3&&(monDead||Math.hypot(mon.position.x-P.x,mon.position.z-P.z)>28)){fakeOver();return;}let r=nextScare();if(r==='door'){let bd2=13,dd=null;for(const d of DOORS)if(!d.open&&!d.barred){const q=Math.hypot(d.x-P.x,d.z-P.z);if(q<bd2){bd2=q;dd=d;}}if(dd){setDoor(dd,true);sfx.door();}else r='lamp';}if(r==='watch'&&watchT>0)r='neck';if(r==='behind')behindYou();else if(r==='face')faceFlash();else if(r==='lamp'){lampOut=3.5;sfx.whoosh();msg('The lantern gutters out.',2.5);}else if(r==='watch'){startWatcher();if(!TH.w){TH.w=1;msg('Something is standing out there. Do not take your eyes off it.',4);}}else if(r==='neck'){sfx.breath();setTimeout(()=>sfx.breath(),900);caption('breathing — right behind you');$('danger').style.opacity=.7;setTimeout(()=>{$('danger').style.opacity=0;},1400);msg('Cold breath on the back of your neck.',2.5);}else if(r==='crawl'){sfx.scrabble();setTimeout(()=>sfx.scrabble(),260);setTimeout(()=>sfx.scrabble(),520);caption('something crawling, behind you');shakeT=.3;}else if(r==='name'){sfx.whisper();caption('a voice whispers your name');msg('Something just said your name.',3);}}
 if(!chapelSeen&&Math.abs(P.x-CH.x)<3.6&&Math.abs(P.z-CH.z)<3.6){chapelSeen=true;ghost.position.set(CH.x+3,1.2,CH.z);ghost.scale.set(2.3,2.3,1);ghost.material.opacity=.95;ghost.visible=true;ghostT=.8;behind=0;sfx.slam();sfx.sting(.8);}
 OGR.forEach((g,i)=>{if(!graveSeen[i]&&elapsed>45&&Math.hypot(P.x-g[0],P.z-g[1])<2.3){graveSeen[i]=1;if(R()<.7){gArm.position.set(g[0],-1,g[1]);gArm.visible=true;gArm.userData.t=1.6;sfx.sting(.7);sfx.groan(.6);}}});
 if(gArm.userData.t>0){gArm.userData.t-=dt;const t=gArm.userData.t;gArm.position.y=t>1.3?-1+(1.6-t)/.3*1.1:(t<.5?.1-(.5-t)*2.4:.1);gArm.rotation.z=Math.sin(elapsed*30)*.15;if(t<=0)gArm.visible=false;}}
function drawMap(cv,S2,labels){const x=cv.getContext('2d'),m=S2*.04,w=S2-2*m;
 if(CAT.on){x.fillStyle='#0d0b09';x.fillRect(0,0,S2,S2);const N=CAT.n,c=w/N;x.strokeStyle='#8a7a5a';x.lineWidth=2;for(let i=0;i<N;i++)for(let j=0;j<N;j++){const X=m+i*c,Z=m+j*c;if(i===N-1||!CAT.pass[CAT.key(i,j,i+1,j)]){x.beginPath();x.moveTo(X+c,Z);x.lineTo(X+c,Z+c);x.stroke();}if(j===N-1||!CAT.pass[CAT.key(i,j,i,j+1)]){x.beginPath();x.moveTo(X,Z+c);x.lineTo(X+c,Z+c);x.stroke();}}x.strokeRect(m,m,w,w);
  x.fillStyle='#c79a00';x.fillRect(m+2,m+3*c+c/2-4,6,8);if(!CAT.burned){x.fillStyle='#a02010';x.beginPath();x.arc(m+(CAT.far[0]+.5)*c,m+(CAT.far[1]+.5)*c,4,0,7);x.fill();}
  const px=m+(P.x-CAT.x0)/CAT.cs*c,pz=m+(P.z-CAT.z0)/CAT.cs*c;x.save();x.translate(px,pz);x.rotate(-P.yaw);x.fillStyle='#d01010';x.beginPath();x.moveTo(0,-6);x.lineTo(4,4);x.lineTo(-4,4);x.fill();x.restore();if(labels){x.fillStyle='#cbb';x.font='12px Georgia';x.textAlign='center';x.fillText('CATACOMBS',S2/2,S2-6);}return;}x.fillStyle=inv.map?'#b9ab84':'#151515';x.fillRect(0,0,S2,S2);
 if(!inv.map){x.fillStyle='#555';x.font='13px Georgia';x.textAlign='center';x.fillText('No map yet',S2/2,S2/2);return;}
 const q=v=>(v+H)/(2*H)*w+m;x.strokeStyle='#3a2f1c';x.lineWidth=2;x.strokeRect(m,m,w,w);x.fillStyle='rgba(60,48,30,.35)';x.fillRect(q(0)-2,m,4,w);x.font='10px Georgia';x.textAlign='center';
 const mk=(X,Z,l,c,r)=>{x.fillStyle=c||'#2a2114';x.beginPath();x.arc(q(X),q(Z),r||(labels?3.2:2.6),0,7);x.fill();if(labels)x.fillText(l,q(X),q(Z)-6);};
 {const qx=q;x.save();x.fillStyle='rgba(20,40,20,.35)';x.fillRect(qx(WOODA.x0),qx(WOODA.z0),qx(WOODA.x1)-qx(WOODA.x0),qx(WOODA.z1)-qx(WOODA.z0));x.fillStyle='rgba(150,130,50,.3)';x.fillRect(qx(CORNA.x0),qx(CORNA.z0),qx(CORNA.x1)-qx(CORNA.x0),qx(CORNA.z1)-qx(CORNA.z0));
  x.fillStyle='rgba(20,40,70,.65)';x.beginPath();x.arc(qx(LK.x),qx(LK.z),LK.r/(2*H)*w,0,7);x.fill();x.fillStyle=inv.map?'#b9ab84':'#151515';x.beginPath();x.arc(qx(LK.x),qx(LK.z),LK.ir/(2*H)*w,0,7);x.fill();
  x.strokeStyle='rgba(40,30,20,.6)';x.lineWidth=1.5;x.setLineDash([3,2]);x.beginPath();x.moveTo(m,qx(RAILZ));x.lineTo(m+w,qx(RAILZ));x.stroke();x.setLineDash([]);x.strokeStyle='rgba(60,48,30,.5)';x.strokeRect(qx(-C),qx(-C),qx(C)-qx(-C),qx(C)-qx(-C));
  x.fillStyle='#3a2a1a';VILL.forEach(v=>x.fillRect(qx(v[0])-2.5,qx(v[1])-2.5,5,5));x.fillRect(qx(MAUS.x)-4,qx(MAUS.z)-3,8,6);x.fillRect(qx(CAB.x)-2,qx(CAB.z)-2,4,4);
  if(labels){x.font='bold 10px Georgia';x.fillStyle='#4a3a20';[['WHISPERING WOODS',-99,40],['BLACK LAKE',LK.x,LK.z-LK.r-4],['CORNFIELD',98,98],["PAUPERS' FIELD",0,100],["GRAVEDIGGER'S ROW",-92,-128],['MAUSOLEUM HILL',MAUS.x,MAUS.z-10],['OLD YARD',0,-C+6],['RAILWAY',-120,RAILZ-3]].forEach(l=>x.fillText(l[0],qx(l[1]),qx(l[2])));mk(TOWR.x,TOWR.z,'Fire tower','#5a3a10');mk(CAB.x,CAB.z,"Hermit's cabin");}
  if(Q4.ping){x.strokeStyle='rgba(255,60,60,'+Math.min(1,Q4.ping.t/3)+')';x.lineWidth=2;const X=qx(Q4.ping.x),Z=qx(Q4.ping.z);x.beginPath();x.arc(X,Z,6,0,7);x.stroke();}
  if(TOWER.rev>0&&!monDead){x.fillStyle='#ff2020';x.beginPath();x.arc(qx(mon.position.x),qx(mon.position.z),4,0,7);x.fill();}x.restore();}
 mk(0,-H,'GATE','#0a5a20',labels?4:3.5);mk(CH.x,CH.z,'Chapel (tunnel)','#3a2a6a');mk(SH.x,SH.z,'Shed (safe)');mk(COT.x,COT.z,"Voss's cottage");mk(TRUCK.x,TRUCK.z,'Truck','#1a4a6a');mk(WELL.x,WELL.z,'Well');mk(BELL.x,BELL.z,'Bell','#8a6a00');mk(HOL.x,HOL.z,'Flooded hollow','#205a7a');mk(0,0,'Statue');mk(SCR.x,SCR.z,'Scarecrow');mk(PH.x,PH.z,'Phone');
 {const c=w/VIS.n;x.fillStyle='rgba(30,22,10,.42)';for(let j=0;j<VIS.n;j++)for(let i=0;i<VIS.n;i++)if(!VIS.g[j*VIS.n+i])x.fillRect(m+i*c,m+j*c,c+.5,c+.5);x.fillStyle='#2a2114';}
 GEN.forEach(g=>mk(g.x,g.z,'Generator',g.on?'#c79a00':'#8a1a10'));CRYPTS.forEach(c=>mk(c[0],c[1],'Crypt','#555'));if(inv.pages>=6)mk(GRAVE.x,GRAVE.z,"Marrow's grave",'#701010');
 x.strokeStyle='#f0ece0';x.lineWidth=1.5;CHALK.forEach(c=>{if(c.cat)return;const X=q(c.x),Z=q(c.z);x.beginPath();x.moveTo(X-3,Z-3);x.lineTo(X+3,Z+3);x.moveTo(X+3,Z-3);x.lineTo(X-3,Z+3);x.stroke();});
 if(NR.r>.5){x.strokeStyle='rgba(255,120,80,.6)';x.lineWidth=1.5;x.beginPath();x.arc(q(P.x),q(P.z),NR.r/(2*H)*w,0,7);x.stroke();}
 if(DOLLREV&&!monDead&&!CAT.monIn){x.fillStyle='#ff2020';x.beginPath();x.arc(q(mon.position.x),q(mon.position.z),4,0,7);x.fill();}
 x.save();x.translate(q(P.x),q(P.z));x.rotate(-P.yaw);x.fillStyle='#d01010';x.beginPath();x.moveTo(0,-7);x.lineTo(4.5,5);x.lineTo(-4.5,5);x.fill();x.restore();}
let CAPT=false;try{CAPT=localStorage.getItem('crawler_capt')==='1';}catch(e){}
let capT=0;function caption(t){return;if(!CAPT||monDead)return;const a=Math.atan2(mon.position.x-P.x,mon.position.z-P.z),fa=Math.atan2(-Math.sin(P.yaw),-Math.cos(P.yaw));let r=Math.atan2(Math.sin(a-fa),Math.cos(a-fa));const dir=Math.abs(r)<.6?'ahead':Math.abs(r)>2.4?'behind you':r>0?'to your left':'to your right',dd=Math.hypot(mon.position.x-P.x,mon.position.z-P.z);$('capt').textContent='['+t+' — '+dir+(dd<10?', close':dd>30?', far':'')+']';$('capt').style.opacity=1;capT=2.2;}
let SENS=1,VOL=.9;try{SENS=+localStorage.getItem('crawler_sens')||1;const v=localStorage.getItem('crawler_vol');if(v!==null&&v!=='')VOL=+v;}catch(e){}
let gpUse=false,gpRun=false,gpHold=false,tBreath=false;const gpPrev=[];let stoneN=0,heardEver=false,winT=0,shakeT=0,eTap=false,miniT=0,night=1,wake=false,sndT=0,fovD=false,seen={};try{seen=JSON.parse(localStorage.getItem('crawler_end')||'{}')||{};}catch(e){seen={};}
const ACH=[['esc','Get out alive'],['night1','Escape on the very first night'],['night5','Survive to the fifth night'],['kill','Kill the crawler'],['ram','Run it down with the truck'],['dawn','Survive until dawn'],['pages','Find all six pages'],['secret','Find the secret letter'],['ghost','Escape without it ever hearing you'],['nuke','??? (secret)'],['dolls','Find all five cursed dolls'],['explorer','Visit every area of the grounds'],['trainout','Escape on the ghost train'],['underway1','Find the Underway'],['underway','Escape through the Underway on the handcar'],['echo','Freeze when it screams'],['napper','Sneak right past it while it sleeps'],['biker','Ride the old bicycle'],['fisher','Go fishing in Black Lake'],['wish','Make a wish'],['photos','Find all five photographs'],['elias','Say his name'],['woodsout','Escape through the woods'],['tapes','Find all of Elias\u2019s tapes'],['blessed','Light the altar candles'],['rich','Collect all 25 silver coins'],['truth','Uncover every secret'],['tower','Climb the fire tower'],['train','Get hit by the ghost train'],['corn','Lose it in the corn'],['wisps','Follow the lights to the end'],['organ','Play the chapel organ'],['photo','Get the crawler on camera'],['margaret','Find what Voss was hiding'],['annie','Ring the bell for her'],['ledger','Read Voss\u2019s ledger'],['tut','Finish the tutorial'],['cat','Climb down into the catacombs'],['elias','Burn the creature\u2019s nest'],['dead','Play dead — and live'],['holy','Burn it with holy water'],['journals','Read all three watchmen\u2019s journals'],['endless5','Last 5 minutes in Endless'],['halloween','Escape on Halloween night'],['true','??? (the true ending)']];let ach={};try{ach=JSON.parse(localStorage.getItem('crawler_ach')||'{}')||{};}catch(e){ach={};}
function award(k){return;if(!ach[k]){ach[k]=1;try{localStorage.setItem('crawler_ach',JSON.stringify(ach));}catch(e){}}}
let nukeT=0,nukeCode='0000',padStr='',sirT=0;
let INTRO0='',thunCover=0,stormT=90,stormOn=0,boltT=0;let dawnOn=false,smellT=0,hemiBase=.27,TH={},lampOut=0;
const dawnDome=new T.Mesh(new T.SphereGeometry(480,16,12),new T.MeshBasicMaterial({color:0x6a7a90,side:T.BackSide,fog:false,transparent:true,opacity:0,depthWrite:false}));dawnDome.visible=false;skyG.add(dawnDome);
function resetDawn(){setTimeout(()=>{try{applyMods();}catch(e){}},0);dawnOn=false;smellT=0;hemiBase=.27;hemi.intensity=.27;scene.fog.density=.05;scene.fog.color.setHex(0x070a10);dawnDome.visible=false;dawnDome.material.opacity=0;moon.intensity=.38;rain.m.material.opacity=.2;$('clk').textContent='11:42 PM';}
function dawnTick(dt){const mins=(1422+elapsed*.45)%1440,hh=Math.floor(mins/60),mm=Math.floor(mins%60);$('clk').textContent=((hh%12)||12)+':'+(mm<10?'0':'')+mm+(hh<12?' AM':' PM');
 if(dawnOn){const k=Math.min(1,dt*.25);hemiBase+=(1.25-hemiBase)*k;hemi.intensity=hemiBase;scene.fog.density+=(.018-scene.fog.density)*k;scene.fog.color.lerp(SKYD,k);dawnDome.material.opacity+=(.9-dawnDome.material.opacity)*k;rain.m.material.opacity*=1-k;return;}
 scene.fog.density=.05+.022*Math.min(1,elapsed/840);
 if(elapsed>420&&!monDead){if(!TH.smell){TH.smell=1;msg('3 AM. The wind has turned. It can SMELL you now — it will come for you whether you make a sound or not.',6);smellT=20;}smellT-=dt;if(smellT<=0){smellT=45;hear(P,999);sndT=2;}}
 if(elapsed>=840&&!MOD.endless){dawnOn=true;bossReset();dawnDome.visible=true;hands.forEach(h=>{h.cd=9999;});zombies.forEach(z=>{if(z.state!=='off')z.state='dead';});if(!monDead){monDead=true;killWay='dawn';mon.visible=false;$('danger').style.opacity=0;const st=$('state');st.textContent='IT HAS GONE UNDERGROUND';st.style.color='#888';}
  gateOpening=true;sfx.bell();msg('6 AM. Grey light. It drags itself back under the chapel — and at the north gate, someone is taking off the chain.',8);}}
function thoughts(){return;if(monDead)return;if(M.state==='hunt'&&!TH.h){TH.h=1;msg('It heard me. Stop. Sneak away from where I was standing.',4);}else if(M.state==='search'&&!TH.s&&Math.hypot(mon.position.x-P.x,mon.position.z-P.z)<9){TH.s=1;msg('It is right there. Do not move. Do not breathe.',4);}
 for(const z of zombies)if(z.state==='chase'&&!TH.z){TH.z=1;msg('They can SEE me. But they cannot open doors.',4);}}
function hud(){try{if(isTouch&&window.__istrip)window.__istrip();}catch(e){}$('kc').textContent=keys;$('gc').textContent=gens;$('pc').textContent=inv.pages;const g=sel==='gun'&&inv.gun;
 $('hand').textContent=g?'▶ Shotgun ×'+inv.ammo+'   (1: stones ×'+stones+')':'▶ 🪨 Stones ×'+stones+(inv.gun?'   (2: shotgun ×'+inv.ammo+')':'');
 $('hand').textContent+=(inv.flare?'   ·   6: flare':'')+(inv.salt?'   ·   7: salt ×'+inv.salt:'')+(inv.cam?'   ·   8: camera ×'+inv.cam:'')+(inv.holy?'   ·   9: holy water ×'+inv.holy:'')+(inv.bottle?'   ·   G: bottle ×'+inv.bottle:'')+(inv.dolls?'   ·   dolls '+inv.dolls+'/5':'')+(inv.nv?'   ·   0: night-vision '+Math.round(inv.nvb*100)+'%':'')+(inv.trap?'   ·   4: trap ×'+inv.trap:'')+(inv.plank?'   ·   planks ×'+inv.plank:'')+(inv.box?'   ·   3: music box ×'+inv.box:'')+'   ·   night '+night+'/'+maxN();gunFP.visible=g;if(isTouch)$('bThrow').textContent=g?'FIRE':'THROW';}
function renderInv(){try{renderStats();fillLampSel();let all={};try{all=JSON.parse(localStorage.getItem('crawler_lore')||'{}');}catch(e){}const el=$('lore');if(el){const n=LORE_ALL.filter(q=>all[q[0]]).length;el.innerHTML='<li><b>'+n+' / '+LORE_ALL.length+' found (across all your nights)</b></li>'+LORE_ALL.map(q=>'<li class="'+(all[q[0]]?'':'off')+'">'+(all[q[0]]?'✔ '+q[1]:'· ???')+'</li>').join('');}}catch(e){}const li=(on,t)=>'<li class="'+(on?'':'off')+'">'+(on?'✔ ':'· ')+t+'</li>';
 $('items').innerHTML=li(true,'Lantern (hold F to raise it)')+li(stones>0,'Stones ×'+stones)+li(keys>0,'Brass keys ×'+keys)+li(inv.box>0,'Music box ×'+inv.box+' (press 3 to set down — lures it)')+li(inv.trap>0,'Bear trap ×'+inv.trap+' (press 4 to set)')+li(inv.fire>0,'Firecrackers ×'+inv.fire+' (press 5)')+li(inv.flare>0,'Flare gun (press 6)')+li(inv.salt>0,'Salt ×'+inv.salt+' (press 7 — a circle the dead won\'t cross)')+li(true,'Lantern oil: '+Math.round(inv.oil*100)+'%')+li(inv.battery,'Car battery')+((inv.c1||inv.c2)?li(true,'Radio code: '+(inv.c1?nukeCode.slice(0,2):'__')+(inv.c2?nukeCode.slice(2):'__')):'')+li(inv.plank>0,'Planks ×'+inv.plank+' (bar a door when you close it)')+li(inv.boots,'Soft boots (quieter steps)')+li(inv.shovel,'Shovel')+li(inv.safeKey,'Small iron key (from the grave)')+li(inv.gun,'Shotgun — '+inv.ammo+' shells')+li(inv.fuel,'Fuel can')+li(inv.tkey,'Truck key');
 $('outs').innerHTML=li(gens>=3,'Front gate — power it with 3 generators ('+gens+'/3)')+li(inv.fuel&&inv.tkey,'Old truck — fuel can + truck key')+li(keys>=3,'Chapel tunnel — 3 brass keys ('+keys+'/3)')+li(inv.ticket,'Ghost train — conductor\u2019s ticket + pull the signal lever by the railway')+li(inv.cutters,'Back fence in the woods — wire cutters')+li(inv.vkey,'The Underway — Voss\u2019s iron key, the hatch in the mausoleum, then the handcar')+'<li class="off">Things get dropped by crypts, benches, open graves, the well, the bell, the generators…</li>';
 $('kills').innerHTML=monDead?li(true,'It is dead.'):(inv.pages>=6?li(inv.gun,'Shotgun: dig up Marrow\'s grave → iron key → safe by the shed. Two hits, close range.')+li(gens>=3,'Electrocute it: 3 generators, lure it into the flooded hollow, pull the breaker.'):'<li class="off">· Unknown. Find all six pages.</li>');
 drawMap($('mapc'),300,true);$('ach').innerHTML=ACH.map(a=>li(!!ach[a[0]],a[0]==='nuke'&&ach.nuke?'Call it in — the secret ending':a[1])).join('');
 const h0=inv.secret?'<div class="page" style="background:#e9dcc0"><b>SECRET — A CHILD\'S LETTER, LEFT IN THE EMPTY COFFIN</b>Papa — Mr Voss says you are gone, but at night I hear you scratching under the chapel. I ring the bell so you know I am still here. I will keep ringing it until you come up. — Annie</div>':'';let h='';STORY.forEach((s,i)=>{h+=i<inv.pages?'<div class="page"><b>'+(i+1)+' / 6 — '+s[0]+'</b>'+s[1].replace(/\n/g,'<br>')+'</div>':'<div class="page lost">Page '+(i+1)+' — not found yet</div>';});$('pages').innerHTML=h+h0;}
function setGen(g,on){g.on=on;g.bm.color.setHex(on?0xffd9a0:0x1c1a16);g.gl.visible=on;}
function powerAll(on){pathBulbM.color.setHex(on?0xffd9a0:0x1c1a16);pathGlows.forEach(g=>g.visible=on);spark.visible=on;}
const WH={key:'he took the key',page:'he is reading about us',map:'he knows the way now',shovel:'he wants to dig',fuel:'he wants to leave',tkey:'he wants to leave',box:'he likes music',fire:'he will be loud',battery:'who is he calling'};
function take(k){k.taken=true;pickGroup.remove(k.o);if(WH[k.type]&&R()<.32&&!monDead)setTimeout(()=>{if(mode==='play'){sfx.whisper();msg('“…'+WH[k.type]+'…”',2.6);}},1700);
 if(k.type==='map'){inv.map=true;sfx.paper();msg('The caretaker\'s map. Press TAB to look at it.',4);}
 else if(k.type==='key'){keys++;sfx.chime();makeNoise(16);msg('Brass key '+keys+' of 3 — the jingle carries…',3);}
 else if(k.type==='page'){inv.pages++;if(inv.pages>=6)lore('pages');sfx.paper();msg('Torn page '+inv.pages+' of 6 — press TAB to read it',3.5);}
 else if(k.type==='doll'){inv.dolls++;try{vox({f:520,f2:700,dur:.5,g:.08,fm:[1200,2400],q:5,br:.3});}catch(e){}if(inv.dolls>=5){DOLLREV=true;award('dolls');msg('The fifth doll. All five heads turn to face the same direction — toward IT. (Its position now shows on your map.)',6);}else msg('A cursed doll ('+inv.dolls+'/5). Its eyes follow you. Find all five.',3.5);hud();}
 else if(k.type==='photo'){const i=inv.photos%5;inv.photos++;readNote(PHOTOS[i][0],PHOTOS[i][1]);lore('photos');if(inv.photos>=5)award('photos');hud();}
 else if(k.type==='binoc'){inv.binoc=true;msg('Binoculars! Hold Z to look far into the dark.',4);hud();}
 else if(k.type==='coin'){inv.coins++;ST2.coins++;try{tone({f:1900,g:.05,dur:.15});tone({f:2500,g:.04,dur:.2,at:.07});}catch(e){}if(inv.coins===1)msg('A silver coin. The hermit in the woods trades for these.',3);if(ST2.coins>=25)award('rich');hud();}
 else if(k.type==='tape'){const i=inv.tapes%5;inv.tapes++;readNote(TAPES[i][0],TAPES[i][1]);eliasVoice(TAPES[i][1]);lore('tapes');if(inv.tapes>=5)award('tapes');hud();}
 else if(k.type==='candle'){inv.candles++;msg('A church candle ('+inv.candles+'/3). There is an altar in the chapel.',3);hud();}
 else if(k.type==='watch'){inv.watch=true;msg('A pocket watch. It ticks faster the closer IT is. Listen to it.',4);hud();}
 else if(k.type==='cutters'){inv.cutters=true;msg('Wire cutters! The back fence in the Whispering Woods — that is a way out.',4);hud();}
 else if(k.type==='collar'){inv.collar=true;msg('An old dog collar. The tag says \u201cBISCUIT\u201d. Somebody might still be waiting for it…',4);hud();}
 else if(k.type==='ticket'){inv.ticket=true;msg('A conductor\u2019s ticket: \u201cHOLLOW REST — ONE WAY\u201d. Pull the signal lever by the railway and the midnight train will stop for you.',5);hud();}
 else if(k.type==='toy'){inv.toy++;sfx.clunk();msg('A wind-up tin toy. Press Y to set it walking — it ticks loudly and wanders off. A moving decoy.',4.5);}
 else if(k.type==='band'){inv.band++;sfx.paper&&sfx.paper();msg('Bandages. Press B to bind a twisted ankle.',3);}
 else if(k.type==='pick'){inv.pick=true;sfx.clunk();msg('Lockpicks. There is a locked box on Voss\u2019s table.',4);}
 else if(k.type==='holy'){inv.holy+=2;sfx.clunk();msg('A flask of holy water — two splashes. Press 9 when it is right in front of you: it burns, and it runs.',6);}
 else if(k.type==='nv'){inv.nv=true;inv.nvb=1;sfx.clunk();msg('A night-vision monocle. Press 0 to see in the dark — until the battery dies.',5);}
 else if(k.type==='journal'){JR++;const j=JOURNALS[(JR-1)%JOURNALS.length];lore('j'+(((JR-1)%3)+1));sfx.paper();readNote(j[0],j[1]);stat('journals',1);if(JR>=3)award('journals');}
 else if(k.type==='cam'){inv.cam+=4;sfx.clunk();msg('An old flash camera, 4 shots left. Press 8 to take a photo — the flash can blind things, and photos show what your eyes miss.',6);}
 else if(k.type==='fire'){inv.fire+=3;sfx.paper();msg('A string of firecrackers (×3). Press 5 to light and throw one — VERY loud, and it lasts.',5);}
 else if(k.type==='flare'){inv.flare++;sfx.clunk();msg('A flare gun with one flare. Press 6 — it lights up where it lands and draws it there for a long time.',5);}
 else if(k.type==='salt'){inv.salt++;sfx.paper();msg('A bag of salt. Press 7 to pour a circle. The dead will not cross it.',5);}
 else if(k.type==='oil'){inv.oil=Math.min(1,inv.oil+.6);sfx.clunk();msg('Lantern oil. You top up the lantern.',3);}
 else if(k.type==='battery'){inv.battery=true;sfx.clunk();makeNoise(10);msg('A heavy car battery. Something out here must still need power.',4.5);}
 else if(k.type==='trap'){inv.trap++;sfx.clunk();makeNoise(10);msg('A rusted bear trap. Press 4 to set it on the ground. If it crawls over it, it is pinned for a few seconds.',5);}
 else if(k.type==='plank'){inv.plank++;sfx.clunk();makeNoise(8);msg('A plank. Close a door while carrying one and you will bar it shut.',4.5);}
 else if(k.type==='boots'){inv.boots=true;msg('Soft-soled boots. Your walking and running are quieter now.',4);}
 else if(k.type==='box'){inv.box++;sfx.chime();makeNoise(8);msg('A wind-up music box. Press 3 to set it down — it will sing, and IT will come to listen.',5);}
 else if(k.type==='shovel'){inv.shovel=true;sfx.clunk();makeNoise(10);msg('A shovel. Something is buried here that should not be.',3.5);}
 else if(k.type==='fuel'){inv.fuel=true;sfx.clunk();makeNoise(10);msg('A fuel can, half full. It sloshes.',3);}
 else{inv.tkey=true;sfx.chime();makeNoise(13);msg('A truck key on a rusted ring.',3);}
 hud();save();}

const NIGHT_RULES=[null,
 ['NIGHT 1','“Whatever you hear tonight, do not answer it.”'],
 ['NIGHT 2','The fog is thicker. It is faster.'],
 ['NIGHT 3','The dead are waking. Watch where you step.'],
 ['NIGHT 4','Its hearing is sharper. Your lantern burns faster.'],
 ['NIGHT 5 — THE LAST NIGHT','It knows you are still here. It will not stop looking.']];
function maxN(){return (MOD.one||MOD.endless)?1:(D&&D.n==='Nightmare'?3:5);}
function nightRule(){if(maxN()===3&&night===3)return 5;return night;}
function rollWeather(){WX=['clear','fog','rain'][(R()*3)|0];setTimeout(()=>{try{if(WX==='fog')scene.fog.density*=1.55;else if(WX==='clear')scene.fog.density*=.75;FOGB=scene.fog.density;}catch(e){}},5);setTimeout(()=>{if(mode==='play'&&!TUT.on)msg(WX==='fog'?'Tonight: thick fog. You can barely see — but neither can anything else.':WX==='rain'?'Tonight: pouring rain. It drowns out some of your noise.':'Tonight: clear sky. Bright moon. Every sound carries.',4);},5500);}
function applyNight(card){rollWeather();if(night>=maxN()&&maxN()>1)setTimeout(()=>{if(mode==='play')narrate('This is the last night. If it catches you now, you will not wake up.');},4500);setTimeout(()=>{if(mode==='play'&&!TUT.on)zoneBanner({n:'NIGHT '+night,sub:NTITLE[Math.min(4,Math.max(0,night-1))]});},2500);const r=nightRule();setTimeout(()=>{FOGB=scene.fog.density;},0);if(night>=5&&!dbgUsed&&!D.practice)award('night5');scene.fog.density=dawnOn?scene.fog.density:(r>=2?.064:.05);if(r>=3)goLate();
 if(card){const it=$('intro');const L=NIGHT_RULES[Math.min(5,r)];it.innerHTML='<div style="font-size:1.8em;color:#b33">'+L[0]+(maxN()===3&&r===5?'':' <span style="font-size:.5em;color:#887">of '+maxN()+'</span>')+'</div><div>'+L[1]+'</div><div style="font-size:.7em;color:#887">You wake where you started, with everything you found.</div>';
  it.style.display='flex';it.classList.remove('run');void it.offsetWidth;it.classList.add('run');sfx.sting(.6);setTimeout(()=>{it.style.display='none';it.innerHTML=INTRO0;},5200);}}
function nHear(){const r=nightRule();return r>=4?1.25:1;}
function nOil(){return nightRule()>=4?1.6:1;}

const VB={on:false,pend:0,st:'walk',t:0,cd:0,stun:0,ph:0,path:null,pt:0,pi:1,wait:0,said:0,hits:0,last:0,fall:0};
function bossReset(){Object.assign(VB,{on:false,pend:0,st:'walk',t:0,cd:0,stun:0,ph:0,path:null,pt:0,pi:1,wait:0,said:0,hits:0,last:0,fall:0});voss.visible=false;}
function bossArm(){if(D.practice||inv.pages<6||VB.on)return;VB.pend=9;}
function vossSay(t,s){caption('Voss: '+t);msg('VOSS: “'+t+'”',s||3.5);}
function bossStart(){VB.on=true;VB.st='walk';VB.cd=2;VB.hits=0;voss.visible=true;voss.position.set(COT.x+2.6,0,COT.z+3.2);voss.rotation.set(0,0,0);
 const u=voss.userData;u.la.rotation.x=1.45;u.ra.rotation.x=1.12;sfx.slam();sfx.sting(1);shakeT=.4;
 vossSay('Elias…? ELIAS! What did you DO to him?',5);
 setTimeout(()=>{if(VB.on&&mode==='play')vossSay('Forty years I fed him. Forty years! You will take his place in that grave.',5);setTimeout(()=>{if(VB.on&&mode==='play')vossSay('Margaret was going to LEAVE me. Marrow should never have dug under that chapel!',5);},16000);setTimeout(()=>{if(VB.on&&mode==='play')vossSay('And the girl… I never touched the girl. She FELL. I only buried her. Somebody had to.',5);},30000);},5200);
 setTimeout(()=>{if(VB.on&&mode==='play')msg(dug?'Voss is coming for you. Lead him over Marrow’s OPEN GRAVE.':'Voss is coming for you. Dig Marrow’s grave open (shovel) and lead him into it.',6);},10600);}
function vossWalk(ph,run){const u=voss.userData,s=Math.sin(ph),a=run?.75:.45;u.ll.rotation.x=s*a;u.rl.rotation.x=-s*a;u.la.rotation.x=1.45-s*a*.7;u.la.rotation.z=.06;if(VB.st!=='swing'){u.ra.rotation.x=1.12+s*.08;u.ra.rotation.z=-.08;}voss.position.y=Math.abs(Math.cos(ph))*(run?.07:.04);voss.rotation.x=run?.14:.05;u.hd.rotation.set(.12+Math.abs(Math.cos(ph))*.05,Math.sin(ph*.5)*.06,0);}
function vossHit(){VB.hits++;P.hidden=null;sfx.crash();splat(5);shakeT=.6;flashT=.12;
 if(VB.hits>=2||P.down){vossKill();return;}
 grab({cd:0,vb:1},false);VB.cd=4.2;vossSay(['Lie still.','Down you go.','Into the ground with you.'][(R()*3)|0],2.5);}
function vossKill(){mode='dead';P.down=false;$('down').style.display='none';try{if(document.exitPointerLock)document.exitPointerLock();}catch(e){}sfx.scare();splat(14);
 wake=night<maxN();if(!wake){try{localStorage.removeItem('crawler_save');}catch(e){}}$('deadh').textContent=wake?'NIGHT '+night+' — VOSS GOT YOU':'VOSS GOT YOU';$('retry').textContent=wake?'WAKE UP':'START OVER';
 $('deadsub').textContent='He drags you to Marrow’s grave by the ankles and starts to shovel.'+(wake?'  You wake at the gate. He is still out there.':'')+'  Tip: lead him over the open grave — or set a bear trap in his path.';$('dead').style.display='flex';}
function updVoss(dt){if(VB.pend>0&&monDead&&!VB.on){VB.pend-=dt;if(VB.pend<=0)bossStart();}
 if(!VB.on)return;const v=voss.position,pd=Math.hypot(v.x-P.x,v.z-P.z);VB.cd-=dt;
 if(VB.fall>0)return;
 // the open grave
 if(dug&&VB.stun<=0&&Math.abs(v.x-GRAVE.x)<.8&&Math.abs(v.z-GRAVE.z)<1.3){VB.fall=1;trueEnding();return;}
 // bear traps
 for(const t of traps){if(t.on&&t.arm<=0&&Math.hypot(v.x-t.x,v.z-t.z)<1){t.on=false;t.m.visible=false;VB.stun=6;sfx.crash();vossSay('AARGH — my leg!',3);caption('Voss screaming');}}
 if(VB.stun>0){VB.stun-=dt;const u=voss.userData;u.ll.rotation.x=-.7+Math.sin(elapsed*14)*.1;u.rl.rotation.x=.25;u.la.rotation.x=1.95;u.ra.rotation.x=1.6;voss.rotation.x=.35;voss.rotation.z=Math.sin(elapsed*9)*.08;voss.position.y=Math.max(0,Math.sin(elapsed*6))*.05;u.hd.rotation.x=.5+Math.sin(elapsed*11)*.08;return;}voss.rotation.z=0;
 // where to go
 let tx=P.x,tz=P.z,sp=pd<14?3.9:3.3;
 if(P.hidden){if(pd<3.4){sp=0;VB.wait+=dt;if(!VB.said){VB.said=1;vossSay('I buried every one of those coffins. I know where you are.',4);}if(VB.wait>9){vossHit();VB.wait=0;}}}else{VB.wait=0;VB.said=0;}
 if(P.down)sp=pd>1.6?2.2:0;
 VB.pt-=dt;if(!VB.path||VB.pt<=0){VB.path=findPath(v.x,v.z,tx,tz);VB.pi=1;VB.pt=VB.path?.8:2.5;}
 let rt={x:tx,z:tz};if(VB.path&&VB.path.length>1){while(VB.pi<VB.path.length-1&&Math.hypot(VB.path[VB.pi].x-v.x,VB.path[VB.pi].z-v.z)<.6)VB.pi++;let k=Math.min(VB.path.length-1,VB.pi+6);while(k>VB.pi&&!clearLine(v.x,v.z,VB.path[k].x,VB.path[k].z))k--;rt=VB.path[k];}
 let dx=rt.x-v.x,dz=rt.z-v.z;const d=Math.hypot(dx,dz)||1;dx/=d;dz/=d;
 if(sp>0&&pd>1.2){const st=Math.min(sp*dt,d);v.x+=dx*st;v.z+=dz*st;resolve(v,.4);VB.ph+=st*3.2;vossWalk(VB.ph,sp>3.5);const want=Math.atan2(dx,dz);let df=want-voss.rotation.y;df=Math.atan2(Math.sin(df),Math.cos(df));voss.rotation.y+=df*Math.min(1,dt*6);
  VB.last+=st;if(VB.last>1.6){VB.last=0;sfx.step(.45,false,false);}}
 for(const dr of DOORS){if(!dr.open&&Math.hypot(v.x-dr.x,v.z-dr.z)<1.5){setDoor(dr,true);sfx.door();}}
 // swing the shovel
 const u=voss.userData;if(VB.st==='swing'){VB.t+=dt;const wu=Math.min(1,VB.t/.45),st=Math.max(0,VB.t-.45);u.ra.rotation.x=VB.t<.45?1.12-wu*2.8:Math.min(1.05,-1.68+st*16);u.la.rotation.x=VB.t<.45?1.45-wu*2.75:Math.min(1.1,-1.3+st*15);voss.rotation.x=VB.t<.45?-.12*wu:Math.min(.3,st*1.2);u.hd.rotation.x=VB.t<.45?-.15:.3;if(VB.t>.6&&!VB.hitDone){VB.hitDone=1;if(pd<1.9&&!P.hidden)vossHit();else sfx.whoosh();}if(VB.t>.9){VB.st='walk';u.ra.rotation.x=1.12;}}
 else if(pd<1.6&&VB.cd<=0&&!P.hidden){VB.st='swing';VB.t=0;VB.hitDone=0;VB.cd=1.6;sfx.groan(.3);}
 if(pd<9&&R()<dt*.12)vossSay(['You should have stayed in the ground.','Come out, watchman.','I kept him fed. I kept this town SAFE.','I can hear you breathing.','Margaret would have told everyone.','She rang that bell for nine nights. I still hear it.'][(R()*4)|0],2.6);
}
const ZEAT={on:false,list:[],
 go(G){this.on=true;this.list=[];if(!ZMOD.ready)attachZombieModels();const offs=[[3.4,-.6],[-3.2,1.2],[.4,-4.2]],spots=[[1.05,.2],[-1.05,.35],[.05,-1.45]];
  zombies.forEach((z,i)=>{if(!z.m)return;z.g.children.forEach(c=>{if(c!==z.m)c.visible=false;});z.state='eat';z.g.visible=true;z.x=G.x+offs[i][0];z.z=G.z+offs[i][1];z.tx=G.x+spots[i][0];z.tz=G.z+spots[i][1];z.d0=i*.45;z.g.position.set(z.x,-1.9,z.z);z.g.rotation.set(0,Math.atan2(G.x-z.x,G.z-z.z),0);this.list.push(z);});},
 upd(dt,t,ph){for(const z of this.list){const g=z.g,tt=t-z.d0;if(tt<0){g.position.y=-1.9;continue;}
   if(ph==='come'){if(tt<2.2){g.position.y=-1.9+Math.min(1,tt/2.2)*1.9;g.rotation.x=.4*(1-tt/2.2);zPlay(z,'walk',.35);}
    else{const dx=z.tx-z.x,dz=z.tz-z.z,d=Math.hypot(dx,dz);g.position.y=0;g.rotation.x*=.9;if(d>.05){const sp=Math.min(d,1.25*dt);z.x+=dx/d*sp;z.z+=dz/d*sp;zPlay(z,'walk',1.1);}else zPlay(z,'walk',.25);g.position.x=z.x;g.position.z=z.z;}}
   else{z.x+=(z.tx-z.x)*Math.min(1,dt*3);z.z+=(z.tz-z.z)*Math.min(1,dt*3);g.position.set(z.x,Math.abs(Math.sin(t*9+z.d0*5))*.04,z.z);g.rotation.x=.42+Math.sin(t*7+z.d0*3)*.1;zPlay(z,'walk',2.2);}
   let a=Math.atan2(GRAVE.x-z.x,GRAVE.z-z.z);if(ph==='eat')a+=Math.sin(t*5+z.d0*4)*.25;g.rotation.y=a;
   if(z.mx)z.mx.update(dt);}},
 hide(){this.on=false;for(const z of this.list){z.state='off';z.g.visible=false;z.g.rotation.set(0,0,0);}this.list=[];}};
function trueEnding(){if(mode==='cut'||mode==='win')return;try{if(document.exitPointerLock)document.exitPointerLock();}catch(e){}$('mini').style.display='none';
 const G=GRAVE;let ph=0;const arms2=[];
 const shots=[
  {dur:4.5,sub:'He does not see the open grave until he is in it.',start(){voss.visible=true;voss.position.set(G.x,0,G.z);sfx.crash();sfx.groan(.8);},cam(k,t,dt){voss.position.y=-Math.min(1.1,t*1.6);voss.rotation.x=Math.min(.5,t*.4);vossWalk(t*14,true);camMove([G.x+4,2,G.z+4],[G.x+3,1.4,G.z+3],[G.x,.6,G.z],[G.x,0,G.z],k);}},
  {dur:7.5,sub:'He is not alone down here.',sub2:'They have been waiting a long time for him.',start(){ZEAT.go(G);vossSay('What — what is that —',3);setTimeout(()=>{try{sfx.groan(.9);}catch(e){}},300);setTimeout(()=>{try{sfx.groan(.8,pan());}catch(e){}},1400);},
   cam(k,t,dt){voss.position.y=-1.1+Math.min(.45,t*.35);const u=voss.userData;u.la.rotation.x=-2.4+Math.sin(t*9)*.35;u.ra.rotation.x=-2.3+Math.cos(t*8)*.35;u.hd.rotation.set(-.3,Math.sin(t*3)*.6,0);ZEAT.upd(dt,t,'come');
    camMove([G.x+4.4,1.8,G.z+4],[G.x+3.4,1.55,G.z+3.1],[G.x,.4,G.z],[G.x,.1,G.z],k);}},
  {dur:7,sub:'They drag him back down.',sub2:'Voss screams for a long time.',start(){try{vossVoice('No! NO! Get OFF me! GET OFF!');}catch(e){}sfx.tear();sfx.scare();setTimeout(()=>{try{sfx.tear();sfx.groan(1);}catch(e){}},900);setTimeout(()=>{try{sfx.tear();}catch(e){}},2300);setTimeout(()=>{try{vossVoice('Elias! ELIAS, HELP M—');}catch(e){}},2600);setTimeout(()=>{try{sfx.tear();sfx.groan(.9,pan());}catch(e){}},3800);},
   cam(k,t,dt){const u=voss.userData;voss.position.y=-.65-k*1.1;u.la.rotation.x=-2.6+Math.sin(t*17)*.6;u.ra.rotation.x=-2.5+Math.cos(t*15)*.6;u.hd.rotation.set(-.5+Math.sin(t*11)*.3,Math.sin(t*7)*.7,0);voss.rotation.z=Math.sin(t*13)*.15;ZEAT.upd(dt,t,'eat');
    if(R()<dt*6)try{bleed(G.x+rr(-.4,.4),.2,G.z+rr(-.6,.6),4,1.3);}catch(e){}
    camMove([G.x+3.3,2.1,G.z+3],[G.x+2.6,1.8,G.z+2.4],[G.x,0,G.z],[G.x,-.3,G.z],k);},end(){voss.visible=false;voss.rotation.z=0;}},
  {dur:3,sub:'',start(){},cam(k,t,dt){ZEAT.upd(dt,t+7,'eat');camMove([G.x+2.6,1.8,G.z+2.4],[G.x+2.9,2,G.z+2.7],[G.x,-.3,G.z],[G.x,-.2,G.z],k);},end(){ZEAT.hide();}},
  {dur:4,sub:'Then it is quiet.',start(){},cam(k){camMove([G.x+2,1.1,G.z+2.5],[G.x+2.4,1.5,G.z+3.2],[G.x,0,G.z],[G.x,0,G.z],k);}},
  {dur:7,sub:'Dawn. The chain on the gate is hanging loose.',sub2:'Nobody is holding it.',start(){dawnOn=true;dawnDome.visible=true;pl.visible=true;pl.position.set(0,0,-H+6);pl.rotation.set(0,Math.PI,0);gateL.rotation.y=1.45;gateR.rotation.y=-1.45;},
   cam(k,t,dt){ph+=dt*5;plWalk(ph);pl.position.z=-H+6-k*12;camMove([0,4,-H+18],[0,14,-H+30],[0,1.2,-H+2],[0,1,-H-6],k);}}];
 playCut(shots,()=>{ZEAT.hide();pl.visible=false;voss.visible=false;VB.on=false;showWin('true');});}
function bolt(){if(!CAT.on){try{lightningBolt();}catch(e){}if(R()<.3&&mode==='play'){const fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw);FACE.position.set(P.x+fx*6+rr(-1.5,1.5),1.5,P.z+fz*6);ST2.faceT=.2;setTimeout(()=>{try{sfx.behind();}catch(e){}},90);}mon.traverse(o=>{if(o.isMesh&&o.material&&o.material.emissive)o.material.emissive.setHex(0x3a3634);});setTimeout(()=>{mon.traverse(o=>{if(o.isMesh&&o.material&&o.material.emissive)o.material.emissive.setHex(0x000000);});},260);
 if(R()<.18){const t=tombs.filter(t=>t.h>1.8&&Math.hypot(t.x-P.x,t.z-P.z)<35).sort(()=>R()-.5)[0];if(t){setTimeout(()=>{try{sfx.crash();}catch(e){}for(let i=0;i<8;i++){const g=glow(t.x+rr(-.25,.25),t.h*rr(.3,1),t.z+rr(-.25,.25),0xff7020,rr(.4,.8),.9);revs.push({g,t:rr(14,22)});}hear(t,40);caption('lightning struck a gravestone — it is burning');shakeT=.5;},420);}}}
 if(CAT.on){setTimeout(()=>{try{nz({type:'lowpass',f:90,g:.3,dur:1.5});}catch(e){}},450);return;}flashT=.55;thunCover=3;setTimeout(()=>{try{sfx.thunder();}catch(e){}},450);shakeT=Math.max(shakeT,.15);if(!monDead)sndT=2.2;}
function updStorm(dt){thunCover=Math.max(0,thunCover-dt);
 if(stormOn>0){stormOn-=dt;boltT-=dt;if(boltT<=0){boltT=rr(6,12);bolt();}if(stormOn<=0){stormT=rr(110,170);msg('The storm moves off. Every step counts again.',3);}}
 else if(!dawnOn){stormT-=dt;if(stormT<=0){stormOn=rr(45,65);boltT=3;msg('A storm is rolling in. When the lightning flashes, the thunder COVERS YOUR NOISE for a few seconds — run then.',6);}}
 const nl=$('nlbl');if(nl){if(thunCover>0){nl.textContent='THUNDER — YOU ARE COVERED';nl.style.color='#8cf';}else if(nl.textContent!=='YOUR NOISE'){nl.textContent='YOUR NOISE';nl.style.color='';}}}
const REC=[],NE=[],BRP={_p:0};let recT=0,repAnim=0;
function recTick(dt){recT+=dt;if(recT<.1)return;recT=0;REC.push({t:elapsed,px:P.x,pz:P.z,mx:mon.position.x,mz:mon.position.z,h:M.state==='hunt'});if(REC.length>140)REC.shift();while(NE.length&&elapsed-NE[0].t>15)NE.shift();}
function recNoise(x,z,r,heard,first){NE.push({t:elapsed,x,z,r:Math.min(r,40),heard,first});if(NE.length>80)NE.shift();}
function noiseName(e){if(e.r<6)return 'breathing';if(e.r<13)return 'a quiet step';if(e.r<22)return 'footsteps';if(e.r<31)return 'running / something loud';return 'a LOUD noise';}
function showReplay(){const cv=$('rep');if(!cv||REC.length<5){if(cv)cv.style.display='none';$('replbl').textContent='';return;}cv.style.display='block';
 const c=cv.getContext('2d'),W=cv.width,t0=REC[0].t,t1=REC[REC.length-1].t,span=Math.max(1,t1-t0);
 let x0=1e9,x1=-1e9,z0=1e9,z1=-1e9;REC.forEach(r=>{x0=Math.min(x0,r.px,r.mx);x1=Math.max(x1,r.px,r.mx);z0=Math.min(z0,r.pz,r.mz);z1=Math.max(z1,r.pz,r.mz);});
 const cx=(x0+x1)/2,cz=(z0+z1)/2,half=Math.max(10,(x1-x0)/2+6,(z1-z0)/2+6),sc=W/(half*2),X=x=>(x-cx)*sc+W/2,Z=z=>(z-cz)*sc+W/2;
 const key=NE.filter(e=>e.first&&e.t>=t0-1).pop();$('replbl').textContent=key?'It heard '+noiseName(key)+' — '+(t1-key.t).toFixed(1)+' seconds before it reached you.':'It found you without ever hearing you clearly. It was already close.';
 const start=performance.now(),me=++repAnim;
 function draw(){if(me!==repAnim||mode!=='dead')return;requestAnimationFrame(draw);const el=((performance.now()-start)/1000)%(span/2+2),tt=Math.min(t1,t0+el*2);
  c.fillStyle='#080303';c.fillRect(0,0,W,W);c.fillStyle='#211a18';for(const b of boxes){if(b.off)continue;c.fillRect(X(b.x0),Z(b.z0),(b.x1-b.x0)*sc,(b.z1-b.z0)*sc);}for(const k of circles){c.beginPath();c.arc(X(k.x),Z(k.z),Math.max(1,k.r*sc),0,7);c.fill();}
  for(const e of NE){if(e.t<t0||e.t>tt)continue;const a=tt-e.t;if(a>1.6)continue;const k=a/1.6;c.strokeStyle=e.first?'rgba(255,40,30,'+(1-k)+')':'rgba(220,220,220,'+(.55*(1-k))+')';c.lineWidth=e.first?3:1.5;c.beginPath();c.arc(X(e.x),Z(e.z),Math.max(2,e.r*sc*k),0,7);c.stroke();
   if(e.first){c.fillStyle='rgba(255,70,60,'+(1-k)+')';c.font='bold 13px Georgia';c.fillText('IT HEARD THIS',X(e.x)+6,Z(e.z)-8);}}
  let lp=null,lm=null;c.lineWidth=2;for(const r of REC){if(r.t>tt)break;if(lp){c.strokeStyle='rgba(230,230,230,.35)';c.beginPath();c.moveTo(X(lp.px),Z(lp.pz));c.lineTo(X(r.px),Z(r.pz));c.stroke();c.strokeStyle=r.h?'rgba(255,40,30,.6)':'rgba(150,40,40,.4)';c.beginPath();c.moveTo(X(lp.mx),Z(lp.mz));c.lineTo(X(r.mx),Z(r.mz));c.stroke();}lp=r;}
  if(lp){c.fillStyle='#fff';c.beginPath();c.arc(X(lp.px),Z(lp.pz),5,0,7);c.fill();c.fillStyle=lp.h?'#ff2a1a':'#a33';c.beginPath();c.arc(X(lp.mx),Z(lp.mz),6,0,7);c.fill();}
  c.fillStyle='#cbb';c.font='12px Georgia';c.fillText('REPLAY — what it heard   (you = white, it = red)',8,16);c.fillText('-'+(t1-tt).toFixed(1)+'s',W-44,W-10);}
 draw();}

let CAMT=0,camFl=0,wfl=null;const revs=[];
function snap(){if(mode!=='play'||P.down||P.hidden||CAMT>0)return;if(inv.cam<=0){msg('No film left.',1.4);return;}inv.cam--;hud();CAMT=.001;camFl=0;camFP.visible=true;}
function doFlash(){if(!wfl){wfl=document.createElement('div');wfl.style.cssText='position:fixed;inset:0;background:#f4f8ff;opacity:0;pointer-events:none;z-index:18;transition:opacity .6s';document.body.appendChild(wfl);}
 wfl.style.transition='none';wfl.style.opacity=.93;requestAnimationFrame(()=>requestAnimationFrame(()=>{wfl.style.transition='opacity .7s';wfl.style.opacity=0;}));muzzleT=.09;try{tone({f:6300,g:.03,dur:3.6,a:.01});}catch(e){}SFXS.ring=2;
 try{nz({f:3200,q:3,g:.45,dur:.03});nz({f:1400,q:2,g:.3,dur:.05,at:.07});tone({f:1800,f2:6500,g:.04,dur:.7,at:.1});}catch(e){}hear(P,8);
 const fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw),inView=(x,z,r)=>{const dx=x-P.x,dz=z-P.z,d=Math.hypot(dx,dz);return d<r&&(dx*fx+dz*fz)/(d||1)>.55&&clearLine(P.x,P.z,x,z);};let hit=false;
 if(!monDead&&inView(mon.position.x,mon.position.z,11)){hit=true;M.stun=3.6;M.wind=0;sfx.screech();award('photo');sndT=2;msg('The flash sears its pinprick eyes. It reels back — RUN.',3.5);caption('shrieking, blinded');}
 zombies.forEach(z=>{if((z.state==='chase'||z.state==='idle')&&inView(z.x,z.z,9)){hit=true;z.state='stun';z.t=3;}});
 if(VB.on&&VB.stun<=0&&inView(voss.position.x,voss.position.z,10)){hit=true;VB.stun=2.6;vossSay('My EYES —',2.5);}
 if(hit)return;
 const want={map:1,key:1,fuel:1,tkey:1,page:1,shovel:1,battery:1,oil:1};let best=null,bd=17;for(const k of picks){if(k.taken||!want[k.type])continue;const d=Math.hypot(k.x-P.x,k.z-P.z);if(d<bd&&inView(k.x,k.z,17)){bd=d;best=k;}}
 if(best){const g=glow(best.x,.35,best.z,0xbfe6ff,1.6,0);g.material.fog=false;revs.push({g,t:7});msg('In the photo, something lies in the grass over there — it is still glowing in your eyes.',4.5);}
 else if(R()<.25){setTimeout(()=>{if(mode==='play')faceFlash();},350);msg('Just graves in the photo. And… a face. Right behind you.',3);}
 else msg('Just graves in the photo.',2);}
function updCamFP(dt){if(CAMT>0){CAMT+=dt;const t=CAMT,up=t<.28?t/.28:t>.8?Math.max(0,1-(t-.8)/.3):1,e=up*up*(3-2*up);
  camFP.position.set(.02+(1-e)*.15,-.32+e*.24,-.3);camFP.rotation.set((1-e)*.9,(1-e)*-.4,(1-e)*.3);
  if(t>.32&&!camFl){camFl=1;doFlash();camFP.userData.fb.material.emissive.setHex(0xffffff);}if(t>.45)camFP.userData.fb.material.emissive.setHex(0x222222);
  if(t>1.1){CAMT=0;camFP.visible=false;}lantern.visible=!(e>.4);}
 for(let i=revs.length-1;i>=0;i--){const r=revs[i];r.t-=dt;r.g.material.opacity=Math.min(.8,r.t*.3,(7-r.t)*2)*(0.75+Math.sin(elapsed*6)*.25);if(r.t<=0){scene.remove(r.g);revs.splice(i,1);}}}
// the phone
const PLACES=[['the chapel',CH.x,CH.z],['the shed',SH.x,SH.z],['Voss’s cottage',COT.x,COT.z],['the well',WELL.x,WELL.z],['the bell',BELL.x,BELL.z],['the flooded hollow',HOL.x,HOL.z],['the statue',0,0],['the scarecrow',SCR.x,SCR.z],['the truck',TRUCK.x,TRUCK.z],['the front gate',0,-H+3]];
function placeOf(x,z){let b=PLACES[0],bd=1e9;for(const p of PLACES){const d=Math.hypot(p[1]-x,p[2]-z);if(d<bd){bd=d;b=p;}}return b[0];}
function phonePan(){if(!actx)return null;if(!PH.pn){PH.pn=actx.createPanner();try{PH.pn.panningModel='HRTF';}catch(e){}PH.pn.distanceModel='inverse';PH.pn.refDistance=3;PH.pn.rolloffFactor=1;try{if(isFinite(PH.x+PH.z))PH.pn.setPosition(PH.x,1.4,PH.z);}catch(e){}PH.pn.connect(wet);}return PH.pn;}
function phoneVoice(n){const d=phonePan();if(!d)return;for(let i=0;i<n;i++){const f=rr(115,150);try{vox({f:f,f2:f*rr(.8,1.05),dur:rr(.12,.28),g:.22,fm:[rr(500,900),rr(1100,1900)],br:.5,at:i*.27,dest:d});}catch(e){}}}
function answerPhone(){PH.ring=0;PH.uses++;PH.cd=rr(170,260);sfx.clunk();PH.hs.position.y=1.6;setTimeout(()=>{PH.hs.position.y=1.42;},6500);let line;
 if(PH.uses===1)line=monDead?'…it is dead. But he is not. Voss is still awake.':'…it’s me. It’s YOU. Listen — right now it is near '+placeOf(mon.position.x,mon.position.z)+'. Stay away from there.';
 else if(PH.uses===2){const want={key:1,page:1,fuel:1,tkey:1,shovel:1,map:1};let b=null,bd=1e9;for(const k of picks){if(k.taken||!want[k.type])continue;const d=Math.hypot(k.x-P.x,k.z-P.z);if(d<bd){bd=d;b=k;}}line=b?'…'+NAMES[b.type].replace('the ','the ')+'… it is by '+placeOf(b.x,b.z)+'. Hurry. It heard the phone too.':'…you already have everything. Why are you still here?';}
 else if(PH.uses===3){line='…turn around.';setTimeout(()=>{if(mode==='play')behindYou();},2600);}
 else{line='(no voice — only clicking. Slow, wet clicking, right against the receiver. Something is breathing into the phone.)';const d=phonePan();for(let i=0;i<14;i++)try{nz({f:rr(1500,2600),q:6,g:.3,dur:.04,at:.3+i*rr(.18,.35),dest:d||master});}catch(e){}phoneVoice(0);}
 phoneVoice(Math.min(14,4+line.length/6|0));caption('your own voice, on the phone');msg('THE PHONE — your own voice: “'+line+'”',7);}
function updExtras(dt){updCamFP(dt);
 // phone
 if(PH.lt)PH.lt.intensity=PH.ring>0?(R()<.15?0:.9):(.45+(R()<.03?-.4:0));
 if(mode==='play'&&!dawnOn){const pd=Math.hypot(P.x-PH.x,P.z-PH.z);if(PH.ring>0){PH.ring-=dt;PH.bt-=dt;if(PH.bt<=0){PH.bt=3;const d=phonePan();if(d){for(let i=0;i<2;i++){try{tone({f:440,g:.12,dur:.4,at:i*.6,dest:d});tone({f:480,g:.12,dur:.4,at:i*.6,dest:d});}catch(e){}}}caption('a phone ringing');hear(PH,22);}
   if(PH.ring<=0){PH.cd=rr(110,190);}}
  else{PH.cd-=dt;if(PH.cd<=0&&pd<45&&elapsed>(night>1?60:240)){PH.ring=16;PH.bt=0;if(!TH.ph){TH.ph=1;msg('A phone is ringing. Out here? By the front gate. It is loud — the crawler will hear it too.',5);}}}}
 // it copies your sounds
 if(mode==='play'&&!monDead&&heardEver&&M.state!=='hunt'){M.mimT=(M.mimT===undefined?rr(40,70):M.mimT)-dt;if(M.mimT<=0){M.mimT=rr(50,95);const pd=Math.hypot(mon.position.x-P.x,mon.position.z-P.z);
  if(pd>9&&pd<34){if(M.state==='wander')M.pause=3;for(let i=0;i<6;i++)nz({f:rr(300,520),q:.8,g:.5,dur:.11,at:i*.44,dest:panner});if(R()<.5){if(R()<.5){for(let i=0;i<2;i++)vox({f:i?190:230,f2:i?150:200,dur:i?.35:.22,g:.16,fm:[750,1500],br:.7,at:2.9+i*.3,dest:panner});setTimeout(()=>caption('someone calling “help”… in YOUR voice'),3000);}else vox({f:170,f2:115,dur:.4,g:.18,fm:[700,1300],br:.9,at:2.9,dest:panner});}sndT=3;caption('footsteps… they sound like yours');
   if(!TH.mim){TH.mim=1;setTimeout(()=>{if(mode==='play')msg('Those were YOUR footsteps. Over there. It is copying the sounds you make.',5);},2800);}}}}
 // something on the crypt roof
 if(mode==='play'&&inCrypt()){P.rf=(P.rf===undefined?rr(12,25):P.rf)-dt;if(P.rf<=0){P.rf=rr(35,70);for(let i=0;i<6;i++)nz({type:'lowpass',f:rr(140,220),g:.7,dur:.13,at:i*.48});setTimeout(()=>{shakeT=Math.max(shakeT,.15);},300);caption('something crawling on the roof');if(!TH.roof){TH.roof=1;msg('Something is on the roof. Right above you.',3.5);}}}}

let SNOW=null,snowMap=null,groundMap0=null;
function applyMods(){MOD.winter=MOD.daily=MOD.halloween=MOD.endless=false;// sky / fog / light per modifier
 const fogC=MOD.blood?0x1c0606:MOD.winter?0x1a1f28:0x070a10;scene.fog.color.setHex(fogC);
 SKY.setHex(MOD.blood?0x160303:MOD.winter?0x10141c:0x05070c);scene.background.copy(SKY);
 hemi.color.setHex(MOD.blood?0x7a2a22:MOD.winter?0x60708a:0x3a4c70);moon.color.setHex(MOD.blood?0xd04030:MOD.winter?0xb0c4e8:0x8fa6d8);moon.intensity=moonBase=MOD.blood?.5:MOD.winter?.5:.38;FOGB=scene.fog.density;if(MOD.halloween){buildPumpkins();scene.fog.color.setHex(0x160a04);}pumpkins.forEach(g=>{g.visible=MOD.halloween;});
 if(MOD.winter){hemi.intensity=hemiBase=.38;}
 if(!groundMap0)groundMap0=ground.material.map;
 if(MOD.winter){if(!snowMap){snowMap=tex(512,(x,s2)=>{x.fillStyle='#c9d0d8';x.fillRect(0,0,s2,s2);speck(x,s2,9000,['#e8eef4','#aeb7c2','#f6f9ff','#9aa4b0'],.7,2.2);},0);snowMap.repeat.copy(groundMap0.repeat);}ground.material.map=snowMap;}else ground.material.map=groundMap0;ground.material.needsUpdate=true;
 if(GRASS)GRASS.visible=!MOD.winter;
 if(MOD.winter&&!SNOW){const N=mobile?700:1800,pa=new Float32Array(N*3);for(let i=0;i<N;i++){pa[i*3]=rr(-18,18);pa[i*3+1]=rr(0,12);pa[i*3+2]=rr(-18,18);}const g=new T.BufferGeometry();g.setAttribute('position',new T.BufferAttribute(pa,3));
  const c=document.createElement('canvas');c.width=c.height=32;const x=c.getContext('2d'),gr=x.createRadialGradient(16,16,0,16,16,16);gr.addColorStop(0,'rgba(255,255,255,1)');gr.addColorStop(1,'rgba(255,255,255,0)');x.fillStyle=gr;x.fillRect(0,0,32,32);
  SNOW=new T.Points(g,new T.PointsMaterial({size:.09,map:new T.CanvasTexture(c),transparent:true,depthWrite:false,opacity:.85,color:0xffffff}));scene.add(SNOW);}
 if(SNOW)SNOW.visible=MOD.winter;}
function dayKey(){const d=new Date();return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();}
function daySeed(){let h=2166136261;for(const ch of dayKey()){h^=ch.charCodeAt(0);h=Math.imul(h,16777619);}return h>>>0;}
// ---- the Weeping Girl ----
const WG={on:false,t:0,look:0,cd:200,pn:null,sobT:0,scr:false};
const girl=(function(){const g=mkZombie(),wm=new T.MeshStandardMaterial({color:0xd9dde2,roughness:.9,transparent:true,opacity:.78,emissive:0x1a1d22}),hm=new T.MeshStandardMaterial({color:0x050505,roughness:1});
 g.traverse(o=>{if(o.isMesh)o.material=wm;});const u=g.userData;
 const hair=new T.Mesh(new T.CylinderGeometry(.12,.2,.75,10,1,true),hm);hair.position.set(0,-.25,-.04);u.hd.add(hair);
 g.scale.setScalar(.66);g.visible=false;scene.add(g);return g;})();
function girlPan(){if(!actx)return null;if(!WG.pn){WG.pn=actx.createPanner();try{WG.pn.panningModel='HRTF';}catch(e){}WG.pn.distanceModel='inverse';WG.pn.refDistance=3;WG.pn.connect(wet);}try{if(isFinite(girl.position.x+girl.position.z))WG.pn.setPosition(girl.position.x,1,girl.position.z);}catch(e){}return WG.pn;}
function girlSob(g){const d=girlPan();if(!d)return;for(let i=0;i<4;i++){const f=rr(420,520)*(1+WG.look*.25);try{vox({f:f,f2:f*.8,dur:rr(.14,.3),g:g,a:.03,at:i*rr(.3,.42),fm:[900,1500],q:6,br:.5,dest:d});}catch(e){}}}
function updGirl(dt){if(mode!=='play')return;
 if(!WG.on){WG.cd-=dt;if(WG.cd<=0&&!monDead&&!P.hidden&&(elapsed>240||night>=2)){let ok=false;for(let q=0;q<40&&!ok;q++){const a=R()*6.28,d=rr(11,18),x=P.x+Math.cos(a)*d,z=P.z+Math.sin(a)*d;if(Math.abs(x)<E&&Math.abs(z)<E&&!blocked(x,z,.5)&&clearLine(P.x,P.z,x,z)){girl.position.set(x,0,z);ok=true;}}
   if(ok){WG.on=true;WG.t=0;WG.look=0;WG.scr=false;girl.visible=true;girl.rotation.y=Math.atan2(P.x-girl.position.x,P.z-girl.position.z)+rr(-.6,.6);WG.sobT=0;}else WG.cd=10;}return;}
 WG.t+=dt;const u=girl.userData,gx=girl.position.x-P.x,gz=girl.position.z-P.z,gd=Math.hypot(gx,gz),fx=-Math.sin(P.yaw)*Math.cos(P.pitch),fz=-Math.cos(P.yaw)*Math.cos(P.pitch),dot=(gx*fx+gz*fz)/(gd||1);
 const looking=!P.hidden&&gd<24&&dot>.93&&clearLine(P.x,P.z,girl.position.x,girl.position.z);
 if(inv.secret&&!TH.annieH&&WG.t>2){TH.annieH=1;msg('The letter from the empty grave feels heavy in your pocket. If you want to give it to her — do NOT look at her. Walk to her backwards (S).',6);}
 if(looking&&!WG.scr){WG.look+=dt;if(!TH.girl){TH.girl=1;msg('A little girl, crying into her hands. Something tells you: do NOT stare at her.',5);}}else WG.look=Math.max(0,WG.look-dt*.6);
 const k=Math.min(1,WG.look/1.8);
 // hands over her face, shoulders shaking; as you stare, the head comes up and the hands come down
 u.la.rotation.set(2.5-k*2.2,0,.5-k*.4);u.ra.rotation.set(2.5-k*2.2,0,-.5+k*.4);u.hd.rotation.set(.5-k*.75+Math.sin(elapsed*9)*.03,0,Math.sin(elapsed*1.3)*.08*(1-k));girl.position.y=Math.sin(elapsed*7)*.01;
 girl.traverse(o=>{if(o.isMesh&&o.material.opacity!==undefined)o.material.opacity=Math.max(0,Math.min(.8,WG.t*.6,(26-WG.t)*.5))*(R()<.04?.3:1);});
 WG.sobT-=dt;if(WG.sobT<=0&&!WG.scr){WG.sobT=rr(1.4,2.4)*(1-k*.6);girlSob(.07+k*.1);caption(k>.5?'the crying is getting louder':'a child crying');}
 if(WG.look>1.8&&!WG.scr){WG.scr=true;WG.t=Math.max(WG.t,24);const d=girlPan();if(d){try{vox({f:900,f2:1600,dur:1.3,g:.4,fm:[1800,3000],q:3,br:1,dest:d});vox({f:640,f2:1300,dur:1.2,g:.3,fm:[1300,2400],q:3,br:1,dest:d,at:.05});}catch(e){}}
  faceFlash();shakeT=.5;caption('SCREAMING');msg('She screams. Everything in Hollow Rest knows exactly where you are.',4);hear(P,999);}
 if(WG.t>26){WG.on=false;girl.visible=false;WG.cd=rr(80,150);}}
const HUDS={st:0,oil:0};let goalLast='',goalT=0;function goalCore(t){return (t||'').replace(/[0-9⚡🗝·]/g,'').replace(/\s+/g,' ').split('—')[0].trim();}
function showGoal(t){const c=goalCore(t);if(!c||c===goalLast)return;const first=goalLast==='';goalLast=c;if(first&&elapsed<3)return;const g=$('goal');g.textContent=t.split('  ·  ')[0];g.style.opacity=1;clearTimeout(goalT);goalT=setTimeout(()=>{g.style.opacity=0;},3800);}

// ===================== batch of 30 =====================
let DEATHP=null,PDU=0,FAKEU=0;const PD={t:0,air:0,miss:0};
function startPD(){mode='pdead';PD.t=0;PD.miss=0;P.hidden=null;bfog.visible=false;sfx.scare();try{if(document.exitPointerLock)document.exitPointerLock();}catch(e){}
 P.yaw=openYaw(1.4);const fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw);mon.position.set(P.x+fx*1.35,0,P.z+fz*1.35);mon.rotation.y=Math.atan2(-fx,-fz);M.wind=0;
 const d=$('down');d.style.display='block';d.textContent='PLAY DEAD — HOLD SPACE. DO NOT BREATHE.';msg('',.1);caption('it is sniffing you');}
function updPD(dt){PD.t+=dt;const held=K.Space||gpHold||tBreath;if(!held&&PD.t>.5)PD.miss+=dt;const fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw);
 camera.position.set(P.x,.32+Math.sin(PD.t*1.3)*.01,P.z);rig.rotation.set(-.42+Math.sin(PD.t*2)*.04,0,0);rig.position.set(0,.1,0);mon.updateMatrixWorld(true);
 head.rotation.set(.6+Math.sin(PD.t*9)*.03,Math.sin(PD.t*1.7)*.35,Math.sin(PD.t*.8)*.2);jaw.rotation.x=.12+Math.abs(Math.sin(PD.t*3))*.15;head.getWorldPosition(hp);camera.lookAt(hp.x,hp.y,hp.z);
 pulse(PD,dt,.9,()=>{try{sfx.sniff();}catch(e){}});const left=Math.max(0,4.5-PD.t);$('down').textContent=(held?'HOLDING YOUR BREATH… ':'BREATHE AND YOU DIE — HOLD SPACE! ')+'▮'.repeat(Math.ceil(left*2));
 if(PD.miss>.35){$('down').style.display='none';mode='play';caught();return;}
 if(PD.t>4.5){$('down').style.display='none';mode='play';P.h=1.6;M.state='wander';M.timer=0;M.target.set(mon.position.x+fx*30,0,mon.position.z+fz*30);mon.position.set(P.x+fx*3,0,P.z+fz*3);M.stun=0;M.pause=0;
  lockPointer();msg('It sniffs your face… and crawls away. That will not work twice.',5);stat('pd',1);award('dead');}}
function fakeOver(){FAKEU=1;const was=mode;mode='fake';sfx.scare();try{if(document.exitPointerLock)document.exitPointerLock();}catch(e){}
 $('deadh').textContent='TORN IN HALF';$('deadsub').textContent='It heard you.';$('retry').textContent='WAKE UP';$('dead').style.pointerEvents='none';$('dead').style.display='flex';const rp=$('rep');if(rp)rp.style.display='none';$('replbl').textContent='';
 setTimeout(()=>{$('deadh').textContent='T̷O̴R̵N̸ ̶I̷N̵ ̴H̸A̷L̶F̵';$('grain').style.opacity=1;},1600);
 setTimeout(()=>{$('dead').style.display='none';$('dead').style.pointerEvents='';$('grain').style.opacity='';if(mode==='fake')mode='play';lockPointer();try{sfx.whisper();}catch(e){}msg('…not yet.',3);caption('a whisper: not yet');},2700);}
// ---- your own body, where you died last night ----
const corpses=[];function mkCorpse(){const g=humanize(mkZombie(),{coat:0x3a3530,hair:0x2a2018,skin:0x9c8a7a,long:1}),cm=new T.MeshStandardMaterial({map:clothT,color:0x3a3530,roughness:.9}),sk=new T.MeshStandardMaterial({map:skinT,normalMap:TK.nor,color:0x9c8a7a,roughness:.7});
 g.traverse(o=>{if(!o.isMesh)return;if(o.material===clothM)o.material=cm;else if(o.material===zskinM)o.material=sk;});const u=g.userData;u.la.rotation.set(-.4,0,.9);u.ra.rotation.set(.3,0,-1.4);u.ll.rotation.x=.2;u.rl.rotation.x=-.3;u.hd.rotation.set(.3,.9,0);
 g.rotation.set(-Math.PI/2,0,R()*6);g.position.y=.14;scene.add(g);const b=glow(0,.02,0,0x3a0000,1.6,.75);b.material.fog=true;return {g,b,seen:0};}
function layCorpse(){if(!DEATHP)return;let c=corpses.find(q=>!q.g.visible);if(!c){if(corpses.length>=4)c=corpses[0];else{c=mkCorpse();corpses.push(c);}}
 c.g.position.set(DEATHP.x,.14,DEATHP.z);c.g.rotation.z=R()*6;c.g.visible=true;c.b.position.set(DEATHP.x,.03,DEATHP.z);c.b.visible=true;c.seen=0;}
// ---- fear vision + controller rumble + night vision filters ----
let fearK=0,lastFilt='',NV={on:false};
function updFear(dt){let k=0;if(!monDead&&(mode==='play')){const d=Math.hypot(mon.position.x-P.x,mon.position.z-P.z);k=Math.max(0,1-d/16);if(M.state!=='hunt')k*=.6;else k=Math.max(k,.5+.5*Math.max(0,1-d/45));}
 fearK+=(k-fearK)*Math.min(1,dt*3);let f='';if(FLASHB)f='sepia(.95) contrast(1.25) brightness(.85)';else if(NV.on)f='grayscale(1) sepia(1) hue-rotate(55deg) saturate(3.5) brightness(1.9) contrast(1.25)';else if(fearK>.04)f='saturate('+(1-fearK*.85).toFixed(2)+') contrast('+(1+fearK*.3).toFixed(2)+')';
 if(f!==lastFilt){lastFilt=f;canvas.style.filter=f;}}
function rumble(k){try{const gp=navigator.getGamepads&&navigator.getGamepads()[0];if(gp&&gp.vibrationActuator)gp.vibrationActuator.playEffect('dual-rumble',{duration:140,strongMagnitude:Math.min(1,k),weakMagnitude:Math.min(1,k*.6)});}catch(e){}}
// ---- holy water + night vision ----
function splashHoly(){if(mode!=='play'||P.down||P.hidden)return;if(inv.holy<=0){msg('No holy water.',1.4);return;}inv.holy--;hud();FP.thr=.45;sfx.whoosh();
 const fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw),inF=(x,z,r)=>{const dx=x-P.x,dz=z-P.z,d=Math.hypot(dx,dz);return d<r&&(dx*fx+dz*fz)/(d||1)>.4;};let hit=0;
 if(!monDead&&inF(mon.position.x,mon.position.z,4.2)){hit=1;sfx.screech();try{nz({f:5000,q:.6,g:.3,dur:1.2});}catch(e){}M.stun=1.6;M.wind=0;setTimeout(()=>{if(monDead)return;M.state='wander';M.timer=0;M.pause=0;M.target.set(Math.max(-E,Math.min(E,mon.position.x+fx*30)),0,Math.max(-E,Math.min(E,mon.position.z+fz*30)));},1600);
  for(let i=0;i<14;i++){const g=glow(mon.position.x+rr(-.4,.4),rr(.3,1.2),mon.position.z+rr(-.4,.4),0xddddcc,rr(.4,.9),.5);revs.push({g,t:rr(1,2)});}msg('It shrieks and its skin boils where the water hits. It FLEES.',4);caption('hissing, shrieking');award('holy');}
 zombies.forEach(z=>{if((z.state==='chase'||z.state==='idle')&&inF(z.x,z.z,4)){hit=1;z.state='stun';z.t=6;}});
 if(VB.on&&inF(voss.position.x,voss.position.z,4)){hit=1;vossSay('Holy water? I am not the monster here, watchman.',3);}
 if(!hit)msg('You splash holy water at nothing. '+(inv.holy?inv.holy+' left.':'The flask is empty.'),2);}
function toggleNV(){if(mode!=='play')return;if(!inv.nv){msg('You do not have night-vision.',1.4);return;}if(!NV.on&&inv.nvb<=0){msg('The monocle battery is dead.',1.6);return;}NV.on=!NV.on;sfx.click&&sfx.click();try{tone({f:6000,f2:9000,g:.03,dur:.25});}catch(e){}hud();
 if(NV.on&&!TH.nv){TH.nv=1;msg('Night-vision on. Its eyes shine in the dark. The battery will not last long.',4);}}
function updNV(dt){if(NV.on){inv.nvb=Math.max(0,inv.nvb-dt/80);hemi.intensity=Math.max(hemi.intensity,1.4);if(inv.nvb<=0){NV.on=false;hemi.intensity=hemiBase;msg('The monocle flickers and dies.',2);}}else if(hemi.intensity>hemiBase&&flashT<=0)hemi.intensity=hemiBase;}
// ---- stats ----
let STATS={};try{STATS=JSON.parse(localStorage.getItem('crawler_stats'))||{};}catch(e){}let statT=0;
function stat(k,v){if(dbgUsed)return;STATS[k]=(STATS[k]||0)+v;}
function saveStats(){try{localStorage.setItem('crawler_stats',JSON.stringify(STATS));}catch(e){}}

// ---- notes reader ----
let noteEl=null,noteT=0;function readNote(title,body){if(!noteEl){noteEl=document.createElement('div');noteEl.style.cssText='position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);max-width:min(560px,86vw);background:#d8ccaa;color:#2a2016;padding:22px 26px;font:16px/1.5 Georgia,serif;box-shadow:0 0 60px #000;z-index:30;white-space:pre-wrap;pointer-events:none;transition:opacity .4s';document.body.appendChild(noteEl);}
 noteEl.innerHTML='<div style="font-weight:bold;letter-spacing:2px;margin-bottom:10px">'+title+'</div>'+body.replace(/</g,'&lt;')+'<div style="margin-top:12px;font-size:12px;color:#6a5a40">(walk away to put it down)</div>';noteEl.style.opacity=1;noteEl.style.display='block';noteT=12;NOTEP={x:P.x,z:P.z};}
let NOTEP=null;function updNote(dt){if(!noteEl||noteT<=0)return;noteT-=dt;if(noteT<=0||mode!=='play'||(NOTEP&&Math.hypot(P.x-NOTEP.x,P.z-NOTEP.z)>2.2)){noteT=0;noteEl.style.opacity=0;setTimeout(()=>{if(noteT<=0)noteEl.style.display='none';},400);}}
let JR=0;const JOURNALS=[
 ['WATCHMAN’S JOURNAL — 1962','Third night. The caretaker says do not whistle, do not run, do not answer anything that calls you by name.\nSomething under the chapel answered me anyway. It used my mother’s voice.'],
 ['WATCHMAN’S JOURNAL — 1979','It cannot see. I proved it — I stood in the open with the lantern up and it crawled right past me.\nBut I breathed. God help me, I breathed.'],
 ['WATCHMAN’S JOURNAL — 2003','Voss pays cash and asks no questions. I found the other journals in the shed. Every one of them stops on the fifth night.\nTonight is my fifth night.']];
function makePan(x,y,z){if(!actx)return null;const pn=actx.createPanner();try{pn.panningModel='HRTF';}catch(e){}pn.distanceModel='inverse';pn.refDistance=2.5;try{pn.setPosition(x,y,z);}catch(e){}pn.connect(wet);return pn;}
function voiceAt(x,z,n,f0){const d=makePan(x,1,z);if(!d)return;for(let i=0;i<n;i++){const f=rr(f0*.85,f0*1.15);try{vox({f:f,f2:f*rr(.8,1.05),dur:rr(.12,.3),g:.2,fm:[rr(500,900),rr(1100,1900)],br:.5,at:i*.28,dest:d});}catch(e){}}}
// ---- answering machine on Voss's table ----
const AM={x:COT.x+.62,z:COT.z-1.85,n:0,led:null};
(function(){const g=new T.Group();g.position.set(AM.x,.82,AM.z);const m=new T.MeshStandardMaterial({color:0x1a1a1a,roughness:.5});g.add(bx(.26,.07,.18,0,.035,0,m));g.add(bx(.12,.01,.07,-.04,.075,0,new T.MeshStandardMaterial({color:0x333333,roughness:.4})));
 AM.led=new T.Mesh(new T.SphereGeometry(.008,8,6),new T.MeshBasicMaterial({color:0xff2010,fog:false,toneMapped:false}));AM.led.position.set(.09,.075,.06);g.add(AM.led);scene.add(g);})();
const AMSG=[['The county','“Mr. Voss, county records. The night watchman you hired… we have no record of him. No address, no birth certificate. Who is he?”',110],
 ['(no voice)','Static. Then clicking. Slow, wet clicking, very close to the phone. It goes on for a long time.',0],
 ['A woman, crying','“…this is for the night watchman. If you get this, do not go near the chapel after midnight. Do not let it hear you breathe. Please.”',200]];
acts.push({x:AM.x,z:AM.z+.45,r:1.3,hold:0,label:()=>AM.n<AMSG.length?'Play the answering machine ('+(AMSG.length-AM.n)+' new)':'Answering machine — no more messages',can:()=>AM.n<AMSG.length,done(){const m=AMSG[AM.n++];lore('am');try{tone({f:1000,g:.05,dur:.3});}catch(e){}
 setTimeout(()=>{if(m[2])voiceAt(AM.x,AM.z,12,m[2]);else{for(let i=0;i<10;i++)try{nz({f:rr(1500,2600),q:6,g:.25,dur:.04,at:.5+i*rr(.2,.4)});}catch(e){}}msg('ANSWERING MACHINE — '+m[0]+': '+m[1],8);caption('a recorded voice');},500);noiseLvl=.3;hear(P,10);}});
// ---- a soaked newspaper by the gate (the headline remembers how your last night ended) ----
const NEWS={x:-4,z:-H+5.5};(function(){for(let q=0;q<60&&!clear(NEWS.x,NEWS.z,.6);q++){NEWS.x=rr(-12,-2);NEWS.z=-H+rr(3,8);}
 const t=tex(256,(x,s2)=>{x.fillStyle='#cfc8b4';x.fillRect(0,0,s2,s2);x.fillStyle='#222';x.font='bold 30px Georgia';x.fillText('THE HOLLOW',14,40);x.fillText('GAZETTE',14,72);x.fillRect(10,84,s2-20,3);for(let i=0;i<14;i++){x.fillRect(12,100+i*11,(s2-24)*(.5+R()*.5),5);}x.fillStyle='rgba(60,40,20,.35)';x.beginPath();x.arc(170,190,60,0,7);x.fill();},0);
 const m=new T.Mesh(new T.PlaneGeometry(.42,.32),new T.MeshStandardMaterial({map:t,roughness:1}));m.rotation.set(-Math.PI/2,0,R()*6);m.position.set(NEWS.x,.025,NEWS.z);scene.add(m);})();
acts.push({x:NEWS.x,z:NEWS.z,r:1.3,hold:0,label:()=>'Read the soaked newspaper',can:()=>true,done(){let last='';try{last=localStorage.getItem('crawler_last')||'';}catch(e){}
 const H2={gate:['WATCHMAN FOUND WALKING ROUTE 9 AT DAWN','He would not stop whispering. “It can’t see. It can’t see. It can’t see.”'],truck:['STOLEN TRUCK FOUND IN A DITCH','The driver’s door was open. Deep scratches ran the length of the tailgate.'],tunnel:['STRANGE SCRATCHING UNDER CHAPEL STREET','Residents report scratching beneath their floors every night since Tuesday.'],dawn:['CARETAKER QUESTIONED, RELEASED','Henry Voss told police the night watchman “walked out at sunrise like nothing happened.”'],nuke:['GAS MAIN BLAST LEVELS HOLLOW REST','Officials deny any military involvement. The crater is still warm.'],true:['CARETAKER VOSS MISSING','A grave in Hollow Rest was found freshly filled. Nobody remembers digging it.']};
 const h=H2[last]||['NIGHT WATCHMAN WANTED — HOLLOW REST','Cash paid nightly. No experience needed. Must not be afraid of the dark. Must be able to keep very, very quiet.'];lore('news');readNote('THE HOLLOW GAZETTE',h[0]+'\n\n'+h[1]);}});
// ---- police tape and missing posters near the shed ----
(function(){const ym=new T.MeshStandardMaterial({color:0xd8b818,roughness:.7,side:T.DoubleSide});const base=[SH.x+3.6,SH.z+2.6];let x0=base[0],z0=base[1];for(let q=0;q<50&&!clear(x0,z0,.5);q++){x0=SH.x+rr(2.5,6);z0=SH.z+rr(-4,4);}
 const p1=[x0,z0],p2=[x0+rr(-1,1),z0+3.2];[p1,p2].forEach(p=>{scene.add(cyl(.03,.03,1.1,p[0],.55,p[1],woodM||ironM,6));});const L=Math.hypot(p2[0]-p1[0],p2[1]-p1[1]),tp=new T.Mesh(new T.PlaneGeometry(L,.07),ym);tp.position.set((p1[0]+p2[0])/2,.95,(p1[1]+p2[1])/2);tp.rotation.y=-Math.atan2(p2[1]-p1[1],p2[0]-p1[0]);scene.add(tp);
 const tp2=new T.Mesh(new T.PlaneGeometry(L,.07),ym);tp2.position.set(tp.position.x,.6,tp.position.z);tp2.rotation.y=tp.rotation.y;tp2.rotation.z=.08;scene.add(tp2);
 const pt=(n,yr)=>tex(256,(x,s2)=>{x.fillStyle='#e8e2d0';x.fillRect(0,0,s2,s2);x.fillStyle='#111';x.font='bold 40px Georgia';x.textAlign='center';x.fillText('MISSING',s2/2,46);x.fillStyle='#333';x.fillRect(68,60,120,120);x.fillStyle='#777';x.beginPath();x.arc(128,104,26,0,7);x.fill();x.fillRect(96,132,64,48);x.fillStyle='#111';x.font='18px Georgia';x.fillText(n,s2/2,204);x.fillText('night watchman · '+yr,s2/2,228);},0);
 const bd=new T.Group();bd.position.set((p1[0]+p2[0])/2+.6,0,(p1[1]+p2[1])/2);bd.add(cyl(.04,.04,1.6,-.5,.8,0,woodM||ironM,6));bd.add(cyl(.04,.04,1.6,.5,.8,0,woodM||ironM,6));bd.add(bx(1.2,.8,.04,0,1.25,0,woodM||ironM));
 [['D. OKAFOR','1998'],['R. HALE','2011'],['YOU?','tonight']].forEach((q,i)=>{const m=new T.Mesh(new T.PlaneGeometry(.34,.34),new T.MeshStandardMaterial({map:pt(q[0],q[1]),roughness:1}));m.position.set(-.38+i*.38,1.27,.03);m.rotation.z=rr(-.08,.08);bd.add(m);});scene.add(bd);circles.push({x:bd.position.x,z:bd.position.z,r:.6});
 acts.push({x:bd.position.x,z:bd.position.z+.9,r:1.4,hold:0,label:()=>'Read the missing posters',can:()=>true,done(){lore('posters');readNote('MISSING','DANIEL OKAFOR — night watchman, Hollow Rest Cemetery. Last seen October 1998.\nRUTH HALE — night watchwoman. Last seen March 2011. Her lantern was found by the chapel, still lit.\nPinned underneath, older and sun-bleached: MARGARET VOSS, 1986. The sheriff wrote across it in pen: \u201cleft her husband — not a police matter.\u201d\nThe third poster has no name. Just a pencil sketch of a face.\nIt is yours.');}});})();
// ---- the pet cemetery ----
const PETS={x:-30,z:30};(function(){let ok=false;for(let q=0;q<200&&!ok;q++){const x=rr(-36,36),z=rr(-36,36);if(clear(x,z,3.4)&&!blocked(x,z,3)&&Math.hypot(x,z+H)>12&&Math.hypot(x-P.x,z-P.z)>6){PETS.x=x;PETS.z=z;ok=true;}}
 const g=new T.Group();g.position.set(PETS.x,0,PETS.z);const sm2=new T.MeshStandardMaterial({map:TS.map,normalMap:TS.nor,roughness:.95,color:0x7a7468});
 for(let i=0;i<10;i++){const a=i/10*6.28+rr(-.2,.2),r=rr(1,2.6),x=Math.cos(a)*r,z=Math.sin(a)*r;if(i%3===0){g.add(bx(.04,.38,.04,x,.19,z,woodM||ironM));g.add(bx(.2,.04,.04,x,.27,z,woodM||ironM));}else{const st=bx(.22,.28,.06,x,.14,z,sm2);st.rotation.set(rr(-.15,.1),rr(-.4,.4),rr(-.12,.12));g.add(st);}}
 const sg=tex(128,(x,s2)=>{x.fillStyle='#4a3a28';x.fillRect(0,0,s2,s2);x.fillStyle='#d8ccaa';x.font='bold 30px Georgia';x.textAlign='center';x.fillText('PETS',s2/2,52);x.font='14px Georgia';x.fillText('good boys and',s2/2,84);x.fillText('girls sleep here',s2/2,102);},0);
 const sign=new T.Mesh(new T.PlaneGeometry(.5,.4),new T.MeshStandardMaterial({map:sg,roughness:1,side:T.DoubleSide}));sign.position.set(0,.7,-2.9);g.add(sign);g.add(cyl(.025,.025,.7,0,.35,-2.92,woodM||ironM,6));
 g.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});scene.add(g);})();
// ---- rats ----
const rats=[];(function(){const rm=new T.MeshStandardMaterial({color:0x2a221c,roughness:.8}),tm=new T.MeshStandardMaterial({color:0x6a4a44,roughness:.6});for(let i=0;i<2;i++){const g=new T.Group();const b=new T.Mesh(new T.SphereGeometry(.06,10,8),rm);b.scale.set(.8,.7,1.6);b.position.y=.05;g.add(b);const h=new T.Mesh(new T.ConeGeometry(.035,.08,8),rm);h.rotation.x=Math.PI/2;h.position.set(0,.05,.12);g.add(h);
 const t=new T.Mesh(new T.CylinderGeometry(.006,.002,.2,4),tm);t.rotation.x=Math.PI/2.3;t.position.set(0,.03,-.17);g.add(t);g.visible=false;scene.add(g);rats.push({g,t:0,x0:0,z0:0,x1:0,z1:0});}})();
let ratT=40,bellDone={},knockT=20;
// ---- pumpkins (Halloween) ----
const pumpkins=[];function buildPumpkins(){if(pumpkins.length)return;const pm=new T.MeshStandardMaterial({color:0xd86a10,roughness:.6,emissive:0x2a0e00}),stm=new T.MeshStandardMaterial({color:0x3a4a18,roughness:.8});
 const face=tex(128,(x,s2)=>{x.fillStyle='#000';x.fillRect(0,0,s2,s2);x.fillStyle='#ffb030';x.beginPath();x.moveTo(30,50);x.lineTo(50,30);x.lineTo(56,56);x.fill();x.beginPath();x.moveTo(98,50);x.lineTo(78,30);x.lineTo(72,56);x.fill();x.beginPath();x.moveTo(24,74);for(let i=0;i<=8;i++)x.lineTo(24+i*10,i%2?96:84);x.lineTo(104,74);x.quadraticCurveTo(64,104,24,74);x.fill();},0);
 const sp2=spots.slice().sort(()=>Math.random()-.5);for(let i=0;i<16&&i<sp2.length;i++){const g=new T.Group();const [x,z]=sp2[i];g.position.set(x+.6,0,z+.6);const b=new T.Mesh(new T.SphereGeometry(.2,14,10),pm);b.scale.set(1.15,.8,1.15);b.position.y=.16;g.add(b);g.add(cyl(.02,.025,.08,0,.34,0,stm,6));
  const f=new T.Mesh(new T.PlaneGeometry(.26,.26),new T.MeshBasicMaterial({map:face,transparent:true,blending:T.AdditiveBlending,depthWrite:false}));f.position.set(0,.17,.235);g.add(f);g.add(glow(0,.18,0,0xff8a20,.9,.35));g.rotation.y=R()*6;g.visible=false;scene.add(g);pumpkins.push(g);}}
function updWorld(dt){updNote(dt);if(mode!=='play')return;
 // clouds over the moon, fog banks
 if(!dawnOn&&nukeT<=0&&!CAT.on){const cl=.5+.5*Math.sin(elapsed*.045)*Math.sin(elapsed*.017+1.3);moon.intensity=moonBase*(.35+.65*cl);const fb=Math.max(0,Math.sin(elapsed/38+.7));scene.fog.density=FOGB*(1+.5*fb*fb);
  if(fb>.97&&!TH.fogb){TH.fogb=1;msg('A fog bank is rolling in. You can see less — but so can nothing else.',3.5);}}
 // the bell tolls by itself at 1 AM and 3 AM
 for(const t of [173,440]){if(elapsed>t&&!bellDone[t]&&!dawnOn){bellDone[t]=1;for(let i=0;i<3;i++)setTimeout(()=>{if(mode!=='play')return;try{sfx.bell();}catch(e){}hear(BELL,999);},i*2600);msg('The chapel bell is tolling by itself. '+(t<300?'One o’clock.':'Three o’clock.')+' It will go to the bell — move while it does.',5);caption('the bell tolls');}}
 // rats
 ratT-=dt;if(ratT<=0){ratT=rr(28,55);const r=rats.find(q=>q.t<=0);if(r){const a=P.yaw+rr(-.5,.5),fx=-Math.sin(a),fz=-Math.cos(a),sx=Math.cos(a),sz=-Math.sin(a),d=rr(3.5,6);r.x0=P.x+fx*d-sx*4;r.z0=P.z+fz*d-sz*4;r.x1=P.x+fx*d+sx*4;r.z1=P.z+fz*d+sz*4;r.t=1.5;r.g.visible=true;r.g.rotation.y=Math.atan2(r.x1-r.x0,r.z1-r.z0);try{tone({f:3200,f2:2600,g:.04,dur:.12});tone({f:3400,f2:2800,g:.03,dur:.1,at:.25});}catch(e){}caption('rats squeaking');}}
 for(const r of rats){if(r.t<=0)continue;r.t-=dt;const k=1-r.t/1.5;r.g.position.set(r.x0+(r.x1-r.x0)*k,Math.abs(Math.sin(k*40))*.02,r.z0+(r.z1-r.z0)*k);if(r.t<=0)r.g.visible=false;}
 // knocking from under the graves
 knockT-=dt;if(knockT<=0){knockT=rr(25,60);let near=null;for(const t of tombs){if(Math.hypot(t.x-P.x,t.z-P.z)<2.4){near=t;break;}}if(near&&!P.hidden){const d=makePan(near.x,-.5,near.z);for(let i=0;i<3;i++)try{nz({type:'lowpass',f:220,g:.6,dur:.09,at:i*.32,dest:d||master});}catch(e){}caption('knocking — from under the ground');if(!TH.knock){TH.knock=1;setTimeout(()=>msg('Someone knocked. From under the grave.',3),900);}}else knockT=rr(6,12);}
 // it stands all the way up
 if(!monDead&&M.state==='search'&&!(M.tall>0)){M.tallCd=(M.tallCd===undefined?rr(15,30):M.tallCd)-dt;if(M.tallCd<=0){M.tallCd=rr(50,90);M.tall=3.4;M.rearT=3.4;const pd=Math.hypot(mon.position.x-P.x,mon.position.z-P.z);if(pd<30){caption('it is standing up');if(!TH.tall){TH.tall=1;msg('It stood up. All the way up. It is so tall.',3.5);}}}}
 // your own body
 for(const c of corpses){if(c.g.visible&&!c.seen&&Math.hypot(c.g.position.x-P.x,c.g.position.z-P.z)<3.2){c.seen=1;msg('It’s you. Your coat. Your lantern. Your face — torn open. This is where it got you last night.',5);try{sfx.sting(.5);}catch(e){}}}
 // pet cemetery whimper
 if(Math.hypot(PETS.x-P.x,PETS.z-P.z)<9){PETS.t=(PETS.t||0)-dt;if(PETS.t<=0){PETS.t=rr(14,26);const d=makePan(PETS.x,.3,PETS.z);for(let i=0;i<2;i++)try{vox({f:rr(700,900),f2:rr(400,500),dur:.5,g:.07,fm:[1200,2400],q:4,br:.6,at:i*.7,dest:d||master});}catch(e){}caption('a dog whimpering, somewhere close');}}
 {const ic=inCrypt();if(ic&&!VIS.inC&&R()<.4){const d=makePan(P.x,.5,P.z);try{nz({type:'lowpass',f:320,f2:110,g:.55,dur:1.6,dest:d||master});}catch(e){}caption('stone scraping — a coffin lid is sliding');if(!TH.lid){TH.lid=1;setTimeout(()=>msg('One of the coffin lids just moved. By itself.',3),700);}}VIS.inC=ic;}
 VIS.t-=dt;if(VIS.t<=0&&!CAT.on){VIS.t=.6;const gi2=Math.floor((P.x+H)/(2*H)*VIS.n),gj2=Math.floor((P.z+H)/(2*H)*VIS.n);for(let a=-1;a<=1;a++)for(let b=-1;b<=1;b++){const i=gi2+a,j=gj2+b;if(i>=0&&j>=0&&i<VIS.n&&j<VIS.n)VIS.g[j*VIS.n+i]=1;}}
 if(MOD.endless&&elapsed>300)award('endless5');
 // the answering machine light
 if(AM.led)AM.led.visible=AM.n<AMSG.length&&Math.sin(elapsed*5)>0;}
let moonBase=.38,FOGB=.05;const VIS={n:44,g:new Uint8Array(44*44),t:0,inC:false};

// ---- lantern colours unlocked by achievements ----
const LAMPC=[['warm','Warm (default)',0xffa860,0xff9a3a,null],['blue','Cold blue — kill the crawler',0x8ab8ff,0x6aa0ff,'kill'],['green','Swamp green — survive until dawn',0x9cff8a,0x70e060,'dawn'],['white','Bone white — reach night 5',0xf0f0ff,0xe0e0f0,'night5'],['red','Blood red — the secret ending',0xff5040,0xff3020,'nuke']];
let lampSel='warm';try{lampSel=localStorage.getItem('crawler_lamp')||'warm';}catch(e){}let LGLASS=null;
function applyLamp(){const c=LAMPC.find(q=>q[0]===lampSel&&(!q[4]||ach[q[4]]))||LAMPC[0];lamp.color.setHex(c[2]);if(!LGLASS)lantern.traverse(o=>{if(o.isMesh&&o.material&&o.material.color&&o.material.color.getHex&&o.material.color.getHex()===0xff9a3a)LGLASS=o;});if(LGLASS)LGLASS.material.color.setHex(c[3]);}
function fillLampSel(){const el=$('lampc');if(!el)return;el.innerHTML=LAMPC.map(q=>'<option value="'+q[0]+'"'+(q[4]&&!ach[q[4]]?' disabled':'')+(q[0]===lampSel?' selected':'')+'>'+q[1]+(q[4]&&!ach[q[4]]?' 🔒':'')+'</option>').join('');}
function renderStats(){const el=$('stats');if(!el)return;const m=v=>Math.floor(v/60)+':'+String(Math.floor(v%60)).padStart(2,'0');let eb=0;try{eb=+localStorage.getItem('crawler_endless')||0;}catch(e){}
 el.innerHTML=[['Games started',STATS.games||0],['Escapes',STATS.escapes||0],['Deaths',STATS.deaths||0],['Times it heard you',STATS.heard||0],['Distance walked',Math.round(STATS.dist||0)+' m'],['Played dead and lived',STATS.pd||0],['Journals read',STATS.journals||0],['Longest night',m(STATS.longest||0)],['Endless best',m(eb)]].map(q=>'<li>'+q[0]+': <b>'+q[1]+'</b></li>').join('');}

// ===================== CATACOMBS (down the well) =====================
const CAT={x0:H+16,z0:-12,cs:3.4,n:7,on:false,monIn:false,followT:0,backT:0,burned:false,pass:null,ent:[0,3],far:null,dead:[]};
const catC=(i,j)=>({x:CAT.x0+(i+.5)*CAT.cs,z:CAT.z0+(j+.5)*CAT.cs});
function inCatXZ(x,z){return x>CAT.x0-1&&x<CAT.x0+CAT.n*CAT.cs+1&&z>CAT.z0-1&&z<CAT.z0+CAT.n*CAT.cs+1;}
function catCell(x,z){return [Math.max(0,Math.min(CAT.n-1,Math.floor((x-CAT.x0)/CAT.cs))),Math.max(0,Math.min(CAT.n-1,Math.floor((z-CAT.z0)/CAT.cs)))];}
(function(){const N=CAT.n,pass={};const key=(a,b,c,d)=>a<c||(a===c&&b<d)?a+','+b+'|'+c+','+d:c+','+d+'|'+a+','+b;CAT.key=key;const seen=new Set(),st=[[0,3]];seen.add('0,3');
 while(st.length){const [i,j]=st[st.length-1];const nb=[[1,0],[-1,0],[0,1],[0,-1]].map(d=>[i+d[0],j+d[1]]).filter(q=>q[0]>=0&&q[1]>=0&&q[0]<N&&q[1]<N&&!seen.has(q[0]+','+q[1]));
  if(!nb.length){st.pop();continue;}const q=nb[(R()*nb.length)|0];pass[key(i,j,q[0],q[1])]=1;seen.add(q[0]+','+q[1]);st.push(q);}
 for(let k=0;k<6;k++){const i=(R()*(N-1))|0,j=(R()*N)|0;pass[key(i,j,i+1,j)]=1;}CAT.pass=pass;
 // distances from the entrance
 const dist={};const qq=[[0,3]];dist['0,3']=0;while(qq.length){const [i,j]=qq.shift();for(const d of [[1,0],[-1,0],[0,1],[0,-1]]){const a=i+d[0],b=j+d[1];if(a<0||b<0||a>=N||b>=N)continue;if(!pass[key(i,j,a,b)]||dist[a+','+b]!==undefined)continue;dist[a+','+b]=dist[i+','+j]+1;qq.push([a,b]);}}
 let far=[0,3],fd=0;for(const k in dist)if(dist[k]>fd){fd=dist[k];far=k.split(',').map(Number);}CAT.far=far;
 for(let i=0;i<N;i++)for(let j=0;j<N;j++){let n=0;for(const d of [[1,0],[-1,0],[0,1],[0,-1]])if(pass[key(i,j,i+d[0],j+d[1])])n++;if(n===1&&!(i===0&&j===3)&&!(i===far[0]&&j===far[1]))CAT.dead.push([i,j]);}
 // build walls (one instanced mesh), floor, ceiling
 const sm2=new T.MeshStandardMaterial({map:TS.map,normalMap:TS.nor,roughness:.95,color:0x5c5850}),walls=[],t=.36,h=2.8,cs=CAT.cs;
 const addW=(x0,z0,x1,z1)=>{walls.push([x0,z0,x1,z1]);boxes.push({x0:Math.min(x0,x1),x1:Math.max(x0,x1),z0:Math.min(z0,z1),z1:Math.max(z0,z1)});};
 for(let i=0;i<N;i++)for(let j=0;j<N;j++){const x=CAT.x0+i*cs,z=CAT.z0+j*cs;
  if(i===N-1||!pass[key(i,j,i+1,j)])addW(x+cs-t/2,z-t/2,x+cs+t/2,z+cs+t/2);if(j===N-1||!pass[key(i,j,i,j+1)])addW(x-t/2,z+cs-t/2,x+cs+t/2,z+cs+t/2);
  if(i===0)addW(x-t/2,z-t/2,x+t/2,z+cs+t/2);if(j===0)addW(x-t/2,z-t/2,x+cs+t/2,z+t/2);}
 const im=new T.InstancedMesh(new T.BoxGeometry(1,1,1),sm2,walls.length),o=new T.Object3D();walls.forEach((w,k)=>{o.position.set((w[0]+w[2])/2,h/2,(w[1]+w[3])/2);o.scale.set(Math.abs(w[2]-w[0]),h,Math.abs(w[3]-w[1]));o.updateMatrix();im.setMatrixAt(k,o.matrix);});im.receiveShadow=true;scene.add(im);
 const W2=N*cs,fl=new T.Mesh(new T.PlaneGeometry(W2+2,W2+2),new T.MeshStandardMaterial({map:TS.map,normalMap:TS.nor,roughness:.7,color:0x2c2824}));fl.rotation.x=-Math.PI/2;fl.position.set(CAT.x0+W2/2,.03,CAT.z0+W2/2);fl.receiveShadow=true;scene.add(fl);
 const ce=new T.Mesh(new T.PlaneGeometry(W2+2,W2+2),new T.MeshStandardMaterial({map:TS.map,roughness:1,color:0x1c1a17,side:T.DoubleSide}));ce.rotation.x=Math.PI/2;ce.position.set(CAT.x0+W2/2,h,CAT.z0+W2/2);scene.add(ce);
 BLD.push({x0:CAT.x0-1,x1:CAT.x0+W2+1,z0:CAT.z0-1,z1:CAT.z0+W2+1,cat:1});
 // skulls in the walls, bones on the floor, candles
 const bm=new T.MeshStandardMaterial({color:0xb8ae98,roughness:.7}),sk=new T.InstancedMesh(new T.SphereGeometry(.11,9,7),bm,70);let sc=0;
 for(let k=0;k<70;k++){const w=walls[(R()*walls.length)|0],hz=Math.abs(w[2]-w[0])>Math.abs(w[3]-w[1]);const along=R();o.position.set(hz?w[0]+(w[2]-w[0])*along:(w[0]+w[2])/2+(R()<.5?-.2:.2),rr(.3,2.3),hz?(w[1]+w[3])/2+(R()<.5?-.2:.2):w[1]+(w[3]-w[1])*along);o.scale.set(1,.9,1.15);o.rotation.set(0,R()*6,0);o.updateMatrix();sk.setMatrixAt(sc++,o.matrix);}scene.add(sk);
 for(let k=0;k<26;k++){const c=catC((R()*N)|0,(R()*N)|0),b=cyl(.022,.018,rr(.25,.45),c.x+rr(-1.2,1.2),.04,c.z+rr(-1.2,1.2),bm,5);b.rotation.set(Math.PI/2,0,R()*6);scene.add(b);}
 CAT.lights=[];[[1,3],[3,1],[3,5],[5,3],far].forEach((q,k)=>{const c=catC(q[0],q[1]);const g=glow(c.x+1.2,1.1,c.z+1.2,0xffb050,.35,.9);g.material.fog=true;const L=k<3||q===far?new T.PointLight(0xff9a40,.9,8,1.8):null;if(L){L.position.set(c.x+1.1,1.2,c.z+1.1);L.visible=false;scene.add(L);}CAT.lights.push({g,L});});
 // the ladder back up
 const ec=catC(0,3),lw=woodM||ironM;[-.25,.25].forEach(dz=>{scene.add(cyl(.03,.03,2.8,ec.x-CAT.cs/2+.35,1.4,ec.z+dz,lw,6));});for(let k=0;k<8;k++){const r=cyl(.02,.02,.5,ec.x-CAT.cs/2+.35,.3+k*.33,ec.z,lw,5);r.rotation.x=Math.PI/2;scene.add(r);}
 // Elias's coffin in the farthest chamber
 const fc=catC(far[0],far[1]);const cof=new T.Group();cof.position.set(fc.x,0,fc.z);const cw=new T.MeshStandardMaterial({color:0x3a2a1c,roughness:.85});cof.add(bx(.7,.45,1.9,0,.23,0,cw));const lid=bx(.74,.06,1.94,0,.48,0,cw);lid.rotation.z=.06;cof.add(lid);
 for(let k=0;k<6;k++)cof.add(cyl(.02,.02,.3,rr(-.25,.25),.5,rr(-.8,.8),bm,5));scene.add(cof);circles.push({x:fc.x,z:fc.z,r:.9});CAT.cof=cof;CAT.fire=[];})();
function catPath(sx,sz,tx,tz){const N=CAT.n,[si,sj]=catCell(sx,sz);let [ti,tj]=catCell(Math.max(CAT.x0+.2,Math.min(CAT.x0+N*CAT.cs-.2,tx)),Math.max(CAT.z0+.2,Math.min(CAT.z0+N*CAT.cs-.2,tz)));
 const prev={},qq=[[si,sj]];prev[si+','+sj]=null;while(qq.length){const [i,j]=qq.shift();if(i===ti&&j===tj)break;for(const d of [[1,0],[-1,0],[0,1],[0,-1]]){const a=i+d[0],b=j+d[1];if(a<0||b<0||a>=N||b>=N||prev[a+','+b]!==undefined||!CAT.pass[CAT.key(i,j,a,b)])continue;prev[a+','+b]=[i,j];qq.push([a,b]);}}
 if(prev[ti+','+tj]===undefined)return null;const out=[];let c=[ti,tj];while(c){out.unshift(catC(c[0],c[1]));c=prev[c[0]+','+c[1]];}out[0]={x:sx,z:sz};if(inCatXZ(tx,tz))out.push({x:tx,z:tz});return out;}
function catRandCell(){return catC((R()*CAT.n)|0,(R()*CAT.n)|0);}
function catAmb(on){try{CAT.lights.forEach(l=>{if(l.L)l.L.visible=!!on&&!UG.on;});}catch(e){}if(on){hemi.intensity=hemiBase=.05;moon.intensity=0;scene.fog.color.setHex(0x040302);scene.fog.density=.085;}else{hemiBase=MOD.winter?.38:.27;hemi.intensity=hemiBase;moon.intensity=moonBase;applyMods();scene.fog.density=FOGB;}}
function enterCat(){if(mode!=='play')return;const f=$('fade');f.style.opacity=1;sfx.creak();try{nz({type:'lowpass',f:300,g:.5,dur:.4,at:.6});}catch(e){}
 setTimeout(()=>{const c=catC(0,3);P.x=c.x;P.z=c.z;P.yaw=-Math.PI/2;P.pitch=0;CAT.on=true;catAmb(true);if(!monDead&&!CAT.monIn&&!D.practice)CAT.followT=rr(30,50);f.style.opacity=0;
  msg(CAT.burned?'The catacombs. Its nest is ash now — it has nowhere left to rest.':'You climb down the rope into the catacombs. Bones in every wall. Something down here is very old — and the crawler can follow you.',6);award('cat');},700);}
function exitCat(){const f=$('fade');f.style.opacity=1;sfx.creak();setTimeout(()=>{P.x=WELL.x+1.6;P.z=WELL.z+.4;P.yaw=Math.PI/2;CAT.on=false;CAT.followT=0;catAmb(false);f.style.opacity=0;msg('You climb back out of the well.',2.5);if(CAT.monIn)CAT.backT=rr(18,30);},700);}
function updCat(dt){if(mode!=='play')return;
 if(CAT.on&&CAT.followT>0&&!monDead){CAT.followT-=dt;if(CAT.followT<=0){const c=catC(0,3);mon.position.set(c.x+.8,0,c.z);CAT.monIn=true;M.state='search';M.center.set(c.x,0,c.z);M.target.set(c.x+3,0,c.z);M.timer=10;M.path=null;sfx.crash();setTimeout(()=>{try{sfx.scrabble();}catch(e){}},400);caption('something dropped down the well');msg('Something just dropped down the well behind you.',4);}}
 if(!CAT.on&&CAT.monIn){CAT.backT-=dt;if(CAT.backT<=0){CAT.monIn=false;mon.position.set(WELL.x-1.6,0,WELL.z);M.state='search';M.center.set(WELL.x,0,WELL.z);M.timer=8;M.path=null;if(Math.hypot(P.x-WELL.x,P.z-WELL.z)<35){caption('something climbing out of the well');msg('Something is climbing out of the well.',3.5);}}}
 if(CAT.on){CAT.lights.forEach((l,k)=>{const f=.75+Math.sin(elapsed*9+k)*.12+R()*.1;if(l.L)l.L.intensity=.9*f;l.g.material.opacity=.8*f;});
  for(const f of CAT.fire){f.t-=dt;f.g.material.opacity=Math.max(0,Math.min(.9,f.t*.1))*(0.7+R()*.3);}}}
function catLoot(){const used=new Set();const pick=()=>{const c=CAT.dead.filter(q=>!used.has(q+''));if(!c.length)return null;const q=c[(R()*c.length)|0];used.add(q+'');return catC(q[0],q[1]);};
 ['holy','oil','cam'].forEach(t=>{const c=pick();if(c)addPick(t,c.x+rr(-.6,.6),c.z+rr(-.6,.6));});}
function burnElias(){if(inv.fire>0)inv.fire--;else if(inv.flare>0)inv.flare--;else return;CAT.burned=true;hud();sfx.whoosh();const c=catC(CAT.far[0],CAT.far[1]);
 for(let k=0;k<8;k++){const g=glow(c.x+rr(-.3,.3),rr(.5,1.2),c.z+rr(-.8,.8),0xff7020,rr(.5,.9),.9);CAT.fire.push({g,t:40});}
 setTimeout(()=>{try{sfx.screech();sfx.screech();}catch(e){}shakeT=.6;caption('a scream from everywhere at once — its nest is burning');},900);M.weak=1;
 lore('nest');setTimeout(()=>{if(mode==='play'&&CAT.on)flashback1987();},14000);readNote('SCRATCHED INSIDE THE LID — BEFORE IT CHANGED','I am still alive. I can hear Voss up there.\nMy eyes are going white. I am so hungry. I keep crawling back into this box to sleep — it is the only thing that still feels like mine.\nIf anyone finds this place: burn it. Without somewhere to rest, the thing I am turning into will be weaker.\nTell Annie I heard the bell. Every time.');award('elias');}
// ===================== TUTORIAL NIGHT =====================
const TUT={on:false,step:0,mk:null,txt:'',t:0,base:null,sawInv:0,thrown:0,near:0,hold:true};
function tutMark(x,z){if(!TUT.mk){TUT.mk=glow(0,1,0,0x9fd0ff,1.1,.85);TUT.mk.material.fog=false;}TUT.mk.position.set(x,1,z);TUT.mk.visible=true;TUT.mx=x;TUT.mz=z;}
function tutFree(x,z){for(let q=0;q<40;q++){if(clear(x,z,.6)&&!blocked(x,z,.5))return [x,z];x+=rr(-2,2);z+=rr(-2,2);}return [x,z];}
function tutStart(){TUT.on=true;TUT.step=0;TUT.t=0;TUT.sawInv=0;TUT.thrown=0;TUT.near=0;TUT.hold=true;mon.visible=false;stones=Math.max(stones,3);
 secT=1e9;WG.cd=1e9;PH.cd=1e9;stormT=1e9;FAKEU=1;PDU=1;M.mimT=1e9;bellDone={173:1,440:1};eventT=1e9;tipI=TIPS.length;const f=tutFree(P.x,P.z-7);tutMark(f[0],f[1]);
 TUT.txt='TUTORIAL 1/7 — Walk with W A S D (look with the mouse). Walk to the blue light.';}
function tutNext(){TUT.step++;TUT.t=0;sfx.paper&&sfx.paper();const s2=TUT.step;
 if(s2===1){const f=tutFree(P.x+4,P.z-5);tutMark(f[0],f[1]);TUT.txt='TUTORIAL 2/7 — Press C to SNEAK. Sneaking makes no sound. Sneak to the next light.';}
 else if(s2===2){TUT.mk.visible=false;TUT.txt='TUTORIAL 3/7 — Pick up the map (walk to it, press E). It is on the path where you started.';const mp=picks.find(k=>k.type==='map');if(mp&&!mp.taken)tutMark(mp.x,mp.z);}
 else if(s2===3){TUT.mk.visible=false;TUT.txt='TUTORIAL 4/7 — Press TAB to open your bag (map, items, every control). Press TAB again to close it.';}
 else if(s2===4){TUT.hold=false;mon.visible=true;stones=Math.max(stones,3);const fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw);const f=tutFree(P.x+fx*24,P.z+fz*24);mon.position.set(f[0],0,f[1]);M.state='wander';M.target.set(P.x,0,P.z);M.timer=20;M.path=null;
  TUT.txt='TUTORIAL 5/7 — THAT is the crawler. It is blind. Press T to throw a stone far to the side — it goes to the sound, not to you.';msg('It is blind. It only hears.',3);}
 else if(s2===5){let best=null,bd=1e9;for(const h of HIDES){if(h.off||h.grave)continue;const d=Math.hypot(h.ex-P.x,h.ez-P.z);if(d<bd){bd=d;best=h;}}TUT.hide=best;if(best)tutMark(best.ex,best.ez);TUT.txt='TUTORIAL 6/7 — Now HIDE. Go to the blue light (a hiding place) and press E. Sneak the last steps.';}
 else if(s2===6){TUT.mk.visible=false;const h=TUT.hide||{ex:P.x,ez:P.z};const a=R()*6.28;mon.position.set(h.ex+Math.cos(a)*16,0,h.ez+Math.sin(a)*16);M.state='search';M.center.set(h.ex,0,h.ez);M.target.set(h.ex,0,h.ez);M.timer=9;M.path=null;TUT.near=0;
  TUT.txt='TUTORIAL 7/7 — It is coming to check. When it is close, HOLD SPACE to hold your breath. Let go only when it leaves.';}
 else if(s2===7){TUT.txt='You know the basics. Get out of the hiding place (E)…';setTimeout(tutDone,3500);}}
function tutDone(){if(!TUT.on)return;TUT.on=false;if(TUT.mk)TUT.mk.visible=false;mode='win';try{if(document.exitPointerLock)document.exitPointerLock();}catch(e){}$('winh').textContent='TUTORIAL COMPLETE';
 $('winsub').textContent='You know how to move, sneak, throw, hide and hold your breath. Now find the generators, the keys or the truck — and get out.';$('winstat').textContent='PLAY AGAIN starts a real night on Normal. (You can pick Easy on the start screen.)';$('win').style.display='flex';D=DIFF[1];award('tut');}
function tutCaught(){P.hidden=null;P.down=false;$('down').style.display='none';const a=R()*6.28;const f=tutFree(P.x+Math.cos(a)*24,P.z+Math.sin(a)*24);mon.position.set(f[0],0,f[1]);M.state='wander';M.timer=0;M.path=null;M.wind=0;
 msg('It got you. On a real night that is death — here you just try again.',4);if(TUT.step>=6){TUT.step=4;tutNext();}}
function updTut(dt){if(!TUT.on)return;if(mode==='inv')TUT.sawInv=1;if(mode!=='play')return;TUT.t+=dt;const s2=TUT.step,dm=TUT.mk&&TUT.mk.visible?Math.hypot(P.x-TUT.mx,P.z-TUT.mz):99;
 if(TUT.mk&&TUT.mk.visible)TUT.mk.material.opacity=.6+Math.sin(elapsed*4)*.25;
 if(s2===0&&dm<1.6)tutNext();
 else if(s2===1&&dm<1.6){if(P.sneak)tutNext();else if(TUT.t-(TUT.w||0)>3){TUT.w=TUT.t;msg('Press C first — then walk to the light. Watch YOUR NOISE stay empty.',3);}}
 else if(s2===2&&inv.map)tutNext();
 else if(s2===3&&TUT.sawInv)tutNext();
 else if(s2===4){if(stones<TUT.st0||0)TUT.thrown=1;if(TUT.st0===undefined)TUT.st0=stones;if(stones<TUT.st0){TUT.thrown=1;}if(TUT.thrown&&!TUT.tt)TUT.tt=TUT.t;if(TUT.tt&&TUT.t-TUT.tt>3.5){msg('See? It went to the stone.',3);tutNext();}}
 else if(s2===5&&P.hidden)tutNext();
 else if(s2===6){const d=Math.hypot(mon.position.x-P.x,mon.position.z-P.z);if(!P.hidden&&TUT.t>2){TUT.step=4;tutNext();msg('Get back into a hiding place.',2.5);return;}if(d<5)TUT.near=1;if((TUT.near&&d>10)||TUT.t>22)tutNext();}}


// ===================== WHO SHE IS / WHAT VOSS HID =====================
// Annie's grave beside the bell
const AGRAVE={x:BELL.x+2.6,z:BELL.z+1.8};
(function(){for(let q=0;q<40&&!clear(AGRAVE.x,AGRAVE.z,.7);q++){AGRAVE.x=BELL.x+rr(-4,4);AGRAVE.z=BELL.z+rr(-4,4);}
 const plate=tex(256,(x,s2)=>{x.drawImage(TS.canvas,0,0,s2,s2);x.fillStyle='#15130f';x.textAlign='center';x.font='bold 30px Georgia';x.fillText('ANNIE',s2/2,70);x.fillText('MARROW',s2/2,104);x.font='22px Georgia';x.fillText('1979 – 1987',s2/2,140);x.font='italic 17px Georgia';x.fillText('she rang the bell',s2/2,178);x.fillText('for nine nights',s2/2,200);
  x.strokeStyle='#15130f';x.lineWidth=2;x.beginPath();x.arc(s2/2,36,12,0,7);x.stroke();},0);
 const g=new T.Group();g.position.set(AGRAVE.x,0,AGRAVE.z);const sm2=new T.MeshStandardMaterial({map:plate,normalMap:TS.nor,roughness:.9,color:0xb0aca0});
 const st=new T.Mesh(new T.BoxGeometry(.42,.56,.08),[new T.MeshStandardMaterial({map:TS.map,roughness:.95}),new T.MeshStandardMaterial({map:TS.map,roughness:.95}),new T.MeshStandardMaterial({map:TS.map,roughness:.95}),new T.MeshStandardMaterial({map:TS.map,roughness:.95}),sm2,new T.MeshStandardMaterial({map:TS.map,roughness:.95})]);st.position.y=.28;st.rotation.x=-.05;g.add(st);
 const fm=new T.MeshStandardMaterial({color:0xe8e2d8,roughness:.6});for(let k=0;k<5;k++){const f=cyl(.004,.004,.18,rr(-.12,.12),.09,.14+rr(0,.06),new T.MeshStandardMaterial({color:0x2a4a20}),4);f.rotation.z=rr(-.4,.4);g.add(f);const b=new T.Mesh(new T.SphereGeometry(.022,6,5),fm);b.position.set(f.position.x,.19,f.position.z);g.add(b);}
 g.rotation.y=Math.atan2(BELL.x-AGRAVE.x,BELL.z-AGRAVE.z)+Math.PI;g.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});scene.add(g);circles.push({x:AGRAVE.x,z:AGRAVE.z,r:.35});})();
acts.push({x:AGRAVE.x,z:AGRAVE.z,r:1.6,hold:0,label:()=>'Read the little grave by the bell',can:()=>true,done(){lore('agrave');
 readNote('A CHILD’S GRAVE','ANNIE MARROW · 1979 – 1987\n“she rang the bell for nine nights”\n\nThe letters were cut by hand, not by a stonemason. The flowers are fresh. Someone still brings them.\n\nThe town was told she went to live with her aunt. She never left Hollow Rest.');
 setTimeout(()=>{if(mode==='play')msg('Annie Marrow. Eight years old. Somebody still brings her flowers.',5);},2500);}});
// Margaret, bricked into the catacombs: what Voss was hiding
const MARG={cell:null};
(function(){const q=CAT.dead.find(d=>!(d[0]===0&&d[1]===3))||[CAT.n-1,0];MARG.cell=q;CAT.dead=CAT.dead.filter(d=>d!==q);const c=catC(q[0],q[1]);
 const bm=new T.MeshStandardMaterial({color:0xb8ae98,roughness:.7}),g=new T.Group();g.position.set(c.x,0,c.z);
 const sk=new T.Mesh(new T.SphereGeometry(.1,10,8),bm);sk.scale.set(1,.9,1.15);sk.position.set(0,.55,0);g.add(sk);
 for(let k=0;k<5;k++){const r=cyl(.012,.012,.32,0,.32-k*.06,0,bm,5);r.rotation.z=Math.PI/2;g.add(r);}g.add(cyl(.03,.025,.42,0,.2,0,bm,6));
 [-1,1].forEach(sd=>{const a=cyl(.014,.012,.36,sd*.15,.25,.08,bm,5);a.rotation.set(.9,0,sd*.3);g.add(a);});
 const ring=new T.Mesh(new T.TorusGeometry(.012,.003,6,12),new T.MeshStandardMaterial({color:0xd8b040,metalness:.95,roughness:.2}));ring.position.set(.12,.06,.22);ring.rotation.x=Math.PI/2;g.add(ring);
 const cloth=new T.Mesh(new T.PlaneGeometry(.6,.5),new T.MeshStandardMaterial({color:0x4a3a4a,roughness:1,side:T.DoubleSide}));cloth.position.set(0,.18,.05);cloth.rotation.x=-1.2;g.add(cloth);
 for(let k=0;k<10;k++){g.add(bx(.22,.1,.12,rr(-.6,.6),rr(.05,.9),-.5+rr(-.05,.05),new T.MeshStandardMaterial({map:TS.map,color:0x6a4a3a,roughness:.95})));}
 scene.add(g);})();
acts.push({get x(){return catC(MARG.cell[0],MARG.cell[1]).x;},get z(){return catC(MARG.cell[0],MARG.cell[1]).z+.9;},r:1.5,hold:0,label:()=>'Look at the bones behind the broken bricks',can:()=>true,done(){lore('margaret');
 readNote('BEHIND THE BRICKS','Someone bricked up this alcove in a hurry. Part of the wall has been clawed away from the other side.\n\nA woman’s skeleton in a rotted purple dress. On her finger, a gold ring. Engraved inside it:\n\n“H.V. & M.V. — 1961”\n\nMargaret Voss did not run away in 1986. This is what Elias Marrow found while he was digging under the chapel. This is why Henry Voss cut the props.');award('margaret');}});

// ===================== MORE STORY =====================
const LORE={};const LORE_ALL=[['underway','The Underway'],['ugledger','The smuggler\u2019s ledger'],['cell','Elias\u2019s cell — the last tape'],['watchmen','The watchmen\u2019s lanterns'],['photos','Old photographs'],['egrave','Elias\u2019s unmarked grave'],['desk','Voss\u2019s desk'],['tapes','Elias\u2019s tapes'],['letters','Letters from Gravedigger\u2019s Row'],['hermit','The hermit\u2019s journal'],['vault','The Voss family records'],['lockbox','The lockbox in the reeds'],['freight','The midnight freight ledger'],['pages','The six torn pages'],['letter','Annie’s letter'],['j1','Watchman’s journal 1962'],['j2','Watchman’s journal 1979'],['j3','Watchman’s journal 2003'],['am','Voss’s answering machine'],['news','The soaked newspaper'],['posters','The missing posters'],['nest','Scratched inside the lid'],['ledger','Voss’s ledger'],['tom','Old Tom\u2019s story'],['agrave','The little grave by the bell'],['margaret','What Voss was hiding'],['annie','What the crying girl asked for'],['flash','October 1987']];
function lore(k){if(!LORE[k]){LORE[k]=1;try{localStorage.setItem('crawler_lore',JSON.stringify(Object.assign(JSON.parse(localStorage.getItem('crawler_lore')||'{}'),{[k]:1})));}catch(e){}}}
// ---- the Weeping Girl ----
const ANNIE={step:0,said:0};
function annieGive(){if(!dbgUsed&&!D.practice)award('secret');inv.secret=false;ANNIE.step=1;WG.scr=true;WG.t=Math.min(WG.t,18);lore('annie');const d=girlPan();if(d){for(let i=0;i<10;i++)try{vox({f:rr(330,420),f2:rr(300,380),dur:rr(.12,.24),g:.12,fm:[900,1600],q:5,br:.4,at:i*.26,dest:d});}catch(e){}}
 readNote('THE CRYING GIRL','She stops crying. She takes the letter with both hands and holds it against her chest.\n\n\u201cHe can\u2019t hear the bell any more. It\u2019s too loud up here, and he\u2019s so hungry.\u201d\n\n\u201cRing it for me? Just once. He always comes when I ring it. He just sits and listens.\u201d\n\nThen she is not there any more.');
 setTimeout(()=>{girl.visible=false;WG.on=false;WG.cd=1e9;},2500);msg('Ring the bell. Once.',5);}
function annieBell(){if(ANNIE.step!==1)return;ANNIE.step=2;M.calm=70;if(!monDead){M.state='search';M.center.set(BELL.x,0,BELL.z);M.target.set(BELL.x+1.5,0,BELL.z);M.timer=70;M.path=null;}
 setTimeout(()=>{if(mode==='play')msg('It comes to the bell — and it just sits there. Listening. Like it is waiting for someone. For a minute, nothing hunts you.',6);},5000);award('annie');}
// ---- Old Tom, who never left ----
const TOM={x:CRYPTS[3][0]+1.15,z:CRYPTS[3][1]-1.5,n:0,g:null,talkT:0};
(function(){const g=humanize(mkZombie(),{beard:1,hair:0xb8b6b0,coat:0x4a4436,skin:0xa89482,long:1}),cm=new T.MeshStandardMaterial({map:clothT,color:0x4a4436,roughness:.95}),sk=new T.MeshStandardMaterial({map:skinT,normalMap:TK.nor,color:0xa89482,roughness:.75});
 g.traverse(o=>{if(!o.isMesh)return;if(o.material===clothM)o.material=cm;else if(o.material===zskinM)o.material=sk;});const u=g.userData;u.ll.rotation.x=-1.4;u.rl.rotation.x=-1.3;u.la.rotation.set(.9,0,.3);u.ra.rotation.set(1,0,-.3);u.hd.rotation.set(.35,0,0);
 g.position.set(TOM.x,-.42,TOM.z);g.rotation.y=-Math.PI/2+.3;scene.add(g);TOM.g=g;circles.push({x:TOM.x,z:TOM.z,r:.42});})();
const TOMSAY=[
 ['OLD TOM','“Shh. SHH. Get down. You’re the new one.”\n\nA filthy old man sits against the wall, knees to his chest. He has not blinked since you came in.\n\n“Tom. Watchman, 2003. Fifth night came and I just… stopped. Stopped walking. Stopped talking. It can’t hear a man who doesn’t make noise. Been down here ever since.”\n\nHe presses a flask into your hand. “Holy water. Voss is scared of it. That should tell you something.”',()=>{inv.holy+=1;}],
 ['OLD TOM','“You feel it, don’t you? Like you’ve walked this path before.”\n\n“Voss keeps a ledger in a lockbox on his table. Every watchman, every season. Read it. Read the last line.”\n\nHe pushes a bent set of lockpicks across the floor.',()=>{inv.pick=true;}],
 ['OLD TOM','\u201cMarrow had a little girl. Annie. Eight years old.\u201d\n\n\u201cNinth night, she climbed the bell tower in the rain so she could ring it louder \u2014 so her papa would hear her down there. She slipped. Voss buried her himself, by the bell, and told the town she went to her aunt\u2019s. Nobody asked twice.\u201d\n\n\u201cAnd there\u2019s a little girl out by the graves some nights, crying into her hands. I don\u2019t know who she is. Don\u2019t look at her. Never look at her. If you\u2019ve got something that was buried \u2014 walk to her BACKWARDS.\u201d\n\nHe hands you a tin of lamp oil.',()=>{inv.oil=Math.min(1,inv.oil+.5);}],
 ['OLD TOM','“Go on. Before it hears the both of us.”\n\nHe goes back to staring at the wall.',null]];
function talkTom(){const t=TOMSAY[Math.min(TOM.n,TOMSAY.length-1)];if(t[2])t[2]();TOM.n++;hud();readNote(t[0],t[1]);lore('tom');hear(P,3);try{voiceAt(TOM.x,TOM.z,8,105);}catch(e){}}
// ---- Voss's lockbox + lockpicking ----
const LBOX={x:COT.x+.05,z:COT.z-1.85,open:false};
(function(){const g=new T.Group();g.position.set(LBOX.x,.82,LBOX.z);const m=new T.MeshStandardMaterial({color:0x2a2620,metalness:.6,roughness:.45});g.add(bx(.34,.16,.22,0,.08,0,m));g.add(bx(.06,.06,.02,0,.1,.115,new T.MeshStandardMaterial({color:0xb09040,metalness:.85,roughness:.3})));scene.add(g);})();
const PICK={pin:0,pos:0,dir:1,zone:.5,w:.16,el:null};
function openPick(){mode='pick';PICK.pin=0;PICK.pos=0;PICK.dir=1;PICK.zone=rr(.2,.8);PICK.w=.17;try{if(document.exitPointerLock)document.exitPointerLock();}catch(e){}
 if(!PICK.el){const d=document.createElement('div');d.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.72);z-index:28;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#ddd;font-family:Georgia,serif';
  d.innerHTML='<h2 style="letter-spacing:3px;margin:0 0 6px">PICKING THE LOCK</h2><div id="pkpins" style="margin-bottom:14px;font-size:22px"></div><div style="position:relative;width:min(520px,80vw);height:34px;background:#1a1a1a;border:1px solid #555"><div id="pkzone" style="position:absolute;top:0;bottom:0;background:#2f5a2f"></div><div id="pkneedle" style="position:absolute;top:-6px;bottom:-6px;width:4px;background:#e6c27a"></div></div><p style="color:#998;margin-top:14px">Press E / SPACE / tap when the needle is in the green. Miss and the pick CLICKS — loudly. (Esc to stop)</p>';
  d.addEventListener('pointerdown',e=>{e.preventDefault();pickTry();});document.body.appendChild(d);PICK.el=d;}
 PICK.el.style.display='flex';pickDraw();}
function pickDraw(){$('pkpins').textContent='PIN '+'●'.repeat(PICK.pin)+'○'.repeat(3-PICK.pin);const z=$('pkzone');z.style.left=((PICK.zone-PICK.w/2)*100)+'%';z.style.width=(PICK.w*100)+'%';$('pkneedle').style.left=(PICK.pos*100)+'%';}
function updPick(dt){PICK.pos+=PICK.dir*dt*(.55+PICK.pin*.25);if(PICK.pos>1){PICK.pos=1;PICK.dir=-1;}if(PICK.pos<0){PICK.pos=0;PICK.dir=1;}pickDraw();}
function pickTry(){if(mode!=='pick')return;if(Math.abs(PICK.pos-PICK.zone)<PICK.w/2){PICK.pin++;try{tone({f:900+PICK.pin*200,g:.06,dur:.08});}catch(e){}if(PICK.pin>=3){closePick();openLedger();return;}PICK.zone=rr(.15,.85);PICK.w=Math.max(.09,PICK.w-.03);}
 else{try{nz({f:2400,q:4,g:.5,dur:.06});nz({f:1800,q:4,g:.4,dur:.06,at:.08});}catch(e){}noiseLvl=.7;hear(P,15);PICK.pin=Math.max(0,PICK.pin-1);shakeT=.15;}pickDraw();}
function closePick(){if(PICK.el)PICK.el.style.display='none';if(mode==='pick'){mode='play';lockPointer();}}
function openLedger(){LBOX.open=true;sfx.clunk();lore('ledger');award('ledger');
 readNote('VOSS’S LEDGER','One line per season, in the same tight handwriting.\n\n1962 — W. Pryce. Did not see dawn.\n1979 — G. Lusk. Did not see dawn.\n1998 — D. Okafor. Did not see dawn.\n2003 — T. Bell. Still down there somewhere. Leave him.\n2011 — R. Hale. Did not see dawn.\n\nThe last twelve lines are all the same name. Yours.\n\nThe last line is tonight:\n“Same man as last season. And the season before. He never remembers. They never do. Paid in advance.”');
 setTimeout(()=>{if(mode==='play')msg('That is why you wake up every time it kills you. You have been here before. Many times.',6);},13000);}
// ---- the mannequins in the shed ----
const MANQ=[];(function(){const pm=new T.MeshStandardMaterial({color:0xd8cfc0,roughness:.45});[[SH.x+1.1,SH.z+1.5],[SH.x-1.4,SH.z+1.6]].forEach((p,k)=>{const g=mkZombie();g.traverse(o=>{if(o.isMesh)o.material=pm;});const u=g.userData;u.la.rotation.x=.1;u.ra.rotation.x=.1;g.position.set(p[0],0,p[1]);g.rotation.y=Math.PI+(k?.4:-.4);scene.add(g);MANQ.push({g,x:p[0],z:p[1],x0:p[0],z0:p[1],seen:1,moves:0});circles.push(MANQ[k].c={x:p[0],z:p[1],r:.3});});})();
function updManq(dt){if(mode!=='play')return;const fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw);for(const m of MANQ){const dx=m.x-P.x,dz=m.z-P.z,d=Math.hypot(dx,dz);if(d>14)continue;const vis=(dx*fx+dz*fz)/(d||1)>.45&&clearLine(P.x,P.z,m.x,m.z);
  if(!vis&&m.seen&&d<7&&m.moves<4&&R()<dt*1.5){m.seen=0;m.moves++;const nx=m.x+(-dx/d)*.45,nz2=m.z+(-dz/d)*.45;if(!blocked(nx,nz2,.15)||Math.hypot(nx-m.x0,nz2-m.z0)<1.4){m.x=Math.max(SH.x-2,Math.min(SH.x+2,nx));m.z=Math.max(SH.z-2,Math.min(SH.z+2,nz2));}m.g.position.set(m.x,0,m.z);m.c.x=m.x;m.c.z=m.z;m.g.rotation.y=Math.atan2(P.x-m.x,P.z-m.z);const u=m.g.userData;u.la.rotation.x=R()*1.4;u.ra.rotation.x=R()*1.4;u.hd.rotation.set(rr(-.2,.4),rr(-.6,.6),rr(-.4,.4));try{nz({type:'lowpass',f:600,g:.12,dur:.15});}catch(e){}}
  if(vis&&!m.seen){m.seen=1;if(m.moves===1&&!TH.manq){TH.manq=1;msg('Wasn’t that mannequin facing the other way?',3);}}}}
function resetStory(){ANNIE.step=0;M.calm=0;TOM.n=0;LBOX.open=false;MANQ.forEach(m=>{m.x=m.x0;m.z=m.z0;m.moves=0;m.seen=1;m.g.position.set(m.x0,0,m.z0);m.c.x=m.x0;m.c.z=m.z0;});}
// ---- 1987 flashback (plays when the nest burns) ----
let FLASHB=false;function flashback1987(){const c=catC(CAT.far[0],CAT.far[1]);lore('flash');FLASHB=true;
 playCut([{dur:5,sub:'October 1987.',sub2:'Henry Voss saws through the last wooden prop.',start(){try{for(let i=0;i<6;i++)nz({f:rr(800,1400),q:2,g:.25,dur:.18,at:i*.35});}catch(e){}},cam(k){camMove([c.x-1.2,1.6,c.z-1.2],[c.x-.9,1.4,c.z-.6],[c.x,1.6,c.z+2],[c.x,2.4,c.z+1],k);}},
  {dur:4,sub:'The vault comes down on Elias Marrow.',start(){shakeT=1.4;try{nz({type:'lowpass',f:200,f2:60,g:.8,dur:2.5});}catch(e){}},cam(k){camMove([c.x,1.2,c.z-1],[c.x,.6,c.z-.4],[c.x,2.6,c.z],[c.x,.3,c.z],k);}},
  {dur:7,sub:'For nine nights he scratches at the lid, in the dark,',sub2:'listening to his daughter ring the bell.',start(){try{for(let i=0;i<12;i++)nz({f:rr(2000,3200),q:5,g:.18,dur:.05,at:i*rr(.25,.5)});setTimeout(()=>{try{sfx.bell();}catch(e){}},3500);}catch(e){}},cam(k){camMove([c.x+.6,.7,c.z+.2],[c.x+.3,.55,c.z],[c.x,.45,c.z],[c.x,.45,c.z],k);}}],
  ()=>{FLASHB=false;mode='play';lockPointer();});}

// ===================== real 3D model for the zombies (HorrorGameMaker.com, CC0) =====================
const ZMOD={ready:false,src:null,clips:{},sc:1,mat:null};
function inPlace(clip){if(!clip)return clip;for(const t of clip.tracks){if(!/\.position$/.test(t.name))continue;const v=t.values;let mnx=1e9,mxx=-1e9,mnz=1e9,mxz=-1e9;for(let i=0;i<v.length;i+=3){mnx=Math.min(mnx,v[i]);mxx=Math.max(mxx,v[i]);mnz=Math.min(mnz,v[i+2]);mxz=Math.max(mxz,v[i+2]);}
 if(mxx-mnx>8||mxz-mnz>8){const x0=v[0],z0=v[2];for(let i=0;i<v.length;i+=3){v[i]=x0;v[i+2]=z0;}}}return clip;}
function zData(name,cb){try{if(window.ZDATA&&window.ZDATA[name]){cb(window.ZDATA[name]);return;}const sc=document.createElement('script');sc.src='models/z'+name+'.js';sc.onload=()=>{if(window.ZDATA&&window.ZDATA[name])cb(window.ZDATA[name]);};sc.onerror=()=>{mstat('could not load models/z'+name+'.js');};document.head.appendChild(sc);}catch(e){}}
function b64buf(s2){const bin=atob(s2),u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);return u.buffer;}
function mstat(t){if(!/error/i.test(String(t)))return;try{let e=$('mstat');if(!e){e=document.createElement('div');e.id='mstat';e.style.cssText='position:fixed;left:8px;bottom:6px;right:8px;font:12px monospace;color:#cc9;z-index:60;pointer-events:none;white-space:pre-wrap';document.body.appendChild(e);}e.textContent='3D models: '+t;}catch(er){}}
function loadZombieModels(){try{mstat('starting… FBXLoader='+!!T.FBXLoader+' SkeletonUtils='+!!T.SkeletonUtils+' fflate='+(typeof fflate!=='undefined'));if(!T.FBXLoader||!T.SkeletonUtils||typeof fflate==='undefined')return;const L=new T.FBXLoader(),tl=new T.TextureLoader();
 const alb=tl.load('models/zombie_albedo.jpg');alb.encoding=T.sRGBEncoding;const nor=tl.load('models/zombie_normal.jpg');
 ZMOD.mat=new T.MeshStandardMaterial({map:alb,normalMap:nor,roughness:.5,metalness:.05,skinning:true,color:0xb8b8b0});
 mstat('downloading…');zData('walk',d=>{try{tmk('models-dl'),mstat('parsing…');const obj=L.parse(b64buf(d),'');obj.traverse(o=>{if(o.isMesh){o.material=ZMOD.mat;o.castShadow=true;o.receiveShadow=false;o.frustumCulled=false;}});
   obj.updateMatrixWorld(true);const bb=new T.Box3().setFromObject(obj),h=bb.max.y-bb.min.y;ZMOD.sc=h>0?1.85/h:.01;ZMOD.y0=-bb.min.y*ZMOD.sc;
   ZMOD.src=obj;ZMOD.clips.walk=inPlace(obj.animations[0]);attachZombieModels();tmk('models-ready'),mstat('ready');setTimeout(()=>{const e=$('mstat');if(e)e.style.display='none';},3000);
   zData('run',d2=>{try{ZMOD.clips.run=inPlace(L.parse(b64buf(d2),'').animations[0]);attachZombieModels();}catch(e){console.warn(e);}});
   zData('idle',d3=>{try{ZMOD.clips.idle=inPlace(L.parse(b64buf(d3),'').animations[0]);attachZombieModels();}catch(e){console.warn(e);}});
  }catch(e){mstat('error: '+e.message+' @ '+String(e.stack||'').split('\n').slice(1,5).map(l=>l.trim().replace(/https?:[^ )]*\//,'')).join(' | '));}});}catch(e){mstat('error: '+e.message);}}
function attachZombieModels(){if(!ZMOD.src)return;zombies.forEach(z=>{if(!z.m){const m=T.SkeletonUtils.clone(ZMOD.src);m.scale.setScalar(ZMOD.sc);m.position.y=ZMOD.y0||0;m.traverse(o=>{if(o.isMesh){o.material=ZMOD.mat;o.frustumCulled=false;}});
  z.g.children.forEach(c=>{c.visible=false;});z.g.add(m);z.m=m;z.mx=new T.AnimationMixer(m);z.act={};z.cur=null;}
 for(const k of ['walk','run','idle'])if(ZMOD.clips[k]&&!z.act[k]){z.act[k]=z.mx.clipAction(ZMOD.clips[k]);}});ZMOD.ready=true;}
function zPlay(z,k,ts){const a=z.act[k]||z.act.walk;if(!a)return;a.timeScale=ts;if(z.cur===a)return;a.reset().play();if(z.cur)z.cur.crossFadeTo(a,.35,false);z.cur=a;}
function updZombieAnims(dt){if(!ZMOD.ready)return;for(const z of zombies){if(!z.mx||!z.g.visible)continue;const d=Math.hypot(z.x-P.x,z.z-P.z);
 if(z.state==='chase')zPlay(z,d<5&&z.act.run?'run':'walk',d<5?.9:.8);else if(z.state==='stun')zPlay(z,'idle',.35);else if(z.state==='rise')zPlay(z,'idle',1.6);else zPlay(z,'idle',1);
 z.mx.update(dt);z.g.rotation.x*=.3;z.g.rotation.z*=.3;}}

// ---- post-processing: bloom + film grade (Graphics: High) ----
let COMP=null,GRADE=null;
function initPost(){try{if(!T.EffectComposer||!T.UnrealBloomPass||!T.RenderPass||!T.ShaderPass)return;COMP=new T.EffectComposer(renderer);COMP.addPass(new T.RenderPass(scene,camera));
 COMP.addPass(new T.UnrealBloomPass(new T.Vector2(Math.max(256,innerWidth/2),Math.max(256,innerHeight/2)),.4,.45,.85));
 GRADE=new T.ShaderPass({uniforms:{tDiffuse:{value:null},uT:{value:0},uFear:{value:0}},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader:'uniform sampler2D tDiffuse;uniform float uT,uFear;varying vec2 vUv;float hh(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}\n'+
  'void main(){vec2 d=vUv-.5;float ca=.0003+uFear*.006;vec3 c;c.r=texture2D(tDiffuse,vUv+d*ca).r;c.g=texture2D(tDiffuse,vUv).g;c.b=texture2D(tDiffuse,vUv-d*ca).b;'+
  'float l=dot(c,vec3(.299,.587,.114));c=mix(c,vec3(l),.1+uFear*.45);c*=vec3(.95,1.,1.07);c+=vec3(.03,.012,0.)*smoothstep(.3,1.,l);'+
  'float v=smoothstep(.95,.25,length(d*vec2(1.15,1.)));c*=mix(.62,1.,v);c=pow(max(c,vec3(0.)),vec3(1./2.2));c+=(hh(vUv*vec2(1123.,987.)+fract(uT))-.5)*.008;gl_FragColor=vec4(c,1.);}'});
 GRADE.renderToScreen=true;COMP.addPass(GRADE);}catch(e){COMP=null;}}
function renderFrame(now){if(jaw&&jaw.rotation.x>.85&&mode!=='scare'&&mode!=='js'&&mode!=='rip')jaw.rotation.x=.85;if(COMP&&HI&&perfLv<1){try{GRADE.uniforms.uT.value=now*.0007;GRADE.uniforms.uFear.value=fearK;COMP.render();return;}catch(e){COMP=null;}}renderer.render(scene,camera);}
// ---- falling leaves ----
const FLV=[];(function(){const lm=new T.MeshLambertMaterial({color:0x4a3418,side:T.DoubleSide,transparent:true,opacity:.9});const g=new T.PlaneGeometry(.07,.05);for(let i=0;i<(mobile?20:45);i++){const m=new T.Mesh(g,lm);m.position.set(rr(-12,12),rr(0,7),rr(-12,12));scene.add(m);FLV.push({m,vx:rr(-.3,.3),vy:-rr(.25,.5),ph:R()*6,sp:rr(1.5,4)});}})();
// ---- bats ----
const BATS=[];let batT=50;(function(){const bm=new T.MeshBasicMaterial({color:0x080606,side:T.DoubleSide,fog:true});for(let i=0;i<6;i++){const g=new T.Group();g.add(new T.Mesh(new T.SphereGeometry(.05,6,4),bm));const wl=new T.Mesh(new T.PlaneGeometry(.22,.1),bm),wr=new T.Mesh(new T.PlaneGeometry(.22,.1),bm);wl.position.x=-.11;wr.position.x=.11;const pl2=new T.Group(),pr=new T.Group();pl2.add(wl);pr.add(wr);g.add(pl2);g.add(pr);g.visible=false;scene.add(g);BATS.push({g,pl:pl2,pr,t:0,v:new T.Vector3(),ph:R()*6});}})();
function updAmbient(dt){const out=!CAT.on&&!BLD.some(b=>!b.cat&&P.x>b.x0&&P.x<b.x1&&P.z>b.z0&&P.z<b.z1);
 for(const f of FLV){f.m.visible=out&&!MOD.winter;if(!f.m.visible)continue;f.ph+=dt*f.sp;f.m.position.x+=(f.vx+Math.sin(f.ph)*.35)*dt;f.m.position.y+=f.vy*dt;f.m.position.z+=Math.cos(f.ph*.7)*.25*dt;f.m.rotation.set(f.ph,f.ph*.7,f.ph*.3);
  const dx=f.m.position.x-P.x,dz=f.m.position.z-P.z;if(f.m.position.y<.02||Math.abs(dx)>13||Math.abs(dz)>13){f.m.position.set(P.x+rr(-12,12),rr(4,8),P.z+rr(-12,12));}}
 batT-=dt;if(batT<=0&&out&&mode==='play'){batT=rr(60,130);const a=R()*6.28,sx=P.x+Math.cos(a)*18,sz=P.z+Math.sin(a)*18,dir=new T.Vector3(-Math.cos(a)+rr(-.3,.3),0,-Math.sin(a)+rr(-.3,.3)).normalize();
  BATS.forEach((b,i)=>{b.g.position.set(sx+rr(-1.5,1.5),rr(3.5,6),sz+rr(-1.5,1.5));b.v.copy(dir).multiplyScalar(rr(7,9));b.v.y=rr(-.3,.4);b.t=5;b.g.visible=true;b.g.rotation.y=Math.atan2(dir.x,dir.z);});
  try{for(let i=0;i<5;i++)tone({f:rr(5500,8000),f2:rr(4000,6000),g:.025,dur:.06,at:i*rr(.1,.25)});}catch(e){}caption('bats');}
 for(const b of BATS){if(b.t<=0)continue;b.t-=dt;b.ph+=dt*22;b.g.position.addScaledVector(b.v,dt);b.g.position.y+=Math.sin(b.ph*.3)*dt*.8;b.pl.rotation.z=Math.sin(b.ph)*.9;b.pr.rotation.z=-Math.sin(b.ph)*.9;if(b.t<=0)b.g.visible=false;}}

// ===================== 40-FEATURE PACK =====================
const OPT={timer:false,invY:false,fov:75,bob:true,cross:true,assist:false};try{Object.assign(OPT,JSON.parse(localStorage.getItem('crawler_opt')||'{}'));}catch(e){}
function saveOpt(){try{localStorage.setItem('crawler_opt',JSON.stringify(OPT));}catch(e){}}
let WX='clear',NR={r:0},DOLLREV=false;const CHALK=[],BLOODD=[];
// ---- small helpers ----
function farPan(){const a=R()*6.28;return makePan(P.x+Math.cos(a)*60,2,P.z+Math.sin(a)*60);}
function decal(x,z,col,r,op){const m=new T.Mesh(new T.CircleGeometry(r,10),new T.MeshBasicMaterial({color:col,transparent:true,opacity:op,depthWrite:false,fog:true}));m.rotation.x=-Math.PI/2;m.position.set(x,.025,z);scene.add(m);return m;}
// ---- (6) eyeshine: its pinprick pupils catch your lantern ----
const EYES=[];(function(){for(let i=0;i<2;i++){const g=glow(0,0,0,0xfff2c8,.09,0);g.material.fog=false;head.add(g);g.position.set(i?.045:-.045,.05,.17);EYES.push(g);}})();
// ---- (9) scarecrow head that turns to watch you ----
const SCRG=new T.Group();(function(){SCRG.position.set(SCR.x,2.2,SCR.z);const bm=new T.MeshBasicMaterial({color:0x080604});[-1,1].forEach(sd=>{const e=new T.Mesh(new T.SphereGeometry(.028,6,5),bm);e.position.set(sd*.07,.04,.205);SCRG.add(e);});const mo=bx(.14,.012,.01,0,-.06,.21,bm);SCRG.add(mo);for(let k=0;k<5;k++){const st=bx(.006,.035,.01,-.056+k*.028,-.06,.215,bm);SCRG.add(st);}scene.add(SCRG);})();
// ---- (10) owls on the tall stones ----
const OWLS=[];(function(){const tall=tombs.filter(t=>t.h>1.6).sort(()=>R()-.5).slice(0,4);const om=new T.MeshLambertMaterial({color:0x4a3a2a});
 tall.forEach(t=>{const g=new T.Group();g.position.set(t.x,t.h,t.z);const b=new T.Mesh(new T.SphereGeometry(.11,8,6),om);b.scale.set(1,1.3,.9);b.position.y=.12;g.add(b);const hd=new T.Group();hd.position.y=.3;const h=new T.Mesh(new T.SphereGeometry(.09,8,6),om);hd.add(h);
  const es=[-1,1].map(sd=>{const e=glow(sd*.035,.01,.08,0xffd040,.06,.95);e.material.fog=false;hd.add(e);return e;});g.add(hd);g.visible=false;scene.add(g);OWLS.push({g,hd,es,hoot:1e12});});})();
// ---- (11) the ghost dog from the pet cemetery ----
const DOG={g:null,on:false,t:0,cd:1e12,gr:0,x:0,z:0};(function(){const dm=new T.MeshBasicMaterial({color:0xcfe0ff,transparent:true,opacity:.28,depthWrite:false,fog:true});const g=new T.Group();
 const b=new T.Mesh(new T.SphereGeometry(.18,10,8),dm);b.scale.set(.75,.7,1.5);b.position.y=.42;g.add(b);const h=new T.Mesh(new T.SphereGeometry(.12,10,8),dm);h.scale.set(.9,.9,1.2);h.position.set(0,.6,.3);g.add(h);
 [[-.09,.18],[.09,.18],[-.09,-.18],[.09,-.18]].forEach(q=>{g.add(cyl(.025,.02,.36,q[0],.18,q[1],dm,6));});const tl=cyl(.015,.008,.25,0,.5,-.3,dm,5);tl.rotation.x=-.8;g.add(tl);g.visible=false;scene.add(g);DOG.g=g;})();
// ---- (15) tin-can tripwires, (16) broken glass, (17) creaky floorboards, (18) cobwebs ----
const WIRES=[],GLASS=[],BOARDS=[],WEBS=[];
(function(){const wm=new T.MeshBasicMaterial({color:0x8a8a80}),cm=new T.MeshStandardMaterial({color:0x9a9890,metalness:.7,roughness:.4});
 for(let k=0;k<7;k++){let a=null;for(let q=0;q<40&&!a;q++){const x=rr(-E+6,E-6),z=rr(-E+6,E-6),an=R()*3.14,L=rr(2.2,3.4),x2=x+Math.cos(an)*L,z2=z+Math.sin(an)*L;if(clear(x,z,.6)&&clear(x2,z2,.6)&&clear((x+x2)/2,(z+z2)/2,.6))a=[x,z,x2,z2];}
  if(!a)continue;const L=Math.hypot(a[2]-a[0],a[3]-a[1]),w=cyl(.004,.004,L,(a[0]+a[2])/2,.16,(a[1]+a[3])/2,wm,3);w.rotation.z=Math.PI/2;w.rotation.y=-Math.atan2(a[3]-a[1],a[2]-a[0]);scene.add(w);
  [a.slice(0,2),a.slice(2)].forEach(p=>{scene.add(cyl(.015,.015,.25,p[0],.12,p[1],woodM||ironM,5));});for(let j=1;j<=3;j++){const t=j/4;scene.add(cyl(.03,.03,.08,a[0]+(a[2]-a[0])*t,.1,a[1]+(a[3]-a[1])*t,cm,8));}WIRES.push({a,cd:0});}
 const gm=new T.MeshStandardMaterial({color:0xaabbc0,metalness:.2,roughness:.05,transparent:true,opacity:.75});
 for(let k=0;k<9;k++){let x=0,z=0,ok=false;for(let q=0;q<40&&!ok;q++){x=rr(-E+4,E-4);z=rr(-E+4,E-4);ok=clear(x,z,.8);}if(!ok)continue;const g=new T.Group();g.position.set(x,.02,z);for(let j=0;j<14;j++){const sh=new T.Mesh(new T.PlaneGeometry(rr(.03,.08),rr(.03,.08)),gm);sh.rotation.set(-Math.PI/2+rr(-.3,.3),0,R()*6);sh.position.set(rr(-.45,.45),0,rr(-.45,.45));g.add(sh);}scene.add(g);GLASS.push({x,z,cd:0});}
 const wt=tex(256,(x,s2)=>{x.clearRect(0,0,s2,s2);x.strokeStyle='rgba(235,235,230,.85)';x.lineWidth=1.2;const c=s2/2;for(let a=0;a<12;a++){x.beginPath();x.moveTo(c,c);x.lineTo(c+Math.cos(a*.52)*c,c+Math.sin(a*.52)*c);x.stroke();}for(let r=10;r<c;r+=11){x.beginPath();for(let a=0;a<=12;a++){const px=c+Math.cos(a*.52)*r,py=c+Math.sin(a*.52)*r;a?x.quadraticCurveTo(c+Math.cos(a*.52-.26)*(r-4),c+Math.sin(a*.52-.26)*(r-4),px,py):x.moveTo(px,py);}x.stroke();}},0);
 window.__webT=wt;
 BLD.forEach(b=>{if(b.cat)return;for(let j=0;j<2;j++){const x=rr(b.x0+.8,b.x1-.8),z=rr(b.z0+.8,b.z1-.8);BOARDS.push({x,z,cd:0});}const wx=rr(b.x0+.9,b.x1-.9),wz=rr(b.z0+.9,b.z1-.9);const w=new T.Mesh(new T.PlaneGeometry(1.1,1.1),new T.MeshBasicMaterial({map:wt,transparent:true,depthWrite:false,side:T.DoubleSide,opacity:.6}));w.position.set(wx,1.55,wz);w.rotation.y=R()*3;scene.add(w);WEBS.push({x:wx,z:wz,m:w,hit:false});});})();
let webEl=null;function webFace(){if(!webEl){webEl=document.createElement('div');webEl.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:7;opacity:0;transition:opacity 2.5s;background-size:cover;background-position:center';try{webEl.style.backgroundImage='url('+window.__webT.image.toDataURL()+')';}catch(e){}document.body.appendChild(webEl);}
 webEl.style.transition='none';webEl.style.opacity=.85;requestAnimationFrame(()=>requestAnimationFrame(()=>{webEl.style.transition='opacity 3s';webEl.style.opacity=0;}));}
// ---- (19) the chapel organ ----
const ORG={x:CH.x+1.8,z:CH.z-3.25,used:0,t:0};(function(){const wd=new T.MeshStandardMaterial({color:0x3a2416,roughness:.8}),pm=new T.MeshStandardMaterial({color:0x9a8a60,metalness:.8,roughness:.35});const g=new T.Group();g.position.set(ORG.x,0,ORG.z);
 g.add(bx(1.5,.9,.6,0,.45,0,wd));g.add(bx(1.5,.06,.3,0,.92,.25,new T.MeshStandardMaterial({color:0xd8d0b8,roughness:.5})));for(let k=0;k<9;k++){const h=1.1+Math.sin(k/8*3.14)*.7;g.add(cyl(.045,.045,h,-.6+k*.15,.9+h/2,-.18,pm,8));}scene.add(g);boxes.push({x0:ORG.x-.78,x1:ORG.x+.78,z0:ORG.z-.32,z1:ORG.z+.32});})();
// ---- (20) wind-up toy, (21) bottles, (22) bandages, (23) chalk ----
const TOY={on:false,g:null,t:0,x:0,z:0,dx:0,dz:0,tick:0};(function(){const g=new T.Group();g.add(bx(.12,.1,.16,0,.07,0,new T.MeshStandardMaterial({color:0x8a2a1a,metalness:.4,roughness:.5})));g.add(cyl(.01,.01,.08,0,.13,-.08,ironM,5));const k=bx(.07,.04,.008,0,.17,-.1,ironM);g.add(k);g.userData.k=k;g.visible=false;scene.add(g);TOY.g=g;})();
function dropToy(){return;if(mode!=='play'||P.down||P.hidden)return;if(inv.toy<=0){msg('No wind-up toy.',1.2);return;}if(TOY.on)return;inv.toy--;hud();const fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw);TOY.x=P.x+fx*.8;TOY.z=P.z+fz*.8;TOY.dx=fx;TOY.dz=fz;TOY.t=14;TOY.on=true;TOY.g.visible=true;TOY.g.rotation.y=Math.atan2(fx,fz);msg('You wind it up and set it down. It clatters off on its own, ticking loudly.',3);}
const BOT={on:false,m:null,v:new T.Vector3()};(function(){const m=new T.Mesh(new T.CylinderGeometry(.03,.04,.22,8),new T.MeshStandardMaterial({color:0x2a5a2a,transparent:true,opacity:.8,roughness:.1}));m.visible=false;scene.add(m);BOT.m=m;})();
function throwBottle(){if(mode!=='play'||P.down||P.hidden||BOT.on)return;if(inv.bottle<=0){msg('No bottles.',1.2);return;}inv.bottle--;hud();FP.thr=.45;const d=new T.Vector3();camera.getWorldDirection(d);BOT.m.position.copy(camera.position).addScaledVector(d,.5);BOT.v.copy(d).multiplyScalar(17);BOT.v.y+=3.5;BOT.on=true;BOT.m.visible=true;sfx.whoosh();}
function useBandage(){return;if(inv.band<=0){msg('No bandages.',1.2);return;}if(!(P.limp>0)){msg('You are not hurt.',1.4);return;}inv.band--;P.limp=0;hud();sfx.paper&&sfx.paper();msg('You bind your ankle tight. You can walk properly again.',3);}
function chalkMark(){return;if(mode!=='play'||P.hidden)return;const fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw),x=P.x+fx*1.1,z=P.z+fz*1.1,g=new T.Group(),cm=new T.MeshBasicMaterial({color:0xe8e4da,fog:true});[1,-1].forEach(sd=>{const b=new T.Mesh(new T.PlaneGeometry(.5,.06),cm);b.rotation.set(-Math.PI/2,0,sd*.785);g.add(b);});g.position.set(x,.03,z);scene.add(g);CHALK.push({x,z,g,cat:CAT.on});if(CHALK.length>24){const o=CHALK.shift();scene.remove(o.g);}try{nz({f:4000,q:3,g:.08,dur:.25});}catch(e){}msg('You chalk an X on the ground. It shows on your map too.',2);}
// ---- (24) fresh graves you can dig up, (25) a coffin that is already taken, (26) cursed dolls ----
const FRESH=[];(function(){const dm=new T.MeshStandardMaterial({map:TG.map,color:0x3a2a1a,roughness:1});for(let k=0;k<5;k++){let x=0,z=0,ok=false;for(let q=0;q<50&&!ok;q++){x=rr(-E+6,E-6);z=rr(-E+6,E-6);ok=clear(x,z,1.2);}if(!ok)continue;const m=new T.Mesh(new T.SphereGeometry(1,12,6,0,Math.PI*2,0,Math.PI/2),dm);m.scale.set(.6,.18,1.1);m.position.set(x,0,z);m.rotation.y=R()*3;scene.add(m);
 const cr=bx(.05,.6,.05,x,.3,z-1.15,woodM||ironM);scene.add(cr);const cb=bx(.3,.05,.05,x,.45,z-1.15,woodM||ironM);scene.add(cb);FRESH.push({x,z,m,dug:false});}})();
FRESH.forEach(f=>acts.push({x:f.x,z:f.z+.8,r:1.4,hold:3,label:()=>f.dug?null:inv.shovel?'Dig up the fresh grave (loud)':'A fresh grave. The dirt is loose. (You need a shovel.)',can:()=>!f.dug&&inv.shovel,done(){f.dug=true;f.m.scale.y=.05;noiseLvl=1;hear(P,22);try{nz({type:'lowpass',f:400,g:.5,dur:.4});}catch(e){}
 if(R()<.22){grab({cd:0},true);msg('A hand bursts out of the dirt and grabs you!',2.5);return;}const L=[['holy','a flask of holy water'],['oil','a tin of lamp oil'],['bottle','two empty bottles'],['band','a roll of bandages'],['toy','a wind-up tin toy'],['stones','a handful of stones']];const q=L[(R()*L.length)|0];
 if(q[0]==='holy')inv.holy++;else if(q[0]==='oil')inv.oil=Math.min(1,inv.oil+.5);else if(q[0]==='bottle')inv.bottle+=2;else if(q[0]==='band')inv.band++;else if(q[0]==='toy')inv.toy++;else stones+=3;hud();msg('In the coffin, with the bones: '+q[1]+'.',3);}}));
const DOLLS=[];function placeDolls(){DOLLS.length=0;const sp=spots.slice().sort(()=>Math.random()-.5);for(let k=0;k<5&&k<sp.length;k++){addPick('doll',sp[k][0]+rr(-1,1),sp[k][1]+rr(-1,1));}}
const EPI=['BELOVED WIFE AND MOTHER — SHE NEVER STOPPED TALKING','HERE LIES A MAN WHO WHISTLED IN THE DARK. ONCE.','GONE TO SLEEP. DO NOT WAKE HIM.','HE SAID HE HEARD SCRATCHING','REST NOW. IT CANNOT HEAR YOU HERE.','DIED 1987 — OF FRIGHT','OUR NIGHT WATCHMAN. ONE NIGHT ONLY.','“I TOLD YOU I WAS SICK”','THE DEAD DO NOT CRAWL. — H.V.','MAY SHE NEVER BE FOUND','HE DUG HIS OWN, AND OTHERS','KEEP QUIET. KEEP QUIET. KEEP QUIET.','SHE RANG FOR HELP','LOVED BY ALL. MISSED BY THE THING UNDER THE CHAPEL.','HE ANSWERED WHEN IT CALLED HIS NAME','GONE BUT NOT FORGOTTEN — NOT BY IT','A GOOD DOG','THIS STONE WAS CARVED BEFORE HE DIED'];
tombs.slice().sort(()=>R()-.5).slice(0,16).forEach((t,k)=>{const e=EPI[k%EPI.length];acts.push({x:t.x,z:t.z+.75,r:1.1,hold:0,label:()=>'Read the gravestone',can:()=>true,done(){readNote('GRAVESTONE',e);}});});
// ---- runtime for all of the above ----
let ambT=20,chimeH=-1,pantP={_p:0},dragP={_p:0},breathP={_p:0},scrT=30,lastBleed=null;const SPRAY=[];
function updPack(dt){if(mode!=='play')return;const out=!CAT.on&&!BLD.some(b=>!b.cat&&P.x>b.x0&&P.x<b.x1&&P.z>b.z0&&P.z<b.z1),md=Math.hypot(mon.position.x-P.x,mon.position.z-P.z);NR.r=Math.max(0,NR.r-dt*8);
 // eyeshine
 {const dx=mon.position.x-P.x,dz=mon.position.z-P.z,d=Math.hypot(dx,dz),fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw),face=(dx*fx+dz*fz)/(d||1),op=(!monDead&&d<22&&face>.8)?Math.min(.95,(face-.8)*5)*(1-d/22)*(raise>.3?1.3:1):0;EYES.forEach(e=>{e.material.opacity=op;});}
 // scarecrow watches when you are not looking at it
 {const dx=SCR.x-P.x,dz=SCR.z-P.z,d=Math.hypot(dx,dz),fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw),look=(dx*fx+dz*fz)/(d||1)>.85;if(d<30&&!look){const want=Math.atan2(P.x-SCR.x,P.z-SCR.z);let df=want-SCRG.rotation.y;df=Math.atan2(Math.sin(df),Math.cos(df));SCRG.rotation.y+=df*Math.min(1,dt*.8);if(d<12&&Math.abs(df)>1&&!TH.scrw){TH.scrw=1;setTimeout(()=>{if(mode==='play')msg('Was the scarecrow always facing this way?',3);},1500);}}}
 // owls
 for(const o of []){const want=Math.atan2(P.x-o.g.position.x,P.z-o.g.position.z);let df=want-o.hd.rotation.y;df=Math.atan2(Math.sin(df),Math.cos(df));o.hd.rotation.y+=df*Math.min(1,dt*2);o.hoot-=dt;const mo=!monDead&&Math.hypot(mon.position.x-o.g.position.x,mon.position.z-o.g.position.z)<10;
  if(o.hoot<=0&&Math.hypot(P.x-o.g.position.x,P.z-o.g.position.z)<30){o.hoot=mo?rr(3,6):rr(25,60);const d=makePan(o.g.position.x,o.g.position.y,o.g.position.z);for(let i=0;i<2;i++)try{vox({f:mo?380:330,f2:mo?300:290,dur:.32,g:.12,fm:[500,900],q:4,br:.2,at:i*.5,dest:d||master});}catch(e){}if(mo)caption('an owl hooting nervously');}}
 // ghost dog
 if(!DOG.on){DOG.cd-=dt;if(DOG.cd<=0&&!CAT.on&&Math.hypot(P.x-PETS.x,P.z-PETS.z)<16){DOG.on=true;DOG.t=70;DOG.x=PETS.x;DOG.z=PETS.z;DOG.g.visible=true;if(!TH.dog){TH.dog=1;msg('A pale, see-through dog trots out of the pet graves and starts following you. It seems… friendly.',5);}}}
 else{DOG.t-=dt;const fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw),tx=P.x-fx*2.2+fz*1.2,tz=P.z-fz*2.2-fx*1.2,dx=tx-DOG.x,dz=tz-DOG.z,d=Math.hypot(dx,dz);if(d>.3){const st=Math.min(d,dt*Math.min(6,d*2));DOG.x+=dx/d*st;DOG.z+=dz/d*st;DOG.g.rotation.y=Math.atan2(dx,dz);}DOG.g.position.set(DOG.x,Math.abs(Math.sin(elapsed*9))*.03*(d>.3?1:0),DOG.z);
  DOG.g.traverse(o=>{if(o.isMesh)o.material.opacity=Math.min(.3,DOG.t*.1)*(0.75+Math.sin(elapsed*3)*.25);});DOG.gr-=dt;if(!monDead&&md<16&&DOG.gr<=0){DOG.gr=4;const dp=makePan(DOG.x,.5,DOG.z);try{vox({f:95,f2:80,dur:1.1,g:.18,fm:[300,700],q:3,br:.8,dest:dp||master});}catch(e){}caption('the ghost dog growls — it is close');if(!TH.dogg){TH.dogg=1;msg('The ghost dog is growling. The crawler must be close.',3);}}
  if(DOG.t<=0||CAT.on){DOG.on=false;DOG.g.visible=false;DOG.cd=rr(150,240);}}
 // lantern flickers when it is near
 if(!monDead&&md<10&&M.state!=='creep'&&R()<dt*6*(1-md/10))lampOut=Math.max(lampOut,.12);
 // its breathing and dragging, close by
 if(!monDead&&md<9&&M.state!=='hunt'&&M.state!=='creep'&&M.state!=='sneak'&&!P.hidden)pulse(breathP,dt,1.7,()=>{try{nz({type:'lowpass',f:500,f2:250,g:.12+.25*(1-md/9),dur:.7,dest:panner});}catch(e){}caption('rasping breath');});
 if(!monDead&&md<24&&(M.mv||0)>.5&&M.state!=='hunt'&&M.state!=='creep'&&M.state!=='sneak')pulse(dragP,dt,1,()=>{try{nz({type:'lowpass',f:380,f2:180,g:.16*(1-md/24)+.04,dur:.45,dest:panner});}catch(e){}if(R()<.15)caption('something dragging itself');});
 // blood trail after it eats
 if(M.eatT>0)M.bleed=40;if(M.bleed>0&&!monDead){M.bleed-=dt;if(!lastBleed||Math.hypot(mon.position.x-lastBleed.x,mon.position.z-lastBleed.z)>1.6){lastBleed={x:mon.position.x,z:mon.position.z};const dm=decal(mon.position.x+rr(-.2,.2),mon.position.z+rr(-.2,.2),0x3a0303,rr(.08,.18),.8);BLOODD.push(dm);if(BLOODD.length>40)scene.remove(BLOODD.shift());}}
 // it scratches at the walls when you hide indoors
 if(!out&&!CAT.on&&!monDead&&M.state!=='hunt'&&md<26){scrT-=dt;if(scrT<=0){scrT=rr(30,55);const b=BLD.find(b=>!b.cat&&P.x>b.x0&&P.x<b.x1&&P.z>b.z0&&P.z<b.z1);if(b){const sx=R()<.5?b.x0:b.x1,sz=rr(b.z0,b.z1),d=makePan(sx,1,sz);try{for(let i=0;i<7;i++)nz({f:rr(1800,3200),q:3,g:.3,dur:.12,at:i*.16,dest:d||master});}catch(e){}caption('scratching on the wall, outside');if(!TH.scrw2){TH.scrw2=1;msg('Something is scratching at the wall. From the outside.',3);}}}}
 // exhausted panting
 if(P.stam<.03&&!P.pant){P.pant=4;msg('You are out of breath — and panting LOUDLY.',2);}if(P.pant>0){P.pant-=dt;pulse(pantP,dt,.8,()=>{try{sfx.behind();}catch(e){}hear(P,7);caption('your panting');});if(P.pant<=0)P.pant=0;}
 // hazards (only when you are walking, not sneaking)
 const careless=!P.sneak&&(FP.spd||0)>.6;
 for(const w of WIRES){w.cd-=dt;if(w.cd>0)continue;const a=w.a,vx=a[2]-a[0],vz=a[3]-a[1],L2=vx*vx+vz*vz,t=Math.max(0,Math.min(1,((P.x-a[0])*vx+(P.z-a[1])*vz)/L2)),d=Math.hypot(P.x-(a[0]+vx*t),P.z-(a[1]+vz*t));if(d<.3&&careless){w.cd=6;try{for(let i=0;i<9;i++)nz({f:rr(2000,4200),q:6,g:.35,dur:.06,at:i*.07});}catch(e){}noiseLvl=1;hear(P,32);shakeT=.2;msg(TH.wire?'Tin cans! It heard that.':'You kicked a tin-can wire! (Sneak over them with C.)',2.5);TH.wire=1;}}
 for(const g of GLASS){g.cd-=dt;if(g.cd<=0&&careless&&Math.hypot(P.x-g.x,P.z-g.z)<.55){g.cd=4;try{nz({f:5200,q:2,g:.4,dur:.15});nz({f:3000,q:2,g:.3,dur:.1,at:.06});}catch(e){}noiseLvl=.9;hear(P,22);caption('glass crunching');if(!TH.glass){TH.glass=1;msg('Broken glass. Loud. Sneak around it.',2.5);}}}
 for(const b of BOARDS){b.cd-=dt;if(b.cd<=0&&careless&&Math.hypot(P.x-b.x,P.z-b.z)<.5){b.cd=5;try{nz({type:'lowpass',f:700,f2:300,q:3,g:.45,dur:.5});}catch(e){}noiseLvl=.8;hear(P,16);caption('a floorboard creaks');}}
 for(const w of WEBS){if(!w.hit&&Math.hypot(P.x-w.x,P.z-w.z)<.6){w.hit=true;w.m.visible=false;webFace();caption('cobwebs on your face');if(!TH.web){TH.web=1;msg('Cobwebs, all over your face. Something small runs down your neck.',3);}}}
 // the wind-up toy
 if(TOY.on){TOY.t-=dt;const st=dt*.7;if(!blocked(TOY.x+TOY.dx*.3,TOY.z+TOY.dz*.3,.1)){TOY.x+=TOY.dx*st;TOY.z+=TOY.dz*st;}else{const a=R()*6.28;TOY.dx=Math.cos(a);TOY.dz=Math.sin(a);TOY.g.rotation.y=Math.atan2(TOY.dx,TOY.dz);}TOY.g.position.set(TOY.x,Math.abs(Math.sin(elapsed*16))*.01,TOY.z);TOY.g.userData.k.rotation.z+=dt*8;
  TOY.tick-=dt;if(TOY.tick<=0){TOY.tick=.55;const d=makePan(TOY.x,.2,TOY.z);try{nz({f:2600,q:5,g:.3,dur:.04,dest:d||master});nz({f:1800,q:5,g:.25,dur:.04,at:.12,dest:d||master});}catch(e){}hear(TOY,20);}if(TOY.t<=0){TOY.on=false;TOY.g.visible=false;}}
 // bottles
 if(BOT.on){BOT.v.y-=20*dt;BOT.m.position.addScaledVector(BOT.v,dt);BOT.m.rotation.x+=dt*12;const bp=BOT.m.position;if(bp.y<=.1||(bp.y<2&&blocked(bp.x,bp.z,0))){BOT.on=false;BOT.m.visible=false;try{nz({f:6000,q:1,g:.6,dur:.35});nz({f:3500,q:2,g:.45,dur:.25,at:.03});}catch(e){}const hp2={x:bp.x,z:bp.z};if(hear(hp2,46))msg('CRASH. It heard the bottle.',2);for(let j=0;j<6;j++)GLASS.push({x:bp.x+rr(-.3,.3),z:bp.z+rr(-.3,.3),cd:0});}}
 // chapel organ
 if(ORG.t>0){ORG.t-=dt;pulse(ORG,dt,.6,()=>{const d=makePan(ORG.x,1.5,ORG.z),f=[110,131,147,165,98][(R()*5)|0];try{tone({f:f,g:.12,dur:1.4,dest:d||master});tone({f:f*1.5,g:.07,dur:1.4,dest:d||master});tone({f:f*2,g:.05,dur:1.4,dest:d||master});}catch(e){}hear(ORG,999);});}
 // weather
 // night sounds
 ambT-=dt;if(ambT<=0&&out){ambT=rr(14,30);const k=R(),d=farPan();try{if(k<.3){for(let i=0;i<2;i++)vox({f:rr(280,360),f2:rr(200,260),dur:.18,g:.07,fm:[600,1200],q:3,br:.6,at:i*.35,dest:d||master});caption('a dog barking, far away');}
  else if(k<.55){nz({type:'lowpass',f:500,f2:900,g:.28,dur:3.5,a:1.2});caption('wind gusting through the stones');}else if(k<.7){vox({f:900,f2:500,dur:1.4,g:.05,fm:[1500,2500],q:3,br:.9,dest:d||master});caption('a scream, very far away');}
  else{const d2=makePan(OWLS[0]?OWLS[0].g.position.x:P.x,4,OWLS[0]?OWLS[0].g.position.z:P.z);for(let i=0;i<3;i++)vox({f:330,f2:290,dur:.3,g:.08,fm:[500,900],q:4,br:.2,at:i*.45,dest:d2||master});caption('an owl');}}catch(e){}}
 {const mins=1422+elapsed*.45,hr=Math.floor(mins/60);if(chimeH<0)chimeH=hr;if(hr!==chimeH&&!dawnOn){chimeH=hr;const n=((hr-1)%12)+1,d=farPan();for(let i=0;i<Math.min(n,6);i++)try{tone({f:220,f2:218,g:.07,dur:2.2,at:i*1.6,dest:d||master});tone({f:440,g:.03,dur:1.4,at:i*1.6,dest:d||master});}catch(e){}caption('a distant clock chimes '+n);}}}

// ===================== runtime for the wider grounds =====================
let ZCUR=-1,zoneT=0,shC={x:1e9,z:1e9},shT=0,cornCd=0,LPL=(()=>{const l=new T.PointLight(0xffb060,0,16,1.8);scene.add(l);return l;})(),lampT=0;
function inCorn(x,z){return x>CORNA.x0&&x<CORNA.x1&&z>CORNA.z0&&z<CORNA.z1;}
function zoneBanner(z){let el=$('zoneb');if(!el){el=document.createElement('div');el.id='zoneb';el.style.cssText='position:fixed;left:0;right:0;top:22%;text-align:center;pointer-events:none;z-index:6;opacity:0;transition:opacity 1.2s;font-family:Creepster,Georgia,serif;color:#d8c8b0;text-shadow:0 0 18px #000,0 0 4px #000';document.body.appendChild(el);}
 el.innerHTML='<div style="font-size:46px;letter-spacing:6px">'+z.n+'</div><div style="font:italic 17px Georgia;color:#a99;margin-top:4px">'+z.sub+'</div>';el.style.opacity=1;clearTimeout(el._t);el._t=setTimeout(()=>{el.style.opacity=0;},3200);}
function updZones(dt){if(mode!=='play'||CAT.on)return;
 // which area am I in?
 zoneT-=dt;{let zi=0;for(let i=ZN.length-1;i>=0;i--)if(ZN[i].t(P.x,P.z)){zi=i;break;}if(zi!==ZCUR&&zoneT<=0){if(ZCUR>=0&&elapsed>6)zoneBanner(ZN[zi]);ZCUR=zi;zoneT=4;if(!(STATS.zones||(STATS.zones={}))[zi]){STATS.zones[zi]=1;if(Object.keys(STATS.zones).length>=8)award('explorer');}}}
 // the moon's shadows follow you (sharper, and they work everywhere on the big map)
 shT-=dt;if(shT<=0){shT=.5;if(Math.hypot(P.x-shC.x,P.z-shC.z)>14){shC={x:P.x,z:P.z};moon.position.set(P.x-60,90,P.z-45);moon.target.position.set(P.x,0,P.z);moon.target.updateMatrixWorld();const sc=moon.shadow.camera;if(sc.right!==48){sc.left=-48;sc.right=48;sc.top=48;sc.bottom=-48;sc.updateProjectionMatrix();}moon.shadow.needsUpdate=true;}}
 // lake: wading is slow and splashy
 {const d=Math.hypot(P.x-LK.x,P.z-LK.z),wade=(d<LK.r+.3&&d>LK.r-1.6)||(d>LK.ir-.2&&d<LK.ir+1.4);if(wade&&P.px!==undefined){P.x=P.px+(P.x-P.px)*.55;P.z=P.pz+(P.z-P.pz)*.55;}P.wade=wade;P.px=P.x;P.pz=P.z;}
 if(window.__wnt){window.__wnt.offset.x+=dt*.012;window.__wnt.offset.y+=dt*.007;}
 // cornfield
 cornCd-=dt;const inC=inCorn(P.x,P.z);P.inCorn=inC;
 if(inC&&!P.sneak&&(FP.spd||0)>.6){pulse(TH.cr||(TH.cr={}),dt,.45,()=>{try{nz({f:rr(2500,4200),q:1.2,g:.22,dur:.3});}catch(e){}hear(P,(K.ShiftLeft||K.ShiftRight)?26:16);});}
 if(inC&&P.sneak&&M.state==='hunt'&&cornCd<=0&&!monDead&&Math.hypot(mon.position.x-P.x,mon.position.z-P.z)>5){cornCd=20;M.state='search';M.center.set(P.x+rr(-6,6),0,P.z+rr(-6,6));M.target.copy(M.center);M.timer=7;M.path=null;msg('You drop low in the corn. It lost you!',2.5);award('corn');}
 for(const c of CSCR){if(!c.mover)continue;c.cd-=dt;const dx=c.g.position.x-P.x,dz=c.g.position.z-P.z,d=Math.hypot(dx,dz),fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw),look=(dx*fx+dz*fz)/(d||1)>.6;
  if(!look&&d<40&&d>6&&c.cd<=0){c.cd=rr(2,5);c.g.position.x-=dx/d*2.5;c.g.position.z-=dz/d*2.5;c.g.rotation.y=Math.atan2(-dx,-dz);if(!TH.scm&&d<20){TH.scm=1;setTimeout(()=>msg('That scarecrow was further away a moment ago.',3),800);}}}
 // will-o'-the-wisps
 for(const w of WISPS){if(!w.on||w.gone){w.g.material.opacity=Math.max(0,w.g.material.opacity-dt);continue;}w.a+=dt;w.g.material.opacity=Math.min(.95,w.g.material.opacity+dt*.6)*(.75+Math.sin(w.a*7)*.25);w.g.position.set(w.x+Math.sin(w.a*.9)*.4,1.2+Math.sin(w.a*1.7)*.25,w.z+Math.cos(w.a*.7)*.4);
  if(Math.hypot(P.x-w.x,P.z-w.z)<7){w.gone=true;const nx=WISPS[w.i+1];if(nx){nx.on=true;try{tone({f:880+w.i*110,g:.05,dur:.9});tone({f:1320+w.i*110,g:.03,dur:.9,at:.08});}catch(e){}if(w.i===0)msg('A small blue light floats away from you, deeper into the woods… as if it wants you to follow.',4);}else{msg('The last light sinks into a crate half-buried in the roots.',3);award('wisps');}}}
 // the hermit's radio
 if(HRAD.t>0){HRAD.t-=dt;pulse(HRAD,dt,.5,()=>{const d=makePan(HRAD.x,1,HRAD.z);try{nz({f:3000,q:.6,g:.25,dur:.5,dest:d||master});const n=[262,294,330,262,392,349][(elapsed*2|0)%6];tone({type:'square',f:n,g:.06,dur:.45,dest:d||master});}catch(e){}hear(HRAD,999);});}
 // the fire tower
 if(TOWER.t>0){TOWER.t-=dt;P.x=TOWER.x;P.z=TOWER.z;camera.position.set(TOWR.x,10.9,TOWR.z);if(TOWER.t<=0)msg('You climb back down.',1.6);}
 if(TOWER.rev>0)TOWER.rev-=dt;
 // gas lamps flicker; the nearest one casts real light
 if(!LPL){LPL=new T.PointLight(0xffb060,0,16,1.8);scene.add(LPL);}lampT-=dt;let near=null,nd=26;for(const L of window.__LAMPS){L.ph+=dt;const fl=(Math.sin(L.ph*9)*Math.sin(L.ph*23.7)>.85)?.25:1;const d=Math.hypot(L.x-P.x,L.z-P.z);L.g.material.opacity=L.g.userData.base*fl*(gens>=3?1:.8)*Math.min(1,Math.max(0,(d-3)/12));if(d<nd){nd=d;near=L;}}
 if(near){LPL.position.set(near.x,3.2,near.z);LPL.intensity=(near.g.material.opacity/near.g.userData.base)*1.1;}else LPL.intensity=0;
 // the ghost train
 if(!TRN.on){if(elapsed>100||TRN.stop)TRN.cd-=dt;if(TRN.cd<=0){TRN.on=true;TRN.willStop=TRN.stop;TRN.x=TRN.stop?(PLAT.x<P.x?-H-60:H+60):P.x<0?H+60:-H-60;TRN.dir=TRN.x<0?1:-1;TRN.hit=false;TRN.mhit=false;TRN.g.visible=true;TRN.g.rotation.y=TRN.dir>0?0:Math.PI;TRN.lt.intensity=3;TRN.v=40;
   try{const d=makePan(TRN.x,3,RAILZ);[311,370,466].forEach(f=>{tone({type:'sawtooth',f:f,g:.05,dur:2.4,dest:d||master});tone({type:'sawtooth',f:f,g:.05,dur:1.4,at:2.8,dest:d||master});});}catch(e){}caption('a train horn — the midnight train');if(!TH.trn){TH.trn=1;msg('A train horn. There has not been a train on these tracks since 1987.',4);}}}
 else{let spd=40;if(TRN.willStop){const tx=PLAT.x-4+TRN.dir*12,dd=(tx-TRN.x)*TRN.dir;if(!TRN.stopped&&TRN.stop){spd=dd>0?Math.min(40,Math.max(2.5,dd*.9)):0;if(dd<=.3){TRN.stopped=true;TRN.wait=18;try{nz({f:3000,q:.5,g:.3,dur:1.6,a:.1});}catch(e){}msg('The train hisses to a stop. The doors slide open. GET ON (E).',4);}}else if(TRN.stopped){spd=0;TRN.wait-=dt;if(TRN.wait<=0){TRN.stopped=false;TRN.stop=false;TRN.willStop=false;SIG.g.userData.lv.rotation.z=.4;msg('The doors close. The train pulls away without you.',3);}}}if(TRN.v===undefined)TRN.v=spd;if(spd>TRN.v)TRN.v=Math.min(spd,TRN.v+5*dt);else TRN.v=Math.max(spd,TRN.v-14*dt);TRN.x+=TRN.dir*dt*TRN.v;{const mv=Math.min(1,TRN.v/15);TRN.g.position.set(TRN.x,Math.abs(Math.sin(TRN.x*.9))*.025*mv,RAILZ);TRN.g.rotation.x=Math.sin(TRN.x*.37)*.006*mv;}pulse(TRN,dt,.22,()=>{const d=makePan(TRN.x,1.5,RAILZ);try{nz({type:'lowpass',f:220,g:.6,dur:.3,dest:d||master});nz({f:1600,q:4,g:.15,dur:.06,dest:d||master});}catch(e){}});
  const pd=Math.abs(TRN.x-P.x);if(pd<70){thunCover=Math.max(thunCover,.3);shakeT=Math.max(shakeT,.25*(1-pd/70));}
  if(!TRN.hit&&Math.abs(P.z-RAILZ)<1.9&&Math.abs(TRN.x-P.x)<4){TRN.hit=true;flashT=.7;shakeT=1.2;P.limp=25;msg('The train roars straight THROUGH you. Ice cold. Your leg will not work properly.',4);award('train');try{nz({f:6000,f2:500,g:.8,dur:1.5});}catch(e){}}
  if(!TRN.mhit&&!monDead&&Math.abs(mon.position.z-RAILZ)<2&&Math.abs(TRN.x-mon.position.x)<4){TRN.mhit=true;M.stun=Math.max(M.stun||0,4);try{sfx.screech();}catch(e){}caption('the train hit IT — it is screaming');}
  if(Math.abs(TRN.x)>H+70&&Math.sign(TRN.x)===TRN.dir){TRN.on=false;TRN.g.visible=false;TRN.lt.intensity=0;TRN.cd=rr(170,280);}}}

// ===================== better sound + visual effects =====================
const SFXS={ring:0,amb:{},lastEnv:''};
const VFXS={ff:null,ffd:[],dust:null,breath:[],brT:2,spl:[],rays:[],emb:null,embd:[],drops:null,bolt:null,boltT:0};
(function(){
 // fireflies
 {const n=70,g=new T.BufferGeometry(),pos=new Float32Array(n*3),col=new Float32Array(n*3);g.setAttribute('position',new T.BufferAttribute(pos,3));g.setAttribute('color',new T.BufferAttribute(col,3));
  const m=new T.Points(g,new T.PointsMaterial({size:.16,map:mistT,vertexColors:true,transparent:true,depthWrite:false,blending:T.AdditiveBlending,fog:false}));m.frustumCulled=false;scene.add(m);VFXS.ff=m;for(let i=0;i<n;i++)VFXS.ffd.push({x:0,y:-50,z:0,ph:R()*9,sp:rr(.6,1.4),vx:0,vz:0});}
 // dust in the lantern light
 {const n=110,g=new T.BufferGeometry(),pos=new Float32Array(n*3);for(let i=0;i<n;i++){pos[i*3]=rr(-2.5,2.5);pos[i*3+1]=rr(-1.2,1.2);pos[i*3+2]=rr(-2.5,2.5);}g.setAttribute('position',new T.BufferAttribute(pos,3));
  const m=new T.Points(g,new T.PointsMaterial({size:.018,color:0xffd8a0,transparent:true,opacity:.5,depthWrite:false,blending:T.AdditiveBlending}));m.frustumCulled=false;scene.add(m);VFXS.dust=m;}
 // breath puffs
 for(let i=0;i<6;i++){const sp=new T.Sprite(new T.SpriteMaterial({map:mistT,color:0xdde4ec,transparent:true,opacity:0,depthWrite:false}));sp.scale.set(.2,.2,1);scene.add(sp);VFXS.breath.push({s:sp,t:0});}
 // rain splashes
 {const rg=new T.RingGeometry(.03,.06,10);rg.rotateX(-Math.PI/2);for(let i=0;i<46;i++){const r=new T.Mesh(rg,new T.MeshBasicMaterial({color:0xb8c8d8,transparent:true,opacity:0,depthWrite:false}));scene.add(r);VFXS.spl.push({m:r,t:1});}}
 // moonlight shafts
 {const t=tex(64,(x,s2)=>{const g=x.createLinearGradient(0,0,0,s2);g.addColorStop(0,'rgba(255,255,255,0)');g.addColorStop(.3,'rgba(255,255,255,.9)');g.addColorStop(1,'rgba(255,255,255,0)');x.fillStyle=g;x.fillRect(0,0,s2,s2);const h=x.createLinearGradient(0,0,s2,0);h.addColorStop(0,'rgba(0,0,0,1)');h.addColorStop(.5,'rgba(0,0,0,0)');h.addColorStop(1,'rgba(0,0,0,1)');x.globalCompositeOperation='destination-out';x.fillStyle=h;x.fillRect(0,0,s2,s2);},0);
  for(let i=0;i<6;i++){const m=new T.Mesh(new T.PlaneGeometry(rr(2,4),26),new T.MeshBasicMaterial({map:t,color:0x9fb4e0,transparent:true,opacity:0,depthWrite:false,blending:T.AdditiveBlending,side:T.DoubleSide,fog:false}));m.position.y=-99;scene.add(m);VFXS.rays.push({m,x:0,z:0,set:false});}}
 // embers above fires
 {const n=90,g=new T.BufferGeometry(),pos=new Float32Array(n*3);g.setAttribute('position',new T.BufferAttribute(pos,3));const m=new T.Points(g,new T.PointsMaterial({size:.07,map:mistT,color:0xff8a30,transparent:true,depthWrite:false,blending:T.AdditiveBlending}));m.frustumCulled=false;scene.add(m);VFXS.emb=m;for(let i=0;i<n;i++){VFXS.embd.push({x:0,y:-50,z:0,vx:0,vy:0,vz:0,t:0});}}
 // rain drops on the "lens"
 {const cv=document.createElement('canvas');cv.width=cv.height=512;const x=cv.getContext('2d');for(let i=0;i<70;i++){const px=Math.random()*512,py=Math.random()*512,r=2+Math.random()*7;const g=x.createRadialGradient(px-r*.3,py-r*.3,0,px,py,r);g.addColorStop(0,'rgba(255,255,255,.55)');g.addColorStop(.6,'rgba(160,180,200,.18)');g.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=g;x.beginPath();x.ellipse(px,py,r*.8,r,0,0,7);x.fill();if(Math.random()<.4){x.strokeStyle='rgba(200,215,230,.15)';x.lineWidth=r*.5;x.beginPath();x.moveTo(px,py);x.lineTo(px+Math.random()*4-2,py+20+Math.random()*40);x.stroke();}}
  const el=document.createElement('div');el.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:5;opacity:0;background-size:520px 520px;mix-blend-mode:screen';try{el.style.backgroundImage='url('+cv.toDataURL()+')';}catch(e){}document.body.appendChild(el);VFXS.drops=el;}
})();
function lightningBolt(){if(VFXS.bolt){scene.remove(VFXS.bolt);}const a=R()*6.28,d=rr(70,130),x0=P.x+Math.cos(a)*d,z0=P.z+Math.sin(a)*d,pts=[];let x=x0,y=95,z=z0;const seg=[];while(y>0){const nx=x+rr(-5,5),ny=y-rr(4,9),nz2=z+rr(-5,5);seg.push(x,y,z,nx,Math.max(0,ny),nz2);if(R()<.25){let bx2=nx,by=ny,bz=nz2;for(let k=0;k<3&&by>5;k++){const qx=bx2+rr(-6,6),qy=by-rr(4,8),qz=bz+rr(-6,6);seg.push(bx2,by,bz,qx,qy,qz);bx2=qx;by=qy;bz=qz;}}x=nx;y=ny;z=nz2;}
 const g=new T.BufferGeometry();g.setAttribute('position',new T.BufferAttribute(new Float32Array(seg),3));VFXS.bolt=new T.LineSegments(g,new T.LineBasicMaterial({color:0xe8f0ff,transparent:true,opacity:1,fog:false}));VFXS.bolt.frustumCulled=false;scene.add(VFXS.bolt);VFXS.boltT=.35;}
function updFX(dt){if(mode==='menu')return;const out=!CAT.on&&!BLD.some(b=>P.x>b.x0&&P.x<b.x1&&P.z>b.z0&&P.z<b.z1),zi=typeof ZCUR==='number'?ZCUR:0,rainy=WX==='rain'&&!MOD.winter;
 // ---- environment for reverb + footsteps ----
 const inB=BLD.find(b=>P.x>b.x0&&P.x<b.x1&&P.z>b.z0&&P.z<b.z1);ENV=CAT.on?'cave':inB?'in':zi===1?'woods':'out';
 SURF=MOD.winter&&out?'snow':CAT.on?'stone':inB?((Math.abs(inB.x0+inB.x1-2*MAUS.x)<2&&Math.abs(inB.z0+inB.z1-2*MAUS.z)<2)||Math.abs(inB.x0+inB.x1-2*CH.x)<2?'stone':'wood'):P.inCorn?'corn':(Math.abs(P.x)<1.7||Math.abs(P.z-RAILZ)<1.7)?'gravel':'grass';
 if(VERB&&actx){const T0=actx.currentTime;for(const k in VERB)VERB[k].gain.setTargetAtTime(k===ENV?(k==='cave'?.55:k==='in'?.35:k==='woods'?.28:.2):0,T0,.4);
  SFXS.ring=Math.max(0,SFXS.ring-dt);const f=P.hidden?900:SFXS.ring>0?700+(2-SFXS.ring)*4000:(inB&&rainy)?9000:20000;MUF.frequency.setTargetAtTime(f,T0,.15);}
 // ---- ambience by area ----
 if(mode==='play'&&actx){const A=SFXS.amb;
  if(out){pulse(A.wind||(A.wind={}),dt,rr(4,7),()=>{try{nz({f:rr(250,600),f2:rr(300,700),q:1.5,g:zi===1?.09:.06,dur:rr(2.5,4.5),a:1.2,dest:wet});}catch(e){}});}
  if(zi===1)pulse(A.creak||(A.creak={}),dt,rr(5,11),()=>{const a=R()*6.28,d=makePan(P.x+Math.cos(a)*12,6,P.z+Math.sin(a)*12);try{vox({f:rr(70,120),f2:rr(55,95),dur:rr(.8,1.6),g:.07,fm:[400,900],q:8,br:.3,dest:d||master});}catch(e){}if(R()<.3)caption('a tree creaking');});
  {const ld=Math.hypot(P.x-LK.x,P.z-LK.z);if(ld<LK.r+16)pulse(A.lap||(A.lap={}),dt,rr(.8,1.6),()=>{try{nz({type:'lowpass',f:rr(300,520),g:.09*(1-Math.max(0,ld-LK.r)/16)+.02,dur:rr(.4,.8),a:.15});}catch(e){}});}
  if((zi===3||zi===4)&&!rainy)pulse(A.crk||(A.crk={}),dt,rr(.9,1.8),()=>{const a=R()*6.28,d=makePan(P.x+Math.cos(a)*8,.3,P.z+Math.sin(a)*8),f=rr(4000,4700);try{for(let i=0;i<3;i++)tone({f:f,g:.02,dur:.04,at:i*.07,dest:d||master});}catch(e){}});
  if(inB&&rainy)pulse(A.roof||(A.roof={}),dt,.4,()=>{try{for(let i=0;i<5;i++)nz({f:rr(1200,2400),q:2,g:.05,dur:.05,at:R()*.4});}catch(e){}});
  if(CAT.on)pulse(A.drip||(A.drip={}),dt,rr(1.5,4),()=>{try{tone({f:rr(1100,1600),f2:rr(700,900),g:.05,dur:.12});}catch(e){}});}
 // ---- fireflies ----
 {const on=!rainy&&(zi===1||zi===3||zi===4||Math.hypot(P.x-LK.x,P.z-LK.z)<LK.r+15),g=VFXS.ff.geometry,pa=g.attributes.position.array,ca=g.attributes.color.array;
  VFXS.ffd.forEach((f,i)=>{if(Math.hypot(f.x-P.x,f.z-P.z)>24||f.y<-10){if(on){const a=R()*6.28,d=rr(3,22);f.x=P.x+Math.cos(a)*d;f.z=P.z+Math.sin(a)*d;f.y=rr(.3,2);}else f.y=-50;}
   f.ph+=dt*f.sp;f.vx+=(R()-.5)*dt;f.vz+=(R()-.5)*dt;f.vx*=.98;f.vz*=.98;f.x+=f.vx*dt;f.z+=f.vz*dt;f.y+=Math.sin(f.ph*1.3)*dt*.2;const b=Math.max(0,Math.sin(f.ph*2.2))**4*(on?1:0);
   pa[i*3]=f.x;pa[i*3+1]=f.y;pa[i*3+2]=f.z;ca[i*3]=.85*b;ca[i*3+1]=1*b;ca[i*3+2]=.35*b;});g.attributes.position.needsUpdate=true;g.attributes.color.needsUpdate=true;}
 // ---- dust in the lantern ----
 {const d=VFXS.dust;d.visible=lantern.visible&&lamp.intensity>.5;if(d.visible){d.position.copy(camera.position);const a=d.geometry.attributes.position.array;for(let i=0;i<a.length;i+=3){a[i]+=Math.sin(elapsed*.3+i)*dt*.04;a[i+1]+=(Math.sin(elapsed*.21+i*.7)*.03-.004)*dt;a[i+2]+=Math.cos(elapsed*.27+i)*dt*.04;if(a[i+1]<-1.2)a[i+1]=1.2;}d.geometry.attributes.position.needsUpdate=true;d.material.opacity=out&&rainy?.15:.45;}}
 // ---- breath ----
 VFXS.brT-=dt;if(VFXS.brT<=0&&mode==='play'&&!P.hidden){VFXS.brT=(P.pant>0||P.stam<.4)?1.1:rr(2.6,3.6);const b=VFXS.breath.find(q=>q.t<=0);if(b){b.t=1.4;b.s.position.copy(camera.localToWorld(V(rr(-.03,.03),-.24,-.5)));b.v=new T.Vector3(0,.16,0).add(camera.getWorldDirection(new T.Vector3()).multiplyScalar(.6));}}
 VFXS.breath.forEach(b=>{if(b.t<=0){b.s.material.opacity=0;return;}b.t-=dt;const k=1-b.t/1.4;b.s.position.addScaledVector(b.v,dt);const sc=.06+k*.26;b.s.scale.set(sc,sc*.8,1);b.s.material.opacity=(MOD.winter?.16:.06)*Math.sin(Math.min(1,k*1.2)*Math.PI)*(out?1:.5);});
 // ---- rain splashes + lens drops + wet ground ----
 if(rainy&&out&&mode==='play'){for(let n=0;n<3;n++){const s2=VFXS.spl.find(q=>q.t>=1);if(!s2)break;const a=R()*6.28,d=rr(1.6,9);s2.m.position.set(P.x+Math.cos(a)*d,.025,P.z+Math.sin(a)*d);s2.t=0;}}
 VFXS.spl.forEach(q=>{if(q.t>=1){q.m.material.opacity=0;return;}q.t+=dt*4;q.m.scale.setScalar(.6+q.t*2);q.m.material.opacity=.18*(1-q.t)*(1-q.t);});
 {const want=(rainy&&out&&mode==='play')?Math.max(.08,Math.min(.75,(P.pitch+.15)*1.6)):0,el=VFXS.drops;el._o=(el._o||0)+(want-(el._o||0))*Math.min(1,dt*(want>el._o?.8:.35));el.style.opacity=el._o.toFixed(3);if(want>0)el.style.backgroundPositionY=((elapsed*6)%520)+'px';}
 {const r=rainy?.42:1;if(ground.material.roughness!==r){ground.material.roughness=r;ground.material.metalness=rainy?.15:0;}}
 // ---- moonlight shafts on clear nights ----
 {const on=WX==='clear'&&out&&!dawnOn;VFXS.rays.forEach((r,i)=>{if(!r.set||Math.hypot(r.x-P.x,r.z-P.z)>45){const a=R()*6.28,d=rr(12,38);r.x=P.x+Math.cos(a)*d;r.z=P.z+Math.sin(a)*d;r.set=true;}r.m.position.set(r.x,12,r.z);r.m.rotation.set(0,Math.atan2(camera.position.x-r.x,camera.position.z-r.z),.42);r.m.material.opacity+=((on?.022+.01*Math.sin(elapsed*.4+i):0)-r.m.material.opacity)*Math.min(1,dt);});}
 // ---- embers above anything burning ----
 {const fires=revs.filter(r=>r.t>0&&r.g.material.color.r>.9&&r.g.material.color.b<.4);const g=VFXS.emb.geometry,pa=g.attributes.position.array;VFXS.embd.forEach((e,i)=>{if(e.t<=0){if(fires.length&&R()<dt*8){const f=fires[(R()*fires.length)|0];e.x=f.g.position.x+rr(-.3,.3);e.y=f.g.position.y;e.z=f.g.position.z+rr(-.3,.3);e.vx=rr(-.3,.3);e.vy=rr(.8,1.8);e.vz=rr(-.3,.3);e.t=rr(1.2,2.4);}else{e.y=-50;}}else{e.t-=dt;e.vx+=(R()-.5)*dt*2;e.x+=e.vx*dt;e.y+=e.vy*dt;e.z+=e.vz*dt;if(e.t<=0)e.y=-50;}pa[i*3]=e.x;pa[i*3+1]=e.y;pa[i*3+2]=e.z;});g.attributes.position.needsUpdate=true;}
 // ---- lightning bolt in the sky ----
 if(VFXS.bolt){VFXS.boltT-=dt;VFXS.bolt.material.opacity=VFXS.boltT>0?(R()<.7?1:.2):0;if(VFXS.boltT<=-.1){scene.remove(VFXS.bolt);VFXS.bolt=null;}}}

// ===================== THE SILENCE: it follows you, then speaks =====================
let SPV=[];function loadVoices(){try{SPV=speechSynthesis.getVoices()||[];}catch(e){}}try{loadVoices();speechSynthesis.onvoiceschanged=loadVoices;}catch(e){}
function pickVoice(pref){const en=SPV.filter(v=>/^en/i.test(v.lang));for(const p of pref){const v=en.find(v=>new RegExp(p,'i').test(v.name));if(v)return v;}return en[0]||SPV[0]||null;}
let SAYU=null;function say(text,o){try{if(!window.speechSynthesis)return;const busy=speechSynthesis.speaking||speechSynthesis.pending;if(busy)speechSynthesis.cancel();const go=()=>{const u=new SpeechSynthesisUtterance(text);SAYU=u;u.pitch=Math.max(.1,o.pitch);u.rate=o.rate;u.volume=o.vol==null?1:o.vol;const v=pickVoice(o.pref||[]);if(v)u.voice=v;try{speechSynthesis.resume();}catch(e){}speechSynthesis.speak(u);};busy?setTimeout(go,120):go();}catch(e){}}
function narrate(text){say(text,{pitch:.55,rate:.78,vol:.85,pref:['Daniel','Google UK English Male','Fred','Alex','Male','David']});}
const MVOX={"I can see you.": "i_can_see_you", "I know you are in there.": "i_know_you_are_in_there", "Come out… come out…": "come_out_come_out", "I can hear your heart beating.": "i_can_hear_your_heart_beating", "Found your little hiding place.": "found_your_little_hiding_place", "There you are.": "there_you_are", "Closer…": "closer", "I have you now.": "i_have_you_now", "Nowhere left to run.": "nowhere_left_to_run", "Found you.": "found_you", "Mine.": "mine", "Got you.": "got_you", "Nobody leaves.": "nobody_leaves", "I can hear you…": "i_can_hear_you", "Run. Run, little one.": "run_run_little_one", "You cannot hide from me.": "you_cannot_hide_from_me", "I hear your heart.": "i_hear_your_heart", "Your footsteps are so loud.": "your_footsteps_are_so_loud", "Where are you?": "where_are_you", "I know you are here.": "i_know_you_are_here", "I can smell you.": "i_can_smell_you", "Not here…": "not_here", "Where did you go?": "where_did_you_go", "look... behind... you.": "look_behind_you", "you are just getting started.": "you_are_just_getting_started"},MVB={};
function mvLoad(k){if(MVB[k]||!actx)return;MVB[k]='loading';try{fetch('voice/'+k+'.mp3').then(r=>{if(!r.ok)throw 0;return r.arrayBuffer();}).then(b=>actx.decodeAudioData(b)).then(buf=>{MVB[k]=buf;}).catch(()=>{MVB[k]='bad';});}catch(e){MVB[k]='bad';}}
function mvPreload(){try{for(const t in MVOX)mvLoad(MVOX[t]);}catch(e){}}
function mvPlay(text){const k=MVOX[text];if(!k||!actx)return false;const b=MVB[k];if(!b||typeof b==='string'){mvLoad(k);return false;}
 try{speechSynthesis&&speechSynthesis.cancel();}catch(e){}const src=actx.createBufferSource();src.buffer=b;const g=actx.createGain();g.gain.value=1.25;src.connect(g);g.connect(master);src.start();try{tone({f:38,f2:30,g:.3,dur:Math.min(3.5,b.duration+.5),a:.3});}catch(e){}return true;}
function monVoice(text){if(MVOX[text]){mvPlay(text);return;}say(text,{pitch:.35,rate:.68,vol:1,pref:['Google UK English Male','Microsoft Guy Online (Natural)','Microsoft Ryan Online (Natural)','Microsoft Christopher Online (Natural)','Daniel','Google US English','Microsoft David','David','Male']});
 // a raw, wet layer under the words so it sounds like IT, not a robot
 try{const d=distN||master;for(let i=0;i<3;i++){vox({f:rr(70,95),f2:rr(55,70),dur:.75,g:.1,a:.05,fm:[500,1100],q:4,br:.85,at:i*.82,dest:d});nz({f:rr(1800,3200),q:.8,g:.06,dur:.6,a:.1,at:i*.82});}tone({f:38,f2:30,g:.35,dur:2.8,a:.4});}catch(e){}}
const CREEP={cd:60,step:0,quietT:0};
function startCreep(){if(EZ1||M.state==='sneak')return false;if(TUT.on||D.practice||P.hidden||monDead||CAT.on||CAT.monIn||VB.on||night<1)return false;if(CREEP.cd>0)return false;
 M.state='creep';M.ck=0;M.ckT=45;M.voice=99;M.path=null;CREEP.cd=rr(140,220);
 setTimeout(()=>{if(mode==='play'&&M.state==='creep')narrate('It has gone silent.');},900);return true;}
function creepBehindPoint(back){return {x:P.x+Math.sin(P.yaw)*back,z:P.z+Math.cos(P.yaw)*back};}
function creepSeen(){const mp=mon.position,dx=mp.x-P.x,dz=mp.z-P.z,d=Math.hypot(dx,dz)||1,fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw);return (dx*fx+dz*fz)/d>.3&&d<14;}
// --- head-rip death ---
const RIP={t:0};
function ripDeath(){if(mode!=='play')return;DEATHP={x:P.x,z:P.z};P.hidden=null;mode='rip';RIP.t=0;window.__rip=true;try{speechSynthesis.cancel();}catch(e){}
 const fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw);mon.position.set(P.x+fx*.72,0,P.z+fz*.72);mon.rotation.y=Math.atan2(-fx,-fz);rig.rotation.set(-1.15,0,0);rig.position.set(0,.2,0);jaw.rotation.x=1.2;arms[0].rotation.set(-1.5,.9,0);arms[1].rotation.set(-1.5,-.9,0);
 $('msg').style.opacity=0;$('prompt').style.display='none';$('obj').textContent='';$('mini').style.display='none';gunFP.visible=false;
 try{sfx.scare();const d=distN||master;for(let i=0;i<4;i++)vox({f:rr(280,420),f2:rr(900,1300),dur:1.2,g:.5,a:.005,vib:41,vd:200,fm:[900,2400],q:2,dest:d});nz({f:900,q:.5,g:1,dur:.4,a:.002,dest:d});}catch(e){}jsFlash(1);}
function updRip(dt){RIP.t+=dt;const t=RIP.t,hp2=new T.Vector3();mon.updateMatrixWorld(true);head.rotation.set(0,0,0);head.getWorldPosition(hp2);
 if(t<.55){const sh=.04+t*.1;camera.position.set(P.x+sn(t*17,1)*sh,1.55+sn(t*19,2)*sh,P.z+sn(t*16,3)*sh);camera.lookAt(hp2.x,hp2.y,hp2.z);camera.fov+=(30-camera.fov)*Math.min(1,dt*12);jaw.rotation.x=Math.min(1.05,.5+t*3)+Math.sin(t*21)*.05;}
 else{const k0=Math.min(1,(t-.55)/.75),k=k0*k0*(3-2*k0);if(!RIP.cr){RIP.cr=1;try{nz({type:'lowpass',f:500,g:1.4,dur:.25,a:.002});nz({f:2400,q:.6,g:.9,dur:.18,a:.002,at:.05});nz({type:'lowpass',f:300,g:1.2,dur:.5,at:.12});for(let i=0;i<6;i++)nz({f:rr(600,1600),q:3,g:.6,dur:.05,at:.15+i*.05});tone({f:55,f2:20,g:1.2,dur:.8});}catch(e){}splat(20);bleed(camera.position.x,camera.position.y,camera.position.z,40,2.4);shakeT=1.5;}
  camera.position.set(P.x+Math.sin(t*9)*.15*k,Math.max(.22,1.55+k*.9-Math.max(0,t-1.1)*2.6),P.z);lantern.visible=k<.25;camera.rotation.set(-.4*k+Math.sin(t*14)*.4*k,P.yaw+Math.PI*k*1.15,Math.PI*.9*k);camera.fov=30+k*60;
  const ov=$('jsov');if(ov){ov.style.background='rgba(120,0,0,'+(.3+k*.6)+')';ov.style.opacity=1;}}
 camera.updateProjectionMatrix();
 if(t>1.65&&mode==='rip'){const ov=$('jsov');if(ov){ov.style.background='#000';}mode='tear';capture=true;setTimeout(()=>{const ov=$('jsov');if(ov){ov.style.opacity=0;ov.style.background='';}},1500);}}
// --- quick jump scares (you live, but it is ON you) ---
const JS={t:0,kind:'',ox:0,oz:0,after:null};
function jsOverlay(){let el=$('jsov');if(!el){el=document.createElement('div');el.id='jsov';el.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:8;opacity:0;mix-blend-mode:multiply';document.body.appendChild(el);}return el;}
function jsFlash(big){const el=jsOverlay();el.style.transition='none';el.style.background=big?'rgba(160,0,0,.75)':'rgba(140,0,0,.55)';el.style.opacity=1;}
function jumpFace(kind,after){if(EZ1)return false;if(mode!=='play'||monDead)return false;mode='js';JS.t=0;JS.kind=kind;JS.after=after||null;JS.ox=mon.position.x;JS.oz=mon.position.z;
 P.yaw=openYaw(1.4);const fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw);JS.fx=fx;JS.fz=fz;mon.position.set(P.x+fx*1.5,0,P.z+fz*1.5);mon.rotation.y=Math.atan2(-fx,-fz);rig.rotation.set(-1.1,0,0);rig.position.set(0,.16,0);jaw.rotation.x=1.15;arms[0].rotation.set(-1.4,.8,0);arms[1].rotation.set(-1.4,-.8,0);
 $('prompt').style.display='none';try{sfx.scare();const d=distN||master;vox({f:rr(320,420),f2:rr(1000,1400),dur:.9,g:.6,a:.003,vib:43,vd:220,fm:[900,2400],q:2,dest:d});nz({f:1200,q:.4,g:1,dur:.35,a:.001,dest:d});tone({f:48,f2:24,g:1.3,dur:.9,a:.001});}catch(e){}jsFlash(1);shakeT=1;stat('scares',1);return true;}
function updJS(dt){JS.t+=dt;const t=JS.t,hp2=new T.Vector3();if(JS.fx!==undefined){const q=Math.min(1,t/.14),dd=.72+.78*(1-q)*(1-q);mon.position.set(P.x+JS.fx*dd,Math.sin(q*Math.PI)*.12,P.z+JS.fz*dd);}mon.updateMatrixWorld(true);head.rotation.set(0,0,0);head.rotateZ(sn(t*7,1)*.25);head.getWorldPosition(hp2);
 const sh=.035+Math.max(0,.9-t)*.05;camera.position.set(P.x+sn(t*17,2)*sh,P.h+sn(t*19,3)*sh,P.z+sn(t*16,4)*sh);camera.lookAt(hp2.x,hp2.y-.02,hp2.z);camera.fov+=(28-camera.fov)*Math.min(1,dt*14);camera.updateProjectionMatrix();jaw.rotation.x=Math.min(1.05,.5+t*3)+Math.sin(t*21)*.05;
 const el=jsOverlay();el.style.opacity=(.6+.4*Math.sin(t*20))*Math.max(0,1-t/1.1);lamp.intensity=Math.max(0,1.2+sn(t*15,5)*1.4);
 if(t>.95){mode='play';mon.position.y=0;el.style.transition='opacity .6s';el.style.opacity=0;camera.fov=OPT.fov;camera.updateProjectionMatrix();const bx=-Math.sin(P.yaw),bz=-Math.cos(P.yaw);mon.position.set(P.x+bx*2.6,0,P.z+bz*2.6);resolve(mon.position,.48);M.state='hunt';M.target.set(P.x,0,P.z);M.wind=.35;M.path=null;M.voice=0;const f=JS.after;JS.after=null;if(f)f();}}
// --- per-frame: the silence + mistake scares ---
let jsCd=30;
function updCreep(dt){CREEP.cd-=dt;jsCd-=dt;if(mode!=='play')return;const mp=mon.position,pd=Math.hypot(mp.x-P.x,mp.z-P.z);
 if(M.state==='creep'){M.voice=99;
  if(M.ck<2){if(!(M.ck===1)){} /* face where it walks */}
  else mon.rotation.y=Math.atan2(P.x-mp.x,P.z-mp.z);
  // your own footsteps... twice
  if(M.ck>=1&&pd<6&&(FP.spd||0)>.5){CREEP.step-=dt;if(CREEP.step<=0){CREEP.step=rr(.55,.7);setTimeout(()=>{try{nz({type:'lowpass',f:420,g:.06,dur:.12,dest:panner});}catch(e){}},rr(160,260));}}
  if(M.ck===1&&pd<4){pulse(CREEP,dt,2.6,()=>{try{nz({type:'lowpass',f:380,f2:220,g:.05,dur:.9,a:.3,dest:panner});}catch(e){}});if(R()<dt*3)lampOut=Math.max(lampOut,.06);}
  if(M.ck===2){M.ckT2-=dt;if(creepSeen()){ripDeath();return;}const run=(K.ShiftLeft||K.ShiftRight)&&(FP.spd||0)>.8;
   if(run&&pd<9){M.state='hunt';M.target.set(P.x,0,P.z);M.wind=.2;M.path=null;sfx.screech();shakeT=.6;return;}
   if(M.ckT2<=0||pd>10){M.state='wander';M.voice=2;M.timer=0;M.target.set(mp.x+rr(-30,30),0,mp.z+rr(-30,30));try{for(let i=0;i<5;i++)nz({type:'lowpass',f:350,g:.1-i*.015,dur:.3,at:i*.5,dest:panner});}catch(e){}setTimeout(()=>{if(mode==='play')msg('…it let you go.',3);},1500);}}
  if(P.hidden&&M.ck<2){M.state='search';M.center.set(P.x,0,P.z);M.target.copy(M.center);M.timer=6;M.path=null;}}
 if(jsCd>0||monDead||TUT.on||D.practice||EZ1)return;
 // mistake 1: sprinting while it is searching close by
 if(M.state==='search'&&pd<16&&(K.ShiftLeft||K.ShiftRight)&&(FP.spd||0)>.8&&!P.hidden){jsCd=40;jumpFace('run');return;}
 // mistake 2: holding your lantern up when it is right there in front of you
 if(raise>.6&&pd<6.5&&M.state!=='hunt'&&!P.hidden){const dx=mp.x-P.x,dz=mp.z-P.z,fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw);if((dx*fx+dz*fz)/(pd||1)>.75){jsCd=40;jumpFace('light');return;}}}

// ===================== SMARTER MONSTER + 50-THING PACK =====================
function eliasVoice(t){say(t,{pitch:.7,rate:.82,vol:.95,pref:['Daniel','Google UK English Male','Alex','David','Male']});}
function vossVoice(t){say(t,{pitch:.25,rate:.86,vol:1,pref:['Fred','Ralph','Google UK English Male','Daniel','David','Male']});try{for(let i=0;i<4;i++)nz({f:2600,q:.8,g:.05,dur:.5,at:i*.6});}catch(e){}}
function hermitVoice(t){say(t,{pitch:1.2,rate:.78,vol:.9,pref:['Albert','Grandpa','Daniel','Male']});}
const NTITLE=['The First Night','The Hungry Night','The Listening Night','The Night It Learned','The Last Night'];
const SMART={prev:'',hbCd:0,inspCd:0,trapMsg:false,heartMsg:false};
const ST2={coins:0,witch:false,witchDone:false,proc:null,procDone:false,lakeT:0,lakeDone:false,starT:20,fakeT:60,paT:rr(200,320),paDone:0,chimeT:0,carOn:false,faceT:0,music:{}};
const TAPES=[
 ['TAPE 1 — ELIAS MARROW, OCTOBER 1987','My name is Elias Marrow. I dig the graves here. Mr. Voss pays cash and does not ask questions, so I do not ask him why the old graves are always open when I come in at six.'],
 ['TAPE 2 — ELIAS MARROW','I followed him tonight. He was in the Hollis family vault with a crowbar. Rings. Gold teeth. He fills a sack and puts it on the midnight freight. He has been robbing the dead for years.'],
 ['TAPE 3 — ELIAS MARROW','Margaret found the ledger in his desk. She told me to go to the sheriff. I said wait until I have proof. I should not have said wait.'],
 ['TAPE 4 — ELIAS MARROW','Margaret did not come home. Voss says she left town. Her coat is still on the hook. Her boots are by the door. People do not leave without their boots.'],
 ['TAPE 5 — ELIAS MARROW','He has asked me to dig under the chapel tomorrow. Just me. If you are hearing this, I did not come back up. Do not trust Henry Voss. Do not… do not let them bury me.']];
const LETTERS=[
 ['A LETTER ON THE TABLE — No. 1','Dear Ruth. We are leaving the Row tonight. Every night now there is scratching under the floor, and it gets closer to the bedroom. Mr. Voss says it is badgers. Badgers do not knock.'],
 ['A LETTER ON THE TABLE — No. 2','To whoever finds this. My husband went out to see what was crying by the bell. That was Tuesday. I am locking the door and I am not opening it for anyone who sounds like him.'],
 ['A LETTER ON THE TABLE — No. 3','The gravedigger, Elias, he was a kind man. He fixed our fence for free. They say he ran off. His truck is still behind the chapel. Nobody runs off without their truck.'],
 ['A LETTER ON THE TABLE — No. 4','Something walked past the window on all fours. Its arms were too long. It stopped right outside, and it said my name, in my mother’s voice. My mother has been dead nine years.'],
 ['A LETTER ON THE TABLE — No. 5','We are the last ones. If you are reading this, do not run. It does not see you. It HEARS you. Walk softly, breathe slowly, and never, ever answer it.']];
const EPI2=['WALTER ASHBY — HE WENT TO CHECK','SISTERS, TOGETHER, QUIETLY','HE HEARD IT CALL HIS NAME AND ANSWERED','SHE SANG TO KEEP IT AWAY. IT LIKED THE SINGING.','REST IN PIECES','NO FLOWERS. IT FOLLOWS THE SMELL.','BURIED TWICE. THE FIRST TIME DID NOT TAKE.','A MAN WHO NEVER LOOKED BACK. HE LIVED TO 91.','LOST IN THE CORN','TAKEN BY THE LAKE','HE RAN','DON’T LOOK BEHIND YOU'];
// ---- world pieces ----
const SIG={x:-30,z:RAILZ-4.2},PLAT={x:-30,z:RAILZ+2.6},FENCE={x:-H+1.2,z:72},CAR={x:-84,z:-88},CHIME={x:-80,z:-104},ALTAR={x:CH.x+2.6,z:CH.z+1.6};
const LOCKB={x:LK.x+Math.cos(.55)*(LK.r+.9),z:LK.z+Math.sin(.55)*(LK.r+.9)};
let ALT=[],FACE=null,PROC=[],LAKEM=null,STAR=null,CARL=[],FIRES=[],FBOMB={on:false,m:null,v:new T.Vector3()};
(function(){
 // signal box + platform
 const sb=new T.Group();sb.position.set(SIG.x,0,SIG.z);sb.add(bx(2.2,2.4,1.8,0,1.2,0,woodM));sb.add(bx(2.6,.15,2.2,0,2.5,0,darkStoneM));const lv=bx(.08,1.1,.08,1.4,.6,0,ironM);lv.rotation.z=.4;sb.add(lv);sb.userData.lv=lv;scene.add(sb);boxes.push({x0:SIG.x-1.1,x1:SIG.x+1.1,z0:SIG.z-.9,z1:SIG.z+.9});SIG.g=sb;
 scene.add(bx(16,.35,2.4,PLAT.x-4,.17,PLAT.z+.4,darkStoneM));
 {const t=tex(256,(x,s2)=>{x.fillStyle='#1a1410';x.fillRect(0,0,s2,s2);x.fillStyle='#d8c8a0';x.font='bold 30px Georgia';x.textAlign='center';x.fillText('HOLLOW REST',128,110);x.font='20px Georgia';x.fillText('HALT',128,150);},0);const b=new T.Mesh(new T.PlaneGeometry(1.6,.8),new T.MeshLambertMaterial({map:t,side:T.DoubleSide}));b.position.set(PLAT.x-8,2.2,PLAT.z+1.4);scene.add(b);scene.add(cyl(.05,.05,2,PLAT.x-8,1,PLAT.z+1.4,ironM,5));}
 // passengers in the ghost train
 {const pm=new T.MeshBasicMaterial({color:0x0a0a0a,transparent:true,opacity:.8});for(let c=0;c<4;c++)for(let w=0;w<5;w++){if(R()<.45)continue;const p=new T.Mesh(new T.SphereGeometry(.22,8,6),pm);p.scale.set(1,1.8,1);p.position.set(-c*11-4+w*2,2.45,0);TRN.g.add(p);}}
 // altar candles (unlit)
 for(let i=0;i<3;i++){const c=cyl(.04,.045,.3,ALTAR.x+(i-1)*.25,1.05,ALTAR.z,new T.MeshStandardMaterial({color:0xe8e0c8,roughness:.6}),8);c.visible=false;scene.add(c);const g=glow(ALTAR.x+(i-1)*.25,1.27,ALTAR.z,0xffb050,.35,0);ALT.push({c,g});}
 scene.add(bx(1.4,.9,.6,ALTAR.x,.45,ALTAR.z,stoneM));
 // the face that appears in lightning
 {const t=tex(256,(x,s2)=>{x.clearRect(0,0,s2,s2);x.fillStyle='#d8d4cc';x.beginPath();x.ellipse(128,120,70,100,0,0,7);x.fill();x.fillStyle='#000';[[100,95],[156,95]].forEach(e=>{x.beginPath();x.ellipse(e[0],e[1],17,23,0,0,7);x.fill();});x.fillStyle='#fff';[[100,95],[156,95]].forEach(e=>{x.beginPath();x.arc(e[0],e[1],2.4,0,7);x.fill();});x.fillStyle='#200';x.beginPath();x.ellipse(128,165,52,20,0,0,Math.PI);x.fill();x.strokeStyle='#eee';x.lineWidth=2;for(let i=0;i<14;i++){const px=80+i*7;x.beginPath();x.moveTo(px,163);x.lineTo(px+3,178);x.stroke();}},0);
  FACE=new T.Sprite(new T.SpriteMaterial({map:t,transparent:true,opacity:0,depthWrite:false,fog:false}));FACE.scale.set(1.3,1.3,1);scene.add(FACE);}
 // funeral procession figures
 {const hm=new T.MeshLambertMaterial({color:0x0c0c10,transparent:true,opacity:.85});for(let i=0;i<6;i++){const g=new T.Group();const b=new T.Mesh(new T.ConeGeometry(.38,1.9,8),hm);b.position.y=.95;g.add(b);const h=new T.Mesh(new T.SphereGeometry(.17,8,6),hm);h.position.y=1.85;g.add(h);const l=glow(.35,1.1,.2,0xffb060,.5,.85);scene.remove(l);g.add(l);g.visible=false;scene.add(g);PROC.push(g);}}
 // the pale thing in the lake
 {LAKEM=new T.Mesh(new T.SphereGeometry(1,14,10),new T.MeshStandardMaterial({color:0xcfc6b8,roughness:.6}));LAKEM.scale.set(1.6,.5,.9);LAKEM.visible=false;scene.add(LAKEM);}
 // shooting star
 {STAR=glow(0,-50,0,0xf0f4ff,1.6,0);STAR.material.fog=false;STAR.userData={t:0,v:new T.Vector3()};}
 // an abandoned car in the Row (its alarm still works)
 {const cm=new T.MeshStandardMaterial({color:0x3a2a22,metalness:.5,roughness:.6}),g=new T.Group();g.position.set(CAR.x,0,CAR.z);g.rotation.y=.4;g.add(bx(1.8,.7,4,0,.6,0,cm));g.add(bx(1.6,.6,2,0,1.2,-.2,cm));g.add(bx(1.5,.45,.05,0,1.2,.81,new T.MeshStandardMaterial({color:0x101418,metalness:.9,roughness:.1})));[[-.8,1.3],[.8,1.3],[-.8,-1.3],[.8,-1.3]].forEach(q=>{const w=cyl(.32,.32,.2,q[0],.32,q[1],blackM,10);w.rotation.z=Math.PI/2;g.add(w);});
  [-.6,.6].forEach(o=>{const l=glow(o,.65,2.05,0xfff0c0,.8,0);l.material.fog=true;scene.remove(l);g.add(l);CARL.push(l);});scene.add(g);boxes.push({x0:CAR.x-1.4,x1:CAR.x+1.4,z0:CAR.z-2.2,z1:CAR.z+2.2});}
 // wind chimes in the Row
 scene.add(cyl(.04,.04,2.4,CHIME.x,1.2,CHIME.z,woodM,5));for(let i=0;i<5;i++)scene.add(cyl(.015,.015,.4,CHIME.x+(i-2)*.08,1.9,CHIME.z,ironM,5));
 // hermit's window light
 {const g=glow(CAB.x+3.05,1.5,CAB.z-1.2,0xffa850,1.1,.7);g.userData.base=.7;window.__cabL=g;}
 // graffiti in the houses
 const GR=['IT HEARS YOU','DON’T ANSWER IT','HE BURIED HIM ALIVE','HOLD YOUR BREATH','IT IS BEHIND YOU'];VILL.forEach((v,i)=>{const t=tex(256,(x,s2)=>{x.clearRect(0,0,s2,s2);x.fillStyle='rgba(120,10,10,.85)';x.font='bold 30px Georgia';x.textAlign='center';x.save();x.translate(128,128);x.rotate(-.08);GR[i].split(' ').reduce((a,w,k,arr)=>{return a;},0);const words=GR[i];x.fillText(words.length>14?words.slice(0,words.indexOf(' ',8)):words,0,-6);if(words.length>14)x.fillText(words.slice(words.indexOf(' ',8)+1),0,30);x.restore();},0);
  const m=new T.Mesh(new T.PlaneGeometry(2.2,2.2),new T.MeshBasicMaterial({map:t,transparent:true,depthWrite:false,fog:true}));const sd=v[2]==='s'?-1:1;m.position.set(v[0],1.6,v[1]+sd*2.6);if(sd<0)m.rotation.y=0;else m.rotation.y=Math.PI;if(v[2]==='e'){m.position.set(v[0]-3.1,1.6,v[1]);m.rotation.y=Math.PI/2;}scene.add(m);});
 // blood handprints on the mausoleum
 {const t=tex(128,(x,s2)=>{x.clearRect(0,0,s2,s2);x.fillStyle='rgba(90,6,6,.85)';for(let k=0;k<3;k++){const ox=20+k*36,oy=30+k*14;x.beginPath();x.ellipse(ox+12,oy+30,11,14,0,0,7);x.fill();for(let f=0;f<5;f++){x.beginPath();x.ellipse(ox+f*5.5,oy+8-(f===0?-8:0),2.6,9,f*.15-.3,0,7);x.fill();}}},0);const m=new T.Mesh(new T.PlaneGeometry(2,2),new T.MeshBasicMaterial({map:t,transparent:true,depthWrite:false}));m.position.set(MAUS.x-6.02,1.5,MAUS.z+1.8);m.rotation.y=-Math.PI/2;scene.add(m);}
 // the firebomb in flight
 {const m=new T.Mesh(new T.CylinderGeometry(.03,.04,.22,8),new T.MeshStandardMaterial({color:0x5a3a10,emissive:0xff6010,emissiveIntensity:.6}));m.visible=false;scene.add(m);FBOMB.m=m;}
})();
// ---- readables ----
VILL.forEach((v,i)=>acts.push({x:v[0]-1,z:v[1]+.4,r:1.6,hold:0,label:()=>'Read the letter on the table',can:()=>true,done(){readNote(LETTERS[i][0],LETTERS[i][1]);lore('letters');}}));
acts.push({x:CAB.x-1.6,z:CAB.z+1.2,r:1.4,hold:0,label:()=>'Read the hermit’s journal',can:()=>true,done(){readNote('THE HERMIT’S JOURNAL — W. PIKE','I was the night watchman in ’87. The night Elias went under the chapel, I heard him knocking from inside the ground for three days. Voss told me to go home. I did not go home. I built this cabin, and I have been listening to Elias crawl around out there ever since. He does not know me any more. He does not know anyone.');lore('hermit');}});
acts.push({x:MAUS.x+.5,z:MAUS.z+3.4,r:1.5,hold:0,label:()=>'Read the Voss family records',can:()=>true,done(){readNote('VOSS FAMILY RECORDS','1921 — Josiah Voss, caretaker. 1950 — Arthur Voss, caretaker. 1979 — Henry Voss, caretaker.\nIn the margin, in three different hands, the same note again and again: “Hollis vault — done.” “Ashby plot — done.” “Marrow — DONE.”\nThree generations of caretakers. Three generations of empty coffins.');lore('vault');}});
acts.push({x:LOCKB.x,z:LOCKB.z,r:1.4,hold:1.5,label:()=>TH.lockb?'The empty lockbox':'Drag the rusted lockbox out of the reeds',can:()=>!TH.lockb,done(){TH.lockb=1;readNote('A RUSTED LOCKBOX','Wedding rings. Gold teeth. A pocket watch engraved “For Hollis, 1902”. And a small silver locket with a photo of Elias inside — it says M.M.\nThis is what Voss was robbing from the dead. This is why Margaret had to disappear. She knew.');lore('lockbox');stones+=2;hud();}});
acts.push({x:SIG.x+1.6,z:SIG.z+1,r:1.4,hold:0,label:()=>'Read the freight ledger',can:()=>true,done(){readNote('MIDNIGHT FREIGHT — LEDGER 1987','Oct 3 — 1 sack, “machine parts”, H. Voss.\nOct 10 — 2 sacks, “machine parts”, H. Voss.\nOct 17 — 1 crate, very heavy, “do not open”, H. Voss.\nOct 18 — Last train. Line closed by order of the cemetery board. (Chairman: H. Voss.)');lore('freight');}});
// ---- train escape ----
acts.push({x:SIG.x+1.5,z:SIG.z-.6,r:1.5,hold:1.2,label:()=>TRN.stop?'The signal is set — wait on the platform':inv.ticket?'Pull the signal lever (the midnight train will stop for you)':'A signal lever. The train only stops for passengers with a ticket.',can:()=>inv.ticket&&!TRN.stop,done(){TRN.stop=true;SIG.g.userData.lv.rotation.z=-.4;try{sfx.clunk();nz({f:900,q:3,g:.3,dur:.3});}catch(e){}if(!TRN.on)TRN.cd=Math.min(TRN.cd,18);msg('CLUNK. The signal drops to STOP. Wait on the platform… and stay alive until it comes.',4);hear(SIG,30);}});
const BOARD={x:0,z:PLAT.z,r:3,hold:.8,label:()=>'Board the ghost train',can:()=>TRN.stopped,done(){win('train');}};acts.push(BOARD);
// ---- woods escape ----
acts.push({x:FENCE.x,z:FENCE.z,r:1.8,hold:5,label:()=>inv.cutters?'Cut through the back fence (slow and LOUD)':'The back fence. Rusty wire — you could cut it with the right tool.',can:()=>inv.cutters,done(){win('woods');}});
// ---- altar, trader ----
acts.push({x:ALTAR.x-.9,z:ALTAR.z,r:1.4,hold:1,label:()=>null,can:()=>false,done(){P.bless=true;ALT.forEach(a=>{a.c.visible=true;a.g.material.opacity=.9;});try{tone({f:523,g:.06,dur:2});tone({f:659,g:.05,dur:2,at:.2});tone({f:784,g:.04,dur:2.4,at:.4});}catch(e){}msg('The candles catch. You feel… protected. The next time it grabs you, the light will make it let go.',5);award('blessed');}});
function tradeOffer(){if(inv.gun&&inv.ammo<4)return {c:6,t:'2 shotgun shells',f:()=>{inv.ammo+=2;}};if(inv.oil<.5)return {c:3,t:'a tin of lamp oil',f:()=>{inv.oil=Math.min(1,inv.oil+.6);}};if(!inv.holy)return {c:5,t:'a flask of holy water',f:()=>{inv.holy++;}};if(inv.bottle<2)return {c:2,t:'a glass bottle',f:()=>{inv.bottle++;}};return {c:4,t:'a handful of stones and a bandage',f:()=>{stones+=4;inv.band++;}};}
acts.push({x:CAB.x+3.6,z:CAB.z+1.2,r:1.4,hold:.4,label:()=>null,can:()=>false,done(){const o=tradeOffer();inv.coins-=o.c;o.f();hud();try{sfx.creak();}catch(e){}
 const L=['Quiet. Quiet. Here, take it.','Silver. Good. He cannot hear silver.','Do not stay near my door. He follows the talking.','Walk soft, boy. Walk soft.'];const l=L[(R()*L.length)|0];hermitVoice(l);msg('A hand pushes '+o.t+' through the hatch. “'+l+'”',4);if(!TH.herm1){TH.herm1=1;lore('hermit');}}});
// ---- firebombs ----
function throwBomb(){return;if(mode!=='play'||P.down||P.hidden||FBOMB.on)return;if(inv.bottle<=0||inv.oil<.25){msg('A firebomb needs a bottle and some lamp oil.',1.8);return;}inv.bottle--;inv.oil-=.25;hud();FP.thr=.45;const d=new T.Vector3();camera.getWorldDirection(d);FBOMB.m.position.copy(camera.position).addScaledVector(d,.5);FBOMB.v.copy(d).multiplyScalar(15);FBOMB.v.y+=3.5;FBOMB.on=true;FBOMB.m.visible=true;sfx.whoosh();if(!TH.fb){TH.fb=1;msg('Lamp oil in a bottle, lit rag in the neck. It hates fire.',3);}}
function igniteAt(x,z){try{nz({f:6000,q:1,g:.6,dur:.3});nz({type:'lowpass',f:500,g:.6,dur:1.6,a:.05});}catch(e){}const f={x,z,t:12,gl:[]};for(let i=0;i<9;i++){const g=glow(x+rr(-1.1,1.1),rr(.2,1.1),z+rr(-1.1,1.1),0xff7020,rr(.6,1.3),.95);revs.push({g,t:12+rr(-1,1)});f.gl.push(g);}FIRES.push(f);hear({x,z},38);shakeT=.3;}
// ---- placement each game ----
function placeStory(){const sp=ZSP.concat(spots).sort(()=>Math.random()-.5);let k=0;const at=()=>{const p=sp[(k++)%sp.length];return [p[0]+rr(-1.5,1.5),p[1]+rr(-1.5,1.5)];};
 for(let i=0;i<5;i++){const p=at();addPick('tape',p[0],p[1]);}
 
 {const p=at();addPick('watch',p[0],p[1]);}
 let n=0,tr=0;while(n<25&&tr<900){tr++;const x=rr(-E+4,E-4),z=rr(-E+4,E-4);if(!clear(x,z,.6)||inDeep(x,z,.5))continue;n++;}
 addPick('cutters',VILL[0][0]+1.6,VILL[0][1]-1.2);addPick('ticket',MAUS.x+3.4,MAUS.z-3.6);VILL.forEach((v,i)=>addPick('photo',v[0]+rr(-1.6,1.6),v[1]+rr(-1.2,1.2)));}
// ---- per-frame ----
function updSmart(dt){if(mode!=='play')return;const mp=mon.position,pd=Math.hypot(mp.x-P.x,mp.z-P.z),smart=!TUT.on&&!D.practice&&!EZ1&&!UG.on;
 // (1) it guesses where you were heading when it loses you
 if(SMART.prev==='hunt'&&M.state==='search'&&smart&&night>=2){const vx=P.vx||0,vz=P.vz||0;M.center.x+=Math.max(-12,Math.min(12,vx*3));M.center.z+=Math.max(-12,Math.min(12,vz*3));M.target.copy(M.center);M.path=null;}
 SMART.prev=M.state;
 // (2) it checks hiding places while it searches
 SMART.inspCd-=dt;if(smart&&night>=2&&M.state==='search'&&!M.insp&&SMART.inspCd<=0){let best=null,bd=14;for(const h of HIDES){if(h.off)continue;const d=Math.hypot(h.ex-M.center.x,h.ez-M.center.z);if(d<bd){bd=d;best=h;}}if(best){M.insp={h:best,t:0};SMART.inspCd=rr(8,14);M.timer=Math.max(M.timer,6);}}
 if(M.insp){if(M.state!=='search'){M.insp=null;}else{const h=M.insp.h;M.timer=Math.max(M.timer,1);M.target.set(h.ex,0,h.ez);if(Math.hypot(mp.x-h.ex,mp.z-h.ez)<1.5){M.insp.t+=dt;M.sniffT=Math.max(M.sniffT||0,.5);if(M.insp.t<dt*1.5){sfx.sniff();caption('sniffing at a hiding place');if(P.hidden===h)MT.say(['I can see you.','I know you are in there.','Come out… come out…','I can hear your heart beating.','Found your little hiding place.'],true);else if(R()<.35)MT.say(['Not here…','Where did you go?']);}
   if(M.insp.t>2.2){const me=P.hidden===h;M.insp=null;SMART.inspCd=rr(14,22);if(me){if(P.hb){msg('It sniffs at the lid… and moves on. (Holding your breath saved you.)',3.5);}else{msg('It found you. It checked your hiding place.',2);caught();return;}}}}}}
 // (3) it remembers your traps
 if(M.trapWise&&!monDead&&M.stun<=0)for(const t of traps){if(t.on&&t.arm<=0&&Math.hypot(mp.x-t.x,mp.z-t.z)<2.2){t.on=false;t.m.visible=false;try{sfx.crash();}catch(e){}if(!SMART.trapMsg){SMART.trapMsg=true;msg('It remembers the trap. It knocked it aside without stepping in it.',3.5);}}}
 // (4) close up, it can hear your heart pounding
 SMART.hbCd-=dt;if(smart&&night>=2&&!P.hidden&&!P.hb&&pd<2.6&&P.stam<.45&&M.state!=='hunt'&&M.state!=='creep'&&SMART.hbCd<=0&&!monDead){SMART.hbCd=12;try{for(let i=0;i<4;i++)tone({f:52,g:.35,dur:.12,at:i*.4});}catch(e){}hear(P,999);if(!SMART.heartMsg){SMART.heartMsg=true;msg('It heard your HEART. When it is this close, hold your breath (Space).',4);}}
 // fires: it will not cross them
 for(let i=FIRES.length-1;i>=0;i--){const f=FIRES[i];f.t-=dt;if(f.t<=0){FIRES.splice(i,1);continue;}const d=Math.hypot(mp.x-f.x,mp.z-f.z);if(!monDead&&d<2.8){const k=(2.9-d)/(d||1);mp.x+=(mp.x-f.x)*k;mp.z+=(mp.z-f.z)*k;if(!f.hit){f.hit=1;M.stun=Math.max(M.stun||0,2.2);try{sfx.screech();}catch(e){}caption('it shrieks at the fire');}}}
 if(FBOMB.on){FBOMB.v.y-=20*dt;FBOMB.m.position.addScaledVector(FBOMB.v,dt);FBOMB.m.rotation.x+=dt*10;const bp=FBOMB.m.position;if(bp.y<=.1||(bp.y<2&&blocked(bp.x,bp.z,0))){FBOMB.on=false;FBOMB.m.visible=false;igniteAt(bp.x,bp.z);}}
 // collar → the ghost dog stays with you
 if(inv.collar&&!DOG.forever&&DOG.on&&Math.hypot(DOG.x-P.x,DOG.z-P.z)<3){DOG.forever=true;inv.collar=false;hud();msg('You buckle the old collar around the ghost dog’s neck. It wags. It is YOUR dog now — it will warn you when IT comes.',5);award('goodboy');}
 if(DOG.forever&&!CAT.on){if(!DOG.on){DOG.on=true;DOG.g.visible=true;DOG.x=P.x+2;DOG.z=P.z+2;}DOG.t=60;}
 // pocket watch ticks faster when it is near
 if(inv.watch&&!monDead){const r=pd<15?.18:pd<30?.4:pd<50?.8:1.6;pulse(ST2.music.w||(ST2.music.w={}),dt,r,()=>{try{nz({f:5200,q:6,g:pd<15?.06:.03,dur:.02});}catch(e){}});}
 // train: stopping for you
 if(TRN.on&&TRN.stop){BOARD.x=TRN.x-TRN.dir*12;BOARD.z=PLAT.z;}
 // lightning face, chase music, witching hour, procession, lake, stars, fake steps, Voss on the speakers, the car, chimes
 if(ST2.faceT>0){ST2.faceT-=dt;FACE.material.opacity=ST2.faceT>0?.95:0;}
 if(M.state==='hunt'&&!monDead){const mus=ST2.music,k=Math.max(.2,1-pd/40);pulse(mus.h||(mus.h={}),dt,.48,()=>{try{tone({type:'sawtooth',f:55,g:.06*k,dur:.4});tone({type:'sawtooth',f:58.3,g:.05*k,dur:.4});nz({type:'lowpass',f:160,g:.1*k,dur:.15});}catch(e){}});pulse(mus.t||(mus.t={}),dt,.12,()=>{try{tone({f:rr(880,940),g:.012*k,dur:.1});}catch(e){}});}
 {const mins=1422+elapsed*.45;if(!ST2.witch&&!ST2.witchDone&&mins>=1620&&!TUT.on){ST2.witch=true;narrate('It is three o’clock. The witching hour.');try{scene.fog.density*=1.4;}catch(e){}for(let i=0;i<13;i++)try{tone({f:180,f2:178,g:.08,dur:2.4,at:i*1.4});}catch(e){}msg('3:00 AM — THE WITCHING HOUR. It is faster now. The fog is thicker.',5);}
  if(ST2.witch&&mins>=1656){ST2.witch=false;ST2.witchDone=true;try{scene.fog.density/=1.4;}catch(e){}}}
 if(!ST2.procDone&&night>=2&&elapsed>200&&R()<dt*.004&&!CAT.on){ST2.procDone=true;ST2.proc={t:0};PROC.forEach((g,i)=>{g.visible=true;g.position.set(-55-i*2.4,0,-84);g.rotation.y=Math.PI/2;});}
 if(ST2.proc){ST2.proc.t+=dt;PROC.forEach(g=>{g.position.x+=dt*1.1;});pulse(ST2.proc,dt,3,()=>{const d=makePan(PROC[2].position.x,1.5,-84);try{for(let i=0;i<3;i++)vox({f:[98,110,123][i],f2:[96,108,121][i],dur:2.6,g:.05,fm:[600,1100],q:5,br:.3,dest:d||master});}catch(e){}});
  const near=PROC.some(g=>Math.hypot(g.position.x-P.x,g.position.z-P.z)<9);if(near||ST2.proc.t>100){PROC.forEach(g=>{g.visible=false;});if(near)msg('…there was nobody there.',2.5);ST2.proc=null;}else if(!TH.proc&&PROC.some(g=>Math.hypot(g.position.x-P.x,g.position.z-P.z)<40)){TH.proc=1;msg('Lanterns, in a line, moving through the north rows. A funeral. At this hour?',4);}}
 if(!ST2.lakeDone&&Math.hypot(P.x-LK.x,P.z-LK.z)<LK.ir+.5){ST2.lakeT+=dt;if(ST2.lakeT>9){ST2.lakeDone=true;const a=R()*6.28;LAKEM.position.set(LK.x+Math.cos(a)*(LK.ir+5),-.6,LK.z+Math.sin(a)*(LK.ir+5));LAKEM.visible=true;LAKEM.userData.t=0;try{for(let i=0;i<10;i++)nz({type:'lowpass',f:rr(300,700),g:.12,dur:.12,at:i*.12});}catch(e){}}}
 if(LAKEM.visible){LAKEM.userData.t+=dt;const t=LAKEM.userData.t;LAKEM.position.y=t<1.5?-.6+t*.45:t<3.5?.05:.05-(t-3.5)*.4;LAKEM.rotation.z+=dt*.4;if(t>1.6&&!TH.lakem){TH.lakem=1;msg('Something pale and enormous rolled over in the water. Then it sank.',4);}if(t>5)LAKEM.visible=false;}
 if(WX==='clear'){ST2.starT-=dt;if(ST2.starT<=0){ST2.starT=rr(25,60);const a=R()*6.28;STAR.position.set(P.x+Math.cos(a)*140,rr(55,80),P.z+Math.sin(a)*140);STAR.userData.v.set(rr(-60,60),-rr(10,20),rr(-60,60));STAR.userData.t=.8;}}
 if(STAR.userData.t>0){STAR.userData.t-=dt;STAR.position.addScaledVector(STAR.userData.v,dt);STAR.material.opacity=Math.max(0,STAR.userData.t);}
 if(pd>40&&M.state!=='creep'){ST2.fakeT-=dt;if(ST2.fakeT<=0){ST2.fakeT=rr(70,140);const d=makePan(P.x+Math.sin(P.yaw)*3,0,P.z+Math.cos(P.yaw)*3);try{for(let i=0;i<3;i++)nz({type:'lowpass',f:420,g:.07,dur:.12,at:.3+i*.55,dest:d||master});}catch(e){}}}
 if(night>=2&&ST2.paDone<night){ST2.paT-=dt;if(ST2.paT<=0){ST2.paDone=night;ST2.paT=rr(200,320);const L=['Watchman. You are making a great deal of noise.','I can hear you from my office, and so can he.','Do you know why I hire watchmen? Because he gets hungry.','Stop running. It only makes him faster.'];vossVoice(L[(R()*L.length)|0]);msg('The old loudspeakers crackle. Voss is talking.',3);}}
 {const cd=Math.hypot(mp.x-CAR.x,mp.z-CAR.z),near=!monDead&&cd<12;if(near!==ST2.carOn){ST2.carOn=near;CARL.forEach(l=>l.material.opacity=near?.9:0);}
  if(false&&(K.ShiftLeft||K.ShiftRight)&&(FP.spd||0)>.7){TH.carA=1;const d=makePan(CAR.x,1,CAR.z);try{for(let i=0;i<16;i++){tone({type:'square',f:i%2?660:880,g:.12,dur:.3,at:i*.32,dest:d||master});}}catch(e){}hear(CAR,60);msg('You bumped the car — the ALARM is going off!',3);}}
 if(!monDead&&Math.hypot(mp.x-CHIME.x,mp.z-CHIME.z)<12){ST2.chimeT-=dt;if(ST2.chimeT<=0){ST2.chimeT=1.5;const d=makePan(CHIME.x,1.9,CHIME.z);try{for(let i=0;i<4;i++)tone({f:[1047,1175,1319,1568][(R()*4)|0],g:.04,dur:1.2,at:i*.15,dest:d||master});}catch(e){}caption('wind chimes — but there is no wind');}}
 if(P.hidden&&P.hidden.name&&P.hidden.name.indexOf('hermit')>=0&&!TH.bedS){TH.bedS=1;if(inv.gun){inv.ammo+=1;msg('Under the bed, your hand finds a single shotgun shell.',3);}else{stones+=5;inv.oil=Math.min(1,inv.oil+.3);msg('Under the bed: a sack of stones and a little lamp oil.',3);}hud();}
 if(window.__cabL){window.__cabL.material.opacity=.7*(.8+Math.sin(elapsed*7)*.1+Math.sin(elapsed*13)*.1);}}
// ---- compass ----
let CMP=null;function updCompass(){return;if(!CMP){CMP=document.createElement('div');CMP.id='cmp';CMP.style.cssText='position:fixed;top:34px;left:50%;transform:translateX(-50%);width:420px;height:26px;overflow:hidden;pointer-events:none;z-index:5;font:bold 13px Georgia;color:#cdbfa0;text-shadow:0 0 4px #000;-webkit-mask-image:linear-gradient(90deg,transparent,#000 25%,#000 75%,transparent);mask-image:linear-gradient(90deg,transparent,#000 25%,#000 75%,transparent)';document.body.appendChild(CMP);}
 const vis=mode==='play'&&!document.body.classList.contains('nohud')&&!document.body.classList.contains('cine');CMP.style.display=vis?'block':'none';if(!vis)return;
 const W=420,fov=Math.PI*1.1,pos=a=>{let r=a-P.yaw;r=Math.atan2(Math.sin(r),Math.cos(r));return W/2-r/fov*W;};const bear=(x,z)=>Math.atan2(-(x-P.x),-(z-P.z));let h='';
 [['N',0],['NE',-Math.PI/4],['E',-Math.PI/2],['SE',-3*Math.PI/4],['S',Math.PI],['SW',3*Math.PI/4],['W',Math.PI/2],['NW',Math.PI/4]].forEach(d=>{const x=pos(d[1]);if(x>-20&&x<W+20)h+='<span style="position:absolute;top:4px;left:'+(x-8)+'px;'+(d[0].length>1?'font-size:10px;opacity:.6':'')+'">'+d[0]+'</span>';});
 let g=null;if(inv.map){const og=GEN.find(q=>!q.on);if(gens<3&&og)g=[og.x,og.z,'⚡'];else if(gens>=3)g=[0,-H,'⛩'];}if(g){const x=pos(bear(g[0],g[1]));if(x>-10&&x<W+10)h+='<span style="position:absolute;top:2px;left:'+(x-7)+'px;color:#f0d070;font-size:15px">'+g[2]+'</span>';}
 h+='<span style="position:absolute;top:18px;left:'+(W/2-1)+'px;width:2px;height:7px;background:#cdbfa0"></span>';CMP.innerHTML=h;}

// ===================== 50 MORE =====================
const Q4={echoCd:rr(70,110),echo:null,stunPrev:0,stunN:0,napCd:rr(60,120),guardCd:30,wolfT:1e12,organDone:false,bloodDone:false,kidsDone:false,phoneDone:false,phoneT:0,gramT:0,gramDone:false,mirrorDone:false,spiderCd:rr(60,120),ping:null,wishCd:0,fishCd:0,ghostW:null,ghostDone:false,deadTip:false,turn:0,lastSt:'',radioCd:0,lx:null,lz:null,bikeT:0,napSneak:false};
const PHOTOS=[['PHOTOGRAPH — 1986','Elias and Margaret on their wedding day, outside the chapel. Behind them, half out of the frame, Henry Voss is staring at Margaret’s necklace.'],['PHOTOGRAPH — SUMMER','A family picnic in the Paupers’ Field. Somebody has scratched out every face except one: a smiling man with a shovel. On the back: “MR. VOSS — OUR FRIEND”.'],['PHOTOGRAPH — THE ROW','Gravedigger’s Row, full of people. Washing lines, a dog, a bicycle. Every house in this photo is empty now.'],['PHOTOGRAPH — NIGHT','Too dark to see much. A flash went off in the corn. In the middle of the picture, very small, something pale is standing up on two legs.'],['PHOTOGRAPH — 1987','The chapel floor, torn up. A fresh square of concrete. Written in pen across the bottom: “HE WAS STILL KNOCKING.”']];
const DEATHTIPS=['When it screams, FREEZE — it is listening for movement.','If it whispers behind you, do NOT look. Keep walking.','Hold your breath (Space) when it sniffs at your hiding place.','Throw a bottle (G) far away to pull it off you.','The corn hides you if you crouch (C).','Press H to ask the dead which way to go.','It gets faster every night. Use the early nights well.','The pocket watch ticks faster when it is close.'];
let BIKE=null,BIKEFP=null,MOTHS=null,SWING=null,ROCK=null,MIRROR=null,SPIDER=null,GLIGHTS=[],GRAMP={x:0,z:0},EGRAVE={x:-118,z:112};
(function(){
 // bicycle in the Row
 {const g=new T.Group(),fm=new T.MeshStandardMaterial({color:0x5a1a14,metalness:.5,roughness:.5});[-.55,.55].forEach(z=>{const w=new T.Mesh(new T.TorusGeometry(.33,.025,6,20),blackM);w.position.set(0,.34,z);w.rotation.y=Math.PI/2;g.add(w);});g.add(limb(V(0,.34,-.55),V(0,.75,.05),.02,.02,fm,5));g.add(limb(V(0,.75,.05),V(0,.34,.55),.02,.02,fm,5));g.add(limb(V(0,.75,.05),V(0,.9,-.35),.02,.02,fm,5));g.add(bx(.5,.03,.03,0,1.05,.5,ironM));g.add(limb(V(0,.34,.55),V(0,1.05,.5),.02,.02,fm,5));g.add(bx(.1,.04,.22,0,.92,-.38,blackM));g.rotation.z=.25;g.position.set(-80,0,-92);scene.add(g);BIKE={g,x:-80,z:-92};
  BIKEFP=new T.Group();BIKEFP.add(bx(.6,.03,.03,0,0,0,ironM));[-1,1].forEach(sd=>BIKEFP.add(bx(.06,.05,.05,sd*.3,0,0,blackM)));BIKEFP.add(limb(V(0,0,0),V(0,-.5,-.25),.02,.02,fm,5));BIKEFP.position.set(0,-.42,-.55);BIKEFP.visible=false;camera.add(BIKEFP);}
 // moths around the lamps
 {const n=40,g=new T.BufferGeometry();g.setAttribute('position',new T.BufferAttribute(new Float32Array(n*3),3));MOTHS=new T.Points(g,new T.PointsMaterial({size:.05,color:0xe8d8b8,transparent:true,opacity:.8,depthWrite:false}));MOTHS.frustumCulled=false;scene.add(MOTHS);MOTHS.userData.ph=Array.from({length:n},()=>[R()*6.28,rr(.3,1),rr(.8,2.4),rr(-.4,.5)]);}
 // swing set in the Row (swinging on its own) + rocking chair on the hermit's porch
 {const x=-90,z=-66;[[-1.1,0],[1.1,0]].forEach(q=>{scene.add(limb(V(x+q[0],0,z-.9),V(x+q[0],2.4,z),.05,.05,ironM,5));scene.add(limb(V(x+q[0],0,z+.9),V(x+q[0],2.4,z),.05,.05,ironM,5));});scene.add(limb(V(x-1.15,2.4,z),V(x+1.15,2.4,z),.05,.05,ironM,5));
  SWING=new T.Group();SWING.position.set(x,2.4,z);[-.25,.25].forEach(o=>SWING.add(limb(V(o,0,0),V(o,-1.8,0),.008,.008,ironM,3)));SWING.add(bx(.6,.05,.25,0,-1.8,0,woodM));scene.add(SWING);}
 {ROCK=new T.Group();ROCK.position.set(CAB.x+4.2,0,CAB.z-1.6);ROCK.add(bx(.55,.06,.5,0,.45,0,woodM));ROCK.add(bx(.55,.7,.06,0,.82,-.24,woodM));[-1,1].forEach(sd=>{const r=new T.Mesh(new T.TorusGeometry(.4,.02,4,12,1.6),woodM);r.rotation.set(0,Math.PI/2,Math.PI*1.25);r.position.set(sd*.25,.38,0);ROCK.add(r);});ROCK.rotation.y=-Math.PI/2;}
 // mirror in the last house
 {const v=VILL[4];MIRROR=new T.Mesh(new T.PlaneGeometry(.9,1.4),new T.MeshStandardMaterial({color:0x8a9098,metalness:1,roughness:.08}));MIRROR.position.set(v[0]-3.1,1.5,v[1]-1.4);MIRROR.rotation.y=Math.PI/2;scene.add(MIRROR);scene.add(bx(.06,1.55,1.05,v[0]-3.14,1.5,v[1]-1.4,woodM));}
 // ghost lights in the empty windows
 VILL.forEach(v=>{const g=glow(v[0]+rr(-1.5,1.5),1.6,v[1]+(v[2]==='s'?2.9:-2.9),0xffc070,1,0);GLIGHTS.push({g,on:false,cd:rr(5,20)});});
 // gramophone in house 3
 {const v=VILL[2];GRAMP={x:v[0]+1.6,z:v[1]+1.2};scene.add(bx(.45,.25,.45,GRAMP.x,.95,GRAMP.z,woodM));scene.add(bx(.8,.8,.6,GRAMP.x,.4,GRAMP.z,woodM));const h=new T.Mesh(new T.ConeGeometry(.28,.5,12,1,true),new T.MeshStandardMaterial({color:0xb08840,metalness:.8,roughness:.3,side:T.DoubleSide}));h.position.set(GRAMP.x,1.4,GRAMP.z-.15);h.rotation.x=-.9;scene.add(h);}
 // Elias's unmarked grave in the woods
 {const m=new T.Mesh(new T.SphereGeometry(1,10,5,0,Math.PI*2,0,Math.PI/2),new T.MeshStandardMaterial({map:TG.map,color:0x2a2018,roughness:1}));m.scale.set(.6,.15,1.1);m.position.set(EGRAVE.x,0,EGRAVE.z);scene.add(m);const st=limb(V(EGRAVE.x,0,EGRAVE.z-1.2),V(EGRAVE.x+.05,.8,EGRAVE.z-1.2),.025,.02,woodM,4);scene.add(st);}
 // spider for the screen
 {const cv=document.createElement('canvas');cv.width=cv.height=96;const x=cv.getContext('2d');x.strokeStyle='#111';x.lineWidth=2.5;for(let i=0;i<4;i++){[-1,1].forEach(sd=>{x.beginPath();x.moveTo(48,48);x.quadraticCurveTo(48+sd*22,30+i*12,48+sd*40,18+i*20);x.stroke();});}x.fillStyle='#0a0a0a';x.beginPath();x.ellipse(48,52,11,15,0,0,7);x.fill();x.beginPath();x.arc(48,34,8,0,7);x.fill();
  SPIDER=document.createElement('div');SPIDER.style.cssText='position:fixed;width:70px;height:70px;pointer-events:none;z-index:7;display:none;background-size:contain';try{SPIDER.style.backgroundImage='url('+cv.toDataURL()+')';}catch(e){}document.body.appendChild(SPIDER);}
})();
// ---- acts ----
const BIKEACT={x:BIKE.x+.8,z:BIKE.z,r:1.6,hold:.5,label:()=>P.bike?null:'Ride the old bicycle (FAST, but it rattles loudly — C to get off)',can:()=>!P.bike&&BIKE.g.visible,done(){P.bike=true;BIKE.g.visible=false;BIKEFP.visible=true;msg('You climb on. It is fast — and it rattles like a bag of bones. Press C to get off.',4);award('biker');}};BIKE.g.visible=false;
acts.push({x:LK.x-LK.r+1.8,z:LK.z-.7,r:1.4,hold:4,label:()=>null,can:()=>false,done(){Q4.fishCd=60;hear(P,15);try{nz({type:'lowpass',f:600,g:.4,dur:.5});}catch(e){}const r=R();
 if(r<.2){inv.coins+=3;msg('You reel in a rotten purse: 3 silver coins!',3);}else if(r<.4){inv.bottle++;msg('An old bottle. Press G to throw it — a big crash far away.',3);}else if(r<.55){inv.holy++;msg('A sealed flask… holy water!',3);}else if(r<.75){msg('A boot. Just a boot. There is still a foot in it.',3);}else if(r<.9){stones+=3;msg('Stones. Somebody weighted something down out here.',3);}else{msg('A SKULL comes up on the hook — and the jaw is still moving.',3);try{sfx.behind();}catch(e){}shakeT=.5;}hud();award('fisher');}});
acts.push({x:WELL.x+1.15,z:WELL.z+1.2,r:1.4,hold:.3,label:()=>null,can:()=>false,done(){inv.coins--;Q4.wishCd=45;hud();try{tone({f:1800,g:.04,dur:.2});tone({f:1200,g:.03,dur:1.5,at:1.2});}catch(e){}award('wish');
 setTimeout(()=>{const r=R();if(r<.35){TOWER.rev=Math.max(TOWER.rev,20);msg('Far below, the coin lands — and you KNOW where it is. (It is on your map for 20 seconds.)',4);}else if(r<.6){inv.oil=1;hud();msg('A warm breath comes up the well. Your lantern burns brighter. (Oil full!)',3.5);}else if(r<.8){P.stam=1;P.limp=0;msg('You feel lighter. Your legs stop aching.',3);}else{hear(WELL,40);msg('The well SCREAMS back at you. Everything in the graveyard heard that.',3.5);try{sfx.screech();}catch(e){}}},1400);}});
acts.push({x:EGRAVE.x+.9,z:EGRAVE.z,r:1.6,hold:1.5,label:()=>TH.egr?'Elias Marrow rests a little easier':inv.tapes>=3?'Kneel at the unmarked grave and say his name':'An unmarked grave. Someone scratched “E.M.” into a stick.',can:()=>inv.tapes>=3&&!TH.egr,done(){TH.egr=1;M.calm=60;lore('egrave');eliasVoice('Elias. My name… was Elias.');msg('You say his name out loud. Somewhere in the dark, the crawling stops — for a whole minute it does not hunt you.',5);award('elias');}});
acts.push({x:VILL[4][0]+1.6,z:VILL[4][1]+1.5,r:1.4,hold:0,label:()=>'Read the note on Voss’s old desk',can:()=>true,done(){readNote('A NOTE ON VOSS’S DESK','Advert for the paper: NIGHT WATCHMAN WANTED. One night only. $400 cash.\nMemo to self: young ones. Nobody comes looking for young ones.\nHe has to eat, and as long as he is eating, he is not digging his way to MY house.');lore('desk');if(!inv.vkey){inv.vkey=true;hud();setTimeout(()=>msg('Taped under the desk: a heavy iron key with a skull on it. \u201cVOSS — VAULT.\u201d There must be a hatch in the mausoleum.',5),600);}}});
acts.push({x:GRAMP.x-.8,z:GRAMP.z,r:1.4,hold:0,label:()=>Q4.gramT>0?'Lift the needle off the record':'An old gramophone',can:()=>Q4.gramT>0,done(){Q4.gramT=0;try{nz({f:3000,q:2,g:.3,dur:.2});}catch(e){}msg('The record scratches to a stop. Silence.',2);}});
// ---- small helpers ----
function quickTurn(){if(mode!=='play'||P.hidden)return;Q4.turn=.25;}
function askRadio(){return;if(mode!=='play')return;if(Q4.radioCd>0){msg('The radio is just static. Try again in a moment.',1.5);return;}Q4.radioCd=20;hear(P,8);try{nz({f:2400,q:.6,g:.15,dur:.6});}catch(e){}
 let h;if(!inv.map)h='Watchman. Find the map first. It is lying on the path near where you woke up.';else if(gens<3){const g=GEN.find(q=>!q.on);h='The gate needs three generators. Check your map (M) for the next one.'+(g&&Math.hypot(g.x-LK.x,g.z-LK.z)<10?' That one is on the island. Use the boat at the dock.':'');}else h='The power is on. Get to the front gate, north. Or find another way out — the train, the woods, the truck, the tunnel.';
 if(M.state==='hunt')h='It is chasing you RIGHT NOW. Stop running and hide, or throw something.';else if(M.state==='creep')h='…Watchman, it went quiet. That is when it is closest. Do not look back.';
 say(h,{pitch:.8,rate:.9,vol:.9,pref:['Daniel','Google UK English Male','Male']});msg('📻 OLD TOM: '+h,6);}
// ---- per frame ----
function updQ4dead(){if(mode==='dead'&&!Q4.deadTip){Q4.deadTip=true;setTimeout(()=>{const d=$('deadsub');if(d)d.textContent+='  TIP: '+DEATHTIPS[(R()*DEATHTIPS.length)|0];},2200);}if(mode!=='dead')Q4.deadTip=false;}
function updQ4(dt){if(mode!=='play')return;const mp=mon.position,pd=Math.hypot(mp.x-P.x,mp.z-P.z),smart=!TUT.on&&!D.practice&&!monDead&&!EZ1&&!UG.on;
 Q4.radioCd-=dt;Q4.fishCd-=dt;Q4.wishCd-=dt;
 // quick turn
 if(Q4.turn>0){const st=Math.min(Q4.turn,dt);P.yaw+=Math.PI*st/.25;Q4.turn-=st;}
 // binoculars
 if(false){camera.fov+=(20-camera.fov)*Math.min(1,dt*8);camera.updateProjectionMatrix();Q4.binoc=true;}else if(Q4.binoc){Q4.binoc=false;}
 // echo scream — freeze or it finds you
 Q4.echoCd-=dt;if(smart&&!Q4.echo&&Q4.echoCd<=0&&(M.state==='wander'||M.state==='search')&&pd<38&&!P.hidden&&night>=1){Q4.echoCd=rr(80,140);Q4.echo={t:0};try{sfx.screech();const d=distN||master;vox({f:520,f2:300,dur:1.4,g:.25,a:.02,fm:[900,2000],q:3,dest:d});}catch(e){}echoRing();if(!TH.echo1){TH.echo1=1;msg('It SCREAMED — it is listening for movement. FREEZE!',3);}}
 if(Q4.echo){Q4.echo.t+=dt;if(Q4.echo.t>.35&&Q4.echo.t<2.3&&(FP.spd||0)>.35&&!P.hidden){Q4.echo=null;hear(P,999);msg('You moved. It felt it.',2);}else if(Q4.echo&&Q4.echo.t>=2.3){Q4.echo=null;if(!TH.echo2){TH.echo2=1;msg('You stayed still. It did not find you.',2.5);}award('echo');}}
 // rage after being hurt three times
 if((M.stun||0)>0&&Q4.stunPrev<=0)Q4.stunN++;Q4.stunPrev=M.stun||0;if(Q4.stunN>=3&&!(M.rage>0)&&!monDead){Q4.stunN=0;M.rage=60;try{sfx.screech();setTimeout(()=>{try{sfx.screech();}catch(e){}},500);}catch(e){}EYES.forEach(e=>e.material.color.setHex(0xff2010));msg('You hurt it too many times. It is ENRAGED — faster, and its eyes have gone red.',4);}
 if(M.rage>0){M.rage-=dt;EYES.forEach(e=>{e.material.opacity=Math.max(e.material.opacity,.8);});if(M.rage<=0)EYES.forEach(e=>e.material.color.setHex(0xfff2c8));}
 // naps (early nights)
 Q4.napCd-=dt;if(smart&&night<=2&&!(M.nap>0)&&Q4.napCd<=0&&M.state==='wander'&&pd>14){Q4.napCd=rr(150,240);M.nap=rr(20,30);Q4.napSneak=false;}
 if(M.nap>0){if(M.state!=='wander'){M.nap=0;M.rage=Math.max(M.rage||0,15);EYES.forEach(e=>e.material.color.setHex(0xff2010));msg('You WOKE IT UP. It is furious.',3);}else{M.nap-=dt;M.target.set(mp.x,0,mp.z);M.voice=99;pulse(Q4,dt,3.2,()=>{try{nz({type:'lowpass',f:200,f2:120,g:.12,dur:1.6,a:.6,dest:panner});}catch(e){}caption('slow, wet snoring');});if(pd<4&&!Q4.napSneak){Q4.napSneak=true;award('napper');}if(M.nap<=0)M.voice=2;if(!TH.nap&&pd<25){TH.nap=1;msg('It has curled up… it is ASLEEP. Sneak past. Do NOT wake it.',4);}}}
 // guards the generators you still need (night 3+)
 Q4.guardCd-=dt;if(smart&&night>=3&&Q4.guardCd<=0&&M.state==='wander'&&!(M.nap>0)){Q4.guardCd=rr(40,70);const g=GEN.find(q=>!q.on);if(g&&R()<.5){M.target.set(g.x+rr(-6,6),0,g.z+rr(-6,6));M.path=null;}}
 // map ping where it last hunted
 if(M.state==='hunt'&&Q4.lastSt!=='hunt')Q4.ping={x:M.target.x,z:M.target.z,t:8};Q4.lastSt=M.state;if(Q4.ping){Q4.ping.t-=dt;if(Q4.ping.t<=0)Q4.ping=null;}
 // bicycle
 if(P.bike){if(Q4.lx!==null&&!P.hidden){const dx=P.x-Q4.lx,dz=P.z-Q4.lz;P.x+=dx*.9;P.z+=dz*.9;resolve(P,.3);if(Math.hypot(dx,dz)>.01)pulse(Q4,dt,.35,()=>{try{nz({f:rr(2500,4500),q:3,g:.18,dur:.08});nz({f:1500,q:2,g:.1,dur:.05,at:.1});}catch(e){}hear(P,22);});}
  if(K.KeyC||P.hidden||P.down){P.bike=false;BIKEFP.visible=false;BIKE.g.position.set(P.x+.8,0,P.z);BIKE.x=P.x+.8;BIKE.z=P.z;BIKE.g.visible=true;BIKEACT.x=BIKE.x+.8;BIKEACT.z=BIKE.z;msg('You get off the bike.',1.5);}}
 Q4.lx=P.x;Q4.lz=P.z;
 // moths around the nearest lamp
 {const L=LPL&&LPL.intensity>.1?LPL.position:null,a=MOTHS.geometry.attributes.position.array;MOTHS.visible=!!L;if(L){MOTHS.userData.ph.forEach((q,i)=>{q[0]+=dt*q[2]*2;a[i*3]=L.x+Math.cos(q[0])*q[1];a[i*3+1]=L.y+q[3]+Math.sin(q[0]*1.7)*.15;a[i*3+2]=L.z+Math.sin(q[0])*q[1];});MOTHS.geometry.attributes.position.needsUpdate=true;}}
 // swing + rocking chair
 SWING.rotation.x=Math.sin(elapsed*1.6)*.45;ROCK.rotation.x=Math.sin(elapsed*1.3)*.12;
 if(Math.hypot(P.x-SWING.position.x,P.z-SWING.position.z)<18)pulse(Q4.sw||(Q4.sw={}),dt,1.96,()=>{const d=makePan(SWING.position.x,2.4,SWING.position.z);try{vox({f:520,f2:430,dur:.5,g:.05,fm:[1200,2400],q:9,br:.2,dest:d||master});}catch(e){}});
 if(Math.hypot(P.x-ROCK.position.x,P.z-ROCK.position.z)<14)pulse(Q4.rk||(Q4.rk={}),dt,2.4,()=>{const d=makePan(ROCK.position.x,.5,ROCK.position.z);try{nz({type:'lowpass',f:700,g:.08,dur:.35,dest:d||master});}catch(e){}});
 // ghost lights in the windows turn on and off when you look away
 {const fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw);GLIGHTS.forEach(l=>{l.cd-=dt;const dx=l.g.position.x-P.x,dz=l.g.position.z-P.z,d=Math.hypot(dx,dz),look=(dx*fx+dz*fz)/(d||1)>.5;if(l.cd<=0&&!look){l.cd=rr(6,18);l.on=!l.on;}l.g.material.opacity+=((l.on?.8:0)-l.g.material.opacity)*Math.min(1,dt*6);});}
 // organ plays itself at midnight; blood moon at 4 AM; children laughing in the field
 {const mins=1422+elapsed*.45;if(!Q4.organDone&&mins>=1440){Q4.organDone=true;ORG.t=7;if(Math.hypot(P.x-ORG.x,P.z-ORG.z)<60)msg('Midnight. The chapel organ is playing. Nobody is in the chapel.',4);}
  if(!Q4.bloodDone&&mins>=1680){Q4.bloodDone=true;try{moon.color.setHex(0xff7a6a);}catch(e){}msg('4:00 AM. The moon has turned the colour of blood.',4);}}
 if(!Q4.kidsDone&&night>=2&&ZCUR===3&&R()<dt*.05){Q4.kidsDone=true;const a=R()*6.28,d=makePan(P.x+Math.cos(a)*15,1,P.z+Math.sin(a)*15);try{for(let i=0;i<6;i++)vox({f:rr(500,700),f2:rr(700,900),dur:.18,g:.07,fm:[1500,3000],q:4,br:.5,at:i*.22+(i>2?.6:0),dest:d||master});}catch(e){}caption('children laughing');msg('Children laughing, somewhere in the crosses. There are no children here.',4);}
 // the phone in the Row
 if(!Q4.phoneDone&&Math.hypot(P.x-VILL[1][0],P.z-VILL[1][1])<20){Q4.phoneDone=true;Q4.phoneT=8;}
 if(Q4.phoneT>0){Q4.phoneT-=dt;pulse(Q4.ph||(Q4.ph={}),dt,2,()=>{const d=makePan(VILL[1][0],1,VILL[1][1]);try{for(let i=0;i<8;i++)tone({type:'square',f:i%2?440:480,g:.05,dur:.05,at:i*.06,dest:d||master});}catch(e){}hear(VILL[1],14);});if(Q4.phoneT<=0&&Math.hypot(P.x-VILL[1][0],P.z-VILL[1][1])<6){eliasVoice('Get out of the house. It is under the floor.');msg('The phone stops ringing. Then a voice, right next to you, from nowhere: “Get out of the house.”',4);}}
 // gramophone starts on its own when you walk in
 if(false){Q4.gramDone=true;Q4.gramT=25;msg('The gramophone starts playing by itself. LOUD. Lift the needle or get out!',3.5);}
 if(Q4.gramT>0){Q4.gramT-=dt;pulse(Q4.gr||(Q4.gr={}),dt,.42,()=>{const n=[392,349,330,294,262,294,330,262][(elapsed*2.4|0)%8],d=makePan(GRAMP.x,1,GRAMP.z);try{tone({type:'triangle',f:n,g:.07,dur:.38,dest:d||master});nz({f:3000,q:.6,g:.02,dur:.4,dest:d||master});}catch(e){}hear(GRAMP,40);});}
 // mirror
 if(!Q4.mirrorDone){const dx=MIRROR.position.x-P.x,dz=MIRROR.position.z-P.z,d=Math.hypot(dx,dz),fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw);if(d<3.2&&(dx*fx+dz*fz)/d>.9){Q4.mirrorDone=true;FACE.position.set(MIRROR.position.x+.08,1.55,MIRROR.position.z);FACE.scale.set(.75,.75,1);ST2.faceT=.3;setTimeout(()=>{FACE.scale.set(1.3,1.3,1);},400);try{sfx.behind();}catch(e){}shakeT=.4;setTimeout(()=>msg('In the mirror, for a moment, something was standing right behind you.',3.5),400);}}
 // spider indoors
 Q4.spiderCd-=dt;if(Q4.spiderCd<=0&&BLD.some(b=>P.x>b.x0&&P.x<b.x1&&P.z>b.z0&&P.z<b.z1)){Q4.spiderCd=rr(90,180);const sx=R()<.5,y0=rr(10,70);SPIDER.style.display='block';SPIDER.style.left=(sx?-80:innerWidth+10)+'px';SPIDER.style.top=y0+'%';SPIDER.style.transform='rotate('+(sx?90:-90)+'deg)';SPIDER.style.transition='none';requestAnimationFrame(()=>requestAnimationFrame(()=>{SPIDER.style.transition='left 2.6s linear, top 2.6s linear';SPIDER.style.left=(sx?innerWidth+80:-90)+'px';SPIDER.style.top=(y0+rr(-15,15))+'%';}));setTimeout(()=>{SPIDER.style.display='none';},2800);}
 // wolves
 Q4.wolfT-=dt;if(Q4.wolfT<=0){Q4.wolfT=1e12;const d=farPan();try{vox({f:330,f2:520,dur:2.6,g:.06,a:.5,fm:[700,1200],q:5,br:.2,dest:d||master});vox({f:300,f2:470,dur:2.2,g:.04,a:.6,at:.8,fm:[700,1200],q:5,br:.2,dest:d||master});}catch(e){}caption('wolves howling, far away');}
 // the ghost watchman leads you to something you need
 if(!Q4.ghostDone&&elapsed>140&&!CAT.on){Q4.ghostDone=true;const want=picks.find(k=>!k.taken&&(k.type==='key'||k.type==='page'||k.type==='coin')&&Math.hypot(k.x-P.x,k.z-P.z)<70);if(want){const g=new T.Group(),gm=new T.MeshBasicMaterial({color:0xb8c8e0,transparent:true,opacity:.25,depthWrite:false});const b=new T.Mesh(new T.CylinderGeometry(.22,.3,1.6,8),gm);b.position.y=.9;g.add(b);const h=new T.Mesh(new T.SphereGeometry(.15,8,6),gm);h.position.y=1.85;g.add(h);g.add(glow(.3,1.1,.2,0xffc070,.6,.9));const a=R()*6.28;g.position.set(P.x+Math.cos(a)*14,0,P.z+Math.sin(a)*14);scene.add(g);Q4.ghostW={g,to:want,t:60};msg('A pale man with a lantern is standing in the rows, watching you. He beckons, and starts walking.',4.5);}}
 if(Q4.ghostW){const w=Q4.ghostW,gp=w.g.position,dx=w.to.x-gp.x,dz=w.to.z-gp.z,d=Math.hypot(dx,dz),pdw=Math.hypot(P.x-gp.x,P.z-gp.z);w.t-=dt;if(d>1&&pdw<14){gp.x+=dx/d*dt*1.6;gp.z+=dz/d*dt*1.6;w.g.rotation.y=Math.atan2(dx,dz);}if(d<=1.2||w.t<=0||w.to.taken){scene.remove(w.g);Q4.ghostW=null;if(d<=1.2)msg('The watchman points at the ground… and is gone.',3);}}}
let ringEl=null;function echoRing(){if(!ringEl){ringEl=document.createElement('div');ringEl.style.cssText='position:fixed;left:50%;top:50%;width:40px;height:40px;margin:-20px 0 0 -20px;border:3px solid rgba(255,90,90,.8);border-radius:50%;pointer-events:none;z-index:6;opacity:0';document.body.appendChild(ringEl);}ringEl.style.transition='none';ringEl.style.transform='scale(1)';ringEl.style.opacity=1;requestAnimationFrame(()=>requestAnimationFrame(()=>{ringEl.style.transition='transform 1.6s ease-out, opacity 1.6s';ringEl.style.transform='scale(40)';ringEl.style.opacity=0;}));}

// ===================== FIRST PLAY: the fake "simple" game =====================
(function(){const st=document.createElement('style');st.textContent=
 'body.firsttime #start>*:not(h1):not(#go){display:none!important}body.firsttime #go{font-size:26px;padding:14px 60px;letter-spacing:8px;margin-top:30px}'+
 '@keyframes gl1{0%{transform:translate(0,0);filter:none}20%{transform:translate(-6px,3px);filter:hue-rotate(90deg) saturate(3)}40%{transform:translate(5px,-4px);filter:invert(1)}60%{transform:translate(-3px,-2px) skewX(8deg);filter:hue-rotate(-60deg)}80%{transform:translate(7px,2px);filter:contrast(3)}100%{transform:translate(0,0);filter:none}}'+
 '.glitching{animation:gl1 .18s infinite steps(2)}.glitching h1,.glitching h2{text-shadow:-4px 0 #f00,4px 0 #0ff!important}'+
 '#whiteout{position:fixed;inset:0;background:#fff;z-index:200;display:none;opacity:0;flex-direction:column;align-items:center;justify-content:center;font-family:Creepster,Georgia,serif;color:#111;text-align:center}'+
 '#whiteout .l1{font-size:52px;letter-spacing:4px;opacity:0;transition:opacity 1.2s}#whiteout .l2{font:italic 26px Georgia;color:#7a0000;margin-top:18px;opacity:0;transition:opacity 1.2s}';
 (document.head||document.body).appendChild(st);
 if(FIRSTRUN){document.body.classList.add('firsttime');const g=$('go');if(g){g.dataset.full=g.textContent;g.textContent='START';}}})();
function easyFirst(){D=DIFF[0];inv.map=true;picks.forEach(k=>{if(k.type==='map'&&!k.taken){k.taken=true;k.o.visible=false;}});
 try{setGen(GEN[1],true);setGen(GEN[2],true);}catch(e){}GEN[1].on=true;GEN[2].on=true;gens=2;stones+=4;inv.oil=1;hud();
 setTimeout(()=>{if(mode==='play'&&EZ1)msg('Two generators are already running. Find the LAST one — check your map (M) — crank it, then run to the front gate.',8);},7000);}
function fakeGlitch(){const w=$('win');if(!w)return;w.classList.add('glitching');const h=$('winh'),orig=h.textContent,chars='█▓▒░#@%&$?!<>/\\\\|';let n=0;
 const iv=setInterval(()=>{n++;h.textContent=orig.split('').map(c=>c===' '||R()<.55?c:chars[(R()*chars.length)|0]).join('');const ws=$('winsub');if(ws&&R()<.4)ws.style.opacity=R()<.5?0:1;},70);
 try{for(let i=0;i<14;i++){nz({f:rr(200,6000),q:rr(.5,6),g:rr(.2,.6),dur:rr(.03,.12),a:.001,at:i*.12});if(i%3===0)tone({type:'square',f:rr(80,1200),g:.12,dur:.08,at:i*.12+.05});}tone({type:'sawtooth',f:60,f2:30,g:.3,dur:1.6});}catch(e){}
 setTimeout(()=>{clearInterval(iv);try{for(let i=0;i<6;i++)nz({f:9000,q:.3,g:.9,dur:.05,a:.001,at:i*.04});}catch(e){}
  let wo=$('whiteout');if(!wo){wo=document.createElement('div');wo.id='whiteout';wo.innerHTML='<div class="l1">THAT WAS ONLY THE TUTORIAL.</div><div class="l2">You’re just getting started.</div>';document.body.appendChild(wo);}
  wo.style.transition='none';wo.style.display='flex';wo.style.opacity=1;w.classList.remove('glitching');w.style.display='none';h.textContent=orig;
  setTimeout(()=>{wo.querySelector('.l1').style.opacity=1;},900);
  setTimeout(()=>{wo.querySelector('.l2').style.opacity=1;try{monVoice('you are just getting started.');}catch(e){}},3000);
  setTimeout(()=>{try{localStorage.setItem('crawler_first_done','1');}catch(e){}FIRSTRUN=false;EZ1=false;document.body.classList.remove('firsttime');const g=$('go');if(g&&g.dataset.full)g.textContent=g.dataset.full;
   mode='menu';$('start').style.display='flex';{const cb=$('cont');if(cb)cb.style.display='none';}
   wo.style.transition='opacity 3s';wo.style.opacity=0;setTimeout(()=>{wo.style.display='none';wo.querySelector('.l1').style.opacity=0;wo.querySelector('.l2').style.opacity=0;},3100);},8500);},2200);}

// ===================== THE UNDERWAY — Voss's smuggling tunnels =====================
const UX=-H-70,UG={on:false,ride:null,pump:0,lx:null,lz:null,handT:0,handDone:false,seenT:0,seen:false,carX:UX-9};
const UGR={hall:[UX-6,UX+6,-32,-16],cor:[UX-1.5,UX+1.5,-16,14],cell:[UX+1.5,UX+8,3,10],gap:[UX-1,UX+1,14,20],shrine:[UX-6,UX+6,20,30],tun:[UX-190,UX-6,26,30]};
const inR=(r,x,z)=>x>r[0]&&x<r[1]&&z>r[2]&&z<r[3];
(function(){const wm=darkStoneM,T2=.4;
 const wall=(x0,x1,z0,z1,h)=>{const w=x1-x0,d=z1-z0;const m=wbx(w,h||3.4,d,(x0+x1)/2,(h||3.4)/2,(z0+z1)/2,wm,.05);scene.add(m);boxes.push({x0,x1,z0,z1});};
 // room with openings: op = {n:[a,b],s:[a,b],e:[a,b],w:[a,b]} (ranges along that wall)
 const room=(r,op,h)=>{const [x0,x1,z0,z1]=r;op=op||{};
  const hseg=(z,a,b,gap)=>{if(!gap){wall(a,b,z-T2/2,z+T2/2,h);return;}if(gap[0]>a)wall(a,gap[0],z-T2/2,z+T2/2,h);if(gap[1]<b)wall(gap[1],b,z-T2/2,z+T2/2,h);};
  const vseg=(x,a,b,gap)=>{if(!gap){wall(x-T2/2,x+T2/2,a,b,h);return;}if(gap[0]>a)wall(x-T2/2,x+T2/2,a,gap[0],h);if(gap[1]<b)wall(x-T2/2,x+T2/2,gap[1],b,h);};
  hseg(z0,x0,x1,op.s);hseg(z1,x0,x1,op.n);vseg(x0,z0,z1,op.w);vseg(x1,z0,z1,op.e);};
 room(UGR.hall,{n:[UX-1.5,UX+1.5]});
 room(UGR.cor,{s:[UX-1.5,UX+1.5],n:[UX-1,UX+1],e:[5,8]});
 room(UGR.cell,{w:[5,8]});
 room(UGR.gap,{s:[UX-1,UX+1],n:[UX-1,UX+1]},1.4);
 room(UGR.shrine,{s:[UX-1,UX+1],w:[26,30]});
 room(UGR.tun,{e:[26,30]},4);
 // floor + ceiling
 const fm=new T.MeshStandardMaterial({map:TG.map,color:0x3a3530,roughness:1});const fl=new T.Mesh(new T.PlaneGeometry(220,80),fm);fl.rotation.x=-Math.PI/2;fl.position.set(UX-90,.005,0);scene.add(fl);
 const cm=new T.MeshStandardMaterial({color:0x14110e,roughness:1,side:T.DoubleSide});const ce=new T.Mesh(new T.PlaneGeometry(220,80),cm);ce.rotation.x=Math.PI/2;ce.position.set(UX-90,3.4,0);scene.add(ce);
 scene.add(bx(2.2,.2,6,UX,1.4,17,darkStoneM));
 const ce2=new T.Mesh(new T.PlaneGeometry(190,4.4),cm);ce2.rotation.x=Math.PI/2;ce2.position.set(UX-98,4,28);scene.add(ce2);
 // stairs back up
 for(let i=0;i<8;i++)scene.add(bx(3,.25,.5,UX,i*.4+.12,-31.6+i*.0,darkStoneM));
 // smuggler's hall: crates of stolen grave goods, a table, lanterns
 for(let i=0;i<9;i++){const c=bx(rr(.8,1.3),rr(.6,1),rr(.8,1.2),UX+rr(-5,-2.5)*(i%2?1:-1)*(i%2?-1:1),.4,-30+i*1.5,woodM);scene.add(c);}
 scene.add(bx(2.4,.1,1.2,UX+3,.85,-22,woodM));[[-1,-.5],[1,-.5],[-1,.5],[1,.5]].forEach(q=>scene.add(cyl(.05,.05,.85,UX+3+q[0],.42,-22+q[1],woodM,5)));boxes.push({x0:UX+1.8,x1:UX+4.2,z0:-22.6,z1:-21.4});
 [[UX-5.6,-24],[UX+5.6,-20],[UX,-17],[UX+5,2.6],[UX-5.6,25],[UX+5.6,25]].forEach(q=>{const g=glow(q[0],2.2,q[1],0xffa040,1.4,.85);g.userData.ug=1;});
 // the flooded passage
 const wtr=new T.Mesh(new T.PlaneGeometry(3,13),new T.MeshStandardMaterial({color:0x080c10,metalness:.9,roughness:.15,transparent:true,opacity:.92}));wtr.rotation.x=-Math.PI/2;wtr.position.set(UX,.32,7);scene.add(wtr);
 // Elias's cell: chains, scratched tally marks, a tape recorder
 {const t=tex(256,(x,s2)=>{x.fillStyle='#2a2622';x.fillRect(0,0,s2,s2);x.strokeStyle='rgba(220,210,190,.6)';x.lineWidth=2;for(let g=0;g<3;g++){for(let i=0;i<4;i++){x.beginPath();x.moveTo(40+g*70+i*10,90);x.lineTo(40+g*70+i*10,150);x.stroke();}x.beginPath();x.moveTo(34+g*70,140);x.lineTo(78+g*70,100);x.stroke();}x.font='bold 22px Georgia';x.fillStyle='rgba(220,210,190,.7)';x.fillText('M. — I AM SORRY',40,200);},0);
  const m=new T.Mesh(new T.PlaneGeometry(3,3),new T.MeshBasicMaterial({map:t,transparent:true}));m.position.set(UX+7.78,1.6,6.5);m.rotation.y=-Math.PI/2;scene.add(m);
  for(let i=0;i<2;i++)scene.add(limb(V(UX+7.8,2.6,5.5+i*2),V(UX+7.5,1.1,5.8+i*2),.02,.02,ironM,4));scene.add(bx(.35,.18,.25,UX+5,.5,4,blackM));scene.add(bx(1,.5,.6,UX+5,.25,4,woodM));}
 // the shrine: lanterns of every watchman before you
 for(let i=0;i<5;i++){const x=UX-4+i*2;scene.add(bx(.25,.35,.25,x,2,29.75,ironM));const g=glow(x,2,29.6,i<4?0xff9040:0x403020,.6,i<4?.8:0);g.userData.ug=1;}
 {const t=tex(256,(x,s2)=>{x.fillStyle='#1a1410';x.fillRect(0,0,s2,s2);x.fillStyle='#c8a860';x.font='bold 17px Georgia';x.textAlign='center';['1962 — T. REED','1979 — W. PIKE','2003 — D. ORTIZ','2011 — S. KOWALSKI','TONIGHT — ______'].forEach((l,i)=>x.fillText(l,128,50+i*40));},0);const m=new T.Mesh(new T.PlaneGeometry(2.4,2.4),new T.MeshLambertMaterial({map:t}));m.position.set(UX,1.3,29.78);m.rotation.y=Math.PI;scene.add(m);}
 // the rail tunnel + handcar + daylight at the end
 const rm=new T.MeshStandardMaterial({color:0x5a4a3a,metalness:.7,roughness:.5});[-.7,.7].forEach(o=>scene.add(bx(190,.1,.08,UX-98,.08,28+o,rm)));
 {const sg=new T.BoxGeometry(.22,.08,2),im=new T.InstancedMesh(sg,woodM,170),o=new T.Object3D();for(let i=0;i<170;i++){o.position.set(UX-8-i*1.1,.04,28);o.updateMatrix();im.setMatrixAt(i,o.matrix);}im.frustumCulled=false;scene.add(im);}
 const car=new T.Group();car.add(bx(1.8,.15,1.6,0,.5,0,woodM));[[-.6,.7],[.6,.7],[-.6,-.7],[.6,-.7]].forEach(q=>{const w=cyl(.22,.22,.08,q[0],.25,q[1],ironM,10);w.rotation.x=Math.PI/2;car.add(w);});car.add(cyl(.05,.05,1,0,1,0,ironM,5));const bar=bx(1.6,.06,.06,0,1.5,0,ironM);car.add(bar);car.userData.bar=bar;car.position.set(UG.carX,0,28);scene.add(car);UG.car=car;
 for(let k=0;k<10;k++){const g=glow(UX-150+k*3,1.8,28,0xffffff,4+k*.4,.12);g.material.fog=true;g.userData.ug=1;}
 {const d=glow(UX-192,2,28,0xfff8e8,14,.95);d.material.fog=false;UG.day=d;}
})();
function enterUG(){if(mode!=='play')return;const f=$('fade');f.style.opacity=1;try{sfx.creak();nz({type:'lowpass',f:200,g:.6,dur:1.2,a:.2});}catch(e){}
 setTimeout(()=>{P.x=UX;P.z=-29;P.yaw=Math.PI;P.pitch=0;P.hidden=null;UG.on=true;CAT.on=true;catAmb(true);f.style.opacity=0;lore('underway');
  if(!TH.ug1){TH.ug1=1;msg('Under the Voss sarcophagus: a stairway, going DOWN. Lanterns are still burning down here. Somebody comes here.',6);}award('underway1');},800);}
function exitUG(){const f=$('fade');f.style.opacity=1;try{sfx.creak();}catch(e){}setTimeout(()=>{P.x=MAUS.x+2.2;P.z=MAUS.z;P.yaw=Math.PI/2;UG.on=false;CAT.on=false;catAmb(false);f.style.opacity=0;msg('You climb back up into the mausoleum.',2.5);},700);}
function startRide(){UG.ride={x:UG.carX,v:2,t:0,monOn:false,monX:0};UG.pump=0;P.yaw=Math.PI/2;msg('MASH SPACE to pump the handcar! Go, GO!',3);try{sfx.crank();}catch(e){}}
// acts
acts.push({x:MAUS.x+3.6,z:MAUS.z-.6,r:1.6,hold:2.5,label:()=>inv.vkey?'Unlock the iron hatch in the floor and go DOWN (the Underway)':'An iron hatch in the floor with a skull-shaped keyhole.',can:()=>inv.vkey&&!UG.on,done(){enterUG();}});
acts.push({x:UX,z:-30.4,r:1.6,hold:.5,label:()=>UG.on&&!UG.ride?'Climb back up the stairs':null,can:()=>UG.on&&!UG.ride,done(){exitUG();}});
acts.push({x:UX+3,z:-21,r:1.6,hold:0,label:()=>UG.on?'Read the smuggler’s ledger':null,can:()=>UG.on,done(){readNote('THE UNDERWAY LEDGER','Every grave in Hollow Rest that had anything worth taking, listed by row. Every one ticked.\nAt the back, a different list, in Henry Voss’s neat hand:\n“It does not eat what is already dead. It wants them warm. One watchman a season keeps it in the yard and out of the Row. Advert in the paper — young, no family, cash.”');lore('ugledger');}});
acts.push({x:UX+5,z:4.8,r:1.4,hold:0,label:()=>UG.on?'Press PLAY on the old tape recorder':null,can:()=>UG.on,done(){const t='Day three. He keeps me in the dark and brings me water and asks me where the ledger is. Margaret hid it. I will not tell him. He says tomorrow we go to the chapel, to dig. I know what he is going to dig. If anybody finds this… tell Annie her father did not run away.';readNote('TAPE 6 — ELIAS MARROW, LAST RECORDING',t);eliasVoice(t);lore('cell');}});
acts.push({x:UX,z:28.6,r:1.6,hold:0,label:()=>UG.on?'Read the brass plates under the lanterns':null,can:()=>UG.on,done(){readNote('THE WATCHMEN','Five lanterns, five brass plates.\n1962 — T. Reed.  1979 — W. Pike (crossed out, “RAN” written next to it).  2003 — D. Ortiz.  2011 — S. Kowalski.\nThe fifth plate is blank. Its lantern is unlit. It is waiting for tonight’s watchman.\nIt is waiting for YOU.');lore('watchmen');}});
acts.push({x:UG.carX+1.2,z:28,r:1.8,hold:1.5,label:()=>UG.on&&!UG.ride?'Climb onto the handcar and pump it (VERY loud) — out through the freight tunnel':null,can:()=>UG.on&&!UG.ride,done(){startRide();}});
// per-frame
function updUG(dt){if(mode!=='play'||!UG.on)return;
 // keep it dark
 hemi.intensity=.05;moon.intensity=0;rain.m.visible=false;
 // flooded passage: slow, splashy, and something under the water
 const inW=P.x>UX-1.5&&P.x<UX+1.5&&P.z>.5&&P.z<13.5;if(UG.lx!==null&&inW){P.x=UG.lx+(P.x-UG.lx)*.5;P.z=UG.lz+(P.z-UG.lz)*.5;if(Math.hypot(P.x-UG.lx,P.z-UG.lz)>.005)pulse(UG,dt,.5,()=>{try{nz({type:'lowpass',f:900,g:.15,dur:.3});}catch(e){}});
  if(!UG.handDone&&P.z>6.5){UG.handDone=true;if(!EZ1&&R()<.6){grab({cd:0},true);msg('A cold hand grabs your ankle from under the water!',3);}}}
 // the low crawl
 if(inR(UGR.gap,P.x,P.z)){camera.position.y=Math.min(camera.position.y,.75);if(UG.lx!==null){P.x=UG.lx+(P.x-UG.lx)*.55;P.z=UG.lz+(P.z-UG.lz)*.55;}if(!TH.ugGap){TH.ugGap=1;msg('The roof comes down low. You have to crawl. On your hands and knees. Like it does.',3.5);}}
 UG.lx=P.x;UG.lz=P.z;
 // a glimpse: it is down here somewhere
 if(!UG.seen&&inR(UGR.shrine,P.x,P.z)&&!monDead){UG.seen=true;try{const d=makePan(UX-9,1,28);sfx.scrabble&&sfx.scrabble();nz({type:'lowpass',f:300,g:.3,dur:1,dest:d||master});}catch(e){}caption('scrabbling, in the tunnel to the west');setTimeout(()=>{if(mode==='play'&&UG.on)msg('Something in the dark tunnel ahead. Then nothing.',3);},800);}
 // flicker the underway lanterns
 // the handcar ride
 const r=UG.ride;if(r){r.t+=dt;r.v+=UG.pump*1.5;UG.pump=0;r.v=Math.max(0,Math.min(15,r.v-dt*(1.5+r.v*.35)));r.x-=r.v*dt;UG.car.position.x=r.x;UG.car.userData.bar.rotation.z=Math.sin(r.t*r.v*.8)*.5;
  P.x=r.x+.1;P.z=28;camera.position.x=P.x;camera.position.z=P.z;
  pulse(r,dt,Math.max(.12,1.1-r.v*.065),()=>{try{nz({f:2200,q:4,g:.25,dur:.05});nz({type:'lowpass',f:200,g:.3,dur:.12,at:.04});}catch(e){}});
  if(!r.monOn&&r.t>3&&!monDead&&!EZ1){r.monOn=true;r.monX=r.x+16;mon.visible=true;try{sfx.screech();setTimeout(()=>{try{sfx.screech();}catch(e){}},700);}catch(e){}shakeT=.8;msg('IT FOUND THE TUNNEL. It is RIGHT BEHIND YOU. MASH SPACE!',3);}
  if(r.monOn){const ms=r.t<10?11.5:10;r.monX-=ms*dt;mon.position.set(r.monX,0,28);mon.rotation.y=-Math.PI/2;M.state='hunt';M.target.set(P.x,0,P.z);M.stun=0;const gap=r.monX-r.x;if(gap<5)shakeT=Math.max(shakeT,.3);if(gap<1.4){UG.ride=null;caught();return;}
   pulse(r.ms||(r.ms={}),dt,.3,()=>{try{nz({type:'lowpass',f:500,g:.25,dur:.15,dest:panner});}catch(e){}});}
  UG.day.material.opacity=Math.min(1,.4+(UG.carX-r.x)/180);
  if(r.x<UX-186){UG.ride=null;UG.on=false;CAT.on=false;catAmb(false);if(r.monOn)mon.position.set(0,0,-30);win('underway');}}}

tmk('features');
// ===== the sneak attack: it stalks up behind you in silence and pounces =====
const SNK={cd:rr(90,150),c1:false,c2:false,c3:false};
function startSneak(){if(EZ1||TUT.on||D.practice||P.hidden||monDead||CAT.on||CAT.monIn||UG.on||VB.on||night<1||M.state!=='wander')return false;M.state='sneak';M.snT=50;M.snFreeze=0;M.path=null;M.voice=99;SNK.c1=SNK.c2=SNK.c3=false;SNK.cd=rr(120,200);return true;}
function updSneak(dt){if(mode!=='play')return;SNK.cd-=dt;const mp=mon.position,pd=Math.hypot(mp.x-P.x,mp.z-P.z);
 if(M.state!=='sneak'){if(SNK.cd<=0&&M.state==='wander'&&pd>18&&pd<60&&R()<dt*.08)startSneak();return;}
 if(P.hidden){M.state='search';M.center.set(P.x,0,P.z);M.target.copy(M.center);M.timer=6;M.path=null;M.voice=2;return;}
 // small clues, if you are paying attention: a twig behind you, then another, then your lantern stutters
 if(!SNK.c1&&pd<13){SNK.c1=true;const d=makePan(mp.x,.1,mp.z);try{nz({f:3800,q:2,g:.16,dur:.05,dest:d||master});nz({f:2200,q:3,g:.1,dur:.04,at:.05,dest:d||master});}catch(e){}caption('a twig snaps somewhere');}
 if(!SNK.c2&&pd<6.5){SNK.c2=true;const d=makePan(mp.x,.1,mp.z);try{nz({type:'lowpass',f:600,g:.1,dur:.25,dest:d||master});}catch(e){}caption('something shifts in the grass');}
 if(pd<5&&R()<dt*4)lampOut=Math.max(lampOut,.08);
 if(M.snFreeze>0)return;
 // you turned and SAW it: it freezes like a statue… then it comes
 {const dx=mp.x-P.x,dz=mp.z-P.z,fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw);if(pd<16&&(dx*fx+dz*fz)/(pd||1)>.55){M.snFreeze=1.3;try{sfx.behind();}catch(e){}if(!TH.snk1){TH.snk1=1;msg('It was right behind you — creeping. It has stopped dead. It knows you saw it.',3);}return;}}
 // it reached you without being seen: POUNCE
 if(pd<2.4){M.state='hunt';M.voice=0;if(!jumpFace('sneak')){M.target.set(P.x,0,P.z);M.wind=.2;}if(!TH.snk2){TH.snk2=1;setTimeout(()=>{if(mode==='play')msg('It snuck right up behind you. Listen for twigs. Watch your lantern. RUN!',3.5);},1100);}}}

// ===== scarier crawler =====
const SCY={was:'',tw:0,twT:rr(2,4),tz:0,bT:2};
const MT={cd:20,near:0,pick(a){return a[(Math.random()*a.length)|0];},say(lines,force){if(EZ1||TUT.on)return;if(!force&&MT.cd>0)return;MT.cd=rr(11,18);try{monVoice(MT.pick(lines));}catch(e){}}};
function updTalk(dt){if(mode!=='play'||monDead)return;MT.cd-=dt;const d=Math.hypot(mon.position.x-P.x,mon.position.z-P.z);
 if(M.state==='hunt'){if(d<3.2&&MT.near<=0){MT.near=12;MT.say(['There you are.','Closer…','I have you now.','Nowhere left to run.'],true);}
  else if(d<20&&R()<dt/14)MT.say(['I can hear you…','Run. Run, little one.','You cannot hide from me.','I hear your heart.','Your footsteps are so loud.']);}
 else if((M.state==='search'||M.state==='wander')&&d<26&&R()<dt/45)MT.say(['Where are you?','I know you are here.','Come out… come out…','I can smell you.']);
 if(MT.near>0)MT.near-=dt;}
function updScary(dt){try{updTalk(dt);}catch(e){}if(mode!=='play'||monDead)return;const hunt=M.state==='hunt';
 pupils.forEach(p=>{p.material.color.setHex(hunt?0xff2010:0xffffff);});EYES.forEach(e=>e.material.color.setHex(hunt||M.rage>0?0xff3018:0xfff2c8));
 if(hunt&&SCY.was!=='hunt'){try{const d=distN||master;vox({f:220,f2:680,dur:1.6,g:.3,a:.15,vib:9,vd:60,fm:[700,1800],q:4,br:.7,dest:d});vox({f:330,f2:900,dur:1.2,g:.2,a:.1,at:.25,fm:[900,2200],q:3,dest:panner});}catch(e){}}
 SCY.was=M.state;
 // the head snaps over to an impossible angle, holds, then snaps back
 SCY.twT-=dt;if(SCY.twT<=0){SCY.twT=hunt?rr(1.2,2.6):rr(4,9);SCY.tw=hunt?.7:.9;SCY.tz=(R()<.5?-1:1)*rr(1.2,1.75);}
 if(SCY.tw>0){SCY.tw-=dt;const k=Math.min(1,(SCY.tw>.55?(SCY.tw-.55)<.15?1:1:1))*Math.min(1,SCY.tw*8);head.rotation.z+=SCY.tz*k;}
 // erratic skittering bursts while it chases
 if(hunt){SCY.bT-=dt;if(SCY.bT<=0){SCY.bT=rr(1.8,3.6);M.burst=.45;}}M.burst=Math.max(0,(M.burst||0)-dt);}
function resetGame(){try{lantern.visible=true;}catch(e){}if(MOD.daily)RNG=mulberry(daySeed());dbgUsed=false;bossReset();
 const ST=[[0,C-7],[-18,C-6],[16,C-7],[-C+7,8],[C-7,-4]];let st=ST[(R()*ST.length)|0];if(!clear(st[0],st[1],.8))st=ST[0];Object.assign(P,{x:st[0],z:st[1],yaw:0,pitch:0,roll:0,sneak:false,stam:1,h:1.6,down:false,need:0,src:null,rise:0});$('bSneak').classList.remove('on');$('down').style.display='none';
 {let mx=0,mz=0,q=0;do{const a_=R()*6.28,d_=rr(50,80);mx=Math.max(-E+4,Math.min(E-4,P.x+Math.cos(a_)*d_));mz=Math.max(-E+4,Math.min(E-4,P.z+Math.sin(a_)*d_));}while((Math.hypot(mx-P.x,mz-P.z)<40||blocked(mx,mz,.6))&&q++<80);mon.position.set(mx,0,mz);}rig.rotation.set(0,0,0);rig.position.set(0,0,0);head.rotation.set(-.45,0,0);arms.concat(legs).forEach(a=>{a.rotation.set(0,0,0);a.userData.e.rotation.set(0,0,0);});
 Object.assign(M,{state:'wander',timer:10,voice:3,stuck:0,detour:0,hp:2,stun:0,deadT:0,pause:0,rearT:0,rk:0,lunge:0,lcd:0});M.target.set(rr(-30,30),0,rr(-30,10));M.last.copy(mon.position);
 Object.assign(inv,{vkey:false,binoc:false,photos:0,coins:0,tapes:0,candles:0,watch:false,cutters:false,collar:false,ticket:false,dolls:0,toy:0,bottle:2,band:0,pick:false,holy:0,nv:false,nvb:1,cam:0,fire:0,flare:0,salt:0,oil:1,battery:false,c1:false,c2:false,trap:0,plank:0,boots:false,secret:false,box:0,map:false,shovel:false,safeKey:false,gun:false,ammo:0,fuel:false,tkey:false,pages:0});
 keys=0;stones=2;gens=0;noiseLvl=0;gate=0;gateOpening=false;gateL.rotation.y=0;gateR.rotation.y=0;elapsed=0;scareT=0;proj.on=false;proj.mesh.visible=false;eventT=rr(14,26);
 night=1;wake=false;P.hidden=null;VIS.g.fill(0);P.limp=0;bellDone={};AM.n=0;JR=0;M.tall=0;M.tallCd=undefined;PDU=0;FAKEU=0;DEATHP=null;M.anger=0;NV.on=false;corpses.forEach(c=>{c.g.visible=false;c.b.visible=false;});HUDS.st=0;HUDS.oil=0;goalLast='';PH.ring=0;PH.cd=rr(140,220);PH.uses=0;CAMT=0;camFP.visible=false;revs.forEach(r=>scene.remove(r.g));revs.length=0;M.mimT=undefined;P.rf=undefined;thunCover=0;stormT=rr(320,400);stormOn=0;P.breath=1;P.hb=false;P.gasp=0;REC.length=0;NE.length=0;DOORS.forEach(d=>{setDoor(d,false);d.t=0;d.barred=false;d.bar.visible=false;});HIDES.forEach(h=>{h.used=0;h.told=0;h.off=false;h.occ=false;});HIDES[(R()*CRYPTS.length)|0].off=true;{const c=HIDES.filter((h,i)=>i<CRYPTS.length&&!h.off);if(c.length)c[(R()*c.length)|0].occ=true;}M.heat=[];M.fav=null;mboxes.forEach(b=>{b.t=0;b.m.visible=false;});traps.forEach(t=>{t.on=false;t.m.visible=false;});wispUsed=false;wispT=0;wisp.visible=false;M.path=null;resetDawn();TH={};lampOut=0;tipI=0;secT=rr(50,80);behind=0;watchT=0;watcher.visible=false;benchMan.visible=true;bedArm.visible=false;bedT=0;nukeT=0;nukeCode=String(1000+Math.floor(R()*9000));stoneN=0;heardEver=false;winT=0;winFace.visible=false;chapelSeen=false;graveSeen={};gArm.visible=false;gArm.userData.t=0;ghost.visible=false;endDrive();
 monDead=false;killWay='';sel='stone';dug=false;safeOpen=false;breakerCd=0;bellCd=0;shotCd=0;splatDone=false;actCur=null;actProg=0;late=false;
 GEN.forEach(g=>setGen(g,false));powerAll(false);graveDirt.visible=true;graveHole.visible=false;graveMound.visible=false;pool.visible=false;lever.rotation.z=-.6;
 for(let i=0;i<BN;i++)bpos[i*3+1]=-10;bgeo.attributes.position.needsUpdate=true;$('blood').innerHTML='';
 crows.forEach(c=>{c.gone=false;c.fly=0;c.g.visible=true;c.g.position.set(c.x,c.h,c.z);c.g.rotation.set(0,R()*6,0);c.g.userData.w.forEach(q=>{q.visible=false;});});wires.forEach(w=>w.cd=0);
 zombies.forEach(z=>{z.state='off';z.g.visible=false;z.g.rotation.set(0,0,0);});hands.forEach(h=>{h.on=false;h.g.visible=false;});
 fcs.forEach(f=>{if(f.on)scene.remove(f.m);f.on=false;});flares.forEach(f=>{if(f.t>0)scene.remove(f.g);f.t=0;});salts.forEach(q=>{if(q.t>0)scene.remove(q.m);q.t=0;});crumbs.length=0;prints.forEach(m=>m.visible=false);
 while(pickGroup.children.length)pickGroup.remove(pickGroup.children[0]);picks=[];
 while(spots.length<70){const x=rr(-E+3,E-3),z=rr(-E+3,E-8);if(clear(x,z,1.2)&&!blocked(x,z,.6))spots.push([x,z]);}
 const sp=[[P.x+1.4,P.z-3]].concat(spots.slice().sort(()=>R()-.5)),types=['map'].concat(['key','key','key','page','page','page','page','page','page','shovel','fuel','tkey','box','box','trap','trap','plank','plank','boots','flare','salt','oil','oil','battery','cam','holy','nv','journal','journal','journal','pick']);
 types.forEach((t,i)=>{const s=sp[i%sp.length];let x,z,q=0;do{x=s[0]+rr(-.6,.6);z=s[1]+rr(-.6,.6);}while(blocked(x,z,.22)&&q++<10);addPick(t,x,z);});
 stonePicks.forEach(s=>s.visible=true);camera.fov=OPT.fov;camera.updateProjectionMatrix();
 $('tear').style.display='none';$('tear').classList.remove('go');$('danger').style.opacity=0;$('prompt').style.display='none';
 if(D.practice){monDead=true;killWay='practice';mon.visible=false;}WG.on=false;WG.cd=rr(150,240);girl.visible=false;applyMods();RNG=Math.random;placeDolls();placeStory();SNK.cd=rr(90,150);if(UG.on){UG.on=false;CAT.on=false;catAmb(false);}UG.ride=null;UG.handDone=false;UG.seen=false;UG.lx=null;UG.car.position.x=UG.carX;if(Q4.moonC===undefined)Q4.moonC=moon.color.getHex();moon.color.setHex(Q4.moonC);if(Q4.ghostW){scene.remove(Q4.ghostW.g);}Object.assign(Q4,{echoCd:rr(70,110),echo:null,stunPrev:0,stunN:0,napCd:rr(60,120),guardCd:30,organDone:false,bloodDone:false,kidsDone:false,phoneDone:false,phoneT:0,gramT:0,gramDone:false,mirrorDone:false,ping:null,ghostW:null,ghostDone:false,turn:0,lx:null,lz:null});P.bike=false;BIKEFP.visible=false;BIKE.x=-80;BIKE.z=-92;BIKE.g.position.set(-80,0,-92);BIKE.g.visible=true;BIKEACT.x=-79.2;BIKEACT.z=-92;M.nap=0;M.rage=0;EYES.forEach(e=>e.material.color.setHex(0xfff2c8));TRN.stop=false;TRN.stopped=false;TRN.willStop=false;SIG.g.userData.lv.rotation.z=.4;P.bless=false;P.blessUsed=false;ALT.forEach(a=>{a.c.visible=false;a.g.material.opacity=0;});DOG.forever=false;FIRES.length=0;FBOMB.on=false;FBOMB.m.visible=false;M.trapWise=0;M.insp=null;LAKEM.visible=false;PROC.forEach(g=>g.visible=false);Object.assign(ST2,{coins:0,witch:false,witchDone:false,proc:null,procDone:false,lakeT:0,lakeDone:false,paDone:0,paT:rr(200,320),carOn:false,faceT:0});SMART.heartMsg=false;SMART.trapMsg=false;CRATES.forEach(c=>{c.open=false;c.g.children[1].rotation.z=0;c.g.children[1].position.y=.45;});WISPS.forEach((w,i)=>{w.on=i===0;w.gone=false;w.g.material.opacity=0;});HRAD.used=false;HRAD.t=0;TOWER.t=0;TOWER.rev=0;boatAt(0);TRN.on=false;TRN.g.visible=false;TRN.lt.intensity=0;TRN.cd=rr(150,240);CSCR.forEach(c=>{c.g.position.set(c.x,0,c.z);});ZCUR=-1;shC={x:1e9,z:1e9};rollWeather();DOLLREV=false;CHALK.forEach(c=>scene.remove(c.g));CHALK.length=0;BLOODD.forEach(b=>scene.remove(b));BLOODD.length=0;M.bleed=0;TOY.on=false;TOY.g.visible=false;BOT.on=false;BOT.m.visible=false;ORG.used=0;ORG.t=0;FRESH.forEach(f=>{f.dug=false;f.m.scale.y=.18;});WEBS.forEach(w=>{w.hit=false;w.m.visible=true;});DOG.on=false;DOG.g.visible=false;DOG.cd=1e12;P.pant=0;resetStory();CAT.on=false;CAT.monIn=false;CAT.followT=0;CAT.burned=false;M.weak=0;CAT.fire.forEach(f=>{f.t=0;f.g.material.opacity=0;});catLoot();TUT.on=false;if(TUT.mk)TUT.mk.visible=false;$('winh').textContent='YOU ESCAPED';if(D.tut)tutStart();hud();
}
function hear(pos,rad){if(UG.on&&!UG.ride)return false;if(M.calm>0&&pos===P)return false;if(M.state==='creep'&&(M.ck>=1||Math.hypot(pos.x-P.x,pos.z-P.z)<4))return false;if(inCatXZ(pos.x,pos.z)!==CAT.monIn&&rad<900)return false;if(monDead||mode!=='play')return false;if(rad<150){rad*=D.h*nHear()*(M.eatT>0?.55:1)*(WX==='rain'?.82:1)*(OPT.assist?.85:1)*(M.nap>0?.5:1)*(EZ1?.5:1);if(pos===P&&thunCover>0)rad*=.12;}const d=Math.hypot(mon.position.x-pos.x,mon.position.z-pos.z);if(d>rad){if(pos===P&&rad<150){recNoise(P.x,P.z,rad,false,false);NR.r=Math.max(NR.r,Math.min(rad,40));}return false;}
 if(pos===P){M.heat=M.heat||[];let hit=null;for(const q of M.heat)if(Math.hypot(q.x-P.x,q.z-P.z)<7){hit=q;break;}if(hit){hit.w++;hit.x=(hit.x+P.x)/2;hit.z=(hit.z+P.z)/2;}else{M.heat.push({x:P.x,z:P.z,w:1});if(M.heat.length>8)M.heat.sort((a,b)=>b.w-a.w).pop();}}
 const was=M.state;if(pos===P)NR.r=Math.max(NR.r,Math.min(rad,40));if(pos===P){recNoise(P.x,P.z,rad,true,was!=='hunt');if(was!=='hunt')stat('heard',1);}M.state='hunt';M.pause=0;M.target.set(pos.x+rr(-1,1)*d*.03+(pos===P&&night>=2?(P.vx||0)*.9:0),0,pos.z+rr(-1,1)*d*.03+(pos===P&&night>=2?(P.vz||0)*.9:0));M.detour=0;heardEver=true;if(was!=='hunt'){M.wind=.75;M.eatT=0;sfx.sniff();M.voice=1.6;sndT=1.6;}return true;}
function softHear(pos,rad){if(monDead)return;if((M.state==='ambush'||M.state==='stalk')&&Math.hypot(mon.position.x-pos.x,mon.position.z-pos.z)<rad*D.h*.6){hear(pos,999);return;}if(M.state!=='wander')return;if(Math.hypot(mon.position.x-pos.x,mon.position.z-pos.z)<rad*D.h){M.state='search';M.timer=5;M.center.set(pos.x,0,pos.z);M.target.copy(M.center);}}
function makeNoise(rad){noiseLvl=Math.max(noiseLvl,Math.min(1,rad/30));hear(P,rad);}
function pulse(a,dt,ev,fn){a._p=(a._p||0)+dt;if(a._p>=ev){a._p=0;fn();}}
function kill(way){monDead=true;killWay=way;M.state='dead';M.deadT=0;sfx.die();$('danger').style.opacity=0;
 const st=$('state');st.textContent='IT IS DEAD';st.style.color='#888';if(way==='gun'||way==='zap'){bossArm();killCut(way);setTimeout(()=>{if(mode==='play')msg((way==='gun'?'It shrieks, folds, and goes still.':'The water lights up white. It stops moving.')+(inv.pages<6&&!D.practice?'  (Somewhere, a light comes on in Voss’s cottage. You never found all his pages — maybe that is for the best.)':''),6);},5200);}}
// late game: the dead start reaching up
function goLate(){if(late)return;late=true;return;let n=0,tr=0;while(n<hands.length&&tr<600){tr++;const x=rr(-E,E),z=rr(-E,E);if(Math.hypot(x-P.x,z-P.z)<8||!clear(x,z,.8))continue;const h=hands[n++];h.x=x;h.z=z;h.on=true;h.cd=0;h.up=0;h.g.visible=true;h.g.position.set(x,-.9,z);h.g.rotation.y=R()*6;}
 sfx.groan(.5);setTimeout(()=>sfx.groan(.4,pan()),700);setTimeout(()=>sfx.groan(.4,pan()),1500);msg('The ground is moving. Hands. Watch where you step.',5);}
function raiseGuards(){return;[[SH.x+6,SH.z-2],[SH.x+4.5,SH.z-5.5],[SH.x+7.5,SH.z+2.5]].forEach((p,i)=>{const z=zombies[i];z.x=p[0];z.z=p[1];z.state='rise';z.t=0;z.cd=0;z.g.visible=true;z.g.position.set(z.x,-1.9,z.z);z.g.rotation.set(0,R()*6,0);});
 setTimeout(()=>sfx.groan(.6),400);setTimeout(()=>sfx.groan(.5,pan()),1300);}
function grab(src,isZ){if(P.down||P.hidden||P.rise>0||mode!=='play')return;P.down=true;P.need=D.m;P.src=src;P.isZ=isZ;P.gt=0;actProg=0;sfx.fall();sfx.groan(.8);noiseLvl=1;hear(P,34);
 $('down').style.display='block';$('prompt').style.display='none';}
function struggle(){if(!P.down)return;P.need--;nz({f:500,q:1,g:.3,dur:.1});if(P.need<=0){P.down=false;P.rise=.9;$('down').style.display='none';if(P.isZ){P.src.state='stun';P.src.t=4;}else{P.src.cd=18;}msg('You tear free — but your ankle twists. You will limp for a while.',3);P.limp=45;}}

/* ---------- interactions ---------- */
acts.push({x:PH.x,z:PH.z+.9,r:2,hold:0,label:()=>PH.ring>0?'Answer the ringing phone':'A payphone. The receiver is warm.',can:()=>PH.ring>0,done(){answerPhone();}});
acts.push({x:WELL.x+1.15,z:WELL.z,r:1.2,hold:1.2,label:()=>CAT.on?null:'Climb down into the well (rope)',can:()=>true,done(){enterCat();}});
acts.push({get x(){return catC(0,3).x-.9;},get z(){return catC(0,3).z;},r:1.4,hold:1,label:()=>'Climb the ladder back up',can:()=>true,done(){exitCat();}});
acts.push({get x(){return catC(CAT.far[0],CAT.far[1]).x;},get z(){return catC(CAT.far[0],CAT.far[1]).z+1.3;},r:1.6,hold:2,label:()=>CAT.burned?'Its nest — ash':(inv.fire>0||inv.flare>0)?'Burn its nest (uses a firecracker or flare)':'The coffin Elias was buried alive in — clawed open from the inside, lined with rags and rat bones. It sleeps here. (You need fire.)',can:()=>!CAT.burned&&(inv.fire>0||inv.flare>0),done(){burnElias();}});
acts.push({get x(){return girl.position.x;},get z(){return girl.position.z;},r:2.2,hold:0,label:()=>(WG.on&&!WG.scr&&inv.secret&&ANNIE.step===0)?'Give her the letter':null,can:()=>true,done(){annieGive();}});
acts.push({x:TOM.x-.9,z:TOM.z+.5,r:1.5,hold:0,label:()=>TOM.n===0?'Someone is sitting in the corner…':'Whisper to Old Tom',can:()=>true,done(){talkTom();}});
acts.push({x:LBOX.x,z:LBOX.z+.5,r:1.3,hold:0,label:()=>LBOX.open?'Read Voss\u2019s ledger again':inv.pick?'Pick the lock on Voss\u2019s lockbox':'A locked metal box. You would need lockpicks.',can:()=>LBOX.open||inv.pick,done(){if(LBOX.open)openLedger();else openPick();}});
acts.push({x:ORG.x,z:ORG.z+.9,r:1.3,hold:0,label:()=>ORG.used>=night?'The organ — your hands are still shaking':'Play the old organ (VERY loud — it will come)',can:()=>ORG.used<night,done(){ORG.used=night;ORG.t=12;msg('You slam the keys. The whole chapel howls. Everything in Hollow Rest will come to this sound — so get out NOW.',4);award('organ');}});
const HIDES=[];HIDES.push({hx:MAUS.x+3.4,hz:MAUS.z+3.3,ex:MAUS.x+2.2,ez:MAUS.z+2.2,name:'Lie down inside the open sarcophagus'});HIDES.push({hx:CAB.x+1.6,hz:CAB.z+1.4,ex:CAB.x+.6,ez:CAB.z+.6,name:'Crawl under the hermit\u2019s bed'});CRYPTS.forEach(c=>HIDES.push({hx:c[0]-.75,hz:c[1]-.9,ex:c[0]+.45,ez:c[1]-.4,name:'Climb into the stone coffin and hide'}));
HIDES.push({hx:COT.x-2.5,hz:COT.z+2.4,ex:COT.x-2.5,ez:COT.z+1.5,name:'Hide inside the wardrobe'});HIDES.push({hx:SH.x-.5,hz:SH.z-1.85,ex:SH.x-.5,ez:SH.z-.8,name:'Crawl under the workbench and hide'});HIDES.push({hx:CH.x+3.1,hz:CH.z-2.3,ex:CH.x+2,ez:CH.z-2.3,name:'Crouch behind the altar and hide'});
acts.push({x:SCR.x,z:SCR.z,r:2,hold:0,label:()=>inv.c1?null:'Look at the scarecrow\'s back',can:()=>true,done(){inv.c1=true;sfx.paper();msg('Chalked on the sacking, half washed away: “FIELD RADIO — '+nukeCode.slice(0,2)+'__ — VOSS WILL NOT USE IT”',6);setTimeout(save,50);}});
acts.push({x:WELL.x,z:WELL.z,r:2.1,hold:2.5,label:()=>inv.c2?null:'Pull up the well bucket (creaks)',can:()=>true,tick(dt){pulse(this,dt,.8,()=>{sfx.door();noiseLvl=.6;hear(P,18);});},done(){inv.c2=true;sfx.clunk();msg('An army dog tag in the bucket. Scratched into the back: “…__'+nukeCode.slice(2)+'. God forgive me.”',6);setTimeout(save,50);}});
acts.push({x:RADIO.x,z:RADIO.z,r:1.5,hold:0,label:()=>nukeT>0?null:(inv.battery?'Hook up the battery and use the field radio':'An army field radio. Dead — it needs a battery.'),can:()=>inv.battery&&nukeT<=0,done(){openPad();}});
HIDES.push({hx:GRAVE.x,hz:GRAVE.z,ex:GRAVE.x+1.4,ez:GRAVE.z,name:'Lie down in the open grave and hide',grave:1});
HIDES.forEach(h=>acts.push({x:h.ex,z:h.ez,r:1.5,hold:0,label:()=>(h.grave&&!dug)?null:h.off?(h.used>=4?'Broken — you cannot hide here any more':'This coffin lid is cracked in half — no room to hide'):h.name+(h.used>=2?' (it creaks louder each time)':''),can:()=>!h.off&&(!h.grave||dug),done(){if(h.occ){h.occ=false;if(!jumpFace('occ',()=>grab({cd:0},true)))grab({cd:0},true);msg('Someone is already in this coffin — and it grabs you!',3);return;}
  if((h.used||0)>=1&&!monDead&&!TUT.on&&!D.practice&&jsCd<=0&&R()<.45&&Math.hypot(mon.position.x-h.hx,mon.position.z-h.hz)<40){jsCd=45;jumpFace('reuse',()=>{grab({cd:0},false);msg('You hid here before. It remembered. It was WAITING in there.',4);});return;}P.hidden=h;h.used=(h.used||0)+1;M.fav=h;sfx.creak();if(h.used>1)hear(P,(h.used-1)*4);if(h.used>=2)caption('it creaks louder every time');if(h.used>=4){h.off=true;setTimeout(()=>msg('Something splits as you pull it shut. This hiding place will not hold again.',4),600);}h.told=0;P.breath=1;P.x=h.hx;P.z=h.hz;$('prompt').style.display='none';msg(h.used>1?'You have hidden here before. If it comes searching, it may remember this place.':'Hidden. It cannot find you by touch — only by sound. E to climb out.',4.5);}}));
GEN.forEach(g=>acts.push({x:g.x,z:g.z,r:2.3,hold:4.5,label:()=>g.on?null:'Crank the generator (loud)',can:()=>true,
 tick(dt){pulse(this,dt,.8,()=>{sfx.crank();noiseLvl=.8;hear(g,26);});},
 done(){setGen(g,true);gens++;hud();setTimeout(save,50);sfx.genStart();hear(g,52);if(gens>=3){powerAll(true);msg('All three running. The gate has power — and so does the wire in the flooded hollow.',5);}else msg('Generator '+gens+' of 3 is running. It heard that. Move.',3.5);}}));
acts.push({x:GRAVE.x,z:GRAVE.z,r:2,hold:8,label:()=>dug?null:(inv.shovel?'Dig up Marrow\'s grave (loud)':'Fresh earth on E. Marrow\'s grave. You would need a shovel.'),can:()=>inv.shovel,
 tick(dt){pulse(this,dt,1,()=>{sfx.dig();noiseLvl=.85;hear(P,27);});},
 done(){dug=true;inv.safeKey=true;inv.secret=true;lore('letter');setTimeout(save,50);graveDirt.visible=false;graveHole.visible=true;graveMound.visible=true;sfx.clunk();raiseGuards();goLate();msg('The coffin is empty — except for a small iron key and a child\'s folded letter (TAB to read). Far off, by the shed, something groans awake.',6);}});
acts.push({x:SAFE.x,z:SAFE.z,r:2,hold:3.5,label:()=>safeOpen?null:(inv.safeKey?'Unlock the safe':'A locked iron safe. No key.'),can:()=>inv.safeKey,
 tick(dt){pulse(this,dt,.9,()=>{sfx.clunk();noiseLvl=.5;hear(P,15);});},
 done(){safeOpen=true;inv.gun=true;inv.ammo=2;sel='gun';hud();setTimeout(save,50);sfx.clunk();msg('Marrow\'s shotgun. Only TWO shells. It takes two, close — do not miss. (2 = shotgun, 1 = stones)',5.5);}});
acts.push({x:BRK.x,z:BRK.z,r:2,hold:0,label:()=>monDead?null:(gens<3?'Breaker box — dead. Needs all 3 generators ('+gens+'/3)':(breakerCd>0?'Breaker recharging…':'Throw the breaker (electrify the hollow)')),can:()=>gens>=3&&breakerCd<=0,
 done(){sfx.zap();flashT=.5;lever.rotation.z=.6;setTimeout(()=>{lever.rotation.z=-.6;},900);const d=Math.hypot(mon.position.x-HOL.x,mon.position.z-HOL.z);
  if(d<HOL.r+.4)kill('zap');else{breakerCd=30;noiseLvl=1;hear(BRK,80);msg('Nothing was in the water. The breaker needs time — and it heard that.',4);}}});
acts.push({x:BELL.x,z:BELL.z,r:2,hold:0,label:()=>bellCd>0?null:'Ring the bell (it WILL come)',can:()=>true,done(){sfx.bell();bellCd=14;noiseLvl=1;hear(BELL,999);if(ANNIE.step===1)annieBell();else msg('The bell rolls across the whole graveyard.',3);}});
acts.push({x:TRUCK.x,z:TRUCK.z,r:3.3,hold:6.5,label:()=>(inv.fuel&&inv.tkey)?'Fuel up and start the truck (VERY loud)':'Old truck. Needs '+[inv.fuel?'':'a fuel can',inv.tkey?'':'its key'].filter(Boolean).join(' and ')+'.',can:()=>inv.fuel&&inv.tkey,
 tick(dt){pulse(this,dt,.7,()=>{sfx.engine();noiseLvl=1;hear(P,999);});},done(){startDrive();}});
acts.push({x:HATCH.x,z:HATCH.z,r:2.2,hold:5,label:()=>keys>=3?'Unlock the tunnel hatch':'Chapel tunnel hatch — three brass locks ('+keys+'/3 keys)',can:()=>keys>=3,
 tick(dt){pulse(this,dt,1,()=>{sfx.cans();noiseLvl=.6;hear(P,20);});},done(){win('tunnel');}});

/* ---------- input ---------- */
const K={};let joy={id:null,x0:0,y0:0,dx:0,dy:0},look={id:null,x:0,y:0},tRun=false,tUse=false;
function toggleSneak(){if(P.down)return;P.sneak=!P.sneak;if(P.sneak){tRun=false;$('bRun').classList.remove('on');}$('bSneak').classList.toggle('on',P.sneak);msg(P.sneak?'Sneaking — silent':'Standing',1.1);}
const mboxes=[];for(let i=0;i<2;i++){const m=makePick('box');m.visible=false;scene.add(m);mboxes.push({m:m,t:0,p:0,x:0,z:0});}
const traps=[];for(let i=0;i<2;i++){const m=makePick('trap');m.visible=false;scene.add(m);traps.push({m:m,on:false,arm:0,x:0,z:0});}
function dropTrap(){if(mode!=='play'||P.down||P.hidden)return;if(inv.trap<=0){msg('No bear trap.',1.2);return;}const t=traps.find(q=>!q.on);if(!t)return;inv.trap--;t.on=true;t.arm=1;t.x=P.x-Math.sin(P.yaw)*.9;t.z=P.z-Math.cos(P.yaw)*.9;t.m.position.set(t.x,0,t.z);t.m.visible=true;sfx.clunk();hud();msg('Trap set. Lure it across.',2.5);}
function updTraps(dt){for(const t of traps){if(!t.on)continue;t.arm-=dt;if(t.arm<=0&&!monDead&&M.stun<=0&&Math.hypot(mon.position.x-t.x,mon.position.z-t.z)<1){t.on=false;t.m.visible=false;M.stun=6;M.trapWise=(M.trapWise||0)+1;sfx.crash();sfx.screech();sndT=2;msg('SNAP. The trap has it — for a few seconds.',3);}}}
const wisp=glow(0,-5,0,0xbfd8ff,.7,.9);wisp.visible=false;let wispT=0,wispUsed=false;const wv={x:0,z:0};
function askDead(){if(mode!=='play'||P.down||P.hidden)return;if(wispUsed){msg('The dead have already answered you tonight.',2);return;}let best=null,bd=1e9;const want={map:1,key:1,fuel:1,tkey:1,page:1,shovel:1};
 for(const k of picks)if(!k.taken&&want[k.type]){const d=Math.hypot(k.x-P.x,k.z-P.z);if(d<bd){bd=d;best=k;}}for(const g of GEN)if(!g.on){const d=Math.hypot(g.x-P.x,g.z-P.z);if(d<bd){bd=d;best=g;}}
 if(!best){msg('Nothing answers.',2);return;}wispUsed=true;const d=bd||1;wv.x=(best.x-P.x)/d*5;wv.z=(best.z-P.z)/d*5;wisp.position.set(P.x+wv.x*.3,1.2,P.z+wv.z*.3);wisp.visible=true;wispT=Math.min(9,d/5+1);sfx.whisper();msg('A pale light drifts toward something you need. Follow it. (Once per night.)',4.5);}
function addPick(t,x,z){const o=makePick(t);o.position.x=x;o.position.z=z;pickGroup.add(o);const k={type:t,o:o,x:x,z:z,r:1.9,hold:0,taken:false,label(){return this.taken?null:'Pick up '+NAMES[t];},can:()=>true,done(){take(this);}};picks.push(k);return k;}
function save(){if(mode!=='play'||D.practice)return;try{localStorage.setItem('crawler_save',JSON.stringify({d:DIFF.indexOf(D),inv:inv,keys:keys,stones:stones,night:night,el:elapsed,dug:dug,safe:safeOpen,gens:GEN.map(g=>g.on),md:monDead,kw:killWay,late:late,picks:picks.filter(k=>!k.taken).map(k=>[k.type,k.x,k.z])}));}catch(e){}}
function cont(){let v=null;try{v=JSON.parse(localStorage.getItem('crawler_save'));}catch(e){}if(!v){begin();return;}D=DIFF[v.d]||DIFF[1];begin();Object.assign(inv,v.inv);keys=v.keys;stones=v.stones;night=v.night;elapsed=v.el;dug=v.dug;safeOpen=v.safe;
 GEN.forEach((g,i)=>setGen(g,!!v.gens[i]));gens=v.gens.filter(Boolean).length;if(gens>=3)powerAll(true);if(dug){graveDirt.visible=false;graveHole.visible=true;graveMound.visible=true;}
 while(pickGroup.children.length)pickGroup.remove(pickGroup.children[0]);picks=[];v.picks.forEach(p=>addPick(p[0],p[1],p[2]));if(v.late)goLate();if(dug&&!safeOpen)raiseGuards();if(v.md){monDead=true;killWay=v.kw;mon.visible=false;}
 if(inv.gun)sel='gun';hud();msg('Night '+night+' of '+maxN()+'. You pick up where you left off.',5);applyNight(false);}
const fcs=[],flares=[],salts=[],crumbs=[],prints=[];let printI=0;
for(let i=0;i<30;i++){const m=new T.Mesh(new T.PlaneGeometry(.13,.3),new T.MeshBasicMaterial({color:0x140e08,transparent:true,opacity:.7,depthWrite:false}));m.rotation.x=-Math.PI/2;m.visible=false;scene.add(m);prints.push(m);}
function throwFire(){return;FP.thr=.45;if(mode!=='play'||P.down||P.hidden)return;if(inv.fire<=0){msg('No firecrackers.',1.2);return;}inv.fire--;hud();const m=makePick('fire');scene.add(m);const d=new T.Vector3();camera.getWorldDirection(d);m.position.copy(camera.position).addScaledVector(d,.5);const v=d.multiplyScalar(16);v.y+=4;
 const gl=new T.Sprite(new T.SpriteMaterial({map:mistT,color:0xffa040,transparent:true,depthWrite:false}));gl.scale.set(.4,.4,1);m.add(gl);fcs.push({m:m,v:v,on:true,t:0,n:0,gl:gl});sfx.whoosh();}
function fireFlare(){if(mode!=='play'||P.down||P.hidden)return;if(inv.flare<=0){msg('No flare.',1.2);return;}inv.flare--;hud();sfx.shot();noiseLvl=1;hear(P,30);const d=new T.Vector3();camera.getWorldDirection(d);
 const g=new T.Group();g.position.copy(camera.position).addScaledVector(d,.6);const sp=new T.Sprite(new T.SpriteMaterial({map:mistT,color:0xff3020,transparent:true,depthWrite:false,fog:false}));sp.scale.set(1.4,1.4,1);g.add(sp);const L=new T.PointLight(0xff3a20,2.6,22,1.4);g.add(L);scene.add(g);
 const v=d.multiplyScalar(26);v.y+=7;flares.push({g:g,v:v,L:L,sp:sp,t:28,land:false,ht:0});msg('The flare arcs over the graves and lights everything red.',3);}
function pourSalt(){if(mode!=='play'||P.down||P.hidden)return;if(inv.salt<=0){msg('No salt.',1.2);return;}inv.salt--;hud();const r=new T.Mesh(new T.RingGeometry(2.3,2.5,40),new T.MeshBasicMaterial({color:0xd8d4c8,transparent:true,opacity:.75,depthWrite:false}));r.rotation.x=-Math.PI/2;r.position.set(P.x,.04,P.z);scene.add(r);salts.push({m:r,x:P.x,z:P.z,t:50});sfx.paper();msg('You pour a ring of salt around yourself. The dead will not step over it.',4);}
function inSalt(x,z,pad){for(const q of salts)if(Math.hypot(x-q.x,z-q.z)<2.4+(pad||0))return q;return null;}
function updItems(dt){
 for(const f of fcs){if(!f.on)continue;if(f.n===0){f.v.y-=20*dt;f.m.position.addScaledVector(f.v,dt);if(f.m.position.y<=.03){f.m.position.y=.03;f.n=1;f.t=0;}}else{f.t+=dt;if(f.t>.24){f.t=0;f.n++;sfx.bang();hear(f.m.position,62);sndT=0;f.gl.scale.setScalar(rr(1.5,3.2));f.gl.material.opacity=1;}else f.gl.material.opacity*=.85;if(f.n>12){f.on=false;scene.remove(f.m);}}}
 for(const f of flares){if(f.t<=0)continue;if(!f.land){f.v.y-=12*dt;f.g.position.addScaledVector(f.v,dt);if(f.g.position.y<=.15){f.g.position.y=.15;f.land=true;}}else{f.t-=dt;f.ht-=dt;if(f.ht<=0){f.ht=3;hear(f.g.position,85);}f.L.intensity=2.2+R()*.8;f.sp.scale.setScalar(1.2+R()*.4);if(f.t<=0)scene.remove(f.g);}}
 for(const q of salts){if(q.t<=0)continue;q.t-=dt;if(q.t<6)q.m.material.opacity=q.t/8;if(q.t<=0)scene.remove(q.m);}}
function addPrint(){const m=prints[printI++%prints.length],side=(printI%2?1:-1)*.13;m.position.set(P.x+Math.cos(P.yaw)*side,.03,P.z-Math.sin(P.yaw)*side);m.rotation.z=P.yaw;m.visible=true;m.material.opacity=.7;}
const MBN=[659,622,523,494,440,415,392,523];
function dropBox(){if(mode!=='play'||P.down||P.hidden)return;if(inv.box<=0){msg('No music box.',1.2);return;}const b=mboxes.find(q=>q.t<=0);if(!b)return;inv.box--;b.t=16;b.p=1;b.x=P.x-Math.sin(P.yaw)*.7;b.z=P.z-Math.cos(P.yaw)*.7;b.m.position.set(b.x,0,b.z);b.m.visible=true;hud();msg('The music box starts to sing. Get away from it.',3);}
function updBoxes(dt){for(const b of mboxes){if(b.t<=0)continue;if(!monDead&&Math.hypot(mon.position.x-b.x,mon.position.z-b.z)<1.5){b.t=0;b.m.visible=false;try{sfx.crash();}catch(e){}caption('something smashed');if(Math.hypot(P.x-b.x,P.z-b.z)<30)msg('It found the music box — and smashed it to pieces.',3);M.state='search';M.timer=6;M.center.set(b.x,0,b.z);continue;}b.t-=dt;b.p+=dt;if(b.p>.55){b.p=0;const d=Math.hypot(P.x-b.x,P.z-b.z),f=MBN[(R()*MBN.length)|0]*rr(.98,1.02),g=Math.max(.01,.16*(1-d/40));tone({f:f,g:g,dur:1.3,a:.004,dest:wet});tone({type:'triangle',f:f*2.01,g:g*.3,dur:.6,dest:wet});hear(b,42);}if(b.t<=0)b.m.visible=false;}}
function openPad(){mode='pad';padStr='';try{if(document.exitPointerLock)document.exitPointerLock();}catch(e){}$('padd').textContent='_ _ _ _';$('pad').style.display='flex';sfx.stat();}
function closePad(){$('pad').style.display='none';if(mode==='pad'){mode='play';lockPointer();}}
function padKey(k){if(mode!=='pad')return;if(k==='C'){padStr='';}else if(k==='<'){padStr=padStr.slice(0,-1);}else if(k==='OK'){
  if(padStr===nukeCode){closePad();nukeT=90;sirT=0;sfx.stat();hear(RADIO,999);msg('Static. Then a flat voice: “Authentication accepted. Strike inbound on these coordinates. Ninety seconds.” GET INSIDE A STONE CRYPT.',8);return;}
  padStr='';sfx.stat();hear(RADIO,32);noiseLvl=1;$('padd').textContent='WRONG';setTimeout(()=>{if(mode==='pad')$('padd').textContent='_ _ _ _';},700);return;}
 else if(padStr.length<4)padStr+=k;$('padd').textContent=(padStr+'____').slice(0,4).split('').join(' ');sfx.clack();}
function inCrypt(){return CRYPTS.some(c=>Math.abs(P.x-c[0])<2&&Math.abs(P.z-c[1])<2.5);}
function nukeTick(dt){if(nukeT<=0)return;nukeT-=dt;sirT-=dt;if(sirT<=0){sirT=2.6;sfx.siren();}if(nukeT<=0){nukeT=0;if(inCrypt()||P.hidden){monDead=true;killWay='nuke';win('nuke');}else nukeDeath();}}
function nukeDeath(){mode='dead';P.hidden=null;try{if(document.exitPointerLock)document.exitPointerLock();}catch(e){}const f=$('flash');f.style.transition='none';f.style.background='#fff';f.style.opacity=1;sfx.nuke();
 setTimeout(()=>{f.style.transition='opacity 2s';f.style.opacity=0;setTimeout(()=>{f.style.background='';f.style.transition='';},2100);wake=night<maxN();$('deadh').textContent='VAPORIZED';$('retry').textContent=wake?'WAKE UP':'START OVER';$('deadsub').textContent='You were above ground when it hit.'+(wake?' Somehow, you wake at the gate. The radio still works.':'');$('dead').style.display='flex';},900);}
function toggleInv(){if(mode==='play'){mode='inv';try{if(document.exitPointerLock)document.exitPointerLock();}catch(e){}renderInv();$('inv').style.display='flex';for(const k in K)K[k]=false;}else if(mode==='inv'){mode='play';$('inv').style.display='none';lockPointer();}}
function useHand(){if(mode!=='play'||P.down)return;if(sel==='gun'&&inv.gun)fire();else throwStone();}
addEventListener('keydown',e=>{if(mode==='pick'){e.preventDefault();if(e.code==='KeyE'||e.code==='Space'||e.code==='Enter')pickTry();else if(e.code==='Escape')closePick();return;}if(mode==='pad'){e.preventDefault();if(/^Digit\d$|^Numpad\d$/.test(e.code))padKey(e.code.slice(-1));else if(e.code==='Backspace')padKey('<');else if(e.code==='Enter'||e.code==='NumpadEnter')padKey('OK');else if(e.code==='Escape')closePad();return;}
 if(mode==='cut'){if(e.code==='Space'||e.code==='Escape'||e.code==='Enter'){e.preventDefault();skipCut();}return;}
 if(e.code==='Tab'||e.code==='KeyI'){e.preventDefault();if(!e.repeat)toggleInv();return;}
 K[e.code]=true;if(e.code==='Space'||e.code.startsWith('Arrow'))e.preventDefault();if(mode!=='play'||e.repeat)return;
 if(e.code==='Space')struggle();if(e.code==='KeyC')toggleSneak();if(e.code==='KeyT'||e.code==='KeyQ')useHand();
 if(e.code==='KeyE')eTap=true;if(e.code==='Digit3')dropBox();if(e.code==='Digit4')dropTrap();if(e.code==='Digit5')throwFire();if(e.code==='Digit6')fireFlare();if(e.code==='Digit7')pourSalt();if(e.code==='Digit8'&&!DBG)snap();if(e.code==='KeyG'&&!DBG)throwBottle();if(e.code==='KeyY'&&!DBG)dropToy();if(e.code==='KeyB'&&!DBG)useBandage();if(e.code==='KeyK'&&!DBG)chalkMark();if(e.code==='KeyX'&&!DBG)throwBomb();if(e.code==='Space'&&UG.ride&&!e.repeat)UG.pump++;if(e.code==='KeyR'&&!DBG)quickTurn();if(e.code==='KeyO'&&!DBG)askRadio();if(e.code==='Digit9'&&!DBG)splashHoly();if(e.code==='Digit0'&&!DBG)toggleNV();if(e.code==='KeyP')document.body.classList.toggle('nohud');if(e.code==='KeyH')askDead();
 if(e.code==='Digit1'){sel='stone';hud();}if(e.code==='Digit2'&&inv.gun){sel='gun';hud();}});
window.__PZT=0;addEventListener('keyup',e=>{K[e.code]=false;if(e.code==='Escape'){if(mode==='play'){mode='pause';window.__PZT=performance.now();$('pause').style.display='flex';try{if(document.pointerLockElement)document.exitPointerLock();}catch(err){}}else if(mode==='pause'&&performance.now()-window.__PZT>450){$('pause').style.display='none';mode='play';try{initAudio();}catch(err){}try{lockPointer();}catch(err){}}}});
addEventListener('blur',()=>{for(const k in K)K[k]=false;mx=my=.5;});
document.addEventListener('mouseleave',()=>{mx=my=.5;});
canvas.addEventListener('mousedown',e=>{if(mode==='play'&&e.button===0&&!isTouch){if(document.pointerLockElement!==canvas)lockPointer();useHand();}});
addEventListener('mousemove',e=>{if(mode!=='play')return;mx=e.clientX/innerWidth;my=e.clientY/innerHeight;if(Math.abs(e.movementX||0)>150||Math.abs(e.movementY||0)>150)return;
 const locked=document.pointerLockElement===canvas;if(!locked&&(isTouch||e.pointerType==='touch'))return;const k=.0023*SENS*(locked?1:1.15);P.yaw-=(e.movementX||0)*k;P.pitch-=(e.movementY||0)*k*(OPT.invY?-1:1);P.pitch=Math.max(-1.45,Math.min(1.45,P.pitch));});
document.addEventListener('mouseleave',()=>{mx=.5;my=.5;});addEventListener('blur',()=>{mx=.5;my=.5;});
document.addEventListener('pointerlockerror',()=>{if(!TH.lockF&&mode==='play'){TH.lockF=1;msg('Your browser will not let the game capture the mouse here. Move the cursor away from the middle to turn — back to the middle to stop.',7);}});
function lockPointer(){if(isTouch)return;try{const r=canvas.requestPointerLock();if(r&&r.catch)r.catch(()=>{});}catch(e){}}
document.addEventListener('pointerlockchange',()=>{if(document.pointerLockElement===canvas){mx=.5;my=.5;if(!everLocked&&mode==='play')msg('Mouse captured — move it to look around. Esc frees it.',3.5);}if(document.pointerLockElement===canvas)everLocked=true;else if(mode==='play'&&everLocked){mode='pause';window.__PZT=performance.now();$('pause').style.display='flex';}});
function throwStone(){if(proj.on)return;if(stones<=0){msg('No stones left — look under the dead trees',2);return;}stones--;FP.thr=.45;hud();
 const d=new T.Vector3();camera.getWorldDirection(d);proj.mesh.position.copy(camera.position).addScaledVector(d,.5);proj.v.copy(d).multiplyScalar(17);proj.v.y+=3.5;proj.on=true;proj.b=0;proj.roll=false;proj.mesh.visible=true;sfx.whoosh();}
const tmp=new T.Vector3(),hp=new T.Vector3();
function cone(x,y,z,range,base,spread){const cx=x-camera.position.x,cy=y-camera.position.y,cz=z-camera.position.z,t=cx*tmp.x+cy*tmp.y+cz*tmp.z;return t>0&&t<range&&Math.hypot(cx-tmp.x*t,cy-tmp.y*t,cz-tmp.z*t)<base+t*spread;}
function fire(){if(shotCd>0)return;if(inv.ammo<=0){msg('Empty.',1.2);sfx.clunk();shotCd=.4;return;}inv.ammo--;shotCd=1.3;muzzleT=.1;kick=1;FP.pumped=0;sfx.shot();noiseLvl=1;hud();P.pitch=Math.min(1.45,P.pitch+.12);
 camera.getWorldDirection(tmp);let hitZ=0;
 zombies.forEach(z=>{if((z.state==='chase'||z.state==='idle'||z.state==='stun'||z.state==='rise')&&cone(z.x,1.1,z.z,15,.5,.1)){z.state='dead';z.t=0;hitZ++;bleed(z.x,1.3,z.z,14,1.8);}});
 const hit=!monDead&&cone(mon.position.x,.6,mon.position.z,17,.6,.09);
 if(hit){M.hp--;bleed(mon.position.x,.7,mon.position.z,26,2.4);if(M.hp<=0)kill('gun');else{M.stun=2.2;sfx.screech();M.state='hunt';M.target.set(P.x,0,P.z);msg('You hit it. It is still moving.',2.5);}}
 else if(!monDead){hear(P,999);msg(hitZ?'One of the dead drops. The crawler heard the shot.':(inv.ammo>0?'Missed. Now it knows exactly where you are.':'Missed. That was the last shell.'),3);}}
{addEventListener('touchstart',()=>{if(!isTouch){isTouch=true;$('touch').style.display='block';hud();}},{passive:true});
 addEventListener('pointermove',e=>{if(e.pointerType==='mouse'&&isTouch&&Math.abs(e.movementX||0)+Math.abs(e.movementY||0)>2){isTouch=false;$('touch').style.display='none';hud();}},{passive:true});
 canvas.addEventListener('touchstart',e=>{e.preventDefault();for(const t of e.changedTouches){if(t.clientX<innerWidth*.45&&joy.id===null){joy.id=t.identifier;joy.x0=t.clientX;joy.y0=t.clientY;joy.dx=joy.dy=0;const j=$('joy');j.style.display='block';j.style.left=(t.clientX-55)+'px';j.style.top=(t.clientY-55)+'px';}
  else if(look.id===null){look.id=t.identifier;look.x=t.clientX;look.y=t.clientY;}}},{passive:false});
 canvas.addEventListener('touchmove',e=>{e.preventDefault();for(const t of e.changedTouches){if(t.identifier===joy.id){joy.dx=Math.max(-1,Math.min(1,(t.clientX-joy.x0)/50));joy.dy=Math.max(-1,Math.min(1,(t.clientY-joy.y0)/50));$('joy').firstChild.style.transform='translate('+joy.dx*35+'px,'+joy.dy*35+'px)';}
  else if(t.identifier===look.id){P.yaw-=(t.clientX-look.x)*.005;P.pitch-=(t.clientY-look.y)*.005*(OPT.invY?-1:1);P.pitch=Math.max(-1.45,Math.min(1.45,P.pitch));look.x=t.clientX;look.y=t.clientY;}}},{passive:false});
 const end=e=>{for(const t of e.changedTouches){if(t.identifier===joy.id){joy.id=null;joy.dx=joy.dy=0;$('joy').style.display='none';}if(t.identifier===look.id)look.id=null;}};
 canvas.addEventListener('touchend',end);canvas.addEventListener('touchcancel',end);
 const tb=(id,fn)=>$(id).addEventListener('touchstart',e=>{e.preventDefault();fn();},{passive:false});
 tb('bThrow',useHand);tb('bSneak',toggleSneak);tb('bBag',toggleInv);
 tb('bRun',()=>{tRun=!tRun;if(tRun&&P.sneak)toggleSneak();$('bRun').classList.toggle('on',tRun);});
 tb('bBox',dropBox);
{const tc=$('touch');const mkb=(id,txt,css)=>{const d=document.createElement('div');d.className='tb';d.id=id;d.textContent=txt;d.style.cssText=css;tc.appendChild(d);return d;};
 const bb=mkb('bBreath','HOLD BREATH','right:96px;bottom:100px;font-size:9px;text-align:center');bb.addEventListener('touchstart',e=>{e.preventDefault();tBreath=true;},{passive:false});bb.addEventListener('touchend',()=>{tBreath=false;});bb.addEventListener('touchcancel',()=>{tBreath=false;});
 const bp=mkb('bPause','II','left:14px;top:120px;width:44px;height:44px');tb('bPause',()=>{if(mode==='play'){mode='pause';$('pause').style.display='flex';}});
 const strip=document.createElement('div');strip.id='istrip';strip.style.cssText='position:absolute;left:50%;transform:translateX(-50%);bottom:12px;display:flex;gap:6px;pointer-events:auto';tc.appendChild(strip);
 const IT=[['trap','TRAP',()=>inv.trap>0,()=>dropTrap()],['fire','FIRE',()=>inv.fire>0,()=>throwFire()],['flare','FLARE',()=>inv.flare>0,()=>fireFlare()],['salt','SALT',()=>inv.salt>0,()=>pourSalt()],['cam','PHOTO',()=>inv.cam>0,()=>snap()],['holy','HOLY',()=>inv.holy>0,()=>splashHoly()],['nv','NIGHT',()=>inv.nv,()=>toggleNV()]];
 IT.forEach(q=>{const d=document.createElement('div');d.className='tb';d.textContent=q[1];d.style.cssText='position:relative;width:52px;height:52px;font-size:9px;display:none';d.addEventListener('touchstart',e=>{e.preventDefault();try{q[3]();}catch(er){}},{passive:false});strip.appendChild(d);q.push(d);});
 window.__istrip=()=>{IT.forEach(q=>{q[4].style.display=q[2]()?'flex':'none';});};}tb('bSwap',()=>{if(inv.gun){sel=sel==='gun'?'stone':'gun';hud();}});
 tb('bUse',()=>{if(P.down)struggle();else tUse=true;});$('bUse').addEventListener('touchend',()=>{tUse=false;});
}
document.querySelectorAll('.gfx').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.gfx').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');HI=b.getAttribute('data-g')==='1';lamp.castShadow=HI;renderer.setPixelRatio(HI?1:.75);renderer.setSize(innerWidth,innerHeight);}));
let frozen=false,dbgUsed=false;addEventListener('keydown',e=>{if(!DBG||mode!=='play')return;dbgUsed=true;const fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw);
 if(e.code==='KeyM'){frozen=true;mon.position.set(P.x+fx*2.6,0,P.z+fz*2.6);mon.rotation.y=Math.atan2(P.x-mon.position.x,P.z-mon.position.z);}
 if(e.code==='KeyN'){frozen=false;M.state='hunt';M.target.set(P.x+fx*60,0,P.z+fz*60);mon.position.set(P.x+fx*9-fz*3,0,P.z+fz*9+fx*3);}
 if(e.code==='KeyL')hemi.intensity=hemi.intensity>1?.27:2.6;
 if(e.code==='Home'){window.__slow=window.__slow===.12?1:.12;}
 if(e.code==='End'){e.preventDefault&&e.preventDefault();if(mode==='play')startPD();}
 if(e.code==='F8'){e.preventDefault&&e.preventDefault();jsCd=0;jumpFace('test');}
 if(e.code==='F9'){e.preventDefault&&e.preventDefault();ripDeath();}
 if(e.code==='F10'){e.preventDefault&&e.preventDefault();P.x=PLAT.x-4;P.z=RAILZ+7;P.yaw=0;P.pitch=0;TRN.stop=true;TRN.cd=0;frozen=true;mon.visible=false;}
 if(e.code==='F7'){e.preventDefault&&e.preventDefault();dug=true;graveHole.visible=true;trueEnding();}
 if(e.code==='KeyZ'){goLate();raiseGuards();zombies.forEach((z,i)=>{z.x=P.x+fx*4+(i-1)*1.2;z.z=P.z+fz*4;z.g.position.set(z.x,-1.9,z.z);});}
 if(e.code==='KeyH'){goLate();const h=hands[0];h.x=P.x+fx*1.6;h.z=P.z+fz*1.6;h.g.position.set(h.x,0,h.z);}
 if(e.code==='KeyG'){Object.assign(inv,{map:true,shovel:true,safeKey:true,gun:true,ammo:9,fuel:true,tkey:true,pages:6});keys=3;sel='gun';hud();}
 if(e.code==='KeyB'){P.x=CH.x-5.8;P.z=CH.z;P.yaw=-Math.PI/2;}if(e.code==='Equal'){FIRSTRUN=true;win('gate');}if(e.code==='F2'){e.preventDefault();inv.vkey=true;enterUG();}if(e.code==='F1'){e.preventDefault();window.__SHOW=null;M.calm=0;mon.position.set(P.x+Math.sin(P.yaw)*25,0,P.z+Math.cos(P.yaw)*25);M.state='wander';SNK.cd=0;startSneak();}if(e.code==='F3'){e.preventDefault();M.tall=3.4;M.rearT=3.4;}if(e.code==='F4'||e.code==='F6'){e.preventDefault();frozen=false;const fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw),rx=Math.cos(P.yaw),rz=-Math.sin(P.yaw);window.__SHOW={a:{x:P.x+fx*6-rx*7,z:P.z+fz*6-rz*7},b:{x:P.x+fx*6+rx*7,z:P.z+fz*6+rz*7},hunt:e.code==='F6',to:1};mon.position.set(window.__SHOW.a.x,0,window.__SHOW.a.z);M.calm=999;}if(e.code==='BracketLeft'){CREEP.cd=0;M.stun=0;mon.visible=true;mon.position.set(P.x+Math.sin(P.yaw)*14,0,P.z+Math.cos(P.yaw)*14);startCreep();}if(e.code==='BracketRight'){jsCd=0;jumpFace('test');}if(e.code==='KeyZ'){const L=[[LK.x-LK.r-5,LK.z,-Math.PI/2],[-90,10,Math.PI/2],[CORNA.x0+10,CORNA.z0+8,-2.4],[-86,-88,0],[MAUS.x-14,MAUS.z,-Math.PI/2],[TOWR.x,TOWR.z+5,0],[0,RAILZ+3,Math.PI/2]];window.__tz=((window.__tz||0)+1)%L.length;const q=L[window.__tz];P.x=q[0];P.z=q[1];P.yaw=q[2];P.pitch=0;}if(e.code==='KeyV')startDrive();if(e.code==='KeyU')faceFlash();if(e.code==='KeyY')behindYou();if(e.code==='KeyO'){P.x=SH.x+4;P.z=SH.z;P.yaw=Math.PI/2;}
 if(e.code==='BracketRight'){P.x=TRUCK.x-6;P.z=TRUCK.z+3;P.yaw=-1.1;}
 if(e.code==='KeyC'&&DBG){P.x=COT.x+5.2;P.z=COT.z;P.yaw=Math.PI/2;P.sneak=false;}
 if(e.code==='Digit7'){heardEver=true;M.center.set(P.x+3,0,P.z+3);M.heat=[{x:P.x,z:P.z,w:3}];afterSearch();}if(e.code==='Digit6'){heardEver=true;M.center.set(P.x+3,0,P.z+3);M.state='stalk';M.sk=0;M.trav=0;M.timer=1;M.target.copy(mon.position);}if(e.code==='KeyX'||e.code==='Period'){inv.pages=6;dug=true;graveHole.visible=true;graveDirt.visible=false;monDead=true;killWay='gun';mon.visible=false;M.state='dead';bossStart();if(e.code==='KeyX'){voss.position.set(GRAVE.x-9,0,GRAVE.z+.3);P.x=GRAVE.x+3.5;P.z=GRAVE.z+.3;P.yaw=Math.PI/2;P.pitch=-.05;VB.cd=3;}else{const fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw);voss.position.set(P.x+fx*2.6,0,P.z+fz*2.6);voss.rotation.y=Math.atan2(P.x-voss.position.x,P.z-voss.position.z);VB.cd=4;VB.stun=2.5;}}if(e.code==='Comma'){inv.cam=3;CAMT=0;snap();PH.cd=0;PH.ring=0;P.x=PH.x;P.z=PH.z+1.5;}if(e.code==='Slash'){answerPhone();}if(e.code==='Semicolon'){MOD.winter=!MOD.winter;MOD.blood=!MOD.blood;applyMods();WG.cd=0;WG.on=false;elapsed=Math.max(elapsed,300);}if(e.code==='Quote'&&WG.on){P.yaw=Math.atan2(-(girl.position.x-P.x),-(girl.position.z-P.z));P.pitch=0;}if(e.code==='BracketLeft'){D=DIFF[4];begin();}if(e.code==='Equal'&&TUT.on)tutNext();if(e.code==='Backslash'){if(CAT.on)exitCat();else{P.x=WELL.x+1.2;P.z=WELL.z;enterCat();}}if(e.code==='Semicolon'&&e.shiftKey){inv.secret=true;WG.on=true;WG.scr=false;WG.t=3;girl.visible=true;annieGive();setTimeout(annieBell,10);talkTom();talkTom();talkTom();talkTom();openPick();PICK.pos=PICK.zone;pickTry();PICK.pos=PICK.zone;pickTry();PICK.pos=PICK.zone;pickTry();}if(e.code==='Digit9')win('gate');if(e.code==='Digit0')win('tunnel');if(e.code==='Digit8'){inv.battery=true;nukeT=3;P.x=CRYPTS[0][0];P.z=CRYPTS[0][1];}if(e.code==='Minus')win('dawn');
 if(e.code==='KeyK')caught();if(e.code==='KeyJ'&&!monDead)kill('gun');});
document.querySelectorAll('.dif:not(.gfx)').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.dif:not(.gfx)').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');D=DIFF[+b.getAttribute('data-d')]||DIFF[1];}));
function respawn(){lantern.visible=true;if(UG.on){UG.on=false;UG.ride=null;CAT.on=false;catAmb(false);}const md=monDead,mp0=mon.position.clone(),mr0=mon.rotation.y;if(VB.on||VB.pend>0){VB.on=false;voss.visible=false;VB.pend=6;VB.hits=0;VB.st='walk';VB.stun=0;}wake=false;night++;initAudio();endDrive();Object.assign(P,{x:0,z:C-7,yaw:0,pitch:0,roll:0,sneak:false,stam:1,h:1.6,down:false,rise:0,hidden:null});$('bSneak').classList.remove('on');
 {let mx=0,mz=0,q=0;do{const a_=R()*6.28,d_=rr(50,80);mx=Math.max(-E+4,Math.min(E-4,P.x+Math.cos(a_)*d_));mz=Math.max(-E+4,Math.min(E-4,P.z+Math.sin(a_)*d_));}while((Math.hypot(mx-P.x,mz-P.z)<40||blocked(mx,mz,.6))&&q++<80);mon.position.set(mx,0,mz);}rig.rotation.set(0,0,0);rig.position.set(0,0,0);arms.concat(legs).forEach(a=>{a.rotation.set(0,0,0);a.userData.e.rotation.set(0,0,0);});Object.assign(M,{state:'wander',timer:8,voice:3,stun:0,pause:0,detour:0});M.target.set(0,0,-20);M.last.copy(mon.position);
 zombies.forEach(z=>{if(z.state==='chase'||z.state==='stun')z.state='idle';});hands.forEach(h=>h.cd=0);ghost.visible=false;behind=0;
 camera.fov=75;camera.updateProjectionMatrix();$('tear').style.display='none';$('tear').classList.remove('go');$('blood').innerHTML='';$('danger').style.opacity=0;$('dead').style.display='none';$('down').style.display='none';
 splatDone=false;scareT=0;noiseLvl=0;actProg=0;M.path=null;nukeT=0;wispUsed=false;mode='play';if(md){mon.position.copy(mp0);mon.rotation.y=mr0;M.state='dead';}layCorpse();lockPointer();hud();save();applyNight(true);}
function begin(){EZ1=FIRSTRUN;stat('games',1);setTimeout(()=>document.body.classList.toggle('nohud',!!MOD.hardcore),0);try{localStorage.removeItem('crawler_save');}catch(e){}initAudio();resetGame();if(EZ1)easyFirst();['start','dead','win','pause','inv'].forEach(i=>$(i).style.display='none');mode='play';lockPointer();
 {const it=$('intro');if(!INTRO0)INTRO0=it.innerHTML;it.innerHTML=INTRO0;it.style.display='flex';it.classList.remove('run');void it.offsetWidth;it.classList.add('run');setTimeout(()=>{it.style.display='none';},6400);}
 setTimeout(()=>{if(mode==='play')msg('Nothing glows. Search with your lantern, press E to pick things up, TAB for your bag and the controls.',7);},6000);}
{const pk=$('padk');['1','2','3','4','5','6','7','8','9','C','0','OK'].forEach(k=>{const b=document.createElement('button');b.textContent=k;b.addEventListener('click',()=>padKey(k));pk.appendChild(b);});}
try{['Easy','Normal','Nightmare'].forEach(n=>{const b=+localStorage.getItem('crawler_best_'+n);if(b&&b<60)localStorage.removeItem('crawler_best_'+n);});}catch(e){}
{const rb=$('resetrec');rb.addEventListener('click',()=>{try{['Easy','Normal','Nightmare'].forEach(n=>localStorage.removeItem('crawler_best_'+n));localStorage.removeItem('crawler_end');localStorage.removeItem('crawler_ach');}catch(e){}seen={};ach={};rb.textContent='RECORDS CLEARED';renderInv();});}
{const ce=$('captc');ce.checked=CAPT;ce.addEventListener('change',()=>{CAPT=ce.checked;try{localStorage.setItem('crawler_capt',CAPT?'1':'0');}catch(e){}});}
{const se=$('sens'),ve=$('vol');se.value=SENS;ve.value=VOL;se.addEventListener('input',()=>{SENS=+se.value||1;try{localStorage.setItem('crawler_sens',SENS);}catch(e){}});ve.addEventListener('input',()=>{VOL=+ve.value;if(master)master.gain.value=VOL;try{localStorage.setItem('crawler_vol',VOL);}catch(e){}});
 $('restart').addEventListener('click',()=>{$('inv').style.display='none';begin();});}
document.querySelectorAll('.mod').forEach(b=>b.addEventListener('click',()=>{const k=b.getAttribute('data-m');MOD[k]=!MOD[k];b.classList.toggle('on',MOD[k]);try{applyMods();}catch(e){}}));
{const sr=$('scarer'),sv=$('scarev'),lab=v=>v<.6?'rare':v<.9?'fewer':v<1.2?'normal':v<1.6?'more':'constant';if(sr){sr.value=SCARE;sv.textContent=lab(SCARE);sr.addEventListener('input',()=>{SCARE=+sr.value;sv.textContent=lab(SCARE);try{localStorage.setItem('crawler_scare',SCARE);}catch(e){}});}
 (function(){const ws=(id,f)=>{const el=$(id);if(el)f(el);};
 ws('o_timer',el=>{el.checked=OPT.timer;el.onchange=()=>{OPT.timer=el.checked;saveOpt();};});
 ws('o_invy',el=>{el.checked=OPT.invY;el.onchange=()=>{OPT.invY=el.checked;saveOpt();};});
 ws('o_bob',el=>{el.checked=OPT.bob;el.onchange=()=>{OPT.bob=el.checked;saveOpt();};});
 ws('o_cross',el=>{el.checked=OPT.cross;document.body.classList.toggle('nocross',!OPT.cross);el.onchange=()=>{OPT.cross=el.checked;document.body.classList.toggle('nocross',!OPT.cross);saveOpt();};});
 ws('o_assist',el=>{el.checked=OPT.assist;el.onchange=()=>{OPT.assist=el.checked;saveOpt();};});
 ws('o_fov',el=>{el.value=OPT.fov;const lb=$('o_fovv');if(lb)lb.textContent=OPT.fov;el.oninput=()=>{OPT.fov=+el.value;if(lb)lb.textContent=OPT.fov;saveOpt();};});})();
 const bt=$('bigt');let big=false;try{big=localStorage.getItem('crawler_big')==='1';}catch(e){}if(bt){bt.checked=big;document.body.classList.toggle('bigt',big);bt.addEventListener('change',()=>{document.body.classList.toggle('bigt',bt.checked);try{localStorage.setItem('crawler_big',bt.checked?'1':'0');}catch(e){}});}
 const lc=$('lampc');if(lc){fillLampSel();lc.addEventListener('change',()=>{lampSel=lc.value;try{localStorage.setItem('crawler_lamp',lampSel);}catch(e){}applyLamp();});}applyLamp();
 const cb2=$('credb'),cr=$('cred');if(cb2&&cr)cb2.addEventListener('click',()=>{cr.style.display='block';const r=cr.querySelector('.roll');r.style.animation='none';void r.offsetWidth;r.style.animation='';
  setTimeout(()=>{if(cr.style.display!=='block')return;r.innerHTML+='';const p=document.createElement('p');p.style.cssText='position:absolute;left:0;right:0;top:45%;color:#888;font-style:italic';p.textContent='…somewhere under the chapel, something small starts to click.';cr.appendChild(p);try{initAudio();for(let i=0;i<8;i++)nz({f:rr(1800,2600),q:6,g:.2,dur:.04,at:1+i*rr(.25,.45)});}catch(e){}setTimeout(()=>{p.remove();cr.style.display='none';},6000);},26500);
  cr.onclick=()=>{cr.style.display='none';};});}
$('go').addEventListener('click',begin);$('go').classList.remove('loading');{const cb=$('cont');let has=false;try{has=!!localStorage.getItem('crawler_save');}catch(e){}cb.style.display=has?'inline-block':'none';cb.addEventListener('click',cont);}$('retry').addEventListener('click',()=>{if(wake)respawn();else begin();});$('again').addEventListener('click',begin);$('invclose').addEventListener('click',toggleInv);
$('resume').addEventListener('click',()=>{$('pause').style.display='none';mode='play';initAudio();lockPointer();});

/* ---------- update ---------- */
function updPlayer(dt){
 const fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw),rx=Math.cos(P.yaw),rz=-Math.sin(P.yaw);
 if(K.ArrowLeft)P.yaw+=dt*2;if(K.ArrowRight)P.yaw-=dt*2;
 if(!isTouch&&document.pointerLockElement!==canvas){const ex=(mx-.5)*2,ey=(my-.5)*2,ax=Math.min(1,Math.abs(ex)),ay=Math.min(1,Math.abs(ey)),dx0=.55,dy0=.6;if(ax>dx0)P.yaw-=Math.sign(ex)*Math.pow((ax-dx0)/(1-dx0),1.5)*3.2*SENS*dt;if(ay>dy0)P.pitch=Math.max(-1.45,Math.min(1.45,P.pitch-Math.sign(ey)*Math.pow((ay-dy0)/(1-dy0),1.5)*1.7*SENS*dt));
  const sr=$('stick');if(sr){sr.style.display='block';sr.style.left=(mx*100)+'%';sr.style.top=(my*100)+'%';sr.style.opacity=(ax>dx0||ay>dy0)?.55:.18;}}else{const sr=$('stick');if(sr)sr.style.display='none';}
 shotCd-=dt;muzzleT-=dt;kick=Math.max(0,kick-dt*3.2);
 const wantRaise=!!K.KeyF&&!P.down;raise+=((wantRaise?1:0)-raise)*Math.min(1,dt*6);
 {// ---- first-person hands: inertia, bob, pendulum lantern, recoil + pump, equip, throw ----
  let dy=P.yaw-(FP.ly===undefined?P.yaw:FP.ly);dy=Math.atan2(Math.sin(dy),Math.cos(dy));const dp=P.pitch-(FP.lp===undefined?P.pitch:FP.lp);FP.ly=P.yaw;FP.lp=P.pitch;
  const vx=(P.x-(FP.lx===undefined?P.x:FP.lx))/Math.max(dt,1e-3),vz=(P.z-(FP.lz===undefined?P.z:FP.lz))/Math.max(dt,1e-3);FP.lx=P.x;FP.lz=P.z;
  const spd=Math.min(6,Math.hypot(vx,vz));FP.spd+=(spd-FP.spd)*Math.min(1,dt*8);if(mode==='play'&&spd<8)STATS.dist=(STATS.dist||0)+spd*dt;const fwd=(vx*-Math.sin(P.yaw)+vz*-Math.cos(P.yaw));const acc=(fwd-FP.lf)/Math.max(dt,1e-3);FP.lf=fwd;
  const yr=Math.max(-8,Math.min(8,dy/Math.max(dt,1e-3))),pr=Math.max(-8,Math.min(8,dp/Math.max(dt,1e-3)));
  FP.ox+=(-yr*.012-FP.ox)*Math.min(1,dt*10);FP.oy+=(-pr*.01-FP.oy)*Math.min(1,dt*10);
  // pendulum swing of the lantern (sideways from turning/strafing, forward/back from speeding up)
  FP.tv+=(-FP.th*46-FP.tv*3.2+yr*2.2)*dt;FP.th+=FP.tv*dt;FP.th=Math.max(-.6,Math.min(.6,FP.th));
  FP.fv+=(-FP.fh*40-FP.fv*3+Math.max(-30,Math.min(30,acc))*.06)*dt;FP.fh+=FP.fv*dt;FP.fh=Math.max(-.5,Math.min(.5,FP.fh));
  const bk=(OPT.bob?1:.15)*Math.min(1,FP.spd/3.4),run=FP.spd>4.5,bob=P.bob||0,bx=Math.sin(bob*.5)*.014*bk*(run?1.8:1),by=-Math.abs(Math.cos(bob*.5))*.012*bk*(run?2:1);
  FP.thr=Math.max(0,FP.thr-dt);const tq=FP.thr>0?Math.sin((1-FP.thr/.45)*Math.PI):0;
  const lx=.17-raise*.13+FP.ox+bx+tq*.05,ly=-.15+raise*.14+FP.oy+by-tq*.07-(P.hb?.03:0)+(P.down?-.12:0);
  lantern.position.set(lx,ly,-.31+tq*.04);lantern.rotation.set(FP.fh*.9-tq*.4,0,FP.th+bx*3);
  // shotgun: kick back + muzzle climb, then rack the pump
  if(gunFP.visible&&!FP.gw)FP.gup=0;FP.gw=gunFP.visible;FP.gup=Math.min(1,FP.gup+dt*3.2);const gu=1-FP.gup,ge=gu*gu;
  let pump=0;if(shotCd<1.02&&shotCd>.5){const t=(1.02-shotCd)/.52;pump=Math.sin(t*Math.PI);if(!FP.pumped&&t>.2){FP.pumped=1;try{sfx.clack();}catch(e){}}}
  gunFP.position.set(-.13+FP.ox*.8+bx*.8,-.15+FP.oy*.8+by-ge*.3-pump*.015,-.275+kick*.09+pump*.05);gunFP.rotation.set(kick*.38-ge*.9+pump*.1,.06+FP.th*.15,pump*.22+bx*2);}
 lamp.distance=24+raise*18;
 inv.oil=Math.max(0,inv.oil-dt/(D.practice?9e9:520)*(1+raise*.8)*nOil());const of=inv.oil>0?Math.min(1,.4+inv.oil*1.4):.13;lamp.distance=(24+raise*18)*(inv.oil>0?1:.4);if(inv.oil<.15&&inv.oil>0&&!TH.oil){TH.oil=1;msg('The lantern is running dry. Find oil.',4);}if(inv.oil<=0&&!TH.oil0){TH.oil0=1;msg('The lantern is out of oil. Only a stub of wick is left burning.',4);}$('oil').style.width=(inv.oil*100)+'%';
 lamp.intensity=muzzleT>0?6:(2+raise*1+Math.sin(elapsed*13)*.08+R()*.1)*of*(MOD.dark?.07:1);if(MOD.dark)lamp.distance=Math.min(lamp.distance,7);
 {lantern.getWorldPosition(hp);for(let i=0;i<moths.length;i++){const a=elapsed*(2.2+i*.7)+i*2.1,m=moths[i];m.visible=inv.oil>0&&!P.hidden;m.position.set(hp.x+Math.cos(a)*(.45+i*.08),hp.y+.15+Math.sin(a*1.7)*.15,hp.z+Math.sin(a*1.3)*(.45+i*.07));}}if(lampOut>0){lampOut-=dt;lamp.intensity=lampOut>.4?.04:R()*1.5;}
 P.roll+=((P.down?.6:0)-P.roll)*Math.min(1,dt*7);
 if(P.down){P.gt+=dt;P.h+=(.38-P.h)*Math.min(1,dt*9);camera.position.set(P.x,P.h,P.z);camera.rotation.set(P.pitch*.4+.2,P.yaw,P.roll);
  $('down').textContent=(VB.on&&!P.isZ&&P.src&&P.src.vb?'VOSS KNOCKED YOU DOWN — GET UP! MASH ':'SOMETHING HAS YOUR FOOT — MASH ')+''+(isTouch?'USE':'SPACE')+'  ('+P.need+')';
  pulse(P,dt,1.25,()=>{sfx.groan(.7);noiseLvl=1;hear(P,34);});return [fx,fz];}
 if(P.hidden){const h=P.hidden,pdm=monDead?99:Math.hypot(mon.position.x-h.hx,mon.position.z-h.hz);camera.position.set(h.hx,.5,h.hz);camera.rotation.set(P.pitch*.5,P.yaw,0);lamp.intensity=.1;lantern.visible=false;
  if(h.used>1&&!h.told&&!monDead&&M.state==='search'&&pdm<9){h.told=1;hear(P,999);msg('It remembers this hiding place. GET OUT.',3);}
  {const f=$('face');if(pdm<3.3&&!monDead){f.className='fx slit';f.style.display='block';f.style.opacity=Math.min(.95,(3.3-pdm)*.9);f.style.backgroundPosition=(50+Math.sin(elapsed*.8)*9)+'% 28%';}else if(f.className.indexOf('slit')>=0){f.style.display='none';f.className='fx';}}
  if(K.Space||tUse||gpHold||tBreath){P.breath=Math.max(0,P.breath-dt/7);if(P.breath<=0){P.breath=.3;K.Space=false;tUse=false;sfx.behind();hear(P,9);noiseLvl=.5;msg('You gasp for air.',1.5);}}
  else{P.breath=Math.min(1,P.breath+dt/3);if(pdm<3.6)pulse(h,dt,1.1,()=>{sfx.behind();hear(P,4);noiseLvl=.3;});}
  if(pdm<5&&!monDead&&M.state==='search'){h._s=(h._s||0)+dt;if(h._s>1.3){h._s=0;sfx.scratch();caption('scratching, very close');}}
  bfog.visible=!(K.Space||tUse||gpHold);bfog.material.opacity=Math.max(0,Math.sin(elapsed*1.6))*.32;
  $('down').style.display='block';$('down').textContent=pdm<7?'IT IS RIGHT THERE — HOLD '+(isTouch?'USE':'SPACE')+' TO HOLD YOUR BREATH':'HIDING — press E to climb out';$('stam').style.width=(P.breath*100)+'%';$('prompt').style.display='none';
  if(K.KeyE||eTap){K.KeyE=false;eTap=false;bfog.visible=false;{const f=$('face');f.style.display='none';f.className='fx';}P.hidden=null;P.x=h.ex;P.z=h.ez;P.sneak=true;$('bSneak').classList.add('on');lantern.visible=true;$('down').style.display='none';}
  return [fx,fz];}
 if(P.rise>0)P.rise-=dt;
 let f=0,s=0;if(K.KeyW||K.ArrowUp)f+=1;if(K.KeyS||K.KeyX||K.ArrowDown)f-=1;if(K.KeyD)s+=1;if(K.KeyA)s-=1;
 if(joy.id!==null){f=-joy.dy;s=joy.dx;}
 {let gp=null;try{gp=navigator.getGamepads?navigator.getGamepads()[0]:null;}catch(e){}gpUse=gpRun=gpHold=false;if(gp&&gp.axes&&gp.buttons){const dzn=v=>Math.abs(v||0)>.18?v:0,bt=i=>!!(gp.buttons[i]&&gp.buttons[i].pressed),edge=i=>{const p=bt(i),o=gpPrev[i];gpPrev[i]=p;return p&&!o;};
  f-=dzn(gp.axes[1]);s+=dzn(gp.axes[0]);P.yaw-=dzn(gp.axes[2])*2.8*dt;P.pitch=Math.max(-1.45,Math.min(1.45,P.pitch-dzn(gp.axes[3])*1.9*dt));
  gpUse=bt(0);gpRun=bt(1)||bt(10);gpHold=bt(4);if(edge(2))toggleSneak();if(edge(7))useHand();if(edge(3))toggleInv();if(edge(4))struggle();if(edge(5)){if(inv.gun){sel=sel==='gun'?'stone':'gun';hud();}}if(edge(12))dropBox();if(edge(13))dropTrap();if(edge(14))askDead();}}
 let mag=Math.hypot(f,s);if(mag>1){f/=mag;s/=mag;mag=1;}
 {if(P.breath===undefined)P.breath=1;P.gasp=Math.max(0,(P.gasp||0)-dt);const want=(K.Space||gpHold||tBreath)&&!P.down&&P.rise<=0&&actProg<=0;
  if(want&&P.gasp<=0&&P.breath>.02){P.hb=true;P.breath=Math.max(0,P.breath-dt/7);f*=.3;s*=.3;mag*=.3;
   if(P.breath<=0){P.hb=false;P.gasp=1.5;sfx.behind();noiseLvl=.7;hear(P,13);msg('You gasp for air.',1.5);caption('you gasp');}}
  else{P.hb=false;P.breath=Math.min(1,P.breath+dt/3.2);}
  const dn=$('down');if(P.hb){dn.style.display='block';dn.textContent='HOLDING YOUR BREATH  '+'▮'.repeat(Math.ceil(P.breath*10))+'▯'.repeat(10-Math.ceil(P.breath*10));P.hbS=1;}else if(P.hbS){P.hbS=0;dn.style.display='none';}
  // it can hear you breathing when it is right on top of you
  if(!monDead&&!P.hb&&M.state!=='hunt'){const pm=Math.hypot(mon.position.x-P.x,mon.position.z-P.z);if(pm<3.4){pulse(BRP,dt,1.6,()=>{sfx.behind();caption('your breathing');hear(P,4.5);});
   if(!TH.br){TH.br=1;msg('It is right next to you. HOLD '+(isTouch?'USE':'SPACE')+' to hold your breath — and do not move.',5);}}else BRP._p=0;}else BRP._p=0;}
 if(actProg>0){f=0;s=0;mag=0;}
 const wantRun=(K.ShiftLeft||K.ShiftRight||tRun||gpRun)&&mag>.1&&!P.sneak&&raise<.3&&P.rise<=0,run=wantRun&&P.stam>.02;
 if(run)P.stam=Math.max(0,P.stam-dt/5);else P.stam=Math.min(1,P.stam+dt/(mag>.1?15:9));
 if(P.limp>0)P.limp-=dt;const sp=(P.sneak?1.7:run?5.6:3.4)*(P.rise>0?.4:1)*(P.limp>0?.78:1),ox=P.x,oz=P.z;
 {const tvx=(fx*f+rx*s)*sp,tvz=(fz*f+rz*s)*sp,ka=Math.min(1,dt*(mag>.05?(run?6:9):11));P.vx=(P.vx||0)+(tvx-(P.vx||0))*ka;P.vz=(P.vz||0)+(tvz-(P.vz||0))*ka;P.x+=P.vx*dt;P.z+=P.vz*dt;P.strafe=(P.strafe||0)+(s*(run?1:.55)-(P.strafe||0))*Math.min(1,dt*6);P.runK=(P.runK||0)+((run&&mag>.1?1:0)-(P.runK||0))*Math.min(1,dt*4);}resolve(P,.38);
 const lim=H-.6;if(!CAT.on){P.x=Math.max(-lim,Math.min(lim,P.x));if(P.z>lim)P.z=lim;}
 if(!CAT.on&&P.z<-lim&&!(gate>.85&&Math.abs(P.x)<1.5))P.z=-lim;
 if(P.z<-H-1.8){win('gate');return null;}
 const moved=Math.hypot(P.x-ox,P.z-oz);P.crumb=(P.crumb||0)+moved;if(P.crumb>1.2){P.crumb=0;crumbs.push({x:P.x,z:P.z,t:elapsed});if(crumbs.length>40)crumbs.shift();}P.stepAcc+=moved;P.bob+=moved*(P.sneak?3.6:3);
 if(P.stepAcc>(P.sneak?1.3:run?2.2:1.8)){P.stepAcc=0;let leaf=false,wetS=false;for(const l of leaves)if(Math.hypot(P.x-l.x,P.z-l.z)<1.35){leaf=true;break;}for(const p of puddles)if(Math.hypot(P.x-p.x,P.z-p.z)<p.r){wetS=true;break;}
  if(P.mud>0||MOD.winter){if(P.mud>0)P.mud--;addPrint();}
  if(wetS){P.mud=10;sfx.step(.5,false,true);makeNoise(P.sneak?14:run?34:24);}
  else if(leaf){sfx.step(.5,true);makeNoise(P.sneak?12:run?34:22);}
  else if(P.sneak){sfx.step(.03,false);noiseLvl=Math.max(noiseLvl,.04);}
  else{sfx.step(run?.4:.2,false);makeNoise(inv.boots?(run?23:9):(run?30:15));}}
 P.h+=((P.sneak?.95:1.6)-P.h)*Math.min(1,dt*8);{const wf=OPT.fov+(P.runK||0)*7;if(mode==='play'&&Math.abs(camera.fov-wf)>.05){camera.fov+=(wf-camera.fov)*Math.min(1,dt*6);camera.updateProjectionMatrix();}}
 camera.position.set(P.x,P.h+Math.sin(P.bob)*(P.sneak?.02:.045),P.z);camera.rotation.set(P.pitch+(FP.thr>0?Math.sin((1-FP.thr/.45)*Math.PI)*.03:0),P.yaw,P.roll+Math.sin(P.bob*.5)*(FP.spd>4.5?.02:.008)-FP.ox*.25-(P.strafe||0)*.022+(P.limp>0?Math.max(0,Math.sin(P.bob*.5))*.035*Math.min(1,FP.spd/2):0));if(shakeT>0){shakeT-=dt;camera.rotation.z+=rr(-1,1)*.05*shakeT;camera.rotation.x+=rr(-1,1)*.03*shakeT;}
 for(const st of stonePicks)if(st.visible&&Math.hypot(P.x-st.position.x,P.z-st.position.z)<1.5){st.visible=false;stones++;hud();msg('Picked up a stone',1.5);}
 if(!late&&(keys+gens>=1||inv.pages>=2||elapsed>150))goLate();
 // crows
 for(const c of crows){if(!c.gone&&Math.hypot(P.x-c.x,P.z-c.z)<(P.sneak?2:4.6)){c.gone=true;c.fly=.01;sfx.caw();noiseLvl=.9;hear(c,29);msg('A crow screams and takes off.',2);}
  if(c.fly>0){c.g.userData.w.forEach(q=>{q.visible=true;});c.fly+=dt;c.g.position.y+=dt*3.2;c.g.position.x+=dt*4*Math.sin(c.h*9);c.g.position.z+=dt*4*Math.cos(c.h*9);const w=Math.sin(c.fly*26)*.9;c.g.userData.w[0].rotation.z=w;c.g.userData.w[1].rotation.z=-w;if(c.fly>4){c.fly=0;c.g.visible=false;}}}
 for(const w of wires){w.cd-=dt;if(w.cd>0)continue;const vx=w.bx-w.ax,vz=w.bz-w.az,t=Math.max(0,Math.min(1,((P.x-w.ax)*vx+(P.z-w.az)*vz)/(vx*vx+vz*vz)));
  if(Math.hypot(P.x-(w.ax+vx*t),P.z-(w.az+vz*t))<.4){w.cd=3;sfx.cans();noiseLvl=.9;hear(P,28);msg('Tin cans — a tripwire!',2);}}
 // hands in the dirt
 for(const h of hands){if(!h.on)continue;h.cd-=dt;const want=h.cd>0?-.9:0;h.g.position.y+=(want-h.g.position.y)*Math.min(1,dt*2);h.g.rotation.z=Math.sin(elapsed*1.7+h.x)*.25;h.g.rotation.x=Math.sin(elapsed*1.3+h.z)*.2;
  if(h.cd<=0&&h.g.position.y>-.15&&Math.hypot(P.x-h.x,P.z-h.z)<.8&&!inSalt(h.x,h.z))grab(h,false);}
 // interactions
 let best=null,bd=1e9,bl='';const scan=a=>{const d=Math.hypot(P.x-a.x,P.z-a.z);if(d<a.r&&d<bd){const l=a.label();if(l){best=a;bd=d;bl=l;}}};for(const a of picks)scan(a);if(!best)for(const a of acts)scan(a);
 const pe=$('prompt');
 if(best&&!P.down){const can=best.can();pe.style.display='block';$('ptxt').textContent=(can?(isTouch?'[USE] ':'[E] ')+(best.hold?'Hold — ':''):'')+bl;
  if(can&&(K.KeyE||tUse||eTap||gpUse)){if(best!==actCur){actCur=best;actProg=0;}if(best.hold){actProg+=dt/best.hold;if(best.tick)best.tick(dt);}else actProg=1;
   if(actProg>=1){actProg=0;actCur=null;K.KeyE=false;tUse=false;eTap=false;best.done();if(mode!=='play')return null;}}
  else{actProg=0;actCur=null;}
  $('pbar').style.width=(actProg*100)+'%';}
 else{pe.style.display='none';actProg=0;actCur=null;}
 eTap=false;
 gateHint-=dt;breakerCd-=dt;bellCd-=dt;if(bellCd>12)bellMesh.rotation.z=Math.sin(elapsed*9)*.4*(bellCd-12)/2;
 if(!gateOpening&&Math.hypot(P.x,P.z+H)<3){if(gens>=3){gateOpening=true;sfx.creak();msg('The gate motor screams. IT HEARD THAT. GO!',4);noiseLvl=1;hear(P,999);}
  else if(gateHint<=0){msg('The electric gate is dead. Start all 3 generators ('+gens+'/3).',3);gateHint=5;}}
 if(gateOpening&&gate<1){gate=Math.min(1,gate+dt/4.5);gateL.rotation.y=gate*1.45;gateR.rotation.y=-gate*1.45;if(gate<1&&R()<dt*2)hear(P,999);}
 for(const g of GEN)if(g.on){g.t+=dt;if(g.t>2.2){g.t=0;softHear(g,28);const d=Math.hypot(P.x-g.x,P.z-g.z);if(d<22)sfx.hum(.16*(1-d/22));}}
 if(gens>=3)spark.material.opacity=R()<.3?1:.15;
 if(proj.on){if(!proj.roll)proj.v.y-=20*dt;proj.mesh.position.addScaledVector(proj.v,dt);const pp=proj.mesh.position;proj.mesh.rotation.x+=dt*(proj.roll?Math.hypot(proj.v.x,proj.v.z)*7:9);if(pp.y<2.2&&(proj.v.x||proj.v.z)&&blocked(pp.x,pp.z,0)){pp.x-=proj.v.x*dt;pp.z-=proj.v.z*dt;const bx0=blocked(pp.x+proj.v.x*dt,pp.z,0),bz0=blocked(pp.x,pp.z+proj.v.z*dt,0);if(bx0)proj.v.x*=-.4;if(bz0)proj.v.z*=-.4;if(!bx0&&!bz0){proj.v.x*=-.4;proj.v.z*=-.4;}if(Math.hypot(proj.v.x,proj.v.z)>1.2)sfx.clack();}if(!proj.roll&&pp.y<=.09&&proj.v.y<0){pp.y=.09;if(!proj.b){let inW=false;for(const p of puddles)if(Math.hypot(pp.x-p.x,pp.z-p.z)<p.r)inW=true;if(inW)sfx.step(.5,false,true);else sfx.clack();
   stoneN++;if(stoneN>3&&!monDead&&R()<.45){hear(P,999);msg('It has learned that trick. It is coming for whoever threw it.',4);}else if(hear(pp,inW?40:34))msg(inW?'Splash. It heard that.':'It heard the stone…',2);else if(!monDead&&Math.hypot(pp.x-P.x,pp.z-P.z)>3)msg('Too far away for it to hear',1.5);}proj.b=(proj.b||0)+1;if(Math.abs(proj.v.y)>2.4&&proj.b<4){proj.v.y=-proj.v.y*.3;proj.v.x*=.6;proj.v.z*=.6;if(proj.b>1)try{sfx.step(.22);}catch(e){}}else{proj.v.y=0;proj.roll=true;}}if(proj.roll){pp.y=.09;proj.v.y=0;const f=Math.max(0,1-dt*3.2);proj.v.x*=f;proj.v.z*=f;if(Math.hypot(proj.v.x,proj.v.z)<.2){proj.on=false;proj.b=0;proj.roll=false;}}}
 return [fx,fz];
}
function updZombies(dt){for(const z of zombies){if(z.state==='off')continue;const g=z.g,u=g.userData;z.t+=dt;
 if(z.state==='rise'){const t=z.t;g.position.y=Math.min(0,-1.9+t*.55+Math.max(0,Math.sin(t*2.6))*.06);const c=Math.sin(t*2.6);u.la.rotation.x=-2.6+Math.max(0,c)*1.6+Math.sin(t*17)*.08;u.ra.rotation.x=-2.6+Math.max(0,-c)*1.6+Math.cos(t*17)*.08;g.rotation.x=.35*Math.min(1,-g.position.y);g.rotation.z=c*.12;u.hd.rotation.x=.5-Math.min(.4,t*.12);u.hd.rotation.z=Math.sin(t*1.3)*.4;if(g.position.y>=0){z.state='idle';z.t=0;g.rotation.set(0,g.rotation.y,0);}continue;}
 if(z.state==='dead'){g.rotation.x+=(-1.5-g.rotation.x)*Math.min(1,dt*5);g.position.y+=(.15-g.position.y)*Math.min(1,dt*5);continue;}
 const d=Math.hypot(P.x-z.x,P.z-z.z)||1,zr=route(z,P),dx=(zr.x-z.x)/(Math.hypot(zr.x-z.x,zr.z-z.z)||1)*d,dz=(zr.z-z.z)/(Math.hypot(zr.x-z.x,zr.z-z.z)||1)*d;z.cd-=dt;
 if(z.state==='stun'){g.rotation.x=-.35+Math.sin(elapsed*7)*.1;g.rotation.z=Math.sin(elapsed*3.3)*.15;u.la.rotation.x=2.4;u.ra.rotation.x=2.3;u.hd.rotation.x=.6;if(z.t<=0||(z.t-=2*dt)<=0){z.state='chase';g.rotation.x=0;}continue;}
 if(z.state==='idle'&&d<17){z.state='chase';sfx.groan(.5);}
 if(z.state==='chase'){if(d>30)z.state='idle';const sp=1.6*D.s;z.x+=dx/d*sp*dt;z.z+=dz/d*sp*dt;resolve(z,.4);{const q=inSalt(z.x,z.z,.3);if(q){const qx=z.x-q.x,qz=z.z-q.z,qd=Math.hypot(qx,qz)||1;z.x=q.x+qx/qd*2.75;z.z=q.z+qz/qd*2.75;}}z.ph+=dt*4.4;
  for(const o of zombies)if(o!==z&&o.state!=='off'&&o.state!=='dead'){const ox=z.x-o.x,oz=z.z-o.z,od=Math.hypot(ox,oz);if(od<.8&&od>.01){z.x+=ox/od*dt;z.z+=oz/od*dt;}}
  if(R()<dt*.25)sfx.groan(.35,pan());if(d<.95&&z.cd<=0){z.cd=3;grab(z,true);}}
 else z.ph+=dt*1.2;
 g.position.set(z.x,Math.abs(Math.sin(z.ph))*.03,z.z);let df=Math.atan2(dx,dz)-g.rotation.y;df=Math.atan2(Math.sin(df),Math.cos(df));g.rotation.y+=df*Math.min(1,dt*3);
 {if(z.sd===undefined){z.sd=R();z.side=R()<.5?1:-1;z.snap=rr(2,6);z.reach=0;}
  const ph=z.ph,s=Math.sin(ph),k=z.state==='chase'?1:.3,good=Math.max(0,s),bad=Math.max(0,-s);
  // a limp: one leg swings, the other is dragged; the body drops onto the bad leg each step
  const gl=z.side>0?u.ll:u.rl,bl=z.side>0?u.rl:u.ll;gl.rotation.x=s*.6*k;bl.rotation.x=-s*.18*k-.12*k;bl.rotation.z=z.side*.12*k;
  g.position.y=-bad*.07*k+good*.02*k;g.rotation.z=z.side*(bad*.16-good*.04)*k+Math.sin(elapsed*.6+z.sd*9)*.03;g.rotation.x=(.1+good*.08)*k;
  // arms: dangling and swinging dead — until it gets close, then it reaches for you
  z.reach+=(((z.state==='chase'&&d<5)?1:0)-z.reach)*Math.min(1,dt*3);const tr=Math.sin(elapsed*23+z.sd*7)*.05*z.reach;
  const dla=-.15+Math.sin(ph*.5+z.sd)*.22*k,dra=-.35+Math.sin(ph*.5+2+z.sd)*.25*k;
  u.la.rotation.x=dla+(1.35-dla)*z.reach+tr;u.ra.rotation.x=dra+(1.25-dra)*z.reach-tr;u.la.rotation.z=.08*(1-z.reach);u.ra.rotation.z=-.08*(1-z.reach);
  if(blocked(z.x+Math.sin(g.rotation.y)*.75,z.z+Math.cos(g.rotation.y)*.75,.05)){u.la.rotation.x=1.3+Math.sin(elapsed*9)*.25;u.ra.rotation.x=1.25+Math.cos(elapsed*9)*.25;}
  // head lolls on a broken neck, and now and then snaps upright
  z.snap-=dt;if(z.snap<=0){z.snap=rr(2.5,7);z.sn=.35;}z.sn=Math.max(0,(z.sn||0)-dt);const sq=z.sn>0?Math.sin(z.sn/.35*Math.PI):0;
  u.hd.rotation.z=(.42+Math.sin(ph*.5)*.18)*z.side*(1-sq)+Math.sin(elapsed*31)*.03*sq;u.hd.rotation.x=(.28+Math.sin(ph*.8)*.12)*(1-sq)-.15*sq*(1-z.reach)-.25*z.reach;u.hd.rotation.y=Math.sin(elapsed*.4+z.sd*5)*.25*(1-z.reach);}}}

// ===== planted-feet crawl: every hand and foot is placed on the ground, the joints bend to reach it =====
const IKT={r:new T.Vector3(),hn:new T.Vector3(),pp:new T.Vector3(),el:new T.Vector3(),fd:new T.Vector3(),m:new T.Matrix4(),inv:new T.Matrix4(),t:new T.Vector3(),pole:new T.Vector3(),q:new T.Quaternion(),sh:new T.Vector3()};
function ikLimb(G,tgt,pole){const k=G.userData.ik;if(!k)return;const L1=k.L1,L2=k.L2,r=IKT.r.copy(tgt).sub(G.position);let d=r.length()||1e-4;const mx=L1+L2-.004,mn=Math.abs(L1-L2)+.02;if(d>mx){r.multiplyScalar(mx/d);d=mx;}else if(d<mn){r.multiplyScalar(mn/d);d=mn;}
 const hn=IKT.hn.copy(r).divideScalar(d),a=(L1*L1-L2*L2+d*d)/(2*d),h=Math.sqrt(Math.max(0,L1*L1-a*a));
 const pp=IKT.pp.copy(pole).addScaledVector(hn,-pole.dot(hn));if(pp.lengthSq()<1e-6)pp.set(0,1,0);pp.normalize();
 const el=IKT.el.copy(hn).multiplyScalar(a).addScaledVector(pp,h);
 G.quaternion.setFromUnitVectors(k.u0,IKT.t.copy(el).normalize());
 const fd=IKT.fd.copy(r).sub(el).normalize().applyQuaternion(IKT.q.copy(G.quaternion).invert());G.userData.e.quaternion.setFromUnitVectors(k.f0,fd);
 if(G.userData.f)G.userData.f.rotation.set(0,0,0);}
const GAIT_W=[.25,.75,0,.5],GAIT_G=[0,.1,.5,.6];// order: arm L, arm R, leg L, leg R
function ikPose(gb,mv,ph,armHang){rig.updateMatrix();const core=arms[0].parent;core.updateMatrix();IKT.m.multiplyMatrices(rig.matrix,core.matrix);IKT.inv.copy(IKT.m).invert();
 const cyc=ph/(Math.PI*2),stride=2*Math.PI/(5.4+(3.9-5.4)*gb),beta=.72+(.45-.72)*gb,lift=.1+.13*gb;
 const limbs=[arms[0],arms[1],legs[0],legs[1]];
 limbs.forEach((G,i)=>{const sd=G.userData.s,isArm=i<2,off=GAIT_W[i]+(GAIT_G[i]-GAIT_W[i])*gb;let t=((cyc+off)%1+1)%1,z=0,y=0;
  if(t<beta){z=(.5-t/beta)*beta*stride;}else{let u=(t-beta)/(1-beta);u=u*u*(3-2*u);z=(-.5+u)*beta*stride;y=Math.sin(Math.PI*u)*lift;}
  const tg=IKT.t.set(sd*(isArm?.46:.42),y*mv,(isArm?.74:-.74)+z*mv);
  if(isArm&&armHang>0){IKT.sh.copy(G.position).applyMatrix4(IKT.m);const hx=IKT.sh.x+sd*.1,hy=Math.max(.03,IKT.sh.y-.62),hz=IKT.sh.z+.24;tg.set(tg.x+(hx-tg.x)*armHang,tg.y+(hy-tg.y)*armHang,tg.z+(hz-tg.z)*armHang);}
  tg.applyMatrix4(IKT.inv);
  IKT.pole.set(sd*1,isArm?.45:.65,isArm?-.35:.3);ikLimb(G,tg,IKT.pole);});}
function crawlLimb(G,ph,A,lift){const sd=G.userData.s,c0=Math.cos(ph),c=Math.sign(c0)*Math.pow(Math.abs(c0),.4),l=Math.pow(Math.max(0,-Math.sin(ph)),.55);G.rotation.set(-l*lift*.35,-sd*A*c,sd*l*lift);G.userData.e.rotation.set(-l*lift*.7,0,sd*l*lift*.25);if(G.userData.f)G.userData.f.rotation.set(l*lift*.6,0,0);}
function gaitLimb(G,ph,A,B,lead){const c=Math.cos(ph),lift=Math.max(0,-Math.sin(ph));if(G.userData.f)G.userData.f.rotation.x=B*lift*lift*1.1;G.rotation.x=-A*c+(lead||0);G.rotation.z=-G.userData.s*lift*.18;G.userData.e.rotation.x=-B*lift*lift;}
function guardPoint(){if(gens>=2&&gens<3){const g=GEN.find(q=>!q.on);if(g)return {x:g.x+2,z:g.z+2};}if(keys>=2)return {x:CH.x,z:CH.z};if(inv.fuel||inv.tkey)return {x:TRUCK.x,z:TRUCK.z};return null;}
function afterSearch(){const r=R(),mp=mon.position;M.pause=0;if(R()<.4&&Math.hypot(mp.x-P.x,mp.z-P.z)<45&&startCreep())return;M.anger=Math.min(5,(M.anger||0)+1);if(M.anger===3&&!TH.ang){TH.ang=1;msg('It is getting angrier every time it loses you. Faster. Searching longer.',4.5);}
 if(heardEver&&r<.3){M.state='stalk';M.sk=0;M.trav=0;M.timer=7;const a=Math.atan2(mp.z-M.center.z,mp.x-M.center.x)+rr(-.6,.6);M.target.set(Math.max(-E,Math.min(E,M.center.x+Math.cos(a)*14)),0,Math.max(-E,Math.min(E,M.center.z+Math.sin(a)*14)));sfx.rattle(.7);caption('clicking, moving away');return;}
 if(heardEver&&r<.6){let best=null,bd=1e9;const cand=[];GEN.forEach(g=>{if(!g.on)cand.push({x:g.x+2,z:g.z+2});});if(M.fav)cand.push({x:M.fav.ex,z:M.fav.ez});(M.heat||[]).forEach(q=>{if(q.w>=2)cand.push(q);});if(!dug)cand.push({x:OGR[0][0]+2,z:OGR[0][1]});
  for(const c of cand){const d=Math.hypot(c.x-P.x,c.z-P.z)+rr(0,10);if(d>6&&d<bd&&!blocked(c.x,c.z,.6)){bd=d;best=c;}}
  if(best){M.state='ambush';M.trav=0;M.target.set(Math.max(-E,Math.min(E,best.x)),0,Math.max(-E,Math.min(E,best.z)));M.timer=rr(14,24);return;}}
 M.state='wander';M.timer=0;}
function updMonster(dt){
 if(TUT.on&&TUT.hold){mon.visible=false;return;}if(M.state!=='wander')M.eatT=0;const mp=mon.position;let sp;const pd0=Math.hypot(mp.x-P.x,mp.z-P.z);
 M.twT-=dt;if(M.twT<=0){M.twT=rr(.05,.12);M.tw=rr(-1,1);}
 M.tiltT-=dt;if(M.tiltT<=0){M.tiltT=rr(.7,2.2);M.tiltG=rr(-.75,.75);}M.tilt+=(M.tiltG-M.tilt)*Math.min(1,dt*14);
 if(M.stun>0){M.stun-=dt;rig.rotation.set(-.5+M.tw*.3,M.tw*.4,M.tw*.5);rig.position.y=.15;head.rotation.set(-.9,M.tw,M.tw);jaw.rotation.x=1;arms[0].rotation.x=-.8+M.tw*.4;arms[1].rotation.x=-.8-M.tw*.4;
  if(R()<dt*8)bleed(mp.x,.5,mp.z,3,1);if(M.stun<=0){M.state='hunt';M.target.set(P.x,0,P.z);sfx.screech();}
  if(pd0<1.3)caught();return pd0;}
 const prog=(keys+gens)*.11;
 if(M.state==='wander'){sp=1.9;M.timer-=dt;if(M.eatT>0){M.eatT-=dt;sp=0;pulse(M,dt,.33,()=>{nz({f:rr(250,700),q:2.5,g:.35,dur:.07,dest:panner});if(R()<.4)nz({type:'lowpass',f:300,g:.4,dur:.12,dest:panner});});if(M.eatT<=0)M.pause=0;}else if((M.eatCd=(M.eatCd||0)-dt)<=0&&!(M.eatT>0)&&heardEver&&pd0>12&&pd0<40&&R()<dt*.006){M.eatT=M.eatDur=rr(5,8);M.eatCd=60;caption('wet chewing');if(!TH.eat){TH.eat=1;msg('Hear that? It is eating something. While it eats, it is not listening as hard — move.',5);}}else if(M.pause>0){M.pause-=dt;sp=0;}else if(R()<dt*(nightRule()>=5?.04:.14))M.pause=rr(1.2,2.6);if(nightRule()>=5)sp=2.6;
  if(CAT.monIn&&(M.timer<=0||mp.distanceTo(M.target)<1.2)){const c=R()<.5&&CAT.on?{x:P.x+rr(-6,6),z:P.z+rr(-6,6)}:catRandCell();M.target.set(c.x,0,c.z);M.timer=rr(6,12);}
  else if(M.timer<=0||mp.distanceTo(M.target)<1.2){const hot=M.heat&&M.heat.length?M.heat.reduce((a,b)=>b.w>a.w?b:a):null;const gp=guardPoint();if(gp&&R()<.2){M.target.set(gp.x+rr(-3,3),0,gp.z+rr(-3,3));if(!TH.guard&&Math.hypot(gp.x-P.x,gp.z-P.z)<35){TH.guard=1;setTimeout(()=>{if(mode==='play')msg('It has worked out where you are trying to go. It is starting to guard it.',4.5);},4000);}}else if(hot&&hot.w>=2&&R()<.3){M.target.set(hot.x+rr(-3,3),0,hot.z+rr(-3,3));}else if(M.fav&&R()<.18){M.target.set(M.fav.ex,0,M.fav.ez);}else if(R()<(nightRule()>=5?.85:.5)){const a=R()*6.28,d=rr(8,24);M.target.set(P.x+Math.cos(a)*d,0,P.z+Math.sin(a)*d);}else{const a_=R()*6.28,d_=rr(18,55);M.target.set(P.x+Math.cos(a_)*d_,0,P.z+Math.sin(a_)*d_);}M.target.x=Math.max(-H+4,Math.min(H-4,M.target.x));M.target.z=Math.max(-H+4,Math.min(H-4,M.target.z));M.timer=rr(8,16);}}
 else if(M.state==='hunt'){sp=(6.6+prog+(night-1)*.4)*D.s*(MOD.blood?1.15:1)*(1+(M.anger||0)*.03)*(MOD.endless?1+Math.min(.35,elapsed/1800):1)*(M.hp<2?.78:1)*(M.weak?.82:1);M.lcd=(M.lcd||0)-dt;if(pd0<3.8&&!P.hidden&&!P.hb){M.target.set(P.x,0,P.z);if(!TH.near){TH.near=1;msg('It is close enough to hear your heartbeat. Walking away will not work.',4);}}{const td=mp.distanceTo(M.target);if(M.lunge>0){M.lunge-=dt;sp*=1.5;}else if(M.lcd<=0&&td<7&&td>2.2){M.lunge=.8;M.lcd=5;sfx.screech();sndT=1.6;if(Math.hypot(mp.x-P.x,mp.z-P.z)<12)shakeT=.6;}}if(M.wind>0){M.wind-=dt;sp=0;if(M.wind<=0){sfx.screech();caption('shrieking');sndT=1.6;shakeT=Math.max(shakeT,pd0<15?.4:0);}}if(M.wind<=0&&mp.distanceTo(M.target)<1.1){M.state='search';M.timer=8.5+(M.anger||0)*1.5;M.center.copy(M.target);sfx.rattle();}}
 else if(M.state==='search'){sp=3.2;M.timer-=dt;if(M.rearT>0){M.rearT-=dt;sp=0;}if(mp.distanceTo(M.target)<.9){let cb=null;for(let q=crumbs.length-1;q>=0;q--){const c=crumbs[q];if(c.t>(M.lastCrumb||0)&&elapsed-c.t<25&&Math.hypot(c.x-mp.x,c.z-mp.z)<6.5){cb=c;break;}}
  if(cb){M.lastCrumb=cb.t;M.sniffT=1.1;M.target.set(cb.x,0,cb.z);M.timer=Math.max(M.timer,4);sfx.sniff();caption('sniffing');if(!TH.sniff&&Math.hypot(mp.x-P.x,mp.z-P.z)<22){TH.sniff=1;msg('It has found your trail. It is following your footsteps by smell.',4);}}else{M.rearT=1.4;const a=R()*6.28,d=rr(1.5,6.5);M.target.set(M.center.x+Math.cos(a)*d,0,M.center.z+Math.sin(a)*d);}}if(M.timer<=0)afterSearch();}
 else if(M.state==='stalk'){M.trav=(M.trav||0)+dt;if(M.trav>40){M.state='wander';M.voice=2;M.timer=0;}else if(M.sk===0){sp=3.6;M.timer-=dt;if(M.timer<=0||mp.distanceTo(M.target)<1.2){M.sk=1;M.timer=rr(16,22);M.target.copy(M.center);M.voice=99;if(!TH.st&&pd0<30){TH.st=1;setTimeout(()=>{if(mode==='play'&&M.state==='stalk')msg('It went quiet. That is worse.',3.5);},2500);}}}else{sp=1.4;M.voice=99;M.timer-=dt;if(mp.distanceTo(M.target)<1){M.pause=1;sp=0;}if(M.timer<=0){M.state='wander';M.voice=3;M.timer=0;}}}
 else if(M.state==='ambush'){M.voice=99;M.trav=(M.trav||0)+dt;if(mp.distanceTo(M.target)>1&&M.trav<25){sp=3.1;}else{sp=0;M.pause=1;M.timer-=dt;if(M.timer<=0){M.state='wander';M.voice=2;M.pause=0;M.timer=0;}}}
 else if(M.state==='sneak'){M.voice=99;M.snT=(M.snT||0)-dt;const b=creepBehindPoint(1.6);M.target.set(b.x,0,b.z);
  if(M.snFreeze>0){M.snFreeze-=dt;sp=0;M.target.set(mp.x,0,mp.z);mon.rotation.y=Math.atan2(P.x-mp.x,P.z-mp.z);if(M.snFreeze<=0){M.state='hunt';M.target.set(P.x,0,P.z);M.wind=.45;M.path=null;M.voice=0;try{sfx.screech();}catch(e){}shakeT=.5;}}
  else{sp=pd0>14?3.4:2.1;if(M.snT<=0){M.state='wander';M.voice=2;M.timer=0;}}}
 else if(M.state==='creep'){M.voice=99;M.ckT-=dt;
  if(M.ck===0){const b=creepBehindPoint(2.2);M.target.set(b.x,0,b.z);sp=Math.max(3.2,(FP.spd||0)*4+1.4);const dB=Math.hypot(mp.x-b.x,mp.z-b.z);if(dB<1.1){M.ck=1;M.ckT=rr(2.5,5);}if(M.ckT<=0){M.state='wander';M.voice=2;M.timer=0;}}
  else if(M.ck===1){const b=creepBehindPoint(1.9);M.target.set(b.x,0,b.z);const dB=Math.hypot(mp.x-b.x,mp.z-b.z);sp=Math.min(6,dB*3+(FP.spd||0)*3);if(M.ckT<=0&&dB<1.6){M.ck=2;M.ckT2=7;sp=0;monVoice('look... behind... you.');}}
  else{sp=0;M.target.set(mp.x,0,mp.z);}}
 M.pt=(M.pt||0)-dt;M.pa=(M.pa||0)+dt;if(M.pa>.35&&(!M.path||M.pt<=0||Math.hypot(M.pgx-M.target.x,M.pgz-M.target.z)>1.2)){M.pa=0;M.path=findPath(mp.x,mp.z,M.target.x,M.target.z);M.pi=1;M.pt=M.path?1.2:2.5;M.pgx=M.target.x;M.pgz=M.target.z;}
 let rt=M.target;if(M.path&&M.path.length>1){while(M.pi<M.path.length-1&&Math.hypot(M.path[M.pi].x-mp.x,M.path[M.pi].z-mp.z)<.6)M.pi++;let k=Math.min(M.path.length-1,M.pi+7);while(k>M.pi&&!clearLine(mp.x,mp.z,M.path[k].x,M.path[k].z))k--;rt=M.path[k];}
 let dx=rt.x-mp.x,dz=rt.z-mp.z;const d=Math.hypot(dx,dz)||1;dx/=d;dz/=d;
 if(M.detour>0){M.detour-=dt;const tx=-dz*M.detSide,tz=dx*M.detSide;dx=dx*.2+tx;dz=dz*.2+tz;const n=Math.hypot(dx,dz);dx/=n;dz/=n;}
 if(sp>0)sp*=(EZ1?.55:1)*1.2*(pd0>30?Math.min(2.6,1+(pd0-30)/35):1)*(1+.05*Math.max(0,night-1))*(ST2.witch?1.15:1)*(M.rage>0?1.25:1)*(M.burst>0?1.55:1);const step=Math.min(sp*dt,d);mp.x+=dx*step;mp.z+=dz*step;resolve(mp,.48);{const yy=mon.rotation.y,fxm=Math.sin(yy),fzm=Math.cos(yy),a={x:mp.x+fxm*.7,z:mp.z+fzm*.7},b={x:mp.x-fxm*.7,z:mp.z-fzm*.7};resolve(a,.34);resolve(b,.34);mp.x=(a.x+b.x)/2;mp.z=(a.z+b.z)/2;}
 for(const dr of DOORS){if(!dr.open&&sp>0&&Math.hypot(mp.x-dr.x,mp.z-dr.z)<1.5){dr.bash+=dt;pulse(dr,dt,.42,()=>{sfx.slam();sndT=1.2;});if(dr.bash>(dr.barred?7:1.8)){setDoor(dr,true);dr.barred=false;dr.bar.visible=false;sfx.crash();msg('It smashes the door open.',2);}}else if(dr.bash>0)dr.bash=Math.max(0,dr.bash-dt*.5);}
 if(!CAT.monIn){mp.x=Math.max(-H+1.2,Math.min(H-1.2,mp.x));mp.z=Math.max(-H+1.2,Math.min(H-1.2,mp.z));}
 {M.wd=(M.wd||0)+dt;if(M.wdx===undefined){M.wdx=mp.x;M.wdz=mp.z;}if(M.wd>1.4){const mv=Math.hypot(mp.x-M.wdx,mp.z-M.wdz),want=sp>0&&d>1.3&&!(M.eatT>0)&&!(M.pause>0)&&!(M.wind>0)&&!(M.rearT>0);
 if(want&&mv<.45){M.wdn=(M.wdn||0)+1;M.path=null;M.pa=1;M.pt=0;M.detSide=-(M.detSide||1);M.detour=1.1;
  const inC=typeof inCatXZ==='function'&&inCatXZ(mp.x,mp.z);
  if(!inC&&M.wdn>=2){const ci=gi(mp.x),cj=gi(mp.z);if(grid[cj*GN+ci]){const fc=freeCell(ci,cj);if(fc){const nx=-H+(fc[0]+.5)*GS,nz=-H+(fc[1]+.5)*GS;if(Math.hypot(nx-mp.x,nz-mp.z)<3.2){mp.x=nx;mp.z=nz;}}}}
  if(M.wdn>=3){if(M.state==='wander'||M.state==='stalk'||M.state==='ambush'){M.timer=0;const a=R()*6.28;M.target.set(mp.x+Math.cos(a)*10,0,mp.z+Math.sin(a)*10);}else if(M.state==='search'){M.timer=Math.min(M.timer,.5);}}
  if(!inC&&M.wdn>=4){let ok=false;for(let k=0;k<24&&!ok;k++){const a=R()*6.28,r=1+R()*3.5,nx=mp.x+Math.cos(a)*r,nz=mp.z+Math.sin(a)*r;const ci=gi(nx),cj=gi(nz);if(grid[cj*GN+ci])continue;const pth=findPath(nx,nz,M.target.x,M.target.z);if(pth&&(pd0>9||k>12)){mp.x=nx;mp.z=nz;M.path=pth;M.pi=1;M.pt=1.2;M.pgx=M.target.x;M.pgz=M.target.z;ok=true;}}if(ok)M.wdn=1;}
 }else M.wdn=0;M.wd=0;M.wdx=mp.x;M.wdz=mp.z;}}
 M.stuck+=dt;if(M.stuck>.5){const mv=mp.distanceTo(M.last);if(sp>0&&mv<sp*.5*.3&&d>1.5&&!M.path){M.detour=1.1;M.detSide=R()<.5?1:-1;}M.last.copy(mp);M.stuck=0;}
 if(sp>0){const want=Math.atan2(dx,dz);let df=want-mon.rotation.y;df=Math.atan2(Math.sin(df),Math.cos(df));mon.rotation.y+=df*Math.min(1,dt*(M.state==='hunt'?7:3.5));}
 if(torMesh){const br=1+Math.sin(elapsed*(M.state==='hunt'?7.5:2.3))*.024;torMesh.scale.set(br*.86,1+(br-1)*.5,1.06);}tongue.rotation.x=Math.sin(elapsed*3.1)*.18+(M.lunge>0?-.4:0);tongue.rotation.z=Math.sin(elapsed*1.7)*.12;
 const prev=M.phase,hunt=M.state==='hunt',wind=M.wind>0;{const ps=wind?3.4:hunt?(M.lunge>0?3.2:2.2):1;pupils.forEach(p=>p.scale.setScalar(ps));}
 belly.scale.set(1+Math.sin(elapsed*2.3)*.03,1+Math.sin(elapsed*3.1)*.04,1);
 // one continuous gait: a slow diagonal crawl that blends into a rotary gallop, never snapping between them
 M.gb=(M.gb===undefined?0:M.gb)+(((hunt&&!wind)?1:0)-(M.gb||0))*Math.min(1,dt*3.2);const gb=M.gb,L=(a,b)=>a+(b-a)*gb;
 M.mv=(M.mv||0)+((sp>0?1:0)-(M.mv||0))*Math.min(1,dt*5);const mv=M.mv;
 M.phase+=step*L(5.4,3.9);const ph=M.phase,pz=M.pause>0&&gb<.5;
 // low, sprawled crawl: elbows and knees out, hands planted ahead, dragging the body; the spine swings side to side like a lizard
 {const sw=L(.44,.62),lf=L(.55,.75);crawlLimb(arms[0],ph,sw,lf);crawlLimb(legs[1],ph+.45,sw*.85,lf*.7);crawlLimb(arms[1],ph+Math.PI,sw,lf);crawlLimb(legs[0],ph+Math.PI+.45,sw*.85,lf*.7);
  const br=Math.sin(elapsed*2.1)*.012,und=Math.sin(ph)*L(.03,.05);
  rig.rotation.set(Math.sin(ph*2)*L(.02,.05)*mv+(1-mv)*br*.6,und*mv,-und*.35*mv+(1-mv)*Math.sin(elapsed*.7)*.02);rig.position.y=(Math.abs(Math.sin(ph*2))*L(.018,.045))*mv+(1-mv)*(.01+br*.5);
  head.position.x=-und*.08*mv;}
 // head: crawl look-around vs gallop level-and-tilted, blended
 {const chx=pz?-.75:-.45+Math.sin(elapsed*.9)*.1,chy=pz?Math.sin(elapsed*.8)*.9:Math.sin(elapsed*.6)*.5,chz=pz?M.tilt*3.6:M.tilt*.6;
  const ghx=-.8-rig.rotation.x*.95,ghy=M.tilt*.25+(M.lunge>0?M.tw*.3:0),ghz=M.tilt;
  head.rotation.set(L(chx,ghx),L(chy,ghy),L(chz,ghz));
  jaw.rotation.x=L(.25+Math.max(0,Math.sin(elapsed*1.7))*.25,.75+Math.sin(elapsed*23)*.06+(M.lunge>0?.55:0));}
 // head tracks the last thing it heard
 {let rel=Math.atan2(M.target.x-mp.x,M.target.z-mp.z)-mon.rotation.y;rel=Math.atan2(Math.sin(rel),Math.cos(rel));rel=Math.max(-.95,Math.min(.95,rel));
  M.hy=(M.hy||0)+(rel*L(.85,.35)-(M.hy||0))*Math.min(1,dt*(wind?16:4));head.rotation.y+=M.hy;}
 // sudden spasms
 M.jerk=(M.jerk||0)-dt;if(M.jerk<=0){M.jerk=rr(2.5,7);M.jk=.18;M.jd=rr(-1,1);}if(M.jk>0){M.jk-=dt;const q=M.jk/.18;head.rotation.z+=M.jd*.55*q;head.rotation.x+=Math.abs(M.jd)*.25*q;arms[M.jd>0?0:1].rotation.z+=.25*q;}
 // sniffing the ground
 if(M.sniffT>0){M.sniffT-=dt;const q=Math.min(1,M.sniffT*3);head.rotation.x+=(-1.2-head.rotation.x)*q+Math.sin(elapsed*31)*.04;head.rotation.y=Math.sin(elapsed*7)*.3*q+head.rotation.y*(1-q);jaw.rotation.x=.12;rig.rotation.x+=.18*q;}
 // eating
 if(M.eatT>0){const q=Math.min(1,M.eatT*1.5,(M.eatDur-M.eatT+.01)*3);rig.rotation.x+=.28*q;rig.position.y-=.05*q;head.rotation.x+=(-1.25+Math.sin(elapsed*14)*.12+M.tw*.12-head.rotation.x)*q;head.rotation.z+=Math.sin(elapsed*5)*.3*q;
  jaw.rotation.x=.15+Math.abs(Math.sin(elapsed*9))*.7*q;arms[0].rotation.x+=(.5+Math.sin(elapsed*6)*.3)*q;arms[1].rotation.x+=(.5+Math.sin(elapsed*6+2)*.3)*q;arms.forEach(a=>{a.userData.e.rotation.x-=.6*q;});}
 // rear up and listen (only while crawling)
 M.rk=(M.rk||0)+(((M.pause>0||M.rearT>0)&&gb<.5&&!(M.tall>0)?1:0)-(M.rk||0))*Math.min(1,dt*5);if(M.rk>.01){const rk=M.rk*(1-gb);rig.rotation.x-=rk;rig.position.y+=.64*rk;arms.forEach(a=>{const sd=a.userData.s;a.rotation.x+=.5*rk;a.rotation.y-=sd*.55*rk;a.rotation.z-=sd*.3*rk;a.userData.e.rotation.x-=.6*rk;});head.rotation.x+=.55*rk;jaw.rotation.x+=.35*rk;}
 // wind-up before the charge: freeze, rise, head snaps to the sound, jaw unhinges, everything shakes
 if(wind){const q=1-M.wind/.75;rig.rotation.x=-.32*Math.min(1,q*3);rig.position.y=.18+.08*Math.min(1,q*3);head.rotation.x=-.35+M.tw*.06;head.rotation.z=M.tw*.22;jaw.rotation.x=.2+q*1.05;
  arms.forEach((a,i)=>{a.rotation.x=.25+M.tw*.05;a.rotation.z=(i?-1:1)*.12;a.userData.e.rotation.x=-.35;});legs.forEach(l=>{l.rotation.x=-.2;});}
 if(M.tall>0){M.tall-=dt;const q=Math.min(1,M.tall*2,(3.4-M.tall)*2);rig.rotation.x-=1.15*q;rig.position.y+=.55*q;arms.forEach(a=>{const sd=a.userData.s;a.rotation.x+=.6*q;a.rotation.y-=sd*.5*q;a.rotation.z-=sd*.45*q;a.userData.e.rotation.x+=.3*q;});legs.forEach(l=>{l.rotation.x+=.5*q;});head.rotation.x+=.85*q;}
 {const tq=M.tall>0?Math.min(1,M.tall*2,(3.4-M.tall)*2):0,rk2=(M.rk||0)*(1-gb);try{ikPose(gb,mv,ph,Math.max(tq,rk2*.9));}catch(e){}}
 jaw.rotation.x*=wind?.6:.4;
 if(gb>.5&&Math.floor(ph/Math.PI)!==Math.floor(prev/Math.PI))sfx.scrabble();
 M.voice-=dt;if(M.voice<=0){sndT=1.4;if(hunt){M.voice=rr(1.3,2.2);if(R()<.5){sfx.screech();caption('shrieking');}else{sfx.rattle(.8);caption('clicking');}}else{M.voice=rr(2,5);if(R()<.7){sfx.rattle(.6);caption('clicking');}else{sfx.breath();caption('breathing');}}}
 const pd=Math.hypot(mp.x-P.x,mp.z-P.z);if(M.state==='hunt'){if(pd<1.4&&(!P.hidden||Math.hypot(M.target.x-P.x,M.target.z-P.z)<1.7))caught();}
  else if(pd<1.05&&!P.hidden&&mode==='play'){const ux=(P.x-mp.x)/(pd||1),uz=(P.z-mp.z)/(pd||1);P.x=mp.x+ux*1.12;P.z=mp.z+uz*1.12;resolve(P,.38);shakeT=Math.max(shakeT,.25);
   if((M.bumpT||0)<=0){M.bumpT=2.5;M.jk=.18;M.jd=R()<.5?-1:1;try{sfx.sniff();}catch(e){}
    if(M.state==='search'||M.state==='ambush'){M.state='hunt';M.target.set(P.x,0,P.z);M.wind=.9;M.path=null;caption('it felt you');msg('It brushed against you — and it NOTICED. RUN!',2.5);}
    else{M.pause=Math.max(M.pause||0,.8);caption('it brushed past you');if(!TH.bump){TH.bump=1;msg('It brushed right past you… it does not know you are here. Do not make a sound.',4);}}}}
  M.bumpT=(M.bumpT||0)-dt;return pd;
}
function updDeath(dt){M.deadT+=dt;const t=M.deadT,mp=mon.position;let jn=0;const j=()=>sn(t*11,(jn++)*1.37),all=arms.concat(legs);
 if(t<1.6){if(killWay==='gun'){rig.rotation.set(-.38+j()*.18,j()*.3,j()*.35);rig.position.y=.12;head.rotation.set(-.7+j()*.3,j()*.8,j()*.6);jaw.rotation.x=1.1;arms[0].rotation.set(-1.2+j()*.5,.4,0);arms[1].rotation.set(-1.2+j()*.5,-.4,0);if(R()<dt*14)bleed(mp.x,.7,mp.z,5,1.8);}
  else{rig.rotation.set(j()*.5,j()*.5,j()*.6);rig.position.y=.18+j()*.08;head.rotation.set(j(),j(),j());jaw.rotation.x=.75+j()*.3;all.forEach(a=>{a.rotation.set(j()*.8,j()*.6,0);a.userData.e.rotation.x=j();});flashT=Math.max(flashT,.13);spark.material.opacity=1;if(R()<dt*8)bleed(mp.x,.5,mp.z,2,1);}}
 else{const k=Math.min(1,dt*4);rig.rotation.x+=(0-rig.rotation.x)*k;rig.rotation.y+=(0-rig.rotation.y)*k;rig.rotation.z+=(1.5-rig.rotation.z)*k;rig.position.y+=(.22-rig.position.y)*k;
  const tw=t<6?Math.max(0,Math.sin(t*2.1))**8*sn(t*9,3)*.5:0;arms[0].rotation.set(-.4+tw,-.9,0);arms[1].rotation.set(-.4-tw,.9,0);legs[0].rotation.set(.3,.5+tw,0);legs[1].rotation.set(.3,-.5,0);all.forEach(a=>a.userData.e.rotation.x+=(-1.1-a.userData.e.rotation.x)*k);head.rotation.x+=(.3-head.rotation.x)*k;head.rotation.y+=tw;jaw.rotation.x=.7;
  pool.visible=true;pool.position.set(mp.x,.03,mp.z);const s=Math.min(1.9,(t-1.6)*.35);pool.scale.set(s,s*.8,1);belly.scale.y=Math.max(.75,1-(t-1.6)*.05);}
}
function caught(){if(mode!=='play'&&mode!=='drive')return;if(TUT.on){tutCaught();return;}try{if(!EZ1)monVoice(MT.pick(['Found you.','Mine.','Got you.','Nobody leaves.']));}catch(e){}if(P.bless&&mode==='play'){P.bless=false;P.blessUsed=true;ALT.forEach(a=>{a.g.material.opacity=0;});flashT=.9;M.stun=5;const mx=mon.position.x-P.x,mz=mon.position.z-P.z,md=Math.hypot(mx,mz)||1;mon.position.x=P.x+mx/md*5;mon.position.z=P.z+mz/md*5;resolve(mon.position,.48);M.state='search';M.center.set(P.x,0,P.z);M.target.copy(M.center);M.timer=5;M.path=null;try{sfx.screech();tone({f:784,g:.1,dur:1.5});}catch(e){}msg('The candlelight FLARES out of you — it shrieks and lets go! (The blessing is used up.) RUN.',4);return;}DEATHP={x:P.x,z:P.z};if(mode==='play'&&!PDU&&R()<.2&&!D.practice&&!VB.on&&!MOD.endless&&!MOD.one){PDU=1;startPD();return;}P.hidden=null;bfog.visible=false;{const f=$('face');f.style.display='none';f.className='fx';}mode='scare';scareT=0;splatDone=false;sfx.scare();try{const d=distN||master;vox({f:rr(300,400),f2:rr(1000,1400),dur:1.4,g:.55,a:.003,vib:43,vd:220,fm:[900,2400],q:2,dest:d});nz({f:1100,q:.4,g:1,dur:.5,a:.001,dest:d});}catch(e){}jsFlash(1);try{if(document.exitPointerLock)document.exitPointerLock();}catch(e){}
 P.yaw=openYaw(2);const fx=-Math.sin(P.yaw),fz=-Math.cos(P.yaw);window.__SCF=[fx,fz];mon.position.set(P.x+fx*1.9,0,P.z+fz*1.9);mon.rotation.y=Math.atan2(-fx,-fz);try{const d=distN||master;for(let i=0;i<4;i++)vox({f:rr(480,700),f2:rr(1200,1700),dur:1.7,g:.42,a:.004,vib:28+i*8,vd:280,fm:[1000,2600],q:2,at:i*.03,dest:d});tone({type:'sawtooth',f:2400,f2:700,g:.25,dur:1.4,a:.005});vox({f:140,f2:70,dur:1.3,g:.6,a:.02,fm:[500,1100],q:3,br:.9,at:.75,dest:d});nz({type:'lowpass',f:200,g:1.2,dur:.4,a:.001,at:.12});}catch(e){}shakeT=1.4;
 rig.rotation.set(-1,0,0);rig.position.set(0,.06,0);arms[0].rotation.set(-.9,.5,0);arms[1].rotation.set(-.9,-.5,0);arms.forEach(a=>a.userData.e.rotation.x=-.3);jaw.rotation.x=1.1;
 P.h=1.5;$('msg').style.opacity=0;$('prompt').style.display='none';$('down').style.display='none';gunFP.visible=false;$('obj').textContent='';$('mini').style.display='none';ghost.visible=false;}
function sn(t,s){return Math.sin(t+s)*.5+Math.sin(t*2.31+s*1.7)*.3+Math.sin(t*4.73+s*2.9)*.2;}
function bodyResolve(){const mp=mon.position;if(UG&&UG.on)return;for(let it=0;it<2;it++){const fx=Math.sin(mon.rotation.y),fz=Math.cos(mon.rotation.y);
 for(const k of [.78,-.72,.4,-.35]){const q={x:mp.x+fx*k,z:mp.z+fz*k},ox=q.x,oz=q.z;resolve(q,.3);mp.x+=q.x-ox;mp.z+=q.z-oz;}resolve(mp,.48);}}
function openYaw(dist){const fr=a=>{const fx=-Math.sin(a),fz=-Math.cos(a);for(let d=.3;d<=dist+.6;d+=.25){if(blocked(P.x+fx*d,P.z+fz*d,.45))return false;}return true;};
 if(fr(P.yaw))return P.yaw;for(let i=1;i<=12;i++){for(const sg of [1,-1]){const a=P.yaw+sg*i*.26;if(fr(a))return a;}}return P.yaw;}
function updScare(dt){scareT+=dt;const sh=.05+scareT*.07;if(window.__SCF&&mode==='scare'){const pre=Math.min(1,scareT/.12),k0=Math.max(0,Math.min(1,(scareT-.1)/.3)),k=k0*k0*(3-2*k0),dd=scareT<.1?1.9+.2*Math.sin(pre*Math.PI*.5):2.1-k*1.38;mon.position.set(P.x+window.__SCF[0]*dd,Math.sin(k0*Math.PI)*.16,P.z+window.__SCF[1]*dd);}mon.updateMatrixWorld(true);
 camera.position.set(P.x+sn(scareT*17,1)*sh,P.h+sn(scareT*19,2)*sh-Math.max(0,scareT-.7)*.5,P.z+sn(scareT*16,3)*sh);
 head.rotation.set(0,0,0);head.lookAt(camera.position);head.rotateZ(sn(scareT*6,4)*.18);head.getWorldPosition(hp);
 camera.lookAt(hp.x,hp.y-.03,hp.z);camera.fov+=(34-camera.fov)*Math.min(1,dt*9);camera.updateProjectionMatrix();
 jaw.rotation.x=Math.min(1.1,.6+scareT*2.5)+Math.sin(scareT*21)*.05;head.scale.setScalar(.8+.22*Math.min(1,scareT/.5));rig.position.y=.06+Math.sin(scareT*13)*.02;arms[0].rotation.x=-.9-Math.min(.5,scareT*.4);arms[1].rotation.x=-.9-Math.min(.5,scareT*.4);lamp.intensity=1.5+sn(scareT*14,6)*.6;
 $('danger').style.opacity=Math.min(1,scareT*3);{const el=jsOverlay();el.style.opacity=(.65+.35*Math.sin(scareT*20))*Math.max(.3,1-scareT);camera.rotation.z+=sn(scareT*8,7)*.05*(1+scareT*1.5);}
 if(scareT>.7&&!splatDone){splatDone=true;splat(9);bleed(camera.position.x,camera.position.y-.3,camera.position.z,30,2);}
 if(scareT>1.3&&mode==='scare'){mon.position.y=0;mode='tear';capture=true;}
}
function doTear(url){stat('deaths',1);saveStats();if(MOD.endless&&!dbgUsed){let b=0;try{b=+localStorage.getItem('crawler_endless')||0;}catch(e){}if(elapsed>b){try{localStorage.setItem('crawler_endless',Math.round(elapsed));}catch(e){}}setTimeout(()=>{$('deadsub').textContent='ENDLESS — you lasted '+Math.floor(elapsed/60)+':'+String(Math.floor(elapsed%60)).padStart(2,'0')+'.  Best: '+Math.floor(Math.max(b,elapsed)/60)+':'+String(Math.floor(Math.max(b,elapsed)%60)).padStart(2,'0');},2100);}const t=$('tear');$('tl').style.backgroundImage=$('tr').style.backgroundImage='url('+url+')';t.style.display='block';sfx.tear();splat(12);
 requestAnimationFrame(()=>requestAnimationFrame(()=>t.classList.add('go')));
 setTimeout(()=>{if(mode!=='tear')return;mode='dead';wake=night<maxN();if(!wake){try{localStorage.removeItem('crawler_save');}catch(e){}}$('deadh').textContent=window.__rip?(wake?'NIGHT '+night+' — YOU LOOKED':'YOU LOOKED'):wake?'NIGHT '+night+' — TORN IN HALF':'TORN IN HALF';$('retry').textContent=wake?'WAKE UP':'START OVER';$('deadsub').textContent=(wake?'You wake at the gate, whole again, with everything you found. '+(maxN()-night)+(maxN()-night>1?' nights':' night')+' left.  ':'There are no more nights.  ')+(window.__rip?'It was right behind you the whole time. When it tells you to look… DON\'T.':['It heard you.','Too loud.','It never saw you. It didn\'t need to.','Next time, don\'t run.'][(R()*4)|0])+'  Pages found: '+inv.pages+' / 6';$('dead').style.display='flex';showReplay();window.__rip=false;},1900);}
function win(route){if(mode==='cut'||mode==='win')return;if(MOD.endless&&route!=='nuke'){if(!TH.endl||elapsed-TH.endl>8){TH.endl=elapsed;msg('ENDLESS — there is no way out. Only how long you last.',3);}return;}if(dawnOn&&route==='gate')route='dawn';try{if(document.exitPointerLock)document.exitPointerLock();}catch(e){}$('mini').style.display='none';$('obj').textContent='';P.hidden=null;
 const alive=!monDead,shots=endingShots(route,alive);playCut(shots,()=>{pl.visible=false;voss.visible=false;cleanupNuke();showWin(route);});}
function cleanupNuke(){if(nukeG){scene.remove(nukeG);nukeG=null;}scene.fog.density=.05;}
let nukeG=null;
function endingShots(route,alive){const sh=[];let ph=0;
 if(route==='gate'||route==='dawn'){const dawn=route==='dawn';
  sh.push({dur:6,sub:dawn?'Six o’clock. Grey light over Hollow Rest.':'You run.',start(){pl.visible=true;pl.position.set(0,0,-H+4);pl.rotation.set(0,Math.PI,0);if(dawn){voss.visible=true;voss.position.set(2,0,-H-2.5);voss.rotation.y=-.6;}if(alive){mon.visible=true;mon.position.set(-3,0,-H+20);}},
   cam(k,t,dt){ph+=dt*6;plWalk(ph);pl.position.z=-H+4-k*13;camMove(dawn?[0,3,-H+16]:[5,2.3,-H-14],dawn?[0,13,-H+26]:[4,2.6,-H-15],[0,1.2,-H+1],[0,1,-H-6],k);
    if(alive){mon.position.z=Math.min(-H+1.3,-H+20-t*4.6);mon.position.x=-3+t*.6;M.phase+=dt*16;animGallop(M.phase);mon.rotation.y=Math.PI;}
    if(!dawn&&t>2.6&&t<3.6){const g=1.45*(1-(t-2.6));gateL.rotation.y=Math.max(0,g);gateR.rotation.y=-Math.max(0,g);if(!CUT.cl&&t>3.3){CUT.cl=1;sfx.crash();}}}});
  if(alive)sh.push({dur:4.5,sub:dawn?'Behind the bars, something drags itself back toward the chapel.':'It hits the iron and stops. It cannot follow you. Not yet.',start(){mon.position.set(0,0,-H+1.4);mon.rotation.y=Math.PI;gateL.rotation.y=dawn?1.45:0;gateR.rotation.y=dawn?-1.45:0;},cam(k,t){poseRear(Math.min(1,t*1.5),t);camMove([1.8,.6,-H-3.2],[1.2,.9,-H-2.6],[0,1.4,-H+1.4],[0,1.7,-H+1.4],k);}});
  else sh.push({dur:4,sub:'Behind you, nothing moves among the graves.',cam(k){camMove([0,2,-H-2],[0,6,-H-4],[0,1,-H+20],[0,1,-H+30],k);}});
  sh.push({dur:5,sub:dawn?'Voss cannot look at you. You walk past him into the morning.':'You do not stop running until you see streetlights.',start(){pl.position.set(0,0,-H-5);pl.rotation.set(0,Math.PI,0);},cam(k,t,dt){ph+=dt*6;plWalk(ph);pl.position.z=-H-5-k*6;camMove([3.4,2.1,-H-13.5],[3,2.6,-H-15],[0,1.2,-H-6],[0,1.4,-H-11],k);}});}
 else if(route==='tunnel'){
  sh.push({dur:4,sub:'The hatch drops shut above you.',start(){pl.visible=true;pl.position.set(HATCH.x,0,HATCH.z);pl.rotation.set(0,-Math.PI/2,0);},cam(k){pl.position.y=-k*1.9;camMove([CH.x-1.6,1.5,CH.z+2.6],[CH.x-1,1.2,CH.z+2.2],[HATCH.x,.3,HATCH.z],[HATCH.x,0,HATCH.z],k);}});
  if(alive)sh.push({dur:6,sub:'It comes in through the chapel door.',sub2:'It scratches at the boards for a long, long time.',start(){pl.visible=false;mon.visible=true;mon.position.set(CH.x-4.6,0,CH.z);mon.rotation.y=Math.PI/2;},cam(k,t,dt){if(t<3){mon.position.x=CH.x-4.6+t*2.1;M.phase+=dt*10;animGallop(M.phase);}else{poseRear(Math.min(1,(t-3)*1.2),t);if(((t*6)|0)%4===0&&!CUT.sc){CUT.sc=1;sfx.scratch();}if(((t*6)|0)%4===1)CUT.sc=0;}camMove([CH.x+2.4,.4,CH.z+2.6],[CH.x+2.6,.3,CH.z+1.8],[CH.x-1,1,CH.z],[HATCH.x,1.4,HATCH.z],k);}});
  else sh.push({dur:4,sub:'Nothing follows.',start(){pl.visible=false;},cam(k){camMove([CH.x-2,1.4,CH.z+2.5],[HATCH.x-.6,.8,HATCH.z+.6],[HATCH.x,0,HATCH.z],[HATCH.x,0,HATCH.z],k);}});
  sh.push({dur:4.5,sub:'The tunnel is low. You have to crawl. You try not to think about that.',start(){$('fade').style.opacity=1;},cam(k){camAt([CH.x,1,CH.z],[CH.x,1,CH.z+1]);},end(){$('fade').style.opacity=0;}});}
 else if(route==='truck'){const tl=[glow(0,0,0,0xff2010,1.2,.95),glow(0,0,0,0xff2010,1.2,.95)];tl.forEach(g=>{g.material.fog=false;});
  sh.push({dur:6,sub:'The trees thin out. Streetlights.',cam(k,t){const x=DR.x+t*22;tl[0].position.set(x,1,RD.z+DR.lat-.7);tl[1].position.set(x,1,RD.z+DR.lat+.7);camMove([DR.x-6,3,RD.z+5],[DR.x-4,7,RD.z+4],[DR.x+10,1,RD.z],[DR.x+90,1,RD.z],k);},end(){tl.forEach(g=>scene.remove(g));}});
  if(alive)sh.push({dur:4.5,sub:'In the mirror, something stands in the middle of the road and watches you go.',start(){mon.visible=true;mon.position.set(DR.x-40,0,RD.z);mon.rotation.y=Math.PI/2;},cam(k,t){poseRear(1,t);camMove([DR.x-24,1.6,RD.z+.5],[DR.x-27,1.5,RD.z+.4],[DR.x-40,1.6,RD.z],[DR.x-40,1.8,RD.z],k);}});
  else if(killWay==='truck')sh.push({dur:4,sub:'Back on the road, it does not get up.',start(){mon.visible=true;},cam(k){const m=mon.position;camMove([m.x+5,1.2,m.z+3],[m.x+3,2.2,m.z+2],[m.x,.3,m.z],[m.x,.2,m.z],k);}});}
 else if(route==='nuke'){const c0=CRYPTS[0];
  sh.push({dur:4.5,sub:'Something bright is falling out of the clouds.',start(){scene.fog.density=.008;pl.visible=false;mon.visible=false;
    nukeG=new T.Group();scene.add(nukeG);const puffs=[];for(let i=0;i<170;i++){const sp=new T.Sprite(new T.SpriteMaterial({map:mistT,color:0xffffff,fog:false,transparent:true,depthWrite:false,opacity:0}));sp.userData={kind:i<45?'stem':i<125?'cap':'ring',a:R()*6.28,b:R()*6.28,r:Math.sqrt(R()),s:rr(.7,1.35)};nukeG.add(sp);puffs.push(sp);}
    const streak=new T.Sprite(new T.SpriteMaterial({map:mistT,color:0xfff8e0,fog:false,transparent:true,depthWrite:false}));streak.scale.set(5,5,1);const sl=new T.PointLight(0xffffff,0,400,1);streak.add(sl);nukeG.add(streak);nukeG.userData={puffs:puffs,streak:streak,sl:sl};},
   cam(k,t){camMove([-62,7,62],[-66,8,66],[0,24,0],[0,30,0],k);const u=nukeG.userData,y=320-k*318;u.streak.position.set(14-k*14,y,-40+k*40);u.sl.intensity=k*4;}});
  sh.push({dur:9,start(){const u=nukeG.userData;u.streak.visible=false;u.sl.intensity=0;const f=$('flash');f.style.transition='none';f.style.background='#fff';f.style.opacity=1;sfx.nuke();hemi.intensity=6;},
   cam(k,t){const u=nukeG.userData,sh2=Math.max(0,1.4-t)*1.8;camAt([-115+rr(-sh2,sh2),16+rr(-sh2,sh2),115],[0,26+t*5,0]);$('flash').style.opacity=Math.max(0,1-t*.7);hemi.intensity=.27+Math.max(0,5.5-t*1.2);
    const h=Math.min(100,t*15+2),R0=9+t*3.4,fb=t<1.3;
    for(const p of u.puffs){const q=p.userData;let x,y,z,sz,heat=Math.max(0,1-t/5.5),op=.9;
     if(fb){const f=(t/1.3)*16;x=Math.cos(q.a)*Math.sin(q.b)*f*q.r;y=f*.7+Math.cos(q.b)*f*q.r;z=Math.sin(q.a)*Math.sin(q.b)*f*q.r;sz=f*.9*q.s;heat=1;}
     else if(q.kind==='stem'){y=q.r*h;const rad=(2.5+(1-q.r)*5+t*.35);x=Math.cos(q.a)*rad*.55;z=Math.sin(q.a)*rad*.55;sz=(5+t*.7)*q.s;heat*=.8;}
     else if(q.kind==='cap'){const b=q.b+t*.7;x=Math.cos(q.a)*(R0*.62+Math.cos(b)*R0*.42*q.r);z=Math.sin(q.a)*(R0*.62+Math.cos(b)*R0*.42*q.r);y=h+Math.sin(b)*R0*.36*q.r+R0*.15;sz=R0*.55*q.s;heat*=(1-q.r*.5);}
     else{const r2=(t-1.3)*26*(.8+q.r*.4);x=Math.cos(q.a)*r2;z=Math.sin(q.a)*r2;y=1.5+q.r*3;sz=(5+t*1.3)*q.s;op=Math.max(0,.75-t*.09);heat*=.5;}
     p.position.set(x,y,z);p.scale.set(sz,sz,1);p.material.opacity=op;p.material.color.setHSL(.06+.08*heat,.35+.6*heat,Math.min(.92,.13+.62*heat));}},
   end(){$('flash').style.transition='';$('flash').style.background='';$('flash').style.opacity=0;hemi.intensity=.27;}});
  sh.push({dur:5.5,sub:'Deep in the crypt the ground rolls like the sea.',sub2:'When you finally push the lid open, Hollow Rest is a glass crater — and nothing is clicking any more.',start(){$('fade').style.opacity=1;},cam(){camAt([c0[0],1,c0[1]],[c0[0],1,c0[1]+1]);},end(){$('fade').style.opacity=0;}});}
 if(route==='train'){sh.push({dur:4.5,sub:'The doors slide open by themselves. Inside it is warm, and quiet.',sub2:'Every seat is taken. None of them turn around.',start(){TRN.g.visible=true;},cam(){camAt([PLAT.x+5,1.8,PLAT.z+6],[TRN.x-TRN.dir*12,2,RAILZ]);}});}
 if(route==='underway'){sh.push({dur:5,sub:'Daylight.',sub2:'In the tunnel mouth behind you, something pale stops at the edge of the light. It cannot follow you out here.',start(){},cam(){camAt([UX-200,2,28.5],[UX-170,1.2,28]);}});}
 if(route==='woods'){sh.push({dur:4.5,sub:'The wire snaps. You squeeze through and run.',sub2:'Behind you, something hits the fence hard enough to bend it.',start(){},cam(){camAt([FENCE.x+3,1.6,FENCE.z+1],[FENCE.x-12,1.3,FENCE.z]);}});}
 return sh;}
function killCut(way){const m=mon.position,a0=Math.atan2(P.x-m.x,P.z-m.z);M.deadT=0;
 playCut([{dur:5,sub:way==='gun'?'':'',start(){},cam(k,t,dt){updDeath(dt*(t<2.2?.45:1));const q=k*k*(3-2*k),a=a0+q*1.6,r=3.8-q*.7;camAt([m.x+Math.sin(a)*r,1.25+q*1.1,m.z+Math.cos(a)*r],[m.x,.55-q*.2,m.z]);}}],(prev)=>{mode=prev;lockPointer();hud();});}
function truckKillCut(){const m=mon.position;playCut([{dur:3.5,sub:'',cam(k,t,dt){updDeath(dt);camMove([m.x+7,2,m.z+3],[m.x+4,1.3,m.z+2],[m.x,.4,m.z],[m.x,.3,m.z],k);}}],(prev)=>{mode='drive';lantern.visible=false;cab.visible=true;});}
function showWin(route){mode='win';if(FIRSTRUN)setTimeout(fakeGlitch,3500);try{if(!dbgUsed)localStorage.setItem('crawler_last',route);}catch(e){}if(MOD.halloween&&!dbgUsed)award('halloween');stat('escapes',1);if(elapsed>(STATS.longest||0)&&!dbgUsed)STATS.longest=Math.round(elapsed);saveStats();endDrive();$('mini').style.display='none';$('obj').textContent='';try{if(document.exitPointerLock)document.exitPointerLock();}catch(e){}const m=Math.floor(elapsed/60),s=Math.floor(elapsed%60);
 $('prompt').style.display='none';
 if(dawnOn&&route==='gate')route='dawn';
 $('winsub').textContent={true:'The dead of Hollow Rest kept Voss. You leave Annie’s letter on her father’s grave, and for the first time in forty years, nothing under the chapel is hungry.',nuke:'You make it to the edge of town before the sirens start. On the radio they call it a gas main. You know better.',dawn:'Voss stands at the open gate with the chain in his hands. He cannot look at you. You walk past him into the morning.',gate:'You squeeze through the gate before it finishes opening and you do not stop running.',truck:'The trees thin out. Streetlights. A town that has no idea what it has been feeding.',tunnel:'The hatch drops shut above you. The tunnel is low — you have to crawl. You try not to think about that.',train:'The ghost train carries you out through the dark. Every seat is taken. None of the passengers turn around. At dawn you wake up alone on a bench, in a station that closed in 1987.',woods:'The hermit\u2019s path winds through the dead woods to a road. Headlights. A truck stops. You do not look back. Not once.',underway:'The handcar bursts out of the hillside into grey dawn light and rolls, and rolls, down the old line toward the town. Behind you, in the mouth of the tunnel, something pale stops at the edge of the daylight — and does not follow.'}[route];
 $('winstat').textContent='Time '+m+':'+(s<10?'0':'')+s+'  ·  '+D.n+(MOD.daily?' · DAILY '+dayKey():'')+(MOD.blood?' · Blood Moon':'')+(MOD.one?' · One Life':'')+(MOD.dark?' · No Lantern':'')+(MOD.winter?' · Winter':'')+'  ·  Pages '+inv.pages+'/6  ·  '+(monDead?(killWay==='nuke'?'You called in an airstrike on it.':killWay==='dawn'?'It went back underground at dawn.':killWay==='practice'?'Practice run — no crawler.':killWay==='gun'?'You shot it dead.':killWay==='truck'?'You ran it down on the road.':'You electrocuted it.'):'It is still in there, clicking in the dark.')+(inv.pages>=6?'  You left Voss\'s diary on the sheriff\'s desk.':'  Nobody will believe you without proof — you never found all the pages.');
 {const f=LORE_ALL.filter(l=>LORE[l[0]]).length;$('winstat').textContent+='  ·  Secrets uncovered: '+f+'/'+LORE_ALL.length;if(f>=LORE_ALL.length&&!dbgUsed)award('truth');if(route==='train')award('trainout');if(route==='woods')award('woodsout');}
 if(ANNIE.step>=2)$('winsub').textContent+='  At the gate you feel a small cold hand let go of yours. When you look back, a little girl is sitting under the bell, and something enormous is curled at her feet — listening.';
 if(inv.secret&&inv.pages>=6)$('winsub').textContent+='  Before you left, you tied Annie\'s letter to the bell rope. Behind you the bell rang once — and something under the chapel answered it, softly.';
 if(!dbgUsed){const anyMod=MOD.blood||MOD.one||MOD.dark||MOD.winter;const bk=MOD.daily?'crawler_daily_'+dayKey():anyMod?'crawler_mod_'+D.n:'crawler_best_'+D.n;let b=0;try{b=+localStorage.getItem(bk)||0;if(!D.practice&&(!b||elapsed<b)){b=elapsed;localStorage.setItem(bk,b);}localStorage.removeItem('crawler_save');}catch(e){}if(b)$('winstat').textContent+='  ·  Best '+Math.floor(b/60)+':'+(Math.floor(b%60)<10?'0':'')+Math.floor(b%60);}
 if(!D.practice&&!dbgUsed){award('esc');if(night===1)award('night1');if(monDead&&killWay!=='dawn')award('kill');if(killWay==='truck')award('ram');if(route==='dawn')award('dawn');if(inv.pages>=6)award('pages');if(inv.secret)award('secret');if(route==='nuke')award('nuke');if(route==='true')award('true');if(!heardEver)award('ghost');}
 if(!D.practice&&!dbgUsed)seen[route+(monDead&&killWay!=='dawn'&&route!=='nuke'?'+kill':'')]=1;try{localStorage.setItem('crawler_end',JSON.stringify(seen));}catch(e){}$('winstat').textContent+='  ·  Nights used '+night+'/'+maxN()+'  ·  Endings found '+Object.keys(seen).length+'/9'+(inv.secret?'  ·  Secret letter found':'');
 $('win').style.display='flex';sfx.chime();}

function apparition(){const a=P.yaw+rr(-.6,.6),d=rr(14,20);ghost.position.set(P.x-Math.sin(a)*d,1.15,P.z-Math.cos(a)*d);ghost.visible=true;ghostT=5;sfx.sob();}
const EV=['ghost','ghost','thunder','wail','whisper','musicbox','laugh','sob','scrape','knock','behind','whisper','sob'];
let lastT=performance.now(),menuA=0;
let audT=0,perfA=1/60,perfT=0,perfLv=0;
function setPerf(lv){perfLv=lv;try{renderer.setPixelRatio([1,.85,.72,.6][lv]*(HI?1:.75));renderer.setSize(innerWidth,innerHeight);}catch(e){}if(lv>=2&&GRASS)GRASS.visible=false;if(lv>=3){try{lamp.castShadow=false;if(moon.shadow.map){moon.shadow.map.dispose();moon.shadow.map=null;}moon.shadow.mapSize.set(1024,1024);moon.shadow.needsUpdate=true;}catch(e){}}}
try{const pl=+localStorage.getItem('crawler_perf');if(pl>0&&pl<4)setTimeout(()=>setPerf(Math.min(2,pl)),0);}catch(e){}let FRN=0;let LKH=null;function lookHint(){if(!LKH){LKH=document.createElement('div');LKH.style.cssText='position:fixed;left:50%;top:58%;transform:translateX(-50%);z-index:6;pointer-events:none;color:#e8dcc0;font:15px Georgia;background:rgba(0,0,0,.55);padding:6px 14px;border:1px solid #6a5a40;border-radius:4px;display:none';LKH.textContent='Click the game to look around with your mouse or touchpad';document.body.appendChild(LKH);}const show=mode==='play'&&!isTouch&&document.pointerLockElement!==canvas&&elapsed>7&&!TH.lockF;LKH.style.display=show?'block':'none';}
function frame(now){requestAnimationFrame(frame);try{document.body.classList.toggle('nomsg',!(TUT.on||EZ1));}catch(e){}try{lookHint();}catch(e){}try{sndHint();}catch(e){}FRN++;if(FRN===1||FRN===2||FRN===30)tmk('frame'+FRN);if(lamp.castShadow&&FRN%(perfLv>=2?6:3)===0)lamp.shadow.needsUpdate=true;try{const MS=window.__MS||(window.__MS={x:1e9,z:1e9,t:0});MS.t+=1;if(Math.hypot(P.x-MS.x,P.z-MS.z)>7||MS.t>600){MS.x=P.x;MS.z=P.z;MS.t=0;const ox=Math.round(P.x/2)*2,oz=Math.round(P.z/2)*2;moon.position.set(ox-60,90,oz-45);moon.target.position.set(ox,0,oz);moon.target.updateMatrixWorld();moon.shadow.needsUpdate=true;}}catch(e){}try{updCompass();updQ4dead();}catch(e){}if(actx&&(audT+=1)>45){audT=0;if(actx.state!=='running'&&actx.state!=='closed'){try{actx.resume();}catch(e){}}}const dt=Math.min(.05,(now-lastT)/1000)*(window.__slow||1);lastT=now;
 {const v=17*dt,p=rain.pos;for(let i=0;i<rain.N;i++){p[i*6+1]-=v;p[i*6+4]-=v;if(p[i*6+4]<0){const y=12+R();p[i*6+1]=y;p[i*6+4]=y-.55;}}rain.g.attributes.position.needsUpdate=true;rain.m.position.set(camera.position.x,0,camera.position.z);let ins=false;if(mode==='play')for(const b of BLD)if(P.x>b.x0&&P.x<b.x1&&P.z>b.z0&&P.z<b.z1)ins=true;rain.m.visible=!ins&&!MOD.winter&&WX!=='clear';if(SNOW){SNOW.visible=MOD.winter;if(MOD.winter){const sp=SNOW.geometry.attributes.position,a=sp.array;for(let i=0;i<a.length;i+=3){a[i+1]-=dt*(1.1+(i%7)*.08);a[i]+=Math.sin(elapsed*.7+i)*dt*.3;if(a[i+1]<0)a[i+1]+=12;}sp.needsUpdate=true;SNOW.position.set(Math.round(camera.position.x/4)*4,0,Math.round(camera.position.z/4)*4);}}}
 for(const d of DOORS){d.t+=((d.open?1:0)-d.t)*Math.min(1,dt*6);d.piv.rotation.y=d.ry0+d.delta*d.t;}
 for(const m of mists){m.position.x+=m.userData.v*dt;const dx=m.position.x-P.x,dz=m.position.z-P.z;if(dx>55)m.position.x-=110;if(dx<-55)m.position.x+=110;if(dz>55)m.position.z-=110;if(dz<-55)m.position.z+=110;}
 let any=false;for(let i=0;i<BN;i++){if(bpos[i*3+1]>.03){any=true;bvel[i].y-=9*dt;bpos[i*3]+=bvel[i].x*dt;bpos[i*3+1]+=bvel[i].y*dt;bpos[i*3+2]+=bvel[i].z*dt;if(bpos[i*3+1]<=.03)bpos[i*3+1]=.03;}}if(any)bgeo.attributes.position.needsUpdate=true;
 if(mode==='menu'){menuA+=dt*.05;camera.position.set(Math.sin(menuA)*30,2.2,Math.cos(menuA)*30+6);camera.lookAt(0,1.5,0);mon.position.set(6,0,-4);}
 else if(mode==='play'){elapsed+=dt;recTick(dt);const f=updPlayer(dt);if(mode==='play'){let pd=99;if(monDead)updDeath(dt);else if(!frozen)pd=updMonster(dt);try{if(!monDead&&mode==='play')bodyResolve();}catch(e){}if(mode==='play'){updZombies(dt);updZombieAnims(dt);}if(mode==='play')updVoss(dt);updExtras(dt);updGirl(dt);updWorld(dt);updCat(dt);updAmbient(dt);updPack(dt);updZones(dt);updCreep(dt);updSneak(dt);updScary(dt);updSmart(dt);updQ4(dt);updUG(dt);if(window.__SHOW){const S2=window.__SHOW,t=S2.to?S2.b:S2.a;if(Math.hypot(mon.position.x-t.x,mon.position.z-t.z)<1)S2.to=1-S2.to;M.state=S2.hunt?'hunt':'wander';M.target.set(t.x,0,t.z);M.timer=99;M.pause=0;M.stun=0;M.path=null;M.wind=0;}if(M.state==='wander'&&elapsed>150&&R()<dt*.006&&Math.hypot(mon.position.x-P.x,mon.position.z-P.z)<40)startCreep();try{updFX(dt);}catch(e){if(!window.__fxe){window.__fxe=1;console.error(e);}}{const tm=$('srt');if(tm){tm.style.display=OPT.timer&&mode==='play'?'block':'none';if(OPT.timer){const t=elapsed;tm.textContent=Math.floor(t/60)+':'+String(Math.floor(t%60)).padStart(2,'0')+'.'+Math.floor(t*10%10);}}}updManq(dt);if(M.calm>0)M.calm-=dt;if(f)updAudioPos(f[0],f[1]);
   if(sndT>0&&!monDead&&pd<55){sndT-=dt;const a=Math.atan2(mon.position.x-P.x,mon.position.z-P.z),fa=Math.atan2(-Math.sin(P.yaw),-Math.cos(P.yaw)),e=$('snd');e.style.opacity=Math.min(1,sndT*1.5);e.style.transform='rotate('+(fa-a)+'rad)';}else $('snd').style.opacity=0;
   {const nr=monDead?0:Math.max(0,1-pd/26);if(nr>.55&&!P.hidden){camera.fov=75+Math.sin(elapsed*10)*(nr-.55)*5;camera.updateProjectionMatrix();fovD=true;}else if(fovD){camera.fov=75;camera.updateProjectionMatrix();fovD=false;}}
   if(mode==='play'&&!monDead){const near=Math.max(0,1-pd/26);heartT-=dt;if(near>0&&heartT<=0){sfx.heart(.15+near*.75);heartT=1.15-near*.75;if(near>.35)rumble(near);}
    $('danger').style.opacity=Math.min(.9,near*near*.8+(M.state==='hunt'?.25:0));
    const st=$('state');if(M.stun>0){st.textContent='IT IS HURT';st.style.color='#f84';}else if(M.state==='hunt'){st.textContent='IT HEARD SOMETHING';st.style.color='#f44';}else if(M.state==='search'){st.textContent='IT IS SEARCHING';st.style.color='#e9a13a';}else if(M.state==='ambush'||(M.state==='stalk'&&M.sk===1)){st.textContent='IT HAS GONE QUIET';st.style.color='#b8b';}else if(M.state==='creep'){st.textContent='IT HAS GONE SILENT';st.style.color='#b8b';}else{st.textContent=M.pause>0?'IT IS LISTENING':'IT IS WANDERING';st.style.color='#9a9';}}
   noiseLvl=Math.max(0,noiseLvl-dt*.9);$('noise').style.width=(noiseLvl*100)+'%';$('noise').style.background=thunCover>0?'#4af':'';$('stam').style.width=(P.stam*100)+'%';if(P.stam<.97)HUDS.st=1;if(inv.oil<.8||elapsed>240)HUDS.oil=1;$('stamw').style.display=HUDS.st?'block':'none';$('oilw').style.display=HUDS.oil?'block':'none';
   miniT-=dt;if(miniT<=0){miniT=.25;const mc=$('mini');mc.style.display=inv.map?'block':'none';if(inv.map)drawMap(mc,150,false);}
   updBoxes(dt);updTraps(dt);updItems(dt);if(wispT>0){wispT-=dt;wisp.position.x+=wv.x*dt;wisp.position.z+=wv.z*dt;wisp.position.y=1.2+Math.sin(elapsed*4)*.15;wisp.material.opacity=Math.min(.9,wispT);if(wispT<=0)wisp.visible=false;}
   nukeTick(dt);dawnTick(dt);thoughts();updWatcher(dt);updProps(dt);secrets(dt);objT-=dt;if(objT<=0){objT=.5;const ob=objective();$('obj').textContent=ob;showGoal(ob);}if(!MOD.hardcore&&tipI<TIPS.length&&elapsed>TIPS[tipI][0]){if(msgT<=0)msg(TIPS[tipI][1],5);tipI++;}
   updStorm(dt);eventT-=dt;if(eventT<=0){eventT=rr(12,30);const e=EV[(R()*EV.length)|0];if(e==='thunder'){flashT=.5;thunCover=2.8;if(!monDead){sndT=2.5;if(!TH.l){TH.l=1;msg('The lightning showed you where it is — watch the red mark.',3.5);}}}if(e==='ghost')apparition();else if(late&&R()<.35)sfx.groan(.3,pan());else sfx[e]();}
   if(ghostT>0){ghostT-=dt;if(Math.hypot(ghost.position.x-P.x,ghost.position.z-P.z)<9)ghostT=Math.min(ghostT,.25);ghost.material.opacity=Math.max(0,Math.min(.9,ghostT*4,(5-ghostT)*2));if(ghostT<=0)ghost.visible=false;}
  }}
 else if(mode==='cut')updCut(dt);
 else if(mode==='drive'){elapsed+=dt;updDrive(dt);objT-=dt;if(objT<=0){objT=.5;$('obj').textContent=objective();}}
 else if(mode==='scare'||mode==='tear')updScare(dt);
 else if(mode==='js')updJS(dt);
 else if(mode==='rip')updRip(dt);
 else if(mode==='pdead')updPD(dt);
 else if(mode==='pick')updPick(dt);
 try{const fd=scene.fog&&scene.fog.density?scene.fog.density:.05,fw=Math.max(130,Math.min(700,2.6/fd));if(Math.abs(fw-camera.far)/camera.far>.04){camera.far=fw;camera.updateProjectionMatrix();skyG.scale.setScalar(Math.min(1,fw*.9/520));}}catch(e){}
updFear(dt);updNV(dt);updTut(dt);if(mode==='play'){perfA+=(dt-perfA)*.05;perfT=perfA>1/40?perfT+dt:0;if(perfT>2.5&&perfLv<3){perfT=0;perfA=1/60;setPerf(perfLv+1);try{localStorage.setItem('crawler_perf',String(perfLv));}catch(e){}if(perfLv===1)msg('Lowered the graphics a little to keep the game smooth.',3);}}if((statT+=dt)>10){statT=0;saveStats();}
 if(flashT>0){flashT-=dt;const k=(flashT>.38||(flashT>.12&&flashT<.24))?1:0;hemi.intensity=hemiBase+k*3;$('flash').style.opacity=k*.1;scene.background.copy(SKY).lerp(SKYF,k);if(flashT<=0){hemi.intensity=hemiBase;$('flash').style.opacity=0;scene.background.copy(SKY);}}
 if(msgT>0){msgT-=dt;if(msgT<=0)$('msg').style.opacity=0;}if(capT>0){capT-=dt;if(capT<=0)$('capt').style.opacity=0;}
 skyG.position.set(camera.position.x,0,camera.position.z);if(grassSh)grassSh.uniforms.uT.value=now*.001;
 renderFrame(now);
 if(capture){capture=false;let url='';try{url=canvas.toDataURL('image/jpeg',.8);}catch(e){}doTear(url);}
}
['pointerdown','keydown','touchstart'].forEach(ev=>addEventListener(ev,()=>{if(actx&&actx.state!=='running'&&actx.state!=='closed'){try{actx.resume();}catch(e){}}},true));document.addEventListener('visibilitychange',()=>{if(document.hidden&&mode==='play'){mode='pause';try{$('pause').style.display='flex';}catch(e){}}if(!document.hidden&&actx){try{actx.resume();}catch(e){}}});
tmk('script-end');RNG=Math.random;resetGame();tmk('reset');
try{const A=Math.min(mobile?4:8,renderer.capabilities.getMaxAnisotropy?renderer.capabilities.getMaxAnisotropy():1),seen=new Set();if(A>1)scene.traverse(o=>{const ms=o.material?(Array.isArray(o.material)?o.material:[o.material]):[];for(const m of ms){if(!m||seen.has(m))continue;seen.add(m);for(const k of ['map','normalMap','bumpMap','roughnessMap','emissiveMap']){const t=m[k];if(t&&t.isTexture&&t.anisotropy<A){t.anisotropy=A;t.needsUpdate=true;}}}});}catch(e){}loadZombieModels();initPost();tmk('post');requestAnimationFrame(frame);
};
const VER='v1-'+__boot.toString().length;let done=false;
function saveCache(){try{const r=indexedDB.open('crawler_cache',1);r.onupgradeneeded=()=>{try{r.result.createObjectStore('v');}catch(e){}};r.onsuccess=()=>{try{const tx=r.result.transaction('v','readwrite'),st=tx.objectStore('v');st.clear();st.put(window.__COUT,VER);}catch(e){}};}catch(e){}}
const go=c=>{if(done)return;done=true;__boot(c||null);if(!c&&window.indexedDB)setTimeout(saveCache,5000);};
try{if(!window.indexedDB)throw 0;const r=indexedDB.open('crawler_cache',1);r.onupgradeneeded=()=>{try{r.result.createObjectStore('v');}catch(e){}};r.onerror=()=>go(null);r.onblocked=()=>go(null);
 r.onsuccess=()=>{try{const g=r.result.transaction('v','readonly').objectStore('v').get(VER);g.onsuccess=()=>go(g.result||null);g.onerror=()=>go(null);}catch(e){go(null);}};setTimeout(()=>go(null),1500);}catch(e){go(null);}
})();
