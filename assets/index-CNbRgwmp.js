var wT=Object.defineProperty;var ST=(t,e,n)=>e in t?wT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var kv=(t,e,n)=>ST(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bg="169",Fa={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},MT=0,Fv=1,ET=2,T1=1,TT=2,er=3,fr=0,Rn=1,Ii=2,qr=0,Ba=1,Bv=2,zv=3,Hv=4,CT=5,bs=100,AT=101,bT=102,RT=103,PT=104,LT=200,IT=201,NT=202,DT=203,dp=204,pp=205,UT=206,OT=207,kT=208,FT=209,BT=210,zT=211,HT=212,VT=213,GT=214,mp=0,gp=1,vp=2,Qa=3,_p=4,yp=5,xp=6,wp=7,C1=0,WT=1,XT=2,Zr=0,jT=1,$T=2,YT=3,KT=4,qT=5,ZT=6,JT=7,Vv="attached",QT="detached",A1=300,eo=301,to=302,Sp=303,Mp=304,Hh=306,no=1e3,Gr=1001,eh=1002,vn=1003,b1=1004,nl=1005,Cn=1006,Eu=1007,or=1008,dr=1009,R1=1010,P1=1011,Ll=1012,Rg=1013,Vs=1014,wi=1015,ac=1016,Pg=1017,Lg=1018,io=1020,L1=35902,I1=1021,N1=1022,ti=1023,D1=1024,U1=1025,za=1026,ro=1027,Ig=1028,Ng=1029,O1=1030,Dg=1031,Ug=1033,Tu=33776,Cu=33777,Au=33778,bu=33779,Ep=35840,Tp=35841,Cp=35842,Ap=35843,bp=36196,Rp=37492,Pp=37496,Lp=37808,Ip=37809,Np=37810,Dp=37811,Up=37812,Op=37813,kp=37814,Fp=37815,Bp=37816,zp=37817,Hp=37818,Vp=37819,Gp=37820,Wp=37821,Ru=36492,Xp=36494,jp=36495,k1=36283,$p=36284,Yp=36285,Kp=36286,Il=2300,Nl=2301,Df=2302,Gv=2400,Wv=2401,Xv=2402,eC=2500,tC=0,F1=1,qp=2,nC=3200,iC=3201,B1=0,rC=1,zr="",mn="srgb",en="srgb-linear",Og="display-p3",Vh="display-p3-linear",th="linear",_t="srgb",nh="rec709",ih="p3",ia=7680,jv=519,sC=512,aC=513,oC=514,z1=515,lC=516,cC=517,uC=518,hC=519,Zp=35044,$v="300 es",lr=2e3,rh=2001;class Qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yv=1234567;const hl=Math.PI/180,so=180/Math.PI;function ii(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[t&255]+nn[t>>8&255]+nn[t>>16&255]+nn[t>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function zt(t,e,n){return Math.max(e,Math.min(n,t))}function kg(t,e){return(t%e+e)%e}function fC(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function dC(t,e,n){return t!==e?(n-t)/(e-t):0}function fl(t,e,n){return(1-n)*t+n*e}function pC(t,e,n,i){return fl(t,e,1-Math.exp(-n*i))}function mC(t,e=1){return e-Math.abs(kg(t,e*2)-e)}function gC(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function vC(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function _C(t,e){return t+Math.floor(Math.random()*(e-t+1))}function yC(t,e){return t+Math.random()*(e-t)}function xC(t){return t*(.5-Math.random())}function wC(t){t!==void 0&&(Yv=t);let e=Yv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function SC(t){return t*hl}function MC(t){return t*so}function EC(t){return(t&t-1)===0&&t!==0}function TC(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function CC(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function AC(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),f=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":t.set(o*u,l*h,l*f,o*c);break;case"YZY":t.set(l*f,o*u,l*h,o*c);break;case"ZXZ":t.set(l*h,l*f,o*u,o*c);break;case"XZX":t.set(o*u,l*g,l*p,o*c);break;case"YXY":t.set(l*p,o*u,l*g,o*c);break;case"ZYZ":t.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function yi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ot(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const H1={DEG2RAD:hl,RAD2DEG:so,generateUUID:ii,clamp:zt,euclideanModulo:kg,mapLinear:fC,inverseLerp:dC,lerp:fl,damp:pC,pingpong:mC,smoothstep:gC,smootherstep:vC,randInt:_C,randFloat:yC,randFloatSpread:xC,seededRandom:wC,degToRad:SC,radToDeg:MC,isPowerOfTwo:EC,ceilPowerOfTwo:TC,floorPowerOfTwo:CC,setQuaternionFromProperEuler:AC,normalize:ot,denormalize:yi};class ce{constructor(e=0,n=0){ce.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,n,i,r,s,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],y=r[0],m=r[3],d=r[6],_=r[1],v=r[4],x=r[7],A=r[2],C=r[5],M=r[8];return s[0]=a*y+o*_+l*A,s[3]=a*m+o*v+l*C,s[6]=a*d+o*x+l*M,s[1]=c*y+u*_+h*A,s[4]=c*m+u*v+h*C,s[7]=c*d+u*x+h*M,s[2]=f*y+p*_+g*A,s[5]=f*m+p*v+g*C,s[8]=f*d+p*x+g*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,p=c*s-a*l,g=n*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=h*y,e[1]=(r*c-u*i)*y,e[2]=(o*i-r*a)*y,e[3]=f*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Uf.makeScale(e,n)),this}rotate(e){return this.premultiply(Uf.makeRotation(-e)),this}translate(e,n){return this.premultiply(Uf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uf=new ze;function V1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Dl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function bC(){const t=Dl("canvas");return t.style.display="block",t}const Kv={};function Pu(t){t in Kv||(Kv[t]=!0,console.warn(t))}function RC(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function PC(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function LC(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qv=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zv=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fo={[en]:{transfer:th,primaries:nh,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[mn]:{transfer:_t,primaries:nh,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Vh]:{transfer:th,primaries:ih,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Zv),fromReference:t=>t.applyMatrix3(qv)},[Og]:{transfer:_t,primaries:ih,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Zv),fromReference:t=>t.applyMatrix3(qv).convertLinearToSRGB()}},IC=new Set([en,Vh]),et={enabled:!0,_workingColorSpace:en,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!IC.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Fo[e].toReference,r=Fo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Fo[t].primaries},getTransfer:function(t){return t===zr?th:Fo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Fo[e].luminanceCoefficients)}};function Ha(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Of(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ra;class NC{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ra===void 0&&(ra=Dl("canvas")),ra.width=e.width,ra.height=e.height;const i=ra.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ra}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Dl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ha(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ha(n[i]/255)*255):n[i]=Ha(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let DC=0;class G1{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:DC++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(kf(r[a].image)):s.push(kf(r[a]))}else s=kf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function kf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?NC.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let UC=0;class Vt extends Qs{constructor(e=Vt.DEFAULT_IMAGE,n=Vt.DEFAULT_MAPPING,i=Gr,r=Gr,s=Cn,a=or,o=ti,l=dr,c=Vt.DEFAULT_ANISOTROPY,u=zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UC++}),this.uuid=ii(),this.name="",this.source=new G1(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==A1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case no:e.x=e.x-Math.floor(e.x);break;case Gr:e.x=e.x<0?0:1;break;case eh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case no:e.y=e.y-Math.floor(e.y);break;case Gr:e.y=e.y<0?0:1;break;case eh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=A1;Vt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,n=0,i=0,r=1){nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,x=(p+1)/2,A=(d+1)/2,C=(u+f)/4,M=(h+y)/4,R=(g+m)/4;return v>x&&v>A?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=M/i):x>A?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=C/r,s=R/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=M/s,r=R/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-y)/_,this.z=(f-u)/_,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class OC extends Qs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new nt(0,0,e,n),this.scissorTest=!1,this.viewport=new nt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Vt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new G1(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gs extends OC{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class W1 extends Vt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kC extends Vt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Ti=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[a+0],p=s[a+1],g=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(o===1){e[n+0]=f,e[n+1]=p,e[n+2]=g,e[n+3]=y;return}if(h!==y||l!==f||c!==p||u!==g){let m=1-o;const d=l*f+c*p+u*g+h*y,_=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const A=Math.sqrt(v),C=Math.atan2(A,d*_);m=Math.sin(m*C)/A,o=Math.sin(o*C)/A}const x=o*_;if(l=l*m+f*x,c=c*m+p*x,u=u*m+g*x,h=h*m+y*x,m===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[n]=o*g+u*h+l*p-c*f,e[n+1]=l*g+u*f+c*h-o*p,e[n+2]=c*g+u*p+o*f-l*h,e[n+3]=u*g-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],h=n[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class X1{constructor(e=0,n=0,i=0){X1.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Jv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Jv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ff.copy(this).projectOnVector(e),this.sub(Ff)}reflect(e){return this.sub(Ff.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const Ff=new P,Jv=new Ti;class wr{constructor(e=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(fi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(fi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=fi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fi):fi.fromBufferAttribute(s,a),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ec.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ec.copy(i.boundingBox)),Ec.applyMatrix4(e.matrixWorld),this.union(Ec)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),Tc.subVectors(this.max,Bo),sa.subVectors(e.a,Bo),aa.subVectors(e.b,Bo),oa.subVectors(e.c,Bo),Cr.subVectors(aa,sa),Ar.subVectors(oa,aa),gs.subVectors(sa,oa);let n=[0,-Cr.z,Cr.y,0,-Ar.z,Ar.y,0,-gs.z,gs.y,Cr.z,0,-Cr.x,Ar.z,0,-Ar.x,gs.z,0,-gs.x,-Cr.y,Cr.x,0,-Ar.y,Ar.x,0,-gs.y,gs.x,0];return!Bf(n,sa,aa,oa,Tc)||(n=[1,0,0,0,1,0,0,0,1],!Bf(n,sa,aa,oa,Tc))?!1:(Cc.crossVectors(Cr,Ar),n=[Cc.x,Cc.y,Cc.z],Bf(n,sa,aa,oa,Tc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $i=[new P,new P,new P,new P,new P,new P,new P,new P],fi=new P,Ec=new wr,sa=new P,aa=new P,oa=new P,Cr=new P,Ar=new P,gs=new P,Bo=new P,Tc=new P,Cc=new P,vs=new P;function Bf(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){vs.fromArray(t,s);const o=r.x*Math.abs(vs.x)+r.y*Math.abs(vs.y)+r.z*Math.abs(vs.z),l=e.dot(vs),c=n.dot(vs),u=i.dot(vs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const FC=new wr,zo=new P,zf=new P;class Vi{constructor(e=new P,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):FC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const n=zo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(zo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(zf)),this.expandByPoint(zo.copy(e.center).sub(zf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yi=new P,Hf=new P,Ac=new P,br=new P,Vf=new P,bc=new P,Gf=new P;class bo{constructor(e=new P,n=new P(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Yi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,n),Yi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Hf.copy(e).add(n).multiplyScalar(.5),Ac.copy(n).sub(e).normalize(),br.copy(this.origin).sub(Hf);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ac),o=br.dot(this.direction),l=-br.dot(Ac),c=br.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const y=1/u;h*=y,f*=y,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Hf).addScaledVector(Ac,f),p}intersectSphere(e,n){Yi.subVectors(e.center,this.origin);const i=Yi.dot(this.direction),r=Yi.dot(Yi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,n,i,r,s){Vf.subVectors(n,e),bc.subVectors(i,e),Gf.crossVectors(Vf,bc);let a=this.direction.dot(Gf),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;br.subVectors(this.origin,e);const l=o*this.direction.dot(bc.crossVectors(br,bc));if(l<0)return null;const c=o*this.direction.dot(Vf.cross(br));if(c<0||l+c>a)return null;const u=-o*br.dot(Gf);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(e,n,i,r,s,a,o,l,c,u,h,f,p,g,y,m){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,h,f,p,g,y,m)}set(e,n,i,r,s,a,o,l,c,u,h,f,p,g,y,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/la.setFromMatrixColumn(e,0).length(),s=1/la.setFromMatrixColumn(e,1).length(),a=1/la.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*h,g=o*u,y=o*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+g*c,n[5]=f-y*c,n[9]=-o*l,n[2]=y-f*c,n[6]=g+p*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,y=c*h;n[0]=f+y*o,n[4]=g*o-p,n[8]=a*c,n[1]=a*h,n[5]=a*u,n[9]=-o,n[2]=p*o-g,n[6]=y+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,y=c*h;n[0]=f-y*o,n[4]=-a*h,n[8]=g+p*o,n[1]=p+g*o,n[5]=a*u,n[9]=y-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*h,g=o*u,y=o*h;n[0]=l*u,n[4]=g*c-p,n[8]=f*c+y,n[1]=l*h,n[5]=y*c+f,n[9]=p*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,y=o*c;n[0]=l*u,n[4]=y-f*h,n[8]=g*h+p,n[1]=h,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*h+g,n[10]=f-y*h}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,y=o*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=f*h+y,n[5]=a*u,n[9]=p*h-g,n[2]=g*h-p,n[6]=o*u,n[10]=y*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BC,e,zC)}lookAt(e,n,i){const r=this.elements;return On.subVectors(e,n),On.lengthSq()===0&&(On.z=1),On.normalize(),Rr.crossVectors(i,On),Rr.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Rr.crossVectors(i,On)),Rr.normalize(),Rc.crossVectors(On,Rr),r[0]=Rr.x,r[4]=Rc.x,r[8]=On.x,r[1]=Rr.y,r[5]=Rc.y,r[9]=On.y,r[2]=Rr.z,r[6]=Rc.z,r[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],y=i[6],m=i[10],d=i[14],_=i[3],v=i[7],x=i[11],A=i[15],C=r[0],M=r[4],R=r[8],H=r[12],w=r[1],T=r[5],G=r[9],B=r[13],X=r[2],J=r[6],z=r[10],te=r[14],I=r[3],j=r[7],K=r[11],ne=r[15];return s[0]=a*C+o*w+l*X+c*I,s[4]=a*M+o*T+l*J+c*j,s[8]=a*R+o*G+l*z+c*K,s[12]=a*H+o*B+l*te+c*ne,s[1]=u*C+h*w+f*X+p*I,s[5]=u*M+h*T+f*J+p*j,s[9]=u*R+h*G+f*z+p*K,s[13]=u*H+h*B+f*te+p*ne,s[2]=g*C+y*w+m*X+d*I,s[6]=g*M+y*T+m*J+d*j,s[10]=g*R+y*G+m*z+d*K,s[14]=g*H+y*B+m*te+d*ne,s[3]=_*C+v*w+x*X+A*I,s[7]=_*M+v*T+x*J+A*j,s[11]=_*R+v*G+x*z+A*K,s[15]=_*H+v*B+x*te+A*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],y=e[7],m=e[11],d=e[15];return g*(+s*l*h-r*c*h-s*o*f+i*c*f+r*o*p-i*l*p)+y*(+n*l*p-n*c*f+s*a*f-r*a*p+r*c*u-s*l*u)+m*(+n*c*h-n*o*p-s*a*h+i*a*p+s*o*u-i*c*u)+d*(-r*o*u-n*l*h+n*o*f+r*a*h-i*a*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],y=e[13],m=e[14],d=e[15],_=h*m*c-y*f*c+y*l*p-o*m*p-h*l*d+o*f*d,v=g*f*c-u*m*c-g*l*p+a*m*p+u*l*d-a*f*d,x=u*y*c-g*h*c+g*o*p-a*y*p-u*o*d+a*h*d,A=g*h*l-u*y*l-g*o*f+a*y*f+u*o*m-a*h*m,C=n*_+i*v+r*x+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/C;return e[0]=_*M,e[1]=(y*f*s-h*m*s-y*r*p+i*m*p+h*r*d-i*f*d)*M,e[2]=(o*m*s-y*l*s+y*r*c-i*m*c-o*r*d+i*l*d)*M,e[3]=(h*l*s-o*f*s-h*r*c+i*f*c+o*r*p-i*l*p)*M,e[4]=v*M,e[5]=(u*m*s-g*f*s+g*r*p-n*m*p-u*r*d+n*f*d)*M,e[6]=(g*l*s-a*m*s-g*r*c+n*m*c+a*r*d-n*l*d)*M,e[7]=(a*f*s-u*l*s+u*r*c-n*f*c-a*r*p+n*l*p)*M,e[8]=x*M,e[9]=(g*h*s-u*y*s-g*i*p+n*y*p+u*i*d-n*h*d)*M,e[10]=(a*y*s-g*o*s+g*i*c-n*y*c-a*i*d+n*o*d)*M,e[11]=(u*o*s-a*h*s-u*i*c+n*h*c+a*i*p-n*o*p)*M,e[12]=A*M,e[13]=(u*y*r-g*h*r+g*i*f-n*y*f-u*i*m+n*h*m)*M,e[14]=(g*o*r-a*y*r-g*i*l+n*y*l+a*i*m-n*o*m)*M,e[15]=(a*h*r-u*o*r+u*i*l-n*h*l-a*i*f+n*o*f)*M,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,h=o+o,f=s*c,p=s*u,g=s*h,y=a*u,m=a*h,d=o*h,_=l*c,v=l*u,x=l*h,A=i.x,C=i.y,M=i.z;return r[0]=(1-(y+d))*A,r[1]=(p+x)*A,r[2]=(g-v)*A,r[3]=0,r[4]=(p-x)*C,r[5]=(1-(f+d))*C,r[6]=(m+_)*C,r[7]=0,r[8]=(g+v)*M,r[9]=(m-_)*M,r[10]=(1-(f+y))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=la.set(r[0],r[1],r[2]).length();const a=la.set(r[4],r[5],r[6]).length(),o=la.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],di.copy(this);const c=1/s,u=1/a,h=1/o;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=u,di.elements[5]*=u,di.elements[6]*=u,di.elements[8]*=h,di.elements[9]*=h,di.elements[10]*=h,n.setFromRotationMatrix(di),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=lr){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let p,g;if(o===lr)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===rh)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=lr){const l=this.elements,c=1/(n-e),u=1/(i-r),h=1/(a-s),f=(n+e)*c,p=(i+r)*u;let g,y;if(o===lr)g=(a+s)*h,y=-2*h;else if(o===rh)g=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const la=new P,di=new De,BC=new P(0,0,0),zC=new P(1,1,1),Rr=new P,Rc=new P,On=new P,Qv=new De,e_=new Ti;class Bi{constructor(e=0,n=0,i=0,r=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Qv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return e_.setFromEuler(this),this.setFromQuaternion(e_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";let Fg=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},HC=0;const t_=new P,ca=new Ti,Ki=new De,Pc=new P,Ho=new P,VC=new P,GC=new Ti,n_=new P(1,0,0),i_=new P(0,1,0),r_=new P(0,0,1),s_={type:"added"},WC={type:"removed"},ua={type:"childadded",child:null},Wf={type:"childremoved",child:null};class ht extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HC++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new P,n=new Bi,i=new Ti,r=new P(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new De},normalMatrix:{value:new ze}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ca.setFromAxisAngle(e,n),this.quaternion.multiply(ca),this}rotateOnWorldAxis(e,n){return ca.setFromAxisAngle(e,n),this.quaternion.premultiply(ca),this}rotateX(e){return this.rotateOnAxis(n_,e)}rotateY(e){return this.rotateOnAxis(i_,e)}rotateZ(e){return this.rotateOnAxis(r_,e)}translateOnAxis(e,n){return t_.copy(e).applyQuaternion(this.quaternion),this.position.add(t_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(n_,e)}translateY(e){return this.translateOnAxis(i_,e)}translateZ(e){return this.translateOnAxis(r_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Pc.copy(e):Pc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Ho,Pc,this.up):Ki.lookAt(Pc,Ho,this.up),this.quaternion.setFromRotationMatrix(Ki),r&&(Ki.extractRotation(r.matrixWorld),ca.setFromRotationMatrix(Ki),this.quaternion.premultiply(ca.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(s_),ua.child=e,this.dispatchEvent(ua),ua.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(WC),Wf.child=e,this.dispatchEvent(Wf),Wf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(s_),ua.child=e,this.dispatchEvent(ua),ua.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,VC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,GC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ht.DEFAULT_UP=new P(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new P,qi=new P,Xf=new P,Zi=new P,ha=new P,fa=new P,a_=new P,jf=new P,$f=new P,Yf=new P,Kf=new nt,qf=new nt,Zf=new nt;class xi{constructor(e=new P,n=new P,i=new P){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),pi.subVectors(e,n),r.cross(pi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){pi.subVectors(r,n),qi.subVectors(i,n),Xf.subVectors(e,n);const a=pi.dot(pi),o=pi.dot(qi),l=pi.dot(Xf),c=qi.dot(qi),u=qi.dot(Xf),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zi.x),l.addScaledVector(a,Zi.y),l.addScaledVector(o,Zi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Kf.setScalar(0),qf.setScalar(0),Zf.setScalar(0),Kf.fromBufferAttribute(e,n),qf.fromBufferAttribute(e,i),Zf.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Kf,s.x),a.addScaledVector(qf,s.y),a.addScaledVector(Zf,s.z),a}static isFrontFacing(e,n,i,r){return pi.subVectors(i,n),qi.subVectors(e,n),pi.cross(qi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),pi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return xi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return xi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;ha.subVectors(r,i),fa.subVectors(s,i),jf.subVectors(e,i);const l=ha.dot(jf),c=fa.dot(jf);if(l<=0&&c<=0)return n.copy(i);$f.subVectors(e,r);const u=ha.dot($f),h=fa.dot($f);if(u>=0&&h<=u)return n.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(ha,a);Yf.subVectors(e,s);const p=ha.dot(Yf),g=fa.dot(Yf);if(g>=0&&p<=g)return n.copy(s);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(fa,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return a_.subVectors(s,r),o=(h-u)/(h-u+(p-g)),n.copy(r).addScaledVector(a_,o);const d=1/(m+y+f);return a=y*d,o=f*d,n.copy(i).addScaledVector(ha,a).addScaledVector(fa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const j1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function Jf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Re{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=kg(e,1),n=zt(n,0,1),i=zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Jf(a,s,e+1/3),this.g=Jf(a,s,e),this.b=Jf(a,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=mn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=mn){const i=j1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ha(e.r),this.g=Ha(e.g),this.b=Ha(e.b),this}copyLinearToSRGB(e){return this.r=Of(e.r),this.g=Of(e.g),this.b=Of(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return et.fromWorkingColorSpace(rn.copy(this),e),Math.round(zt(rn.r*255,0,255))*65536+Math.round(zt(rn.g*255,0,255))*256+Math.round(zt(rn.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(rn.copy(this),n);const i=rn.r,r=rn.g,s=rn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=mn){et.fromWorkingColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,r=rn.b;return e!==mn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Pr),this.setHSL(Pr.h+e,Pr.s+n,Pr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Pr),e.getHSL(Lc);const i=fl(Pr.h,Lc.h,n),r=fl(Pr.s,Lc.s,n),s=fl(Pr.l,Lc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new Re;Re.NAMES=j1;let XC=0;class Oi extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XC++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=Ba,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dp,this.blendDst=pp,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Qa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ia,this.stencilZFail=ia,this.stencilZPass=ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ba&&(i.blending=this.blending),this.side!==fr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dp&&(i.blendSrc=this.blendSrc),this.blendDst!==pp&&(i.blendDst=this.blendDst),this.blendEquation!==bs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ia&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ia&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ia&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wr extends Oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=C1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new P,Ic=new ce;class cn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Zp,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ic.fromBufferAttribute(this,n),Ic.applyMatrix3(e),this.setXY(n,Ic.x,Ic.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=yi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=yi(n,this.array)),n}setX(e,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=yi(n,this.array)),n}setY(e,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=yi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=yi(n,this.array)),n}setW(e,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ot(n,this.array),i=ot(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zp&&(e.usage=this.usage),e}}class $1 extends cn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Y1 extends cn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ri extends cn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let jC=0;const Zn=new De,Qf=new ht,da=new P,kn=new wr,Vo=new wr,Xt=new P;class ui extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jC++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(V1(e)?Y1:$1)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,n,i){return Zn.makeTranslation(e,n,i),this.applyMatrix4(Zn),this}scale(e,n,i){return Zn.makeScale(e,n,i),this.applyMatrix4(Zn),this}lookAt(e){return Qf.lookAt(e),Qf.updateMatrix(),this.applyMatrix4(Qf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(da).negate(),this.translate(da.x,da.y,da.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ri(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];kn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Vo.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(kn.min,Vo.min),kn.expandByPoint(Xt),Xt.addVectors(kn.max,Vo.max),kn.expandByPoint(Xt)):(kn.expandByPoint(Vo.min),kn.expandByPoint(Vo.max))}kn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Xt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Xt.fromBufferAttribute(o,c),l&&(da.fromBufferAttribute(e,c),Xt.add(da)),r=Math.max(r,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new P,l[R]=new P;const c=new P,u=new P,h=new P,f=new ce,p=new ce,g=new ce,y=new P,m=new P;function d(R,H,w){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,H),h.fromBufferAttribute(i,w),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,H),g.fromBufferAttribute(s,w),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const T=1/(p.x*g.y-g.x*p.y);isFinite(T)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(T),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(T),o[R].add(y),o[H].add(y),o[w].add(y),l[R].add(m),l[H].add(m),l[w].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,H=_.length;R<H;++R){const w=_[R],T=w.start,G=w.count;for(let B=T,X=T+G;B<X;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const v=new P,x=new P,A=new P,C=new P;function M(R){A.fromBufferAttribute(r,R),C.copy(A);const H=o[R];v.copy(H),v.sub(A.multiplyScalar(A.dot(H))).normalize(),x.crossVectors(C,H);const T=x.dot(l[R])<0?-1:1;a.setXYZW(R,v.x,v.y,v.z,T)}for(let R=0,H=_.length;R<H;++R){const w=_[R],T=w.start,G=w.count;for(let B=T,X=T+G;B<X;B+=3)M(e.getX(B+0)),M(e.getX(B+1)),M(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new P,s=new P,a=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Xt.fromBufferAttribute(e,n),Xt.normalize(),e.setXYZ(n,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new cn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ui,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const o_=new De,_s=new bo,Nc=new Vi,l_=new P,Dc=new P,Uc=new P,Oc=new P,ed=new P,kc=new P,c_=new P,Fc=new P;class _n extends ht{constructor(e=new ui,n=new Wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){kc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(ed.fromBufferAttribute(h,e),a?kc.addScaledVector(ed,u):kc.addScaledVector(ed.sub(n),u))}n.add(kc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nc.copy(i.boundingSphere),Nc.applyMatrix4(s),_s.copy(e.ray).recast(e.near),!(Nc.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Nc,l_)===null||_s.origin.distanceToSquared(l_)>(e.far-e.near)**2))&&(o_.copy(s).invert(),_s.copy(e.ray).applyMatrix4(o_),!(i.boundingBox!==null&&_s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,_s)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){const m=f[g],d=a[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,A=v;x<A;x+=3){const C=o.getX(x),M=o.getX(x+1),R=o.getX(x+2);r=Bc(this,d,e,i,c,u,h,C,M,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){const _=o.getX(m),v=o.getX(m+1),x=o.getX(m+2);r=Bc(this,a,e,i,c,u,h,_,v,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){const m=f[g],d=a[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,A=v;x<A;x+=3){const C=x,M=x+1,R=x+2;r=Bc(this,d,e,i,c,u,h,C,M,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){const _=m,v=m+1,x=m+2;r=Bc(this,a,e,i,c,u,h,_,v,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function $C(t,e,n,i,r,s,a,o){let l;if(e.side===Rn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===fr,o),l===null)return null;Fc.copy(o),Fc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Fc);return c<n.near||c>n.far?null:{distance:c,point:Fc.clone(),object:t}}function Bc(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Dc),t.getVertexPosition(l,Uc),t.getVertexPosition(c,Oc);const u=$C(t,e,n,i,Dc,Uc,Oc,c_);if(u){const h=new P;xi.getBarycoord(c_,Dc,Uc,Oc,h),r&&(u.uv=xi.getInterpolatedAttribute(r,o,l,c,h,new ce)),s&&(u.uv1=xi.getInterpolatedAttribute(s,o,l,c,h,new ce)),a&&(u.normal=xi.getInterpolatedAttribute(a,o,l,c,h,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new P,materialIndex:0};xi.getNormal(Dc,Uc,Oc,f.normal),u.face=f,u.barycoord=h}return u}class oc extends ui{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ri(c,3)),this.setAttribute("normal",new ri(u,3)),this.setAttribute("uv",new ri(h,2));function g(y,m,d,_,v,x,A,C,M,R,H){const w=x/M,T=A/R,G=x/2,B=A/2,X=C/2,J=M+1,z=R+1;let te=0,I=0;const j=new P;for(let K=0;K<z;K++){const ne=K*T-B;for(let xe=0;xe<J;xe++){const He=xe*w-G;j[y]=He*_,j[m]=ne*v,j[d]=X,c.push(j.x,j.y,j.z),j[y]=0,j[m]=0,j[d]=C>0?1:-1,u.push(j.x,j.y,j.z),h.push(xe/M),h.push(1-K/R),te+=1}}for(let K=0;K<R;K++)for(let ne=0;ne<M;ne++){const xe=f+ne+J*K,He=f+ne+J*(K+1),W=f+(ne+1)+J*(K+1),Z=f+(ne+1)+J*K;l.push(xe,He,Z),l.push(He,W,Z),I+=6}o.addGroup(p,I,H),p+=I,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ao(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function fn(t){const e={};for(let n=0;n<t.length;n++){const i=ao(t[n]);for(const r in i)e[r]=i[r]}return e}function YC(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function K1(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const KC={clone:ao,merge:fn};var qC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pr extends Oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qC,this.fragmentShader=ZC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=YC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class q1 extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=lr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Lr=new P,u_=new ce,h_=new ce;class gn extends q1{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=so*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return so*2*Math.atan(Math.tan(hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z),Lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z)}getViewSize(e,n){return this.getViewBounds(e,u_,h_),n.subVectors(h_,u_)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(hl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const pa=-90,ma=1;class JC extends ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(pa,ma,e,n);r.layers=this.layers,this.add(r);const s=new gn(pa,ma,e,n);s.layers=this.layers,this.add(s);const a=new gn(pa,ma,e,n);a.layers=this.layers,this.add(a);const o=new gn(pa,ma,e,n);o.layers=this.layers,this.add(o);const l=new gn(pa,ma,e,n);l.layers=this.layers,this.add(l);const c=new gn(pa,ma,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===lr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rh)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Z1 extends Vt{constructor(e,n,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:eo,super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class QC extends Gs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Z1(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new oc(5,5,5),s=new pr({name:"CubemapFromEquirect",uniforms:ao(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:qr});s.uniforms.tEquirect.value=n;const a=new _n(r,s),o=n.minFilter;return n.minFilter===or&&(n.minFilter=Cn),new JC(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const td=new P,eA=new P,tA=new ze;class rr{constructor(e=new P(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=td.subVectors(i,n).cross(eA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(td),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||tA.getNormalMatrix(e),r=this.coplanarPoint(td).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new Vi,zc=new P;class Bg{constructor(e=new rr,n=new rr,i=new rr,r=new rr,s=new rr,a=new rr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=lr){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],g=r[9],y=r[10],m=r[11],d=r[12],_=r[13],v=r[14],x=r[15];if(i[0].setComponents(l-s,f-c,m-p,x-d).normalize(),i[1].setComponents(l+s,f+c,m+p,x+d).normalize(),i[2].setComponents(l+a,f+u,m+g,x+_).normalize(),i[3].setComponents(l-a,f-u,m-g,x-_).normalize(),i[4].setComponents(l-o,f-h,m-y,x-v).normalize(),n===lr)i[5].setComponents(l+o,f+h,m+y,x+v).normalize();else if(n===rh)i[5].setComponents(o,h,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){return ys.center.set(0,0,0),ys.radius=.7071067811865476,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(zc.x=r.normal.x>0?e.max.x:e.min.x,zc.y=r.normal.y>0?e.max.y:e.min.y,zc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function J1(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function nA(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],y=h[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,h[f]=y)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const y=h[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class lc extends ui{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,f=n/l,p=[],g=[],y=[],m=[];for(let d=0;d<u;d++){const _=d*f-a;for(let v=0;v<c;v++){const x=v*h-s;g.push(x,-_,0),y.push(0,0,1),m.push(v/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<o;_++){const v=_+c*d,x=_+c*(d+1),A=_+1+c*(d+1),C=_+1+c*d;p.push(v,x,C),p.push(x,A,C)}this.setIndex(p),this.setAttribute("position",new ri(g,3)),this.setAttribute("normal",new ri(y,3)),this.setAttribute("uv",new ri(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.width,e.height,e.widthSegments,e.heightSegments)}}var iA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_A=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,MA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,EA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,TA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,CA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,AA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,RA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NA="gl_FragColor = linearToOutputTexel( gl_FragColor );",DA=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,OA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,FA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,XA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$A=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,KA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ib=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ab=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ob=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ub=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,db=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_b=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ab=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ib=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Db=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ub=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ob=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Bb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$b=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,uR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_R=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,MR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ER=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,AR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,LR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,DR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:iA,alphahash_pars_fragment:rA,alphamap_fragment:sA,alphamap_pars_fragment:aA,alphatest_fragment:oA,alphatest_pars_fragment:lA,aomap_fragment:cA,aomap_pars_fragment:uA,batching_pars_vertex:hA,batching_vertex:fA,begin_vertex:dA,beginnormal_vertex:pA,bsdfs:mA,iridescence_fragment:gA,bumpmap_pars_fragment:vA,clipping_planes_fragment:_A,clipping_planes_pars_fragment:yA,clipping_planes_pars_vertex:xA,clipping_planes_vertex:wA,color_fragment:SA,color_pars_fragment:MA,color_pars_vertex:EA,color_vertex:TA,common:CA,cube_uv_reflection_fragment:AA,defaultnormal_vertex:bA,displacementmap_pars_vertex:RA,displacementmap_vertex:PA,emissivemap_fragment:LA,emissivemap_pars_fragment:IA,colorspace_fragment:NA,colorspace_pars_fragment:DA,envmap_fragment:UA,envmap_common_pars_fragment:OA,envmap_pars_fragment:kA,envmap_pars_vertex:FA,envmap_physical_pars_fragment:KA,envmap_vertex:BA,fog_vertex:zA,fog_pars_vertex:HA,fog_fragment:VA,fog_pars_fragment:GA,gradientmap_pars_fragment:WA,lightmap_pars_fragment:XA,lights_lambert_fragment:jA,lights_lambert_pars_fragment:$A,lights_pars_begin:YA,lights_toon_fragment:qA,lights_toon_pars_fragment:ZA,lights_phong_fragment:JA,lights_phong_pars_fragment:QA,lights_physical_fragment:eb,lights_physical_pars_fragment:tb,lights_fragment_begin:nb,lights_fragment_maps:ib,lights_fragment_end:rb,logdepthbuf_fragment:sb,logdepthbuf_pars_fragment:ab,logdepthbuf_pars_vertex:ob,logdepthbuf_vertex:lb,map_fragment:cb,map_pars_fragment:ub,map_particle_fragment:hb,map_particle_pars_fragment:fb,metalnessmap_fragment:db,metalnessmap_pars_fragment:pb,morphinstance_vertex:mb,morphcolor_vertex:gb,morphnormal_vertex:vb,morphtarget_pars_vertex:_b,morphtarget_vertex:yb,normal_fragment_begin:xb,normal_fragment_maps:wb,normal_pars_fragment:Sb,normal_pars_vertex:Mb,normal_vertex:Eb,normalmap_pars_fragment:Tb,clearcoat_normal_fragment_begin:Cb,clearcoat_normal_fragment_maps:Ab,clearcoat_pars_fragment:bb,iridescence_pars_fragment:Rb,opaque_fragment:Pb,packing:Lb,premultiplied_alpha_fragment:Ib,project_vertex:Nb,dithering_fragment:Db,dithering_pars_fragment:Ub,roughnessmap_fragment:Ob,roughnessmap_pars_fragment:kb,shadowmap_pars_fragment:Fb,shadowmap_pars_vertex:Bb,shadowmap_vertex:zb,shadowmask_pars_fragment:Hb,skinbase_vertex:Vb,skinning_pars_vertex:Gb,skinning_vertex:Wb,skinnormal_vertex:Xb,specularmap_fragment:jb,specularmap_pars_fragment:$b,tonemapping_fragment:Yb,tonemapping_pars_fragment:Kb,transmission_fragment:qb,transmission_pars_fragment:Zb,uv_pars_fragment:Jb,uv_pars_vertex:Qb,uv_vertex:eR,worldpos_vertex:tR,background_vert:nR,background_frag:iR,backgroundCube_vert:rR,backgroundCube_frag:sR,cube_vert:aR,cube_frag:oR,depth_vert:lR,depth_frag:cR,distanceRGBA_vert:uR,distanceRGBA_frag:hR,equirect_vert:fR,equirect_frag:dR,linedashed_vert:pR,linedashed_frag:mR,meshbasic_vert:gR,meshbasic_frag:vR,meshlambert_vert:_R,meshlambert_frag:yR,meshmatcap_vert:xR,meshmatcap_frag:wR,meshnormal_vert:SR,meshnormal_frag:MR,meshphong_vert:ER,meshphong_frag:TR,meshphysical_vert:CR,meshphysical_frag:AR,meshtoon_vert:bR,meshtoon_frag:RR,points_vert:PR,points_frag:LR,shadow_vert:IR,shadow_frag:NR,sprite_vert:DR,sprite_frag:UR},se={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Ri={basic:{uniforms:fn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:fn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Re(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:fn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:fn([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:fn([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Re(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:fn([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:fn([se.points,se.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:fn([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:fn([se.common,se.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:fn([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:fn([se.sprite,se.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:fn([se.common,se.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:fn([se.lights,se.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Ri.physical={uniforms:fn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Hc={r:0,b:0,g:0},xs=new Bi,OR=new De;function kR(t,e,n,i,r,s,a){const o=new Re(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:e).get(v)),v}function y(_){let v=!1;const x=g(_);x===null?d(o,l):x&&x.isColor&&(d(x,1),v=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,v){const x=g(v);x&&(x.isCubeTexture||x.mapping===Hh)?(u===void 0&&(u=new _n(new oc(1,1,1),new pr({name:"BackgroundCubeMaterial",uniforms:ao(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),xs.copy(v.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(OR.makeRotationFromEuler(xs)),u.material.toneMapped=et.getTransfer(x.colorSpace)!==_t,(h!==x||f!==x.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new _n(new lc(2,2),new pr({name:"BackgroundMaterial",uniforms:ao(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=et.getTransfer(x.colorSpace)!==_t,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,v){_.getRGB(Hc,K1(t)),i.buffers.color.setClear(Hc.r,Hc.g,Hc.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),l=v,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(o,l)},render:y,addToRenderList:m}}function FR(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(w,T,G,B,X){let J=!1;const z=h(B,G,T);s!==z&&(s=z,c(s.object)),J=p(w,B,G,X),J&&g(w,B,G,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,x(w,T,G,B),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(w){return t.bindVertexArray(w)}function u(w){return t.deleteVertexArray(w)}function h(w,T,G){const B=G.wireframe===!0;let X=i[w.id];X===void 0&&(X={},i[w.id]=X);let J=X[T.id];J===void 0&&(J={},X[T.id]=J);let z=J[B];return z===void 0&&(z=f(l()),J[B]=z),z}function f(w){const T=[],G=[],B=[];for(let X=0;X<n;X++)T[X]=0,G[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:G,attributeDivisors:B,object:w,attributes:{},index:null}}function p(w,T,G,B){const X=s.attributes,J=T.attributes;let z=0;const te=G.getAttributes();for(const I in te)if(te[I].location>=0){const K=X[I];let ne=J[I];if(ne===void 0&&(I==="instanceMatrix"&&w.instanceMatrix&&(ne=w.instanceMatrix),I==="instanceColor"&&w.instanceColor&&(ne=w.instanceColor)),K===void 0||K.attribute!==ne||ne&&K.data!==ne.data)return!0;z++}return s.attributesNum!==z||s.index!==B}function g(w,T,G,B){const X={},J=T.attributes;let z=0;const te=G.getAttributes();for(const I in te)if(te[I].location>=0){let K=J[I];K===void 0&&(I==="instanceMatrix"&&w.instanceMatrix&&(K=w.instanceMatrix),I==="instanceColor"&&w.instanceColor&&(K=w.instanceColor));const ne={};ne.attribute=K,K&&K.data&&(ne.data=K.data),X[I]=ne,z++}s.attributes=X,s.attributesNum=z,s.index=B}function y(){const w=s.newAttributes;for(let T=0,G=w.length;T<G;T++)w[T]=0}function m(w){d(w,0)}function d(w,T){const G=s.newAttributes,B=s.enabledAttributes,X=s.attributeDivisors;G[w]=1,B[w]===0&&(t.enableVertexAttribArray(w),B[w]=1),X[w]!==T&&(t.vertexAttribDivisor(w,T),X[w]=T)}function _(){const w=s.newAttributes,T=s.enabledAttributes;for(let G=0,B=T.length;G<B;G++)T[G]!==w[G]&&(t.disableVertexAttribArray(G),T[G]=0)}function v(w,T,G,B,X,J,z){z===!0?t.vertexAttribIPointer(w,T,G,X,J):t.vertexAttribPointer(w,T,G,B,X,J)}function x(w,T,G,B){y();const X=B.attributes,J=G.getAttributes(),z=T.defaultAttributeValues;for(const te in J){const I=J[te];if(I.location>=0){let j=X[te];if(j===void 0&&(te==="instanceMatrix"&&w.instanceMatrix&&(j=w.instanceMatrix),te==="instanceColor"&&w.instanceColor&&(j=w.instanceColor)),j!==void 0){const K=j.normalized,ne=j.itemSize,xe=e.get(j);if(xe===void 0)continue;const He=xe.buffer,W=xe.type,Z=xe.bytesPerElement,ae=W===t.INT||W===t.UNSIGNED_INT||j.gpuType===Rg;if(j.isInterleavedBufferAttribute){const oe=j.data,Ce=oe.stride,Te=j.offset;if(oe.isInstancedInterleavedBuffer){for(let Ve=0;Ve<I.locationSize;Ve++)d(I.location+Ve,oe.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ve=0;Ve<I.locationSize;Ve++)m(I.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,He);for(let Ve=0;Ve<I.locationSize;Ve++)v(I.location+Ve,ne/I.locationSize,W,K,Ce*Z,(Te+ne/I.locationSize*Ve)*Z,ae)}else{if(j.isInstancedBufferAttribute){for(let oe=0;oe<I.locationSize;oe++)d(I.location+oe,j.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let oe=0;oe<I.locationSize;oe++)m(I.location+oe);t.bindBuffer(t.ARRAY_BUFFER,He);for(let oe=0;oe<I.locationSize;oe++)v(I.location+oe,ne/I.locationSize,W,K,ne*Z,ne/I.locationSize*oe*Z,ae)}}else if(z!==void 0){const K=z[te];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(I.location,K);break;case 3:t.vertexAttrib3fv(I.location,K);break;case 4:t.vertexAttrib4fv(I.location,K);break;default:t.vertexAttrib1fv(I.location,K)}}}}_()}function A(){R();for(const w in i){const T=i[w];for(const G in T){const B=T[G];for(const X in B)u(B[X].object),delete B[X];delete T[G]}delete i[w]}}function C(w){if(i[w.id]===void 0)return;const T=i[w.id];for(const G in T){const B=T[G];for(const X in B)u(B[X].object),delete B[X];delete T[G]}delete i[w.id]}function M(w){for(const T in i){const G=i[T];if(G[w.id]===void 0)continue;const B=G[w.id];for(const X in B)u(B[X].object),delete B[X];delete G[w.id]}}function R(){H(),a=!0,s!==r&&(s=r,c(s.object))}function H(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:H,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:M,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function BR(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];n.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let y=0;y<h;y++)g+=u[y];for(let y=0;y<f.length;y++)n.update(g,i,f[y])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function zR(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(M){return!(M!==ti&&i.convert(M)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){const R=M===ac&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==dr&&i.convert(M)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==wi&&!R)}function l(M){if(M==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const M=e.get("EXT_clip_control");M.clipControlEXT(M.LOWER_LEFT_EXT,M.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:A,maxSamples:C}}function HR(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new rr,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,d=t.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,v=_*4;let x=d.clippingState||null;l.value=x,x=u(g,f,v,p);for(let A=0;A!==v;++A)x[A]=n[A];d.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,g){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const d=p+y*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,x=p;v!==y;++v,x+=4)a.copy(h[v]).applyMatrix4(_,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function VR(t){let e=new WeakMap;function n(a,o){return o===Sp?a.mapping=eo:o===Mp&&(a.mapping=to),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Sp||o===Mp)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new QC(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class zg extends q1{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const wa=4,f_=[.125,.215,.35,.446,.526,.582],Rs=20,nd=new zg,d_=new Re;let id=null,rd=0,sd=0,ad=!1;const Ts=(1+Math.sqrt(5))/2,ga=1/Ts,p_=[new P(-Ts,ga,0),new P(Ts,ga,0),new P(-ga,0,Ts),new P(ga,0,Ts),new P(0,Ts,-ga),new P(0,Ts,ga),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class m_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){id=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=__(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=v_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(id,rd,sd),this._renderer.xr.enabled=ad,e.scissorTest=!1,Vc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===eo||e.mapping===to?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),id=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:ac,format:ti,colorSpace:en,depthBuffer:!1},r=g_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=g_(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GR(s)),this._blurMaterial=WR(s,e,n)}return r}_compileMaterial(e){const n=new _n(this._lodPlanes[0],e);this._renderer.compile(n,nd)}_sceneToCubeUV(e,n,i,r){const o=new gn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(d_),u.toneMapping=Zr,u.autoClear=!1;const p=new Wr({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),g=new _n(new oc,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(d_),y=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):_===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const v=this._cubeSize;Vc(r,_*v,d>2?v:0,v,v),u.setRenderTarget(r),y&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===eo||e.mapping===to;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=__()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=v_());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new _n(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Vc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,nd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=p_[(r-s-1)%p_.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new _n(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Rs-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):Rs;m>Rs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rs}`);const d=[];let _=0;for(let M=0;M<Rs;++M){const R=M/y,H=Math.exp(-R*R/2);d.push(H),M===0?_+=H:M<m&&(_+=2*H)}for(let M=0;M<d.length;M++)d[M]=d[M]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const x=this._sizeLods[r],A=3*x*(r>v-wa?r-v+wa:0),C=4*(this._cubeSize-x);Vc(n,A,C,3*x,2*x),l.setRenderTarget(n),l.render(h,nd)}}function GR(t){const e=[],n=[],i=[];let r=t;const s=t-wa+1+f_.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-wa?l=f_[a-t+wa-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,y=3,m=2,d=1,_=new Float32Array(y*g*p),v=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let C=0;C<p;C++){const M=C%3*2/3-1,R=C>2?0:-1,H=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];_.set(H,y*g*C),v.set(f,m*g*C);const w=[C,C,C,C,C,C];x.set(w,d*g*C)}const A=new ui;A.setAttribute("position",new cn(_,y)),A.setAttribute("uv",new cn(v,m)),A.setAttribute("faceIndex",new cn(x,d)),e.push(A),r>wa&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function g_(t,e,n){const i=new Gs(t,e,n);return i.texture.mapping=Hh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function WR(t,e,n){const i=new Float32Array(Rs),r=new P(0,1,0);return new pr({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qr,depthTest:!1,depthWrite:!1})}function v_(){return new pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qr,depthTest:!1,depthWrite:!1})}function __(){return new pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qr,depthTest:!1,depthWrite:!1})}function Hg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function XR(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Sp||l===Mp,u=l===eo||l===to;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new m_(t)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new m_(t)),h=c?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function jR(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Pu("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function $R(t,e,n,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const y=f.morphAttributes[g];for(let m=0,d=y.length;m<d;m++)e.remove(y[m])}f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const y=p[g];for(let m=0,d=y.length;m<d;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let y=0;if(p!==null){const _=p.array;y=p.version;for(let v=0,x=_.length;v<x;v+=3){const A=_[v+0],C=_[v+1],M=_[v+2];f.push(A,C,C,M,M,A)}}else if(g!==void 0){const _=g.array;y=g.version;for(let v=0,x=_.length/3-1;v<x;v+=3){const A=v+0,C=v+1,M=v+2;f.push(A,C,C,M,M,A)}}else return;const m=new(V1(f)?Y1:$1)(f,1);m.version=y;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function YR(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*a),n.update(p,i,1)}function c(f,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,f*a,g),n.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];n.update(m,i,1)}function h(f,p,g,y){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,y,0,g);let d=0;for(let _=0;_<g;_++)d+=p[_];for(let _=0;_<y.length;_++)n.update(d,i,y[_])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function KR(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function qR(t,e,n){const i=new WeakMap,r=new nt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let H=function(){M.dispose(),i.delete(o),o.removeEventListener("dispose",H)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let v=0;p===!0&&(v=1),g===!0&&(v=2),y===!0&&(v=3);let x=o.attributes.position.count*v,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const C=new Float32Array(x*A*4*h),M=new W1(C,x,A,h);M.type=wi,M.needsUpdate=!0;const R=v*4;for(let w=0;w<h;w++){const T=m[w],G=d[w],B=_[w],X=x*A*4*w;for(let J=0;J<T.count;J++){const z=J*R;p===!0&&(r.fromBufferAttribute(T,J),C[X+z+0]=r.x,C[X+z+1]=r.y,C[X+z+2]=r.z,C[X+z+3]=0),g===!0&&(r.fromBufferAttribute(G,J),C[X+z+4]=r.x,C[X+z+5]=r.y,C[X+z+6]=r.z,C[X+z+7]=0),y===!0&&(r.fromBufferAttribute(B,J),C[X+z+8]=r.x,C[X+z+9]=r.y,C[X+z+10]=r.z,C[X+z+11]=B.itemSize===4?r.w:1)}}f={count:h,texture:M,size:new ce(x,A)},i.set(o,f),o.addEventListener("dispose",H)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function ZR(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class Q1 extends Vt{constructor(e,n,i,r,s,a,o,l,c,u=za){if(u!==za&&u!==ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===za&&(i=Vs),i===void 0&&u===ro&&(i=io),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ew=new Vt,y_=new Q1(1,1),tw=new W1,nw=new kC,iw=new Z1,x_=[],w_=[],S_=new Float32Array(16),M_=new Float32Array(9),E_=new Float32Array(4);function Ro(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=x_[r];if(s===void 0&&(s=new Float32Array(r),x_[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Gt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Gh(t,e){let n=w_[e];n===void 0&&(n=new Int32Array(e),w_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function JR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function QR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2fv(this.addr,e),Wt(n,e)}}function e2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Gt(n,e))return;t.uniform3fv(this.addr,e),Wt(n,e)}}function t2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4fv(this.addr,e),Wt(n,e)}}function n2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Wt(n,e)}else{if(Gt(n,i))return;E_.set(i),t.uniformMatrix2fv(this.addr,!1,E_),Wt(n,i)}}function i2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Wt(n,e)}else{if(Gt(n,i))return;M_.set(i),t.uniformMatrix3fv(this.addr,!1,M_),Wt(n,i)}}function r2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Wt(n,e)}else{if(Gt(n,i))return;S_.set(i),t.uniformMatrix4fv(this.addr,!1,S_),Wt(n,i)}}function s2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function a2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2iv(this.addr,e),Wt(n,e)}}function o2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3iv(this.addr,e),Wt(n,e)}}function l2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4iv(this.addr,e),Wt(n,e)}}function c2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function u2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2uiv(this.addr,e),Wt(n,e)}}function h2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3uiv(this.addr,e),Wt(n,e)}}function f2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4uiv(this.addr,e),Wt(n,e)}}function d2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(y_.compareFunction=z1,s=y_):s=ew,n.setTexture2D(e||s,r)}function p2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||nw,r)}function m2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||iw,r)}function g2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||tw,r)}function v2(t){switch(t){case 5126:return JR;case 35664:return QR;case 35665:return e2;case 35666:return t2;case 35674:return n2;case 35675:return i2;case 35676:return r2;case 5124:case 35670:return s2;case 35667:case 35671:return a2;case 35668:case 35672:return o2;case 35669:case 35673:return l2;case 5125:return c2;case 36294:return u2;case 36295:return h2;case 36296:return f2;case 35678:case 36198:case 36298:case 36306:case 35682:return d2;case 35679:case 36299:case 36307:return p2;case 35680:case 36300:case 36308:case 36293:return m2;case 36289:case 36303:case 36311:case 36292:return g2}}function _2(t,e){t.uniform1fv(this.addr,e)}function y2(t,e){const n=Ro(e,this.size,2);t.uniform2fv(this.addr,n)}function x2(t,e){const n=Ro(e,this.size,3);t.uniform3fv(this.addr,n)}function w2(t,e){const n=Ro(e,this.size,4);t.uniform4fv(this.addr,n)}function S2(t,e){const n=Ro(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function M2(t,e){const n=Ro(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function E2(t,e){const n=Ro(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function T2(t,e){t.uniform1iv(this.addr,e)}function C2(t,e){t.uniform2iv(this.addr,e)}function A2(t,e){t.uniform3iv(this.addr,e)}function b2(t,e){t.uniform4iv(this.addr,e)}function R2(t,e){t.uniform1uiv(this.addr,e)}function P2(t,e){t.uniform2uiv(this.addr,e)}function L2(t,e){t.uniform3uiv(this.addr,e)}function I2(t,e){t.uniform4uiv(this.addr,e)}function N2(t,e,n){const i=this.cache,r=e.length,s=Gh(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||ew,s[a])}function D2(t,e,n){const i=this.cache,r=e.length,s=Gh(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||nw,s[a])}function U2(t,e,n){const i=this.cache,r=e.length,s=Gh(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||iw,s[a])}function O2(t,e,n){const i=this.cache,r=e.length,s=Gh(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||tw,s[a])}function k2(t){switch(t){case 5126:return _2;case 35664:return y2;case 35665:return x2;case 35666:return w2;case 35674:return S2;case 35675:return M2;case 35676:return E2;case 5124:case 35670:return T2;case 35667:case 35671:return C2;case 35668:case 35672:return A2;case 35669:case 35673:return b2;case 5125:return R2;case 36294:return P2;case 36295:return L2;case 36296:return I2;case 35678:case 36198:case 36298:case 36306:case 35682:return N2;case 35679:case 36299:case 36307:return D2;case 35680:case 36300:case 36308:case 36293:return U2;case 36289:case 36303:case 36311:case 36292:return O2}}class F2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=v2(n.type)}}class B2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=k2(n.type)}}class z2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const od=/(\w+)(\])?(\[|\.)?/g;function T_(t,e){t.seq.push(e),t.map[e.id]=e}function H2(t,e,n){const i=t.name,r=i.length;for(od.lastIndex=0;;){const s=od.exec(i),a=od.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){T_(n,c===void 0?new F2(o,t,e):new B2(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new z2(o),T_(n,h)),n=h}}}class Lu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);H2(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function C_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const V2=37297;let G2=0;function W2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function X2(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===ih&&n===nh?i="LinearDisplayP3ToLinearSRGB":e===nh&&n===ih&&(i="LinearSRGBToLinearDisplayP3"),t){case en:case Vh:return[i,"LinearTransferOETF"];case mn:case Og:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function A_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+W2(t.getShaderSource(e),a)}else return r}function j2(t,e){const n=X2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function $2(t,e){let n;switch(e){case jT:n="Linear";break;case $T:n="Reinhard";break;case YT:n="Cineon";break;case KT:n="ACESFilmic";break;case ZT:n="AgX";break;case JT:n="Neutral";break;case qT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Gc=new P;function Y2(){et.getLuminanceCoefficients(Gc);const t=Gc.x.toFixed(4),e=Gc.y.toFixed(4),n=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(il).join(`
`)}function q2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Z2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function il(t){return t!==""}function b_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function R_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const J2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jp(t){return t.replace(J2,eP)}const Q2=new Map;function eP(t,e){let n=Fe[e];if(n===void 0){const i=Q2.get(e);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jp(n)}const tP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function P_(t){return t.replace(tP,nP)}function nP(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function L_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iP(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===T1?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===TT?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===er&&(e="SHADOWMAP_TYPE_VSM"),e}function rP(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case eo:case to:e="ENVMAP_TYPE_CUBE";break;case Hh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sP(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case to:e="ENVMAP_MODE_REFRACTION";break}return e}function aP(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case C1:e="ENVMAP_BLENDING_MULTIPLY";break;case WT:e="ENVMAP_BLENDING_MIX";break;case XT:e="ENVMAP_BLENDING_ADD";break}return e}function oP(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function lP(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=iP(n),c=rP(n),u=sP(n),h=aP(n),f=oP(n),p=K2(n),g=q2(s),y=r.createProgram();let m,d,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(il).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(il).join(`
`),d.length>0&&(d+=`
`)):(m=[L_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(il).join(`
`),d=[L_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Zr?"#define TONE_MAPPING":"",n.toneMapping!==Zr?Fe.tonemapping_pars_fragment:"",n.toneMapping!==Zr?$2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,j2("linearToOutputTexel",n.outputColorSpace),Y2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(il).join(`
`)),a=Jp(a),a=b_(a,n),a=R_(a,n),o=Jp(o),o=b_(o,n),o=R_(o,n),a=P_(a),o=P_(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===$v?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$v?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=_+m+a,x=_+d+o,A=C_(r,r.VERTEX_SHADER,v),C=C_(r,r.FRAGMENT_SHADER,x);r.attachShader(y,A),r.attachShader(y,C),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function M(T){if(t.debug.checkShaderErrors){const G=r.getProgramInfoLog(y).trim(),B=r.getShaderInfoLog(A).trim(),X=r.getShaderInfoLog(C).trim();let J=!0,z=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,A,C);else{const te=A_(r,A,"vertex"),I=A_(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+G+`
`+te+`
`+I)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||X==="")&&(z=!1);z&&(T.diagnostics={runnable:J,programLog:G,vertexShader:{log:B,prefix:m},fragmentShader:{log:X,prefix:d}})}r.deleteShader(A),r.deleteShader(C),R=new Lu(r,y),H=Z2(r,y)}let R;this.getUniforms=function(){return R===void 0&&M(this),R};let H;this.getAttributes=function(){return H===void 0&&M(this),H};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(y,V2)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=G2++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=C,this}let cP=0;class uP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new hP(e),n.set(e,i)),i}}class hP{constructor(e){this.id=cP++,this.code=e,this.usedTimes=0}}function fP(t,e,n,i,r,s,a){const o=new Fg,l=new uP,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(w){return c.add(w),w===0?"uv":`uv${w}`}function d(w,T,G,B,X){const J=B.fog,z=X.geometry,te=w.isMeshStandardMaterial?B.environment:null,I=(w.isMeshStandardMaterial?n:e).get(w.envMap||te),j=I&&I.mapping===Hh?I.image.height:null,K=y[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const ne=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,xe=ne!==void 0?ne.length:0;let He=0;z.morphAttributes.position!==void 0&&(He=1),z.morphAttributes.normal!==void 0&&(He=2),z.morphAttributes.color!==void 0&&(He=3);let W,Z,ae,oe;if(K){const Mn=Ri[K];W=Mn.vertexShader,Z=Mn.fragmentShader}else W=w.vertexShader,Z=w.fragmentShader,l.update(w),ae=l.getVertexShaderID(w),oe=l.getFragmentShaderID(w);const Ce=t.getRenderTarget(),Te=X.isInstancedMesh===!0,Ve=X.isBatchedMesh===!0,Ke=!!w.map,Ue=!!w.matcap,L=!!I,Nn=!!w.aoMap,$e=!!w.lightMap,Je=!!w.bumpMap,Pe=!!w.normalMap,pt=!!w.displacementMap,Ne=!!w.emissiveMap,b=!!w.metalnessMap,S=!!w.roughnessMap,O=w.anisotropy>0,Y=w.clearcoat>0,Q=w.dispersion>0,$=w.iridescence>0,Se=w.sheen>0,le=w.transmission>0,me=O&&!!w.anisotropyMap,Qe=Y&&!!w.clearcoatMap,ie=Y&&!!w.clearcoatNormalMap,ge=Y&&!!w.clearcoatRoughnessMap,Le=$&&!!w.iridescenceMap,Ie=$&&!!w.iridescenceThicknessMap,ve=Se&&!!w.sheenColorMap,Ye=Se&&!!w.sheenRoughnessMap,Oe=!!w.specularMap,ft=!!w.specularColorMap,N=!!w.specularIntensityMap,fe=le&&!!w.transmissionMap,V=le&&!!w.thicknessMap,q=!!w.gradientMap,ue=!!w.alphaMap,de=w.alphaTest>0,qe=!!w.alphaHash,Dt=!!w.extensions;let Sn=Zr;w.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(Sn=t.toneMapping);const tt={shaderID:K,shaderType:w.type,shaderName:w.name,vertexShader:W,fragmentShader:Z,defines:w.defines,customVertexShaderID:ae,customFragmentShaderID:oe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:Ve,batchingColor:Ve&&X._colorsTexture!==null,instancing:Te,instancingColor:Te&&X.instanceColor!==null,instancingMorph:Te&&X.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ce===null?t.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:en,alphaToCoverage:!!w.alphaToCoverage,map:Ke,matcap:Ue,envMap:L,envMapMode:L&&I.mapping,envMapCubeUVHeight:j,aoMap:Nn,lightMap:$e,bumpMap:Je,normalMap:Pe,displacementMap:p&&pt,emissiveMap:Ne,normalMapObjectSpace:Pe&&w.normalMapType===rC,normalMapTangentSpace:Pe&&w.normalMapType===B1,metalnessMap:b,roughnessMap:S,anisotropy:O,anisotropyMap:me,clearcoat:Y,clearcoatMap:Qe,clearcoatNormalMap:ie,clearcoatRoughnessMap:ge,dispersion:Q,iridescence:$,iridescenceMap:Le,iridescenceThicknessMap:Ie,sheen:Se,sheenColorMap:ve,sheenRoughnessMap:Ye,specularMap:Oe,specularColorMap:ft,specularIntensityMap:N,transmission:le,transmissionMap:fe,thicknessMap:V,gradientMap:q,opaque:w.transparent===!1&&w.blending===Ba&&w.alphaToCoverage===!1,alphaMap:ue,alphaTest:de,alphaHash:qe,combine:w.combine,mapUv:Ke&&m(w.map.channel),aoMapUv:Nn&&m(w.aoMap.channel),lightMapUv:$e&&m(w.lightMap.channel),bumpMapUv:Je&&m(w.bumpMap.channel),normalMapUv:Pe&&m(w.normalMap.channel),displacementMapUv:pt&&m(w.displacementMap.channel),emissiveMapUv:Ne&&m(w.emissiveMap.channel),metalnessMapUv:b&&m(w.metalnessMap.channel),roughnessMapUv:S&&m(w.roughnessMap.channel),anisotropyMapUv:me&&m(w.anisotropyMap.channel),clearcoatMapUv:Qe&&m(w.clearcoatMap.channel),clearcoatNormalMapUv:ie&&m(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&m(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&m(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&m(w.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&m(w.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&m(w.sheenRoughnessMap.channel),specularMapUv:Oe&&m(w.specularMap.channel),specularColorMapUv:ft&&m(w.specularColorMap.channel),specularIntensityMapUv:N&&m(w.specularIntensityMap.channel),transmissionMapUv:fe&&m(w.transmissionMap.channel),thicknessMapUv:V&&m(w.thicknessMap.channel),alphaMapUv:ue&&m(w.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Pe||O),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!z.attributes.uv&&(Ke||ue),fog:!!J,useFog:w.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:X.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:He,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&G.length>0,shadowMapType:t.shadowMap.type,toneMapping:Sn,decodeVideoTexture:Ke&&w.map.isVideoTexture===!0&&et.getTransfer(w.map.colorSpace)===_t,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ii,flipSided:w.side===Rn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Dt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&w.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function _(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)T.push(G),T.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(v(T,w),x(T,w),T.push(t.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function v(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function x(w,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reverseDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.alphaToCoverage&&o.enable(20),w.push(o.mask)}function A(w){const T=y[w.type];let G;if(T){const B=Ri[T];G=KC.clone(B.uniforms)}else G=w.uniforms;return G}function C(w,T){let G;for(let B=0,X=u.length;B<X;B++){const J=u[B];if(J.cacheKey===T){G=J,++G.usedTimes;break}}return G===void 0&&(G=new lP(t,T,w,s),u.push(G)),G}function M(w){if(--w.usedTimes===0){const T=u.indexOf(w);u[T]=u[u.length-1],u.pop(),w.destroy()}}function R(w){l.remove(w)}function H(){l.dispose()}return{getParameters:d,getProgramCacheKey:_,getUniforms:A,acquireProgram:C,releaseProgram:M,releaseShaderCache:R,programs:u,dispose:H}}function dP(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function pP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function I_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function N_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,f,p,g,y,m){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:y,group:m},t[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=y,d.group=m),e++,d}function o(h,f,p,g,y,m){const d=a(h,f,p,g,y,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(h,f,p,g,y,m){const d=a(h,f,p,g,y,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(h,f){n.length>1&&n.sort(h||pP),i.length>1&&i.sort(f||I_),r.length>1&&r.sort(f||I_)}function u(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function mP(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new N_,t.set(i,[a])):r>=s.length?(a=new N_,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function gP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new P,color:new Re};break;case"SpotLight":n={position:new P,direction:new P,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new Re,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":n={color:new Re,position:new P,halfWidth:new P,halfHeight:new P};break}return t[e.id]=n,n}}}function vP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let _P=0;function yP(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function xP(t){const e=new gP,n=vP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const r=new P,s=new De,a=new De;function o(c){let u=0,h=0,f=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let p=0,g=0,y=0,m=0,d=0,_=0,v=0,x=0,A=0,C=0,M=0;c.sort(yP);for(let H=0,w=c.length;H<w;H++){const T=c[H],G=T.color,B=T.intensity,X=T.distance,J=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=G.r*B,h+=G.g*B,f+=G.b*B;else if(T.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(T.sh.coefficients[z],B);M++}else if(T.isDirectionalLight){const z=e.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const te=T.shadow,I=n.get(T);I.shadowIntensity=te.intensity,I.shadowBias=te.bias,I.shadowNormalBias=te.normalBias,I.shadowRadius=te.radius,I.shadowMapSize=te.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=T.shadow.matrix,_++}i.directional[p]=z,p++}else if(T.isSpotLight){const z=e.get(T);z.position.setFromMatrixPosition(T.matrixWorld),z.color.copy(G).multiplyScalar(B),z.distance=X,z.coneCos=Math.cos(T.angle),z.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),z.decay=T.decay,i.spot[y]=z;const te=T.shadow;if(T.map&&(i.spotLightMap[A]=T.map,A++,te.updateMatrices(T),T.castShadow&&C++),i.spotLightMatrix[y]=te.matrix,T.castShadow){const I=n.get(T);I.shadowIntensity=te.intensity,I.shadowBias=te.bias,I.shadowNormalBias=te.normalBias,I.shadowRadius=te.radius,I.shadowMapSize=te.mapSize,i.spotShadow[y]=I,i.spotShadowMap[y]=J,x++}y++}else if(T.isRectAreaLight){const z=e.get(T);z.color.copy(G).multiplyScalar(B),z.halfWidth.set(T.width*.5,0,0),z.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=z,m++}else if(T.isPointLight){const z=e.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),z.distance=T.distance,z.decay=T.decay,T.castShadow){const te=T.shadow,I=n.get(T);I.shadowIntensity=te.intensity,I.shadowBias=te.bias,I.shadowNormalBias=te.normalBias,I.shadowRadius=te.radius,I.shadowMapSize=te.mapSize,I.shadowCameraNear=te.camera.near,I.shadowCameraFar=te.camera.far,i.pointShadow[g]=I,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=T.shadow.matrix,v++}i.point[g]=z,g++}else if(T.isHemisphereLight){const z=e.get(T);z.skyColor.copy(T.color).multiplyScalar(B),z.groundColor.copy(T.groundColor).multiplyScalar(B),i.hemi[d]=z,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==y||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==_||R.numPointShadows!==v||R.numSpotShadows!==x||R.numSpotMaps!==A||R.numLightProbes!==M)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=M,R.directionalLength=p,R.pointLength=g,R.spotLength=y,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=_,R.numPointShadows=v,R.numSpotShadows=x,R.numSpotMaps=A,R.numLightProbes=M,i.version=_P++)}function l(c,u){let h=0,f=0,p=0,g=0,y=0;const m=u.matrixWorldInverse;for(let d=0,_=c.length;d<_;d++){const v=c[d];if(v.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(v.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function D_(t){const e=new xP(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function wP(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new D_(t),e.set(r,[o])):s>=a.length?(o=new D_(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class SP extends Oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MP extends Oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const EP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function CP(t,e,n){let i=new Bg;const r=new ce,s=new ce,a=new nt,o=new SP({depthPacking:iC}),l=new MP,c={},u=n.maxTextureSize,h={[fr]:Rn,[Rn]:fr,[Ii]:Ii},f=new pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:EP,fragmentShader:TP}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new ui;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new _n(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=T1;let d=this.type;this.render=function(C,M,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const H=t.getRenderTarget(),w=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),G=t.state;G.setBlending(qr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const B=d!==er&&this.type===er,X=d===er&&this.type!==er;for(let J=0,z=C.length;J<z;J++){const te=C[J],I=te.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const j=I.getFrameExtents();if(r.multiply(j),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,I.mapSize.y=s.y)),I.map===null||B===!0||X===!0){const ne=this.type!==er?{minFilter:vn,magFilter:vn}:{};I.map!==null&&I.map.dispose(),I.map=new Gs(r.x,r.y,ne),I.map.texture.name=te.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const K=I.getViewportCount();for(let ne=0;ne<K;ne++){const xe=I.getViewport(ne);a.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),G.viewport(a),I.updateMatrices(te,ne),i=I.getFrustum(),x(M,R,I.camera,te,this.type)}I.isPointLightShadow!==!0&&this.type===er&&_(I,R),I.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(H,w,T)};function _(C,M){const R=e.update(y);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Gs(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(M,null,R,f,y,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(M,null,R,p,y,null)}function v(C,M,R,H){let w=null;const T=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)w=T;else if(w=R.isPointLight===!0?l:o,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const G=w.uuid,B=M.uuid;let X=c[G];X===void 0&&(X={},c[G]=X);let J=X[B];J===void 0&&(J=w.clone(),X[B]=J,M.addEventListener("dispose",A)),w=J}if(w.visible=M.visible,w.wireframe=M.wireframe,H===er?w.side=M.shadowSide!==null?M.shadowSide:M.side:w.side=M.shadowSide!==null?M.shadowSide:h[M.side],w.alphaMap=M.alphaMap,w.alphaTest=M.alphaTest,w.map=M.map,w.clipShadows=M.clipShadows,w.clippingPlanes=M.clippingPlanes,w.clipIntersection=M.clipIntersection,w.displacementMap=M.displacementMap,w.displacementScale=M.displacementScale,w.displacementBias=M.displacementBias,w.wireframeLinewidth=M.wireframeLinewidth,w.linewidth=M.linewidth,R.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const G=t.properties.get(w);G.light=R}return w}function x(C,M,R,H,w){if(C.visible===!1)return;if(C.layers.test(M.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&w===er)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const B=e.update(C),X=C.material;if(Array.isArray(X)){const J=B.groups;for(let z=0,te=J.length;z<te;z++){const I=J[z],j=X[I.materialIndex];if(j&&j.visible){const K=v(C,j,H,w);C.onBeforeShadow(t,C,M,R,B,K,I),t.renderBufferDirect(R,null,B,K,C,I),C.onAfterShadow(t,C,M,R,B,K,I)}}}else if(X.visible){const J=v(C,X,H,w);C.onBeforeShadow(t,C,M,R,B,J,null),t.renderBufferDirect(R,null,B,J,C,null),C.onAfterShadow(t,C,M,R,B,J,null)}}const G=C.children;for(let B=0,X=G.length;B<X;B++)x(G[B],M,R,H,w)}function A(C){C.target.removeEventListener("dispose",A);for(const R in c){const H=c[R],w=C.target.uuid;w in H&&(H[w].dispose(),delete H[w])}}}const AP={[mp]:gp,[vp]:xp,[_p]:wp,[Qa]:yp,[gp]:mp,[xp]:vp,[wp]:_p,[yp]:Qa};function bP(t){function e(){let N=!1;const fe=new nt;let V=null;const q=new nt(0,0,0,0);return{setMask:function(ue){V!==ue&&!N&&(t.colorMask(ue,ue,ue,ue),V=ue)},setLocked:function(ue){N=ue},setClear:function(ue,de,qe,Dt,Sn){Sn===!0&&(ue*=Dt,de*=Dt,qe*=Dt),fe.set(ue,de,qe,Dt),q.equals(fe)===!1&&(t.clearColor(ue,de,qe,Dt),q.copy(fe))},reset:function(){N=!1,V=null,q.set(-1,0,0,0)}}}function n(){let N=!1,fe=!1,V=null,q=null,ue=null;return{setReversed:function(de){fe=de},setTest:function(de){de?ae(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(de){V!==de&&!N&&(t.depthMask(de),V=de)},setFunc:function(de){if(fe&&(de=AP[de]),q!==de){switch(de){case mp:t.depthFunc(t.NEVER);break;case gp:t.depthFunc(t.ALWAYS);break;case vp:t.depthFunc(t.LESS);break;case Qa:t.depthFunc(t.LEQUAL);break;case _p:t.depthFunc(t.EQUAL);break;case yp:t.depthFunc(t.GEQUAL);break;case xp:t.depthFunc(t.GREATER);break;case wp:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}q=de}},setLocked:function(de){N=de},setClear:function(de){ue!==de&&(t.clearDepth(de),ue=de)},reset:function(){N=!1,V=null,q=null,ue=null}}}function i(){let N=!1,fe=null,V=null,q=null,ue=null,de=null,qe=null,Dt=null,Sn=null;return{setTest:function(tt){N||(tt?ae(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(tt){fe!==tt&&!N&&(t.stencilMask(tt),fe=tt)},setFunc:function(tt,Mn,ji){(V!==tt||q!==Mn||ue!==ji)&&(t.stencilFunc(tt,Mn,ji),V=tt,q=Mn,ue=ji)},setOp:function(tt,Mn,ji){(de!==tt||qe!==Mn||Dt!==ji)&&(t.stencilOp(tt,Mn,ji),de=tt,qe=Mn,Dt=ji)},setLocked:function(tt){N=tt},setClear:function(tt){Sn!==tt&&(t.clearStencil(tt),Sn=tt)},reset:function(){N=!1,fe=null,V=null,q=null,ue=null,de=null,qe=null,Dt=null,Sn=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],p=null,g=!1,y=null,m=null,d=null,_=null,v=null,x=null,A=null,C=new Re(0,0,0),M=0,R=!1,H=null,w=null,T=null,G=null,B=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,z=0;const te=t.getParameter(t.VERSION);te.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(te)[1]),J=z>=1):te.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),J=z>=2);let I=null,j={};const K=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),xe=new nt().fromArray(K),He=new nt().fromArray(ne);function W(N,fe,V,q){const ue=new Uint8Array(4),de=t.createTexture();t.bindTexture(N,de),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<V;qe++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,q,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(fe+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return de}const Z={};Z[t.TEXTURE_2D]=W(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=W(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=W(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=W(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ae(t.DEPTH_TEST),s.setFunc(Qa),$e(!1),Je(Fv),ae(t.CULL_FACE),L(qr);function ae(N){c[N]!==!0&&(t.enable(N),c[N]=!0)}function oe(N){c[N]!==!1&&(t.disable(N),c[N]=!1)}function Ce(N,fe){return u[N]!==fe?(t.bindFramebuffer(N,fe),u[N]=fe,N===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=fe),N===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Te(N,fe){let V=f,q=!1;if(N){V=h.get(fe),V===void 0&&(V=[],h.set(fe,V));const ue=N.textures;if(V.length!==ue.length||V[0]!==t.COLOR_ATTACHMENT0){for(let de=0,qe=ue.length;de<qe;de++)V[de]=t.COLOR_ATTACHMENT0+de;V.length=ue.length,q=!0}}else V[0]!==t.BACK&&(V[0]=t.BACK,q=!0);q&&t.drawBuffers(V)}function Ve(N){return p!==N?(t.useProgram(N),p=N,!0):!1}const Ke={[bs]:t.FUNC_ADD,[AT]:t.FUNC_SUBTRACT,[bT]:t.FUNC_REVERSE_SUBTRACT};Ke[RT]=t.MIN,Ke[PT]=t.MAX;const Ue={[LT]:t.ZERO,[IT]:t.ONE,[NT]:t.SRC_COLOR,[dp]:t.SRC_ALPHA,[BT]:t.SRC_ALPHA_SATURATE,[kT]:t.DST_COLOR,[UT]:t.DST_ALPHA,[DT]:t.ONE_MINUS_SRC_COLOR,[pp]:t.ONE_MINUS_SRC_ALPHA,[FT]:t.ONE_MINUS_DST_COLOR,[OT]:t.ONE_MINUS_DST_ALPHA,[zT]:t.CONSTANT_COLOR,[HT]:t.ONE_MINUS_CONSTANT_COLOR,[VT]:t.CONSTANT_ALPHA,[GT]:t.ONE_MINUS_CONSTANT_ALPHA};function L(N,fe,V,q,ue,de,qe,Dt,Sn,tt){if(N===qr){g===!0&&(oe(t.BLEND),g=!1);return}if(g===!1&&(ae(t.BLEND),g=!0),N!==CT){if(N!==y||tt!==R){if((m!==bs||v!==bs)&&(t.blendEquation(t.FUNC_ADD),m=bs,v=bs),tt)switch(N){case Ba:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bv:t.blendFunc(t.ONE,t.ONE);break;case zv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ba:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bv:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case zv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}d=null,_=null,x=null,A=null,C.set(0,0,0),M=0,y=N,R=tt}return}ue=ue||fe,de=de||V,qe=qe||q,(fe!==m||ue!==v)&&(t.blendEquationSeparate(Ke[fe],Ke[ue]),m=fe,v=ue),(V!==d||q!==_||de!==x||qe!==A)&&(t.blendFuncSeparate(Ue[V],Ue[q],Ue[de],Ue[qe]),d=V,_=q,x=de,A=qe),(Dt.equals(C)===!1||Sn!==M)&&(t.blendColor(Dt.r,Dt.g,Dt.b,Sn),C.copy(Dt),M=Sn),y=N,R=!1}function Nn(N,fe){N.side===Ii?oe(t.CULL_FACE):ae(t.CULL_FACE);let V=N.side===Rn;fe&&(V=!V),$e(V),N.blending===Ba&&N.transparent===!1?L(qr):L(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const q=N.stencilWrite;a.setTest(q),q&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),pt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function $e(N){H!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),H=N)}function Je(N){N!==MT?(ae(t.CULL_FACE),N!==w&&(N===Fv?t.cullFace(t.BACK):N===ET?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),w=N}function Pe(N){N!==T&&(J&&t.lineWidth(N),T=N)}function pt(N,fe,V){N?(ae(t.POLYGON_OFFSET_FILL),(G!==fe||B!==V)&&(t.polygonOffset(fe,V),G=fe,B=V)):oe(t.POLYGON_OFFSET_FILL)}function Ne(N){N?ae(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function b(N){N===void 0&&(N=t.TEXTURE0+X-1),I!==N&&(t.activeTexture(N),I=N)}function S(N,fe,V){V===void 0&&(I===null?V=t.TEXTURE0+X-1:V=I);let q=j[V];q===void 0&&(q={type:void 0,texture:void 0},j[V]=q),(q.type!==N||q.texture!==fe)&&(I!==V&&(t.activeTexture(V),I=V),t.bindTexture(N,fe||Z[N]),q.type=N,q.texture=fe)}function O(){const N=j[I];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Y(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Qe(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(N){xe.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),xe.copy(N))}function ve(N){He.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),He.copy(N))}function Ye(N,fe){let V=l.get(fe);V===void 0&&(V=new WeakMap,l.set(fe,V));let q=V.get(N);q===void 0&&(q=t.getUniformBlockIndex(fe,N.name),V.set(N,q))}function Oe(N,fe){const q=l.get(fe).get(N);o.get(fe)!==q&&(t.uniformBlockBinding(fe,q,N.__bindingPointIndex),o.set(fe,q))}function ft(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},I=null,j={},u={},h=new WeakMap,f=[],p=null,g=!1,y=null,m=null,d=null,_=null,v=null,x=null,A=null,C=new Re(0,0,0),M=0,R=!1,H=null,w=null,T=null,G=null,B=null,xe.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ae,disable:oe,bindFramebuffer:Ce,drawBuffers:Te,useProgram:Ve,setBlending:L,setMaterial:Nn,setFlipSided:$e,setCullFace:Je,setLineWidth:Pe,setPolygonOffset:pt,setScissorTest:Ne,activeTexture:b,bindTexture:S,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:ge,texImage3D:Le,updateUBOMapping:Ye,uniformBlockBinding:Oe,texStorage2D:Qe,texStorage3D:ie,texSubImage2D:$,texSubImage3D:Se,compressedTexSubImage2D:le,compressedTexSubImage3D:me,scissor:Ie,viewport:ve,reset:ft}}function U_(t,e,n,i){const r=RP(i);switch(n){case I1:return t*e;case D1:return t*e;case U1:return t*e*2;case Ig:return t*e/r.components*r.byteLength;case Ng:return t*e/r.components*r.byteLength;case O1:return t*e*2/r.components*r.byteLength;case Dg:return t*e*2/r.components*r.byteLength;case N1:return t*e*3/r.components*r.byteLength;case ti:return t*e*4/r.components*r.byteLength;case Ug:return t*e*4/r.components*r.byteLength;case Tu:case Cu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Au:case bu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Tp:case Ap:return Math.max(t,16)*Math.max(e,8)/4;case Ep:case Cp:return Math.max(t,8)*Math.max(e,8)/2;case bp:case Rp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Pp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Lp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ip:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Np:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Dp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Up:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Op:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case kp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Fp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Bp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case zp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Hp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Vp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Gp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Wp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ru:case Xp:case jp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case k1:case $p:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Yp:case Kp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function RP(t){switch(t){case dr:case R1:return{byteLength:1,components:1};case Ll:case P1:case ac:return{byteLength:2,components:1};case Pg:case Lg:return{byteLength:2,components:4};case Vs:case Rg:case wi:return{byteLength:4,components:1};case L1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function PP(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,S){return p?new OffscreenCanvas(b,S):Dl("canvas")}function y(b,S,O){let Y=1;const Q=Ne(b);if((Q.width>O||Q.height>O)&&(Y=O/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const $=Math.floor(Y*Q.width),Se=Math.floor(Y*Q.height);h===void 0&&(h=g($,Se));const le=S?g($,Se):h;return le.width=$,le.height=Se,le.getContext("2d").drawImage(b,0,0,$,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+Se+")."),le}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==vn&&b.minFilter!==Cn}function d(b){t.generateMipmap(b)}function _(b,S,O,Y,Q=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let $=S;if(S===t.RED&&(O===t.FLOAT&&($=t.R32F),O===t.HALF_FLOAT&&($=t.R16F),O===t.UNSIGNED_BYTE&&($=t.R8)),S===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&($=t.R8UI),O===t.UNSIGNED_SHORT&&($=t.R16UI),O===t.UNSIGNED_INT&&($=t.R32UI),O===t.BYTE&&($=t.R8I),O===t.SHORT&&($=t.R16I),O===t.INT&&($=t.R32I)),S===t.RG&&(O===t.FLOAT&&($=t.RG32F),O===t.HALF_FLOAT&&($=t.RG16F),O===t.UNSIGNED_BYTE&&($=t.RG8)),S===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&($=t.RG8UI),O===t.UNSIGNED_SHORT&&($=t.RG16UI),O===t.UNSIGNED_INT&&($=t.RG32UI),O===t.BYTE&&($=t.RG8I),O===t.SHORT&&($=t.RG16I),O===t.INT&&($=t.RG32I)),S===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&($=t.RGB8UI),O===t.UNSIGNED_SHORT&&($=t.RGB16UI),O===t.UNSIGNED_INT&&($=t.RGB32UI),O===t.BYTE&&($=t.RGB8I),O===t.SHORT&&($=t.RGB16I),O===t.INT&&($=t.RGB32I)),S===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&($=t.RGBA8UI),O===t.UNSIGNED_SHORT&&($=t.RGBA16UI),O===t.UNSIGNED_INT&&($=t.RGBA32UI),O===t.BYTE&&($=t.RGBA8I),O===t.SHORT&&($=t.RGBA16I),O===t.INT&&($=t.RGBA32I)),S===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),S===t.RGBA){const Se=Q?th:et.getTransfer(Y);O===t.FLOAT&&($=t.RGBA32F),O===t.HALF_FLOAT&&($=t.RGBA16F),O===t.UNSIGNED_BYTE&&($=Se===_t?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(b,S){let O;return b?S===null||S===Vs||S===io?O=t.DEPTH24_STENCIL8:S===wi?O=t.DEPTH32F_STENCIL8:S===Ll&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Vs||S===io?O=t.DEPTH_COMPONENT24:S===wi?O=t.DEPTH_COMPONENT32F:S===Ll&&(O=t.DEPTH_COMPONENT16),O}function x(b,S){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==vn&&b.minFilter!==Cn?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function A(b){const S=b.target;S.removeEventListener("dispose",A),M(S),S.isVideoTexture&&u.delete(S)}function C(b){const S=b.target;S.removeEventListener("dispose",C),H(S)}function M(b){const S=i.get(b);if(S.__webglInit===void 0)return;const O=b.source,Y=f.get(O);if(Y){const Q=Y[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(b),Object.keys(Y).length===0&&f.delete(O)}i.remove(b)}function R(b){const S=i.get(b);t.deleteTexture(S.__webglTexture);const O=b.source,Y=f.get(O);delete Y[S.__cacheKey],a.memory.textures--}function H(b){const S=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let Q=0;Q<S.__webglFramebuffer[Y].length;Q++)t.deleteFramebuffer(S.__webglFramebuffer[Y][Q]);else t.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)t.deleteFramebuffer(S.__webglFramebuffer[Y]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=b.textures;for(let Y=0,Q=O.length;Y<Q;Y++){const $=i.get(O[Y]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(O[Y])}i.remove(b)}let w=0;function T(){w=0}function G(){const b=w;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),w+=1,b}function B(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function X(b,S){const O=i.get(b);if(b.isVideoTexture&&Pe(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(O,b,S);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+S)}function J(b,S){const O=i.get(b);if(b.version>0&&O.__version!==b.version){He(O,b,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+S)}function z(b,S){const O=i.get(b);if(b.version>0&&O.__version!==b.version){He(O,b,S);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+S)}function te(b,S){const O=i.get(b);if(b.version>0&&O.__version!==b.version){W(O,b,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+S)}const I={[no]:t.REPEAT,[Gr]:t.CLAMP_TO_EDGE,[eh]:t.MIRRORED_REPEAT},j={[vn]:t.NEAREST,[b1]:t.NEAREST_MIPMAP_NEAREST,[nl]:t.NEAREST_MIPMAP_LINEAR,[Cn]:t.LINEAR,[Eu]:t.LINEAR_MIPMAP_NEAREST,[or]:t.LINEAR_MIPMAP_LINEAR},K={[sC]:t.NEVER,[hC]:t.ALWAYS,[aC]:t.LESS,[z1]:t.LEQUAL,[oC]:t.EQUAL,[uC]:t.GEQUAL,[lC]:t.GREATER,[cC]:t.NOTEQUAL};function ne(b,S){if(S.type===wi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Cn||S.magFilter===Eu||S.magFilter===nl||S.magFilter===or||S.minFilter===Cn||S.minFilter===Eu||S.minFilter===nl||S.minFilter===or)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,I[S.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,I[S.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,I[S.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,j[S.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,j[S.minFilter]),S.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,K[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===vn||S.minFilter!==nl&&S.minFilter!==or||S.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function xe(b,S){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",A));const Y=S.source;let Q=f.get(Y);Q===void 0&&(Q={},f.set(Y,Q));const $=B(S);if($!==b.__cacheKey){Q[$]===void 0&&(Q[$]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[$].usedTimes++;const Se=Q[b.__cacheKey];Se!==void 0&&(Q[b.__cacheKey].usedTimes--,Se.usedTimes===0&&R(S)),b.__cacheKey=$,b.__webglTexture=Q[$].texture}return O}function He(b,S,O){let Y=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=t.TEXTURE_3D);const Q=xe(b,S),$=S.source;n.bindTexture(Y,b.__webglTexture,t.TEXTURE0+O);const Se=i.get($);if($.version!==Se.__version||Q===!0){n.activeTexture(t.TEXTURE0+O);const le=et.getPrimaries(et.workingColorSpace),me=S.colorSpace===zr?null:et.getPrimaries(S.colorSpace),Qe=S.colorSpace===zr||le===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let ie=y(S.image,!1,r.maxTextureSize);ie=pt(S,ie);const ge=s.convert(S.format,S.colorSpace),Le=s.convert(S.type);let Ie=_(S.internalFormat,ge,Le,S.colorSpace,S.isVideoTexture);ne(Y,S);let ve;const Ye=S.mipmaps,Oe=S.isVideoTexture!==!0,ft=Se.__version===void 0||Q===!0,N=$.dataReady,fe=x(S,ie);if(S.isDepthTexture)Ie=v(S.format===ro,S.type),ft&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,Ie,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Ie,ie.width,ie.height,0,ge,Le,null));else if(S.isDataTexture)if(Ye.length>0){Oe&&ft&&n.texStorage2D(t.TEXTURE_2D,fe,Ie,Ye[0].width,Ye[0].height);for(let V=0,q=Ye.length;V<q;V++)ve=Ye[V],Oe?N&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,ve.width,ve.height,ge,Le,ve.data):n.texImage2D(t.TEXTURE_2D,V,Ie,ve.width,ve.height,0,ge,Le,ve.data);S.generateMipmaps=!1}else Oe?(ft&&n.texStorage2D(t.TEXTURE_2D,fe,Ie,ie.width,ie.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,ge,Le,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Ie,ie.width,ie.height,0,ge,Le,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Oe&&ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Ie,Ye[0].width,Ye[0].height,ie.depth);for(let V=0,q=Ye.length;V<q;V++)if(ve=Ye[V],S.format!==ti)if(ge!==null)if(Oe){if(N)if(S.layerUpdates.size>0){const ue=U_(ve.width,ve.height,S.format,S.type);for(const de of S.layerUpdates){const qe=ve.data.subarray(de*ue/ve.data.BYTES_PER_ELEMENT,(de+1)*ue/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,de,ve.width,ve.height,1,ge,qe,0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,ve.width,ve.height,ie.depth,ge,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,V,Ie,ve.width,ve.height,ie.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,ve.width,ve.height,ie.depth,ge,Le,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,V,Ie,ve.width,ve.height,ie.depth,0,ge,Le,ve.data)}else{Oe&&ft&&n.texStorage2D(t.TEXTURE_2D,fe,Ie,Ye[0].width,Ye[0].height);for(let V=0,q=Ye.length;V<q;V++)ve=Ye[V],S.format!==ti?ge!==null?Oe?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,V,0,0,ve.width,ve.height,ge,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,V,Ie,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?N&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,ve.width,ve.height,ge,Le,ve.data):n.texImage2D(t.TEXTURE_2D,V,Ie,ve.width,ve.height,0,ge,Le,ve.data)}else if(S.isDataArrayTexture)if(Oe){if(ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Ie,ie.width,ie.height,ie.depth),N)if(S.layerUpdates.size>0){const V=U_(ie.width,ie.height,S.format,S.type);for(const q of S.layerUpdates){const ue=ie.data.subarray(q*V/ie.data.BYTES_PER_ELEMENT,(q+1)*V/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,q,ie.width,ie.height,1,ge,Le,ue)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,Le,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,ie.width,ie.height,ie.depth,0,ge,Le,ie.data);else if(S.isData3DTexture)Oe?(ft&&n.texStorage3D(t.TEXTURE_3D,fe,Ie,ie.width,ie.height,ie.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,Le,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,ie.width,ie.height,ie.depth,0,ge,Le,ie.data);else if(S.isFramebufferTexture){if(ft)if(Oe)n.texStorage2D(t.TEXTURE_2D,fe,Ie,ie.width,ie.height);else{let V=ie.width,q=ie.height;for(let ue=0;ue<fe;ue++)n.texImage2D(t.TEXTURE_2D,ue,Ie,V,q,0,ge,Le,null),V>>=1,q>>=1}}else if(Ye.length>0){if(Oe&&ft){const V=Ne(Ye[0]);n.texStorage2D(t.TEXTURE_2D,fe,Ie,V.width,V.height)}for(let V=0,q=Ye.length;V<q;V++)ve=Ye[V],Oe?N&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,ge,Le,ve):n.texImage2D(t.TEXTURE_2D,V,Ie,ge,Le,ve);S.generateMipmaps=!1}else if(Oe){if(ft){const V=Ne(ie);n.texStorage2D(t.TEXTURE_2D,fe,Ie,V.width,V.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Le,ie)}else n.texImage2D(t.TEXTURE_2D,0,Ie,ge,Le,ie);m(S)&&d(Y),Se.__version=$.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function W(b,S,O){if(S.image.length!==6)return;const Y=xe(b,S),Q=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+O);const $=i.get(Q);if(Q.version!==$.__version||Y===!0){n.activeTexture(t.TEXTURE0+O);const Se=et.getPrimaries(et.workingColorSpace),le=S.colorSpace===zr?null:et.getPrimaries(S.colorSpace),me=S.colorSpace===zr||Se===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Qe=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,ge=[];for(let q=0;q<6;q++)!Qe&&!ie?ge[q]=y(S.image[q],!0,r.maxCubemapSize):ge[q]=ie?S.image[q].image:S.image[q],ge[q]=pt(S,ge[q]);const Le=ge[0],Ie=s.convert(S.format,S.colorSpace),ve=s.convert(S.type),Ye=_(S.internalFormat,Ie,ve,S.colorSpace),Oe=S.isVideoTexture!==!0,ft=$.__version===void 0||Y===!0,N=Q.dataReady;let fe=x(S,Le);ne(t.TEXTURE_CUBE_MAP,S);let V;if(Qe){Oe&&ft&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Ye,Le.width,Le.height);for(let q=0;q<6;q++){V=ge[q].mipmaps;for(let ue=0;ue<V.length;ue++){const de=V[ue];S.format!==ti?Ie!==null?Oe?N&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,0,0,de.width,de.height,Ie,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,Ye,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,0,0,de.width,de.height,Ie,ve,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,Ye,de.width,de.height,0,Ie,ve,de.data)}}}else{if(V=S.mipmaps,Oe&&ft){V.length>0&&fe++;const q=Ne(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Ye,q.width,q.height)}for(let q=0;q<6;q++)if(ie){Oe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ge[q].width,ge[q].height,Ie,ve,ge[q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ye,ge[q].width,ge[q].height,0,Ie,ve,ge[q].data);for(let ue=0;ue<V.length;ue++){const qe=V[ue].image[q].image;Oe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,0,0,qe.width,qe.height,Ie,ve,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,Ye,qe.width,qe.height,0,Ie,ve,qe.data)}}else{Oe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ie,ve,ge[q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ye,Ie,ve,ge[q]);for(let ue=0;ue<V.length;ue++){const de=V[ue];Oe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,0,0,Ie,ve,de.image[q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,Ye,Ie,ve,de.image[q])}}}m(S)&&d(t.TEXTURE_CUBE_MAP),$.__version=Q.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function Z(b,S,O,Y,Q,$){const Se=s.convert(O.format,O.colorSpace),le=s.convert(O.type),me=_(O.internalFormat,Se,le,O.colorSpace);if(!i.get(S).__hasExternalTextures){const ie=Math.max(1,S.width>>$),ge=Math.max(1,S.height>>$);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,$,me,ie,ge,S.depth,0,Se,le,null):n.texImage2D(Q,$,me,ie,ge,0,Se,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Je(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,Q,i.get(O).__webglTexture,0,$e(S)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,Q,i.get(O).__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(b,S,O){if(t.bindRenderbuffer(t.RENDERBUFFER,b),S.depthBuffer){const Y=S.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,$=v(S.stencilBuffer,Q),Se=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=$e(S);Je(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,$,S.width,S.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,$,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,$,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,b)}else{const Y=S.textures;for(let Q=0;Q<Y.length;Q++){const $=Y[Q],Se=s.convert($.format,$.colorSpace),le=s.convert($.type),me=_($.internalFormat,Se,le,$.colorSpace),Qe=$e(S);O&&Je(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Qe,me,S.width,S.height):Je(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Qe,me,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,me,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function oe(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const Y=i.get(S.depthTexture).__webglTexture,Q=$e(S);if(S.depthTexture.format===za)Je(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0);else if(S.depthTexture.format===ro)Je(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ce(b){const S=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==b.depthTexture){const Y=b.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=Y}if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");oe(S.__webglFramebuffer,b)}else if(O){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=t.createRenderbuffer(),ae(S.__webglDepthbuffer[Y],b,!1);else{const Q=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,$)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),ae(S.__webglDepthbuffer,b,!1);else{const Y=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,Q)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(b,S,O){const Y=i.get(b);S!==void 0&&Z(Y.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&Ce(b)}function Ve(b){const S=b.texture,O=i.get(b),Y=i.get(S);b.addEventListener("dispose",C);const Q=b.textures,$=b.isWebGLCubeRenderTarget===!0,Se=Q.length>1;if(Se||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=S.version,a.memory.textures++),$){O.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[le]=[];for(let me=0;me<S.mipmaps.length;me++)O.__webglFramebuffer[le][me]=t.createFramebuffer()}else O.__webglFramebuffer[le]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)O.__webglFramebuffer[le]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(Se)for(let le=0,me=Q.length;le<me;le++){const Qe=i.get(Q[le]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=t.createTexture(),a.memory.textures++)}if(b.samples>0&&Je(b)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){const me=Q[le];O.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[le]);const Qe=s.convert(me.format,me.colorSpace),ie=s.convert(me.type),ge=_(me.internalFormat,Qe,ie,me.colorSpace,b.isXRRenderTarget===!0),Le=$e(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,ge,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,O.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),ae(O.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),ne(t.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)Z(O.__webglFramebuffer[le][me],b,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,me);else Z(O.__webglFramebuffer[le],b,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(S)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let le=0,me=Q.length;le<me;le++){const Qe=Q[le],ie=i.get(Qe);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),ne(t.TEXTURE_2D,Qe),Z(O.__webglFramebuffer,b,Qe,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),m(Qe)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(le=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,Y.__webglTexture),ne(le,S),S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)Z(O.__webglFramebuffer[me],b,S,t.COLOR_ATTACHMENT0,le,me);else Z(O.__webglFramebuffer,b,S,t.COLOR_ATTACHMENT0,le,0);m(S)&&d(le),n.unbindTexture()}b.depthBuffer&&Ce(b)}function Ke(b){const S=b.textures;for(let O=0,Y=S.length;O<Y;O++){const Q=S[O];if(m(Q)){const $=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Se=i.get(Q).__webglTexture;n.bindTexture($,Se),d($),n.unbindTexture()}}}const Ue=[],L=[];function Nn(b){if(b.samples>0){if(Je(b)===!1){const S=b.textures,O=b.width,Y=b.height;let Q=t.COLOR_BUFFER_BIT;const $=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(b),le=S.length>1;if(le)for(let me=0;me<S.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let me=0;me<S.length;me++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[me]);const Qe=i.get(S[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Qe,0)}t.blitFramebuffer(0,0,O,Y,0,0,O,Y,Q,t.NEAREST),l===!0&&(Ue.length=0,L.length=0,Ue.push(t.COLOR_ATTACHMENT0+me),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ue.push($),L.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ue))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let me=0;me<S.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,Se.__webglColorRenderbuffer[me]);const Qe=i.get(S[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,Qe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const S=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function $e(b){return Math.min(r.maxSamples,b.samples)}function Je(b){const S=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pe(b){const S=a.render.frame;u.get(b)!==S&&(u.set(b,S),b.update())}function pt(b,S){const O=b.colorSpace,Y=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==en&&O!==zr&&(et.getTransfer(O)===_t?(Y!==ti||Q!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function Ne(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=T,this.setTexture2D=X,this.setTexture2DArray=J,this.setTexture3D=z,this.setTextureCube=te,this.rebindTextures=Te,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Nn,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=Je}function LP(t,e){function n(i,r=zr){let s;const a=et.getTransfer(r);if(i===dr)return t.UNSIGNED_BYTE;if(i===Pg)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Lg)return t.UNSIGNED_SHORT_5_5_5_1;if(i===L1)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===R1)return t.BYTE;if(i===P1)return t.SHORT;if(i===Ll)return t.UNSIGNED_SHORT;if(i===Rg)return t.INT;if(i===Vs)return t.UNSIGNED_INT;if(i===wi)return t.FLOAT;if(i===ac)return t.HALF_FLOAT;if(i===I1)return t.ALPHA;if(i===N1)return t.RGB;if(i===ti)return t.RGBA;if(i===D1)return t.LUMINANCE;if(i===U1)return t.LUMINANCE_ALPHA;if(i===za)return t.DEPTH_COMPONENT;if(i===ro)return t.DEPTH_STENCIL;if(i===Ig)return t.RED;if(i===Ng)return t.RED_INTEGER;if(i===O1)return t.RG;if(i===Dg)return t.RG_INTEGER;if(i===Ug)return t.RGBA_INTEGER;if(i===Tu||i===Cu||i===Au||i===bu)if(a===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Tu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Au)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Tu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Au)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ep||i===Tp||i===Cp||i===Ap)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ep)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ap)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bp||i===Rp||i===Pp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===bp||i===Rp)return a===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Pp)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Lp||i===Ip||i===Np||i===Dp||i===Up||i===Op||i===kp||i===Fp||i===Bp||i===zp||i===Hp||i===Vp||i===Gp||i===Wp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Lp)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ip)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Np)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dp)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Up)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Op)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kp)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fp)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bp)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zp)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hp)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vp)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gp)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wp)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ru||i===Xp||i===jp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ru)return a===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===k1||i===$p||i===Yp||i===Kp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ru)return s.COMPRESSED_RED_RGTC1_EXT;if(i===$p)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===io?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class IP extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xr extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NP={type:"move"};class ld{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),d=this._getHandJoint(c,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(NP)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Xr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const DP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class OP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Vt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new pr({vertexShader:DP,fragmentShader:UP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _n(new lc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kP extends Qs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const y=new OP,m=n.getContextAttributes();let d=null,_=null;const v=[],x=[],A=new ce;let C=null;const M=new gn;M.layers.enable(1),M.viewport=new nt;const R=new gn;R.layers.enable(2),R.viewport=new nt;const H=[M,R],w=new IP;w.layers.enable(1),w.layers.enable(2);let T=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=v[W];return Z===void 0&&(Z=new ld,v[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=v[W];return Z===void 0&&(Z=new ld,v[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=v[W];return Z===void 0&&(Z=new ld,v[W]=Z),Z.getHandSpace()};function B(W){const Z=x.indexOf(W.inputSource);if(Z===-1)return;const ae=v[Z];ae!==void 0&&(ae.update(W.inputSource,W.frame,c||a),ae.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",J);for(let W=0;W<v.length;W++){const Z=x[W];Z!==null&&(x[W]=null,v[W].disconnect(Z))}T=null,G=null,y.reset(),e.setRenderTarget(d),p=null,f=null,h=null,r=null,_=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",X),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Z),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Gs(p.framebufferWidth,p.framebufferHeight,{format:ti,type:dr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,ae=null,oe=null;m.depth&&(oe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=m.stencil?ro:za,ae=m.stencil?io:Vs);const Ce={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(Ce),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Gs(f.textureWidth,f.textureHeight,{format:ti,type:dr,depthTexture:new Q1(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J(W){for(let Z=0;Z<W.removed.length;Z++){const ae=W.removed[Z],oe=x.indexOf(ae);oe>=0&&(x[oe]=null,v[oe].disconnect(ae))}for(let Z=0;Z<W.added.length;Z++){const ae=W.added[Z];let oe=x.indexOf(ae);if(oe===-1){for(let Te=0;Te<v.length;Te++)if(Te>=x.length){x.push(ae),oe=Te;break}else if(x[Te]===null){x[Te]=ae,oe=Te;break}if(oe===-1)break}const Ce=v[oe];Ce&&Ce.connect(ae)}}const z=new P,te=new P;function I(W,Z,ae){z.setFromMatrixPosition(Z.matrixWorld),te.setFromMatrixPosition(ae.matrixWorld);const oe=z.distanceTo(te),Ce=Z.projectionMatrix.elements,Te=ae.projectionMatrix.elements,Ve=Ce[14]/(Ce[10]-1),Ke=Ce[14]/(Ce[10]+1),Ue=(Ce[9]+1)/Ce[5],L=(Ce[9]-1)/Ce[5],Nn=(Ce[8]-1)/Ce[0],$e=(Te[8]+1)/Te[0],Je=Ve*Nn,Pe=Ve*$e,pt=oe/(-Nn+$e),Ne=pt*-Nn;if(Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ne),W.translateZ(pt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ce[10]===-1)W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const b=Ve+pt,S=Ke+pt,O=Je-Ne,Y=Pe+(oe-Ne),Q=Ue*Ke/S*b,$=L*Ke/S*b;W.projectionMatrix.makePerspective(O,Y,Q,$,b,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function j(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let Z=W.near,ae=W.far;y.texture!==null&&(y.depthNear>0&&(Z=y.depthNear),y.depthFar>0&&(ae=y.depthFar)),w.near=R.near=M.near=Z,w.far=R.far=M.far=ae,(T!==w.near||G!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),T=w.near,G=w.far);const oe=W.parent,Ce=w.cameras;j(w,oe);for(let Te=0;Te<Ce.length;Te++)j(Ce[Te],oe);Ce.length===2?I(w,M,R):w.projectionMatrix.copy(M.projectionMatrix),K(W,w,oe)};function K(W,Z,ae){ae===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(ae.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=so*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(w)};let ne=null;function xe(W,Z){if(u=Z.getViewerPose(c||a),g=Z,u!==null){const ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let oe=!1;ae.length!==w.cameras.length&&(w.cameras.length=0,oe=!0);for(let Te=0;Te<ae.length;Te++){const Ve=ae[Te];let Ke=null;if(p!==null)Ke=p.getViewport(Ve);else{const L=h.getViewSubImage(f,Ve);Ke=L.viewport,Te===0&&(e.setRenderTargetTextures(_,L.colorTexture,f.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(_))}let Ue=H[Te];Ue===void 0&&(Ue=new gn,Ue.layers.enable(Te),Ue.viewport=new nt,H[Te]=Ue),Ue.matrix.fromArray(Ve.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Ve.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Te===0&&(w.matrix.copy(Ue.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),oe===!0&&w.cameras.push(Ue)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Te=h.getDepthInformation(ae[0]);Te&&Te.isValid&&Te.texture&&y.init(e,Te,r.renderState)}}for(let ae=0;ae<v.length;ae++){const oe=x[ae],Ce=v[ae];oe!==null&&Ce!==void 0&&Ce.update(oe,Z,c||a)}ne&&ne(W,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const He=new J1;He.setAnimationLoop(xe),this.setAnimationLoop=function(W){ne=W},this.dispose=function(){}}}const ws=new Bi,FP=new De;function BP(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,K1(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,_,v,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),y(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,_,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Rn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Rn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d),v=_.envMap,x=_.envMapRotation;v&&(m.envMap.value=v,ws.copy(x),ws.x*=-1,ws.y*=-1,ws.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),m.envMapRotation.value.setFromMatrix4(FP.makeRotationFromEuler(ws)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=v*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Rn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function zP(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const x=v.program;i.uniformBlockBinding(_,x)}function c(_,v){let x=r[_.id];x===void 0&&(g(_),x=u(_),r[_.id]=x,_.addEventListener("dispose",m));const A=v.program;i.updateUBOMapping(_,A);const C=e.render.frame;s[_.id]!==C&&(f(_),s[_.id]=C)}function u(_){const v=h();_.__bindingPointIndex=v;const x=t.createBuffer(),A=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,A,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,x),x}function h(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const v=r[_.id],x=_.uniforms,A=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,M=x.length;C<M;C++){const R=Array.isArray(x[C])?x[C]:[x[C]];for(let H=0,w=R.length;H<w;H++){const T=R[H];if(p(T,C,H,A)===!0){const G=T.__offset,B=Array.isArray(T.value)?T.value:[T.value];let X=0;for(let J=0;J<B.length;J++){const z=B[J],te=y(z);typeof z=="number"||typeof z=="boolean"?(T.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,G+X,T.__data)):z.isMatrix3?(T.__data[0]=z.elements[0],T.__data[1]=z.elements[1],T.__data[2]=z.elements[2],T.__data[3]=0,T.__data[4]=z.elements[3],T.__data[5]=z.elements[4],T.__data[6]=z.elements[5],T.__data[7]=0,T.__data[8]=z.elements[6],T.__data[9]=z.elements[7],T.__data[10]=z.elements[8],T.__data[11]=0):(z.toArray(T.__data,X),X+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,T.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,v,x,A){const C=_.value,M=v+"_"+x;if(A[M]===void 0)return typeof C=="number"||typeof C=="boolean"?A[M]=C:A[M]=C.clone(),!0;{const R=A[M];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return A[M]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function g(_){const v=_.uniforms;let x=0;const A=16;for(let M=0,R=v.length;M<R;M++){const H=Array.isArray(v[M])?v[M]:[v[M]];for(let w=0,T=H.length;w<T;w++){const G=H[w],B=Array.isArray(G.value)?G.value:[G.value];for(let X=0,J=B.length;X<J;X++){const z=B[X],te=y(z),I=x%A,j=I%te.boundary,K=I+j;x+=j,K!==0&&A-K<te.storage&&(x+=A-K),G.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=te.storage}}}const C=x%A;return C>0&&(x+=A-C),_.__size=x,_.__cache={},this}function y(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const _ in r)t.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class HP{constructor(e={}){const{canvas:n=bC(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const p=new Uint32Array(4),g=new Int32Array(4);let y=null,m=null;const d=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this.toneMapping=Zr,this.toneMappingExposure=1;const v=this;let x=!1,A=0,C=0,M=null,R=-1,H=null;const w=new nt,T=new nt;let G=null;const B=new Re(0);let X=0,J=n.width,z=n.height,te=1,I=null,j=null;const K=new nt(0,0,J,z),ne=new nt(0,0,J,z);let xe=!1;const He=new Bg;let W=!1,Z=!1;const ae=new De,oe=new De,Ce=new P,Te=new nt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function Ue(){return M===null?te:1}let L=i;function Nn(E,D){return n.getContext(E,D)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${bg}`),n.addEventListener("webglcontextlost",q,!1),n.addEventListener("webglcontextrestored",ue,!1),n.addEventListener("webglcontextcreationerror",de,!1),L===null){const D="webgl2";if(L=Nn(D,E),L===null)throw Nn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let $e,Je,Pe,pt,Ne,b,S,O,Y,Q,$,Se,le,me,Qe,ie,ge,Le,Ie,ve,Ye,Oe,ft,N;function fe(){$e=new jR(L),$e.init(),Oe=new LP(L,$e),Je=new zR(L,$e,e,Oe),Pe=new bP(L),Je.reverseDepthBuffer&&Pe.buffers.depth.setReversed(!0),pt=new KR(L),Ne=new dP,b=new PP(L,$e,Pe,Ne,Je,Oe,pt),S=new VR(v),O=new XR(v),Y=new nA(L),ft=new FR(L,Y),Q=new $R(L,Y,pt,ft),$=new ZR(L,Q,Y,pt),Ie=new qR(L,Je,b),ie=new HR(Ne),Se=new fP(v,S,O,$e,Je,ft,ie),le=new BP(v,Ne),me=new mP,Qe=new wP($e),Le=new kR(v,S,O,Pe,$,f,l),ge=new CP(v,$,Je),N=new zP(L,pt,Je,Pe),ve=new BR(L,$e,pt),Ye=new YR(L,$e,pt),pt.programs=Se.programs,v.capabilities=Je,v.extensions=$e,v.properties=Ne,v.renderLists=me,v.shadowMap=ge,v.state=Pe,v.info=pt}fe();const V=new kP(v,L);this.xr=V,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=$e.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=$e.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(E){E!==void 0&&(te=E,this.setSize(J,z,!1))},this.getSize=function(E){return E.set(J,z)},this.setSize=function(E,D,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=E,z=D,n.width=Math.floor(E*te),n.height=Math.floor(D*te),k===!0&&(n.style.width=E+"px",n.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(J*te,z*te).floor()},this.setDrawingBufferSize=function(E,D,k){J=E,z=D,te=k,n.width=Math.floor(E*k),n.height=Math.floor(D*k),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(K)},this.setViewport=function(E,D,k,F){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,D,k,F),Pe.viewport(w.copy(K).multiplyScalar(te).round())},this.getScissor=function(E){return E.copy(ne)},this.setScissor=function(E,D,k,F){E.isVector4?ne.set(E.x,E.y,E.z,E.w):ne.set(E,D,k,F),Pe.scissor(T.copy(ne).multiplyScalar(te).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(E){Pe.setScissorTest(xe=E)},this.setOpaqueSort=function(E){I=E},this.setTransparentSort=function(E){j=E},this.getClearColor=function(E){return E.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(E=!0,D=!0,k=!0){let F=0;if(E){let U=!1;if(M!==null){const re=M.texture.format;U=re===Ug||re===Dg||re===Ng}if(U){const re=M.texture.type,he=re===dr||re===Vs||re===Ll||re===io||re===Pg||re===Lg,ye=Le.getClearColor(),we=Le.getClearAlpha(),Ae=ye.r,be=ye.g,Me=ye.b;he?(p[0]=Ae,p[1]=be,p[2]=Me,p[3]=we,L.clearBufferuiv(L.COLOR,0,p)):(g[0]=Ae,g[1]=be,g[2]=Me,g[3]=we,L.clearBufferiv(L.COLOR,0,g))}else F|=L.COLOR_BUFFER_BIT}D&&(F|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(F|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",q,!1),n.removeEventListener("webglcontextrestored",ue,!1),n.removeEventListener("webglcontextcreationerror",de,!1),me.dispose(),Qe.dispose(),Ne.dispose(),S.dispose(),O.dispose(),$.dispose(),ft.dispose(),N.dispose(),Se.dispose(),V.dispose(),V.removeEventListener("sessionstart",Rv),V.removeEventListener("sessionend",Pv),ms.stop()};function q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const E=pt.autoReset,D=ge.enabled,k=ge.autoUpdate,F=ge.needsUpdate,U=ge.type;fe(),pt.autoReset=E,ge.enabled=D,ge.autoUpdate=k,ge.needsUpdate=F,ge.type=U}function de(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function qe(E){const D=E.target;D.removeEventListener("dispose",qe),Dt(D)}function Dt(E){Sn(E),Ne.remove(E)}function Sn(E){const D=Ne.get(E).programs;D!==void 0&&(D.forEach(function(k){Se.releaseProgram(k)}),E.isShaderMaterial&&Se.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,k,F,U,re){D===null&&(D=Ve);const he=U.isMesh&&U.matrixWorld.determinant()<0,ye=vT(E,D,k,F,U);Pe.setMaterial(F,he);let we=k.index,Ae=1;if(F.wireframe===!0){if(we=Q.getWireframeAttribute(k),we===void 0)return;Ae=2}const be=k.drawRange,Me=k.attributes.position;let at=be.start*Ae,mt=(be.start+be.count)*Ae;re!==null&&(at=Math.max(at,re.start*Ae),mt=Math.min(mt,(re.start+re.count)*Ae)),we!==null?(at=Math.max(at,0),mt=Math.min(mt,we.count)):Me!=null&&(at=Math.max(at,0),mt=Math.min(mt,Me.count));const Rt=mt-at;if(Rt<0||Rt===1/0)return;ft.setup(U,F,ye,k,we);let Dn,it=ve;if(we!==null&&(Dn=Y.get(we),it=Ye,it.setIndex(Dn)),U.isMesh)F.wireframe===!0?(Pe.setLineWidth(F.wireframeLinewidth*Ue()),it.setMode(L.LINES)):it.setMode(L.TRIANGLES);else if(U.isLine){let Ee=F.linewidth;Ee===void 0&&(Ee=1),Pe.setLineWidth(Ee*Ue()),U.isLineSegments?it.setMode(L.LINES):U.isLineLoop?it.setMode(L.LINE_LOOP):it.setMode(L.LINE_STRIP)}else U.isPoints?it.setMode(L.POINTS):U.isSprite&&it.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)it.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))it.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ee=U._multiDrawStarts,Kt=U._multiDrawCounts,rt=U._multiDrawCount,hi=we?Y.get(we).bytesPerElement:1,na=Ne.get(F).currentProgram.getUniforms();for(let Un=0;Un<rt;Un++)na.setValue(L,"_gl_DrawID",Un),it.render(Ee[Un]/hi,Kt[Un])}else if(U.isInstancedMesh)it.renderInstances(at,Rt,U.count);else if(k.isInstancedBufferGeometry){const Ee=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Kt=Math.min(k.instanceCount,Ee);it.renderInstances(at,Rt,Kt)}else it.render(at,Rt)};function tt(E,D,k){E.transparent===!0&&E.side===Ii&&E.forceSinglePass===!1?(E.side=Rn,E.needsUpdate=!0,Mc(E,D,k),E.side=fr,E.needsUpdate=!0,Mc(E,D,k),E.side=Ii):Mc(E,D,k)}this.compile=function(E,D,k=null){k===null&&(k=E),m=Qe.get(k),m.init(D),_.push(m),k.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),E!==k&&E.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const F=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const re=U.material;if(re)if(Array.isArray(re))for(let he=0;he<re.length;he++){const ye=re[he];tt(ye,k,U),F.add(ye)}else tt(re,k,U),F.add(re)}),_.pop(),m=null,F},this.compileAsync=function(E,D,k=null){const F=this.compile(E,D,k);return new Promise(U=>{function re(){if(F.forEach(function(he){Ne.get(he).currentProgram.isReady()&&F.delete(he)}),F.size===0){U(E);return}setTimeout(re,10)}$e.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Mn=null;function ji(E){Mn&&Mn(E)}function Rv(){ms.stop()}function Pv(){ms.start()}const ms=new J1;ms.setAnimationLoop(ji),typeof self<"u"&&ms.setContext(self),this.setAnimationLoop=function(E){Mn=E,V.setAnimationLoop(E),E===null?ms.stop():ms.start()},V.addEventListener("sessionstart",Rv),V.addEventListener("sessionend",Pv),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(D),D=V.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,D,M),m=Qe.get(E,_.length),m.init(D),_.push(m),oe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),He.setFromProjectionMatrix(oe),Z=this.localClippingEnabled,W=ie.init(this.clippingPlanes,Z),y=me.get(E,d.length),y.init(),d.push(y),V.enabled===!0&&V.isPresenting===!0){const re=v.xr.getDepthSensingMesh();re!==null&&Pf(re,D,-1/0,v.sortObjects)}Pf(E,D,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(I,j),Ke=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Ke&&Le.addToRenderList(y,E),this.info.render.frame++,W===!0&&ie.beginShadows();const k=m.state.shadowsArray;ge.render(k,E,D),W===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=y.opaque,U=y.transmissive;if(m.setupLights(),D.isArrayCamera){const re=D.cameras;if(U.length>0)for(let he=0,ye=re.length;he<ye;he++){const we=re[he];Iv(F,U,E,we)}Ke&&Le.render(E);for(let he=0,ye=re.length;he<ye;he++){const we=re[he];Lv(y,E,we,we.viewport)}}else U.length>0&&Iv(F,U,E,D),Ke&&Le.render(E),Lv(y,E,D);M!==null&&(b.updateMultisampleRenderTarget(M),b.updateRenderTargetMipmap(M)),E.isScene===!0&&E.onAfterRender(v,E,D),ft.resetDefaultState(),R=-1,H=null,_.pop(),_.length>0?(m=_[_.length-1],W===!0&&ie.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function Pf(E,D,k,F){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||He.intersectsSprite(E)){F&&Te.setFromMatrixPosition(E.matrixWorld).applyMatrix4(oe);const he=$.update(E),ye=E.material;ye.visible&&y.push(E,he,ye,k,Te.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||He.intersectsObject(E))){const he=$.update(E),ye=E.material;if(F&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Te.copy(E.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Te.copy(he.boundingSphere.center)),Te.applyMatrix4(E.matrixWorld).applyMatrix4(oe)),Array.isArray(ye)){const we=he.groups;for(let Ae=0,be=we.length;Ae<be;Ae++){const Me=we[Ae],at=ye[Me.materialIndex];at&&at.visible&&y.push(E,he,at,k,Te.z,Me)}}else ye.visible&&y.push(E,he,ye,k,Te.z,null)}}const re=E.children;for(let he=0,ye=re.length;he<ye;he++)Pf(re[he],D,k,F)}function Lv(E,D,k,F){const U=E.opaque,re=E.transmissive,he=E.transparent;m.setupLightsView(k),W===!0&&ie.setGlobalState(v.clippingPlanes,k),F&&Pe.viewport(w.copy(F)),U.length>0&&Sc(U,D,k),re.length>0&&Sc(re,D,k),he.length>0&&Sc(he,D,k),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Iv(E,D,k,F){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[F.id]===void 0&&(m.state.transmissionRenderTarget[F.id]=new Gs(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?ac:dr,minFilter:or,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const re=m.state.transmissionRenderTarget[F.id],he=F.viewport||w;re.setSize(he.z,he.w);const ye=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(B),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Ke&&Le.render(k);const we=v.toneMapping;v.toneMapping=Zr;const Ae=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),m.setupLightsView(F),W===!0&&ie.setGlobalState(v.clippingPlanes,F),Sc(E,k,F),b.updateMultisampleRenderTarget(re),b.updateRenderTargetMipmap(re),$e.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Me=0,at=D.length;Me<at;Me++){const mt=D[Me],Rt=mt.object,Dn=mt.geometry,it=mt.material,Ee=mt.group;if(it.side===Ii&&Rt.layers.test(F.layers)){const Kt=it.side;it.side=Rn,it.needsUpdate=!0,Nv(Rt,k,F,Dn,it,Ee),it.side=Kt,it.needsUpdate=!0,be=!0}}be===!0&&(b.updateMultisampleRenderTarget(re),b.updateRenderTargetMipmap(re))}v.setRenderTarget(ye),v.setClearColor(B,X),Ae!==void 0&&(F.viewport=Ae),v.toneMapping=we}function Sc(E,D,k){const F=D.isScene===!0?D.overrideMaterial:null;for(let U=0,re=E.length;U<re;U++){const he=E[U],ye=he.object,we=he.geometry,Ae=F===null?he.material:F,be=he.group;ye.layers.test(k.layers)&&Nv(ye,D,k,we,Ae,be)}}function Nv(E,D,k,F,U,re){E.onBeforeRender(v,D,k,F,U,re),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(v,D,k,F,E,re),U.transparent===!0&&U.side===Ii&&U.forceSinglePass===!1?(U.side=Rn,U.needsUpdate=!0,v.renderBufferDirect(k,D,F,U,E,re),U.side=fr,U.needsUpdate=!0,v.renderBufferDirect(k,D,F,U,E,re),U.side=Ii):v.renderBufferDirect(k,D,F,U,E,re),E.onAfterRender(v,D,k,F,U,re)}function Mc(E,D,k){D.isScene!==!0&&(D=Ve);const F=Ne.get(E),U=m.state.lights,re=m.state.shadowsArray,he=U.state.version,ye=Se.getParameters(E,U.state,re,D,k),we=Se.getProgramCacheKey(ye);let Ae=F.programs;F.environment=E.isMeshStandardMaterial?D.environment:null,F.fog=D.fog,F.envMap=(E.isMeshStandardMaterial?O:S).get(E.envMap||F.environment),F.envMapRotation=F.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",qe),Ae=new Map,F.programs=Ae);let be=Ae.get(we);if(be!==void 0){if(F.currentProgram===be&&F.lightsStateVersion===he)return Uv(E,ye),be}else ye.uniforms=Se.getUniforms(E),E.onBeforeCompile(ye,v),be=Se.acquireProgram(ye,we),Ae.set(we,be),F.uniforms=ye.uniforms;const Me=F.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Me.clippingPlanes=ie.uniform),Uv(E,ye),F.needsLights=yT(E),F.lightsStateVersion=he,F.needsLights&&(Me.ambientLightColor.value=U.state.ambient,Me.lightProbe.value=U.state.probe,Me.directionalLights.value=U.state.directional,Me.directionalLightShadows.value=U.state.directionalShadow,Me.spotLights.value=U.state.spot,Me.spotLightShadows.value=U.state.spotShadow,Me.rectAreaLights.value=U.state.rectArea,Me.ltc_1.value=U.state.rectAreaLTC1,Me.ltc_2.value=U.state.rectAreaLTC2,Me.pointLights.value=U.state.point,Me.pointLightShadows.value=U.state.pointShadow,Me.hemisphereLights.value=U.state.hemi,Me.directionalShadowMap.value=U.state.directionalShadowMap,Me.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Me.spotShadowMap.value=U.state.spotShadowMap,Me.spotLightMatrix.value=U.state.spotLightMatrix,Me.spotLightMap.value=U.state.spotLightMap,Me.pointShadowMap.value=U.state.pointShadowMap,Me.pointShadowMatrix.value=U.state.pointShadowMatrix),F.currentProgram=be,F.uniformsList=null,be}function Dv(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=Lu.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function Uv(E,D){const k=Ne.get(E);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.batchingColor=D.batchingColor,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function vT(E,D,k,F,U){D.isScene!==!0&&(D=Ve),b.resetTextureUnits();const re=D.fog,he=F.isMeshStandardMaterial?D.environment:null,ye=M===null?v.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:en,we=(F.isMeshStandardMaterial?O:S).get(F.envMap||he),Ae=F.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,be=!!k.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Me=!!k.morphAttributes.position,at=!!k.morphAttributes.normal,mt=!!k.morphAttributes.color;let Rt=Zr;F.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Rt=v.toneMapping);const Dn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,it=Dn!==void 0?Dn.length:0,Ee=Ne.get(F),Kt=m.state.lights;if(W===!0&&(Z===!0||E!==H)){const qn=E===H&&F.id===R;ie.setState(F,E,qn)}let rt=!1;F.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Kt.state.version||Ee.outputColorSpace!==ye||U.isBatchedMesh&&Ee.batching===!1||!U.isBatchedMesh&&Ee.batching===!0||U.isBatchedMesh&&Ee.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ee.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ee.instancing===!1||!U.isInstancedMesh&&Ee.instancing===!0||U.isSkinnedMesh&&Ee.skinning===!1||!U.isSkinnedMesh&&Ee.skinning===!0||U.isInstancedMesh&&Ee.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ee.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ee.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ee.instancingMorph===!1&&U.morphTexture!==null||Ee.envMap!==we||F.fog===!0&&Ee.fog!==re||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ie.numPlanes||Ee.numIntersection!==ie.numIntersection)||Ee.vertexAlphas!==Ae||Ee.vertexTangents!==be||Ee.morphTargets!==Me||Ee.morphNormals!==at||Ee.morphColors!==mt||Ee.toneMapping!==Rt||Ee.morphTargetsCount!==it)&&(rt=!0):(rt=!0,Ee.__version=F.version);let hi=Ee.currentProgram;rt===!0&&(hi=Mc(F,D,U));let na=!1,Un=!1,Lf=!1;const It=hi.getUniforms(),Tr=Ee.uniforms;if(Pe.useProgram(hi.program)&&(na=!0,Un=!0,Lf=!0),F.id!==R&&(R=F.id,Un=!0),na||H!==E){Je.reverseDepthBuffer?(ae.copy(E.projectionMatrix),PC(ae),LC(ae),It.setValue(L,"projectionMatrix",ae)):It.setValue(L,"projectionMatrix",E.projectionMatrix),It.setValue(L,"viewMatrix",E.matrixWorldInverse);const qn=It.map.cameraPosition;qn!==void 0&&qn.setValue(L,Ce.setFromMatrixPosition(E.matrixWorld)),Je.logarithmicDepthBuffer&&It.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&It.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),H!==E&&(H=E,Un=!0,Lf=!0)}if(U.isSkinnedMesh){It.setOptional(L,U,"bindMatrix"),It.setOptional(L,U,"bindMatrixInverse");const qn=U.skeleton;qn&&(qn.boneTexture===null&&qn.computeBoneTexture(),It.setValue(L,"boneTexture",qn.boneTexture,b))}U.isBatchedMesh&&(It.setOptional(L,U,"batchingTexture"),It.setValue(L,"batchingTexture",U._matricesTexture,b),It.setOptional(L,U,"batchingIdTexture"),It.setValue(L,"batchingIdTexture",U._indirectTexture,b),It.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&It.setValue(L,"batchingColorTexture",U._colorsTexture,b));const If=k.morphAttributes;if((If.position!==void 0||If.normal!==void 0||If.color!==void 0)&&Ie.update(U,k,hi),(Un||Ee.receiveShadow!==U.receiveShadow)&&(Ee.receiveShadow=U.receiveShadow,It.setValue(L,"receiveShadow",U.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Tr.envMap.value=we,Tr.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&D.environment!==null&&(Tr.envMapIntensity.value=D.environmentIntensity),Un&&(It.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ee.needsLights&&_T(Tr,Lf),re&&F.fog===!0&&le.refreshFogUniforms(Tr,re),le.refreshMaterialUniforms(Tr,F,te,z,m.state.transmissionRenderTarget[E.id]),Lu.upload(L,Dv(Ee),Tr,b)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Lu.upload(L,Dv(Ee),Tr,b),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&It.setValue(L,"center",U.center),It.setValue(L,"modelViewMatrix",U.modelViewMatrix),It.setValue(L,"normalMatrix",U.normalMatrix),It.setValue(L,"modelMatrix",U.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const qn=F.uniformsGroups;for(let Nf=0,xT=qn.length;Nf<xT;Nf++){const Ov=qn[Nf];N.update(Ov,hi),N.bind(Ov,hi)}}return hi}function _T(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function yT(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(E,D,k){Ne.get(E.texture).__webglTexture=D,Ne.get(E.depthTexture).__webglTexture=k;const F=Ne.get(E);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=k===void 0,F.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,D){const k=Ne.get(E);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,k=0){M=E,A=D,C=k;let F=!0,U=null,re=!1,he=!1;if(E){const we=Ne.get(E);if(we.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(L.FRAMEBUFFER,null),F=!1;else if(we.__webglFramebuffer===void 0)b.setupRenderTarget(E);else if(we.__hasExternalTextures)b.rebindTextures(E,Ne.get(E.texture).__webglTexture,Ne.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Me=E.depthTexture;if(we.__boundDepthTexture!==Me){if(Me!==null&&Ne.has(Me)&&(E.width!==Me.image.width||E.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(E)}}const Ae=E.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(he=!0);const be=Ne.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(be[D])?U=be[D][k]:U=be[D],re=!0):E.samples>0&&b.useMultisampledRTT(E)===!1?U=Ne.get(E).__webglMultisampledFramebuffer:Array.isArray(be)?U=be[k]:U=be,w.copy(E.viewport),T.copy(E.scissor),G=E.scissorTest}else w.copy(K).multiplyScalar(te).floor(),T.copy(ne).multiplyScalar(te).floor(),G=xe;if(Pe.bindFramebuffer(L.FRAMEBUFFER,U)&&F&&Pe.drawBuffers(E,U),Pe.viewport(w),Pe.scissor(T),Pe.setScissorTest(G),re){const we=Ne.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,we.__webglTexture,k)}else if(he){const we=Ne.get(E.texture),Ae=D||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.__webglTexture,k||0,Ae)}R=-1},this.readRenderTargetPixels=function(E,D,k,F,U,re,he){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(ye=ye[he]),ye){Pe.bindFramebuffer(L.FRAMEBUFFER,ye);try{const we=E.texture,Ae=we.format,be=we.type;if(!Je.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-F&&k>=0&&k<=E.height-U&&L.readPixels(D,k,F,U,Oe.convert(Ae),Oe.convert(be),re)}finally{const we=M!==null?Ne.get(M).__webglFramebuffer:null;Pe.bindFramebuffer(L.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,D,k,F,U,re,he){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(ye=ye[he]),ye){const we=E.texture,Ae=we.format,be=we.type;if(!Je.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=E.width-F&&k>=0&&k<=E.height-U){Pe.bindFramebuffer(L.FRAMEBUFFER,ye);const Me=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.bufferData(L.PIXEL_PACK_BUFFER,re.byteLength,L.STREAM_READ),L.readPixels(D,k,F,U,Oe.convert(Ae),Oe.convert(be),0);const at=M!==null?Ne.get(M).__webglFramebuffer:null;Pe.bindFramebuffer(L.FRAMEBUFFER,at);const mt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await RC(L,mt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,re),L.deleteBuffer(Me),L.deleteSync(mt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,D=null,k=0){E.isTexture!==!0&&(Pu("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,E=arguments[1]);const F=Math.pow(2,-k),U=Math.floor(E.image.width*F),re=Math.floor(E.image.height*F),he=D!==null?D.x:0,ye=D!==null?D.y:0;b.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,he,ye,U,re),Pe.unbindTexture()},this.copyTextureToTexture=function(E,D,k=null,F=null,U=0){E.isTexture!==!0&&(Pu("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1],D=arguments[2],U=arguments[3]||0,k=null);let re,he,ye,we,Ae,be;k!==null?(re=k.max.x-k.min.x,he=k.max.y-k.min.y,ye=k.min.x,we=k.min.y):(re=E.image.width,he=E.image.height,ye=0,we=0),F!==null?(Ae=F.x,be=F.y):(Ae=0,be=0);const Me=Oe.convert(D.format),at=Oe.convert(D.type);b.setTexture2D(D,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const mt=L.getParameter(L.UNPACK_ROW_LENGTH),Rt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Dn=L.getParameter(L.UNPACK_SKIP_PIXELS),it=L.getParameter(L.UNPACK_SKIP_ROWS),Ee=L.getParameter(L.UNPACK_SKIP_IMAGES),Kt=E.isCompressedTexture?E.mipmaps[U]:E.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Kt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Kt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ye),L.pixelStorei(L.UNPACK_SKIP_ROWS,we),E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,Ae,be,re,he,Me,at,Kt.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,Ae,be,Kt.width,Kt.height,Me,Kt.data):L.texSubImage2D(L.TEXTURE_2D,U,Ae,be,re,he,Me,at,Kt),L.pixelStorei(L.UNPACK_ROW_LENGTH,mt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Rt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Dn),L.pixelStorei(L.UNPACK_SKIP_ROWS,it),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ee),U===0&&D.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(E,D,k=null,F=null,U=0){E.isTexture!==!0&&(Pu("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,F=arguments[1]||null,E=arguments[2],D=arguments[3],U=arguments[4]||0);let re,he,ye,we,Ae,be,Me,at,mt;const Rt=E.isCompressedTexture?E.mipmaps[U]:E.image;k!==null?(re=k.max.x-k.min.x,he=k.max.y-k.min.y,ye=k.max.z-k.min.z,we=k.min.x,Ae=k.min.y,be=k.min.z):(re=Rt.width,he=Rt.height,ye=Rt.depth,we=0,Ae=0,be=0),F!==null?(Me=F.x,at=F.y,mt=F.z):(Me=0,at=0,mt=0);const Dn=Oe.convert(D.format),it=Oe.convert(D.type);let Ee;if(D.isData3DTexture)b.setTexture3D(D,0),Ee=L.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)b.setTexture2DArray(D,0),Ee=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const Kt=L.getParameter(L.UNPACK_ROW_LENGTH),rt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),hi=L.getParameter(L.UNPACK_SKIP_PIXELS),na=L.getParameter(L.UNPACK_SKIP_ROWS),Un=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Rt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Rt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,we),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ae),L.pixelStorei(L.UNPACK_SKIP_IMAGES,be),E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Ee,U,Me,at,mt,re,he,ye,Dn,it,Rt.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(Ee,U,Me,at,mt,re,he,ye,Dn,Rt.data):L.texSubImage3D(Ee,U,Me,at,mt,re,he,ye,Dn,it,Rt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Kt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,rt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,hi),L.pixelStorei(L.UNPACK_SKIP_ROWS,na),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Un),U===0&&D.generateMipmaps&&L.generateMipmap(Ee),Pe.unbindTexture()},this.initRenderTarget=function(E){Ne.get(E).__webglFramebuffer===void 0&&b.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),Pe.unbindTexture()},this.resetState=function(){A=0,C=0,M=null,Pe.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return lr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Og?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===Vh?"display-p3":"srgb"}}class VP extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class GP{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Zp,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hn=new P;class Vg{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=yi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=yi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=yi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=yi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=yi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=ot(n,this.array),i=ot(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new cn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vg(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const O_=new P,k_=new nt,F_=new nt,WP=new P,B_=new De,Wc=new P,cd=new Vi,z_=new De,ud=new bo;class XP extends _n{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vv,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wr),this.boundingBox.makeEmpty();const n=e.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,Wc),this.boundingBox.expandByPoint(Wc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vi),this.boundingSphere.makeEmpty();const n=e.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,Wc),this.boundingSphere.expandByPoint(Wc)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cd.copy(this.boundingSphere),cd.applyMatrix4(r),e.ray.intersectsSphere(cd)!==!1&&(z_.copy(r).invert(),ud.copy(e.ray).applyMatrix4(z_),!(this.boundingBox!==null&&ud.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,ud)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,n=this.geometry.attributes.skinWeight;for(let i=0,r=n.count;i<r;i++){e.fromBufferAttribute(n,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),n.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vv?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===QT?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){const i=this.skeleton,r=this.geometry;k_.fromBufferAttribute(r.attributes.skinIndex,e),F_.fromBufferAttribute(r.attributes.skinWeight,e),O_.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let s=0;s<4;s++){const a=F_.getComponent(s);if(a!==0){const o=k_.getComponent(s);B_.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),n.addScaledVector(WP.copy(O_).applyMatrix4(B_),a)}}return n.applyMatrix4(this.bindMatrixInverse)}}class rw extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class sw extends Vt{constructor(e=null,n=1,i=1,r,s,a,o,l,c=vn,u=vn,h,f){super(null,a,o,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const H_=new De,jP=new De;class Gg{constructor(e=[],n=[]){this.uuid=ii(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){const i=new De;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,n=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:jP;H_.multiplyMatrices(o,n[s]),H_.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Gg(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const n=new Float32Array(e*e*4);n.set(this.boneMatrices);const i=new sw(n,e,e,ti,wi);return i.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=i,this}getBoneByName(e){for(let n=0,i=this.bones.length;n<i;n++){const r=this.bones[n];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let a=n[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new rw),this.bones.push(a),this.boneInverses.push(new De().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const n=this.bones,i=this.boneInverses;for(let r=0,s=n.length;r<s;r++){const a=n[r];e.bones.push(a.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class Qp extends cn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const va=new De,V_=new De,Xc=[],G_=new wr,$P=new De,Go=new _n,Wo=new Vi;class YP extends _n{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Qp(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,$P)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new wr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,va),G_.copy(e.boundingBox).applyMatrix4(va),this.boundingBox.union(G_)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,va),Wo.copy(e.boundingSphere).applyMatrix4(va),this.boundingSphere.union(Wo)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Go.geometry=this.geometry,Go.material=this.material,Go.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wo.copy(this.boundingSphere),Wo.applyMatrix4(i),e.ray.intersectsSphere(Wo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,va),V_.multiplyMatrices(i,va),Go.matrixWorld=V_,Go.raycast(e,Xc);for(let a=0,o=Xc.length;a<o;a++){const l=Xc[a];l.instanceId=s,l.object=this,n.push(l)}Xc.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new Qp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new sw(new Float32Array(r*this.count),r,this.count,Ig,wi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class aw extends Oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sh=new P,ah=new P,W_=new De,Xo=new bo,jc=new Vi,hd=new P,X_=new P;class Wg extends ht{constructor(e=new ui,n=new aw){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)sh.fromBufferAttribute(n,r-1),ah.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=sh.distanceTo(ah);e.setAttribute("lineDistance",new ri(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jc.copy(i.boundingSphere),jc.applyMatrix4(r),jc.radius+=s,e.ray.intersectsSphere(jc)===!1)return;W_.copy(r).invert(),Xo.copy(e.ray).applyMatrix4(W_);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=p,m=g-1;y<m;y+=c){const d=u.getX(y),_=u.getX(y+1),v=$c(this,e,Xo,l,d,_);v&&n.push(v)}if(this.isLineLoop){const y=u.getX(g-1),m=u.getX(p),d=$c(this,e,Xo,l,y,m);d&&n.push(d)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let y=p,m=g-1;y<m;y+=c){const d=$c(this,e,Xo,l,y,y+1);d&&n.push(d)}if(this.isLineLoop){const y=$c(this,e,Xo,l,g-1,p);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function $c(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(sh.fromBufferAttribute(a,r),ah.fromBufferAttribute(a,s),n.distanceSqToSegment(sh,ah,hd,X_)>i)return;hd.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(hd);if(!(l<e.near||l>e.far))return{distance:l,point:X_.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const j_=new P,$_=new P;class KP extends Wg{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)j_.fromBufferAttribute(n,r),$_.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+j_.distanceTo($_);e.setAttribute("lineDistance",new ri(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qP extends Wg{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class ow extends Oi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Y_=new De,em=new bo,Yc=new Vi,Kc=new P;class ZP extends ht{constructor(e=new ui,n=new ow){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yc.copy(i.boundingSphere),Yc.applyMatrix4(r),Yc.radius+=s,e.ray.intersectsSphere(Yc)===!1)return;Y_.copy(r).invert(),em.copy(e.ray).applyMatrix4(Y_);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,y=p;g<y;g++){const m=c.getX(g);Kc.fromBufferAttribute(h,m),K_(Kc,m,l,r,e,n,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,y=p;g<y;g++)Kc.fromBufferAttribute(h,g),K_(Kc,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function K_(t,e,n,i,r,s,a){const o=em.distanceSqToPoint(t);if(o<n){const l=new P;em.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class JP extends Vt{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let a;n?a=n:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(a-u)/f;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=n||(a.isVector2?new ce:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new P,r=[],s=[],a=[],o=new P,l=new De;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new P)}s[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(zt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(zt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Xg extends Gi{constructor(e=0,n=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,n=new ce){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class QP extends Xg{constructor(e,n,i,r,s,a){super(e,n,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function jg(){let t=0,e=0,n=0,i=0;function r(s,a,o,l){t=s,e=o,n=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,p*=u,r(a,o,f,p)},calc:function(s){const a=s*s,o=a*s;return t+e*s+n*a+i*o}}}const qc=new P,fd=new jg,dd=new jg,pd=new jg;class eL extends Gi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new P){const i=n,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(qc.subVectors(r[0],r[1]).add(r[0]),c=qc);const h=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(qc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=qc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),y=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),fd.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,y,m),dd.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,y,m),pd.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,y,m)}else this.curveType==="catmullrom"&&(fd.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),dd.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),pd.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(fd.calc(l),dd.calc(l),pd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function q_(t,e,n,i,r){const s=(i-e)*.5,a=(r-n)*.5,o=t*t,l=t*o;return(2*n-2*i+s+a)*l+(-3*n+3*i-2*s-a)*o+s*t+n}function tL(t,e){const n=1-t;return n*n*e}function nL(t,e){return 2*(1-t)*t*e}function iL(t,e){return t*t*e}function dl(t,e,n,i){return tL(t,e)+nL(t,n)+iL(t,i)}function rL(t,e){const n=1-t;return n*n*n*e}function sL(t,e){const n=1-t;return 3*n*n*t*e}function aL(t,e){return 3*(1-t)*t*t*e}function oL(t,e){return t*t*t*e}function pl(t,e,n,i,r){return rL(t,e)+sL(t,n)+aL(t,i)+oL(t,r)}class lw extends Gi{constructor(e=new ce,n=new ce,i=new ce,r=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ce){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(pl(e,r.x,s.x,a.x,o.x),pl(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lL extends Gi{constructor(e=new P,n=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new P){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(pl(e,r.x,s.x,a.x,o.x),pl(e,r.y,s.y,a.y,o.y),pl(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cw extends Gi{constructor(e=new ce,n=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ce){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ce){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cL extends Gi{constructor(e=new P,n=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new P){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new P){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uw extends Gi{constructor(e=new ce,n=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ce){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(dl(e,r.x,s.x,a.x),dl(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uL extends Gi{constructor(e=new P,n=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new P){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(dl(e,r.x,s.x,a.x),dl(e,r.y,s.y,a.y),dl(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hw extends Gi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ce){const i=n,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return i.set(q_(o,l.x,c.x,u.x,h.x),q_(o,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ce().fromArray(r))}return this}}var Z_=Object.freeze({__proto__:null,ArcCurve:QP,CatmullRomCurve3:eL,CubicBezierCurve:lw,CubicBezierCurve3:lL,EllipseCurve:Xg,LineCurve:cw,LineCurve3:cL,QuadraticBezierCurve:uw,QuadraticBezierCurve3:uL,SplineCurve:hw});class hL extends Gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Z_[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Z_[r.type]().fromJSON(r))}return this}}class tm extends hL{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new cw(this.currentPoint.clone(),new ce(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new uw(this.currentPoint.clone(),new ce(e,n),new ce(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,a){const o=new lw(this.currentPoint.clone(),new ce(e,n),new ce(i,r),new ce(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new hw(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,n+l,i,r,s,a),this}absarc(e,n,i,r,s,a){return this.absellipse(e,n,i,i,r,s,a),this}ellipse(e,n,i,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,a,o,l),this}absellipse(e,n,i,r,s,a,o,l){const c=new Xg(e,n,i,r,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class md extends tm{constructor(e){super(e),this.uuid=ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new tm().fromJSON(r))}return this}}const fL={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=fw(t,0,r,n,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,f,p;if(i&&(s=vL(t,e,s,n)),t.length>80*n){o=c=t[0],l=u=t[1];for(let g=n;g<r;g+=n)h=t[g],f=t[g+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-o,u-l),p=p!==0?32767/p:0}return Ul(s,a,n,o,l,p,0),a}};function fw(t,e,n,i,r){let s,a;if(r===bL(t,e,n,i)>0)for(s=e;s<n;s+=i)a=J_(s,t[s],t[s+1],a);else for(s=n-i;s>=e;s-=i)a=J_(s,t[s],t[s+1],a);return a&&Wh(a,a.next)&&(kl(a),a=a.next),a}function Ws(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Wh(n,n.next)||Tt(n.prev,n,n.next)===0)){if(kl(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Ul(t,e,n,i,r,s,a){if(!t)return;!a&&s&&SL(t,i,r,s);let o=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?pL(t,i,r,s):dL(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),kl(t),t=c.next,o=c.next;continue}if(t=c,t===o){a?a===1?(t=mL(Ws(t),e,n),Ul(t,e,n,i,r,s,2)):a===2&&gL(t,e,n,i,r,s):Ul(Ws(t),e,n,i,r,s,1);break}}}function dL(t){const e=t.prev,n=t,i=t.next;if(Tt(e,n,i)>=0)return!1;const r=e.x,s=n.x,a=i.x,o=e.y,l=n.y,c=i.y,u=r<s?r<a?r:a:s<a?s:a,h=o<l?o<c?o:c:l<c?l:c,f=r>s?r>a?r:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&Sa(r,o,s,l,a,c,g.x,g.y)&&Tt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function pL(t,e,n,i){const r=t.prev,s=t,a=t.next;if(Tt(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,h=s.y,f=a.y,p=o<l?o<c?o:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,y=o>l?o>c?o:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,d=nm(p,g,e,n,i),_=nm(y,m,e,n,i);let v=t.prevZ,x=t.nextZ;for(;v&&v.z>=d&&x&&x.z<=_;){if(v.x>=p&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&Sa(o,u,l,h,c,f,v.x,v.y)&&Tt(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=p&&x.x<=y&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&Sa(o,u,l,h,c,f,x.x,x.y)&&Tt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=d;){if(v.x>=p&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&Sa(o,u,l,h,c,f,v.x,v.y)&&Tt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=_;){if(x.x>=p&&x.x<=y&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&Sa(o,u,l,h,c,f,x.x,x.y)&&Tt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function mL(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Wh(r,s)&&dw(r,i,i.next,s)&&Ol(r,s)&&Ol(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),kl(i),kl(i.next),i=t=s),i=i.next}while(i!==t);return Ws(i)}function gL(t,e,n,i,r,s){let a=t;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&TL(a,o)){let l=pw(a,o);a=Ws(a,a.next),l=Ws(l,l.next),Ul(a,e,n,i,r,s,0),Ul(l,e,n,i,r,s,0);return}o=o.next}a=a.next}while(a!==t)}function vL(t,e,n,i){const r=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*i,l=s<a-1?e[s+1]*i:t.length,c=fw(t,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(EL(c));for(r.sort(_L),s=0;s<r.length;s++)n=yL(r[s],n);return n}function _L(t,e){return t.x-e.x}function yL(t,e){const n=xL(t,e);if(!n)return e;const i=pw(n,t);return Ws(i,i.next),Ws(n,n.next)}function xL(t,e){let n=e,i=-1/0,r;const s=t.x,a=t.y;do{if(a<=n.y&&a>=n.next.y&&n.next.y!==n.y){const f=n.x+(a-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=s&&f>i&&(i=f,r=n.x<n.next.x?n:n.next,f===s))return r}n=n.next}while(n!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let u=1/0,h;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Sa(a<c?s:i,a,l,c,a<c?i:s,a,n.x,n.y)&&(h=Math.abs(a-n.y)/(s-n.x),Ol(n,t)&&(h<u||h===u&&(n.x>r.x||n.x===r.x&&wL(r,n)))&&(r=n,u=h)),n=n.next;while(n!==o);return r}function wL(t,e){return Tt(t.prev,t,e.prev)<0&&Tt(e.next,t,t.next)<0}function SL(t,e,n,i){let r=t;do r.z===0&&(r.z=nm(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,ML(r)}function ML(t){let e,n,i,r,s,a,o,l,c=1;do{for(n=t,t=null,s=null,a=0;n;){for(a++,i=n,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,o--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(a>1);return t}function nm(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function EL(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Sa(t,e,n,i,r,s,a,o){return(r-a)*(e-o)>=(t-a)*(s-o)&&(t-a)*(i-o)>=(n-a)*(e-o)&&(n-a)*(s-o)>=(r-a)*(i-o)}function TL(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!CL(t,e)&&(Ol(t,e)&&Ol(e,t)&&AL(t,e)&&(Tt(t.prev,t,e.prev)||Tt(t,e.prev,e))||Wh(t,e)&&Tt(t.prev,t,t.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Wh(t,e){return t.x===e.x&&t.y===e.y}function dw(t,e,n,i){const r=Jc(Tt(t,e,n)),s=Jc(Tt(t,e,i)),a=Jc(Tt(n,i,t)),o=Jc(Tt(n,i,e));return!!(r!==s&&a!==o||r===0&&Zc(t,n,e)||s===0&&Zc(t,i,e)||a===0&&Zc(n,t,i)||o===0&&Zc(n,e,i))}function Zc(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Jc(t){return t>0?1:t<0?-1:0}function CL(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&dw(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Ol(t,e){return Tt(t.prev,t,t.next)<0?Tt(t,e,t.next)>=0&&Tt(t,t.prev,e)>=0:Tt(t,e,t.prev)<0||Tt(t,t.next,e)<0}function AL(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function pw(t,e){const n=new im(t.i,t.x,t.y),i=new im(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function J_(t,e,n,i){const r=new im(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function kl(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function im(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function bL(t,e,n,i){let r=0;for(let s=e,a=n-i;s<n;s+=i)r+=(t[a]-t[s])*(t[s+1]+t[a+1]),a=s;return r}class $g{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return $g.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];Q_(e),ey(i,e);let a=e.length;n.forEach(Q_);for(let l=0;l<n.length;l++)r.push(a),a+=n[l].length,ey(i,n[l]);const o=fL.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Q_(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function ey(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Yg extends ui{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let h=e;const f=(n-e)/r,p=new P,g=new ce;for(let y=0;y<=r;y++){for(let m=0;m<=i;m++){const d=s+m/i*a;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/n+1)/2,g.y=(p.y/n+1)/2,u.push(g.x,g.y)}h+=f}for(let y=0;y<r;y++){const m=y*(i+1);for(let d=0;d<i;d++){const _=d+m,v=_,x=_+i+1,A=_+i+2,C=_+1;o.push(v,x,C),o.push(x,A,C)}}this.setIndex(o),this.setAttribute("position",new ri(l,3)),this.setAttribute("normal",new ri(c,3)),this.setAttribute("uv",new ri(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yg(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Kg extends Oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=B1,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wi extends Kg{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Qc(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function RL(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function PL(t){function e(r,s){return t[r]-t[s]}const n=t.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(e),i}function ty(t,e,n){const i=t.length,r=new t.constructor(i);for(let s=0,a=0;a!==i;++s){const o=n[s]*e;for(let l=0;l!==e;++l)r[a++]=t[o+l]}return r}function mw(t,e,n,i){let r=1,s=t[0];for(;s!==void 0&&s[i]===void 0;)s=t[r++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),n.push.apply(n,a)),s=t[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(n,n.length)),s=t[r++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),n.push(a)),s=t[r++];while(s!==void 0)}class cc{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const n=this.parameterPositions;let i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=n[++i],e<r)break t}a=n.length;break n}if(!(e>=s)){const o=n[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=n[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<n[o]?a=o:i=o+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)n[a]=i[s+a];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class LL extends cc{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gv,endingEnd:Gv}}intervalChanged_(e,n,i){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wv:s=e,o=2*n-i;break;case Xv:s=r.length-2,o=n+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Wv:a=e,l=2*i-n;break;case Xv:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=n}const c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,n,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-n)/(r-n),y=g*g,m=y*g,d=-f*m+2*f*y-f*g,_=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,v=(-1-p)*m+(1.5+p)*y+.5*g,x=p*m-p*y;for(let A=0;A!==o;++A)s[A]=d*a[u+A]+_*a[c+A]+v*a[l+A]+x*a[h+A];return s}}class IL extends cc{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-n)/(r-n),h=1-u;for(let f=0;f!==o;++f)s[f]=a[c+f]*h+a[l+f]*u;return s}}class NL extends cc{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Xi{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qc(n,this.TimeBufferType),this.values=Qc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Qc(e.times,Array),values:Qc(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new NL(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new IL(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new LL(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case Il:n=this.InterpolantFactoryMethodDiscrete;break;case Nl:n=this.InterpolantFactoryMethodLinear;break;case Df:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Il;case this.InterpolantFactoryMethodLinear:return Nl;case this.InterpolantFactoryMethodSmooth:return Df}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){const n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){const i=this.times,r=i.length;let s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>n;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&RL(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Df,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{const h=o*i,f=h-i,p=h+i;for(let g=0;g!==i;++g){const y=n[h+g];if(y!==n[f+g]||y!==n[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*i,f=a*i;for(let p=0;p!==i;++p)n[f+p]=n[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)n[l+c]=n[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=n.slice(0,a*i)):(this.times=e,this.values=n),this}clone(){const e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}}Xi.prototype.TimeBufferType=Float32Array;Xi.prototype.ValueBufferType=Float32Array;Xi.prototype.DefaultInterpolation=Nl;class Po extends Xi{constructor(e,n,i){super(e,n,i)}}Po.prototype.ValueTypeName="bool";Po.prototype.ValueBufferType=Array;Po.prototype.DefaultInterpolation=Il;Po.prototype.InterpolantFactoryMethodLinear=void 0;Po.prototype.InterpolantFactoryMethodSmooth=void 0;class gw extends Xi{}gw.prototype.ValueTypeName="color";class oo extends Xi{}oo.prototype.ValueTypeName="number";class DL extends cc{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-n)/(r-n);let c=e*o;for(let u=c+o;c!==u;c+=4)Ti.slerpFlat(s,0,a,c-o,a,c,l);return s}}class lo extends Xi{InterpolantFactoryMethodLinear(e){return new DL(this.times,this.values,this.getValueSize(),e)}}lo.prototype.ValueTypeName="quaternion";lo.prototype.InterpolantFactoryMethodSmooth=void 0;class Lo extends Xi{constructor(e,n,i){super(e,n,i)}}Lo.prototype.ValueTypeName="string";Lo.prototype.ValueBufferType=Array;Lo.prototype.DefaultInterpolation=Il;Lo.prototype.InterpolantFactoryMethodLinear=void 0;Lo.prototype.InterpolantFactoryMethodSmooth=void 0;class co extends Xi{}co.prototype.ValueTypeName="vector";class UL{constructor(e="",n=-1,i=[],r=eC){this.name=e,this.tracks=i,this.duration=n,this.blendMode=r,this.uuid=ii(),this.duration<0&&this.resetDuration()}static parse(e){const n=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)n.push(kL(i[a]).scale(r));const s=new this(e.name,e.duration,n,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const n=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)n.push(Xi.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,n,i,r){const s=n.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=PL(l);l=ty(l,1,u),c=ty(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new oo(".morphTargetInfluences["+n[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,n){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===n)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,n,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],n,i));return a}static parseAnimation(e,n){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,p,g,y){if(p.length!==0){const m=[],d=[];mw(p,m,d,g),m.length!==0&&y.push(new h(f,m,d))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let y=0;y<f[g].morphTargets.length;y++)p[f[g].morphTargets[y]]=-1;for(const y in p){const m=[],d=[];for(let _=0;_!==f[g].morphTargets.length;++_){const v=f[g];m.push(v.time),d.push(v.morphTarget===y?1:0)}r.push(new oo(".morphTargetInfluence["+y+"]",m,d))}l=p.length*a}else{const p=".bones["+n[h].name+"]";i(co,p+".position",f,"pos",r),i(lo,p+".quaternion",f,"rot",r),i(co,p+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let n=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];n=Math.max(n,s.times[s.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function OL(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return oo;case"vector":case"vector2":case"vector3":case"vector4":return co;case"color":return gw;case"quaternion":return lo;case"bool":case"boolean":return Po;case"string":return Lo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function kL(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=OL(t.type);if(t.times===void 0){const n=[],i=[];mw(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}const jr={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class vw{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const FL=new vw;class hs{constructor(e){this.manager=e!==void 0?e:FL,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}hs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ji={};class BL extends Error{constructor(e,n){super(e),this.response=n}}class uc extends hs{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=jr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(Ji[e]!==void 0){Ji[e].push({onLoad:n,onProgress:i,onError:r});return}Ji[e]=[],Ji[e].push({onLoad:n,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ji[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let y=0;const m=new ReadableStream({start(d){_();function _(){h.read().then(({done:v,value:x})=>{if(v)d.close();else{y+=x.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:p});for(let C=0,M=u.length;C<M;C++){const R=u[C];R.onProgress&&R.onProgress(A)}d.enqueue(x),_()}},v=>{d.error(v)})}}});return new Response(m)}else throw new BL(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{jr.add(e,c);const u=Ji[e];delete Ji[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Ji[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ji[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class zL extends hs{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=jr.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a;const o=Dl("img");function l(){u(),jr.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class _w extends hs{constructor(e){super(e)}load(e,n,i,r){const s=new Vt,a=new zL(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class hc extends ht{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class HL extends hc{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const gd=new De,ny=new P,iy=new P;class qg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bg,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;ny.setFromMatrixPosition(e.matrixWorld),n.position.copy(ny),iy.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(iy),n.updateMatrixWorld(),gd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class VL extends qg{constructor(){super(new gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=so*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class GL extends hc{constructor(e,n,i=0,r=Math.PI/3,s=0,a=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new VL}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ry=new De,jo=new P,vd=new P;class WL extends qg{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),jo.setFromMatrixPosition(e.matrixWorld),i.position.copy(jo),vd.copy(i.position),vd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(vd),i.updateMatrixWorld(),r.makeTranslation(-jo.x,-jo.y,-jo.z),ry.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ry)}}class XL extends hc{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new WL}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class jL extends qg{constructor(){super(new zg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $L extends hc{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new jL}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class YL extends hc{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class ml{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let n="";for(let i=0,r=e.length;i<r;i++)n+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(n))}catch{return n}}static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}class KL extends hs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=jr.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{n&&n(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return jr.add(e,c),n&&n(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),jr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});jr.add(e,l),s.manager.itemStart(e)}}let eu;class yw{static getContext(){return eu===void 0&&(eu=new(window.AudioContext||window.webkitAudioContext)),eu}static setContext(e){eu=e}}class qL extends hs{constructor(e){super(e)}load(e,n,i,r){const s=this,a=new uc(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0);yw.getContext().decodeAudioData(c,function(h){n(h)}).catch(o)}catch(c){o(c)}},i,r);function o(l){r?r(l):console.error(l),s.manager.itemError(e)}}}class xw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sy(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=sy();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function sy(){return performance.now()}const Ss=new P,ay=new Ti,ZL=new P,Ms=new P;class JL extends ht{constructor(){super(),this.type="AudioListener",this.context=yw.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new xw}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const n=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ss,ay,ZL),Ms.set(0,0,-1).applyQuaternion(ay),n.positionX){const r=this.context.currentTime+this.timeDelta;n.positionX.linearRampToValueAtTime(Ss.x,r),n.positionY.linearRampToValueAtTime(Ss.y,r),n.positionZ.linearRampToValueAtTime(Ss.z,r),n.forwardX.linearRampToValueAtTime(Ms.x,r),n.forwardY.linearRampToValueAtTime(Ms.y,r),n.forwardZ.linearRampToValueAtTime(Ms.z,r),n.upX.linearRampToValueAtTime(i.x,r),n.upY.linearRampToValueAtTime(i.y,r),n.upZ.linearRampToValueAtTime(i.z,r)}else n.setPosition(Ss.x,Ss.y,Ss.z),n.setOrientation(Ms.x,Ms.y,Ms.z,i.x,i.y,i.z)}}class QL extends ht{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const n=this.context.createBufferSource();return n.buffer=this.buffer,n.loop=this.loop,n.loopStart=this.loopStart,n.loopEnd=this.loopEnd,n.onended=this.onEnded.bind(this),n.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=n,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,n=this.filters.length;e<n;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,n=this.filters.length;e<n;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Zg="\\[\\]\\.:\\/",eI=new RegExp("["+Zg+"]","g"),Jg="[^"+Zg+"]",tI="[^"+Zg.replace("\\.","")+"]",nI=/((?:WC+[\/:])*)/.source.replace("WC",Jg),iI=/(WCOD+)?/.source.replace("WCOD",tI),rI=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jg),sI=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jg),aI=new RegExp("^"+nI+iI+rI+sI+"$"),oI=["material","materials","bones","map"];class lI{constructor(e,n,i){const r=i||lt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}}class lt{constructor(e,n,i){this.path=n,this.parsedPath=i||lt.parseTrackName(n),this.node=lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new lt.Composite(e,n,i):new lt(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(eI,"")}static parseTrackName(e){const n=aI.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);oI.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===n||o.uuid===n)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,i=n.objectName,r=n.propertyName;let s=n.propertyIndex;if(e||(e=lt.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=lI;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const oy=new De;class cI{constructor(e,n,i=0,r=1/0){this.ray=new bo(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Fg,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return oy.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(oy),this}intersectObject(e,n=!0,i=[]){return rm(e,this,i,n),i.sort(ly),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)rm(e[r],this,i,n);return i.sort(ly),i}}function ly(t,e){return t.distance-e.distance}function rm(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)rm(s[a],e,n,!0)}}class cy{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(zt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class uI{constructor(){this.type="ShapePath",this.color=new Re,this.subPaths=[],this.currentPath=null}moveTo(e,n){return this.currentPath=new tm,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,n),this}lineTo(e,n){return this.currentPath.lineTo(e,n),this}quadraticCurveTo(e,n,i,r){return this.currentPath.quadraticCurveTo(e,n,i,r),this}bezierCurveTo(e,n,i,r,s,a){return this.currentPath.bezierCurveTo(e,n,i,r,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function n(d){const _=[];for(let v=0,x=d.length;v<x;v++){const A=d[v],C=new md;C.curves=A.curves,_.push(C)}return _}function i(d,_){const v=_.length;let x=!1;for(let A=v-1,C=0;C<v;A=C++){let M=_[A],R=_[C],H=R.x-M.x,w=R.y-M.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(M=_[C],H=-H,R=_[A],w=-w),d.y<M.y||d.y>R.y)continue;if(d.y===M.y){if(d.x===M.x)return!0}else{const T=w*(d.x-M.x)-H*(d.y-M.y);if(T===0)return!0;if(T<0)continue;x=!x}}else{if(d.y!==M.y)continue;if(R.x<=d.x&&d.x<=M.x||M.x<=d.x&&d.x<=R.x)return!0}}return x}const r=$g.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l;const c=[];if(s.length===1)return o=s[0],l=new md,l.curves=o.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const h=[],f=[];let p=[],g=0,y;f[g]=void 0,p[g]=[];for(let d=0,_=s.length;d<_;d++)o=s[d],y=o.getPoints(),a=r(y),a=e?!a:a,a?(!u&&f[g]&&g++,f[g]={s:new md,p:y},f[g].s.curves=o.curves,u&&g++,p[g]=[]):p[g].push({h:o,p:y[0]});if(!f[0])return n(s);if(f.length>1){let d=!1,_=0;for(let v=0,x=f.length;v<x;v++)h[v]=[];for(let v=0,x=f.length;v<x;v++){const A=p[v];for(let C=0;C<A.length;C++){const M=A[C];let R=!0;for(let H=0;H<f.length;H++)i(M.p,f[H].p)&&(v!==H&&_++,R?(R=!1,h[H].push(M)):d=!0);R&&h[v].push(M)}}_>0&&d===!1&&(p=h)}let m;for(let d=0,_=f.length;d<_;d++){l=f[d].s,c.push(l),m=p[d];for(let v=0,x=m.length;v<x;v++)l.holes.push(m[v].h)}return c}}class hI extends Qs{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bg);var Jt={};Jt.d=(t,e)=>{for(var n in e)Jt.o(e,n)&&!Jt.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})};Jt.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);Jt.r=t=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var jn={};Jt.d(jn,{g1:()=>jh,gO:()=>vl,km:()=>Xh,zV:()=>Fl,ol:()=>p0,uM:()=>$h,N1:()=>Gw,xv:()=>d0,PH:()=>Kh,UH:()=>Yh,ZP:()=>zI,Vx:()=>Ww});var Xh={};Jt.r(Xh);Jt.d(Xh,{COLUMN:()=>qh,COLUMN_REVERSE:()=>Sw,ROW:()=>gl,ROW_REVERSE:()=>ww,contentDirection:()=>Mw});var jh={};Jt.r(jh);Jt.d(jh,{CENTER:()=>e0,END:()=>t0,START:()=>Qg,STRETCH:()=>Ew,alignItems:()=>Tw,warnAboutDeprecatedAlignItems:()=>Cw});var $h={};Jt.r($h);Jt.d($h,{CENTER:()=>i0,END:()=>r0,SPACE_AROUND:()=>s0,SPACE_BETWEEN:()=>a0,SPACE_EVENLY:()=>o0,START:()=>n0,justifyContent:()=>Aw});var Yh={};Jt.r(Yh);Jt.d(Yh,{NORMAL:()=>Zh,NOWRAP:()=>fc,PRE:()=>Jh,PRE_LINE:()=>Io,PRE_WRAP:()=>Qh,WHITE_CHARS:()=>sm,collapseWhitespaceOnInlines:()=>Lw,collapseWhitespaceOnString:()=>bw,newlineBreakability:()=>Rw,shouldBreak:()=>Pw});var Kh={};Jt.r(Kh);Jt.d(Kh,{CENTER:()=>c0,JUSTIFY:()=>u0,JUSTIFY_CENTER:()=>Ow,JUSTIFY_LEFT:()=>Uw,JUSTIFY_RIGHT:()=>oh,LEFT:()=>Nw,RIGHT:()=>Dw,textAlign:()=>kw});var fI=t=>{var e={};return Jt.d(e,t),e};const je=fI({BufferAttribute:()=>cn,BufferGeometry:()=>ui,CanvasTexture:()=>JP,Color:()=>Re,FileLoader:()=>uc,LinearFilter:()=>Cn,Mesh:()=>_n,Object3D:()=>ht,Plane:()=>rr,PlaneGeometry:()=>lc,ShaderMaterial:()=>pr,TextureLoader:()=>_w,Vector2:()=>ce,Vector3:()=>P}),gl="row",ww="row-reverse",qh="column",Sw="column-reverse";function Mw(t,e,n,i){let r=n,s="getWidth",a="x",o="y";e.indexOf(qh)===0&&(s="getHeight",a="y",o="x");for(let l=0;l<t.childrenBoxes.length;l++){const c=t.childrenBoxes[l],u=c.id,h=c[s](),f=c.margin||0;r+=f*i,t.childrenPos[u]={[a]:r+h/2*i,[o]:0},r+=i*(h+f)}}const Qg="start",e0="center",t0="end",Ew="stretch";function Tw(t,e){const n=t.getAlignItems();dI.indexOf(n)===-1&&console.warn(`alignItems === '${n}' is not supported`);let i="getWidth",r="x";e.indexOf(gl)===0&&(i="getHeight",r="y");const s=t[i]()/2-(t.padding||0);t.childrenBoxes.forEach(a=>{let o;switch(n){case t0:case"right":case"bottom":e.indexOf(gl)===0?o=-s+a[i]()/2+(a.margin||0):o=s-a[i]()/2-(a.margin||0);break;case Qg:case"left":case"top":e.indexOf(gl)===0?o=s-a[i]()/2-(a.margin||0):o=-s+a[i]()/2+(a.margin||0);break}t.childrenPos[a.id][r]=o||0})}function Cw(t){pI.indexOf(t)!==-1&&console.warn(`alignItems === '${t}' is deprecated and will be remove in 7.x.x. Fallback are 'start'|'end'`)}const dI=[Qg,e0,t0,Ew,"top","right","bottom","left"],pI=["top","right","bottom","left"],n0="start",i0="center",r0="end",s0="space-around",a0="space-between",o0="space-evenly";function Aw(t,e,n,i){const r=t.getJustifyContent();mI.indexOf(r)===-1&&console.warn(`justifyContent === '${r}' is not supported`);const s=e.indexOf("row")===0?"width":"height",a=t.getChildrenSideSum(s),l=(s==="width"?t.getInnerWidth():t.getInnerHeight())-a,c=n*2-a*Math.sign(n),u=gI(r,c),h=vI(t.childrenBoxes,l,r,i),f=e.indexOf("row")===0?"x":"y";t.childrenBoxes.forEach((p,g)=>{t.childrenPos[p.id][f]-=u-h[g]})}const mI=[n0,i0,r0,s0,a0,o0];function gI(t,e){switch(t){case r0:return e;case i0:return e/2}return 0}function vI(t,e,n,i){const r=Array(t.length).fill(0);if(e>0)switch(n){case a0:if(t.length>1){const s=e/(t.length-1)*i;r[0]=0;for(let a=1;a<t.length;a++)r[a]=s*a}break;case o0:if(t.length>1){const s=e/(t.length+1)*i;for(let a=0;a<t.length;a++)r[a]=s*(a+1)}break;case s0:if(t.length>1){const s=e/t.length*i,a=s/2;r[0]=a;for(let o=1;o<t.length;o++)r[o]=a+s*o}break}return r}function l0(t){return class extends t{constructor(n){super(n),this.isBoxComponent=!0,this.childrenPos={}}getInnerWidth(){const n=this.getContentDirection();switch(n){case"row":case"row-reverse":return this.width-(this.padding*2||0)||this.getChildrenSideSum("width");case"column":case"column-reverse":return this.getHighestChildSizeOn("width");default:console.error(`Invalid contentDirection : ${n}`);break}}getInnerHeight(){const n=this.getContentDirection();switch(n){case"row":case"row-reverse":return this.getHighestChildSizeOn("height");case"column":case"column-reverse":return this.height-(this.padding*2||0)||this.getChildrenSideSum("height");default:console.error(`Invalid contentDirection : ${n}`);break}}getChildrenSideSum(n){return this.childrenBoxes.reduce((i,r)=>{const s=r.margin*2||0,a=n==="width"?r.getWidth()+s:r.getHeight()+s;return i+a},0)}setPosFromParentRecords(){this.parentUI&&this.parentUI.childrenPos[this.id]&&(this.position.x=this.parentUI.childrenPos[this.id].x,this.position.y=this.parentUI.childrenPos[this.id].y)}computeChildrenPosition(){if(this.children.length>0){const n=this.getContentDirection();let i;switch(n){case gl:i=-this.getInnerWidth()/2;break;case ww:i=this.getInnerWidth()/2;break;case qh:i=this.getInnerHeight()/2;break;case Sw:i=-this.getInnerHeight()/2;break}const r=-Math.sign(i);Mw(this,n,i,r),Aw(this,n,i,r),Tw(this,n)}}getHighestChildSizeOn(n){return this.childrenBoxes.reduce((i,r)=>{const s=r.margin||0,a=n==="width"?r.getWidth()+s*2:r.getHeight()+s*2;return Math.max(i,a)},0)}getWidth(){return this.parentUI&&this.parentUI.getAlignItems()==="stretch"&&this.parentUI.getContentDirection().indexOf("column")!==-1?this.parentUI.getWidth()-(this.parentUI.padding*2||0):this.width||this.getInnerWidth()+(this.padding*2||0)}getHeight(){return this.parentUI&&this.parentUI.getAlignItems()==="stretch"&&this.parentUI.getContentDirection().indexOf("row")!==-1?this.parentUI.getHeight()-(this.parentUI.padding*2||0):this.height||this.getInnerHeight()+(this.padding*2||0)}}}const sm={"	":"	","\n":`
`,"\r":"\r"," ":" "},Zh="normal",fc="nowrap",Jh="pre",Io="pre-line",Qh="pre-wrap",bw=function(t,e){switch(e){case fc:case Zh:t=t.replace(/\n/g," ");case Io:t=t.replace(/[ ]{2,}/g," ");break}return t},Rw=function(t){switch(t){case Jh:case Qh:case Io:return"mandatory"}},Pw=function(t,e,n,i){const r=t[e];switch(i.WHITESPACE){case Zh:case Io:case Qh:if(r.lineBreak==="mandatory")return!0;const s=r.kerning?r.kerning:0,a=r.xoffset?r.xoffset:0,o=r.xadvance?r.xadvance:r.width;if(n+o+a+s>i.INNER_WIDTH)return!0;const l=Iw(t,e,i);return _I(t[e-1],n,l,i);case Jh:return r.lineBreak==="mandatory";case fc:default:return!1}},Lw=function(t,e){const n=t[0],i=t[t.length-1];switch(e){case Qh:n.glyph&&n.glyph===`
`&&t.length>1&&hy([n],t[1]),i.glyph&&i.glyph===`
`&&t.length>1&&uy([i],t[t.length-2]);break;case Io:case fc:case Zh:let r=[],s;for(let a=0;a<t.length;a++){const o=t[a];if(o.glyph&&sm[o.glyph]&&t.length>a){r.push(o),s=t[a+1];continue}break}hy(r,s),r=[],s=null;for(let a=t.length-1;a>0;a--){const o=t[a];if(o.glyph&&sm[o.glyph]&&a>0){r.push(o),s=t[a-1];continue}break}uy(r,s);break;case Jh:break;default:return console.warn(`whiteSpace: '${e}' is not valid`),0}return n.offsetX};function uy(t,e){if(e)for(let n=0;n<t.length;n++){const i=t[n];i.width=0,i.height=0,i.offsetX=e.offsetX+e.width}}function hy(t,e){if(e)for(let n=0;n<t.length;n++){const i=t[n];i.width=0,i.height=0,i.offsetX=e.offsetX}}function Iw(t,e,n,i){if(i=i||0,!t[e])return i;const r=t[e],s=r.kerning?r.kerning:0,a=r.xoffset?r.xoffset:0,o=r.xadvance?r.xadvance:r.width;return r.lineBreak?i+o:Iw(t,e+1,n,i+o+n.LETTERSPACING+a+s)}function _I(t,e,n,i){return!t||!t.glyph||e+n<i.INNER_WIDTH?!1:i.BREAKON.indexOf(t.glyph)>-1}const Nw="left",Dw="right",c0="center",u0="justify",Uw="justify-left",oh="justify-right",Ow="justify-center";function kw(t,e,n){for(let i=0;i<t.length;i++){const r=t[i],s=yI(r,e,n,i===t.length-1);for(let a=0;a<r.length;a++)r[a].offsetX+=s;r.x=s}if(e.indexOf(u0)===0)for(let i=0;i<t.length;i++){const r=t[i];if(e.indexOf("-")!==-1&&i===t.length-1)return;const s=n-r.width;if(s<=0)return;let a=0;for(let u=1;u<r.length-1;u++)a+=r[u].glyph===" "?1:0;const o=s/a;let l=1;e===oh&&(r.reverse(),l=-1);let c=0;for(let u=1;u<=r.length-1;u++){const h=r[u];h.offsetX+=c*l,c+=h.glyph===" "?o:0}e===oh&&r.reverse()}}const yI=(t,e,n,i)=>{switch(e){case Uw:case u0:case Nw:return-n/2;case oh:case Dw:return-t.width+n/2;case c0:return-t.width/2;case Ow:return i?-t.width/2:-n/2;default:console.warn(`textAlign: '${e}' is not valid`)}};function Fw(t){return class extends t{computeInlinesPosition(){const n=this.getWidth()-(this.padding*2||0),i=this.getHeight()-(this.padding*2||0),r=this.getJustifyContent(),s=this.getTextAlign(),a=this.getInterLine(),o=this.computeLines();o.interLine=a;const l=Math.abs(o.height),c=(()=>{switch(r){case"start":return i/2;case"end":return l-i/2;case"center":return l/2;default:console.warn(`justifyContent: '${r}' is not valid`)}})();o.forEach(u=>{u.y+=c,u.forEach(h=>{h.offsetY+=c})}),kw(o,s,n),this.lines=o}calculateBestFit(n){if(this.childrenInlines.length!==0)switch(n){case"grow":this.calculateGrowFit();break;case"shrink":this.calculateShrinkFit();break;case"auto":this.calculateAutoFit();break}}calculateGrowFit(){const n=this.getHeight()-(this.padding*2||0);let i=1;const r=.075,s=this.childrenInlines.find(u=>u.isText);let a=1,o=2,l=s._fitFontSize?s._fitFontSize/s.getFontSize():1,c;do if(c=this.calculateHeight(l),c>n){if(l<=a){this.childrenInlines.forEach(u=>{u.isInlineBlock||(u._fitFontSize=u.getFontSize())});break}o=l,l-=(o-a)/2}else{if(Math.abs(n-c)<r)break;Math.abs(l-o)<5e-10&&(o*=2),a=l,l+=(o-a)/2}while(++i<=10)}calculateShrinkFit(){const n=this.getHeight()-(this.padding*2||0);let i=1;const r=.075,s=this.childrenInlines.find(u=>u.isText);let a=0,o=1,l=s._fitFontSize?s._fitFontSize/s.getFontSize():1,c;do if(c=this.calculateHeight(l),c>n)o=l,l-=(o-a)/2;else{if(l>=o){this.childrenInlines.forEach(u=>{u.isInlineBlock||(u._fitFontSize=u.getFontSize())});break}if(Math.abs(n-c)<r)break;a=l,l+=(o-a)/2}while(++i<=10)}calculateAutoFit(){const n=this.getHeight()-(this.padding*2||0);let i=1;const r=.075,s=this.childrenInlines.find(u=>u.isText);let a=0,o=2,l=s._fitFontSize?s._fitFontSize/s.getFontSize():1,c;do if(c=this.calculateHeight(l),c>n)o=l,l-=(o-a)/2;else{if(Math.abs(n-c)<r)break;Math.abs(l-o)<5e-10&&(o*=2),a=l,l+=(o-a)/2}while(++i<=10)}computeLines(){const n=this.getWidth()-(this.padding*2||0),i=[[]];i.height=0;const r=this.getInterLine();this.childrenInlines.reduce((l,c)=>{if(!c.inlines)return;const u=c._fitFontSize||c.getFontSize(),h=c.isText?c.getLetterSpacing()*u:0,f=c.getWhiteSpace(),p=c.getBreakOn(),g={WHITESPACE:f,LETTERSPACING:h,BREAKON:p,INNER_WIDTH:n};return c.inlines.reduce((m,d,_,v)=>{const x=d.kerning?d.kerning:0,A=d.xoffset?d.xoffset:0,C=d.xadvance?d.xadvance:d.width;return Pw(v,_,m,g)?(i.push([d]),d.offsetX=A,d.width===0?0:C+h):(i[i.length-1].push(d),d.offsetX=m+A+x,m+C+x+h)},l)},0);let s=0,a=0,o=-r/2;return i.forEach(l=>{if(l.lineHeight=l.reduce((u,h)=>{const f=h.lineHeight!==void 0?h.lineHeight:h.height;return Math.max(u,f)},0),l.lineBase=l.reduce((u,h)=>{const f=h.lineBase!==void 0?h.lineBase:h.height;return Math.max(u,f)},0),l.width=0,l.height=l.lineHeight,l[0]){const u=this.getWhiteSpace(),h=Lw(l,u);l.forEach(f=>{f.offsetX-=h}),l.width=this.computeLineWidth(l),l.width>s&&(s=l.width),l.forEach(f=>{f.offsetY=o-f.height-f.anchor,f.lineHeight<l.lineHeight&&(f.offsetY-=l.lineBase-f.lineBase)}),l.y=o,a+=l.lineHeight+r,o=o-(l.lineHeight+r)}}),i.height=a,i.width=s,i}calculateHeight(n){this.childrenInlines.forEach(r=>{r.isInlineBlock||(r._fitFontSize=r.getFontSize()*n,r.calculateInlines(r._fitFontSize))});const i=this.computeLines();return Math.abs(i.height)}computeLineWidth(n){const i=n[0],r=n[n.length-1];return r.offsetX+r.width+i.offsetX}}}const xI=new je.FileLoader,am=[],Iu={},wI=new je.TextureLoader,om=[],Nu={},on={};function SI(t,e){typeof e=="string"?EI(t,e):(on[t.id]||(on[t.id]={component:t}),h0(e),on[t.id].json=e,t._updateFontFamily(e))}function MI(t,e){om.indexOf(e)===-1&&(om.push(e),wI.load(e,n=>{n.generateMipmaps=!1,n.minFilter=je.LinearFilter,n.magFilter=je.LinearFilter,Nu[e]=n;for(const i of Object.keys(on))e===on[i].textureURL&&on[i].component._updateFontTexture(n)})),on[t.id]||(on[t.id]={component:t}),on[t.id].textureURL=e,Nu[e]&&t._updateFontTexture(Nu[e])}function Bw(t){const e=on[t.id];return!e&&t.parentUI?Bw(t.parentUI):e}function EI(t,e){am.indexOf(e)===-1&&(am.push(e),xI.load(e,n=>{const i=JSON.parse(n);h0(i),Iu[e]=i;for(const r of Object.keys(on))e===on[r].jsonURL&&on[r].component._updateFontFamily(i)})),on[t.id]||(on[t.id]={component:t}),on[t.id].jsonURL=e,Iu[e]&&t._updateFontFamily(Iu[e])}function h0(t){if(t._kernings)return;const e={};for(let n=0;n<t.kernings.length;n++){const i=t.kernings[n];if(i.amount===0)continue;const r=String.fromCharCode(i.first,i.second);e[r]=i.amount}t._kernings=e}function TI(t,e,n){n.generateMipmaps=!1,n.minFilter=je.LinearFilter,n.magFilter=je.LinearFilter,am.push(t),Iu[t]=e,h0(e),n&&(om.push(t),Nu[t]=n)}const CI={setFontFamily:SI,setFontTexture:MI,getFontOf:Bw,addFont:TI},Fl=CI;class Us{static requestUpdate(e,n,i,r){e.traverse(s=>{s.isUI&&(this.requestedUpdates[s.id]?(n&&(this.requestedUpdates[s.id].updateParsing=!0),i&&(this.requestedUpdates[s.id].updateLayout=!0),r&&(this.requestedUpdates[s.id].updateInner=!0)):this.requestedUpdates[s.id]={updateParsing:n,updateLayout:i,updateInner:r,needCallback:n||i||r})})}static register(e){this.components.includes(e)||this.components.push(e)}static disposeOf(e){const n=this.components.indexOf(e);n>-1&&this.components.splice(n,1)}static update(){if(Object.keys(this.requestedUpdates).length>0){const e=this.components.filter(n=>!n.parentUI);e.forEach(n=>this.traverseParsing(n)),e.forEach(n=>this.traverseUpdates(n))}}static traverseParsing(e){const n=this.requestedUpdates[e.id];n&&n.updateParsing&&(e.parseParams(),n.updateParsing=!1),e.childrenUIs.forEach(i=>this.traverseParsing(i))}static traverseUpdates(e){const n=this.requestedUpdates[e.id];delete this.requestedUpdates[e.id],n&&n.updateLayout&&(n.updateLayout=!1,e.updateLayout()),n&&n.updateInner&&(n.updateInner=!1,e.updateInner()),e.childrenUIs.forEach(i=>{this.traverseUpdates(i)}),n&&n.needCallback&&e.onAfterUpdate()}}Us.components=[];Us.requestedUpdates={};const qt={container:null,fontFamily:null,fontSize:.05,fontKerning:"normal",bestFit:"none",offset:.01,interLine:.01,breakOn:`- ,.:?!
`,whiteSpace:Io,contentDirection:qh,alignItems:e0,justifyContent:n0,textAlign:c0,textType:"MSDF",fontColor:new je.Color(16777215),fontOpacity:1,fontPXRange:4,fontSupersampling:!0,borderRadius:.01,borderWidth:0,borderColor:new je.Color("black"),borderOpacity:1,backgroundSize:"cover",backgroundColor:new je.Color(2236962),backgroundWhiteColor:new je.Color(16777215),backgroundOpacity:.8,backgroundOpaqueOpacity:1,getDefaultTexture:AI,hiddenOverflow:!1,letterSpacing:0};let tu;function AI(){if(!tu){const t=document.createElement("canvas").getContext("2d");t.canvas.width=1,t.canvas.height=1,t.fillStyle="#ffffff",t.fillRect(0,0,1,1),tu=new je.CanvasTexture(t.canvas),tu.isDefault=!0}return tu}function ef(t){return class extends t{constructor(i){super(i);kv(this,"_rebuildParentUI",()=>{this.parent&&this.parent.isUI?this.parentUI=this.parent:this.parentUI=null});this.states={},this.currentState=void 0,this.isUI=!0,this.autoLayout=!0,this.childrenUIs=[],this.childrenBoxes=[],this.childrenTexts=[],this.childrenInlines=[],this.parentUI=null,this.addEventListener("added",this._rebuildParentUI),this.addEventListener("removed",this._rebuildParentUI)}getClippingPlanes(){const i=[];if(this.parentUI){if(this.isBlock&&this.parentUI.getHiddenOverflow()){const r=this.parentUI.getHeight()/2-(this.parentUI.padding||0),s=this.parentUI.getWidth()/2-(this.parentUI.padding||0),a=[new je.Plane(new je.Vector3(0,1,0),r),new je.Plane(new je.Vector3(0,-1,0),r),new je.Plane(new je.Vector3(1,0,0),s),new je.Plane(new je.Vector3(-1,0,0),s)];a.forEach(o=>{o.applyMatrix4(this.parent.matrixWorld)}),i.push(...a)}this.parentUI.parentUI&&i.push(...this.parentUI.getClippingPlanes())}return i}getHighestParent(){return this.parentUI?this.parent.getHighestParent():this}_getProperty(i){return this[i]===void 0&&this.parentUI?this.parent._getProperty(i):this[i]!==void 0?this[i]:qt[i]}getFontSize(){return this._getProperty("fontSize")}getFontKerning(){return this._getProperty("fontKerning")}getLetterSpacing(){return this._getProperty("letterSpacing")}getFontTexture(){return this.fontTexture===void 0&&this.parentUI?this.parent._getProperty("fontTexture"):this.fontTexture!==void 0?this.fontTexture:qt.getDefaultTexture()}getFontFamily(){return this._getProperty("fontFamily")}getBreakOn(){return this._getProperty("breakOn")}getWhiteSpace(){return this._getProperty("whiteSpace")}getTextAlign(){return this._getProperty("textAlign")}getTextType(){return this._getProperty("textType")}getFontColor(){return this._getProperty("fontColor")}getFontSupersampling(){return this._getProperty("fontSupersampling")}getFontOpacity(){return this._getProperty("fontOpacity")}getFontPXRange(){return this._getProperty("fontPXRange")}getBorderRadius(){return this._getProperty("borderRadius")}getBorderWidth(){return this._getProperty("borderWidth")}getBorderColor(){return this._getProperty("borderColor")}getBorderOpacity(){return this._getProperty("borderOpacity")}getContainer(){return!this.threeOBJ&&this.parent?this.parent.getContainer():this.threeOBJ?this:qt.container}getParentsNumber(i){return i=i||0,this.parentUI?this.parentUI.getParentsNumber(i+1):i}getBackgroundOpacity(){return!this.backgroundOpacity&&this.backgroundOpacity!==0?qt.backgroundOpacity:this.backgroundOpacity}getBackgroundColor(){return this.backgroundColor||qt.backgroundColor}getBackgroundTexture(){return this.backgroundTexture||qt.getDefaultTexture()}getAlignContent(){return this.alignContent||qt.alignContent}getAlignItems(){return this.alignItems||qt.alignItems}getContentDirection(){return this.contentDirection||qt.contentDirection}getJustifyContent(){return this.justifyContent||qt.justifyContent}getInterLine(){return this.interLine===void 0?qt.interLine:this.interLine}getOffset(){return this.offset===void 0?qt.offset:this.offset}getBackgroundSize(){return this.backgroundSize===void 0?qt.backgroundSize:this.backgroundSize}getHiddenOverflow(){return this.hiddenOverflow===void 0?qt.hiddenOverflow:this.hiddenOverflow}getBestFit(){return this.bestFit===void 0?qt.bestFit:this.bestFit}_rebuildChildrenLists(){this.childrenUIs=this.children.filter(i=>i.isUI),this.childrenBoxes=this.children.filter(i=>i.isBoxComponent),this.childrenInlines=this.children.filter(i=>i.isInline),this.childrenTexts=this.children.filter(i=>i.isText)}add(){for(const r of Object.keys(arguments))arguments[r].isInline&&this.update(null,!0);const i=super.add(...arguments);return this._rebuildChildrenLists(),i}remove(){for(const r of Object.keys(arguments))arguments[r].isInline&&this.update(null,!0);const i=super.remove(...arguments);return this._rebuildChildrenLists(),i}update(i,r,s){Us.requestUpdate(this,i,r,s)}onAfterUpdate(){}_updateFontFamily(i){this.fontFamily=i,this.traverse(r=>{r.isUI&&r.update(!0,!0,!1)}),this.getHighestParent().update(!1,!0,!1)}_updateFontTexture(i){this.fontTexture=i,this.getHighestParent().update(!1,!0,!1)}set(i){let r,s,a;if(Us.register(this),!(!i||JSON.stringify(i)===JSON.stringify({}))){i.alignContent&&(i.alignItems=i.alignContent,i.textAlign||(i.textAlign=i.alignContent),console.warn("`alignContent` property has been deprecated, please rely on `alignItems` and `textAlign` instead."),delete i.alignContent),i.alignItems&&Cw(i.alignItems);for(const o of Object.keys(i))if(this[o]!=i[o])switch(o){case"content":case"fontSize":case"fontKerning":case"breakOn":case"whiteSpace":this.isText&&(r=!0),s=!0,this[o]=i[o];break;case"bestFit":this.isBlock&&(r=!0,s=!0),this[o]=i[o];break;case"width":case"height":case"padding":(this.isInlineBlock||this.isBlock&&this.getBestFit()!="none")&&(r=!0),s=!0,this[o]=i[o];break;case"letterSpacing":case"interLine":this.isBlock&&this.getBestFit()!="none"&&(r=!0),s=!0,this[o]=i[o];break;case"margin":case"contentDirection":case"justifyContent":case"alignContent":case"alignItems":case"textAlign":case"textType":s=!0,this[o]=i[o];break;case"fontColor":case"fontOpacity":case"fontSupersampling":case"offset":case"backgroundColor":case"backgroundOpacity":case"backgroundTexture":case"backgroundSize":case"borderRadius":case"borderWidth":case"borderColor":case"borderOpacity":a=!0,this[o]=i[o];break;case"hiddenOverflow":this[o]=i[o];break}i.fontFamily&&Fl.setFontFamily(this,i.fontFamily),i.fontTexture&&Fl.setFontTexture(this,i.fontTexture),this.parentUI&&this.parentUI.getBestFit()!="none"&&this.parentUI.update(!0,!0,!1),this.update(r,s,a),s&&this.getHighestParent().update(!1,!0,!1)}}setupState(i){this.states[i.state]={attributes:i.attributes,onSet:i.onSet}}setState(i){const r=this.states[i];if(!r){console.warn(`state "${i}" does not exist within this component:`,this.name);return}i!==this.currentState&&(this.currentState=i,r.onSet&&r.onSet(),r.attributes&&this.set(r.attributes))}clear(){this.traverse(i=>{Us.disposeOf(i),i.material&&i.material.dispose(),i.geometry&&i.geometry.dispose()})}}}function f0(t){return class extends t{constructor(n){super(n),this.textUniforms={u_texture:{value:this.getFontTexture()},u_color:{value:this.getFontColor()},u_opacity:{value:this.getFontOpacity()},u_pxRange:{value:this.getFontPXRange()},u_useRGSS:{value:this.getFontSupersampling()}},this.backgroundUniforms={u_texture:{value:this.getBackgroundTexture()},u_color:{value:this.getBackgroundColor()},u_opacity:{value:this.getBackgroundOpacity()},u_backgroundMapping:{value:this.getBackgroundSize()},u_borderWidth:{value:this.getBorderWidth()},u_borderColor:{value:this.getBorderColor()},u_borderRadiusTopLeft:{value:this.getBorderRadius()},u_borderRadiusTopRight:{value:this.getBorderRadius()},u_borderRadiusBottomRight:{value:this.getBorderRadius()},u_borderRadiusBottomLeft:{value:this.getBorderRadius()},u_borderOpacity:{value:this.getBorderOpacity()},u_size:{value:new je.Vector2(1,1)},u_tSize:{value:new je.Vector2(1,1)}}}updateBackgroundMaterial(){this.backgroundUniforms.u_texture.value=this.getBackgroundTexture(),this.backgroundUniforms.u_tSize.value.set(this.backgroundUniforms.u_texture.value.image.width,this.backgroundUniforms.u_texture.value.image.height),this.size&&this.backgroundUniforms.u_size.value.copy(this.size),this.backgroundUniforms.u_texture.value.isDefault?(this.backgroundUniforms.u_color.value=this.getBackgroundColor(),this.backgroundUniforms.u_opacity.value=this.getBackgroundOpacity()):(this.backgroundUniforms.u_color.value=this.backgroundColor||qt.backgroundWhiteColor,this.backgroundUniforms.u_opacity.value=!this.backgroundOpacity&&this.backgroundOpacity!==0?qt.backgroundOpaqueOpacity:this.backgroundOpacity),this.backgroundUniforms.u_backgroundMapping.value=(()=>{switch(this.getBackgroundSize()){case"stretch":return 0;case"contain":return 1;case"cover":return 2}})();const n=this.getBorderRadius();this.backgroundUniforms.u_borderWidth.value=this.getBorderWidth(),this.backgroundUniforms.u_borderColor.value=this.getBorderColor(),this.backgroundUniforms.u_borderOpacity.value=this.getBorderOpacity(),Array.isArray(n)?(this.backgroundUniforms.u_borderRadiusTopLeft.value=n[0],this.backgroundUniforms.u_borderRadiusTopRight.value=n[1],this.backgroundUniforms.u_borderRadiusBottomRight.value=n[2],this.backgroundUniforms.u_borderRadiusBottomLeft.value=n[3]):(this.backgroundUniforms.u_borderRadiusTopLeft.value=n,this.backgroundUniforms.u_borderRadiusTopRight.value=n,this.backgroundUniforms.u_borderRadiusBottomRight.value=n,this.backgroundUniforms.u_borderRadiusBottomLeft.value=n)}updateTextMaterial(){this.textUniforms.u_texture.value=this.getFontTexture(),this.textUniforms.u_color.value=this.getFontColor(),this.textUniforms.u_opacity.value=this.getFontOpacity(),this.textUniforms.u_pxRange.value=this.getFontPXRange(),this.textUniforms.u_useRGSS.value=this.getFontSupersampling()}getBackgroundMaterial(){return(!this.backgroundMaterial||!this.backgroundUniforms)&&(this.backgroundMaterial=this._makeBackgroundMaterial()),this.backgroundMaterial}getFontMaterial(){return(!this.fontMaterial||!this.textUniforms)&&(this.fontMaterial=this._makeTextMaterial()),this.fontMaterial}_makeTextMaterial(){return new je.ShaderMaterial({uniforms:this.textUniforms,transparent:!0,clipping:!0,vertexShader:bI,fragmentShader:RI,extensions:{derivatives:!0}})}_makeBackgroundMaterial(){return new je.ShaderMaterial({uniforms:this.backgroundUniforms,transparent:!0,clipping:!0,vertexShader:PI,fragmentShader:LI,extensions:{derivatives:!0}})}updateClippingPlanes(n){const i=n!==void 0?n:this.getClippingPlanes();JSON.stringify(i)!==JSON.stringify(this.clippingPlanes)&&(this.clippingPlanes=i,this.fontMaterial&&(this.fontMaterial.clippingPlanes=this.clippingPlanes),this.backgroundMaterial&&(this.backgroundMaterial.clippingPlanes=this.clippingPlanes))}}}const bI=`
varying vec2 vUv;

#include <clipping_planes_pars_vertex>

void main() {

	vUv = uv;
	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
	gl_Position = projectionMatrix * mvPosition;
	gl_Position.z -= 0.00001;

	#include <clipping_planes_vertex>

}
`,RI=`

uniform sampler2D u_texture;
uniform vec3 u_color;
uniform float u_opacity;
uniform float u_pxRange;
uniform bool u_useRGSS;

varying vec2 vUv;

#include <clipping_planes_pars_fragment>

// functions from the original msdf repo:
// https://github.com/Chlumsky/msdfgen#using-a-multi-channel-distance-field

float median(float r, float g, float b) {
	return max(min(r, g), min(max(r, g), b));
}

float screenPxRange() {
	vec2 unitRange = vec2(u_pxRange)/vec2(textureSize(u_texture, 0));
	vec2 screenTexSize = vec2(1.0)/fwidth(vUv);
	return max(0.5*dot(unitRange, screenTexSize), 1.0);
}

float tap(vec2 offsetUV) {
	vec3 msd = texture( u_texture, offsetUV ).rgb;
	float sd = median(msd.r, msd.g, msd.b);
	float screenPxDistance = screenPxRange() * (sd - 0.5);
	float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
	return alpha;
}

void main() {

	float alpha;

	if ( u_useRGSS ) {

		// shader-based supersampling based on https://bgolus.medium.com/sharper-mipmapping-using-shader-based-supersampling-ed7aadb47bec
		// per pixel partial derivatives
		vec2 dx = dFdx(vUv);
		vec2 dy = dFdy(vUv);

		// rotated grid uv offsets
		vec2 uvOffsets = vec2(0.125, 0.375);
		vec2 offsetUV = vec2(0.0, 0.0);

		// supersampled using 2x2 rotated grid
		alpha = 0.0;
		offsetUV.xy = vUv + uvOffsets.x * dx + uvOffsets.y * dy;
		alpha += tap(offsetUV);
		offsetUV.xy = vUv - uvOffsets.x * dx - uvOffsets.y * dy;
		alpha += tap(offsetUV);
		offsetUV.xy = vUv + uvOffsets.y * dx - uvOffsets.x * dy;
		alpha += tap(offsetUV);
		offsetUV.xy = vUv - uvOffsets.y * dx + uvOffsets.x * dy;
		alpha += tap(offsetUV);
		alpha *= 0.25;

	} else {

		alpha = tap( vUv );

	}


	// apply the opacity
	alpha *= u_opacity;

	// this is useful to avoid z-fighting when quads overlap because of kerning
	if ( alpha < 0.02) discard;


	gl_FragColor = vec4( u_color, alpha );

	#include <clipping_planes_fragment>

}
`,PI=`
varying vec2 vUv;

#include <clipping_planes_pars_vertex>

void main() {

	vUv = uv;
	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
	gl_Position = projectionMatrix * mvPosition;

	#include <clipping_planes_vertex>

}
`,LI=`

uniform sampler2D u_texture;
uniform vec3 u_color;
uniform float u_opacity;

uniform float u_borderRadiusTopLeft;
uniform float u_borderRadiusTopRight;
uniform float u_borderRadiusBottomLeft;
uniform float u_borderRadiusBottomRight;
uniform float u_borderWidth;
uniform vec3 u_borderColor;
uniform float u_borderOpacity;
uniform vec2 u_size;
uniform vec2 u_tSize;
uniform int u_backgroundMapping;

varying vec2 vUv;

#include <clipping_planes_pars_fragment>

float getEdgeDist() {
	vec2 ndc = vec2( vUv.x * 2.0 - 1.0, vUv.y * 2.0 - 1.0 );
	vec2 planeSpaceCoord = vec2( u_size.x * 0.5 * ndc.x, u_size.y * 0.5 * ndc.y );
	vec2 corner = u_size * 0.5;
	vec2 offsetCorner = corner - abs( planeSpaceCoord );
	float innerRadDist = min( offsetCorner.x, offsetCorner.y ) * -1.0;
	if (vUv.x < 0.5 && vUv.y >= 0.5) {
		float roundedDist = length( max( abs( planeSpaceCoord ) - u_size * 0.5 + u_borderRadiusTopLeft, 0.0 ) ) - u_borderRadiusTopLeft;
		float s = step( innerRadDist * -1.0, u_borderRadiusTopLeft );
		return mix( innerRadDist, roundedDist, s );
	}
	if (vUv.x >= 0.5 && vUv.y >= 0.5) {
		float roundedDist = length( max( abs( planeSpaceCoord ) - u_size * 0.5 + u_borderRadiusTopRight, 0.0 ) ) - u_borderRadiusTopRight;
		float s = step( innerRadDist * -1.0, u_borderRadiusTopRight );
		return mix( innerRadDist, roundedDist, s );
	}
	if (vUv.x >= 0.5 && vUv.y < 0.5) {
		float roundedDist = length( max( abs( planeSpaceCoord ) - u_size * 0.5 + u_borderRadiusBottomRight, 0.0 ) ) - u_borderRadiusBottomRight;
		float s = step( innerRadDist * -1.0, u_borderRadiusBottomRight );
		return mix( innerRadDist, roundedDist, s );
	}
	if (vUv.x < 0.5 && vUv.y < 0.5) {
		float roundedDist = length( max( abs( planeSpaceCoord ) - u_size * 0.5 + u_borderRadiusBottomLeft, 0.0 ) ) - u_borderRadiusBottomLeft;
		float s = step( innerRadDist * -1.0, u_borderRadiusBottomLeft );
		return mix( innerRadDist, roundedDist, s );
	}
}

vec4 sampleTexture() {
	float textureRatio = u_tSize.x / u_tSize.y;
	float panelRatio = u_size.x / u_size.y;
	vec2 uv = vUv;
	if ( u_backgroundMapping == 1 ) { // contain
		if ( textureRatio < panelRatio ) { // repeat on X
			float newX = uv.x * ( panelRatio / textureRatio );
			newX += 0.5 - 0.5 * ( panelRatio / textureRatio );
			uv.x = newX;
		} else { // repeat on Y
			float newY = uv.y * ( textureRatio / panelRatio );
			newY += 0.5 - 0.5 * ( textureRatio / panelRatio );
			uv.y = newY;
		}
	} else if ( u_backgroundMapping == 2 ) { // cover
		if ( textureRatio < panelRatio ) { // stretch on Y
			float newY = uv.y * ( textureRatio / panelRatio );
			newY += 0.5 - 0.5 * ( textureRatio / panelRatio );
			uv.y = newY;
		} else { // stretch on X
			float newX = uv.x * ( panelRatio / textureRatio );
			newX += 0.5 - 0.5 * ( panelRatio / textureRatio );
			uv.x = newX;
		}
	}
	return texture2D( u_texture, uv ).rgba;
}

void main() {

	float edgeDist = getEdgeDist();
	float change = fwidth( edgeDist );

	vec4 textureSample = sampleTexture();
	vec3 blendedColor = textureSample.rgb * u_color;

	float alpha = smoothstep( change, 0.0, edgeDist );
	float blendedOpacity = u_opacity * textureSample.a * alpha;

	vec4 frameColor = vec4( blendedColor, blendedOpacity );

	if ( u_borderWidth <= 0.0 ) {
		gl_FragColor = frameColor;
	} else {
		vec4 borderColor = vec4( u_borderColor, u_borderOpacity * alpha );
		float stp = smoothstep( edgeDist + change, edgeDist, u_borderWidth * -1.0 );
		gl_FragColor = mix( frameColor, borderColor, stp );
	}

	#include <clipping_planes_fragment>
}
`;class zw extends je.Mesh{constructor(e){const n=new je.PlaneGeometry;super(n,e),this.castShadow=!0,this.receiveShadow=!0,this.name="MeshUI-Frame"}}let Du=null;function uo(...t){if(!Du)throw new Error("Cannot use mixins with Base null");let e=Du;Du=null;let n=t.length,i;for(;--n>=0;)i=t[n],e=i(e);return e}uo.withBase=t=>(Du=t,uo);class vl extends uo.withBase(je.Object3D)(l0,Fw,f0,ef){constructor(e){super(e),this.isBlock=!0,this.size=new je.Vector2(1,1),this.frame=new zw(this.getBackgroundMaterial()),this.frame.onBeforeRender=()=>{this.updateClippingPlanes&&this.updateClippingPlanes()},this.add(this.frame),this.set(e)}parseParams(){const e=this.getBestFit();e!="none"&&this.childrenTexts.length?this.calculateBestFit(e):this.childrenTexts.forEach(n=>{n._fitFontSize=void 0})}updateLayout(){const e=this.getWidth(),n=this.getHeight();if(!e||!n){console.warn("Block got no dimension from its parameters or from children parameters");return}this.size.set(e,n),this.frame.scale.set(e,n,1),this.frame&&this.updateBackgroundMaterial(),this.frame.renderOrder=this.getParentsNumber(),this.autoLayout&&this.setPosFromParentRecords(),this.childrenInlines.length&&this.computeInlinesPosition(),this.computeChildrenPosition(),this.parentUI&&(this.position.z=this.getOffset())}updateInner(){this.parentUI&&(this.position.z=this.getOffset()),this.frame&&this.updateBackgroundMaterial()}}function Hw(t){return class extends t{constructor(n){super(n),this.isInline=!0}}}function II(t,e=!1){const n=t[0].index!==null,i=new Set(Object.keys(t[0].attributes)),r=new Set(Object.keys(t[0].morphAttributes)),s={},a={},o=t[0].morphTargetsRelative,l=new je.BufferGeometry;let c=0;for(let u=0;u<t.length;++u){const h=t[u];let f=0;if(n!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(h.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(h.morphAttributes[p])}if(l.userData.mergedUserData=l.userData.mergedUserData||[],l.userData.mergedUserData.push(h.userData),e){let p;if(n)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(n){let u=0;const h=[];for(let f=0;f<t.length;++f){const p=t[f].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=t[f].attributes.position.count}l.setIndex(h)}for(const u in s){const h=fy(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const p=[];for(let y=0;y<a[u].length;++y)p.push(a[u][y][f]);const g=fy(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function fy(t){let e,n,i,r=0;for(let o=0;o<t.length;++o){const l=t[o];if(l.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=l.array.constructor),e!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=l.itemSize),n!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=l.normalized),i!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;r+=l.array.length}const s=new e(r);let a=0;for(let o=0;o<t.length;++o)s.set(t[o].array,a),a+=t[o].array.length;return new je.BufferAttribute(s,n,i)}class NI extends je.PlaneGeometry{constructor(e,n){const i=e.glyph,r=e.fontSize;super(e.width,e.height),i.match(/\s/g)===null?(n.info.charset.indexOf(i)===-1&&console.error(`The character '${i}' is not included in the font characters set.`),this.mapUVs(n,i),this.transformGeometry(e)):(this.nullifyUVs(),this.scale(0,0,1),this.translate(0,r/2,0))}mapUVs(e,n){const i=e.chars.find(u=>u.char===n),r=e.common,s=i.x/r.scaleW,a=(i.x+i.width)/r.scaleW,o=1-(i.y+i.height)/r.scaleH,l=1-i.y/r.scaleH,c=this.attributes.uv;for(let u=0;u<c.count;u++){let h=c.getX(u),f=c.getY(u);[h,f]=(()=>{switch(u){case 0:return[s,l];case 1:return[a,l];case 2:return[s,o];case 3:return[a,o]}})(),c.setXY(u,h,f)}}nullifyUVs(){const e=this.attributes.uv;for(let n=0;n<e.count;n++)e.setXY(n,0,0)}transformGeometry(e){this.translate(e.width/2,e.height/2,0)}}function DI(t){const e=t.font,n=t.fontSize,i=t.glyph,r=n/e.info.size,s=e.chars.find(h=>h.char===i);let a=s?s.width*r:n/3,o=s?s.height*r:0;a===0&&(a=s?s.xadvance*r:n),o===0&&(o=n*.7),i===`
`&&(a=0);const l=s?s.xadvance*r:a,c=s?s.xoffset*r:0,u=s?s.yoffset*r:0;return{width:a,height:o,anchor:u,xadvance:l,xoffset:c}}function UI(t,e){const n=t._kernings;return n[e]?n[e]:0}function OI(){const t=[];this.inlines.forEach((i,r)=>{t[r]=new NI(i,this.getFontFamily()),t[r].translate(i.offsetX,i.offsetY,0)});const e=II(t);return new je.Mesh(e,this.getFontMaterial())}const _d={getGlyphDimensions:DI,getGlyphPairKerning:UI,buildText:OI};function kI(t){return class extends t{createText(){const n=this,i=(()=>{switch(this.getTextType()){case"MSDF":return _d.buildText.call(this);default:console.warn(`'${this.getTextType()}' is not a supported text type.
See https://github.com/felixmariotto/three-mesh-ui/wiki/Using-a-custom-text-type`);break}})();return i.renderOrder=1/0,i.onBeforeRender=function(){n.updateClippingPlanes&&n.updateClippingPlanes()},i}getGlyphDimensions(n){switch(n.textType){case"MSDF":return _d.getGlyphDimensions(n);default:console.warn(`'${n.textType}' is not a supported text type.
See https://github.com/felixmariotto/three-mesh-ui/wiki/Using-a-custom-text-type`);break}}getGlyphPairKerning(n,i,r){switch(n){case"MSDF":return _d.getGlyphPairKerning(i,r);default:console.warn(`'${n}' is not a supported text type.
See https://github.com/felixmariotto/three-mesh-ui/wiki/Using-a-custom-text-type`);break}}}}function Vw(t){t.children.forEach(e=>{e.children.length>0&&Vw(e),t.remove(e),Us.disposeOf(e),e.material&&e.material.dispose(),e.geometry&&e.geometry.dispose()}),t.children=[]}const FI=Vw;class d0 extends uo.withBase(je.Object3D)(Hw,kI,f0,ef){constructor(e){super(e),this.isText=!0,this.set(e)}parseParams(){this.calculateInlines(this._fitFontSize||this.getFontSize())}updateLayout(){FI(this),this.inlines&&(this.textContent=this.createText(),this.updateTextMaterial(),this.add(this.textContent)),this.position.z=this.getOffset()}updateInner(){this.position.z=this.getOffset(),this.textContent&&this.updateTextMaterial()}calculateInlines(e){const n=this.content,i=this.getFontFamily(),r=this.getBreakOn(),s=this.getTextType(),a=this.getWhiteSpace();if(!i||typeof i=="string"){Fl.getFontOf(this)||console.warn("no font was found");return}if(!this.content){this.inlines=null;return}if(!s){console.error(`You must provide a 'textType' attribute so three-mesh-ui knows how to render your text.
 See https://github.com/felixmariotto/three-mesh-ui/wiki/Using-a-custom-text-type`);return}const o=bw(n,a),l=Array.from?Array.from(o):String(o).split(""),c=e/i.info.size,u=i.common.lineHeight*c,h=i.common.base*c,f=l.map(p=>{const g=this.getGlyphDimensions({textType:s,glyph:p,font:i,fontSize:e});let y=null;return a!==fc&&(r.includes(p)||p.match(/\s/g))&&(y="possible"),p.match(/\n/g)&&(y=Rw(a)),{height:g.height,width:g.width,anchor:g.anchor,xadvance:g.xadvance,xoffset:g.xoffset,lineBreak:y,glyph:p,fontSize:e,lineHeight:u,lineBase:h}});if(this.getFontKerning()!=="none")for(let p=1;p<f.length;p++){const g=f[p],y=f[p-1].glyph+f[p].glyph,m=this.getGlyphPairKerning(s,i,y);g.kerning=m*(e/i.info.size)}this.inlines=f}}class p0 extends uo.withBase(je.Object3D)(Hw,l0,Fw,f0,ef){constructor(e){super(e),this.isInlineBlock=!0,this.size=new je.Vector2(1,1),this.frame=new zw(this.getBackgroundMaterial()),this.frame.onBeforeRender=()=>{this.updateClippingPlanes&&this.updateClippingPlanes()},this.add(this.frame),this.set(e)}parseParams(){this.width||console.warn("inlineBlock has no width. Set to 0.3 by default"),this.height||console.warn("inlineBlock has no height. Set to 0.3 by default"),this.inlines=[{height:this.height||.3,width:this.width||.3,anchor:0,lineBreak:"possible"}]}updateLayout(){const e=this.getWidth(),n=this.getHeight();if(this.inlines){const i=this.inlines[0];this.position.set(i.width/2,i.height/2,0),this.position.x+=i.offsetX,this.position.y+=i.offsetY}this.size.set(e,n),this.frame.scale.set(e,n,1),this.frame&&this.updateBackgroundMaterial(),this.frame.renderOrder=this.getParentsNumber(),this.childrenInlines.length&&this.computeInlinesPosition(),this.computeChildrenPosition(),this.position.z=this.getOffset()}updateInner(){this.position.z=this.getOffset(),this.frame&&this.updateBackgroundMaterial()}}const Ir={fr:[[[{width:.1,chars:[{lowerCase:"a",upperCase:"A"}]},{width:.1,chars:[{lowerCase:"z",upperCase:"Z"}]},{width:.1,chars:[{lowerCase:"e",upperCase:"E"}]},{width:.1,chars:[{lowerCase:"r",upperCase:"R"}]},{width:.1,chars:[{lowerCase:"t",upperCase:"T"}]},{width:.1,chars:[{lowerCase:"y",upperCase:"Y"}]},{width:.1,chars:[{lowerCase:"u",upperCase:"U"}]},{width:.1,chars:[{lowerCase:"i",upperCase:"I"}]},{width:.1,chars:[{lowerCase:"o",upperCase:"O"}]},{width:.1,chars:[{lowerCase:"p",upperCase:"P"}]}],[{width:.1,chars:[{lowerCase:"q",upperCase:"Q"}]},{width:.1,chars:[{lowerCase:"s",upperCase:"S"}]},{width:.1,chars:[{lowerCase:"d",upperCase:"D"}]},{width:.1,chars:[{lowerCase:"f",upperCase:"F"}]},{width:.1,chars:[{lowerCase:"g",upperCase:"G"}]},{width:.1,chars:[{lowerCase:"h",upperCase:"H"}]},{width:.1,chars:[{lowerCase:"j",upperCase:"J"}]},{width:.1,chars:[{lowerCase:"k",upperCase:"K"}]},{width:.1,chars:[{lowerCase:"l",upperCase:"L"}]},{width:.1,chars:[{lowerCase:"m",upperCase:"M"}]}],[{width:.2,command:"shift",chars:[{icon:"shift"}]},{width:.1,chars:[{lowerCase:"w",upperCase:"W"}]},{width:.1,chars:[{lowerCase:"x",upperCase:"X"}]},{width:.1,chars:[{lowerCase:"c",upperCase:"C"}]},{width:.1,chars:[{lowerCase:"v",upperCase:"V"}]},{width:.1,chars:[{lowerCase:"b",upperCase:"B"}]},{width:.1,chars:[{lowerCase:"n",upperCase:"N"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]],eng:[[[{width:.1,chars:[{lowerCase:"q",upperCase:"Q"}]},{width:.1,chars:[{lowerCase:"w",upperCase:"W"}]},{width:.1,chars:[{lowerCase:"e",upperCase:"E"}]},{width:.1,chars:[{lowerCase:"r",upperCase:"R"}]},{width:.1,chars:[{lowerCase:"t",upperCase:"T"}]},{width:.1,chars:[{lowerCase:"y",upperCase:"Y"}]},{width:.1,chars:[{lowerCase:"u",upperCase:"U"}]},{width:.1,chars:[{lowerCase:"i",upperCase:"I"}]},{width:.1,chars:[{lowerCase:"o",upperCase:"O"}]},{width:.1,chars:[{lowerCase:"p",upperCase:"P"}]}],[{width:.1,chars:[{lowerCase:"a",upperCase:"A"}]},{width:.1,chars:[{lowerCase:"s",upperCase:"S"}]},{width:.1,chars:[{lowerCase:"d",upperCase:"D"}]},{width:.1,chars:[{lowerCase:"f",upperCase:"F"}]},{width:.1,chars:[{lowerCase:"g",upperCase:"G"}]},{width:.1,chars:[{lowerCase:"h",upperCase:"H"}]},{width:.1,chars:[{lowerCase:"j",upperCase:"J"}]},{width:.1,chars:[{lowerCase:"k",upperCase:"K"}]},{width:.1,chars:[{lowerCase:"l",upperCase:"L"}]}],[{width:.15,command:"shift",chars:[{icon:"shift"}]},{width:.1,chars:[{lowerCase:"z",upperCase:"Z"}]},{width:.1,chars:[{lowerCase:"x",upperCase:"X"}]},{width:.1,chars:[{lowerCase:"c",upperCase:"C"}]},{width:.1,chars:[{lowerCase:"v",upperCase:"V"}]},{width:.1,chars:[{lowerCase:"b",upperCase:"B"}]},{width:.1,chars:[{lowerCase:"n",upperCase:"N"}]},{width:.1,chars:[{lowerCase:"m",upperCase:"M"}]},{width:.15,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]],ru:[[[{width:1/12,chars:[{lowerCase:"й",upperCase:"Й"},{lowerCase:"q",upperCase:"Q"}]},{width:1/12,chars:[{lowerCase:"ц",upperCase:"Ц"},{lowerCase:"w",upperCase:"W"}]},{width:1/12,chars:[{lowerCase:"у",upperCase:"У"},{lowerCase:"e",upperCase:"E"}]},{width:1/12,chars:[{lowerCase:"к",upperCase:"К"},{lowerCase:"r",upperCase:"R"}]},{width:1/12,chars:[{lowerCase:"е",upperCase:"Е"},{lowerCase:"t",upperCase:"T"}]},{width:1/12,chars:[{lowerCase:"н",upperCase:"Н"},{lowerCase:"y",upperCase:"Y"}]},{width:1/12,chars:[{lowerCase:"г",upperCase:"Г"},{lowerCase:"u",upperCase:"U"}]},{width:1/12,chars:[{lowerCase:"ш",upperCase:"Ш"},{lowerCase:"i",upperCase:"I"}]},{width:1/12,chars:[{lowerCase:"щ",upperCase:"Щ"},{lowerCase:"o",upperCase:"O"}]},{width:1/12,chars:[{lowerCase:"з",upperCase:"З"},{lowerCase:"p",upperCase:"P"}]},{width:1/12,chars:[{lowerCase:"х",upperCase:"Х"},{lowerCase:"{",upperCase:"["}]},{width:1/12,chars:[{lowerCase:"ъ",upperCase:"Ъ"},{lowerCase:"}",upperCase:"]"}]}],[{width:1/12,chars:[{lowerCase:"ф",upperCase:"Ф"},{lowerCase:"a",upperCase:"A"}]},{width:1/12,chars:[{lowerCase:"ы",upperCase:"Ы"},{lowerCase:"s",upperCase:"S"}]},{width:1/12,chars:[{lowerCase:"в",upperCase:"В"},{lowerCase:"d",upperCase:"D"}]},{width:1/12,chars:[{lowerCase:"а",upperCase:"А"},{lowerCase:"f",upperCase:"F"}]},{width:1/12,chars:[{lowerCase:"п",upperCase:"П"},{lowerCase:"g",upperCase:"G"}]},{width:1/12,chars:[{lowerCase:"р",upperCase:"Р"},{lowerCase:"h",upperCase:"H"}]},{width:1/12,chars:[{lowerCase:"о",upperCase:"О"},{lowerCase:"j",upperCase:"J"}]},{width:1/12,chars:[{lowerCase:"л",upperCase:"Л"},{lowerCase:"k",upperCase:"K"}]},{width:1/12,chars:[{lowerCase:"д",upperCase:"Д"},{lowerCase:"l",upperCase:"L"}]},{width:1/12,chars:[{lowerCase:"ж",upperCase:"Ж"},{lowerCase:":",upperCase:";"}]},{width:1/12,chars:[{lowerCase:"э",upperCase:"Э"},{lowerCase:'"',upperCase:"'"}]},{width:1/12,chars:[{lowerCase:"ё",upperCase:"Ё"},{lowerCase:"|",upperCase:"\\"}]}],[{width:1.5/12,command:"shift",chars:[{icon:"shift"}]},{width:1/12,chars:[{lowerCase:"я",upperCase:"Я"},{lowerCase:"z",upperCase:"Z"}]},{width:1/12,chars:[{lowerCase:"ч",upperCase:"Ч"},{lowerCase:"x",upperCase:"X"}]},{width:1/12,chars:[{lowerCase:"с",upperCase:"С"},{lowerCase:"c",upperCase:"C"}]},{width:1/12,chars:[{lowerCase:"м",upperCase:"М"},{lowerCase:"v",upperCase:"V"}]},{width:1/12,chars:[{lowerCase:"и",upperCase:"И"},{lowerCase:"b",upperCase:"B"}]},{width:1/12,chars:[{lowerCase:"т",upperCase:"Т"},{lowerCase:"n",upperCase:"N"}]},{width:1/12,chars:[{lowerCase:"ь",upperCase:"Ь"},{lowerCase:"m",upperCase:"M"}]},{width:1/12,chars:[{lowerCase:"б",upperCase:"Б"},{lowerCase:",",upperCase:""}]},{width:1/12,chars:[{lowerCase:"ю",upperCase:"Ю"},{lowerCase:".",upperCase:""}]},{width:1.5/12,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.15,command:"switch-set",chars:[{lowerCase:"eng"}]},{width:.15,command:"switch",chars:[{lowerCase:".?12"}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.3,command:"switch",chars:[{lowerCase:"АБВ"}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]],de:[[[{width:1/11,chars:[{lowerCase:"q",upperCase:"Q"}]},{width:1/11,chars:[{lowerCase:"w",upperCase:"W"}]},{width:1/11,chars:[{lowerCase:"e",upperCase:"E"}]},{width:1/11,chars:[{lowerCase:"r",upperCase:"R"}]},{width:1/11,chars:[{lowerCase:"t",upperCase:"T"}]},{width:1/11,chars:[{lowerCase:"z",upperCase:"Z"}]},{width:1/11,chars:[{lowerCase:"u",upperCase:"U"}]},{width:1/11,chars:[{lowerCase:"i",upperCase:"I"}]},{width:1/11,chars:[{lowerCase:"o",upperCase:"O"}]},{width:1/11,chars:[{lowerCase:"p",upperCase:"P"}]},{width:1/11,chars:[{lowerCase:"ü",upperCase:"Ü"}]}],[{width:1/11,chars:[{lowerCase:"a",upperCase:"A"}]},{width:1/11,chars:[{lowerCase:"s",upperCase:"S"}]},{width:1/11,chars:[{lowerCase:"d",upperCase:"D"}]},{width:1/11,chars:[{lowerCase:"f",upperCase:"F"}]},{width:1/11,chars:[{lowerCase:"g",upperCase:"G"}]},{width:1/11,chars:[{lowerCase:"h",upperCase:"H"}]},{width:1/11,chars:[{lowerCase:"j",upperCase:"J"}]},{width:1/11,chars:[{lowerCase:"k",upperCase:"K"}]},{width:1/11,chars:[{lowerCase:"l",upperCase:"L"}]},{width:1/11,chars:[{lowerCase:"ö",upperCase:"Ö"}]},{width:1/11,chars:[{lowerCase:"ä",upperCase:"Ä"}]}],[{width:2/11,command:"shift",chars:[{icon:"shift"}]},{width:1/11,chars:[{lowerCase:"y",upperCase:"Y"}]},{width:1/11,chars:[{lowerCase:"x",upperCase:"X"}]},{width:1/11,chars:[{lowerCase:"c",upperCase:"C"}]},{width:1/11,chars:[{lowerCase:"v",upperCase:"V"}]},{width:1/11,chars:[{lowerCase:"b",upperCase:"B"}]},{width:1/11,chars:[{lowerCase:"n",upperCase:"N"}]},{width:1/11,chars:[{lowerCase:"m",upperCase:"M"}]},{width:2/11,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]],es:[[[{width:.1,chars:[{lowerCase:"q",upperCase:"Q"}]},{width:.1,chars:[{lowerCase:"w",upperCase:"W"}]},{width:.1,chars:[{lowerCase:"e",upperCase:"E"}]},{width:.1,chars:[{lowerCase:"r",upperCase:"R"}]},{width:.1,chars:[{lowerCase:"t",upperCase:"T"}]},{width:.1,chars:[{lowerCase:"y",upperCase:"Y"}]},{width:.1,chars:[{lowerCase:"u",upperCase:"U"}]},{width:.1,chars:[{lowerCase:"i",upperCase:"I"}]},{width:.1,chars:[{lowerCase:"o",upperCase:"O"}]},{width:.1,chars:[{lowerCase:"p",upperCase:"P"}]}],[{width:.1,chars:[{lowerCase:"a",upperCase:"A"}]},{width:.1,chars:[{lowerCase:"s",upperCase:"S"}]},{width:.1,chars:[{lowerCase:"d",upperCase:"D"}]},{width:.1,chars:[{lowerCase:"f",upperCase:"F"}]},{width:.1,chars:[{lowerCase:"g",upperCase:"G"}]},{width:.1,chars:[{lowerCase:"h",upperCase:"H"}]},{width:.1,chars:[{lowerCase:"j",upperCase:"J"}]},{width:.1,chars:[{lowerCase:"k",upperCase:"K"}]},{width:.1,chars:[{lowerCase:"l",upperCase:"L"}]},{width:.1,chars:[{lowerCase:"ñ",upperCase:"Ñ"}]}],[{width:.15,command:"shift",chars:[{icon:"shift"}]},{width:.1,chars:[{lowerCase:"z",upperCase:"Z"}]},{width:.1,chars:[{lowerCase:"x",upperCase:"X"}]},{width:.1,chars:[{lowerCase:"c",upperCase:"C"}]},{width:.1,chars:[{lowerCase:"v",upperCase:"V"}]},{width:.1,chars:[{lowerCase:"b",upperCase:"B"}]},{width:.1,chars:[{lowerCase:"n",upperCase:"N"}]},{width:.1,chars:[{lowerCase:"m",upperCase:"M"}]},{width:.15,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]],el:[[[{width:.1,chars:[{lowerCase:";",upperCase:":"},{lowerCase:"q",upperCase:"Q"}]},{width:.1,chars:[{lowerCase:"ς",upperCase:"ς"},{lowerCase:"w",upperCase:"W"}]},{width:.1,chars:[{lowerCase:"ε",upperCase:"Ε"},{lowerCase:"e",upperCase:"E"}]},{width:.1,chars:[{lowerCase:"ρ",upperCase:"Ρ"},{lowerCase:"r",upperCase:"R"}]},{width:.1,chars:[{lowerCase:"τ",upperCase:"Τ"},{lowerCase:"t",upperCase:"T"}]},{width:.1,chars:[{lowerCase:"υ",upperCase:"Υ"},{lowerCase:"y",upperCase:"Y"}]},{width:.1,chars:[{lowerCase:"θ",upperCase:"Θ"},{lowerCase:"u",upperCase:"U"}]},{width:.1,chars:[{lowerCase:"ι",upperCase:"Ι"},{lowerCase:"i",upperCase:"I"}]},{width:.1,chars:[{lowerCase:"ο",upperCase:"Ο"},{lowerCase:"o",upperCase:"O"}]},{width:.1,chars:[{lowerCase:"π",upperCase:"Π"},{lowerCase:"p",upperCase:"P"}]}],[{width:.1,chars:[{lowerCase:"α",upperCase:"Α"},{lowerCase:"a",upperCase:"A"}]},{width:.1,chars:[{lowerCase:"σ",upperCase:"Σ"},{lowerCase:"s",upperCase:"S"}]},{width:.1,chars:[{lowerCase:"δ",upperCase:"Δ"},{lowerCase:"d",upperCase:"D"}]},{width:.1,chars:[{lowerCase:"φ",upperCase:"Φ"},{lowerCase:"f",upperCase:"F"}]},{width:.1,chars:[{lowerCase:"γ",upperCase:"Γ"},{lowerCase:"g",upperCase:"G"}]},{width:.1,chars:[{lowerCase:"η",upperCase:"Η"},{lowerCase:"h",upperCase:"H"}]},{width:.1,chars:[{lowerCase:"ξ",upperCase:"Ξ"},{lowerCase:"j",upperCase:"J"}]},{width:.1,chars:[{lowerCase:"κ",upperCase:"Κ"},{lowerCase:"k",upperCase:"K"}]},{width:.1,chars:[{lowerCase:"λ",upperCase:"Λ"},{lowerCase:"l",upperCase:"L"}]}],[{width:.15,command:"shift",chars:[{icon:"shift"}]},{width:.1,chars:[{lowerCase:"ζ",upperCase:"Ζ"},{lowerCase:"z",upperCase:"Z"}]},{width:.1,chars:[{lowerCase:"χ",upperCase:"Χ"},{lowerCase:"x",upperCase:"X"}]},{width:.1,chars:[{lowerCase:"ψ",upperCase:"Ψ"},{lowerCase:"c",upperCase:"C"}]},{width:.1,chars:[{lowerCase:"ω",upperCase:"Ω"},{lowerCase:"v",upperCase:"V"}]},{width:.1,chars:[{lowerCase:"β",upperCase:"Β"},{lowerCase:"b",upperCase:"B"}]},{width:.1,chars:[{lowerCase:"ν",upperCase:"Ν"},{lowerCase:"n",upperCase:"N"}]},{width:.1,chars:[{lowerCase:"μ",upperCase:"Μ"},{lowerCase:"m",upperCase:"M"}]},{width:.15,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.15,command:"switch-set",chars:[{lowerCase:"eng"}]},{width:.15,command:"switch",chars:[{lowerCase:".?12"}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]],nord:[[[{width:1/11,chars:[{lowerCase:"q",upperCase:"Q"}]},{width:1/11,chars:[{lowerCase:"w",upperCase:"W"}]},{width:1/11,chars:[{lowerCase:"e",upperCase:"E"}]},{width:1/11,chars:[{lowerCase:"r",upperCase:"R"}]},{width:1/11,chars:[{lowerCase:"t",upperCase:"T"}]},{width:1/11,chars:[{lowerCase:"y",upperCase:"Y"}]},{width:1/11,chars:[{lowerCase:"u",upperCase:"U"}]},{width:1/11,chars:[{lowerCase:"i",upperCase:"I"}]},{width:1/11,chars:[{lowerCase:"o",upperCase:"O"}]},{width:1/11,chars:[{lowerCase:"p",upperCase:"P"}]},{width:1/11,chars:[{lowerCase:"å",upperCase:"Å"}]}],[{width:1/11,chars:[{lowerCase:"a",upperCase:"A"}]},{width:1/11,chars:[{lowerCase:"s",upperCase:"S"}]},{width:1/11,chars:[{lowerCase:"d",upperCase:"D"}]},{width:1/11,chars:[{lowerCase:"f",upperCase:"F"}]},{width:1/11,chars:[{lowerCase:"g",upperCase:"G"}]},{width:1/11,chars:[{lowerCase:"h",upperCase:"H"}]},{width:1/11,chars:[{lowerCase:"j",upperCase:"J"}]},{width:1/11,chars:[{lowerCase:"k",upperCase:"K"}]},{width:1/11,chars:[{lowerCase:"l",upperCase:"L"}]},{width:1/11,chars:[{lowerCase:"æ",upperCase:"Æ"}]},{width:1/11,chars:[{lowerCase:"ø",upperCase:"Ø"}]}],[{width:2/11,command:"shift",chars:[{icon:"shift"}]},{width:1/11,chars:[{lowerCase:"z",upperCase:"Z"}]},{width:1/11,chars:[{lowerCase:"x",upperCase:"X"}]},{width:1/11,chars:[{lowerCase:"c",upperCase:"C"}]},{width:1/11,chars:[{lowerCase:"v",upperCase:"V"}]},{width:1/11,chars:[{lowerCase:"b",upperCase:"B"}]},{width:1/11,chars:[{lowerCase:"n",upperCase:"N"}]},{width:1/11,chars:[{lowerCase:"m",upperCase:"M"}]},{width:2/11,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]]},BI=new je.TextureLoader;class Gw extends uo.withBase(je.Object3D)(l0,ef){constructor(e){e||(e={}),e.width||(e.width=1),e.height||(e.height=.4),e.margin||(e.margin=.003),e.padding||(e.padding=.01),super(e),this.currentPanel=0,this.isLowerCase=!0,this.charsetCount=1;let n;if(e.language||navigator.language)switch(e.language||navigator.language){case"fr":case"fr-CH":case"fr-CA":n=Ir.fr;break;case"ru":this.charsetCount=2,n=Ir.ru;break;case"de":case"de-DE":case"de-AT":case"de-LI":case"de-CH":n=Ir.de;break;case"es":case"es-419":case"es-AR":case"es-CL":case"es-CO":case"es-ES":case"es-CR":case"es-US":case"es-HN":case"es-MX":case"es-PE":case"es-UY":case"es-VE":n=Ir.es;break;case"el":this.charsetCount=2,n=Ir.el;break;case"nord":n=Ir.nord;break;default:n=Ir.eng;break}else n=Ir.eng;this.keys=[],this.panels=n.map(i=>{const r=e.height/i.length-e.margin*2,s=new vl({width:e.width+e.padding*2,height:e.height+e.padding*2,offset:0,padding:e.padding,fontFamily:e.fontFamily,fontTexture:e.fontTexture,backgroundColor:e.backgroundColor,backgroundOpacity:e.backgroundOpacity});return s.charset=0,s.add(...i.map(a=>{const o=new vl({width:e.width,height:r,margin:e.margin,contentDirection:"row",justifyContent:"center"});o.frame.visible=!1;const l=[];return a.forEach(c=>{const u=new vl({width:e.width*c.width-e.margin*2,height:r,margin:e.margin,justifyContent:"center",offset:0}),h=c.chars[s.charset].lowerCase||c.chars[s.charset].icon||"undif";if(h==="enter"&&e.enterTexture||h==="shift"&&e.shiftTexture||h==="backspace"&&e.backspaceTexture){const f=(()=>{switch(h){case"backspace":return e.backspaceTexture;case"enter":return e.enterTexture;case"shift":return e.shiftTexture;default:console.warn("There is no icon image for this key")}})();BI.load(f,p=>{u.add(new p0({width:u.width*.65,height:u.height*.65,backgroundSize:"contain",backgroundTexture:p}))})}else u.add(new d0({content:h,offset:0}));u.type="Key",u.info=c,u.info.input=h,u.panel=s,l.push(u),this.keys.push(u)}),o.add(...l),o})),s}),this.add(this.panels[0]),this.set(e)}setNextPanel(){this.panels.forEach(e=>{this.remove(e)}),this.currentPanel=(this.currentPanel+1)%this.panels.length,this.add(this.panels[this.currentPanel]),this.update(!0,!0,!0)}setNextCharset(){this.panels[this.currentPanel].charset=(this.panels[this.currentPanel].charset+1)%this.charsetCount,this.keys.forEach(e=>{if(!this.panels[this.currentPanel].getObjectById(e.id))return;const i=e.info.chars[e.panel.charset]||e.info.chars[0],r=this.isLowerCase||!i.upperCase?i.lowerCase:i.upperCase;if(!e.childrenTexts.length)return;const s=e.childrenTexts[0];e.info.input=r,s.set({content:r}),s.update(!0,!0,!0)})}toggleCase(){this.isLowerCase=!this.isLowerCase,this.keys.forEach(e=>{const n=e.info.chars[e.panel.charset]||e.info.chars[0],i=this.isLowerCase||!n.upperCase?n.lowerCase:n.upperCase;if(!e.childrenTexts.length)return;const r=e.childrenTexts[0];e.info.input=i,r.set({content:i}),r.update(!0,!0,!0)})}parseParams(){}updateLayout(){}updateInner(){}}const Ww=()=>Us.update(),Xw={Block:vl,Text:d0,InlineBlock:p0,Keyboard:Gw,FontLibrary:Fl,update:Ww,TextAlign:Kh,Whitespace:Yh,JustifyContent:$h,AlignItems:jh,ContentDirection:Xh};typeof global<"u"&&(global.ThreeMeshUI=Xw);const zI=Xw;jn.g1;var HI=jn.gO;jn.km;jn.zV;jn.ol;jn.uM;jn.N1;var dy=jn.xv;jn.PH;jn.UH;jn.ZP;jn.Vx;function jw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $w={exports:{}},tf={},Yw={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dc=Symbol.for("react.element"),VI=Symbol.for("react.portal"),GI=Symbol.for("react.fragment"),WI=Symbol.for("react.strict_mode"),XI=Symbol.for("react.profiler"),jI=Symbol.for("react.provider"),$I=Symbol.for("react.context"),YI=Symbol.for("react.forward_ref"),KI=Symbol.for("react.suspense"),qI=Symbol.for("react.memo"),ZI=Symbol.for("react.lazy"),py=Symbol.iterator;function JI(t){return t===null||typeof t!="object"?null:(t=py&&t[py]||t["@@iterator"],typeof t=="function"?t:null)}var Kw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qw=Object.assign,Zw={};function No(t,e,n){this.props=t,this.context=e,this.refs=Zw,this.updater=n||Kw}No.prototype.isReactComponent={};No.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};No.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jw(){}Jw.prototype=No.prototype;function m0(t,e,n){this.props=t,this.context=e,this.refs=Zw,this.updater=n||Kw}var g0=m0.prototype=new Jw;g0.constructor=m0;qw(g0,No.prototype);g0.isPureReactComponent=!0;var my=Array.isArray,Qw=Object.prototype.hasOwnProperty,v0={current:null},eS={key:!0,ref:!0,__self:!0,__source:!0};function tS(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Qw.call(e,i)&&!eS.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:dc,type:t,key:s,ref:a,props:r,_owner:v0.current}}function QI(t,e){return{$$typeof:dc,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _0(t){return typeof t=="object"&&t!==null&&t.$$typeof===dc}function e3(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var gy=/\/+/g;function yd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?e3(""+t.key):e.toString(36)}function Uu(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case dc:case VI:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+yd(a,0):i,my(r)?(n="",t!=null&&(n=t.replace(gy,"$&/")+"/"),Uu(r,e,n,"",function(c){return c})):r!=null&&(_0(r)&&(r=QI(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(gy,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",my(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+yd(s,o);a+=Uu(s,e,n,l,r)}else if(l=JI(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+yd(s,o++),a+=Uu(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function nu(t,e,n){if(t==null)return t;var i=[],r=0;return Uu(t,i,"","",function(s){return e.call(n,s,r++)}),i}function t3(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xn={current:null},Ou={transition:null},n3={ReactCurrentDispatcher:xn,ReactCurrentBatchConfig:Ou,ReactCurrentOwner:v0};function nS(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:nu,forEach:function(t,e,n){nu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return nu(t,function(){e++}),e},toArray:function(t){return nu(t,function(e){return e})||[]},only:function(t){if(!_0(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=No;Xe.Fragment=GI;Xe.Profiler=XI;Xe.PureComponent=m0;Xe.StrictMode=WI;Xe.Suspense=KI;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n3;Xe.act=nS;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=qw({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=v0.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Qw.call(e,l)&&!eS.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:dc,type:t.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(t){return t={$$typeof:$I,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jI,_context:t},t.Consumer=t};Xe.createElement=tS;Xe.createFactory=function(t){var e=tS.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:YI,render:t}};Xe.isValidElement=_0;Xe.lazy=function(t){return{$$typeof:ZI,_payload:{_status:-1,_result:t},_init:t3}};Xe.memo=function(t,e){return{$$typeof:qI,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Ou.transition;Ou.transition={};try{t()}finally{Ou.transition=e}};Xe.unstable_act=nS;Xe.useCallback=function(t,e){return xn.current.useCallback(t,e)};Xe.useContext=function(t){return xn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return xn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return xn.current.useEffect(t,e)};Xe.useId=function(){return xn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return xn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return xn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return xn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return xn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return xn.current.useReducer(t,e,n)};Xe.useRef=function(t){return xn.current.useRef(t)};Xe.useState=function(t){return xn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return xn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return xn.current.useTransition()};Xe.version="18.3.1";Yw.exports=Xe;var pc=Yw.exports;const Xs=jw(pc);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i3=pc,r3=Symbol.for("react.element"),s3=Symbol.for("react.fragment"),a3=Object.prototype.hasOwnProperty,o3=i3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l3={key:!0,ref:!0,__self:!0,__source:!0};function iS(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)a3.call(e,i)&&!l3.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:r3,type:t,key:s,ref:a,props:r,_owner:o3.current}}tf.Fragment=s3;tf.jsx=iS;tf.jsxs=iS;$w.exports=tf;var yt=$w.exports;const vy=()=>{};let y0={},rS={},sS=null,aS={mark:vy,measure:vy};try{typeof window<"u"&&(y0=window),typeof document<"u"&&(rS=document),typeof MutationObserver<"u"&&(sS=MutationObserver),typeof performance<"u"&&(aS=performance)}catch{}const{userAgent:_y=""}=y0.navigator||{},as=y0,xt=rS,yy=sS,iu=aS;as.document;const Sr=!!xt.documentElement&&!!xt.head&&typeof xt.addEventListener=="function"&&typeof xt.createElement=="function",oS=~_y.indexOf("MSIE")||~_y.indexOf("Trident/");var Mt="classic",lS="duotone",Vn="sharp",Gn="sharp-duotone",c3=[Mt,lS,Vn,Gn],u3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},xy={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},h3=["kit"],f3=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,d3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,p3={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},m3={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},g3={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},v3={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},_3={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},y3={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},cS={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},x3=["solid","regular","light","thin","duotone","brands"],uS=[1,2,3,4,5,6,7,8,9,10],w3=uS.concat([11,12,13,14,15,16,17,18,19,20]),rl={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},S3=[...Object.keys(v3),...x3,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",rl.GROUP,rl.SWAP_OPACITY,rl.PRIMARY,rl.SECONDARY].concat(uS.map(t=>"".concat(t,"x"))).concat(w3.map(t=>"w-".concat(t))),M3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},E3={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},T3={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},wy={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const mr="___FONT_AWESOME___",lm=16,hS="fa",fS="svg-inline--fa",js="data-fa-i2svg",cm="data-fa-pseudo-element",C3="data-fa-pseudo-element-pending",x0="data-prefix",w0="data-icon",Sy="fontawesome-i2svg",A3="async",b3=["HTML","HEAD","STYLE","SCRIPT"],dS=(()=>{try{return!0}catch{return!1}})(),pS=[Mt,Vn,Gn];function mc(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Mt]}})}const mS={...cS};mS[Mt]={...cS[Mt],...xy.kit,...xy["kit-duotone"]};const Os=mc(mS),um={...y3};um[Mt]={...um[Mt],...wy.kit,...wy["kit-duotone"]};const Bl=mc(um),hm={..._3};hm[Mt]={...hm[Mt],...T3.kit};const ks=mc(hm),fm={...g3};fm[Mt]={...fm[Mt],...E3.kit};const R3=mc(fm),P3=f3,gS="fa-layers-text",L3=d3,I3={...u3};mc(I3);const N3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],xd=rl,ho=new Set;Object.keys(Bl[Mt]).map(ho.add.bind(ho));Object.keys(Bl[Vn]).map(ho.add.bind(ho));Object.keys(Bl[Gn]).map(ho.add.bind(ho));const D3=[...h3,...S3],_l=as.FontAwesomeConfig||{};function U3(t){var e=xt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function O3(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}xt&&typeof xt.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,i]=e;const r=O3(U3(n));r!=null&&(_l[i]=r)});const vS={styleDefault:"solid",familyDefault:"classic",cssPrefix:hS,replacementClass:fS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};_l.familyPrefix&&(_l.cssPrefix=_l.familyPrefix);const fo={...vS,..._l};fo.autoReplaceSvg||(fo.observeMutations=!1);const _e={};Object.keys(vS).forEach(t=>{Object.defineProperty(_e,t,{enumerable:!0,set:function(e){fo[t]=e,yl.forEach(n=>n(_e))},get:function(){return fo[t]}})});Object.defineProperty(_e,"familyPrefix",{enumerable:!0,set:function(t){fo.cssPrefix=t,yl.forEach(e=>e(_e))},get:function(){return fo.cssPrefix}});as.FontAwesomeConfig=_e;const yl=[];function k3(t){return yl.push(t),()=>{yl.splice(yl.indexOf(t),1)}}const Nr=lm,Di={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function F3(t){if(!t||!Sr)return;const e=xt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=xt.head.childNodes;let i=null;for(let r=n.length-1;r>-1;r--){const s=n[r],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(i=s)}return xt.head.insertBefore(e,i),t}const B3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function zl(){let t=12,e="";for(;t-- >0;)e+=B3[Math.random()*62|0];return e}function Do(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function S0(t){return t.classList?Do(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function _S(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function z3(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(_S(t[n]),'" '),"").trim()}function nf(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function M0(t){return t.size!==Di.size||t.x!==Di.x||t.y!==Di.y||t.rotate!==Di.rotate||t.flipX||t.flipY}function H3(t){let{transform:e,containerWidth:n,iconWidth:i}=t;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(a," ").concat(o)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function V3(t){let{transform:e,width:n=lm,height:i=lm,startCentered:r=!1}=t,s="";return r&&oS?s+="translate(".concat(e.x/Nr-n/2,"em, ").concat(e.y/Nr-i/2,"em) "):r?s+="translate(calc(-50% + ".concat(e.x/Nr,"em), calc(-50% + ").concat(e.y/Nr,"em)) "):s+="translate(".concat(e.x/Nr,"em, ").concat(e.y/Nr,"em) "),s+="scale(".concat(e.size/Nr*(e.flipX?-1:1),", ").concat(e.size/Nr*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var G3=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function yS(){const t=hS,e=fS,n=_e.cssPrefix,i=_e.replacementClass;let r=G3;if(n!==t||i!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),a=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(o,".".concat(i))}return r}let My=!1;function wd(){_e.autoAddCss&&!My&&(F3(yS()),My=!0)}var W3={mixout(){return{dom:{css:yS,insertCss:wd}}},hooks(){return{beforeDOMElementCreation(){wd()},beforeI2svg(){wd()}}}};const gr=as||{};gr[mr]||(gr[mr]={});gr[mr].styles||(gr[mr].styles={});gr[mr].hooks||(gr[mr].hooks={});gr[mr].shims||(gr[mr].shims=[]);var Ui=gr[mr];const xS=[],wS=function(){xt.removeEventListener("DOMContentLoaded",wS),lh=1,xS.map(t=>t())};let lh=!1;Sr&&(lh=(xt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(xt.readyState),lh||xt.addEventListener("DOMContentLoaded",wS));function X3(t){Sr&&(lh?setTimeout(t,0):xS.push(t))}function gc(t){const{tag:e,attributes:n={},children:i=[]}=t;return typeof t=="string"?_S(t):"<".concat(e," ").concat(z3(n),">").concat(i.map(gc).join(""),"</").concat(e,">")}function Ey(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Sd=function(e,n,i,r){var s=Object.keys(e),a=s.length,o=n,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<a;l++)c=s[l],u=o(u,e[c],c,e);return u};function j3(t){const e=[];let n=0;const i=t.length;for(;n<i;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function dm(t){const e=j3(t);return e.length===1?e[0].toString(16):null}function $3(t,e){const n=t.length;let i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Ty(t){return Object.keys(t).reduce((e,n)=>{const i=t[n];return!!i.icon?e[i.iconName]=i.icon:e[n]=i,e},{})}function pm(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=n,r=Ty(e);typeof Ui.hooks.addPack=="function"&&!i?Ui.hooks.addPack(t,Ty(e)):Ui.styles[t]={...Ui.styles[t]||{},...r},t==="fas"&&pm("fa",e)}const{styles:Ps,shims:Y3}=Ui,K3={[Mt]:Object.values(ks[Mt]),[Vn]:Object.values(ks[Vn]),[Gn]:Object.values(ks[Gn])};let E0=null,SS={},MS={},ES={},TS={},CS={};const q3={[Mt]:Object.keys(Os[Mt]),[Vn]:Object.keys(Os[Vn]),[Gn]:Object.keys(Os[Gn])};function Z3(t){return~D3.indexOf(t)}function J3(t,e){const n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!Z3(r)?r:null}const AS=()=>{const t=i=>Sd(Ps,(r,s,a)=>(r[a]=Sd(s,i,{}),r),{});SS=t((i,r,s)=>(r[3]&&(i[r[3]]=s),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{i[o.toString(16)]=s}),i)),MS=t((i,r,s)=>(i[s]=s,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{i[o]=s}),i)),CS=t((i,r,s)=>{const a=r[2];return i[s]=s,a.forEach(o=>{i[o]=s}),i});const e="far"in Ps||_e.autoFetchSvg,n=Sd(Y3,(i,r)=>{const s=r[0];let a=r[1];const o=r[2];return a==="far"&&!e&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:o}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:o}),i},{names:{},unicodes:{}});ES=n.names,TS=n.unicodes,E0=rf(_e.styleDefault,{family:_e.familyDefault})};k3(t=>{E0=rf(t.styleDefault,{family:_e.familyDefault})});AS();function T0(t,e){return(SS[t]||{})[e]}function Q3(t,e){return(MS[t]||{})[e]}function $r(t,e){return(CS[t]||{})[e]}function bS(t){return ES[t]||{prefix:null,iconName:null}}function eN(t){const e=TS[t],n=T0("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function os(){return E0}const C0=()=>({prefix:null,iconName:null,rest:[]});function rf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Mt}=e,i=Os[n][t],r=Bl[n][t]||Bl[n][i],s=t in Ui.styles?t:null;return r||s||null}const tN={[Mt]:Object.keys(ks[Mt]),[Vn]:Object.keys(ks[Vn]),[Gn]:Object.keys(ks[Gn])};function sf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,i={[Mt]:"".concat(_e.cssPrefix,"-").concat(Mt),[Vn]:"".concat(_e.cssPrefix,"-").concat(Vn),[Gn]:"".concat(_e.cssPrefix,"-").concat(Gn)};let r=null,s=Mt;const a=c3.filter(l=>l!==lS);a.forEach(l=>{(t.includes(i[l])||t.some(c=>tN[l].includes(c)))&&(s=l)});const o=t.reduce((l,c)=>{const u=J3(_e.cssPrefix,c);if(Ps[c]?(c=K3[s].includes(c)?R3[s][c]:c,r=c,l.prefix=c):q3[s].indexOf(c)>-1?(r=c,l.prefix=rf(c,{family:s})):u?l.iconName=u:c!==_e.replacementClass&&!a.some(h=>c===i[h])&&l.rest.push(c),!n&&l.prefix&&l.iconName){const h=r==="fa"?bS(l.iconName):{},f=$r(l.prefix,l.iconName);h.prefix&&(r=null),l.iconName=h.iconName||f||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!Ps.far&&Ps.fas&&!_e.autoFetchSvg&&(l.prefix="fas")}return l},C0());return(t.includes("fa-brands")||t.includes("fab"))&&(o.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(o.prefix="fad"),!o.prefix&&s===Vn&&(Ps.fass||_e.autoFetchSvg)&&(o.prefix="fass",o.iconName=$r(o.prefix,o.iconName)||o.iconName),!o.prefix&&s===Gn&&(Ps.fasds||_e.autoFetchSvg)&&(o.prefix="fasds",o.iconName=$r(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||r==="fa")&&(o.prefix=os()||"fas"),o}class nN{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...r[s]},pm(s,r[s]);const a=ks[Mt][s];a&&pm(a,r[s]),AS()})}reset(){this.definitions={}}_pullDefinitions(e,n){const i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(r=>{const{prefix:s,iconName:a,icon:o}=i[r],l=o[2];e[s]||(e[s]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[s][c]=o)}),e[s][a]=o}),e}}let Cy=[],Ma={};const Va={},iN=Object.keys(Va);function rN(t,e){let{mixoutsTo:n}=e;return Cy=t,Ma={},Object.keys(Va).forEach(i=>{iN.indexOf(i)===-1&&delete Va[i]}),Cy.forEach(i=>{const r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(a=>{n[s]||(n[s]={}),n[s][a]=r[s][a]})}),i.hooks){const s=i.hooks();Object.keys(s).forEach(a=>{Ma[a]||(Ma[a]=[]),Ma[a].push(s[a])})}i.provides&&i.provides(Va)}),n}function mm(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];return(Ma[t]||[]).forEach(a=>{e=a.apply(null,[e,...i])}),e}function $s(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];(Ma[t]||[]).forEach(s=>{s.apply(null,n)})}function ls(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Va[t]?Va[t].apply(null,e):void 0}function gm(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||os();if(e)return e=$r(n,e)||e,Ey(RS.definitions,n,e)||Ey(Ui.styles,n,e)}const RS=new nN,sN=()=>{_e.autoReplaceSvg=!1,_e.observeMutations=!1,$s("noAuto")},aN={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Sr?($s("beforeI2svg",t),ls("pseudoElements2svg",t),ls("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;_e.autoReplaceSvg===!1&&(_e.autoReplaceSvg=!0),_e.observeMutations=!0,X3(()=>{lN({autoReplaceSvgRoot:e}),$s("watch",t)})}},oN={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:$r(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=rf(t[0]);return{prefix:n,iconName:$r(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(_e.cssPrefix,"-"))>-1||t.match(P3))){const e=sf(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||os(),iconName:$r(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=os();return{prefix:e,iconName:$r(e,t)||t}}}},$n={noAuto:sN,config:_e,dom:aN,parse:oN,library:RS,findIconDefinition:gm,toHtml:gc},lN=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=xt}=t;(Object.keys(Ui.styles).length>0||_e.autoFetchSvg)&&Sr&&_e.autoReplaceSvg&&$n.dom.i2svg({node:e})};function af(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>gc(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Sr)return;const n=xt.createElement("div");return n.innerHTML=t.html,n.children}}),t}function cN(t){let{children:e,main:n,mask:i,attributes:r,styles:s,transform:a}=t;if(M0(a)&&n.found&&!i.found){const{width:o,height:l}=n,c={x:o/l/2,y:.5};r.style=nf({...s,"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function uN(t){let{prefix:e,iconName:n,children:i,attributes:r,symbol:s}=t;const a=s===!0?"".concat(e,"-").concat(_e.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:a},children:i}]}]}function A0(t){const{icons:{main:e,mask:n},prefix:i,iconName:r,transform:s,symbol:a,title:o,maskId:l,titleId:c,extra:u,watchable:h=!1}=t,{width:f,height:p}=n.found?n:e,g=i==="fak",y=[_e.replacementClass,r?"".concat(_e.cssPrefix,"-").concat(r):""].filter(A=>u.classes.indexOf(A)===-1).filter(A=>A!==""||!!A).concat(u.classes).join(" ");let m={children:[],attributes:{...u.attributes,"data-prefix":i,"data-icon":r,class:y,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(p)}};const d=g&&!~u.classes.indexOf("fa-fw")?{width:"".concat(f/p*16*.0625,"em")}:{};h&&(m.attributes[js]=""),o&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||zl())},children:[o]}),delete m.attributes.title);const _={...m,prefix:i,iconName:r,main:e,mask:n,maskId:l,transform:s,symbol:a,styles:{...d,...u.styles}},{children:v,attributes:x}=n.found&&e.found?ls("generateAbstractMask",_)||{children:[],attributes:{}}:ls("generateAbstractIcon",_)||{children:[],attributes:{}};return _.children=v,_.attributes=x,a?uN(_):cN(_)}function Ay(t){const{content:e,width:n,height:i,transform:r,title:s,extra:a,watchable:o=!1}=t,l={...a.attributes,...s?{title:s}:{},class:a.classes.join(" ")};o&&(l[js]="");const c={...a.styles};M0(r)&&(c.transform=V3({transform:r,startCentered:!0,width:n,height:i}),c["-webkit-transform"]=c.transform);const u=nf(c);u.length>0&&(l.style=u);const h=[];return h.push({tag:"span",attributes:l,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function hN(t){const{content:e,title:n,extra:i}=t,r={...i.attributes,...n?{title:n}:{},class:i.classes.join(" ")},s=nf(i.styles);s.length>0&&(r.style=s);const a=[];return a.push({tag:"span",attributes:r,children:[e]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}const{styles:Md}=Ui;function vm(t){const e=t[0],n=t[1],[i]=t.slice(4);let r=null;return Array.isArray(i)?r={tag:"g",attributes:{class:"".concat(_e.cssPrefix,"-").concat(xd.GROUP)},children:[{tag:"path",attributes:{class:"".concat(_e.cssPrefix,"-").concat(xd.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(_e.cssPrefix,"-").concat(xd.PRIMARY),fill:"currentColor",d:i[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:r}}const fN={found:!1,width:512,height:512};function dN(t,e){!dS&&!_e.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function _m(t,e){let n=e;return e==="fa"&&_e.styleDefault!==null&&(e=os()),new Promise((i,r)=>{if(n==="fa"){const s=bS(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Md[e]&&Md[e][t]){const s=Md[e][t];return i(vm(s))}dN(t,e),i({...fN,icon:_e.showMissingIcons&&t?ls("missingIconAbstract")||{}:{}})})}const by=()=>{},ym=_e.measurePerformance&&iu&&iu.mark&&iu.measure?iu:{mark:by,measure:by},sl='FA "6.6.0"',pN=t=>(ym.mark("".concat(sl," ").concat(t," begins")),()=>PS(t)),PS=t=>{ym.mark("".concat(sl," ").concat(t," ends")),ym.measure("".concat(sl," ").concat(t),"".concat(sl," ").concat(t," begins"),"".concat(sl," ").concat(t," ends"))};var b0={begin:pN,end:PS};const ku=()=>{};function Ry(t){return typeof(t.getAttribute?t.getAttribute(js):null)=="string"}function mN(t){const e=t.getAttribute?t.getAttribute(x0):null,n=t.getAttribute?t.getAttribute(w0):null;return e&&n}function gN(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(_e.replacementClass)}function vN(){return _e.autoReplaceSvg===!0?Fu.replace:Fu[_e.autoReplaceSvg]||Fu.replace}function _N(t){return xt.createElementNS("http://www.w3.org/2000/svg",t)}function yN(t){return xt.createElement(t)}function LS(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?_N:yN}=e;if(typeof t=="string")return xt.createTextNode(t);const i=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){i.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){i.appendChild(LS(s,{ceFn:n}))}),i}function xN(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Fu={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(LS(n),e)}),e.getAttribute(js)===null&&_e.keepOriginalSource){let n=xt.createComment(xN(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~S0(e).indexOf(_e.replacementClass))return Fu.replace(t);const i=new RegExp("".concat(_e.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((a,o)=>(o===_e.replacementClass||o.match(i)?a.toSvg.push(o):a.toNode.push(o),a),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>gc(s)).join(`
`);e.setAttribute(js,""),e.innerHTML=r}};function Py(t){t()}function IS(t,e){const n=typeof e=="function"?e:ku;if(t.length===0)n();else{let i=Py;_e.mutateApproach===A3&&(i=as.requestAnimationFrame||Py),i(()=>{const r=vN(),s=b0.begin("mutate");t.map(r),s(),n()})}}let R0=!1;function NS(){R0=!0}function xm(){R0=!1}let ch=null;function Ly(t){if(!yy||!_e.observeMutations)return;const{treeCallback:e=ku,nodeCallback:n=ku,pseudoElementsCallback:i=ku,observeMutationsRoot:r=xt}=t;ch=new yy(s=>{if(R0)return;const a=os();Do(s).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!Ry(o.addedNodes[0])&&(_e.searchPseudoElements&&i(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&_e.searchPseudoElements&&i(o.target.parentNode),o.type==="attributes"&&Ry(o.target)&&~N3.indexOf(o.attributeName))if(o.attributeName==="class"&&mN(o.target)){const{prefix:l,iconName:c}=sf(S0(o.target));o.target.setAttribute(x0,l||a),c&&o.target.setAttribute(w0,c)}else gN(o.target)&&n(o.target)})}),Sr&&ch.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function wN(){ch&&ch.disconnect()}function SN(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((i,r)=>{const s=r.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(i[a]=o.join(":").trim()),i},{})),n}function MN(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"";let r=sf(S0(t));return r.prefix||(r.prefix=os()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=Q3(r.prefix,t.innerText)||T0(r.prefix,dm(t.innerText))),!r.iconName&&_e.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function EN(t){const e=Do(t.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return _e.autoA11y&&(n?e["aria-labelledby"]="".concat(_e.replacementClass,"-title-").concat(i||zl()):(e["aria-hidden"]="true",e.focusable="false")),e}function TN(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Di,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Iy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:i,rest:r}=MN(t),s=EN(t),a=mm("parseNodeAttributes",{},t);let o=e.styleParser?SN(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Di,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s},...a}}const{styles:CN}=Ui;function DS(t){const e=_e.autoReplaceSvg==="nest"?Iy(t,{styleParser:!1}):Iy(t);return~e.extra.classes.indexOf(gS)?ls("generateLayersText",t,e):ls("generateSvgReplacementMutation",t,e)}let zi=new Set;pS.map(t=>{zi.add("fa-".concat(t))});Object.keys(Os[Mt]).map(zi.add.bind(zi));Object.keys(Os[Vn]).map(zi.add.bind(zi));Object.keys(Os[Gn]).map(zi.add.bind(zi));zi=[...zi];function Ny(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Sr)return Promise.resolve();const n=xt.documentElement.classList,i=u=>n.add("".concat(Sy,"-").concat(u)),r=u=>n.remove("".concat(Sy,"-").concat(u)),s=_e.autoFetchSvg?zi:pS.map(u=>"fa-".concat(u)).concat(Object.keys(CN));s.includes("fa")||s.push("fa");const a=[".".concat(gS,":not([").concat(js,"])")].concat(s.map(u=>".".concat(u,":not([").concat(js,"])"))).join(", ");if(a.length===0)return Promise.resolve();let o=[];try{o=Do(t.querySelectorAll(a))}catch{}if(o.length>0)i("pending"),r("complete");else return Promise.resolve();const l=b0.begin("onTree"),c=o.reduce((u,h)=>{try{const f=DS(h);f&&u.push(f)}catch(f){dS||f.name==="MissingIcon"&&console.error(f)}return u},[]);return new Promise((u,h)=>{Promise.all(c).then(f=>{IS(f,()=>{i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(f=>{l(),h(f)})})}function AN(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;DS(t).then(n=>{n&&IS([n],e)})}function bN(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:gm(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:gm(r||{})),t(i,{...n,mask:r})}}const RN=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Di,symbol:i=!1,mask:r=null,maskId:s=null,title:a=null,titleId:o=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:h,iconName:f,icon:p}=t;return af({type:"icon",...t},()=>($s("beforeDOMElementCreation",{iconDefinition:t,params:e}),_e.autoA11y&&(a?c["aria-labelledby"]="".concat(_e.replacementClass,"-title-").concat(o||zl()):(c["aria-hidden"]="true",c.focusable="false")),A0({icons:{main:vm(p),mask:r?vm(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:f,transform:{...Di,...n},symbol:i,title:a,maskId:s,titleId:o,extra:{attributes:c,styles:u,classes:l}})))};var PN={mixout(){return{icon:bN(RN)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ny,t.nodeCallback=AN,t}}},provides(t){t.i2svg=function(e){const{node:n=xt,callback:i=()=>{}}=e;return Ny(n,i)},t.generateSvgReplacementMutation=function(e,n){const{iconName:i,title:r,titleId:s,prefix:a,transform:o,symbol:l,mask:c,maskId:u,extra:h}=n;return new Promise((f,p)=>{Promise.all([_m(i,a),c.iconName?_m(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(g=>{let[y,m]=g;f([e,A0({icons:{main:y,mask:m},prefix:a,iconName:i,transform:o,symbol:l,maskId:u,title:r,titleId:s,extra:h,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(e){let{children:n,attributes:i,main:r,transform:s,styles:a}=e;const o=nf(a);o.length>0&&(i.style=o);let l;return M0(s)&&(l=ls("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(l||r.icon),{children:n,attributes:i}}}},LN={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return af({type:"layer"},()=>{$s("beforeDOMElementCreation",{assembler:t,params:e});let i=[];return t(r=>{Array.isArray(r)?r.map(s=>{i=i.concat(s.abstract)}):i=i.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(_e.cssPrefix,"-layers"),...n].join(" ")},children:i}]})}}}},IN={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:i=[],attributes:r={},styles:s={}}=e;return af({type:"counter",content:t},()=>($s("beforeDOMElementCreation",{content:t,params:e}),hN({content:t.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(_e.cssPrefix,"-layers-counter"),...i]}})))}}}},NN={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Di,title:i=null,classes:r=[],attributes:s={},styles:a={}}=e;return af({type:"text",content:t},()=>($s("beforeDOMElementCreation",{content:t,params:e}),Ay({content:t,transform:{...Di,...n},title:i,extra:{attributes:s,styles:a,classes:["".concat(_e.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:i,transform:r,extra:s}=n;let a=null,o=null;if(oS){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();a=c.width/l,o=c.height/l}return _e.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,Ay({content:e.innerHTML,width:a,height:o,transform:r,title:i,extra:s,watchable:!0})])}}};const DN=new RegExp('"',"ug"),Dy=[1105920,1112319],Uy={FontAwesome:{normal:"fas",400:"fas"},...m3,...p3,...M3},wm=Object.keys(Uy).reduce((t,e)=>(t[e.toLowerCase()]=Uy[e],t),{}),UN=Object.keys(wm).reduce((t,e)=>{const n=wm[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function ON(t){const e=t.replace(DN,""),n=$3(e,0),i=n>=Dy[0]&&n<=Dy[1],r=e.length===2?e[0]===e[1]:!1;return{value:dm(r?e[0]:e),isSecondary:i||r}}function kN(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),r=isNaN(i)?"normal":i;return(wm[n]||{})[r]||UN[n]}function Oy(t,e){const n="".concat(C3).concat(e.replace(":","-"));return new Promise((i,r)=>{if(t.getAttribute(n)!==null)return i();const a=Do(t.children).filter(f=>f.getAttribute(cm)===e)[0],o=as.getComputedStyle(t,e),l=o.getPropertyValue("font-family"),c=l.match(L3),u=o.getPropertyValue("font-weight"),h=o.getPropertyValue("content");if(a&&!c)return t.removeChild(a),i();if(c&&h!=="none"&&h!==""){const f=o.getPropertyValue("content");let p=kN(l,u);const{value:g,isSecondary:y}=ON(f),m=c[0].startsWith("FontAwesome");let d=T0(p,g),_=d;if(m){const v=eN(g);v.iconName&&v.prefix&&(d=v.iconName,p=v.prefix)}if(d&&!y&&(!a||a.getAttribute(x0)!==p||a.getAttribute(w0)!==_)){t.setAttribute(n,_),a&&t.removeChild(a);const v=TN(),{extra:x}=v;x.attributes[cm]=e,_m(d,p).then(A=>{const C=A0({...v,icons:{main:A,mask:C0()},prefix:p,iconName:_,extra:x,watchable:!0}),M=xt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(M,t.firstChild):t.appendChild(M),M.outerHTML=C.map(R=>gc(R)).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function FN(t){return Promise.all([Oy(t,"::before"),Oy(t,"::after")])}function BN(t){return t.parentNode!==document.head&&!~b3.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(cm)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ky(t){if(Sr)return new Promise((e,n)=>{const i=Do(t.querySelectorAll("*")).filter(BN).map(FN),r=b0.begin("searchPseudoElements");NS(),Promise.all(i).then(()=>{r(),xm(),e()}).catch(()=>{r(),xm(),n()})})}var zN={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=ky,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=xt}=e;_e.searchPseudoElements&&ky(n)}}};let Fy=!1;var HN={mixout(){return{dom:{unwatch(){NS(),Fy=!0}}}},hooks(){return{bootstrap(){Ly(mm("mutationObserverCallbacks",{}))},noAuto(){wN()},watch(t){const{observeMutationsRoot:e}=t;Fy?xm():Ly(mm("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const By=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,i)=>{const r=i.toLowerCase().split("-"),s=r[0];let a=r.slice(1).join("-");if(s&&a==="h")return n.flipX=!0,n;if(s&&a==="v")return n.flipY=!0,n;if(a=parseFloat(a),isNaN(a))return n;switch(s){case"grow":n.size=n.size+a;break;case"shrink":n.size=n.size-a;break;case"left":n.x=n.x-a;break;case"right":n.x=n.x+a;break;case"up":n.y=n.y-a;break;case"down":n.y=n.y+a;break;case"rotate":n.rotate=n.rotate+a;break}return n},e)};var VN={mixout(){return{parse:{transform:t=>By(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=By(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:i,containerWidth:r,iconWidth:s}=e;const a={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),u={transform:"".concat(o," ").concat(l," ").concat(c)},h={transform:"translate(".concat(s/2*-1," -256)")},f={outer:a,inner:u,path:h};return{tag:"g",attributes:{...f.outer},children:[{tag:"g",attributes:{...f.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...f.path}}]}]}}}};const Ed={x:0,y:0,width:"100%",height:"100%"};function zy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function GN(t){return t.tag==="g"?t.children:[t]}var WN={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),i=n?sf(n.split(" ").map(r=>r.trim())):C0();return i.prefix||(i.prefix=os()),t.mask=i,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:i,main:r,mask:s,maskId:a,transform:o}=e;const{width:l,icon:c}=r,{width:u,icon:h}=s,f=H3({transform:o,containerWidth:u,iconWidth:l}),p={tag:"rect",attributes:{...Ed,fill:"white"}},g=c.children?{children:c.children.map(zy)}:{},y={tag:"g",attributes:{...f.inner},children:[zy({tag:c.tag,attributes:{...c.attributes,...f.path},...g})]},m={tag:"g",attributes:{...f.outer},children:[y]},d="mask-".concat(a||zl()),_="clip-".concat(a||zl()),v={tag:"mask",attributes:{...Ed,id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[p,m]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:GN(h)},v]};return n.push(x,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(d,")"),...Ed}}),{children:n,attributes:i}}}},XN={provides(t){let e=!1;as.matchMedia&&(e=as.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...i,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...r,attributeName:"opacity"},a={tag:"circle",attributes:{...i,cx:"256",cy:"364",r:"28"},children:[]};return e||a.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(a),n.push({tag:"path",attributes:{...i,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...i,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},jN={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return t.symbol=i,t}}}},$N=[W3,PN,LN,IN,NN,zN,HN,VN,WN,XN,jN];rN($N,{mixoutsTo:$n});$n.noAuto;$n.config;$n.library;$n.dom;const Sm=$n.parse;$n.findIconDefinition;$n.toHtml;const YN=$n.icon;$n.layer;$n.text;$n.counter;var US={exports:{}},KN="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",qN=KN,ZN=qN;function OS(){}function kS(){}kS.resetWarningCache=OS;var JN=function(){function t(i,r,s,a,o,l){if(l!==ZN){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:kS,resetWarningCache:OS};return n.PropTypes=n,n};US.exports=JN();var QN=US.exports;const Ge=jw(QN);function Hy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Pi(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Hy(Object(n),!0).forEach(function(i){Ea(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Hy(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function uh(t){"@babel/helpers - typeof";return uh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},uh(t)}function Ea(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function eD(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function tD(t,e){if(t==null)return{};var n=eD(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function Mm(t){return nD(t)||iD(t)||rD(t)||sD()}function nD(t){if(Array.isArray(t))return Em(t)}function iD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function rD(t,e){if(t){if(typeof t=="string")return Em(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Em(t,e)}}function Em(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function sD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function aD(t){var e,n=t.beat,i=t.fade,r=t.beatFade,s=t.bounce,a=t.shake,o=t.flash,l=t.spin,c=t.spinPulse,u=t.spinReverse,h=t.pulse,f=t.fixedWidth,p=t.inverse,g=t.border,y=t.listItem,m=t.flip,d=t.size,_=t.rotation,v=t.pull,x=(e={"fa-beat":n,"fa-fade":i,"fa-beat-fade":r,"fa-bounce":s,"fa-shake":a,"fa-flash":o,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":h,"fa-fw":f,"fa-inverse":p,"fa-border":g,"fa-li":y,"fa-flip":m===!0,"fa-flip-horizontal":m==="horizontal"||m==="both","fa-flip-vertical":m==="vertical"||m==="both"},Ea(e,"fa-".concat(d),typeof d<"u"&&d!==null),Ea(e,"fa-rotate-".concat(_),typeof _<"u"&&_!==null&&_!==0),Ea(e,"fa-pull-".concat(v),typeof v<"u"&&v!==null),Ea(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(x).map(function(A){return x[A]?A:null}).filter(function(A){return A})}function oD(t){return t=t-0,t===t}function FS(t){return oD(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var lD=["style"];function cD(t){return t.charAt(0).toUpperCase()+t.slice(1)}function uD(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=FS(n.slice(0,i)),s=n.slice(i+1).trim();return r.startsWith("webkit")?e[cD(r)]=s:e[r]=s,e},{})}function BS(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(l){return BS(t,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.attrs.className=u,delete e.attributes.class;break;case"style":l.attrs.style=uD(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[FS(c)]=u}return l},{attrs:{}}),s=n.style,a=s===void 0?{}:s,o=tD(n,lD);return r.attrs.style=Pi(Pi({},r.attrs.style),a),t.apply(void 0,[e.tag,Pi(Pi({},r.attrs),o)].concat(Mm(i)))}var zS=!1;try{zS=!0}catch{}function hD(){if(!zS&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Vy(t){if(t&&uh(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Sm.icon)return Sm.icon(t);if(t===null)return null;if(t&&uh(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Td(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ea({},t,e):{}}var Gy={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},P0=Xs.forwardRef(function(t,e){var n=Pi(Pi({},Gy),t),i=n.icon,r=n.mask,s=n.symbol,a=n.className,o=n.title,l=n.titleId,c=n.maskId,u=Vy(i),h=Td("classes",[].concat(Mm(aD(n)),Mm((a||"").split(" ")))),f=Td("transform",typeof n.transform=="string"?Sm.transform(n.transform):n.transform),p=Td("mask",Vy(r)),g=YN(u,Pi(Pi(Pi(Pi({},h),f),p),{},{symbol:s,title:o,titleId:l,maskId:c}));if(!g)return hD("Could not find icon",u),null;var y=g.abstract,m={ref:e};return Object.keys(n).forEach(function(d){Gy.hasOwnProperty(d)||(m[d]=n[d])}),fD(y[0],m)});P0.displayName="FontAwesomeIcon";P0.propTypes={beat:Ge.bool,border:Ge.bool,beatFade:Ge.bool,bounce:Ge.bool,className:Ge.string,fade:Ge.bool,flash:Ge.bool,mask:Ge.oneOfType([Ge.object,Ge.array,Ge.string]),maskId:Ge.string,fixedWidth:Ge.bool,inverse:Ge.bool,flip:Ge.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Ge.oneOfType([Ge.object,Ge.array,Ge.string]),listItem:Ge.bool,pull:Ge.oneOf(["right","left"]),pulse:Ge.bool,rotation:Ge.oneOf([0,90,180,270]),shake:Ge.bool,size:Ge.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Ge.bool,spinPulse:Ge.bool,spinReverse:Ge.bool,symbol:Ge.oneOfType([Ge.bool,Ge.string]),title:Ge.string,titleId:Ge.string,transform:Ge.oneOfType([Ge.string,Ge.object]),swapOpacity:Ge.bool};var fD=BS.bind(null,Xs.createElement),An=function(){return An=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},An.apply(this,arguments)};function hh(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return t.concat(s||Array.prototype.slice.call(e))}var gt="-ms-",xl="-moz-",st="-webkit-",HS="comm",of="rule",L0="decl",dD="@import",VS="@keyframes",pD="@layer",GS=Math.abs,I0=String.fromCharCode,Tm=Object.assign;function mD(t,e){return jt(t,0)^45?(((e<<2^jt(t,0))<<2^jt(t,1))<<2^jt(t,2))<<2^jt(t,3):0}function WS(t){return t.trim()}function tr(t,e){return(t=e.exec(t))?t[0]:t}function Be(t,e,n){return t.replace(e,n)}function Bu(t,e,n){return t.indexOf(e,n)}function jt(t,e){return t.charCodeAt(e)|0}function po(t,e,n){return t.slice(e,n)}function Li(t){return t.length}function XS(t){return t.length}function al(t,e){return e.push(t),t}function gD(t,e){return t.map(e).join("")}function Wy(t,e){return t.filter(function(n){return!tr(n,e)})}var lf=1,mo=1,jS=0,ai=0,Ot=0,Uo="";function cf(t,e,n,i,r,s,a,o){return{value:t,root:e,parent:n,type:i,props:r,children:s,line:lf,column:mo,length:a,return:"",siblings:o}}function Or(t,e){return Tm(cf("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function _a(t){for(;t.root;)t=Or(t.root,{children:[t]});al(t,t.siblings)}function vD(){return Ot}function _D(){return Ot=ai>0?jt(Uo,--ai):0,mo--,Ot===10&&(mo=1,lf--),Ot}function Si(){return Ot=ai<jS?jt(Uo,ai++):0,mo++,Ot===10&&(mo=1,lf++),Ot}function Fs(){return jt(Uo,ai)}function zu(){return ai}function uf(t,e){return po(Uo,t,e)}function Cm(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function yD(t){return lf=mo=1,jS=Li(Uo=t),ai=0,[]}function xD(t){return Uo="",t}function Cd(t){return WS(uf(ai-1,Am(t===91?t+2:t===40?t+1:t)))}function wD(t){for(;(Ot=Fs())&&Ot<33;)Si();return Cm(t)>2||Cm(Ot)>3?"":" "}function SD(t,e){for(;--e&&Si()&&!(Ot<48||Ot>102||Ot>57&&Ot<65||Ot>70&&Ot<97););return uf(t,zu()+(e<6&&Fs()==32&&Si()==32))}function Am(t){for(;Si();)switch(Ot){case t:return ai;case 34:case 39:t!==34&&t!==39&&Am(Ot);break;case 40:t===41&&Am(t);break;case 92:Si();break}return ai}function MD(t,e){for(;Si()&&t+Ot!==57;)if(t+Ot===84&&Fs()===47)break;return"/*"+uf(e,ai-1)+"*"+I0(t===47?t:Si())}function ED(t){for(;!Cm(Fs());)Si();return uf(t,ai)}function TD(t){return xD(Hu("",null,null,null,[""],t=yD(t),0,[0],t))}function Hu(t,e,n,i,r,s,a,o,l){for(var c=0,u=0,h=a,f=0,p=0,g=0,y=1,m=1,d=1,_=0,v="",x=r,A=s,C=i,M=v;m;)switch(g=_,_=Si()){case 40:if(g!=108&&jt(M,h-1)==58){Bu(M+=Be(Cd(_),"&","&\f"),"&\f",GS(c?o[c-1]:0))!=-1&&(d=-1);break}case 34:case 39:case 91:M+=Cd(_);break;case 9:case 10:case 13:case 32:M+=wD(g);break;case 92:M+=SD(zu()-1,7);continue;case 47:switch(Fs()){case 42:case 47:al(CD(MD(Si(),zu()),e,n,l),l);break;default:M+="/"}break;case 123*y:o[c++]=Li(M)*d;case 125*y:case 59:case 0:switch(_){case 0:case 125:m=0;case 59+u:d==-1&&(M=Be(M,/\f/g,"")),p>0&&Li(M)-h&&al(p>32?jy(M+";",i,n,h-1,l):jy(Be(M," ","")+";",i,n,h-2,l),l);break;case 59:M+=";";default:if(al(C=Xy(M,e,n,c,u,r,o,v,x=[],A=[],h,s),s),_===123)if(u===0)Hu(M,e,C,C,x,s,h,o,A);else switch(f===99&&jt(M,3)===110?100:f){case 100:case 108:case 109:case 115:Hu(t,C,C,i&&al(Xy(t,C,C,0,0,r,o,v,r,x=[],h,A),A),r,A,h,o,i?x:A);break;default:Hu(M,C,C,C,[""],A,0,o,A)}}c=u=p=0,y=d=1,v=M="",h=a;break;case 58:h=1+Li(M),p=g;default:if(y<1){if(_==123)--y;else if(_==125&&y++==0&&_D()==125)continue}switch(M+=I0(_),_*y){case 38:d=u>0?1:(M+="\f",-1);break;case 44:o[c++]=(Li(M)-1)*d,d=1;break;case 64:Fs()===45&&(M+=Cd(Si())),f=Fs(),u=h=Li(v=M+=ED(zu())),_++;break;case 45:g===45&&Li(M)==2&&(y=0)}}return s}function Xy(t,e,n,i,r,s,a,o,l,c,u,h){for(var f=r-1,p=r===0?s:[""],g=XS(p),y=0,m=0,d=0;y<i;++y)for(var _=0,v=po(t,f+1,f=GS(m=a[y])),x=t;_<g;++_)(x=WS(m>0?p[_]+" "+v:Be(v,/&\f/g,p[_])))&&(l[d++]=x);return cf(t,e,n,r===0?of:o,l,c,u,h)}function CD(t,e,n,i){return cf(t,e,n,HS,I0(vD()),po(t,2,-2),0,i)}function jy(t,e,n,i,r){return cf(t,e,n,L0,po(t,0,i),po(t,i+1,-1),i,r)}function $S(t,e,n){switch(mD(t,e)){case 5103:return st+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return st+t+t;case 4789:return xl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return st+t+xl+t+gt+t+t;case 5936:switch(jt(t,e+11)){case 114:return st+t+gt+Be(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return st+t+gt+Be(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return st+t+gt+Be(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return st+t+gt+t+t;case 6165:return st+t+gt+"flex-"+t+t;case 5187:return st+t+Be(t,/(\w+).+(:[^]+)/,st+"box-$1$2"+gt+"flex-$1$2")+t;case 5443:return st+t+gt+"flex-item-"+Be(t,/flex-|-self/g,"")+(tr(t,/flex-|baseline/)?"":gt+"grid-row-"+Be(t,/flex-|-self/g,""))+t;case 4675:return st+t+gt+"flex-line-pack"+Be(t,/align-content|flex-|-self/g,"")+t;case 5548:return st+t+gt+Be(t,"shrink","negative")+t;case 5292:return st+t+gt+Be(t,"basis","preferred-size")+t;case 6060:return st+"box-"+Be(t,"-grow","")+st+t+gt+Be(t,"grow","positive")+t;case 4554:return st+Be(t,/([^-])(transform)/g,"$1"+st+"$2")+t;case 6187:return Be(Be(Be(t,/(zoom-|grab)/,st+"$1"),/(image-set)/,st+"$1"),t,"")+t;case 5495:case 3959:return Be(t,/(image-set\([^]*)/,st+"$1$`$1");case 4968:return Be(Be(t,/(.+:)(flex-)?(.*)/,st+"box-pack:$3"+gt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+st+t+t;case 4200:if(!tr(t,/flex-|baseline/))return gt+"grid-column-align"+po(t,e)+t;break;case 2592:case 3360:return gt+Be(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(i,r){return e=r,tr(i.props,/grid-\w+-end/)})?~Bu(t+(n=n[e].value),"span",0)?t:gt+Be(t,"-start","")+t+gt+"grid-row-span:"+(~Bu(n,"span",0)?tr(n,/\d+/):+tr(n,/\d+/)-+tr(t,/\d+/))+";":gt+Be(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(i){return tr(i.props,/grid-\w+-start/)})?t:gt+Be(Be(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Be(t,/(.+)-inline(.+)/,st+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Li(t)-1-e>6)switch(jt(t,e+1)){case 109:if(jt(t,e+4)!==45)break;case 102:return Be(t,/(.+:)(.+)-([^]+)/,"$1"+st+"$2-$3$1"+xl+(jt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Bu(t,"stretch",0)?$S(Be(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Be(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,r,s,a,o,l,c){return gt+r+":"+s+c+(a?gt+r+"-span:"+(o?l:+l-+s)+c:"")+t});case 4949:if(jt(t,e+6)===121)return Be(t,":",":"+st)+t;break;case 6444:switch(jt(t,jt(t,14)===45?18:11)){case 120:return Be(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+st+(jt(t,14)===45?"inline-":"")+"box$3$1"+st+"$2$3$1"+gt+"$2box$3")+t;case 100:return Be(t,":",":"+gt)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Be(t,"scroll-","scroll-snap-")+t}return t}function fh(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function AD(t,e,n,i){switch(t.type){case pD:if(t.children.length)break;case dD:case L0:return t.return=t.return||t.value;case HS:return"";case VS:return t.return=t.value+"{"+fh(t.children,i)+"}";case of:if(!Li(t.value=t.props.join(",")))return""}return Li(n=fh(t.children,i))?t.return=t.value+"{"+n+"}":""}function bD(t){var e=XS(t);return function(n,i,r,s){for(var a="",o=0;o<e;o++)a+=t[o](n,i,r,s)||"";return a}}function RD(t){return function(e){e.root||(e=e.return)&&t(e)}}function PD(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case L0:t.return=$S(t.value,t.length,n);return;case VS:return fh([Or(t,{value:Be(t.value,"@","@"+st)})],i);case of:if(t.length)return gD(n=t.props,function(r){switch(tr(r,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":_a(Or(t,{props:[Be(r,/:(read-\w+)/,":"+xl+"$1")]})),_a(Or(t,{props:[r]})),Tm(t,{props:Wy(n,i)});break;case"::placeholder":_a(Or(t,{props:[Be(r,/:(plac\w+)/,":"+st+"input-$1")]})),_a(Or(t,{props:[Be(r,/:(plac\w+)/,":"+xl+"$1")]})),_a(Or(t,{props:[Be(r,/:(plac\w+)/,gt+"input-$1")]})),_a(Or(t,{props:[r]})),Tm(t,{props:Wy(n,i)});break}return""})}}var LD={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Fn={},go=typeof process<"u"&&Fn!==void 0&&(Fn.REACT_APP_SC_ATTR||Fn.SC_ATTR)||"data-styled",YS="active",KS="data-styled-version",hf="6.1.13",N0=`/*!sc*/
`,dh=typeof window<"u"&&"HTMLElement"in window,ID=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Fn!==void 0&&Fn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Fn.REACT_APP_SC_DISABLE_SPEEDY!==""?Fn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Fn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Fn!==void 0&&Fn.SC_DISABLE_SPEEDY!==void 0&&Fn.SC_DISABLE_SPEEDY!==""&&Fn.SC_DISABLE_SPEEDY!=="false"&&Fn.SC_DISABLE_SPEEDY),ff=Object.freeze([]),vo=Object.freeze({});function ND(t,e,n){return n===void 0&&(n=vo),t.theme!==n.theme&&t.theme||e||n.theme}var qS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),DD=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,UD=/(^-|-$)/g;function $y(t){return t.replace(DD,"-").replace(UD,"")}var OD=/(a)(d)/gi,ru=52,Yy=function(t){return String.fromCharCode(t+(t>25?39:97))};function bm(t){var e,n="";for(e=Math.abs(t);e>ru;e=e/ru|0)n=Yy(e%ru)+n;return(Yy(e%ru)+n).replace(OD,"$1-$2")}var Ad,ZS=5381,Ta=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},JS=function(t){return Ta(ZS,t)};function kD(t){return bm(JS(t)>>>0)}function FD(t){return t.displayName||t.name||"Component"}function bd(t){return typeof t=="string"&&!0}var QS=typeof Symbol=="function"&&Symbol.for,eM=QS?Symbol.for("react.memo"):60115,BD=QS?Symbol.for("react.forward_ref"):60112,zD={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},HD={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},tM={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},VD=((Ad={})[BD]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ad[eM]=tM,Ad);function Ky(t){return("type"in(e=t)&&e.type.$$typeof)===eM?tM:"$$typeof"in t?VD[t.$$typeof]:zD;var e}var GD=Object.defineProperty,WD=Object.getOwnPropertyNames,qy=Object.getOwnPropertySymbols,XD=Object.getOwnPropertyDescriptor,jD=Object.getPrototypeOf,Zy=Object.prototype;function nM(t,e,n){if(typeof e!="string"){if(Zy){var i=jD(e);i&&i!==Zy&&nM(t,i,n)}var r=WD(e);qy&&(r=r.concat(qy(e)));for(var s=Ky(t),a=Ky(e),o=0;o<r.length;++o){var l=r[o];if(!(l in HD||n&&n[l]||a&&l in a||s&&l in s)){var c=XD(e,l);try{GD(t,l,c)}catch{}}}}return t}function _o(t){return typeof t=="function"}function D0(t){return typeof t=="object"&&"styledComponentId"in t}function Ls(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Jy(t,e){if(t.length===0)return"";for(var n=t[0],i=1;i<t.length;i++)n+=t[i];return n}function Hl(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Rm(t,e,n){if(n===void 0&&(n=!1),!n&&!Hl(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=Rm(t[i],e[i]);else if(Hl(e))for(var i in e)t[i]=Rm(t[i],e[i]);return t}function U0(t,e){Object.defineProperty(t,"toString",{value:e})}function vc(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var $D=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,i=0;i<e;i++)n+=this.groupSizes[i];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var i=this.groupSizes,r=i.length,s=r;e>=s;)if((s<<=1)<0)throw vc(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var a=r;a<s;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(o,n[a])&&(this.groupSizes[e]++,o++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],i=this.indexOfGroup(e),r=i+n;this.groupSizes[e]=0;for(var s=i;s<r;s++)this.tag.deleteRule(i)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var i=this.groupSizes[e],r=this.indexOfGroup(e),s=r+i,a=r;a<s;a++)n+="".concat(this.tag.getRule(a)).concat(N0);return n},t}(),Vu=new Map,ph=new Map,Gu=1,su=function(t){if(Vu.has(t))return Vu.get(t);for(;ph.has(Gu);)Gu++;var e=Gu++;return Vu.set(t,e),ph.set(e,t),e},YD=function(t,e){Gu=e+1,Vu.set(t,e),ph.set(e,t)},KD="style[".concat(go,"][").concat(KS,'="').concat(hf,'"]'),qD=new RegExp("^".concat(go,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ZD=function(t,e,n){for(var i,r=n.split(","),s=0,a=r.length;s<a;s++)(i=r[s])&&t.registerName(e,i)},JD=function(t,e){for(var n,i=((n=e.textContent)!==null&&n!==void 0?n:"").split(N0),r=[],s=0,a=i.length;s<a;s++){var o=i[s].trim();if(o){var l=o.match(qD);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(YD(u,c),ZD(t,u,l[3]),t.getTag().insertRules(c,r)),r.length=0}else r.push(o)}}},Qy=function(t){for(var e=document.querySelectorAll(KD),n=0,i=e.length;n<i;n++){var r=e[n];r&&r.getAttribute(go)!==YS&&(JD(t,r),r.parentNode&&r.parentNode.removeChild(r))}};function QD(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var iM=function(t){var e=document.head,n=t||e,i=document.createElement("style"),r=function(o){var l=Array.from(o.querySelectorAll("style[".concat(go,"]")));return l[l.length-1]}(n),s=r!==void 0?r.nextSibling:null;i.setAttribute(go,YS),i.setAttribute(KS,hf);var a=QD();return a&&i.setAttribute("nonce",a),n.insertBefore(i,s),i},eU=function(){function t(e){this.element=iM(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,r=0,s=i.length;r<s;r++){var a=i[r];if(a.ownerNode===n)return a}throw vc(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),tU=function(){function t(e){this.element=iM(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),nU=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),ex=dh,iU={isServer:!dh,useCSSOMInjection:!ID},rM=function(){function t(e,n,i){e===void 0&&(e=vo),n===void 0&&(n={});var r=this;this.options=An(An({},iU),e),this.gs=n,this.names=new Map(i),this.server=!!e.isServer,!this.server&&dh&&ex&&(ex=!1,Qy(this)),U0(this,function(){return function(s){for(var a=s.getTag(),o=a.length,l="",c=function(h){var f=function(d){return ph.get(d)}(h);if(f===void 0)return"continue";var p=s.names.get(f),g=a.getGroup(h);if(p===void 0||!p.size||g.length===0)return"continue";var y="".concat(go,".g").concat(h,'[id="').concat(f,'"]'),m="";p!==void 0&&p.forEach(function(d){d.length>0&&(m+="".concat(d,","))}),l+="".concat(g).concat(y,'{content:"').concat(m,'"}').concat(N0)},u=0;u<o;u++)c(u);return l}(r)})}return t.registerId=function(e){return su(e)},t.prototype.rehydrate=function(){!this.server&&dh&&Qy(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(An(An({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var i=n.useCSSOMInjection,r=n.target;return n.isServer?new nU(r):i?new eU(r):new tU(r)}(this.options),new $D(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(su(e),this.names.has(e))this.names.get(e).add(n);else{var i=new Set;i.add(n),this.names.set(e,i)}},t.prototype.insertRules=function(e,n,i){this.registerName(e,n),this.getTag().insertRules(su(e),i)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(su(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),rU=/&/g,sU=/^\s*\/\/.*$/gm;function sM(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=sM(n.children,e)),n})}function aU(t){var e,n,i,r=vo,s=r.options,a=s===void 0?vo:s,o=r.plugins,l=o===void 0?ff:o,c=function(f,p,g){return g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(e):f},u=l.slice();u.push(function(f){f.type===of&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(rU,n).replace(i,c))}),a.prefix&&u.push(PD),u.push(AD);var h=function(f,p,g,y){p===void 0&&(p=""),g===void 0&&(g=""),y===void 0&&(y="&"),e=y,n=p,i=new RegExp("\\".concat(n,"\\b"),"g");var m=f.replace(sU,""),d=TD(g||p?"".concat(g," ").concat(p," { ").concat(m," }"):m);a.namespace&&(d=sM(d,a.namespace));var _=[];return fh(d,bD(u.concat(RD(function(v){return _.push(v)})))),_};return h.hash=l.length?l.reduce(function(f,p){return p.name||vc(15),Ta(f,p.name)},ZS).toString():"",h}var oU=new rM,Pm=aU(),aM=Xs.createContext({shouldForwardProp:void 0,styleSheet:oU,stylis:Pm});aM.Consumer;Xs.createContext(void 0);function tx(){return pc.useContext(aM)}var lU=function(){function t(e,n){var i=this;this.inject=function(r,s){s===void 0&&(s=Pm);var a=i.name+s.hash;r.hasNameForId(i.id,a)||r.insertRules(i.id,a,s(i.rules,a,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,U0(this,function(){throw vc(12,String(i.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Pm),this.name+e.hash},t}(),cU=function(t){return t>="A"&&t<="Z"};function nx(t){for(var e="",n=0;n<t.length;n++){var i=t[n];if(n===1&&i==="-"&&t[0]==="-")return t;cU(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var oM=function(t){return t==null||t===!1||t===""},lM=function(t){var e,n,i=[];for(var r in t){var s=t[r];t.hasOwnProperty(r)&&!oM(s)&&(Array.isArray(s)&&s.isCss||_o(s)?i.push("".concat(nx(r),":"),s,";"):Hl(s)?i.push.apply(i,hh(hh(["".concat(r," {")],lM(s),!1),["}"],!1)):i.push("".concat(nx(r),": ").concat((e=r,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in LD||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function Bs(t,e,n,i){if(oM(t))return[];if(D0(t))return[".".concat(t.styledComponentId)];if(_o(t)){if(!_o(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var r=t(e);return Bs(r,e,n,i)}var s;return t instanceof lU?n?(t.inject(n,i),[t.getName(i)]):[t]:Hl(t)?lM(t):Array.isArray(t)?Array.prototype.concat.apply(ff,t.map(function(a){return Bs(a,e,n,i)})):[t.toString()]}function uU(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(_o(n)&&!D0(n))return!1}return!0}var hU=JS(hf),fU=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&uU(e),this.componentId=n,this.baseHash=Ta(hU,n),this.baseStyle=i,rM.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))r=Ls(r,this.staticRulesId);else{var s=Jy(Bs(this.rules,e,n,i)),a=bm(Ta(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,a)){var o=i(s,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,o)}r=Ls(r,a),this.staticRulesId=a}else{for(var l=Ta(this.baseHash,i.hash),c="",u=0;u<this.rules.length;u++){var h=this.rules[u];if(typeof h=="string")c+=h;else if(h){var f=Jy(Bs(h,e,n,i));l=Ta(l,f+u),c+=f}}if(c){var p=bm(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,i(c,".".concat(p),void 0,this.componentId)),r=Ls(r,p)}}return r},t}(),cM=Xs.createContext(void 0);cM.Consumer;var Rd={};function dU(t,e,n){var i=D0(t),r=t,s=!bd(t),a=e.attrs,o=a===void 0?ff:a,l=e.componentId,c=l===void 0?function(x,A){var C=typeof x!="string"?"sc":$y(x);Rd[C]=(Rd[C]||0)+1;var M="".concat(C,"-").concat(kD(hf+C+Rd[C]));return A?"".concat(A,"-").concat(M):M}(e.displayName,e.parentComponentId):l,u=e.displayName,h=u===void 0?function(x){return bd(x)?"styled.".concat(x):"Styled(".concat(FD(x),")")}(t):u,f=e.displayName&&e.componentId?"".concat($y(e.displayName),"-").concat(e.componentId):e.componentId||c,p=i&&r.attrs?r.attrs.concat(o).filter(Boolean):o,g=e.shouldForwardProp;if(i&&r.shouldForwardProp){var y=r.shouldForwardProp;if(e.shouldForwardProp){var m=e.shouldForwardProp;g=function(x,A){return y(x,A)&&m(x,A)}}else g=y}var d=new fU(n,f,i?r.componentStyle:void 0);function _(x,A){return function(C,M,R){var H=C.attrs,w=C.componentStyle,T=C.defaultProps,G=C.foldedComponentIds,B=C.styledComponentId,X=C.target,J=Xs.useContext(cM),z=tx(),te=C.shouldForwardProp||z.shouldForwardProp,I=ND(M,J,T)||vo,j=function(Z,ae,oe){for(var Ce,Te=An(An({},ae),{className:void 0,theme:oe}),Ve=0;Ve<Z.length;Ve+=1){var Ke=_o(Ce=Z[Ve])?Ce(Te):Ce;for(var Ue in Ke)Te[Ue]=Ue==="className"?Ls(Te[Ue],Ke[Ue]):Ue==="style"?An(An({},Te[Ue]),Ke[Ue]):Ke[Ue]}return ae.className&&(Te.className=Ls(Te.className,ae.className)),Te}(H,M,I),K=j.as||X,ne={};for(var xe in j)j[xe]===void 0||xe[0]==="$"||xe==="as"||xe==="theme"&&j.theme===I||(xe==="forwardedAs"?ne.as=j.forwardedAs:te&&!te(xe,K)||(ne[xe]=j[xe]));var He=function(Z,ae){var oe=tx(),Ce=Z.generateAndInjectStyles(ae,oe.styleSheet,oe.stylis);return Ce}(w,j),W=Ls(G,B);return He&&(W+=" "+He),j.className&&(W+=" "+j.className),ne[bd(K)&&!qS.has(K)?"class":"className"]=W,ne.ref=R,pc.createElement(K,ne)}(v,x,A)}_.displayName=h;var v=Xs.forwardRef(_);return v.attrs=p,v.componentStyle=d,v.displayName=h,v.shouldForwardProp=g,v.foldedComponentIds=i?Ls(r.foldedComponentIds,r.styledComponentId):"",v.styledComponentId=f,v.target=i?r.target:t,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=i?function(A){for(var C=[],M=1;M<arguments.length;M++)C[M-1]=arguments[M];for(var R=0,H=C;R<H.length;R++)Rm(A,H[R],!0);return A}({},r.defaultProps,x):x}}),U0(v,function(){return".".concat(v.styledComponentId)}),s&&nM(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function ix(t,e){for(var n=[t[0]],i=0,r=e.length;i<r;i+=1)n.push(e[i],t[i+1]);return n}var rx=function(t){return Object.assign(t,{isCss:!0})};function pU(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(_o(t)||Hl(t))return rx(Bs(ix(ff,hh([t],e,!0))));var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?Bs(i):rx(Bs(ix(i,e)))}function Lm(t,e,n){if(n===void 0&&(n=vo),!e)throw vc(1,e);var i=function(r){for(var s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];return t(e,n,pU.apply(void 0,hh([r],s,!1)))};return i.attrs=function(r){return Lm(t,e,An(An({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},i.withConfig=function(r){return Lm(t,e,An(An({},n),r))},i}var uM=function(t){return Lm(dU,t)},bt=uM;qS.forEach(function(t){bt[t]=uM(t)});const mU=bt.button`
	background-color: rgba(255, 255, 255, 0.3);
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: white;
	border-radius: 2px;
	font-size: 14px;
	height: 24px;
	min-width: 24px;
	transition: all 0.2s ease-in-out;
	margin: 0 1px;
	text-transform: none;
	box-shadow: none;
	font-family: Arial, sans-serif;

	&:hover {
		background-color: rgba(255, 255, 255, 0.5);
	}

	&:active {
		background-color: rgba(255, 255, 255, 0.6);
	}

	&:first-child {
		border-radius: ${({$reverse:t})=>t?"2px 8px 8px 2px":"8px 2px 2px 8px"};
	}

	&:last-child {
		border-radius: ${({$reverse:t})=>t?"8px 2px 2px 8px":"2px 8px 8px 2px"};
	}
`;bt.div`
	background-color: ${({$pressed:t})=>t?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)"};
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	border-radius: 5px;
	font-size: 14px;
	font-family: Arial, sans-serif;
	height: 20px;
	width: 20px;
	transition: all 0.2s ease-in-out;
`;bt.div`
	display: flex;
	align-items: center;
	height: 24px;
	margin-bottom: 2px;
	justify-content: flex-start;
	flex-direction: ${({$reverse:t})=>t?"row-reverse":"row"};
`;bt.div`
	display: flex;
	flex-direction: ${({$reverse:t})=>t?"row-reverse":"row"};
	height: 100%;
	justify-content: space-between;
	align-items: center;
`;bt.button`
	background-color: rgba(255, 255, 255, 0.3);
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	pointer-events: none;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	position: relative;
	margin: 0 5px;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
`;bt.div`
	position: absolute;
	background-color: white;
	border-radius: 50%;
	width: 36px;
	height: 36px;
	cursor: pointer;
	pointer-events: auto;
`;bt.input.attrs({type:"range"})`
	-webkit-appearance: none;
	appearance: none;
	background-color: rgba(255, 255, 255, 0.3);
	border: none;
	height: 100%;
	width: 49px;
	cursor: pointer;
	margin: 0 1px;
	transition: all 0.2s ease-in-out;
	border-radius: ${({$reverse:t})=>t?"8px 2px 2px 8px":"2px 8px 8px 2px"};

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 8px;
		height: 24px;
		background-color: white;
		border-radius: 3px;
	}

	&::-moz-range-thumb {
		width: 8px;
		height: 24px;
		background-color: white;
		border-radius: 3px;
	}

	&::-ms-thumb {
		width: 8px;
		height: 24px;
		background-color: white;
		border-radius: 3px;
	}
`;bt.div`
	display: flex;
	flex-direction: column;
	align-items: ${({$reverse:t})=>t?"flex-start":"flex-end"};
	justify-content: center;
	margin: ${({$reverse:t})=>t?"2px -26px 0 0":"2px 0 0 -26px"};
`;bt.div`
	display: flex;
	flex-direction: ${({$reverse:t})=>t?"row-reverse":"row"};
	align-items: center;
	justify-content: center;
`;bt.div`
	display: flex;
	flex-direction: column;
	height: 50px;
	justify-content: space-between;
`;const Qi=bt(P0)`
	height: 14px;
	min-height: 14px;
	max-height: 14px;
	width: 14px;
	min-width: 14px;
	max-width: 14px;
`,gU=()=>yt.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:12,height:16,fill:"none",children:[yt.jsx("g",{clipPath:"url(#a)",children:yt.jsx("path",{stroke:"#fff",d:"M.5 6.5H6m-5.5 0V5C.5 2.237 2.237.5 5 .5h1m-5.5 6V11c0 2.762 1.737 4.5 4.5 4.5h2c2.762 0 4.5-1.738 4.5-4.5V6.5M6 6.5v-6m0 6h5.5M6 .5h1c2.762 0 4.5 1.737 4.5 4.5v1.5",style:{stroke:"#fff",strokeOpacity:1}})}),yt.jsx("path",{fill:"#fff",d:"M.5 6.5H6v-6H5C2.237.5.5 2.237.5 5v1.5Z",style:{fill:"#fff",fillOpacity:1}}),yt.jsx("defs",{children:yt.jsx("clipPath",{id:"a",children:yt.jsx("path",{fill:"#fff",d:"M0 0h12v16H0z",style:{fill:"#fff",fillOpacity:1}})})})]}),vU=()=>yt.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:12,height:16,fill:"none",children:[yt.jsx("g",{clipPath:"url(#a)",children:yt.jsx("path",{stroke:"#fff",d:"M.5 6.5H6m-5.5 0V5C.5 2.237 2.237.5 5 .5h1m-5.5 6V11c0 2.762 1.737 4.5 4.5 4.5h2c2.762 0 4.5-1.738 4.5-4.5V6.5M6 6.5v-6m0 6h5.5M6 .5h1c2.762 0 4.5 1.737 4.5 4.5v1.5",style:{stroke:"#fff",strokeOpacity:1}})}),yt.jsx("path",{fill:"#fff",d:"M11.5 6.5H6v-6h1c2.762 0 4.5 1.737 4.5 4.5v1.5Z",style:{fill:"#fff",fillOpacity:1}}),yt.jsx("defs",{children:yt.jsx("clipPath",{id:"a",children:yt.jsx("path",{fill:"#fff",d:"M0 0h12v16H0z",style:{fill:"#fff",fillOpacity:1}})})})]}),_U={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]},yU={prefix:"fas",iconName:"caret-left",icon:[256,512,[],"f0d9","M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]},xU={prefix:"fas",iconName:"arrow-right-to-bracket",icon:[512,512,["sign-in"],"f090","M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]},wU={prefix:"fas",iconName:"caret-up",icon:[320,512,[],"f0d8","M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]},SU={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]},MU={prefix:"fas",iconName:"delete-left",icon:[576,512,[9003,"backspace"],"f55a","M576 128c0-35.3-28.7-64-64-64L205.3 64c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7L512 448c35.3 0 64-28.7 64-64l0-256zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]},sx={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]},EU={prefix:"fas",iconName:"arrow-turn-down",icon:[384,512,["level-down"],"f149","M32 64C14.3 64 0 49.7 0 32S14.3 0 32 0l96 0c53 0 96 43 96 96l0 306.7 73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 402.7 160 96c0-17.7-14.3-32-32-32L32 64z"]};yt.jsx(Qi,{icon:xU}),yt.jsx(Qi,{icon:MU}),yt.jsx(Qi,{style:{transform:"rotate(90deg)"},icon:EU}),yt.jsx(Qi,{icon:sx}),yt.jsx(Qi,{icon:sx}),yt.jsx(Qi,{icon:wU}),yt.jsx(Qi,{icon:SU}),yt.jsx(Qi,{icon:yU}),yt.jsx(Qi,{icon:_U}),yt.jsx(gU,{}),yt.jsx(vU,{});bt.div`
	display: flex;
	justify-content: space-between;
	pointer-events: all;
	position: fixed;
	display: flex;
	top: 40px;
	left: calc(50vw - 156px);
	width: 312px;
`;bt.div`
	display: flex;
	flex-direction: column;
	width: 50%;
`;bt.div`
	display: flex;
	height: 24px;
	align-items: center;
	margin-bottom: 2px;
`;bt.div`
	display: flex;
	align-items: center;
	margin-bottom: 2px;
`;bt.button`
	background-color: rgba(255, 255, 255, 0.3);
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	pointer-events: none;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	position: relative;
	margin: 0 5px;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
`;bt.div`
	position: absolute;
	background-color: white;
	border-radius: 50%;
	width: 36px;
	height: 36px;
	cursor: pointer;
	pointer-events: auto;
`;bt(mU)`
	width: 49px;
	font-size: 14px;

	${({$reverse:t})=>t?`
    &:first-child {
      margin-left: 1px;
      border-radius: 2px 8px 8px 2px;
    }

    &:last-child {
      margin-right: 1px;
      border-radius: 8px 2px 2px 8px;
    }
  `:`
    &:first-child {
      margin-right: 1px;
      border-radius: 8px 2px 2px 8px;
    }

    &:last-child {
      margin-left: 1px;
      border-radius: 2px 8px 8px 2px;
    }
  `}
`;bt.div`
	padding: ${({$reverse:t})=>t?"6px 2px 3px 5px":"6px 5px 3px 2px"};
	pointer-events: all;
	background-color: rgba(43, 43, 43, 0.5);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	border-radius: ${({$reverse:t})=>t?"12px 0 0 0":"0 12px 0 0"};
`;bt.div`
	display: flex;
	justify-content: center;
	pointer-events: all;
	position: fixed;
	display: flex;
	top: 40px;
	left: calc(50vw - 156px);
	width: 312px;
`;bt.div`
	padding: 6px 5px;
	display: flex;
	background-color: rgba(43, 43, 43, 0.5);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	justify-content: center;
	pointer-events: all;
	border-radius: 0 0 12px 12px;
	align-items: center;
	height: 24px;
`;bt.div`
	background-color: rgba(43, 43, 43, 0.5);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	border: none;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	cursor: pointer;
	color: white;
	white-space: nowrap;
	font-size: 14px;
	text-transform: none;
	box-shadow: none;
	font-family: Arial, sans-serif;
	border-radius: ${({$reverse:t})=>t?"0 0 0 12px":"0 0 12px 0"};
	padding: 5px;

	> div {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 2px;
		margin: 2px;
	}
`;var hM={exports:{}},Yn={},fM={exports:{}},dM={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,j){var K=I.length;I.push(j);e:for(;0<K;){var ne=K-1>>>1,xe=I[ne];if(0<r(xe,j))I[ne]=j,I[K]=xe,K=ne;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var j=I[0],K=I.pop();if(K!==j){I[0]=K;e:for(var ne=0,xe=I.length,He=xe>>>1;ne<He;){var W=2*(ne+1)-1,Z=I[W],ae=W+1,oe=I[ae];if(0>r(Z,K))ae<xe&&0>r(oe,Z)?(I[ne]=oe,I[ae]=K,ne=ae):(I[ne]=Z,I[W]=K,ne=W);else if(ae<xe&&0>r(oe,K))I[ne]=oe,I[ae]=K,ne=ae;else break e}}return j}function r(I,j){var K=I.sortIndex-j.sortIndex;return K!==0?K:I.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,h=null,f=3,p=!1,g=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var j=n(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=I)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(c)}}function x(I){if(y=!1,v(I),!g)if(n(l)!==null)g=!0,z(A);else{var j=n(c);j!==null&&te(x,j.startTime-I)}}function A(I,j){g=!1,y&&(y=!1,d(R),R=-1),p=!0;var K=f;try{for(v(j),h=n(l);h!==null&&(!(h.expirationTime>j)||I&&!T());){var ne=h.callback;if(typeof ne=="function"){h.callback=null,f=h.priorityLevel;var xe=ne(h.expirationTime<=j);j=t.unstable_now(),typeof xe=="function"?h.callback=xe:h===n(l)&&i(l),v(j)}else i(l);h=n(l)}if(h!==null)var He=!0;else{var W=n(c);W!==null&&te(x,W.startTime-j),He=!1}return He}finally{h=null,f=K,p=!1}}var C=!1,M=null,R=-1,H=5,w=-1;function T(){return!(t.unstable_now()-w<H)}function G(){if(M!==null){var I=t.unstable_now();w=I;var j=!0;try{j=M(!0,I)}finally{j?B():(C=!1,M=null)}}else C=!1}var B;if(typeof _=="function")B=function(){_(G)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,J=X.port2;X.port1.onmessage=G,B=function(){J.postMessage(null)}}else B=function(){m(G,0)};function z(I){M=I,C||(C=!0,B())}function te(I,j){R=m(function(){I(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,z(A))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var j=3;break;default:j=f}var K=f;f=j;try{return I()}finally{f=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,j){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var K=f;f=I;try{return j()}finally{f=K}},t.unstable_scheduleCallback=function(I,j,K){var ne=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ne+K:ne):K=ne,I){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=K+xe,I={id:u++,callback:j,priorityLevel:I,startTime:K,expirationTime:xe,sortIndex:-1},K>ne?(I.sortIndex=K,e(c,I),n(l)===null&&I===n(c)&&(y?(d(R),R=-1):y=!0,te(x,K-ne))):(I.sortIndex=xe,e(l,I),g||p||(g=!0,z(A))),I},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(I){var j=f;return function(){var K=f;f=j;try{return I.apply(this,arguments)}finally{f=K}}}})(dM);fM.exports=dM;var TU=fM.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CU=pc,Xn=TU;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pM=new Set,Vl={};function ea(t,e){yo(t,e),yo(t+"Capture",e)}function yo(t,e){for(Vl[t]=e,t=0;t<e.length;t++)pM.add(e[t])}var vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Im=Object.prototype.hasOwnProperty,AU=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ax={},ox={};function bU(t){return Im.call(ox,t)?!0:Im.call(ax,t)?!1:AU.test(t)?ox[t]=!0:(ax[t]=!0,!1)}function RU(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function PU(t,e,n,i){if(e===null||typeof e>"u"||RU(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tn[t]=new wn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tn[e]=new wn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tn[t]=new wn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tn[t]=new wn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tn[t]=new wn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tn[t]=new wn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tn[t]=new wn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tn[t]=new wn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tn[t]=new wn(t,5,!1,t.toLowerCase(),null,!1,!1)});var O0=/[\-:]([a-z])/g;function k0(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(O0,k0);tn[e]=new wn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(O0,k0);tn[e]=new wn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(O0,k0);tn[e]=new wn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tn[t]=new wn(t,1,!1,t.toLowerCase(),null,!1,!1)});tn.xlinkHref=new wn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tn[t]=new wn(t,1,!1,t.toLowerCase(),null,!0,!0)});function F0(t,e,n,i){var r=tn.hasOwnProperty(e)?tn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(PU(e,n,r,i)&&(n=null),i||r===null?bU(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Mr=CU.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,au=Symbol.for("react.element"),Ca=Symbol.for("react.portal"),Aa=Symbol.for("react.fragment"),B0=Symbol.for("react.strict_mode"),Nm=Symbol.for("react.profiler"),mM=Symbol.for("react.provider"),gM=Symbol.for("react.context"),z0=Symbol.for("react.forward_ref"),Dm=Symbol.for("react.suspense"),Um=Symbol.for("react.suspense_list"),H0=Symbol.for("react.memo"),kr=Symbol.for("react.lazy"),vM=Symbol.for("react.offscreen"),lx=Symbol.iterator;function $o(t){return t===null||typeof t!="object"?null:(t=lx&&t[lx]||t["@@iterator"],typeof t=="function"?t:null)}var At=Object.assign,Pd;function ol(t){if(Pd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Pd=e&&e[1]||""}return`
`+Pd+t}var Ld=!1;function Id(t,e){if(!t||Ld)return"";Ld=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Ld=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ol(t):""}function LU(t){switch(t.tag){case 5:return ol(t.type);case 16:return ol("Lazy");case 13:return ol("Suspense");case 19:return ol("SuspenseList");case 0:case 2:case 15:return t=Id(t.type,!1),t;case 11:return t=Id(t.type.render,!1),t;case 1:return t=Id(t.type,!0),t;default:return""}}function Om(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Aa:return"Fragment";case Ca:return"Portal";case Nm:return"Profiler";case B0:return"StrictMode";case Dm:return"Suspense";case Um:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case gM:return(t.displayName||"Context")+".Consumer";case mM:return(t._context.displayName||"Context")+".Provider";case z0:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case H0:return e=t.displayName||null,e!==null?e:Om(t.type)||"Memo";case kr:e=t._payload,t=t._init;try{return Om(t(e))}catch{}}return null}function IU(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Om(e);case 8:return e===B0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function cs(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _M(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function NU(t){var e=_M(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ou(t){t._valueTracker||(t._valueTracker=NU(t))}function yM(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=_M(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function mh(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function km(t,e){var n=e.checked;return At({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function cx(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=cs(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xM(t,e){e=e.checked,e!=null&&F0(t,"checked",e,!1)}function Fm(t,e){xM(t,e);var n=cs(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bm(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bm(t,e.type,cs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ux(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bm(t,e,n){(e!=="number"||mh(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ll=Array.isArray;function Ga(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+cs(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function zm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return At({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hx(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(ll(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:cs(n)}}function wM(t,e){var n=cs(e.value),i=cs(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function fx(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function SM(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?SM(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var lu,MM=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(lu=lu||document.createElement("div"),lu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=lu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Gl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},DU=["Webkit","ms","Moz","O"];Object.keys(wl).forEach(function(t){DU.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wl[e]=wl[t]})});function EM(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wl.hasOwnProperty(t)&&wl[t]?(""+e).trim():e+"px"}function TM(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=EM(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var UU=At({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vm(t,e){if(e){if(UU[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Gm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wm=null;function V0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xm=null,Wa=null,Xa=null;function dx(t){if(t=xc(t)){if(typeof Xm!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=vf(e),Xm(t.stateNode,t.type,e))}}function CM(t){Wa?Xa?Xa.push(t):Xa=[t]:Wa=t}function AM(){if(Wa){var t=Wa,e=Xa;if(Xa=Wa=null,dx(t),e)for(t=0;t<e.length;t++)dx(e[t])}}function bM(t,e){return t(e)}function RM(){}var Nd=!1;function PM(t,e,n){if(Nd)return t(e,n);Nd=!0;try{return bM(t,e,n)}finally{Nd=!1,(Wa!==null||Xa!==null)&&(RM(),AM())}}function Wl(t,e){var n=t.stateNode;if(n===null)return null;var i=vf(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var jm=!1;if(vr)try{var Yo={};Object.defineProperty(Yo,"passive",{get:function(){jm=!0}}),window.addEventListener("test",Yo,Yo),window.removeEventListener("test",Yo,Yo)}catch{jm=!1}function OU(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Sl=!1,gh=null,vh=!1,$m=null,kU={onError:function(t){Sl=!0,gh=t}};function FU(t,e,n,i,r,s,a,o,l){Sl=!1,gh=null,OU.apply(kU,arguments)}function BU(t,e,n,i,r,s,a,o,l){if(FU.apply(this,arguments),Sl){if(Sl){var c=gh;Sl=!1,gh=null}else throw Error(ee(198));vh||(vh=!0,$m=c)}}function ta(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function LM(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function px(t){if(ta(t)!==t)throw Error(ee(188))}function zU(t){var e=t.alternate;if(!e){if(e=ta(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return px(r),t;if(s===i)return px(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function IM(t){return t=zU(t),t!==null?NM(t):null}function NM(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=NM(t);if(e!==null)return e;t=t.sibling}return null}var DM=Xn.unstable_scheduleCallback,mx=Xn.unstable_cancelCallback,HU=Xn.unstable_shouldYield,VU=Xn.unstable_requestPaint,Nt=Xn.unstable_now,GU=Xn.unstable_getCurrentPriorityLevel,G0=Xn.unstable_ImmediatePriority,UM=Xn.unstable_UserBlockingPriority,_h=Xn.unstable_NormalPriority,WU=Xn.unstable_LowPriority,OM=Xn.unstable_IdlePriority,df=null,ki=null;function XU(t){if(ki&&typeof ki.onCommitFiberRoot=="function")try{ki.onCommitFiberRoot(df,t,void 0,(t.current.flags&128)===128)}catch{}}var Mi=Math.clz32?Math.clz32:YU,jU=Math.log,$U=Math.LN2;function YU(t){return t>>>=0,t===0?32:31-(jU(t)/$U|0)|0}var cu=64,uu=4194304;function cl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yh(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=cl(o):(s&=a,s!==0&&(i=cl(s)))}else a=n&~r,a!==0?i=cl(a):s!==0&&(i=cl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Mi(e),r=1<<n,i|=t[n],e&=~r;return i}function KU(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qU(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Mi(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=KU(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Ym(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kM(){var t=cu;return cu<<=1,!(cu&4194240)&&(cu=64),t}function Dd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _c(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Mi(e),t[e]=n}function ZU(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Mi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function W0(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Mi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ct=0;function FM(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var BM,X0,zM,HM,VM,Km=!1,hu=[],Jr=null,Qr=null,es=null,Xl=new Map,jl=new Map,Hr=[],JU="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gx(t,e){switch(t){case"focusin":case"focusout":Jr=null;break;case"dragenter":case"dragleave":Qr=null;break;case"mouseover":case"mouseout":es=null;break;case"pointerover":case"pointerout":Xl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":jl.delete(e.pointerId)}}function Ko(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=xc(e),e!==null&&X0(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function QU(t,e,n,i,r){switch(e){case"focusin":return Jr=Ko(Jr,t,e,n,i,r),!0;case"dragenter":return Qr=Ko(Qr,t,e,n,i,r),!0;case"mouseover":return es=Ko(es,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Xl.set(s,Ko(Xl.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,jl.set(s,Ko(jl.get(s)||null,t,e,n,i,r)),!0}return!1}function GM(t){var e=Is(t.target);if(e!==null){var n=ta(e);if(n!==null){if(e=n.tag,e===13){if(e=LM(n),e!==null){t.blockedOn=e,VM(t.priority,function(){zM(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Wm=i,n.target.dispatchEvent(i),Wm=null}else return e=xc(n),e!==null&&X0(e),t.blockedOn=n,!1;e.shift()}return!0}function vx(t,e,n){Wu(t)&&n.delete(e)}function eO(){Km=!1,Jr!==null&&Wu(Jr)&&(Jr=null),Qr!==null&&Wu(Qr)&&(Qr=null),es!==null&&Wu(es)&&(es=null),Xl.forEach(vx),jl.forEach(vx)}function qo(t,e){t.blockedOn===e&&(t.blockedOn=null,Km||(Km=!0,Xn.unstable_scheduleCallback(Xn.unstable_NormalPriority,eO)))}function $l(t){function e(r){return qo(r,t)}if(0<hu.length){qo(hu[0],t);for(var n=1;n<hu.length;n++){var i=hu[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Jr!==null&&qo(Jr,t),Qr!==null&&qo(Qr,t),es!==null&&qo(es,t),Xl.forEach(e),jl.forEach(e),n=0;n<Hr.length;n++)i=Hr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Hr.length&&(n=Hr[0],n.blockedOn===null);)GM(n),n.blockedOn===null&&Hr.shift()}var ja=Mr.ReactCurrentBatchConfig,xh=!0;function tO(t,e,n,i){var r=ct,s=ja.transition;ja.transition=null;try{ct=1,j0(t,e,n,i)}finally{ct=r,ja.transition=s}}function nO(t,e,n,i){var r=ct,s=ja.transition;ja.transition=null;try{ct=4,j0(t,e,n,i)}finally{ct=r,ja.transition=s}}function j0(t,e,n,i){if(xh){var r=qm(t,e,n,i);if(r===null)Wd(t,e,i,wh,n),gx(t,i);else if(QU(r,t,e,n,i))i.stopPropagation();else if(gx(t,i),e&4&&-1<JU.indexOf(t)){for(;r!==null;){var s=xc(r);if(s!==null&&BM(s),s=qm(t,e,n,i),s===null&&Wd(t,e,i,wh,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Wd(t,e,i,null,n)}}var wh=null;function qm(t,e,n,i){if(wh=null,t=V0(i),t=Is(t),t!==null)if(e=ta(t),e===null)t=null;else if(n=e.tag,n===13){if(t=LM(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wh=t,null}function WM(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(GU()){case G0:return 1;case UM:return 4;case _h:case WU:return 16;case OM:return 536870912;default:return 16}default:return 16}}var Yr=null,$0=null,Xu=null;function XM(){if(Xu)return Xu;var t,e=$0,n=e.length,i,r="value"in Yr?Yr.value:Yr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Xu=r.slice(t,1<i?1-i:void 0)}function ju(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fu(){return!0}function _x(){return!1}function Kn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fu:_x,this.isPropagationStopped=_x,this}return At(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fu)},persist:function(){},isPersistent:fu}),e}var Oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Y0=Kn(Oo),yc=At({},Oo,{view:0,detail:0}),iO=Kn(yc),Ud,Od,Zo,pf=At({},yc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:K0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zo&&(Zo&&t.type==="mousemove"?(Ud=t.screenX-Zo.screenX,Od=t.screenY-Zo.screenY):Od=Ud=0,Zo=t),Ud)},movementY:function(t){return"movementY"in t?t.movementY:Od}}),yx=Kn(pf),rO=At({},pf,{dataTransfer:0}),sO=Kn(rO),aO=At({},yc,{relatedTarget:0}),kd=Kn(aO),oO=At({},Oo,{animationName:0,elapsedTime:0,pseudoElement:0}),lO=Kn(oO),cO=At({},Oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uO=Kn(cO),hO=At({},Oo,{data:0}),xx=Kn(hO),fO={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dO={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pO={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mO(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pO[t])?!!e[t]:!1}function K0(){return mO}var gO=At({},yc,{key:function(t){if(t.key){var e=fO[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ju(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dO[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:K0,charCode:function(t){return t.type==="keypress"?ju(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ju(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vO=Kn(gO),_O=At({},pf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wx=Kn(_O),yO=At({},yc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:K0}),xO=Kn(yO),wO=At({},Oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),SO=Kn(wO),MO=At({},pf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),EO=Kn(MO),TO=[9,13,27,32],q0=vr&&"CompositionEvent"in window,Ml=null;vr&&"documentMode"in document&&(Ml=document.documentMode);var CO=vr&&"TextEvent"in window&&!Ml,jM=vr&&(!q0||Ml&&8<Ml&&11>=Ml),Sx=" ",Mx=!1;function $M(t,e){switch(t){case"keyup":return TO.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function YM(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ba=!1;function AO(t,e){switch(t){case"compositionend":return YM(e);case"keypress":return e.which!==32?null:(Mx=!0,Sx);case"textInput":return t=e.data,t===Sx&&Mx?null:t;default:return null}}function bO(t,e){if(ba)return t==="compositionend"||!q0&&$M(t,e)?(t=XM(),Xu=$0=Yr=null,ba=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jM&&e.locale!=="ko"?null:e.data;default:return null}}var RO={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ex(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!RO[t.type]:e==="textarea"}function KM(t,e,n,i){CM(i),e=Sh(e,"onChange"),0<e.length&&(n=new Y0("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var El=null,Yl=null;function PO(t){aE(t,0)}function mf(t){var e=La(t);if(yM(e))return t}function LO(t,e){if(t==="change")return e}var qM=!1;if(vr){var Fd;if(vr){var Bd="oninput"in document;if(!Bd){var Tx=document.createElement("div");Tx.setAttribute("oninput","return;"),Bd=typeof Tx.oninput=="function"}Fd=Bd}else Fd=!1;qM=Fd&&(!document.documentMode||9<document.documentMode)}function Cx(){El&&(El.detachEvent("onpropertychange",ZM),Yl=El=null)}function ZM(t){if(t.propertyName==="value"&&mf(Yl)){var e=[];KM(e,Yl,t,V0(t)),PM(PO,e)}}function IO(t,e,n){t==="focusin"?(Cx(),El=e,Yl=n,El.attachEvent("onpropertychange",ZM)):t==="focusout"&&Cx()}function NO(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mf(Yl)}function DO(t,e){if(t==="click")return mf(e)}function UO(t,e){if(t==="input"||t==="change")return mf(e)}function OO(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ci=typeof Object.is=="function"?Object.is:OO;function Kl(t,e){if(Ci(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Im.call(e,r)||!Ci(t[r],e[r]))return!1}return!0}function Ax(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bx(t,e){var n=Ax(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ax(n)}}function JM(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?JM(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function QM(){for(var t=window,e=mh();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=mh(t.document)}return e}function Z0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function kO(t){var e=QM(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&JM(n.ownerDocument.documentElement,n)){if(i!==null&&Z0(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=bx(n,s);var a=bx(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var FO=vr&&"documentMode"in document&&11>=document.documentMode,Ra=null,Zm=null,Tl=null,Jm=!1;function Rx(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jm||Ra==null||Ra!==mh(i)||(i=Ra,"selectionStart"in i&&Z0(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Tl&&Kl(Tl,i)||(Tl=i,i=Sh(Zm,"onSelect"),0<i.length&&(e=new Y0("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ra)))}function du(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Pa={animationend:du("Animation","AnimationEnd"),animationiteration:du("Animation","AnimationIteration"),animationstart:du("Animation","AnimationStart"),transitionend:du("Transition","TransitionEnd")},zd={},eE={};vr&&(eE=document.createElement("div").style,"AnimationEvent"in window||(delete Pa.animationend.animation,delete Pa.animationiteration.animation,delete Pa.animationstart.animation),"TransitionEvent"in window||delete Pa.transitionend.transition);function gf(t){if(zd[t])return zd[t];if(!Pa[t])return t;var e=Pa[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in eE)return zd[t]=e[n];return t}var tE=gf("animationend"),nE=gf("animationiteration"),iE=gf("animationstart"),rE=gf("transitionend"),sE=new Map,Px="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fs(t,e){sE.set(t,e),ea(e,[t])}for(var Hd=0;Hd<Px.length;Hd++){var Vd=Px[Hd],BO=Vd.toLowerCase(),zO=Vd[0].toUpperCase()+Vd.slice(1);fs(BO,"on"+zO)}fs(tE,"onAnimationEnd");fs(nE,"onAnimationIteration");fs(iE,"onAnimationStart");fs("dblclick","onDoubleClick");fs("focusin","onFocus");fs("focusout","onBlur");fs(rE,"onTransitionEnd");yo("onMouseEnter",["mouseout","mouseover"]);yo("onMouseLeave",["mouseout","mouseover"]);yo("onPointerEnter",["pointerout","pointerover"]);yo("onPointerLeave",["pointerout","pointerover"]);ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ea("onBeforeInput",["compositionend","keypress","textInput","paste"]);ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HO=new Set("cancel close invalid load scroll toggle".split(" ").concat(ul));function Lx(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,BU(i,e,void 0,t),t.currentTarget=null}function aE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Lx(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Lx(r,o,c),s=l}}}if(vh)throw t=$m,vh=!1,$m=null,t}function vt(t,e){var n=e[ig];n===void 0&&(n=e[ig]=new Set);var i=t+"__bubble";n.has(i)||(oE(e,t,2,!1),n.add(i))}function Gd(t,e,n){var i=0;e&&(i|=4),oE(n,t,i,e)}var pu="_reactListening"+Math.random().toString(36).slice(2);function ql(t){if(!t[pu]){t[pu]=!0,pM.forEach(function(n){n!=="selectionchange"&&(HO.has(n)||Gd(n,!1,t),Gd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pu]||(e[pu]=!0,Gd("selectionchange",!1,e))}}function oE(t,e,n,i){switch(WM(e)){case 1:var r=tO;break;case 4:r=nO;break;default:r=j0}n=r.bind(null,e,n,t),r=void 0,!jm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Wd(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Is(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}PM(function(){var c=s,u=V0(n),h=[];e:{var f=sE.get(t);if(f!==void 0){var p=Y0,g=t;switch(t){case"keypress":if(ju(n)===0)break e;case"keydown":case"keyup":p=vO;break;case"focusin":g="focus",p=kd;break;case"focusout":g="blur",p=kd;break;case"beforeblur":case"afterblur":p=kd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=yx;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=sO;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=xO;break;case tE:case nE:case iE:p=lO;break;case rE:p=SO;break;case"scroll":p=iO;break;case"wheel":p=EO;break;case"copy":case"cut":case"paste":p=uO;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=wx}var y=(e&4)!==0,m=!y&&t==="scroll",d=y?f!==null?f+"Capture":null:f;y=[];for(var _=c,v;_!==null;){v=_;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,d!==null&&(x=Wl(_,d),x!=null&&y.push(Zl(_,x,v)))),m)break;_=_.return}0<y.length&&(f=new p(f,g,null,n,u),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Wm&&(g=n.relatedTarget||n.fromElement)&&(Is(g)||g[_r]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Is(g):null,g!==null&&(m=ta(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(y=yx,x="onMouseLeave",d="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=wx,x="onPointerLeave",d="onPointerEnter",_="pointer"),m=p==null?f:La(p),v=g==null?f:La(g),f=new y(x,_+"leave",p,n,u),f.target=m,f.relatedTarget=v,x=null,Is(u)===c&&(y=new y(d,_+"enter",g,n,u),y.target=v,y.relatedTarget=m,x=y),m=x,p&&g)t:{for(y=p,d=g,_=0,v=y;v;v=ya(v))_++;for(v=0,x=d;x;x=ya(x))v++;for(;0<_-v;)y=ya(y),_--;for(;0<v-_;)d=ya(d),v--;for(;_--;){if(y===d||d!==null&&y===d.alternate)break t;y=ya(y),d=ya(d)}y=null}else y=null;p!==null&&Ix(h,f,p,y,!1),g!==null&&m!==null&&Ix(h,m,g,y,!0)}}e:{if(f=c?La(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var A=LO;else if(Ex(f))if(qM)A=UO;else{A=NO;var C=IO}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(A=DO);if(A&&(A=A(t,c))){KM(h,A,n,u);break e}C&&C(t,f,c),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Bm(f,"number",f.value)}switch(C=c?La(c):window,t){case"focusin":(Ex(C)||C.contentEditable==="true")&&(Ra=C,Zm=c,Tl=null);break;case"focusout":Tl=Zm=Ra=null;break;case"mousedown":Jm=!0;break;case"contextmenu":case"mouseup":case"dragend":Jm=!1,Rx(h,n,u);break;case"selectionchange":if(FO)break;case"keydown":case"keyup":Rx(h,n,u)}var M;if(q0)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ba?$M(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(jM&&n.locale!=="ko"&&(ba||R!=="onCompositionStart"?R==="onCompositionEnd"&&ba&&(M=XM()):(Yr=u,$0="value"in Yr?Yr.value:Yr.textContent,ba=!0)),C=Sh(c,R),0<C.length&&(R=new xx(R,t,null,n,u),h.push({event:R,listeners:C}),M?R.data=M:(M=YM(n),M!==null&&(R.data=M)))),(M=CO?AO(t,n):bO(t,n))&&(c=Sh(c,"onBeforeInput"),0<c.length&&(u=new xx("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=M))}aE(h,e)})}function Zl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sh(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Wl(t,n),s!=null&&i.unshift(Zl(t,s,r)),s=Wl(t,e),s!=null&&i.push(Zl(t,s,r))),t=t.return}return i}function ya(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ix(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Wl(n,s),l!=null&&a.unshift(Zl(n,l,o))):r||(l=Wl(n,s),l!=null&&a.push(Zl(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var VO=/\r\n?/g,GO=/\u0000|\uFFFD/g;function Nx(t){return(typeof t=="string"?t:""+t).replace(VO,`
`).replace(GO,"")}function mu(t,e,n){if(e=Nx(e),Nx(t)!==e&&n)throw Error(ee(425))}function Mh(){}var Qm=null,eg=null;function tg(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ng=typeof setTimeout=="function"?setTimeout:void 0,WO=typeof clearTimeout=="function"?clearTimeout:void 0,Dx=typeof Promise=="function"?Promise:void 0,XO=typeof queueMicrotask=="function"?queueMicrotask:typeof Dx<"u"?function(t){return Dx.resolve(null).then(t).catch(jO)}:ng;function jO(t){setTimeout(function(){throw t})}function Xd(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),$l(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);$l(e)}function ts(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ux(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ko=Math.random().toString(36).slice(2),Ni="__reactFiber$"+ko,Jl="__reactProps$"+ko,_r="__reactContainer$"+ko,ig="__reactEvents$"+ko,$O="__reactListeners$"+ko,YO="__reactHandles$"+ko;function Is(t){var e=t[Ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_r]||n[Ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ux(t);t!==null;){if(n=t[Ni])return n;t=Ux(t)}return e}t=n,n=t.parentNode}return null}function xc(t){return t=t[Ni]||t[_r],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function La(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function vf(t){return t[Jl]||null}var rg=[],Ia=-1;function ds(t){return{current:t}}function wt(t){0>Ia||(t.current=rg[Ia],rg[Ia]=null,Ia--)}function dt(t,e){Ia++,rg[Ia]=t.current,t.current=e}var us={},un=ds(us),Pn=ds(!1),Ys=us;function xo(t,e){var n=t.type.contextTypes;if(!n)return us;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Ln(t){return t=t.childContextTypes,t!=null}function Eh(){wt(Pn),wt(un)}function Ox(t,e,n){if(un.current!==us)throw Error(ee(168));dt(un,e),dt(Pn,n)}function lE(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,IU(t)||"Unknown",r));return At({},n,i)}function Th(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||us,Ys=un.current,dt(un,t),dt(Pn,Pn.current),!0}function kx(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=lE(t,e,Ys),i.__reactInternalMemoizedMergedChildContext=t,wt(Pn),wt(un),dt(un,t)):wt(Pn),dt(Pn,n)}var sr=null,_f=!1,jd=!1;function cE(t){sr===null?sr=[t]:sr.push(t)}function KO(t){_f=!0,cE(t)}function ps(){if(!jd&&sr!==null){jd=!0;var t=0,e=ct;try{var n=sr;for(ct=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}sr=null,_f=!1}catch(r){throw sr!==null&&(sr=sr.slice(t+1)),DM(G0,ps),r}finally{ct=e,jd=!1}}return null}var Na=[],Da=0,Ch=null,Ah=0,Qn=[],ei=0,Ks=null,cr=1,ur="";function Cs(t,e){Na[Da++]=Ah,Na[Da++]=Ch,Ch=t,Ah=e}function uE(t,e,n){Qn[ei++]=cr,Qn[ei++]=ur,Qn[ei++]=Ks,Ks=t;var i=cr;t=ur;var r=32-Mi(i)-1;i&=~(1<<r),n+=1;var s=32-Mi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,cr=1<<32-Mi(e)+r|n<<r|i,ur=s+t}else cr=1<<s|n<<r|i,ur=t}function J0(t){t.return!==null&&(Cs(t,1),uE(t,1,0))}function Q0(t){for(;t===Ch;)Ch=Na[--Da],Na[Da]=null,Ah=Na[--Da],Na[Da]=null;for(;t===Ks;)Ks=Qn[--ei],Qn[ei]=null,ur=Qn[--ei],Qn[ei]=null,cr=Qn[--ei],Qn[ei]=null}var Wn=null,Hn=null,St=!1,_i=null;function hE(t,e){var n=ni(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Fx(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wn=t,Hn=ts(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wn=t,Hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ks!==null?{id:cr,overflow:ur}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ni(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wn=t,Hn=null,!0):!1;default:return!1}}function sg(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ag(t){if(St){var e=Hn;if(e){var n=e;if(!Fx(t,e)){if(sg(t))throw Error(ee(418));e=ts(n.nextSibling);var i=Wn;e&&Fx(t,e)?hE(i,n):(t.flags=t.flags&-4097|2,St=!1,Wn=t)}}else{if(sg(t))throw Error(ee(418));t.flags=t.flags&-4097|2,St=!1,Wn=t}}}function Bx(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wn=t}function gu(t){if(t!==Wn)return!1;if(!St)return Bx(t),St=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!tg(t.type,t.memoizedProps)),e&&(e=Hn)){if(sg(t))throw fE(),Error(ee(418));for(;e;)hE(t,e),e=ts(e.nextSibling)}if(Bx(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Hn=ts(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Hn=null}}else Hn=Wn?ts(t.stateNode.nextSibling):null;return!0}function fE(){for(var t=Hn;t;)t=ts(t.nextSibling)}function wo(){Hn=Wn=null,St=!1}function ev(t){_i===null?_i=[t]:_i.push(t)}var qO=Mr.ReactCurrentBatchConfig;function Jo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function vu(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zx(t){var e=t._init;return e(t._payload)}function dE(t){function e(d,_){if(t){var v=d.deletions;v===null?(d.deletions=[_],d.flags|=16):v.push(_)}}function n(d,_){if(!t)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=ss(d,_),d.index=0,d.sibling=null,d}function s(d,_,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<_?(d.flags|=2,_):v):(d.flags|=2,_)):(d.flags|=1048576,_)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,_,v,x){return _===null||_.tag!==6?(_=Qd(v,d.mode,x),_.return=d,_):(_=r(_,v),_.return=d,_)}function l(d,_,v,x){var A=v.type;return A===Aa?u(d,_,v.props.children,x,v.key):_!==null&&(_.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===kr&&zx(A)===_.type)?(x=r(_,v.props),x.ref=Jo(d,_,v),x.return=d,x):(x=Qu(v.type,v.key,v.props,null,d.mode,x),x.ref=Jo(d,_,v),x.return=d,x)}function c(d,_,v,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=ep(v,d.mode,x),_.return=d,_):(_=r(_,v.children||[]),_.return=d,_)}function u(d,_,v,x,A){return _===null||_.tag!==7?(_=Hs(v,d.mode,x,A),_.return=d,_):(_=r(_,v),_.return=d,_)}function h(d,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Qd(""+_,d.mode,v),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case au:return v=Qu(_.type,_.key,_.props,null,d.mode,v),v.ref=Jo(d,null,_),v.return=d,v;case Ca:return _=ep(_,d.mode,v),_.return=d,_;case kr:var x=_._init;return h(d,x(_._payload),v)}if(ll(_)||$o(_))return _=Hs(_,d.mode,v,null),_.return=d,_;vu(d,_)}return null}function f(d,_,v,x){var A=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return A!==null?null:o(d,_,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case au:return v.key===A?l(d,_,v,x):null;case Ca:return v.key===A?c(d,_,v,x):null;case kr:return A=v._init,f(d,_,A(v._payload),x)}if(ll(v)||$o(v))return A!==null?null:u(d,_,v,x,null);vu(d,v)}return null}function p(d,_,v,x,A){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(v)||null,o(_,d,""+x,A);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case au:return d=d.get(x.key===null?v:x.key)||null,l(_,d,x,A);case Ca:return d=d.get(x.key===null?v:x.key)||null,c(_,d,x,A);case kr:var C=x._init;return p(d,_,v,C(x._payload),A)}if(ll(x)||$o(x))return d=d.get(v)||null,u(_,d,x,A,null);vu(_,x)}return null}function g(d,_,v,x){for(var A=null,C=null,M=_,R=_=0,H=null;M!==null&&R<v.length;R++){M.index>R?(H=M,M=null):H=M.sibling;var w=f(d,M,v[R],x);if(w===null){M===null&&(M=H);break}t&&M&&w.alternate===null&&e(d,M),_=s(w,_,R),C===null?A=w:C.sibling=w,C=w,M=H}if(R===v.length)return n(d,M),St&&Cs(d,R),A;if(M===null){for(;R<v.length;R++)M=h(d,v[R],x),M!==null&&(_=s(M,_,R),C===null?A=M:C.sibling=M,C=M);return St&&Cs(d,R),A}for(M=i(d,M);R<v.length;R++)H=p(M,d,R,v[R],x),H!==null&&(t&&H.alternate!==null&&M.delete(H.key===null?R:H.key),_=s(H,_,R),C===null?A=H:C.sibling=H,C=H);return t&&M.forEach(function(T){return e(d,T)}),St&&Cs(d,R),A}function y(d,_,v,x){var A=$o(v);if(typeof A!="function")throw Error(ee(150));if(v=A.call(v),v==null)throw Error(ee(151));for(var C=A=null,M=_,R=_=0,H=null,w=v.next();M!==null&&!w.done;R++,w=v.next()){M.index>R?(H=M,M=null):H=M.sibling;var T=f(d,M,w.value,x);if(T===null){M===null&&(M=H);break}t&&M&&T.alternate===null&&e(d,M),_=s(T,_,R),C===null?A=T:C.sibling=T,C=T,M=H}if(w.done)return n(d,M),St&&Cs(d,R),A;if(M===null){for(;!w.done;R++,w=v.next())w=h(d,w.value,x),w!==null&&(_=s(w,_,R),C===null?A=w:C.sibling=w,C=w);return St&&Cs(d,R),A}for(M=i(d,M);!w.done;R++,w=v.next())w=p(M,d,R,w.value,x),w!==null&&(t&&w.alternate!==null&&M.delete(w.key===null?R:w.key),_=s(w,_,R),C===null?A=w:C.sibling=w,C=w);return t&&M.forEach(function(G){return e(d,G)}),St&&Cs(d,R),A}function m(d,_,v,x){if(typeof v=="object"&&v!==null&&v.type===Aa&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case au:e:{for(var A=v.key,C=_;C!==null;){if(C.key===A){if(A=v.type,A===Aa){if(C.tag===7){n(d,C.sibling),_=r(C,v.props.children),_.return=d,d=_;break e}}else if(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===kr&&zx(A)===C.type){n(d,C.sibling),_=r(C,v.props),_.ref=Jo(d,C,v),_.return=d,d=_;break e}n(d,C);break}else e(d,C);C=C.sibling}v.type===Aa?(_=Hs(v.props.children,d.mode,x,v.key),_.return=d,d=_):(x=Qu(v.type,v.key,v.props,null,d.mode,x),x.ref=Jo(d,_,v),x.return=d,d=x)}return a(d);case Ca:e:{for(C=v.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(d,_.sibling),_=r(_,v.children||[]),_.return=d,d=_;break e}else{n(d,_);break}else e(d,_);_=_.sibling}_=ep(v,d.mode,x),_.return=d,d=_}return a(d);case kr:return C=v._init,m(d,_,C(v._payload),x)}if(ll(v))return g(d,_,v,x);if($o(v))return y(d,_,v,x);vu(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(d,_.sibling),_=r(_,v),_.return=d,d=_):(n(d,_),_=Qd(v,d.mode,x),_.return=d,d=_),a(d)):n(d,_)}return m}var So=dE(!0),pE=dE(!1),bh=ds(null),Rh=null,Ua=null,tv=null;function nv(){tv=Ua=Rh=null}function iv(t){var e=bh.current;wt(bh),t._currentValue=e}function og(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function $a(t,e){Rh=t,tv=Ua=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(bn=!0),t.firstContext=null)}function oi(t){var e=t._currentValue;if(tv!==t)if(t={context:t,memoizedValue:e,next:null},Ua===null){if(Rh===null)throw Error(ee(308));Ua=t,Rh.dependencies={lanes:0,firstContext:t}}else Ua=Ua.next=t;return e}var Ns=null;function rv(t){Ns===null?Ns=[t]:Ns.push(t)}function mE(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,rv(e)):(n.next=r.next,r.next=n),e.interleaved=n,yr(t,i)}function yr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fr=!1;function sv(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ns(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,yr(t,n)}return r=i.interleaved,r===null?(e.next=e,rv(i)):(e.next=r.next,r.next=e),i.interleaved=e,yr(t,n)}function $u(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,W0(t,n)}}function Hx(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ph(t,e,n,i){var r=t.updateQueue;Fr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=t.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,u=c=l=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=t,y=o;switch(f=e,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(p,h,f);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,f=typeof g=="function"?g.call(p,h,f):g,f==null)break e;h=At({},h,f);break e;case 2:Fr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Zs|=a,t.lanes=a,t.memoizedState=h}}function Vx(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var wc={},Fi=ds(wc),Ql=ds(wc),ec=ds(wc);function Ds(t){if(t===wc)throw Error(ee(174));return t}function av(t,e){switch(dt(ec,e),dt(Ql,t),dt(Fi,wc),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hm(e,t)}wt(Fi),dt(Fi,e)}function Mo(){wt(Fi),wt(Ql),wt(ec)}function vE(t){Ds(ec.current);var e=Ds(Fi.current),n=Hm(e,t.type);e!==n&&(dt(Ql,t),dt(Fi,n))}function ov(t){Ql.current===t&&(wt(Fi),wt(Ql))}var Et=ds(0);function Lh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $d=[];function lv(){for(var t=0;t<$d.length;t++)$d[t]._workInProgressVersionPrimary=null;$d.length=0}var Yu=Mr.ReactCurrentDispatcher,Yd=Mr.ReactCurrentBatchConfig,qs=0,Ct=null,Bt=null,$t=null,Ih=!1,Cl=!1,tc=0,ZO=0;function sn(){throw Error(ee(321))}function cv(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ci(t[n],e[n]))return!1;return!0}function uv(t,e,n,i,r,s){if(qs=s,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yu.current=t===null||t.memoizedState===null?tk:nk,t=n(i,r),Cl){s=0;do{if(Cl=!1,tc=0,25<=s)throw Error(ee(301));s+=1,$t=Bt=null,e.updateQueue=null,Yu.current=ik,t=n(i,r)}while(Cl)}if(Yu.current=Nh,e=Bt!==null&&Bt.next!==null,qs=0,$t=Bt=Ct=null,Ih=!1,e)throw Error(ee(300));return t}function hv(){var t=tc!==0;return tc=0,t}function bi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?Ct.memoizedState=$t=t:$t=$t.next=t,$t}function li(){if(Bt===null){var t=Ct.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var e=$t===null?Ct.memoizedState:$t.next;if(e!==null)$t=e,Bt=t;else{if(t===null)throw Error(ee(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},$t===null?Ct.memoizedState=$t=t:$t=$t.next=t}return $t}function nc(t,e){return typeof e=="function"?e(t):e}function Kd(t){var e=li(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=Bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((qs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,Ct.lanes|=u,Zs|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Ci(i,e.memoizedState)||(bn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ct.lanes|=s,Zs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qd(t){var e=li(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Ci(s,e.memoizedState)||(bn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function _E(){}function yE(t,e){var n=Ct,i=li(),r=e(),s=!Ci(i.memoizedState,r);if(s&&(i.memoizedState=r,bn=!0),i=i.queue,fv(SE.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||$t!==null&&$t.memoizedState.tag&1){if(n.flags|=2048,ic(9,wE.bind(null,n,i,r,e),void 0,null),Yt===null)throw Error(ee(349));qs&30||xE(n,e,r)}return r}function xE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function wE(t,e,n,i){e.value=n,e.getSnapshot=i,ME(e)&&EE(t)}function SE(t,e,n){return n(function(){ME(e)&&EE(t)})}function ME(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ci(t,n)}catch{return!0}}function EE(t){var e=yr(t,1);e!==null&&Ei(e,t,1,-1)}function Gx(t){var e=bi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nc,lastRenderedState:t},e.queue=t,t=t.dispatch=ek.bind(null,Ct,t),[e.memoizedState,t]}function ic(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function TE(){return li().memoizedState}function Ku(t,e,n,i){var r=bi();Ct.flags|=t,r.memoizedState=ic(1|e,n,void 0,i===void 0?null:i)}function yf(t,e,n,i){var r=li();i=i===void 0?null:i;var s=void 0;if(Bt!==null){var a=Bt.memoizedState;if(s=a.destroy,i!==null&&cv(i,a.deps)){r.memoizedState=ic(e,n,s,i);return}}Ct.flags|=t,r.memoizedState=ic(1|e,n,s,i)}function Wx(t,e){return Ku(8390656,8,t,e)}function fv(t,e){return yf(2048,8,t,e)}function CE(t,e){return yf(4,2,t,e)}function AE(t,e){return yf(4,4,t,e)}function bE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function RE(t,e,n){return n=n!=null?n.concat([t]):null,yf(4,4,bE.bind(null,e,t),n)}function dv(){}function PE(t,e){var n=li();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&cv(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function LE(t,e){var n=li();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&cv(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function IE(t,e,n){return qs&21?(Ci(n,e)||(n=kM(),Ct.lanes|=n,Zs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,bn=!0),t.memoizedState=n)}function JO(t,e){var n=ct;ct=n!==0&&4>n?n:4,t(!0);var i=Yd.transition;Yd.transition={};try{t(!1),e()}finally{ct=n,Yd.transition=i}}function NE(){return li().memoizedState}function QO(t,e,n){var i=rs(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},DE(t))UE(e,n);else if(n=mE(t,e,n,i),n!==null){var r=yn();Ei(n,t,i,r),OE(n,e,i)}}function ek(t,e,n){var i=rs(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(DE(t))UE(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Ci(o,a)){var l=e.interleaved;l===null?(r.next=r,rv(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=mE(t,e,r,i),n!==null&&(r=yn(),Ei(n,t,i,r),OE(n,e,i))}}function DE(t){var e=t.alternate;return t===Ct||e!==null&&e===Ct}function UE(t,e){Cl=Ih=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function OE(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,W0(t,n)}}var Nh={readContext:oi,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useInsertionEffect:sn,useLayoutEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useMutableSource:sn,useSyncExternalStore:sn,useId:sn,unstable_isNewReconciler:!1},tk={readContext:oi,useCallback:function(t,e){return bi().memoizedState=[t,e===void 0?null:e],t},useContext:oi,useEffect:Wx,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ku(4194308,4,bE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ku(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ku(4,2,t,e)},useMemo:function(t,e){var n=bi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=bi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=QO.bind(null,Ct,t),[i.memoizedState,t]},useRef:function(t){var e=bi();return t={current:t},e.memoizedState=t},useState:Gx,useDebugValue:dv,useDeferredValue:function(t){return bi().memoizedState=t},useTransition:function(){var t=Gx(!1),e=t[0];return t=JO.bind(null,t[1]),bi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ct,r=bi();if(St){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Yt===null)throw Error(ee(349));qs&30||xE(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Wx(SE.bind(null,i,s,t),[t]),i.flags|=2048,ic(9,wE.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=bi(),e=Yt.identifierPrefix;if(St){var n=ur,i=cr;n=(i&~(1<<32-Mi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=tc++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ZO++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},nk={readContext:oi,useCallback:PE,useContext:oi,useEffect:fv,useImperativeHandle:RE,useInsertionEffect:CE,useLayoutEffect:AE,useMemo:LE,useReducer:Kd,useRef:TE,useState:function(){return Kd(nc)},useDebugValue:dv,useDeferredValue:function(t){var e=li();return IE(e,Bt.memoizedState,t)},useTransition:function(){var t=Kd(nc)[0],e=li().memoizedState;return[t,e]},useMutableSource:_E,useSyncExternalStore:yE,useId:NE,unstable_isNewReconciler:!1},ik={readContext:oi,useCallback:PE,useContext:oi,useEffect:fv,useImperativeHandle:RE,useInsertionEffect:CE,useLayoutEffect:AE,useMemo:LE,useReducer:qd,useRef:TE,useState:function(){return qd(nc)},useDebugValue:dv,useDeferredValue:function(t){var e=li();return Bt===null?e.memoizedState=t:IE(e,Bt.memoizedState,t)},useTransition:function(){var t=qd(nc)[0],e=li().memoizedState;return[t,e]},useMutableSource:_E,useSyncExternalStore:yE,useId:NE,unstable_isNewReconciler:!1};function gi(t,e){if(t&&t.defaultProps){e=At({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function lg(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:At({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xf={isMounted:function(t){return(t=t._reactInternals)?ta(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=yn(),r=rs(t),s=hr(i,r);s.payload=e,n!=null&&(s.callback=n),e=ns(t,s,r),e!==null&&(Ei(e,t,r,i),$u(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=yn(),r=rs(t),s=hr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ns(t,s,r),e!==null&&(Ei(e,t,r,i),$u(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yn(),i=rs(t),r=hr(n,i);r.tag=2,e!=null&&(r.callback=e),e=ns(t,r,i),e!==null&&(Ei(e,t,i,n),$u(e,t,i))}};function Xx(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Kl(n,i)||!Kl(r,s):!0}function kE(t,e,n){var i=!1,r=us,s=e.contextType;return typeof s=="object"&&s!==null?s=oi(s):(r=Ln(e)?Ys:un.current,i=e.contextTypes,s=(i=i!=null)?xo(t,r):us),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xf,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function jx(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&xf.enqueueReplaceState(e,e.state,null)}function cg(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},sv(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=oi(s):(s=Ln(e)?Ys:un.current,r.context=xo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(lg(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&xf.enqueueReplaceState(r,r.state,null),Ph(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Eo(t,e){try{var n="",i=e;do n+=LU(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Zd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ug(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var rk=typeof WeakMap=="function"?WeakMap:Map;function FE(t,e,n){n=hr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Uh||(Uh=!0,xg=i),ug(t,e)},n}function BE(t,e,n){n=hr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ug(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ug(t,e),typeof i!="function"&&(is===null?is=new Set([this]):is.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function $x(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new rk;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=_k.bind(null,t,e,n),e.then(t,t))}function Yx(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Kx(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hr(-1,1),e.tag=2,ns(n,e,1))),n.lanes|=1),t)}var sk=Mr.ReactCurrentOwner,bn=!1;function pn(t,e,n,i){e.child=t===null?pE(e,null,n,i):So(e,t.child,n,i)}function qx(t,e,n,i,r){n=n.render;var s=e.ref;return $a(e,r),i=uv(t,e,n,i,s,r),n=hv(),t!==null&&!bn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,xr(t,e,r)):(St&&n&&J0(e),e.flags|=1,pn(t,e,i,r),e.child)}function Zx(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!wv(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,zE(t,e,s,i,r)):(t=Qu(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Kl,n(a,i)&&t.ref===e.ref)return xr(t,e,r)}return e.flags|=1,t=ss(s,i),t.ref=e.ref,t.return=e,e.child=t}function zE(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Kl(s,i)&&t.ref===e.ref)if(bn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(bn=!0);else return e.lanes=t.lanes,xr(t,e,r)}return hg(t,e,n,i,r)}function HE(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(ka,zn),zn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(ka,zn),zn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt(ka,zn),zn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt(ka,zn),zn|=i;return pn(t,e,r,n),e.child}function VE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hg(t,e,n,i,r){var s=Ln(n)?Ys:un.current;return s=xo(e,s),$a(e,r),n=uv(t,e,n,i,s,r),i=hv(),t!==null&&!bn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,xr(t,e,r)):(St&&i&&J0(e),e.flags|=1,pn(t,e,n,r),e.child)}function Jx(t,e,n,i,r){if(Ln(n)){var s=!0;Th(e)}else s=!1;if($a(e,r),e.stateNode===null)qu(t,e),kE(e,n,i),cg(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=oi(c):(c=Ln(n)?Ys:un.current,c=xo(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&jx(e,a,i,c),Fr=!1;var f=e.memoizedState;a.state=f,Ph(e,i,a,r),l=e.memoizedState,o!==i||f!==l||Pn.current||Fr?(typeof u=="function"&&(lg(e,n,u,i),l=e.memoizedState),(o=Fr||Xx(e,n,o,i,f,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,gE(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:gi(e.type,o),a.props=c,h=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=oi(l):(l=Ln(n)?Ys:un.current,l=xo(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&jx(e,a,i,l),Fr=!1,f=e.memoizedState,a.state=f,Ph(e,i,a,r);var g=e.memoizedState;o!==h||f!==g||Pn.current||Fr?(typeof p=="function"&&(lg(e,n,p,i),g=e.memoizedState),(c=Fr||Xx(e,n,c,i,f,g,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return fg(t,e,n,i,s,r)}function fg(t,e,n,i,r,s){VE(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&kx(e,n,!1),xr(t,e,s);i=e.stateNode,sk.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=So(e,t.child,null,s),e.child=So(e,null,o,s)):pn(t,e,o,s),e.memoizedState=i.state,r&&kx(e,n,!0),e.child}function GE(t){var e=t.stateNode;e.pendingContext?Ox(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ox(t,e.context,!1),av(t,e.containerInfo)}function Qx(t,e,n,i,r){return wo(),ev(r),e.flags|=256,pn(t,e,n,i),e.child}var dg={dehydrated:null,treeContext:null,retryLane:0};function pg(t){return{baseLanes:t,cachePool:null,transitions:null}}function WE(t,e,n){var i=e.pendingProps,r=Et.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(Et,r&1),t===null)return ag(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Mf(a,i,0,null),t=Hs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=pg(n),e.memoizedState=dg,t):pv(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return ak(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ss(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ss(o,s):(s=Hs(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?pg(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=dg,i}return s=t.child,t=s.sibling,i=ss(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function pv(t,e){return e=Mf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _u(t,e,n,i){return i!==null&&ev(i),So(e,t.child,null,n),t=pv(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ak(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Zd(Error(ee(422))),_u(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Mf({mode:"visible",children:i.children},r,0,null),s=Hs(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&So(e,t.child,null,a),e.child.memoizedState=pg(a),e.memoizedState=dg,s);if(!(e.mode&1))return _u(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ee(419)),i=Zd(s,i,void 0),_u(t,e,a,i)}if(o=(a&t.childLanes)!==0,bn||o){if(i=Yt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,yr(t,r),Ei(i,t,r,-1))}return xv(),i=Zd(Error(ee(421))),_u(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=yk.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Hn=ts(r.nextSibling),Wn=e,St=!0,_i=null,t!==null&&(Qn[ei++]=cr,Qn[ei++]=ur,Qn[ei++]=Ks,cr=t.id,ur=t.overflow,Ks=e),e=pv(e,i.children),e.flags|=4096,e)}function e1(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),og(t.return,e,n)}function Jd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function XE(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(pn(t,e,i.children,n),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&e1(t,n,e);else if(t.tag===19)e1(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(Et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Lh(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Jd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Lh(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Jd(e,!0,n,null,s);break;case"together":Jd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=ss(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ss(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ok(t,e,n){switch(e.tag){case 3:GE(e),wo();break;case 5:vE(e);break;case 1:Ln(e.type)&&Th(e);break;case 4:av(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(bh,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(Et,Et.current&1),e.flags|=128,null):n&e.child.childLanes?WE(t,e,n):(dt(Et,Et.current&1),t=xr(t,e,n),t!==null?t.sibling:null);dt(Et,Et.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return XE(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,HE(t,e,n)}return xr(t,e,n)}var jE,mg,$E,YE;jE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};mg=function(){};$E=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ds(Fi.current);var s=null;switch(n){case"input":r=km(t,r),i=km(t,i),s=[];break;case"select":r=At({},r,{value:void 0}),i=At({},i,{value:void 0}),s=[];break;case"textarea":r=zm(t,r),i=zm(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Mh)}Vm(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Vl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Vl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&vt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};YE=function(t,e,n,i){n!==i&&(e.flags|=4)};function Qo(t,e){if(!St)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function an(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function lk(t,e,n){var i=e.pendingProps;switch(Q0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(e),null;case 1:return Ln(e.type)&&Eh(),an(e),null;case 3:return i=e.stateNode,Mo(),wt(Pn),wt(un),lv(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(gu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,_i!==null&&(Mg(_i),_i=null))),mg(t,e),an(e),null;case 5:ov(e);var r=Ds(ec.current);if(n=e.type,t!==null&&e.stateNode!=null)$E(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return an(e),null}if(t=Ds(Fi.current),gu(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ni]=e,i[Jl]=s,t=(e.mode&1)!==0,n){case"dialog":vt("cancel",i),vt("close",i);break;case"iframe":case"object":case"embed":vt("load",i);break;case"video":case"audio":for(r=0;r<ul.length;r++)vt(ul[r],i);break;case"source":vt("error",i);break;case"img":case"image":case"link":vt("error",i),vt("load",i);break;case"details":vt("toggle",i);break;case"input":cx(i,s),vt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},vt("invalid",i);break;case"textarea":hx(i,s),vt("invalid",i)}Vm(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&mu(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&mu(i.textContent,o,t),r=["children",""+o]):Vl.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&vt("scroll",i)}switch(n){case"input":ou(i),ux(i,s,!0);break;case"textarea":ou(i),fx(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Mh)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=SM(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Ni]=e,t[Jl]=i,jE(t,e,!1,!1),e.stateNode=t;e:{switch(a=Gm(n,i),n){case"dialog":vt("cancel",t),vt("close",t),r=i;break;case"iframe":case"object":case"embed":vt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ul.length;r++)vt(ul[r],t);r=i;break;case"source":vt("error",t),r=i;break;case"img":case"image":case"link":vt("error",t),vt("load",t),r=i;break;case"details":vt("toggle",t),r=i;break;case"input":cx(t,i),r=km(t,i),vt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=At({},i,{value:void 0}),vt("invalid",t);break;case"textarea":hx(t,i),r=zm(t,i),vt("invalid",t);break;default:r=i}Vm(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?TM(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&MM(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Gl(t,l):typeof l=="number"&&Gl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Vl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&vt("scroll",t):l!=null&&F0(t,s,l,a))}switch(n){case"input":ou(t),ux(t,i,!1);break;case"textarea":ou(t),fx(t);break;case"option":i.value!=null&&t.setAttribute("value",""+cs(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ga(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ga(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Mh)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return an(e),null;case 6:if(t&&e.stateNode!=null)YE(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=Ds(ec.current),Ds(Fi.current),gu(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ni]=e,(s=i.nodeValue!==n)&&(t=Wn,t!==null))switch(t.tag){case 3:mu(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&mu(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ni]=e,e.stateNode=i}return an(e),null;case 13:if(wt(Et),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(St&&Hn!==null&&e.mode&1&&!(e.flags&128))fE(),wo(),e.flags|=98560,s=!1;else if(s=gu(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[Ni]=e}else wo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;an(e),s=!1}else _i!==null&&(Mg(_i),_i=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Et.current&1?Ht===0&&(Ht=3):xv())),e.updateQueue!==null&&(e.flags|=4),an(e),null);case 4:return Mo(),mg(t,e),t===null&&ql(e.stateNode.containerInfo),an(e),null;case 10:return iv(e.type._context),an(e),null;case 17:return Ln(e.type)&&Eh(),an(e),null;case 19:if(wt(Et),s=e.memoizedState,s===null)return an(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Qo(s,!1);else{if(Ht!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Lh(t),a!==null){for(e.flags|=128,Qo(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(Et,Et.current&1|2),e.child}t=t.sibling}s.tail!==null&&Nt()>To&&(e.flags|=128,i=!0,Qo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Lh(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!St)return an(e),null}else 2*Nt()-s.renderingStartTime>To&&n!==1073741824&&(e.flags|=128,i=!0,Qo(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Nt(),e.sibling=null,n=Et.current,dt(Et,i?n&1|2:n&1),e):(an(e),null);case 22:case 23:return yv(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?zn&1073741824&&(an(e),e.subtreeFlags&6&&(e.flags|=8192)):an(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function ck(t,e){switch(Q0(e),e.tag){case 1:return Ln(e.type)&&Eh(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Mo(),wt(Pn),wt(un),lv(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ov(e),null;case 13:if(wt(Et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));wo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return wt(Et),null;case 4:return Mo(),null;case 10:return iv(e.type._context),null;case 22:case 23:return yv(),null;case 24:return null;default:return null}}var yu=!1,ln=!1,uk=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Oa(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Pt(t,e,i)}else n.current=null}function gg(t,e,n){try{n()}catch(i){Pt(t,e,i)}}var t1=!1;function hk(t,e){if(Qm=xh,t=QM(),Z0(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,u=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++u===i&&(l=a),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(eg={focusedElem:t,selectionRange:n},xh=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,m=g.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:gi(e.type,y),m);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(x){Pt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return g=t1,t1=!1,g}function Al(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&gg(e,n,s)}r=r.next}while(r!==i)}}function wf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function vg(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function KE(t){var e=t.alternate;e!==null&&(t.alternate=null,KE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ni],delete e[Jl],delete e[ig],delete e[$O],delete e[YO])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function qE(t){return t.tag===5||t.tag===3||t.tag===4}function n1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||qE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _g(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Mh));else if(i!==4&&(t=t.child,t!==null))for(_g(t,e,n),t=t.sibling;t!==null;)_g(t,e,n),t=t.sibling}function yg(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(yg(t,e,n),t=t.sibling;t!==null;)yg(t,e,n),t=t.sibling}var Zt=null,vi=!1;function Dr(t,e,n){for(n=n.child;n!==null;)ZE(t,e,n),n=n.sibling}function ZE(t,e,n){if(ki&&typeof ki.onCommitFiberUnmount=="function")try{ki.onCommitFiberUnmount(df,n)}catch{}switch(n.tag){case 5:ln||Oa(n,e);case 6:var i=Zt,r=vi;Zt=null,Dr(t,e,n),Zt=i,vi=r,Zt!==null&&(vi?(t=Zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Zt.removeChild(n.stateNode));break;case 18:Zt!==null&&(vi?(t=Zt,n=n.stateNode,t.nodeType===8?Xd(t.parentNode,n):t.nodeType===1&&Xd(t,n),$l(t)):Xd(Zt,n.stateNode));break;case 4:i=Zt,r=vi,Zt=n.stateNode.containerInfo,vi=!0,Dr(t,e,n),Zt=i,vi=r;break;case 0:case 11:case 14:case 15:if(!ln&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&gg(n,e,a),r=r.next}while(r!==i)}Dr(t,e,n);break;case 1:if(!ln&&(Oa(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Pt(n,e,o)}Dr(t,e,n);break;case 21:Dr(t,e,n);break;case 22:n.mode&1?(ln=(i=ln)||n.memoizedState!==null,Dr(t,e,n),ln=i):Dr(t,e,n);break;default:Dr(t,e,n)}}function i1(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new uk),e.forEach(function(i){var r=xk.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function mi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Zt=o.stateNode,vi=!1;break e;case 3:Zt=o.stateNode.containerInfo,vi=!0;break e;case 4:Zt=o.stateNode.containerInfo,vi=!0;break e}o=o.return}if(Zt===null)throw Error(ee(160));ZE(s,a,r),Zt=null,vi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)JE(e,t),e=e.sibling}function JE(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(mi(e,t),Ai(t),i&4){try{Al(3,t,t.return),wf(3,t)}catch(y){Pt(t,t.return,y)}try{Al(5,t,t.return)}catch(y){Pt(t,t.return,y)}}break;case 1:mi(e,t),Ai(t),i&512&&n!==null&&Oa(n,n.return);break;case 5:if(mi(e,t),Ai(t),i&512&&n!==null&&Oa(n,n.return),t.flags&32){var r=t.stateNode;try{Gl(r,"")}catch(y){Pt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&xM(r,s),Gm(o,a);var c=Gm(o,s);for(a=0;a<l.length;a+=2){var u=l[a],h=l[a+1];u==="style"?TM(r,h):u==="dangerouslySetInnerHTML"?MM(r,h):u==="children"?Gl(r,h):F0(r,u,h,c)}switch(o){case"input":Fm(r,s);break;case"textarea":wM(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ga(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ga(r,!!s.multiple,s.defaultValue,!0):Ga(r,!!s.multiple,s.multiple?[]:"",!1))}r[Jl]=s}catch(y){Pt(t,t.return,y)}}break;case 6:if(mi(e,t),Ai(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Pt(t,t.return,y)}}break;case 3:if(mi(e,t),Ai(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{$l(e.containerInfo)}catch(y){Pt(t,t.return,y)}break;case 4:mi(e,t),Ai(t);break;case 13:mi(e,t),Ai(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(vv=Nt())),i&4&&i1(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(ln=(c=ln)||u,mi(e,t),ln=c):mi(e,t),Ai(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(pe=t,u=t.child;u!==null;){for(h=pe=u;pe!==null;){switch(f=pe,p=f.child,f.tag){case 0:case 11:case 14:case 15:Al(4,f,f.return);break;case 1:Oa(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){Pt(i,n,y)}}break;case 5:Oa(f,f.return);break;case 22:if(f.memoizedState!==null){s1(h);continue}}p!==null?(p.return=f,pe=p):s1(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=EM("display",a))}catch(y){Pt(t,t.return,y)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){Pt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:mi(e,t),Ai(t),i&4&&i1(t);break;case 21:break;default:mi(e,t),Ai(t)}}function Ai(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(qE(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Gl(r,""),i.flags&=-33);var s=n1(t);yg(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=n1(t);_g(t,o,a);break;default:throw Error(ee(161))}}catch(l){Pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fk(t,e,n){pe=t,QE(t)}function QE(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||yu;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||ln;o=yu;var c=ln;if(yu=a,(ln=l)&&!c)for(pe=r;pe!==null;)a=pe,l=a.child,a.tag===22&&a.memoizedState!==null?a1(r):l!==null?(l.return=a,pe=l):a1(r);for(;s!==null;)pe=s,QE(s),s=s.sibling;pe=r,yu=o,ln=c}r1(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):r1(t)}}function r1(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ln||wf(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!ln)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:gi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Vx(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vx(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&$l(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}ln||e.flags&512&&vg(e)}catch(f){Pt(e,e.return,f)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function s1(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function a1(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wf(4,e)}catch(l){Pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Pt(e,r,l)}}var s=e.return;try{vg(e)}catch(l){Pt(e,s,l)}break;case 5:var a=e.return;try{vg(e)}catch(l){Pt(e,a,l)}}}catch(l){Pt(e,e.return,l)}if(e===t){pe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,pe=o;break}pe=e.return}}var dk=Math.ceil,Dh=Mr.ReactCurrentDispatcher,mv=Mr.ReactCurrentOwner,si=Mr.ReactCurrentBatchConfig,Ze=0,Yt=null,kt=null,Qt=0,zn=0,ka=ds(0),Ht=0,rc=null,Zs=0,Sf=0,gv=0,bl=null,Tn=null,vv=0,To=1/0,nr=null,Uh=!1,xg=null,is=null,xu=!1,Kr=null,Oh=0,Rl=0,wg=null,Zu=-1,Ju=0;function yn(){return Ze&6?Nt():Zu!==-1?Zu:Zu=Nt()}function rs(t){return t.mode&1?Ze&2&&Qt!==0?Qt&-Qt:qO.transition!==null?(Ju===0&&(Ju=kM()),Ju):(t=ct,t!==0||(t=window.event,t=t===void 0?16:WM(t.type)),t):1}function Ei(t,e,n,i){if(50<Rl)throw Rl=0,wg=null,Error(ee(185));_c(t,n,i),(!(Ze&2)||t!==Yt)&&(t===Yt&&(!(Ze&2)&&(Sf|=n),Ht===4&&Vr(t,Qt)),In(t,i),n===1&&Ze===0&&!(e.mode&1)&&(To=Nt()+500,_f&&ps()))}function In(t,e){var n=t.callbackNode;qU(t,e);var i=yh(t,t===Yt?Qt:0);if(i===0)n!==null&&mx(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&mx(n),e===1)t.tag===0?KO(o1.bind(null,t)):cE(o1.bind(null,t)),XO(function(){!(Ze&6)&&ps()}),n=null;else{switch(FM(i)){case 1:n=G0;break;case 4:n=UM;break;case 16:n=_h;break;case 536870912:n=OM;break;default:n=_h}n=oT(n,eT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function eT(t,e){if(Zu=-1,Ju=0,Ze&6)throw Error(ee(327));var n=t.callbackNode;if(Ya()&&t.callbackNode!==n)return null;var i=yh(t,t===Yt?Qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=kh(t,i);else{e=i;var r=Ze;Ze|=2;var s=nT();(Yt!==t||Qt!==e)&&(nr=null,To=Nt()+500,zs(t,e));do try{gk();break}catch(o){tT(t,o)}while(!0);nv(),Dh.current=s,Ze=r,kt!==null?e=0:(Yt=null,Qt=0,e=Ht)}if(e!==0){if(e===2&&(r=Ym(t),r!==0&&(i=r,e=Sg(t,r))),e===1)throw n=rc,zs(t,0),Vr(t,i),In(t,Nt()),n;if(e===6)Vr(t,i);else{if(r=t.current.alternate,!(i&30)&&!pk(r)&&(e=kh(t,i),e===2&&(s=Ym(t),s!==0&&(i=s,e=Sg(t,s))),e===1))throw n=rc,zs(t,0),Vr(t,i),In(t,Nt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:As(t,Tn,nr);break;case 3:if(Vr(t,i),(i&130023424)===i&&(e=vv+500-Nt(),10<e)){if(yh(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){yn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ng(As.bind(null,t,Tn,nr),e);break}As(t,Tn,nr);break;case 4:if(Vr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Mi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*dk(i/1960))-i,10<i){t.timeoutHandle=ng(As.bind(null,t,Tn,nr),i);break}As(t,Tn,nr);break;case 5:As(t,Tn,nr);break;default:throw Error(ee(329))}}}return In(t,Nt()),t.callbackNode===n?eT.bind(null,t):null}function Sg(t,e){var n=bl;return t.current.memoizedState.isDehydrated&&(zs(t,e).flags|=256),t=kh(t,e),t!==2&&(e=Tn,Tn=n,e!==null&&Mg(e)),t}function Mg(t){Tn===null?Tn=t:Tn.push.apply(Tn,t)}function pk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Ci(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vr(t,e){for(e&=~gv,e&=~Sf,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Mi(e),i=1<<n;t[n]=-1,e&=~i}}function o1(t){if(Ze&6)throw Error(ee(327));Ya();var e=yh(t,0);if(!(e&1))return In(t,Nt()),null;var n=kh(t,e);if(t.tag!==0&&n===2){var i=Ym(t);i!==0&&(e=i,n=Sg(t,i))}if(n===1)throw n=rc,zs(t,0),Vr(t,e),In(t,Nt()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,As(t,Tn,nr),In(t,Nt()),null}function _v(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(To=Nt()+500,_f&&ps())}}function Js(t){Kr!==null&&Kr.tag===0&&!(Ze&6)&&Ya();var e=Ze;Ze|=1;var n=si.transition,i=ct;try{if(si.transition=null,ct=1,t)return t()}finally{ct=i,si.transition=n,Ze=e,!(Ze&6)&&ps()}}function yv(){zn=ka.current,wt(ka)}function zs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,WO(n)),kt!==null)for(n=kt.return;n!==null;){var i=n;switch(Q0(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Eh();break;case 3:Mo(),wt(Pn),wt(un),lv();break;case 5:ov(i);break;case 4:Mo();break;case 13:wt(Et);break;case 19:wt(Et);break;case 10:iv(i.type._context);break;case 22:case 23:yv()}n=n.return}if(Yt=t,kt=t=ss(t.current,null),Qt=zn=e,Ht=0,rc=null,gv=Sf=Zs=0,Tn=bl=null,Ns!==null){for(e=0;e<Ns.length;e++)if(n=Ns[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Ns=null}return t}function tT(t,e){do{var n=kt;try{if(nv(),Yu.current=Nh,Ih){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ih=!1}if(qs=0,$t=Bt=Ct=null,Cl=!1,tc=0,mv.current=null,n===null||n.return===null){Ht=1,rc=e,kt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Qt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Yx(a);if(p!==null){p.flags&=-257,Kx(p,a,o,s,e),p.mode&1&&$x(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){$x(s,c,e),xv();break e}l=Error(ee(426))}}else if(St&&o.mode&1){var m=Yx(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Kx(m,a,o,s,e),ev(Eo(l,o));break e}}s=l=Eo(l,o),Ht!==4&&(Ht=2),bl===null?bl=[s]:bl.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=FE(s,l,e);Hx(s,d);break e;case 1:o=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(is===null||!is.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=BE(s,o,e);Hx(s,x);break e}}s=s.return}while(s!==null)}rT(n)}catch(A){e=A,kt===n&&n!==null&&(kt=n=n.return);continue}break}while(!0)}function nT(){var t=Dh.current;return Dh.current=Nh,t===null?Nh:t}function xv(){(Ht===0||Ht===3||Ht===2)&&(Ht=4),Yt===null||!(Zs&268435455)&&!(Sf&268435455)||Vr(Yt,Qt)}function kh(t,e){var n=Ze;Ze|=2;var i=nT();(Yt!==t||Qt!==e)&&(nr=null,zs(t,e));do try{mk();break}catch(r){tT(t,r)}while(!0);if(nv(),Ze=n,Dh.current=i,kt!==null)throw Error(ee(261));return Yt=null,Qt=0,Ht}function mk(){for(;kt!==null;)iT(kt)}function gk(){for(;kt!==null&&!HU();)iT(kt)}function iT(t){var e=aT(t.alternate,t,zn);t.memoizedProps=t.pendingProps,e===null?rT(t):kt=e,mv.current=null}function rT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ck(n,e),n!==null){n.flags&=32767,kt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ht=6,kt=null;return}}else if(n=lk(n,e,zn),n!==null){kt=n;return}if(e=e.sibling,e!==null){kt=e;return}kt=e=t}while(e!==null);Ht===0&&(Ht=5)}function As(t,e,n){var i=ct,r=si.transition;try{si.transition=null,ct=1,vk(t,e,n,i)}finally{si.transition=r,ct=i}return null}function vk(t,e,n,i){do Ya();while(Kr!==null);if(Ze&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ZU(t,s),t===Yt&&(kt=Yt=null,Qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xu||(xu=!0,oT(_h,function(){return Ya(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=si.transition,si.transition=null;var a=ct;ct=1;var o=Ze;Ze|=4,mv.current=null,hk(t,n),JE(n,t),kO(eg),xh=!!Qm,eg=Qm=null,t.current=n,fk(n),VU(),Ze=o,ct=a,si.transition=s}else t.current=n;if(xu&&(xu=!1,Kr=t,Oh=r),s=t.pendingLanes,s===0&&(is=null),XU(n.stateNode),In(t,Nt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Uh)throw Uh=!1,t=xg,xg=null,t;return Oh&1&&t.tag!==0&&Ya(),s=t.pendingLanes,s&1?t===wg?Rl++:(Rl=0,wg=t):Rl=0,ps(),null}function Ya(){if(Kr!==null){var t=FM(Oh),e=si.transition,n=ct;try{if(si.transition=null,ct=16>t?16:t,Kr===null)var i=!1;else{if(t=Kr,Kr=null,Oh=0,Ze&6)throw Error(ee(331));var r=Ze;for(Ze|=4,pe=t.current;pe!==null;){var s=pe,a=s.child;if(pe.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(pe=c;pe!==null;){var u=pe;switch(u.tag){case 0:case 11:case 15:Al(8,u,s)}var h=u.child;if(h!==null)h.return=u,pe=h;else for(;pe!==null;){u=pe;var f=u.sibling,p=u.return;if(KE(u),u===c){pe=null;break}if(f!==null){f.return=p,pe=f;break}pe=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}pe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,pe=a;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Al(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,pe=d;break e}pe=s.return}}var _=t.current;for(pe=_;pe!==null;){a=pe;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,pe=v;else e:for(a=_;pe!==null;){if(o=pe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:wf(9,o)}}catch(A){Pt(o,o.return,A)}if(o===a){pe=null;break e}var x=o.sibling;if(x!==null){x.return=o.return,pe=x;break e}pe=o.return}}if(Ze=r,ps(),ki&&typeof ki.onPostCommitFiberRoot=="function")try{ki.onPostCommitFiberRoot(df,t)}catch{}i=!0}return i}finally{ct=n,si.transition=e}}return!1}function l1(t,e,n){e=Eo(n,e),e=FE(t,e,1),t=ns(t,e,1),e=yn(),t!==null&&(_c(t,1,e),In(t,e))}function Pt(t,e,n){if(t.tag===3)l1(t,t,n);else for(;e!==null;){if(e.tag===3){l1(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(is===null||!is.has(i))){t=Eo(n,t),t=BE(e,t,1),e=ns(e,t,1),t=yn(),e!==null&&(_c(e,1,t),In(e,t));break}}e=e.return}}function _k(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=yn(),t.pingedLanes|=t.suspendedLanes&n,Yt===t&&(Qt&n)===n&&(Ht===4||Ht===3&&(Qt&130023424)===Qt&&500>Nt()-vv?zs(t,0):gv|=n),In(t,e)}function sT(t,e){e===0&&(t.mode&1?(e=uu,uu<<=1,!(uu&130023424)&&(uu=4194304)):e=1);var n=yn();t=yr(t,e),t!==null&&(_c(t,e,n),In(t,n))}function yk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),sT(t,n)}function xk(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),sT(t,n)}var aT;aT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pn.current)bn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return bn=!1,ok(t,e,n);bn=!!(t.flags&131072)}else bn=!1,St&&e.flags&1048576&&uE(e,Ah,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;qu(t,e),t=e.pendingProps;var r=xo(e,un.current);$a(e,n),r=uv(null,e,i,t,r,n);var s=hv();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ln(i)?(s=!0,Th(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,sv(e),r.updater=xf,e.stateNode=r,r._reactInternals=e,cg(e,i,t,n),e=fg(null,e,i,!0,s,n)):(e.tag=0,St&&s&&J0(e),pn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(qu(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Sk(i),t=gi(i,t),r){case 0:e=hg(null,e,i,t,n);break e;case 1:e=Jx(null,e,i,t,n);break e;case 11:e=qx(null,e,i,t,n);break e;case 14:e=Zx(null,e,i,gi(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:gi(i,r),hg(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:gi(i,r),Jx(t,e,i,r,n);case 3:e:{if(GE(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,gE(t,e),Ph(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Eo(Error(ee(423)),e),e=Qx(t,e,i,n,r);break e}else if(i!==r){r=Eo(Error(ee(424)),e),e=Qx(t,e,i,n,r);break e}else for(Hn=ts(e.stateNode.containerInfo.firstChild),Wn=e,St=!0,_i=null,n=pE(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wo(),i===r){e=xr(t,e,n);break e}pn(t,e,i,n)}e=e.child}return e;case 5:return vE(e),t===null&&ag(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,tg(i,r)?a=null:s!==null&&tg(i,s)&&(e.flags|=32),VE(t,e),pn(t,e,a,n),e.child;case 6:return t===null&&ag(e),null;case 13:return WE(t,e,n);case 4:return av(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=So(e,null,i,n):pn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:gi(i,r),qx(t,e,i,r,n);case 7:return pn(t,e,e.pendingProps,n),e.child;case 8:return pn(t,e,e.pendingProps.children,n),e.child;case 12:return pn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,dt(bh,i._currentValue),i._currentValue=a,s!==null)if(Ci(s.value,a)){if(s.children===r.children&&!Pn.current){e=xr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=hr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),og(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ee(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),og(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}pn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,$a(e,n),r=oi(r),i=i(r),e.flags|=1,pn(t,e,i,n),e.child;case 14:return i=e.type,r=gi(i,e.pendingProps),r=gi(i.type,r),Zx(t,e,i,r,n);case 15:return zE(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:gi(i,r),qu(t,e),e.tag=1,Ln(i)?(t=!0,Th(e)):t=!1,$a(e,n),kE(e,i,r),cg(e,i,r,n),fg(null,e,i,!0,t,n);case 19:return XE(t,e,n);case 22:return HE(t,e,n)}throw Error(ee(156,e.tag))};function oT(t,e){return DM(t,e)}function wk(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(t,e,n,i){return new wk(t,e,n,i)}function wv(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Sk(t){if(typeof t=="function")return wv(t)?1:0;if(t!=null){if(t=t.$$typeof,t===z0)return 11;if(t===H0)return 14}return 2}function ss(t,e){var n=t.alternate;return n===null?(n=ni(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Qu(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")wv(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Aa:return Hs(n.children,r,s,e);case B0:a=8,r|=8;break;case Nm:return t=ni(12,n,e,r|2),t.elementType=Nm,t.lanes=s,t;case Dm:return t=ni(13,n,e,r),t.elementType=Dm,t.lanes=s,t;case Um:return t=ni(19,n,e,r),t.elementType=Um,t.lanes=s,t;case vM:return Mf(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case mM:a=10;break e;case gM:a=9;break e;case z0:a=11;break e;case H0:a=14;break e;case kr:a=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=ni(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Hs(t,e,n,i){return t=ni(7,t,i,e),t.lanes=n,t}function Mf(t,e,n,i){return t=ni(22,t,i,e),t.elementType=vM,t.lanes=n,t.stateNode={isHidden:!1},t}function Qd(t,e,n){return t=ni(6,t,null,e),t.lanes=n,t}function ep(t,e,n){return e=ni(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Mk(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dd(0),this.expirationTimes=Dd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Sv(t,e,n,i,r,s,a,o,l){return t=new Mk(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ni(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sv(s),t}function Ek(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ca,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function lT(t){if(!t)return us;t=t._reactInternals;e:{if(ta(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(Ln(n))return lE(t,n,e)}return e}function cT(t,e,n,i,r,s,a,o,l){return t=Sv(n,i,!0,t,r,s,a,o,l),t.context=lT(null),n=t.current,i=yn(),r=rs(n),s=hr(i,r),s.callback=e??null,ns(n,s,r),t.current.lanes=r,_c(t,r,i),In(t,i),t}function Ef(t,e,n,i){var r=e.current,s=yn(),a=rs(r);return n=lT(n),e.context===null?e.context=n:e.pendingContext=n,e=hr(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ns(r,e,a),t!==null&&(Ei(t,r,a,s),$u(t,r,a)),a}function Fh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function c1(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Mv(t,e){c1(t,e),(t=t.alternate)&&c1(t,e)}function Tk(){return null}var uT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ev(t){this._internalRoot=t}Tf.prototype.render=Ev.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));Ef(t,e,null,null)};Tf.prototype.unmount=Ev.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Js(function(){Ef(null,t,null,null)}),e[_r]=null}};function Tf(t){this._internalRoot=t}Tf.prototype.unstable_scheduleHydration=function(t){if(t){var e=HM();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hr.length&&e!==0&&e<Hr[n].priority;n++);Hr.splice(n,0,t),n===0&&GM(t)}};function Tv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function u1(){}function Ck(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Fh(a);s.call(c)}}var a=cT(e,i,t,0,null,!1,!1,"",u1);return t._reactRootContainer=a,t[_r]=a.current,ql(t.nodeType===8?t.parentNode:t),Js(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Fh(l);o.call(c)}}var l=Sv(t,0,!1,null,null,!1,!1,"",u1);return t._reactRootContainer=l,t[_r]=l.current,ql(t.nodeType===8?t.parentNode:t),Js(function(){Ef(e,l,n,i)}),l}function Af(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Fh(a);o.call(l)}}Ef(e,a,t,r)}else a=Ck(n,e,t,r,i);return Fh(a)}BM=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=cl(e.pendingLanes);n!==0&&(W0(e,n|1),In(e,Nt()),!(Ze&6)&&(To=Nt()+500,ps()))}break;case 13:Js(function(){var i=yr(t,1);if(i!==null){var r=yn();Ei(i,t,1,r)}}),Mv(t,1)}};X0=function(t){if(t.tag===13){var e=yr(t,134217728);if(e!==null){var n=yn();Ei(e,t,134217728,n)}Mv(t,134217728)}};zM=function(t){if(t.tag===13){var e=rs(t),n=yr(t,e);if(n!==null){var i=yn();Ei(n,t,e,i)}Mv(t,e)}};HM=function(){return ct};VM=function(t,e){var n=ct;try{return ct=t,e()}finally{ct=n}};Xm=function(t,e,n){switch(e){case"input":if(Fm(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=vf(i);if(!r)throw Error(ee(90));yM(i),Fm(i,r)}}}break;case"textarea":wM(t,n);break;case"select":e=n.value,e!=null&&Ga(t,!!n.multiple,e,!1)}};bM=_v;RM=Js;var Ak={usingClientEntryPoint:!1,Events:[xc,La,vf,CM,AM,_v]},el={findFiberByHostInstance:Is,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bk={bundleType:el.bundleType,version:el.version,rendererPackageName:el.rendererPackageName,rendererConfig:el.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=IM(t),t===null?null:t.stateNode},findFiberByHostInstance:el.findFiberByHostInstance||Tk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wu.isDisabled&&wu.supportsFiber)try{df=wu.inject(bk),ki=wu}catch{}}Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ak;Yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tv(e))throw Error(ee(200));return Ek(t,e,null,n)};Yn.createRoot=function(t,e){if(!Tv(t))throw Error(ee(299));var n=!1,i="",r=uT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Sv(t,1,!1,null,null,n,!1,i,r),t[_r]=e.current,ql(t.nodeType===8?t.parentNode:t),new Ev(e)};Yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=IM(e),t=t===null?null:t.stateNode,t};Yn.flushSync=function(t){return Js(t)};Yn.hydrate=function(t,e,n){if(!Cf(e))throw Error(ee(200));return Af(null,t,e,!0,n)};Yn.hydrateRoot=function(t,e,n){if(!Tv(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=uT;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=cT(e,null,t,1,n??null,r,!1,s,a),t[_r]=e.current,ql(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Tf(e)};Yn.render=function(t,e,n){if(!Cf(e))throw Error(ee(200));return Af(null,t,e,!1,n)};Yn.unmountComponentAtNode=function(t){if(!Cf(t))throw Error(ee(40));return t._reactRootContainer?(Js(function(){Af(null,null,t,!1,function(){t._reactRootContainer=null,t[_r]=null})}),!0):!1};Yn.unstable_batchedUpdates=_v;Yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Cf(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return Af(t,e,n,!1,i)};Yn.version="18.3.1-next-f1338f8080-20240426";function hT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hT)}catch(t){console.error(t)}}hT(),hM.exports=Yn;var Rk=hM.exports,h1=Rk;h1.createRoot,h1.hydrateRoot;var Pk=1e-6,ci=typeof Float32Array<"u"?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});function Lk(){var t=new ci(9);return ci!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function Cv(){var t=new ci(16);return ci!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function Er(){var t=new ci(3);return ci!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function Ik(t){var e=t[0],n=t[1],i=t[2];return Math.hypot(e,n,i)}function Eg(t,e,n){var i=new ci(3);return i[0]=t,i[1]=e,i[2]=n,i}function tp(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function Nk(t,e,n,i){return t[0]=e,t[1]=n,t[2]=i,t}function Dk(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t}function fT(t,e){var n=e[0],i=e[1],r=e[2],s=n*n+i*i+r*r;return s>0&&(s=1/Math.sqrt(s)),t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t}function Uk(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function np(t,e,n){var i=e[0],r=e[1],s=e[2],a=n[0],o=n[1],l=n[2];return t[0]=r*l-s*o,t[1]=s*a-i*l,t[2]=i*o-r*a,t}function Ok(t,e,n){var i=n[0],r=n[1],s=n[2],a=n[3],o=e[0],l=e[1],c=e[2],u=r*c-s*l,h=s*o-i*c,f=i*l-r*o,p=r*f-s*h,g=s*u-i*f,y=i*h-r*u,m=a*2;return u*=m,h*=m,f*=m,p*=2,g*=2,y*=2,t[0]=o+u+p,t[1]=l+h+g,t[2]=c+f+y,t}var kk=Ik;(function(){var t=Er();return function(e,n,i,r,s,a){var o,l;for(n||(n=3),i||(i=0),r?l=Math.min(r*n+i,e.length):l=e.length,o=i;o<l;o+=n)t[0]=e[o],t[1]=e[o+1],t[2]=e[o+2],s(t,t,a),e[o]=t[0],e[o+1]=t[1],e[o+2]=t[2];return e}})();function Fk(){var t=new ci(4);return ci!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function Bk(t,e,n,i){var r=new ci(4);return r[0]=t,r[1]=e,r[2]=n,r[3]=i,r}function zk(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function Hk(t,e,n,i,r){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t}function Vk(t,e){var n=e[0],i=e[1],r=e[2],s=e[3],a=n*n+i*i+r*r+s*s;return a>0&&(a=1/Math.sqrt(a)),t[0]=n*a,t[1]=i*a,t[2]=r*a,t[3]=s*a,t}(function(){var t=Fk();return function(e,n,i,r,s,a){var o,l;for(n||(n=4),i||(i=0),r?l=Math.min(r*n+i,e.length):l=e.length,o=i;o<l;o+=n)t[0]=e[o],t[1]=e[o+1],t[2]=e[o+2],t[3]=e[o+3],s(t,t,a),e[o]=t[0],e[o+1]=t[1],e[o+2]=t[2],e[o+3]=t[3];return e}})();function Co(){var t=new ci(4);return ci!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function dT(t,e,n){n=n*.5;var i=Math.sin(n);return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=Math.cos(n),t}function Gk(t,e,n){var i=e[0],r=e[1],s=e[2],a=e[3],o=n[0],l=n[1],c=n[2],u=n[3];return t[0]=i*u+a*o+r*c-s*l,t[1]=r*u+a*l+s*o-i*c,t[2]=s*u+a*c+i*l-r*o,t[3]=a*u-i*o-r*l-s*c,t}function ip(t,e,n,i){var r=e[0],s=e[1],a=e[2],o=e[3],l=n[0],c=n[1],u=n[2],h=n[3],f,p,g,y,m;return p=r*l+s*c+a*u+o*h,p<0&&(p=-p,l=-l,c=-c,u=-u,h=-h),1-p>Pk?(f=Math.acos(p),g=Math.sin(f),y=Math.sin((1-i)*f)/g,m=Math.sin(i*f)/g):(y=1-i,m=i),t[0]=y*r+m*l,t[1]=y*s+m*c,t[2]=y*a+m*u,t[3]=y*o+m*h,t}function Wk(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function Xk(t,e){var n=e[0]+e[4]+e[8],i;if(n>0)i=Math.sqrt(n+1),t[3]=.5*i,i=.5/i,t[0]=(e[5]-e[7])*i,t[1]=(e[6]-e[2])*i,t[2]=(e[1]-e[3])*i;else{var r=0;e[4]>e[0]&&(r=1),e[8]>e[r*3+r]&&(r=2);var s=(r+1)%3,a=(r+2)%3;i=Math.sqrt(e[r*3+r]-e[s*3+s]-e[a*3+a]+1),t[r]=.5*i,i=.5/i,t[3]=(e[s*3+a]-e[a*3+s])*i,t[s]=(e[s*3+r]+e[r*3+s])*i,t[a]=(e[a*3+r]+e[r*3+a])*i}return t}var jk=Bk,rp=zk,f1=Hk,Av=Vk;(function(){var t=Er(),e=Eg(1,0,0),n=Eg(0,1,0);return function(i,r,s){var a=Uk(r,s);return a<-.999999?(np(t,e,r),kk(t)<1e-6&&np(t,n,r),fT(t,t),dT(i,t,Math.PI),i):a>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(np(t,r,s),i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=1+a,Av(i,i))}})();(function(){var t=Co(),e=Co();return function(n,i,r,s,a,o){return ip(t,i,a,o),ip(e,r,s,o),ip(n,t,e,2*o*(1-o)),n}})();(function(){var t=Lk();return function(e,n,i,r){return t[0]=i[0],t[3]=i[1],t[6]=i[2],t[1]=r[0],t[4]=r[1],t[7]=r[2],t[2]=-n[0],t[5]=-n[1],t[8]=-n[2],Av(e,Xk(e,t))}})();class Ka{constructor(e=0,n=0,i=0){this.vec3=Eg(e,n,i),this.tempVec3=Er()}get x(){return this.vec3[0]}set x(e){this.vec3[0]=e}get y(){return this.vec3[1]}set y(e){this.vec3[1]=e}get z(){return this.vec3[2]}set z(e){this.vec3[2]=e}set(e,n,i){return Nk(this.vec3,e,n,i),this}clone(){return new Ka(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}normalize(){return tp(this.tempVec3,this.vec3),fT(this.vec3,this.tempVec3),this}add(e){return tp(this.tempVec3,this.vec3),Dk(this.vec3,this.tempVec3,e.vec3),this}applyQuaternion(e){return tp(this.tempVec3,this.vec3),Ok(this.vec3,this.tempVec3,e.quat),this}}class qa{constructor(e=0,n=0,i=0,r=1){this.quat=jk(e,n,i,r),this.tempQuat=Co()}get x(){return this.quat[0]}set x(e){this.quat[0]=e}get y(){return this.quat[1]}set y(e){this.quat[1]=e}get z(){return this.quat[2]}set z(e){this.quat[2]=e}get w(){return this.quat[3]}set w(e){this.quat[3]=e}set(e,n,i,r){return f1(this.quat,e,n,i,r),this}clone(){return new qa(this.x,this.y,this.z,this.w)}copy(e){return f1(this.quat,e.x,e.y,e.z,e.w),this}normalize(){return rp(this.tempQuat,this.quat),Av(this.quat,this.tempQuat),this}invert(){return rp(this.tempQuat,this.quat),Wk(this.quat,this.tempQuat),this}multiply(e){return rp(this.tempQuat,this.quat),Gk(this.quat,this.tempQuat,e.quat),this}setFromAxisAngle(e,n){return dT(this.quat,e.vec3,n),this}}var sc;(function(t){t.None="",t.Standard="standard",t.XRStandard="xr-standard"})(sc||(sc={}));var Pl;(function(t){t.None="none",t.Left="left",t.Right="right"})(Pl||(Pl={}));var d1;(function(t){t.Gaze="gaze",t.TrackedPointer="tracked-pointer",t.Screen="screen",t.TransientPointer="transient-pointer"})(d1||(d1={}));Pl.Left+"",new Ka(-.25,1.5,-.4),new qa,Pl.Right+"",new Ka(.25,1.5,-.4),new qa,Pl.None+"",new Ka(.25,1.5,-.4),new qa;var p1;(function(t){t.None="none",t.Left="left",t.Right="right"})(p1||(p1={}));Cv();Cv();Cv();var m1;(function(t){t.Viewer="viewer",t.Local="local",t.LocalFloor="local-floor",t.BoundedFloor="bounded-floor",t.Unbounded="unbounded"})(m1||(m1={}));var g1;(function(t){t.Visible="visible",t.VisibleBlurred="visible-blurred",t.Hidden="hidden"})(g1||(g1={}));var Lt;(function(t){t.Inline="inline",t.ImmersiveVR="immersive-vr",t.ImmersiveAR="immersive-ar"})(Lt||(Lt={}));var Hi;(function(t){t.Opaque="opaque",t.AlphaBlend="alpha-blend",t.Additive="additive"})(Hi||(Hi={}));var Ao;(function(t){t.ScreenSpace="screen-space",t.WorldSpace="world-space"})(Ao||(Ao={}));var v1;(function(t){t.Wrist="wrist",t.ThumbMetacarpal="thumb-metacarpal",t.ThumbPhalanxProximal="thumb-phalanx-proximal",t.ThumbPhalanxDistal="thumb-phalanx-distal",t.ThumbTip="thumb-tip",t.IndexFingerMetacarpal="index-finger-metacarpal",t.IndexFingerPhalanxProximal="index-finger-phalanx-proximal",t.IndexFingerPhalanxIntermediate="index-finger-phalanx-intermediate",t.IndexFingerPhalanxDistal="index-finger-phalanx-distal",t.IndexFingerTip="index-finger-tip",t.MiddleFingerMetacarpal="middle-finger-metacarpal",t.MiddleFingerPhalanxProximal="middle-finger-phalanx-proximal",t.MiddleFingerPhalanxIntermediate="middle-finger-phalanx-intermediate",t.MiddleFingerPhalanxDistal="middle-finger-phalanx-distal",t.MiddleFingerTip="middle-finger-tip",t.RingFingerMetacarpal="ring-finger-metacarpal",t.RingFingerPhalanxProximal="ring-finger-phalanx-proximal",t.RingFingerPhalanxIntermediate="ring-finger-phalanx-intermediate",t.RingFingerPhalanxDistal="ring-finger-phalanx-distal",t.RingFingerTip="ring-finger-tip",t.PinkyFingerMetacarpal="pinky-finger-metacarpal",t.PinkyFingerPhalanxProximal="pinky-finger-phalanx-proximal",t.PinkyFingerPhalanxIntermediate="pinky-finger-phalanx-intermediate",t.PinkyFingerPhalanxDistal="pinky-finger-phalanx-distal",t.PinkyFingerTip="pinky-finger-tip"})(v1||(v1={}));sc.None;Er();Co();Er();Er();Co();Er();Er();Co();Er();var ke;(function(t){t.Viewer="viewer",t.Local="local",t.LocalFloor="local-floor",t.BoundedFloor="bounded-floor",t.Unbounded="unbounded",t.DomOverlay="dom-overlay",t.Anchors="anchors",t.PlaneDetection="plane-detection",t.MeshDetection="mesh-detection",t.HitTest="hit-test",t.HandTracking="hand-tracking",t.DepthSensing="depth-sensing"})(ke||(ke={}));Math.PI/2,new Ka(0,1.6,0),new qa;const bf={mapping:sc.XRStandard,buttons:[{id:"trigger",type:"analog",eventTrigger:"select"},{id:"squeeze",type:"analog",eventTrigger:"squeeze"},null,{id:"thumbstick",type:"binary"},{id:"x-button",type:"binary"},{id:"y-button",type:"binary"},{id:"thumbrest",type:"binary"}],axes:[null,null,{id:"thumbstick",type:"x-axis"},{id:"thumbstick",type:"y-axis"}]},Rf={mapping:sc.XRStandard,buttons:[{id:"trigger",type:"analog",eventTrigger:"select"},{id:"squeeze",type:"analog",eventTrigger:"squeeze"},null,{id:"thumbstick",type:"binary"},{id:"a-button",type:"binary"},{id:"b-button",type:"binary"},{id:"thumbrest",type:"binary"}],axes:[null,null,{id:"thumbstick",type:"x-axis"},{id:"thumbstick",type:"y-axis"}]},$k={profileId:"oculus-touch-v2",fallbackProfileIds:["oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:bf,gripOffsetMatrix:[.9925461411476135,4673031295254759e-24,-.12186938524246216,0,.08617470413446426,.7071065306663513,.7018362283706665,0,.0861746296286583,-.70710688829422,.7018358707427979,0,-.003979847766458988,-.01585787907242775,.04964185878634453,1],numHapticActuators:1},right:{gamepad:Rf,gripOffsetMatrix:[.9925461411476135,3688163374704345e-23,.12186937034130096,0,-.08617469668388367,.7071066498756409,.7018361687660217,0,-.0861746147274971,-.7071068286895752,.7018359899520874,0,.003979853354394436,-.01585787907242775,.04964182525873184,1],numHapticActuators:1}}},Yk={profileId:"oculus-touch-v3",fallbackProfileIds:["oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:bf,gripOffsetMatrix:[.9925461411476135,20823669899527886e-24,-.12186937034130096,0,.08617465198040009,.7071067094802856,.701836109161377,0,.08617466688156128,-.7071067690849304,.7018360495567322,0,-.003979838453233242,-.015857907012104988,.04964181408286095,1],numHapticActuators:1},right:{gamepad:Rf,gripOffsetMatrix:[.9925461411476135,-8329467959811154e-23,.12186941504478455,0,-.08617465943098068,.7071066498756409,.7018361687660217,0,-.08617471158504486,-.7071068286895752,.7018359303474426,0,.003979798872023821,-.015857888385653496,.049641866236925125,1],numHapticActuators:1}}},Kk={profileId:"meta-quest-touch-pro",fallbackProfileIds:["oculus-touch-v2","oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:bf,gripOffsetMatrix:[.9925461411476135,-15779937356796836e-24,-.12186935544013977,0,.08617467433214188,.7071067094802856,.701836109161377,0,.0861746296286583,-.7071067690849304,.7018360495567322,0,-.003979836590588093,-.015857847407460213,.049641840159893036,1],numHapticActuators:3},right:{gamepad:Rf,gripOffsetMatrix:[.9925461411476135,9267653311439972e-26,.12186937034130096,0,-.08617467433214188,.7071067094802856,.7018361687660217,0,-.08617464452981949,-.7071067690849304,.7018360495567322,0,.003979847766458988,-.01585782691836357,.04964186251163483,1],numHapticActuators:3}}},qk={profileId:"meta-quest-touch-plus",fallbackProfileIds:["oculus-touch-v3","oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:bf,gripOffsetMatrix:[.9925461411476135,10736208366779465e-24,-.12186933308839798,0,.08617459982633591,.70710688829422,.7018360495567322,0,.08617466688156128,-.7071067094802856,.7018362283706665,0,-.003979803062975407,-.015857873484492302,.04964187368750572,1],numHapticActuators:1},right:{gamepad:Rf,gripOffsetMatrix:[.9925461411476135,-26238110351073374e-24,.12186934053897858,0,-.0861746147274971,.7071067690849304,.7018360495567322,0,-.08617465943098068,-.7071067094802856,.701836109161377,0,.003979838453233242,-.015857869759202003,.04964182525873184,1],numHapticActuators:1}}};Lt.Inline,Lt.ImmersiveVR,Lt.ImmersiveAR,ke.Viewer,ke.Local,ke.LocalFloor,ke.BoundedFloor,ke.Unbounded,ke.Anchors,ke.PlaneDetection,ke.HandTracking,Lt.ImmersiveVR+"",Hi.Opaque,Lt.ImmersiveAR+"",Hi.AlphaBlend,Ao.WorldSpace;Lt.Inline,Lt.ImmersiveVR,Lt.ImmersiveAR,ke.Viewer,ke.Local,ke.LocalFloor,ke.BoundedFloor,ke.Unbounded,ke.Anchors,ke.PlaneDetection,ke.MeshDetection,ke.HitTest,ke.HandTracking,Lt.ImmersiveVR+"",Hi.Opaque,Lt.ImmersiveAR+"",Hi.AlphaBlend,Ao.WorldSpace;Lt.Inline,Lt.ImmersiveVR,Lt.ImmersiveAR,ke.Viewer,ke.Local,ke.LocalFloor,ke.BoundedFloor,ke.Unbounded,ke.Anchors,ke.PlaneDetection,ke.MeshDetection,ke.HitTest,ke.HandTracking,Lt.ImmersiveVR+"",Hi.Opaque,Lt.ImmersiveAR+"",Hi.AlphaBlend,Ao.WorldSpace;Lt.Inline,Lt.ImmersiveVR,Lt.ImmersiveAR,ke.Viewer,ke.Local,ke.LocalFloor,ke.BoundedFloor,ke.Unbounded,ke.Anchors,ke.PlaneDetection,ke.MeshDetection,ke.HitTest,ke.HandTracking,ke.DepthSensing,Lt.ImmersiveVR+"",Hi.Opaque,Lt.ImmersiveAR+"",Hi.AlphaBlend,Ao.WorldSpace;class Zk{static createButton(e,n={}){const i=document.createElement("button");function r(c){let u=null;async function h(g){g.addEventListener("end",f),await e.xr.setSession(g),i.textContent="STOP XR",u=g}function f(){u.removeEventListener("end",f),i.textContent="START XR",u=null}i.style.display="",i.style.cursor="pointer",i.style.left="calc(50% - 50px)",i.style.width="100px",i.textContent="START XR";const p={...n,optionalFeatures:["local-floor","bounded-floor","layers",...n.optionalFeatures||[]]};i.onmouseenter=function(){i.style.opacity="1.0"},i.onmouseleave=function(){i.style.opacity="0.5"},i.onclick=function(){u===null?navigator.xr.requestSession(c,p).then(h):(u.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession(c,p).then(h).catch(g=>{console.warn(g)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession(c,p).then(h).catch(g=>{console.warn(g)})}function s(){i.style.display="",i.style.cursor="auto",i.style.left="calc(50% - 75px)",i.style.width="150px",i.onmouseenter=null,i.onmouseleave=null,i.onclick=null}function a(){s(),i.textContent="XR NOT SUPPORTED"}function o(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),i.textContent="XR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return i.id="XRButton",i.style.display="none",l(i),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?r("immersive-ar"):navigator.xr.isSessionSupported("immersive-vr").then(function(u){u?r("immersive-vr"):a()}).catch(o)}).catch(o),i;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}}const _1={type:"change"},bv={type:"start"},pT={type:"end"},Su=new bo,y1=new rr,Jk=Math.cos(70*H1.DEG2RAD),Ft=new P,En=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sp=1e-6;class Qk extends hI{constructor(e,n=null){super(e,n),this.state=ut.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fa.ROTATE,MIDDLE:Fa.DOLLY,RIGHT:Fa.PAN},this.touches={ONE:xa.ROTATE,TWO:xa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Ti,this._lastTargetPosition=new P,this._quat=new Ti().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new cy,this._sphericalDelta=new cy,this._scale=1,this._panOffset=new P,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new P,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tF.bind(this),this._onPointerDown=eF.bind(this),this._onPointerUp=nF.bind(this),this._onContextMenu=cF.bind(this),this._onMouseWheel=sF.bind(this),this._onKeyDown=aF.bind(this),this._onTouchStart=oF.bind(this),this._onTouchMove=lF.bind(this),this._onMouseDown=iF.bind(this),this._onMouseMove=rF.bind(this),this._interceptControlDown=uF.bind(this),this._interceptControlUp=hF.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_1),this.update(),this.state=ut.NONE}update(e=null){const n=this.object.position;Ft.copy(n).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=En:i>Math.PI&&(i-=En),r<-Math.PI?r+=En:r>Math.PI&&(r-=En),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ft.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Su.origin.copy(this.object.position),Su.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Su.direction))<Jk?this.object.lookAt(this.target):(y1.setFromNormalAndCoplanarPoint(this.object.up,this.target),Su.intersectPlane(y1,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>sp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sp||this._lastTargetPosition.distanceToSquared(this.target)>sp?(this.dispatchEvent(_1),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?En/60*this.autoRotateSpeed*e:En/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Ft.setFromMatrixColumn(n,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,n){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(n,1):(Ft.setFromMatrixColumn(n,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ft.copy(r).sub(this.target);let s=Ft.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(En*this._rotateDelta.x/n.clientHeight),this._rotateUp(En*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(En*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-En*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(En*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-En*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(En*this._rotateDelta.x/n.clientHeight),this._rotateUp(En*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+n.x)*.5,o=(e.pageY+n.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ce,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function eF(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function tF(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function nF(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pT),this.state=ut.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function iF(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Fa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=ut.DOLLY;break;case Fa.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ut.ROTATE}break;case Fa.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(bv)}function rF(t){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function sF(t){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(t.preventDefault(),this.dispatchEvent(bv),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(pT))}function aF(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function oF(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case xa.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=ut.TOUCH_ROTATE;break;case xa.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case xa.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=ut.TOUCH_DOLLY_PAN;break;case xa.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(bv)}function lF(t){switch(this._trackPointer(t),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=ut.NONE}}function cF(t){this.enabled!==!1&&t.preventDefault()}function uF(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hF(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function x1(t,e){if(e===tC)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),t;if(e===qp||e===F1){let n=t.getIndex();if(n===null){const a=[],o=t.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);t.setIndex(a),n=t.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),t}const i=n.count-2,r=[];if(e===qp)for(let a=1;a<=i;a++)r.push(n.getX(0)),r.push(n.getX(a)),r.push(n.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(r.push(n.getX(a)),r.push(n.getX(a+1)),r.push(n.getX(a+2))):(r.push(n.getX(a+2)),r.push(n.getX(a+1)),r.push(n.getX(a)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=t.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),t}class fF extends hs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new vF(n)}),this.register(function(n){return new _F(n)}),this.register(function(n){return new AF(n)}),this.register(function(n){return new bF(n)}),this.register(function(n){return new RF(n)}),this.register(function(n){return new xF(n)}),this.register(function(n){return new wF(n)}),this.register(function(n){return new SF(n)}),this.register(function(n){return new MF(n)}),this.register(function(n){return new gF(n)}),this.register(function(n){return new EF(n)}),this.register(function(n){return new yF(n)}),this.register(function(n){return new CF(n)}),this.register(function(n){return new TF(n)}),this.register(function(n){return new pF(n)}),this.register(function(n){return new PF(n)}),this.register(function(n){return new LF(n)})}load(e,n,i,r){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=ml.extractUrlBase(e);a=ml.resolveURL(c,this.path)}else a=ml.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new uc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){n(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,i,r){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===mT){try{a[We.KHR_BINARY_GLTF]=new IF(e)}catch(h){r&&r(h);return}s=JSON.parse(a[We.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new XF(s,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case We.KHR_MATERIALS_UNLIT:a[h]=new mF;break;case We.KHR_DRACO_MESH_COMPRESSION:a[h]=new NF(s,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:a[h]=new DF;break;case We.KHR_MESH_QUANTIZATION:a[h]=new UF;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,r)}parseAsync(e,n){const i=this;return new Promise(function(r,s){i.parse(e,n,r,s)})}}function dF(){let t={};return{get:function(e){return t[e]},add:function(e,n){t[e]=n},remove:function(e){delete t[e]},removeAll:function(){t={}}}}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class pF{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,n=this.parser.json.nodes||[];for(let i=0,r=n.length;i<r;i++){const s=n[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const n=this.parser,i="light:"+e;let r=n.cache.get(i);if(r)return r;const s=n.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Re(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],en);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new $L(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new XL(u),c.distance=h;break;case"spot":c=new GL(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ir(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=n.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),n.cache.add(i,r),r}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){const n=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(n.cache,o,l)})}}class mF{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return Wr}extendParams(e,n,i){const r=[];e.color=new Re(1,1,1),e.opacity=1;const s=n.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],en),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,mn))}return Promise.all(r)}}class gF{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(n.emissiveIntensity=s),Promise.resolve()}}class vF{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Wi}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(n.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(i.assignTexture(n,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(n,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(n,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new ce(o,o)}return Promise.all(s)}}class _F{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Wi}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return n.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class yF{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Wi}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(n.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(i.assignTexture(n,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(n.iridescenceIOR=a.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(n,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class xF{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Wi}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];n.sheenColor=new Re(0,0,0),n.sheenRoughness=0,n.sheen=1;const a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;n.sheenColor.setRGB(o[0],o[1],o[2],en)}return a.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(i.assignTexture(n,"sheenColorMap",a.sheenColorTexture,mn)),a.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(n,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class wF{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Wi}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(n.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(i.assignTexture(n,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class SF{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Wi}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];n.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(i.assignTexture(n,"thicknessMap",a.thicknessTexture)),n.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return n.attenuationColor=new Re().setRGB(o[0],o[1],o[2],en),Promise.all(s)}}class MF{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Wi}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return n.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class EF{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Wi}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];n.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(i.assignTexture(n,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return n.specularColor=new Re().setRGB(o[0],o[1],o[2],en),a.specularColorTexture!==void 0&&s.push(i.assignTexture(n,"specularColorMap",a.specularColorTexture,mn)),Promise.all(s)}}class TF{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Wi}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return n.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(i.assignTexture(n,"bumpMap",a.bumpTexture)),Promise.all(s)}}class CF{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Wi}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(n.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(n.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(i.assignTexture(n,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class AF{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=n.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,s.source,a)}}class bF{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const n=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[n])return null;const a=s.extensions[n],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(n)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const n=new Image;n.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",n.onload=n.onerror=function(){e(n.height===1)}})),this.isSupported}}class RF{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const n=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[n])return null;const a=s.extensions[n],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(n)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const n=new Image;n.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",n.onload=n.onerror=function(){e(n.height===1)}})),this.isSupported}}class PF{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const n=this.parser.json,i=n.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,f,r.mode,r.filter),p})})}else return null}}class LF{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const n=this.parser.json,i=n.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=n.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Jn.TRIANGLES&&c.mode!==Jn.TRIANGLE_STRIP&&c.mode!==Jn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(const g of h){const y=new De,m=new P,d=new Ti,_=new P(1,1,1),v=new YP(g.geometry,g.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,x),l.SCALE&&_.fromBufferAttribute(l.SCALE,x),v.setMatrixAt(x,y.compose(m,d,_));for(const x in l)if(x==="_COLOR_0"){const A=l[x];v.instanceColor=new Qp(A.array,A.itemSize,A.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);ht.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),p.push(v)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const mT="glTF",tl=12,w1={JSON:1313821514,BIN:5130562};class IF{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(e,0,tl),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==mT)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-tl,s=new DataView(e,tl);let a=0;for(;a<r;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===w1.JSON){const c=new Uint8Array(e,tl+a,o);this.content=i.decode(c)}else if(l===w1.BIN){const c=tl+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class NF{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=Tg[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Tg[u]||u.toLowerCase();if(a[u]!==void 0){const f=i.accessors[e.attributes[u]],p=Za[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return n.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){r.decodeDracoFile(u,function(p){for(const g in p.attributes){const y=p.attributes[g],m=l[g];m!==void 0&&(y.normalized=m)}h(p)},o,c,en,f)})})}}class DF{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){return(n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),e.needsUpdate=!0),e}}class UF{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class gT extends cc{constructor(e,n,i,r){super(e,n,i,r)}copySampleValue_(e){const n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)n[a]=i[s+a];return n}interpolate_(e,n,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=r-n,h=(i-n)/u,f=h*h,p=f*h,g=e*c,y=g-c,m=-2*p+3*f,d=p-f,_=1-m,v=d-f+h;for(let x=0;x!==o;x++){const A=a[y+x+o],C=a[y+x+l]*u,M=a[g+x+o],R=a[g+x]*u;s[x]=_*A+v*C+m*M+d*R}return s}}const OF=new Ti;class kF extends gT{interpolate_(e,n,i,r){const s=super.interpolate_(e,n,i,r);return OF.fromArray(s).normalize().toArray(s),s}}const Jn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Za={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},S1={9728:vn,9729:Cn,9984:b1,9985:Eu,9986:nl,9987:or},M1={33071:Gr,33648:eh,10497:no},ap={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Tg={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ur={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},FF={CUBICSPLINE:void 0,LINEAR:Nl,STEP:Il},op={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function BF(t){return t.DefaultMaterial===void 0&&(t.DefaultMaterial=new Kg({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:fr})),t.DefaultMaterial}function Es(t,e,n){for(const i in n.extensions)t[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=n.extensions[i])}function ir(t,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(t.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function zF(t,e,n){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(t);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?n.getDependency("accessor",h.POSITION):t.attributes.position;a.push(f)}if(r){const f=h.NORMAL!==void 0?n.getDependency("accessor",h.NORMAL):t.attributes.normal;o.push(f)}if(s){const f=h.COLOR_0!==void 0?n.getDependency("accessor",h.COLOR_0):t.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return i&&(t.morphAttributes.position=u),r&&(t.morphAttributes.normal=h),s&&(t.morphAttributes.color=f),t.morphTargetsRelative=!0,t})}function HF(t,e){if(t.updateMorphTargets(),e.weights!==void 0)for(let n=0,i=e.weights.length;n<i;n++)t.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){const n=e.extras.targetNames;if(t.morphTargetInfluences.length===n.length){t.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++)t.morphTargetDictionary[n[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function VF(t){let e;const n=t.extensions&&t.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+lp(n.attributes):e=t.indices+":"+lp(t.attributes)+":"+t.mode,t.targets!==void 0)for(let i=0,r=t.targets.length;i<r;i++)e+=":"+lp(t.targets[i]);return e}function lp(t){let e="";const n=Object.keys(t).sort();for(let i=0,r=n.length;i<r;i++)e+=n[i]+":"+t[n[i]]+";";return e}function Cg(t){switch(t){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function GF(t){return t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0?"image/jpeg":t.search(/\.webp($|\?)/i)>0||t.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const WF=new De;class XF{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new dF,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&a<98?this.textureLoader=new _w(this.options.manager):this.textureLoader=new KL(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new uc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:i,userData:{}};return Es(s,o,r),ir(o,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(n)}_markDefs(){const e=this.json.nodes||[],n=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=n.length;r<s;r++){const a=n[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,i){if(e.refs[n]<=1)return i;const r=i.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(i,r),r.name+="_instance_"+e.uses[n]++,r}_invokeOne(e){const n=Object.values(this.plugins);n.push(this);for(let i=0;i<n.length;i++){const r=e(n[i]);if(r)return r}return null}_invokeAll(e){const n=Object.values(this.plugins);n.unshift(this);const i=[];for(let r=0;r<n.length;r++){const s=e(n[r]);s&&i.push(s)}return i}getDependency(e,n){const i=e+":"+n;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(n);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(n)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(n)});break;case"accessor":r=this.loadAccessor(n);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(n)});break;case"buffer":r=this.loadBuffer(n);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(n)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(n)});break;case"skin":r=this.loadSkin(n);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(n)});break;case"camera":r=this.loadCamera(n);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,n)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let n=this.cache.get(e);if(!n){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(r.map(function(s,a){return i.getDependency(e,a)})),this.cache.add(e,n)}return n}loadBuffer(e){const n=this.json.buffers[e],i=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){i.load(ml.resolveURL(n.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){const n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(i){const r=n.byteLength||0,s=n.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const n=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=ap[r.type],o=Za[r.componentType],l=r.normalized===!0,c=new o(r.count*a);return Promise.resolve(new cn(c,a,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=ap[r.type],c=Za[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let y,m;if(p&&p!==h){const d=Math.floor(f/p),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+d+":"+r.count;let v=n.cache.get(_);v||(y=new c(o,d*p,r.count*p/u),v=new GP(y,p/u),n.cache.add(_,v)),m=new Vg(v,l,f%p/u,g)}else o===null?y=new c(r.count*l):y=new c(o,f,r.count*l),m=new cn(y,l,g);if(r.sparse!==void 0){const d=ap.SCALAR,_=Za[r.sparse.indices.componentType],v=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,A=new _(a[1],v,r.sparse.count*d),C=new c(a[2],x,r.sparse.count*l);o!==null&&(m=new cn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let M=0,R=A.length;M<R;M++){const H=A[M];if(m.setX(H,C[M*l]),l>=2&&m.setY(H,C[M*l+1]),l>=3&&m.setZ(H,C[M*l+2]),l>=4&&m.setW(H,C[M*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const n=this.json,i=this.options,s=n.textures[e].source,a=n.images[s];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,n,i){const r=this,s=this.json,a=s.textures[e],o=s.images[n],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(n,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(s.samplers||{})[a.sampler]||{};return u.magFilter=S1[f.magFilter]||Cn,u.minFilter=S1[f.minFilter]||or,u.wrapS=M1[f.wrapS]||no,u.wrapT=M1[f.wrapT]||no,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,n){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=r.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let g=f;n.isImageBitmapLoader===!0&&(g=function(y){const m=new Vt(y);m.needsUpdate=!0,f(m)}),n.load(ml.resolveURL(h,s.path),g,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),ir(h,a),h.userData.mimeType=a.mimeType||GF(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,n,i,r){const s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[We.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),e[n]=a,a})}assignFinalMaterial(e){const n=e.geometry;let i=e.material;const r=n.attributes.tangent===void 0,s=n.attributes.color!==void 0,a=n.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new ow,Oi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new aw,Oi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(r||s||a){let o="ClonedMaterial:"+i.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Kg}loadMaterial(e){const n=this,i=this.json,r=this.extensions,s=i.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[We.KHR_MATERIALS_UNLIT]){const h=r[We.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,s,n))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new Re(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],en),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(n.assignTexture(o,"map",h.baseColorTexture,mn)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(n.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(n.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Ii);const u=s.alphaMode||op.OPAQUE;if(u===op.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===op.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Wr&&(c.push(n.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ce(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==Wr&&(c.push(n.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Wr){const h=s.emissiveFactor;o.emissive=new Re().setRGB(h[0],h[1],h[2],en)}return s.emissiveTexture!==void 0&&a!==Wr&&c.push(n.assignTexture(o,"emissiveMap",s.emissiveTexture,mn)),Promise.all(c).then(function(){const h=new a(o);return s.name&&(h.name=s.name),ir(h,s),n.associations.set(h,{materials:e}),s.extensions&&Es(r,h,s),h})}createUniqueName(e){const n=lt.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){const n=this,i=this.extensions,r=this.primitiveCache;function s(o){return i[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,n).then(function(l){return E1(l,o,n)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=VF(c),h=r[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[We.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=E1(new ui,c,n),r[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const n=this,i=this.json,r=this.extensions,s=i.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?BF(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(n.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const y=u[p],m=a[p];let d;const _=c[p];if(m.mode===Jn.TRIANGLES||m.mode===Jn.TRIANGLE_STRIP||m.mode===Jn.TRIANGLE_FAN||m.mode===void 0)d=s.isSkinnedMesh===!0?new XP(y,_):new _n(y,_),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===Jn.TRIANGLE_STRIP?d.geometry=x1(d.geometry,F1):m.mode===Jn.TRIANGLE_FAN&&(d.geometry=x1(d.geometry,qp));else if(m.mode===Jn.LINES)d=new KP(y,_);else if(m.mode===Jn.LINE_STRIP)d=new Wg(y,_);else if(m.mode===Jn.LINE_LOOP)d=new qP(y,_);else if(m.mode===Jn.POINTS)d=new ZP(y,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&HF(d,s),d.name=n.createUniqueName(s.name||"mesh_"+e),ir(d,s),m.extensions&&Es(r,d,m),n.assignFinalMaterial(d),h.push(d)}for(let p=0,g=h.length;p<g;p++)n.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&Es(r,h[0],s),h[0];const f=new Xr;s.extensions&&Es(r,f,s),n.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let n;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?n=new gn(H1.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(n=new zg(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(n.name=this.createUniqueName(i.name)),ir(n,i),Promise.resolve(n)}loadSkin(e){const n=this.json.skins[e],i=[];for(let r=0,s=n.joints.length;r<s;r++)i.push(this._loadNodeShallow(n.joints[r]));return n.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",n.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),a=r,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const f=new De;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[c])}return new Gg(o,l)})}loadAnimation(e){const n=this.json,i=this,r=n.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){const p=r.channels[h],g=r.samplers[p.sampler],y=p.target,m=y.node,d=r.parameters!==void 0?r.parameters[g.input]:g.input,_=r.parameters!==void 0?r.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",_)),c.push(g),u.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],p=h[1],g=h[2],y=h[3],m=h[4],d=[];for(let _=0,v=f.length;_<v;_++){const x=f[_],A=p[_],C=g[_],M=y[_],R=m[_];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const H=i._createAnimationTracks(x,A,C,M,R);if(H)for(let w=0;w<H.length;w++)d.push(H[w])}return new UL(s,void 0,d)})}createNodeMesh(e){const n=this.json,i=this,r=n.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const a=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){const n=this.json,i=this,r=n.nodes[e],s=i._loadNodeShallow(e),a=[],o=r.children||[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,WF)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const n=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=n.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new rw:c.length>1?u=new Xr:c.length===1?u=c[0]:u=new ht,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=a),ir(u,s),s.extensions&&Es(i,u,s),s.matrix!==void 0){const h=new De;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const n=this.extensions,i=this.json.scenes[e],r=this,s=new Xr;i.name&&(s.name=r.createUniqueName(i.name)),ir(s,i),i.extensions&&Es(n,s,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(r.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,p]of r.associations)(f instanceof Oi||f instanceof Vt)&&h.set(f,p);return u.traverse(f=>{const p=r.associations.get(f);p!=null&&h.set(f,p)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,n,i,r,s){const a=[],o=e.name?e.name:e.uuid,l=[];Ur[s.path]===Ur.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(Ur[s.path]){case Ur.weights:c=oo;break;case Ur.rotation:c=lo;break;case Ur.position:case Ur.scale:c=co;break;default:switch(i.itemSize){case 1:c=oo;break;case 2:case 3:default:c=co;break}break}const u=r.interpolation!==void 0?FF[r.interpolation]:Nl,h=this._getArrayFromAccessor(i);for(let f=0,p=l.length;f<p;f++){const g=new c(l[f]+"."+Ur[s.path],n.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){const i=Cg(n.constructor),r=new Float32Array(n.length);for(let s=0,a=n.length;s<a;s++)r[s]=n[s]*i;n=r}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof lo?kF:gT;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function jF(t,e,n){const i=e.attributes,r=new wr;if(i.POSITION!==void 0){const o=n.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){const u=Cg(Za[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new P,l=new P;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=n.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){const y=Cg(Za[f.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}t.boundingBox=r;const a=new Vi;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,t.boundingSphere=a}function E1(t,e,n){const i=e.attributes,r=[];function s(a,o){return n.getDependency("accessor",a).then(function(l){t.setAttribute(o,l)})}for(const a in i){const o=Tg[a]||a.toLowerCase();o in t.attributes||r.push(s(i[a],o))}if(e.indices!==void 0&&!t.index){const a=n.getDependency("accessor",e.indices).then(function(o){t.setIndex(o)});r.push(a)}return et.workingColorSpace!==en&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),ir(t,e),jF(t,e,n),Promise.all(r).then(function(){return e.targets!==void 0?zF(t,e.targets,n):t})}class $F extends hs{constructor(e){super(e)}load(e,n,i,r){const s=this,a=new uc(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){const l=s.parse(JSON.parse(o));n&&n(l)},i,r)}parse(e){return new YF(e)}}class YF{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,n=100){const i=[],r=KF(e,n,this.data);for(let s=0,a=r.length;s<a;s++)i.push(...r[s].toShapes());return i}}function KF(t,e,n){const i=Array.from(t),r=e/n.resolution,s=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*r,a=[];let o=0,l=0;for(let c=0;c<i.length;c++){const u=i[c];if(u===`
`)o=0,l-=s;else{const h=qF(u,r,o,l,n);o+=h.offsetX,a.push(h.path)}}return a}function qF(t,e,n,i,r){const s=r.glyphs[t]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+t+'" does not exists in font family '+r.familyName+".");return}const a=new uI;let o,l,c,u,h,f,p,g;if(s.o){const y=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,d=y.length;m<d;)switch(y[m++]){case"m":o=y[m++]*e+n,l=y[m++]*e+i,a.moveTo(o,l);break;case"l":o=y[m++]*e+n,l=y[m++]*e+i,a.lineTo(o,l);break;case"q":c=y[m++]*e+n,u=y[m++]*e+i,h=y[m++]*e+n,f=y[m++]*e+i,a.quadraticCurveTo(h,f,c,u);break;case"b":c=y[m++]*e+n,u=y[m++]*e+i,h=y[m++]*e+n,f=y[m++]*e+i,p=y[m++]*e+n,g=y[m++]*e+i,a.bezierCurveTo(h,f,p,g,c,u);break}}return{offsetX:s.ha*e,path:a}}const ZF=new $F,JF=ZF.load("assets/Roboto-msdf.json"),QF={Frontal_Lobe:"Lobe Frontal : <br> Situé à l'avant du cerveau, le lobe frontal est impliqué dans des fonctions complexes comme la prise de décision, le raisonnement, la planification, le mouvement volontaire et le contrôle des impulsions.Il joue aussi un rôle crucial dans la régulation des émotions, la personnalité, et le langage(surtout dans l'hémisphère gauche avec l'aire de Broca).<br> Vous pouvez écouter la musique du menu ou lancer le jeu musical pour stimuler cette partie du cerveau.",Parietal_Lobe:"Lobe Pariétal : <br> Situé au sommet du cerveau, le lobe pariétal traite principalement les informations sensorielles provenant de différentes parties du corps, comme la température, la douleur, le toucher et la position spatiale.Il est essentiel pour l'intégration sensorielle et la perception spatiale, contribuant également aux mouvements complexes et à la reconnaissance des objets.<br> Vous pouvez jouer au jeu du trésor pour stimuler cette partie du cerveau.",Temporal_Lobe:"Lobe Temporal : <br> Ce lobe, situé au niveau des tempes, est principalement responsable de la perception auditive et de la compréhension du langage(notamment via l'aire de Wernicke). Il joue également un rôle dans la mémoire à long terme et est impliqué dans la reconnaissance des visages et des émotions.<br> Vous pouvez jouer au jeu des cartes pour stimuler cette partie du cerveau.",Occipital_Lobe:"Lobe Occipital : <br> Localisé à l'arrière du cerveau, le lobe occipital est principalement dédié au traitement des informations visuelles. Il reçoit les signaux en provenance des yeux et les interprète, nous permettant ainsi de percevoir et d'identifier les formes, les couleurs, les mouvements et les objets dans notre environnement.<br> Vous pouvez jouer au jeu des couleurs pour stimuler cette partie du cerveau."};function e4(t,e,n){console.log("making panel");const i=new HI({width:100,height:50,padding:.05,justifyContent:"center",textAlign:"left",fontFamily:JF});return i.add(new dy({content:t,fontSize:.1}),new dy({content:e,fontSize:.08})),i.position.set(n.position.x+1,n.position.y+1,n.position.z+1),i.rotation.x=-.55,Br.add(i),console.log("making text"),i}let ar,Mu=null,cp=!1,up=[];async function t4(t){}await t4();let Ja,Br,Bn,hp,Bh,Ag;const fp=new xw;let zh=!0;const n4=(t,e)=>{if(e){const n=Bn.xr.getReferenceSpace(),i=Bn.xr.getSession();let r=fp.getElapsedTime();if(zh||(r=fp.oldTime),zh&&dn&&(dn.rotation.y=r/2,r=fp.getElapsedTime()),cp===!1&&(i.requestReferenceSpace("viewer").then(function(s){i.requestHitTestSource({space:s}).then(function(a){Mu=a})}),i.addEventListener("end",function(){cp=!1,Mu=null}),cp=!0),Mu){const s=e.getHitTestResults(Mu);if(s.length){const a=s[0];ar.visible=!0,ar.matrix.fromArray(a.getPose(n).transform.matrix)}else ar.visible=!1}}Bn.render(Br,Ja)},i4=()=>{let t=!1;Br=new VP;const e=window.innerWidth/window.innerHeight;Ja=new gn(75,e,.1,10),Ja.position.set(0,1.6,3);const n=new YL(16777215,1);Br.add(n);const i=new HL(16777215,12303359,3);i.position.set(.5,1,.25),Br.add(i),Bn=new HP({antialias:!0,alpha:!0}),Bn.setPixelRatio(window.devicePixelRatio),Bn.setSize(window.innerWidth,window.innerHeight),Bn.setAnimationLoop(n4),Bn.xr.enabled=!0,document.body.appendChild(Bn.domElement);const r=Zk.createButton(Bn,{});r.style.backgroundColor="blue",document.body.appendChild(r);var s=new qL,a=new JL,o=new QL(a);s.load("assets/audios/background_sound.mp3",function(f){o.setBuffer(f),o.setLoop(!0),o.setVolume(1),o.play()});const l=new Qk(Ja,Bn.domElement);l.target.set(0,1.6,0),l.update();let c=new vw;c.onProgress=function(f){f=="big_brain.glb"&&console.log("Loading "+f)};let u=new fF(c).setPath("assets/models/");const h=f=>{if(ar.visible){t==!1&&(dn=u.load("big_brain.glb",r4),t=!0);let p=null;const g=f.target,y=s4(g);if(console.log(y),y.length>0){const d=y[0].object;g.userData.selected=d,p=d.parent,console.log("J'ai intercepté un object "+p.name)}if(p){let m=e4(p.name,QF[p.name],dn);console.log(m),console.log("brain"),console.log(dn.position),up.push(p),zh=!1,p.scale.set(p.scale.x+.1,p.scale.y+.1,p.scale.z+.1)}else zh=!0,up.forEach(m=>{m.scale.set(m.scale.x-.1,m.scale.y-.1,m.scale.z-.1)}),up=[];g.userData.targetRayMode=f.data.targetRayMode}};hp=Bn.xr.getController(0),hp.addEventListener("select",h),Br.add(hp),Bh=new Xr,Br.add(Bh),ar=new _n(new Yg(.15,.2,32).rotateX(-Math.PI/2),new Wr),ar.matrixAutoUpdate=!1,ar.visible=!1,Br.add(ar),Ag=new cI,window.addEventListener("resize",a4,!1)};i4();let dn;function r4(t){if(dn=t.scene,dn!=null)return console.log("Model loaded:  "+dn),dn.scale.set(.1,.1,.1),ar.matrix.decompose(dn.position,dn.quaternion,dn.scale),Bh.add(dn),console.log(dn),dn;console.log("Load FAILED.  ")}function s4(t){return t.updateMatrixWorld(),Ag.setFromXRController(t),Ag.intersectObjects(Bh.children,!0)}function a4(){Ja.aspect=window.innerWidth/window.innerHeight,Ja.updateProjectionMatrix(),Bn.setSize(window.innerWidth,window.innerHeight)}
//# sourceMappingURL=index-CNbRgwmp.js.map
