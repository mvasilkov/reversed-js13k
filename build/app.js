'use strict';navigator.userAgent.match(/Android/i)&&(document.body.className+=" and");var d=document.createElement("p");d.style.cssText="pointer-events:auto";"auto"!=d.style.pointerEvents&&(document.body.className+=" nop");d=void 0;"undefined"==typeof requestAnimationFrame&&(["moz","webkit","ms"].some(function(a){a=this[a+"RequestAnimationFrame"];if("function"==typeof a)return requestAnimationFrame=a})||(requestAnimationFrame=function(a){return setTimeout(a,16)}));var f=document.getElementById.bind(document),k=16/9,l,p=1,q=1,r=0,t=0,u=!1,v=f("a"),w=f("b"),x=f("c"),y=f("i"),z=f("p"),A=f("s"),B=f("t");w.width=x.width=960;w.height=x.height=540;
function C(){var a=window.innerWidth,b=window.innerHeight,c;a/b>k?a=b*k:b=a/k;v.style.width=a+"px";v.style.height=b+"px";var e=c=.5*(window.innerWidth-a);v.style.left=e+"px";e=b=.5*(window.innerHeight-b);v.style.top=e+"px";z.style.left=c+"px";z.style.top=b+"px";l=a/960;D();A.style[E]="scale("+l+")translate(600px,240px)";B.style[E]="scale("+l+")translate(40px,160px)"}var E="transform";E in v.style||(E="webkitTransform");
function D(){z.style[E]="scale("+l+")translate("+r+"px,"+(u?t+90:t)+"px)scale("+p+","+(u?-q:q)+")"}C();window.addEventListener("resize",C);window.addEventListener("orientationchange",C);var F=["       xx;       vv;;;;       ^^;       xx".split(";"),";;;;      xxxx;      xxxx;      xxxx".split(";"),"           vv;;;;;;     ^^".split(";"),"   vvvvvv;;;     xxxxxx;;;       ^^^^^^".split(";"),";xxxxx;    x;    x;    x;xxxxx;".split(";")];var G={"▄":"n","▀":"*","█":"Ш","░":"/"};function H(a){var b=document.createElement("span");b.appendChild(document.createTextNode(a));b.className="t";z.appendChild(b);a=b.offsetWidth;z.removeChild(b);return a}for(var aa=H("x"),ba=!1,ca=4;ca--;)if(H("▄▀█░"[ca])!=aa){ba=!0;break}
var I="  █▀▀▀▀▀█   ; ▄█▀▀▀▀▀▀▀▀ ; ▀▀▀▀▀▀▀▀▀▄ ;   ▀▀▀▀▀▀█  ;  ▀▀█▀▀▀█▀  ;  ▀█▀▀▀█▀   ".split(";").map(function(a){return(" ▄▄▄▄▀▀▀▀▀▄ \n█░         █\n█░░  >   < █\n█░░░`  ^  `█\n ▀█░░    █▀ \n o█░░░   █o \n"+a).replace(/./g,function(a){return ba&&G[a]?G[a]:a})}),J=document.createElement("p"),K="";I.forEach(function(a,b){var c=document.createElement("span");c.className="b b"+b;c.appendChild(document.createTextNode(I[b]));J.appendChild(c);K+="p.a"+b+" .b"+b+"{display:block}"});var da=document.createElement("style");
da.appendChild(document.createTextNode(K));document.head.appendChild(da);J.className="a5";z.appendChild(J);p=92/J.clientWidth;q=90/J.clientHeight;r=434;t=225;C();function ea(a){for(var b=4;b--;)a(),L.translate(21,0),L.rotate(.5*Math.PI)}
function ga(){var a=L;a.scale(8,8);a.fillStyle="#fff";ea(function(){a.fillRect(.5,.5,7,7);a.fillRect(8.5,.5,4,3)});a.fillRect(1.5,1.5,18,18);a.fillStyle="#7C7B7C";a.fillRect(2,2,17,17);a.fillStyle="#F9B6C3";a.fillRect(10,2,1,17);a.fillRect(2,10,17,1);a.fillStyle="#E5DDDC";a.beginPath();ea(function(){a.rect(1,1,6,3);a.rect(1,4,5,1);a.rect(1,5,4,1);a.rect(1,6,3,1);a.rect(9,1,3,2);a.rect(8,5,5,4);a.rect(13,6,1,2);a.rect(14,7,1,1)});a.fill();a.fillStyle="#F478A0";a.beginPath();a.rect(7,9,7,2);a.rect(8,
8,2,4);a.rect(11,8,2,4);a.rect(9,10,3,3);a.rect(10,13,1,1);a.fill()};var ha=["xxxxxxxxxxxxxxxx"],F=F.map(function(a){return ia(ha.concat(a).concat(ha))});
function ia(a){function b(a){if(a.a){var b=a.pop();a.push([g,h,b[2]+1])}else a.push([g,h,1]),a.a=!0}var c=[],e=[],g,h;for(h=9;h--;)for(c.a=!1,e.a=!1,g=16;g--;)"x"==a[h][g]?(8!=h&&"x"!=a[h+1][g]?b(c):c.a=!1,0!=h&&"x"!=a[h-1][g]?b(e):e.a=!1):(c.a=!1,e.a=!1);var m=[];for(g=c.length;g--;)m.push(ja(c[g],1));for(g=e.length;g--;)m.push(ja(e[g]));m.sort(function(a,b){return b[0].y-a[0].y});c=[];e=[];for(g=16;g--;)for(c.a=!1,e.a=!1,h=9;h--;)"x"==a[h][g]?(15!=g&&"x"!=a[h][g+1]?b(c):c.a=!1,0!=g&&"x"!=a[h][g-
1]?b(e):e.a=!1):(c.a=!1,e.a=!1);var n=[];for(g=c.length;g--;)n.push(ka(c[g],1));for(g=e.length;g--;)n.push(ka(e[g]));n.sort(function(a,b){return b[0].x-a[0].x});c=[];for(h=9;h--;)for(c.a=!1,g=16;g--;)a[h][g]in{"^":1,v:1}?b(c):c.a=!1;c=c.map(function(a){return{x:60*a[0],y:60*a[1],width:60*a[2],height:60}});return{f:a,p:m,j:n,l:c}}function ja(a,b){var c=60*(a[1]+(0|b));return[{x:60*a[0],y:c},{x:60*(a[0]+a[2]),y:c}]}
function ka(a,b){var c=60*(a[0]+(0|b));return[{x:c,y:60*a[1]},{x:c,y:60*(a[1]+a[2])}]};var M=[{x:"#FFF691",i:"#F7CA77",p:"#F602FD"},{x:"#04FEFE",i:"#04C0FB",p:"#E1FF5F"},{x:"#FF96F2",i:"#FD2AA1",p:"#F6FE48"},{x:"#27DE78",i:"#60FD93",p:"#FE035D"}],N=0,O=M[N];function la(){++N==M.length&&(N=0);O=M[N]};var P=w.getContext("2d"),ma=Q(3),na=Q(6),oa=Q(9);function R(a,b){return~~(Math.random()*(b-a+1))+a}function Q(a){for(var b=[],c=10*(12-a);c--;)b.push({x:R(0,960-a),y:R(60,480-a)});return b}function pa(a){P.clearRect(0,0,960,540);S(ma,3,"#5B8094",a);S(na,6,"#719CB9",2*a);S(oa,9,"#85B3C5",3*a)}function S(a,b,c,e){P.beginPath();for(var g=10*(12-b);g--;){var h=a[g];h.y-=e;60>h.y?(h.x=R(0,960-b),h.y+=540):480<h.y&&(h.x=R(0,960-b),h.y-=540);P.rect(h.x,h.y,b,b)}P.fillStyle=c;P.fill()};var L=x.getContext("2d");
function qa(a){var b,c,e=F[a];L.clearRect(0,0,960,540);L.beginPath();for(b=16;b--;)for(c=9;c--;)"x"==e.f[c][b]&&L.rect(60*b,60*c,60,60);L.fillStyle=O.x;L.fill();L.fillStyle=L.strokeStyle=O.i;a%2?ra():sa();L.beginPath();for(b=16;b--;)for(c=9;c--;)"^"==e.f[c][b]?(L.moveTo(60*b,60*(c+1)),L.lineTo(60*(b+.25),60*c),L.lineTo(60*(b+.5),60*(c+1)),L.lineTo(60*(b+.75),60*c),L.lineTo(60*(b+1),60*(c+1))):"v"==e.f[c][b]&&(L.moveTo(60*b,60*c),L.lineTo(60*(b+.25),60*(c+1)),L.lineTo(60*(b+.5),60*c),L.lineTo(60*(b+
.75),60*(c+1)),L.lineTo(60*(b+1),60*c));L.fillStyle="#FEFDFB";L.fill();L.save();L.beginPath();for(b=16;b--;)for(c=9;c--;)"^"==e.f[c][b]?L.rect(60*b,60*c,60,30):"v"==e.f[c][b]&&L.rect(60*b,60*(c+.5),60,30);L.globalCompositeOperation="source-atop";L.fillStyle="#FE0302";L.fill();L.restore();L.beginPath();e.p.concat(e.j).forEach(function(a){L.moveTo(a[0].x,a[0].y);L.lineTo(a[1].x,a[1].y)});L.lineCap="square";L.lineWidth=2;L.strokeStyle=O.p;L.stroke()}
function ra(){var a=2,b=6.26E-4,c=.5>Math.random()?-.1:.1,e;.5>Math.random()&&(a=4,b=-b);L.save();L.translate(480,270);L.rotate(.5>Math.random()?.5*c:c);L.translate(-480,-270);L.globalCompositeOperation="source-atop";for(c=-10;58>c;++c){L.beginPath();for(e=-10;37>e;++e)L.arc(20*(c+.5),20*(e+.5),a+=b,0,2*Math.PI);L.fill()}L.restore()}
function sa(){var a=10*Math.sqrt(2),b;L.save();L.translate(480,270);L.rotate(.25*(.5>Math.random()?-1:1)*Math.PI);L.translate(-479.5,-269.5);L.globalCompositeOperation="source-atop";L.beginPath();for(b=-960;1920>b;b+=a)L.moveTo(b,-540),L.lineTo(b,1080);L.lineWidth=2;L.stroke();L.restore()}qa(0);function ta(a,b,c,e){return((b.x-a.x)*(c.y-a.y)-(c.x-a.x)*(b.y-a.y))*((b.x-a.x)*(e.y-a.y)-(e.x-a.x)*(b.y-a.y))}function ua(a,b,c){var e;if(!(e=c[0].y<a[0].y==c[0].y<b[0].y)&&(e=0<ta(a[0],b[0],c[0],c[1])&&0<ta(a[1],b[1],c[0],c[1]))){var g=c[0];e=g.x-a[0].x;var g=g.y-a[0].y,h=a[1].x-a[0].x,m=b[0].x-a[0].x,n=b[0].y-a[0].y,fa=h*n-0*m,h=-(0*e-h*g)/fa;e=(e*n-m*g)/fa;e=!(0<=h&&1>=h&&0<=e&&1>=e)}e||(b[0].y=b[1].y=c[0].y+(a[0].y>b[0].y?1:-1),b.b=0,b.h=!0)};function T(){u=!1;return{x:10,y:225,width:92,height:90,g:.1,h:!1,c:4,b:0}}
function U(a){a>=F.length&&(a=F.length-1);qa(va=a);wa=F[a].p;xa=F[a].j;V=F[a].l;if(a==F.length-1){L.save();L.translate(706,314);ga();L.restore();var b;a=Math.min(Math.max(420,690),680);b=Math.min(Math.max(440,710),700);L.beginPath();L.moveTo(420,100);L.lineTo(700,100);L.quadraticCurveTo(740,100,740,140);L.lineTo(740,260);L.quadraticCurveTo(740,300,700,300);L.lineTo(b,300);L.lineTo(700,330);L.lineTo(a,300);L.lineTo(420,300);L.quadraticCurveTo(380,300,380,260);L.lineTo(380,140);L.quadraticCurveTo(380,
100,420,100);L.fillStyle="rgba(229,221,220,0.6)";L.fill();L.lineWidth=2;L.strokeStyle="#fff";L.stroke();L.fillStyle="#101010";L.font="40px 'Segoe UI','Helvetica Neue',sans-serif";L.textAlign="center";L.fillText("You've beat the game,",560,150,320);L.fillText("ASCII person.",560,192,320);L.fillText("But your princess is",560,234,320);L.fillText("in another castle.",560,276,320)}}var W=T(),va,wa,xa,V;U(0);var X;
function ya(){var a=Date.now(),b=a-X;X=a;W.h&&(W.c+=.1*b,4<W.c&&(W.c=4));W.b+=b*W.g;var c;c=0>W.b?[{x:W.x,y:W.y}]:[{x:W.x,y:W.y+W.height}];c.push({x:c[0].x+W.width,y:c[0].y});var e=[{x:c[0].x+W.c,y:c[0].y+W.b}];e.push({x:e[0].x+W.width,y:e[0].y});e.b=W.b;e.h=!1;wa.forEach(function(a){ua(c,e,a)});0>W.b?W.y=e[0].y:W.y=e[0].y-W.height;W.b=e.b;W.h=e.h;c=[{x:W.y,y:W.x+W.width}];c.push({x:c[0].x+W.height,y:c[0].y});e=[{x:c[0].x+W.b,y:c[0].y+W.c}];e.push({x:e[0].x+W.height,y:e[0].y});e.b=W.c;xa.forEach(function(a){a=
[{x:a[0].y,y:a[0].x},{x:a[1].y,y:a[1].x}];ua(c,e,a)});W.x=e[0].y-W.width;W.c=e.b;J.className="a"+(a>>>6)%I.length;return b}var Y=!1;function za(){var a=Date.now(),b=a-X;X=a;Y||(requestAnimationFrame(za),pa(b*W.g))}X=Date.now();requestAnimationFrame(za);function Aa(){requestAnimationFrame(Aa);940<W.x+W.width&&(W=T(),la(),U(va+1));for(var a=V.length;a--;){var b=V[a],c=W;if(c.x<b.x+b.width&&c.x+c.width>b.x&&c.y<b.y+b.height&&c.height+c.y>b.y){W=T();break}}pa(ya()*W.g);r=W.x;t=W.y;D()}
function Ba(a){a.preventDefault();Y||(Y=!0,A.style.display=B.style.display="none",y.style.pointerEvents="auto",W=T(),la(),U(1),X=Date.now(),requestAnimationFrame(Aa))}A.addEventListener("click",Ba);A.addEventListener("touchstart",Ba);function Z(a){a.preventDefault();W.g=-W.g;u=!u}document.body.addEventListener("keyup",function(a){32!=a.which&&32!=a.keyCode||Z(a)});y.addEventListener("click",Z);y.addEventListener("touchstart",Z);
