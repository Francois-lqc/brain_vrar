var TT=Object.defineProperty;var CT=(t,e,n)=>e in t?TT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Bv=(t,e,n)=>CT(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pg="169",zo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},So={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},AT=0,zv=1,bT=2,b1=1,RT=2,tr=3,pr=0,Rn=1,Ni=2,Zr=0,Ho=1,Hv=2,Vv=3,Gv=4,PT=5,Rs=100,LT=101,IT=102,NT=103,DT=104,UT=200,OT=201,kT=202,FT=203,pp=204,mp=205,BT=206,zT=207,HT=208,VT=209,GT=210,WT=211,XT=212,jT=213,$T=214,gp=0,vp=1,_p=2,ta=3,yp=4,xp=5,wp=6,Sp=7,R1=0,YT=1,KT=2,Jr=0,qT=1,ZT=2,JT=3,QT=4,eC=5,tC=6,nC=7,Wv="attached",iC="detached",P1=300,na=301,ia=302,Mp=303,Ep=304,Gh=306,ra=1e3,Xr=1001,nh=1002,yn=1003,L1=1004,sl=1005,hn=1006,Cu=1007,lr=1008,mr=1009,I1=1010,N1=1011,Dl=1012,Lg=1013,Gs=1014,Si=1015,cc=1016,Ig=1017,Ng=1018,sa=1020,D1=35902,U1=1021,O1=1022,ni=1023,k1=1024,F1=1025,Vo=1026,oa=1027,Dg=1028,Ug=1029,B1=1030,Og=1031,kg=1033,Au=33776,bu=33777,Ru=33778,Pu=33779,Tp=35840,Cp=35841,Ap=35842,bp=35843,Rp=36196,Pp=37492,Lp=37496,Ip=37808,Np=37809,Dp=37810,Up=37811,Op=37812,kp=37813,Fp=37814,Bp=37815,zp=37816,Hp=37817,Vp=37818,Gp=37819,Wp=37820,Xp=37821,Lu=36492,jp=36494,$p=36495,z1=36283,Yp=36284,Kp=36285,qp=36286,Ul=2300,Ol=2301,Of=2302,Xv=2400,jv=2401,$v=2402,rC=2500,sC=0,H1=1,Zp=2,oC=3200,aC=3201,V1=0,lC=1,Vr="",ln="srgb",en="srgb-linear",Fg="display-p3",Wh="display-p3-linear",ih="linear",_t="srgb",rh="rec709",sh="p3",ro=7680,Yv=519,cC=512,uC=513,hC=514,G1=515,fC=516,dC=517,pC=518,mC=519,Jp=35044,Kv="300 es",cr=2e3,oh=2001;class eo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qv=1234567;const pl=Math.PI/180,aa=180/Math.PI;function ri(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[t&255]+nn[t>>8&255]+nn[t>>16&255]+nn[t>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function zt(t,e,n){return Math.max(e,Math.min(n,t))}function Bg(t,e){return(t%e+e)%e}function gC(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function vC(t,e,n){return t!==e?(n-t)/(e-t):0}function ml(t,e,n){return(1-n)*t+n*e}function _C(t,e,n,i){return ml(t,e,1-Math.exp(-n*i))}function yC(t,e=1){return e-Math.abs(Bg(t,e*2)-e)}function xC(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function wC(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function SC(t,e){return t+Math.floor(Math.random()*(e-t+1))}function MC(t,e){return t+Math.random()*(e-t)}function EC(t){return t*(.5-Math.random())}function TC(t){t!==void 0&&(qv=t);let e=qv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function CC(t){return t*pl}function AC(t){return t*aa}function bC(t){return(t&t-1)===0&&t!==0}function RC(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function PC(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function LC(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),d=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*h,a*c);break;case"YZY":t.set(l*h,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*h,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*d,a*c);break;case"YXY":t.set(l*d,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function xi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function at(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const W1={DEG2RAD:pl,RAD2DEG:aa,generateUUID:ri,clamp:zt,euclideanModulo:Bg,mapLinear:gC,inverseLerp:vC,lerp:ml,damp:_C,pingpong:yC,smoothstep:xC,smootherstep:wC,randInt:SC,randFloat:MC,randFloatSpread:EC,seededRandom:TC,degToRad:CC,radToDeg:AC,isPowerOfTwo:bC,ceilPowerOfTwo:RC,floorPowerOfTwo:PC,setQuaternionFromProperEuler:LC,normalize:at,denormalize:xi};class ce{constructor(e=0,n=0){ce.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,n,i,r,s,o,a,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],y=r[1],v=r[4],x=r[7],A=r[2],C=r[5],M=r[8];return s[0]=o*_+a*y+l*A,s[3]=o*m+a*v+l*C,s[6]=o*p+a*x+l*M,s[1]=c*_+u*y+f*A,s[4]=c*m+u*v+f*C,s[7]=c*p+u*x+f*M,s[2]=h*_+d*y+g*A,s[5]=h*m+d*v+g*C,s[8]=h*p+d*x+g*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=n*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=d*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(kf.makeScale(e,n)),this}rotate(e){return this.premultiply(kf.makeRotation(-e)),this}translate(e,n){return this.premultiply(kf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kf=new ze;function X1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function kl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function IC(){const t=kl("canvas");return t.style.display="block",t}const Zv={};function Iu(t){t in Zv||(Zv[t]=!0,console.warn(t))}function NC(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function DC(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function UC(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Jv=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qv=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),za={[en]:{transfer:ih,primaries:rh,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ln]:{transfer:_t,primaries:rh,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Wh]:{transfer:ih,primaries:sh,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Qv),fromReference:t=>t.applyMatrix3(Jv)},[Fg]:{transfer:_t,primaries:sh,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Qv),fromReference:t=>t.applyMatrix3(Jv).convertLinearToSRGB()}},OC=new Set([en,Wh]),et={enabled:!0,_workingColorSpace:en,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!OC.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=za[e].toReference,r=za[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return za[t].primaries},getTransfer:function(t){return t===Vr?ih:za[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(za[e].luminanceCoefficients)}};function Go(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ff(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let so;class kC{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{so===void 0&&(so=kl("canvas")),so.width=e.width,so.height=e.height;const i=so.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=so}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=kl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Go(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Go(n[i]/255)*255):n[i]=Go(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FC=0;class j1{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FC++}),this.uuid=ri(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Bf(r[o].image)):s.push(Bf(r[o]))}else s=Bf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Bf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?kC.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BC=0;class Vt extends eo{constructor(e=Vt.DEFAULT_IMAGE,n=Vt.DEFAULT_MAPPING,i=Xr,r=Xr,s=hn,o=lr,a=ni,l=mr,c=Vt.DEFAULT_ANISOTROPY,u=Vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BC++}),this.uuid=ri(),this.name="",this.source=new j1(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==P1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ra:e.x=e.x-Math.floor(e.x);break;case Xr:e.x=e.x<0?0:1;break;case nh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ra:e.y=e.y-Math.floor(e.y);break;case Xr:e.y=e.y<0?0:1;break;case nh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=P1;Vt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,n=0,i=0,r=1){nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,x=(d+1)/2,A=(p+1)/2,C=(u+h)/4,M=(f+_)/4,R=(g+m)/4;return v>x&&v>A?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=M/i):x>A?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=C/r,s=R/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=M/s,r=R/s),this.set(i,r,s,n),this}let y=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zC extends eo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new nt(0,0,e,n),this.scissorTest=!1,this.viewport=new nt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Vt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new j1(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ws extends zC{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class $1 extends Vt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class HC extends Vt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Ci=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=d,e[n+2]=g,e[n+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const A=Math.sqrt(v),C=Math.atan2(A,p*y);m=Math.sin(m*C)/A,a=Math.sin(a*C)/A}const x=a*y;if(l=l*m+h*x,c=c*m+d*x,u=u*m+g*x,f=f*m+_*x,m===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*d-c*h,e[n+1]=l*g+u*h+c*f-a*d,e[n+2]=c*g+u*d+a*h-l*f,e[n+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-n;return this._w=d*o+n*this._w,this._x=d*i+n*this._x,this._y=d*r+n*this._y,this._z=d*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class Y1{constructor(e=0,n=0,i=0){Y1.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(e_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(e_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zf.copy(this).projectOnVector(e),this.sub(zf)}reflect(e){return this.sub(zf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const zf=new P,e_=new Ci;class Mr{constructor(e=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(di.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(di.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=di.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,di):di.fromBufferAttribute(s,o),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cc.copy(i.boundingBox)),Cc.applyMatrix4(e.matrixWorld),this.union(Cc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ha),Ac.subVectors(this.max,Ha),oo.subVectors(e.a,Ha),ao.subVectors(e.b,Ha),lo.subVectors(e.c,Ha),br.subVectors(ao,oo),Rr.subVectors(lo,ao),vs.subVectors(oo,lo);let n=[0,-br.z,br.y,0,-Rr.z,Rr.y,0,-vs.z,vs.y,br.z,0,-br.x,Rr.z,0,-Rr.x,vs.z,0,-vs.x,-br.y,br.x,0,-Rr.y,Rr.x,0,-vs.y,vs.x,0];return!Hf(n,oo,ao,lo,Ac)||(n=[1,0,0,0,1,0,0,0,1],!Hf(n,oo,ao,lo,Ac))?!1:(bc.crossVectors(br,Rr),n=[bc.x,bc.y,bc.z],Hf(n,oo,ao,lo,Ac))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yi=[new P,new P,new P,new P,new P,new P,new P,new P],di=new P,Cc=new Mr,oo=new P,ao=new P,lo=new P,br=new P,Rr=new P,vs=new P,Ha=new P,Ac=new P,bc=new P,_s=new P;function Hf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){_s.fromArray(t,s);const a=r.x*Math.abs(_s.x)+r.y*Math.abs(_s.y)+r.z*Math.abs(_s.z),l=e.dot(_s),c=n.dot(_s),u=i.dot(_s);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const VC=new Mr,Va=new P,Vf=new P;class Gi{constructor(e=new P,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):VC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Va.subVectors(e,this.center);const n=Va.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Va,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Va.copy(e.center).add(Vf)),this.expandByPoint(Va.copy(e.center).sub(Vf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new P,Gf=new P,Rc=new P,Pr=new P,Wf=new P,Pc=new P,Xf=new P;class Ra{constructor(e=new P,n=new P(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,n),Ki.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Gf.copy(e).add(n).multiplyScalar(.5),Rc.copy(n).sub(e).normalize(),Pr.copy(this.origin).sub(Gf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Rc),a=Pr.dot(this.direction),l=-Pr.dot(Rc),c=Pr.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Gf).addScaledVector(Rc,h),d}intersectSphere(e,n){Ki.subVectors(e.center,this.origin);const i=Ki.dot(this.direction),r=Ki.dot(Ki)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,n,i,r,s){Wf.subVectors(n,e),Pc.subVectors(i,e),Xf.crossVectors(Wf,Pc);let o=this.direction.dot(Xf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pr.subVectors(this.origin,e);const l=a*this.direction.dot(Pc.crossVectors(Pr,Pc));if(l<0)return null;const c=a*this.direction.dot(Wf.cross(Pr));if(c<0||l+c>o)return null;const u=-a*Pr.dot(Xf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(e,n,i,r,s,o,a,l,c,u,f,h,d,g,_,m){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,d,g,_,m)}set(e,n,i,r,s,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/co.setFromMatrixColumn(e,0).length(),s=1/co.setFromMatrixColumn(e,1).length(),o=1/co.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=d+g*c,n[5]=h-_*c,n[9]=-a*l,n[2]=_-h*c,n[6]=g+d*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;n[0]=h+_*a,n[4]=g*a-d,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=d*a-g,n[6]=_+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;n[0]=h-_*a,n[4]=-o*f,n[8]=g+d*a,n[1]=d+g*a,n[5]=o*u,n[9]=_-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;n[0]=l*u,n[4]=g*c-d,n[8]=h*c+_,n[1]=l*f,n[5]=_*c+h,n[9]=d*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=_-h*f,n[8]=g*f+d,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=d*f+g,n[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+_,n[5]=o*u,n[9]=d*f-g,n[2]=g*f-d,n[6]=a*u,n[10]=_*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GC,e,WC)}lookAt(e,n,i){const r=this.elements;return On.subVectors(e,n),On.lengthSq()===0&&(On.z=1),On.normalize(),Lr.crossVectors(i,On),Lr.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Lr.crossVectors(i,On)),Lr.normalize(),Lc.crossVectors(On,Lr),r[0]=Lr.x,r[4]=Lc.x,r[8]=On.x,r[1]=Lr.y,r[5]=Lc.y,r[9]=On.y,r[2]=Lr.z,r[6]=Lc.z,r[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],v=i[7],x=i[11],A=i[15],C=r[0],M=r[4],R=r[8],H=r[12],w=r[1],T=r[5],V=r[9],B=r[13],W=r[2],Z=r[6],z=r[10],te=r[14],I=r[3],j=r[7],K=r[11],ne=r[15];return s[0]=o*C+a*w+l*W+c*I,s[4]=o*M+a*T+l*Z+c*j,s[8]=o*R+a*V+l*z+c*K,s[12]=o*H+a*B+l*te+c*ne,s[1]=u*C+f*w+h*W+d*I,s[5]=u*M+f*T+h*Z+d*j,s[9]=u*R+f*V+h*z+d*K,s[13]=u*H+f*B+h*te+d*ne,s[2]=g*C+_*w+m*W+p*I,s[6]=g*M+_*T+m*Z+p*j,s[10]=g*R+_*V+m*z+p*K,s[14]=g*H+_*B+m*te+p*ne,s[3]=y*C+v*w+x*W+A*I,s[7]=y*M+v*T+x*Z+A*j,s[11]=y*R+v*V+x*z+A*K,s[15]=y*H+v*B+x*te+A*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+_*(+n*l*d-n*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+n*c*f-n*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-n*l*f+n*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,v=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,x=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,A=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,C=n*y+i*v+r*x+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/C;return e[0]=y*M,e[1]=(_*h*s-f*m*s-_*r*d+i*m*d+f*r*p-i*h*p)*M,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*M,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*M,e[4]=v*M,e[5]=(u*m*s-g*h*s+g*r*d-n*m*d-u*r*p+n*h*p)*M,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*p-n*l*p)*M,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*d+n*l*d)*M,e[8]=x*M,e[9]=(g*f*s-u*_*s-g*i*d+n*_*d+u*i*p-n*f*p)*M,e[10]=(o*_*s-g*a*s+g*i*c-n*_*c-o*i*p+n*a*p)*M,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*d-n*a*d)*M,e[12]=A*M,e[13]=(u*_*r-g*f*r+g*i*h-n*_*h-u*i*m+n*f*m)*M,e[14]=(g*a*r-o*_*r-g*i*l+n*_*l+o*i*m-n*a*m)*M,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*M,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,m=o*f,p=a*f,y=l*c,v=l*u,x=l*f,A=i.x,C=i.y,M=i.z;return r[0]=(1-(_+p))*A,r[1]=(d+x)*A,r[2]=(g-v)*A,r[3]=0,r[4]=(d-x)*C,r[5]=(1-(h+p))*C,r[6]=(m+y)*C,r[7]=0,r[8]=(g+v)*M,r[9]=(m-y)*M,r[10]=(1-(h+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=co.set(r[0],r[1],r[2]).length();const o=co.set(r[4],r[5],r[6]).length(),a=co.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],pi.copy(this);const c=1/s,u=1/o,f=1/a;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=u,pi.elements[5]*=u,pi.elements[6]*=u,pi.elements[8]*=f,pi.elements[9]*=f,pi.elements[10]*=f,n.setFromRotationMatrix(pi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=cr){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let d,g;if(a===cr)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===oh)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=cr){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),h=(n+e)*c,d=(i+r)*u;let g,_;if(a===cr)g=(o+s)*f,_=-2*f;else if(a===oh)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const co=new P,pi=new De,GC=new P(0,0,0),WC=new P(1,1,1),Lr=new P,Lc=new P,On=new P,t_=new De,n_=new Ci;class zi{constructor(e=0,n=0,i=0,r=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(n){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return t_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(t_,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return n_.setFromEuler(this),this.setFromQuaternion(n_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";let zg=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},XC=0;const i_=new P,uo=new Ci,qi=new De,Ic=new P,Ga=new P,jC=new P,$C=new Ci,r_=new P(1,0,0),s_=new P(0,1,0),o_=new P(0,0,1),a_={type:"added"},YC={type:"removed"},ho={type:"childadded",child:null},jf={type:"childremoved",child:null};class ht extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XC++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new P,n=new zi,i=new Ci,r=new P(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new De},normalMatrix:{value:new ze}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return uo.setFromAxisAngle(e,n),this.quaternion.multiply(uo),this}rotateOnWorldAxis(e,n){return uo.setFromAxisAngle(e,n),this.quaternion.premultiply(uo),this}rotateX(e){return this.rotateOnAxis(r_,e)}rotateY(e){return this.rotateOnAxis(s_,e)}rotateZ(e){return this.rotateOnAxis(o_,e)}translateOnAxis(e,n){return i_.copy(e).applyQuaternion(this.quaternion),this.position.add(i_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(r_,e)}translateY(e){return this.translateOnAxis(s_,e)}translateZ(e){return this.translateOnAxis(o_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ic.copy(e):Ic.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Ga,Ic,this.up):qi.lookAt(Ic,Ga,this.up),this.quaternion.setFromRotationMatrix(qi),r&&(qi.extractRotation(r.matrixWorld),uo.setFromRotationMatrix(qi),this.quaternion.premultiply(uo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(a_),ho.child=e,this.dispatchEvent(ho),ho.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(YC),jf.child=e,this.dispatchEvent(jf),jf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(a_),ho.child=e,this.dispatchEvent(ho),ho.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,jC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,$C,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ht.DEFAULT_UP=new P(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new P,Zi=new P,$f=new P,Ji=new P,fo=new P,po=new P,l_=new P,Yf=new P,Kf=new P,qf=new P,Zf=new nt,Jf=new nt,Qf=new nt;class wi{constructor(e=new P,n=new P,i=new P){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),mi.subVectors(e,n),r.cross(mi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){mi.subVectors(r,n),Zi.subVectors(i,n),$f.subVectors(e,n);const o=mi.dot(mi),a=mi.dot(Zi),l=mi.dot($f),c=Zi.dot(Zi),u=Zi.dot($f),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ji.x),l.addScaledVector(o,Ji.y),l.addScaledVector(a,Ji.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Zf.setScalar(0),Jf.setScalar(0),Qf.setScalar(0),Zf.fromBufferAttribute(e,n),Jf.fromBufferAttribute(e,i),Qf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Zf,s.x),o.addScaledVector(Jf,s.y),o.addScaledVector(Qf,s.z),o}static isFrontFacing(e,n,i,r){return mi.subVectors(i,n),Zi.subVectors(e,n),mi.cross(Zi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),mi.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return wi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return wi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;fo.subVectors(r,i),po.subVectors(s,i),Yf.subVectors(e,i);const l=fo.dot(Yf),c=po.dot(Yf);if(l<=0&&c<=0)return n.copy(i);Kf.subVectors(e,r);const u=fo.dot(Kf),f=po.dot(Kf);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(fo,o);qf.subVectors(e,s);const d=fo.dot(qf),g=po.dot(qf);if(g>=0&&d<=g)return n.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(po,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return l_.subVectors(s,r),a=(f-u)/(f-u+(d-g)),n.copy(r).addScaledVector(l_,a);const p=1/(m+_+h);return o=_*p,a=h*p,n.copy(i).addScaledVector(fo,o).addScaledVector(po,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const K1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},Nc={h:0,s:0,l:0};function ed(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class be{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=Bg(e,1),n=zt(n,0,1),i=zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ed(o,s,e+1/3),this.g=ed(o,s,e),this.b=ed(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=ln){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ln){const i=K1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Go(e.r),this.g=Go(e.g),this.b=Go(e.b),this}copyLinearToSRGB(e){return this.r=Ff(e.r),this.g=Ff(e.g),this.b=Ff(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return et.fromWorkingColorSpace(rn.copy(this),e),Math.round(zt(rn.r*255,0,255))*65536+Math.round(zt(rn.g*255,0,255))*256+Math.round(zt(rn.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(rn.copy(this),n);const i=rn.r,r=rn.g,s=rn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=ln){et.fromWorkingColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,r=rn.b;return e!==ln?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+n,Ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ir),e.getHSL(Nc);const i=ml(Ir.h,Nc.h,n),r=ml(Ir.s,Nc.s,n),s=ml(Ir.l,Nc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new be;be.NAMES=K1;let KC=0;class ki extends eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KC++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=Ho,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pp,this.blendDst=mp,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ho&&(i.blending=this.blending),this.side!==pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pp&&(i.blendSrc=this.blendSrc),this.blendDst!==mp&&(i.blendDst=this.blendDst),this.blendEquation!==Rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ta&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ro&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ro&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ro&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ur extends ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=R1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new P,Dc=new ce;class dn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Jp,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Dc.fromBufferAttribute(this,n),Dc.applyMatrix3(e),this.setXY(n,Dc.x,Dc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=xi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=at(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=xi(n,this.array)),n}setX(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=xi(n,this.array)),n}setY(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=xi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=xi(n,this.array)),n}setW(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jp&&(e.usage=this.usage),e}}class q1 extends dn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Z1 extends dn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class si extends dn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let qC=0;const Jn=new De,td=new ht,mo=new P,kn=new Mr,Wa=new Mr,Xt=new P;class hi extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qC++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(X1(e)?Z1:q1)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,n,i){return Jn.makeTranslation(e,n,i),this.applyMatrix4(Jn),this}scale(e,n,i){return Jn.makeScale(e,n,i),this.applyMatrix4(Jn),this}lookAt(e){return td.lookAt(e),td.updateMatrix(),this.applyMatrix4(td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mo).negate(),this.translate(mo.x,mo.y,mo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new si(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];kn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Wa.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(kn.min,Wa.min),kn.expandByPoint(Xt),Xt.addVectors(kn.max,Wa.max),kn.expandByPoint(Xt)):(kn.expandByPoint(Wa.min),kn.expandByPoint(Wa.max))}kn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Xt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Xt.fromBufferAttribute(a,c),l&&(mo.fromBufferAttribute(e,c),Xt.add(mo)),r=Math.max(r,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new P,l[R]=new P;const c=new P,u=new P,f=new P,h=new ce,d=new ce,g=new ce,_=new P,m=new P;function p(R,H,w){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,H),f.fromBufferAttribute(i,w),h.fromBufferAttribute(s,R),d.fromBufferAttribute(s,H),g.fromBufferAttribute(s,w),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const T=1/(d.x*g.y-g.x*d.y);isFinite(T)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(T),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(T),a[R].add(_),a[H].add(_),a[w].add(_),l[R].add(m),l[H].add(m),l[w].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,H=y.length;R<H;++R){const w=y[R],T=w.start,V=w.count;for(let B=T,W=T+V;B<W;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const v=new P,x=new P,A=new P,C=new P;function M(R){A.fromBufferAttribute(r,R),C.copy(A);const H=a[R];v.copy(H),v.sub(A.multiplyScalar(A.dot(H))).normalize(),x.crossVectors(C,H);const T=x.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,T)}for(let R=0,H=y.length;R<H;++R){const w=y[R],T=w.start,V=w.count;for(let B=T,W=T+V;B<W;B+=3)M(e.getX(B+0)),M(e.getX(B+1)),M(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new P,s=new P,o=new P,a=new P,l=new P,c=new P,u=new P,f=new P;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=n.count;h<d;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Xt.fromBufferAttribute(e,n),Xt.normalize(),e.setXYZ(n,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new dn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new hi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const c_=new De,ys=new Ra,Uc=new Gi,u_=new P,Oc=new P,kc=new P,Fc=new P,nd=new P,Bc=new P,h_=new P,zc=new P;class fn extends ht{constructor(e=new hi,n=new ur){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Bc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(nd.fromBufferAttribute(f,e),o?Bc.addScaledVector(nd,u):Bc.addScaledVector(nd.sub(n),u))}n.add(Bc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Uc.copy(i.boundingSphere),Uc.applyMatrix4(s),ys.copy(e.ray).recast(e.near),!(Uc.containsPoint(ys.origin)===!1&&(ys.intersectSphere(Uc,u_)===null||ys.origin.distanceToSquared(u_)>(e.far-e.near)**2))&&(c_.copy(s).invert(),ys.copy(e.ray).applyMatrix4(c_),!(i.boundingBox!==null&&ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ys)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,A=v;x<A;x+=3){const C=a.getX(x),M=a.getX(x+1),R=a.getX(x+2);r=Hc(this,p,e,i,c,u,f,C,M,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);r=Hc(this,o,e,i,c,u,f,y,v,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,A=v;x<A;x+=3){const C=x,M=x+1,R=x+2;r=Hc(this,p,e,i,c,u,f,C,M,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=m,v=m+1,x=m+2;r=Hc(this,o,e,i,c,u,f,y,v,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function ZC(t,e,n,i,r,s,o,a){let l;if(e.side===Rn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===pr,a),l===null)return null;zc.copy(a),zc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(zc);return c<n.near||c>n.far?null:{distance:c,point:zc.clone(),object:t}}function Hc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Oc),t.getVertexPosition(l,kc),t.getVertexPosition(c,Fc);const u=ZC(t,e,n,i,Oc,kc,Fc,h_);if(u){const f=new P;wi.getBarycoord(h_,Oc,kc,Fc,f),r&&(u.uv=wi.getInterpolatedAttribute(r,a,l,c,f,new ce)),s&&(u.uv1=wi.getInterpolatedAttribute(s,a,l,c,f,new ce)),o&&(u.normal=wi.getInterpolatedAttribute(o,a,l,c,f,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new P,materialIndex:0};wi.getNormal(Oc,kc,Fc,h.normal),u.face=h,u.barycoord=f}return u}class uc extends hi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new si(c,3)),this.setAttribute("normal",new si(u,3)),this.setAttribute("uv",new si(f,2));function g(_,m,p,y,v,x,A,C,M,R,H){const w=x/M,T=A/R,V=x/2,B=A/2,W=C/2,Z=M+1,z=R+1;let te=0,I=0;const j=new P;for(let K=0;K<z;K++){const ne=K*T-B;for(let xe=0;xe<Z;xe++){const He=xe*w-V;j[_]=He*y,j[m]=ne*v,j[p]=W,c.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[p]=C>0?1:-1,u.push(j.x,j.y,j.z),f.push(xe/M),f.push(1-K/R),te+=1}}for(let K=0;K<R;K++)for(let ne=0;ne<M;ne++){const xe=h+ne+Z*K,He=h+ne+Z*(K+1),X=h+(ne+1)+Z*(K+1),J=h+(ne+1)+Z*K;l.push(xe,He,J),l.push(He,X,J),I+=6}a.addGroup(d,I,H),d+=I,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function la(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function gn(t){const e={};for(let n=0;n<t.length;n++){const i=la(t[n]);for(const r in i)e[r]=i[r]}return e}function JC(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function J1(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const QC={clone:la,merge:gn};var eA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gr extends ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eA,this.fragmentShader=tA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=la(e.uniforms),this.uniformsGroups=JC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Q1 extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=cr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nr=new P,f_=new ce,d_=new ce;class _n extends Q1{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=aa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return aa*2*Math.atan(Math.tan(pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,n){return this.getViewBounds(e,f_,d_),n.subVectors(d_,f_)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(pl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const go=-90,vo=1;class nA extends ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(go,vo,e,n);r.layers=this.layers,this.add(r);const s=new _n(go,vo,e,n);s.layers=this.layers,this.add(s);const o=new _n(go,vo,e,n);o.layers=this.layers,this.add(o);const a=new _n(go,vo,e,n);a.layers=this.layers,this.add(a);const l=new _n(go,vo,e,n);l.layers=this.layers,this.add(l);const c=new _n(go,vo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===cr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===oh)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ew extends Vt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:na,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iA extends Ws{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ew(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:hn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new uc(5,5,5),s=new gr({name:"CubemapFromEquirect",uniforms:la(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:Zr});s.uniforms.tEquirect.value=n;const o=new fn(r,s),a=n.minFilter;return n.minFilter===lr&&(n.minFilter=hn),new nA(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const id=new P,rA=new P,sA=new ze;class sr{constructor(e=new P(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=id.subVectors(i,n).cross(rA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(id),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||sA.getNormalMatrix(e),r=this.coplanarPoint(id).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new Gi,Vc=new P;class Hg{constructor(e=new sr,n=new sr,i=new sr,r=new sr,s=new sr,o=new sr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=cr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],y=r[13],v=r[14],x=r[15];if(i[0].setComponents(l-s,h-c,m-d,x-p).normalize(),i[1].setComponents(l+s,h+c,m+d,x+p).normalize(),i[2].setComponents(l+o,h+u,m+g,x+y).normalize(),i[3].setComponents(l-o,h-u,m-g,x-y).normalize(),i[4].setComponents(l-a,h-f,m-_,x-v).normalize(),n===cr)i[5].setComponents(l+a,h+f,m+_,x+v).normalize();else if(n===oh)i[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){return xs.center.set(0,0,0),xs.radius=.7071067811865476,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Vc.x=r.normal.x>0?e.max.x:e.min.x,Vc.y=r.normal.y>0?e.max.y:e.min.y,Vc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tw(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function oA(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=t.SHORT;else if(c instanceof Uint32Array)d=t.UNSIGNED_INT;else if(c instanceof Int32Array)d=t.INT;else if(c instanceof Int8Array)d=t.BYTE;else if(c instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Pa extends hi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*h-o;for(let v=0;v<c;v++){const x=v*f-s;g.push(x,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const v=y+c*p,x=y+c*(p+1),A=y+1+c*(p+1),C=y+1+c*p;d.push(v,x,C),d.push(x,A,C)}this.setIndex(d),this.setAttribute("position",new si(g,3)),this.setAttribute("normal",new si(_,3)),this.setAttribute("uv",new si(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.width,e.height,e.widthSegments,e.heightSegments)}}var aA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lA=`#ifdef USE_ALPHAHASH
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
#endif`,cA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dA=`#ifdef USE_AOMAP
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
#endif`,pA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mA=`#ifdef USE_BATCHING
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
#endif`,gA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_A=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xA=`#ifdef USE_IRIDESCENCE
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
#endif`,wA=`#ifdef USE_BUMPMAP
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
#endif`,SA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,MA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,EA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,RA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,PA=`#define PI 3.141592653589793
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
} // validated`,LA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,IA=`vec3 transformedNormal = objectNormal;
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
#endif`,NA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kA="gl_FragColor = linearToOutputTexel( gl_FragColor );",FA=`
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
}`,BA=`#ifdef USE_ENVMAP
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
#endif`,zA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HA=`#ifdef USE_ENVMAP
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
#endif`,VA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GA=`#ifdef USE_ENVMAP
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
#endif`,WA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$A=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YA=`#ifdef USE_GRADIENTMAP
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
}`,KA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JA=`uniform bool receiveShadow;
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
#endif`,QA=`#ifdef USE_ENVMAP
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
#endif`,eb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rb=`PhysicalMaterial material;
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
#endif`,sb=`struct PhysicalMaterial {
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
}`,ob=`
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
#endif`,ab=`#if defined( RE_IndirectDiffuse )
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
#endif`,lb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ub=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,db=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gb=`#if defined( USE_POINTS_UV )
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
#endif`,vb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_b=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sb=`#ifdef USE_MORPHTARGETS
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
#endif`,Mb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rb=`#ifdef USE_NORMALMAP
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
#endif`,Pb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ib=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Db=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ub=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ob=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xb=`float getShadowMask() {
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
}`,jb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$b=`#ifdef USE_SKINNING
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
#endif`,Yb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kb=`#ifdef USE_SKINNING
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
#endif`,qb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eR=`#ifdef USE_TRANSMISSION
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
#endif`,tR=`#ifdef USE_TRANSMISSION
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
#endif`,nR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aR=`uniform sampler2D t2D;
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
}`,lR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fR=`#include <common>
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
}`,dR=`#if DEPTH_PACKING == 3200
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
}`,pR=`#define DISTANCE
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
}`,mR=`#define DISTANCE
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
}`,gR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_R=`uniform float scale;
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
}`,yR=`uniform vec3 diffuse;
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
}`,xR=`#include <common>
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
}`,wR=`uniform vec3 diffuse;
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
}`,SR=`#define LAMBERT
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
}`,MR=`#define LAMBERT
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
}`,ER=`#define MATCAP
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
}`,TR=`#define MATCAP
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
}`,CR=`#define NORMAL
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
}`,AR=`#define NORMAL
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
}`,bR=`#define PHONG
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
}`,RR=`#define PHONG
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
}`,PR=`#define STANDARD
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
}`,LR=`#define STANDARD
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
}`,IR=`#define TOON
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
}`,NR=`#define TOON
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
}`,DR=`uniform float size;
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
}`,UR=`uniform vec3 diffuse;
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
}`,OR=`#include <common>
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
}`,kR=`uniform vec3 color;
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
}`,FR=`uniform float rotation;
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
}`,BR=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:aA,alphahash_pars_fragment:lA,alphamap_fragment:cA,alphamap_pars_fragment:uA,alphatest_fragment:hA,alphatest_pars_fragment:fA,aomap_fragment:dA,aomap_pars_fragment:pA,batching_pars_vertex:mA,batching_vertex:gA,begin_vertex:vA,beginnormal_vertex:_A,bsdfs:yA,iridescence_fragment:xA,bumpmap_pars_fragment:wA,clipping_planes_fragment:SA,clipping_planes_pars_fragment:MA,clipping_planes_pars_vertex:EA,clipping_planes_vertex:TA,color_fragment:CA,color_pars_fragment:AA,color_pars_vertex:bA,color_vertex:RA,common:PA,cube_uv_reflection_fragment:LA,defaultnormal_vertex:IA,displacementmap_pars_vertex:NA,displacementmap_vertex:DA,emissivemap_fragment:UA,emissivemap_pars_fragment:OA,colorspace_fragment:kA,colorspace_pars_fragment:FA,envmap_fragment:BA,envmap_common_pars_fragment:zA,envmap_pars_fragment:HA,envmap_pars_vertex:VA,envmap_physical_pars_fragment:QA,envmap_vertex:GA,fog_vertex:WA,fog_pars_vertex:XA,fog_fragment:jA,fog_pars_fragment:$A,gradientmap_pars_fragment:YA,lightmap_pars_fragment:KA,lights_lambert_fragment:qA,lights_lambert_pars_fragment:ZA,lights_pars_begin:JA,lights_toon_fragment:eb,lights_toon_pars_fragment:tb,lights_phong_fragment:nb,lights_phong_pars_fragment:ib,lights_physical_fragment:rb,lights_physical_pars_fragment:sb,lights_fragment_begin:ob,lights_fragment_maps:ab,lights_fragment_end:lb,logdepthbuf_fragment:cb,logdepthbuf_pars_fragment:ub,logdepthbuf_pars_vertex:hb,logdepthbuf_vertex:fb,map_fragment:db,map_pars_fragment:pb,map_particle_fragment:mb,map_particle_pars_fragment:gb,metalnessmap_fragment:vb,metalnessmap_pars_fragment:_b,morphinstance_vertex:yb,morphcolor_vertex:xb,morphnormal_vertex:wb,morphtarget_pars_vertex:Sb,morphtarget_vertex:Mb,normal_fragment_begin:Eb,normal_fragment_maps:Tb,normal_pars_fragment:Cb,normal_pars_vertex:Ab,normal_vertex:bb,normalmap_pars_fragment:Rb,clearcoat_normal_fragment_begin:Pb,clearcoat_normal_fragment_maps:Lb,clearcoat_pars_fragment:Ib,iridescence_pars_fragment:Nb,opaque_fragment:Db,packing:Ub,premultiplied_alpha_fragment:Ob,project_vertex:kb,dithering_fragment:Fb,dithering_pars_fragment:Bb,roughnessmap_fragment:zb,roughnessmap_pars_fragment:Hb,shadowmap_pars_fragment:Vb,shadowmap_pars_vertex:Gb,shadowmap_vertex:Wb,shadowmask_pars_fragment:Xb,skinbase_vertex:jb,skinning_pars_vertex:$b,skinning_vertex:Yb,skinnormal_vertex:Kb,specularmap_fragment:qb,specularmap_pars_fragment:Zb,tonemapping_fragment:Jb,tonemapping_pars_fragment:Qb,transmission_fragment:eR,transmission_pars_fragment:tR,uv_pars_fragment:nR,uv_pars_vertex:iR,uv_vertex:rR,worldpos_vertex:sR,background_vert:oR,background_frag:aR,backgroundCube_vert:lR,backgroundCube_frag:cR,cube_vert:uR,cube_frag:hR,depth_vert:fR,depth_frag:dR,distanceRGBA_vert:pR,distanceRGBA_frag:mR,equirect_vert:gR,equirect_frag:vR,linedashed_vert:_R,linedashed_frag:yR,meshbasic_vert:xR,meshbasic_frag:wR,meshlambert_vert:SR,meshlambert_frag:MR,meshmatcap_vert:ER,meshmatcap_frag:TR,meshnormal_vert:CR,meshnormal_frag:AR,meshphong_vert:bR,meshphong_frag:RR,meshphysical_vert:PR,meshphysical_frag:LR,meshtoon_vert:IR,meshtoon_frag:NR,points_vert:DR,points_frag:UR,shadow_vert:OR,shadow_frag:kR,sprite_vert:FR,sprite_frag:BR},se={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Pi={basic:{uniforms:gn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:gn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new be(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:gn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:gn([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:gn([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new be(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:gn([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:gn([se.points,se.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:gn([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:gn([se.common,se.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:gn([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:gn([se.sprite,se.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:gn([se.common,se.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:gn([se.lights,se.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Pi.physical={uniforms:gn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Gc={r:0,b:0,g:0},ws=new zi,zR=new De;function HR(t,e,n,i,r,s,o){const a=new be(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?n:e).get(v)),v}function _(y){let v=!1;const x=g(y);x===null?p(a,l):x&&x.isColor&&(p(x,1),v=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(y,v){const x=g(v);x&&(x.isCubeTexture||x.mapping===Gh)?(u===void 0&&(u=new fn(new uc(1,1,1),new gr({name:"BackgroundCubeMaterial",uniforms:la(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ws.copy(v.backgroundRotation),ws.x*=-1,ws.y*=-1,ws.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(zR.makeRotationFromEuler(ws)),u.material.toneMapped=et.getTransfer(x.colorSpace)!==_t,(f!==x||h!==x.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,d=t.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new fn(new Pa(2,2),new gr({name:"BackgroundMaterial",uniforms:la(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=et.getTransfer(x.colorSpace)!==_t,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,d=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(Gc,J1(t)),i.buffers.color.setClear(Gc.r,Gc.g,Gc.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m}}function VR(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(w,T,V,B,W){let Z=!1;const z=f(B,V,T);s!==z&&(s=z,c(s.object)),Z=d(w,B,V,W),Z&&g(w,B,V,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(w,T,V,B),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(w){return t.bindVertexArray(w)}function u(w){return t.deleteVertexArray(w)}function f(w,T,V){const B=V.wireframe===!0;let W=i[w.id];W===void 0&&(W={},i[w.id]=W);let Z=W[T.id];Z===void 0&&(Z={},W[T.id]=Z);let z=Z[B];return z===void 0&&(z=h(l()),Z[B]=z),z}function h(w){const T=[],V=[],B=[];for(let W=0;W<n;W++)T[W]=0,V[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:V,attributeDivisors:B,object:w,attributes:{},index:null}}function d(w,T,V,B){const W=s.attributes,Z=T.attributes;let z=0;const te=V.getAttributes();for(const I in te)if(te[I].location>=0){const K=W[I];let ne=Z[I];if(ne===void 0&&(I==="instanceMatrix"&&w.instanceMatrix&&(ne=w.instanceMatrix),I==="instanceColor"&&w.instanceColor&&(ne=w.instanceColor)),K===void 0||K.attribute!==ne||ne&&K.data!==ne.data)return!0;z++}return s.attributesNum!==z||s.index!==B}function g(w,T,V,B){const W={},Z=T.attributes;let z=0;const te=V.getAttributes();for(const I in te)if(te[I].location>=0){let K=Z[I];K===void 0&&(I==="instanceMatrix"&&w.instanceMatrix&&(K=w.instanceMatrix),I==="instanceColor"&&w.instanceColor&&(K=w.instanceColor));const ne={};ne.attribute=K,K&&K.data&&(ne.data=K.data),W[I]=ne,z++}s.attributes=W,s.attributesNum=z,s.index=B}function _(){const w=s.newAttributes;for(let T=0,V=w.length;T<V;T++)w[T]=0}function m(w){p(w,0)}function p(w,T){const V=s.newAttributes,B=s.enabledAttributes,W=s.attributeDivisors;V[w]=1,B[w]===0&&(t.enableVertexAttribArray(w),B[w]=1),W[w]!==T&&(t.vertexAttribDivisor(w,T),W[w]=T)}function y(){const w=s.newAttributes,T=s.enabledAttributes;for(let V=0,B=T.length;V<B;V++)T[V]!==w[V]&&(t.disableVertexAttribArray(V),T[V]=0)}function v(w,T,V,B,W,Z,z){z===!0?t.vertexAttribIPointer(w,T,V,W,Z):t.vertexAttribPointer(w,T,V,B,W,Z)}function x(w,T,V,B){_();const W=B.attributes,Z=V.getAttributes(),z=T.defaultAttributeValues;for(const te in Z){const I=Z[te];if(I.location>=0){let j=W[te];if(j===void 0&&(te==="instanceMatrix"&&w.instanceMatrix&&(j=w.instanceMatrix),te==="instanceColor"&&w.instanceColor&&(j=w.instanceColor)),j!==void 0){const K=j.normalized,ne=j.itemSize,xe=e.get(j);if(xe===void 0)continue;const He=xe.buffer,X=xe.type,J=xe.bytesPerElement,oe=X===t.INT||X===t.UNSIGNED_INT||j.gpuType===Lg;if(j.isInterleavedBufferAttribute){const ae=j.data,Ce=ae.stride,Te=j.offset;if(ae.isInstancedInterleavedBuffer){for(let Ve=0;Ve<I.locationSize;Ve++)p(I.location+Ve,ae.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ve=0;Ve<I.locationSize;Ve++)m(I.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,He);for(let Ve=0;Ve<I.locationSize;Ve++)v(I.location+Ve,ne/I.locationSize,X,K,Ce*J,(Te+ne/I.locationSize*Ve)*J,oe)}else{if(j.isInstancedBufferAttribute){for(let ae=0;ae<I.locationSize;ae++)p(I.location+ae,j.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ae=0;ae<I.locationSize;ae++)m(I.location+ae);t.bindBuffer(t.ARRAY_BUFFER,He);for(let ae=0;ae<I.locationSize;ae++)v(I.location+ae,ne/I.locationSize,X,K,ne*J,ne/I.locationSize*ae*J,oe)}}else if(z!==void 0){const K=z[te];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(I.location,K);break;case 3:t.vertexAttrib3fv(I.location,K);break;case 4:t.vertexAttrib4fv(I.location,K);break;default:t.vertexAttrib1fv(I.location,K)}}}}y()}function A(){R();for(const w in i){const T=i[w];for(const V in T){const B=T[V];for(const W in B)u(B[W].object),delete B[W];delete T[V]}delete i[w]}}function C(w){if(i[w.id]===void 0)return;const T=i[w.id];for(const V in T){const B=T[V];for(const W in B)u(B[W].object),delete B[W];delete T[V]}delete i[w.id]}function M(w){for(const T in i){const V=i[T];if(V[w.id]===void 0)continue;const B=V[w.id];for(const W in B)u(B[W].object),delete B[W];delete V[w.id]}}function R(){H(),o=!0,s!==r&&(s=r,c(s.object))}function H(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:H,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function GR(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];n.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];for(let _=0;_<h.length;_++)n.update(g,i,h[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function WR(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(M){return!(M!==ni&&i.convert(M)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const R=M===cc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==mr&&i.convert(M)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==Si&&!R)}function l(M){if(M==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const M=e.get("EXT_clip_control");M.clipControlEXT(M.LOWER_LEFT_EXT,M.ZERO_TO_ONE_EXT)}const d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:A,maxSamples:C}}function XR(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new sr,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,v=y*4;let x=p.clippingState||null;l.value=x,x=u(g,h,v,d);for(let A=0;A!==v;++A)x[A]=n[A];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=d;v!==_;++v,x+=4)o.copy(f[v]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function jR(t){let e=new WeakMap;function n(o,a){return a===Mp?o.mapping=na:a===Ep&&(o.mapping=ia),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Mp||a===Ep)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new iA(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Vg extends Q1{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Mo=4,p_=[.125,.215,.35,.446,.526,.582],Ps=20,rd=new Vg,m_=new be;let sd=null,od=0,ad=0,ld=!1;const Cs=(1+Math.sqrt(5))/2,_o=1/Cs,g_=[new P(-Cs,_o,0),new P(Cs,_o,0),new P(-_o,0,Cs),new P(_o,0,Cs),new P(0,Cs,-_o),new P(0,Cs,_o),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class v_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){sd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=x_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=y_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sd,od,ad),this._renderer.xr.enabled=ld,e.scissorTest=!1,Wc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===na||e.mapping===ia?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:cc,format:ni,colorSpace:en,depthBuffer:!1},r=__(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=__(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$R(s)),this._blurMaterial=YR(s,e,n)}return r}_compileMaterial(e){const n=new fn(this._lodPlanes[0],e);this._renderer.compile(n,rd)}_sceneToCubeUV(e,n,i,r){const a=new _n(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(m_),u.toneMapping=Jr,u.autoClear=!1;const d=new ur({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),g=new fn(new uc,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(m_),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Wc(r,y*v,p>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===na||e.mapping===ia;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=x_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=y_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new fn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Wc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,rd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=g_[(r-s-1)%g_.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new fn(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ps-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Ps;m>Ps&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ps}`);const p=[];let y=0;for(let M=0;M<Ps;++M){const R=M/_,H=Math.exp(-R*R/2);p.push(H),M===0?y+=H:M<m&&(y+=2*H)}for(let M=0;M<p.length;M++)p[M]=p[M]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const x=this._sizeLods[r],A=3*x*(r>v-Mo?r-v+Mo:0),C=4*(this._cubeSize-x);Wc(n,A,C,3*x,2*x),l.setRenderTarget(n),l.render(f,rd)}}function $R(t){const e=[],n=[],i=[];let r=t;const s=t-Mo+1+p_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Mo?l=p_[o-t+Mo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),v=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let C=0;C<d;C++){const M=C%3*2/3-1,R=C>2?0:-1,H=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];y.set(H,_*g*C),v.set(h,m*g*C);const w=[C,C,C,C,C,C];x.set(w,p*g*C)}const A=new hi;A.setAttribute("position",new dn(y,_)),A.setAttribute("uv",new dn(v,m)),A.setAttribute("faceIndex",new dn(x,p)),e.push(A),r>Mo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function __(t,e,n){const i=new Ws(t,e,n);return i.texture.mapping=Gh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function YR(t,e,n){const i=new Float32Array(Ps),r=new P(0,1,0);return new gr({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gg(),fragmentShader:`

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
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function y_(){return new gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gg(),fragmentShader:`

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
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function x_(){return new gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function Gg(){return`

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
	`}function KR(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Mp||l===Ep,u=l===na||l===ia;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new v_(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(n===null&&(n=new v_(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function qR(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Iu("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ZR(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],t.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let v=0,x=y.length;v<x;v+=3){const A=y[v+0],C=y[v+1],M=y[v+2];h.push(A,C,C,M,M,A)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const A=v+0,C=v+1,M=v+2;h.push(A,C,C,M,M,A)}}else return;const m=new(X1(h)?Z1:q1)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function JR(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){t.drawElements(i,d,s,h*o),n.update(d,i,1)}function c(h,d,g){g!==0&&(t.drawElementsInstanced(i,d,s,h*o,g),n.update(d,i,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];n.update(m,i,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y];for(let y=0;y<_.length;y++)n.update(p,i,_[y])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function QR(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function e2(t,e,n){const i=new WeakMap,r=new nt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let H=function(){M.dispose(),i.delete(a),a.removeEventListener("dispose",H)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;d===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let x=a.attributes.position.count*v,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const C=new Float32Array(x*A*4*f),M=new $1(C,x,A,f);M.type=Si,M.needsUpdate=!0;const R=v*4;for(let w=0;w<f;w++){const T=m[w],V=p[w],B=y[w],W=x*A*4*w;for(let Z=0;Z<T.count;Z++){const z=Z*R;d===!0&&(r.fromBufferAttribute(T,Z),C[W+z+0]=r.x,C[W+z+1]=r.y,C[W+z+2]=r.z,C[W+z+3]=0),g===!0&&(r.fromBufferAttribute(V,Z),C[W+z+4]=r.x,C[W+z+5]=r.y,C[W+z+6]=r.z,C[W+z+7]=0),_===!0&&(r.fromBufferAttribute(B,Z),C[W+z+8]=r.x,C[W+z+9]=r.y,C[W+z+10]=r.z,C[W+z+11]=B.itemSize===4?r.w:1)}}h={count:f,texture:M,size:new ce(x,A)},i.set(a,h),a.addEventListener("dispose",H)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function t2(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class nw extends Vt{constructor(e,n,i,r,s,o,a,l,c,u=Vo){if(u!==Vo&&u!==oa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Vo&&(i=Gs),i===void 0&&u===oa&&(i=sa),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const iw=new Vt,w_=new nw(1,1),rw=new $1,sw=new HC,ow=new ew,S_=[],M_=[],E_=new Float32Array(16),T_=new Float32Array(9),C_=new Float32Array(4);function La(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=S_[r];if(s===void 0&&(s=new Float32Array(r),S_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Gt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Xh(t,e){let n=M_[e];n===void 0&&(n=new Int32Array(e),M_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function n2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function i2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2fv(this.addr,e),Wt(n,e)}}function r2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Gt(n,e))return;t.uniform3fv(this.addr,e),Wt(n,e)}}function s2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4fv(this.addr,e),Wt(n,e)}}function o2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Wt(n,e)}else{if(Gt(n,i))return;C_.set(i),t.uniformMatrix2fv(this.addr,!1,C_),Wt(n,i)}}function a2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Wt(n,e)}else{if(Gt(n,i))return;T_.set(i),t.uniformMatrix3fv(this.addr,!1,T_),Wt(n,i)}}function l2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Wt(n,e)}else{if(Gt(n,i))return;E_.set(i),t.uniformMatrix4fv(this.addr,!1,E_),Wt(n,i)}}function c2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function u2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2iv(this.addr,e),Wt(n,e)}}function h2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3iv(this.addr,e),Wt(n,e)}}function f2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4iv(this.addr,e),Wt(n,e)}}function d2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function p2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2uiv(this.addr,e),Wt(n,e)}}function m2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3uiv(this.addr,e),Wt(n,e)}}function g2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4uiv(this.addr,e),Wt(n,e)}}function v2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(w_.compareFunction=G1,s=w_):s=iw,n.setTexture2D(e||s,r)}function _2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||sw,r)}function y2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ow,r)}function x2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||rw,r)}function w2(t){switch(t){case 5126:return n2;case 35664:return i2;case 35665:return r2;case 35666:return s2;case 35674:return o2;case 35675:return a2;case 35676:return l2;case 5124:case 35670:return c2;case 35667:case 35671:return u2;case 35668:case 35672:return h2;case 35669:case 35673:return f2;case 5125:return d2;case 36294:return p2;case 36295:return m2;case 36296:return g2;case 35678:case 36198:case 36298:case 36306:case 35682:return v2;case 35679:case 36299:case 36307:return _2;case 35680:case 36300:case 36308:case 36293:return y2;case 36289:case 36303:case 36311:case 36292:return x2}}function S2(t,e){t.uniform1fv(this.addr,e)}function M2(t,e){const n=La(e,this.size,2);t.uniform2fv(this.addr,n)}function E2(t,e){const n=La(e,this.size,3);t.uniform3fv(this.addr,n)}function T2(t,e){const n=La(e,this.size,4);t.uniform4fv(this.addr,n)}function C2(t,e){const n=La(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function A2(t,e){const n=La(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function b2(t,e){const n=La(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function R2(t,e){t.uniform1iv(this.addr,e)}function P2(t,e){t.uniform2iv(this.addr,e)}function L2(t,e){t.uniform3iv(this.addr,e)}function I2(t,e){t.uniform4iv(this.addr,e)}function N2(t,e){t.uniform1uiv(this.addr,e)}function D2(t,e){t.uniform2uiv(this.addr,e)}function U2(t,e){t.uniform3uiv(this.addr,e)}function O2(t,e){t.uniform4uiv(this.addr,e)}function k2(t,e,n){const i=this.cache,r=e.length,s=Xh(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||iw,s[o])}function F2(t,e,n){const i=this.cache,r=e.length,s=Xh(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||sw,s[o])}function B2(t,e,n){const i=this.cache,r=e.length,s=Xh(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||ow,s[o])}function z2(t,e,n){const i=this.cache,r=e.length,s=Xh(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||rw,s[o])}function H2(t){switch(t){case 5126:return S2;case 35664:return M2;case 35665:return E2;case 35666:return T2;case 35674:return C2;case 35675:return A2;case 35676:return b2;case 5124:case 35670:return R2;case 35667:case 35671:return P2;case 35668:case 35672:return L2;case 35669:case 35673:return I2;case 5125:return N2;case 36294:return D2;case 36295:return U2;case 36296:return O2;case 35678:case 36198:case 36298:case 36306:case 35682:return k2;case 35679:case 36299:case 36307:return F2;case 35680:case 36300:case 36308:case 36293:return B2;case 36289:case 36303:case 36311:case 36292:return z2}}class V2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=w2(n.type)}}class G2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=H2(n.type)}}class W2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const cd=/(\w+)(\])?(\[|\.)?/g;function A_(t,e){t.seq.push(e),t.map[e.id]=e}function X2(t,e,n){const i=t.name,r=i.length;for(cd.lastIndex=0;;){const s=cd.exec(i),o=cd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){A_(n,c===void 0?new V2(a,t,e):new G2(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new W2(a),A_(n,f)),n=f}}}class Nu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);X2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function b_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const j2=37297;let $2=0;function Y2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function K2(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===sh&&n===rh?i="LinearDisplayP3ToLinearSRGB":e===rh&&n===sh&&(i="LinearSRGBToLinearDisplayP3"),t){case en:case Wh:return[i,"LinearTransferOETF"];case ln:case Fg:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function R_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Y2(t.getShaderSource(e),o)}else return r}function q2(t,e){const n=K2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Z2(t,e){let n;switch(e){case qT:n="Linear";break;case ZT:n="Reinhard";break;case JT:n="Cineon";break;case QT:n="ACESFilmic";break;case tC:n="AgX";break;case nC:n="Neutral";break;case eC:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Xc=new P;function J2(){et.getLuminanceCoefficients(Xc);const t=Xc.x.toFixed(4),e=Xc.y.toFixed(4),n=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ol).join(`
`)}function eP(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function tP(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ol(t){return t!==""}function P_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function L_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qp(t){return t.replace(nP,rP)}const iP=new Map;function rP(t,e){let n=Fe[e];if(n===void 0){const i=iP.get(e);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qp(n)}const sP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function I_(t){return t.replace(sP,oP)}function oP(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function N_(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function aP(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===b1?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===RT?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===tr&&(e="SHADOWMAP_TYPE_VSM"),e}function lP(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case na:case ia:e="ENVMAP_TYPE_CUBE";break;case Gh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cP(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ia:e="ENVMAP_MODE_REFRACTION";break}return e}function uP(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case R1:e="ENVMAP_BLENDING_MULTIPLY";break;case YT:e="ENVMAP_BLENDING_MIX";break;case KT:e="ENVMAP_BLENDING_ADD";break}return e}function hP(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function fP(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=aP(n),c=lP(n),u=cP(n),f=uP(n),h=hP(n),d=Q2(n),g=eP(s),_=r.createProgram();let m,p,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ol).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ol).join(`
`),p.length>0&&(p+=`
`)):(m=[N_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ol).join(`
`),p=[N_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Jr?"#define TONE_MAPPING":"",n.toneMapping!==Jr?Fe.tonemapping_pars_fragment:"",n.toneMapping!==Jr?Z2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,q2("linearToOutputTexel",n.outputColorSpace),J2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ol).join(`
`)),o=Qp(o),o=P_(o,n),o=L_(o,n),a=Qp(a),a=P_(a,n),a=L_(a,n),o=I_(o),a=I_(a),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Kv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Kv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+m+o,x=y+p+a,A=b_(r,r.VERTEX_SHADER,v),C=b_(r,r.FRAGMENT_SHADER,x);r.attachShader(_,A),r.attachShader(_,C),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function M(T){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(A).trim(),W=r.getShaderInfoLog(C).trim();let Z=!0,z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,A,C);else{const te=R_(r,A,"vertex"),I=R_(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+V+`
`+te+`
`+I)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||W==="")&&(z=!1);z&&(T.diagnostics={runnable:Z,programLog:V,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:p}})}r.deleteShader(A),r.deleteShader(C),R=new Nu(r,_),H=tP(r,_)}let R;this.getUniforms=function(){return R===void 0&&M(this),R};let H;this.getAttributes=function(){return H===void 0&&M(this),H};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(_,j2)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$2++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=C,this}let dP=0;class pP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new mP(e),n.set(e,i)),i}}class mP{constructor(e){this.id=dP++,this.code=e,this.usedTimes=0}}function gP(t,e,n,i,r,s,o){const a=new zg,l=new pP,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,d=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,T,V,B,W){const Z=B.fog,z=W.geometry,te=w.isMeshStandardMaterial?B.environment:null,I=(w.isMeshStandardMaterial?n:e).get(w.envMap||te),j=I&&I.mapping===Gh?I.image.height:null,K=_[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const ne=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,xe=ne!==void 0?ne.length:0;let He=0;z.morphAttributes.position!==void 0&&(He=1),z.morphAttributes.normal!==void 0&&(He=2),z.morphAttributes.color!==void 0&&(He=3);let X,J,oe,ae;if(K){const En=Pi[K];X=En.vertexShader,J=En.fragmentShader}else X=w.vertexShader,J=w.fragmentShader,l.update(w),oe=l.getVertexShaderID(w),ae=l.getFragmentShaderID(w);const Ce=t.getRenderTarget(),Te=W.isInstancedMesh===!0,Ve=W.isBatchedMesh===!0,Ke=!!w.map,Ue=!!w.matcap,L=!!I,Nn=!!w.aoMap,$e=!!w.lightMap,Je=!!w.bumpMap,Pe=!!w.normalMap,pt=!!w.displacementMap,Ne=!!w.emissiveMap,b=!!w.metalnessMap,S=!!w.roughnessMap,O=w.anisotropy>0,Y=w.clearcoat>0,Q=w.dispersion>0,$=w.iridescence>0,Se=w.sheen>0,le=w.transmission>0,me=O&&!!w.anisotropyMap,Qe=Y&&!!w.clearcoatMap,ie=Y&&!!w.clearcoatNormalMap,ge=Y&&!!w.clearcoatRoughnessMap,Le=$&&!!w.iridescenceMap,Ie=$&&!!w.iridescenceThicknessMap,ve=Se&&!!w.sheenColorMap,Ye=Se&&!!w.sheenRoughnessMap,Oe=!!w.specularMap,ft=!!w.specularColorMap,N=!!w.specularIntensityMap,fe=le&&!!w.transmissionMap,G=le&&!!w.thicknessMap,q=!!w.gradientMap,ue=!!w.alphaMap,de=w.alphaTest>0,qe=!!w.alphaHash,Dt=!!w.extensions;let Mn=Jr;w.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(Mn=t.toneMapping);const tt={shaderID:K,shaderType:w.type,shaderName:w.name,vertexShader:X,fragmentShader:J,defines:w.defines,customVertexShaderID:oe,customFragmentShaderID:ae,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:Ve,batchingColor:Ve&&W._colorsTexture!==null,instancing:Te,instancingColor:Te&&W.instanceColor!==null,instancingMorph:Te&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Ce===null?t.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:en,alphaToCoverage:!!w.alphaToCoverage,map:Ke,matcap:Ue,envMap:L,envMapMode:L&&I.mapping,envMapCubeUVHeight:j,aoMap:Nn,lightMap:$e,bumpMap:Je,normalMap:Pe,displacementMap:d&&pt,emissiveMap:Ne,normalMapObjectSpace:Pe&&w.normalMapType===lC,normalMapTangentSpace:Pe&&w.normalMapType===V1,metalnessMap:b,roughnessMap:S,anisotropy:O,anisotropyMap:me,clearcoat:Y,clearcoatMap:Qe,clearcoatNormalMap:ie,clearcoatRoughnessMap:ge,dispersion:Q,iridescence:$,iridescenceMap:Le,iridescenceThicknessMap:Ie,sheen:Se,sheenColorMap:ve,sheenRoughnessMap:Ye,specularMap:Oe,specularColorMap:ft,specularIntensityMap:N,transmission:le,transmissionMap:fe,thicknessMap:G,gradientMap:q,opaque:w.transparent===!1&&w.blending===Ho&&w.alphaToCoverage===!1,alphaMap:ue,alphaTest:de,alphaHash:qe,combine:w.combine,mapUv:Ke&&m(w.map.channel),aoMapUv:Nn&&m(w.aoMap.channel),lightMapUv:$e&&m(w.lightMap.channel),bumpMapUv:Je&&m(w.bumpMap.channel),normalMapUv:Pe&&m(w.normalMap.channel),displacementMapUv:pt&&m(w.displacementMap.channel),emissiveMapUv:Ne&&m(w.emissiveMap.channel),metalnessMapUv:b&&m(w.metalnessMap.channel),roughnessMapUv:S&&m(w.roughnessMap.channel),anisotropyMapUv:me&&m(w.anisotropyMap.channel),clearcoatMapUv:Qe&&m(w.clearcoatMap.channel),clearcoatNormalMapUv:ie&&m(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&m(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&m(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&m(w.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&m(w.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&m(w.sheenRoughnessMap.channel),specularMapUv:Oe&&m(w.specularMap.channel),specularColorMapUv:ft&&m(w.specularColorMap.channel),specularIntensityMapUv:N&&m(w.specularIntensityMap.channel),transmissionMapUv:fe&&m(w.transmissionMap.channel),thicknessMapUv:G&&m(w.thicknessMap.channel),alphaMapUv:ue&&m(w.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Pe||O),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!z.attributes.uv&&(Ke||ue),fog:!!Z,useFog:w.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:W.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:He,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:Mn,decodeVideoTexture:Ke&&w.map.isVideoTexture===!0&&et.getTransfer(w.map.colorSpace)===_t,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ni,flipSided:w.side===Rn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Dt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&w.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function y(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)T.push(V),T.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(v(T,w),x(T,w),T.push(t.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function v(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function x(w,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),w.push(a.mask)}function A(w){const T=_[w.type];let V;if(T){const B=Pi[T];V=QC.clone(B.uniforms)}else V=w.uniforms;return V}function C(w,T){let V;for(let B=0,W=u.length;B<W;B++){const Z=u[B];if(Z.cacheKey===T){V=Z,++V.usedTimes;break}}return V===void 0&&(V=new fP(t,T,w,s),u.push(V)),V}function M(w){if(--w.usedTimes===0){const T=u.indexOf(w);u[T]=u[u.length-1],u.pop(),w.destroy()}}function R(w){l.remove(w)}function H(){l.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:A,acquireProgram:C,releaseProgram:M,releaseShaderCache:R,programs:u,dispose:H}}function vP(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function _P(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function D_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function U_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,d,g,_,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):n.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):n.unshift(p)}function c(f,h){n.length>1&&n.sort(f||_P),i.length>1&&i.sort(h||D_),r.length>1&&r.sort(h||D_)}function u(){for(let f=e,h=t.length;f<h;f++){const d=t[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function yP(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new U_,t.set(i,[o])):r>=s.length?(o=new U_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function xP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new P,color:new be};break;case"SpotLight":n={position:new P,direction:new P,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new be,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new be,groundColor:new be};break;case"RectAreaLight":n={color:new be,position:new P,halfWidth:new P,halfHeight:new P};break}return t[e.id]=n,n}}}function wP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let SP=0;function MP(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function EP(t){const e=new xP,n=wP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const r=new P,s=new De,o=new De;function a(c){let u=0,f=0,h=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,y=0,v=0,x=0,A=0,C=0,M=0;c.sort(MP);for(let H=0,w=c.length;H<w;H++){const T=c[H],V=T.color,B=T.intensity,W=T.distance,Z=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=V.r*B,f+=V.g*B,h+=V.b*B;else if(T.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(T.sh.coefficients[z],B);M++}else if(T.isDirectionalLight){const z=e.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const te=T.shadow,I=n.get(T);I.shadowIntensity=te.intensity,I.shadowBias=te.bias,I.shadowNormalBias=te.normalBias,I.shadowRadius=te.radius,I.shadowMapSize=te.mapSize,i.directionalShadow[d]=I,i.directionalShadowMap[d]=Z,i.directionalShadowMatrix[d]=T.shadow.matrix,y++}i.directional[d]=z,d++}else if(T.isSpotLight){const z=e.get(T);z.position.setFromMatrixPosition(T.matrixWorld),z.color.copy(V).multiplyScalar(B),z.distance=W,z.coneCos=Math.cos(T.angle),z.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),z.decay=T.decay,i.spot[_]=z;const te=T.shadow;if(T.map&&(i.spotLightMap[A]=T.map,A++,te.updateMatrices(T),T.castShadow&&C++),i.spotLightMatrix[_]=te.matrix,T.castShadow){const I=n.get(T);I.shadowIntensity=te.intensity,I.shadowBias=te.bias,I.shadowNormalBias=te.normalBias,I.shadowRadius=te.radius,I.shadowMapSize=te.mapSize,i.spotShadow[_]=I,i.spotShadowMap[_]=Z,x++}_++}else if(T.isRectAreaLight){const z=e.get(T);z.color.copy(V).multiplyScalar(B),z.halfWidth.set(T.width*.5,0,0),z.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=z,m++}else if(T.isPointLight){const z=e.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),z.distance=T.distance,z.decay=T.decay,T.castShadow){const te=T.shadow,I=n.get(T);I.shadowIntensity=te.intensity,I.shadowBias=te.bias,I.shadowNormalBias=te.normalBias,I.shadowRadius=te.radius,I.shadowMapSize=te.mapSize,I.shadowCameraNear=te.camera.near,I.shadowCameraFar=te.camera.far,i.pointShadow[g]=I,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=T.shadow.matrix,v++}i.point[g]=z,g++}else if(T.isHemisphereLight){const z=e.get(T);z.skyColor.copy(T.color).multiplyScalar(B),z.groundColor.copy(T.groundColor).multiplyScalar(B),i.hemi[p]=z,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const R=i.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==y||R.numPointShadows!==v||R.numSpotShadows!==x||R.numSpotMaps!==A||R.numLightProbes!==M)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=M,R.directionalLength=d,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=y,R.numPointShadows=v,R.numSpotShadows=x,R.numSpotMaps=A,R.numLightProbes=M,i.version=SP++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const v=c[p];if(v.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(v.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function O_(t){const e=new EP(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function TP(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new O_(t),e.set(r,[a])):s>=o.length?(a=new O_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class CP extends ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AP extends ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RP=`uniform sampler2D shadow_pass;
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
}`;function PP(t,e,n){let i=new Hg;const r=new ce,s=new ce,o=new nt,a=new CP({depthPacking:aC}),l=new AP,c={},u=n.maxTextureSize,f={[pr]:Rn,[Rn]:pr,[Ni]:Ni},h=new gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:bP,fragmentShader:RP}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new hi;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new fn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=b1;let p=this.type;this.render=function(C,M,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const H=t.getRenderTarget(),w=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Zr),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=p!==tr&&this.type===tr,W=p===tr&&this.type!==tr;for(let Z=0,z=C.length;Z<z;Z++){const te=C[Z],I=te.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const j=I.getFrameExtents();if(r.multiply(j),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,I.mapSize.y=s.y)),I.map===null||B===!0||W===!0){const ne=this.type!==tr?{minFilter:yn,magFilter:yn}:{};I.map!==null&&I.map.dispose(),I.map=new Ws(r.x,r.y,ne),I.map.texture.name=te.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const K=I.getViewportCount();for(let ne=0;ne<K;ne++){const xe=I.getViewport(ne);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),V.viewport(o),I.updateMatrices(te,ne),i=I.getFrustum(),x(M,R,I.camera,te,this.type)}I.isPointLightShadow!==!0&&this.type===tr&&y(I,R),I.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(H,w,T)};function y(C,M){const R=e.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ws(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(M,null,R,h,_,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(M,null,R,d,_,null)}function v(C,M,R,H){let w=null;const T=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)w=T;else if(w=R.isPointLight===!0?l:a,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const V=w.uuid,B=M.uuid;let W=c[V];W===void 0&&(W={},c[V]=W);let Z=W[B];Z===void 0&&(Z=w.clone(),W[B]=Z,M.addEventListener("dispose",A)),w=Z}if(w.visible=M.visible,w.wireframe=M.wireframe,H===tr?w.side=M.shadowSide!==null?M.shadowSide:M.side:w.side=M.shadowSide!==null?M.shadowSide:f[M.side],w.alphaMap=M.alphaMap,w.alphaTest=M.alphaTest,w.map=M.map,w.clipShadows=M.clipShadows,w.clippingPlanes=M.clippingPlanes,w.clipIntersection=M.clipIntersection,w.displacementMap=M.displacementMap,w.displacementScale=M.displacementScale,w.displacementBias=M.displacementBias,w.wireframeLinewidth=M.wireframeLinewidth,w.linewidth=M.linewidth,R.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const V=t.properties.get(w);V.light=R}return w}function x(C,M,R,H,w){if(C.visible===!1)return;if(C.layers.test(M.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&w===tr)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const B=e.update(C),W=C.material;if(Array.isArray(W)){const Z=B.groups;for(let z=0,te=Z.length;z<te;z++){const I=Z[z],j=W[I.materialIndex];if(j&&j.visible){const K=v(C,j,H,w);C.onBeforeShadow(t,C,M,R,B,K,I),t.renderBufferDirect(R,null,B,K,C,I),C.onAfterShadow(t,C,M,R,B,K,I)}}}else if(W.visible){const Z=v(C,W,H,w);C.onBeforeShadow(t,C,M,R,B,Z,null),t.renderBufferDirect(R,null,B,Z,C,null),C.onAfterShadow(t,C,M,R,B,Z,null)}}const V=C.children;for(let B=0,W=V.length;B<W;B++)x(V[B],M,R,H,w)}function A(C){C.target.removeEventListener("dispose",A);for(const R in c){const H=c[R],w=C.target.uuid;w in H&&(H[w].dispose(),delete H[w])}}}const LP={[gp]:vp,[_p]:wp,[yp]:Sp,[ta]:xp,[vp]:gp,[wp]:_p,[Sp]:yp,[xp]:ta};function IP(t){function e(){let N=!1;const fe=new nt;let G=null;const q=new nt(0,0,0,0);return{setMask:function(ue){G!==ue&&!N&&(t.colorMask(ue,ue,ue,ue),G=ue)},setLocked:function(ue){N=ue},setClear:function(ue,de,qe,Dt,Mn){Mn===!0&&(ue*=Dt,de*=Dt,qe*=Dt),fe.set(ue,de,qe,Dt),q.equals(fe)===!1&&(t.clearColor(ue,de,qe,Dt),q.copy(fe))},reset:function(){N=!1,G=null,q.set(-1,0,0,0)}}}function n(){let N=!1,fe=!1,G=null,q=null,ue=null;return{setReversed:function(de){fe=de},setTest:function(de){de?oe(t.DEPTH_TEST):ae(t.DEPTH_TEST)},setMask:function(de){G!==de&&!N&&(t.depthMask(de),G=de)},setFunc:function(de){if(fe&&(de=LP[de]),q!==de){switch(de){case gp:t.depthFunc(t.NEVER);break;case vp:t.depthFunc(t.ALWAYS);break;case _p:t.depthFunc(t.LESS);break;case ta:t.depthFunc(t.LEQUAL);break;case yp:t.depthFunc(t.EQUAL);break;case xp:t.depthFunc(t.GEQUAL);break;case wp:t.depthFunc(t.GREATER);break;case Sp:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}q=de}},setLocked:function(de){N=de},setClear:function(de){ue!==de&&(t.clearDepth(de),ue=de)},reset:function(){N=!1,G=null,q=null,ue=null}}}function i(){let N=!1,fe=null,G=null,q=null,ue=null,de=null,qe=null,Dt=null,Mn=null;return{setTest:function(tt){N||(tt?oe(t.STENCIL_TEST):ae(t.STENCIL_TEST))},setMask:function(tt){fe!==tt&&!N&&(t.stencilMask(tt),fe=tt)},setFunc:function(tt,En,$i){(G!==tt||q!==En||ue!==$i)&&(t.stencilFunc(tt,En,$i),G=tt,q=En,ue=$i)},setOp:function(tt,En,$i){(de!==tt||qe!==En||Dt!==$i)&&(t.stencilOp(tt,En,$i),de=tt,qe=En,Dt=$i)},setLocked:function(tt){N=tt},setClear:function(tt){Mn!==tt&&(t.clearStencil(tt),Mn=tt)},reset:function(){N=!1,fe=null,G=null,q=null,ue=null,de=null,qe=null,Dt=null,Mn=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,g=!1,_=null,m=null,p=null,y=null,v=null,x=null,A=null,C=new be(0,0,0),M=0,R=!1,H=null,w=null,T=null,V=null,B=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,z=0;const te=t.getParameter(t.VERSION);te.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(te)[1]),Z=z>=1):te.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),Z=z>=2);let I=null,j={};const K=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),xe=new nt().fromArray(K),He=new nt().fromArray(ne);function X(N,fe,G,q){const ue=new Uint8Array(4),de=t.createTexture();t.bindTexture(N,de),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<G;qe++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,q,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(fe+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return de}const J={};J[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),J[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),J[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),oe(t.DEPTH_TEST),s.setFunc(ta),$e(!1),Je(zv),oe(t.CULL_FACE),L(Zr);function oe(N){c[N]!==!0&&(t.enable(N),c[N]=!0)}function ae(N){c[N]!==!1&&(t.disable(N),c[N]=!1)}function Ce(N,fe){return u[N]!==fe?(t.bindFramebuffer(N,fe),u[N]=fe,N===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=fe),N===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Te(N,fe){let G=h,q=!1;if(N){G=f.get(fe),G===void 0&&(G=[],f.set(fe,G));const ue=N.textures;if(G.length!==ue.length||G[0]!==t.COLOR_ATTACHMENT0){for(let de=0,qe=ue.length;de<qe;de++)G[de]=t.COLOR_ATTACHMENT0+de;G.length=ue.length,q=!0}}else G[0]!==t.BACK&&(G[0]=t.BACK,q=!0);q&&t.drawBuffers(G)}function Ve(N){return d!==N?(t.useProgram(N),d=N,!0):!1}const Ke={[Rs]:t.FUNC_ADD,[LT]:t.FUNC_SUBTRACT,[IT]:t.FUNC_REVERSE_SUBTRACT};Ke[NT]=t.MIN,Ke[DT]=t.MAX;const Ue={[UT]:t.ZERO,[OT]:t.ONE,[kT]:t.SRC_COLOR,[pp]:t.SRC_ALPHA,[GT]:t.SRC_ALPHA_SATURATE,[HT]:t.DST_COLOR,[BT]:t.DST_ALPHA,[FT]:t.ONE_MINUS_SRC_COLOR,[mp]:t.ONE_MINUS_SRC_ALPHA,[VT]:t.ONE_MINUS_DST_COLOR,[zT]:t.ONE_MINUS_DST_ALPHA,[WT]:t.CONSTANT_COLOR,[XT]:t.ONE_MINUS_CONSTANT_COLOR,[jT]:t.CONSTANT_ALPHA,[$T]:t.ONE_MINUS_CONSTANT_ALPHA};function L(N,fe,G,q,ue,de,qe,Dt,Mn,tt){if(N===Zr){g===!0&&(ae(t.BLEND),g=!1);return}if(g===!1&&(oe(t.BLEND),g=!0),N!==PT){if(N!==_||tt!==R){if((m!==Rs||v!==Rs)&&(t.blendEquation(t.FUNC_ADD),m=Rs,v=Rs),tt)switch(N){case Ho:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Hv:t.blendFunc(t.ONE,t.ONE);break;case Vv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Gv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ho:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Hv:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Vv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Gv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}p=null,y=null,x=null,A=null,C.set(0,0,0),M=0,_=N,R=tt}return}ue=ue||fe,de=de||G,qe=qe||q,(fe!==m||ue!==v)&&(t.blendEquationSeparate(Ke[fe],Ke[ue]),m=fe,v=ue),(G!==p||q!==y||de!==x||qe!==A)&&(t.blendFuncSeparate(Ue[G],Ue[q],Ue[de],Ue[qe]),p=G,y=q,x=de,A=qe),(Dt.equals(C)===!1||Mn!==M)&&(t.blendColor(Dt.r,Dt.g,Dt.b,Mn),C.copy(Dt),M=Mn),_=N,R=!1}function Nn(N,fe){N.side===Ni?ae(t.CULL_FACE):oe(t.CULL_FACE);let G=N.side===Rn;fe&&(G=!G),$e(G),N.blending===Ho&&N.transparent===!1?L(Zr):L(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const q=N.stencilWrite;o.setTest(q),q&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),pt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function $e(N){H!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),H=N)}function Je(N){N!==AT?(oe(t.CULL_FACE),N!==w&&(N===zv?t.cullFace(t.BACK):N===bT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ae(t.CULL_FACE),w=N}function Pe(N){N!==T&&(Z&&t.lineWidth(N),T=N)}function pt(N,fe,G){N?(oe(t.POLYGON_OFFSET_FILL),(V!==fe||B!==G)&&(t.polygonOffset(fe,G),V=fe,B=G)):ae(t.POLYGON_OFFSET_FILL)}function Ne(N){N?oe(t.SCISSOR_TEST):ae(t.SCISSOR_TEST)}function b(N){N===void 0&&(N=t.TEXTURE0+W-1),I!==N&&(t.activeTexture(N),I=N)}function S(N,fe,G){G===void 0&&(I===null?G=t.TEXTURE0+W-1:G=I);let q=j[G];q===void 0&&(q={type:void 0,texture:void 0},j[G]=q),(q.type!==N||q.texture!==fe)&&(I!==G&&(t.activeTexture(G),I=G),t.bindTexture(N,fe||J[N]),q.type=N,q.texture=fe)}function O(){const N=j[I];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Y(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Qe(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(N){xe.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),xe.copy(N))}function ve(N){He.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),He.copy(N))}function Ye(N,fe){let G=l.get(fe);G===void 0&&(G=new WeakMap,l.set(fe,G));let q=G.get(N);q===void 0&&(q=t.getUniformBlockIndex(fe,N.name),G.set(N,q))}function Oe(N,fe){const q=l.get(fe).get(N);a.get(fe)!==q&&(t.uniformBlockBinding(fe,q,N.__bindingPointIndex),a.set(fe,q))}function ft(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},I=null,j={},u={},f=new WeakMap,h=[],d=null,g=!1,_=null,m=null,p=null,y=null,v=null,x=null,A=null,C=new be(0,0,0),M=0,R=!1,H=null,w=null,T=null,V=null,B=null,xe.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:oe,disable:ae,bindFramebuffer:Ce,drawBuffers:Te,useProgram:Ve,setBlending:L,setMaterial:Nn,setFlipSided:$e,setCullFace:Je,setLineWidth:Pe,setPolygonOffset:pt,setScissorTest:Ne,activeTexture:b,bindTexture:S,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:ge,texImage3D:Le,updateUBOMapping:Ye,uniformBlockBinding:Oe,texStorage2D:Qe,texStorage3D:ie,texSubImage2D:$,texSubImage3D:Se,compressedTexSubImage2D:le,compressedTexSubImage3D:me,scissor:Ie,viewport:ve,reset:ft}}function k_(t,e,n,i){const r=NP(i);switch(n){case U1:return t*e;case k1:return t*e;case F1:return t*e*2;case Dg:return t*e/r.components*r.byteLength;case Ug:return t*e/r.components*r.byteLength;case B1:return t*e*2/r.components*r.byteLength;case Og:return t*e*2/r.components*r.byteLength;case O1:return t*e*3/r.components*r.byteLength;case ni:return t*e*4/r.components*r.byteLength;case kg:return t*e*4/r.components*r.byteLength;case Au:case bu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ru:case Pu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cp:case bp:return Math.max(t,16)*Math.max(e,8)/4;case Tp:case Ap:return Math.max(t,8)*Math.max(e,8)/2;case Rp:case Pp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Lp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ip:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Np:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Dp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Up:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Op:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case kp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Fp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Bp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case zp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Hp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Vp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Gp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Wp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Xp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Lu:case jp:case $p:return Math.ceil(t/4)*Math.ceil(e/4)*16;case z1:case Yp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Kp:case qp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function NP(t){switch(t){case mr:case I1:return{byteLength:1,components:1};case Dl:case N1:case cc:return{byteLength:2,components:1};case Ig:case Ng:return{byteLength:2,components:4};case Gs:case Lg:case Si:return{byteLength:4,components:1};case D1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function DP(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,S){return d?new OffscreenCanvas(b,S):kl("canvas")}function _(b,S,O){let Y=1;const Q=Ne(b);if((Q.width>O||Q.height>O)&&(Y=O/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const $=Math.floor(Y*Q.width),Se=Math.floor(Y*Q.height);f===void 0&&(f=g($,Se));const le=S?g($,Se):f;return le.width=$,le.height=Se,le.getContext("2d").drawImage(b,0,0,$,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+Se+")."),le}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==yn&&b.minFilter!==hn}function p(b){t.generateMipmap(b)}function y(b,S,O,Y,Q=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let $=S;if(S===t.RED&&(O===t.FLOAT&&($=t.R32F),O===t.HALF_FLOAT&&($=t.R16F),O===t.UNSIGNED_BYTE&&($=t.R8)),S===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&($=t.R8UI),O===t.UNSIGNED_SHORT&&($=t.R16UI),O===t.UNSIGNED_INT&&($=t.R32UI),O===t.BYTE&&($=t.R8I),O===t.SHORT&&($=t.R16I),O===t.INT&&($=t.R32I)),S===t.RG&&(O===t.FLOAT&&($=t.RG32F),O===t.HALF_FLOAT&&($=t.RG16F),O===t.UNSIGNED_BYTE&&($=t.RG8)),S===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&($=t.RG8UI),O===t.UNSIGNED_SHORT&&($=t.RG16UI),O===t.UNSIGNED_INT&&($=t.RG32UI),O===t.BYTE&&($=t.RG8I),O===t.SHORT&&($=t.RG16I),O===t.INT&&($=t.RG32I)),S===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&($=t.RGB8UI),O===t.UNSIGNED_SHORT&&($=t.RGB16UI),O===t.UNSIGNED_INT&&($=t.RGB32UI),O===t.BYTE&&($=t.RGB8I),O===t.SHORT&&($=t.RGB16I),O===t.INT&&($=t.RGB32I)),S===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&($=t.RGBA8UI),O===t.UNSIGNED_SHORT&&($=t.RGBA16UI),O===t.UNSIGNED_INT&&($=t.RGBA32UI),O===t.BYTE&&($=t.RGBA8I),O===t.SHORT&&($=t.RGBA16I),O===t.INT&&($=t.RGBA32I)),S===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),S===t.RGBA){const Se=Q?ih:et.getTransfer(Y);O===t.FLOAT&&($=t.RGBA32F),O===t.HALF_FLOAT&&($=t.RGBA16F),O===t.UNSIGNED_BYTE&&($=Se===_t?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(b,S){let O;return b?S===null||S===Gs||S===sa?O=t.DEPTH24_STENCIL8:S===Si?O=t.DEPTH32F_STENCIL8:S===Dl&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Gs||S===sa?O=t.DEPTH_COMPONENT24:S===Si?O=t.DEPTH_COMPONENT32F:S===Dl&&(O=t.DEPTH_COMPONENT16),O}function x(b,S){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==yn&&b.minFilter!==hn?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function A(b){const S=b.target;S.removeEventListener("dispose",A),M(S),S.isVideoTexture&&u.delete(S)}function C(b){const S=b.target;S.removeEventListener("dispose",C),H(S)}function M(b){const S=i.get(b);if(S.__webglInit===void 0)return;const O=b.source,Y=h.get(O);if(Y){const Q=Y[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(b),Object.keys(Y).length===0&&h.delete(O)}i.remove(b)}function R(b){const S=i.get(b);t.deleteTexture(S.__webglTexture);const O=b.source,Y=h.get(O);delete Y[S.__cacheKey],o.memory.textures--}function H(b){const S=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let Q=0;Q<S.__webglFramebuffer[Y].length;Q++)t.deleteFramebuffer(S.__webglFramebuffer[Y][Q]);else t.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)t.deleteFramebuffer(S.__webglFramebuffer[Y]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=b.textures;for(let Y=0,Q=O.length;Y<Q;Y++){const $=i.get(O[Y]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(O[Y])}i.remove(b)}let w=0;function T(){w=0}function V(){const b=w;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),w+=1,b}function B(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function W(b,S){const O=i.get(b);if(b.isVideoTexture&&Pe(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(O,b,S);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+S)}function Z(b,S){const O=i.get(b);if(b.version>0&&O.__version!==b.version){He(O,b,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+S)}function z(b,S){const O=i.get(b);if(b.version>0&&O.__version!==b.version){He(O,b,S);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+S)}function te(b,S){const O=i.get(b);if(b.version>0&&O.__version!==b.version){X(O,b,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+S)}const I={[ra]:t.REPEAT,[Xr]:t.CLAMP_TO_EDGE,[nh]:t.MIRRORED_REPEAT},j={[yn]:t.NEAREST,[L1]:t.NEAREST_MIPMAP_NEAREST,[sl]:t.NEAREST_MIPMAP_LINEAR,[hn]:t.LINEAR,[Cu]:t.LINEAR_MIPMAP_NEAREST,[lr]:t.LINEAR_MIPMAP_LINEAR},K={[cC]:t.NEVER,[mC]:t.ALWAYS,[uC]:t.LESS,[G1]:t.LEQUAL,[hC]:t.EQUAL,[pC]:t.GEQUAL,[fC]:t.GREATER,[dC]:t.NOTEQUAL};function ne(b,S){if(S.type===Si&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===hn||S.magFilter===Cu||S.magFilter===sl||S.magFilter===lr||S.minFilter===hn||S.minFilter===Cu||S.minFilter===sl||S.minFilter===lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,I[S.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,I[S.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,I[S.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,j[S.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,j[S.minFilter]),S.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,K[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===yn||S.minFilter!==sl&&S.minFilter!==lr||S.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function xe(b,S){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",A));const Y=S.source;let Q=h.get(Y);Q===void 0&&(Q={},h.set(Y,Q));const $=B(S);if($!==b.__cacheKey){Q[$]===void 0&&(Q[$]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[$].usedTimes++;const Se=Q[b.__cacheKey];Se!==void 0&&(Q[b.__cacheKey].usedTimes--,Se.usedTimes===0&&R(S)),b.__cacheKey=$,b.__webglTexture=Q[$].texture}return O}function He(b,S,O){let Y=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=t.TEXTURE_3D);const Q=xe(b,S),$=S.source;n.bindTexture(Y,b.__webglTexture,t.TEXTURE0+O);const Se=i.get($);if($.version!==Se.__version||Q===!0){n.activeTexture(t.TEXTURE0+O);const le=et.getPrimaries(et.workingColorSpace),me=S.colorSpace===Vr?null:et.getPrimaries(S.colorSpace),Qe=S.colorSpace===Vr||le===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let ie=_(S.image,!1,r.maxTextureSize);ie=pt(S,ie);const ge=s.convert(S.format,S.colorSpace),Le=s.convert(S.type);let Ie=y(S.internalFormat,ge,Le,S.colorSpace,S.isVideoTexture);ne(Y,S);let ve;const Ye=S.mipmaps,Oe=S.isVideoTexture!==!0,ft=Se.__version===void 0||Q===!0,N=$.dataReady,fe=x(S,ie);if(S.isDepthTexture)Ie=v(S.format===oa,S.type),ft&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,Ie,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Ie,ie.width,ie.height,0,ge,Le,null));else if(S.isDataTexture)if(Ye.length>0){Oe&&ft&&n.texStorage2D(t.TEXTURE_2D,fe,Ie,Ye[0].width,Ye[0].height);for(let G=0,q=Ye.length;G<q;G++)ve=Ye[G],Oe?N&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,ve.width,ve.height,ge,Le,ve.data):n.texImage2D(t.TEXTURE_2D,G,Ie,ve.width,ve.height,0,ge,Le,ve.data);S.generateMipmaps=!1}else Oe?(ft&&n.texStorage2D(t.TEXTURE_2D,fe,Ie,ie.width,ie.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,ge,Le,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Ie,ie.width,ie.height,0,ge,Le,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Oe&&ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Ie,Ye[0].width,Ye[0].height,ie.depth);for(let G=0,q=Ye.length;G<q;G++)if(ve=Ye[G],S.format!==ni)if(ge!==null)if(Oe){if(N)if(S.layerUpdates.size>0){const ue=k_(ve.width,ve.height,S.format,S.type);for(const de of S.layerUpdates){const qe=ve.data.subarray(de*ue/ve.data.BYTES_PER_ELEMENT,(de+1)*ue/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,de,ve.width,ve.height,1,ge,qe,0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,ve.width,ve.height,ie.depth,ge,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,G,Ie,ve.width,ve.height,ie.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,ve.width,ve.height,ie.depth,ge,Le,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,G,Ie,ve.width,ve.height,ie.depth,0,ge,Le,ve.data)}else{Oe&&ft&&n.texStorage2D(t.TEXTURE_2D,fe,Ie,Ye[0].width,Ye[0].height);for(let G=0,q=Ye.length;G<q;G++)ve=Ye[G],S.format!==ni?ge!==null?Oe?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,G,0,0,ve.width,ve.height,ge,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,G,Ie,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?N&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,ve.width,ve.height,ge,Le,ve.data):n.texImage2D(t.TEXTURE_2D,G,Ie,ve.width,ve.height,0,ge,Le,ve.data)}else if(S.isDataArrayTexture)if(Oe){if(ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Ie,ie.width,ie.height,ie.depth),N)if(S.layerUpdates.size>0){const G=k_(ie.width,ie.height,S.format,S.type);for(const q of S.layerUpdates){const ue=ie.data.subarray(q*G/ie.data.BYTES_PER_ELEMENT,(q+1)*G/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,q,ie.width,ie.height,1,ge,Le,ue)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,Le,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,ie.width,ie.height,ie.depth,0,ge,Le,ie.data);else if(S.isData3DTexture)Oe?(ft&&n.texStorage3D(t.TEXTURE_3D,fe,Ie,ie.width,ie.height,ie.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,Le,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,ie.width,ie.height,ie.depth,0,ge,Le,ie.data);else if(S.isFramebufferTexture){if(ft)if(Oe)n.texStorage2D(t.TEXTURE_2D,fe,Ie,ie.width,ie.height);else{let G=ie.width,q=ie.height;for(let ue=0;ue<fe;ue++)n.texImage2D(t.TEXTURE_2D,ue,Ie,G,q,0,ge,Le,null),G>>=1,q>>=1}}else if(Ye.length>0){if(Oe&&ft){const G=Ne(Ye[0]);n.texStorage2D(t.TEXTURE_2D,fe,Ie,G.width,G.height)}for(let G=0,q=Ye.length;G<q;G++)ve=Ye[G],Oe?N&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,ge,Le,ve):n.texImage2D(t.TEXTURE_2D,G,Ie,ge,Le,ve);S.generateMipmaps=!1}else if(Oe){if(ft){const G=Ne(ie);n.texStorage2D(t.TEXTURE_2D,fe,Ie,G.width,G.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Le,ie)}else n.texImage2D(t.TEXTURE_2D,0,Ie,ge,Le,ie);m(S)&&p(Y),Se.__version=$.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function X(b,S,O){if(S.image.length!==6)return;const Y=xe(b,S),Q=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+O);const $=i.get(Q);if(Q.version!==$.__version||Y===!0){n.activeTexture(t.TEXTURE0+O);const Se=et.getPrimaries(et.workingColorSpace),le=S.colorSpace===Vr?null:et.getPrimaries(S.colorSpace),me=S.colorSpace===Vr||Se===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Qe=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,ge=[];for(let q=0;q<6;q++)!Qe&&!ie?ge[q]=_(S.image[q],!0,r.maxCubemapSize):ge[q]=ie?S.image[q].image:S.image[q],ge[q]=pt(S,ge[q]);const Le=ge[0],Ie=s.convert(S.format,S.colorSpace),ve=s.convert(S.type),Ye=y(S.internalFormat,Ie,ve,S.colorSpace),Oe=S.isVideoTexture!==!0,ft=$.__version===void 0||Y===!0,N=Q.dataReady;let fe=x(S,Le);ne(t.TEXTURE_CUBE_MAP,S);let G;if(Qe){Oe&&ft&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Ye,Le.width,Le.height);for(let q=0;q<6;q++){G=ge[q].mipmaps;for(let ue=0;ue<G.length;ue++){const de=G[ue];S.format!==ni?Ie!==null?Oe?N&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,0,0,de.width,de.height,Ie,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,Ye,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,0,0,de.width,de.height,Ie,ve,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,Ye,de.width,de.height,0,Ie,ve,de.data)}}}else{if(G=S.mipmaps,Oe&&ft){G.length>0&&fe++;const q=Ne(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Ye,q.width,q.height)}for(let q=0;q<6;q++)if(ie){Oe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ge[q].width,ge[q].height,Ie,ve,ge[q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ye,ge[q].width,ge[q].height,0,Ie,ve,ge[q].data);for(let ue=0;ue<G.length;ue++){const qe=G[ue].image[q].image;Oe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,0,0,qe.width,qe.height,Ie,ve,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,Ye,qe.width,qe.height,0,Ie,ve,qe.data)}}else{Oe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ie,ve,ge[q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ye,Ie,ve,ge[q]);for(let ue=0;ue<G.length;ue++){const de=G[ue];Oe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,0,0,Ie,ve,de.image[q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,Ye,Ie,ve,de.image[q])}}}m(S)&&p(t.TEXTURE_CUBE_MAP),$.__version=Q.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function J(b,S,O,Y,Q,$){const Se=s.convert(O.format,O.colorSpace),le=s.convert(O.type),me=y(O.internalFormat,Se,le,O.colorSpace);if(!i.get(S).__hasExternalTextures){const ie=Math.max(1,S.width>>$),ge=Math.max(1,S.height>>$);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,$,me,ie,ge,S.depth,0,Se,le,null):n.texImage2D(Q,$,me,ie,ge,0,Se,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Je(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,Q,i.get(O).__webglTexture,0,$e(S)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,Q,i.get(O).__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function oe(b,S,O){if(t.bindRenderbuffer(t.RENDERBUFFER,b),S.depthBuffer){const Y=S.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,$=v(S.stencilBuffer,Q),Se=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=$e(S);Je(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,$,S.width,S.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,$,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,$,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,b)}else{const Y=S.textures;for(let Q=0;Q<Y.length;Q++){const $=Y[Q],Se=s.convert($.format,$.colorSpace),le=s.convert($.type),me=y($.internalFormat,Se,le,$.colorSpace),Qe=$e(S);O&&Je(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Qe,me,S.width,S.height):Je(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Qe,me,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,me,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ae(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const Y=i.get(S.depthTexture).__webglTexture,Q=$e(S);if(S.depthTexture.format===Vo)Je(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0);else if(S.depthTexture.format===oa)Je(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ce(b){const S=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==b.depthTexture){const Y=b.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=Y}if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ae(S.__webglFramebuffer,b)}else if(O){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=t.createRenderbuffer(),oe(S.__webglDepthbuffer[Y],b,!1);else{const Q=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,$)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),oe(S.__webglDepthbuffer,b,!1);else{const Y=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,Q)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(b,S,O){const Y=i.get(b);S!==void 0&&J(Y.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&Ce(b)}function Ve(b){const S=b.texture,O=i.get(b),Y=i.get(S);b.addEventListener("dispose",C);const Q=b.textures,$=b.isWebGLCubeRenderTarget===!0,Se=Q.length>1;if(Se||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=S.version,o.memory.textures++),$){O.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[le]=[];for(let me=0;me<S.mipmaps.length;me++)O.__webglFramebuffer[le][me]=t.createFramebuffer()}else O.__webglFramebuffer[le]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)O.__webglFramebuffer[le]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(Se)for(let le=0,me=Q.length;le<me;le++){const Qe=i.get(Q[le]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&Je(b)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){const me=Q[le];O.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[le]);const Qe=s.convert(me.format,me.colorSpace),ie=s.convert(me.type),ge=y(me.internalFormat,Qe,ie,me.colorSpace,b.isXRRenderTarget===!0),Le=$e(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,ge,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,O.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),oe(O.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),ne(t.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)J(O.__webglFramebuffer[le][me],b,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,me);else J(O.__webglFramebuffer[le],b,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(S)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let le=0,me=Q.length;le<me;le++){const Qe=Q[le],ie=i.get(Qe);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),ne(t.TEXTURE_2D,Qe),J(O.__webglFramebuffer,b,Qe,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),m(Qe)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(le=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,Y.__webglTexture),ne(le,S),S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)J(O.__webglFramebuffer[me],b,S,t.COLOR_ATTACHMENT0,le,me);else J(O.__webglFramebuffer,b,S,t.COLOR_ATTACHMENT0,le,0);m(S)&&p(le),n.unbindTexture()}b.depthBuffer&&Ce(b)}function Ke(b){const S=b.textures;for(let O=0,Y=S.length;O<Y;O++){const Q=S[O];if(m(Q)){const $=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Se=i.get(Q).__webglTexture;n.bindTexture($,Se),p($),n.unbindTexture()}}}const Ue=[],L=[];function Nn(b){if(b.samples>0){if(Je(b)===!1){const S=b.textures,O=b.width,Y=b.height;let Q=t.COLOR_BUFFER_BIT;const $=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(b),le=S.length>1;if(le)for(let me=0;me<S.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let me=0;me<S.length;me++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[me]);const Qe=i.get(S[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Qe,0)}t.blitFramebuffer(0,0,O,Y,0,0,O,Y,Q,t.NEAREST),l===!0&&(Ue.length=0,L.length=0,Ue.push(t.COLOR_ATTACHMENT0+me),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ue.push($),L.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ue))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let me=0;me<S.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,Se.__webglColorRenderbuffer[me]);const Qe=i.get(S[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,Qe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const S=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function $e(b){return Math.min(r.maxSamples,b.samples)}function Je(b){const S=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pe(b){const S=o.render.frame;u.get(b)!==S&&(u.set(b,S),b.update())}function pt(b,S){const O=b.colorSpace,Y=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==en&&O!==Vr&&(et.getTransfer(O)===_t?(Y!==ni||Q!==mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function Ne(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=T,this.setTexture2D=W,this.setTexture2DArray=Z,this.setTexture3D=z,this.setTextureCube=te,this.rebindTextures=Te,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Nn,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Je}function UP(t,e){function n(i,r=Vr){let s;const o=et.getTransfer(r);if(i===mr)return t.UNSIGNED_BYTE;if(i===Ig)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ng)return t.UNSIGNED_SHORT_5_5_5_1;if(i===D1)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===I1)return t.BYTE;if(i===N1)return t.SHORT;if(i===Dl)return t.UNSIGNED_SHORT;if(i===Lg)return t.INT;if(i===Gs)return t.UNSIGNED_INT;if(i===Si)return t.FLOAT;if(i===cc)return t.HALF_FLOAT;if(i===U1)return t.ALPHA;if(i===O1)return t.RGB;if(i===ni)return t.RGBA;if(i===k1)return t.LUMINANCE;if(i===F1)return t.LUMINANCE_ALPHA;if(i===Vo)return t.DEPTH_COMPONENT;if(i===oa)return t.DEPTH_STENCIL;if(i===Dg)return t.RED;if(i===Ug)return t.RED_INTEGER;if(i===B1)return t.RG;if(i===Og)return t.RG_INTEGER;if(i===kg)return t.RGBA_INTEGER;if(i===Au||i===bu||i===Ru||i===Pu)if(o===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Au)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ru)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Au)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ru)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tp||i===Cp||i===Ap||i===bp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Tp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ap)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rp||i===Pp||i===Lp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Rp||i===Pp)return o===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Lp)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ip||i===Np||i===Dp||i===Up||i===Op||i===kp||i===Fp||i===Bp||i===zp||i===Hp||i===Vp||i===Gp||i===Wp||i===Xp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ip)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Np)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dp)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Up)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Op)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kp)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fp)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bp)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zp)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hp)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vp)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gp)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wp)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xp)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lu||i===jp||i===$p)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Lu)return o===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$p)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===z1||i===Yp||i===Kp||i===qp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Lu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Yp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===sa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class OP extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jr extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kP={type:"move"};class ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kP)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new jr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const FP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BP=`
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

}`;class zP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Vt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new gr({vertexShader:FP,fragmentShader:BP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new fn(new Pa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HP extends eo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new zP,m=n.getContextAttributes();let p=null,y=null;const v=[],x=[],A=new ce;let C=null;const M=new _n;M.layers.enable(1),M.viewport=new nt;const R=new _n;R.layers.enable(2),R.viewport=new nt;const H=[M,R],w=new OP;w.layers.enable(1),w.layers.enable(2);let T=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=v[X];return J===void 0&&(J=new ud,v[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=v[X];return J===void 0&&(J=new ud,v[X]=J),J.getGripSpace()},this.getHand=function(X){let J=v[X];return J===void 0&&(J=new ud,v[X]=J),J.getHandSpace()};function B(X){const J=x.indexOf(X.inputSource);if(J===-1)return;const oe=v[J];oe!==void 0&&(oe.update(X.inputSource,X.frame,c||o),oe.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",Z);for(let X=0;X<v.length;X++){const J=x[X];J!==null&&(x[X]=null,v[X].disconnect(J))}T=null,V=null,_.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,y=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",W),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Ws(d.framebufferWidth,d.framebufferHeight,{format:ni,type:mr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,oe=null,ae=null;m.depth&&(ae=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=m.stencil?oa:Vo,oe=m.stencil?sa:Gs);const Ce={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Ce),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Ws(h.textureWidth,h.textureHeight,{format:ni,type:mr,depthTexture:new nw(h.textureWidth,h.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(X){for(let J=0;J<X.removed.length;J++){const oe=X.removed[J],ae=x.indexOf(oe);ae>=0&&(x[ae]=null,v[ae].disconnect(oe))}for(let J=0;J<X.added.length;J++){const oe=X.added[J];let ae=x.indexOf(oe);if(ae===-1){for(let Te=0;Te<v.length;Te++)if(Te>=x.length){x.push(oe),ae=Te;break}else if(x[Te]===null){x[Te]=oe,ae=Te;break}if(ae===-1)break}const Ce=v[ae];Ce&&Ce.connect(oe)}}const z=new P,te=new P;function I(X,J,oe){z.setFromMatrixPosition(J.matrixWorld),te.setFromMatrixPosition(oe.matrixWorld);const ae=z.distanceTo(te),Ce=J.projectionMatrix.elements,Te=oe.projectionMatrix.elements,Ve=Ce[14]/(Ce[10]-1),Ke=Ce[14]/(Ce[10]+1),Ue=(Ce[9]+1)/Ce[5],L=(Ce[9]-1)/Ce[5],Nn=(Ce[8]-1)/Ce[0],$e=(Te[8]+1)/Te[0],Je=Ve*Nn,Pe=Ve*$e,pt=ae/(-Nn+$e),Ne=pt*-Nn;if(J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ne),X.translateZ(pt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ce[10]===-1)X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const b=Ve+pt,S=Ke+pt,O=Je-Ne,Y=Pe+(ae-Ne),Q=Ue*Ke/S*b,$=L*Ke/S*b;X.projectionMatrix.makePerspective(O,Y,Q,$,b,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function j(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let J=X.near,oe=X.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(oe=_.depthFar)),w.near=R.near=M.near=J,w.far=R.far=M.far=oe,(T!==w.near||V!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),T=w.near,V=w.far);const ae=X.parent,Ce=w.cameras;j(w,ae);for(let Te=0;Te<Ce.length;Te++)j(Ce[Te],ae);Ce.length===2?I(w,M,R):w.projectionMatrix.copy(M.projectionMatrix),K(X,w,ae)};function K(X,J,oe){oe===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(oe.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=aa*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(w)};let ne=null;function xe(X,J){if(u=J.getViewerPose(c||o),g=J,u!==null){const oe=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let ae=!1;oe.length!==w.cameras.length&&(w.cameras.length=0,ae=!0);for(let Te=0;Te<oe.length;Te++){const Ve=oe[Te];let Ke=null;if(d!==null)Ke=d.getViewport(Ve);else{const L=f.getViewSubImage(h,Ve);Ke=L.viewport,Te===0&&(e.setRenderTargetTextures(y,L.colorTexture,h.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(y))}let Ue=H[Te];Ue===void 0&&(Ue=new _n,Ue.layers.enable(Te),Ue.viewport=new nt,H[Te]=Ue),Ue.matrix.fromArray(Ve.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Ve.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Te===0&&(w.matrix.copy(Ue.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ae===!0&&w.cameras.push(Ue)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Te=f.getDepthInformation(oe[0]);Te&&Te.isValid&&Te.texture&&_.init(e,Te,r.renderState)}}for(let oe=0;oe<v.length;oe++){const ae=x[oe],Ce=v[oe];ae!==null&&Ce!==void 0&&Ce.update(ae,J,c||o)}ne&&ne(X,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const He=new tw;He.setAnimationLoop(xe),this.setAnimationLoop=function(X){ne=X},this.dispose=function(){}}}const Ss=new zi,VP=new De;function GP(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,J1(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),v=y.envMap,x=y.envMapRotation;v&&(m.envMap.value=v,Ss.copy(x),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),m.envMapRotation.value.setFromMatrix4(VP.makeRotationFromEuler(Ss)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function WP(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const x=v.program;i.uniformBlockBinding(y,x)}function c(y,v){let x=r[y.id];x===void 0&&(g(y),x=u(y),r[y.id]=x,y.addEventListener("dispose",m));const A=v.program;i.updateUBOMapping(y,A);const C=e.render.frame;s[y.id]!==C&&(h(y),s[y.id]=C)}function u(y){const v=f();y.__bindingPointIndex=v;const x=t.createBuffer(),A=y.__size,C=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,A,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,x),x}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const v=r[y.id],x=y.uniforms,A=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,M=x.length;C<M;C++){const R=Array.isArray(x[C])?x[C]:[x[C]];for(let H=0,w=R.length;H<w;H++){const T=R[H];if(d(T,C,H,A)===!0){const V=T.__offset,B=Array.isArray(T.value)?T.value:[T.value];let W=0;for(let Z=0;Z<B.length;Z++){const z=B[Z],te=_(z);typeof z=="number"||typeof z=="boolean"?(T.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,V+W,T.__data)):z.isMatrix3?(T.__data[0]=z.elements[0],T.__data[1]=z.elements[1],T.__data[2]=z.elements[2],T.__data[3]=0,T.__data[4]=z.elements[3],T.__data[5]=z.elements[4],T.__data[6]=z.elements[5],T.__data[7]=0,T.__data[8]=z.elements[6],T.__data[9]=z.elements[7],T.__data[10]=z.elements[8],T.__data[11]=0):(z.toArray(T.__data,W),W+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,T.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(y,v,x,A){const C=y.value,M=v+"_"+x;if(A[M]===void 0)return typeof C=="number"||typeof C=="boolean"?A[M]=C:A[M]=C.clone(),!0;{const R=A[M];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return A[M]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function g(y){const v=y.uniforms;let x=0;const A=16;for(let M=0,R=v.length;M<R;M++){const H=Array.isArray(v[M])?v[M]:[v[M]];for(let w=0,T=H.length;w<T;w++){const V=H[w],B=Array.isArray(V.value)?V.value:[V.value];for(let W=0,Z=B.length;W<Z;W++){const z=B[W],te=_(z),I=x%A,j=I%te.boundary,K=I+j;x+=j,K!==0&&A-K<te.storage&&(x+=A-K),V.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=te.storage}}}const C=x%A;return C>0&&(x+=A-C),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const y in r)t.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class XP{constructor(e={}){const{canvas:n=IC(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=Jr,this.toneMappingExposure=1;const v=this;let x=!1,A=0,C=0,M=null,R=-1,H=null;const w=new nt,T=new nt;let V=null;const B=new be(0);let W=0,Z=n.width,z=n.height,te=1,I=null,j=null;const K=new nt(0,0,Z,z),ne=new nt(0,0,Z,z);let xe=!1;const He=new Hg;let X=!1,J=!1;const oe=new De,ae=new De,Ce=new P,Te=new nt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function Ue(){return M===null?te:1}let L=i;function Nn(E,D){return n.getContext(E,D)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Pg}`),n.addEventListener("webglcontextlost",q,!1),n.addEventListener("webglcontextrestored",ue,!1),n.addEventListener("webglcontextcreationerror",de,!1),L===null){const D="webgl2";if(L=Nn(D,E),L===null)throw Nn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let $e,Je,Pe,pt,Ne,b,S,O,Y,Q,$,Se,le,me,Qe,ie,ge,Le,Ie,ve,Ye,Oe,ft,N;function fe(){$e=new qR(L),$e.init(),Oe=new UP(L,$e),Je=new WR(L,$e,e,Oe),Pe=new IP(L),Je.reverseDepthBuffer&&Pe.buffers.depth.setReversed(!0),pt=new QR(L),Ne=new vP,b=new DP(L,$e,Pe,Ne,Je,Oe,pt),S=new jR(v),O=new KR(v),Y=new oA(L),ft=new VR(L,Y),Q=new ZR(L,Y,pt,ft),$=new t2(L,Q,Y,pt),Ie=new e2(L,Je,b),ie=new XR(Ne),Se=new gP(v,S,O,$e,Je,ft,ie),le=new GP(v,Ne),me=new yP,Qe=new TP($e),Le=new HR(v,S,O,Pe,$,h,l),ge=new PP(v,$,Je),N=new WP(L,pt,Je,Pe),ve=new GR(L,$e,pt),Ye=new JR(L,$e,pt),pt.programs=Se.programs,v.capabilities=Je,v.extensions=$e,v.properties=Ne,v.renderLists=me,v.shadowMap=ge,v.state=Pe,v.info=pt}fe();const G=new HP(v,L);this.xr=G,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=$e.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=$e.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(E){E!==void 0&&(te=E,this.setSize(Z,z,!1))},this.getSize=function(E){return E.set(Z,z)},this.setSize=function(E,D,k=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,z=D,n.width=Math.floor(E*te),n.height=Math.floor(D*te),k===!0&&(n.style.width=E+"px",n.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(Z*te,z*te).floor()},this.setDrawingBufferSize=function(E,D,k){Z=E,z=D,te=k,n.width=Math.floor(E*k),n.height=Math.floor(D*k),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(K)},this.setViewport=function(E,D,k,F){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,D,k,F),Pe.viewport(w.copy(K).multiplyScalar(te).round())},this.getScissor=function(E){return E.copy(ne)},this.setScissor=function(E,D,k,F){E.isVector4?ne.set(E.x,E.y,E.z,E.w):ne.set(E,D,k,F),Pe.scissor(T.copy(ne).multiplyScalar(te).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(E){Pe.setScissorTest(xe=E)},this.setOpaqueSort=function(E){I=E},this.setTransparentSort=function(E){j=E},this.getClearColor=function(E){return E.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(E=!0,D=!0,k=!0){let F=0;if(E){let U=!1;if(M!==null){const re=M.texture.format;U=re===kg||re===Og||re===Ug}if(U){const re=M.texture.type,he=re===mr||re===Gs||re===Dl||re===sa||re===Ig||re===Ng,ye=Le.getClearColor(),we=Le.getClearAlpha(),Ae=ye.r,Re=ye.g,Me=ye.b;he?(d[0]=Ae,d[1]=Re,d[2]=Me,d[3]=we,L.clearBufferuiv(L.COLOR,0,d)):(g[0]=Ae,g[1]=Re,g[2]=Me,g[3]=we,L.clearBufferiv(L.COLOR,0,g))}else F|=L.COLOR_BUFFER_BIT}D&&(F|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(F|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",q,!1),n.removeEventListener("webglcontextrestored",ue,!1),n.removeEventListener("webglcontextcreationerror",de,!1),me.dispose(),Qe.dispose(),Ne.dispose(),S.dispose(),O.dispose(),$.dispose(),ft.dispose(),N.dispose(),Se.dispose(),G.dispose(),G.removeEventListener("sessionstart",Lv),G.removeEventListener("sessionend",Iv),gs.stop()};function q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const E=pt.autoReset,D=ge.enabled,k=ge.autoUpdate,F=ge.needsUpdate,U=ge.type;fe(),pt.autoReset=E,ge.enabled=D,ge.autoUpdate=k,ge.needsUpdate=F,ge.type=U}function de(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function qe(E){const D=E.target;D.removeEventListener("dispose",qe),Dt(D)}function Dt(E){Mn(E),Ne.remove(E)}function Mn(E){const D=Ne.get(E).programs;D!==void 0&&(D.forEach(function(k){Se.releaseProgram(k)}),E.isShaderMaterial&&Se.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,k,F,U,re){D===null&&(D=Ve);const he=U.isMesh&&U.matrixWorld.determinant()<0,ye=wT(E,D,k,F,U);Pe.setMaterial(F,he);let we=k.index,Ae=1;if(F.wireframe===!0){if(we=Q.getWireframeAttribute(k),we===void 0)return;Ae=2}const Re=k.drawRange,Me=k.attributes.position;let ot=Re.start*Ae,mt=(Re.start+Re.count)*Ae;re!==null&&(ot=Math.max(ot,re.start*Ae),mt=Math.min(mt,(re.start+re.count)*Ae)),we!==null?(ot=Math.max(ot,0),mt=Math.min(mt,we.count)):Me!=null&&(ot=Math.max(ot,0),mt=Math.min(mt,Me.count));const Rt=mt-ot;if(Rt<0||Rt===1/0)return;ft.setup(U,F,ye,k,we);let Dn,it=ve;if(we!==null&&(Dn=Y.get(we),it=Ye,it.setIndex(Dn)),U.isMesh)F.wireframe===!0?(Pe.setLineWidth(F.wireframeLinewidth*Ue()),it.setMode(L.LINES)):it.setMode(L.TRIANGLES);else if(U.isLine){let Ee=F.linewidth;Ee===void 0&&(Ee=1),Pe.setLineWidth(Ee*Ue()),U.isLineSegments?it.setMode(L.LINES):U.isLineLoop?it.setMode(L.LINE_LOOP):it.setMode(L.LINE_STRIP)}else U.isPoints?it.setMode(L.POINTS):U.isSprite&&it.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)it.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))it.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ee=U._multiDrawStarts,Kt=U._multiDrawCounts,rt=U._multiDrawCount,fi=we?Y.get(we).bytesPerElement:1,io=Ne.get(F).currentProgram.getUniforms();for(let Un=0;Un<rt;Un++)io.setValue(L,"_gl_DrawID",Un),it.render(Ee[Un]/fi,Kt[Un])}else if(U.isInstancedMesh)it.renderInstances(ot,Rt,U.count);else if(k.isInstancedBufferGeometry){const Ee=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Kt=Math.min(k.instanceCount,Ee);it.renderInstances(ot,Rt,Kt)}else it.render(ot,Rt)};function tt(E,D,k){E.transparent===!0&&E.side===Ni&&E.forceSinglePass===!1?(E.side=Rn,E.needsUpdate=!0,Tc(E,D,k),E.side=pr,E.needsUpdate=!0,Tc(E,D,k),E.side=Ni):Tc(E,D,k)}this.compile=function(E,D,k=null){k===null&&(k=E),m=Qe.get(k),m.init(D),y.push(m),k.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),E!==k&&E.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const F=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const re=U.material;if(re)if(Array.isArray(re))for(let he=0;he<re.length;he++){const ye=re[he];tt(ye,k,U),F.add(ye)}else tt(re,k,U),F.add(re)}),y.pop(),m=null,F},this.compileAsync=function(E,D,k=null){const F=this.compile(E,D,k);return new Promise(U=>{function re(){if(F.forEach(function(he){Ne.get(he).currentProgram.isReady()&&F.delete(he)}),F.size===0){U(E);return}setTimeout(re,10)}$e.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let En=null;function $i(E){En&&En(E)}function Lv(){gs.stop()}function Iv(){gs.start()}const gs=new tw;gs.setAnimationLoop($i),typeof self<"u"&&gs.setContext(self),this.setAnimationLoop=function(E){En=E,G.setAnimationLoop(E),E===null?gs.stop():gs.start()},G.addEventListener("sessionstart",Lv),G.addEventListener("sessionend",Iv),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(D),D=G.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,D,M),m=Qe.get(E,y.length),m.init(D),y.push(m),ae.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),He.setFromProjectionMatrix(ae),J=this.localClippingEnabled,X=ie.init(this.clippingPlanes,J),_=me.get(E,p.length),_.init(),p.push(_),G.enabled===!0&&G.isPresenting===!0){const re=v.xr.getDepthSensingMesh();re!==null&&If(re,D,-1/0,v.sortObjects)}If(E,D,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(I,j),Ke=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Ke&&Le.addToRenderList(_,E),this.info.render.frame++,X===!0&&ie.beginShadows();const k=m.state.shadowsArray;ge.render(k,E,D),X===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=_.opaque,U=_.transmissive;if(m.setupLights(),D.isArrayCamera){const re=D.cameras;if(U.length>0)for(let he=0,ye=re.length;he<ye;he++){const we=re[he];Dv(F,U,E,we)}Ke&&Le.render(E);for(let he=0,ye=re.length;he<ye;he++){const we=re[he];Nv(_,E,we,we.viewport)}}else U.length>0&&Dv(F,U,E,D),Ke&&Le.render(E),Nv(_,E,D);M!==null&&(b.updateMultisampleRenderTarget(M),b.updateRenderTargetMipmap(M)),E.isScene===!0&&E.onAfterRender(v,E,D),ft.resetDefaultState(),R=-1,H=null,y.pop(),y.length>0?(m=y[y.length-1],X===!0&&ie.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function If(E,D,k,F){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||He.intersectsSprite(E)){F&&Te.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ae);const he=$.update(E),ye=E.material;ye.visible&&_.push(E,he,ye,k,Te.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||He.intersectsObject(E))){const he=$.update(E),ye=E.material;if(F&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Te.copy(E.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Te.copy(he.boundingSphere.center)),Te.applyMatrix4(E.matrixWorld).applyMatrix4(ae)),Array.isArray(ye)){const we=he.groups;for(let Ae=0,Re=we.length;Ae<Re;Ae++){const Me=we[Ae],ot=ye[Me.materialIndex];ot&&ot.visible&&_.push(E,he,ot,k,Te.z,Me)}}else ye.visible&&_.push(E,he,ye,k,Te.z,null)}}const re=E.children;for(let he=0,ye=re.length;he<ye;he++)If(re[he],D,k,F)}function Nv(E,D,k,F){const U=E.opaque,re=E.transmissive,he=E.transparent;m.setupLightsView(k),X===!0&&ie.setGlobalState(v.clippingPlanes,k),F&&Pe.viewport(w.copy(F)),U.length>0&&Ec(U,D,k),re.length>0&&Ec(re,D,k),he.length>0&&Ec(he,D,k),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Dv(E,D,k,F){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[F.id]===void 0&&(m.state.transmissionRenderTarget[F.id]=new Ws(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?cc:mr,minFilter:lr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const re=m.state.transmissionRenderTarget[F.id],he=F.viewport||w;re.setSize(he.z,he.w);const ye=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(B),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),Ke&&Le.render(k);const we=v.toneMapping;v.toneMapping=Jr;const Ae=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),m.setupLightsView(F),X===!0&&ie.setGlobalState(v.clippingPlanes,F),Ec(E,k,F),b.updateMultisampleRenderTarget(re),b.updateRenderTargetMipmap(re),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Me=0,ot=D.length;Me<ot;Me++){const mt=D[Me],Rt=mt.object,Dn=mt.geometry,it=mt.material,Ee=mt.group;if(it.side===Ni&&Rt.layers.test(F.layers)){const Kt=it.side;it.side=Rn,it.needsUpdate=!0,Uv(Rt,k,F,Dn,it,Ee),it.side=Kt,it.needsUpdate=!0,Re=!0}}Re===!0&&(b.updateMultisampleRenderTarget(re),b.updateRenderTargetMipmap(re))}v.setRenderTarget(ye),v.setClearColor(B,W),Ae!==void 0&&(F.viewport=Ae),v.toneMapping=we}function Ec(E,D,k){const F=D.isScene===!0?D.overrideMaterial:null;for(let U=0,re=E.length;U<re;U++){const he=E[U],ye=he.object,we=he.geometry,Ae=F===null?he.material:F,Re=he.group;ye.layers.test(k.layers)&&Uv(ye,D,k,we,Ae,Re)}}function Uv(E,D,k,F,U,re){E.onBeforeRender(v,D,k,F,U,re),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(v,D,k,F,E,re),U.transparent===!0&&U.side===Ni&&U.forceSinglePass===!1?(U.side=Rn,U.needsUpdate=!0,v.renderBufferDirect(k,D,F,U,E,re),U.side=pr,U.needsUpdate=!0,v.renderBufferDirect(k,D,F,U,E,re),U.side=Ni):v.renderBufferDirect(k,D,F,U,E,re),E.onAfterRender(v,D,k,F,U,re)}function Tc(E,D,k){D.isScene!==!0&&(D=Ve);const F=Ne.get(E),U=m.state.lights,re=m.state.shadowsArray,he=U.state.version,ye=Se.getParameters(E,U.state,re,D,k),we=Se.getProgramCacheKey(ye);let Ae=F.programs;F.environment=E.isMeshStandardMaterial?D.environment:null,F.fog=D.fog,F.envMap=(E.isMeshStandardMaterial?O:S).get(E.envMap||F.environment),F.envMapRotation=F.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",qe),Ae=new Map,F.programs=Ae);let Re=Ae.get(we);if(Re!==void 0){if(F.currentProgram===Re&&F.lightsStateVersion===he)return kv(E,ye),Re}else ye.uniforms=Se.getUniforms(E),E.onBeforeCompile(ye,v),Re=Se.acquireProgram(ye,we),Ae.set(we,Re),F.uniforms=ye.uniforms;const Me=F.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Me.clippingPlanes=ie.uniform),kv(E,ye),F.needsLights=MT(E),F.lightsStateVersion=he,F.needsLights&&(Me.ambientLightColor.value=U.state.ambient,Me.lightProbe.value=U.state.probe,Me.directionalLights.value=U.state.directional,Me.directionalLightShadows.value=U.state.directionalShadow,Me.spotLights.value=U.state.spot,Me.spotLightShadows.value=U.state.spotShadow,Me.rectAreaLights.value=U.state.rectArea,Me.ltc_1.value=U.state.rectAreaLTC1,Me.ltc_2.value=U.state.rectAreaLTC2,Me.pointLights.value=U.state.point,Me.pointLightShadows.value=U.state.pointShadow,Me.hemisphereLights.value=U.state.hemi,Me.directionalShadowMap.value=U.state.directionalShadowMap,Me.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Me.spotShadowMap.value=U.state.spotShadowMap,Me.spotLightMatrix.value=U.state.spotLightMatrix,Me.spotLightMap.value=U.state.spotLightMap,Me.pointShadowMap.value=U.state.pointShadowMap,Me.pointShadowMatrix.value=U.state.pointShadowMatrix),F.currentProgram=Re,F.uniformsList=null,Re}function Ov(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=Nu.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function kv(E,D){const k=Ne.get(E);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.batchingColor=D.batchingColor,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function wT(E,D,k,F,U){D.isScene!==!0&&(D=Ve),b.resetTextureUnits();const re=D.fog,he=F.isMeshStandardMaterial?D.environment:null,ye=M===null?v.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:en,we=(F.isMeshStandardMaterial?O:S).get(F.envMap||he),Ae=F.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Re=!!k.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Me=!!k.morphAttributes.position,ot=!!k.morphAttributes.normal,mt=!!k.morphAttributes.color;let Rt=Jr;F.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Rt=v.toneMapping);const Dn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,it=Dn!==void 0?Dn.length:0,Ee=Ne.get(F),Kt=m.state.lights;if(X===!0&&(J===!0||E!==H)){const Zn=E===H&&F.id===R;ie.setState(F,E,Zn)}let rt=!1;F.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Kt.state.version||Ee.outputColorSpace!==ye||U.isBatchedMesh&&Ee.batching===!1||!U.isBatchedMesh&&Ee.batching===!0||U.isBatchedMesh&&Ee.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ee.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ee.instancing===!1||!U.isInstancedMesh&&Ee.instancing===!0||U.isSkinnedMesh&&Ee.skinning===!1||!U.isSkinnedMesh&&Ee.skinning===!0||U.isInstancedMesh&&Ee.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ee.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ee.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ee.instancingMorph===!1&&U.morphTexture!==null||Ee.envMap!==we||F.fog===!0&&Ee.fog!==re||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ie.numPlanes||Ee.numIntersection!==ie.numIntersection)||Ee.vertexAlphas!==Ae||Ee.vertexTangents!==Re||Ee.morphTargets!==Me||Ee.morphNormals!==ot||Ee.morphColors!==mt||Ee.toneMapping!==Rt||Ee.morphTargetsCount!==it)&&(rt=!0):(rt=!0,Ee.__version=F.version);let fi=Ee.currentProgram;rt===!0&&(fi=Tc(F,D,U));let io=!1,Un=!1,Nf=!1;const It=fi.getUniforms(),Ar=Ee.uniforms;if(Pe.useProgram(fi.program)&&(io=!0,Un=!0,Nf=!0),F.id!==R&&(R=F.id,Un=!0),io||H!==E){Je.reverseDepthBuffer?(oe.copy(E.projectionMatrix),DC(oe),UC(oe),It.setValue(L,"projectionMatrix",oe)):It.setValue(L,"projectionMatrix",E.projectionMatrix),It.setValue(L,"viewMatrix",E.matrixWorldInverse);const Zn=It.map.cameraPosition;Zn!==void 0&&Zn.setValue(L,Ce.setFromMatrixPosition(E.matrixWorld)),Je.logarithmicDepthBuffer&&It.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&It.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),H!==E&&(H=E,Un=!0,Nf=!0)}if(U.isSkinnedMesh){It.setOptional(L,U,"bindMatrix"),It.setOptional(L,U,"bindMatrixInverse");const Zn=U.skeleton;Zn&&(Zn.boneTexture===null&&Zn.computeBoneTexture(),It.setValue(L,"boneTexture",Zn.boneTexture,b))}U.isBatchedMesh&&(It.setOptional(L,U,"batchingTexture"),It.setValue(L,"batchingTexture",U._matricesTexture,b),It.setOptional(L,U,"batchingIdTexture"),It.setValue(L,"batchingIdTexture",U._indirectTexture,b),It.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&It.setValue(L,"batchingColorTexture",U._colorsTexture,b));const Df=k.morphAttributes;if((Df.position!==void 0||Df.normal!==void 0||Df.color!==void 0)&&Ie.update(U,k,fi),(Un||Ee.receiveShadow!==U.receiveShadow)&&(Ee.receiveShadow=U.receiveShadow,It.setValue(L,"receiveShadow",U.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Ar.envMap.value=we,Ar.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&D.environment!==null&&(Ar.envMapIntensity.value=D.environmentIntensity),Un&&(It.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ee.needsLights&&ST(Ar,Nf),re&&F.fog===!0&&le.refreshFogUniforms(Ar,re),le.refreshMaterialUniforms(Ar,F,te,z,m.state.transmissionRenderTarget[E.id]),Nu.upload(L,Ov(Ee),Ar,b)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Nu.upload(L,Ov(Ee),Ar,b),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&It.setValue(L,"center",U.center),It.setValue(L,"modelViewMatrix",U.modelViewMatrix),It.setValue(L,"normalMatrix",U.normalMatrix),It.setValue(L,"modelMatrix",U.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Zn=F.uniformsGroups;for(let Uf=0,ET=Zn.length;Uf<ET;Uf++){const Fv=Zn[Uf];N.update(Fv,fi),N.bind(Fv,fi)}}return fi}function ST(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function MT(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(E,D,k){Ne.get(E.texture).__webglTexture=D,Ne.get(E.depthTexture).__webglTexture=k;const F=Ne.get(E);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=k===void 0,F.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,D){const k=Ne.get(E);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,k=0){M=E,A=D,C=k;let F=!0,U=null,re=!1,he=!1;if(E){const we=Ne.get(E);if(we.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(L.FRAMEBUFFER,null),F=!1;else if(we.__webglFramebuffer===void 0)b.setupRenderTarget(E);else if(we.__hasExternalTextures)b.rebindTextures(E,Ne.get(E.texture).__webglTexture,Ne.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Me=E.depthTexture;if(we.__boundDepthTexture!==Me){if(Me!==null&&Ne.has(Me)&&(E.width!==Me.image.width||E.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(E)}}const Ae=E.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(he=!0);const Re=Ne.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?U=Re[D][k]:U=Re[D],re=!0):E.samples>0&&b.useMultisampledRTT(E)===!1?U=Ne.get(E).__webglMultisampledFramebuffer:Array.isArray(Re)?U=Re[k]:U=Re,w.copy(E.viewport),T.copy(E.scissor),V=E.scissorTest}else w.copy(K).multiplyScalar(te).floor(),T.copy(ne).multiplyScalar(te).floor(),V=xe;if(Pe.bindFramebuffer(L.FRAMEBUFFER,U)&&F&&Pe.drawBuffers(E,U),Pe.viewport(w),Pe.scissor(T),Pe.setScissorTest(V),re){const we=Ne.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,we.__webglTexture,k)}else if(he){const we=Ne.get(E.texture),Ae=D||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.__webglTexture,k||0,Ae)}R=-1},this.readRenderTargetPixels=function(E,D,k,F,U,re,he){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(ye=ye[he]),ye){Pe.bindFramebuffer(L.FRAMEBUFFER,ye);try{const we=E.texture,Ae=we.format,Re=we.type;if(!Je.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-F&&k>=0&&k<=E.height-U&&L.readPixels(D,k,F,U,Oe.convert(Ae),Oe.convert(Re),re)}finally{const we=M!==null?Ne.get(M).__webglFramebuffer:null;Pe.bindFramebuffer(L.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,D,k,F,U,re,he){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(ye=ye[he]),ye){const we=E.texture,Ae=we.format,Re=we.type;if(!Je.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=E.width-F&&k>=0&&k<=E.height-U){Pe.bindFramebuffer(L.FRAMEBUFFER,ye);const Me=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.bufferData(L.PIXEL_PACK_BUFFER,re.byteLength,L.STREAM_READ),L.readPixels(D,k,F,U,Oe.convert(Ae),Oe.convert(Re),0);const ot=M!==null?Ne.get(M).__webglFramebuffer:null;Pe.bindFramebuffer(L.FRAMEBUFFER,ot);const mt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await NC(L,mt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,re),L.deleteBuffer(Me),L.deleteSync(mt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,D=null,k=0){E.isTexture!==!0&&(Iu("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,E=arguments[1]);const F=Math.pow(2,-k),U=Math.floor(E.image.width*F),re=Math.floor(E.image.height*F),he=D!==null?D.x:0,ye=D!==null?D.y:0;b.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,he,ye,U,re),Pe.unbindTexture()},this.copyTextureToTexture=function(E,D,k=null,F=null,U=0){E.isTexture!==!0&&(Iu("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1],D=arguments[2],U=arguments[3]||0,k=null);let re,he,ye,we,Ae,Re;k!==null?(re=k.max.x-k.min.x,he=k.max.y-k.min.y,ye=k.min.x,we=k.min.y):(re=E.image.width,he=E.image.height,ye=0,we=0),F!==null?(Ae=F.x,Re=F.y):(Ae=0,Re=0);const Me=Oe.convert(D.format),ot=Oe.convert(D.type);b.setTexture2D(D,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const mt=L.getParameter(L.UNPACK_ROW_LENGTH),Rt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Dn=L.getParameter(L.UNPACK_SKIP_PIXELS),it=L.getParameter(L.UNPACK_SKIP_ROWS),Ee=L.getParameter(L.UNPACK_SKIP_IMAGES),Kt=E.isCompressedTexture?E.mipmaps[U]:E.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Kt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Kt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ye),L.pixelStorei(L.UNPACK_SKIP_ROWS,we),E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,Ae,Re,re,he,Me,ot,Kt.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,Ae,Re,Kt.width,Kt.height,Me,Kt.data):L.texSubImage2D(L.TEXTURE_2D,U,Ae,Re,re,he,Me,ot,Kt),L.pixelStorei(L.UNPACK_ROW_LENGTH,mt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Rt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Dn),L.pixelStorei(L.UNPACK_SKIP_ROWS,it),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ee),U===0&&D.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(E,D,k=null,F=null,U=0){E.isTexture!==!0&&(Iu("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,F=arguments[1]||null,E=arguments[2],D=arguments[3],U=arguments[4]||0);let re,he,ye,we,Ae,Re,Me,ot,mt;const Rt=E.isCompressedTexture?E.mipmaps[U]:E.image;k!==null?(re=k.max.x-k.min.x,he=k.max.y-k.min.y,ye=k.max.z-k.min.z,we=k.min.x,Ae=k.min.y,Re=k.min.z):(re=Rt.width,he=Rt.height,ye=Rt.depth,we=0,Ae=0,Re=0),F!==null?(Me=F.x,ot=F.y,mt=F.z):(Me=0,ot=0,mt=0);const Dn=Oe.convert(D.format),it=Oe.convert(D.type);let Ee;if(D.isData3DTexture)b.setTexture3D(D,0),Ee=L.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)b.setTexture2DArray(D,0),Ee=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const Kt=L.getParameter(L.UNPACK_ROW_LENGTH),rt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),fi=L.getParameter(L.UNPACK_SKIP_PIXELS),io=L.getParameter(L.UNPACK_SKIP_ROWS),Un=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Rt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Rt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,we),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ae),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Re),E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Ee,U,Me,ot,mt,re,he,ye,Dn,it,Rt.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(Ee,U,Me,ot,mt,re,he,ye,Dn,Rt.data):L.texSubImage3D(Ee,U,Me,ot,mt,re,he,ye,Dn,it,Rt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Kt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,rt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,fi),L.pixelStorei(L.UNPACK_SKIP_ROWS,io),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Un),U===0&&D.generateMipmaps&&L.generateMipmap(Ee),Pe.unbindTexture()},this.initRenderTarget=function(E){Ne.get(E).__webglFramebuffer===void 0&&b.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),Pe.unbindTexture()},this.resetState=function(){A=0,C=0,M=null,Pe.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Fg?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===Wh?"display-p3":"srgb"}}class jP extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class $P{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Jp,this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const mn=new P;class Wg{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)mn.fromBufferAttribute(this,n),mn.applyMatrix4(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)mn.fromBufferAttribute(this,n),mn.applyNormalMatrix(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)mn.fromBufferAttribute(this,n),mn.transformDirection(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=xi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=at(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=xi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=xi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=xi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=xi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new dn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wg(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const F_=new P,B_=new nt,z_=new nt,YP=new P,H_=new De,jc=new P,hd=new Gi,V_=new De,fd=new Ra;class KP extends fn{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wv,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mr),this.boundingBox.makeEmpty();const n=e.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,jc),this.boundingBox.expandByPoint(jc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gi),this.boundingSphere.makeEmpty();const n=e.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,jc),this.boundingSphere.expandByPoint(jc)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hd.copy(this.boundingSphere),hd.applyMatrix4(r),e.ray.intersectsSphere(hd)!==!1&&(V_.copy(r).invert(),fd.copy(e.ray).applyMatrix4(V_),!(this.boundingBox!==null&&fd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,fd)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,n=this.geometry.attributes.skinWeight;for(let i=0,r=n.count;i<r;i++){e.fromBufferAttribute(n,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),n.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wv?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===iC?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){const i=this.skeleton,r=this.geometry;B_.fromBufferAttribute(r.attributes.skinIndex,e),z_.fromBufferAttribute(r.attributes.skinWeight,e),F_.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let s=0;s<4;s++){const o=z_.getComponent(s);if(o!==0){const a=B_.getComponent(s);H_.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),n.addScaledVector(YP.copy(F_).applyMatrix4(H_),o)}}return n.applyMatrix4(this.bindMatrixInverse)}}class aw extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class lw extends Vt{constructor(e=null,n=1,i=1,r,s,o,a,l,c=yn,u=yn,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const G_=new De,qP=new De;class Xg{constructor(e=[],n=[]){this.uuid=ri(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){const i=new De;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,n=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:qP;G_.multiplyMatrices(a,n[s]),G_.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Xg(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const n=new Float32Array(e*e*4);n.set(this.boneMatrices);const i=new lw(n,e,e,ni,Si);return i.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=i,this}getBoneByName(e){for(let n=0,i=this.bones.length;n<i;n++){const r=this.bones[n];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=n[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new aw),this.bones.push(o),this.boneInverses.push(new De().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const n=this.bones,i=this.boneInverses;for(let r=0,s=n.length;r<s;r++){const o=n[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class em extends dn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const yo=new De,W_=new De,$c=[],X_=new Mr,ZP=new De,Xa=new fn,ja=new Gi;class JP extends fn{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new em(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,ZP)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Mr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,yo),X_.copy(e.boundingBox).applyMatrix4(yo),this.boundingBox.union(X_)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,yo),ja.copy(e.boundingSphere).applyMatrix4(yo),this.boundingSphere.union(ja)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Xa.geometry=this.geometry,Xa.material=this.material,Xa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ja.copy(this.boundingSphere),ja.applyMatrix4(i),e.ray.intersectsSphere(ja)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,yo),W_.multiplyMatrices(i,yo),Xa.matrixWorld=W_,Xa.raycast(e,$c);for(let o=0,a=$c.length;o<a;o++){const l=$c[o];l.instanceId=s,l.object=this,n.push(l)}$c.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new em(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new lw(new Float32Array(r*this.count),r,this.count,Dg,Si));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class cw extends ki{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ah=new P,lh=new P,j_=new De,$a=new Ra,Yc=new Gi,dd=new P,$_=new P;class jg extends ht{constructor(e=new hi,n=new cw){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ah.fromBufferAttribute(n,r-1),lh.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ah.distanceTo(lh);e.setAttribute("lineDistance",new si(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yc.copy(i.boundingSphere),Yc.applyMatrix4(r),Yc.radius+=s,e.ray.intersectsSphere(Yc)===!1)return;j_.copy(r).invert(),$a.copy(e.ray).applyMatrix4(j_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),y=u.getX(_+1),v=Kc(this,e,$a,l,p,y);v&&n.push(v)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Kc(this,e,$a,l,_,m);p&&n.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=Kc(this,e,$a,l,_,_+1);p&&n.push(p)}if(this.isLineLoop){const _=Kc(this,e,$a,l,g-1,d);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Kc(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(ah.fromBufferAttribute(o,r),lh.fromBufferAttribute(o,s),n.distanceSqToSegment(ah,lh,dd,$_)>i)return;dd.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(dd);if(!(l<e.near||l>e.far))return{distance:l,point:$_.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const Y_=new P,K_=new P;class QP extends jg{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Y_.fromBufferAttribute(n,r),K_.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Y_.distanceTo(K_);e.setAttribute("lineDistance",new si(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class eL extends jg{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class uw extends ki{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const q_=new De,tm=new Ra,qc=new Gi,Zc=new P;class tL extends ht{constructor(e=new hi,n=new uw){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qc.copy(i.boundingSphere),qc.applyMatrix4(r),qc.radius+=s,e.ray.intersectsSphere(qc)===!1)return;q_.copy(r).invert(),tm.copy(e.ray).applyMatrix4(q_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);Zc.fromBufferAttribute(f,m),Z_(Zc,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)Zc.fromBufferAttribute(f,g),Z_(Zc,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Z_(t,e,n,i,r,s,o){const a=tm.distanceSqToPoint(t);if(a<n){const l=new P;tm.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class hw extends Vt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,d=(o-u)/h;return(r+d)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new ce:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new P,r=[],s=[],o=[],a=new P,l=new De;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new P)}s[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(zt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(n===!0){let d=Math.acos(zt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class $g extends Wi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new ce){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class nL extends $g{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Yg(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,r(o,a,h,d)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Jc=new P,pd=new Yg,md=new Yg,gd=new Yg;class iL extends Wi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new P){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Jc.subVectors(r[0],r[1]).add(r[0]),c=Jc);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Jc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Jc),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),pd.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,_,m),md.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,_,m),gd.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(pd.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),md.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),gd.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(pd.calc(l),md.calc(l),gd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function J_(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function rL(t,e){const n=1-t;return n*n*e}function sL(t,e){return 2*(1-t)*t*e}function oL(t,e){return t*t*e}function gl(t,e,n,i){return rL(t,e)+sL(t,n)+oL(t,i)}function aL(t,e){const n=1-t;return n*n*n*e}function lL(t,e){const n=1-t;return 3*n*n*t*e}function cL(t,e){return 3*(1-t)*t*t*e}function uL(t,e){return t*t*t*e}function vl(t,e,n,i,r){return aL(t,e)+lL(t,n)+cL(t,i)+uL(t,r)}class fw extends Wi{constructor(e=new ce,n=new ce,i=new ce,r=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ce){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(vl(e,r.x,s.x,o.x,a.x),vl(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hL extends Wi{constructor(e=new P,n=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new P){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(vl(e,r.x,s.x,o.x,a.x),vl(e,r.y,s.y,o.y,a.y),vl(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dw extends Wi{constructor(e=new ce,n=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ce){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ce){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fL extends Wi{constructor(e=new P,n=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new P){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new P){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pw extends Wi{constructor(e=new ce,n=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ce){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(gl(e,r.x,s.x,o.x),gl(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dL extends Wi{constructor(e=new P,n=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new P){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(gl(e,r.x,s.x,o.x),gl(e,r.y,s.y,o.y),gl(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mw extends Wi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ce){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(J_(a,l.x,c.x,u.x,f.x),J_(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ce().fromArray(r))}return this}}var Q_=Object.freeze({__proto__:null,ArcCurve:nL,CatmullRomCurve3:iL,CubicBezierCurve:fw,CubicBezierCurve3:hL,EllipseCurve:$g,LineCurve:dw,LineCurve3:fL,QuadraticBezierCurve:pw,QuadraticBezierCurve3:dL,SplineCurve:mw});class pL extends Wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Q_[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Q_[r.type]().fromJSON(r))}return this}}class nm extends pL{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new dw(this.currentPoint.clone(),new ce(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new pw(this.currentPoint.clone(),new ce(e,n),new ce(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new fw(this.currentPoint.clone(),new ce(e,n),new ce(i,r),new ce(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new mw(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new $g(e,n,i,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class vd extends nm{constructor(e){super(e),this.uuid=ri(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new nm().fromJSON(r))}return this}}const mL={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=gw(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,f,h,d;if(i&&(s=xL(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let g=n;g<r;g+=n)f=t[g],h=t[g+1],f<a&&(a=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Fl(s,o,n,a,l,d,0),o}};function gw(t,e,n,i,r){let s,o;if(r===LL(t,e,n,i)>0)for(s=e;s<n;s+=i)o=ey(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=ey(s,t[s],t[s+1],o);return o&&jh(o,o.next)&&(zl(o),o=o.next),o}function Xs(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(jh(n,n.next)||Tt(n.prev,n,n.next)===0)){if(zl(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Fl(t,e,n,i,r,s,o){if(!t)return;!o&&s&&TL(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?vL(t,i,r,s):gL(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),zl(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=_L(Xs(t),e,n),Fl(t,e,n,i,r,s,2)):o===2&&yL(t,e,n,i,r,s):Fl(Xs(t),e,n,i,r,s,1);break}}}function gL(t){const e=t.prev,n=t,i=t.next;if(Tt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,h=r>s?r>o?r:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&Eo(r,a,s,l,o,c,g.x,g.y)&&Tt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vL(t,e,n,i){const r=t.prev,s=t,o=t.next;if(Tt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<f?u<h?u:h:f<h?f:h,_=a>l?a>c?a:c:l>c?l:c,m=u>f?u>h?u:h:f>h?f:h,p=im(d,g,e,n,i),y=im(_,m,e,n,i);let v=t.prevZ,x=t.nextZ;for(;v&&v.z>=p&&x&&x.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Eo(a,u,l,f,c,h,v.x,v.y)&&Tt(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&Eo(a,u,l,f,c,h,x.x,x.y)&&Tt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Eo(a,u,l,f,c,h,v.x,v.y)&&Tt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&Eo(a,u,l,f,c,h,x.x,x.y)&&Tt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function _L(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!jh(r,s)&&vw(r,i,i.next,s)&&Bl(r,s)&&Bl(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),zl(i),zl(i.next),i=t=s),i=i.next}while(i!==t);return Xs(i)}function yL(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&bL(o,a)){let l=_w(o,a);o=Xs(o,o.next),l=Xs(l,l.next),Fl(o,e,n,i,r,s,0),Fl(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function xL(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=gw(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(AL(c));for(r.sort(wL),s=0;s<r.length;s++)n=SL(r[s],n);return n}function wL(t,e){return t.x-e.x}function SL(t,e){const n=ML(t,e);if(!n)return e;const i=_w(n,t);return Xs(i,i.next),Xs(n,n.next)}function ML(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const h=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=s&&h>i&&(i=h,r=n.x<n.next.x?n:n.next,h===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,f;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Eo(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(f=Math.abs(o-n.y)/(s-n.x),Bl(n,t)&&(f<u||f===u&&(n.x>r.x||n.x===r.x&&EL(r,n)))&&(r=n,u=f)),n=n.next;while(n!==a);return r}function EL(t,e){return Tt(t.prev,t,e.prev)<0&&Tt(e.next,t,t.next)<0}function TL(t,e,n,i){let r=t;do r.z===0&&(r.z=im(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,CL(r)}function CL(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function im(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function AL(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Eo(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function bL(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!RL(t,e)&&(Bl(t,e)&&Bl(e,t)&&PL(t,e)&&(Tt(t.prev,t,e.prev)||Tt(t,e.prev,e))||jh(t,e)&&Tt(t.prev,t,t.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function jh(t,e){return t.x===e.x&&t.y===e.y}function vw(t,e,n,i){const r=eu(Tt(t,e,n)),s=eu(Tt(t,e,i)),o=eu(Tt(n,i,t)),a=eu(Tt(n,i,e));return!!(r!==s&&o!==a||r===0&&Qc(t,n,e)||s===0&&Qc(t,i,e)||o===0&&Qc(n,t,i)||a===0&&Qc(n,e,i))}function Qc(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function eu(t){return t>0?1:t<0?-1:0}function RL(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&vw(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Bl(t,e){return Tt(t.prev,t,t.next)<0?Tt(t,e,t.next)>=0&&Tt(t,t.prev,e)>=0:Tt(t,e,t.prev)<0||Tt(t,t.next,e)<0}function PL(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function _w(t,e){const n=new rm(t.i,t.x,t.y),i=new rm(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function ey(t,e,n,i){const r=new rm(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function zl(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function rm(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function LL(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class Kg{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Kg.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];ty(e),ny(i,e);let o=e.length;n.forEach(ty);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,ny(i,n[l]);const a=mL.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function ty(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function ny(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class qg extends hi{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let f=e;const h=(n-e)/r,d=new P,g=new ce;for(let _=0;_<=r;_++){for(let m=0;m<=i;m++){const p=s+m/i*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/n+1)/2,g.y=(d.y/n+1)/2,u.push(g.x,g.y)}f+=h}for(let _=0;_<r;_++){const m=_*(i+1);for(let p=0;p<i;p++){const y=p+m,v=y,x=y+i+1,A=y+i+2,C=y+1;a.push(v,x,C),a.push(x,A,C)}}this.setIndex(a),this.setAttribute("position",new si(l,3)),this.setAttribute("normal",new si(c,3)),this.setAttribute("uv",new si(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qg(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Zg extends ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=V1,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xi extends Zg{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function tu(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function IL(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function NL(t){function e(r,s){return t[r]-t[s]}const n=t.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(e),i}function iy(t,e,n){const i=t.length,r=new t.constructor(i);for(let s=0,o=0;o!==i;++s){const a=n[s]*e;for(let l=0;l!==e;++l)r[o++]=t[a+l]}return r}function yw(t,e,n,i){let r=1,s=t[0];for(;s!==void 0&&s[i]===void 0;)s=t[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),n.push.apply(n,o)),s=t[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(n,n.length)),s=t[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),n.push(o)),s=t[r++];while(s!==void 0)}class hc{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const n=this.parameterPositions;let i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=n[++i],e<r)break t}o=n.length;break n}if(!(e>=s)){const a=n[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=n[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<n[a]?o=a:i=a+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)n[o]=i[s+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class DL extends hc{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xv,endingEnd:Xv}}intervalChanged_(e,n,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case jv:s=e,a=2*n-i;break;case $v:s=r.length-2,a=n+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case jv:o=e,l=2*i-n;break;case $v:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=n}const c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,n,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(i-n)/(r-n),_=g*g,m=_*g,p=-h*m+2*h*_-h*g,y=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,v=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let A=0;A!==a;++A)s[A]=p*o[u+A]+y*o[c+A]+v*o[l+A]+x*o[f+A];return s}}class UL extends hc{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-n)/(r-n),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}}class OL extends hc{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ji{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=tu(n,this.TimeBufferType),this.values=tu(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:tu(e.times,Array),values:tu(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new OL(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new UL(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new DL(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case Ul:n=this.InterpolantFactoryMethodDiscrete;break;case Ol:n=this.InterpolantFactoryMethodLinear;break;case Of:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ul;case this.InterpolantFactoryMethodLinear:return Ol;case this.InterpolantFactoryMethodSmooth:return Of}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){const n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>n;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&IL(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Of,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const f=a*i,h=f-i,d=f+i;for(let g=0;g!==i;++g){const _=n[f+g];if(_!==n[h+g]||_!==n[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,h=o*i;for(let d=0;d!==i;++d)n[h+d]=n[f+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){const e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}}ji.prototype.TimeBufferType=Float32Array;ji.prototype.ValueBufferType=Float32Array;ji.prototype.DefaultInterpolation=Ol;class Ia extends ji{constructor(e,n,i){super(e,n,i)}}Ia.prototype.ValueTypeName="bool";Ia.prototype.ValueBufferType=Array;Ia.prototype.DefaultInterpolation=Ul;Ia.prototype.InterpolantFactoryMethodLinear=void 0;Ia.prototype.InterpolantFactoryMethodSmooth=void 0;class xw extends ji{}xw.prototype.ValueTypeName="color";class ca extends ji{}ca.prototype.ValueTypeName="number";class kL extends hc{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(r-n);let c=e*a;for(let u=c+a;c!==u;c+=4)Ci.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ua extends ji{InterpolantFactoryMethodLinear(e){return new kL(this.times,this.values,this.getValueSize(),e)}}ua.prototype.ValueTypeName="quaternion";ua.prototype.InterpolantFactoryMethodSmooth=void 0;class Na extends ji{constructor(e,n,i){super(e,n,i)}}Na.prototype.ValueTypeName="string";Na.prototype.ValueBufferType=Array;Na.prototype.DefaultInterpolation=Ul;Na.prototype.InterpolantFactoryMethodLinear=void 0;Na.prototype.InterpolantFactoryMethodSmooth=void 0;class ha extends ji{}ha.prototype.ValueTypeName="vector";class FL{constructor(e="",n=-1,i=[],r=rC){this.name=e,this.tracks=i,this.duration=n,this.blendMode=r,this.uuid=ri(),this.duration<0&&this.resetDuration()}static parse(e){const n=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)n.push(zL(i[o]).scale(r));const s=new this(e.name,e.duration,n,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const n=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)n.push(ji.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,n,i,r){const s=n.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=NL(l);l=iy(l,1,u),c=iy(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ca(".morphTargetInfluences["+n[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,n){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===n)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,n,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=r[f];h||(r[f]=h=[]),h.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],n,i));return o}static parseAnimation(e,n){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,h,d,g,_){if(d.length!==0){const m=[],p=[];yw(d,m,p,g),m.length!==0&&_.push(new f(h,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)d[h[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let y=0;y!==h[g].morphTargets.length;++y){const v=h[g];m.push(v.time),p.push(v.morphTarget===_?1:0)}r.push(new ca(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+n[f].name+"]";i(ha,d+".position",h,"pos",r),i(ua,d+".quaternion",h,"rot",r),i(ha,d+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let n=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];n=Math.max(n,s.times[s.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function BL(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ca;case"vector":case"vector2":case"vector3":case"vector4":return ha;case"color":return xw;case"quaternion":return ua;case"bool":case"boolean":return Ia;case"string":return Na}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function zL(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=BL(t.type);if(t.times===void 0){const n=[],i=[];yw(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}const $r={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class ww{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const HL=new ww;class fs{constructor(e){this.manager=e!==void 0?e:HL,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}fs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qi={};class VL extends Error{constructor(e,n){super(e),this.response=n}}class fc extends fs{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=$r.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(Qi[e]!==void 0){Qi[e].push({onLoad:n,onProgress:i,onError:r});return}Qi[e]=[],Qi[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Qi[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){f.read().then(({done:v,value:x})=>{if(v)p.close();else{_+=x.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let C=0,M=u.length;C<M;C++){const R=u[C];R.onProgress&&R.onProgress(A)}p.enqueue(x),y()}},v=>{p.error(v)})}}});return new Response(m)}else throw new VL(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{$r.add(e,c);const u=Qi[e];delete Qi[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Qi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Qi[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class GL extends fs{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=$r.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=kl("img");function l(){u(),$r.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Sw extends fs{constructor(e){super(e)}load(e,n,i,r){const s=new Vt,o=new GL(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class dc extends ht{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class WL extends dc{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const _d=new De,ry=new P,sy=new P;class Jg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hg,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;ry.setFromMatrixPosition(e.matrixWorld),n.position.copy(ry),sy.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(sy),n.updateMatrixWorld(),_d.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_d),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_d)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class XL extends Jg{constructor(){super(new _n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=aa*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class jL extends dc{constructor(e,n,i=0,r=Math.PI/3,s=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new XL}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const oy=new De,Ya=new P,yd=new P;class $L extends Jg{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ya.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ya),yd.copy(i.position),yd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(yd),i.updateMatrixWorld(),r.makeTranslation(-Ya.x,-Ya.y,-Ya.z),oy.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oy)}}class YL extends dc{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new $L}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class KL extends Jg{constructor(){super(new Vg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qL extends dc{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new KL}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ZL extends dc{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class _l{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let n="";for(let i=0,r=e.length;i<r;i++)n+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(n))}catch{return n}}static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}class JL extends fs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=$r.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{n&&n(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return $r.add(e,c),n&&n(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),$r.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});$r.add(e,l),s.manager.itemStart(e)}}let nu;class Mw{static getContext(){return nu===void 0&&(nu=new(window.AudioContext||window.webkitAudioContext)),nu}static setContext(e){nu=e}}class QL extends fs{constructor(e){super(e)}load(e,n,i,r){const s=this,o=new fc(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{const c=l.slice(0);Mw.getContext().decodeAudioData(c,function(f){n(f)}).catch(a)}catch(c){a(c)}},i,r);function a(l){r?r(l):console.error(l),s.manager.itemError(e)}}}class Ew{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ay(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=ay();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function ay(){return performance.now()}const Ms=new P,ly=new Ci,eI=new P,Es=new P;class tI extends ht{constructor(){super(),this.type="AudioListener",this.context=Mw.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Ew}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const n=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ms,ly,eI),Es.set(0,0,-1).applyQuaternion(ly),n.positionX){const r=this.context.currentTime+this.timeDelta;n.positionX.linearRampToValueAtTime(Ms.x,r),n.positionY.linearRampToValueAtTime(Ms.y,r),n.positionZ.linearRampToValueAtTime(Ms.z,r),n.forwardX.linearRampToValueAtTime(Es.x,r),n.forwardY.linearRampToValueAtTime(Es.y,r),n.forwardZ.linearRampToValueAtTime(Es.z,r),n.upX.linearRampToValueAtTime(i.x,r),n.upY.linearRampToValueAtTime(i.y,r),n.upZ.linearRampToValueAtTime(i.z,r)}else n.setPosition(Ms.x,Ms.y,Ms.z),n.setOrientation(Es.x,Es.y,Es.z,i.x,i.y,i.z)}}class nI extends ht{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const n=this.context.createBufferSource();return n.buffer=this.buffer,n.loop=this.loop,n.loopStart=this.loopStart,n.loopEnd=this.loopEnd,n.onended=this.onEnded.bind(this),n.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=n,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,n=this.filters.length;e<n;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,n=this.filters.length;e<n;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Qg="\\[\\]\\.:\\/",iI=new RegExp("["+Qg+"]","g"),e0="[^"+Qg+"]",rI="[^"+Qg.replace("\\.","")+"]",sI=/((?:WC+[\/:])*)/.source.replace("WC",e0),oI=/(WCOD+)?/.source.replace("WCOD",rI),aI=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",e0),lI=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",e0),cI=new RegExp("^"+sI+oI+aI+lI+"$"),uI=["material","materials","bones","map"];class hI{constructor(e,n,i){const r=i||lt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}}class lt{constructor(e,n,i){this.path=n,this.parsedPath=i||lt.parseTrackName(n),this.node=lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new lt.Composite(e,n,i):new lt(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(iI,"")}static parseTrackName(e){const n=cI.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);uI.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===n||a.uuid===n)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,i=n.objectName,r=n.propertyName;let s=n.propertyIndex;if(e||(e=lt.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=hI;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const cy=new De;class fI{constructor(e,n,i=0,r=1/0){this.ray=new Ra(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new zg,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return cy.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cy),this}intersectObject(e,n=!0,i=[]){return sm(e,this,i,n),i.sort(uy),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)sm(e[r],this,i,n);return i.sort(uy),i}}function uy(t,e){return t.distance-e.distance}function sm(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)sm(s[o],e,n,!0)}}class hy{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(zt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class dI{constructor(){this.type="ShapePath",this.color=new be,this.subPaths=[],this.currentPath=null}moveTo(e,n){return this.currentPath=new nm,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,n),this}lineTo(e,n){return this.currentPath.lineTo(e,n),this}quadraticCurveTo(e,n,i,r){return this.currentPath.quadraticCurveTo(e,n,i,r),this}bezierCurveTo(e,n,i,r,s,o){return this.currentPath.bezierCurveTo(e,n,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function n(p){const y=[];for(let v=0,x=p.length;v<x;v++){const A=p[v],C=new vd;C.curves=A.curves,y.push(C)}return y}function i(p,y){const v=y.length;let x=!1;for(let A=v-1,C=0;C<v;A=C++){let M=y[A],R=y[C],H=R.x-M.x,w=R.y-M.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(M=y[C],H=-H,R=y[A],w=-w),p.y<M.y||p.y>R.y)continue;if(p.y===M.y){if(p.x===M.x)return!0}else{const T=w*(p.x-M.x)-H*(p.y-M.y);if(T===0)return!0;if(T<0)continue;x=!x}}else{if(p.y!==M.y)continue;if(R.x<=p.x&&p.x<=M.x||M.x<=p.x&&p.x<=R.x)return!0}}return x}const r=Kg.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new vd,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const f=[],h=[];let d=[],g=0,_;h[g]=void 0,d[g]=[];for(let p=0,y=s.length;p<y;p++)a=s[p],_=a.getPoints(),o=r(_),o=e?!o:o,o?(!u&&h[g]&&g++,h[g]={s:new vd,p:_},h[g].s.curves=a.curves,u&&g++,d[g]=[]):d[g].push({h:a,p:_[0]});if(!h[0])return n(s);if(h.length>1){let p=!1,y=0;for(let v=0,x=h.length;v<x;v++)f[v]=[];for(let v=0,x=h.length;v<x;v++){const A=d[v];for(let C=0;C<A.length;C++){const M=A[C];let R=!0;for(let H=0;H<h.length;H++)i(M.p,h[H].p)&&(v!==H&&y++,R?(R=!1,f[H].push(M)):p=!0);R&&f[v].push(M)}}y>0&&p===!1&&(d=f)}let m;for(let p=0,y=h.length;p<y;p++){l=h[p].s,c.push(l),m=d[p];for(let v=0,x=m.length;v<x;v++)l.holes.push(m[v].h)}return c}}class pI extends eo{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pg);var Jt={};Jt.d=(t,e)=>{for(var n in e)Jt.o(e,n)&&!Jt.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})};Jt.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);Jt.r=t=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var $n={};Jt.d($n,{g1:()=>Yh,gO:()=>xl,km:()=>$h,zV:()=>Hl,ol:()=>g0,uM:()=>Kh,N1:()=>$w,xv:()=>m0,PH:()=>Zh,UH:()=>qh,ZP:()=>GI,Vx:()=>Yw});var $h={};Jt.r($h);Jt.d($h,{COLUMN:()=>Jh,COLUMN_REVERSE:()=>Cw,ROW:()=>yl,ROW_REVERSE:()=>Tw,contentDirection:()=>Aw});var Yh={};Jt.r(Yh);Jt.d(Yh,{CENTER:()=>n0,END:()=>i0,START:()=>t0,STRETCH:()=>bw,alignItems:()=>Rw,warnAboutDeprecatedAlignItems:()=>Pw});var Kh={};Jt.r(Kh);Jt.d(Kh,{CENTER:()=>s0,END:()=>o0,SPACE_AROUND:()=>a0,SPACE_BETWEEN:()=>l0,SPACE_EVENLY:()=>c0,START:()=>r0,justifyContent:()=>Lw});var qh={};Jt.r(qh);Jt.d(qh,{NORMAL:()=>Qh,NOWRAP:()=>pc,PRE:()=>ef,PRE_LINE:()=>Da,PRE_WRAP:()=>tf,WHITE_CHARS:()=>om,collapseWhitespaceOnInlines:()=>Uw,collapseWhitespaceOnString:()=>Iw,newlineBreakability:()=>Nw,shouldBreak:()=>Dw});var Zh={};Jt.r(Zh);Jt.d(Zh,{CENTER:()=>h0,JUSTIFY:()=>f0,JUSTIFY_CENTER:()=>zw,JUSTIFY_LEFT:()=>Bw,JUSTIFY_RIGHT:()=>ch,LEFT:()=>kw,RIGHT:()=>Fw,textAlign:()=>Hw});var mI=t=>{var e={};return Jt.d(e,t),e};const je=mI({BufferAttribute:()=>dn,BufferGeometry:()=>hi,CanvasTexture:()=>hw,Color:()=>be,FileLoader:()=>fc,LinearFilter:()=>hn,Mesh:()=>fn,Object3D:()=>ht,Plane:()=>sr,PlaneGeometry:()=>Pa,ShaderMaterial:()=>gr,TextureLoader:()=>Sw,Vector2:()=>ce,Vector3:()=>P}),yl="row",Tw="row-reverse",Jh="column",Cw="column-reverse";function Aw(t,e,n,i){let r=n,s="getWidth",o="x",a="y";e.indexOf(Jh)===0&&(s="getHeight",o="y",a="x");for(let l=0;l<t.childrenBoxes.length;l++){const c=t.childrenBoxes[l],u=c.id,f=c[s](),h=c.margin||0;r+=h*i,t.childrenPos[u]={[o]:r+f/2*i,[a]:0},r+=i*(f+h)}}const t0="start",n0="center",i0="end",bw="stretch";function Rw(t,e){const n=t.getAlignItems();gI.indexOf(n)===-1&&console.warn(`alignItems === '${n}' is not supported`);let i="getWidth",r="x";e.indexOf(yl)===0&&(i="getHeight",r="y");const s=t[i]()/2-(t.padding||0);t.childrenBoxes.forEach(o=>{let a;switch(n){case i0:case"right":case"bottom":e.indexOf(yl)===0?a=-s+o[i]()/2+(o.margin||0):a=s-o[i]()/2-(o.margin||0);break;case t0:case"left":case"top":e.indexOf(yl)===0?a=s-o[i]()/2-(o.margin||0):a=-s+o[i]()/2+(o.margin||0);break}t.childrenPos[o.id][r]=a||0})}function Pw(t){vI.indexOf(t)!==-1&&console.warn(`alignItems === '${t}' is deprecated and will be remove in 7.x.x. Fallback are 'start'|'end'`)}const gI=[t0,n0,i0,bw,"top","right","bottom","left"],vI=["top","right","bottom","left"],r0="start",s0="center",o0="end",a0="space-around",l0="space-between",c0="space-evenly";function Lw(t,e,n,i){const r=t.getJustifyContent();_I.indexOf(r)===-1&&console.warn(`justifyContent === '${r}' is not supported`);const s=e.indexOf("row")===0?"width":"height",o=t.getChildrenSideSum(s),l=(s==="width"?t.getInnerWidth():t.getInnerHeight())-o,c=n*2-o*Math.sign(n),u=yI(r,c),f=xI(t.childrenBoxes,l,r,i),h=e.indexOf("row")===0?"x":"y";t.childrenBoxes.forEach((d,g)=>{t.childrenPos[d.id][h]-=u-f[g]})}const _I=[r0,s0,o0,a0,l0,c0];function yI(t,e){switch(t){case o0:return e;case s0:return e/2}return 0}function xI(t,e,n,i){const r=Array(t.length).fill(0);if(e>0)switch(n){case l0:if(t.length>1){const s=e/(t.length-1)*i;r[0]=0;for(let o=1;o<t.length;o++)r[o]=s*o}break;case c0:if(t.length>1){const s=e/(t.length+1)*i;for(let o=0;o<t.length;o++)r[o]=s*(o+1)}break;case a0:if(t.length>1){const s=e/t.length*i,o=s/2;r[0]=o;for(let a=1;a<t.length;a++)r[a]=o+s*a}break}return r}function u0(t){return class extends t{constructor(n){super(n),this.isBoxComponent=!0,this.childrenPos={}}getInnerWidth(){const n=this.getContentDirection();switch(n){case"row":case"row-reverse":return this.width-(this.padding*2||0)||this.getChildrenSideSum("width");case"column":case"column-reverse":return this.getHighestChildSizeOn("width");default:console.error(`Invalid contentDirection : ${n}`);break}}getInnerHeight(){const n=this.getContentDirection();switch(n){case"row":case"row-reverse":return this.getHighestChildSizeOn("height");case"column":case"column-reverse":return this.height-(this.padding*2||0)||this.getChildrenSideSum("height");default:console.error(`Invalid contentDirection : ${n}`);break}}getChildrenSideSum(n){return this.childrenBoxes.reduce((i,r)=>{const s=r.margin*2||0,o=n==="width"?r.getWidth()+s:r.getHeight()+s;return i+o},0)}setPosFromParentRecords(){this.parentUI&&this.parentUI.childrenPos[this.id]&&(this.position.x=this.parentUI.childrenPos[this.id].x,this.position.y=this.parentUI.childrenPos[this.id].y)}computeChildrenPosition(){if(this.children.length>0){const n=this.getContentDirection();let i;switch(n){case yl:i=-this.getInnerWidth()/2;break;case Tw:i=this.getInnerWidth()/2;break;case Jh:i=this.getInnerHeight()/2;break;case Cw:i=-this.getInnerHeight()/2;break}const r=-Math.sign(i);Aw(this,n,i,r),Lw(this,n,i,r),Rw(this,n)}}getHighestChildSizeOn(n){return this.childrenBoxes.reduce((i,r)=>{const s=r.margin||0,o=n==="width"?r.getWidth()+s*2:r.getHeight()+s*2;return Math.max(i,o)},0)}getWidth(){return this.parentUI&&this.parentUI.getAlignItems()==="stretch"&&this.parentUI.getContentDirection().indexOf("column")!==-1?this.parentUI.getWidth()-(this.parentUI.padding*2||0):this.width||this.getInnerWidth()+(this.padding*2||0)}getHeight(){return this.parentUI&&this.parentUI.getAlignItems()==="stretch"&&this.parentUI.getContentDirection().indexOf("row")!==-1?this.parentUI.getHeight()-(this.parentUI.padding*2||0):this.height||this.getInnerHeight()+(this.padding*2||0)}}}const om={"	":"	","\n":`
`,"\r":"\r"," ":" "},Qh="normal",pc="nowrap",ef="pre",Da="pre-line",tf="pre-wrap",Iw=function(t,e){switch(e){case pc:case Qh:t=t.replace(/\n/g," ");case Da:t=t.replace(/[ ]{2,}/g," ");break}return t},Nw=function(t){switch(t){case ef:case tf:case Da:return"mandatory"}},Dw=function(t,e,n,i){const r=t[e];switch(i.WHITESPACE){case Qh:case Da:case tf:if(r.lineBreak==="mandatory")return!0;const s=r.kerning?r.kerning:0,o=r.xoffset?r.xoffset:0,a=r.xadvance?r.xadvance:r.width;if(n+a+o+s>i.INNER_WIDTH)return!0;const l=Ow(t,e,i);return wI(t[e-1],n,l,i);case ef:return r.lineBreak==="mandatory";case pc:default:return!1}},Uw=function(t,e){const n=t[0],i=t[t.length-1];switch(e){case tf:n.glyph&&n.glyph===`
`&&t.length>1&&dy([n],t[1]),i.glyph&&i.glyph===`
`&&t.length>1&&fy([i],t[t.length-2]);break;case Da:case pc:case Qh:let r=[],s;for(let o=0;o<t.length;o++){const a=t[o];if(a.glyph&&om[a.glyph]&&t.length>o){r.push(a),s=t[o+1];continue}break}dy(r,s),r=[],s=null;for(let o=t.length-1;o>0;o--){const a=t[o];if(a.glyph&&om[a.glyph]&&o>0){r.push(a),s=t[o-1];continue}break}fy(r,s);break;case ef:break;default:return console.warn(`whiteSpace: '${e}' is not valid`),0}return n.offsetX};function fy(t,e){if(e)for(let n=0;n<t.length;n++){const i=t[n];i.width=0,i.height=0,i.offsetX=e.offsetX+e.width}}function dy(t,e){if(e)for(let n=0;n<t.length;n++){const i=t[n];i.width=0,i.height=0,i.offsetX=e.offsetX}}function Ow(t,e,n,i){if(i=i||0,!t[e])return i;const r=t[e],s=r.kerning?r.kerning:0,o=r.xoffset?r.xoffset:0,a=r.xadvance?r.xadvance:r.width;return r.lineBreak?i+a:Ow(t,e+1,n,i+a+n.LETTERSPACING+o+s)}function wI(t,e,n,i){return!t||!t.glyph||e+n<i.INNER_WIDTH?!1:i.BREAKON.indexOf(t.glyph)>-1}const kw="left",Fw="right",h0="center",f0="justify",Bw="justify-left",ch="justify-right",zw="justify-center";function Hw(t,e,n){for(let i=0;i<t.length;i++){const r=t[i],s=SI(r,e,n,i===t.length-1);for(let o=0;o<r.length;o++)r[o].offsetX+=s;r.x=s}if(e.indexOf(f0)===0)for(let i=0;i<t.length;i++){const r=t[i];if(e.indexOf("-")!==-1&&i===t.length-1)return;const s=n-r.width;if(s<=0)return;let o=0;for(let u=1;u<r.length-1;u++)o+=r[u].glyph===" "?1:0;const a=s/o;let l=1;e===ch&&(r.reverse(),l=-1);let c=0;for(let u=1;u<=r.length-1;u++){const f=r[u];f.offsetX+=c*l,c+=f.glyph===" "?a:0}e===ch&&r.reverse()}}const SI=(t,e,n,i)=>{switch(e){case Bw:case f0:case kw:return-n/2;case ch:case Fw:return-t.width+n/2;case h0:return-t.width/2;case zw:return i?-t.width/2:-n/2;default:console.warn(`textAlign: '${e}' is not valid`)}};function Vw(t){return class extends t{computeInlinesPosition(){const n=this.getWidth()-(this.padding*2||0),i=this.getHeight()-(this.padding*2||0),r=this.getJustifyContent(),s=this.getTextAlign(),o=this.getInterLine(),a=this.computeLines();a.interLine=o;const l=Math.abs(a.height),c=(()=>{switch(r){case"start":return i/2;case"end":return l-i/2;case"center":return l/2;default:console.warn(`justifyContent: '${r}' is not valid`)}})();a.forEach(u=>{u.y+=c,u.forEach(f=>{f.offsetY+=c})}),Hw(a,s,n),this.lines=a}calculateBestFit(n){if(this.childrenInlines.length!==0)switch(n){case"grow":this.calculateGrowFit();break;case"shrink":this.calculateShrinkFit();break;case"auto":this.calculateAutoFit();break}}calculateGrowFit(){const n=this.getHeight()-(this.padding*2||0);let i=1;const r=.075,s=this.childrenInlines.find(u=>u.isText);let o=1,a=2,l=s._fitFontSize?s._fitFontSize/s.getFontSize():1,c;do if(c=this.calculateHeight(l),c>n){if(l<=o){this.childrenInlines.forEach(u=>{u.isInlineBlock||(u._fitFontSize=u.getFontSize())});break}a=l,l-=(a-o)/2}else{if(Math.abs(n-c)<r)break;Math.abs(l-a)<5e-10&&(a*=2),o=l,l+=(a-o)/2}while(++i<=10)}calculateShrinkFit(){const n=this.getHeight()-(this.padding*2||0);let i=1;const r=.075,s=this.childrenInlines.find(u=>u.isText);let o=0,a=1,l=s._fitFontSize?s._fitFontSize/s.getFontSize():1,c;do if(c=this.calculateHeight(l),c>n)a=l,l-=(a-o)/2;else{if(l>=a){this.childrenInlines.forEach(u=>{u.isInlineBlock||(u._fitFontSize=u.getFontSize())});break}if(Math.abs(n-c)<r)break;o=l,l+=(a-o)/2}while(++i<=10)}calculateAutoFit(){const n=this.getHeight()-(this.padding*2||0);let i=1;const r=.075,s=this.childrenInlines.find(u=>u.isText);let o=0,a=2,l=s._fitFontSize?s._fitFontSize/s.getFontSize():1,c;do if(c=this.calculateHeight(l),c>n)a=l,l-=(a-o)/2;else{if(Math.abs(n-c)<r)break;Math.abs(l-a)<5e-10&&(a*=2),o=l,l+=(a-o)/2}while(++i<=10)}computeLines(){const n=this.getWidth()-(this.padding*2||0),i=[[]];i.height=0;const r=this.getInterLine();this.childrenInlines.reduce((l,c)=>{if(!c.inlines)return;const u=c._fitFontSize||c.getFontSize(),f=c.isText?c.getLetterSpacing()*u:0,h=c.getWhiteSpace(),d=c.getBreakOn(),g={WHITESPACE:h,LETTERSPACING:f,BREAKON:d,INNER_WIDTH:n};return c.inlines.reduce((m,p,y,v)=>{const x=p.kerning?p.kerning:0,A=p.xoffset?p.xoffset:0,C=p.xadvance?p.xadvance:p.width;return Dw(v,y,m,g)?(i.push([p]),p.offsetX=A,p.width===0?0:C+f):(i[i.length-1].push(p),p.offsetX=m+A+x,m+C+x+f)},l)},0);let s=0,o=0,a=-r/2;return i.forEach(l=>{if(l.lineHeight=l.reduce((u,f)=>{const h=f.lineHeight!==void 0?f.lineHeight:f.height;return Math.max(u,h)},0),l.lineBase=l.reduce((u,f)=>{const h=f.lineBase!==void 0?f.lineBase:f.height;return Math.max(u,h)},0),l.width=0,l.height=l.lineHeight,l[0]){const u=this.getWhiteSpace(),f=Uw(l,u);l.forEach(h=>{h.offsetX-=f}),l.width=this.computeLineWidth(l),l.width>s&&(s=l.width),l.forEach(h=>{h.offsetY=a-h.height-h.anchor,h.lineHeight<l.lineHeight&&(h.offsetY-=l.lineBase-h.lineBase)}),l.y=a,o+=l.lineHeight+r,a=a-(l.lineHeight+r)}}),i.height=o,i.width=s,i}calculateHeight(n){this.childrenInlines.forEach(r=>{r.isInlineBlock||(r._fitFontSize=r.getFontSize()*n,r.calculateInlines(r._fitFontSize))});const i=this.computeLines();return Math.abs(i.height)}computeLineWidth(n){const i=n[0],r=n[n.length-1];return r.offsetX+r.width+i.offsetX}}}const MI=new je.FileLoader,am=[],Du={},EI=new je.TextureLoader,lm=[],Uu={},cn={};function TI(t,e){typeof e=="string"?AI(t,e):(cn[t.id]||(cn[t.id]={component:t}),d0(e),cn[t.id].json=e,t._updateFontFamily(e))}function CI(t,e){lm.indexOf(e)===-1&&(lm.push(e),EI.load(e,n=>{n.generateMipmaps=!1,n.minFilter=je.LinearFilter,n.magFilter=je.LinearFilter,Uu[e]=n;for(const i of Object.keys(cn))e===cn[i].textureURL&&cn[i].component._updateFontTexture(n)})),cn[t.id]||(cn[t.id]={component:t}),cn[t.id].textureURL=e,Uu[e]&&t._updateFontTexture(Uu[e])}function Gw(t){const e=cn[t.id];return!e&&t.parentUI?Gw(t.parentUI):e}function AI(t,e){am.indexOf(e)===-1&&(am.push(e),MI.load(e,n=>{const i=JSON.parse(n);d0(i),Du[e]=i;for(const r of Object.keys(cn))e===cn[r].jsonURL&&cn[r].component._updateFontFamily(i)})),cn[t.id]||(cn[t.id]={component:t}),cn[t.id].jsonURL=e,Du[e]&&t._updateFontFamily(Du[e])}function d0(t){if(t._kernings)return;const e={};for(let n=0;n<t.kernings.length;n++){const i=t.kernings[n];if(i.amount===0)continue;const r=String.fromCharCode(i.first,i.second);e[r]=i.amount}t._kernings=e}function bI(t,e,n){n.generateMipmaps=!1,n.minFilter=je.LinearFilter,n.magFilter=je.LinearFilter,am.push(t),Du[t]=e,d0(e),n&&(lm.push(t),Uu[t]=n)}const RI={setFontFamily:TI,setFontTexture:CI,getFontOf:Gw,addFont:bI},Hl=RI;class Os{static requestUpdate(e,n,i,r){e.traverse(s=>{s.isUI&&(this.requestedUpdates[s.id]?(n&&(this.requestedUpdates[s.id].updateParsing=!0),i&&(this.requestedUpdates[s.id].updateLayout=!0),r&&(this.requestedUpdates[s.id].updateInner=!0)):this.requestedUpdates[s.id]={updateParsing:n,updateLayout:i,updateInner:r,needCallback:n||i||r})})}static register(e){this.components.includes(e)||this.components.push(e)}static disposeOf(e){const n=this.components.indexOf(e);n>-1&&this.components.splice(n,1)}static update(){if(Object.keys(this.requestedUpdates).length>0){const e=this.components.filter(n=>!n.parentUI);e.forEach(n=>this.traverseParsing(n)),e.forEach(n=>this.traverseUpdates(n))}}static traverseParsing(e){const n=this.requestedUpdates[e.id];n&&n.updateParsing&&(e.parseParams(),n.updateParsing=!1),e.childrenUIs.forEach(i=>this.traverseParsing(i))}static traverseUpdates(e){const n=this.requestedUpdates[e.id];delete this.requestedUpdates[e.id],n&&n.updateLayout&&(n.updateLayout=!1,e.updateLayout()),n&&n.updateInner&&(n.updateInner=!1,e.updateInner()),e.childrenUIs.forEach(i=>{this.traverseUpdates(i)}),n&&n.needCallback&&e.onAfterUpdate()}}Os.components=[];Os.requestedUpdates={};const qt={container:null,fontFamily:null,fontSize:.05,fontKerning:"normal",bestFit:"none",offset:.01,interLine:.01,breakOn:`- ,.:?!
`,whiteSpace:Da,contentDirection:Jh,alignItems:n0,justifyContent:r0,textAlign:h0,textType:"MSDF",fontColor:new je.Color(16777215),fontOpacity:1,fontPXRange:4,fontSupersampling:!0,borderRadius:.01,borderWidth:0,borderColor:new je.Color("black"),borderOpacity:1,backgroundSize:"cover",backgroundColor:new je.Color(2236962),backgroundWhiteColor:new je.Color(16777215),backgroundOpacity:.8,backgroundOpaqueOpacity:1,getDefaultTexture:PI,hiddenOverflow:!1,letterSpacing:0};let iu;function PI(){if(!iu){const t=document.createElement("canvas").getContext("2d");t.canvas.width=1,t.canvas.height=1,t.fillStyle="#ffffff",t.fillRect(0,0,1,1),iu=new je.CanvasTexture(t.canvas),iu.isDefault=!0}return iu}function nf(t){return class extends t{constructor(i){super(i);Bv(this,"_rebuildParentUI",()=>{this.parent&&this.parent.isUI?this.parentUI=this.parent:this.parentUI=null});this.states={},this.currentState=void 0,this.isUI=!0,this.autoLayout=!0,this.childrenUIs=[],this.childrenBoxes=[],this.childrenTexts=[],this.childrenInlines=[],this.parentUI=null,this.addEventListener("added",this._rebuildParentUI),this.addEventListener("removed",this._rebuildParentUI)}getClippingPlanes(){const i=[];if(this.parentUI){if(this.isBlock&&this.parentUI.getHiddenOverflow()){const r=this.parentUI.getHeight()/2-(this.parentUI.padding||0),s=this.parentUI.getWidth()/2-(this.parentUI.padding||0),o=[new je.Plane(new je.Vector3(0,1,0),r),new je.Plane(new je.Vector3(0,-1,0),r),new je.Plane(new je.Vector3(1,0,0),s),new je.Plane(new je.Vector3(-1,0,0),s)];o.forEach(a=>{a.applyMatrix4(this.parent.matrixWorld)}),i.push(...o)}this.parentUI.parentUI&&i.push(...this.parentUI.getClippingPlanes())}return i}getHighestParent(){return this.parentUI?this.parent.getHighestParent():this}_getProperty(i){return this[i]===void 0&&this.parentUI?this.parent._getProperty(i):this[i]!==void 0?this[i]:qt[i]}getFontSize(){return this._getProperty("fontSize")}getFontKerning(){return this._getProperty("fontKerning")}getLetterSpacing(){return this._getProperty("letterSpacing")}getFontTexture(){return this.fontTexture===void 0&&this.parentUI?this.parent._getProperty("fontTexture"):this.fontTexture!==void 0?this.fontTexture:qt.getDefaultTexture()}getFontFamily(){return this._getProperty("fontFamily")}getBreakOn(){return this._getProperty("breakOn")}getWhiteSpace(){return this._getProperty("whiteSpace")}getTextAlign(){return this._getProperty("textAlign")}getTextType(){return this._getProperty("textType")}getFontColor(){return this._getProperty("fontColor")}getFontSupersampling(){return this._getProperty("fontSupersampling")}getFontOpacity(){return this._getProperty("fontOpacity")}getFontPXRange(){return this._getProperty("fontPXRange")}getBorderRadius(){return this._getProperty("borderRadius")}getBorderWidth(){return this._getProperty("borderWidth")}getBorderColor(){return this._getProperty("borderColor")}getBorderOpacity(){return this._getProperty("borderOpacity")}getContainer(){return!this.threeOBJ&&this.parent?this.parent.getContainer():this.threeOBJ?this:qt.container}getParentsNumber(i){return i=i||0,this.parentUI?this.parentUI.getParentsNumber(i+1):i}getBackgroundOpacity(){return!this.backgroundOpacity&&this.backgroundOpacity!==0?qt.backgroundOpacity:this.backgroundOpacity}getBackgroundColor(){return this.backgroundColor||qt.backgroundColor}getBackgroundTexture(){return this.backgroundTexture||qt.getDefaultTexture()}getAlignContent(){return this.alignContent||qt.alignContent}getAlignItems(){return this.alignItems||qt.alignItems}getContentDirection(){return this.contentDirection||qt.contentDirection}getJustifyContent(){return this.justifyContent||qt.justifyContent}getInterLine(){return this.interLine===void 0?qt.interLine:this.interLine}getOffset(){return this.offset===void 0?qt.offset:this.offset}getBackgroundSize(){return this.backgroundSize===void 0?qt.backgroundSize:this.backgroundSize}getHiddenOverflow(){return this.hiddenOverflow===void 0?qt.hiddenOverflow:this.hiddenOverflow}getBestFit(){return this.bestFit===void 0?qt.bestFit:this.bestFit}_rebuildChildrenLists(){this.childrenUIs=this.children.filter(i=>i.isUI),this.childrenBoxes=this.children.filter(i=>i.isBoxComponent),this.childrenInlines=this.children.filter(i=>i.isInline),this.childrenTexts=this.children.filter(i=>i.isText)}add(){for(const r of Object.keys(arguments))arguments[r].isInline&&this.update(null,!0);const i=super.add(...arguments);return this._rebuildChildrenLists(),i}remove(){for(const r of Object.keys(arguments))arguments[r].isInline&&this.update(null,!0);const i=super.remove(...arguments);return this._rebuildChildrenLists(),i}update(i,r,s){Os.requestUpdate(this,i,r,s)}onAfterUpdate(){}_updateFontFamily(i){this.fontFamily=i,this.traverse(r=>{r.isUI&&r.update(!0,!0,!1)}),this.getHighestParent().update(!1,!0,!1)}_updateFontTexture(i){this.fontTexture=i,this.getHighestParent().update(!1,!0,!1)}set(i){let r,s,o;if(Os.register(this),!(!i||JSON.stringify(i)===JSON.stringify({}))){i.alignContent&&(i.alignItems=i.alignContent,i.textAlign||(i.textAlign=i.alignContent),console.warn("`alignContent` property has been deprecated, please rely on `alignItems` and `textAlign` instead."),delete i.alignContent),i.alignItems&&Pw(i.alignItems);for(const a of Object.keys(i))if(this[a]!=i[a])switch(a){case"content":case"fontSize":case"fontKerning":case"breakOn":case"whiteSpace":this.isText&&(r=!0),s=!0,this[a]=i[a];break;case"bestFit":this.isBlock&&(r=!0,s=!0),this[a]=i[a];break;case"width":case"height":case"padding":(this.isInlineBlock||this.isBlock&&this.getBestFit()!="none")&&(r=!0),s=!0,this[a]=i[a];break;case"letterSpacing":case"interLine":this.isBlock&&this.getBestFit()!="none"&&(r=!0),s=!0,this[a]=i[a];break;case"margin":case"contentDirection":case"justifyContent":case"alignContent":case"alignItems":case"textAlign":case"textType":s=!0,this[a]=i[a];break;case"fontColor":case"fontOpacity":case"fontSupersampling":case"offset":case"backgroundColor":case"backgroundOpacity":case"backgroundTexture":case"backgroundSize":case"borderRadius":case"borderWidth":case"borderColor":case"borderOpacity":o=!0,this[a]=i[a];break;case"hiddenOverflow":this[a]=i[a];break}i.fontFamily&&Hl.setFontFamily(this,i.fontFamily),i.fontTexture&&Hl.setFontTexture(this,i.fontTexture),this.parentUI&&this.parentUI.getBestFit()!="none"&&this.parentUI.update(!0,!0,!1),this.update(r,s,o),s&&this.getHighestParent().update(!1,!0,!1)}}setupState(i){this.states[i.state]={attributes:i.attributes,onSet:i.onSet}}setState(i){const r=this.states[i];if(!r){console.warn(`state "${i}" does not exist within this component:`,this.name);return}i!==this.currentState&&(this.currentState=i,r.onSet&&r.onSet(),r.attributes&&this.set(r.attributes))}clear(){this.traverse(i=>{Os.disposeOf(i),i.material&&i.material.dispose(),i.geometry&&i.geometry.dispose()})}}}function p0(t){return class extends t{constructor(n){super(n),this.textUniforms={u_texture:{value:this.getFontTexture()},u_color:{value:this.getFontColor()},u_opacity:{value:this.getFontOpacity()},u_pxRange:{value:this.getFontPXRange()},u_useRGSS:{value:this.getFontSupersampling()}},this.backgroundUniforms={u_texture:{value:this.getBackgroundTexture()},u_color:{value:this.getBackgroundColor()},u_opacity:{value:this.getBackgroundOpacity()},u_backgroundMapping:{value:this.getBackgroundSize()},u_borderWidth:{value:this.getBorderWidth()},u_borderColor:{value:this.getBorderColor()},u_borderRadiusTopLeft:{value:this.getBorderRadius()},u_borderRadiusTopRight:{value:this.getBorderRadius()},u_borderRadiusBottomRight:{value:this.getBorderRadius()},u_borderRadiusBottomLeft:{value:this.getBorderRadius()},u_borderOpacity:{value:this.getBorderOpacity()},u_size:{value:new je.Vector2(1,1)},u_tSize:{value:new je.Vector2(1,1)}}}updateBackgroundMaterial(){this.backgroundUniforms.u_texture.value=this.getBackgroundTexture(),this.backgroundUniforms.u_tSize.value.set(this.backgroundUniforms.u_texture.value.image.width,this.backgroundUniforms.u_texture.value.image.height),this.size&&this.backgroundUniforms.u_size.value.copy(this.size),this.backgroundUniforms.u_texture.value.isDefault?(this.backgroundUniforms.u_color.value=this.getBackgroundColor(),this.backgroundUniforms.u_opacity.value=this.getBackgroundOpacity()):(this.backgroundUniforms.u_color.value=this.backgroundColor||qt.backgroundWhiteColor,this.backgroundUniforms.u_opacity.value=!this.backgroundOpacity&&this.backgroundOpacity!==0?qt.backgroundOpaqueOpacity:this.backgroundOpacity),this.backgroundUniforms.u_backgroundMapping.value=(()=>{switch(this.getBackgroundSize()){case"stretch":return 0;case"contain":return 1;case"cover":return 2}})();const n=this.getBorderRadius();this.backgroundUniforms.u_borderWidth.value=this.getBorderWidth(),this.backgroundUniforms.u_borderColor.value=this.getBorderColor(),this.backgroundUniforms.u_borderOpacity.value=this.getBorderOpacity(),Array.isArray(n)?(this.backgroundUniforms.u_borderRadiusTopLeft.value=n[0],this.backgroundUniforms.u_borderRadiusTopRight.value=n[1],this.backgroundUniforms.u_borderRadiusBottomRight.value=n[2],this.backgroundUniforms.u_borderRadiusBottomLeft.value=n[3]):(this.backgroundUniforms.u_borderRadiusTopLeft.value=n,this.backgroundUniforms.u_borderRadiusTopRight.value=n,this.backgroundUniforms.u_borderRadiusBottomRight.value=n,this.backgroundUniforms.u_borderRadiusBottomLeft.value=n)}updateTextMaterial(){this.textUniforms.u_texture.value=this.getFontTexture(),this.textUniforms.u_color.value=this.getFontColor(),this.textUniforms.u_opacity.value=this.getFontOpacity(),this.textUniforms.u_pxRange.value=this.getFontPXRange(),this.textUniforms.u_useRGSS.value=this.getFontSupersampling()}getBackgroundMaterial(){return(!this.backgroundMaterial||!this.backgroundUniforms)&&(this.backgroundMaterial=this._makeBackgroundMaterial()),this.backgroundMaterial}getFontMaterial(){return(!this.fontMaterial||!this.textUniforms)&&(this.fontMaterial=this._makeTextMaterial()),this.fontMaterial}_makeTextMaterial(){return new je.ShaderMaterial({uniforms:this.textUniforms,transparent:!0,clipping:!0,vertexShader:LI,fragmentShader:II,extensions:{derivatives:!0}})}_makeBackgroundMaterial(){return new je.ShaderMaterial({uniforms:this.backgroundUniforms,transparent:!0,clipping:!0,vertexShader:NI,fragmentShader:DI,extensions:{derivatives:!0}})}updateClippingPlanes(n){const i=n!==void 0?n:this.getClippingPlanes();JSON.stringify(i)!==JSON.stringify(this.clippingPlanes)&&(this.clippingPlanes=i,this.fontMaterial&&(this.fontMaterial.clippingPlanes=this.clippingPlanes),this.backgroundMaterial&&(this.backgroundMaterial.clippingPlanes=this.clippingPlanes))}}}const LI=`
varying vec2 vUv;

#include <clipping_planes_pars_vertex>

void main() {

	vUv = uv;
	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
	gl_Position = projectionMatrix * mvPosition;
	gl_Position.z -= 0.00001;

	#include <clipping_planes_vertex>

}
`,II=`

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
`,NI=`
varying vec2 vUv;

#include <clipping_planes_pars_vertex>

void main() {

	vUv = uv;
	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
	gl_Position = projectionMatrix * mvPosition;

	#include <clipping_planes_vertex>

}
`,DI=`

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
`;class Ww extends je.Mesh{constructor(e){const n=new je.PlaneGeometry;super(n,e),this.castShadow=!0,this.receiveShadow=!0,this.name="MeshUI-Frame"}}let Ou=null;function fa(...t){if(!Ou)throw new Error("Cannot use mixins with Base null");let e=Ou;Ou=null;let n=t.length,i;for(;--n>=0;)i=t[n],e=i(e);return e}fa.withBase=t=>(Ou=t,fa);class xl extends fa.withBase(je.Object3D)(u0,Vw,p0,nf){constructor(e){super(e),this.isBlock=!0,this.size=new je.Vector2(1,1),this.frame=new Ww(this.getBackgroundMaterial()),this.frame.onBeforeRender=()=>{this.updateClippingPlanes&&this.updateClippingPlanes()},this.add(this.frame),this.set(e)}parseParams(){const e=this.getBestFit();e!="none"&&this.childrenTexts.length?this.calculateBestFit(e):this.childrenTexts.forEach(n=>{n._fitFontSize=void 0})}updateLayout(){const e=this.getWidth(),n=this.getHeight();if(!e||!n){console.warn("Block got no dimension from its parameters or from children parameters");return}this.size.set(e,n),this.frame.scale.set(e,n,1),this.frame&&this.updateBackgroundMaterial(),this.frame.renderOrder=this.getParentsNumber(),this.autoLayout&&this.setPosFromParentRecords(),this.childrenInlines.length&&this.computeInlinesPosition(),this.computeChildrenPosition(),this.parentUI&&(this.position.z=this.getOffset())}updateInner(){this.parentUI&&(this.position.z=this.getOffset()),this.frame&&this.updateBackgroundMaterial()}}function Xw(t){return class extends t{constructor(n){super(n),this.isInline=!0}}}function UI(t,e=!1){const n=t[0].index!==null,i=new Set(Object.keys(t[0].attributes)),r=new Set(Object.keys(t[0].morphAttributes)),s={},o={},a=t[0].morphTargetsRelative,l=new je.BufferGeometry;let c=0;for(let u=0;u<t.length;++u){const f=t[u];let h=0;if(n!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(f.attributes[d]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(l.userData.mergedUserData=l.userData.mergedUserData||[],l.userData.mergedUserData.push(f.userData),e){let d;if(n)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(n){let u=0;const f=[];for(let h=0;h<t.length;++h){const d=t[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+u);u+=t[h].attributes.position.count}l.setIndex(f)}for(const u in s){const f=py(s[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){const d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][h]);const g=py(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function py(t){let e,n,i,r=0;for(let a=0;a<t.length;++a){const l=t[a];if(l.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=l.array.constructor),e!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=l.itemSize),n!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=l.normalized),i!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;r+=l.array.length}const s=new e(r);let o=0;for(let a=0;a<t.length;++a)s.set(t[a].array,o),o+=t[a].array.length;return new je.BufferAttribute(s,n,i)}class OI extends je.PlaneGeometry{constructor(e,n){const i=e.glyph,r=e.fontSize;super(e.width,e.height),i.match(/\s/g)===null?(n.info.charset.indexOf(i)===-1&&console.error(`The character '${i}' is not included in the font characters set.`),this.mapUVs(n,i),this.transformGeometry(e)):(this.nullifyUVs(),this.scale(0,0,1),this.translate(0,r/2,0))}mapUVs(e,n){const i=e.chars.find(u=>u.char===n),r=e.common,s=i.x/r.scaleW,o=(i.x+i.width)/r.scaleW,a=1-(i.y+i.height)/r.scaleH,l=1-i.y/r.scaleH,c=this.attributes.uv;for(let u=0;u<c.count;u++){let f=c.getX(u),h=c.getY(u);[f,h]=(()=>{switch(u){case 0:return[s,l];case 1:return[o,l];case 2:return[s,a];case 3:return[o,a]}})(),c.setXY(u,f,h)}}nullifyUVs(){const e=this.attributes.uv;for(let n=0;n<e.count;n++)e.setXY(n,0,0)}transformGeometry(e){this.translate(e.width/2,e.height/2,0)}}function kI(t){const e=t.font,n=t.fontSize,i=t.glyph,r=n/e.info.size,s=e.chars.find(f=>f.char===i);let o=s?s.width*r:n/3,a=s?s.height*r:0;o===0&&(o=s?s.xadvance*r:n),a===0&&(a=n*.7),i===`
`&&(o=0);const l=s?s.xadvance*r:o,c=s?s.xoffset*r:0,u=s?s.yoffset*r:0;return{width:o,height:a,anchor:u,xadvance:l,xoffset:c}}function FI(t,e){const n=t._kernings;return n[e]?n[e]:0}function BI(){const t=[];this.inlines.forEach((i,r)=>{t[r]=new OI(i,this.getFontFamily()),t[r].translate(i.offsetX,i.offsetY,0)});const e=UI(t);return new je.Mesh(e,this.getFontMaterial())}const xd={getGlyphDimensions:kI,getGlyphPairKerning:FI,buildText:BI};function zI(t){return class extends t{createText(){const n=this,i=(()=>{switch(this.getTextType()){case"MSDF":return xd.buildText.call(this);default:console.warn(`'${this.getTextType()}' is not a supported text type.
See https://github.com/felixmariotto/three-mesh-ui/wiki/Using-a-custom-text-type`);break}})();return i.renderOrder=1/0,i.onBeforeRender=function(){n.updateClippingPlanes&&n.updateClippingPlanes()},i}getGlyphDimensions(n){switch(n.textType){case"MSDF":return xd.getGlyphDimensions(n);default:console.warn(`'${n.textType}' is not a supported text type.
See https://github.com/felixmariotto/three-mesh-ui/wiki/Using-a-custom-text-type`);break}}getGlyphPairKerning(n,i,r){switch(n){case"MSDF":return xd.getGlyphPairKerning(i,r);default:console.warn(`'${n}' is not a supported text type.
See https://github.com/felixmariotto/three-mesh-ui/wiki/Using-a-custom-text-type`);break}}}}function jw(t){t.children.forEach(e=>{e.children.length>0&&jw(e),t.remove(e),Os.disposeOf(e),e.material&&e.material.dispose(),e.geometry&&e.geometry.dispose()}),t.children=[]}const HI=jw;class m0 extends fa.withBase(je.Object3D)(Xw,zI,p0,nf){constructor(e){super(e),this.isText=!0,this.set(e)}parseParams(){this.calculateInlines(this._fitFontSize||this.getFontSize())}updateLayout(){HI(this),this.inlines&&(this.textContent=this.createText(),this.updateTextMaterial(),this.add(this.textContent)),this.position.z=this.getOffset()}updateInner(){this.position.z=this.getOffset(),this.textContent&&this.updateTextMaterial()}calculateInlines(e){const n=this.content,i=this.getFontFamily(),r=this.getBreakOn(),s=this.getTextType(),o=this.getWhiteSpace();if(!i||typeof i=="string"){Hl.getFontOf(this)||console.warn("no font was found");return}if(!this.content){this.inlines=null;return}if(!s){console.error(`You must provide a 'textType' attribute so three-mesh-ui knows how to render your text.
 See https://github.com/felixmariotto/three-mesh-ui/wiki/Using-a-custom-text-type`);return}const a=Iw(n,o),l=Array.from?Array.from(a):String(a).split(""),c=e/i.info.size,u=i.common.lineHeight*c,f=i.common.base*c,h=l.map(d=>{const g=this.getGlyphDimensions({textType:s,glyph:d,font:i,fontSize:e});let _=null;return o!==pc&&(r.includes(d)||d.match(/\s/g))&&(_="possible"),d.match(/\n/g)&&(_=Nw(o)),{height:g.height,width:g.width,anchor:g.anchor,xadvance:g.xadvance,xoffset:g.xoffset,lineBreak:_,glyph:d,fontSize:e,lineHeight:u,lineBase:f}});if(this.getFontKerning()!=="none")for(let d=1;d<h.length;d++){const g=h[d],_=h[d-1].glyph+h[d].glyph,m=this.getGlyphPairKerning(s,i,_);g.kerning=m*(e/i.info.size)}this.inlines=h}}class g0 extends fa.withBase(je.Object3D)(Xw,u0,Vw,p0,nf){constructor(e){super(e),this.isInlineBlock=!0,this.size=new je.Vector2(1,1),this.frame=new Ww(this.getBackgroundMaterial()),this.frame.onBeforeRender=()=>{this.updateClippingPlanes&&this.updateClippingPlanes()},this.add(this.frame),this.set(e)}parseParams(){this.width||console.warn("inlineBlock has no width. Set to 0.3 by default"),this.height||console.warn("inlineBlock has no height. Set to 0.3 by default"),this.inlines=[{height:this.height||.3,width:this.width||.3,anchor:0,lineBreak:"possible"}]}updateLayout(){const e=this.getWidth(),n=this.getHeight();if(this.inlines){const i=this.inlines[0];this.position.set(i.width/2,i.height/2,0),this.position.x+=i.offsetX,this.position.y+=i.offsetY}this.size.set(e,n),this.frame.scale.set(e,n,1),this.frame&&this.updateBackgroundMaterial(),this.frame.renderOrder=this.getParentsNumber(),this.childrenInlines.length&&this.computeInlinesPosition(),this.computeChildrenPosition(),this.position.z=this.getOffset()}updateInner(){this.position.z=this.getOffset(),this.frame&&this.updateBackgroundMaterial()}}const Dr={fr:[[[{width:.1,chars:[{lowerCase:"a",upperCase:"A"}]},{width:.1,chars:[{lowerCase:"z",upperCase:"Z"}]},{width:.1,chars:[{lowerCase:"e",upperCase:"E"}]},{width:.1,chars:[{lowerCase:"r",upperCase:"R"}]},{width:.1,chars:[{lowerCase:"t",upperCase:"T"}]},{width:.1,chars:[{lowerCase:"y",upperCase:"Y"}]},{width:.1,chars:[{lowerCase:"u",upperCase:"U"}]},{width:.1,chars:[{lowerCase:"i",upperCase:"I"}]},{width:.1,chars:[{lowerCase:"o",upperCase:"O"}]},{width:.1,chars:[{lowerCase:"p",upperCase:"P"}]}],[{width:.1,chars:[{lowerCase:"q",upperCase:"Q"}]},{width:.1,chars:[{lowerCase:"s",upperCase:"S"}]},{width:.1,chars:[{lowerCase:"d",upperCase:"D"}]},{width:.1,chars:[{lowerCase:"f",upperCase:"F"}]},{width:.1,chars:[{lowerCase:"g",upperCase:"G"}]},{width:.1,chars:[{lowerCase:"h",upperCase:"H"}]},{width:.1,chars:[{lowerCase:"j",upperCase:"J"}]},{width:.1,chars:[{lowerCase:"k",upperCase:"K"}]},{width:.1,chars:[{lowerCase:"l",upperCase:"L"}]},{width:.1,chars:[{lowerCase:"m",upperCase:"M"}]}],[{width:.2,command:"shift",chars:[{icon:"shift"}]},{width:.1,chars:[{lowerCase:"w",upperCase:"W"}]},{width:.1,chars:[{lowerCase:"x",upperCase:"X"}]},{width:.1,chars:[{lowerCase:"c",upperCase:"C"}]},{width:.1,chars:[{lowerCase:"v",upperCase:"V"}]},{width:.1,chars:[{lowerCase:"b",upperCase:"B"}]},{width:.1,chars:[{lowerCase:"n",upperCase:"N"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]],eng:[[[{width:.1,chars:[{lowerCase:"q",upperCase:"Q"}]},{width:.1,chars:[{lowerCase:"w",upperCase:"W"}]},{width:.1,chars:[{lowerCase:"e",upperCase:"E"}]},{width:.1,chars:[{lowerCase:"r",upperCase:"R"}]},{width:.1,chars:[{lowerCase:"t",upperCase:"T"}]},{width:.1,chars:[{lowerCase:"y",upperCase:"Y"}]},{width:.1,chars:[{lowerCase:"u",upperCase:"U"}]},{width:.1,chars:[{lowerCase:"i",upperCase:"I"}]},{width:.1,chars:[{lowerCase:"o",upperCase:"O"}]},{width:.1,chars:[{lowerCase:"p",upperCase:"P"}]}],[{width:.1,chars:[{lowerCase:"a",upperCase:"A"}]},{width:.1,chars:[{lowerCase:"s",upperCase:"S"}]},{width:.1,chars:[{lowerCase:"d",upperCase:"D"}]},{width:.1,chars:[{lowerCase:"f",upperCase:"F"}]},{width:.1,chars:[{lowerCase:"g",upperCase:"G"}]},{width:.1,chars:[{lowerCase:"h",upperCase:"H"}]},{width:.1,chars:[{lowerCase:"j",upperCase:"J"}]},{width:.1,chars:[{lowerCase:"k",upperCase:"K"}]},{width:.1,chars:[{lowerCase:"l",upperCase:"L"}]}],[{width:.15,command:"shift",chars:[{icon:"shift"}]},{width:.1,chars:[{lowerCase:"z",upperCase:"Z"}]},{width:.1,chars:[{lowerCase:"x",upperCase:"X"}]},{width:.1,chars:[{lowerCase:"c",upperCase:"C"}]},{width:.1,chars:[{lowerCase:"v",upperCase:"V"}]},{width:.1,chars:[{lowerCase:"b",upperCase:"B"}]},{width:.1,chars:[{lowerCase:"n",upperCase:"N"}]},{width:.1,chars:[{lowerCase:"m",upperCase:"M"}]},{width:.15,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]],ru:[[[{width:1/12,chars:[{lowerCase:"й",upperCase:"Й"},{lowerCase:"q",upperCase:"Q"}]},{width:1/12,chars:[{lowerCase:"ц",upperCase:"Ц"},{lowerCase:"w",upperCase:"W"}]},{width:1/12,chars:[{lowerCase:"у",upperCase:"У"},{lowerCase:"e",upperCase:"E"}]},{width:1/12,chars:[{lowerCase:"к",upperCase:"К"},{lowerCase:"r",upperCase:"R"}]},{width:1/12,chars:[{lowerCase:"е",upperCase:"Е"},{lowerCase:"t",upperCase:"T"}]},{width:1/12,chars:[{lowerCase:"н",upperCase:"Н"},{lowerCase:"y",upperCase:"Y"}]},{width:1/12,chars:[{lowerCase:"г",upperCase:"Г"},{lowerCase:"u",upperCase:"U"}]},{width:1/12,chars:[{lowerCase:"ш",upperCase:"Ш"},{lowerCase:"i",upperCase:"I"}]},{width:1/12,chars:[{lowerCase:"щ",upperCase:"Щ"},{lowerCase:"o",upperCase:"O"}]},{width:1/12,chars:[{lowerCase:"з",upperCase:"З"},{lowerCase:"p",upperCase:"P"}]},{width:1/12,chars:[{lowerCase:"х",upperCase:"Х"},{lowerCase:"{",upperCase:"["}]},{width:1/12,chars:[{lowerCase:"ъ",upperCase:"Ъ"},{lowerCase:"}",upperCase:"]"}]}],[{width:1/12,chars:[{lowerCase:"ф",upperCase:"Ф"},{lowerCase:"a",upperCase:"A"}]},{width:1/12,chars:[{lowerCase:"ы",upperCase:"Ы"},{lowerCase:"s",upperCase:"S"}]},{width:1/12,chars:[{lowerCase:"в",upperCase:"В"},{lowerCase:"d",upperCase:"D"}]},{width:1/12,chars:[{lowerCase:"а",upperCase:"А"},{lowerCase:"f",upperCase:"F"}]},{width:1/12,chars:[{lowerCase:"п",upperCase:"П"},{lowerCase:"g",upperCase:"G"}]},{width:1/12,chars:[{lowerCase:"р",upperCase:"Р"},{lowerCase:"h",upperCase:"H"}]},{width:1/12,chars:[{lowerCase:"о",upperCase:"О"},{lowerCase:"j",upperCase:"J"}]},{width:1/12,chars:[{lowerCase:"л",upperCase:"Л"},{lowerCase:"k",upperCase:"K"}]},{width:1/12,chars:[{lowerCase:"д",upperCase:"Д"},{lowerCase:"l",upperCase:"L"}]},{width:1/12,chars:[{lowerCase:"ж",upperCase:"Ж"},{lowerCase:":",upperCase:";"}]},{width:1/12,chars:[{lowerCase:"э",upperCase:"Э"},{lowerCase:'"',upperCase:"'"}]},{width:1/12,chars:[{lowerCase:"ё",upperCase:"Ё"},{lowerCase:"|",upperCase:"\\"}]}],[{width:1.5/12,command:"shift",chars:[{icon:"shift"}]},{width:1/12,chars:[{lowerCase:"я",upperCase:"Я"},{lowerCase:"z",upperCase:"Z"}]},{width:1/12,chars:[{lowerCase:"ч",upperCase:"Ч"},{lowerCase:"x",upperCase:"X"}]},{width:1/12,chars:[{lowerCase:"с",upperCase:"С"},{lowerCase:"c",upperCase:"C"}]},{width:1/12,chars:[{lowerCase:"м",upperCase:"М"},{lowerCase:"v",upperCase:"V"}]},{width:1/12,chars:[{lowerCase:"и",upperCase:"И"},{lowerCase:"b",upperCase:"B"}]},{width:1/12,chars:[{lowerCase:"т",upperCase:"Т"},{lowerCase:"n",upperCase:"N"}]},{width:1/12,chars:[{lowerCase:"ь",upperCase:"Ь"},{lowerCase:"m",upperCase:"M"}]},{width:1/12,chars:[{lowerCase:"б",upperCase:"Б"},{lowerCase:",",upperCase:""}]},{width:1/12,chars:[{lowerCase:"ю",upperCase:"Ю"},{lowerCase:".",upperCase:""}]},{width:1.5/12,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.15,command:"switch-set",chars:[{lowerCase:"eng"}]},{width:.15,command:"switch",chars:[{lowerCase:".?12"}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.3,command:"switch",chars:[{lowerCase:"АБВ"}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]],de:[[[{width:1/11,chars:[{lowerCase:"q",upperCase:"Q"}]},{width:1/11,chars:[{lowerCase:"w",upperCase:"W"}]},{width:1/11,chars:[{lowerCase:"e",upperCase:"E"}]},{width:1/11,chars:[{lowerCase:"r",upperCase:"R"}]},{width:1/11,chars:[{lowerCase:"t",upperCase:"T"}]},{width:1/11,chars:[{lowerCase:"z",upperCase:"Z"}]},{width:1/11,chars:[{lowerCase:"u",upperCase:"U"}]},{width:1/11,chars:[{lowerCase:"i",upperCase:"I"}]},{width:1/11,chars:[{lowerCase:"o",upperCase:"O"}]},{width:1/11,chars:[{lowerCase:"p",upperCase:"P"}]},{width:1/11,chars:[{lowerCase:"ü",upperCase:"Ü"}]}],[{width:1/11,chars:[{lowerCase:"a",upperCase:"A"}]},{width:1/11,chars:[{lowerCase:"s",upperCase:"S"}]},{width:1/11,chars:[{lowerCase:"d",upperCase:"D"}]},{width:1/11,chars:[{lowerCase:"f",upperCase:"F"}]},{width:1/11,chars:[{lowerCase:"g",upperCase:"G"}]},{width:1/11,chars:[{lowerCase:"h",upperCase:"H"}]},{width:1/11,chars:[{lowerCase:"j",upperCase:"J"}]},{width:1/11,chars:[{lowerCase:"k",upperCase:"K"}]},{width:1/11,chars:[{lowerCase:"l",upperCase:"L"}]},{width:1/11,chars:[{lowerCase:"ö",upperCase:"Ö"}]},{width:1/11,chars:[{lowerCase:"ä",upperCase:"Ä"}]}],[{width:2/11,command:"shift",chars:[{icon:"shift"}]},{width:1/11,chars:[{lowerCase:"y",upperCase:"Y"}]},{width:1/11,chars:[{lowerCase:"x",upperCase:"X"}]},{width:1/11,chars:[{lowerCase:"c",upperCase:"C"}]},{width:1/11,chars:[{lowerCase:"v",upperCase:"V"}]},{width:1/11,chars:[{lowerCase:"b",upperCase:"B"}]},{width:1/11,chars:[{lowerCase:"n",upperCase:"N"}]},{width:1/11,chars:[{lowerCase:"m",upperCase:"M"}]},{width:2/11,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]],es:[[[{width:.1,chars:[{lowerCase:"q",upperCase:"Q"}]},{width:.1,chars:[{lowerCase:"w",upperCase:"W"}]},{width:.1,chars:[{lowerCase:"e",upperCase:"E"}]},{width:.1,chars:[{lowerCase:"r",upperCase:"R"}]},{width:.1,chars:[{lowerCase:"t",upperCase:"T"}]},{width:.1,chars:[{lowerCase:"y",upperCase:"Y"}]},{width:.1,chars:[{lowerCase:"u",upperCase:"U"}]},{width:.1,chars:[{lowerCase:"i",upperCase:"I"}]},{width:.1,chars:[{lowerCase:"o",upperCase:"O"}]},{width:.1,chars:[{lowerCase:"p",upperCase:"P"}]}],[{width:.1,chars:[{lowerCase:"a",upperCase:"A"}]},{width:.1,chars:[{lowerCase:"s",upperCase:"S"}]},{width:.1,chars:[{lowerCase:"d",upperCase:"D"}]},{width:.1,chars:[{lowerCase:"f",upperCase:"F"}]},{width:.1,chars:[{lowerCase:"g",upperCase:"G"}]},{width:.1,chars:[{lowerCase:"h",upperCase:"H"}]},{width:.1,chars:[{lowerCase:"j",upperCase:"J"}]},{width:.1,chars:[{lowerCase:"k",upperCase:"K"}]},{width:.1,chars:[{lowerCase:"l",upperCase:"L"}]},{width:.1,chars:[{lowerCase:"ñ",upperCase:"Ñ"}]}],[{width:.15,command:"shift",chars:[{icon:"shift"}]},{width:.1,chars:[{lowerCase:"z",upperCase:"Z"}]},{width:.1,chars:[{lowerCase:"x",upperCase:"X"}]},{width:.1,chars:[{lowerCase:"c",upperCase:"C"}]},{width:.1,chars:[{lowerCase:"v",upperCase:"V"}]},{width:.1,chars:[{lowerCase:"b",upperCase:"B"}]},{width:.1,chars:[{lowerCase:"n",upperCase:"N"}]},{width:.1,chars:[{lowerCase:"m",upperCase:"M"}]},{width:.15,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]],el:[[[{width:.1,chars:[{lowerCase:";",upperCase:":"},{lowerCase:"q",upperCase:"Q"}]},{width:.1,chars:[{lowerCase:"ς",upperCase:"ς"},{lowerCase:"w",upperCase:"W"}]},{width:.1,chars:[{lowerCase:"ε",upperCase:"Ε"},{lowerCase:"e",upperCase:"E"}]},{width:.1,chars:[{lowerCase:"ρ",upperCase:"Ρ"},{lowerCase:"r",upperCase:"R"}]},{width:.1,chars:[{lowerCase:"τ",upperCase:"Τ"},{lowerCase:"t",upperCase:"T"}]},{width:.1,chars:[{lowerCase:"υ",upperCase:"Υ"},{lowerCase:"y",upperCase:"Y"}]},{width:.1,chars:[{lowerCase:"θ",upperCase:"Θ"},{lowerCase:"u",upperCase:"U"}]},{width:.1,chars:[{lowerCase:"ι",upperCase:"Ι"},{lowerCase:"i",upperCase:"I"}]},{width:.1,chars:[{lowerCase:"ο",upperCase:"Ο"},{lowerCase:"o",upperCase:"O"}]},{width:.1,chars:[{lowerCase:"π",upperCase:"Π"},{lowerCase:"p",upperCase:"P"}]}],[{width:.1,chars:[{lowerCase:"α",upperCase:"Α"},{lowerCase:"a",upperCase:"A"}]},{width:.1,chars:[{lowerCase:"σ",upperCase:"Σ"},{lowerCase:"s",upperCase:"S"}]},{width:.1,chars:[{lowerCase:"δ",upperCase:"Δ"},{lowerCase:"d",upperCase:"D"}]},{width:.1,chars:[{lowerCase:"φ",upperCase:"Φ"},{lowerCase:"f",upperCase:"F"}]},{width:.1,chars:[{lowerCase:"γ",upperCase:"Γ"},{lowerCase:"g",upperCase:"G"}]},{width:.1,chars:[{lowerCase:"η",upperCase:"Η"},{lowerCase:"h",upperCase:"H"}]},{width:.1,chars:[{lowerCase:"ξ",upperCase:"Ξ"},{lowerCase:"j",upperCase:"J"}]},{width:.1,chars:[{lowerCase:"κ",upperCase:"Κ"},{lowerCase:"k",upperCase:"K"}]},{width:.1,chars:[{lowerCase:"λ",upperCase:"Λ"},{lowerCase:"l",upperCase:"L"}]}],[{width:.15,command:"shift",chars:[{icon:"shift"}]},{width:.1,chars:[{lowerCase:"ζ",upperCase:"Ζ"},{lowerCase:"z",upperCase:"Z"}]},{width:.1,chars:[{lowerCase:"χ",upperCase:"Χ"},{lowerCase:"x",upperCase:"X"}]},{width:.1,chars:[{lowerCase:"ψ",upperCase:"Ψ"},{lowerCase:"c",upperCase:"C"}]},{width:.1,chars:[{lowerCase:"ω",upperCase:"Ω"},{lowerCase:"v",upperCase:"V"}]},{width:.1,chars:[{lowerCase:"β",upperCase:"Β"},{lowerCase:"b",upperCase:"B"}]},{width:.1,chars:[{lowerCase:"ν",upperCase:"Ν"},{lowerCase:"n",upperCase:"N"}]},{width:.1,chars:[{lowerCase:"μ",upperCase:"Μ"},{lowerCase:"m",upperCase:"M"}]},{width:.15,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.15,command:"switch-set",chars:[{lowerCase:"eng"}]},{width:.15,command:"switch",chars:[{lowerCase:".?12"}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]],nord:[[[{width:1/11,chars:[{lowerCase:"q",upperCase:"Q"}]},{width:1/11,chars:[{lowerCase:"w",upperCase:"W"}]},{width:1/11,chars:[{lowerCase:"e",upperCase:"E"}]},{width:1/11,chars:[{lowerCase:"r",upperCase:"R"}]},{width:1/11,chars:[{lowerCase:"t",upperCase:"T"}]},{width:1/11,chars:[{lowerCase:"y",upperCase:"Y"}]},{width:1/11,chars:[{lowerCase:"u",upperCase:"U"}]},{width:1/11,chars:[{lowerCase:"i",upperCase:"I"}]},{width:1/11,chars:[{lowerCase:"o",upperCase:"O"}]},{width:1/11,chars:[{lowerCase:"p",upperCase:"P"}]},{width:1/11,chars:[{lowerCase:"å",upperCase:"Å"}]}],[{width:1/11,chars:[{lowerCase:"a",upperCase:"A"}]},{width:1/11,chars:[{lowerCase:"s",upperCase:"S"}]},{width:1/11,chars:[{lowerCase:"d",upperCase:"D"}]},{width:1/11,chars:[{lowerCase:"f",upperCase:"F"}]},{width:1/11,chars:[{lowerCase:"g",upperCase:"G"}]},{width:1/11,chars:[{lowerCase:"h",upperCase:"H"}]},{width:1/11,chars:[{lowerCase:"j",upperCase:"J"}]},{width:1/11,chars:[{lowerCase:"k",upperCase:"K"}]},{width:1/11,chars:[{lowerCase:"l",upperCase:"L"}]},{width:1/11,chars:[{lowerCase:"æ",upperCase:"Æ"}]},{width:1/11,chars:[{lowerCase:"ø",upperCase:"Ø"}]}],[{width:2/11,command:"shift",chars:[{icon:"shift"}]},{width:1/11,chars:[{lowerCase:"z",upperCase:"Z"}]},{width:1/11,chars:[{lowerCase:"x",upperCase:"X"}]},{width:1/11,chars:[{lowerCase:"c",upperCase:"C"}]},{width:1/11,chars:[{lowerCase:"v",upperCase:"V"}]},{width:1/11,chars:[{lowerCase:"b",upperCase:"B"}]},{width:1/11,chars:[{lowerCase:"n",upperCase:"N"}]},{width:1/11,chars:[{lowerCase:"m",upperCase:"M"}]},{width:2/11,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]]},VI=new je.TextureLoader;class $w extends fa.withBase(je.Object3D)(u0,nf){constructor(e){e||(e={}),e.width||(e.width=1),e.height||(e.height=.4),e.margin||(e.margin=.003),e.padding||(e.padding=.01),super(e),this.currentPanel=0,this.isLowerCase=!0,this.charsetCount=1;let n;if(e.language||navigator.language)switch(e.language||navigator.language){case"fr":case"fr-CH":case"fr-CA":n=Dr.fr;break;case"ru":this.charsetCount=2,n=Dr.ru;break;case"de":case"de-DE":case"de-AT":case"de-LI":case"de-CH":n=Dr.de;break;case"es":case"es-419":case"es-AR":case"es-CL":case"es-CO":case"es-ES":case"es-CR":case"es-US":case"es-HN":case"es-MX":case"es-PE":case"es-UY":case"es-VE":n=Dr.es;break;case"el":this.charsetCount=2,n=Dr.el;break;case"nord":n=Dr.nord;break;default:n=Dr.eng;break}else n=Dr.eng;this.keys=[],this.panels=n.map(i=>{const r=e.height/i.length-e.margin*2,s=new xl({width:e.width+e.padding*2,height:e.height+e.padding*2,offset:0,padding:e.padding,fontFamily:e.fontFamily,fontTexture:e.fontTexture,backgroundColor:e.backgroundColor,backgroundOpacity:e.backgroundOpacity});return s.charset=0,s.add(...i.map(o=>{const a=new xl({width:e.width,height:r,margin:e.margin,contentDirection:"row",justifyContent:"center"});a.frame.visible=!1;const l=[];return o.forEach(c=>{const u=new xl({width:e.width*c.width-e.margin*2,height:r,margin:e.margin,justifyContent:"center",offset:0}),f=c.chars[s.charset].lowerCase||c.chars[s.charset].icon||"undif";if(f==="enter"&&e.enterTexture||f==="shift"&&e.shiftTexture||f==="backspace"&&e.backspaceTexture){const h=(()=>{switch(f){case"backspace":return e.backspaceTexture;case"enter":return e.enterTexture;case"shift":return e.shiftTexture;default:console.warn("There is no icon image for this key")}})();VI.load(h,d=>{u.add(new g0({width:u.width*.65,height:u.height*.65,backgroundSize:"contain",backgroundTexture:d}))})}else u.add(new m0({content:f,offset:0}));u.type="Key",u.info=c,u.info.input=f,u.panel=s,l.push(u),this.keys.push(u)}),a.add(...l),a})),s}),this.add(this.panels[0]),this.set(e)}setNextPanel(){this.panels.forEach(e=>{this.remove(e)}),this.currentPanel=(this.currentPanel+1)%this.panels.length,this.add(this.panels[this.currentPanel]),this.update(!0,!0,!0)}setNextCharset(){this.panels[this.currentPanel].charset=(this.panels[this.currentPanel].charset+1)%this.charsetCount,this.keys.forEach(e=>{if(!this.panels[this.currentPanel].getObjectById(e.id))return;const i=e.info.chars[e.panel.charset]||e.info.chars[0],r=this.isLowerCase||!i.upperCase?i.lowerCase:i.upperCase;if(!e.childrenTexts.length)return;const s=e.childrenTexts[0];e.info.input=r,s.set({content:r}),s.update(!0,!0,!0)})}toggleCase(){this.isLowerCase=!this.isLowerCase,this.keys.forEach(e=>{const n=e.info.chars[e.panel.charset]||e.info.chars[0],i=this.isLowerCase||!n.upperCase?n.lowerCase:n.upperCase;if(!e.childrenTexts.length)return;const r=e.childrenTexts[0];e.info.input=i,r.set({content:i}),r.update(!0,!0,!0)})}parseParams(){}updateLayout(){}updateInner(){}}const Yw=()=>Os.update(),Kw={Block:xl,Text:m0,InlineBlock:g0,Keyboard:$w,FontLibrary:Hl,update:Yw,TextAlign:Zh,Whitespace:qh,JustifyContent:Kh,AlignItems:Yh,ContentDirection:$h};typeof global<"u"&&(global.ThreeMeshUI=Kw);const GI=Kw;$n.g1;$n.gO;$n.km;$n.zV;$n.ol;$n.uM;$n.N1;$n.xv;$n.PH;$n.UH;$n.ZP;$n.Vx;function qw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Zw={exports:{}},rf={},Jw={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mc=Symbol.for("react.element"),WI=Symbol.for("react.portal"),XI=Symbol.for("react.fragment"),jI=Symbol.for("react.strict_mode"),$I=Symbol.for("react.profiler"),YI=Symbol.for("react.provider"),KI=Symbol.for("react.context"),qI=Symbol.for("react.forward_ref"),ZI=Symbol.for("react.suspense"),JI=Symbol.for("react.memo"),QI=Symbol.for("react.lazy"),my=Symbol.iterator;function e3(t){return t===null||typeof t!="object"?null:(t=my&&t[my]||t["@@iterator"],typeof t=="function"?t:null)}var Qw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eS=Object.assign,tS={};function Ua(t,e,n){this.props=t,this.context=e,this.refs=tS,this.updater=n||Qw}Ua.prototype.isReactComponent={};Ua.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ua.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function nS(){}nS.prototype=Ua.prototype;function v0(t,e,n){this.props=t,this.context=e,this.refs=tS,this.updater=n||Qw}var _0=v0.prototype=new nS;_0.constructor=v0;eS(_0,Ua.prototype);_0.isPureReactComponent=!0;var gy=Array.isArray,iS=Object.prototype.hasOwnProperty,y0={current:null},rS={key:!0,ref:!0,__self:!0,__source:!0};function sS(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)iS.call(e,i)&&!rS.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:mc,type:t,key:s,ref:o,props:r,_owner:y0.current}}function t3(t,e){return{$$typeof:mc,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function x0(t){return typeof t=="object"&&t!==null&&t.$$typeof===mc}function n3(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vy=/\/+/g;function wd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?n3(""+t.key):e.toString(36)}function ku(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case mc:case WI:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+wd(o,0):i,gy(r)?(n="",t!=null&&(n=t.replace(vy,"$&/")+"/"),ku(r,e,n,"",function(c){return c})):r!=null&&(x0(r)&&(r=t3(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(vy,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",gy(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+wd(s,a);o+=ku(s,e,n,l,r)}else if(l=e3(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+wd(s,a++),o+=ku(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ru(t,e,n){if(t==null)return t;var i=[],r=0;return ku(t,i,"","",function(s){return e.call(n,s,r++)}),i}function i3(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var wn={current:null},Fu={transition:null},r3={ReactCurrentDispatcher:wn,ReactCurrentBatchConfig:Fu,ReactCurrentOwner:y0};function oS(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:ru,forEach:function(t,e,n){ru(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ru(t,function(){e++}),e},toArray:function(t){return ru(t,function(e){return e})||[]},only:function(t){if(!x0(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Ua;Xe.Fragment=XI;Xe.Profiler=$I;Xe.PureComponent=v0;Xe.StrictMode=jI;Xe.Suspense=ZI;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r3;Xe.act=oS;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=eS({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=y0.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)iS.call(e,l)&&!rS.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:mc,type:t.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(t){return t={$$typeof:KI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:YI,_context:t},t.Consumer=t};Xe.createElement=sS;Xe.createFactory=function(t){var e=sS.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:qI,render:t}};Xe.isValidElement=x0;Xe.lazy=function(t){return{$$typeof:QI,_payload:{_status:-1,_result:t},_init:i3}};Xe.memo=function(t,e){return{$$typeof:JI,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Fu.transition;Fu.transition={};try{t()}finally{Fu.transition=e}};Xe.unstable_act=oS;Xe.useCallback=function(t,e){return wn.current.useCallback(t,e)};Xe.useContext=function(t){return wn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return wn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return wn.current.useEffect(t,e)};Xe.useId=function(){return wn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return wn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return wn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return wn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return wn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return wn.current.useReducer(t,e,n)};Xe.useRef=function(t){return wn.current.useRef(t)};Xe.useState=function(t){return wn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return wn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return wn.current.useTransition()};Xe.version="18.3.1";Jw.exports=Xe;var gc=Jw.exports;const js=qw(gc);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s3=gc,o3=Symbol.for("react.element"),a3=Symbol.for("react.fragment"),l3=Object.prototype.hasOwnProperty,c3=s3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u3={key:!0,ref:!0,__self:!0,__source:!0};function aS(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)l3.call(e,i)&&!u3.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:o3,type:t,key:s,ref:o,props:r,_owner:c3.current}}rf.Fragment=a3;rf.jsx=aS;rf.jsxs=aS;Zw.exports=rf;var yt=Zw.exports;const _y=()=>{};let w0={},lS={},cS=null,uS={mark:_y,measure:_y};try{typeof window<"u"&&(w0=window),typeof document<"u"&&(lS=document),typeof MutationObserver<"u"&&(cS=MutationObserver),typeof performance<"u"&&(uS=performance)}catch{}const{userAgent:yy=""}=w0.navigator||{},as=w0,xt=lS,xy=cS,su=uS;as.document;const Er=!!xt.documentElement&&!!xt.head&&typeof xt.addEventListener=="function"&&typeof xt.createElement=="function",hS=~yy.indexOf("MSIE")||~yy.indexOf("Trident/");var Mt="classic",fS="duotone",Gn="sharp",Wn="sharp-duotone",h3=[Mt,fS,Gn,Wn],f3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},wy={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},d3=["kit"],p3=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,m3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,g3={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},v3={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},_3={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},y3={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},x3={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},w3={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},dS={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},S3=["solid","regular","light","thin","duotone","brands"],pS=[1,2,3,4,5,6,7,8,9,10],M3=pS.concat([11,12,13,14,15,16,17,18,19,20]),al={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},E3=[...Object.keys(y3),...S3,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",al.GROUP,al.SWAP_OPACITY,al.PRIMARY,al.SECONDARY].concat(pS.map(t=>"".concat(t,"x"))).concat(M3.map(t=>"w-".concat(t))),T3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},C3={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},A3={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Sy={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const vr="___FONT_AWESOME___",cm=16,mS="fa",gS="svg-inline--fa",$s="data-fa-i2svg",um="data-fa-pseudo-element",b3="data-fa-pseudo-element-pending",S0="data-prefix",M0="data-icon",My="fontawesome-i2svg",R3="async",P3=["HTML","HEAD","STYLE","SCRIPT"],vS=(()=>{try{return!0}catch{return!1}})(),_S=[Mt,Gn,Wn];function vc(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Mt]}})}const yS={...dS};yS[Mt]={...dS[Mt],...wy.kit,...wy["kit-duotone"]};const ks=vc(yS),hm={...w3};hm[Mt]={...hm[Mt],...Sy.kit,...Sy["kit-duotone"]};const Vl=vc(hm),fm={...x3};fm[Mt]={...fm[Mt],...A3.kit};const Fs=vc(fm),dm={..._3};dm[Mt]={...dm[Mt],...C3.kit};const L3=vc(dm),I3=p3,xS="fa-layers-text",N3=m3,D3={...f3};vc(D3);const U3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Sd=al,da=new Set;Object.keys(Vl[Mt]).map(da.add.bind(da));Object.keys(Vl[Gn]).map(da.add.bind(da));Object.keys(Vl[Wn]).map(da.add.bind(da));const O3=[...d3,...E3],wl=as.FontAwesomeConfig||{};function k3(t){var e=xt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function F3(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}xt&&typeof xt.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,i]=e;const r=F3(k3(n));r!=null&&(wl[i]=r)});const wS={styleDefault:"solid",familyDefault:"classic",cssPrefix:mS,replacementClass:gS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};wl.familyPrefix&&(wl.cssPrefix=wl.familyPrefix);const pa={...wS,...wl};pa.autoReplaceSvg||(pa.observeMutations=!1);const _e={};Object.keys(wS).forEach(t=>{Object.defineProperty(_e,t,{enumerable:!0,set:function(e){pa[t]=e,Sl.forEach(n=>n(_e))},get:function(){return pa[t]}})});Object.defineProperty(_e,"familyPrefix",{enumerable:!0,set:function(t){pa.cssPrefix=t,Sl.forEach(e=>e(_e))},get:function(){return pa.cssPrefix}});as.FontAwesomeConfig=_e;const Sl=[];function B3(t){return Sl.push(t),()=>{Sl.splice(Sl.indexOf(t),1)}}const Ur=cm,Ui={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function z3(t){if(!t||!Er)return;const e=xt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=xt.head.childNodes;let i=null;for(let r=n.length-1;r>-1;r--){const s=n[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return xt.head.insertBefore(e,i),t}const H3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Gl(){let t=12,e="";for(;t-- >0;)e+=H3[Math.random()*62|0];return e}function Oa(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function E0(t){return t.classList?Oa(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function SS(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function V3(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(SS(t[n]),'" '),"").trim()}function sf(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function T0(t){return t.size!==Ui.size||t.x!==Ui.x||t.y!==Ui.y||t.rotate!==Ui.rotate||t.flipX||t.flipY}function G3(t){let{transform:e,containerWidth:n,iconWidth:i}=t;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function W3(t){let{transform:e,width:n=cm,height:i=cm,startCentered:r=!1}=t,s="";return r&&hS?s+="translate(".concat(e.x/Ur-n/2,"em, ").concat(e.y/Ur-i/2,"em) "):r?s+="translate(calc(-50% + ".concat(e.x/Ur,"em), calc(-50% + ").concat(e.y/Ur,"em)) "):s+="translate(".concat(e.x/Ur,"em, ").concat(e.y/Ur,"em) "),s+="scale(".concat(e.size/Ur*(e.flipX?-1:1),", ").concat(e.size/Ur*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var X3=`:root, :host {
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
}`;function MS(){const t=mS,e=gS,n=_e.cssPrefix,i=_e.replacementClass;let r=X3;if(n!==t||i!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return r}let Ey=!1;function Md(){_e.autoAddCss&&!Ey&&(z3(MS()),Ey=!0)}var j3={mixout(){return{dom:{css:MS,insertCss:Md}}},hooks(){return{beforeDOMElementCreation(){Md()},beforeI2svg(){Md()}}}};const _r=as||{};_r[vr]||(_r[vr]={});_r[vr].styles||(_r[vr].styles={});_r[vr].hooks||(_r[vr].hooks={});_r[vr].shims||(_r[vr].shims=[]);var Oi=_r[vr];const ES=[],TS=function(){xt.removeEventListener("DOMContentLoaded",TS),uh=1,ES.map(t=>t())};let uh=!1;Er&&(uh=(xt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(xt.readyState),uh||xt.addEventListener("DOMContentLoaded",TS));function $3(t){Er&&(uh?setTimeout(t,0):ES.push(t))}function _c(t){const{tag:e,attributes:n={},children:i=[]}=t;return typeof t=="string"?SS(t):"<".concat(e," ").concat(V3(n),">").concat(i.map(_c).join(""),"</").concat(e,">")}function Ty(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ed=function(e,n,i,r){var s=Object.keys(e),o=s.length,a=n,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function Y3(t){const e=[];let n=0;const i=t.length;for(;n<i;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function pm(t){const e=Y3(t);return e.length===1?e[0].toString(16):null}function K3(t,e){const n=t.length;let i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Cy(t){return Object.keys(t).reduce((e,n)=>{const i=t[n];return!!i.icon?e[i.iconName]=i.icon:e[n]=i,e},{})}function mm(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=n,r=Cy(e);typeof Oi.hooks.addPack=="function"&&!i?Oi.hooks.addPack(t,Cy(e)):Oi.styles[t]={...Oi.styles[t]||{},...r},t==="fas"&&mm("fa",e)}const{styles:Ls,shims:q3}=Oi,Z3={[Mt]:Object.values(Fs[Mt]),[Gn]:Object.values(Fs[Gn]),[Wn]:Object.values(Fs[Wn])};let C0=null,CS={},AS={},bS={},RS={},PS={};const J3={[Mt]:Object.keys(ks[Mt]),[Gn]:Object.keys(ks[Gn]),[Wn]:Object.keys(ks[Wn])};function Q3(t){return~O3.indexOf(t)}function eN(t,e){const n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!Q3(r)?r:null}const LS=()=>{const t=i=>Ed(Ls,(r,s,o)=>(r[o]=Ed(s,i,{}),r),{});CS=t((i,r,s)=>(r[3]&&(i[r[3]]=s),r[2]&&r[2].filter(a=>typeof a=="number").forEach(a=>{i[a.toString(16)]=s}),i)),AS=t((i,r,s)=>(i[s]=s,r[2]&&r[2].filter(a=>typeof a=="string").forEach(a=>{i[a]=s}),i)),PS=t((i,r,s)=>{const o=r[2];return i[s]=s,o.forEach(a=>{i[a]=s}),i});const e="far"in Ls||_e.autoFetchSvg,n=Ed(q3,(i,r)=>{const s=r[0];let o=r[1];const a=r[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(i.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:o,iconName:a}),i},{names:{},unicodes:{}});bS=n.names,RS=n.unicodes,C0=of(_e.styleDefault,{family:_e.familyDefault})};B3(t=>{C0=of(t.styleDefault,{family:_e.familyDefault})});LS();function A0(t,e){return(CS[t]||{})[e]}function tN(t,e){return(AS[t]||{})[e]}function Yr(t,e){return(PS[t]||{})[e]}function IS(t){return bS[t]||{prefix:null,iconName:null}}function nN(t){const e=RS[t],n=A0("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ls(){return C0}const b0=()=>({prefix:null,iconName:null,rest:[]});function of(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Mt}=e,i=ks[n][t],r=Vl[n][t]||Vl[n][i],s=t in Oi.styles?t:null;return r||s||null}const iN={[Mt]:Object.keys(Fs[Mt]),[Gn]:Object.keys(Fs[Gn]),[Wn]:Object.keys(Fs[Wn])};function af(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,i={[Mt]:"".concat(_e.cssPrefix,"-").concat(Mt),[Gn]:"".concat(_e.cssPrefix,"-").concat(Gn),[Wn]:"".concat(_e.cssPrefix,"-").concat(Wn)};let r=null,s=Mt;const o=h3.filter(l=>l!==fS);o.forEach(l=>{(t.includes(i[l])||t.some(c=>iN[l].includes(c)))&&(s=l)});const a=t.reduce((l,c)=>{const u=eN(_e.cssPrefix,c);if(Ls[c]?(c=Z3[s].includes(c)?L3[s][c]:c,r=c,l.prefix=c):J3[s].indexOf(c)>-1?(r=c,l.prefix=of(c,{family:s})):u?l.iconName=u:c!==_e.replacementClass&&!o.some(f=>c===i[f])&&l.rest.push(c),!n&&l.prefix&&l.iconName){const f=r==="fa"?IS(l.iconName):{},h=Yr(l.prefix,l.iconName);f.prefix&&(r=null),l.iconName=f.iconName||h||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!Ls.far&&Ls.fas&&!_e.autoFetchSvg&&(l.prefix="fas")}return l},b0());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&s===Gn&&(Ls.fass||_e.autoFetchSvg)&&(a.prefix="fass",a.iconName=Yr(a.prefix,a.iconName)||a.iconName),!a.prefix&&s===Wn&&(Ls.fasds||_e.autoFetchSvg)&&(a.prefix="fasds",a.iconName=Yr(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||r==="fa")&&(a.prefix=ls()||"fas"),a}class rN{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...r[s]},mm(s,r[s]);const o=Fs[Mt][s];o&&mm(o,r[s]),LS()})}reset(){this.definitions={}}_pullDefinitions(e,n){const i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(r=>{const{prefix:s,iconName:o,icon:a}=i[r],l=a[2];e[s]||(e[s]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[s][c]=a)}),e[s][o]=a}),e}}let Ay=[],To={};const Wo={},sN=Object.keys(Wo);function oN(t,e){let{mixoutsTo:n}=e;return Ay=t,To={},Object.keys(Wo).forEach(i=>{sN.indexOf(i)===-1&&delete Wo[i]}),Ay.forEach(i=>{const r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=r[s][o]})}),i.hooks){const s=i.hooks();Object.keys(s).forEach(o=>{To[o]||(To[o]=[]),To[o].push(s[o])})}i.provides&&i.provides(Wo)}),n}function gm(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];return(To[t]||[]).forEach(o=>{e=o.apply(null,[e,...i])}),e}function Ys(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];(To[t]||[]).forEach(s=>{s.apply(null,n)})}function cs(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Wo[t]?Wo[t].apply(null,e):void 0}function vm(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||ls();if(e)return e=Yr(n,e)||e,Ty(NS.definitions,n,e)||Ty(Oi.styles,n,e)}const NS=new rN,aN=()=>{_e.autoReplaceSvg=!1,_e.observeMutations=!1,Ys("noAuto")},lN={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Er?(Ys("beforeI2svg",t),cs("pseudoElements2svg",t),cs("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;_e.autoReplaceSvg===!1&&(_e.autoReplaceSvg=!0),_e.observeMutations=!0,$3(()=>{uN({autoReplaceSvgRoot:e}),Ys("watch",t)})}},cN={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Yr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=of(t[0]);return{prefix:n,iconName:Yr(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(_e.cssPrefix,"-"))>-1||t.match(I3))){const e=af(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||ls(),iconName:Yr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=ls();return{prefix:e,iconName:Yr(e,t)||t}}}},Yn={noAuto:aN,config:_e,dom:lN,parse:cN,library:NS,findIconDefinition:vm,toHtml:_c},uN=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=xt}=t;(Object.keys(Oi.styles).length>0||_e.autoFetchSvg)&&Er&&_e.autoReplaceSvg&&Yn.dom.i2svg({node:e})};function lf(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>_c(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Er)return;const n=xt.createElement("div");return n.innerHTML=t.html,n.children}}),t}function hN(t){let{children:e,main:n,mask:i,attributes:r,styles:s,transform:o}=t;if(T0(o)&&n.found&&!i.found){const{width:a,height:l}=n,c={x:a/l/2,y:.5};r.style=sf({...s,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function fN(t){let{prefix:e,iconName:n,children:i,attributes:r,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(_e.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:o},children:i}]}]}function R0(t){const{icons:{main:e,mask:n},prefix:i,iconName:r,transform:s,symbol:o,title:a,maskId:l,titleId:c,extra:u,watchable:f=!1}=t,{width:h,height:d}=n.found?n:e,g=i==="fak",_=[_e.replacementClass,r?"".concat(_e.cssPrefix,"-").concat(r):""].filter(A=>u.classes.indexOf(A)===-1).filter(A=>A!==""||!!A).concat(u.classes).join(" ");let m={children:[],attributes:{...u.attributes,"data-prefix":i,"data-icon":r,class:_,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(d)}};const p=g&&!~u.classes.indexOf("fa-fw")?{width:"".concat(h/d*16*.0625,"em")}:{};f&&(m.attributes[$s]=""),a&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||Gl())},children:[a]}),delete m.attributes.title);const y={...m,prefix:i,iconName:r,main:e,mask:n,maskId:l,transform:s,symbol:o,styles:{...p,...u.styles}},{children:v,attributes:x}=n.found&&e.found?cs("generateAbstractMask",y)||{children:[],attributes:{}}:cs("generateAbstractIcon",y)||{children:[],attributes:{}};return y.children=v,y.attributes=x,o?fN(y):hN(y)}function by(t){const{content:e,width:n,height:i,transform:r,title:s,extra:o,watchable:a=!1}=t,l={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};a&&(l[$s]="");const c={...o.styles};T0(r)&&(c.transform=W3({transform:r,startCentered:!0,width:n,height:i}),c["-webkit-transform"]=c.transform);const u=sf(c);u.length>0&&(l.style=u);const f=[];return f.push({tag:"span",attributes:l,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function dN(t){const{content:e,title:n,extra:i}=t,r={...i.attributes,...n?{title:n}:{},class:i.classes.join(" ")},s=sf(i.styles);s.length>0&&(r.style=s);const o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Td}=Oi;function _m(t){const e=t[0],n=t[1],[i]=t.slice(4);let r=null;return Array.isArray(i)?r={tag:"g",attributes:{class:"".concat(_e.cssPrefix,"-").concat(Sd.GROUP)},children:[{tag:"path",attributes:{class:"".concat(_e.cssPrefix,"-").concat(Sd.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(_e.cssPrefix,"-").concat(Sd.PRIMARY),fill:"currentColor",d:i[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:r}}const pN={found:!1,width:512,height:512};function mN(t,e){!vS&&!_e.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ym(t,e){let n=e;return e==="fa"&&_e.styleDefault!==null&&(e=ls()),new Promise((i,r)=>{if(n==="fa"){const s=IS(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Td[e]&&Td[e][t]){const s=Td[e][t];return i(_m(s))}mN(t,e),i({...pN,icon:_e.showMissingIcons&&t?cs("missingIconAbstract")||{}:{}})})}const Ry=()=>{},xm=_e.measurePerformance&&su&&su.mark&&su.measure?su:{mark:Ry,measure:Ry},ll='FA "6.6.0"',gN=t=>(xm.mark("".concat(ll," ").concat(t," begins")),()=>DS(t)),DS=t=>{xm.mark("".concat(ll," ").concat(t," ends")),xm.measure("".concat(ll," ").concat(t),"".concat(ll," ").concat(t," begins"),"".concat(ll," ").concat(t," ends"))};var P0={begin:gN,end:DS};const Bu=()=>{};function Py(t){return typeof(t.getAttribute?t.getAttribute($s):null)=="string"}function vN(t){const e=t.getAttribute?t.getAttribute(S0):null,n=t.getAttribute?t.getAttribute(M0):null;return e&&n}function _N(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(_e.replacementClass)}function yN(){return _e.autoReplaceSvg===!0?zu.replace:zu[_e.autoReplaceSvg]||zu.replace}function xN(t){return xt.createElementNS("http://www.w3.org/2000/svg",t)}function wN(t){return xt.createElement(t)}function US(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?xN:wN}=e;if(typeof t=="string")return xt.createTextNode(t);const i=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){i.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){i.appendChild(US(s,{ceFn:n}))}),i}function SN(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const zu={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(US(n),e)}),e.getAttribute($s)===null&&_e.keepOriginalSource){let n=xt.createComment(SN(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~E0(e).indexOf(_e.replacementClass))return zu.replace(t);const i=new RegExp("".concat(_e.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===_e.replacementClass||a.match(i)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>_c(s)).join(`
`);e.setAttribute($s,""),e.innerHTML=r}};function Ly(t){t()}function OS(t,e){const n=typeof e=="function"?e:Bu;if(t.length===0)n();else{let i=Ly;_e.mutateApproach===R3&&(i=as.requestAnimationFrame||Ly),i(()=>{const r=yN(),s=P0.begin("mutate");t.map(r),s(),n()})}}let L0=!1;function kS(){L0=!0}function wm(){L0=!1}let hh=null;function Iy(t){if(!xy||!_e.observeMutations)return;const{treeCallback:e=Bu,nodeCallback:n=Bu,pseudoElementsCallback:i=Bu,observeMutationsRoot:r=xt}=t;hh=new xy(s=>{if(L0)return;const o=ls();Oa(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Py(a.addedNodes[0])&&(_e.searchPseudoElements&&i(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&_e.searchPseudoElements&&i(a.target.parentNode),a.type==="attributes"&&Py(a.target)&&~U3.indexOf(a.attributeName))if(a.attributeName==="class"&&vN(a.target)){const{prefix:l,iconName:c}=af(E0(a.target));a.target.setAttribute(S0,l||o),c&&a.target.setAttribute(M0,c)}else _N(a.target)&&n(a.target)})}),Er&&hh.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function MN(){hh&&hh.disconnect()}function EN(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((i,r)=>{const s=r.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function TN(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"";let r=af(E0(t));return r.prefix||(r.prefix=ls()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=tN(r.prefix,t.innerText)||A0(r.prefix,pm(t.innerText))),!r.iconName&&_e.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function CN(t){const e=Oa(t.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return _e.autoA11y&&(n?e["aria-labelledby"]="".concat(_e.replacementClass,"-title-").concat(i||Gl()):(e["aria-hidden"]="true",e.focusable="false")),e}function AN(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ui,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ny(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:i,rest:r}=TN(t),s=CN(t),o=gm("parseNodeAttributes",{},t);let a=e.styleParser?EN(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Ui,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:a,attributes:s},...o}}const{styles:bN}=Oi;function FS(t){const e=_e.autoReplaceSvg==="nest"?Ny(t,{styleParser:!1}):Ny(t);return~e.extra.classes.indexOf(xS)?cs("generateLayersText",t,e):cs("generateSvgReplacementMutation",t,e)}let Hi=new Set;_S.map(t=>{Hi.add("fa-".concat(t))});Object.keys(ks[Mt]).map(Hi.add.bind(Hi));Object.keys(ks[Gn]).map(Hi.add.bind(Hi));Object.keys(ks[Wn]).map(Hi.add.bind(Hi));Hi=[...Hi];function Dy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Er)return Promise.resolve();const n=xt.documentElement.classList,i=u=>n.add("".concat(My,"-").concat(u)),r=u=>n.remove("".concat(My,"-").concat(u)),s=_e.autoFetchSvg?Hi:_S.map(u=>"fa-".concat(u)).concat(Object.keys(bN));s.includes("fa")||s.push("fa");const o=[".".concat(xS,":not([").concat($s,"])")].concat(s.map(u=>".".concat(u,":not([").concat($s,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Oa(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),r("complete");else return Promise.resolve();const l=P0.begin("onTree"),c=a.reduce((u,f)=>{try{const h=FS(f);h&&u.push(h)}catch(h){vS||h.name==="MissingIcon"&&console.error(h)}return u},[]);return new Promise((u,f)=>{Promise.all(c).then(h=>{OS(h,()=>{i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(h=>{l(),f(h)})})}function RN(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;FS(t).then(n=>{n&&OS([n],e)})}function PN(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:vm(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:vm(r||{})),t(i,{...n,mask:r})}}const LN=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Ui,symbol:i=!1,mask:r=null,maskId:s=null,title:o=null,titleId:a=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:f,iconName:h,icon:d}=t;return lf({type:"icon",...t},()=>(Ys("beforeDOMElementCreation",{iconDefinition:t,params:e}),_e.autoA11y&&(o?c["aria-labelledby"]="".concat(_e.replacementClass,"-title-").concat(a||Gl()):(c["aria-hidden"]="true",c.focusable="false")),R0({icons:{main:_m(d),mask:r?_m(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:h,transform:{...Ui,...n},symbol:i,title:o,maskId:s,titleId:a,extra:{attributes:c,styles:u,classes:l}})))};var IN={mixout(){return{icon:PN(LN)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Dy,t.nodeCallback=RN,t}}},provides(t){t.i2svg=function(e){const{node:n=xt,callback:i=()=>{}}=e;return Dy(n,i)},t.generateSvgReplacementMutation=function(e,n){const{iconName:i,title:r,titleId:s,prefix:o,transform:a,symbol:l,mask:c,maskId:u,extra:f}=n;return new Promise((h,d)=>{Promise.all([ym(i,o),c.iconName?ym(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(g=>{let[_,m]=g;h([e,R0({icons:{main:_,mask:m},prefix:o,iconName:i,transform:a,symbol:l,maskId:u,title:r,titleId:s,extra:f,watchable:!0})])}).catch(d)})},t.generateAbstractIcon=function(e){let{children:n,attributes:i,main:r,transform:s,styles:o}=e;const a=sf(o);a.length>0&&(i.style=a);let l;return T0(s)&&(l=cs("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(l||r.icon),{children:n,attributes:i}}}},NN={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return lf({type:"layer"},()=>{Ys("beforeDOMElementCreation",{assembler:t,params:e});let i=[];return t(r=>{Array.isArray(r)?r.map(s=>{i=i.concat(s.abstract)}):i=i.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(_e.cssPrefix,"-layers"),...n].join(" ")},children:i}]})}}}},DN={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:i=[],attributes:r={},styles:s={}}=e;return lf({type:"counter",content:t},()=>(Ys("beforeDOMElementCreation",{content:t,params:e}),dN({content:t.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(_e.cssPrefix,"-layers-counter"),...i]}})))}}}},UN={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Ui,title:i=null,classes:r=[],attributes:s={},styles:o={}}=e;return lf({type:"text",content:t},()=>(Ys("beforeDOMElementCreation",{content:t,params:e}),by({content:t,transform:{...Ui,...n},title:i,extra:{attributes:s,styles:o,classes:["".concat(_e.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:i,transform:r,extra:s}=n;let o=null,a=null;if(hS){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/l,a=c.height/l}return _e.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,by({content:e.innerHTML,width:o,height:a,transform:r,title:i,extra:s,watchable:!0})])}}};const ON=new RegExp('"',"ug"),Uy=[1105920,1112319],Oy={FontAwesome:{normal:"fas",400:"fas"},...v3,...g3,...T3},Sm=Object.keys(Oy).reduce((t,e)=>(t[e.toLowerCase()]=Oy[e],t),{}),kN=Object.keys(Sm).reduce((t,e)=>{const n=Sm[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function FN(t){const e=t.replace(ON,""),n=K3(e,0),i=n>=Uy[0]&&n<=Uy[1],r=e.length===2?e[0]===e[1]:!1;return{value:pm(r?e[0]:e),isSecondary:i||r}}function BN(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),r=isNaN(i)?"normal":i;return(Sm[n]||{})[r]||kN[n]}function ky(t,e){const n="".concat(b3).concat(e.replace(":","-"));return new Promise((i,r)=>{if(t.getAttribute(n)!==null)return i();const o=Oa(t.children).filter(h=>h.getAttribute(um)===e)[0],a=as.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),c=l.match(N3),u=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),i();if(c&&f!=="none"&&f!==""){const h=a.getPropertyValue("content");let d=BN(l,u);const{value:g,isSecondary:_}=FN(h),m=c[0].startsWith("FontAwesome");let p=A0(d,g),y=p;if(m){const v=nN(g);v.iconName&&v.prefix&&(p=v.iconName,d=v.prefix)}if(p&&!_&&(!o||o.getAttribute(S0)!==d||o.getAttribute(M0)!==y)){t.setAttribute(n,y),o&&t.removeChild(o);const v=AN(),{extra:x}=v;x.attributes[um]=e,ym(p,d).then(A=>{const C=R0({...v,icons:{main:A,mask:b0()},prefix:d,iconName:y,extra:x,watchable:!0}),M=xt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(M,t.firstChild):t.appendChild(M),M.outerHTML=C.map(R=>_c(R)).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function zN(t){return Promise.all([ky(t,"::before"),ky(t,"::after")])}function HN(t){return t.parentNode!==document.head&&!~P3.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(um)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Fy(t){if(Er)return new Promise((e,n)=>{const i=Oa(t.querySelectorAll("*")).filter(HN).map(zN),r=P0.begin("searchPseudoElements");kS(),Promise.all(i).then(()=>{r(),wm(),e()}).catch(()=>{r(),wm(),n()})})}var VN={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Fy,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=xt}=e;_e.searchPseudoElements&&Fy(n)}}};let By=!1;var GN={mixout(){return{dom:{unwatch(){kS(),By=!0}}}},hooks(){return{bootstrap(){Iy(gm("mutationObserverCallbacks",{}))},noAuto(){MN()},watch(t){const{observeMutationsRoot:e}=t;By?wm():Iy(gm("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const zy=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,i)=>{const r=i.toLowerCase().split("-"),s=r[0];let o=r.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var WN={mixout(){return{parse:{transform:t=>zy(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=zy(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:i,containerWidth:r,iconWidth:s}=e;const o={transform:"translate(".concat(r/2," 256)")},a="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),u={transform:"".concat(a," ").concat(l," ").concat(c)},f={transform:"translate(".concat(s/2*-1," -256)")},h={outer:o,inner:u,path:f};return{tag:"g",attributes:{...h.outer},children:[{tag:"g",attributes:{...h.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...h.path}}]}]}}}};const Cd={x:0,y:0,width:"100%",height:"100%"};function Hy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function XN(t){return t.tag==="g"?t.children:[t]}var jN={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),i=n?af(n.split(" ").map(r=>r.trim())):b0();return i.prefix||(i.prefix=ls()),t.mask=i,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:i,main:r,mask:s,maskId:o,transform:a}=e;const{width:l,icon:c}=r,{width:u,icon:f}=s,h=G3({transform:a,containerWidth:u,iconWidth:l}),d={tag:"rect",attributes:{...Cd,fill:"white"}},g=c.children?{children:c.children.map(Hy)}:{},_={tag:"g",attributes:{...h.inner},children:[Hy({tag:c.tag,attributes:{...c.attributes,...h.path},...g})]},m={tag:"g",attributes:{...h.outer},children:[_]},p="mask-".concat(o||Gl()),y="clip-".concat(o||Gl()),v={tag:"mask",attributes:{...Cd,id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[d,m]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:XN(f)},v]};return n.push(x,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(p,")"),...Cd}}),{children:n,attributes:i}}}},$N={provides(t){let e=!1;as.matchMedia&&(e=as.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...i,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...r,attributeName:"opacity"},o={tag:"circle",attributes:{...i,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...i,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...i,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},YN={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return t.symbol=i,t}}}},KN=[j3,IN,NN,DN,UN,VN,GN,WN,jN,$N,YN];oN(KN,{mixoutsTo:Yn});Yn.noAuto;Yn.config;Yn.library;Yn.dom;const Mm=Yn.parse;Yn.findIconDefinition;Yn.toHtml;const qN=Yn.icon;Yn.layer;Yn.text;Yn.counter;var BS={exports:{}},ZN="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",JN=ZN,QN=JN;function zS(){}function HS(){}HS.resetWarningCache=zS;var eD=function(){function t(i,r,s,o,a,l){if(l!==QN){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:HS,resetWarningCache:zS};return n.PropTypes=n,n};BS.exports=eD();var tD=BS.exports;const Ge=qw(tD);function Vy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Li(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Vy(Object(n),!0).forEach(function(i){Co(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Vy(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function fh(t){"@babel/helpers - typeof";return fh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fh(t)}function Co(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function nD(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function iD(t,e){if(t==null)return{};var n=nD(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function Em(t){return rD(t)||sD(t)||oD(t)||aD()}function rD(t){if(Array.isArray(t))return Tm(t)}function sD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function oD(t,e){if(t){if(typeof t=="string")return Tm(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tm(t,e)}}function Tm(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function aD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lD(t){var e,n=t.beat,i=t.fade,r=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,c=t.spinPulse,u=t.spinReverse,f=t.pulse,h=t.fixedWidth,d=t.inverse,g=t.border,_=t.listItem,m=t.flip,p=t.size,y=t.rotation,v=t.pull,x=(e={"fa-beat":n,"fa-fade":i,"fa-beat-fade":r,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":f,"fa-fw":h,"fa-inverse":d,"fa-border":g,"fa-li":_,"fa-flip":m===!0,"fa-flip-horizontal":m==="horizontal"||m==="both","fa-flip-vertical":m==="vertical"||m==="both"},Co(e,"fa-".concat(p),typeof p<"u"&&p!==null),Co(e,"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),Co(e,"fa-pull-".concat(v),typeof v<"u"&&v!==null),Co(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(x).map(function(A){return x[A]?A:null}).filter(function(A){return A})}function cD(t){return t=t-0,t===t}function VS(t){return cD(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var uD=["style"];function hD(t){return t.charAt(0).toUpperCase()+t.slice(1)}function fD(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=VS(n.slice(0,i)),s=n.slice(i+1).trim();return r.startsWith("webkit")?e[hD(r)]=s:e[r]=s,e},{})}function GS(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(l){return GS(t,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.attrs.className=u,delete e.attributes.class;break;case"style":l.attrs.style=fD(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[VS(c)]=u}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=iD(n,uD);return r.attrs.style=Li(Li({},r.attrs.style),o),t.apply(void 0,[e.tag,Li(Li({},r.attrs),a)].concat(Em(i)))}var WS=!1;try{WS=!0}catch{}function dD(){if(!WS&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Gy(t){if(t&&fh(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Mm.icon)return Mm.icon(t);if(t===null)return null;if(t&&fh(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Ad(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Co({},t,e):{}}var Wy={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},I0=js.forwardRef(function(t,e){var n=Li(Li({},Wy),t),i=n.icon,r=n.mask,s=n.symbol,o=n.className,a=n.title,l=n.titleId,c=n.maskId,u=Gy(i),f=Ad("classes",[].concat(Em(lD(n)),Em((o||"").split(" ")))),h=Ad("transform",typeof n.transform=="string"?Mm.transform(n.transform):n.transform),d=Ad("mask",Gy(r)),g=qN(u,Li(Li(Li(Li({},f),h),d),{},{symbol:s,title:a,titleId:l,maskId:c}));if(!g)return dD("Could not find icon",u),null;var _=g.abstract,m={ref:e};return Object.keys(n).forEach(function(p){Wy.hasOwnProperty(p)||(m[p]=n[p])}),pD(_[0],m)});I0.displayName="FontAwesomeIcon";I0.propTypes={beat:Ge.bool,border:Ge.bool,beatFade:Ge.bool,bounce:Ge.bool,className:Ge.string,fade:Ge.bool,flash:Ge.bool,mask:Ge.oneOfType([Ge.object,Ge.array,Ge.string]),maskId:Ge.string,fixedWidth:Ge.bool,inverse:Ge.bool,flip:Ge.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Ge.oneOfType([Ge.object,Ge.array,Ge.string]),listItem:Ge.bool,pull:Ge.oneOf(["right","left"]),pulse:Ge.bool,rotation:Ge.oneOf([0,90,180,270]),shake:Ge.bool,size:Ge.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Ge.bool,spinPulse:Ge.bool,spinReverse:Ge.bool,symbol:Ge.oneOfType([Ge.bool,Ge.string]),title:Ge.string,titleId:Ge.string,transform:Ge.oneOfType([Ge.string,Ge.object]),swapOpacity:Ge.bool};var pD=GS.bind(null,js.createElement),An=function(){return An=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},An.apply(this,arguments)};function dh(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return t.concat(s||Array.prototype.slice.call(e))}var gt="-ms-",Ml="-moz-",st="-webkit-",XS="comm",cf="rule",N0="decl",mD="@import",jS="@keyframes",gD="@layer",$S=Math.abs,D0=String.fromCharCode,Cm=Object.assign;function vD(t,e){return jt(t,0)^45?(((e<<2^jt(t,0))<<2^jt(t,1))<<2^jt(t,2))<<2^jt(t,3):0}function YS(t){return t.trim()}function nr(t,e){return(t=e.exec(t))?t[0]:t}function Be(t,e,n){return t.replace(e,n)}function Hu(t,e,n){return t.indexOf(e,n)}function jt(t,e){return t.charCodeAt(e)|0}function ma(t,e,n){return t.slice(e,n)}function Ii(t){return t.length}function KS(t){return t.length}function cl(t,e){return e.push(t),t}function _D(t,e){return t.map(e).join("")}function Xy(t,e){return t.filter(function(n){return!nr(n,e)})}var uf=1,ga=1,qS=0,ai=0,Ot=0,ka="";function hf(t,e,n,i,r,s,o,a){return{value:t,root:e,parent:n,type:i,props:r,children:s,line:uf,column:ga,length:o,return:"",siblings:a}}function Fr(t,e){return Cm(hf("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function xo(t){for(;t.root;)t=Fr(t.root,{children:[t]});cl(t,t.siblings)}function yD(){return Ot}function xD(){return Ot=ai>0?jt(ka,--ai):0,ga--,Ot===10&&(ga=1,uf--),Ot}function Mi(){return Ot=ai<qS?jt(ka,ai++):0,ga++,Ot===10&&(ga=1,uf++),Ot}function Bs(){return jt(ka,ai)}function Vu(){return ai}function ff(t,e){return ma(ka,t,e)}function Am(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wD(t){return uf=ga=1,qS=Ii(ka=t),ai=0,[]}function SD(t){return ka="",t}function bd(t){return YS(ff(ai-1,bm(t===91?t+2:t===40?t+1:t)))}function MD(t){for(;(Ot=Bs())&&Ot<33;)Mi();return Am(t)>2||Am(Ot)>3?"":" "}function ED(t,e){for(;--e&&Mi()&&!(Ot<48||Ot>102||Ot>57&&Ot<65||Ot>70&&Ot<97););return ff(t,Vu()+(e<6&&Bs()==32&&Mi()==32))}function bm(t){for(;Mi();)switch(Ot){case t:return ai;case 34:case 39:t!==34&&t!==39&&bm(Ot);break;case 40:t===41&&bm(t);break;case 92:Mi();break}return ai}function TD(t,e){for(;Mi()&&t+Ot!==57;)if(t+Ot===84&&Bs()===47)break;return"/*"+ff(e,ai-1)+"*"+D0(t===47?t:Mi())}function CD(t){for(;!Am(Bs());)Mi();return ff(t,ai)}function AD(t){return SD(Gu("",null,null,null,[""],t=wD(t),0,[0],t))}function Gu(t,e,n,i,r,s,o,a,l){for(var c=0,u=0,f=o,h=0,d=0,g=0,_=1,m=1,p=1,y=0,v="",x=r,A=s,C=i,M=v;m;)switch(g=y,y=Mi()){case 40:if(g!=108&&jt(M,f-1)==58){Hu(M+=Be(bd(y),"&","&\f"),"&\f",$S(c?a[c-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:M+=bd(y);break;case 9:case 10:case 13:case 32:M+=MD(g);break;case 92:M+=ED(Vu()-1,7);continue;case 47:switch(Bs()){case 42:case 47:cl(bD(TD(Mi(),Vu()),e,n,l),l);break;default:M+="/"}break;case 123*_:a[c++]=Ii(M)*p;case 125*_:case 59:case 0:switch(y){case 0:case 125:m=0;case 59+u:p==-1&&(M=Be(M,/\f/g,"")),d>0&&Ii(M)-f&&cl(d>32?$y(M+";",i,n,f-1,l):$y(Be(M," ","")+";",i,n,f-2,l),l);break;case 59:M+=";";default:if(cl(C=jy(M,e,n,c,u,r,a,v,x=[],A=[],f,s),s),y===123)if(u===0)Gu(M,e,C,C,x,s,f,a,A);else switch(h===99&&jt(M,3)===110?100:h){case 100:case 108:case 109:case 115:Gu(t,C,C,i&&cl(jy(t,C,C,0,0,r,a,v,r,x=[],f,A),A),r,A,f,a,i?x:A);break;default:Gu(M,C,C,C,[""],A,0,a,A)}}c=u=d=0,_=p=1,v=M="",f=o;break;case 58:f=1+Ii(M),d=g;default:if(_<1){if(y==123)--_;else if(y==125&&_++==0&&xD()==125)continue}switch(M+=D0(y),y*_){case 38:p=u>0?1:(M+="\f",-1);break;case 44:a[c++]=(Ii(M)-1)*p,p=1;break;case 64:Bs()===45&&(M+=bd(Mi())),h=Bs(),u=f=Ii(v=M+=CD(Vu())),y++;break;case 45:g===45&&Ii(M)==2&&(_=0)}}return s}function jy(t,e,n,i,r,s,o,a,l,c,u,f){for(var h=r-1,d=r===0?s:[""],g=KS(d),_=0,m=0,p=0;_<i;++_)for(var y=0,v=ma(t,h+1,h=$S(m=o[_])),x=t;y<g;++y)(x=YS(m>0?d[y]+" "+v:Be(v,/&\f/g,d[y])))&&(l[p++]=x);return hf(t,e,n,r===0?cf:a,l,c,u,f)}function bD(t,e,n,i){return hf(t,e,n,XS,D0(yD()),ma(t,2,-2),0,i)}function $y(t,e,n,i,r){return hf(t,e,n,N0,ma(t,0,i),ma(t,i+1,-1),i,r)}function ZS(t,e,n){switch(vD(t,e)){case 5103:return st+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return st+t+t;case 4789:return Ml+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return st+t+Ml+t+gt+t+t;case 5936:switch(jt(t,e+11)){case 114:return st+t+gt+Be(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return st+t+gt+Be(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return st+t+gt+Be(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return st+t+gt+t+t;case 6165:return st+t+gt+"flex-"+t+t;case 5187:return st+t+Be(t,/(\w+).+(:[^]+)/,st+"box-$1$2"+gt+"flex-$1$2")+t;case 5443:return st+t+gt+"flex-item-"+Be(t,/flex-|-self/g,"")+(nr(t,/flex-|baseline/)?"":gt+"grid-row-"+Be(t,/flex-|-self/g,""))+t;case 4675:return st+t+gt+"flex-line-pack"+Be(t,/align-content|flex-|-self/g,"")+t;case 5548:return st+t+gt+Be(t,"shrink","negative")+t;case 5292:return st+t+gt+Be(t,"basis","preferred-size")+t;case 6060:return st+"box-"+Be(t,"-grow","")+st+t+gt+Be(t,"grow","positive")+t;case 4554:return st+Be(t,/([^-])(transform)/g,"$1"+st+"$2")+t;case 6187:return Be(Be(Be(t,/(zoom-|grab)/,st+"$1"),/(image-set)/,st+"$1"),t,"")+t;case 5495:case 3959:return Be(t,/(image-set\([^]*)/,st+"$1$`$1");case 4968:return Be(Be(t,/(.+:)(flex-)?(.*)/,st+"box-pack:$3"+gt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+st+t+t;case 4200:if(!nr(t,/flex-|baseline/))return gt+"grid-column-align"+ma(t,e)+t;break;case 2592:case 3360:return gt+Be(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(i,r){return e=r,nr(i.props,/grid-\w+-end/)})?~Hu(t+(n=n[e].value),"span",0)?t:gt+Be(t,"-start","")+t+gt+"grid-row-span:"+(~Hu(n,"span",0)?nr(n,/\d+/):+nr(n,/\d+/)-+nr(t,/\d+/))+";":gt+Be(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(i){return nr(i.props,/grid-\w+-start/)})?t:gt+Be(Be(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Be(t,/(.+)-inline(.+)/,st+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ii(t)-1-e>6)switch(jt(t,e+1)){case 109:if(jt(t,e+4)!==45)break;case 102:return Be(t,/(.+:)(.+)-([^]+)/,"$1"+st+"$2-$3$1"+Ml+(jt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Hu(t,"stretch",0)?ZS(Be(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Be(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,r,s,o,a,l,c){return gt+r+":"+s+c+(o?gt+r+"-span:"+(a?l:+l-+s)+c:"")+t});case 4949:if(jt(t,e+6)===121)return Be(t,":",":"+st)+t;break;case 6444:switch(jt(t,jt(t,14)===45?18:11)){case 120:return Be(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+st+(jt(t,14)===45?"inline-":"")+"box$3$1"+st+"$2$3$1"+gt+"$2box$3")+t;case 100:return Be(t,":",":"+gt)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Be(t,"scroll-","scroll-snap-")+t}return t}function ph(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function RD(t,e,n,i){switch(t.type){case gD:if(t.children.length)break;case mD:case N0:return t.return=t.return||t.value;case XS:return"";case jS:return t.return=t.value+"{"+ph(t.children,i)+"}";case cf:if(!Ii(t.value=t.props.join(",")))return""}return Ii(n=ph(t.children,i))?t.return=t.value+"{"+n+"}":""}function PD(t){var e=KS(t);return function(n,i,r,s){for(var o="",a=0;a<e;a++)o+=t[a](n,i,r,s)||"";return o}}function LD(t){return function(e){e.root||(e=e.return)&&t(e)}}function ID(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case N0:t.return=ZS(t.value,t.length,n);return;case jS:return ph([Fr(t,{value:Be(t.value,"@","@"+st)})],i);case cf:if(t.length)return _D(n=t.props,function(r){switch(nr(r,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":xo(Fr(t,{props:[Be(r,/:(read-\w+)/,":"+Ml+"$1")]})),xo(Fr(t,{props:[r]})),Cm(t,{props:Xy(n,i)});break;case"::placeholder":xo(Fr(t,{props:[Be(r,/:(plac\w+)/,":"+st+"input-$1")]})),xo(Fr(t,{props:[Be(r,/:(plac\w+)/,":"+Ml+"$1")]})),xo(Fr(t,{props:[Be(r,/:(plac\w+)/,gt+"input-$1")]})),xo(Fr(t,{props:[r]})),Cm(t,{props:Xy(n,i)});break}return""})}}var ND={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Bn={},va=typeof process<"u"&&Bn!==void 0&&(Bn.REACT_APP_SC_ATTR||Bn.SC_ATTR)||"data-styled",JS="active",QS="data-styled-version",df="6.1.13",U0=`/*!sc*/
`,mh=typeof window<"u"&&"HTMLElement"in window,DD=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Bn!==void 0&&Bn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Bn.REACT_APP_SC_DISABLE_SPEEDY!==""?Bn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Bn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Bn!==void 0&&Bn.SC_DISABLE_SPEEDY!==void 0&&Bn.SC_DISABLE_SPEEDY!==""&&Bn.SC_DISABLE_SPEEDY!=="false"&&Bn.SC_DISABLE_SPEEDY),pf=Object.freeze([]),_a=Object.freeze({});function UD(t,e,n){return n===void 0&&(n=_a),t.theme!==n.theme&&t.theme||e||n.theme}var eM=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),OD=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,kD=/(^-|-$)/g;function Yy(t){return t.replace(OD,"-").replace(kD,"")}var FD=/(a)(d)/gi,ou=52,Ky=function(t){return String.fromCharCode(t+(t>25?39:97))};function Rm(t){var e,n="";for(e=Math.abs(t);e>ou;e=e/ou|0)n=Ky(e%ou)+n;return(Ky(e%ou)+n).replace(FD,"$1-$2")}var Rd,tM=5381,Ao=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},nM=function(t){return Ao(tM,t)};function BD(t){return Rm(nM(t)>>>0)}function zD(t){return t.displayName||t.name||"Component"}function Pd(t){return typeof t=="string"&&!0}var iM=typeof Symbol=="function"&&Symbol.for,rM=iM?Symbol.for("react.memo"):60115,HD=iM?Symbol.for("react.forward_ref"):60112,VD={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},GD={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},sM={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},WD=((Rd={})[HD]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Rd[rM]=sM,Rd);function qy(t){return("type"in(e=t)&&e.type.$$typeof)===rM?sM:"$$typeof"in t?WD[t.$$typeof]:VD;var e}var XD=Object.defineProperty,jD=Object.getOwnPropertyNames,Zy=Object.getOwnPropertySymbols,$D=Object.getOwnPropertyDescriptor,YD=Object.getPrototypeOf,Jy=Object.prototype;function oM(t,e,n){if(typeof e!="string"){if(Jy){var i=YD(e);i&&i!==Jy&&oM(t,i,n)}var r=jD(e);Zy&&(r=r.concat(Zy(e)));for(var s=qy(t),o=qy(e),a=0;a<r.length;++a){var l=r[a];if(!(l in GD||n&&n[l]||o&&l in o||s&&l in s)){var c=$D(e,l);try{XD(t,l,c)}catch{}}}}return t}function ya(t){return typeof t=="function"}function O0(t){return typeof t=="object"&&"styledComponentId"in t}function Is(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Qy(t,e){if(t.length===0)return"";for(var n=t[0],i=1;i<t.length;i++)n+=t[i];return n}function Wl(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Pm(t,e,n){if(n===void 0&&(n=!1),!n&&!Wl(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=Pm(t[i],e[i]);else if(Wl(e))for(var i in e)t[i]=Pm(t[i],e[i]);return t}function k0(t,e){Object.defineProperty(t,"toString",{value:e})}function yc(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var KD=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,i=0;i<e;i++)n+=this.groupSizes[i];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var i=this.groupSizes,r=i.length,s=r;e>=s;)if((s<<=1)<0)throw yc(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var o=r;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],i=this.indexOfGroup(e),r=i+n;this.groupSizes[e]=0;for(var s=i;s<r;s++)this.tag.deleteRule(i)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var i=this.groupSizes[e],r=this.indexOfGroup(e),s=r+i,o=r;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(U0);return n},t}(),Wu=new Map,gh=new Map,Xu=1,au=function(t){if(Wu.has(t))return Wu.get(t);for(;gh.has(Xu);)Xu++;var e=Xu++;return Wu.set(t,e),gh.set(e,t),e},qD=function(t,e){Xu=e+1,Wu.set(t,e),gh.set(e,t)},ZD="style[".concat(va,"][").concat(QS,'="').concat(df,'"]'),JD=new RegExp("^".concat(va,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),QD=function(t,e,n){for(var i,r=n.split(","),s=0,o=r.length;s<o;s++)(i=r[s])&&t.registerName(e,i)},eU=function(t,e){for(var n,i=((n=e.textContent)!==null&&n!==void 0?n:"").split(U0),r=[],s=0,o=i.length;s<o;s++){var a=i[s].trim();if(a){var l=a.match(JD);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(qD(u,c),QD(t,u,l[3]),t.getTag().insertRules(c,r)),r.length=0}else r.push(a)}}},ex=function(t){for(var e=document.querySelectorAll(ZD),n=0,i=e.length;n<i;n++){var r=e[n];r&&r.getAttribute(va)!==JS&&(eU(t,r),r.parentNode&&r.parentNode.removeChild(r))}};function tU(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var aM=function(t){var e=document.head,n=t||e,i=document.createElement("style"),r=function(a){var l=Array.from(a.querySelectorAll("style[".concat(va,"]")));return l[l.length-1]}(n),s=r!==void 0?r.nextSibling:null;i.setAttribute(va,JS),i.setAttribute(QS,df);var o=tU();return o&&i.setAttribute("nonce",o),n.insertBefore(i,s),i},nU=function(){function t(e){this.element=aM(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,r=0,s=i.length;r<s;r++){var o=i[r];if(o.ownerNode===n)return o}throw yc(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),iU=function(){function t(e){this.element=aM(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),rU=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),tx=mh,sU={isServer:!mh,useCSSOMInjection:!DD},lM=function(){function t(e,n,i){e===void 0&&(e=_a),n===void 0&&(n={});var r=this;this.options=An(An({},sU),e),this.gs=n,this.names=new Map(i),this.server=!!e.isServer,!this.server&&mh&&tx&&(tx=!1,ex(this)),k0(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",c=function(f){var h=function(p){return gh.get(p)}(f);if(h===void 0)return"continue";var d=s.names.get(h),g=o.getGroup(f);if(d===void 0||!d.size||g.length===0)return"continue";var _="".concat(va,".g").concat(f,'[id="').concat(h,'"]'),m="";d!==void 0&&d.forEach(function(p){p.length>0&&(m+="".concat(p,","))}),l+="".concat(g).concat(_,'{content:"').concat(m,'"}').concat(U0)},u=0;u<a;u++)c(u);return l}(r)})}return t.registerId=function(e){return au(e)},t.prototype.rehydrate=function(){!this.server&&mh&&ex(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(An(An({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var i=n.useCSSOMInjection,r=n.target;return n.isServer?new rU(r):i?new nU(r):new iU(r)}(this.options),new KD(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(au(e),this.names.has(e))this.names.get(e).add(n);else{var i=new Set;i.add(n),this.names.set(e,i)}},t.prototype.insertRules=function(e,n,i){this.registerName(e,n),this.getTag().insertRules(au(e),i)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(au(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),oU=/&/g,aU=/^\s*\/\/.*$/gm;function cM(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=cM(n.children,e)),n})}function lU(t){var e,n,i,r=_a,s=r.options,o=s===void 0?_a:s,a=r.plugins,l=a===void 0?pf:a,c=function(h,d,g){return g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(e):h},u=l.slice();u.push(function(h){h.type===cf&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(oU,n).replace(i,c))}),o.prefix&&u.push(ID),u.push(RD);var f=function(h,d,g,_){d===void 0&&(d=""),g===void 0&&(g=""),_===void 0&&(_="&"),e=_,n=d,i=new RegExp("\\".concat(n,"\\b"),"g");var m=h.replace(aU,""),p=AD(g||d?"".concat(g," ").concat(d," { ").concat(m," }"):m);o.namespace&&(p=cM(p,o.namespace));var y=[];return ph(p,PD(u.concat(LD(function(v){return y.push(v)})))),y};return f.hash=l.length?l.reduce(function(h,d){return d.name||yc(15),Ao(h,d.name)},tM).toString():"",f}var cU=new lM,Lm=lU(),uM=js.createContext({shouldForwardProp:void 0,styleSheet:cU,stylis:Lm});uM.Consumer;js.createContext(void 0);function nx(){return gc.useContext(uM)}var uU=function(){function t(e,n){var i=this;this.inject=function(r,s){s===void 0&&(s=Lm);var o=i.name+s.hash;r.hasNameForId(i.id,o)||r.insertRules(i.id,o,s(i.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,k0(this,function(){throw yc(12,String(i.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Lm),this.name+e.hash},t}(),hU=function(t){return t>="A"&&t<="Z"};function ix(t){for(var e="",n=0;n<t.length;n++){var i=t[n];if(n===1&&i==="-"&&t[0]==="-")return t;hU(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var hM=function(t){return t==null||t===!1||t===""},fM=function(t){var e,n,i=[];for(var r in t){var s=t[r];t.hasOwnProperty(r)&&!hM(s)&&(Array.isArray(s)&&s.isCss||ya(s)?i.push("".concat(ix(r),":"),s,";"):Wl(s)?i.push.apply(i,dh(dh(["".concat(r," {")],fM(s),!1),["}"],!1)):i.push("".concat(ix(r),": ").concat((e=r,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in ND||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function zs(t,e,n,i){if(hM(t))return[];if(O0(t))return[".".concat(t.styledComponentId)];if(ya(t)){if(!ya(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var r=t(e);return zs(r,e,n,i)}var s;return t instanceof uU?n?(t.inject(n,i),[t.getName(i)]):[t]:Wl(t)?fM(t):Array.isArray(t)?Array.prototype.concat.apply(pf,t.map(function(o){return zs(o,e,n,i)})):[t.toString()]}function fU(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ya(n)&&!O0(n))return!1}return!0}var dU=nM(df),pU=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&fU(e),this.componentId=n,this.baseHash=Ao(dU,n),this.baseStyle=i,lM.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))r=Is(r,this.staticRulesId);else{var s=Qy(zs(this.rules,e,n,i)),o=Rm(Ao(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=i(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}r=Is(r,o),this.staticRulesId=o}else{for(var l=Ao(this.baseHash,i.hash),c="",u=0;u<this.rules.length;u++){var f=this.rules[u];if(typeof f=="string")c+=f;else if(f){var h=Qy(zs(f,e,n,i));l=Ao(l,h+u),c+=h}}if(c){var d=Rm(l>>>0);n.hasNameForId(this.componentId,d)||n.insertRules(this.componentId,d,i(c,".".concat(d),void 0,this.componentId)),r=Is(r,d)}}return r},t}(),dM=js.createContext(void 0);dM.Consumer;var Ld={};function mU(t,e,n){var i=O0(t),r=t,s=!Pd(t),o=e.attrs,a=o===void 0?pf:o,l=e.componentId,c=l===void 0?function(x,A){var C=typeof x!="string"?"sc":Yy(x);Ld[C]=(Ld[C]||0)+1;var M="".concat(C,"-").concat(BD(df+C+Ld[C]));return A?"".concat(A,"-").concat(M):M}(e.displayName,e.parentComponentId):l,u=e.displayName,f=u===void 0?function(x){return Pd(x)?"styled.".concat(x):"Styled(".concat(zD(x),")")}(t):u,h=e.displayName&&e.componentId?"".concat(Yy(e.displayName),"-").concat(e.componentId):e.componentId||c,d=i&&r.attrs?r.attrs.concat(a).filter(Boolean):a,g=e.shouldForwardProp;if(i&&r.shouldForwardProp){var _=r.shouldForwardProp;if(e.shouldForwardProp){var m=e.shouldForwardProp;g=function(x,A){return _(x,A)&&m(x,A)}}else g=_}var p=new pU(n,h,i?r.componentStyle:void 0);function y(x,A){return function(C,M,R){var H=C.attrs,w=C.componentStyle,T=C.defaultProps,V=C.foldedComponentIds,B=C.styledComponentId,W=C.target,Z=js.useContext(dM),z=nx(),te=C.shouldForwardProp||z.shouldForwardProp,I=UD(M,Z,T)||_a,j=function(J,oe,ae){for(var Ce,Te=An(An({},oe),{className:void 0,theme:ae}),Ve=0;Ve<J.length;Ve+=1){var Ke=ya(Ce=J[Ve])?Ce(Te):Ce;for(var Ue in Ke)Te[Ue]=Ue==="className"?Is(Te[Ue],Ke[Ue]):Ue==="style"?An(An({},Te[Ue]),Ke[Ue]):Ke[Ue]}return oe.className&&(Te.className=Is(Te.className,oe.className)),Te}(H,M,I),K=j.as||W,ne={};for(var xe in j)j[xe]===void 0||xe[0]==="$"||xe==="as"||xe==="theme"&&j.theme===I||(xe==="forwardedAs"?ne.as=j.forwardedAs:te&&!te(xe,K)||(ne[xe]=j[xe]));var He=function(J,oe){var ae=nx(),Ce=J.generateAndInjectStyles(oe,ae.styleSheet,ae.stylis);return Ce}(w,j),X=Is(V,B);return He&&(X+=" "+He),j.className&&(X+=" "+j.className),ne[Pd(K)&&!eM.has(K)?"class":"className"]=X,ne.ref=R,gc.createElement(K,ne)}(v,x,A)}y.displayName=f;var v=js.forwardRef(y);return v.attrs=d,v.componentStyle=p,v.displayName=f,v.shouldForwardProp=g,v.foldedComponentIds=i?Is(r.foldedComponentIds,r.styledComponentId):"",v.styledComponentId=h,v.target=i?r.target:t,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=i?function(A){for(var C=[],M=1;M<arguments.length;M++)C[M-1]=arguments[M];for(var R=0,H=C;R<H.length;R++)Pm(A,H[R],!0);return A}({},r.defaultProps,x):x}}),k0(v,function(){return".".concat(v.styledComponentId)}),s&&oM(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function rx(t,e){for(var n=[t[0]],i=0,r=e.length;i<r;i+=1)n.push(e[i],t[i+1]);return n}var sx=function(t){return Object.assign(t,{isCss:!0})};function gU(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ya(t)||Wl(t))return sx(zs(rx(pf,dh([t],e,!0))));var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?zs(i):sx(zs(rx(i,e)))}function Im(t,e,n){if(n===void 0&&(n=_a),!e)throw yc(1,e);var i=function(r){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,gU.apply(void 0,dh([r],s,!1)))};return i.attrs=function(r){return Im(t,e,An(An({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},i.withConfig=function(r){return Im(t,e,An(An({},n),r))},i}var pM=function(t){return Im(mU,t)},bt=pM;eM.forEach(function(t){bt[t]=pM(t)});const vU=bt.button`
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
`;const er=bt(I0)`
	height: 14px;
	min-height: 14px;
	max-height: 14px;
	width: 14px;
	min-width: 14px;
	max-width: 14px;
`,_U=()=>yt.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:12,height:16,fill:"none",children:[yt.jsx("g",{clipPath:"url(#a)",children:yt.jsx("path",{stroke:"#fff",d:"M.5 6.5H6m-5.5 0V5C.5 2.237 2.237.5 5 .5h1m-5.5 6V11c0 2.762 1.737 4.5 4.5 4.5h2c2.762 0 4.5-1.738 4.5-4.5V6.5M6 6.5v-6m0 6h5.5M6 .5h1c2.762 0 4.5 1.737 4.5 4.5v1.5",style:{stroke:"#fff",strokeOpacity:1}})}),yt.jsx("path",{fill:"#fff",d:"M.5 6.5H6v-6H5C2.237.5.5 2.237.5 5v1.5Z",style:{fill:"#fff",fillOpacity:1}}),yt.jsx("defs",{children:yt.jsx("clipPath",{id:"a",children:yt.jsx("path",{fill:"#fff",d:"M0 0h12v16H0z",style:{fill:"#fff",fillOpacity:1}})})})]}),yU=()=>yt.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:12,height:16,fill:"none",children:[yt.jsx("g",{clipPath:"url(#a)",children:yt.jsx("path",{stroke:"#fff",d:"M.5 6.5H6m-5.5 0V5C.5 2.237 2.237.5 5 .5h1m-5.5 6V11c0 2.762 1.737 4.5 4.5 4.5h2c2.762 0 4.5-1.738 4.5-4.5V6.5M6 6.5v-6m0 6h5.5M6 .5h1c2.762 0 4.5 1.737 4.5 4.5v1.5",style:{stroke:"#fff",strokeOpacity:1}})}),yt.jsx("path",{fill:"#fff",d:"M11.5 6.5H6v-6h1c2.762 0 4.5 1.737 4.5 4.5v1.5Z",style:{fill:"#fff",fillOpacity:1}}),yt.jsx("defs",{children:yt.jsx("clipPath",{id:"a",children:yt.jsx("path",{fill:"#fff",d:"M0 0h12v16H0z",style:{fill:"#fff",fillOpacity:1}})})})]}),xU={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]},wU={prefix:"fas",iconName:"caret-left",icon:[256,512,[],"f0d9","M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]},SU={prefix:"fas",iconName:"arrow-right-to-bracket",icon:[512,512,["sign-in"],"f090","M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]},MU={prefix:"fas",iconName:"caret-up",icon:[320,512,[],"f0d8","M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]},EU={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]},TU={prefix:"fas",iconName:"delete-left",icon:[576,512,[9003,"backspace"],"f55a","M576 128c0-35.3-28.7-64-64-64L205.3 64c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7L512 448c35.3 0 64-28.7 64-64l0-256zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]},ox={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]},CU={prefix:"fas",iconName:"arrow-turn-down",icon:[384,512,["level-down"],"f149","M32 64C14.3 64 0 49.7 0 32S14.3 0 32 0l96 0c53 0 96 43 96 96l0 306.7 73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 402.7 160 96c0-17.7-14.3-32-32-32L32 64z"]};yt.jsx(er,{icon:SU}),yt.jsx(er,{icon:TU}),yt.jsx(er,{style:{transform:"rotate(90deg)"},icon:CU}),yt.jsx(er,{icon:ox}),yt.jsx(er,{icon:ox}),yt.jsx(er,{icon:MU}),yt.jsx(er,{icon:EU}),yt.jsx(er,{icon:wU}),yt.jsx(er,{icon:xU}),yt.jsx(_U,{}),yt.jsx(yU,{});bt.div`
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
`;bt(vU)`
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
`;var mM={exports:{}},Kn={},gM={exports:{}},vM={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,j){var K=I.length;I.push(j);e:for(;0<K;){var ne=K-1>>>1,xe=I[ne];if(0<r(xe,j))I[ne]=j,I[K]=xe,K=ne;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var j=I[0],K=I.pop();if(K!==j){I[0]=K;e:for(var ne=0,xe=I.length,He=xe>>>1;ne<He;){var X=2*(ne+1)-1,J=I[X],oe=X+1,ae=I[oe];if(0>r(J,K))oe<xe&&0>r(ae,J)?(I[ne]=ae,I[oe]=K,ne=oe):(I[ne]=J,I[X]=K,ne=X);else if(oe<xe&&0>r(ae,K))I[ne]=ae,I[oe]=K,ne=oe;else break e}}return j}function r(I,j){var K=I.sortIndex-j.sortIndex;return K!==0?K:I.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,h=3,d=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var j=n(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=I)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(c)}}function x(I){if(_=!1,v(I),!g)if(n(l)!==null)g=!0,z(A);else{var j=n(c);j!==null&&te(x,j.startTime-I)}}function A(I,j){g=!1,_&&(_=!1,p(R),R=-1),d=!0;var K=h;try{for(v(j),f=n(l);f!==null&&(!(f.expirationTime>j)||I&&!T());){var ne=f.callback;if(typeof ne=="function"){f.callback=null,h=f.priorityLevel;var xe=ne(f.expirationTime<=j);j=t.unstable_now(),typeof xe=="function"?f.callback=xe:f===n(l)&&i(l),v(j)}else i(l);f=n(l)}if(f!==null)var He=!0;else{var X=n(c);X!==null&&te(x,X.startTime-j),He=!1}return He}finally{f=null,h=K,d=!1}}var C=!1,M=null,R=-1,H=5,w=-1;function T(){return!(t.unstable_now()-w<H)}function V(){if(M!==null){var I=t.unstable_now();w=I;var j=!0;try{j=M(!0,I)}finally{j?B():(C=!1,M=null)}}else C=!1}var B;if(typeof y=="function")B=function(){y(V)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,Z=W.port2;W.port1.onmessage=V,B=function(){Z.postMessage(null)}}else B=function(){m(V,0)};function z(I){M=I,C||(C=!0,B())}function te(I,j){R=m(function(){I(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){g||d||(g=!0,z(A))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var K=h;h=j;try{return I()}finally{h=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,j){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var K=h;h=I;try{return j()}finally{h=K}},t.unstable_scheduleCallback=function(I,j,K){var ne=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ne+K:ne):K=ne,I){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=K+xe,I={id:u++,callback:j,priorityLevel:I,startTime:K,expirationTime:xe,sortIndex:-1},K>ne?(I.sortIndex=K,e(c,I),n(l)===null&&I===n(c)&&(_?(p(R),R=-1):_=!0,te(x,K-ne))):(I.sortIndex=xe,e(l,I),g||d||(g=!0,z(A))),I},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(I){var j=h;return function(){var K=h;h=j;try{return I.apply(this,arguments)}finally{h=K}}}})(vM);gM.exports=vM;var AU=gM.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bU=gc,jn=AU;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _M=new Set,Xl={};function to(t,e){xa(t,e),xa(t+"Capture",e)}function xa(t,e){for(Xl[t]=e,t=0;t<e.length;t++)_M.add(e[t])}var yr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nm=Object.prototype.hasOwnProperty,RU=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ax={},lx={};function PU(t){return Nm.call(lx,t)?!0:Nm.call(ax,t)?!1:RU.test(t)?lx[t]=!0:(ax[t]=!0,!1)}function LU(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function IU(t,e,n,i){if(e===null||typeof e>"u"||LU(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Sn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tn[t]=new Sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tn[e]=new Sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tn[t]=new Sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tn[t]=new Sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tn[t]=new Sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tn[t]=new Sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tn[t]=new Sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tn[t]=new Sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tn[t]=new Sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var F0=/[\-:]([a-z])/g;function B0(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(F0,B0);tn[e]=new Sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(F0,B0);tn[e]=new Sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(F0,B0);tn[e]=new Sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tn[t]=new Sn(t,1,!1,t.toLowerCase(),null,!1,!1)});tn.xlinkHref=new Sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tn[t]=new Sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function z0(t,e,n,i){var r=tn.hasOwnProperty(e)?tn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(IU(e,n,r,i)&&(n=null),i||r===null?PU(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Tr=bU.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lu=Symbol.for("react.element"),bo=Symbol.for("react.portal"),Ro=Symbol.for("react.fragment"),H0=Symbol.for("react.strict_mode"),Dm=Symbol.for("react.profiler"),yM=Symbol.for("react.provider"),xM=Symbol.for("react.context"),V0=Symbol.for("react.forward_ref"),Um=Symbol.for("react.suspense"),Om=Symbol.for("react.suspense_list"),G0=Symbol.for("react.memo"),zr=Symbol.for("react.lazy"),wM=Symbol.for("react.offscreen"),cx=Symbol.iterator;function Ka(t){return t===null||typeof t!="object"?null:(t=cx&&t[cx]||t["@@iterator"],typeof t=="function"?t:null)}var At=Object.assign,Id;function ul(t){if(Id===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Id=e&&e[1]||""}return`
`+Id+t}var Nd=!1;function Dd(t,e){if(!t||Nd)return"";Nd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Nd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ul(t):""}function NU(t){switch(t.tag){case 5:return ul(t.type);case 16:return ul("Lazy");case 13:return ul("Suspense");case 19:return ul("SuspenseList");case 0:case 2:case 15:return t=Dd(t.type,!1),t;case 11:return t=Dd(t.type.render,!1),t;case 1:return t=Dd(t.type,!0),t;default:return""}}function km(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ro:return"Fragment";case bo:return"Portal";case Dm:return"Profiler";case H0:return"StrictMode";case Um:return"Suspense";case Om:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case xM:return(t.displayName||"Context")+".Consumer";case yM:return(t._context.displayName||"Context")+".Provider";case V0:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case G0:return e=t.displayName||null,e!==null?e:km(t.type)||"Memo";case zr:e=t._payload,t=t._init;try{return km(t(e))}catch{}}return null}function DU(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return km(e);case 8:return e===H0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function us(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function SM(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function UU(t){var e=SM(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function cu(t){t._valueTracker||(t._valueTracker=UU(t))}function MM(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=SM(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function vh(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Fm(t,e){var n=e.checked;return At({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ux(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=us(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function EM(t,e){e=e.checked,e!=null&&z0(t,"checked",e,!1)}function Bm(t,e){EM(t,e);var n=us(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zm(t,e.type,n):e.hasOwnProperty("defaultValue")&&zm(t,e.type,us(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hx(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zm(t,e,n){(e!=="number"||vh(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var hl=Array.isArray;function Xo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+us(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Hm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return At({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fx(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(hl(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:us(n)}}function TM(t,e){var n=us(e.value),i=us(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function dx(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function CM(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?CM(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var uu,AM=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(uu=uu||document.createElement("div"),uu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=uu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function jl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var El={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},OU=["Webkit","ms","Moz","O"];Object.keys(El).forEach(function(t){OU.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),El[e]=El[t]})});function bM(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||El.hasOwnProperty(t)&&El[t]?(""+e).trim():e+"px"}function RM(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=bM(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var kU=At({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gm(t,e){if(e){if(kU[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Wm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xm=null;function W0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jm=null,jo=null,$o=null;function px(t){if(t=Sc(t)){if(typeof jm!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=yf(e),jm(t.stateNode,t.type,e))}}function PM(t){jo?$o?$o.push(t):$o=[t]:jo=t}function LM(){if(jo){var t=jo,e=$o;if($o=jo=null,px(t),e)for(t=0;t<e.length;t++)px(e[t])}}function IM(t,e){return t(e)}function NM(){}var Ud=!1;function DM(t,e,n){if(Ud)return t(e,n);Ud=!0;try{return IM(t,e,n)}finally{Ud=!1,(jo!==null||$o!==null)&&(NM(),LM())}}function $l(t,e){var n=t.stateNode;if(n===null)return null;var i=yf(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var $m=!1;if(yr)try{var qa={};Object.defineProperty(qa,"passive",{get:function(){$m=!0}}),window.addEventListener("test",qa,qa),window.removeEventListener("test",qa,qa)}catch{$m=!1}function FU(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Tl=!1,_h=null,yh=!1,Ym=null,BU={onError:function(t){Tl=!0,_h=t}};function zU(t,e,n,i,r,s,o,a,l){Tl=!1,_h=null,FU.apply(BU,arguments)}function HU(t,e,n,i,r,s,o,a,l){if(zU.apply(this,arguments),Tl){if(Tl){var c=_h;Tl=!1,_h=null}else throw Error(ee(198));yh||(yh=!0,Ym=c)}}function no(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function UM(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function mx(t){if(no(t)!==t)throw Error(ee(188))}function VU(t){var e=t.alternate;if(!e){if(e=no(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return mx(r),t;if(s===i)return mx(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function OM(t){return t=VU(t),t!==null?kM(t):null}function kM(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=kM(t);if(e!==null)return e;t=t.sibling}return null}var FM=jn.unstable_scheduleCallback,gx=jn.unstable_cancelCallback,GU=jn.unstable_shouldYield,WU=jn.unstable_requestPaint,Nt=jn.unstable_now,XU=jn.unstable_getCurrentPriorityLevel,X0=jn.unstable_ImmediatePriority,BM=jn.unstable_UserBlockingPriority,xh=jn.unstable_NormalPriority,jU=jn.unstable_LowPriority,zM=jn.unstable_IdlePriority,mf=null,Fi=null;function $U(t){if(Fi&&typeof Fi.onCommitFiberRoot=="function")try{Fi.onCommitFiberRoot(mf,t,void 0,(t.current.flags&128)===128)}catch{}}var Ei=Math.clz32?Math.clz32:qU,YU=Math.log,KU=Math.LN2;function qU(t){return t>>>=0,t===0?32:31-(YU(t)/KU|0)|0}var hu=64,fu=4194304;function fl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wh(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=fl(a):(s&=o,s!==0&&(i=fl(s)))}else o=n&~r,o!==0?i=fl(o):s!==0&&(i=fl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ei(e),r=1<<n,i|=t[n],e&=~r;return i}function ZU(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function JU(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ei(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=ZU(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Km(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function HM(){var t=hu;return hu<<=1,!(hu&4194240)&&(hu=64),t}function Od(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xc(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ei(e),t[e]=n}function QU(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Ei(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function j0(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Ei(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ct=0;function VM(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var GM,$0,WM,XM,jM,qm=!1,du=[],Qr=null,es=null,ts=null,Yl=new Map,Kl=new Map,Gr=[],eO="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vx(t,e){switch(t){case"focusin":case"focusout":Qr=null;break;case"dragenter":case"dragleave":es=null;break;case"mouseover":case"mouseout":ts=null;break;case"pointerover":case"pointerout":Yl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kl.delete(e.pointerId)}}function Za(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Sc(e),e!==null&&$0(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function tO(t,e,n,i,r){switch(e){case"focusin":return Qr=Za(Qr,t,e,n,i,r),!0;case"dragenter":return es=Za(es,t,e,n,i,r),!0;case"mouseover":return ts=Za(ts,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Yl.set(s,Za(Yl.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Kl.set(s,Za(Kl.get(s)||null,t,e,n,i,r)),!0}return!1}function $M(t){var e=Ns(t.target);if(e!==null){var n=no(e);if(n!==null){if(e=n.tag,e===13){if(e=UM(n),e!==null){t.blockedOn=e,jM(t.priority,function(){WM(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ju(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Xm=i,n.target.dispatchEvent(i),Xm=null}else return e=Sc(n),e!==null&&$0(e),t.blockedOn=n,!1;e.shift()}return!0}function _x(t,e,n){ju(t)&&n.delete(e)}function nO(){qm=!1,Qr!==null&&ju(Qr)&&(Qr=null),es!==null&&ju(es)&&(es=null),ts!==null&&ju(ts)&&(ts=null),Yl.forEach(_x),Kl.forEach(_x)}function Ja(t,e){t.blockedOn===e&&(t.blockedOn=null,qm||(qm=!0,jn.unstable_scheduleCallback(jn.unstable_NormalPriority,nO)))}function ql(t){function e(r){return Ja(r,t)}if(0<du.length){Ja(du[0],t);for(var n=1;n<du.length;n++){var i=du[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Qr!==null&&Ja(Qr,t),es!==null&&Ja(es,t),ts!==null&&Ja(ts,t),Yl.forEach(e),Kl.forEach(e),n=0;n<Gr.length;n++)i=Gr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Gr.length&&(n=Gr[0],n.blockedOn===null);)$M(n),n.blockedOn===null&&Gr.shift()}var Yo=Tr.ReactCurrentBatchConfig,Sh=!0;function iO(t,e,n,i){var r=ct,s=Yo.transition;Yo.transition=null;try{ct=1,Y0(t,e,n,i)}finally{ct=r,Yo.transition=s}}function rO(t,e,n,i){var r=ct,s=Yo.transition;Yo.transition=null;try{ct=4,Y0(t,e,n,i)}finally{ct=r,Yo.transition=s}}function Y0(t,e,n,i){if(Sh){var r=Zm(t,e,n,i);if(r===null)jd(t,e,i,Mh,n),vx(t,i);else if(tO(r,t,e,n,i))i.stopPropagation();else if(vx(t,i),e&4&&-1<eO.indexOf(t)){for(;r!==null;){var s=Sc(r);if(s!==null&&GM(s),s=Zm(t,e,n,i),s===null&&jd(t,e,i,Mh,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else jd(t,e,i,null,n)}}var Mh=null;function Zm(t,e,n,i){if(Mh=null,t=W0(i),t=Ns(t),t!==null)if(e=no(t),e===null)t=null;else if(n=e.tag,n===13){if(t=UM(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Mh=t,null}function YM(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(XU()){case X0:return 1;case BM:return 4;case xh:case jU:return 16;case zM:return 536870912;default:return 16}default:return 16}}var Kr=null,K0=null,$u=null;function KM(){if($u)return $u;var t,e=K0,n=e.length,i,r="value"in Kr?Kr.value:Kr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return $u=r.slice(t,1<i?1-i:void 0)}function Yu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function pu(){return!0}function yx(){return!1}function qn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pu:yx,this.isPropagationStopped=yx,this}return At(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pu)},persist:function(){},isPersistent:pu}),e}var Fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},q0=qn(Fa),wc=At({},Fa,{view:0,detail:0}),sO=qn(wc),kd,Fd,Qa,gf=At({},wc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Z0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qa&&(Qa&&t.type==="mousemove"?(kd=t.screenX-Qa.screenX,Fd=t.screenY-Qa.screenY):Fd=kd=0,Qa=t),kd)},movementY:function(t){return"movementY"in t?t.movementY:Fd}}),xx=qn(gf),oO=At({},gf,{dataTransfer:0}),aO=qn(oO),lO=At({},wc,{relatedTarget:0}),Bd=qn(lO),cO=At({},Fa,{animationName:0,elapsedTime:0,pseudoElement:0}),uO=qn(cO),hO=At({},Fa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fO=qn(hO),dO=At({},Fa,{data:0}),wx=qn(dO),pO={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mO={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gO={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vO(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gO[t])?!!e[t]:!1}function Z0(){return vO}var _O=At({},wc,{key:function(t){if(t.key){var e=pO[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mO[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Z0,charCode:function(t){return t.type==="keypress"?Yu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yO=qn(_O),xO=At({},gf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sx=qn(xO),wO=At({},wc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Z0}),SO=qn(wO),MO=At({},Fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),EO=qn(MO),TO=At({},gf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),CO=qn(TO),AO=[9,13,27,32],J0=yr&&"CompositionEvent"in window,Cl=null;yr&&"documentMode"in document&&(Cl=document.documentMode);var bO=yr&&"TextEvent"in window&&!Cl,qM=yr&&(!J0||Cl&&8<Cl&&11>=Cl),Mx=" ",Ex=!1;function ZM(t,e){switch(t){case"keyup":return AO.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function JM(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Po=!1;function RO(t,e){switch(t){case"compositionend":return JM(e);case"keypress":return e.which!==32?null:(Ex=!0,Mx);case"textInput":return t=e.data,t===Mx&&Ex?null:t;default:return null}}function PO(t,e){if(Po)return t==="compositionend"||!J0&&ZM(t,e)?(t=KM(),$u=K0=Kr=null,Po=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qM&&e.locale!=="ko"?null:e.data;default:return null}}var LO={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tx(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!LO[t.type]:e==="textarea"}function QM(t,e,n,i){PM(i),e=Eh(e,"onChange"),0<e.length&&(n=new q0("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Al=null,Zl=null;function IO(t){uE(t,0)}function vf(t){var e=No(t);if(MM(e))return t}function NO(t,e){if(t==="change")return e}var eE=!1;if(yr){var zd;if(yr){var Hd="oninput"in document;if(!Hd){var Cx=document.createElement("div");Cx.setAttribute("oninput","return;"),Hd=typeof Cx.oninput=="function"}zd=Hd}else zd=!1;eE=zd&&(!document.documentMode||9<document.documentMode)}function Ax(){Al&&(Al.detachEvent("onpropertychange",tE),Zl=Al=null)}function tE(t){if(t.propertyName==="value"&&vf(Zl)){var e=[];QM(e,Zl,t,W0(t)),DM(IO,e)}}function DO(t,e,n){t==="focusin"?(Ax(),Al=e,Zl=n,Al.attachEvent("onpropertychange",tE)):t==="focusout"&&Ax()}function UO(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vf(Zl)}function OO(t,e){if(t==="click")return vf(e)}function kO(t,e){if(t==="input"||t==="change")return vf(e)}function FO(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ai=typeof Object.is=="function"?Object.is:FO;function Jl(t,e){if(Ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Nm.call(e,r)||!Ai(t[r],e[r]))return!1}return!0}function bx(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rx(t,e){var n=bx(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bx(n)}}function nE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?nE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function iE(){for(var t=window,e=vh();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vh(t.document)}return e}function Q0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function BO(t){var e=iE(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&nE(n.ownerDocument.documentElement,n)){if(i!==null&&Q0(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Rx(n,s);var o=Rx(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zO=yr&&"documentMode"in document&&11>=document.documentMode,Lo=null,Jm=null,bl=null,Qm=!1;function Px(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qm||Lo==null||Lo!==vh(i)||(i=Lo,"selectionStart"in i&&Q0(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),bl&&Jl(bl,i)||(bl=i,i=Eh(Jm,"onSelect"),0<i.length&&(e=new q0("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Lo)))}function mu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Io={animationend:mu("Animation","AnimationEnd"),animationiteration:mu("Animation","AnimationIteration"),animationstart:mu("Animation","AnimationStart"),transitionend:mu("Transition","TransitionEnd")},Vd={},rE={};yr&&(rE=document.createElement("div").style,"AnimationEvent"in window||(delete Io.animationend.animation,delete Io.animationiteration.animation,delete Io.animationstart.animation),"TransitionEvent"in window||delete Io.transitionend.transition);function _f(t){if(Vd[t])return Vd[t];if(!Io[t])return t;var e=Io[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in rE)return Vd[t]=e[n];return t}var sE=_f("animationend"),oE=_f("animationiteration"),aE=_f("animationstart"),lE=_f("transitionend"),cE=new Map,Lx="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ds(t,e){cE.set(t,e),to(e,[t])}for(var Gd=0;Gd<Lx.length;Gd++){var Wd=Lx[Gd],HO=Wd.toLowerCase(),VO=Wd[0].toUpperCase()+Wd.slice(1);ds(HO,"on"+VO)}ds(sE,"onAnimationEnd");ds(oE,"onAnimationIteration");ds(aE,"onAnimationStart");ds("dblclick","onDoubleClick");ds("focusin","onFocus");ds("focusout","onBlur");ds(lE,"onTransitionEnd");xa("onMouseEnter",["mouseout","mouseover"]);xa("onMouseLeave",["mouseout","mouseover"]);xa("onPointerEnter",["pointerout","pointerover"]);xa("onPointerLeave",["pointerout","pointerover"]);to("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));to("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));to("onBeforeInput",["compositionend","keypress","textInput","paste"]);to("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));to("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));to("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),GO=new Set("cancel close invalid load scroll toggle".split(" ").concat(dl));function Ix(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,HU(i,e,void 0,t),t.currentTarget=null}function uE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Ix(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Ix(r,a,c),s=l}}}if(yh)throw t=Ym,yh=!1,Ym=null,t}function vt(t,e){var n=e[rg];n===void 0&&(n=e[rg]=new Set);var i=t+"__bubble";n.has(i)||(hE(e,t,2,!1),n.add(i))}function Xd(t,e,n){var i=0;e&&(i|=4),hE(n,t,i,e)}var gu="_reactListening"+Math.random().toString(36).slice(2);function Ql(t){if(!t[gu]){t[gu]=!0,_M.forEach(function(n){n!=="selectionchange"&&(GO.has(n)||Xd(n,!1,t),Xd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[gu]||(e[gu]=!0,Xd("selectionchange",!1,e))}}function hE(t,e,n,i){switch(YM(e)){case 1:var r=iO;break;case 4:r=rO;break;default:r=Y0}n=r.bind(null,e,n,t),r=void 0,!$m||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function jd(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ns(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}DM(function(){var c=s,u=W0(n),f=[];e:{var h=cE.get(t);if(h!==void 0){var d=q0,g=t;switch(t){case"keypress":if(Yu(n)===0)break e;case"keydown":case"keyup":d=yO;break;case"focusin":g="focus",d=Bd;break;case"focusout":g="blur",d=Bd;break;case"beforeblur":case"afterblur":d=Bd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=xx;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=aO;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=SO;break;case sE:case oE:case aE:d=uO;break;case lE:d=EO;break;case"scroll":d=sO;break;case"wheel":d=CO;break;case"copy":case"cut":case"paste":d=fO;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=Sx}var _=(e&4)!==0,m=!_&&t==="scroll",p=_?h!==null?h+"Capture":null:h;_=[];for(var y=c,v;y!==null;){v=y;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,p!==null&&(x=$l(y,p),x!=null&&_.push(ec(y,x,v)))),m)break;y=y.return}0<_.length&&(h=new d(h,g,null,n,u),f.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",d=t==="mouseout"||t==="pointerout",h&&n!==Xm&&(g=n.relatedTarget||n.fromElement)&&(Ns(g)||g[xr]))break e;if((d||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,d?(g=n.relatedTarget||n.toElement,d=c,g=g?Ns(g):null,g!==null&&(m=no(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(d=null,g=c),d!==g)){if(_=xx,x="onMouseLeave",p="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(_=Sx,x="onPointerLeave",p="onPointerEnter",y="pointer"),m=d==null?h:No(d),v=g==null?h:No(g),h=new _(x,y+"leave",d,n,u),h.target=m,h.relatedTarget=v,x=null,Ns(u)===c&&(_=new _(p,y+"enter",g,n,u),_.target=v,_.relatedTarget=m,x=_),m=x,d&&g)t:{for(_=d,p=g,y=0,v=_;v;v=wo(v))y++;for(v=0,x=p;x;x=wo(x))v++;for(;0<y-v;)_=wo(_),y--;for(;0<v-y;)p=wo(p),v--;for(;y--;){if(_===p||p!==null&&_===p.alternate)break t;_=wo(_),p=wo(p)}_=null}else _=null;d!==null&&Nx(f,h,d,_,!1),g!==null&&m!==null&&Nx(f,m,g,_,!0)}}e:{if(h=c?No(c):window,d=h.nodeName&&h.nodeName.toLowerCase(),d==="select"||d==="input"&&h.type==="file")var A=NO;else if(Tx(h))if(eE)A=kO;else{A=UO;var C=DO}else(d=h.nodeName)&&d.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=OO);if(A&&(A=A(t,c))){QM(f,A,n,u);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&zm(h,"number",h.value)}switch(C=c?No(c):window,t){case"focusin":(Tx(C)||C.contentEditable==="true")&&(Lo=C,Jm=c,bl=null);break;case"focusout":bl=Jm=Lo=null;break;case"mousedown":Qm=!0;break;case"contextmenu":case"mouseup":case"dragend":Qm=!1,Px(f,n,u);break;case"selectionchange":if(zO)break;case"keydown":case"keyup":Px(f,n,u)}var M;if(J0)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Po?ZM(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(qM&&n.locale!=="ko"&&(Po||R!=="onCompositionStart"?R==="onCompositionEnd"&&Po&&(M=KM()):(Kr=u,K0="value"in Kr?Kr.value:Kr.textContent,Po=!0)),C=Eh(c,R),0<C.length&&(R=new wx(R,t,null,n,u),f.push({event:R,listeners:C}),M?R.data=M:(M=JM(n),M!==null&&(R.data=M)))),(M=bO?RO(t,n):PO(t,n))&&(c=Eh(c,"onBeforeInput"),0<c.length&&(u=new wx("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=M))}uE(f,e)})}function ec(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Eh(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=$l(t,n),s!=null&&i.unshift(ec(t,s,r)),s=$l(t,e),s!=null&&i.push(ec(t,s,r))),t=t.return}return i}function wo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nx(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=$l(n,s),l!=null&&o.unshift(ec(n,l,a))):r||(l=$l(n,s),l!=null&&o.push(ec(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var WO=/\r\n?/g,XO=/\u0000|\uFFFD/g;function Dx(t){return(typeof t=="string"?t:""+t).replace(WO,`
`).replace(XO,"")}function vu(t,e,n){if(e=Dx(e),Dx(t)!==e&&n)throw Error(ee(425))}function Th(){}var eg=null,tg=null;function ng(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ig=typeof setTimeout=="function"?setTimeout:void 0,jO=typeof clearTimeout=="function"?clearTimeout:void 0,Ux=typeof Promise=="function"?Promise:void 0,$O=typeof queueMicrotask=="function"?queueMicrotask:typeof Ux<"u"?function(t){return Ux.resolve(null).then(t).catch(YO)}:ig;function YO(t){setTimeout(function(){throw t})}function $d(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ql(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ql(e)}function ns(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ox(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ba=Math.random().toString(36).slice(2),Di="__reactFiber$"+Ba,tc="__reactProps$"+Ba,xr="__reactContainer$"+Ba,rg="__reactEvents$"+Ba,KO="__reactListeners$"+Ba,qO="__reactHandles$"+Ba;function Ns(t){var e=t[Di];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xr]||n[Di]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ox(t);t!==null;){if(n=t[Di])return n;t=Ox(t)}return e}t=n,n=t.parentNode}return null}function Sc(t){return t=t[Di]||t[xr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function No(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function yf(t){return t[tc]||null}var sg=[],Do=-1;function ps(t){return{current:t}}function wt(t){0>Do||(t.current=sg[Do],sg[Do]=null,Do--)}function dt(t,e){Do++,sg[Do]=t.current,t.current=e}var hs={},pn=ps(hs),Pn=ps(!1),Ks=hs;function wa(t,e){var n=t.type.contextTypes;if(!n)return hs;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Ln(t){return t=t.childContextTypes,t!=null}function Ch(){wt(Pn),wt(pn)}function kx(t,e,n){if(pn.current!==hs)throw Error(ee(168));dt(pn,e),dt(Pn,n)}function fE(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,DU(t)||"Unknown",r));return At({},n,i)}function Ah(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hs,Ks=pn.current,dt(pn,t),dt(Pn,Pn.current),!0}function Fx(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=fE(t,e,Ks),i.__reactInternalMemoizedMergedChildContext=t,wt(Pn),wt(pn),dt(pn,t)):wt(Pn),dt(Pn,n)}var or=null,xf=!1,Yd=!1;function dE(t){or===null?or=[t]:or.push(t)}function ZO(t){xf=!0,dE(t)}function ms(){if(!Yd&&or!==null){Yd=!0;var t=0,e=ct;try{var n=or;for(ct=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}or=null,xf=!1}catch(r){throw or!==null&&(or=or.slice(t+1)),FM(X0,ms),r}finally{ct=e,Yd=!1}}return null}var Uo=[],Oo=0,bh=null,Rh=0,ei=[],ti=0,qs=null,hr=1,fr="";function As(t,e){Uo[Oo++]=Rh,Uo[Oo++]=bh,bh=t,Rh=e}function pE(t,e,n){ei[ti++]=hr,ei[ti++]=fr,ei[ti++]=qs,qs=t;var i=hr;t=fr;var r=32-Ei(i)-1;i&=~(1<<r),n+=1;var s=32-Ei(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,hr=1<<32-Ei(e)+r|n<<r|i,fr=s+t}else hr=1<<s|n<<r|i,fr=t}function ev(t){t.return!==null&&(As(t,1),pE(t,1,0))}function tv(t){for(;t===bh;)bh=Uo[--Oo],Uo[Oo]=null,Rh=Uo[--Oo],Uo[Oo]=null;for(;t===qs;)qs=ei[--ti],ei[ti]=null,fr=ei[--ti],ei[ti]=null,hr=ei[--ti],ei[ti]=null}var Xn=null,Vn=null,St=!1,yi=null;function mE(t,e){var n=ii(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Bx(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Xn=t,Vn=ns(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Xn=t,Vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qs!==null?{id:hr,overflow:fr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ii(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Xn=t,Vn=null,!0):!1;default:return!1}}function og(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ag(t){if(St){var e=Vn;if(e){var n=e;if(!Bx(t,e)){if(og(t))throw Error(ee(418));e=ns(n.nextSibling);var i=Xn;e&&Bx(t,e)?mE(i,n):(t.flags=t.flags&-4097|2,St=!1,Xn=t)}}else{if(og(t))throw Error(ee(418));t.flags=t.flags&-4097|2,St=!1,Xn=t}}}function zx(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Xn=t}function _u(t){if(t!==Xn)return!1;if(!St)return zx(t),St=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ng(t.type,t.memoizedProps)),e&&(e=Vn)){if(og(t))throw gE(),Error(ee(418));for(;e;)mE(t,e),e=ns(e.nextSibling)}if(zx(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Vn=ns(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Vn=null}}else Vn=Xn?ns(t.stateNode.nextSibling):null;return!0}function gE(){for(var t=Vn;t;)t=ns(t.nextSibling)}function Sa(){Vn=Xn=null,St=!1}function nv(t){yi===null?yi=[t]:yi.push(t)}var JO=Tr.ReactCurrentBatchConfig;function el(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function yu(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hx(t){var e=t._init;return e(t._payload)}function vE(t){function e(p,y){if(t){var v=p.deletions;v===null?(p.deletions=[y],p.flags|=16):v.push(y)}}function n(p,y){if(!t)return null;for(;y!==null;)e(p,y),y=y.sibling;return null}function i(p,y){for(p=new Map;y!==null;)y.key!==null?p.set(y.key,y):p.set(y.index,y),y=y.sibling;return p}function r(p,y){return p=os(p,y),p.index=0,p.sibling=null,p}function s(p,y,v){return p.index=v,t?(v=p.alternate,v!==null?(v=v.index,v<y?(p.flags|=2,y):v):(p.flags|=2,y)):(p.flags|=1048576,y)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,y,v,x){return y===null||y.tag!==6?(y=tp(v,p.mode,x),y.return=p,y):(y=r(y,v),y.return=p,y)}function l(p,y,v,x){var A=v.type;return A===Ro?u(p,y,v.props.children,x,v.key):y!==null&&(y.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===zr&&Hx(A)===y.type)?(x=r(y,v.props),x.ref=el(p,y,v),x.return=p,x):(x=th(v.type,v.key,v.props,null,p.mode,x),x.ref=el(p,y,v),x.return=p,x)}function c(p,y,v,x){return y===null||y.tag!==4||y.stateNode.containerInfo!==v.containerInfo||y.stateNode.implementation!==v.implementation?(y=np(v,p.mode,x),y.return=p,y):(y=r(y,v.children||[]),y.return=p,y)}function u(p,y,v,x,A){return y===null||y.tag!==7?(y=Vs(v,p.mode,x,A),y.return=p,y):(y=r(y,v),y.return=p,y)}function f(p,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return y=tp(""+y,p.mode,v),y.return=p,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case lu:return v=th(y.type,y.key,y.props,null,p.mode,v),v.ref=el(p,null,y),v.return=p,v;case bo:return y=np(y,p.mode,v),y.return=p,y;case zr:var x=y._init;return f(p,x(y._payload),v)}if(hl(y)||Ka(y))return y=Vs(y,p.mode,v,null),y.return=p,y;yu(p,y)}return null}function h(p,y,v,x){var A=y!==null?y.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return A!==null?null:a(p,y,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case lu:return v.key===A?l(p,y,v,x):null;case bo:return v.key===A?c(p,y,v,x):null;case zr:return A=v._init,h(p,y,A(v._payload),x)}if(hl(v)||Ka(v))return A!==null?null:u(p,y,v,x,null);yu(p,v)}return null}function d(p,y,v,x,A){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(v)||null,a(y,p,""+x,A);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case lu:return p=p.get(x.key===null?v:x.key)||null,l(y,p,x,A);case bo:return p=p.get(x.key===null?v:x.key)||null,c(y,p,x,A);case zr:var C=x._init;return d(p,y,v,C(x._payload),A)}if(hl(x)||Ka(x))return p=p.get(v)||null,u(y,p,x,A,null);yu(y,x)}return null}function g(p,y,v,x){for(var A=null,C=null,M=y,R=y=0,H=null;M!==null&&R<v.length;R++){M.index>R?(H=M,M=null):H=M.sibling;var w=h(p,M,v[R],x);if(w===null){M===null&&(M=H);break}t&&M&&w.alternate===null&&e(p,M),y=s(w,y,R),C===null?A=w:C.sibling=w,C=w,M=H}if(R===v.length)return n(p,M),St&&As(p,R),A;if(M===null){for(;R<v.length;R++)M=f(p,v[R],x),M!==null&&(y=s(M,y,R),C===null?A=M:C.sibling=M,C=M);return St&&As(p,R),A}for(M=i(p,M);R<v.length;R++)H=d(M,p,R,v[R],x),H!==null&&(t&&H.alternate!==null&&M.delete(H.key===null?R:H.key),y=s(H,y,R),C===null?A=H:C.sibling=H,C=H);return t&&M.forEach(function(T){return e(p,T)}),St&&As(p,R),A}function _(p,y,v,x){var A=Ka(v);if(typeof A!="function")throw Error(ee(150));if(v=A.call(v),v==null)throw Error(ee(151));for(var C=A=null,M=y,R=y=0,H=null,w=v.next();M!==null&&!w.done;R++,w=v.next()){M.index>R?(H=M,M=null):H=M.sibling;var T=h(p,M,w.value,x);if(T===null){M===null&&(M=H);break}t&&M&&T.alternate===null&&e(p,M),y=s(T,y,R),C===null?A=T:C.sibling=T,C=T,M=H}if(w.done)return n(p,M),St&&As(p,R),A;if(M===null){for(;!w.done;R++,w=v.next())w=f(p,w.value,x),w!==null&&(y=s(w,y,R),C===null?A=w:C.sibling=w,C=w);return St&&As(p,R),A}for(M=i(p,M);!w.done;R++,w=v.next())w=d(M,p,R,w.value,x),w!==null&&(t&&w.alternate!==null&&M.delete(w.key===null?R:w.key),y=s(w,y,R),C===null?A=w:C.sibling=w,C=w);return t&&M.forEach(function(V){return e(p,V)}),St&&As(p,R),A}function m(p,y,v,x){if(typeof v=="object"&&v!==null&&v.type===Ro&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case lu:e:{for(var A=v.key,C=y;C!==null;){if(C.key===A){if(A=v.type,A===Ro){if(C.tag===7){n(p,C.sibling),y=r(C,v.props.children),y.return=p,p=y;break e}}else if(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===zr&&Hx(A)===C.type){n(p,C.sibling),y=r(C,v.props),y.ref=el(p,C,v),y.return=p,p=y;break e}n(p,C);break}else e(p,C);C=C.sibling}v.type===Ro?(y=Vs(v.props.children,p.mode,x,v.key),y.return=p,p=y):(x=th(v.type,v.key,v.props,null,p.mode,x),x.ref=el(p,y,v),x.return=p,p=x)}return o(p);case bo:e:{for(C=v.key;y!==null;){if(y.key===C)if(y.tag===4&&y.stateNode.containerInfo===v.containerInfo&&y.stateNode.implementation===v.implementation){n(p,y.sibling),y=r(y,v.children||[]),y.return=p,p=y;break e}else{n(p,y);break}else e(p,y);y=y.sibling}y=np(v,p.mode,x),y.return=p,p=y}return o(p);case zr:return C=v._init,m(p,y,C(v._payload),x)}if(hl(v))return g(p,y,v,x);if(Ka(v))return _(p,y,v,x);yu(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,y!==null&&y.tag===6?(n(p,y.sibling),y=r(y,v),y.return=p,p=y):(n(p,y),y=tp(v,p.mode,x),y.return=p,p=y),o(p)):n(p,y)}return m}var Ma=vE(!0),_E=vE(!1),Ph=ps(null),Lh=null,ko=null,iv=null;function rv(){iv=ko=Lh=null}function sv(t){var e=Ph.current;wt(Ph),t._currentValue=e}function lg(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ko(t,e){Lh=t,iv=ko=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(bn=!0),t.firstContext=null)}function li(t){var e=t._currentValue;if(iv!==t)if(t={context:t,memoizedValue:e,next:null},ko===null){if(Lh===null)throw Error(ee(308));ko=t,Lh.dependencies={lanes:0,firstContext:t}}else ko=ko.next=t;return e}var Ds=null;function ov(t){Ds===null?Ds=[t]:Ds.push(t)}function yE(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ov(e)):(n.next=r.next,r.next=n),e.interleaved=n,wr(t,i)}function wr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hr=!1;function av(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function is(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,wr(t,n)}return r=i.interleaved,r===null?(e.next=e,ov(i)):(e.next=r.next,r.next=e),i.interleaved=e,wr(t,n)}function Ku(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,j0(t,n)}}function Vx(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ih(t,e,n,i){var r=t.updateQueue;Hr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,d=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:d,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,_=a;switch(h=e,d=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){f=g.call(d,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,h=typeof g=="function"?g.call(d,f,h):g,h==null)break e;f=At({},f,h);break e;case 2:Hr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else d={eventTime:d,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=d,l=f):u=u.next=d,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Js|=o,t.lanes=o,t.memoizedState=f}}function Gx(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var Mc={},Bi=ps(Mc),nc=ps(Mc),ic=ps(Mc);function Us(t){if(t===Mc)throw Error(ee(174));return t}function lv(t,e){switch(dt(ic,e),dt(nc,t),dt(Bi,Mc),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vm(e,t)}wt(Bi),dt(Bi,e)}function Ea(){wt(Bi),wt(nc),wt(ic)}function wE(t){Us(ic.current);var e=Us(Bi.current),n=Vm(e,t.type);e!==n&&(dt(nc,t),dt(Bi,n))}function cv(t){nc.current===t&&(wt(Bi),wt(nc))}var Et=ps(0);function Nh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kd=[];function uv(){for(var t=0;t<Kd.length;t++)Kd[t]._workInProgressVersionPrimary=null;Kd.length=0}var qu=Tr.ReactCurrentDispatcher,qd=Tr.ReactCurrentBatchConfig,Zs=0,Ct=null,Bt=null,$t=null,Dh=!1,Rl=!1,rc=0,QO=0;function sn(){throw Error(ee(321))}function hv(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ai(t[n],e[n]))return!1;return!0}function fv(t,e,n,i,r,s){if(Zs=s,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,qu.current=t===null||t.memoizedState===null?ik:rk,t=n(i,r),Rl){s=0;do{if(Rl=!1,rc=0,25<=s)throw Error(ee(301));s+=1,$t=Bt=null,e.updateQueue=null,qu.current=sk,t=n(i,r)}while(Rl)}if(qu.current=Uh,e=Bt!==null&&Bt.next!==null,Zs=0,$t=Bt=Ct=null,Dh=!1,e)throw Error(ee(300));return t}function dv(){var t=rc!==0;return rc=0,t}function Ri(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?Ct.memoizedState=$t=t:$t=$t.next=t,$t}function ci(){if(Bt===null){var t=Ct.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var e=$t===null?Ct.memoizedState:$t.next;if(e!==null)$t=e,Bt=t;else{if(t===null)throw Error(ee(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},$t===null?Ct.memoizedState=$t=t:$t=$t.next=t}return $t}function sc(t,e){return typeof e=="function"?e(t):e}function Zd(t){var e=ci(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=Bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Zs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Ct.lanes|=u,Js|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Ai(i,e.memoizedState)||(bn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ct.lanes|=s,Js|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jd(t){var e=ci(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Ai(s,e.memoizedState)||(bn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function SE(){}function ME(t,e){var n=Ct,i=ci(),r=e(),s=!Ai(i.memoizedState,r);if(s&&(i.memoizedState=r,bn=!0),i=i.queue,pv(CE.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||$t!==null&&$t.memoizedState.tag&1){if(n.flags|=2048,oc(9,TE.bind(null,n,i,r,e),void 0,null),Yt===null)throw Error(ee(349));Zs&30||EE(n,e,r)}return r}function EE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function TE(t,e,n,i){e.value=n,e.getSnapshot=i,AE(e)&&bE(t)}function CE(t,e,n){return n(function(){AE(e)&&bE(t)})}function AE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ai(t,n)}catch{return!0}}function bE(t){var e=wr(t,1);e!==null&&Ti(e,t,1,-1)}function Wx(t){var e=Ri();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sc,lastRenderedState:t},e.queue=t,t=t.dispatch=nk.bind(null,Ct,t),[e.memoizedState,t]}function oc(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function RE(){return ci().memoizedState}function Zu(t,e,n,i){var r=Ri();Ct.flags|=t,r.memoizedState=oc(1|e,n,void 0,i===void 0?null:i)}function wf(t,e,n,i){var r=ci();i=i===void 0?null:i;var s=void 0;if(Bt!==null){var o=Bt.memoizedState;if(s=o.destroy,i!==null&&hv(i,o.deps)){r.memoizedState=oc(e,n,s,i);return}}Ct.flags|=t,r.memoizedState=oc(1|e,n,s,i)}function Xx(t,e){return Zu(8390656,8,t,e)}function pv(t,e){return wf(2048,8,t,e)}function PE(t,e){return wf(4,2,t,e)}function LE(t,e){return wf(4,4,t,e)}function IE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function NE(t,e,n){return n=n!=null?n.concat([t]):null,wf(4,4,IE.bind(null,e,t),n)}function mv(){}function DE(t,e){var n=ci();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&hv(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function UE(t,e){var n=ci();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&hv(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function OE(t,e,n){return Zs&21?(Ai(n,e)||(n=HM(),Ct.lanes|=n,Js|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,bn=!0),t.memoizedState=n)}function ek(t,e){var n=ct;ct=n!==0&&4>n?n:4,t(!0);var i=qd.transition;qd.transition={};try{t(!1),e()}finally{ct=n,qd.transition=i}}function kE(){return ci().memoizedState}function tk(t,e,n){var i=ss(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},FE(t))BE(e,n);else if(n=yE(t,e,n,i),n!==null){var r=xn();Ti(n,t,i,r),zE(n,e,i)}}function nk(t,e,n){var i=ss(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(FE(t))BE(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Ai(a,o)){var l=e.interleaved;l===null?(r.next=r,ov(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=yE(t,e,r,i),n!==null&&(r=xn(),Ti(n,t,i,r),zE(n,e,i))}}function FE(t){var e=t.alternate;return t===Ct||e!==null&&e===Ct}function BE(t,e){Rl=Dh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function zE(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,j0(t,n)}}var Uh={readContext:li,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useInsertionEffect:sn,useLayoutEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useMutableSource:sn,useSyncExternalStore:sn,useId:sn,unstable_isNewReconciler:!1},ik={readContext:li,useCallback:function(t,e){return Ri().memoizedState=[t,e===void 0?null:e],t},useContext:li,useEffect:Xx,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Zu(4194308,4,IE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Zu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Zu(4,2,t,e)},useMemo:function(t,e){var n=Ri();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ri();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=tk.bind(null,Ct,t),[i.memoizedState,t]},useRef:function(t){var e=Ri();return t={current:t},e.memoizedState=t},useState:Wx,useDebugValue:mv,useDeferredValue:function(t){return Ri().memoizedState=t},useTransition:function(){var t=Wx(!1),e=t[0];return t=ek.bind(null,t[1]),Ri().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ct,r=Ri();if(St){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Yt===null)throw Error(ee(349));Zs&30||EE(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Xx(CE.bind(null,i,s,t),[t]),i.flags|=2048,oc(9,TE.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ri(),e=Yt.identifierPrefix;if(St){var n=fr,i=hr;n=(i&~(1<<32-Ei(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=rc++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=QO++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},rk={readContext:li,useCallback:DE,useContext:li,useEffect:pv,useImperativeHandle:NE,useInsertionEffect:PE,useLayoutEffect:LE,useMemo:UE,useReducer:Zd,useRef:RE,useState:function(){return Zd(sc)},useDebugValue:mv,useDeferredValue:function(t){var e=ci();return OE(e,Bt.memoizedState,t)},useTransition:function(){var t=Zd(sc)[0],e=ci().memoizedState;return[t,e]},useMutableSource:SE,useSyncExternalStore:ME,useId:kE,unstable_isNewReconciler:!1},sk={readContext:li,useCallback:DE,useContext:li,useEffect:pv,useImperativeHandle:NE,useInsertionEffect:PE,useLayoutEffect:LE,useMemo:UE,useReducer:Jd,useRef:RE,useState:function(){return Jd(sc)},useDebugValue:mv,useDeferredValue:function(t){var e=ci();return Bt===null?e.memoizedState=t:OE(e,Bt.memoizedState,t)},useTransition:function(){var t=Jd(sc)[0],e=ci().memoizedState;return[t,e]},useMutableSource:SE,useSyncExternalStore:ME,useId:kE,unstable_isNewReconciler:!1};function vi(t,e){if(t&&t.defaultProps){e=At({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function cg(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:At({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Sf={isMounted:function(t){return(t=t._reactInternals)?no(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=xn(),r=ss(t),s=dr(i,r);s.payload=e,n!=null&&(s.callback=n),e=is(t,s,r),e!==null&&(Ti(e,t,r,i),Ku(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=xn(),r=ss(t),s=dr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=is(t,s,r),e!==null&&(Ti(e,t,r,i),Ku(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xn(),i=ss(t),r=dr(n,i);r.tag=2,e!=null&&(r.callback=e),e=is(t,r,i),e!==null&&(Ti(e,t,i,n),Ku(e,t,i))}};function jx(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Jl(n,i)||!Jl(r,s):!0}function HE(t,e,n){var i=!1,r=hs,s=e.contextType;return typeof s=="object"&&s!==null?s=li(s):(r=Ln(e)?Ks:pn.current,i=e.contextTypes,s=(i=i!=null)?wa(t,r):hs),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sf,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function $x(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Sf.enqueueReplaceState(e,e.state,null)}function ug(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},av(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=li(s):(s=Ln(e)?Ks:pn.current,r.context=wa(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cg(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Sf.enqueueReplaceState(r,r.state,null),Ih(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ta(t,e){try{var n="",i=e;do n+=NU(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Qd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hg(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ok=typeof WeakMap=="function"?WeakMap:Map;function VE(t,e,n){n=dr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){kh||(kh=!0,wg=i),hg(t,e)},n}function GE(t,e,n){n=dr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){hg(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hg(t,e),typeof i!="function"&&(rs===null?rs=new Set([this]):rs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Yx(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ok;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=xk.bind(null,t,e,n),e.then(t,t))}function Kx(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qx(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=dr(-1,1),e.tag=2,is(n,e,1))),n.lanes|=1),t)}var ak=Tr.ReactCurrentOwner,bn=!1;function vn(t,e,n,i){e.child=t===null?_E(e,null,n,i):Ma(e,t.child,n,i)}function Zx(t,e,n,i,r){n=n.render;var s=e.ref;return Ko(e,r),i=fv(t,e,n,i,s,r),n=dv(),t!==null&&!bn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Sr(t,e,r)):(St&&n&&ev(e),e.flags|=1,vn(t,e,i,r),e.child)}function Jx(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Mv(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,WE(t,e,s,i,r)):(t=th(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Jl,n(o,i)&&t.ref===e.ref)return Sr(t,e,r)}return e.flags|=1,t=os(s,i),t.ref=e.ref,t.return=e,e.child=t}function WE(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Jl(s,i)&&t.ref===e.ref)if(bn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(bn=!0);else return e.lanes=t.lanes,Sr(t,e,r)}return fg(t,e,n,i,r)}function XE(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(Bo,Hn),Hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(Bo,Hn),Hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt(Bo,Hn),Hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt(Bo,Hn),Hn|=i;return vn(t,e,r,n),e.child}function jE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function fg(t,e,n,i,r){var s=Ln(n)?Ks:pn.current;return s=wa(e,s),Ko(e,r),n=fv(t,e,n,i,s,r),i=dv(),t!==null&&!bn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Sr(t,e,r)):(St&&i&&ev(e),e.flags|=1,vn(t,e,n,r),e.child)}function Qx(t,e,n,i,r){if(Ln(n)){var s=!0;Ah(e)}else s=!1;if(Ko(e,r),e.stateNode===null)Ju(t,e),HE(e,n,i),ug(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=li(c):(c=Ln(n)?Ks:pn.current,c=wa(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&$x(e,o,i,c),Hr=!1;var h=e.memoizedState;o.state=h,Ih(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Pn.current||Hr?(typeof u=="function"&&(cg(e,n,u,i),l=e.memoizedState),(a=Hr||jx(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,xE(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:vi(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=li(l):(l=Ln(n)?Ks:pn.current,l=wa(e,l));var d=n.getDerivedStateFromProps;(u=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&$x(e,o,i,l),Hr=!1,h=e.memoizedState,o.state=h,Ih(e,i,o,r);var g=e.memoizedState;a!==f||h!==g||Pn.current||Hr?(typeof d=="function"&&(cg(e,n,d,i),g=e.memoizedState),(c=Hr||jx(e,n,c,i,h,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return dg(t,e,n,i,s,r)}function dg(t,e,n,i,r,s){jE(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Fx(e,n,!1),Sr(t,e,s);i=e.stateNode,ak.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ma(e,t.child,null,s),e.child=Ma(e,null,a,s)):vn(t,e,a,s),e.memoizedState=i.state,r&&Fx(e,n,!0),e.child}function $E(t){var e=t.stateNode;e.pendingContext?kx(t,e.pendingContext,e.pendingContext!==e.context):e.context&&kx(t,e.context,!1),lv(t,e.containerInfo)}function e1(t,e,n,i,r){return Sa(),nv(r),e.flags|=256,vn(t,e,n,i),e.child}var pg={dehydrated:null,treeContext:null,retryLane:0};function mg(t){return{baseLanes:t,cachePool:null,transitions:null}}function YE(t,e,n){var i=e.pendingProps,r=Et.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(Et,r&1),t===null)return ag(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Tf(o,i,0,null),t=Vs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=mg(n),e.memoizedState=pg,t):gv(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return lk(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=os(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=os(a,s):(s=Vs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?mg(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=pg,i}return s=t.child,t=s.sibling,i=os(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function gv(t,e){return e=Tf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xu(t,e,n,i){return i!==null&&nv(i),Ma(e,t.child,null,n),t=gv(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function lk(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Qd(Error(ee(422))),xu(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Tf({mode:"visible",children:i.children},r,0,null),s=Vs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ma(e,t.child,null,o),e.child.memoizedState=mg(o),e.memoizedState=pg,s);if(!(e.mode&1))return xu(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=Qd(s,i,void 0),xu(t,e,o,i)}if(a=(o&t.childLanes)!==0,bn||a){if(i=Yt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,wr(t,r),Ti(i,t,r,-1))}return Sv(),i=Qd(Error(ee(421))),xu(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=wk.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Vn=ns(r.nextSibling),Xn=e,St=!0,yi=null,t!==null&&(ei[ti++]=hr,ei[ti++]=fr,ei[ti++]=qs,hr=t.id,fr=t.overflow,qs=e),e=gv(e,i.children),e.flags|=4096,e)}function t1(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),lg(t.return,e,n)}function ep(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function KE(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(vn(t,e,i.children,n),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&t1(t,n,e);else if(t.tag===19)t1(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(Et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Nh(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ep(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Nh(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ep(e,!0,n,null,s);break;case"together":ep(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ju(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Sr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Js|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=os(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=os(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ck(t,e,n){switch(e.tag){case 3:$E(e),Sa();break;case 5:wE(e);break;case 1:Ln(e.type)&&Ah(e);break;case 4:lv(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(Ph,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(Et,Et.current&1),e.flags|=128,null):n&e.child.childLanes?YE(t,e,n):(dt(Et,Et.current&1),t=Sr(t,e,n),t!==null?t.sibling:null);dt(Et,Et.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return KE(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,XE(t,e,n)}return Sr(t,e,n)}var qE,gg,ZE,JE;qE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gg=function(){};ZE=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Us(Bi.current);var s=null;switch(n){case"input":r=Fm(t,r),i=Fm(t,i),s=[];break;case"select":r=At({},r,{value:void 0}),i=At({},i,{value:void 0}),s=[];break;case"textarea":r=Hm(t,r),i=Hm(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Th)}Gm(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&vt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};JE=function(t,e,n,i){n!==i&&(e.flags|=4)};function tl(t,e){if(!St)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function on(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function uk(t,e,n){var i=e.pendingProps;switch(tv(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(e),null;case 1:return Ln(e.type)&&Ch(),on(e),null;case 3:return i=e.stateNode,Ea(),wt(Pn),wt(pn),uv(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(_u(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yi!==null&&(Eg(yi),yi=null))),gg(t,e),on(e),null;case 5:cv(e);var r=Us(ic.current);if(n=e.type,t!==null&&e.stateNode!=null)ZE(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return on(e),null}if(t=Us(Bi.current),_u(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Di]=e,i[tc]=s,t=(e.mode&1)!==0,n){case"dialog":vt("cancel",i),vt("close",i);break;case"iframe":case"object":case"embed":vt("load",i);break;case"video":case"audio":for(r=0;r<dl.length;r++)vt(dl[r],i);break;case"source":vt("error",i);break;case"img":case"image":case"link":vt("error",i),vt("load",i);break;case"details":vt("toggle",i);break;case"input":ux(i,s),vt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},vt("invalid",i);break;case"textarea":fx(i,s),vt("invalid",i)}Gm(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&vu(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&vu(i.textContent,a,t),r=["children",""+a]):Xl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&vt("scroll",i)}switch(n){case"input":cu(i),hx(i,s,!0);break;case"textarea":cu(i),dx(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Th)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=CM(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Di]=e,t[tc]=i,qE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Wm(n,i),n){case"dialog":vt("cancel",t),vt("close",t),r=i;break;case"iframe":case"object":case"embed":vt("load",t),r=i;break;case"video":case"audio":for(r=0;r<dl.length;r++)vt(dl[r],t);r=i;break;case"source":vt("error",t),r=i;break;case"img":case"image":case"link":vt("error",t),vt("load",t),r=i;break;case"details":vt("toggle",t),r=i;break;case"input":ux(t,i),r=Fm(t,i),vt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=At({},i,{value:void 0}),vt("invalid",t);break;case"textarea":fx(t,i),r=Hm(t,i),vt("invalid",t);break;default:r=i}Gm(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?RM(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&AM(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&jl(t,l):typeof l=="number"&&jl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&vt("scroll",t):l!=null&&z0(t,s,l,o))}switch(n){case"input":cu(t),hx(t,i,!1);break;case"textarea":cu(t),dx(t);break;case"option":i.value!=null&&t.setAttribute("value",""+us(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Xo(t,!!i.multiple,s,!1):i.defaultValue!=null&&Xo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Th)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return on(e),null;case 6:if(t&&e.stateNode!=null)JE(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=Us(ic.current),Us(Bi.current),_u(e)){if(i=e.stateNode,n=e.memoizedProps,i[Di]=e,(s=i.nodeValue!==n)&&(t=Xn,t!==null))switch(t.tag){case 3:vu(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&vu(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Di]=e,e.stateNode=i}return on(e),null;case 13:if(wt(Et),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(St&&Vn!==null&&e.mode&1&&!(e.flags&128))gE(),Sa(),e.flags|=98560,s=!1;else if(s=_u(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[Di]=e}else Sa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;on(e),s=!1}else yi!==null&&(Eg(yi),yi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Et.current&1?Ht===0&&(Ht=3):Sv())),e.updateQueue!==null&&(e.flags|=4),on(e),null);case 4:return Ea(),gg(t,e),t===null&&Ql(e.stateNode.containerInfo),on(e),null;case 10:return sv(e.type._context),on(e),null;case 17:return Ln(e.type)&&Ch(),on(e),null;case 19:if(wt(Et),s=e.memoizedState,s===null)return on(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)tl(s,!1);else{if(Ht!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Nh(t),o!==null){for(e.flags|=128,tl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(Et,Et.current&1|2),e.child}t=t.sibling}s.tail!==null&&Nt()>Ca&&(e.flags|=128,i=!0,tl(s,!1),e.lanes=4194304)}else{if(!i)if(t=Nh(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),tl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!St)return on(e),null}else 2*Nt()-s.renderingStartTime>Ca&&n!==1073741824&&(e.flags|=128,i=!0,tl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Nt(),e.sibling=null,n=Et.current,dt(Et,i?n&1|2:n&1),e):(on(e),null);case 22:case 23:return wv(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Hn&1073741824&&(on(e),e.subtreeFlags&6&&(e.flags|=8192)):on(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function hk(t,e){switch(tv(e),e.tag){case 1:return Ln(e.type)&&Ch(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ea(),wt(Pn),wt(pn),uv(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return cv(e),null;case 13:if(wt(Et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));Sa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return wt(Et),null;case 4:return Ea(),null;case 10:return sv(e.type._context),null;case 22:case 23:return wv(),null;case 24:return null;default:return null}}var wu=!1,un=!1,fk=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Fo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Pt(t,e,i)}else n.current=null}function vg(t,e,n){try{n()}catch(i){Pt(t,e,i)}}var n1=!1;function dk(t,e){if(eg=Sh,t=iE(),Q0(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,h=null;t:for(;;){for(var d;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(d=f.firstChild)!==null;)h=f,f=d;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(d=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=d}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(tg={focusedElem:t,selectionRange:n},Sh=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,p=e.stateNode,y=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:vi(e.type,_),m);p.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(x){Pt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return g=n1,n1=!1,g}function Pl(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&vg(e,n,s)}r=r.next}while(r!==i)}}function Mf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function _g(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function QE(t){var e=t.alternate;e!==null&&(t.alternate=null,QE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Di],delete e[tc],delete e[rg],delete e[KO],delete e[qO])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function eT(t){return t.tag===5||t.tag===3||t.tag===4}function i1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||eT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yg(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Th));else if(i!==4&&(t=t.child,t!==null))for(yg(t,e,n),t=t.sibling;t!==null;)yg(t,e,n),t=t.sibling}function xg(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(xg(t,e,n),t=t.sibling;t!==null;)xg(t,e,n),t=t.sibling}var Zt=null,_i=!1;function Or(t,e,n){for(n=n.child;n!==null;)tT(t,e,n),n=n.sibling}function tT(t,e,n){if(Fi&&typeof Fi.onCommitFiberUnmount=="function")try{Fi.onCommitFiberUnmount(mf,n)}catch{}switch(n.tag){case 5:un||Fo(n,e);case 6:var i=Zt,r=_i;Zt=null,Or(t,e,n),Zt=i,_i=r,Zt!==null&&(_i?(t=Zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Zt.removeChild(n.stateNode));break;case 18:Zt!==null&&(_i?(t=Zt,n=n.stateNode,t.nodeType===8?$d(t.parentNode,n):t.nodeType===1&&$d(t,n),ql(t)):$d(Zt,n.stateNode));break;case 4:i=Zt,r=_i,Zt=n.stateNode.containerInfo,_i=!0,Or(t,e,n),Zt=i,_i=r;break;case 0:case 11:case 14:case 15:if(!un&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vg(n,e,o),r=r.next}while(r!==i)}Or(t,e,n);break;case 1:if(!un&&(Fo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Pt(n,e,a)}Or(t,e,n);break;case 21:Or(t,e,n);break;case 22:n.mode&1?(un=(i=un)||n.memoizedState!==null,Or(t,e,n),un=i):Or(t,e,n);break;default:Or(t,e,n)}}function r1(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new fk),e.forEach(function(i){var r=Sk.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function gi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Zt=a.stateNode,_i=!1;break e;case 3:Zt=a.stateNode.containerInfo,_i=!0;break e;case 4:Zt=a.stateNode.containerInfo,_i=!0;break e}a=a.return}if(Zt===null)throw Error(ee(160));tT(s,o,r),Zt=null,_i=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)nT(e,t),e=e.sibling}function nT(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gi(e,t),bi(t),i&4){try{Pl(3,t,t.return),Mf(3,t)}catch(_){Pt(t,t.return,_)}try{Pl(5,t,t.return)}catch(_){Pt(t,t.return,_)}}break;case 1:gi(e,t),bi(t),i&512&&n!==null&&Fo(n,n.return);break;case 5:if(gi(e,t),bi(t),i&512&&n!==null&&Fo(n,n.return),t.flags&32){var r=t.stateNode;try{jl(r,"")}catch(_){Pt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&EM(r,s),Wm(a,o);var c=Wm(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?RM(r,f):u==="dangerouslySetInnerHTML"?AM(r,f):u==="children"?jl(r,f):z0(r,u,f,c)}switch(a){case"input":Bm(r,s);break;case"textarea":TM(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var d=s.value;d!=null?Xo(r,!!s.multiple,d,!1):h!==!!s.multiple&&(s.defaultValue!=null?Xo(r,!!s.multiple,s.defaultValue,!0):Xo(r,!!s.multiple,s.multiple?[]:"",!1))}r[tc]=s}catch(_){Pt(t,t.return,_)}}break;case 6:if(gi(e,t),bi(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){Pt(t,t.return,_)}}break;case 3:if(gi(e,t),bi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ql(e.containerInfo)}catch(_){Pt(t,t.return,_)}break;case 4:gi(e,t),bi(t);break;case 13:gi(e,t),bi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(yv=Nt())),i&4&&r1(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(un=(c=un)||u,gi(e,t),un=c):gi(e,t),bi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(pe=t,u=t.child;u!==null;){for(f=pe=u;pe!==null;){switch(h=pe,d=h.child,h.tag){case 0:case 11:case 14:case 15:Pl(4,h,h.return);break;case 1:Fo(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Pt(i,n,_)}}break;case 5:Fo(h,h.return);break;case 22:if(h.memoizedState!==null){o1(f);continue}}d!==null?(d.return=h,pe=d):o1(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=bM("display",o))}catch(_){Pt(t,t.return,_)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(_){Pt(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:gi(e,t),bi(t),i&4&&r1(t);break;case 21:break;default:gi(e,t),bi(t)}}function bi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(eT(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(jl(r,""),i.flags&=-33);var s=i1(t);xg(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=i1(t);yg(t,a,o);break;default:throw Error(ee(161))}}catch(l){Pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pk(t,e,n){pe=t,iT(t)}function iT(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||wu;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||un;a=wu;var c=un;if(wu=o,(un=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?a1(r):l!==null?(l.return=o,pe=l):a1(r);for(;s!==null;)pe=s,iT(s),s=s.sibling;pe=r,wu=a,un=c}s1(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):s1(t)}}function s1(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:un||Mf(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!un)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:vi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gx(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gx(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&ql(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}un||e.flags&512&&_g(e)}catch(h){Pt(e,e.return,h)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function o1(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function a1(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Mf(4,e)}catch(l){Pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Pt(e,r,l)}}var s=e.return;try{_g(e)}catch(l){Pt(e,s,l)}break;case 5:var o=e.return;try{_g(e)}catch(l){Pt(e,o,l)}}}catch(l){Pt(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var mk=Math.ceil,Oh=Tr.ReactCurrentDispatcher,vv=Tr.ReactCurrentOwner,oi=Tr.ReactCurrentBatchConfig,Ze=0,Yt=null,kt=null,Qt=0,Hn=0,Bo=ps(0),Ht=0,ac=null,Js=0,Ef=0,_v=0,Ll=null,Cn=null,yv=0,Ca=1/0,ir=null,kh=!1,wg=null,rs=null,Su=!1,qr=null,Fh=0,Il=0,Sg=null,Qu=-1,eh=0;function xn(){return Ze&6?Nt():Qu!==-1?Qu:Qu=Nt()}function ss(t){return t.mode&1?Ze&2&&Qt!==0?Qt&-Qt:JO.transition!==null?(eh===0&&(eh=HM()),eh):(t=ct,t!==0||(t=window.event,t=t===void 0?16:YM(t.type)),t):1}function Ti(t,e,n,i){if(50<Il)throw Il=0,Sg=null,Error(ee(185));xc(t,n,i),(!(Ze&2)||t!==Yt)&&(t===Yt&&(!(Ze&2)&&(Ef|=n),Ht===4&&Wr(t,Qt)),In(t,i),n===1&&Ze===0&&!(e.mode&1)&&(Ca=Nt()+500,xf&&ms()))}function In(t,e){var n=t.callbackNode;JU(t,e);var i=wh(t,t===Yt?Qt:0);if(i===0)n!==null&&gx(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&gx(n),e===1)t.tag===0?ZO(l1.bind(null,t)):dE(l1.bind(null,t)),$O(function(){!(Ze&6)&&ms()}),n=null;else{switch(VM(i)){case 1:n=X0;break;case 4:n=BM;break;case 16:n=xh;break;case 536870912:n=zM;break;default:n=xh}n=hT(n,rT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function rT(t,e){if(Qu=-1,eh=0,Ze&6)throw Error(ee(327));var n=t.callbackNode;if(qo()&&t.callbackNode!==n)return null;var i=wh(t,t===Yt?Qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Bh(t,i);else{e=i;var r=Ze;Ze|=2;var s=oT();(Yt!==t||Qt!==e)&&(ir=null,Ca=Nt()+500,Hs(t,e));do try{_k();break}catch(a){sT(t,a)}while(!0);rv(),Oh.current=s,Ze=r,kt!==null?e=0:(Yt=null,Qt=0,e=Ht)}if(e!==0){if(e===2&&(r=Km(t),r!==0&&(i=r,e=Mg(t,r))),e===1)throw n=ac,Hs(t,0),Wr(t,i),In(t,Nt()),n;if(e===6)Wr(t,i);else{if(r=t.current.alternate,!(i&30)&&!gk(r)&&(e=Bh(t,i),e===2&&(s=Km(t),s!==0&&(i=s,e=Mg(t,s))),e===1))throw n=ac,Hs(t,0),Wr(t,i),In(t,Nt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:bs(t,Cn,ir);break;case 3:if(Wr(t,i),(i&130023424)===i&&(e=yv+500-Nt(),10<e)){if(wh(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){xn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ig(bs.bind(null,t,Cn,ir),e);break}bs(t,Cn,ir);break;case 4:if(Wr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Ei(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*mk(i/1960))-i,10<i){t.timeoutHandle=ig(bs.bind(null,t,Cn,ir),i);break}bs(t,Cn,ir);break;case 5:bs(t,Cn,ir);break;default:throw Error(ee(329))}}}return In(t,Nt()),t.callbackNode===n?rT.bind(null,t):null}function Mg(t,e){var n=Ll;return t.current.memoizedState.isDehydrated&&(Hs(t,e).flags|=256),t=Bh(t,e),t!==2&&(e=Cn,Cn=n,e!==null&&Eg(e)),t}function Eg(t){Cn===null?Cn=t:Cn.push.apply(Cn,t)}function gk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Ai(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wr(t,e){for(e&=~_v,e&=~Ef,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ei(e),i=1<<n;t[n]=-1,e&=~i}}function l1(t){if(Ze&6)throw Error(ee(327));qo();var e=wh(t,0);if(!(e&1))return In(t,Nt()),null;var n=Bh(t,e);if(t.tag!==0&&n===2){var i=Km(t);i!==0&&(e=i,n=Mg(t,i))}if(n===1)throw n=ac,Hs(t,0),Wr(t,e),In(t,Nt()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,bs(t,Cn,ir),In(t,Nt()),null}function xv(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(Ca=Nt()+500,xf&&ms())}}function Qs(t){qr!==null&&qr.tag===0&&!(Ze&6)&&qo();var e=Ze;Ze|=1;var n=oi.transition,i=ct;try{if(oi.transition=null,ct=1,t)return t()}finally{ct=i,oi.transition=n,Ze=e,!(Ze&6)&&ms()}}function wv(){Hn=Bo.current,wt(Bo)}function Hs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jO(n)),kt!==null)for(n=kt.return;n!==null;){var i=n;switch(tv(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ch();break;case 3:Ea(),wt(Pn),wt(pn),uv();break;case 5:cv(i);break;case 4:Ea();break;case 13:wt(Et);break;case 19:wt(Et);break;case 10:sv(i.type._context);break;case 22:case 23:wv()}n=n.return}if(Yt=t,kt=t=os(t.current,null),Qt=Hn=e,Ht=0,ac=null,_v=Ef=Js=0,Cn=Ll=null,Ds!==null){for(e=0;e<Ds.length;e++)if(n=Ds[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ds=null}return t}function sT(t,e){do{var n=kt;try{if(rv(),qu.current=Uh,Dh){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Dh=!1}if(Zs=0,$t=Bt=Ct=null,Rl=!1,rc=0,vv.current=null,n===null||n.return===null){Ht=1,ac=e,kt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Qt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var d=Kx(o);if(d!==null){d.flags&=-257,qx(d,o,a,s,e),d.mode&1&&Yx(s,c,e),e=d,l=c;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){Yx(s,c,e),Sv();break e}l=Error(ee(426))}}else if(St&&a.mode&1){var m=Kx(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),qx(m,o,a,s,e),nv(Ta(l,a));break e}}s=l=Ta(l,a),Ht!==4&&(Ht=2),Ll===null?Ll=[s]:Ll.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=VE(s,l,e);Vx(s,p);break e;case 1:a=l;var y=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(rs===null||!rs.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=GE(s,a,e);Vx(s,x);break e}}s=s.return}while(s!==null)}lT(n)}catch(A){e=A,kt===n&&n!==null&&(kt=n=n.return);continue}break}while(!0)}function oT(){var t=Oh.current;return Oh.current=Uh,t===null?Uh:t}function Sv(){(Ht===0||Ht===3||Ht===2)&&(Ht=4),Yt===null||!(Js&268435455)&&!(Ef&268435455)||Wr(Yt,Qt)}function Bh(t,e){var n=Ze;Ze|=2;var i=oT();(Yt!==t||Qt!==e)&&(ir=null,Hs(t,e));do try{vk();break}catch(r){sT(t,r)}while(!0);if(rv(),Ze=n,Oh.current=i,kt!==null)throw Error(ee(261));return Yt=null,Qt=0,Ht}function vk(){for(;kt!==null;)aT(kt)}function _k(){for(;kt!==null&&!GU();)aT(kt)}function aT(t){var e=uT(t.alternate,t,Hn);t.memoizedProps=t.pendingProps,e===null?lT(t):kt=e,vv.current=null}function lT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=hk(n,e),n!==null){n.flags&=32767,kt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ht=6,kt=null;return}}else if(n=uk(n,e,Hn),n!==null){kt=n;return}if(e=e.sibling,e!==null){kt=e;return}kt=e=t}while(e!==null);Ht===0&&(Ht=5)}function bs(t,e,n){var i=ct,r=oi.transition;try{oi.transition=null,ct=1,yk(t,e,n,i)}finally{oi.transition=r,ct=i}return null}function yk(t,e,n,i){do qo();while(qr!==null);if(Ze&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(QU(t,s),t===Yt&&(kt=Yt=null,Qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Su||(Su=!0,hT(xh,function(){return qo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=oi.transition,oi.transition=null;var o=ct;ct=1;var a=Ze;Ze|=4,vv.current=null,dk(t,n),nT(n,t),BO(tg),Sh=!!eg,tg=eg=null,t.current=n,pk(n),WU(),Ze=a,ct=o,oi.transition=s}else t.current=n;if(Su&&(Su=!1,qr=t,Fh=r),s=t.pendingLanes,s===0&&(rs=null),$U(n.stateNode),In(t,Nt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(kh)throw kh=!1,t=wg,wg=null,t;return Fh&1&&t.tag!==0&&qo(),s=t.pendingLanes,s&1?t===Sg?Il++:(Il=0,Sg=t):Il=0,ms(),null}function qo(){if(qr!==null){var t=VM(Fh),e=oi.transition,n=ct;try{if(oi.transition=null,ct=16>t?16:t,qr===null)var i=!1;else{if(t=qr,qr=null,Fh=0,Ze&6)throw Error(ee(331));var r=Ze;for(Ze|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var u=pe;switch(u.tag){case 0:case 11:case 15:Pl(8,u,s)}var f=u.child;if(f!==null)f.return=u,pe=f;else for(;pe!==null;){u=pe;var h=u.sibling,d=u.return;if(QE(u),u===c){pe=null;break}if(h!==null){h.return=d,pe=h;break}pe=d}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Pl(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,pe=p;break e}pe=s.return}}var y=t.current;for(pe=y;pe!==null;){o=pe;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,pe=v;else e:for(o=y;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Mf(9,a)}}catch(A){Pt(a,a.return,A)}if(a===o){pe=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,pe=x;break e}pe=a.return}}if(Ze=r,ms(),Fi&&typeof Fi.onPostCommitFiberRoot=="function")try{Fi.onPostCommitFiberRoot(mf,t)}catch{}i=!0}return i}finally{ct=n,oi.transition=e}}return!1}function c1(t,e,n){e=Ta(n,e),e=VE(t,e,1),t=is(t,e,1),e=xn(),t!==null&&(xc(t,1,e),In(t,e))}function Pt(t,e,n){if(t.tag===3)c1(t,t,n);else for(;e!==null;){if(e.tag===3){c1(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(rs===null||!rs.has(i))){t=Ta(n,t),t=GE(e,t,1),e=is(e,t,1),t=xn(),e!==null&&(xc(e,1,t),In(e,t));break}}e=e.return}}function xk(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=xn(),t.pingedLanes|=t.suspendedLanes&n,Yt===t&&(Qt&n)===n&&(Ht===4||Ht===3&&(Qt&130023424)===Qt&&500>Nt()-yv?Hs(t,0):_v|=n),In(t,e)}function cT(t,e){e===0&&(t.mode&1?(e=fu,fu<<=1,!(fu&130023424)&&(fu=4194304)):e=1);var n=xn();t=wr(t,e),t!==null&&(xc(t,e,n),In(t,n))}function wk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cT(t,n)}function Sk(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),cT(t,n)}var uT;uT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pn.current)bn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return bn=!1,ck(t,e,n);bn=!!(t.flags&131072)}else bn=!1,St&&e.flags&1048576&&pE(e,Rh,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ju(t,e),t=e.pendingProps;var r=wa(e,pn.current);Ko(e,n),r=fv(null,e,i,t,r,n);var s=dv();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ln(i)?(s=!0,Ah(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,av(e),r.updater=Sf,e.stateNode=r,r._reactInternals=e,ug(e,i,t,n),e=dg(null,e,i,!0,s,n)):(e.tag=0,St&&s&&ev(e),vn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ju(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ek(i),t=vi(i,t),r){case 0:e=fg(null,e,i,t,n);break e;case 1:e=Qx(null,e,i,t,n);break e;case 11:e=Zx(null,e,i,t,n);break e;case 14:e=Jx(null,e,i,vi(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vi(i,r),fg(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vi(i,r),Qx(t,e,i,r,n);case 3:e:{if($E(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,xE(t,e),Ih(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ta(Error(ee(423)),e),e=e1(t,e,i,n,r);break e}else if(i!==r){r=Ta(Error(ee(424)),e),e=e1(t,e,i,n,r);break e}else for(Vn=ns(e.stateNode.containerInfo.firstChild),Xn=e,St=!0,yi=null,n=_E(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sa(),i===r){e=Sr(t,e,n);break e}vn(t,e,i,n)}e=e.child}return e;case 5:return wE(e),t===null&&ag(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,ng(i,r)?o=null:s!==null&&ng(i,s)&&(e.flags|=32),jE(t,e),vn(t,e,o,n),e.child;case 6:return t===null&&ag(e),null;case 13:return YE(t,e,n);case 4:return lv(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ma(e,null,i,n):vn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vi(i,r),Zx(t,e,i,r,n);case 7:return vn(t,e,e.pendingProps,n),e.child;case 8:return vn(t,e,e.pendingProps.children,n),e.child;case 12:return vn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,dt(Ph,i._currentValue),i._currentValue=o,s!==null)if(Ai(s.value,o)){if(s.children===r.children&&!Pn.current){e=Sr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=dr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),lg(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),lg(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ko(e,n),r=li(r),i=i(r),e.flags|=1,vn(t,e,i,n),e.child;case 14:return i=e.type,r=vi(i,e.pendingProps),r=vi(i.type,r),Jx(t,e,i,r,n);case 15:return WE(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vi(i,r),Ju(t,e),e.tag=1,Ln(i)?(t=!0,Ah(e)):t=!1,Ko(e,n),HE(e,i,r),ug(e,i,r,n),dg(null,e,i,!0,t,n);case 19:return KE(t,e,n);case 22:return XE(t,e,n)}throw Error(ee(156,e.tag))};function hT(t,e){return FM(t,e)}function Mk(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(t,e,n,i){return new Mk(t,e,n,i)}function Mv(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ek(t){if(typeof t=="function")return Mv(t)?1:0;if(t!=null){if(t=t.$$typeof,t===V0)return 11;if(t===G0)return 14}return 2}function os(t,e){var n=t.alternate;return n===null?(n=ii(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function th(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Mv(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ro:return Vs(n.children,r,s,e);case H0:o=8,r|=8;break;case Dm:return t=ii(12,n,e,r|2),t.elementType=Dm,t.lanes=s,t;case Um:return t=ii(13,n,e,r),t.elementType=Um,t.lanes=s,t;case Om:return t=ii(19,n,e,r),t.elementType=Om,t.lanes=s,t;case wM:return Tf(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case yM:o=10;break e;case xM:o=9;break e;case V0:o=11;break e;case G0:o=14;break e;case zr:o=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=ii(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Vs(t,e,n,i){return t=ii(7,t,i,e),t.lanes=n,t}function Tf(t,e,n,i){return t=ii(22,t,i,e),t.elementType=wM,t.lanes=n,t.stateNode={isHidden:!1},t}function tp(t,e,n){return t=ii(6,t,null,e),t.lanes=n,t}function np(t,e,n){return e=ii(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Tk(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Od(0),this.expirationTimes=Od(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Od(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ev(t,e,n,i,r,s,o,a,l){return t=new Tk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ii(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},av(s),t}function Ck(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function fT(t){if(!t)return hs;t=t._reactInternals;e:{if(no(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(Ln(n))return fE(t,n,e)}return e}function dT(t,e,n,i,r,s,o,a,l){return t=Ev(n,i,!0,t,r,s,o,a,l),t.context=fT(null),n=t.current,i=xn(),r=ss(n),s=dr(i,r),s.callback=e??null,is(n,s,r),t.current.lanes=r,xc(t,r,i),In(t,i),t}function Cf(t,e,n,i){var r=e.current,s=xn(),o=ss(r);return n=fT(n),e.context===null?e.context=n:e.pendingContext=n,e=dr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=is(r,e,o),t!==null&&(Ti(t,r,o,s),Ku(t,r,o)),o}function zh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function u1(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Tv(t,e){u1(t,e),(t=t.alternate)&&u1(t,e)}function Ak(){return null}var pT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cv(t){this._internalRoot=t}Af.prototype.render=Cv.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));Cf(t,e,null,null)};Af.prototype.unmount=Cv.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qs(function(){Cf(null,t,null,null)}),e[xr]=null}};function Af(t){this._internalRoot=t}Af.prototype.unstable_scheduleHydration=function(t){if(t){var e=XM();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gr.length&&e!==0&&e<Gr[n].priority;n++);Gr.splice(n,0,t),n===0&&$M(t)}};function Av(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function h1(){}function bk(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=zh(o);s.call(c)}}var o=dT(e,i,t,0,null,!1,!1,"",h1);return t._reactRootContainer=o,t[xr]=o.current,Ql(t.nodeType===8?t.parentNode:t),Qs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=zh(l);a.call(c)}}var l=Ev(t,0,!1,null,null,!1,!1,"",h1);return t._reactRootContainer=l,t[xr]=l.current,Ql(t.nodeType===8?t.parentNode:t),Qs(function(){Cf(e,l,n,i)}),l}function Rf(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=zh(o);a.call(l)}}Cf(e,o,t,r)}else o=bk(n,e,t,r,i);return zh(o)}GM=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fl(e.pendingLanes);n!==0&&(j0(e,n|1),In(e,Nt()),!(Ze&6)&&(Ca=Nt()+500,ms()))}break;case 13:Qs(function(){var i=wr(t,1);if(i!==null){var r=xn();Ti(i,t,1,r)}}),Tv(t,1)}};$0=function(t){if(t.tag===13){var e=wr(t,134217728);if(e!==null){var n=xn();Ti(e,t,134217728,n)}Tv(t,134217728)}};WM=function(t){if(t.tag===13){var e=ss(t),n=wr(t,e);if(n!==null){var i=xn();Ti(n,t,e,i)}Tv(t,e)}};XM=function(){return ct};jM=function(t,e){var n=ct;try{return ct=t,e()}finally{ct=n}};jm=function(t,e,n){switch(e){case"input":if(Bm(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=yf(i);if(!r)throw Error(ee(90));MM(i),Bm(i,r)}}}break;case"textarea":TM(t,n);break;case"select":e=n.value,e!=null&&Xo(t,!!n.multiple,e,!1)}};IM=xv;NM=Qs;var Rk={usingClientEntryPoint:!1,Events:[Sc,No,yf,PM,LM,xv]},nl={findFiberByHostInstance:Ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pk={bundleType:nl.bundleType,version:nl.version,rendererPackageName:nl.rendererPackageName,rendererConfig:nl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=OM(t),t===null?null:t.stateNode},findFiberByHostInstance:nl.findFiberByHostInstance||Ak,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{mf=Mu.inject(Pk),Fi=Mu}catch{}}Kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rk;Kn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Av(e))throw Error(ee(200));return Ck(t,e,null,n)};Kn.createRoot=function(t,e){if(!Av(t))throw Error(ee(299));var n=!1,i="",r=pT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ev(t,1,!1,null,null,n,!1,i,r),t[xr]=e.current,Ql(t.nodeType===8?t.parentNode:t),new Cv(e)};Kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=OM(e),t=t===null?null:t.stateNode,t};Kn.flushSync=function(t){return Qs(t)};Kn.hydrate=function(t,e,n){if(!bf(e))throw Error(ee(200));return Rf(null,t,e,!0,n)};Kn.hydrateRoot=function(t,e,n){if(!Av(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=pT;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=dT(e,null,t,1,n??null,r,!1,s,o),t[xr]=e.current,Ql(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Af(e)};Kn.render=function(t,e,n){if(!bf(e))throw Error(ee(200));return Rf(null,t,e,!1,n)};Kn.unmountComponentAtNode=function(t){if(!bf(t))throw Error(ee(40));return t._reactRootContainer?(Qs(function(){Rf(null,null,t,!1,function(){t._reactRootContainer=null,t[xr]=null})}),!0):!1};Kn.unstable_batchedUpdates=xv;Kn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!bf(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return Rf(t,e,n,!1,i)};Kn.version="18.3.1-next-f1338f8080-20240426";function mT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mT)}catch(t){console.error(t)}}mT(),mM.exports=Kn;var Lk=mM.exports,f1=Lk;f1.createRoot,f1.hydrateRoot;var Ik=1e-6,ui=typeof Float32Array<"u"?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});function Nk(){var t=new ui(9);return ui!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function bv(){var t=new ui(16);return ui!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function Cr(){var t=new ui(3);return ui!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function Dk(t){var e=t[0],n=t[1],i=t[2];return Math.hypot(e,n,i)}function Tg(t,e,n){var i=new ui(3);return i[0]=t,i[1]=e,i[2]=n,i}function ip(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function Uk(t,e,n,i){return t[0]=e,t[1]=n,t[2]=i,t}function Ok(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t}function gT(t,e){var n=e[0],i=e[1],r=e[2],s=n*n+i*i+r*r;return s>0&&(s=1/Math.sqrt(s)),t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t}function kk(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function rp(t,e,n){var i=e[0],r=e[1],s=e[2],o=n[0],a=n[1],l=n[2];return t[0]=r*l-s*a,t[1]=s*o-i*l,t[2]=i*a-r*o,t}function Fk(t,e,n){var i=n[0],r=n[1],s=n[2],o=n[3],a=e[0],l=e[1],c=e[2],u=r*c-s*l,f=s*a-i*c,h=i*l-r*a,d=r*h-s*f,g=s*u-i*h,_=i*f-r*u,m=o*2;return u*=m,f*=m,h*=m,d*=2,g*=2,_*=2,t[0]=a+u+d,t[1]=l+f+g,t[2]=c+h+_,t}var Bk=Dk;(function(){var t=Cr();return function(e,n,i,r,s,o){var a,l;for(n||(n=3),i||(i=0),r?l=Math.min(r*n+i,e.length):l=e.length,a=i;a<l;a+=n)t[0]=e[a],t[1]=e[a+1],t[2]=e[a+2],s(t,t,o),e[a]=t[0],e[a+1]=t[1],e[a+2]=t[2];return e}})();function zk(){var t=new ui(4);return ui!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function Hk(t,e,n,i){var r=new ui(4);return r[0]=t,r[1]=e,r[2]=n,r[3]=i,r}function Vk(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function Gk(t,e,n,i,r){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t}function Wk(t,e){var n=e[0],i=e[1],r=e[2],s=e[3],o=n*n+i*i+r*r+s*s;return o>0&&(o=1/Math.sqrt(o)),t[0]=n*o,t[1]=i*o,t[2]=r*o,t[3]=s*o,t}(function(){var t=zk();return function(e,n,i,r,s,o){var a,l;for(n||(n=4),i||(i=0),r?l=Math.min(r*n+i,e.length):l=e.length,a=i;a<l;a+=n)t[0]=e[a],t[1]=e[a+1],t[2]=e[a+2],t[3]=e[a+3],s(t,t,o),e[a]=t[0],e[a+1]=t[1],e[a+2]=t[2],e[a+3]=t[3];return e}})();function Aa(){var t=new ui(4);return ui!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function vT(t,e,n){n=n*.5;var i=Math.sin(n);return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=Math.cos(n),t}function Xk(t,e,n){var i=e[0],r=e[1],s=e[2],o=e[3],a=n[0],l=n[1],c=n[2],u=n[3];return t[0]=i*u+o*a+r*c-s*l,t[1]=r*u+o*l+s*a-i*c,t[2]=s*u+o*c+i*l-r*a,t[3]=o*u-i*a-r*l-s*c,t}function sp(t,e,n,i){var r=e[0],s=e[1],o=e[2],a=e[3],l=n[0],c=n[1],u=n[2],f=n[3],h,d,g,_,m;return d=r*l+s*c+o*u+a*f,d<0&&(d=-d,l=-l,c=-c,u=-u,f=-f),1-d>Ik?(h=Math.acos(d),g=Math.sin(h),_=Math.sin((1-i)*h)/g,m=Math.sin(i*h)/g):(_=1-i,m=i),t[0]=_*r+m*l,t[1]=_*s+m*c,t[2]=_*o+m*u,t[3]=_*a+m*f,t}function jk(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function $k(t,e){var n=e[0]+e[4]+e[8],i;if(n>0)i=Math.sqrt(n+1),t[3]=.5*i,i=.5/i,t[0]=(e[5]-e[7])*i,t[1]=(e[6]-e[2])*i,t[2]=(e[1]-e[3])*i;else{var r=0;e[4]>e[0]&&(r=1),e[8]>e[r*3+r]&&(r=2);var s=(r+1)%3,o=(r+2)%3;i=Math.sqrt(e[r*3+r]-e[s*3+s]-e[o*3+o]+1),t[r]=.5*i,i=.5/i,t[3]=(e[s*3+o]-e[o*3+s])*i,t[s]=(e[s*3+r]+e[r*3+s])*i,t[o]=(e[o*3+r]+e[r*3+o])*i}return t}var Yk=Hk,op=Vk,d1=Gk,Rv=Wk;(function(){var t=Cr(),e=Tg(1,0,0),n=Tg(0,1,0);return function(i,r,s){var o=kk(r,s);return o<-.999999?(rp(t,e,r),Bk(t)<1e-6&&rp(t,n,r),gT(t,t),vT(i,t,Math.PI),i):o>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(rp(t,r,s),i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=1+o,Rv(i,i))}})();(function(){var t=Aa(),e=Aa();return function(n,i,r,s,o,a){return sp(t,i,o,a),sp(e,r,s,a),sp(n,t,e,2*a*(1-a)),n}})();(function(){var t=Nk();return function(e,n,i,r){return t[0]=i[0],t[3]=i[1],t[6]=i[2],t[1]=r[0],t[4]=r[1],t[7]=r[2],t[2]=-n[0],t[5]=-n[1],t[8]=-n[2],Rv(e,$k(e,t))}})();class Zo{constructor(e=0,n=0,i=0){this.vec3=Tg(e,n,i),this.tempVec3=Cr()}get x(){return this.vec3[0]}set x(e){this.vec3[0]=e}get y(){return this.vec3[1]}set y(e){this.vec3[1]=e}get z(){return this.vec3[2]}set z(e){this.vec3[2]=e}set(e,n,i){return Uk(this.vec3,e,n,i),this}clone(){return new Zo(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}normalize(){return ip(this.tempVec3,this.vec3),gT(this.vec3,this.tempVec3),this}add(e){return ip(this.tempVec3,this.vec3),Ok(this.vec3,this.tempVec3,e.vec3),this}applyQuaternion(e){return ip(this.tempVec3,this.vec3),Fk(this.vec3,this.tempVec3,e.quat),this}}class Jo{constructor(e=0,n=0,i=0,r=1){this.quat=Yk(e,n,i,r),this.tempQuat=Aa()}get x(){return this.quat[0]}set x(e){this.quat[0]=e}get y(){return this.quat[1]}set y(e){this.quat[1]=e}get z(){return this.quat[2]}set z(e){this.quat[2]=e}get w(){return this.quat[3]}set w(e){this.quat[3]=e}set(e,n,i,r){return d1(this.quat,e,n,i,r),this}clone(){return new Jo(this.x,this.y,this.z,this.w)}copy(e){return d1(this.quat,e.x,e.y,e.z,e.w),this}normalize(){return op(this.tempQuat,this.quat),Rv(this.quat,this.tempQuat),this}invert(){return op(this.tempQuat,this.quat),jk(this.quat,this.tempQuat),this}multiply(e){return op(this.tempQuat,this.quat),Xk(this.quat,this.tempQuat,e.quat),this}setFromAxisAngle(e,n){return vT(this.quat,e.vec3,n),this}}var lc;(function(t){t.None="",t.Standard="standard",t.XRStandard="xr-standard"})(lc||(lc={}));var Nl;(function(t){t.None="none",t.Left="left",t.Right="right"})(Nl||(Nl={}));var p1;(function(t){t.Gaze="gaze",t.TrackedPointer="tracked-pointer",t.Screen="screen",t.TransientPointer="transient-pointer"})(p1||(p1={}));Nl.Left+"",new Zo(-.25,1.5,-.4),new Jo,Nl.Right+"",new Zo(.25,1.5,-.4),new Jo,Nl.None+"",new Zo(.25,1.5,-.4),new Jo;var m1;(function(t){t.None="none",t.Left="left",t.Right="right"})(m1||(m1={}));bv();bv();bv();var g1;(function(t){t.Viewer="viewer",t.Local="local",t.LocalFloor="local-floor",t.BoundedFloor="bounded-floor",t.Unbounded="unbounded"})(g1||(g1={}));var v1;(function(t){t.Visible="visible",t.VisibleBlurred="visible-blurred",t.Hidden="hidden"})(v1||(v1={}));var Lt;(function(t){t.Inline="inline",t.ImmersiveVR="immersive-vr",t.ImmersiveAR="immersive-ar"})(Lt||(Lt={}));var Vi;(function(t){t.Opaque="opaque",t.AlphaBlend="alpha-blend",t.Additive="additive"})(Vi||(Vi={}));var ba;(function(t){t.ScreenSpace="screen-space",t.WorldSpace="world-space"})(ba||(ba={}));var _1;(function(t){t.Wrist="wrist",t.ThumbMetacarpal="thumb-metacarpal",t.ThumbPhalanxProximal="thumb-phalanx-proximal",t.ThumbPhalanxDistal="thumb-phalanx-distal",t.ThumbTip="thumb-tip",t.IndexFingerMetacarpal="index-finger-metacarpal",t.IndexFingerPhalanxProximal="index-finger-phalanx-proximal",t.IndexFingerPhalanxIntermediate="index-finger-phalanx-intermediate",t.IndexFingerPhalanxDistal="index-finger-phalanx-distal",t.IndexFingerTip="index-finger-tip",t.MiddleFingerMetacarpal="middle-finger-metacarpal",t.MiddleFingerPhalanxProximal="middle-finger-phalanx-proximal",t.MiddleFingerPhalanxIntermediate="middle-finger-phalanx-intermediate",t.MiddleFingerPhalanxDistal="middle-finger-phalanx-distal",t.MiddleFingerTip="middle-finger-tip",t.RingFingerMetacarpal="ring-finger-metacarpal",t.RingFingerPhalanxProximal="ring-finger-phalanx-proximal",t.RingFingerPhalanxIntermediate="ring-finger-phalanx-intermediate",t.RingFingerPhalanxDistal="ring-finger-phalanx-distal",t.RingFingerTip="ring-finger-tip",t.PinkyFingerMetacarpal="pinky-finger-metacarpal",t.PinkyFingerPhalanxProximal="pinky-finger-phalanx-proximal",t.PinkyFingerPhalanxIntermediate="pinky-finger-phalanx-intermediate",t.PinkyFingerPhalanxDistal="pinky-finger-phalanx-distal",t.PinkyFingerTip="pinky-finger-tip"})(_1||(_1={}));lc.None;Cr();Aa();Cr();Cr();Aa();Cr();Cr();Aa();Cr();var ke;(function(t){t.Viewer="viewer",t.Local="local",t.LocalFloor="local-floor",t.BoundedFloor="bounded-floor",t.Unbounded="unbounded",t.DomOverlay="dom-overlay",t.Anchors="anchors",t.PlaneDetection="plane-detection",t.MeshDetection="mesh-detection",t.HitTest="hit-test",t.HandTracking="hand-tracking",t.DepthSensing="depth-sensing"})(ke||(ke={}));Math.PI/2,new Zo(0,1.6,0),new Jo;const Pf={mapping:lc.XRStandard,buttons:[{id:"trigger",type:"analog",eventTrigger:"select"},{id:"squeeze",type:"analog",eventTrigger:"squeeze"},null,{id:"thumbstick",type:"binary"},{id:"x-button",type:"binary"},{id:"y-button",type:"binary"},{id:"thumbrest",type:"binary"}],axes:[null,null,{id:"thumbstick",type:"x-axis"},{id:"thumbstick",type:"y-axis"}]},Lf={mapping:lc.XRStandard,buttons:[{id:"trigger",type:"analog",eventTrigger:"select"},{id:"squeeze",type:"analog",eventTrigger:"squeeze"},null,{id:"thumbstick",type:"binary"},{id:"a-button",type:"binary"},{id:"b-button",type:"binary"},{id:"thumbrest",type:"binary"}],axes:[null,null,{id:"thumbstick",type:"x-axis"},{id:"thumbstick",type:"y-axis"}]},Kk={profileId:"oculus-touch-v2",fallbackProfileIds:["oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:Pf,gripOffsetMatrix:[.9925461411476135,4673031295254759e-24,-.12186938524246216,0,.08617470413446426,.7071065306663513,.7018362283706665,0,.0861746296286583,-.70710688829422,.7018358707427979,0,-.003979847766458988,-.01585787907242775,.04964185878634453,1],numHapticActuators:1},right:{gamepad:Lf,gripOffsetMatrix:[.9925461411476135,3688163374704345e-23,.12186937034130096,0,-.08617469668388367,.7071066498756409,.7018361687660217,0,-.0861746147274971,-.7071068286895752,.7018359899520874,0,.003979853354394436,-.01585787907242775,.04964182525873184,1],numHapticActuators:1}}},qk={profileId:"oculus-touch-v3",fallbackProfileIds:["oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:Pf,gripOffsetMatrix:[.9925461411476135,20823669899527886e-24,-.12186937034130096,0,.08617465198040009,.7071067094802856,.701836109161377,0,.08617466688156128,-.7071067690849304,.7018360495567322,0,-.003979838453233242,-.015857907012104988,.04964181408286095,1],numHapticActuators:1},right:{gamepad:Lf,gripOffsetMatrix:[.9925461411476135,-8329467959811154e-23,.12186941504478455,0,-.08617465943098068,.7071066498756409,.7018361687660217,0,-.08617471158504486,-.7071068286895752,.7018359303474426,0,.003979798872023821,-.015857888385653496,.049641866236925125,1],numHapticActuators:1}}},Zk={profileId:"meta-quest-touch-pro",fallbackProfileIds:["oculus-touch-v2","oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:Pf,gripOffsetMatrix:[.9925461411476135,-15779937356796836e-24,-.12186935544013977,0,.08617467433214188,.7071067094802856,.701836109161377,0,.0861746296286583,-.7071067690849304,.7018360495567322,0,-.003979836590588093,-.015857847407460213,.049641840159893036,1],numHapticActuators:3},right:{gamepad:Lf,gripOffsetMatrix:[.9925461411476135,9267653311439972e-26,.12186937034130096,0,-.08617467433214188,.7071067094802856,.7018361687660217,0,-.08617464452981949,-.7071067690849304,.7018360495567322,0,.003979847766458988,-.01585782691836357,.04964186251163483,1],numHapticActuators:3}}},Jk={profileId:"meta-quest-touch-plus",fallbackProfileIds:["oculus-touch-v3","oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:Pf,gripOffsetMatrix:[.9925461411476135,10736208366779465e-24,-.12186933308839798,0,.08617459982633591,.70710688829422,.7018360495567322,0,.08617466688156128,-.7071067094802856,.7018362283706665,0,-.003979803062975407,-.015857873484492302,.04964187368750572,1],numHapticActuators:1},right:{gamepad:Lf,gripOffsetMatrix:[.9925461411476135,-26238110351073374e-24,.12186934053897858,0,-.0861746147274971,.7071067690849304,.7018360495567322,0,-.08617465943098068,-.7071067094802856,.701836109161377,0,.003979838453233242,-.015857869759202003,.04964182525873184,1],numHapticActuators:1}}};Lt.Inline,Lt.ImmersiveVR,Lt.ImmersiveAR,ke.Viewer,ke.Local,ke.LocalFloor,ke.BoundedFloor,ke.Unbounded,ke.Anchors,ke.PlaneDetection,ke.HandTracking,Lt.ImmersiveVR+"",Vi.Opaque,Lt.ImmersiveAR+"",Vi.AlphaBlend,ba.WorldSpace;Lt.Inline,Lt.ImmersiveVR,Lt.ImmersiveAR,ke.Viewer,ke.Local,ke.LocalFloor,ke.BoundedFloor,ke.Unbounded,ke.Anchors,ke.PlaneDetection,ke.MeshDetection,ke.HitTest,ke.HandTracking,Lt.ImmersiveVR+"",Vi.Opaque,Lt.ImmersiveAR+"",Vi.AlphaBlend,ba.WorldSpace;Lt.Inline,Lt.ImmersiveVR,Lt.ImmersiveAR,ke.Viewer,ke.Local,ke.LocalFloor,ke.BoundedFloor,ke.Unbounded,ke.Anchors,ke.PlaneDetection,ke.MeshDetection,ke.HitTest,ke.HandTracking,Lt.ImmersiveVR+"",Vi.Opaque,Lt.ImmersiveAR+"",Vi.AlphaBlend,ba.WorldSpace;Lt.Inline,Lt.ImmersiveVR,Lt.ImmersiveAR,ke.Viewer,ke.Local,ke.LocalFloor,ke.BoundedFloor,ke.Unbounded,ke.Anchors,ke.PlaneDetection,ke.MeshDetection,ke.HitTest,ke.HandTracking,ke.DepthSensing,Lt.ImmersiveVR+"",Vi.Opaque,Lt.ImmersiveAR+"",Vi.AlphaBlend,ba.WorldSpace;class Qk{static createButton(e,n={}){const i=document.createElement("button");function r(c){let u=null;async function f(g){g.addEventListener("end",h),await e.xr.setSession(g),i.textContent="STOP XR",u=g}function h(){u.removeEventListener("end",h),i.textContent="START XR",u=null}i.style.display="",i.style.cursor="pointer",i.style.left="calc(50% - 50px)",i.style.width="100px",i.textContent="START XR";const d={...n,optionalFeatures:["local-floor","bounded-floor","layers",...n.optionalFeatures||[]]};i.onmouseenter=function(){i.style.opacity="1.0"},i.onmouseleave=function(){i.style.opacity="0.5"},i.onclick=function(){u===null?navigator.xr.requestSession(c,d).then(f):(u.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession(c,d).then(f).catch(g=>{console.warn(g)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession(c,d).then(f).catch(g=>{console.warn(g)})}function s(){i.style.display="",i.style.cursor="auto",i.style.left="calc(50% - 75px)",i.style.width="150px",i.onmouseenter=null,i.onmouseleave=null,i.onclick=null}function o(){s(),i.textContent="XR NOT SUPPORTED"}function a(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),i.textContent="XR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return i.id="XRButton",i.style.display="none",l(i),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?r("immersive-ar"):navigator.xr.isSessionSupported("immersive-vr").then(function(u){u?r("immersive-vr"):o()}).catch(a)}).catch(a),i;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}}const y1={type:"change"},Pv={type:"start"},_T={type:"end"},Eu=new Ra,x1=new sr,eF=Math.cos(70*W1.DEG2RAD),Ft=new P,Tn=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ap=1e-6;class tF extends pI{constructor(e,n=null){super(e,n),this.state=ut.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zo.ROTATE,MIDDLE:zo.DOLLY,RIGHT:zo.PAN},this.touches={ONE:So.ROTATE,TWO:So.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Ci,this._lastTargetPosition=new P,this._quat=new Ci().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new hy,this._sphericalDelta=new hy,this._scale=1,this._panOffset=new P,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new P,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iF.bind(this),this._onPointerDown=nF.bind(this),this._onPointerUp=rF.bind(this),this._onContextMenu=hF.bind(this),this._onMouseWheel=aF.bind(this),this._onKeyDown=lF.bind(this),this._onTouchStart=cF.bind(this),this._onTouchMove=uF.bind(this),this._onMouseDown=sF.bind(this),this._onMouseMove=oF.bind(this),this._interceptControlDown=fF.bind(this),this._interceptControlUp=dF.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(y1),this.update(),this.state=ut.NONE}update(e=null){const n=this.object.position;Ft.copy(n).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Tn:i>Math.PI&&(i-=Tn),r<-Math.PI?r+=Tn:r>Math.PI&&(r-=Tn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ft.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Eu.origin.copy(this.object.position),Eu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Eu.direction))<eF?this.object.lookAt(this.target):(x1.setFromNormalAndCoplanarPoint(this.object.up,this.target),Eu.intersectPlane(x1,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ap||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ap||this._lastTargetPosition.distanceToSquared(this.target)>ap?(this.dispatchEvent(y1),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Tn/60*this.autoRotateSpeed*e:Tn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Ft.setFromMatrixColumn(n,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,n){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(n,1):(Ft.setFromMatrixColumn(n,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ft.copy(r).sub(this.target);let s=Ft.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ce,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function nF(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function iF(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function rF(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(_T),this.state=ut.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function sF(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case zo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=ut.DOLLY;break;case zo.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ut.ROTATE}break;case zo.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(Pv)}function oF(t){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function aF(t){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(t.preventDefault(),this.dispatchEvent(Pv),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(_T))}function lF(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function cF(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case So.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=ut.TOUCH_ROTATE;break;case So.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case So.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=ut.TOUCH_DOLLY_PAN;break;case So.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(Pv)}function uF(t){switch(this._trackPointer(t),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=ut.NONE}}function hF(t){this.enabled!==!1&&t.preventDefault()}function fF(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dF(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function w1(t,e){if(e===sC)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),t;if(e===Zp||e===H1){let n=t.getIndex();if(n===null){const o=[],a=t.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);t.setIndex(o),n=t.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),t}const i=n.count-2,r=[];if(e===Zp)for(let o=1;o<=i;o++)r.push(n.getX(0)),r.push(n.getX(o)),r.push(n.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(n.getX(o)),r.push(n.getX(o+1)),r.push(n.getX(o+2))):(r.push(n.getX(o+2)),r.push(n.getX(o+1)),r.push(n.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=t.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),t}class pF extends fs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new yF(n)}),this.register(function(n){return new xF(n)}),this.register(function(n){return new RF(n)}),this.register(function(n){return new PF(n)}),this.register(function(n){return new LF(n)}),this.register(function(n){return new SF(n)}),this.register(function(n){return new MF(n)}),this.register(function(n){return new EF(n)}),this.register(function(n){return new TF(n)}),this.register(function(n){return new _F(n)}),this.register(function(n){return new CF(n)}),this.register(function(n){return new wF(n)}),this.register(function(n){return new bF(n)}),this.register(function(n){return new AF(n)}),this.register(function(n){return new gF(n)}),this.register(function(n){return new IF(n)}),this.register(function(n){return new NF(n)})}load(e,n,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=_l.extractUrlBase(e);o=_l.resolveURL(c,this.path)}else o=_l.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new fc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){n(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===yT){try{o[We.KHR_BINARY_GLTF]=new DF(e)}catch(f){r&&r(f);return}s=JSON.parse(o[We.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new $F(s,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(f){case We.KHR_MATERIALS_UNLIT:o[f]=new vF;break;case We.KHR_DRACO_MESH_COMPRESSION:o[f]=new UF(s,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:o[f]=new OF;break;case We.KHR_MESH_QUANTIZATION:o[f]=new kF;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,n){const i=this;return new Promise(function(r,s){i.parse(e,n,r,s)})}}function mF(){let t={};return{get:function(e){return t[e]},add:function(e,n){t[e]=n},remove:function(e){delete t[e]},removeAll:function(){t={}}}}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class gF{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,n=this.parser.json.nodes||[];for(let i=0,r=n.length;i<r;i++){const s=n[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const n=this.parser,i="light:"+e;let r=n.cache.get(i);if(r)return r;const s=n.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new be(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],en);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new qL(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new YL(u),c.distance=f;break;case"spot":c=new jL(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,rr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=n.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),n.cache.add(i,r),r}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){const n=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(n.cache,a,l)})}}class vF{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return ur}extendParams(e,n,i){const r=[];e.color=new be(1,1,1),e.opacity=1;const s=n.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],en),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,ln))}return Promise.all(r)}}class _F{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(n.emissiveIntensity=s),Promise.resolve()}}class yF{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Xi}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(n.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(n,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(n,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(n,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new ce(a,a)}return Promise.all(s)}}class xF{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Xi}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return n.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class wF{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Xi}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(n.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(n,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(n.iridescenceIOR=o.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(n,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class SF{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Xi}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];n.sheenColor=new be(0,0,0),n.sheenRoughness=0,n.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;n.sheenColor.setRGB(a[0],a[1],a[2],en)}return o.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(n,"sheenColorMap",o.sheenColorTexture,ln)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(n,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class MF{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Xi}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(n.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(n,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class EF{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Xi}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];n.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(n,"thicknessMap",o.thicknessTexture)),n.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return n.attenuationColor=new be().setRGB(a[0],a[1],a[2],en),Promise.all(s)}}class TF{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Xi}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return n.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class CF{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Xi}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];n.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(n,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return n.specularColor=new be().setRGB(a[0],a[1],a[2],en),o.specularColorTexture!==void 0&&s.push(i.assignTexture(n,"specularColorMap",o.specularColorTexture,ln)),Promise.all(s)}}class AF{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Xi}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return n.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(n,"bumpMap",o.bumpTexture)),Promise.all(s)}}class bF{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Xi}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(n.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(n.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(n,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class RF{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=n.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,s.source,o)}}class PF{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const n=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[n])return null;const o=s.extensions[n],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(n)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const n=new Image;n.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",n.onload=n.onerror=function(){e(n.height===1)}})),this.isSupported}}class LF{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const n=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[n])return null;const o=s.extensions[n],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(n)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const n=new Image;n.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",n.onload=n.onerror=function(){e(n.height===1)}})),this.isSupported}}class IF{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const n=this.parser.json,i=n.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,f=r.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(d),u,f,h,r.mode,r.filter),d})})}else return null}}class NF{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const n=this.parser.json,i=n.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=n.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Qn.TRIANGLES&&c.mode!==Qn.TRIANGLE_STRIP&&c.mode!==Qn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(const g of f){const _=new De,m=new P,p=new Ci,y=new P(1,1,1),v=new JP(g.geometry,g.material,h);for(let x=0;x<h;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&y.fromBufferAttribute(l.SCALE,x),v.setMatrixAt(x,_.compose(m,p,y));for(const x in l)if(x==="_COLOR_0"){const A=l[x];v.instanceColor=new em(A.array,A.itemSize,A.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);ht.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const yT="glTF",il=12,S1={JSON:1313821514,BIN:5130562};class DF{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(e,0,il),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==yT)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-il,s=new DataView(e,il);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===S1.JSON){const c=new Uint8Array(e,il+o,a);this.content=i.decode(c)}else if(l===S1.BIN){const c=il+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class UF{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=Cg[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=Cg[u]||u.toLowerCase();if(o[u]!==void 0){const h=i.accessors[e.attributes[u]],d=Qo[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return n.getDependency("bufferView",s).then(function(u){return new Promise(function(f,h){r.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}f(d)},a,c,en,h)})})}}class OF{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){return(n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),e.needsUpdate=!0),e}}class kF{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class xT extends hc{constructor(e,n,i,r){super(e,n,i,r)}copySampleValue_(e){const n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)n[o]=i[s+o];return n}interpolate_(e,n,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-n,f=(i-n)/u,h=f*f,d=h*f,g=e*c,_=g-c,m=-2*d+3*h,p=d-h,y=1-m,v=p-h+f;for(let x=0;x!==a;x++){const A=o[_+x+a],C=o[_+x+l]*u,M=o[g+x+a],R=o[g+x]*u;s[x]=y*A+v*C+m*M+p*R}return s}}const FF=new Ci;class BF extends xT{interpolate_(e,n,i,r){const s=super.interpolate_(e,n,i,r);return FF.fromArray(s).normalize().toArray(s),s}}const Qn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Qo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},M1={9728:yn,9729:hn,9984:L1,9985:Cu,9986:sl,9987:lr},E1={33071:Xr,33648:nh,10497:ra},lp={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Cg={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},kr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zF={CUBICSPLINE:void 0,LINEAR:Ol,STEP:Ul},cp={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function HF(t){return t.DefaultMaterial===void 0&&(t.DefaultMaterial=new Zg({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pr})),t.DefaultMaterial}function Ts(t,e,n){for(const i in n.extensions)t[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=n.extensions[i])}function rr(t,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(t.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function VF(t,e,n){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(t);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(i){const h=f.POSITION!==void 0?n.getDependency("accessor",f.POSITION):t.attributes.position;o.push(h)}if(r){const h=f.NORMAL!==void 0?n.getDependency("accessor",f.NORMAL):t.attributes.normal;a.push(h)}if(s){const h=f.COLOR_0!==void 0?n.getDependency("accessor",f.COLOR_0):t.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return i&&(t.morphAttributes.position=u),r&&(t.morphAttributes.normal=f),s&&(t.morphAttributes.color=h),t.morphTargetsRelative=!0,t})}function GF(t,e){if(t.updateMorphTargets(),e.weights!==void 0)for(let n=0,i=e.weights.length;n<i;n++)t.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){const n=e.extras.targetNames;if(t.morphTargetInfluences.length===n.length){t.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++)t.morphTargetDictionary[n[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function WF(t){let e;const n=t.extensions&&t.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+up(n.attributes):e=t.indices+":"+up(t.attributes)+":"+t.mode,t.targets!==void 0)for(let i=0,r=t.targets.length;i<r;i++)e+=":"+up(t.targets[i]);return e}function up(t){let e="";const n=Object.keys(t).sort();for(let i=0,r=n.length;i<r;i++)e+=n[i]+":"+t[n[i]]+";";return e}function Ag(t){switch(t){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function XF(t){return t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0?"image/jpeg":t.search(/\.webp($|\?)/i)>0||t.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const jF=new De;class $F{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new mF,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new Sw(this.options.manager):this.textureLoader=new JL(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Ts(s,a,r),rr(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(n)}_markDefs(){const e=this.json.nodes||[],n=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=n.length;r<s;r++){const o=n[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,i){if(e.refs[n]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[n]++,r}_invokeOne(e){const n=Object.values(this.plugins);n.push(this);for(let i=0;i<n.length;i++){const r=e(n[i]);if(r)return r}return null}_invokeAll(e){const n=Object.values(this.plugins);n.unshift(this);const i=[];for(let r=0;r<n.length;r++){const s=e(n[r]);s&&i.push(s)}return i}getDependency(e,n){const i=e+":"+n;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(n);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(n)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(n)});break;case"accessor":r=this.loadAccessor(n);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(n)});break;case"buffer":r=this.loadBuffer(n);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(n)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(n)});break;case"skin":r=this.loadSkin(n);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(n)});break;case"camera":r=this.loadCamera(n);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,n)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let n=this.cache.get(e);if(!n){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,n)}return n}loadBuffer(e){const n=this.json.buffers[e],i=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(_l.resolveURL(n.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){const n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(i){const r=n.byteLength||0,s=n.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const n=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=lp[r.type],a=Qo[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new dn(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=lp[r.type],c=Qo[r.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=r.byteOffset||0,d=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(d&&d!==f){const p=Math.floor(h/d),y="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let v=n.cache.get(y);v||(_=new c(a,p*d,r.count*d/u),v=new $P(_,d/u),n.cache.add(y,v)),m=new Wg(v,l,h%d/u,g)}else a===null?_=new c(r.count*l):_=new c(a,h,r.count*l),m=new dn(_,l,g);if(r.sparse!==void 0){const p=lp.SCALAR,y=Qo[r.sparse.indices.componentType],v=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,A=new y(o[1],v,r.sparse.count*p),C=new c(o[2],x,r.sparse.count*l);a!==null&&(m=new dn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let M=0,R=A.length;M<R;M++){const H=A[M];if(m.setX(H,C[M*l]),l>=2&&m.setY(H,C[M*l+1]),l>=3&&m.setZ(H,C[M*l+2]),l>=4&&m.setW(H,C[M*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const n=this.json,i=this.options,s=n.textures[e].source,o=n.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,n,i){const r=this,s=this.json,o=s.textures[e],a=s.images[n],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(n,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=M1[h.magFilter]||hn,u.minFilter=M1[h.minFilter]||lr,u.wrapS=E1[h.wrapS]||ra,u.wrapT=E1[h.wrapT]||ra,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,n){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let g=h;n.isImageBitmapLoader===!0&&(g=function(_){const m=new Vt(_);m.needsUpdate=!0,h(m)}),n.load(_l.resolveURL(f,s.path),g,void 0,d)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),rr(f,o),f.userData.mimeType=o.mimeType||XF(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,n,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[We.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[n]=o,o})}assignFinalMaterial(e){const n=e.geometry;let i=e.material;const r=n.attributes.tangent===void 0,s=n.attributes.color!==void 0,o=n.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new uw,ki.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new cw,ki.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Zg}loadMaterial(e){const n=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[We.KHR_MATERIALS_UNLIT]){const f=r[We.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,n))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new be(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],en),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(n.assignTexture(a,"map",f.baseColorTexture,ln)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(n.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(n.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Ni);const u=s.alphaMode||cp.OPAQUE;if(u===cp.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===cp.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ur&&(c.push(n.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new ce(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==ur&&(c.push(n.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ur){const f=s.emissiveFactor;a.emissive=new be().setRGB(f[0],f[1],f[2],en)}return s.emissiveTexture!==void 0&&o!==ur&&c.push(n.assignTexture(a,"emissiveMap",s.emissiveTexture,ln)),Promise.all(c).then(function(){const f=new o(a);return s.name&&(f.name=s.name),rr(f,s),n.associations.set(f,{materials:e}),s.extensions&&Ts(r,f,s),f})}createUniqueName(e){const n=lt.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){const n=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,n).then(function(l){return T1(l,a,n)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=WF(c),f=r[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[We.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=T1(new hi,c,n),r[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const n=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?HF(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(n.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const y=c[d];if(m.mode===Qn.TRIANGLES||m.mode===Qn.TRIANGLE_STRIP||m.mode===Qn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new KP(_,y):new fn(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Qn.TRIANGLE_STRIP?p.geometry=w1(p.geometry,H1):m.mode===Qn.TRIANGLE_FAN&&(p.geometry=w1(p.geometry,Zp));else if(m.mode===Qn.LINES)p=new QP(_,y);else if(m.mode===Qn.LINE_STRIP)p=new jg(_,y);else if(m.mode===Qn.LINE_LOOP)p=new eL(_,y);else if(m.mode===Qn.POINTS)p=new tL(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&GF(p,s),p.name=n.createUniqueName(s.name||"mesh_"+e),rr(p,s),m.extensions&&Ts(r,p,m),n.assignFinalMaterial(p),f.push(p)}for(let d=0,g=f.length;d<g;d++)n.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return s.extensions&&Ts(r,f[0],s),f[0];const h=new jr;s.extensions&&Ts(r,h,s),n.associations.set(h,{meshes:e});for(let d=0,g=f.length;d<g;d++)h.add(f[d]);return h})}loadCamera(e){let n;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?n=new _n(W1.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(n=new Vg(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(n.name=this.createUniqueName(i.name)),rr(n,i),Promise.resolve(n)}loadSkin(e){const n=this.json.skins[e],i=[];for(let r=0,s=n.joints.length;r<s;r++)i.push(this._loadNodeShallow(n.joints[r]));return n.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",n.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new De;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[c])}return new Xg(a,l)})}loadAnimation(e){const n=this.json,i=this,r=n.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=r.channels.length;f<h;f++){const d=r.channels[f],g=r.samplers[d.sampler],_=d.target,m=_.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,y=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],d=f[1],g=f[2],_=f[3],m=f[4],p=[];for(let y=0,v=h.length;y<v;y++){const x=h[y],A=d[y],C=g[y],M=_[y],R=m[y];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const H=i._createAnimationTracks(x,A,C,M,R);if(H)for(let w=0;w<H.length;w++)p.push(H[w])}return new FL(s,void 0,p)})}createNodeMesh(e){const n=this.json,i=this,r=n.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const n=this.json,i=this,r=n.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,jF)});for(let d=0,g=f.length;d<g;d++)u.add(f[d]);return u})}_loadNodeShallow(e){const n=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=n.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new aw:c.length>1?u=new jr:c.length===1?u=c[0]:u=new ht,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=o),rr(u,s),s.extensions&&Ts(i,u,s),s.matrix!==void 0){const f=new De;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const n=this.extensions,i=this.json.scenes[e],r=this,s=new jr;i.name&&(s.name=r.createUniqueName(i.name)),rr(s,i),i.extensions&&Ts(n,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)s.add(l[u]);const c=u=>{const f=new Map;for(const[h,d]of r.associations)(h instanceof ki||h instanceof Vt)&&f.set(h,d);return u.traverse(h=>{const d=r.associations.get(h);d!=null&&f.set(h,d)}),f};return r.associations=c(s),s})}_createAnimationTracks(e,n,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];kr[s.path]===kr.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(kr[s.path]){case kr.weights:c=ca;break;case kr.rotation:c=ua;break;case kr.position:case kr.scale:c=ha;break;default:switch(i.itemSize){case 1:c=ca;break;case 2:case 3:default:c=ha;break}break}const u=r.interpolation!==void 0?zF[r.interpolation]:Ol,f=this._getArrayFromAccessor(i);for(let h=0,d=l.length;h<d;h++){const g=new c(l[h]+"."+kr[s.path],n.array,f,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){const i=Ag(n.constructor),r=new Float32Array(n.length);for(let s=0,o=n.length;s<o;s++)r[s]=n[s]*i;n=r}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof ua?BF:xT;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function YF(t,e,n){const i=e.attributes,r=new Mr;if(i.POSITION!==void 0){const a=n.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){const u=Ag(Qo[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new P,l=new P;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const h=n.json.accessors[f.POSITION],d=h.min,g=h.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),h.normalized){const _=Ag(Qo[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}t.boundingBox=r;const o=new Gi;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,t.boundingSphere=o}function T1(t,e,n){const i=e.attributes,r=[];function s(o,a){return n.getDependency("accessor",o).then(function(l){t.setAttribute(a,l)})}for(const o in i){const a=Cg[o]||o.toLowerCase();a in t.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!t.index){const o=n.getDependency("accessor",e.indices).then(function(a){t.setIndex(a)});r.push(o)}return et.workingColorSpace!==en&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),rr(t,e),YF(t,e,n),Promise.all(r).then(function(){return e.targets!==void 0?VF(t,e.targets,n):t})}class KF extends fs{constructor(e){super(e)}load(e,n,i,r){const s=this,o=new fc(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));n&&n(l)},i,r)}parse(e){return new qF(e)}}class qF{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,n=100){const i=[],r=ZF(e,n,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}}function ZF(t,e,n){const i=Array.from(t),r=e/n.resolution,s=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const u=i[c];if(u===`
`)a=0,l-=s;else{const f=JF(u,r,a,l,n);a+=f.offsetX,o.push(f.path)}}return o}function JF(t,e,n,i,r){const s=r.glyphs[t]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+t+'" does not exists in font family '+r.familyName+".");return}const o=new dI;let a,l,c,u,f,h,d,g;if(s.o){const _=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,p=_.length;m<p;)switch(_[m++]){case"m":a=_[m++]*e+n,l=_[m++]*e+i,o.moveTo(a,l);break;case"l":a=_[m++]*e+n,l=_[m++]*e+i,o.lineTo(a,l);break;case"q":c=_[m++]*e+n,u=_[m++]*e+i,f=_[m++]*e+n,h=_[m++]*e+i,o.quadraticCurveTo(f,h,c,u);break;case"b":c=_[m++]*e+n,u=_[m++]*e+i,f=_[m++]*e+n,h=_[m++]*e+i,d=_[m++]*e+n,g=_[m++]*e+i,o.bezierCurveTo(f,h,d,g,c,u);break}}return{offsetX:s.ha*e,path:o}}class QF extends fn{constructor(e){const n=new e4(e),i=new Pa(n.image.width*.001,n.image.height*.001),r=new ur({map:n,toneMapped:!1,transparent:!0});super(i,r);function s(o){r.map.dispatchDOMEvent(o)}this.addEventListener("mousedown",s),this.addEventListener("mousemove",s),this.addEventListener("mouseup",s),this.addEventListener("click",s),this.dispose=function(){i.dispose(),r.dispose(),r.map.dispose(),bg.delete(e),this.removeEventListener("mousedown",s),this.removeEventListener("mousemove",s),this.removeEventListener("mouseup",s),this.removeEventListener("click",s)}}}class e4 extends hw{constructor(e){super(C1(e)),this.dom=e,this.anisotropy=16,this.colorSpace=ln,this.minFilter=hn,this.magFilter=hn;const n=new MutationObserver(()=>{this.scheduleUpdate||(this.scheduleUpdate=setTimeout(()=>this.update(),16))}),i={attributes:!0,childList:!0,subtree:!0,characterData:!0};n.observe(e,i),this.observer=n}dispatchDOMEvent(e){e.data&&t4(this.dom,e.type,e.data.x,e.data.y)}update(){this.image=C1(this.dom),this.needsUpdate=!0,this.scheduleUpdate=null}dispose(){this.observer&&this.observer.disconnect(),this.scheduleUpdate=clearTimeout(this.scheduleUpdate),super.dispose()}}const bg=new WeakMap;function C1(t){const e=document.createRange(),n=new be;function i(h){const d=[];let g=!1;function _(){if(g&&(g=!1,h.restore()),d.length===0)return;let m=-1/0,p=-1/0,y=1/0,v=1/0;for(let x=0;x<d.length;x++){const A=d[x];m=Math.max(m,A.x),p=Math.max(p,A.y),y=Math.min(y,A.x+A.width),v=Math.min(v,A.y+A.height)}h.save(),h.beginPath(),h.rect(m,p,y-m,v-p),h.clip(),g=!0}return{add:function(m){d.push(m),_()},remove:function(){d.pop(),_()}}}function r(h,d,g,_){_!==""&&(h.textTransform==="uppercase"&&(_=_.toUpperCase()),u.font=h.fontWeight+" "+h.fontSize+" "+h.fontFamily,u.textBaseline="top",u.fillStyle=h.color,u.fillText(_,d,g+parseFloat(h.fontSize)*.1))}function s(h,d,g,_,m){g<2*m&&(m=g/2),_<2*m&&(m=_/2),u.beginPath(),u.moveTo(h+m,d),u.arcTo(h+g,d,h+g,d+_,m),u.arcTo(h+g,d+_,h,d+_,m),u.arcTo(h,d+_,h,d,m),u.arcTo(h,d,h+g,d,m),u.closePath()}function o(h,d,g,_,m,p){const y=h[d+"Width"],v=h[d+"Style"],x=h[d+"Color"];y!=="0px"&&v!=="none"&&x!=="transparent"&&x!=="rgba(0, 0, 0, 0)"&&(u.strokeStyle=x,u.lineWidth=parseFloat(y),u.beginPath(),u.moveTo(g,_),u.lineTo(g+m,_+p),u.stroke())}function a(h,d){if(h.nodeType===Node.COMMENT_NODE||h.nodeName==="SCRIPT"||h.style&&h.style.display==="none")return;let g=0,_=0,m=0,p=0;if(h.nodeType===Node.TEXT_NODE){e.selectNode(h);const v=e.getBoundingClientRect();g=v.left-l.left-.5,_=v.top-l.top-.5,m=v.width,p=v.height,r(d,g,_,h.nodeValue.trim())}else if(h instanceof HTMLCanvasElement){const v=h.getBoundingClientRect();g=v.left-l.left-.5,_=v.top-l.top-.5,u.save();const x=window.devicePixelRatio;u.scale(1/x,1/x),u.drawImage(h,g,_),u.restore()}else if(h instanceof HTMLImageElement){const v=h.getBoundingClientRect();g=v.left-l.left-.5,_=v.top-l.top-.5,m=v.width,p=v.height,u.drawImage(h,g,_,m,p)}else{const v=h.getBoundingClientRect();g=v.left-l.left-.5,_=v.top-l.top-.5,m=v.width,p=v.height,d=window.getComputedStyle(h),s(g,_,m,p,parseFloat(d.borderRadius));const x=d.backgroundColor;x!=="transparent"&&x!=="rgba(0, 0, 0, 0)"&&(u.fillStyle=x,u.fill());const A=["borderTop","borderLeft","borderBottom","borderRight"];let C=!0,M=null;for(const R of A){if(M!==null&&(C=d[R+"Width"]===d[M+"Width"]&&d[R+"Color"]===d[M+"Color"]&&d[R+"Style"]===d[M+"Style"]),C===!1)break;M=R}if(C===!0){const R=parseFloat(d.borderTopWidth);d.borderTopWidth!=="0px"&&d.borderTopStyle!=="none"&&d.borderTopColor!=="transparent"&&d.borderTopColor!=="rgba(0, 0, 0, 0)"&&(u.strokeStyle=d.borderTopColor,u.lineWidth=R,u.stroke())}else o(d,"borderTop",g,_,m,0),o(d,"borderLeft",g,_,0,p),o(d,"borderBottom",g,_+p,m,0),o(d,"borderRight",g+m,_,0,p);if(h instanceof HTMLInputElement){let R=d.accentColor;(R===void 0||R==="auto")&&(R=d.color),n.set(R);const w=Math.sqrt(.299*n.r**2+.587*n.g**2+.114*n.b**2)<.5?"white":"#111111";if(h.type==="radio"&&(s(g,_,m,p,p),u.fillStyle="white",u.strokeStyle=R,u.lineWidth=1,u.fill(),u.stroke(),h.checked&&(s(g+2,_+2,m-4,p-4,p),u.fillStyle=R,u.strokeStyle=w,u.lineWidth=2,u.fill(),u.stroke())),h.type==="checkbox"&&(s(g,_,m,p,2),u.fillStyle=h.checked?R:"white",u.strokeStyle=h.checked?w:R,u.lineWidth=1,u.stroke(),u.fill(),h.checked)){const T=u.textAlign;u.textAlign="center";const V={color:w,fontFamily:d.fontFamily,fontSize:p+"px",fontWeight:"bold"};r(V,g+m/2,_,"✔"),u.textAlign=T}if(h.type==="range"){const[T,V,B]=["min","max","value"].map(Z=>parseFloat(h[Z])),W=(B-T)/(V-T)*(m-p);s(g,_+p/4,m,p/2,p/4),u.fillStyle=w,u.strokeStyle=R,u.lineWidth=1,u.fill(),u.stroke(),s(g,_+p/4,W+p/2,p/2,p/4),u.fillStyle=R,u.fill(),s(g+W,_,p,p,p/2),u.fillStyle=R,u.fill()}(h.type==="color"||h.type==="text"||h.type==="number")&&(f.add({x:g,y:_,width:m,height:p}),r(d,g+parseInt(d.paddingLeft),_+parseInt(d.paddingTop),h.value),f.remove())}}const y=d.overflow==="auto"||d.overflow==="hidden";y&&f.add({x:g,y:_,width:m,height:p});for(let v=0;v<h.childNodes.length;v++)a(h.childNodes[v],d);y&&f.remove()}const l=t.getBoundingClientRect();let c=bg.get(t);c===void 0&&(c=document.createElement("canvas"),c.width=l.width,c.height=l.height,bg.set(t,c));const u=c.getContext("2d"),f=new i(u);return u.clearRect(0,0,c.width,c.height),a(t),c}function t4(t,e,n,i){const r={clientX:n*t.offsetWidth+t.offsetLeft,clientY:i*t.offsetHeight+t.offsetTop,view:t.ownerDocument.defaultView};window.dispatchEvent(new MouseEvent(e,r));const s=t.getBoundingClientRect();n=n*s.width+s.left,i=i*s.height+s.top;function o(a){if(a.nodeType!==Node.TEXT_NODE&&a.nodeType!==Node.COMMENT_NODE){const l=a.getBoundingClientRect();if(n>l.left&&n<l.right&&i>l.top&&i<l.bottom&&(a.dispatchEvent(new MouseEvent(e,r)),a instanceof HTMLInputElement&&a.type==="range"&&(e==="mousedown"||e==="click"))){const[c,u]=["min","max"].map(g=>parseFloat(a[g])),f=l.width,d=(n-l.x)/f;a.value=c+(u-c)*d,a.dispatchEvent(new InputEvent("input",{bubbles:!0}))}for(let c=0;c<a.childNodes.length;c++)o(a.childNodes[c])}}o(t)}const n4=new KF;n4.load("assets/Roboto-msdf.json");let ar,Tu=null,hp=!1,Fn,A1,rl;async function i4(t){}await i4();let ea,Br,zn,fp,Hh,Rg;const dp=new Ew;let Vh=!0;const r4=(t,e)=>{if(e){const n=zn.xr.getReferenceSpace(),i=zn.xr.getSession();let r=dp.getElapsedTime();if(Vh||(r=dp.oldTime),Vh&&an&&(an.rotation.y=r/2,r=dp.getElapsedTime()),hp===!1&&(i.requestReferenceSpace("viewer").then(function(s){i.requestHitTestSource({space:s}).then(function(o){Tu=o})}),i.addEventListener("end",function(){hp=!1,Tu=null}),hp=!0),Tu){const s=e.getHitTestResults(Tu);if(s.length){const o=s[0];ar.visible=!0,ar.matrix.fromArray(o.getPose(n).transform.matrix)}else ar.visible=!1}}zn.render(Br,ea)},s4=()=>{let t=!1;Br=new jP;const e=window.innerWidth/window.innerHeight;ea=new _n(75,e,.1,10),ea.position.set(0,1.6,3);const n=new ZL(16777215,1);Br.add(n);const i=new WL(16777215,12303359,3);i.position.set(.5,1,.25),Br.add(i),zn=new XP({antialias:!0,alpha:!0}),zn.setPixelRatio(window.devicePixelRatio),zn.setSize(window.innerWidth,window.innerHeight),zn.setAnimationLoop(r4),zn.xr.enabled=!0,document.body.appendChild(zn.domElement);const r=Qk.createButton(zn,{});r.style.backgroundColor="blue",document.body.appendChild(r);var s=new QL,o=new tI,a=new nI(o);s.load("assets/audios/background_sound.mp3",function(h){a.setBuffer(h),a.setLoop(!0),a.setVolume(1),a.play()});const l=new tF(ea,zn.domElement);l.target.set(0,1.6,0),l.update();let c=new ww;c.onProgress=function(h){h=="big_brain.glb"&&console.log("Loading "+h)};let u=new pF(c).setPath("assets/models/");const f=h=>{if(ar.visible){t==!1&&(an=u.load("big_brain.glb",o4),t=!0);let d=null;const g=h.target,_=a4(g);if(console.log(_),_.length>0){const p=_[0].object;g.userData.selected=p,d=p.parent,console.log("J'ai intercepté un object "+d.name)}d?(Fn!=null&&(Fn.scale.set(Fn.scale.x-.1,Fn.scale.y-.1,Fn.scale.z-.1),rl.visible=!1,Fn=null),A1=document.getElementById(d.name),rl=new QF(A1),rl.position.set(an.position.x+1,an.position.y+1,an.position.z+1),Br.add(rl),Vh=!1,d.scale.set(d.scale.x+.1,d.scale.y+.1,d.scale.z+.1),Fn=d):(Fn!=null&&(Fn.scale.set(Fn.scale.x-.1,Fn.scale.y-.1,Fn.scale.z-.1),Fn=null,rl.visible=!1),Vh=!0),g.userData.targetRayMode=h.data.targetRayMode}};fp=zn.xr.getController(0),fp.addEventListener("select",f),Br.add(fp),Hh=new jr,Br.add(Hh),ar=new fn(new qg(.15,.2,32).rotateX(-Math.PI/2),new ur),ar.matrixAutoUpdate=!1,ar.visible=!1,Br.add(ar),Rg=new fI,window.addEventListener("resize",l4,!1)};s4();let an;function o4(t){if(an=t.scene,an!=null)return console.log("Model loaded:  "+an),an.scale.set(.1,.1,.1),ar.matrix.decompose(an.position,an.quaternion,an.scale),Hh.add(an),console.log(an),an;console.log("Load FAILED.  ")}function a4(t){return t.updateMatrixWorld(),Rg.setFromXRController(t),Rg.intersectObjects(Hh.children,!0)}function l4(){ea.aspect=window.innerWidth/window.innerHeight,ea.updateProjectionMatrix(),zn.setSize(window.innerWidth,window.innerHeight)}
//# sourceMappingURL=index-BvLqNOOD.js.map
