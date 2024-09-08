import"./hoisted.CmkSwYHY.js";function Kd(ye,Y){for(var f=0;f<Y.length;f++){const te=Y[f];if(typeof te!="string"&&!Array.isArray(te)){for(const pe in te)if(pe!=="default"&&!(pe in ye)){const at=Object.getOwnPropertyDescriptor(te,pe);at&&Object.defineProperty(ye,pe,at.get?at:{enumerable:!0,get:()=>te[pe]})}}}return Object.freeze(Object.defineProperty(ye,Symbol.toStringTag,{value:"Module"}))}var $d=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ep(ye){return ye&&ye.__esModule&&Object.prototype.hasOwnProperty.call(ye,"default")?ye.default:ye}var wo={exports:{}};/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */(function(ye,Y){(function(f,te){te(Y)})($d,function(f){const te="134",Hs="300 es";class an{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const n=t.slice(0);for(let i=0,r=n.length;i<r;i++)n[i].call(this,e);e.target=null}}}let Mr=1234567;const Tn=Math.PI/180,Fi=180/Math.PI,nt=[];for(let s=0;s<256;s++)nt[s]=(s<16?"0":"")+s.toString(16);const wh=typeof crypto<"u"&&"randomUUID"in crypto;function mt(){if(wh)return crypto.randomUUID().toUpperCase();const s=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(nt[255&s]+nt[s>>8&255]+nt[s>>16&255]+nt[s>>24&255]+"-"+nt[255&e]+nt[e>>8&255]+"-"+nt[e>>16&15|64]+nt[e>>24&255]+"-"+nt[63&t|128]+nt[t>>8&255]+"-"+nt[t>>16&255]+nt[t>>24&255]+nt[255&n]+nt[n>>8&255]+nt[n>>16&255]+nt[n>>24&255]).toUpperCase()}function it(s,e,t){return Math.max(e,Math.min(t,s))}function Gs(s,e){return(s%e+e)%e}function Oi(s,e,t){return(1-t)*s+t*e}function ks(s){return(s&s-1)==0&&s!==0}function bo(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function So(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}var To=Object.freeze({__proto__:null,DEG2RAD:Tn,RAD2DEG:Fi,generateUUID:mt,clamp:it,euclideanModulo:Gs,mapLinear:function(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)},inverseLerp:function(s,e,t){return s!==e?(t-s)/(e-s):0},lerp:Oi,damp:function(s,e,t,n){return Oi(s,e,1-Math.exp(-t*n))},pingpong:function(s,e=1){return e-Math.abs(Gs(s,2*e)-e)},smoothstep:function(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e))*s*(3-2*s)},smootherstep:function(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e))*s*s*(s*(6*s-15)+10)},randInt:function(s,e){return s+Math.floor(Math.random()*(e-s+1))},randFloat:function(s,e){return s+Math.random()*(e-s)},randFloatSpread:function(s){return s*(.5-Math.random())},seededRandom:function(s){return s!==void 0&&(Mr=s%2147483647),Mr=16807*Mr%2147483647,(Mr-1)/2147483646},degToRad:function(s){return s*Tn},radToDeg:function(s){return s*Fi},isPowerOfTwo:ks,ceilPowerOfTwo:bo,floorPowerOfTwo:So,setQuaternionFromProperEuler:function(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*m,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*m,o*c);break;case"ZYZ":s.set(l*m,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}});class X{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}X.prototype.isVector2=!0;class qe{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],v=i[0],y=i[3],g=i[6],_=i[1],x=i[4],M=i[7],b=i[2],T=i[5],R=i[8];return r[0]=a*v+o*_+l*b,r[3]=a*y+o*x+l*T,r[6]=a*g+o*M+l*R,r[1]=c*v+h*_+u*b,r[4]=c*y+h*x+u*T,r[7]=c*g+h*M+u*R,r[2]=d*v+p*_+m*b,r[5]=d*y+p*x+m*T,r[8]=d*g+p*M+m*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,m=t*u+n*d+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*r-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],a=i[3],o=i[6],l=i[1],c=i[4],h=i[7];return i[0]=t*r+n*l,i[3]=t*a+n*c,i[6]=t*o+n*h,i[1]=-n*r+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Eo(s){if(s.length===0)return-1/0;let e=s[0];for(let t=1,n=s.length;t<n;++t)s[t]>e&&(e=s[t]);return e}qe.prototype.isMatrix3=!0;const bh={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function ti(s,e){return new bh[s](e)}function wr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ao(s,e=0){let t=3735928559^e,n=1103547991^e;for(let i,r=0;r<s.length;r++)i=s.charCodeAt(r),t=Math.imul(t^i,2654435761),n=Math.imul(n^i,1597334677);return t=Math.imul(t^t>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),4294967296*(2097151&n)+(t>>>0)}let ni;class En{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ni===void 0&&(ni=wr("canvas")),ni.width=e.width,ni.height=e.height;const n=ni.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ni}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let Sh=0;class Xe extends an{constructor(e=Xe.DEFAULT_IMAGE,t=Xe.DEFAULT_MAPPING,n=1001,i=1001,r=1006,a=1008,o=1023,l=1009,c=1,h=3e3){super(),Object.defineProperty(this,"id",{value:Sh++}),this.uuid=mt(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new X(0,0),this.repeat=new X(1,1),this.center=new X(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=mt()),!t&&e.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Vs(i[a].image)):r.push(Vs(i[a]))}else r=Vs(i);e.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}function Vs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?En.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}Xe.DEFAULT_IMAGE=void 0,Xe.DEFAULT_MAPPING=300,Xe.prototype.isTexture=!0;class Pe{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],m=l[9],v=l[2],y=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-y)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+y)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(p+1)/2,b=(g+1)/2,T=(h+d)/4,R=(u+v)/4,C=(m+y)/4;return x>M&&x>b?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=R/n):M>b?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=T/i,r=C/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=R/r,i=C/r),this.set(n,i,r,t),this}let _=Math.sqrt((y-m)*(y-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(y-m)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}Pe.prototype.isVector4=!0;class Tt extends an{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Pe(0,0,e,t),this.scissorTest=!1,this.viewport=new Pe(0,0,e,t),this.texture=new Xe(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0&&n.generateMipmaps,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:1006,this.depthBuffer=n.depthBuffer===void 0||n.depthBuffer,this.stencilBuffer=n.stencilBuffer!==void 0&&n.stencilBuffer,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){this.width===e&&this.height===t&&this.depth===n||(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Tt.prototype.isWebGLRenderTarget=!0;class Lo extends Tt{constructor(e,t,n){super(e,t);const i=this.texture;this.texture=[];for(let r=0;r<n;r++)this.texture[r]=i.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}Lo.prototype.isWebGLMultipleRenderTargets=!0;class Ws extends Tt{constructor(e,t,n){super(e,t,n),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}Ws.prototype.isWebGLMultisampleRenderTarget=!0;class rt{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],p=r[a+1],m=r[a+2],v=r[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=m,void(e[t+3]=v);if(u!==v||l!==d||c!==p||h!==m){let y=1-o;const g=l*d+c*p+h*m+u*v,_=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const b=Math.sqrt(x),T=Math.atan2(b,g*_);y=Math.sin(y*T)/b,o=Math.sin(o*T)/b}const M=o*_;if(l=l*y+d*M,c=c*y+p*M,h=h*y+m*M,u=u*y+v*M,y===1-o){const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],p=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*p-c*d,e[t+1]=l*m+h*d+c*u-o*p,e[t+2]=c*m+h*p+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!e||!e.isEuler)throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),p=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}rt.prototype.isQuaternion=!0;class w{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Ro.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ro.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,h=l*n+o*t-r*i,u=l*i+r*n-a*t,d=-r*t-a*n-o*i;return this.x=c*l+d*-r+h*-o-u*-a,this.y=h*l+d*-a+u*-r-c*-o,this.z=u*l+d*-o+c*-a-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return js.copy(this).projectOnVector(e),this.sub(js)}reflect(e){return this.sub(js.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}w.prototype.isVector3=!0;const js=new w,Ro=new rt;class ft{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),qs.copy(t.boundingBox),qs.applyMatrix4(e.matrixWorld),this.union(qs));const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hi),br.subVectors(this.max,Hi),ii.subVectors(e.a,Hi),ri.subVectors(e.b,Hi),si.subVectors(e.c,Hi),on.subVectors(ri,ii),ln.subVectors(si,ri),An.subVectors(ii,si);let t=[0,-on.z,on.y,0,-ln.z,ln.y,0,-An.z,An.y,on.z,0,-on.x,ln.z,0,-ln.x,An.z,0,-An.x,-on.y,on.x,0,-ln.y,ln.x,0,-An.y,An.x,0];return!!Xs(t,ii,ri,si,br)&&(t=[1,0,0,0,1,0,0,0,1],!!Xs(t,ii,ri,si,br)&&(Sr.crossVectors(on,ln),t=[Sr.x,Sr.y,Sr.z],Xs(t,ii,ri,si,br)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ui.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=.5*this.getSize(Ui).length(),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jt)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}ft.prototype.isBox3=!0;const jt=[new w,new w,new w,new w,new w,new w,new w,new w],Ui=new w,qs=new ft,ii=new w,ri=new w,si=new w,on=new w,ln=new w,An=new w,Hi=new w,br=new w,Sr=new w,Ln=new w;function Xs(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ln.fromArray(s,r);const o=i.x*Math.abs(Ln.x)+i.y*Math.abs(Ln.y)+i.z*Math.abs(Ln.z),l=e.dot(Ln),c=t.dot(Ln),h=n.dot(Ln);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Th=new ft,Co=new w,Ys=new w,Js=new w;class cn{constructor(e=new w,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Th.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Js.subVectors(e,this.center);const t=Js.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=.5*(n-this.radius);this.center.add(Js.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return Ys.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Co.copy(e.center).add(Ys)),this.expandByPoint(Co.copy(e.center).sub(Ys)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qt=new w,Zs=new w,Tr=new w,hn=new w,Qs=new w,Er=new w,Ks=new w;class un{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qt.copy(this.direction).multiplyScalar(t).add(this.origin),qt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Zs.copy(e).add(t).multiplyScalar(.5),Tr.copy(t).sub(e).normalize(),hn.copy(this.origin).sub(Zs);const r=.5*e.distanceTo(t),a=-this.direction.dot(Tr),o=hn.dot(this.direction),l=-hn.dot(Tr),c=hn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Tr).multiplyScalar(d).add(Zs),p}intersectSphere(e,t){qt.subVectors(e.center,this.origin);const n=qt.dot(this.direction),i=qt.dot(qt)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i?null:((r>n||n!=n)&&(n=r),(a<i||i!=i)&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,qt)!==null}intersectTriangle(e,t,n,i,r){Qs.subVectors(t,e),Er.subVectors(n,e),Ks.crossVectors(Qs,Er);let a,o=this.direction.dot(Ks);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}hn.subVectors(this.origin,e);const l=a*this.direction.dot(Er.crossVectors(hn,Er));if(l<0)return null;const c=a*this.direction.dot(Qs.cross(hn));if(c<0||l+c>o)return null;const h=-a*hn.dot(Ks);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,a,o,l,c,h,u,d,p,m,v,y){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=m,g[11]=v,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ai.setFromMatrixColumn(e,0).length(),r=1/ai.setFromMatrixColumn(e,1).length(),a=1/ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,p=a*u,m=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+m*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,m=c*h,v=c*u;t[0]=d+v*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,m=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*u,m=o*h,v=o*u;t[0]=l*h,t[4]=m*c-p,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=m*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+m,t[10]=d-v*u}else if(e.order==="XZY"){const d=a*l,p=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eh,e,Ah)}lookAt(e,t,n){const i=this.elements;return gt.subVectors(e,t),gt.lengthSq()===0&&(gt.z=1),gt.normalize(),dn.crossVectors(n,gt),dn.lengthSq()===0&&(Math.abs(n.z)===1?gt.x+=1e-4:gt.z+=1e-4,gt.normalize(),dn.crossVectors(n,gt)),dn.normalize(),Ar.crossVectors(gt,dn),i[0]=dn.x,i[4]=Ar.x,i[8]=gt.x,i[1]=dn.y,i[5]=Ar.y,i[9]=gt.y,i[2]=dn.z,i[6]=Ar.z,i[10]=gt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],v=n[6],y=n[10],g=n[14],_=n[3],x=n[7],M=n[11],b=n[15],T=i[0],R=i[4],C=i[8],N=i[12],I=i[1],z=i[5],$=i[9],V=i[13],F=i[2],j=i[6],ie=i[10],ae=i[14],ce=i[3],me=i[7],fe=i[11],J=i[15];return r[0]=a*T+o*I+l*F+c*ce,r[4]=a*R+o*z+l*j+c*me,r[8]=a*C+o*$+l*ie+c*fe,r[12]=a*N+o*V+l*ae+c*J,r[1]=h*T+u*I+d*F+p*ce,r[5]=h*R+u*z+d*j+p*me,r[9]=h*C+u*$+d*ie+p*fe,r[13]=h*N+u*V+d*ae+p*J,r[2]=m*T+v*I+y*F+g*ce,r[6]=m*R+v*z+y*j+g*me,r[10]=m*C+v*$+y*ie+g*fe,r[14]=m*N+v*V+y*ae+g*J,r[3]=_*T+x*I+M*F+b*ce,r[7]=_*R+x*z+M*j+b*me,r[11]=_*C+x*$+M*ie+b*fe,r[15]=_*N+x*V+M*ae+b*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+r*a*d-i*a*p+i*c*h-r*l*h)+e[11]*(+t*c*u-t*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+e[15]*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],m=e[12],v=e[13],y=e[14],g=e[15],_=u*y*c-v*d*c+v*l*p-o*y*p-u*l*g+o*d*g,x=m*d*c-h*y*c-m*l*p+a*y*p+h*l*g-a*d*g,M=h*v*c-m*u*c+m*o*p-a*v*p-h*o*g+a*u*g,b=m*u*l-h*v*l-m*o*d+a*v*d+h*o*y-a*u*y,T=t*_+n*x+i*M+r*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=_*R,e[1]=(v*d*r-u*y*r-v*i*p+n*y*p+u*i*g-n*d*g)*R,e[2]=(o*y*r-v*l*r+v*i*c-n*y*c-o*i*g+n*l*g)*R,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*p-n*l*p)*R,e[4]=x*R,e[5]=(h*y*r-m*d*r+m*i*p-t*y*p-h*i*g+t*d*g)*R,e[6]=(m*l*r-a*y*r-m*i*c+t*y*c+a*i*g-t*l*g)*R,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*p+t*l*p)*R,e[8]=M*R,e[9]=(m*u*r-h*v*r-m*n*p+t*v*p+h*n*g-t*u*g)*R,e[10]=(a*v*r-m*o*r+m*n*c-t*v*c-a*n*g+t*o*g)*R,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*p-t*o*p)*R,e[12]=b*R,e[13]=(h*v*i-m*u*i+m*n*d-t*v*d-h*n*y+t*u*y)*R,e[14]=(m*o*i-a*v*i-m*n*l+t*v*l+a*n*y-t*o*y)*R,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,m=r*u,v=a*h,y=a*u,g=o*u,_=l*c,x=l*h,M=l*u,b=n.x,T=n.y,R=n.z;return i[0]=(1-(v+g))*b,i[1]=(p+M)*b,i[2]=(m-x)*b,i[3]=0,i[4]=(p-M)*T,i[5]=(1-(d+g))*T,i[6]=(y+_)*T,i[7]=0,i[8]=(m+x)*R,i[9]=(y-_)*R,i[10]=(1-(d+v))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ai.set(i[0],i[1],i[2]).length();const a=ai.set(i[4],i[5],i[6]).length(),o=ai.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Et.copy(this);const l=1/r,c=1/a,h=1/o;return Et.elements[0]*=l,Et.elements[1]*=l,Et.elements[2]*=l,Et.elements[4]*=c,Et.elements[5]*=c,Et.elements[6]*=c,Et.elements[8]*=h,Et.elements[9]*=h,Et.elements[10]*=h,t.setFromRotationMatrix(Et),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*r/(t-e),c=2*r/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(a+r)/(a-r),p=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,a){const o=this.elements,l=1/(t-e),c=1/(n-i),h=1/(a-r),u=(t+e)*l,d=(n+i)*c,p=(a+r)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}ue.prototype.isMatrix4=!0;const ai=new w,Et=new ue,Eh=new w(0,0,0),Ah=new w(1,1,1),dn=new w,Ar=new w,gt=new w,Po=new ue,Io=new rt;class Rn{constructor(e=0,t=0,n=0,i=Rn.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Po.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Po,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Io.setFromEuler(this),this.setFromQuaternion(Io,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new w(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Rn.prototype.isEuler=!0,Rn.DefaultOrder="XYZ",Rn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class $s{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}}let Lh=0;const Do=new w,oi=new rt,Xt=new ue,Lr=new w,Gi=new w,Rh=new w,Ch=new rt,No=new w(1,0,0),zo=new w(0,1,0),Bo=new w(0,0,1),Ph={type:"added"},Fo={type:"removed"};class Te extends an{constructor(){super(),Object.defineProperty(this,"id",{value:Lh++}),this.uuid=mt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DefaultUp.clone();const e=new w,t=new Rn,n=new rt,i=new w(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ue},normalMatrix:{value:new qe}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Te.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new $s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(No,e)}rotateY(e){return this.rotateOnAxis(zo,e)}rotateZ(e){return this.rotateOnAxis(Bo,e)}translateOnAxis(e,t){return Do.copy(e).applyQuaternion(this.quaternion),this.position.add(Do.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(No,e)}translateY(e){return this.translateOnAxis(zo,e)}translateZ(e){return this.translateOnAxis(Bo,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Xt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lr.copy(e):Lr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xt.lookAt(Gi,Lr,this.up):Xt.lookAt(Lr,Gi,this.up),this.quaternion.setFromRotationMatrix(Xt),i&&(Xt.extractRotation(i.matrixWorld),oi.setFromRotationMatrix(Xt),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ph)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Fo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Xt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,e,Rh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,Ch,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Te.DefaultUp=new w(0,1,0),Te.DefaultMatrixAutoUpdate=!0,Te.prototype.isObject3D=!0;const At=new w,Yt=new w,ea=new w,Jt=new w,li=new w,ci=new w,Oo=new w,ta=new w,na=new w,ia=new w;class ke{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),At.subVectors(e,t),i.cross(At);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){At.subVectors(i,t),Yt.subVectors(n,t),ea.subVectors(e,t);const a=At.dot(At),o=At.dot(Yt),l=At.dot(ea),c=Yt.dot(Yt),h=Yt.dot(ea),u=a*c-o*o;if(u===0)return r.set(-2,-1,-1);const d=1/u,p=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-p-m,m,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Jt),Jt.x>=0&&Jt.y>=0&&Jt.x+Jt.y<=1}static getUV(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Jt),l.set(0,0),l.addScaledVector(r,Jt.x),l.addScaledVector(a,Jt.y),l.addScaledVector(o,Jt.z),l}static isFrontFacing(e,t,n,i){return At.subVectors(n,t),Yt.subVectors(e,t),At.cross(Yt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return At.subVectors(this.c,this.b),Yt.subVectors(this.a,this.b),.5*At.cross(Yt).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ke.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ke.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ke.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ke.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ke.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;li.subVectors(i,n),ci.subVectors(r,n),ta.subVectors(e,n);const l=li.dot(ta),c=ci.dot(ta);if(l<=0&&c<=0)return t.copy(n);na.subVectors(e,i);const h=li.dot(na),u=ci.dot(na);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(li,a);ia.subVectors(e,r);const p=li.dot(ia),m=ci.dot(ia);if(m>=0&&p<=m)return t.copy(r);const v=p*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(ci,o);const y=h*m-p*u;if(y<=0&&u-h>=0&&p-m>=0)return Oo.subVectors(r,i),o=(u-h)/(u-h+(p-m)),t.copy(i).addScaledVector(Oo,o);const g=1/(y+v+d);return a=v*g,o=d*g,t.copy(n).addScaledVector(li,a).addScaledVector(ci,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ih=0;class Ye extends an{constructor(){super(),Object.defineProperty(this,"id",{value:Ih++}),this.uuid=mt(),this.name="",this.type="Material",this.fog=!0,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.format=1023,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===1;continue}const i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.")}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==1023&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}Ye.prototype.isMaterial=!0;const Uo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lt={h:0,s:0,l:0},Rr={h:0,s:0,l:0};function ra(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+6*(e-s)*t:t<.5?e:t<2/3?s+6*(e-s)*(2/3-t):s}function sa(s){return s<.04045?.0773993808*s:Math.pow(.9478672986*s+.0521327014,2.4)}function aa(s){return s<.0031308?12.92*s:1.055*Math.pow(s,.41666)-.055}class se{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=Gs(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,r=2*n-i;this.r=ra(r,i,e+1/3),this.g=ra(r,i,e),this.b=ra(r,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const r=n[1],a=n[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(o,l,c)}}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=Uo[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=sa(e.r),this.g=sa(e.g),this.b=sa(e.b),this}copyLinearToSRGB(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,i=this.b,r=Math.max(t,n,i),a=Math.min(t,n,i);let o,l;const c=(a+r)/2;if(a===r)o=0,l=0;else{const h=r-a;switch(l=c<=.5?h/(r+a):h/(2-r-a),r){case t:o=(n-i)/h+(n<i?6:0);break;case n:o=(i-t)/h+2;break;case i:o=(t-n)/h+4}o/=6}return e.h=o,e.s=l,e.l=c,e}getStyle(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"}offsetHSL(e,t,n){return this.getHSL(Lt),Lt.h+=e,Lt.s+=t,Lt.l+=n,this.setHSL(Lt.h,Lt.s,Lt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Lt),e.getHSL(Rr);const n=Oi(Lt.h,Rr.h,t),i=Oi(Lt.s,Rr.s,t),r=Oi(Lt.l,Rr.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}se.NAMES=Uo,se.prototype.isColor=!0,se.prototype.r=1,se.prototype.g=1,se.prototype.b=1;class Zt extends Ye{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Zt.prototype.isMeshBasicMaterial=!0;const ze=new w,Cr=new X;class Ae{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new se),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new X),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new w),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new Pe),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix3(e),this.setXY(t,Cr.x,Cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ze.fromBufferAttribute(this,t),ze.applyMatrix3(e),this.setXYZ(t,ze.x,ze.y,ze.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ze.x=this.getX(t),ze.y=this.getY(t),ze.z=this.getZ(t),ze.applyMatrix4(e),this.setXYZ(t,ze.x,ze.y,ze.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ze.x=this.getX(t),ze.y=this.getY(t),ze.z=this.getZ(t),ze.applyNormalMatrix(e),this.setXYZ(t,ze.x,ze.y,ze.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ze.x=this.getX(t),ze.y=this.getY(t),ze.z=this.getZ(t),ze.transformDirection(e),this.setXYZ(t,ze.x,ze.y,ze.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),this.updateRange.offset===0&&this.updateRange.count===-1||(e.updateRange=this.updateRange),e}}Ae.prototype.isBufferAttribute=!0;class Ho extends Ae{constructor(e,t,n){super(new Int8Array(e),t,n)}}class Go extends Ae{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class ko extends Ae{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class Vo extends Ae{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Pr extends Ae{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wo extends Ae{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Ir extends Ae{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class jo extends Ae{constructor(e,t,n){super(new Uint16Array(e),t,n)}}jo.prototype.isFloat16BufferAttribute=!0;class he extends Ae{constructor(e,t,n){super(new Float32Array(e),t,n)}}class qo extends Ae{constructor(e,t,n){super(new Float64Array(e),t,n)}}let Dh=0;const Mt=new ue,oa=new Te,hi=new w,vt=new ft,ki=new ft,Je=new w;class ve extends an{constructor(){super(),Object.defineProperty(this,"id",{value:Dh++}),this.uuid=mt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eo(e)>65535?Ir:Pr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mt.makeRotationFromQuaternion(e),this.applyMatrix4(Mt),this}rotateX(e){return Mt.makeRotationX(e),this.applyMatrix4(Mt),this}rotateY(e){return Mt.makeRotationY(e),this.applyMatrix4(Mt),this}rotateZ(e){return Mt.makeRotationZ(e),this.applyMatrix4(Mt),this}translate(e,t,n){return Mt.makeTranslation(e,t,n),this.applyMatrix4(Mt),this}scale(e,t,n){return Mt.makeScale(e,t,n),this.applyMatrix4(Mt),this}lookAt(e){return oa.lookAt(e),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new he(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ft);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];vt.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,vt.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,vt.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(vt.min),this.boundingBox.expandByPoint(vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new w,1/0);if(e){const n=this.boundingSphere.center;if(vt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ki.setFromBufferAttribute(o),this.morphTargetsRelative?(Je.addVectors(vt.min,ki.min),vt.expandByPoint(Je),Je.addVectors(vt.max,ki.max),vt.expandByPoint(Je)):(vt.expandByPoint(ki.min),vt.expandByPoint(ki.max))}vt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Je.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Je));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Je.fromBufferAttribute(o,c),l&&(hi.fromBufferAttribute(e,c),Je.add(hi)),i=Math.max(i,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new Ae(new Float32Array(4*o),4));const l=t.tangent.array,c=[],h=[];for(let I=0;I<o;I++)c[I]=new w,h[I]=new w;const u=new w,d=new w,p=new w,m=new X,v=new X,y=new X,g=new w,_=new w;function x(I,z,$){u.fromArray(i,3*I),d.fromArray(i,3*z),p.fromArray(i,3*$),m.fromArray(a,2*I),v.fromArray(a,2*z),y.fromArray(a,2*$),d.sub(u),p.sub(u),v.sub(m),y.sub(m);const V=1/(v.x*y.y-y.x*v.y);isFinite(V)&&(g.copy(d).multiplyScalar(y.y).addScaledVector(p,-v.y).multiplyScalar(V),_.copy(p).multiplyScalar(v.x).addScaledVector(d,-y.x).multiplyScalar(V),c[I].add(g),c[z].add(g),c[$].add(g),h[I].add(_),h[z].add(_),h[$].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let I=0,z=M.length;I<z;++I){const $=M[I],V=$.start;for(let F=V,j=V+$.count;F<j;F+=3)x(n[F+0],n[F+1],n[F+2])}const b=new w,T=new w,R=new w,C=new w;function N(I){R.fromArray(r,3*I),C.copy(R);const z=c[I];b.copy(z),b.sub(R.multiplyScalar(R.dot(z))).normalize(),T.crossVectors(C,z);const $=T.dot(h[I])<0?-1:1;l[4*I]=b.x,l[4*I+1]=b.y,l[4*I+2]=b.z,l[4*I+3]=$}for(let I=0,z=M.length;I<z;++I){const $=M[I],V=$.start;for(let F=V,j=V+$.count;F<j;F+=3)N(n[F+0]),N(n[F+1]),N(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ae(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new w,r=new w,a=new w,o=new w,l=new w,c=new w,h=new w,u=new w;if(e)for(let d=0,p=e.count;d<p;d+=3){const m=e.getX(d+0),v=e.getX(d+1),y=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,y),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,y),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!e||!e.isBufferGeometry)return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const r=n[i].array,a=e.attributes[i],o=a.array,l=a.itemSize*t,c=Math.min(o.length,r.length-l);for(let h=0,u=l;h<c;h++,u++)r[u]=o[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Je.fromBufferAttribute(e,t),Je.normalize(),e.setXYZ(t,Je.x,Je.y,Je.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,m=0;for(let v=0,y=l.length;v<y;v++){p=o.isInterleavedBufferAttribute?l[v]*o.data.stride+o.offset:l[v]*h;for(let g=0;g<h;g++)d[m++]=c[p++]}return new Ae(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ve,n=this.index.array,i=this.attributes;for(const o in i){const l=e(i[o],n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}ve.prototype.isBufferGeometry=!0;const Xo=new ue,ui=new un,la=new cn,pn=new w,mn=new w,fn=new w,ca=new w,ha=new w,ua=new w,Dr=new w,Nr=new w,zr=new w,Br=new X,Fr=new X,Or=new X,da=new w,Ur=new w;class je extends Te{constructor(e=new ve,t=new Zt){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(r),e.ray.intersectsSphere(la)===!1)||(Xo.copy(r).invert(),ui.copy(e.ray).applyMatrix4(Xo),n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,p=n.groups,m=n.drawRange;if(o!==null)if(Array.isArray(i))for(let v=0,y=p.length;v<y;v++){const g=p[v],_=i[g.materialIndex];for(let x=Math.max(g.start,m.start),M=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));x<M;x+=3){const b=o.getX(x),T=o.getX(x+1),R=o.getX(x+2);a=Hr(this,_,e,ui,l,c,h,u,d,b,T,R),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else for(let v=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);v<y;v+=3){const g=o.getX(v),_=o.getX(v+1),x=o.getX(v+2);a=Hr(this,i,e,ui,l,c,h,u,d,g,_,x),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}else if(l!==void 0)if(Array.isArray(i))for(let v=0,y=p.length;v<y;v++){const g=p[v],_=i[g.materialIndex];for(let x=Math.max(g.start,m.start),M=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));x<M;x+=3)a=Hr(this,_,e,ui,l,c,h,u,d,x,x+1,x+2),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=g.materialIndex,t.push(a))}else for(let v=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);v<y;v+=3)a=Hr(this,i,e,ui,l,c,h,u,d,v,v+1,v+2),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}function Hr(s,e,t,n,i,r,a,o,l,c,h,u){pn.fromBufferAttribute(i,c),mn.fromBufferAttribute(i,h),fn.fromBufferAttribute(i,u);const d=s.morphTargetInfluences;if(r&&d){Dr.set(0,0,0),Nr.set(0,0,0),zr.set(0,0,0);for(let m=0,v=r.length;m<v;m++){const y=d[m],g=r[m];y!==0&&(ca.fromBufferAttribute(g,c),ha.fromBufferAttribute(g,h),ua.fromBufferAttribute(g,u),a?(Dr.addScaledVector(ca,y),Nr.addScaledVector(ha,y),zr.addScaledVector(ua,y)):(Dr.addScaledVector(ca.sub(pn),y),Nr.addScaledVector(ha.sub(mn),y),zr.addScaledVector(ua.sub(fn),y)))}pn.add(Dr),mn.add(Nr),fn.add(zr)}s.isSkinnedMesh&&(s.boneTransform(c,pn),s.boneTransform(h,mn),s.boneTransform(u,fn));const p=function(m,v,y,g,_,x,M,b){let T;if(T=v.side===1?g.intersectTriangle(M,x,_,!0,b):g.intersectTriangle(_,x,M,v.side!==2,b),T===null)return null;Ur.copy(b),Ur.applyMatrix4(m.matrixWorld);const R=y.ray.origin.distanceTo(Ur);return R<y.near||R>y.far?null:{distance:R,point:Ur.clone(),object:m}}(s,e,t,n,pn,mn,fn,da);if(p){o&&(Br.fromBufferAttribute(o,c),Fr.fromBufferAttribute(o,h),Or.fromBufferAttribute(o,u),p.uv=ke.getUV(da,pn,mn,fn,Br,Fr,Or,new X)),l&&(Br.fromBufferAttribute(l,c),Fr.fromBufferAttribute(l,h),Or.fromBufferAttribute(l,u),p.uv2=ke.getUV(da,pn,mn,fn,Br,Fr,Or,new X));const m={a:c,b:h,c:u,normal:new w,materialIndex:0};ke.getNormal(pn,mn,fn,m.normal),p.face=m}return p}je.prototype.isMesh=!0;class Qt extends ve{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;function m(v,y,g,_,x,M,b,T,R,C,N){const I=M/R,z=b/C,$=M/2,V=b/2,F=T/2,j=R+1,ie=C+1;let ae=0,ce=0;const me=new w;for(let fe=0;fe<ie;fe++){const J=fe*z-V;for(let E=0;E<j;E++){const A=E*I-$;me[v]=A*_,me[y]=J*x,me[g]=F,c.push(me.x,me.y,me.z),me[v]=0,me[y]=0,me[g]=T>0?1:-1,h.push(me.x,me.y,me.z),u.push(E/R),u.push(1-fe/C),ae+=1}}for(let fe=0;fe<C;fe++)for(let J=0;J<R;J++){const E=d+J+j*fe,A=d+J+j*(fe+1),U=d+(J+1)+j*(fe+1),O=d+(J+1)+j*fe;l.push(E,A,O),l.push(A,U,O),ce+=6}o.addGroup(p,ce,N),p+=ce,d+=ae}m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(u,2))}static fromJSON(e){return new Qt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function di(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function lt(s){const e={};for(let t=0;t<s.length;t++){const n=di(s[t]);for(const i in n)e[i]=n[i]}return e}const Yo={clone:di,merge:lt};class Kt extends Ye{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=di(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}Kt.prototype.isShaderMaterial=!0;class Vi extends Te{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Vi.prototype.isCamera=!0;class Ze extends Vi{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=2*Fi*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(.5*Tn*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Fi*Math.atan(Math.tan(.5*Tn*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(.5*Tn*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}Ze.prototype.isPerspectiveCamera=!0;const pi=90;class Gr extends Te{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0)return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");this.renderTarget=n;const i=new Ze(pi,1,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new w(1,0,0)),this.add(i);const r=new Ze(pi,1,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new w(-1,0,0)),this.add(r);const a=new Ze(pi,1,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new w(0,1,0)),this.add(a);const o=new Ze(pi,1,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new w(0,-1,0)),this.add(o);const l=new Ze(pi,1,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new w(0,0,1)),this.add(l);const c=new Ze(pi,1,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new w(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,l,c]=this.children,h=e.xr.enabled,u=e.getRenderTarget();e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h}}class mi extends Xe{constructor(e,t,n,i,r,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:301,n,i,r,a,o,l,c,h),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}mi.prototype.isCubeTexture=!0;class kr extends Tt{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new mi(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=1023,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Qt(5,5,5),r=new Kt({name:"CubemapFromEquirect",uniforms:di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;const a=new je(i,r),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Gr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}kr.prototype.isWebGLCubeRenderTarget=!0;const pa=new w,Nh=new w,zh=new qe;class Bt{constructor(e=new w(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=pa.subVectors(n,t).cross(Nh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(pa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zh.getNormalMatrix(e),i=this.coplanarPoint(pa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Bt.prototype.isPlane=!0;const fi=new cn,Vr=new w;class Wi{constructor(e=new Bt,t=new Bt,n=new Bt,i=new Bt,r=new Bt,a=new Bt){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],p=n[9],m=n[10],v=n[11],y=n[12],g=n[13],_=n[14],x=n[15];return t[0].setComponents(o-i,u-l,v-d,x-y).normalize(),t[1].setComponents(o+i,u+l,v+d,x+y).normalize(),t[2].setComponents(o+r,u+c,v+p,x+g).normalize(),t[3].setComponents(o-r,u-c,v-p,x-g).normalize(),t[4].setComponents(o-a,u-h,v-m,x-_).normalize(),t[5].setComponents(o+a,u+h,v+m,x+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Vr.x=i.normal.x>0?e.max.x:e.min.x,Vr.y=i.normal.y>0?e.max.y:e.min.y,Vr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jo(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Bh(s,e){const t=e.isWebGL2,n=new WeakMap;return{get:function(i){return i.isInterleavedBufferAttribute&&(i=i.data),n.get(i)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);const r=n.get(i);r&&(s.deleteBuffer(r.buffer),n.delete(i))},update:function(i,r){if(i.isGLBufferAttribute){const o=n.get(i);return void((!o||o.version<i.version)&&n.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version}))}i.isInterleavedBufferAttribute&&(i=i.data);const a=n.get(i);a===void 0?n.set(i,function(o,l){const c=o.array,h=o.usage,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let d=5126;return c instanceof Float32Array?d=5126:c instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):c instanceof Uint16Array?o.isFloat16BufferAttribute?t?d=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):d=5123:c instanceof Int16Array?d=5122:c instanceof Uint32Array?d=5125:c instanceof Int32Array?d=5124:c instanceof Int8Array?d=5120:(c instanceof Uint8Array||c instanceof Uint8ClampedArray)&&(d=5121),{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version}}(i,r)):a.version<i.version&&(function(o,l,c){const h=l.array,u=l.updateRange;s.bindBuffer(c,o),u.count===-1?s.bufferSubData(c,0,h):(t?s.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count):s.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h.subarray(u.offset,u.offset+u.count)),u.count=-1)}(a.buffer,i,r),a.version=i.version)}}}class Cn extends ve{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],m=[],v=[],y=[];for(let g=0;g<h;g++){const _=g*d-a;for(let x=0;x<c;x++){const M=x*u-r;m.push(M,-_,0),v.push(0,0,1),y.push(x/o),y.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<o;_++){const x=_+c*g,M=_+c*(g+1),b=_+1+c*(g+1),T=_+1+c*g;p.push(x,M,T),p.push(M,b,T)}this.setIndex(p),this.setAttribute("position",new he(m,3)),this.setAttribute("normal",new he(v,3)),this.setAttribute("uv",new he(y,2))}static fromJSON(e){return new Cn(e.width,e.height,e.widthSegments,e.heightSegments)}}const Se={alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
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
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_vertex:`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
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
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
			vec3(		0, 1,		0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
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
}`,lights_fragment_begin:`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,normal_fragment_maps:`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,output_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
		vec3(	1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,	1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,	1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,uv_pars_fragment:`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uv_pars_vertex:`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uv_vertex:`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,uv2_pars_fragment:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uv2_pars_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uv2_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,distanceRGBA_frag:`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,meshmatcap_frag:`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,meshphong_frag:`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - clearcoat * Fcc ) + clearcoatSpecular * clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},re={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new qe},uv2Transform:{value:new qe},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new X(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new X(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new qe}}},Rt={basic:{uniforms:lt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:lt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.fog,re.lights,{emissive:{value:new se(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:lt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:lt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:lt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new se(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:lt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:lt([re.points,re.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:lt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:lt([re.common,re.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:lt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:lt([re.sprite,re.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},cube:{uniforms:lt([re.envmap,{opacity:{value:1}}]),vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:lt([re.common,re.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:lt([re.lights,re.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};function Fh(s,e,t,n,i){const r=new se(0);let a,o,l=0,c=null,h=0,u=null;function d(p,m){t.buffers.color.setClear(p.r,p.g,p.b,m,i)}return{getClearColor:function(){return r},setClearColor:function(p,m=1){r.set(p),l=m,d(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(r,l)},render:function(p,m){let v=!1,y=m.isScene===!0?m.background:null;y&&y.isTexture&&(y=e.get(y));const g=s.xr,_=g.getSession&&g.getSession();_&&_.environmentBlendMode==="additive"&&(y=null),y===null?d(r,l):y&&y.isColor&&(d(y,1),v=!0),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===306)?(o===void 0&&(o=new je(new Qt(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:di(Rt.cube.uniforms),vertexShader:Rt.cube.vertexShader,fragmentShader:Rt.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(x,M,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(o)),o.material.uniforms.envMap.value=y,o.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c===y&&h===y.version&&u===s.toneMapping||(o.material.needsUpdate=!0,c=y,h=y.version,u=s.toneMapping),p.unshift(o,o.geometry,o.material,0,0,null)):y&&y.isTexture&&(a===void 0&&(a=new je(new Cn(2,2),new Kt({name:"BackgroundMaterial",uniforms:di(Rt.background.uniforms),vertexShader:Rt.background.vertexShader,fragmentShader:Rt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),a.material.uniforms.uvTransform.value.copy(y.matrix),c===y&&h===y.version&&u===s.toneMapping||(a.material.needsUpdate=!0,c=y,h=y.version,u=s.toneMapping),p.unshift(a,a.geometry,a.material,0,0,null))}}}function Oh(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=d(null);let c=l;function h(M){return n.isWebGL2?s.bindVertexArray(M):r.bindVertexArrayOES(M)}function u(M){return n.isWebGL2?s.deleteVertexArray(M):r.deleteVertexArrayOES(M)}function d(M){const b=[],T=[],R=[];for(let C=0;C<i;C++)b[C]=0,T[C]=0,R[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:T,attributeDivisors:R,object:M,attributes:{},index:null}}function p(){const M=c.newAttributes;for(let b=0,T=M.length;b<T;b++)M[b]=0}function m(M){v(M,0)}function v(M,b){const T=c.newAttributes,R=c.enabledAttributes,C=c.attributeDivisors;T[M]=1,R[M]===0&&(s.enableVertexAttribArray(M),R[M]=1),C[M]!==b&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](M,b),C[M]=b)}function y(){const M=c.newAttributes,b=c.enabledAttributes;for(let T=0,R=b.length;T<R;T++)b[T]!==M[T]&&(s.disableVertexAttribArray(T),b[T]=0)}function g(M,b,T,R,C,N){n.isWebGL2!==!0||T!==5124&&T!==5125?s.vertexAttribPointer(M,b,T,R,C,N):s.vertexAttribIPointer(M,b,T,C,N)}function _(){x(),c!==l&&(c=l,h(c.object))}function x(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(M,b,T,R,C){let N=!1;if(a){const I=function(z,$,V){const F=V.wireframe===!0;let j=o[z.id];j===void 0&&(j={},o[z.id]=j);let ie=j[$.id];ie===void 0&&(ie={},j[$.id]=ie);let ae=ie[F];return ae===void 0&&(ae=d(n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()),ie[F]=ae),ae}(R,T,b);c!==I&&(c=I,h(c.object)),N=function(z,$){const V=c.attributes,F=z.attributes;let j=0;for(const ie in F){const ae=V[ie],ce=F[ie];if(ae===void 0||ae.attribute!==ce||ae.data!==ce.data)return!0;j++}return c.attributesNum!==j||c.index!==$}(R,C),N&&function(z,$){const V={},F=z.attributes;let j=0;for(const ie in F){const ae=F[ie],ce={};ce.attribute=ae,ae.data&&(ce.data=ae.data),V[ie]=ce,j++}c.attributes=V,c.attributesNum=j,c.index=$}(R,C)}else{const I=b.wireframe===!0;c.geometry===R.id&&c.program===T.id&&c.wireframe===I||(c.geometry=R.id,c.program=T.id,c.wireframe=I,N=!0)}M.isInstancedMesh===!0&&(N=!0),C!==null&&t.update(C,34963),N&&(function(I,z,$,V){if(n.isWebGL2===!1&&(I.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const F=V.attributes,j=$.getAttributes(),ie=z.defaultAttributeValues;for(const ae in j){const ce=j[ae];if(ce.location>=0){let me=F[ae];if(me===void 0&&(ae==="instanceMatrix"&&I.instanceMatrix&&(me=I.instanceMatrix),ae==="instanceColor"&&I.instanceColor&&(me=I.instanceColor)),me!==void 0){const fe=me.normalized,J=me.itemSize,E=t.get(me);if(E===void 0)continue;const A=E.buffer,U=E.type,O=E.bytesPerElement;if(me.isInterleavedBufferAttribute){const P=me.data,Z=P.stride,ee=me.offset;if(P&&P.isInstancedInterleavedBuffer){for(let B=0;B<ce.locationSize;B++)v(ce.location+B,P.meshPerAttribute);I.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let B=0;B<ce.locationSize;B++)m(ce.location+B);s.bindBuffer(34962,A);for(let B=0;B<ce.locationSize;B++)g(ce.location+B,J/ce.locationSize,U,fe,Z*O,(ee+J/ce.locationSize*B)*O)}else{if(me.isInstancedBufferAttribute){for(let P=0;P<ce.locationSize;P++)v(ce.location+P,me.meshPerAttribute);I.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let P=0;P<ce.locationSize;P++)m(ce.location+P);s.bindBuffer(34962,A);for(let P=0;P<ce.locationSize;P++)g(ce.location+P,J/ce.locationSize,U,fe,J*O,J/ce.locationSize*P*O)}}else if(ie!==void 0){const fe=ie[ae];if(fe!==void 0)switch(fe.length){case 2:s.vertexAttrib2fv(ce.location,fe);break;case 3:s.vertexAttrib3fv(ce.location,fe);break;case 4:s.vertexAttrib4fv(ce.location,fe);break;default:s.vertexAttrib1fv(ce.location,fe)}}}}y()}(M,b,T,R),C!==null&&s.bindBuffer(34963,t.get(C).buffer))},reset:_,resetDefaultState:x,dispose:function(){_();for(const M in o){const b=o[M];for(const T in b){const R=b[T];for(const C in R)u(R[C].object),delete R[C];delete b[T]}delete o[M]}},releaseStatesOfGeometry:function(M){if(o[M.id]===void 0)return;const b=o[M.id];for(const T in b){const R=b[T];for(const C in R)u(R[C].object),delete R[C];delete b[T]}delete o[M.id]},releaseStatesOfProgram:function(M){for(const b in o){const T=o[b];if(T[M.id]===void 0)continue;const R=T[M.id];for(const C in R)u(R[C].object),delete R[C];delete T[M.id]}},initAttributes:p,enableAttribute:m,disableUnusedAttributes:y}}function Uh(s,e,t,n){const i=n.isWebGL2;let r;this.setMode=function(a){r=a},this.render=function(a,o){s.drawArrays(r,a,o),t.update(o,r,1)},this.renderInstances=function(a,o,l){if(l===0)return;let c,h;if(i)c=s,h="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",c===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[h](r,a,o,l),t.update(o,r,l)}}function Hh(s,e,t){let n;function i(M){if(M==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const o=i(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=r||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=s.getParameter(34930),u=s.getParameter(35660),d=s.getParameter(3379),p=s.getParameter(34076),m=s.getParameter(34921),v=s.getParameter(36347),y=s.getParameter(36348),g=s.getParameter(36349),_=u>0,x=r||e.has("OES_texture_float");return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:i,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:g,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:_&&x,maxSamples:r?s.getParameter(36183):0}}function Gh(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Bt,o=new qe,l={value:null,needsUpdate:!1};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,m){const v=u!==null?u.length:0;let y=null;if(v!==0){if(y=l.value,m!==!0||y===null){const g=p+4*v,_=d.matrixWorldInverse;o.getNormalMatrix(_),(y===null||y.length<g)&&(y=new Float32Array(g));for(let x=0,M=p;x!==v;++x,M+=4)a.copy(u[x]).applyMatrix4(_,o),a.normal.toArray(y,M),y[M+3]=a.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,y}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,p){const m=u.length!==0||d||n!==0||i;return i=d,t=h(u,p,0),n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,c()},this.setState=function(u,d,p){const m=u.clippingPlanes,v=u.clipIntersection,y=u.clipShadows,g=s.get(u);if(!i||m===null||m.length===0||r&&!y)r?h(null):c();else{const _=r?0:n,x=4*_;let M=g.clippingState||null;l.value=M,M=h(m,d,x,p);for(let b=0;b!==x;++b)M[b]=t[b];g.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}}}function kh(s){let e=new WeakMap;function t(i,r){return r===303?i.mapping=301:r===304&&(i.mapping=302),i}function n(i){const r=i.target;r.removeEventListener("dispose",n);const a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}return{get:function(i){if(i&&i.isTexture&&i.isRenderTargetTexture===!1){const r=i.mapping;if(r===303||r===304){if(e.has(i))return t(e.get(i).texture,i.mapping);{const a=i.image;if(a&&a.height>0){const o=s.getRenderTarget(),l=new kr(a.height/2);return l.fromEquirectangularTexture(s,i),e.set(i,l),s.setRenderTarget(o),i.addEventListener("dispose",n),t(l.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}Rt.physical={uniforms:lt([Rt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new X(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new X},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};class ji extends Vi{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}ji.prototype.isOrthographicCamera=!0;class gi extends Kt{constructor(e){super(e),this.type="RawShaderMaterial"}}gi.prototype.isRawShaderMaterial=!0;const Ft=Math.pow(2,8),Zo=[.125,.215,.35,.446,.526,.582],Qo=5+Zo.length,Wr=20,gn={3e3:0,3001:1,3002:2,3004:3,3005:4,3006:5,3007:6},ma=new ji,{_lodPlanes:qi,_sizeLods:Ko,_sigmas:jr}=Wh(),$o=new se;let fa=null;const Pn=(1+Math.sqrt(5))/2,vi=1/Pn,el=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,Pn,vi),new w(0,Pn,-vi),new w(vi,0,Pn),new w(-vi,0,Pn),new w(Pn,vi,0),new w(-Pn,vi,0)];class tl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=function(t){const n=new Float32Array(t),i=new w(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:t},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i},inputEncoding:{value:gn[3e3]},outputEncoding:{value:gn[3e3]}},vertexShader:ga(),fragmentShader:`

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

			${va()}

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

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}(Wr),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){fa=this._renderer.getRenderTarget();const r=this._allocateTargets();return this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=rl(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=il(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<qi.length;e++)qi[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(fa),e.scissorTest=!1,qr(e,0,0,e.width,e.height)}_fromTexture(e){fa=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:1003,minFilter:1003,generateMipmaps:!1,type:1009,format:1023,encoding:Vh(e)?e.encoding:3002,depthBuffer:!1},n=nl(t);return n.depthBuffer=!e,this._pingPongRenderTarget=nl(t),n}_compileMaterial(e){const t=new je(qi[0],e);this._renderer.compile(t,ma)}_sceneToCubeUV(e,t,n,i){const r=new Ze(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.outputEncoding,u=l.toneMapping;l.getClearColor($o),l.toneMapping=0,l.outputEncoding=3e3,l.autoClear=!1;const d=new Zt({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),p=new je(new Qt,d);let m=!1;const v=e.background;v?v.isColor&&(d.color.copy(v),e.background=null,m=!0):(d.color.copy($o),m=!0);for(let y=0;y<6;y++){const g=y%3;g==0?(r.up.set(0,a[y],0),r.lookAt(o[y],0,0)):g==1?(r.up.set(0,0,a[y]),r.lookAt(0,o[y],0)):(r.up.set(0,a[y],0),r.lookAt(0,0,o[y])),qr(i,g*Ft,y>2?Ft:0,Ft,Ft),l.setRenderTarget(i),m&&l.render(p,r),l.render(e,r)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=u,l.outputEncoding=h,l.autoClear=c,e.background=v}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===1023&&t.type===1009&&t.encoding===3001?e.value=gn[3e3]:e.value=gn[t.encoding]}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===301||e.mapping===302;i?this._cubemapShader==null&&(this._cubemapShader=rl()):this._equirectShader==null&&(this._equirectShader=il());const r=i?this._cubemapShader:this._equirectShader,a=new je(qi[0],r),o=r.uniforms;o.envMap.value=e,i||o.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(o.inputEncoding,e),this._setEncoding(o.outputEncoding,t.texture),qr(t,0,0,3*Ft,2*Ft),n.setRenderTarget(t),n.render(a,ma)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<Qo;i++){const r=Math.sqrt(jr[i]*jr[i]-jr[i-1]*jr[i-1]),a=el[(i-1)%el.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=new je(qi[i],c),u=c.uniforms,d=Ko[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/39,m=r/p,v=isFinite(r)?1+Math.floor(3*m):Wr;v>Wr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${v} samples when the maximum is set to 20`);const y=[];let g=0;for(let x=0;x<Wr;++x){const M=x/m,b=Math.exp(-M*M/2);y.push(b),x==0?g+=b:x<v&&(g+=2*b)}for(let x=0;x<y.length;x++)y[x]=y[x]/g;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=y,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o),u.dTheta.value=p,u.mipInt.value=8-n,this._setEncoding(u.inputEncoding,e.texture),this._setEncoding(u.outputEncoding,e.texture);const _=Ko[i];qr(t,3*Math.max(0,Ft-2*_),(i===0?0:2*Ft)+2*_*(i>4?i-8+4:0),3*_,2*_),l.setRenderTarget(t),l.render(h,ma)}}function Vh(s){return s!==void 0&&s.type===1009&&(s.encoding===3e3||s.encoding===3001||s.encoding===3007)}function Wh(){const s=[],e=[],t=[];let n=8;for(let i=0;i<Qo;i++){const r=Math.pow(2,n);e.push(r);let a=1/r;i>4?a=Zo[i-8+4-1]:i==0&&(a=0),t.push(a);const o=1/(r-1),l=-o/2,c=1+o/2,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,p=3,m=2,v=1,y=new Float32Array(p*d*u),g=new Float32Array(m*d*u),_=new Float32Array(v*d*u);for(let M=0;M<u;M++){const b=M%3*2/3-1,T=M>2?0:-1,R=[b,T,0,b+2/3,T,0,b+2/3,T+1,0,b,T,0,b+2/3,T+1,0,b,T+1,0];y.set(R,p*d*M),g.set(h,m*d*M);const C=[M,M,M,M,M,M];_.set(C,v*d*M)}const x=new ve;x.setAttribute("position",new Ae(y,p)),x.setAttribute("uv",new Ae(g,m)),x.setAttribute("faceIndex",new Ae(_,v)),s.push(x),n>4&&n--}return{_lodPlanes:s,_sizeLods:e,_sigmas:t}}function nl(s){const e=new Tt(3*Ft,3*Ft,s);return e.texture.mapping=306,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function qr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function il(){const s=new X(1,1);return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:s},inputEncoding:{value:gn[3e3]},outputEncoding:{value:gn[3e3]}},vertexShader:ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${va()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function rl(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:gn[3e3]},outputEncoding:{value:gn[3e3]}},vertexShader:ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${va()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ga(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
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
	`}function va(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function jh(s){let e=new WeakMap,t=null;function n(i){const r=i.target;r.removeEventListener("dispose",n);const a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}return{get:function(i){if(i&&i.isTexture&&i.isRenderTargetTexture===!1){const r=i.mapping,a=r===303||r===304,o=r===301||r===302;if(a||o){if(e.has(i))return e.get(i).texture;{const l=i.image;if(a&&l&&l.height>0||o&&l&&function(c){let h=0;const u=6;for(let d=0;d<u;d++)c[d]!==void 0&&h++;return h===u}(l)){const c=s.getRenderTarget();t===null&&(t=new tl(s));const h=a?t.fromEquirectangular(i):t.fromCubemap(i);return e.set(i,h),s.setRenderTarget(c),i.addEventListener("dispose",n),h.texture}return null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function qh(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Xh(s,e,t,n){const i={},r=new WeakMap;function a(l){const c=l.target;c.index!==null&&e.remove(c.index);for(const u in c.attributes)e.remove(c.attributes[u]);c.removeEventListener("dispose",a),delete i[c.id];const h=r.get(c);h&&(e.remove(h),r.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){const c=[],h=l.index,u=l.attributes.position;let d=0;if(h!==null){const v=h.array;d=h.version;for(let y=0,g=v.length;y<g;y+=3){const _=v[y+0],x=v[y+1],M=v[y+2];c.push(_,x,x,M,M,_)}}else{const v=u.array;d=u.version;for(let y=0,g=v.length/3-1;y<g;y+=3){const _=y+0,x=y+1,M=y+2;c.push(_,x,x,M,M,_)}}const p=new(Eo(c)>65535?Ir:Pr)(c,1);p.version=d;const m=r.get(l);m&&e.remove(m),r.set(l,p)}return{get:function(l,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c},update:function(l){const c=l.attributes;for(const u in c)e.update(c[u],34962);const h=l.morphAttributes;for(const u in h){const d=h[u];for(let p=0,m=d.length;p<m;p++)e.update(d[p],34962)}},getWireframeAttribute:function(l){const c=r.get(l);if(c){const h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return r.get(l)}}}function Yh(s,e,t,n){const i=n.isWebGL2;let r,a,o;this.setMode=function(l){r=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,c){s.drawElements(r,c,a,l*o),t.update(c,r,1)},this.renderInstances=function(l,c,h){if(h===0)return;let u,d;if(i)u=s,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[d](r,c,a,l*o,h),t.update(c,r,h)}}function Jh(s){const e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case 4:e.triangles+=i*(t/3);break;case 1:e.lines+=i*(t/2);break;case 3:e.lines+=i*(t-1);break;case 2:e.lines+=i*t;break;case 0:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}class Xr extends Xe{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}function Zh(s,e){return s[0]-e[0]}function Qh(s,e){return Math.abs(e[1])-Math.abs(s[1])}function sl(s,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),s.divideScalar(t)}function Kh(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new w,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,c,h,u){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position.length;let m=r.get(c);if(m===void 0||m.count!==p){m!==void 0&&m.texture.dispose();const g=c.morphAttributes.normal!==void 0,_=c.morphAttributes.position,x=c.morphAttributes.normal||[],M=g===!0?2:1;let b=c.attributes.position.count*M,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*T*4*p),C=new Xr(R,b,T,p);C.format=1023,C.type=1015;const N=4*M;for(let I=0;I<p;I++){const z=_[I],$=x[I],V=b*T*4*I;for(let F=0;F<z.count;F++){a.fromBufferAttribute(z,F),z.normalized===!0&&sl(a,z);const j=F*N;R[V+j+0]=a.x,R[V+j+1]=a.y,R[V+j+2]=a.z,R[V+j+3]=0,g===!0&&(a.fromBufferAttribute($,F),$.normalized===!0&&sl(a,$),R[V+j+4]=a.x,R[V+j+5]=a.y,R[V+j+6]=a.z,R[V+j+7]=0)}}m={count:p,texture:C,size:new X(b,T)},r.set(c,m)}let v=0;for(let g=0;g<d.length;g++)v+=d[g];const y=c.morphTargetsRelative?1:1-v;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const p=d===void 0?0:d.length;let m=n[c.id];if(m===void 0||m.length!==p){m=[];for(let x=0;x<p;x++)m[x]=[x,0];n[c.id]=m}for(let x=0;x<p;x++){const M=m[x];M[0]=x,M[1]=d[x]}m.sort(Qh);for(let x=0;x<8;x++)x<p&&m[x][1]?(o[x][0]=m[x][0],o[x][1]=m[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Zh);const v=c.morphAttributes.position,y=c.morphAttributes.normal;let g=0;for(let x=0;x<8;x++){const M=o[x],b=M[0],T=M[1];b!==Number.MAX_SAFE_INTEGER&&T?(v&&c.getAttribute("morphTarget"+x)!==v[b]&&c.setAttribute("morphTarget"+x,v[b]),y&&c.getAttribute("morphNormal"+x)!==y[b]&&c.setAttribute("morphNormal"+x,y[b]),i[x]=T,g+=T):(v&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),y&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),i[x]=0)}const _=c.morphTargetsRelative?1:1-g;u.getUniforms().setValue(s,"morphTargetBaseInfluence",_),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}}}function $h(s,e,t,n){let i=new WeakMap;function r(a){const o=a.target;o.removeEventListener("dispose",r),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){const o=n.render.frame,l=a.geometry,c=e.get(a,l);return i.get(c)!==o&&(e.update(c),i.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",r)===!1&&a.addEventListener("dispose",r),t.update(a.instanceMatrix,34962),a.instanceColor!==null&&t.update(a.instanceColor,34962)),c},dispose:function(){i=new WeakMap}}}Xr.prototype.isDataTexture2DArray=!0;class ya extends Xe{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}ya.prototype.isDataTexture3D=!0;const al=new Xe,eu=new Xr,tu=new ya,ol=new mi,ll=[],cl=[],hl=new Float32Array(16),ul=new Float32Array(9),dl=new Float32Array(4);function yi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ll[i];if(r===void 0&&(r=new Float32Array(i),ll[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function ut(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ct(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function pl(s,e){let t=cl[e];t===void 0&&(t=new Int32Array(e),cl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function nu(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function iu(s,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;s.uniform2fv(this.addr,e),ct(t,e)}}function ru(s,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;s.uniform3fv(this.addr,e),ct(t,e)}}function su(s,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;s.uniform4fv(this.addr,e),ct(t,e)}}function au(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(ut(t,n))return;dl.set(n),s.uniformMatrix2fv(this.addr,!1,dl),ct(t,n)}}function ou(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(ut(t,n))return;ul.set(n),s.uniformMatrix3fv(this.addr,!1,ul),ct(t,n)}}function lu(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(ut(t,n))return;hl.set(n),s.uniformMatrix4fv(this.addr,!1,hl),ct(t,n)}}function cu(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function hu(s,e){const t=this.cache;ut(t,e)||(s.uniform2iv(this.addr,e),ct(t,e))}function uu(s,e){const t=this.cache;ut(t,e)||(s.uniform3iv(this.addr,e),ct(t,e))}function du(s,e){const t=this.cache;ut(t,e)||(s.uniform4iv(this.addr,e),ct(t,e))}function pu(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function mu(s,e){const t=this.cache;ut(t,e)||(s.uniform2uiv(this.addr,e),ct(t,e))}function fu(s,e){const t=this.cache;ut(t,e)||(s.uniform3uiv(this.addr,e),ct(t,e))}function gu(s,e){const t=this.cache;ut(t,e)||(s.uniform4uiv(this.addr,e),ct(t,e))}function vu(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||al,i)}function yu(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||tu,i)}function xu(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||ol,i)}function _u(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||eu,i)}function Mu(s,e){s.uniform1fv(this.addr,e)}function wu(s,e){const t=yi(e,this.size,2);s.uniform2fv(this.addr,t)}function bu(s,e){const t=yi(e,this.size,3);s.uniform3fv(this.addr,t)}function Su(s,e){const t=yi(e,this.size,4);s.uniform4fv(this.addr,t)}function Tu(s,e){const t=yi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Eu(s,e){const t=yi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Au(s,e){const t=yi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Lu(s,e){s.uniform1iv(this.addr,e)}function Ru(s,e){s.uniform2iv(this.addr,e)}function Cu(s,e){s.uniform3iv(this.addr,e)}function Pu(s,e){s.uniform4iv(this.addr,e)}function Iu(s,e){s.uniform1uiv(this.addr,e)}function Du(s,e){s.uniform2uiv(this.addr,e)}function Nu(s,e){s.uniform3uiv(this.addr,e)}function zu(s,e){s.uniform4uiv(this.addr,e)}function Bu(s,e,t){const n=e.length,i=pl(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTexture2D(e[r]||al,i[r])}function Fu(s,e,t){const n=e.length,i=pl(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTextureCube(e[r]||ol,i[r])}function Ou(s,e,t){this.id=s,this.addr=t,this.cache=[],this.setValue=function(n){switch(n){case 5126:return nu;case 35664:return iu;case 35665:return ru;case 35666:return su;case 35674:return au;case 35675:return ou;case 35676:return lu;case 5124:case 35670:return cu;case 35667:case 35671:return hu;case 35668:case 35672:return uu;case 35669:case 35673:return du;case 5125:return pu;case 36294:return mu;case 36295:return fu;case 36296:return gu;case 35678:case 36198:case 36298:case 36306:case 35682:return vu;case 35679:case 36299:case 36307:return yu;case 35680:case 36300:case 36308:case 36293:return xu;case 36289:case 36303:case 36311:case 36292:return _u}}(e.type)}function ml(s,e,t){this.id=s,this.addr=t,this.cache=[],this.size=e.size,this.setValue=function(n){switch(n){case 5126:return Mu;case 35664:return wu;case 35665:return bu;case 35666:return Su;case 35674:return Tu;case 35675:return Eu;case 35676:return Au;case 5124:case 35670:return Lu;case 35667:case 35671:return Ru;case 35668:case 35672:return Cu;case 35669:case 35673:return Pu;case 5125:return Iu;case 36294:return Du;case 36295:return Nu;case 36296:return zu;case 35678:case 36198:case 36298:case 36306:case 35682:return Bu;case 35680:case 36300:case 36308:case 36293:return Fu}}(e.type)}function fl(s){this.id=s,this.seq=[],this.map={}}ml.prototype.updateCache=function(s){const e=this.cache;s instanceof Float32Array&&e.length!==s.length&&(this.cache=new Float32Array(s.length)),ct(e,s)},fl.prototype.setValue=function(s,e,t){const n=this.seq;for(let i=0,r=n.length;i!==r;++i){const a=n[i];a.setValue(s,e[a.id],t)}};const xa=/(\w+)(\])?(\[|\.)?/g;function gl(s,e){s.seq.push(e),s.map[e.id]=e}function Uu(s,e,t){const n=s.name,i=n.length;for(xa.lastIndex=0;;){const r=xa.exec(n),a=xa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===i){gl(t,c===void 0?new Ou(o,s,e):new ml(o,s,e));break}{let h=t.map[o];h===void 0&&(h=new fl(o),gl(t,h)),t=h}}}function vn(s,e){this.seq=[],this.map={};const t=s.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=s.getActiveUniform(e,n);Uu(i,s.getUniformLocation(e,i.name),this)}}function vl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}vn.prototype.setValue=function(s,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(s,t,n)},vn.prototype.setOptional=function(s,e,t){const n=e[t];n!==void 0&&this.setValue(s,t,n)},vn.upload=function(s,e,t,n){for(let i=0,r=e.length;i!==r;++i){const a=e[i],o=t[a.id];o.needsUpdate!==!1&&a.setValue(s,o.value,n)}},vn.seqWithValue=function(s,e){const t=[];for(let n=0,i=s.length;n!==i;++n){const r=s[n];r.id in e&&t.push(r)}return t};let Hu=0;function yl(s){switch(s){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];case 3002:return["RGBE","( value )"];case 3004:return["RGBM","( value, 7.0 )"];case 3005:return["RGBM","( value, 16.0 )"];case 3006:return["RGBD","( value, 256.0 )"];case 3007:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case 3003:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function xl(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();return n&&i===""?"":t.toUpperCase()+`

`+i+`

`+function(r){const a=r.split(`
`);for(let o=0;o<a.length;o++)a[o]=o+1+": "+a[o];return a.join(`
`)}(s.getShaderSource(e))}function In(s,e){const t=yl(e);return"vec4 "+s+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function Gu(s,e){const t=yl(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function ku(s,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Xi(s){return s!==""}function _l(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ml(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vu=/^[ \t]*#include +<([\w\d./]+)>/gm;function _a(s){return s.replace(Vu,Wu)}function Wu(s,e){const t=Se[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return _a(t)}const ju=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,qu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wl(s){return s.replace(qu,bl).replace(ju,Xu)}function Xu(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),bl(s,e,t,n)}function bl(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Sl(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Yu(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=function(C){let N="SHADOWMAP_TYPE_BASIC";return C.shadowMapType===1?N="SHADOWMAP_TYPE_PCF":C.shadowMapType===2?N="SHADOWMAP_TYPE_PCF_SOFT":C.shadowMapType===3&&(N="SHADOWMAP_TYPE_VSM"),N}(t),c=function(C){let N="ENVMAP_TYPE_CUBE";if(C.envMap)switch(C.envMapMode){case 301:case 302:N="ENVMAP_TYPE_CUBE";break;case 306:case 307:N="ENVMAP_TYPE_CUBE_UV"}return N}(t),h=function(C){let N="ENVMAP_MODE_REFLECTION";if(C.envMap)switch(C.envMapMode){case 302:case 307:N="ENVMAP_MODE_REFRACTION"}return N}(t),u=function(C){let N="ENVMAP_BLENDING_NONE";if(C.envMap)switch(C.combine){case 0:N="ENVMAP_BLENDING_MULTIPLY";break;case 1:N="ENVMAP_BLENDING_MIX";break;case 2:N="ENVMAP_BLENDING_ADD"}return N}(t),d=s.gammaFactor>0?s.gammaFactor:1,p=t.isWebGL2?"":function(C){return[C.extensionDerivatives||C.envMapCubeUV||C.bumpMap||C.tangentSpaceNormalMap||C.clearcoatNormalMap||C.flatShading||C.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(C.extensionFragDepth||C.logarithmicDepthBuffer)&&C.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",C.extensionDrawBuffers&&C.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(C.extensionShaderTextureLOD||C.envMap||C.transmission)&&C.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xi).join(`
`)}(t),m=function(C){const N=[];for(const I in C){const z=C[I];z!==!1&&N.push("#define "+I+" "+z)}return N.join(`
`)}(r),v=i.createProgram();let y,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=[m].filter(Xi).join(`
`),y.length>0&&(y+=`
`),g=[p,m].filter(Xi).join(`
`),g.length>0&&(g+=`
`)):(y=[Sl(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),g=[p,Sl(t),"#define SHADER_NAME "+t.shaderName,m,"#define GAMMA_FACTOR "+d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Se.tonemapping_pars_fragment:"",t.toneMapping!==0?ku("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===1022?"#define OPAQUE":"",Se.encodings_pars_fragment,t.map?In("mapTexelToLinear",t.mapEncoding):"",t.matcap?In("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?In("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?In("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularColorMap?In("specularColorMapTexelToLinear",t.specularColorMapEncoding):"",t.sheenColorMap?In("sheenColorMapTexelToLinear",t.sheenColorMapEncoding):"",t.lightMap?In("lightMapTexelToLinear",t.lightMapEncoding):"",Gu("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xi).join(`
`)),a=_a(a),a=_l(a,t),a=Ml(a,t),o=_a(o),o=_l(o,t),o=Ml(o,t),a=wl(a),o=wl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===Hs?"":"out highp vec4 pc_fragColor;",t.glslVersion===Hs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=_+g+o,M=vl(i,35633,_+y+a),b=vl(i,35632,x);if(i.attachShader(v,M),i.attachShader(v,b),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),s.debug.checkShaderErrors){const C=i.getProgramInfoLog(v).trim(),N=i.getShaderInfoLog(M).trim(),I=i.getShaderInfoLog(b).trim();let z=!0,$=!0;if(i.getProgramParameter(v,35714)===!1){z=!1;const V=xl(i,M,"vertex"),F=xl(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,35715)+`

Program Info Log: `+C+`
`+V+`
`+F)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):N!==""&&I!==""||($=!1);$&&(this.diagnostics={runnable:z,programLog:C,vertexShader:{log:N,prefix:y},fragmentShader:{log:I,prefix:g}})}let T,R;return i.deleteShader(M),i.deleteShader(b),this.getUniforms=function(){return T===void 0&&(T=new vn(i,v)),T},this.getAttributes=function(){return R===void 0&&(R=function(C,N){const I={},z=C.getProgramParameter(N,35721);for(let $=0;$<z;$++){const V=C.getActiveAttrib(N,$),F=V.name;let j=1;V.type===35674&&(j=2),V.type===35675&&(j=3),V.type===35676&&(j=4),I[F]={type:V.type,location:C.getAttribLocation(N,F),locationSize:j}}return I}(i,v)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=Hu++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=b,this}function Ju(s,e,t,n,i,r,a){const o=[],l=i.isWebGL2,c=i.logarithmicDepthBuffer,h=i.floatVertexTextures,u=i.maxVertexUniforms,d=i.vertexTextures;let p=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},v=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap",,"roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","morphTargetsCount","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","specularIntensityMap","specularColorMap","specularColorMapEncoding","transmission","transmissionMap","thicknessMap","sheen","sheenColorMap","sheenColorMapEncoding","sheenRoughnessMap"];function y(g){let _;return g&&g.isTexture?_=g.encoding:g&&g.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),_=g.texture.encoding):_=3e3,l&&g&&g.isTexture&&g.format===1023&&g.type===1009&&g.encoding===3001&&(_=3e3),_}return{getParameters:function(g,_,x,M,b){const T=M.fog,R=g.isMeshStandardMaterial?M.environment:null,C=(g.isMeshStandardMaterial?t:e).get(g.envMap||R),N=m[g.type],I=b.isSkinnedMesh?function(ie){const ae=ie.skeleton.bones;if(h)return 1024;{const ce=u,me=Math.floor((ce-20)/4),fe=Math.min(me,ae.length);return fe<ae.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+ae.length+" bones. This GPU supports "+fe+"."),0):fe}}(b):0;let z,$;if(g.precision!==null&&(p=i.getMaxPrecision(g.precision),p!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",p,"instead.")),N){const ie=Rt[N];z=ie.vertexShader,$=ie.fragmentShader}else z=g.vertexShader,$=g.fragmentShader;const V=s.getRenderTarget(),F=g.alphaTest>0,j=g.clearcoat>0;return{isWebGL2:l,shaderID:N,shaderName:g.type,vertexShader:z,fragmentShader:$,defines:g.defines,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:p,instancing:b.isInstancedMesh===!0,instancingColor:b.isInstancedMesh===!0&&b.instanceColor!==null,supportsVertexTextures:d,outputEncoding:V!==null?y(V.texture):s.outputEncoding,map:!!g.map,mapEncoding:y(g.map),matcap:!!g.matcap,matcapEncoding:y(g.matcap),envMap:!!C,envMapMode:C&&C.mapping,envMapEncoding:y(C),envMapCubeUV:!!C&&(C.mapping===306||C.mapping===307),lightMap:!!g.lightMap,lightMapEncoding:y(g.lightMap),aoMap:!!g.aoMap,emissiveMap:!!g.emissiveMap,emissiveMapEncoding:y(g.emissiveMap),bumpMap:!!g.bumpMap,normalMap:!!g.normalMap,objectSpaceNormalMap:g.normalMapType===1,tangentSpaceNormalMap:g.normalMapType===0,clearcoat:j,clearcoatMap:j&&!!g.clearcoatMap,clearcoatRoughnessMap:j&&!!g.clearcoatRoughnessMap,clearcoatNormalMap:j&&!!g.clearcoatNormalMap,displacementMap:!!g.displacementMap,roughnessMap:!!g.roughnessMap,metalnessMap:!!g.metalnessMap,specularMap:!!g.specularMap,specularIntensityMap:!!g.specularIntensityMap,specularColorMap:!!g.specularColorMap,specularColorMapEncoding:y(g.specularColorMap),alphaMap:!!g.alphaMap,alphaTest:F,gradientMap:!!g.gradientMap,sheen:g.sheen>0,sheenColorMap:!!g.sheenColorMap,sheenColorMapEncoding:y(g.sheenColorMap),sheenRoughnessMap:!!g.sheenRoughnessMap,transmission:g.transmission>0,transmissionMap:!!g.transmissionMap,thicknessMap:!!g.thicknessMap,combine:g.combine,vertexTangents:!!g.normalMap&&!!b.geometry&&!!b.geometry.attributes.tangent,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!b.geometry&&!!b.geometry.attributes.color&&b.geometry.attributes.color.itemSize===4,vertexUvs:!!g.map||!!g.bumpMap||!!g.normalMap||!!g.specularMap||!!g.alphaMap||!!g.emissiveMap||!!g.roughnessMap||!!g.metalnessMap||!!g.clearcoatMap||!!g.clearcoatRoughnessMap||!!g.clearcoatNormalMap||!!g.displacementMap||!!g.transmissionMap||!!g.thicknessMap||!!g.specularIntensityMap||!!g.specularColorMap||!!g.sheenColorMap||g.sheenRoughnessMap,uvsVertexOnly:!(g.map||g.bumpMap||g.normalMap||g.specularMap||g.alphaMap||g.emissiveMap||g.roughnessMap||g.metalnessMap||g.clearcoatNormalMap||g.transmission>0||g.transmissionMap||g.thicknessMap||g.specularIntensityMap||g.specularColorMap||!!g.sheen>0||g.sheenColorMap||g.sheenRoughnessMap||!g.displacementMap),fog:!!T,useFog:g.fog,fogExp2:T&&T.isFogExp2,flatShading:!!g.flatShading,sizeAttenuation:g.sizeAttenuation,logarithmicDepthBuffer:c,skinning:b.isSkinnedMesh===!0&&I>0,maxBones:I,useVertexTexture:h,morphTargets:!!b.geometry&&!!b.geometry.morphAttributes.position,morphNormals:!!b.geometry&&!!b.geometry.morphAttributes.normal,morphTargetsCount:b.geometry&&b.geometry.morphAttributes.position?b.geometry.morphAttributes.position.length:0,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,format:g.format,dithering:g.dithering,shadowMapEnabled:s.shadowMap.enabled&&x.length>0,shadowMapType:s.shadowMap.type,toneMapping:g.toneMapped?s.toneMapping:0,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===2,flipSided:g.side===1,depthPacking:g.depthPacking!==void 0&&g.depthPacking,index0AttributeName:g.index0AttributeName,extensionDerivatives:g.extensions&&g.extensions.derivatives,extensionFragDepth:g.extensions&&g.extensions.fragDepth,extensionDrawBuffers:g.extensions&&g.extensions.drawBuffers,extensionShaderTextureLOD:g.extensions&&g.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:g.customProgramCacheKey()}},getProgramCacheKey:function(g){const _=[];if(g.shaderID?_.push(g.shaderID):(_.push(Ao(g.fragmentShader)),_.push(Ao(g.vertexShader))),g.defines!==void 0)for(const x in g.defines)_.push(x),_.push(g.defines[x]);if(g.isRawShaderMaterial===!1){for(let x=0;x<v.length;x++)_.push(g[v[x]]);_.push(s.outputEncoding),_.push(s.gammaFactor)}return _.push(g.customProgramCacheKey),_.join()},getUniforms:function(g){const _=m[g.type];let x;if(_){const M=Rt[_];x=Yo.clone(M.uniforms)}else x=g.uniforms;return x},acquireProgram:function(g,_){let x;for(let M=0,b=o.length;M<b;M++){const T=o[M];if(T.cacheKey===_){x=T,++x.usedTimes;break}}return x===void 0&&(x=new Yu(s,_,g,r),o.push(x)),x},releaseProgram:function(g){if(--g.usedTimes==0){const _=o.indexOf(g);o[_]=o[o.length-1],o.pop(),g.destroy()}},programs:o}}function Zu(){let s=new WeakMap;return{get:function(e){let t=s.get(e);return t===void 0&&(t={},s.set(e,t)),t},remove:function(e){s.delete(e)},update:function(e,t,n){s.get(e)[t]=n},dispose:function(){s=new WeakMap}}}function Qu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.program!==e.program?s.program.id-e.program.id:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Tl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function El(s){const e=[];let t=0;const n=[],i=[],r=[],a={id:-1};function o(l,c,h,u,d,p){let m=e[t];const v=s.get(h);return m===void 0?(m={id:l.id,object:l,geometry:c,material:h,program:v.program||a,groupOrder:u,renderOrder:l.renderOrder,z:d,group:p},e[t]=m):(m.id=l.id,m.object=l,m.geometry=c,m.material=h,m.program=v.program||a,m.groupOrder=u,m.renderOrder=l.renderOrder,m.z=d,m.group=p),t++,m}return{opaque:n,transmissive:i,transparent:r,init:function(){t=0,n.length=0,i.length=0,r.length=0},push:function(l,c,h,u,d,p){const m=o(l,c,h,u,d,p);h.transmission>0?i.push(m):h.transparent===!0?r.push(m):n.push(m)},unshift:function(l,c,h,u,d,p){const m=o(l,c,h,u,d,p);h.transmission>0?i.unshift(m):h.transparent===!0?r.unshift(m):n.unshift(m)},finish:function(){for(let l=t,c=e.length;l<c;l++){const h=e[l];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.program=null,h.group=null}},sort:function(l,c){n.length>1&&n.sort(l||Qu),i.length>1&&i.sort(c||Tl),r.length>1&&r.sort(c||Tl)}}}function Ku(s){let e=new WeakMap;return{get:function(t,n){let i;return e.has(t)===!1?(i=new El(s),e.set(t,[i])):n>=e.get(t).length?(i=new El(s),e.get(t).push(i)):i=e.get(t)[n],i},dispose:function(){e=new WeakMap}}}function $u(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new se};break;case"SpotLight":t={position:new w,direction:new w,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new se,groundColor:new se};break;case"RectAreaLight":t={color:new se,position:new w,halfWidth:new w,halfHeight:new w}}return s[e.id]=t,t}}}let ed=0;function td(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function nd(s,e){const t=new $u,n=function(){const l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let h;switch(c.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=h,h}}}(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let l=0;l<9;l++)i.probe.push(new w);const r=new w,a=new ue,o=new ue;return{setup:function(l,c){let h=0,u=0,d=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let p=0,m=0,v=0,y=0,g=0,_=0,x=0,M=0;l.sort(td);const b=c!==!0?Math.PI:1;for(let R=0,C=l.length;R<C;R++){const N=l[R],I=N.color,z=N.intensity,$=N.distance,V=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=I.r*z*b,u+=I.g*z*b,d+=I.b*z*b;else if(N.isLightProbe)for(let F=0;F<9;F++)i.probe[F].addScaledVector(N.sh.coefficients[F],z);else if(N.isDirectionalLight){const F=t.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity*b),N.castShadow){const j=N.shadow,ie=n.get(N);ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,i.directionalShadow[p]=ie,i.directionalShadowMap[p]=V,i.directionalShadowMatrix[p]=N.shadow.matrix,_++}i.directional[p]=F,p++}else if(N.isSpotLight){const F=t.get(N);if(F.position.setFromMatrixPosition(N.matrixWorld),F.color.copy(I).multiplyScalar(z*b),F.distance=$,F.coneCos=Math.cos(N.angle),F.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),F.decay=N.decay,N.castShadow){const j=N.shadow,ie=n.get(N);ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,i.spotShadow[v]=ie,i.spotShadowMap[v]=V,i.spotShadowMatrix[v]=N.shadow.matrix,M++}i.spot[v]=F,v++}else if(N.isRectAreaLight){const F=t.get(N);F.color.copy(I).multiplyScalar(z),F.halfWidth.set(.5*N.width,0,0),F.halfHeight.set(0,.5*N.height,0),i.rectArea[y]=F,y++}else if(N.isPointLight){const F=t.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity*b),F.distance=N.distance,F.decay=N.decay,N.castShadow){const j=N.shadow,ie=n.get(N);ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,ie.shadowCameraNear=j.camera.near,ie.shadowCameraFar=j.camera.far,i.pointShadow[m]=ie,i.pointShadowMap[m]=V,i.pointShadowMatrix[m]=N.shadow.matrix,x++}i.point[m]=F,m++}else if(N.isHemisphereLight){const F=t.get(N);F.skyColor.copy(N.color).multiplyScalar(z*b),F.groundColor.copy(N.groundColor).multiplyScalar(z*b),i.hemi[g]=F,g++}}y>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const T=i.hash;T.directionalLength===p&&T.pointLength===m&&T.spotLength===v&&T.rectAreaLength===y&&T.hemiLength===g&&T.numDirectionalShadows===_&&T.numPointShadows===x&&T.numSpotShadows===M||(i.directional.length=p,i.spot.length=v,i.rectArea.length=y,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=x,i.spotShadowMatrix.length=M,T.directionalLength=p,T.pointLength=m,T.spotLength=v,T.rectAreaLength=y,T.hemiLength=g,T.numDirectionalShadows=_,T.numPointShadows=x,T.numSpotShadows=M,i.version=ed++)},setupView:function(l,c){let h=0,u=0,d=0,p=0,m=0;const v=c.matrixWorldInverse;for(let y=0,g=l.length;y<g;y++){const _=l[y];if(_.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(v),h++}else if(_.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(v),x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(v),d++}else if(_.isRectAreaLight){const x=i.rectArea[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(v),o.identity(),a.copy(_.matrixWorld),a.premultiply(v),o.extractRotation(a),x.halfWidth.set(.5*_.width,0,0),x.halfHeight.set(0,.5*_.height,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){const x=i.point[u];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(v),u++}else if(_.isHemisphereLight){const x=i.hemi[m];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(v),x.direction.normalize(),m++}}},state:i}}function Al(s,e){const t=new nd(s,e),n=[],i=[];return{init:function(){n.length=0,i.length=0},state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:function(r){t.setup(n,r)},setupLightsView:function(r){t.setupView(n,r)},pushLight:function(r){n.push(r)},pushShadow:function(r){i.push(r)}}}function id(s,e){let t=new WeakMap;return{get:function(n,i=0){let r;return t.has(n)===!1?(r=new Al(s,e),t.set(n,[r])):i>=t.get(n).length?(r=new Al(s,e),t.get(n).push(r)):r=t.get(n)[i],r},dispose:function(){t=new WeakMap}}}class Yr extends Ye{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Yr.prototype.isMeshDepthMaterial=!0;class Jr extends Ye{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new w,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}Jr.prototype.isMeshDistanceMaterial=!0;function Ll(s,e,t){let n=new Wi;const i=new X,r=new X,a=new Pe,o=new Yr({depthPacking:3201}),l=new Jr,c={},h=t.maxTextureSize,u={0:1,1:0,2:2},d=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new X},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new ve;m.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new je(m,d),y=this;function g(M,b){const T=e.update(v);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(b,null,T,d,v,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(b,null,T,p,v,null)}function _(M,b,T,R,C,N,I){let z=null;const $=R.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(z=$!==void 0?$:R.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0){const V=z.uuid,F=T.uuid;let j=c[V];j===void 0&&(j={},c[V]=j);let ie=j[F];ie===void 0&&(ie=z.clone(),j[F]=ie),z=ie}return z.visible=T.visible,z.wireframe=T.wireframe,z.side=I===3?T.shadowSide!==null?T.shadowSide:T.side:T.shadowSide!==null?T.shadowSide:u[T.side],z.alphaMap=T.alphaMap,z.alphaTest=T.alphaTest,z.clipShadows=T.clipShadows,z.clippingPlanes=T.clippingPlanes,z.clipIntersection=T.clipIntersection,z.displacementMap=T.displacementMap,z.displacementScale=T.displacementScale,z.displacementBias=T.displacementBias,z.wireframeLinewidth=T.wireframeLinewidth,z.linewidth=T.linewidth,R.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(z.referencePosition.setFromMatrixPosition(R.matrixWorld),z.nearDistance=C,z.farDistance=N),z}function x(M,b,T,R,C){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&C===3)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);const I=e.update(M),z=M.material;if(Array.isArray(z)){const $=I.groups;for(let V=0,F=$.length;V<F;V++){const j=$[V],ie=z[j.materialIndex];if(ie&&ie.visible){const ae=_(M,0,ie,R,T.near,T.far,C);s.renderBufferDirect(T,null,I,ae,M,j)}}}else if(z.visible){const $=_(M,0,z,R,T.near,T.far,C);s.renderBufferDirect(T,null,I,$,M,null)}}const N=M.children;for(let I=0,z=N.length;I<z;I++)x(N[I],b,T,R,C)}this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(M,b,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||M.length===0)return;const R=s.getRenderTarget(),C=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),I=s.state;I.setBlending(0),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let z=0,$=M.length;z<$;z++){const V=M[z],F=V.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const j=F.getFrameExtents();if(i.multiply(j),r.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/j.x),i.x=r.x*j.x,F.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/j.y),i.y=r.y*j.y,F.mapSize.y=r.y)),F.map===null&&!F.isPointLightShadow&&this.type===3){const ae={minFilter:1006,magFilter:1006,format:1023};F.map=new Tt(i.x,i.y,ae),F.map.texture.name=V.name+".shadowMap",F.mapPass=new Tt(i.x,i.y,ae),F.camera.updateProjectionMatrix()}if(F.map===null){const ae={minFilter:1003,magFilter:1003,format:1023};F.map=new Tt(i.x,i.y,ae),F.map.texture.name=V.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const ie=F.getViewportCount();for(let ae=0;ae<ie;ae++){const ce=F.getViewport(ae);a.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),I.viewport(a),F.updateMatrices(V,ae),n=F.getFrustum(),x(b,T,F.camera,V,this.type)}F.isPointLightShadow||this.type!==3||g(F,T),F.needsUpdate=!1}y.needsUpdate=!1,s.setRenderTarget(R,C,N)}}function rd(s,e,t){const n=t.isWebGL2,i=new function(){let S=!1;const D=new Pe;let k=null;const W=new Pe(0,0,0,0);return{setMask:function(H){k===H||S||(s.colorMask(H,H,H,H),k=H)},setLocked:function(H){S=H},setClear:function(H,oe,de,le,Me){Me===!0&&(H*=le,oe*=le,de*=le),D.set(H,oe,de,le),W.equals(D)===!1&&(s.clearColor(H,oe,de,le),W.copy(D))},reset:function(){S=!1,k=null,W.set(-1,0,0,0)}}},r=new function(){let S=!1,D=null,k=null,W=null;return{setTest:function(H){H?J(2929):E(2929)},setMask:function(H){D===H||S||(s.depthMask(H),D=H)},setFunc:function(H){if(k!==H){if(H)switch(H){case 0:s.depthFunc(512);break;case 1:s.depthFunc(519);break;case 2:s.depthFunc(513);break;default:s.depthFunc(515);break;case 4:s.depthFunc(514);break;case 5:s.depthFunc(518);break;case 6:s.depthFunc(516);break;case 7:s.depthFunc(517)}else s.depthFunc(515);k=H}},setLocked:function(H){S=H},setClear:function(H){W!==H&&(s.clearDepth(H),W=H)},reset:function(){S=!1,D=null,k=null,W=null}}},a=new function(){let S=!1,D=null,k=null,W=null,H=null,oe=null,de=null,le=null,Me=null;return{setTest:function(xe){S||(xe?J(2960):E(2960))},setMask:function(xe){D===xe||S||(s.stencilMask(xe),D=xe)},setFunc:function(xe,Ke,De){k===xe&&W===Ke&&H===De||(s.stencilFunc(xe,Ke,De),k=xe,W=Ke,H=De)},setOp:function(xe,Ke,De){oe===xe&&de===Ke&&le===De||(s.stencilOp(xe,Ke,De),oe=xe,de=Ke,le=De)},setLocked:function(xe){S=xe},setClear:function(xe){Me!==xe&&(s.clearStencil(xe),Me=xe)},reset:function(){S=!1,D=null,k=null,W=null,H=null,oe=null,de=null,le=null,Me=null}}};let o={},l=null,c={},h=null,u=!1,d=null,p=null,m=null,v=null,y=null,g=null,_=null,x=!1,M=null,b=null,T=null,R=null,C=null;const N=s.getParameter(35661);let I=!1,z=0;const $=s.getParameter(7938);$.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec($)[1]),I=z>=1):$.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),I=z>=2);let V=null,F={};const j=s.getParameter(3088),ie=s.getParameter(2978),ae=new Pe().fromArray(j),ce=new Pe().fromArray(ie);function me(S,D,k){const W=new Uint8Array(4),H=s.createTexture();s.bindTexture(S,H),s.texParameteri(S,10241,9728),s.texParameteri(S,10240,9728);for(let oe=0;oe<k;oe++)s.texImage2D(D+oe,0,6408,1,1,0,6408,5121,W);return H}const fe={};function J(S){o[S]!==!0&&(s.enable(S),o[S]=!0)}function E(S){o[S]!==!1&&(s.disable(S),o[S]=!1)}fe[3553]=me(3553,3553,1),fe[34067]=me(34067,34069,6),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),J(2929),r.setFunc(3),P(!1),Z(1),J(2884),O(0);const A={100:32774,101:32778,102:32779};if(n)A[103]=32775,A[104]=32776;else{const S=e.get("EXT_blend_minmax");S!==null&&(A[103]=S.MIN_EXT,A[104]=S.MAX_EXT)}const U={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};function O(S,D,k,W,H,oe,de,le){if(S!==0){if(u===!1&&(J(3042),u=!0),S===5)H=H||D,oe=oe||k,de=de||W,D===p&&H===y||(s.blendEquationSeparate(A[D],A[H]),p=D,y=H),k===m&&W===v&&oe===g&&de===_||(s.blendFuncSeparate(U[k],U[W],U[oe],U[de]),m=k,v=W,g=oe,_=de),d=S,x=null;else if(S!==d||le!==x){if(p===100&&y===100||(s.blendEquation(32774),p=100,y=100),le)switch(S){case 1:s.blendFuncSeparate(1,771,1,771);break;case 2:s.blendFunc(1,1);break;case 3:s.blendFuncSeparate(0,0,769,771);break;case 4:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}else switch(S){case 1:s.blendFuncSeparate(770,771,1,771);break;case 2:s.blendFunc(770,1);break;case 3:s.blendFunc(0,769);break;case 4:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}m=null,v=null,g=null,_=null,d=S,x=le}}else u===!0&&(E(3042),u=!1)}function P(S){M!==S&&(S?s.frontFace(2304):s.frontFace(2305),M=S)}function Z(S){S!==0?(J(2884),S!==b&&(S===1?s.cullFace(1029):S===2?s.cullFace(1028):s.cullFace(1032))):E(2884),b=S}function ee(S,D,k){S?(J(32823),R===D&&C===k||(s.polygonOffset(D,k),R=D,C=k)):E(32823)}function B(S){S===void 0&&(S=33984+N-1),V!==S&&(s.activeTexture(S),V=S)}return{buffers:{color:i,depth:r,stencil:a},enable:J,disable:E,bindFramebuffer:function(S,D){return D===null&&l!==null&&(D=l),c[S]!==D&&(s.bindFramebuffer(S,D),c[S]=D,n&&(S===36009&&(c[36160]=D),S===36160&&(c[36009]=D)),!0)},bindXRFramebuffer:function(S){S!==l&&(s.bindFramebuffer(36160,S),l=S)},useProgram:function(S){return h!==S&&(s.useProgram(S),h=S,!0)},setBlending:O,setMaterial:function(S,D){S.side===2?E(2884):J(2884);let k=S.side===1;D&&(k=!k),P(k),S.blending===1&&S.transparent===!1?O(0):O(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.premultipliedAlpha),r.setFunc(S.depthFunc),r.setTest(S.depthTest),r.setMask(S.depthWrite),i.setMask(S.colorWrite);const W=S.stencilWrite;a.setTest(W),W&&(a.setMask(S.stencilWriteMask),a.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),a.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),ee(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?J(32926):E(32926)},setFlipSided:P,setCullFace:Z,setLineWidth:function(S){S!==T&&(I&&s.lineWidth(S),T=S)},setPolygonOffset:ee,setScissorTest:function(S){S?J(3089):E(3089)},activeTexture:B,bindTexture:function(S,D){V===null&&B();let k=F[V];k===void 0&&(k={type:void 0,texture:void 0},F[V]=k),k.type===S&&k.texture===D||(s.bindTexture(S,D||fe[S]),k.type=S,k.texture=D)},unbindTexture:function(){const S=F[V];S!==void 0&&S.type!==void 0&&(s.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)},compressedTexImage2D:function(){try{s.compressedTexImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage2D:function(){try{s.texImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage3D:function(){try{s.texImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},scissor:function(S){ae.equals(S)===!1&&(s.scissor(S.x,S.y,S.z,S.w),ae.copy(S))},viewport:function(S){ce.equals(S)===!1&&(s.viewport(S.x,S.y,S.z,S.w),ce.copy(S))},reset:function(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),o={},V=null,F={},l=null,c={},h=null,u=!1,d=null,p=null,m=null,v=null,y=null,g=null,_=null,x=!1,M=null,b=null,T=null,R=null,C=null,ae.set(0,0,s.canvas.width,s.canvas.height),ce.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}}}function sd(s,e,t,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=new WeakMap;let p,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,A){return m?new OffscreenCanvas(E,A):wr("canvas")}function y(E,A,U,O){let P=1;if((E.width>O||E.height>O)&&(P=O/Math.max(E.width,E.height)),P<1||A===!0){if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const Z=A?So:Math.floor,ee=Z(P*E.width),B=Z(P*E.height);p===void 0&&(p=v(ee,B));const S=U?v(ee,B):p;return S.width=ee,S.height=B,S.getContext("2d").drawImage(E,0,0,ee,B),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ee+"x"+B+")."),S}return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E}return E}function g(E){return ks(E.width)&&ks(E.height)}function _(E,A){return E.generateMipmaps&&A&&E.minFilter!==1003&&E.minFilter!==1006}function x(E,A,U,O,P=1){s.generateMipmap(E),n.get(A).__maxMipLevel=Math.log2(Math.max(U,O,P))}function M(E,A,U,O){if(o===!1)return A;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let P=A;return A===6403&&(U===5126&&(P=33326),U===5131&&(P=33325),U===5121&&(P=33321)),A===6407&&(U===5126&&(P=34837),U===5131&&(P=34843),U===5121&&(P=32849)),A===6408&&(U===5126&&(P=34836),U===5131&&(P=34842),U===5121&&(P=O===3001?35907:32856)),P!==33325&&P!==33326&&P!==34842&&P!==34836||e.get("EXT_color_buffer_float"),P}function b(E){return E===1003||E===1004||E===1005?9728:9729}function T(E){const A=E.target;A.removeEventListener("dispose",T),function(U){const O=n.get(U);O.__webglInit!==void 0&&(s.deleteTexture(O.__webglTexture),n.remove(U))}(A),A.isVideoTexture&&d.delete(A),a.memory.textures--}function R(E){const A=E.target;A.removeEventListener("dispose",R),function(U){const O=U.texture,P=n.get(U),Z=n.get(O);if(U){if(Z.__webglTexture!==void 0&&(s.deleteTexture(Z.__webglTexture),a.memory.textures--),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)s.deleteFramebuffer(P.__webglFramebuffer[ee]),P.__webglDepthbuffer&&s.deleteRenderbuffer(P.__webglDepthbuffer[ee]);else s.deleteFramebuffer(P.__webglFramebuffer),P.__webglDepthbuffer&&s.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&s.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer&&s.deleteRenderbuffer(P.__webglColorRenderbuffer),P.__webglDepthRenderbuffer&&s.deleteRenderbuffer(P.__webglDepthRenderbuffer);if(U.isWebGLMultipleRenderTargets)for(let ee=0,B=O.length;ee<B;ee++){const S=n.get(O[ee]);S.__webglTexture&&(s.deleteTexture(S.__webglTexture),a.memory.textures--),n.remove(O[ee])}n.remove(O),n.remove(U)}}(A)}let C=0;function N(E,A){const U=n.get(E);if(E.isVideoTexture&&function(O){const P=a.render.frame;d.get(O)!==P&&(d.set(O,P),O.update())}(E),E.version>0&&U.__version!==E.version){const O=E.image;if(O===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else{if(O.complete!==!1)return void j(U,E,A);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.activeTexture(33984+A),t.bindTexture(3553,U.__webglTexture)}function I(E,A){const U=n.get(E);E.version>0&&U.__version!==E.version?function(O,P,Z){if(P.image.length!==6)return;F(O,P),t.activeTexture(33984+Z),t.bindTexture(34067,O.__webglTexture),s.pixelStorei(37440,P.flipY),s.pixelStorei(37441,P.premultiplyAlpha),s.pixelStorei(3317,P.unpackAlignment),s.pixelStorei(37443,0);const ee=P&&(P.isCompressedTexture||P.image[0].isCompressedTexture),B=P.image[0]&&P.image[0].isDataTexture,S=[];for(let le=0;le<6;le++)S[le]=ee||B?B?P.image[le].image:P.image[le]:y(P.image[le],!1,!0,c);const D=S[0],k=g(D)||o,W=r.convert(P.format),H=r.convert(P.type),oe=M(P.internalFormat,W,H,P.encoding);let de;if(V(34067,P,k),ee){for(let le=0;le<6;le++){de=S[le].mipmaps;for(let Me=0;Me<de.length;Me++){const xe=de[Me];P.format!==1023&&P.format!==1022?W!==null?t.compressedTexImage2D(34069+le,Me,oe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+le,Me,oe,xe.width,xe.height,0,W,H,xe.data)}}O.__maxMipLevel=de.length-1}else{de=P.mipmaps;for(let le=0;le<6;le++)if(B){t.texImage2D(34069+le,0,oe,S[le].width,S[le].height,0,W,H,S[le].data);for(let Me=0;Me<de.length;Me++){const xe=de[Me].image[le].image;t.texImage2D(34069+le,Me+1,oe,xe.width,xe.height,0,W,H,xe.data)}}else{t.texImage2D(34069+le,0,oe,W,H,S[le]);for(let Me=0;Me<de.length;Me++){const xe=de[Me];t.texImage2D(34069+le,Me+1,oe,W,H,xe.image[le])}}O.__maxMipLevel=de.length}_(P,k)&&x(34067,P,D.width,D.height),O.__version=P.version,P.onUpdate&&P.onUpdate(P)}(U,E,A):(t.activeTexture(33984+A),t.bindTexture(34067,U.__webglTexture))}const z={1e3:10497,1001:33071,1002:33648},$={1003:9728,1004:9984,1005:9986,1006:9729,1007:9985,1008:9987};function V(E,A,U){if(U?(s.texParameteri(E,10242,z[A.wrapS]),s.texParameteri(E,10243,z[A.wrapT]),E!==32879&&E!==35866||s.texParameteri(E,32882,z[A.wrapR]),s.texParameteri(E,10240,$[A.magFilter]),s.texParameteri(E,10241,$[A.minFilter])):(s.texParameteri(E,10242,33071),s.texParameteri(E,10243,33071),E!==32879&&E!==35866||s.texParameteri(E,32882,33071),A.wrapS===1001&&A.wrapT===1001||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,10240,b(A.magFilter)),s.texParameteri(E,10241,b(A.minFilter)),A.minFilter!==1003&&A.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");if(A.type===1015&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===1016&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(s.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function F(E,A){E.__webglInit===void 0&&(E.__webglInit=!0,A.addEventListener("dispose",T),E.__webglTexture=s.createTexture(),a.memory.textures++)}function j(E,A,U){let O=3553;A.isDataTexture2DArray&&(O=35866),A.isDataTexture3D&&(O=32879),F(E,A),t.activeTexture(33984+U),t.bindTexture(O,E.__webglTexture),s.pixelStorei(37440,A.flipY),s.pixelStorei(37441,A.premultiplyAlpha),s.pixelStorei(3317,A.unpackAlignment),s.pixelStorei(37443,0);const P=function(H){return!o&&(H.wrapS!==1001||H.wrapT!==1001||H.minFilter!==1003&&H.minFilter!==1006)}(A)&&g(A.image)===!1,Z=y(A.image,P,!1,h),ee=g(Z)||o,B=r.convert(A.format);let S,D=r.convert(A.type),k=M(A.internalFormat,B,D,A.encoding);V(O,A,ee);const W=A.mipmaps;if(A.isDepthTexture)k=6402,o?k=A.type===1015?36012:A.type===1014?33190:A.type===1020?35056:33189:A.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===1026&&k===6402&&A.type!==1012&&A.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=1012,D=r.convert(A.type)),A.format===1027&&k===6402&&(k=34041,A.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=1020,D=r.convert(A.type))),t.texImage2D(3553,0,k,Z.width,Z.height,0,B,D,null);else if(A.isDataTexture)if(W.length>0&&ee){for(let H=0,oe=W.length;H<oe;H++)S=W[H],t.texImage2D(3553,H,k,S.width,S.height,0,B,D,S.data);A.generateMipmaps=!1,E.__maxMipLevel=W.length-1}else t.texImage2D(3553,0,k,Z.width,Z.height,0,B,D,Z.data),E.__maxMipLevel=0;else if(A.isCompressedTexture){for(let H=0,oe=W.length;H<oe;H++)S=W[H],A.format!==1023&&A.format!==1022?B!==null?t.compressedTexImage2D(3553,H,k,S.width,S.height,0,S.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,H,k,S.width,S.height,0,B,D,S.data);E.__maxMipLevel=W.length-1}else if(A.isDataTexture2DArray)t.texImage3D(35866,0,k,Z.width,Z.height,Z.depth,0,B,D,Z.data),E.__maxMipLevel=0;else if(A.isDataTexture3D)t.texImage3D(32879,0,k,Z.width,Z.height,Z.depth,0,B,D,Z.data),E.__maxMipLevel=0;else if(W.length>0&&ee){for(let H=0,oe=W.length;H<oe;H++)S=W[H],t.texImage2D(3553,H,k,B,D,S);A.generateMipmaps=!1,E.__maxMipLevel=W.length-1}else t.texImage2D(3553,0,k,B,D,Z),E.__maxMipLevel=0;_(A,ee)&&x(O,A,Z.width,Z.height),E.__version=A.version,A.onUpdate&&A.onUpdate(A)}function ie(E,A,U,O,P){const Z=r.convert(U.format),ee=r.convert(U.type),B=M(U.internalFormat,Z,ee,U.encoding);P===32879||P===35866?t.texImage3D(P,0,B,A.width,A.height,A.depth,0,Z,ee,null):t.texImage2D(P,0,B,A.width,A.height,0,Z,ee,null),t.bindFramebuffer(36160,E),s.framebufferTexture2D(36160,O,P,n.get(U).__webglTexture,0),t.bindFramebuffer(36160,null)}function ae(E,A,U){if(s.bindRenderbuffer(36161,E),A.depthBuffer&&!A.stencilBuffer){let O=33189;if(U){const P=A.depthTexture;P&&P.isDepthTexture&&(P.type===1015?O=36012:P.type===1014&&(O=33190));const Z=me(A);s.renderbufferStorageMultisample(36161,Z,O,A.width,A.height)}else s.renderbufferStorage(36161,O,A.width,A.height);s.framebufferRenderbuffer(36160,36096,36161,E)}else if(A.depthBuffer&&A.stencilBuffer){if(U){const O=me(A);s.renderbufferStorageMultisample(36161,O,35056,A.width,A.height)}else s.renderbufferStorage(36161,34041,A.width,A.height);s.framebufferRenderbuffer(36160,33306,36161,E)}else{const O=A.isWebGLMultipleRenderTargets===!0?A.texture[0]:A.texture,P=r.convert(O.format),Z=r.convert(O.type),ee=M(O.internalFormat,P,Z,O.encoding);if(U){const B=me(A);s.renderbufferStorageMultisample(36161,B,ee,A.width,A.height)}else s.renderbufferStorage(36161,ee,A.width,A.height)}s.bindRenderbuffer(36161,null)}function ce(E){const A=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture){if(U)throw new Error("target.depthTexture not supported in Cube render targets");(function(O,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,O),!P.depthTexture||!P.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(P.depthTexture).__webglTexture&&P.depthTexture.image.width===P.width&&P.depthTexture.image.height===P.height||(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),N(P.depthTexture,0);const Z=n.get(P.depthTexture).__webglTexture;if(P.depthTexture.format===1026)s.framebufferTexture2D(36160,36096,3553,Z,0);else{if(P.depthTexture.format!==1027)throw new Error("Unknown depthTexture format");s.framebufferTexture2D(36160,33306,3553,Z,0)}})(A.__webglFramebuffer,E)}else if(U){A.__webglDepthbuffer=[];for(let O=0;O<6;O++)t.bindFramebuffer(36160,A.__webglFramebuffer[O]),A.__webglDepthbuffer[O]=s.createRenderbuffer(),ae(A.__webglDepthbuffer[O],E,!1)}else t.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),ae(A.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function me(E){return o&&E.isWebGLMultisampleRenderTarget?Math.min(u,E.samples):0}let fe=!1,J=!1;this.allocateTextureUnit=function(){const E=C;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),C+=1,E},this.resetTextureUnits=function(){C=0},this.setTexture2D=N,this.setTexture2DArray=function(E,A){const U=n.get(E);E.version>0&&U.__version!==E.version?j(U,E,A):(t.activeTexture(33984+A),t.bindTexture(35866,U.__webglTexture))},this.setTexture3D=function(E,A){const U=n.get(E);E.version>0&&U.__version!==E.version?j(U,E,A):(t.activeTexture(33984+A),t.bindTexture(32879,U.__webglTexture))},this.setTextureCube=I,this.setupRenderTarget=function(E){const A=E.texture,U=n.get(E),O=n.get(A);E.addEventListener("dispose",R),E.isWebGLMultipleRenderTargets!==!0&&(O.__webglTexture=s.createTexture(),O.__version=A.version,a.memory.textures++);const P=E.isWebGLCubeRenderTarget===!0,Z=E.isWebGLMultipleRenderTargets===!0,ee=E.isWebGLMultisampleRenderTarget===!0,B=A.isDataTexture3D||A.isDataTexture2DArray,S=g(E)||o;if(!o||A.format!==1022||A.type!==1015&&A.type!==1016||(A.format=1023,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),P){U.__webglFramebuffer=[];for(let D=0;D<6;D++)U.__webglFramebuffer[D]=s.createFramebuffer()}else if(U.__webglFramebuffer=s.createFramebuffer(),Z)if(i.drawBuffers){const D=E.texture;for(let k=0,W=D.length;k<W;k++){const H=n.get(D[k]);H.__webglTexture===void 0&&(H.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(ee)if(o){U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=s.createRenderbuffer(),s.bindRenderbuffer(36161,U.__webglColorRenderbuffer);const D=r.convert(A.format),k=r.convert(A.type),W=M(A.internalFormat,D,k,A.encoding),H=me(E);s.renderbufferStorageMultisample(36161,H,W,E.width,E.height),t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064,36161,U.__webglColorRenderbuffer),s.bindRenderbuffer(36161,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),ae(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(P){t.bindTexture(34067,O.__webglTexture),V(34067,A,S);for(let D=0;D<6;D++)ie(U.__webglFramebuffer[D],E,A,36064,34069+D);_(A,S)&&x(34067,A,E.width,E.height),t.unbindTexture()}else if(Z){const D=E.texture;for(let k=0,W=D.length;k<W;k++){const H=D[k],oe=n.get(H);t.bindTexture(3553,oe.__webglTexture),V(3553,H,S),ie(U.__webglFramebuffer,E,H,36064+k,3553),_(H,S)&&x(3553,H,E.width,E.height)}t.unbindTexture()}else{let D=3553;B&&(o?D=A.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(D,O.__webglTexture),V(D,A,S),ie(U.__webglFramebuffer,E,A,36064,D),_(A,S)&&x(D,A,E.width,E.height,E.depth),t.unbindTexture()}E.depthBuffer&&ce(E)},this.updateRenderTargetMipmap=function(E){const A=g(E)||o,U=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let O=0,P=U.length;O<P;O++){const Z=U[O];if(_(Z,A)){const ee=E.isWebGLCubeRenderTarget?34067:3553,B=n.get(Z).__webglTexture;t.bindTexture(ee,B),x(ee,Z,E.width,E.height),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(E){if(E.isWebGLMultisampleRenderTarget)if(o){const A=E.width,U=E.height;let O=16384;E.depthBuffer&&(O|=256),E.stencilBuffer&&(O|=1024);const P=n.get(E);t.bindFramebuffer(36008,P.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,P.__webglFramebuffer),s.blitFramebuffer(0,0,A,U,0,0,A,U,O,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,P.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")},this.safeSetTexture2D=function(E,A){E&&E.isWebGLRenderTarget&&(fe===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),fe=!0),E=E.texture),N(E,A)},this.safeSetTextureCube=function(E,A){E&&E.isWebGLCubeRenderTarget&&(J===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),J=!0),E=E.texture),I(E,A)}}function Rl(s,e,t){const n=t.isWebGL2;return{convert:function(i){let r;if(i===1009)return 5121;if(i===1017)return 32819;if(i===1018)return 32820;if(i===1019)return 33635;if(i===1010)return 5120;if(i===1011)return 5122;if(i===1012)return 5123;if(i===1013)return 5124;if(i===1014)return 5125;if(i===1015)return 5126;if(i===1016)return n?5131:(r=e.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(i===1021)return 6406;if(i===1022)return 6407;if(i===1023)return 6408;if(i===1024)return 6409;if(i===1025)return 6410;if(i===1026)return 6402;if(i===1027)return 34041;if(i===1028)return 6403;if(i===1029)return 36244;if(i===1030)return 33319;if(i===1031)return 33320;if(i===1032)return 36248;if(i===1033)return 36249;if(i===33776||i===33777||i===33778||i===33779){if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(i===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===35840||i===35841||i===35842||i===35843){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(i===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(i===36196)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if((i===37492||i===37496)&&(r=e.get("WEBGL_compressed_texture_etc"),r!==null)){if(i===37492)return r.COMPRESSED_RGB8_ETC2;if(i===37496)return r.COMPRESSED_RGBA8_ETC2_EAC}return i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821||i===37840||i===37841||i===37842||i===37843||i===37844||i===37845||i===37846||i===37847||i===37848||i===37849||i===37850||i===37851||i===37852||i===37853?(r=e.get("WEBGL_compressed_texture_astc"),r!==null?i:null):i===36492?(r=e.get("EXT_texture_compression_bptc"),r!==null?i:null):i===1020?n?34042:(r=e.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):void 0}}}class Ma extends Ze{constructor(e=[]){super(),this.cameras=e}}Ma.prototype.isArrayCamera=!0;class Dn extends Te{constructor(){super(),this.type="Group"}}Dn.prototype.isGroup=!0;const ad={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ad))),c&&e.hand){a=!0;for(const v of e.hand.values()){const y=t.getJointPose(v,n);if(c.joints[v.jointName]===void 0){const _=new Dn;_.matrixAutoUpdate=!1,_.visible=!1,c.joints[v.jointName]=_,c.add(_)}const g=c.joints[v.jointName];y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=y.radius),g.visible=y!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}}class od extends an{constructor(e,t){super();const n=this,i=e.state;let r=null,a=1,o=null,l="local-floor",c=null,h=null,u=null,d=null,p=null,m=!1,v=null,y=null,g=null,_=null,x=null,M=null;const b=[],T=new Map,R=new Ze;R.layers.enable(1),R.viewport=new Pe;const C=new Ze;C.layers.enable(2),C.viewport=new Pe;const N=[R,C],I=new Ma;I.layers.enable(1),I.layers.enable(2);let z=null,$=null;function V(J){const E=T.get(J.inputSource);E&&E.dispatchEvent({type:J.type,data:J.inputSource})}function F(){T.forEach(function(J,E){J.disconnect(E)}),T.clear(),z=null,$=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),u&&t.deleteFramebuffer(u),v&&t.deleteFramebuffer(v),y&&t.deleteRenderbuffer(y),g&&t.deleteRenderbuffer(g),u=null,v=null,y=null,g=null,p=null,d=null,h=null,r=null,fe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}function j(J){const E=r.inputSources;for(let A=0;A<b.length;A++)T.set(E[A],b[A]);for(let A=0;A<J.removed.length;A++){const U=J.removed[A],O=T.get(U);O&&(O.dispatchEvent({type:"disconnected",data:U}),T.delete(U))}for(let A=0;A<J.added.length;A++){const U=J.added[A],O=T.get(U);O&&O.dispatchEvent({type:"connected",data:U})}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let E=b[J];return E===void 0&&(E=new wa,b[J]=E),E.getTargetRaySpace()},this.getControllerGrip=function(J){let E=b[J];return E===void 0&&(E=new wa,b[J]=E),E.getGripSpace()},this.getHand=function(J){let E=b[J];return E===void 0&&(E=new wa,b[J]=E),E.getHandSpace()},this.setFramebufferScaleFactor=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){l=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",F),r.addEventListener("inputsourceschange",j);const E=t.getContextAttributes();if(E.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0){const A={antialias:E.antialias,alpha:E.alpha,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,t,A),r.updateRenderState({baseLayer:p})}else if(t instanceof WebGLRenderingContext){const A={antialias:!0,alpha:E.alpha,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,t,A),r.updateRenderState({layers:[p]})}else{m=E.antialias;let A=null;E.depth&&(M=256,E.stencil&&(M|=1024),x=E.stencil?33306:36096,A=E.stencil?35056:33190);const U={colorFormat:E.alpha?32856:32849,depthFormat:A,scaleFactor:a};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(U),u=t.createFramebuffer(),r.updateRenderState({layers:[d]}),m&&(v=t.createFramebuffer(),y=t.createRenderbuffer(),t.bindRenderbuffer(36161,y),t.renderbufferStorageMultisample(36161,4,32856,d.textureWidth,d.textureHeight),i.bindFramebuffer(36160,v),t.framebufferRenderbuffer(36160,36064,36161,y),t.bindRenderbuffer(36161,null),A!==null&&(g=t.createRenderbuffer(),t.bindRenderbuffer(36161,g),t.renderbufferStorageMultisample(36161,4,A,d.textureWidth,d.textureHeight),t.framebufferRenderbuffer(36160,x,36161,g),t.bindRenderbuffer(36161,null)),i.bindFramebuffer(36160,null))}o=await r.requestReferenceSpace(l),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};const ie=new w,ae=new w;function ce(J,E){E===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(E.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;I.near=C.near=R.near=J.near,I.far=C.far=R.far=J.far,z===I.near&&$===I.far||(r.updateRenderState({depthNear:I.near,depthFar:I.far}),z=I.near,$=I.far);const E=J.parent,A=I.cameras;ce(I,E);for(let O=0;O<A.length;O++)ce(A[O],E);I.matrixWorld.decompose(I.position,I.quaternion,I.scale),J.position.copy(I.position),J.quaternion.copy(I.quaternion),J.scale.copy(I.scale),J.matrix.copy(I.matrix),J.matrixWorld.copy(I.matrixWorld);const U=J.children;for(let O=0,P=U.length;O<P;O++)U[O].updateMatrixWorld(!0);A.length===2?function(O,P,Z){ie.setFromMatrixPosition(P.matrixWorld),ae.setFromMatrixPosition(Z.matrixWorld);const ee=ie.distanceTo(ae),B=P.projectionMatrix.elements,S=Z.projectionMatrix.elements,D=B[14]/(B[10]-1),k=B[14]/(B[10]+1),W=(B[9]+1)/B[5],H=(B[9]-1)/B[5],oe=(B[8]-1)/B[0],de=(S[8]+1)/S[0],le=D*oe,Me=D*de,xe=ee/(-oe+de),Ke=xe*-oe;P.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Ke),O.translateZ(xe),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const De=D+xe,$e=k+xe,xt=le-Ke,Yn=Me+(ee-Ke),Jn=W*k/$e*De,Zn=H*k/$e*De;O.projectionMatrix.makePerspective(xt,Yn,Jn,Zn,De,$e)}(I,R,C):I.projectionMatrix.copy(R.projectionMatrix)},this.getCamera=function(){return I},this.getFoveation=function(){return d!==null?d.fixedFoveation:p!==null?p.fixedFoveation:void 0},this.setFoveation=function(J){d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)};let me=null;const fe=new Jo;fe.setAnimationLoop(function(J,E){if(c=E.getViewerPose(o),_=E,c!==null){const U=c.views;p!==null&&i.bindXRFramebuffer(p.framebuffer);let O=!1;U.length!==I.cameras.length&&(I.cameras.length=0,O=!0);for(let P=0;P<U.length;P++){const Z=U[P];let ee=null;if(p!==null)ee=p.getViewport(Z);else{const S=h.getViewSubImage(d,Z);i.bindXRFramebuffer(u),S.depthStencilTexture!==void 0&&t.framebufferTexture2D(36160,x,3553,S.depthStencilTexture,0),t.framebufferTexture2D(36160,36064,3553,S.colorTexture,0),ee=S.viewport}const B=N[P];B.matrix.fromArray(Z.transform.matrix),B.projectionMatrix.fromArray(Z.projectionMatrix),B.viewport.set(ee.x,ee.y,ee.width,ee.height),P===0&&I.matrix.copy(B.matrix),O===!0&&I.cameras.push(B)}m&&(i.bindXRFramebuffer(v),M!==null&&t.clear(M))}const A=r.inputSources;for(let U=0;U<b.length;U++){const O=b[U],P=A[U];O.update(P,E,o)}if(me&&me(J,E),m){const U=d.textureWidth,O=d.textureHeight;i.bindFramebuffer(36008,v),i.bindFramebuffer(36009,u),t.invalidateFramebuffer(36008,[x]),t.invalidateFramebuffer(36009,[x]),t.blitFramebuffer(0,0,U,O,0,0,U,O,16384,9728),t.invalidateFramebuffer(36008,[36064]),i.bindFramebuffer(36008,null),i.bindFramebuffer(36009,null),i.bindFramebuffer(36160,v)}_=null}),this.setAnimationLoop=function(J){me=J},this.dispose=function(){}}}function ld(s){function e(n,i){n.opacity.value=i.opacity,i.color&&n.diffuse.value.copy(i.color),i.emissive&&n.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),i.map&&(n.map.value=i.map),i.alphaMap&&(n.alphaMap.value=i.alphaMap),i.specularMap&&(n.specularMap.value=i.specularMap),i.alphaTest>0&&(n.alphaTest.value=i.alphaTest);const r=s.get(i).envMap;if(r){n.envMap.value=r,n.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=i.reflectivity,n.ior.value=i.ior,n.refractionRatio.value=i.refractionRatio;const l=s.get(r).__maxMipLevel;l!==void 0&&(n.maxMipLevel.value=l)}let a,o;i.lightMap&&(n.lightMap.value=i.lightMap,n.lightMapIntensity.value=i.lightMapIntensity),i.aoMap&&(n.aoMap.value=i.aoMap,n.aoMapIntensity.value=i.aoMapIntensity),i.map?a=i.map:i.specularMap?a=i.specularMap:i.displacementMap?a=i.displacementMap:i.normalMap?a=i.normalMap:i.bumpMap?a=i.bumpMap:i.roughnessMap?a=i.roughnessMap:i.metalnessMap?a=i.metalnessMap:i.alphaMap?a=i.alphaMap:i.emissiveMap?a=i.emissiveMap:i.clearcoatMap?a=i.clearcoatMap:i.clearcoatNormalMap?a=i.clearcoatNormalMap:i.clearcoatRoughnessMap?a=i.clearcoatRoughnessMap:i.specularIntensityMap?a=i.specularIntensityMap:i.specularColorMap?a=i.specularColorMap:i.transmissionMap?a=i.transmissionMap:i.thicknessMap?a=i.thicknessMap:i.sheenColorMap?a=i.sheenColorMap:i.sheenRoughnessMap&&(a=i.sheenRoughnessMap),a!==void 0&&(a.isWebGLRenderTarget&&(a=a.texture),a.matrixAutoUpdate===!0&&a.updateMatrix(),n.uvTransform.value.copy(a.matrix)),i.aoMap?o=i.aoMap:i.lightMap&&(o=i.lightMap),o!==void 0&&(o.isWebGLRenderTarget&&(o=o.texture),o.matrixAutoUpdate===!0&&o.updateMatrix(),n.uv2Transform.value.copy(o.matrix))}function t(n,i){n.roughness.value=i.roughness,n.metalness.value=i.metalness,i.roughnessMap&&(n.roughnessMap.value=i.roughnessMap),i.metalnessMap&&(n.metalnessMap.value=i.metalnessMap),i.emissiveMap&&(n.emissiveMap.value=i.emissiveMap),i.bumpMap&&(n.bumpMap.value=i.bumpMap,n.bumpScale.value=i.bumpScale,i.side===1&&(n.bumpScale.value*=-1)),i.normalMap&&(n.normalMap.value=i.normalMap,n.normalScale.value.copy(i.normalScale),i.side===1&&n.normalScale.value.negate()),i.displacementMap&&(n.displacementMap.value=i.displacementMap,n.displacementScale.value=i.displacementScale,n.displacementBias.value=i.displacementBias),s.get(i).envMap&&(n.envMapIntensity.value=i.envMapIntensity)}return{refreshFogUniforms:function(n,i){n.fogColor.value.copy(i.color),i.isFog?(n.fogNear.value=i.near,n.fogFar.value=i.far):i.isFogExp2&&(n.fogDensity.value=i.density)},refreshMaterialUniforms:function(n,i,r,a,o){i.isMeshBasicMaterial?e(n,i):i.isMeshLambertMaterial?(e(n,i),function(l,c){c.emissiveMap&&(l.emissiveMap.value=c.emissiveMap)}(n,i)):i.isMeshToonMaterial?(e(n,i),function(l,c){c.gradientMap&&(l.gradientMap.value=c.gradientMap),c.emissiveMap&&(l.emissiveMap.value=c.emissiveMap),c.bumpMap&&(l.bumpMap.value=c.bumpMap,l.bumpScale.value=c.bumpScale,c.side===1&&(l.bumpScale.value*=-1)),c.normalMap&&(l.normalMap.value=c.normalMap,l.normalScale.value.copy(c.normalScale),c.side===1&&l.normalScale.value.negate()),c.displacementMap&&(l.displacementMap.value=c.displacementMap,l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias)}(n,i)):i.isMeshPhongMaterial?(e(n,i),function(l,c){l.specular.value.copy(c.specular),l.shininess.value=Math.max(c.shininess,1e-4),c.emissiveMap&&(l.emissiveMap.value=c.emissiveMap),c.bumpMap&&(l.bumpMap.value=c.bumpMap,l.bumpScale.value=c.bumpScale,c.side===1&&(l.bumpScale.value*=-1)),c.normalMap&&(l.normalMap.value=c.normalMap,l.normalScale.value.copy(c.normalScale),c.side===1&&l.normalScale.value.negate()),c.displacementMap&&(l.displacementMap.value=c.displacementMap,l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias)}(n,i)):i.isMeshStandardMaterial?(e(n,i),i.isMeshPhysicalMaterial?function(l,c,h){t(l,c),l.ior.value=c.ior,c.sheen>0&&(l.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),l.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(l.sheenColorMap.value=c.sheenColorMap),c.sheenRoughnessMap&&(l.sheenRoughnessMap.value=c.sheenRoughnessMap)),c.clearcoat>0&&(l.clearcoat.value=c.clearcoat,l.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(l.clearcoatMap.value=c.clearcoatMap),c.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap),c.clearcoatNormalMap&&(l.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),l.clearcoatNormalMap.value=c.clearcoatNormalMap,c.side===1&&l.clearcoatNormalScale.value.negate())),c.transmission>0&&(l.transmission.value=c.transmission,l.transmissionSamplerMap.value=h.texture,l.transmissionSamplerSize.value.set(h.width,h.height),c.transmissionMap&&(l.transmissionMap.value=c.transmissionMap),l.thickness.value=c.thickness,c.thicknessMap&&(l.thicknessMap.value=c.thicknessMap),l.attenuationDistance.value=c.attenuationDistance,l.attenuationColor.value.copy(c.attenuationColor)),l.specularIntensity.value=c.specularIntensity,l.specularColor.value.copy(c.specularColor),c.specularIntensityMap&&(l.specularIntensityMap.value=c.specularIntensityMap),c.specularColorMap&&(l.specularColorMap.value=c.specularColorMap)}(n,i,o):t(n,i)):i.isMeshMatcapMaterial?(e(n,i),function(l,c){c.matcap&&(l.matcap.value=c.matcap),c.bumpMap&&(l.bumpMap.value=c.bumpMap,l.bumpScale.value=c.bumpScale,c.side===1&&(l.bumpScale.value*=-1)),c.normalMap&&(l.normalMap.value=c.normalMap,l.normalScale.value.copy(c.normalScale),c.side===1&&l.normalScale.value.negate()),c.displacementMap&&(l.displacementMap.value=c.displacementMap,l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias)}(n,i)):i.isMeshDepthMaterial?(e(n,i),function(l,c){c.displacementMap&&(l.displacementMap.value=c.displacementMap,l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias)}(n,i)):i.isMeshDistanceMaterial?(e(n,i),function(l,c){c.displacementMap&&(l.displacementMap.value=c.displacementMap,l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias),l.referencePosition.value.copy(c.referencePosition),l.nearDistance.value=c.nearDistance,l.farDistance.value=c.farDistance}(n,i)):i.isMeshNormalMaterial?(e(n,i),function(l,c){c.bumpMap&&(l.bumpMap.value=c.bumpMap,l.bumpScale.value=c.bumpScale,c.side===1&&(l.bumpScale.value*=-1)),c.normalMap&&(l.normalMap.value=c.normalMap,l.normalScale.value.copy(c.normalScale),c.side===1&&l.normalScale.value.negate()),c.displacementMap&&(l.displacementMap.value=c.displacementMap,l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias)}(n,i)):i.isLineBasicMaterial?(function(l,c){l.diffuse.value.copy(c.color),l.opacity.value=c.opacity}(n,i),i.isLineDashedMaterial&&function(l,c){l.dashSize.value=c.dashSize,l.totalSize.value=c.dashSize+c.gapSize,l.scale.value=c.scale}(n,i)):i.isPointsMaterial?function(l,c,h,u){l.diffuse.value.copy(c.color),l.opacity.value=c.opacity,l.size.value=c.size*h,l.scale.value=.5*u,c.map&&(l.map.value=c.map),c.alphaMap&&(l.alphaMap.value=c.alphaMap),c.alphaTest>0&&(l.alphaTest.value=c.alphaTest);let d;c.map?d=c.map:c.alphaMap&&(d=c.alphaMap),d!==void 0&&(d.matrixAutoUpdate===!0&&d.updateMatrix(),l.uvTransform.value.copy(d.matrix))}(n,i,r,a):i.isSpriteMaterial?function(l,c){l.diffuse.value.copy(c.color),l.opacity.value=c.opacity,l.rotation.value=c.rotation,c.map&&(l.map.value=c.map),c.alphaMap&&(l.alphaMap.value=c.alphaMap),c.alphaTest>0&&(l.alphaTest.value=c.alphaTest);let h;c.map?h=c.map:c.alphaMap&&(h=c.alphaMap),h!==void 0&&(h.matrixAutoUpdate===!0&&h.updateMatrix(),l.uvTransform.value.copy(h.matrix))}(n,i):i.isShadowMaterial?(n.color.value.copy(i.color),n.opacity.value=i.opacity):i.isShaderMaterial&&(i.uniformsNeedUpdate=!1)}}}function Ie(s={}){const e=s.canvas!==void 0?s.canvas:function(){const L=wr("canvas");return L.style.display="block",L}(),t=s.context!==void 0?s.context:null,n=s.alpha!==void 0&&s.alpha,i=s.depth===void 0||s.depth,r=s.stencil===void 0||s.stencil,a=s.antialias!==void 0&&s.antialias,o=s.premultipliedAlpha===void 0||s.premultipliedAlpha,l=s.preserveDrawingBuffer!==void 0&&s.preserveDrawingBuffer,c=s.powerPreference!==void 0?s.powerPreference:"default",h=s.failIfMajorPerformanceCaveat!==void 0&&s.failIfMajorPerformanceCaveat;let u=null,d=null;const p=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=3e3,this.physicallyCorrectLights=!1,this.toneMapping=0,this.toneMappingExposure=1;const v=this;let y=!1,g=0,_=0,x=null,M=-1,b=null;const T=new Pe,R=new Pe;let C=null,N=e.width,I=e.height,z=1,$=null,V=null;const F=new Pe(0,0,N,I),j=new Pe(0,0,N,I);let ie=!1;const ae=[],ce=new Wi;let me=!1,fe=!1,J=null;const E=new ue,A=new w,U={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function O(){return x===null?z:1}let P,Z,ee,B,S,D,k,W,H,oe,de,le,Me,xe,Ke,De,$e,xt,Yn,Jn,Zn,wt,Qn,ne=t;function ah(L,G){for(let q=0;q<L.length;q++){const Q=L[q],K=e.getContext(Q,G);if(K!==null)return K}return null}try{const L={alpha:n,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if(e.addEventListener("webglcontextlost",lh,!1),e.addEventListener("webglcontextrestored",ch,!1),ne===null){const G=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&G.shift(),ne=ah(G,L),ne===null)throw ah(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}ne.getShaderPrecisionFormat===void 0&&(ne.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}function oh(){P=new qh(ne),Z=new Hh(ne,P,s),P.init(Z),wt=new Rl(ne,P,Z),ee=new rd(ne,P,Z),ae[0]=1029,B=new Jh,S=new Zu,D=new sd(ne,P,ee,S,Z,wt,B),k=new kh(v),W=new jh(v),H=new Bh(ne,Z),Qn=new Oh(ne,P,H,Z),oe=new Xh(ne,H,B,Qn),de=new $h(ne,oe,H,B),Yn=new Kh(ne,Z,D),De=new Gh(S),le=new Ju(v,k,W,P,Z,Qn,De),Me=new ld(S),xe=new Ku(S),Ke=new id(P,Z),xt=new Fh(v,k,ee,de,o),$e=new Ll(v,de,Z),Jn=new Uh(ne,P,B,Z),Zn=new Yh(ne,P,B,Z),B.programs=le.programs,v.capabilities=Z,v.extensions=P,v.properties=S,v.renderLists=xe,v.shadowMap=$e,v.state=ee,v.info=B}oh();const _t=new od(v,ne);function lh(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ch(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const L=B.autoReset,G=$e.enabled,q=$e.autoUpdate,Q=$e.needsUpdate,K=$e.type;oh(),B.autoReset=L,$e.enabled=G,$e.autoUpdate=q,$e.needsUpdate=Q,$e.type=K}function hh(L){const G=L.target;G.removeEventListener("dispose",hh),function(q){(function(Q){const K=S.get(Q).programs;K!==void 0&&K.forEach(function(_e){le.releaseProgram(_e)})})(q),S.remove(q)}(G)}this.xr=_t,this.getContext=function(){return ne},this.getContextAttributes=function(){return ne.getContextAttributes()},this.forceContextLoss=function(){const L=P.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=P.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(L){L!==void 0&&(z=L,this.setSize(N,I,!1))},this.getSize=function(L){return L.set(N,I)},this.setSize=function(L,G,q){_t.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(N=L,I=G,e.width=Math.floor(L*z),e.height=Math.floor(G*z),q!==!1&&(e.style.width=L+"px",e.style.height=G+"px"),this.setViewport(0,0,L,G))},this.getDrawingBufferSize=function(L){return L.set(N*z,I*z).floor()},this.setDrawingBufferSize=function(L,G,q){N=L,I=G,z=q,e.width=Math.floor(L*q),e.height=Math.floor(G*q),this.setViewport(0,0,L,G)},this.getCurrentViewport=function(L){return L.copy(T)},this.getViewport=function(L){return L.copy(F)},this.setViewport=function(L,G,q,Q){L.isVector4?F.set(L.x,L.y,L.z,L.w):F.set(L,G,q,Q),ee.viewport(T.copy(F).multiplyScalar(z).floor())},this.getScissor=function(L){return L.copy(j)},this.setScissor=function(L,G,q,Q){L.isVector4?j.set(L.x,L.y,L.z,L.w):j.set(L,G,q,Q),ee.scissor(R.copy(j).multiplyScalar(z).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(L){ee.setScissorTest(ie=L)},this.setOpaqueSort=function(L){$=L},this.setTransparentSort=function(L){V=L},this.getClearColor=function(L){return L.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor.apply(xt,arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha.apply(xt,arguments)},this.clear=function(L,G,q){let Q=0;(L===void 0||L)&&(Q|=16384),(G===void 0||G)&&(Q|=256),(q===void 0||q)&&(Q|=1024),ne.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lh,!1),e.removeEventListener("webglcontextrestored",ch,!1),xe.dispose(),Ke.dispose(),S.dispose(),k.dispose(),W.dispose(),de.dispose(),Qn.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",uh),_t.removeEventListener("sessionend",dh),J&&(J.dispose(),J=null),Kn.stop()},this.renderBufferDirect=function(L,G,q,Q,K,_e){G===null&&(G=U);const ge=K.isMesh&&K.matrixWorld.determinant()<0,we=function(st,gr,It,be,tt){gr.isScene!==!0&&(gr=U),D.resetTextureUnits();const xo=gr.fog,Vd=be.isMeshStandardMaterial?gr.environment:null,Wd=x===null?v.outputEncoding:x.texture.encoding,jd=(be.isMeshStandardMaterial?W:k).get(be.envMap||Vd),qd=be.vertexColors===!0&&!!It.attributes.color&&It.attributes.color.itemSize===4,Xd=!!be.normalMap&&!!It.attributes.tangent,Yd=!!It.morphAttributes.position,Jd=!!It.morphAttributes.normal,Zd=It.morphAttributes.position?It.morphAttributes.position.length:0,Be=S.get(be),Qd=d.state.lights;if(me===!0&&(fe===!0||st!==b)){const Nt=st===b&&be.id===M;De.setState(be,st,Nt)}let nn=!1;be.version===Be.__version?Be.needsLights&&Be.lightsStateVersion!==Qd.state.version||Be.outputEncoding!==Wd||tt.isInstancedMesh&&Be.instancing===!1?nn=!0:tt.isInstancedMesh||Be.instancing!==!0?tt.isSkinnedMesh&&Be.skinning===!1?nn=!0:tt.isSkinnedMesh||Be.skinning!==!0?Be.envMap!==jd||be.fog&&Be.fog!==xo?nn=!0:Be.numClippingPlanes===void 0||Be.numClippingPlanes===De.numPlanes&&Be.numIntersection===De.numIntersection?(Be.vertexAlphas!==qd||Be.vertexTangents!==Xd||Be.morphTargets!==Yd||Be.morphNormals!==Jd||Z.isWebGL2===!0&&Be.morphTargetsCount!==Zd)&&(nn=!0):nn=!0:nn=!0:nn=!0:(nn=!0,Be.__version=be.version);let vr=Be.currentProgram;nn===!0&&(vr=vo(be,gr,tt));let gh=!1,yr=!1,_o=!1;const ht=vr.getUniforms(),xr=Be.uniforms;if(ee.useProgram(vr.program)&&(gh=!0,yr=!0,_o=!0),be.id!==M&&(M=be.id,yr=!0),gh||b!==st){if(ht.setValue(ne,"projectionMatrix",st.projectionMatrix),Z.logarithmicDepthBuffer&&ht.setValue(ne,"logDepthBufFC",2/(Math.log(st.far+1)/Math.LN2)),b!==st&&(b=st,yr=!0,_o=!0),be.isShaderMaterial||be.isMeshPhongMaterial||be.isMeshToonMaterial||be.isMeshStandardMaterial||be.envMap){const Nt=ht.map.cameraPosition;Nt!==void 0&&Nt.setValue(ne,A.setFromMatrixPosition(st.matrixWorld))}(be.isMeshPhongMaterial||be.isMeshToonMaterial||be.isMeshLambertMaterial||be.isMeshBasicMaterial||be.isMeshStandardMaterial||be.isShaderMaterial)&&ht.setValue(ne,"isOrthographic",st.isOrthographicCamera===!0),(be.isMeshPhongMaterial||be.isMeshToonMaterial||be.isMeshLambertMaterial||be.isMeshBasicMaterial||be.isMeshStandardMaterial||be.isShaderMaterial||be.isShadowMaterial||tt.isSkinnedMesh)&&ht.setValue(ne,"viewMatrix",st.matrixWorldInverse)}if(tt.isSkinnedMesh){ht.setOptional(ne,tt,"bindMatrix"),ht.setOptional(ne,tt,"bindMatrixInverse");const Nt=tt.skeleton;Nt&&(Z.floatVertexTextures?(Nt.boneTexture===null&&Nt.computeBoneTexture(),ht.setValue(ne,"boneTexture",Nt.boneTexture,D),ht.setValue(ne,"boneTextureSize",Nt.boneTextureSize)):ht.setOptional(ne,Nt,"boneMatrices"))}!It||It.morphAttributes.position===void 0&&It.morphAttributes.normal===void 0||Yn.update(tt,It,be,vr),(yr||Be.receiveShadow!==tt.receiveShadow)&&(Be.receiveShadow=tt.receiveShadow,ht.setValue(ne,"receiveShadow",tt.receiveShadow)),yr&&(ht.setValue(ne,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&(Dt=_o,(Vt=xr).ambientLightColor.needsUpdate=Dt,Vt.lightProbe.needsUpdate=Dt,Vt.directionalLights.needsUpdate=Dt,Vt.directionalLightShadows.needsUpdate=Dt,Vt.pointLights.needsUpdate=Dt,Vt.pointLightShadows.needsUpdate=Dt,Vt.spotLights.needsUpdate=Dt,Vt.spotLightShadows.needsUpdate=Dt,Vt.rectAreaLights.needsUpdate=Dt,Vt.hemisphereLights.needsUpdate=Dt),xo&&be.fog&&Me.refreshFogUniforms(xr,xo),Me.refreshMaterialUniforms(xr,be,z,I,J),vn.upload(ne,Be.uniformsList,xr,D));var Vt,Dt;return be.isShaderMaterial&&be.uniformsNeedUpdate===!0&&(vn.upload(ne,Be.uniformsList,xr,D),be.uniformsNeedUpdate=!1),be.isSpriteMaterial&&ht.setValue(ne,"center",tt.center),ht.setValue(ne,"modelViewMatrix",tt.modelViewMatrix),ht.setValue(ne,"normalMatrix",tt.normalMatrix),ht.setValue(ne,"modelMatrix",tt.matrixWorld),vr}(L,G,q,Q,K);ee.setMaterial(Q,ge);let Le=q.index;const Ue=q.attributes.position;if(Le===null){if(Ue===void 0||Ue.count===0)return}else if(Le.count===0)return;let Ce,Ee=1;Q.wireframe===!0&&(Le=oe.getWireframeAttribute(q),Ee=2),Qn.setup(K,Q,we,q,Le);let et=Jn;Le!==null&&(Ce=H.get(Le),et=Zn,et.setIndex(Ce));const fr=Le!==null?Le.count:Ue.count,bt=q.drawRange.start*Ee,yo=q.drawRange.count*Ee,wn=_e!==null?_e.start*Ee:0,Gd=_e!==null?_e.count*Ee:1/0,Is=Math.max(bt,wn),kd=Math.min(fr,bt+yo,wn+Gd)-1,Ds=Math.max(0,kd-Is+1);if(Ds!==0){if(K.isMesh)Q.wireframe===!0?(ee.setLineWidth(Q.wireframeLinewidth*O()),et.setMode(1)):et.setMode(4);else if(K.isLine){let st=Q.linewidth;st===void 0&&(st=1),ee.setLineWidth(st*O()),K.isLineSegments?et.setMode(1):K.isLineLoop?et.setMode(2):et.setMode(3)}else K.isPoints?et.setMode(0):K.isSprite&&et.setMode(4);if(K.isInstancedMesh)et.renderInstances(Is,Ds,K.count);else if(q.isInstancedBufferGeometry){const st=Math.min(q.instanceCount,q._maxInstanceCount);et.renderInstances(Is,Ds,st)}else et.render(Is,Ds)}},this.compile=function(L,G){d=Ke.get(L),d.init(),m.push(d),L.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(d.pushLight(q),q.castShadow&&d.pushShadow(q))}),d.setupLights(v.physicallyCorrectLights),L.traverse(function(q){const Q=q.material;if(Q)if(Array.isArray(Q))for(let K=0;K<Q.length;K++)vo(Q[K],L,q);else vo(Q,L,q)}),m.pop(),d=null};let go=null;function uh(){Kn.stop()}function dh(){Kn.start()}const Kn=new Jo;function ph(L,G,q,Q){if(L.visible===!1)return;if(L.layers.test(G.layers)){if(L.isGroup)q=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(G);else if(L.isLight)d.pushLight(L),L.castShadow&&d.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||ce.intersectsSprite(L)){Q&&A.setFromMatrixPosition(L.matrixWorld).applyMatrix4(E);const _e=de.update(L),ge=L.material;ge.visible&&u.push(L,_e,ge,q,A.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(L.isSkinnedMesh&&L.skeleton.frame!==B.render.frame&&(L.skeleton.update(),L.skeleton.frame=B.render.frame),!L.frustumCulled||ce.intersectsObject(L))){Q&&A.setFromMatrixPosition(L.matrixWorld).applyMatrix4(E);const _e=de.update(L),ge=L.material;if(Array.isArray(ge)){const we=_e.groups;for(let Le=0,Ue=we.length;Le<Ue;Le++){const Ce=we[Le],Ee=ge[Ce.materialIndex];Ee&&Ee.visible&&u.push(L,_e,Ee,q,A.z,Ce)}}else ge.visible&&u.push(L,_e,ge,q,A.z,null)}}const K=L.children;for(let _e=0,ge=K.length;_e<ge;_e++)ph(K[_e],G,q,Q)}function mh(L,G,q,Q){const K=L.opaque,_e=L.transmissive,ge=L.transparent;d.setupLightsView(q),_e.length>0&&function(we,Le,Ue){if(J===null){const et=a===!0&&Z.isWebGL2===!0;J=new(et?Ws:Tt)(1024,1024,{generateMipmaps:!0,type:wt.convert(1016)!==null?1016:1009,minFilter:1008,magFilter:1003,wrapS:1001,wrapT:1001})}const Ce=v.getRenderTarget();v.setRenderTarget(J),v.clear();const Ee=v.toneMapping;v.toneMapping=0,Ps(we,Le,Ue),v.toneMapping=Ee,D.updateMultisampleRenderTarget(J),D.updateRenderTargetMipmap(J),v.setRenderTarget(Ce)}(K,G,q),Q&&ee.viewport(T.copy(Q)),K.length>0&&Ps(K,G,q),_e.length>0&&Ps(_e,G,q),ge.length>0&&Ps(ge,G,q)}function Ps(L,G,q){const Q=G.isScene===!0?G.overrideMaterial:null;for(let K=0,_e=L.length;K<_e;K++){const ge=L[K],we=ge.object,Le=ge.geometry,Ue=Q===null?ge.material:Q,Ce=ge.group;we.layers.test(q.layers)&&Hd(we,G,q,Le,Ue,Ce)}}function Hd(L,G,q,Q,K,_e){L.onBeforeRender(v,G,q,Q,K,_e),L.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),K.onBeforeRender(v,G,q,Q,L,_e),K.transparent===!0&&K.side===2?(K.side=1,K.needsUpdate=!0,v.renderBufferDirect(q,G,Q,K,L,_e),K.side=0,K.needsUpdate=!0,v.renderBufferDirect(q,G,Q,K,L,_e),K.side=2):v.renderBufferDirect(q,G,Q,K,L,_e),L.onAfterRender(v,G,q,Q,K,_e)}function vo(L,G,q){G.isScene!==!0&&(G=U);const Q=S.get(L),K=d.state.lights,_e=d.state.shadowsArray,ge=K.state.version,we=le.getParameters(L,K.state,_e,G,q),Le=le.getProgramCacheKey(we);let Ue=Q.programs;Q.environment=L.isMeshStandardMaterial?G.environment:null,Q.fog=G.fog,Q.envMap=(L.isMeshStandardMaterial?W:k).get(L.envMap||Q.environment),Ue===void 0&&(L.addEventListener("dispose",hh),Ue=new Map,Q.programs=Ue);let Ce=Ue.get(Le);if(Ce!==void 0){if(Q.currentProgram===Ce&&Q.lightsStateVersion===ge)return fh(L,we),Ce}else we.uniforms=le.getUniforms(L),L.onBuild(q,we,v),L.onBeforeCompile(we,v),Ce=le.acquireProgram(we,Le),Ue.set(Le,Ce),Q.uniforms=we.uniforms;const Ee=Q.uniforms;(L.isShaderMaterial||L.isRawShaderMaterial)&&L.clipping!==!0||(Ee.clippingPlanes=De.uniform),fh(L,we),Q.needsLights=function(bt){return bt.isMeshLambertMaterial||bt.isMeshToonMaterial||bt.isMeshPhongMaterial||bt.isMeshStandardMaterial||bt.isShadowMaterial||bt.isShaderMaterial&&bt.lights===!0}(L),Q.lightsStateVersion=ge,Q.needsLights&&(Ee.ambientLightColor.value=K.state.ambient,Ee.lightProbe.value=K.state.probe,Ee.directionalLights.value=K.state.directional,Ee.directionalLightShadows.value=K.state.directionalShadow,Ee.spotLights.value=K.state.spot,Ee.spotLightShadows.value=K.state.spotShadow,Ee.rectAreaLights.value=K.state.rectArea,Ee.ltc_1.value=K.state.rectAreaLTC1,Ee.ltc_2.value=K.state.rectAreaLTC2,Ee.pointLights.value=K.state.point,Ee.pointLightShadows.value=K.state.pointShadow,Ee.hemisphereLights.value=K.state.hemi,Ee.directionalShadowMap.value=K.state.directionalShadowMap,Ee.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ee.spotShadowMap.value=K.state.spotShadowMap,Ee.spotShadowMatrix.value=K.state.spotShadowMatrix,Ee.pointShadowMap.value=K.state.pointShadowMap,Ee.pointShadowMatrix.value=K.state.pointShadowMatrix);const et=Ce.getUniforms(),fr=vn.seqWithValue(et.seq,Ee);return Q.currentProgram=Ce,Q.uniformsList=fr,Ce}function fh(L,G){const q=S.get(L);q.outputEncoding=G.outputEncoding,q.instancing=G.instancing,q.skinning=G.skinning,q.morphTargets=G.morphTargets,q.morphNormals=G.morphNormals,q.morphTargetsCount=G.morphTargetsCount,q.numClippingPlanes=G.numClippingPlanes,q.numIntersection=G.numClipIntersection,q.vertexAlphas=G.vertexAlphas,q.vertexTangents=G.vertexTangents}Kn.setAnimationLoop(function(L){go&&go(L)}),typeof window<"u"&&Kn.setContext(window),this.setAnimationLoop=function(L){go=L,_t.setAnimationLoop(L),L===null?Kn.stop():Kn.start()},_t.addEventListener("sessionstart",uh),_t.addEventListener("sessionend",dh),this.render=function(L,G){if(G!==void 0&&G.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(y===!0)return;L.autoUpdate===!0&&L.updateMatrixWorld(),G.parent===null&&G.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(G),G=_t.getCamera()),L.isScene===!0&&L.onBeforeRender(v,L,G,x),d=Ke.get(L,m.length),d.init(),m.push(d),E.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ce.setFromProjectionMatrix(E),fe=this.localClippingEnabled,me=De.init(this.clippingPlanes,fe,G),u=xe.get(L,p.length),u.init(),p.push(u),ph(L,G,0,v.sortObjects),u.finish(),v.sortObjects===!0&&u.sort($,V),me===!0&&De.beginShadows();const q=d.state.shadowsArray;if($e.render(q,L,G),me===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),xt.render(u,L),d.setupLights(v.physicallyCorrectLights),G.isArrayCamera){const Q=G.cameras;for(let K=0,_e=Q.length;K<_e;K++){const ge=Q[K];mh(u,L,ge,ge.viewport)}}else mh(u,L,G);x!==null&&(D.updateMultisampleRenderTarget(x),D.updateRenderTargetMipmap(x)),L.isScene===!0&&L.onAfterRender(v,L,G),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1),Qn.resetDefaultState(),M=-1,b=null,m.pop(),d=m.length>0?m[m.length-1]:null,p.pop(),u=p.length>0?p[p.length-1]:null},this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return x},this.setRenderTarget=function(L,G=0,q=0){x=L,g=G,_=q,L&&S.get(L).__webglFramebuffer===void 0&&D.setupRenderTarget(L);let Q=null,K=!1,_e=!1;if(L){const ge=L.texture;(ge.isDataTexture3D||ge.isDataTexture2DArray)&&(_e=!0);const we=S.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Q=we[G],K=!0):Q=L.isWebGLMultisampleRenderTarget?S.get(L).__webglMultisampledFramebuffer:we,T.copy(L.viewport),R.copy(L.scissor),C=L.scissorTest}else T.copy(F).multiplyScalar(z).floor(),R.copy(j).multiplyScalar(z).floor(),C=ie;if(ee.bindFramebuffer(36160,Q)&&Z.drawBuffers){let ge=!1;if(L)if(L.isWebGLMultipleRenderTargets){const we=L.texture;if(ae.length!==we.length||ae[0]!==36064){for(let Le=0,Ue=we.length;Le<Ue;Le++)ae[Le]=36064+Le;ae.length=we.length,ge=!0}}else ae.length===1&&ae[0]===36064||(ae[0]=36064,ae.length=1,ge=!0);else ae.length===1&&ae[0]===1029||(ae[0]=1029,ae.length=1,ge=!0);ge&&(Z.isWebGL2?ne.drawBuffers(ae):P.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}if(ee.viewport(T),ee.scissor(R),ee.setScissorTest(C),K){const ge=S.get(L.texture);ne.framebufferTexture2D(36160,36064,34069+G,ge.__webglTexture,q)}else if(_e){const ge=S.get(L.texture),we=G||0;ne.framebufferTextureLayer(36160,36064,ge.__webglTexture,q||0,we)}M=-1},this.readRenderTargetPixels=function(L,G,q,Q,K,_e,ge){if(!L||!L.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=S.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){ee.bindFramebuffer(36160,we);try{const Le=L.texture,Ue=Le.format,Ce=Le.type;if(Ue!==1023&&wt.convert(Ue)!==ne.getParameter(35739))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");const Ee=Ce===1016&&(P.has("EXT_color_buffer_half_float")||Z.isWebGL2&&P.has("EXT_color_buffer_float"));if(!(Ce===1009||wt.convert(Ce)===ne.getParameter(35738)||Ce===1015&&(Z.isWebGL2||P.has("OES_texture_float")||P.has("WEBGL_color_buffer_float"))||Ee))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");ne.checkFramebufferStatus(36160)===36053?G>=0&&G<=L.width-Q&&q>=0&&q<=L.height-K&&ne.readPixels(G,q,Q,K,wt.convert(Ue),wt.convert(Ce),_e):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Le=x!==null?S.get(x).__webglFramebuffer:null;ee.bindFramebuffer(36160,Le)}}},this.copyFramebufferToTexture=function(L,G,q=0){const Q=Math.pow(2,-q),K=Math.floor(G.image.width*Q),_e=Math.floor(G.image.height*Q);let ge=wt.convert(G.format);Z.isWebGL2&&(ge===6407&&(ge=32849),ge===6408&&(ge=32856)),D.setTexture2D(G,0),ne.copyTexImage2D(3553,q,ge,L.x,L.y,K,_e,0),ee.unbindTexture()},this.copyTextureToTexture=function(L,G,q,Q=0){const K=G.image.width,_e=G.image.height,ge=wt.convert(q.format),we=wt.convert(q.type);D.setTexture2D(q,0),ne.pixelStorei(37440,q.flipY),ne.pixelStorei(37441,q.premultiplyAlpha),ne.pixelStorei(3317,q.unpackAlignment),G.isDataTexture?ne.texSubImage2D(3553,Q,L.x,L.y,K,_e,ge,we,G.image.data):G.isCompressedTexture?ne.compressedTexSubImage2D(3553,Q,L.x,L.y,G.mipmaps[0].width,G.mipmaps[0].height,ge,G.mipmaps[0].data):ne.texSubImage2D(3553,Q,L.x,L.y,ge,we,G.image),Q===0&&q.generateMipmaps&&ne.generateMipmap(3553),ee.unbindTexture()},this.copyTextureToTexture3D=function(L,G,q,Q,K=0){if(v.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");const _e=L.max.x-L.min.x+1,ge=L.max.y-L.min.y+1,we=L.max.z-L.min.z+1,Le=wt.convert(Q.format),Ue=wt.convert(Q.type);let Ce;if(Q.isDataTexture3D)D.setTexture3D(Q,0),Ce=32879;else{if(!Q.isDataTexture2DArray)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");D.setTexture2DArray(Q,0),Ce=35866}ne.pixelStorei(37440,Q.flipY),ne.pixelStorei(37441,Q.premultiplyAlpha),ne.pixelStorei(3317,Q.unpackAlignment);const Ee=ne.getParameter(3314),et=ne.getParameter(32878),fr=ne.getParameter(3316),bt=ne.getParameter(3315),yo=ne.getParameter(32877),wn=q.isCompressedTexture?q.mipmaps[0]:q.image;ne.pixelStorei(3314,wn.width),ne.pixelStorei(32878,wn.height),ne.pixelStorei(3316,L.min.x),ne.pixelStorei(3315,L.min.y),ne.pixelStorei(32877,L.min.z),q.isDataTexture||q.isDataTexture3D?ne.texSubImage3D(Ce,K,G.x,G.y,G.z,_e,ge,we,Le,Ue,wn.data):q.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ne.compressedTexSubImage3D(Ce,K,G.x,G.y,G.z,_e,ge,we,Le,wn.data)):ne.texSubImage3D(Ce,K,G.x,G.y,G.z,_e,ge,we,Le,Ue,wn),ne.pixelStorei(3314,Ee),ne.pixelStorei(32878,et),ne.pixelStorei(3316,fr),ne.pixelStorei(3315,bt),ne.pixelStorei(32877,yo),K===0&&Q.generateMipmaps&&ne.generateMipmap(Ce),ee.unbindTexture()},this.initTexture=function(L){D.setTexture2D(L,0),ee.unbindTexture()},this.resetState=function(){g=0,_=0,x=null,ee.reset(),Qn.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Ie.prototype.isWebGLRenderer=!0;class Cl extends Ie{}Cl.prototype.isWebGL1Renderer=!0;class Yi{constructor(e,t=25e-5){this.name="",this.color=new se(e),this.density=t}clone(){return new Yi(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}Yi.prototype.isFogExp2=!0;class Ji{constructor(e,t=1,n=1e3){this.name="",this.color=new se(e),this.near=t,this.far=n}clone(){return new Ji(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}Ji.prototype.isFog=!0;class Zr extends Te{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Zr.prototype.isScene=!0;class Nn{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=mt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}Nn.prototype.isInterleavedBuffer=!0;const Ve=new w;class yn{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ve.x=this.getX(t),Ve.y=this.getY(t),Ve.z=this.getZ(t),Ve.applyMatrix4(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ve.x=this.getX(t),Ve.y=this.getY(t),Ve.z=this.getZ(t),Ve.applyNormalMatrix(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ve.x=this.getX(t),Ve.y=this.getY(t),Ve.z=this.getZ(t),Ve.transformDirection(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ae(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new yn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}yn.prototype.isInterleavedBufferAttribute=!0;class Qr extends Ye{constructor(e){super(),this.type="SpriteMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}let xi;Qr.prototype.isSpriteMaterial=!0;const Zi=new w,_i=new w,Mi=new w,wi=new X,Qi=new X,Pl=new ue,Kr=new w,Ki=new w,$r=new w,Il=new X,ba=new X,Dl=new X;class es extends Te{constructor(e){if(super(),this.type="Sprite",xi===void 0){xi=new ve;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Nn(t,5);xi.setIndex([0,1,2,0,2,3]),xi.setAttribute("position",new yn(n,3,0,!1)),xi.setAttribute("uv",new yn(n,2,3,!1))}this.geometry=xi,this.material=e!==void 0?e:new Qr,this.center=new X(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_i.setFromMatrixScale(this.matrixWorld),Pl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Mi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_i.multiplyScalar(-Mi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;ts(Kr.set(-.5,-.5,0),Mi,a,_i,i,r),ts(Ki.set(.5,-.5,0),Mi,a,_i,i,r),ts($r.set(.5,.5,0),Mi,a,_i,i,r),Il.set(0,0),ba.set(1,0),Dl.set(1,1);let o=e.ray.intersectTriangle(Kr,Ki,$r,!1,Zi);if(o===null&&(ts(Ki.set(-.5,.5,0),Mi,a,_i,i,r),ba.set(0,1),o=e.ray.intersectTriangle(Kr,$r,Ki,!1,Zi),o===null))return;const l=e.ray.origin.distanceTo(Zi);l<e.near||l>e.far||t.push({distance:l,point:Zi.clone(),uv:ke.getUV(Zi,Kr,Ki,$r,Il,ba,Dl,new X),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ts(s,e,t,n,i,r){wi.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Qi.x=r*wi.x-i*wi.y,Qi.y=i*wi.x+r*wi.y):Qi.copy(wi),s.copy(e),s.x+=Qi.x,s.y+=Qi.y,s.applyMatrix4(Pl)}es.prototype.isSprite=!0;const ns=new w,Nl=new w;class zl extends Te{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0){t=Math.abs(t);const n=this.levels;let i;for(i=0;i<n.length&&!(t<n[i].distance);i++);return n.splice(i,0,{distance:t,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i&&!(e<t[n].distance);n++);return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){ns.setFromMatrixPosition(this.matrixWorld);const n=e.ray.origin.distanceTo(ns);this.getObjectForDistance(n).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){ns.setFromMatrixPosition(e.matrixWorld),Nl.setFromMatrixPosition(this.matrixWorld);const n=ns.distanceTo(Nl)/e.zoom;let i,r;for(t[0].object.visible=!0,i=1,r=t.length;i<r&&n>=t[i].distance;i++)t[i-1].object.visible=!1,t[i].object.visible=!0;for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance})}return t}}const Bl=new w,Fl=new Pe,Ol=new Pe,cd=new w,Ul=new ue;class is extends je{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ue,this.bindMatrixInverse=new ue}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Pe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Fl.fromBufferAttribute(i.attributes.skinIndex,e),Ol.fromBufferAttribute(i.attributes.skinWeight,e),Bl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Ol.getComponent(r);if(a!==0){const o=Fl.getComponent(r);Ul.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(cd.copy(Bl).applyMatrix4(Ul),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}is.prototype.isSkinnedMesh=!0;class rs extends Te{constructor(){super(),this.type="Bone"}}rs.prototype.isBone=!0;class zn extends Xe{constructor(e=null,t=1,n=1,i,r,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,i,r,u,d),this.image={data:e,width:t,height:n},this.magFilter=c,this.minFilter=h,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}zn.prototype.isDataTexture=!0;const Hl=new ue,hd=new ue;class ss{constructor(e=[],t=[]){this.uuid=mt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:hd;Hl.multiplyMatrices(o,t[r]),Hl.toArray(n,16*r)}i!==null&&(i.needsUpdate=!0)}clone(){return new ss(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=bo(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new zn(t,e,e,1023,1015);return this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new rs),this.bones.push(a),this.boneInverses.push(new ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Bn extends Ae{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}Bn.prototype.isInstancedBufferAttribute=!0;const Gl=new ue,kl=new ue,as=[],$i=new je;class Sa extends je{constructor(e,t,n){super(e,t),this.instanceMatrix=new Bn(new Float32Array(16*n),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){const n=this.matrixWorld,i=this.count;if($i.geometry=this.geometry,$i.material=this.material,$i.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Gl),kl.multiplyMatrices(n,Gl),$i.matrixWorld=kl,$i.raycast(e,as);for(let a=0,o=as.length;a<o;a++){const l=as[a];l.instanceId=r,l.object=this,t.push(l)}as.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Bn(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Sa.prototype.isInstancedMesh=!0;class Qe extends Ye{constructor(e){super(),this.type="LineBasicMaterial",this.color=new se(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}Qe.prototype.isLineBasicMaterial=!0;const Vl=new w,Wl=new w,jl=new ue,Ta=new un,os=new cn;class $t extends Te{constructor(e=new ve,t=new Qe){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Vl.fromBufferAttribute(t,i-1),Wl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Vl.distanceTo(Wl);e.setAttribute("lineDistance",new he(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(i),os.radius+=r,e.ray.intersectsSphere(os)===!1)return;jl.copy(i).invert(),Ta.copy(e.ray).applyMatrix4(jl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new w,h=new w,u=new w,d=new w,p=this.isLineSegments?2:1;if(n.isBufferGeometry){const m=n.index,v=n.attributes.position;if(m!==null)for(let y=Math.max(0,a.start),g=Math.min(m.count,a.start+a.count)-1;y<g;y+=p){const _=m.getX(y),x=m.getX(y+1);if(c.fromBufferAttribute(v,_),h.fromBufferAttribute(v,x),Ta.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(d);M<e.near||M>e.far||t.push({distance:M,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}else for(let y=Math.max(0,a.start),g=Math.min(v.count,a.start+a.count)-1;y<g;y+=p){if(c.fromBufferAttribute(v,y),h.fromBufferAttribute(v,y+1),Ta.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const _=e.ray.origin.distanceTo(d);_<e.near||_>e.far||t.push({distance:_,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}$t.prototype.isLine=!0;const ql=new w,Xl=new w;class pt extends $t{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ql.fromBufferAttribute(t,i),Xl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ql.distanceTo(Xl);e.setAttribute("lineDistance",new he(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}pt.prototype.isLineSegments=!0;class Ea extends $t{constructor(e,t){super(e,t),this.type="LineLoop"}}Ea.prototype.isLineLoop=!0;class Fn extends Ye{constructor(e){super(),this.type="PointsMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}Fn.prototype.isPointsMaterial=!0;const Yl=new ue,Aa=new un,ls=new cn,cs=new w;class er extends Te{constructor(e=new ve,t=new Fn){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(i),ls.radius+=r,e.ray.intersectsSphere(ls)===!1)return;Yl.copy(i).invert(),Aa.copy(e.ray).applyMatrix4(Yl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(n.isBufferGeometry){const c=n.index,h=n.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){const p=c.getX(u);cs.fromBufferAttribute(h,p),Jl(cs,p,l,i,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)cs.fromBufferAttribute(h,u),Jl(cs,u,l,i,e,t,this)}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}function Jl(s,e,t,n,i,r,a){const o=Aa.distanceSqToPoint(s);if(o<t){const l=new w;Aa.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}er.prototype.isPoints=!0;class Zl extends Xe{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.format=o!==void 0?o:1022,this.minFilter=a!==void 0?a:1006,this.magFilter=r!==void 0?r:1006,this.generateMipmaps=!1;const h=this;"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)})}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;!("requestVideoFrameCallback"in e)&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Zl.prototype.isVideoTexture=!0;class La extends Xe{constructor(e,t,n,i,r,a,o,l,c,h,u,d){super(null,a,o,l,c,h,i,r,u,d),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}La.prototype.isCompressedTexture=!0;class Ql extends Xe{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.needsUpdate=!0}}Ql.prototype.isCanvasTexture=!0;class Kl extends Xe{constructor(e,t,n,i,r,a,o,l,c,h){if((h=h!==void 0?h:1026)!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1012),n===void 0&&h===1027&&(n=1020),super(null,i,r,a,o,l,h,n,c),this.image={width:e,height:t},this.magFilter=o!==void 0?o:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1}}Kl.prototype.isDepthTexture=!0;class bi extends ve{constructor(e=1,t=8,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new w,h=new X;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(o,3)),this.setAttribute("uv",new he(l,2))}static fromJSON(e){return new bi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class xn extends ve{constructor(e=1,t=1,n=1,i=8,r=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let m=0;const v=[],y=n/2;let g=0;function _(x){const M=m,b=new X,T=new w;let R=0;const C=x===!0?e:t,N=x===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,y*N,0),d.push(0,N,0),p.push(.5,.5),m++;const I=m;for(let z=0;z<=i;z++){const $=z/i*l+o,V=Math.cos($),F=Math.sin($);T.x=C*F,T.y=y*N,T.z=C*V,u.push(T.x,T.y,T.z),d.push(0,N,0),b.x=.5*V+.5,b.y=.5*F*N+.5,p.push(b.x,b.y),m++}for(let z=0;z<i;z++){const $=M+z,V=I+z;x===!0?h.push(V,V+1,$):h.push(V+1,V,$),R+=3}c.addGroup(g,R,x===!0?1:2),g+=R}(function(){const x=new w,M=new w;let b=0;const T=(t-e)/n;for(let R=0;R<=r;R++){const C=[],N=R/r,I=N*(t-e)+e;for(let z=0;z<=i;z++){const $=z/i,V=$*l+o,F=Math.sin(V),j=Math.cos(V);M.x=I*F,M.y=-N*n+y,M.z=I*j,u.push(M.x,M.y,M.z),x.set(F,T,j).normalize(),d.push(x.x,x.y,x.z),p.push($,1-N),C.push(m++)}v.push(C)}for(let R=0;R<i;R++)for(let C=0;C<r;C++){const N=v[C][R],I=v[C+1][R],z=v[C+1][R+1],$=v[C][R+1];h.push(N,I,$),h.push(I,z,$),b+=6}c.addGroup(g,b,0),g+=b})(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new he(u,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(p,2))}static fromJSON(e){return new xn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Si extends xn{constructor(e=1,t=1,n=8,i=1,r=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Si(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ot extends ve{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];function o(d,p,m,v){const y=v+1,g=[];for(let _=0;_<=y;_++){g[_]=[];const x=d.clone().lerp(m,_/y),M=p.clone().lerp(m,_/y),b=y-_;for(let T=0;T<=b;T++)g[_][T]=T===0&&_===y?x:x.clone().lerp(M,T/b)}for(let _=0;_<y;_++)for(let x=0;x<2*(y-_)-1;x++){const M=Math.floor(x/2);x%2==0?(l(g[_][M+1]),l(g[_+1][M]),l(g[_][M])):(l(g[_][M+1]),l(g[_+1][M+1]),l(g[_+1][M]))}}function l(d){r.push(d.x,d.y,d.z)}function c(d,p){const m=3*d;p.x=e[m+0],p.y=e[m+1],p.z=e[m+2]}function h(d,p,m,v){v<0&&d.x===1&&(a[p]=d.x-1),m.x===0&&m.z===0&&(a[p]=v/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){const p=new w,m=new w,v=new w;for(let y=0;y<t.length;y+=3)c(t[y+0],p),c(t[y+1],m),c(t[y+2],v),o(p,m,v,d)})(i),function(d){const p=new w;for(let m=0;m<r.length;m+=3)p.x=r[m+0],p.y=r[m+1],p.z=r[m+2],p.normalize().multiplyScalar(d),r[m+0]=p.x,r[m+1]=p.y,r[m+2]=p.z}(n),function(){const d=new w;for(let m=0;m<r.length;m+=3){d.x=r[m+0],d.y=r[m+1],d.z=r[m+2];const v=u(d)/2/Math.PI+.5,y=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(v,1-y)}var p;(function(){const m=new w,v=new w,y=new w,g=new w,_=new X,x=new X,M=new X;for(let b=0,T=0;b<r.length;b+=9,T+=6){m.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),_.set(a[T+0],a[T+1]),x.set(a[T+2],a[T+3]),M.set(a[T+4],a[T+5]),g.copy(m).add(v).add(y).divideScalar(3);const R=u(g);h(_,T+0,m,R),h(x,T+2,v,R),h(M,T+4,y,R)}})(),function(){for(let m=0;m<a.length;m+=6){const v=a[m+0],y=a[m+2],g=a[m+4],_=Math.max(v,y,g),x=Math.min(v,y,g);_>.9&&x<.1&&(v<.2&&(a[m+0]+=1),y<.2&&(a[m+2]+=1),g<.2&&(a[m+4]+=1))}}()}(),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(r.slice(),3)),this.setAttribute("uv",new he(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}static fromJSON(e){return new Ot(e.vertices,e.indices,e.radius,e.details)}}class Ti extends Ot{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ti(e.radius,e.detail)}}const hs=new w,us=new w,Ra=new w,ds=new ke;class Ca extends ve{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(Tn*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:v,b:y,c:g}=ds;if(v.fromBufferAttribute(o,c[0]),y.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),ds.getNormal(Ra),u[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,u[1]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let _=0;_<3;_++){const x=(_+1)%3,M=u[_],b=u[x],T=ds[h[_]],R=ds[h[x]],C=`${M}_${b}`,N=`${b}_${M}`;N in d&&d[N]?(Ra.dot(d[N].normal)<=r&&(p.push(T.x,T.y,T.z),p.push(R.x,R.y,R.z)),d[N]=null):C in d||(d[C]={index0:c[_],index1:c[x],normal:Ra.clone()})}}for(const m in d)if(d[m]){const{index0:v,index1:y}=d[m];hs.fromBufferAttribute(o,v),us.fromBufferAttribute(o,y),p.push(hs.x,hs.y,hs.z),p.push(us.x,us.y,us.z)}this.setAttribute("position",new he(p,3))}}}class yt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;a=t||e*n[r-1];let o,l=0,c=r-1;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){c=i;break}c=i-1}if(i=c,n[i]===a)return i/(r-1);const h=n[i];return(i+(a-h)/(n[i+1]-h))/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new X:new w);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new w,i=[],r=[],a=[],o=new w,l=new ue;for(let p=0;p<=e;p++){const m=p/e;i[p]=this.getTangentAt(m,new w)}r[0]=new w,a[0]=new w;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(it(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(it(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],p*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class tr extends yt{constructor(e=0,t=0,n=1,i=1,r=0,a=2*Math.PI,o=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new X,i=2*Math.PI;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(r=a?0:i),this.aClockwise!==!0||a||(r===i?r=-i:r-=i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}tr.prototype.isEllipseCurve=!0;class Pa extends tr{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.type="ArcCurve"}}function Ia(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(r){const a=r*r;return s+e*r+t*a+n*(a*r)}}}Pa.prototype.isArcCurve=!0;const ps=new w,Da=new Ia,Na=new Ia,za=new Ia;class Ba extends yt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new w){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/r)+1)*r:h===0&&c===r-1&&(c=r-2,h=1),this.closed||c>0?o=i[(c-1)%r]:(ps.subVectors(i[0],i[1]).add(i[0]),o=ps);const u=i[c%r],d=i[(c+1)%r];if(this.closed||c+2<r?l=i[(c+2)%r]:(ps.subVectors(i[r-1],i[r-2]).add(i[r-1]),l=ps),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(o.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),y=Math.pow(d.distanceToSquared(l),p);v<1e-4&&(v=1),m<1e-4&&(m=v),y<1e-4&&(y=v),Da.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,m,v,y),Na.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,m,v,y),za.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,m,v,y)}else this.curveType==="catmullrom"&&(Da.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Na.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),za.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(Da.calc(h),Na.calc(h),za.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new w().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $l(s,e,t,n,i){const r=.5*(n-e),a=.5*(i-t),o=s*s;return(2*t-2*n+r+a)*(s*o)+(-3*t+3*n-2*r-a)*o+r*s+t}function nr(s,e,t,n){return function(i,r){const a=1-i;return a*a*r}(s,e)+function(i,r){return 2*(1-i)*i*r}(s,t)+function(i,r){return i*i*r}(s,n)}function ir(s,e,t,n,i){return function(r,a){const o=1-r;return o*o*o*a}(s,e)+function(r,a){const o=1-r;return 3*o*o*r*a}(s,t)+function(r,a){return 3*(1-r)*r*r*a}(s,n)+function(r,a){return r*r*r*a}(s,i)}Ba.prototype.isCatmullRomCurve3=!0;class ms extends yt{constructor(e=new X,t=new X,n=new X,i=new X){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new X){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ir(e,i.x,r.x,a.x,o.x),ir(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}ms.prototype.isCubicBezierCurve=!0;class Fa extends yt{constructor(e=new w,t=new w,n=new w,i=new w){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new w){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ir(e,i.x,r.x,a.x,o.x),ir(e,i.y,r.y,a.y,o.y),ir(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Fa.prototype.isCubicBezierCurve3=!0;class rr extends yt{constructor(e=new X,t=new X){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new X){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new X;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}rr.prototype.isLineCurve=!0;class ec extends yt{constructor(e=new w,t=new w){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new w){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fs extends yt{constructor(e=new X,t=new X,n=new X){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new X){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(nr(e,i.x,r.x,a.x),nr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}fs.prototype.isQuadraticBezierCurve=!0;class gs extends yt{constructor(e=new w,t=new w,n=new w){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(nr(e,i.x,r.x,a.x),nr(e,i.y,r.y,a.y),nr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}gs.prototype.isQuadraticBezierCurve3=!0;class vs extends yt{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new X){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set($l(o,l.x,c.x,h.x,u.x),$l(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new X().fromArray(i))}return this}}vs.prototype.isSplineCurve=!0;var Oa=Object.freeze({__proto__:null,ArcCurve:Pa,CatmullRomCurve3:Ba,CubicBezierCurve:ms,CubicBezierCurve3:Fa,EllipseCurve:tr,LineCurve:rr,LineCurve3:ec,QuadraticBezierCurve:fs,QuadraticBezierCurve3:gs,SplineCurve:vs});class tc extends yt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new rr(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a&&a.isEllipseCurve?2*e:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Oa[i.type]().fromJSON(i))}return this}}class sr extends tc{constructor(e){super(),this.type="Path",this.currentPoint=new X,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new rr(this.currentPoint.clone(),new X(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new fs(this.currentPoint.clone(),new X(e,t),new X(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new ms(this.currentPoint.clone(),new X(e,t),new X(n,i),new X(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new vs(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new tr(e,t,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ut extends sr{constructor(e){super(e),this.uuid=mt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new sr().fromJSON(i))}return this}}const ud=function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=nc(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,p;if(n&&(r=function(m,v,y,g){const _=[];let x,M,b,T,R;for(x=0,M=v.length;x<M;x++)b=v[x]*g,T=x<M-1?v[x+1]*g:m.length,R=nc(m,b,T,g,!1),R===R.next&&(R.steiner=!0),_.push(xd(R));for(_.sort(gd),x=0;x<_.length;x++)vd(_[x],y),y=_n(y,y.next);return y}(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let m=t;m<i;m+=t)u=s[m],d=s[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?1/p:0}return ar(r,a,t,o,l,p),a};function nc(s,e,t,n,i){let r,a;if(i===function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u}(s,e,t,n)>0)for(r=e;r<t;r+=n)a=sc(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=sc(r,s[r],s[r+1],a);return a&&ys(a,a.next)&&(lr(a),a=a.next),a}function _n(s,e){if(!s)return s;e||(e=s);let t,n=s;do if(t=!1,n.steiner||!ys(n,n.next)&&He(n.prev,n,n.next)!==0)n=n.next;else{if(lr(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function ar(s,e,t,n,i,r,a){if(!s)return;!a&&r&&function(h,u,d,p){let m=h;do m.z===null&&(m.z=Ua(m.x,m.y,u,d,p)),m.prevZ=m.prev,m.nextZ=m.next,m=m.next;while(m!==h);m.prevZ.nextZ=null,m.prevZ=null,function(v){let y,g,_,x,M,b,T,R,C=1;do{for(g=v,v=null,M=null,b=0;g;){for(b++,_=g,T=0,y=0;y<C&&(T++,_=_.nextZ,_);y++);for(R=C;T>0||R>0&&_;)T!==0&&(R===0||!_||g.z<=_.z)?(x=g,g=g.nextZ,T--):(x=_,_=_.nextZ,R--),M?M.nextZ=x:v=x,x.prevZ=M,M=x;g=_}M.nextZ=null,C*=2}while(b>1)}(m)}(s,n,i,r);let o,l,c=s;for(;s.prev!==s.next;)if(o=s.prev,l=s.next,r?pd(s,n,i,r):dd(s))e.push(o.i/t),e.push(s.i/t),e.push(l.i/t),lr(s),s=l.next,c=l.next;else if((s=l)===c){a?a===1?ar(s=md(_n(s),e,t),e,t,n,i,r,2):a===2&&fd(s,e,t,n,i,r):ar(_n(s),e,t,n,i,r,1);break}}function dd(s){const e=s.prev,t=s,n=s.next;if(He(e,t,n)>=0)return!1;let i=s.next.next;for(;i!==s.prev;){if(Ei(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&He(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function pd(s,e,t,n){const i=s.prev,r=s,a=s.next;if(He(i,r,a)>=0)return!1;const o=i.x<r.x?i.x<a.x?i.x:a.x:r.x<a.x?r.x:a.x,l=i.y<r.y?i.y<a.y?i.y:a.y:r.y<a.y?r.y:a.y,c=i.x>r.x?i.x>a.x?i.x:a.x:r.x>a.x?r.x:a.x,h=i.y>r.y?i.y>a.y?i.y:a.y:r.y>a.y?r.y:a.y,u=Ua(o,l,e,t,n),d=Ua(c,h,e,t,n);let p=s.prevZ,m=s.nextZ;for(;p&&p.z>=u&&m&&m.z<=d;){if(p!==s.prev&&p!==s.next&&Ei(i.x,i.y,r.x,r.y,a.x,a.y,p.x,p.y)&&He(p.prev,p,p.next)>=0||(p=p.prevZ,m!==s.prev&&m!==s.next&&Ei(i.x,i.y,r.x,r.y,a.x,a.y,m.x,m.y)&&He(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;p&&p.z>=u;){if(p!==s.prev&&p!==s.next&&Ei(i.x,i.y,r.x,r.y,a.x,a.y,p.x,p.y)&&He(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;m&&m.z<=d;){if(m!==s.prev&&m!==s.next&&Ei(i.x,i.y,r.x,r.y,a.x,a.y,m.x,m.y)&&He(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function md(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!ys(i,r)&&ic(i,n,n.next,r)&&or(i,r)&&or(r,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(r.i/t),lr(n),lr(n.next),n=s=r),n=n.next}while(n!==s);return _n(n)}function fd(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&_d(a,o)){let l=rc(a,o);return a=_n(a,a.next),l=_n(l,l.next),ar(a,e,t,n,i,r),void ar(l,e,t,n,i,r)}o=o.next}a=a.next}while(a!==s)}function gd(s,e){return s.x-e.x}function vd(s,e){if(e=function(t,n){let i=n;const r=t.x,a=t.y;let o,l=-1/0;do{if(a<=i.y&&a>=i.next.y&&i.next.y!==i.y){const m=i.x+(a-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(m<=r&&m>l){if(l=m,m===r){if(a===i.y)return i;if(a===i.next.y)return i.next}o=i.x<i.next.x?i:i.next}}i=i.next}while(i!==n);if(!o)return null;if(r===l)return o;const c=o,h=o.x,u=o.y;let d,p=1/0;i=o;do r>=i.x&&i.x>=h&&r!==i.x&&Ei(a<u?r:l,a,h,u,a<u?l:r,a,i.x,i.y)&&(d=Math.abs(a-i.y)/(r-i.x),or(i,t)&&(d<p||d===p&&(i.x>o.x||i.x===o.x&&yd(o,i)))&&(o=i,p=d)),i=i.next;while(i!==c);return o}(s,e),e){const t=rc(e,s);_n(e,e.next),_n(t,t.next)}}function yd(s,e){return He(s.prev,s,e.prev)<0&&He(e.next,s,s.next)<0}function Ua(s,e,t,n,i){return(s=1431655765&((s=858993459&((s=252645135&((s=16711935&((s=32767*(s-t)*i)|s<<8))|s<<4))|s<<2))|s<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*i)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function xd(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ei(s,e,t,n,i,r,a,o){return(i-a)*(e-o)-(s-a)*(r-o)>=0&&(s-a)*(n-o)-(t-a)*(e-o)>=0&&(t-a)*(r-o)-(i-a)*(n-o)>=0}function _d(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&ic(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1}(s,e)&&(or(s,e)&&or(e,s)&&function(t,n){let i=t,r=!1;const a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==t);return r}(s,e)&&(He(s.prev,s,e.prev)||He(s,e.prev,e))||ys(s,e)&&He(s.prev,s,s.next)>0&&He(e.prev,e,e.next)>0)}function He(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ys(s,e){return s.x===e.x&&s.y===e.y}function ic(s,e,t,n){const i=_s(He(s,e,t)),r=_s(He(s,e,n)),a=_s(He(t,n,s)),o=_s(He(t,n,e));return i!==r&&a!==o||!(i!==0||!xs(s,t,e))||!(r!==0||!xs(s,n,e))||!(a!==0||!xs(t,s,n))||!(o!==0||!xs(t,e,n))}function xs(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function _s(s){return s>0?1:s<0?-1:0}function or(s,e){return He(s.prev,s,s.next)<0?He(s,e,s.next)>=0&&He(s,s.prev,e)>=0:He(s,e,s.prev)<0||He(s,s.next,e)<0}function rc(s,e){const t=new Ha(s.i,s.x,s.y),n=new Ha(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function sc(s,e,t,n){const i=new Ha(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function lr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ha(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}class Ht{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return .5*n}static isClockWise(e){return Ht.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];ac(e),oc(n,e);let a=e.length;t.forEach(ac);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,oc(n,t[l]);const o=ud(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function ac(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function oc(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Gt extends ve{constructor(e=new Ut([new X(.5,.5),new X(-.5,.5),new X(-.5,-.5),new X(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1;let u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Md;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let x,M,b,T,R,C=!1;g&&(x=g.getSpacedPoints(h),C=!0,d=!1,M=g.computeFrenetFrames(h,!1),b=new w,T=new w,R=new w),d||(y=0,p=0,m=0,v=0);const N=o.extractPoints(c);let I=N.shape;const z=N.holes;if(!Ht.isClockWise(I)){I=I.reverse();for(let B=0,S=z.length;B<S;B++){const D=z[B];Ht.isClockWise(D)&&(z[B]=D.reverse())}}const $=Ht.triangulateShape(I,z),V=I;for(let B=0,S=z.length;B<S;B++){const D=z[B];I=I.concat(D)}function F(B,S,D){return S||console.error("THREE.ExtrudeGeometry: vec does not exist"),S.clone().multiplyScalar(D).add(B)}const j=I.length,ie=$.length;function ae(B,S,D){let k,W,H;const oe=B.x-S.x,de=B.y-S.y,le=D.x-B.x,Me=D.y-B.y,xe=oe*oe+de*de,Ke=oe*Me-de*le;if(Math.abs(Ke)>Number.EPSILON){const De=Math.sqrt(xe),$e=Math.sqrt(le*le+Me*Me),xt=S.x-de/De,Yn=S.y+oe/De,Jn=((D.x-Me/$e-xt)*Me-(D.y+le/$e-Yn)*le)/(oe*Me-de*le);k=xt+oe*Jn-B.x,W=Yn+de*Jn-B.y;const Zn=k*k+W*W;if(Zn<=2)return new X(k,W);H=Math.sqrt(Zn/2)}else{let De=!1;oe>Number.EPSILON?le>Number.EPSILON&&(De=!0):oe<-Number.EPSILON?le<-Number.EPSILON&&(De=!0):Math.sign(de)===Math.sign(Me)&&(De=!0),De?(k=-de,W=oe,H=Math.sqrt(xe)):(k=oe,W=de,H=Math.sqrt(xe/2))}return new X(k/H,W/H)}const ce=[];for(let B=0,S=V.length,D=S-1,k=B+1;B<S;B++,D++,k++)D===S&&(D=0),k===S&&(k=0),ce[B]=ae(V[B],V[D],V[k]);const me=[];let fe,J=ce.concat();for(let B=0,S=z.length;B<S;B++){const D=z[B];fe=[];for(let k=0,W=D.length,H=W-1,oe=k+1;k<W;k++,H++,oe++)H===W&&(H=0),oe===W&&(oe=0),fe[k]=ae(D[k],D[H],D[oe]);me.push(fe),J=J.concat(fe)}for(let B=0;B<y;B++){const S=B/y,D=p*Math.cos(S*Math.PI/2),k=m*Math.sin(S*Math.PI/2)+v;for(let W=0,H=V.length;W<H;W++){const oe=F(V[W],ce[W],k);U(oe.x,oe.y,-D)}for(let W=0,H=z.length;W<H;W++){const oe=z[W];fe=me[W];for(let de=0,le=oe.length;de<le;de++){const Me=F(oe[de],fe[de],k);U(Me.x,Me.y,-D)}}}const E=m+v;for(let B=0;B<j;B++){const S=d?F(I[B],J[B],E):I[B];C?(T.copy(M.normals[0]).multiplyScalar(S.x),b.copy(M.binormals[0]).multiplyScalar(S.y),R.copy(x[0]).add(T).add(b),U(R.x,R.y,R.z)):U(S.x,S.y,0)}for(let B=1;B<=h;B++)for(let S=0;S<j;S++){const D=d?F(I[S],J[S],E):I[S];C?(T.copy(M.normals[B]).multiplyScalar(D.x),b.copy(M.binormals[B]).multiplyScalar(D.y),R.copy(x[B]).add(T).add(b),U(R.x,R.y,R.z)):U(D.x,D.y,u/h*B)}for(let B=y-1;B>=0;B--){const S=B/y,D=p*Math.cos(S*Math.PI/2),k=m*Math.sin(S*Math.PI/2)+v;for(let W=0,H=V.length;W<H;W++){const oe=F(V[W],ce[W],k);U(oe.x,oe.y,u+D)}for(let W=0,H=z.length;W<H;W++){const oe=z[W];fe=me[W];for(let de=0,le=oe.length;de<le;de++){const Me=F(oe[de],fe[de],k);C?U(Me.x,Me.y+x[h-1].y,x[h-1].x+D):U(Me.x,Me.y,u+D)}}}function A(B,S){let D=B.length;for(;--D>=0;){const k=D;let W=D-1;W<0&&(W=B.length-1);for(let H=0,oe=h+2*y;H<oe;H++){const de=j*H,le=j*(H+1);P(S+k+de,S+W+de,S+W+le,S+k+le)}}}function U(B,S,D){l.push(B),l.push(S),l.push(D)}function O(B,S,D){Z(B),Z(S),Z(D);const k=i.length/3,W=_.generateTopUV(n,i,k-3,k-2,k-1);ee(W[0]),ee(W[1]),ee(W[2])}function P(B,S,D,k){Z(B),Z(S),Z(k),Z(S),Z(D),Z(k);const W=i.length/3,H=_.generateSideWallUV(n,i,W-6,W-3,W-2,W-1);ee(H[0]),ee(H[1]),ee(H[3]),ee(H[1]),ee(H[2]),ee(H[3])}function Z(B){i.push(l[3*B+0]),i.push(l[3*B+1]),i.push(l[3*B+2])}function ee(B){r.push(B.x),r.push(B.y)}(function(){const B=i.length/3;if(d){let S=0,D=j*S;for(let k=0;k<ie;k++){const W=$[k];O(W[2]+D,W[1]+D,W[0]+D)}S=h+2*y,D=j*S;for(let k=0;k<ie;k++){const W=$[k];O(W[0]+D,W[1]+D,W[2]+D)}}else{for(let S=0;S<ie;S++){const D=$[S];O(D[2],D[1],D[0])}for(let S=0;S<ie;S++){const D=$[S];O(D[0]+j*h,D[1]+j*h,D[2]+j*h)}}n.addGroup(B,i.length/3-B,0)})(),function(){const B=i.length/3;let S=0;A(V,S),S+=V.length;for(let D=0,k=z.length;D<k;D++){const W=z[D];A(W,S),S+=W.length}n.addGroup(B,i.length/3-B,1)}()}this.setAttribute("position",new he(i,3)),this.setAttribute("uv",new he(r,2)),this.computeVertexNormals()}toJSON(){const e=super.toJSON();return function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let r=0,a=t.length;r<a;r++){const o=t[r];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Oa[i.type]().fromJSON(i)),new Gt(n,e.options)}}const Md={generateTopUV:function(s,e,t,n,i){const r=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*i],h=e[3*i+1];return[new X(r,a),new X(o,l),new X(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*i],p=e[3*i+1],m=e[3*i+2],v=e[3*r],y=e[3*r+1],g=e[3*r+2];return Math.abs(o-h)<Math.abs(a-c)?[new X(a,1-l),new X(c,1-u),new X(d,1-m),new X(v,1-g)]:[new X(o,1-l),new X(h,1-u),new X(p,1-m),new X(y,1-g)]}};class Ai extends Ot{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ai(e.radius,e.detail)}}class Li extends ve{constructor(e=[new X(0,.5),new X(.5,0),new X(0,-.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=it(i,0,2*Math.PI);const r=[],a=[],o=[],l=1/t,c=new w,h=new X;for(let u=0;u<=t;u++){const d=n+u*l*i,p=Math.sin(d),m=Math.cos(d);for(let v=0;v<=e.length-1;v++)c.x=e[v].x*p,c.y=e[v].y,c.z=e[v].x*m,a.push(c.x,c.y,c.z),h.x=u/t,h.y=v/(e.length-1),o.push(h.x,h.y)}for(let u=0;u<t;u++)for(let d=0;d<e.length-1;d++){const p=d+u*e.length,m=p,v=p+e.length,y=p+e.length+1,g=p+1;r.push(m,v,g),r.push(v,y,g)}if(this.setIndex(r),this.setAttribute("position",new he(a,3)),this.setAttribute("uv",new he(o,2)),this.computeVertexNormals(),i===2*Math.PI){const u=this.attributes.normal.array,d=new w,p=new w,m=new w,v=t*e.length*3;for(let y=0,g=0;y<e.length;y++,g+=3)d.x=u[g+0],d.y=u[g+1],d.z=u[g+2],p.x=u[v+g+0],p.y=u[v+g+1],p.z=u[v+g+2],m.addVectors(d,p).normalize(),u[g+0]=u[v+g+0]=m.x,u[g+1]=u[v+g+1]=m.y,u[g+2]=u[v+g+2]=m.z}}static fromJSON(e){return new Li(e.points,e.segments,e.phiStart,e.phiLength)}}class On extends Ot{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new On(e.radius,e.detail)}}class Ri extends ve{constructor(e=.5,t=1,n=8,i=1,r=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/(i=Math.max(1,i)),p=new w,m=new X;for(let v=0;v<=i;v++){for(let y=0;y<=n;y++){const g=r+y/n*a;p.x=u*Math.cos(g),p.y=u*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let v=0;v<i;v++){const y=v*(n+1);for(let g=0;g<n;g++){const _=g+y,x=_,M=_+n+1,b=_+n+2,T=_+1;o.push(x,M,T),o.push(M,b,T)}}this.setIndex(o),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(h,2))}static fromJSON(e){return new Ri(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Un extends ve{constructor(e=new Ut([new X(0,.5),new X(-.5,-.5),new X(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){const u=i.length/3,d=h.extractPoints(t);let p=d.shape;const m=d.holes;Ht.isClockWise(p)===!1&&(p=p.reverse());for(let y=0,g=m.length;y<g;y++){const _=m[y];Ht.isClockWise(_)===!0&&(m[y]=_.reverse())}const v=Ht.triangulateShape(p,m);for(let y=0,g=m.length;y<g;y++){const _=m[y];p=p.concat(_)}for(let y=0,g=p.length;y<g;y++){const _=p[y];i.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let y=0,g=v.length;y<g;y++){const _=v[y],x=_[0]+u,M=_[1]+u,b=_[2]+u;n.push(x,M,b),l+=3}}this.setIndex(n),this.setAttribute("position",new he(i,3)),this.setAttribute("normal",new he(r,3)),this.setAttribute("uv",new he(a,2))}toJSON(){const e=super.toJSON();return function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n}(this.parameters.shapes,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new Un(n,e.curveSegments)}}class Hn extends ve{constructor(e=1,t=32,n=16,i=0,r=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new w,d=new w,p=[],m=[],v=[],y=[];for(let g=0;g<=n;g++){const _=[],x=g/n;let M=0;g==0&&a==0?M=.5/t:g==n&&l==Math.PI&&(M=-.5/t);for(let b=0;b<=t;b++){const T=b/t;u.x=-e*Math.cos(i+T*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(i+T*r)*Math.sin(a+x*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),y.push(T+M,1-x),_.push(c++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<t;_++){const x=h[g][_+1],M=h[g][_],b=h[g+1][_],T=h[g+1][_+1];(g!==0||a>0)&&p.push(x,M,T),(g!==n-1||l<Math.PI)&&p.push(M,b,T)}this.setIndex(p),this.setAttribute("position",new he(m,3)),this.setAttribute("normal",new he(v,3)),this.setAttribute("uv",new he(y,2))}static fromJSON(e){return new Hn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ci extends Ot{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ci(e.radius,e.detail)}}class Pi extends ve{constructor(e=1,t=.4,n=8,i=6,r=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new w,u=new w,d=new w;for(let p=0;p<=n;p++)for(let m=0;m<=i;m++){const v=m/i*r,y=p/n*Math.PI*2;u.x=(e+t*Math.cos(y))*Math.cos(v),u.y=(e+t*Math.cos(y))*Math.sin(v),u.z=t*Math.sin(y),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=i;m++){const v=(i+1)*p+m-1,y=(i+1)*(p-1)+m-1,g=(i+1)*(p-1)+m,_=(i+1)*p+m;a.push(v,y,_),a.push(y,g,_)}this.setIndex(a),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(l,3)),this.setAttribute("uv",new he(c,2))}static fromJSON(e){return new Pi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ii extends ve{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],l=[],c=[],h=[],u=new w,d=new w,p=new w,m=new w,v=new w,y=new w,g=new w;for(let x=0;x<=n;++x){const M=x/n*r*Math.PI*2;_(M,r,a,e,p),_(M+.01,r,a,e,m),y.subVectors(m,p),g.addVectors(m,p),v.crossVectors(y,g),g.crossVectors(v,y),v.normalize(),g.normalize();for(let b=0;b<=i;++b){const T=b/i*Math.PI*2,R=-t*Math.cos(T),C=t*Math.sin(T);u.x=p.x+(R*g.x+C*v.x),u.y=p.y+(R*g.y+C*v.y),u.z=p.z+(R*g.z+C*v.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(x/n),h.push(b/i)}}for(let x=1;x<=n;x++)for(let M=1;M<=i;M++){const b=(i+1)*(x-1)+(M-1),T=(i+1)*x+(M-1),R=(i+1)*x+M,C=(i+1)*(x-1)+M;o.push(b,T,C),o.push(T,R,C)}function _(x,M,b,T,R){const C=Math.cos(x),N=Math.sin(x),I=b/M*x,z=Math.cos(I);R.x=T*(2+z)*.5*C,R.y=T*(2+z)*N*.5,R.z=T*Math.sin(I)*.5}this.setIndex(o),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(h,2))}static fromJSON(e){return new Ii(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Di extends ve{constructor(e=new gs(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new w,l=new w,c=new X;let h=new w;const u=[],d=[],p=[],m=[];function v(y){h=e.getPointAt(y/t,h);const g=a.normals[y],_=a.binormals[y];for(let x=0;x<=i;x++){const M=x/i*Math.PI*2,b=Math.sin(M),T=-Math.cos(M);l.x=T*g.x+b*_.x,l.y=T*g.y+b*_.y,l.z=T*g.z+b*_.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let y=0;y<t;y++)v(y);v(r===!1?t:0),function(){for(let y=0;y<=t;y++)for(let g=0;g<=i;g++)c.x=y/t,c.y=g/i,p.push(c.x,c.y)}(),function(){for(let y=1;y<=t;y++)for(let g=1;g<=i;g++){const _=(i+1)*(y-1)+(g-1),x=(i+1)*y+(g-1),M=(i+1)*y+g,b=(i+1)*(y-1)+g;m.push(_,x,b),m.push(x,M,b)}}()})(),this.setIndex(m),this.setAttribute("position",new he(u,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(p,2))}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Di(new Oa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ga extends ve{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new w,r=new w;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start;for(let p=d,m=d+u.count;p<m;p+=3)for(let v=0;v<3;v++){const y=o.getX(p+v),g=o.getX(p+(v+1)%3);i.fromBufferAttribute(a,y),r.fromBufferAttribute(a,g),lc(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),lc(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new he(t,3))}}}function lc(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n,i),!0)}var cc=Object.freeze({__proto__:null,BoxGeometry:Qt,BoxBufferGeometry:Qt,CircleGeometry:bi,CircleBufferGeometry:bi,ConeGeometry:Si,ConeBufferGeometry:Si,CylinderGeometry:xn,CylinderBufferGeometry:xn,DodecahedronGeometry:Ti,DodecahedronBufferGeometry:Ti,EdgesGeometry:Ca,ExtrudeGeometry:Gt,ExtrudeBufferGeometry:Gt,IcosahedronGeometry:Ai,IcosahedronBufferGeometry:Ai,LatheGeometry:Li,LatheBufferGeometry:Li,OctahedronGeometry:On,OctahedronBufferGeometry:On,PlaneGeometry:Cn,PlaneBufferGeometry:Cn,PolyhedronGeometry:Ot,PolyhedronBufferGeometry:Ot,RingGeometry:Ri,RingBufferGeometry:Ri,ShapeGeometry:Un,ShapeBufferGeometry:Un,SphereGeometry:Hn,SphereBufferGeometry:Hn,TetrahedronGeometry:Ci,TetrahedronBufferGeometry:Ci,TorusGeometry:Pi,TorusBufferGeometry:Pi,TorusKnotGeometry:Ii,TorusKnotBufferGeometry:Ii,TubeGeometry:Di,TubeBufferGeometry:Di,WireframeGeometry:Ga});class ka extends Ye{constructor(e){super(),this.type="ShadowMaterial",this.color=new se(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}ka.prototype.isShadowMaterial=!0;class Ms extends Ye{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Ms.prototype.isMeshStandardMaterial=!0;class Va extends Ms{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new X(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=.01,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new se(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}Va.prototype.isMeshPhysicalMaterial=!0;class Wa extends Ye{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new se(16777215),this.specular=new se(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Wa.prototype.isMeshPhongMaterial=!0;class ja extends Ye{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new se(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}ja.prototype.isMeshToonMaterial=!0;class qa extends Ye{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}qa.prototype.isMeshNormalMaterial=!0;class Xa extends Ye{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Xa.prototype.isMeshLambertMaterial=!0;class Ya extends Ye{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new se(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}Ya.prototype.isMeshMatcapMaterial=!0;class Ja extends Qe{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Ja.prototype.isLineDashedMaterial=!0;var wd=Object.freeze({__proto__:null,ShadowMaterial:ka,SpriteMaterial:Qr,RawShaderMaterial:gi,ShaderMaterial:Kt,PointsMaterial:Fn,MeshPhysicalMaterial:Va,MeshStandardMaterial:Ms,MeshPhongMaterial:Wa,MeshToonMaterial:ja,MeshNormalMaterial:qa,MeshLambertMaterial:Xa,MeshDepthMaterial:Yr,MeshDistanceMaterial:Jr,MeshBasicMaterial:Zt,MeshMatcapMaterial:Ya,LineDashedMaterial:Ja,LineBasicMaterial:Qe,Material:Ye});const Fe={arraySlice:function(s,e,t){return Fe.isTypedArray(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)},convertArray:function(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)},isTypedArray:function(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)},getKeyframeOrder:function(s){const e=s.length,t=new Array(e);for(let n=0;n!==e;++n)t[n]=n;return t.sort(function(n,i){return s[n]-s[i]}),t},sortedArray:function(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i},flattenJSON:function(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)},subclip:function(s,e,t,n,i=30){const r=s.clone();r.name=e;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let p=0;p<c.times.length;++p){const m=c.times[p]*i;if(!(m<t||m>=n)){u.push(c.times[p]);for(let v=0;v<h;++v)d.push(c.values[p*h+v])}}u.length!==0&&(c.times=Fe.convertArray(u,c.times.constructor),c.values=Fe.convertArray(d,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r},makeClipAdditive:function(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(g){return g.name===o.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);const m=o.times.length-1;let v;if(r<=o.times[0]){const g=h,_=u-h;v=Fe.arraySlice(o.values,g,_)}else if(r>=o.times[m]){const g=m*u+h,_=g+u-h;v=Fe.arraySlice(o.values,g,_)}else{const g=o.createInterpolant(),_=h,x=u-h;g.evaluate(r),v=Fe.arraySlice(g.resultBuffer,_,x)}l==="quaternion"&&new rt().fromArray(v).normalize().conjugate().toArray(v);const y=c.times.length;for(let g=0;g<y;++g){const _=g*p+d;if(l==="quaternion")rt.multiplyQuaternionsFlat(c.values,_,v,0,c.values,_);else{const x=p-2*d;for(let M=0;M<x;++M)c.values[_+M]-=v[M]}}}return s.blendMode=2501,s}};class en{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(e>=r)break e;{const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0}}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}en.prototype.beforeStart_=en.prototype.copySampleValue_,en.prototype.afterEnd_=en.prototype.copySampleValue_;class hc extends en{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:r=e,o=2*t-n;break;case 2402:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case 2401:a=e,l=2*n-t;break;case 2402:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-t)/(i-t),v=m*m,y=v*m,g=-d*y+2*d*v-d*m,_=(1+d)*y+(-1.5-2*d)*v+(-.5+d)*m+1,x=(-1-p)*y+(1.5+p)*v+.5*m,M=p*y-p*v;for(let b=0;b!==o;++b)r[b]=g*a[h+b]+_*a[c+b]+x*a[l+b]+M*a[u+b];return r}}class Za extends en{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class uc extends en{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ct{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fe.convertArray(t,this.TimeBufferType),this.values=Fe.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fe.convertArray(e.times,Array),values:Fe.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=Fe.arraySlice(n,r,a),this.values=Fe.arraySlice(this.values,r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Fe.isTypedArray(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Fe.arraySlice(this.times),t=Fe.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===2302,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){const m=t[h+p];if(m!==t[u+p]||m!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=Fe.arraySlice(e,0,a),this.values=Fe.arraySlice(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=Fe.arraySlice(this.times,0),t=Fe.arraySlice(this.values,0),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}Ct.prototype.TimeBufferType=Float32Array,Ct.prototype.ValueBufferType=Float32Array,Ct.prototype.DefaultInterpolation=2301;class Gn extends Ct{}Gn.prototype.ValueTypeName="bool",Gn.prototype.ValueBufferType=Array,Gn.prototype.DefaultInterpolation=2300,Gn.prototype.InterpolantFactoryMethodLinear=void 0,Gn.prototype.InterpolantFactoryMethodSmooth=void 0;class Qa extends Ct{}Qa.prototype.ValueTypeName="color";class cr extends Ct{}cr.prototype.ValueTypeName="number";class dc extends en{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)rt.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Ni extends Ct{InterpolantFactoryMethodLinear(e){return new dc(this.times,this.values,this.getValueSize(),e)}}Ni.prototype.ValueTypeName="quaternion",Ni.prototype.DefaultInterpolation=2301,Ni.prototype.InterpolantFactoryMethodSmooth=void 0;class kn extends Ct{}kn.prototype.ValueTypeName="string",kn.prototype.ValueBufferType=Array,kn.prototype.DefaultInterpolation=2300,kn.prototype.InterpolantFactoryMethodLinear=void 0,kn.prototype.InterpolantFactoryMethodSmooth=void 0;class hr extends Ct{}hr.prototype.ValueTypeName="vector";class ur{constructor(e,t=-1,n,i=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=mt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(bd(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Ct.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=Fe.getKeyframeOrder(l);l=Fe.sortedArray(l,1,h),c=Fe.sortedArray(c,1,h),i||l[0]!==0||(l.push(r),c.push(c[0])),a.push(new cr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,d,p,m){if(d.length!==0){const v=[],y=[];Fe.flattenJSON(d,v,y,p),v.length!==0&&m.push(new h(u,v,y))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(u&&u.length!==0)if(u[0].morphTargets){const d={};let p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let m=0;m<u[p].morphTargets.length;m++)d[u[p].morphTargets[m]]=-1;for(const m in d){const v=[],y=[];for(let g=0;g!==u[p].morphTargets.length;++g){const _=u[p];v.push(_.time),y.push(_.morphTarget===m?1:0)}i.push(new cr(".morphTargetInfluence["+m+"]",v,y))}l=d.length*(a||1)}else{const d=".bones["+t[h].name+"]";n(hr,d+".position",u,"pos",i),n(Ni,d+".quaternion",u,"rot",i),n(hr,d+".scale",u,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){let e=0;for(let t=0,n=this.tracks.length;t!==n;++t){const i=this.tracks[t];e=Math.max(e,i.times[i.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function bd(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return cr;case"vector":case"vector2":case"vector3":case"vector4":return hr;case"color":return Qa;case"quaternion":return Ni;case"bool":case"boolean":return Gn;case"string":return kn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}(s.type);if(s.times===void 0){const t=[],n=[];Fe.flattenJSON(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Vn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Ka{constructor(e,t,n){const i=this;let r,a=!1,o=0,l=0;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return r?r(h):h},this.setURLModifier=function(h){return r=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}}const pc=new Ka;class dt{constructor(e){this.manager=e!==void 0?e:pc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const tn={};class kt extends dt{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Vn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(tn[e]!==void 0)return void tn[e].push({onLoad:t,onProgress:n,onError:i});tn[e]=[],tn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(a).then(o=>{if(o.status===200||o.status===0){o.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received.");const l=tn[e],c=o.body.getReader(),h=o.headers.get("Content-Length"),u=h?parseInt(h):0,d=u!==0;let p=0;return new ReadableStream({start(m){(function v(){c.read().then(({done:y,value:g})=>{if(y)m.close();else{p+=g.byteLength;const _=new ProgressEvent("progress",{lengthComputable:d,loaded:p,total:u});for(let x=0,M=l.length;x<M;x++){const b=l[x];b.onProgress&&b.onProgress(_)}m.enqueue(g),v()}})})()}})}throw Error(`fetch for "${o.url}" responded with ${o.status}: ${o.statusText}`)}).then(o=>{const l=new Response(o);switch(this.responseType){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,this.mimeType));case"json":return l.json();default:return l.text()}}).then(o=>{Vn.add(e,o);const l=tn[e];delete tn[e];for(let c=0,h=l.length;c<h;c++){const u=l[c];u.onLoad&&u.onLoad(o)}this.manager.itemEnd(e)}).catch(o=>{const l=tn[e];delete tn[e];for(let c=0,h=l.length;c<h;c++){const u=l[c];u.onError&&u.onError(o)}this.manager.itemError(e),this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class dr extends dt{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Vn.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=wr("img");function l(){h(),Vn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class mc extends dt{constructor(e){super(e)}load(e,t,n,i){const r=new mi,a=new dr(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class fc extends dt{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new zn,o=new kt(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){const c=r.parse(l);c&&(c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:1001,a.wrapT=c.wrapT!==void 0?c.wrapT:1001,a.magFilter=c.magFilter!==void 0?c.magFilter:1006,a.minFilter=c.minFilter!==void 0?c.minFilter:1006,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=1008),c.mipmapCount===1&&(a.minFilter=1006),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c))},n,i),a}}class gc extends dt{constructor(e){super(e)}load(e,t,n,i){const r=new Xe,a=new dr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Pt extends Te{constructor(e,t=1){super(),this.type="Light",this.color=new se(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}Pt.prototype.isLight=!0;class $a extends Pt{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(Te.DefaultUp),this.updateMatrix(),this.groundColor=new se(t)}copy(e){return Pt.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}$a.prototype.isHemisphereLight=!0;const vc=new ue,yc=new w,xc=new w;class eo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new X(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wi,this._frameExtents=new X(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yc.setFromMatrixPosition(e.matrixWorld),t.position.copy(yc),xc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xc),t.updateMatrixWorld(),vc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _c extends eo{constructor(){super(new Ze(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=2*Fi*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;n===t.fov&&i===t.aspect&&r===t.far||(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}_c.prototype.isSpotLightShadow=!0;class to extends Pt{constructor(e,t,n=0,i=Math.PI/3,r=0,a=1){super(e,t),this.type="SpotLight",this.position.copy(Te.DefaultUp),this.updateMatrix(),this.target=new Te,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.shadow=new _c}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}to.prototype.isSpotLight=!0;const Mc=new ue,pr=new w,no=new w;class wc extends eo{constructor(){super(new Ze(90,1,.5,500)),this._frameExtents=new X(4,2),this._viewportCount=6,this._viewports=[new Pe(2,1,1,1),new Pe(0,1,1,1),new Pe(3,1,1,1),new Pe(1,1,1,1),new Pe(3,0,1,1),new Pe(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),pr.setFromMatrixPosition(e.matrixWorld),n.position.copy(pr),no.copy(n.position),no.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(no),n.updateMatrixWorld(),i.makeTranslation(-pr.x,-pr.y,-pr.z),Mc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mc)}}wc.prototype.isPointLightShadow=!0;class io extends Pt{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wc}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}io.prototype.isPointLight=!0;class bc extends eo{constructor(){super(new ji(-5,5,5,-5,.5,500))}}bc.prototype.isDirectionalLightShadow=!0;class ro extends Pt{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Te.DefaultUp),this.updateMatrix(),this.target=new Te,this.shadow=new bc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}ro.prototype.isDirectionalLight=!0;class so extends Pt{constructor(e,t){super(e,t),this.type="AmbientLight"}}so.prototype.isAmbientLight=!0;class ao extends Pt{constructor(e,t,n=10,i=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}ao.prototype.isRectAreaLight=!0;class oo{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new w)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],n*i*1.092548),t.addScaledVector(a[5],i*r*1.092548),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],n*r*1.092548),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],1.023328*i),t.addScaledVector(a[2],1.023328*r),t.addScaledVector(a[3],1.023328*n),t.addScaledVector(a[4],.858086*n*i),t.addScaledVector(a[5],.858086*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],.858086*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+3*i);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+3*i);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}oo.prototype.isSphericalHarmonics3=!0;class mr extends Pt{constructor(e=new oo,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}mr.prototype.isLightProbe=!0;class Sc extends dt{constructor(e){super(e),this.textures={}}load(e,t,n,i){const r=this,a=new kt(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const i=new wd[e.type];if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new se().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.format!==void 0&&(i.format=e.format),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==1&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(i.uniforms[r]={},a.type){case"t":i.uniforms[r].value=n(a.value);break;case"c":i.uniforms[r].value=new se().setHex(a.value);break;case"v2":i.uniforms[r].value=new X().fromArray(a.value);break;case"v3":i.uniforms[r].value=new w().fromArray(a.value);break;case"v4":i.uniforms[r].value=new Pe().fromArray(a.value);break;case"m3":i.uniforms[r].value=new qe().fromArray(a.value);break;case"m4":i.uniforms[r].value=new ue().fromArray(a.value);break;default:i.uniforms[r].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.shading!==void 0&&(i.flatShading=e.shading===1),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new X().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new X().fromArray(e.clearcoatNormalScale)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}}class ws{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class lo extends ve{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}lo.prototype.isInstancedBufferGeometry=!0;class Tc extends dt{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new kt(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(u,d){if(t[d]!==void 0)return t[d];const p=u.interleavedBuffers[d],m=function(g,_){if(n[_]!==void 0)return n[_];const x=g.arrayBuffers[_],M=new Uint32Array(x).buffer;return n[_]=M,M}(u,p.buffer),v=ti(p.type,m),y=new Nn(v,p.stride);return y.uuid=p.uuid,t[d]=y,y}const r=e.isInstancedBufferGeometry?new lo:new ve,a=e.data.index;if(a!==void 0){const u=ti(a.type,a.array);r.setIndex(new Ae(u,1))}const o=e.data.attributes;for(const u in o){const d=o[u];let p;if(d.isInterleavedBufferAttribute){const m=i(e.data,d.data);p=new yn(m,d.itemSize,d.offset,d.normalized)}else{const m=ti(d.type,d.array);p=new(d.isInstancedBufferAttribute?Bn:Ae)(m,d.itemSize,d.normalized)}d.name!==void 0&&(p.name=d.name),d.usage!==void 0&&p.setUsage(d.usage),d.updateRange!==void 0&&(p.updateRange.offset=d.updateRange.offset,p.updateRange.count=d.updateRange.count),r.setAttribute(u,p)}const l=e.data.morphAttributes;if(l)for(const u in l){const d=l[u],p=[];for(let m=0,v=d.length;m<v;m++){const y=d[m];let g;if(y.isInterleavedBufferAttribute){const _=i(e.data,y.data);g=new yn(_,y.itemSize,y.offset,y.normalized)}else{const _=ti(y.type,y.array);g=new Ae(_,y.itemSize,y.normalized)}y.name!==void 0&&(g.name=y.name),p.push(g)}r.morphAttributes[u]=p}e.data.morphTargetsRelative&&(r.morphTargetsRelative=!0);const c=e.data.groups||e.data.drawcalls||e.data.offsets;if(c!==void 0)for(let u=0,d=c.length;u!==d;++u){const p=c[u];r.addGroup(p.start,p.count,p.materialIndex)}const h=e.data.boundingSphere;if(h!==void 0){const u=new w;h.center!==void 0&&u.fromArray(h.center),r.boundingSphere=new cn(u,h.radius)}return e.name&&(r.name=e.name),e.userData&&(r.userData=e.userData),r}}const Sd={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,CubeUVReflectionMapping:306,CubeUVRefractionMapping:307},Ec={RepeatWrapping:1e3,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},Ac={NearestFilter:1003,NearestMipmapNearestFilter:1004,NearestMipmapLinearFilter:1005,LinearFilter:1006,LinearMipmapNearestFilter:1007,LinearMipmapLinearFilter:1008};class Lc extends dt{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Vn.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Vn.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}let bs;Lc.prototype.isImageBitmapLoader=!0;const co={getContext:function(){return bs===void 0&&(bs=new(window.AudioContext||window.webkitAudioContext)),bs},setContext:function(s){bs=s}};class Rc extends dt{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new kt(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{const l=o.slice(0);co.getContext().decodeAudioData(l,function(c){t(c)})}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}}class Cc extends mr{constructor(e,t,n=1){super(void 0,n);const i=new se().set(e),r=new se().set(t),a=new w(i.r,i.g,i.b),o=new w(r.r,r.g,r.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)}}Cc.prototype.isHemisphereLightProbe=!0;class Pc extends mr{constructor(e,t=1){super(void 0,t);const n=new se().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}Pc.prototype.isAmbientLightProbe=!0;const Ic=new ue,Dc=new ue;class Nc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=zc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function zc(){return(typeof performance>"u"?Date:performance).now()}const Wn=new w,Bc=new rt,Td=new w,jn=new w;class ho extends Te{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0)return void console.warn("THREE.Audio: Audio is already playing.");if(this.hasPlaybackControl===!1)return void console.warn("THREE.Audio: this Audio has no playback control.");this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl!==!1)return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this;console.warn("THREE.Audio: this Audio has no playback control.")}stop(){if(this.hasPlaybackControl!==!1)return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this;console.warn("THREE.Audio: this Audio has no playback control.")}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl!==!1)return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this;console.warn("THREE.Audio: this Audio has no playback control.")}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl!==!1)return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this;console.warn("THREE.Audio: this Audio has no playback control.")}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const qn=new w,Fc=new rt,Ed=new w,Xn=new w;class Oc{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Uc{constructor(e,t,n){let i,r,a;switch(this.binding=e,this.valueSize=n,t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*n),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(5*n);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*n)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=3*this.valueSize;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){rt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;rt.multiplyQuaternionsFlat(e,a,e,t,e,n),rt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Ad="\\[\\]\\.:\\/",Ld=new RegExp("[\\[\\]\\.:\\/]","g"),uo="[^\\[\\]\\.:\\/]",Rd="[^"+Ad.replace("\\.","")+"]",Cd=/((?:WC+[\/:])*)/.source.replace("WC",uo),Pd=/(WCOD+)?/.source.replace("WCOD",Rd),Id=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uo),Dd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uo),Nd=new RegExp("^"+Cd+Pd+Id+Dd+"$"),zd=["material","materials","bones"];class Re{constructor(e,t,n){this.path=t,this.parsedPath=n||Re.parseTrackName(t),this.node=Re.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Re.Composite(e,t,n):new Re(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ld,"")}static parseTrackName(e){const t=Nd.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);zd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Re.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.isBufferGeometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Re.Composite=class{constructor(s,e,t){const n=t||Re.parseTrackName(e);this._targetGroup=s,this._bindings=s.subscribe_(e,n)}getValue(s,e){this.bind();const t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(s,e)}setValue(s,e){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(s,e)}bind(){const s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].bind()}unbind(){const s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].unbind()}},Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray],Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Hc{constructor(){this.uuid=mt(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length;let o,l=e.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const d=arguments[h],p=d.uuid;let m=t[p];if(m===void 0){m=l++,t[p]=m,e.push(d);for(let v=0,y=a;v!==y;++v)r[v].push(new Re(d,n[v],i[v]))}else if(m<c){o=e[m];const v=--c,y=e[v];t[y.uuid]=m,e[m]=y,t[p]=v,e[v]=d;for(let g=0,_=a;g!==_;++g){const x=r[g],M=x[v];let b=x[m];x[m]=M,b===void 0&&(b=new Re(d,n[g],i[g])),x[v]=b}}else e[m]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,h=t[c];if(h!==void 0&&h>=r){const u=r++,d=e[u];t[d.uuid]=h,e[h]=d,t[c]=u,e[u]=l;for(let p=0,m=i;p!==m;++p){const v=n[p],y=v[u],g=v[h];v[h]=y,v[u]=g}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o].uuid,h=t[c];if(h!==void 0)if(delete t[c],h<r){const u=--r,d=e[u],p=--a,m=e[p];t[d.uuid]=h,e[h]=d,t[m.uuid]=u,e[u]=m,e.pop();for(let v=0,y=i;v!==y;++v){const g=n[v],_=g[u],x=g[p];g[h]=_,g[u]=x,g.pop()}}else{const u=--a,d=e[u];u>0&&(t[d.uuid]=h),e[h]=d,e.pop();for(let p=0,m=i;p!==m;++p){const v=n[p];v[h]=v[u],v.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=r.length,n[e]=i,a.push(e),o.push(t),r.push(u);for(let d=h,p=l.length;d!==p;++d){const m=l[d];u[d]=new Re(m,e,t)}return u}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o];t[e[o]]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}}Hc.prototype.isAnimationObjectGroup=!0;class Bd{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:2400,endingEnd:2400};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled)return void this._updateWeight(e);const r=this._startTime;if(r!==null){const l=(e-r)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;if(this.blendMode===2501)for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);else for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===2202;if(e===0)return r===-1?i:a&&(1&r)==1?t-i:i;if(n===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else{if(!(i<0)){this.time=i;break e}i=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(1&r)==1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=2401,i.endingEnd=2401):(i.endingStart=e?this.zeroSlopeAtStart?2401:2400:2402,i.endingEnd=t?this.zeroSlopeAtEnd?2401:2400:2402)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}class Gc extends an{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],p=d.name;let m=h[p];if(m!==void 0)a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,p));continue}const v=t&&t._propertyBindings[u].binding.parsedPath;m=new Uc(Re.create(n,p,v),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,p),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++==0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount==0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null,delete o.actionByRoot[(e._localRoot||this._root).uuid],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount==0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Za(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?ur.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(n=a!==null?a.blendMode:2500),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Bd(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?ur.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions;for(let t=this._nActiveActions-1;t>=0;--t)e[t].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const r in n){const a=n[r].actionByRoot[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}const i=this._bindingsByRootAndName[t];if(i!==void 0)for(const r in i){const a=i[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}Gc.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class Ss{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new Ss(this.value.clone===void 0?this.value:this.value.clone())}}class kc extends Nn{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}kc.prototype.isInstancedInterleavedBuffer=!0;class Vc{constructor(e,t,n,i,r){this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}Vc.prototype.isGLBufferAttribute=!0;function Wc(s,e){return s.distance-e.distance}function po(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)po(i[r],e,t,!0)}}const jc=new X;class zi{constructor(e=new X(1/0,1/0),t=new X(-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jc.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return jc.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}zi.prototype.isBox2=!0;const qc=new w,Ts=new w;class Xc{constructor(e=new w,t=new w){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){qc.subVectors(e,this.start),Ts.subVectors(this.end,this.start);const n=Ts.dot(Ts);let i=Ts.dot(qc)/n;return t&&(i=it(i,0,1)),i}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Yc=new w,Mn=new w,Es=new ue,mo=new ue;class Jc extends pt{constructor(e){const t=Zc(e),n=new ve,i=[],r=[],a=new se(0,0,1),o=new se(0,1,0);for(let l=0;l<t.length;l++){const c=t[l];c.parent&&c.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new he(i,3)),n.setAttribute("color",new he(r,3)),super(n,new Qe({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0})),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");mo.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(Es.multiplyMatrices(mo,o.matrixWorld),Mn.setFromMatrixPosition(Es),i.setXYZ(a,Mn.x,Mn.y,Mn.z),Es.multiplyMatrices(mo,o.parent.matrixWorld),Mn.setFromMatrixPosition(Es),i.setXYZ(a+1,Mn.x,Mn.y,Mn.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Zc(s){const e=[];s&&s.isBone&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,Zc(s.children[t]));return e}const Fd=new w,Qc=new se,Kc=new se;class $c extends pt{constructor(e=10,t=10,n=4473924,i=8947848){n=new se(n),i=new se(i);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let u=0,d=0,p=-o;u<=t;u++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const m=u===r?n:i;m.toArray(c,d),d+=3,m.toArray(c,d),d+=3,m.toArray(c,d),d+=3,m.toArray(c,d),d+=3}const h=new ve;h.setAttribute("position",new he(l,3)),h.setAttribute("color",new he(c,3)),super(h,new Qe({vertexColors:!0,toneMapped:!1})),this.type="GridHelper"}}const eh=new w,As=new w,th=new w,Ls=new w,Ge=new Vi;function We(s,e,t,n,i,r,a){Ls.set(i,r,a).unproject(n);const o=e[s];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],Ls.x,Ls.y,Ls.z)}}const Rs=new ft;class nh extends pt{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new ve;r.setIndex(new Ae(n,1)),r.setAttribute("position",new Ae(i,3)),super(r,new Qe({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Rs.setFromObject(this.object),Rs.isEmpty())return;const t=Rs.min,n=Rs.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e){return pt.prototype.copy.call(this,e),this.object=e.object,this}}const ih=new w;let Cs,fo;class rh extends pt{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=new ve;n.setAttribute("position",new he(t,3)),n.setAttribute("color",new he([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3)),super(n,new Qe({vertexColors:!0,toneMapped:!1})),this.type="AxesHelper"}setColors(e,t,n){const i=new se,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}const sh=new Float32Array(1),Od=new Int32Array(sh.buffer);yt.create=function(s,e){return console.log("THREE.Curve.create() has been deprecated"),s.prototype=Object.create(yt.prototype),s.prototype.constructor=s,s.prototype.getPoint=e,s},sr.prototype.fromPoints=function(s){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(s)},$c.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")},Jc.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")},dt.prototype.extractUrlBase=function(s){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),ws.extractUrlBase(s)},dt.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}},zi.prototype.center=function(s){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(s)},zi.prototype.empty=function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},zi.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)},zi.prototype.size=function(s){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(s)},ft.prototype.center=function(s){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(s)},ft.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},ft.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)},ft.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)},ft.prototype.size=function(s){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(s)},cn.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()},Wi.prototype.setFromMatrix=function(s){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(s)},Xc.prototype.center=function(s){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(s)},qe.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)},qe.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)},qe.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},qe.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)},qe.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},qe.prototype.getInverse=function(s){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()},ue.prototype.extractPosition=function(s){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(s)},ue.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)},ue.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new w().setFromMatrixColumn(this,3)},ue.prototype.setRotationFromQuaternion=function(s){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(s)},ue.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},ue.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)},ue.prototype.multiplyVector4=function(s){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)},ue.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},ue.prototype.rotateAxis=function(s){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),s.transformDirection(this)},ue.prototype.crossVector=function(s){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)},ue.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")},ue.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},ue.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},ue.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},ue.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},ue.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)},ue.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},ue.prototype.makeFrustum=function(s,e,t,n,i,r){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(s,e,n,t,i,r)},ue.prototype.getInverse=function(s){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()},Bt.prototype.isIntersectionLine=function(s){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(s)},rt.prototype.multiplyVector3=function(s){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),s.applyQuaternion(this)},rt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()},un.prototype.isIntersectionBox=function(s){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)},un.prototype.isIntersectionPlane=function(s){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(s)},un.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)},ke.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},ke.prototype.barycoordFromPoint=function(s,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(s,e)},ke.prototype.midpoint=function(s){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(s)},ke.prototypenormal=function(s){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(s)},ke.prototype.plane=function(s){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(s)},ke.barycoordFromPoint=function(s,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),ke.getBarycoord(s,e,t,n,i)},ke.normal=function(s,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),ke.getNormal(s,e,t,n)},Ut.prototype.extractAllPoints=function(s){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(s)},Ut.prototype.extrude=function(s){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Gt(this,s)},Ut.prototype.makeGeometry=function(s){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Un(this,s)},X.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)},X.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)},X.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},w.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},w.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},w.prototype.getPositionFromMatrix=function(s){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(s)},w.prototype.getScaleFromMatrix=function(s){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(s)},w.prototype.getColumnFromMatrix=function(s,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,s)},w.prototype.applyProjection=function(s){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(s)},w.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)},w.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)},w.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},Pe.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)},Pe.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},Te.prototype.getChildByName=function(s){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(s)},Te.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},Te.prototype.translate=function(s,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,s)},Te.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},Te.prototype.applyMatrix=function(s){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)},Object.defineProperties(Te.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(s){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=s}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}}),je.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")},Object.defineProperties(je.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),0},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}}),is.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")},Ze.prototype.setLens=function(s,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(s)},Object.defineProperties(Pt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(s){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=s}},shadowCameraLeft:{set:function(s){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=s}},shadowCameraRight:{set:function(s){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=s}},shadowCameraTop:{set:function(s){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=s}},shadowCameraBottom:{set:function(s){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=s}},shadowCameraNear:{set:function(s){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=s}},shadowCameraFar:{set:function(s){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=s}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(s){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=s}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(s){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=s}},shadowMapHeight:{set:function(s){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=s}}}),Object.defineProperties(Ae.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===35048},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(35048)}}}),Ae.prototype.setDynamic=function(s){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?35048:35044),this},Ae.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Ae.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},ve.prototype.addIndex=function(s){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(s)},ve.prototype.addAttribute=function(s,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),e&&e.isBufferAttribute||e&&e.isInterleavedBufferAttribute?s==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(s,e):(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(s,new Ae(arguments[1],arguments[2])))},ve.prototype.addDrawCall=function(s,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(s,e)},ve.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},ve.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},ve.prototype.removeAttribute=function(s){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(s)},ve.prototype.applyMatrix=function(s){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)},Object.defineProperties(ve.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}}),Nn.prototype.setDynamic=function(s){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?35048:35044),this},Nn.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},Gt.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")},Gt.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")},Gt.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")},Zr.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")},Ss.prototype.onUpdate=function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this},Object.defineProperties(Ye.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new se}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(s){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=s===1}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(s){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=s}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}}),Object.defineProperties(Kt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(s){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=s}}}),Ie.prototype.clearTarget=function(s,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(s),this.clear(e,t,n)},Ie.prototype.animate=function(s){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(s)},Ie.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},Ie.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},Ie.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},Ie.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},Ie.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},Ie.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},Ie.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},Ie.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},Ie.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},Ie.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},Ie.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},Ie.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},Ie.prototype.enableScissorTest=function(s){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(s)},Ie.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},Ie.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},Ie.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},Ie.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},Ie.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},Ie.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},Ie.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},Ie.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},Ie.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},Ie.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()},Object.defineProperties(Ie.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=s}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=s}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(s){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=s===!0?3001:3e3}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}}),Object.defineProperties(Ll.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}}),Object.defineProperties(Tt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=s}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=s}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=s}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=s}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(s){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=s}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(s){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=s}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(s){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=s}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(s){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=s}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(s){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=s}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(s){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=s}}}),ho.prototype.load=function(s){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new Rc().load(s,function(t){e.setBuffer(t)}),this},Oc.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()},Gr.prototype.updateCubeMap=function(s,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(s,e)},Gr.prototype.clear=function(s,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(s,e,t,n)},En.crossOrigin=void 0,En.loadTexture=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new gc;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r},En.loadTextureCube=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new mc;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r},En.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},En.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};const Ud={createMultiMaterialObject:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},detach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},attach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:te}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=te),f.ACESFilmicToneMapping=4,f.AddEquation=100,f.AddOperation=2,f.AdditiveAnimationBlendMode=2501,f.AdditiveBlending=2,f.AlphaFormat=1021,f.AlwaysDepth=1,f.AlwaysStencilFunc=519,f.AmbientLight=so,f.AmbientLightProbe=Pc,f.AnimationClip=ur,f.AnimationLoader=class extends dt{constructor(s){super(s)}load(s,e,t,n){const i=this,r=new kt(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(s,function(a){try{e(i.parse(JSON.parse(a)))}catch(o){n?n(o):console.error(o),i.manager.itemError(s)}},t,n)}parse(s){const e=[];for(let t=0;t<s.length;t++){const n=ur.parse(s[t]);e.push(n)}return e}},f.AnimationMixer=Gc,f.AnimationObjectGroup=Hc,f.AnimationUtils=Fe,f.ArcCurve=Pa,f.ArrayCamera=Ma,f.ArrowHelper=class extends Te{constructor(s=new w(0,0,1),e=new w(0,0,0),t=1,n=16776960,i=.2*t,r=.2*i){super(),this.type="ArrowHelper",Cs===void 0&&(Cs=new ve,Cs.setAttribute("position",new he([0,0,0,0,1,0],3)),fo=new xn(0,.5,1,5,1),fo.translate(0,-.5,0)),this.position.copy(e),this.line=new $t(Cs,new Qe({color:n,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new je(fo,new Zt({color:n,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(s),this.setLength(t,i,r)}setDirection(s){if(s.y>.99999)this.quaternion.set(0,0,0,1);else if(s.y<-.99999)this.quaternion.set(1,0,0,0);else{ih.set(s.z,0,-s.x).normalize();const e=Math.acos(s.y);this.quaternion.setFromAxisAngle(ih,e)}}setLength(s,e=.2*s,t=.2*e){this.line.scale.set(1,Math.max(1e-4,s-e),1),this.line.updateMatrix(),this.cone.scale.set(t,e,t),this.cone.position.y=s,this.cone.updateMatrix()}setColor(s){this.line.material.color.set(s),this.cone.material.color.set(s)}copy(s){return super.copy(s,!1),this.line.copy(s.line),this.cone.copy(s.cone),this}},f.Audio=ho,f.AudioAnalyser=Oc,f.AudioContext=co,f.AudioListener=class extends Te{constructor(){super(),this.type="AudioListener",this.context=co.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Nc}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(s){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=s,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(s){return this.gain.gain.setTargetAtTime(s,this.context.currentTime,.01),this}updateMatrixWorld(s){super.updateMatrixWorld(s);const e=this.context.listener,t=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Wn,Bc,Td),jn.set(0,0,-1).applyQuaternion(Bc),e.positionX){const n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Wn.x,n),e.positionY.linearRampToValueAtTime(Wn.y,n),e.positionZ.linearRampToValueAtTime(Wn.z,n),e.forwardX.linearRampToValueAtTime(jn.x,n),e.forwardY.linearRampToValueAtTime(jn.y,n),e.forwardZ.linearRampToValueAtTime(jn.z,n),e.upX.linearRampToValueAtTime(t.x,n),e.upY.linearRampToValueAtTime(t.y,n),e.upZ.linearRampToValueAtTime(t.z,n)}else e.setPosition(Wn.x,Wn.y,Wn.z),e.setOrientation(jn.x,jn.y,jn.z,t.x,t.y,t.z)}},f.AudioLoader=Rc,f.AxesHelper=rh,f.AxisHelper=function(s){return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."),new rh(s)},f.BackSide=1,f.BasicDepthPacking=3200,f.BasicShadowMap=0,f.BinaryTextureLoader=function(s){return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."),new fc(s)},f.Bone=rs,f.BooleanKeyframeTrack=Gn,f.BoundingBoxHelper=function(s,e){return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),new nh(s,e)},f.Box2=zi,f.Box3=ft,f.Box3Helper=class extends pt{constructor(s,e=16776960){const t=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new ve;n.setIndex(new Ae(t,1)),n.setAttribute("position",new he([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3)),super(n,new Qe({color:e,toneMapped:!1})),this.box=s,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(s){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(s))}},f.BoxBufferGeometry=Qt,f.BoxGeometry=Qt,f.BoxHelper=nh,f.BufferAttribute=Ae,f.BufferGeometry=ve,f.BufferGeometryLoader=Tc,f.ByteType=1010,f.Cache=Vn,f.Camera=Vi,f.CameraHelper=class extends pt{constructor(s){const e=new ve,t=new Qe({color:16777215,vertexColors:!0,toneMapped:!1}),n=[],i=[],r={},a=new se(16755200),o=new se(16711680),l=new se(43775),c=new se(16777215),h=new se(3355443);function u(p,m,v){d(p,v),d(m,v)}function d(p,m){n.push(0,0,0),i.push(m.r,m.g,m.b),r[p]===void 0&&(r[p]=[]),r[p].push(n.length/3-1)}u("n1","n2",a),u("n2","n4",a),u("n4","n3",a),u("n3","n1",a),u("f1","f2",a),u("f2","f4",a),u("f4","f3",a),u("f3","f1",a),u("n1","f1",a),u("n2","f2",a),u("n3","f3",a),u("n4","f4",a),u("p","n1",o),u("p","n2",o),u("p","n3",o),u("p","n4",o),u("u1","u2",l),u("u2","u3",l),u("u3","u1",l),u("c","t",c),u("p","c",h),u("cn1","cn2",h),u("cn3","cn4",h),u("cf1","cf2",h),u("cf3","cf4",h),e.setAttribute("position",new he(n,3)),e.setAttribute("color",new he(i,3)),super(e,t),this.type="CameraHelper",this.camera=s,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=s.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=r,this.update()}update(){const s=this.geometry,e=this.pointMap;Ge.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),We("c",e,s,Ge,0,0,-1),We("t",e,s,Ge,0,0,1),We("n1",e,s,Ge,-1,-1,-1),We("n2",e,s,Ge,1,-1,-1),We("n3",e,s,Ge,-1,1,-1),We("n4",e,s,Ge,1,1,-1),We("f1",e,s,Ge,-1,-1,1),We("f2",e,s,Ge,1,-1,1),We("f3",e,s,Ge,-1,1,1),We("f4",e,s,Ge,1,1,1),We("u1",e,s,Ge,.7,1.1,-1),We("u2",e,s,Ge,-.7,1.1,-1),We("u3",e,s,Ge,0,2,-1),We("cf1",e,s,Ge,-1,0,1),We("cf2",e,s,Ge,1,0,1),We("cf3",e,s,Ge,0,-1,1),We("cf4",e,s,Ge,0,1,1),We("cn1",e,s,Ge,-1,0,-1),We("cn2",e,s,Ge,1,0,-1),We("cn3",e,s,Ge,0,-1,-1),We("cn4",e,s,Ge,0,1,-1),s.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}},f.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been removed")},f.CanvasTexture=Ql,f.CatmullRomCurve3=Ba,f.CineonToneMapping=3,f.CircleBufferGeometry=bi,f.CircleGeometry=bi,f.ClampToEdgeWrapping=1001,f.Clock=Nc,f.Color=se,f.ColorKeyframeTrack=Qa,f.CompressedTexture=La,f.CompressedTextureLoader=class extends dt{constructor(s){super(s)}load(s,e,t,n){const i=this,r=[],a=new La,o=new kt(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(i.withCredentials);let l=0;function c(h){o.load(s[h],function(u){const d=i.parse(u,!0);r[h]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},l+=1,l===6&&(d.mipmapCount===1&&(a.minFilter=1006),a.image=r,a.format=d.format,a.needsUpdate=!0,e&&e(a))},t,n)}if(Array.isArray(s))for(let h=0,u=s.length;h<u;++h)c(h);else o.load(s,function(h){const u=i.parse(h,!0);if(u.isCubemap){const d=u.mipmaps.length/u.mipmapCount;for(let p=0;p<d;p++){r[p]={mipmaps:[]};for(let m=0;m<u.mipmapCount;m++)r[p].mipmaps.push(u.mipmaps[p*u.mipmapCount+m]),r[p].format=u.format,r[p].width=u.width,r[p].height=u.height}a.image=r}else a.image.width=u.width,a.image.height=u.height,a.mipmaps=u.mipmaps;u.mipmapCount===1&&(a.minFilter=1006),a.format=u.format,a.needsUpdate=!0,e&&e(a)},t,n);return a}},f.ConeBufferGeometry=Si,f.ConeGeometry=Si,f.CubeCamera=Gr,f.CubeReflectionMapping=301,f.CubeRefractionMapping=302,f.CubeTexture=mi,f.CubeTextureLoader=mc,f.CubeUVReflectionMapping=306,f.CubeUVRefractionMapping=307,f.CubicBezierCurve=ms,f.CubicBezierCurve3=Fa,f.CubicInterpolant=hc,f.CullFaceBack=1,f.CullFaceFront=2,f.CullFaceFrontBack=3,f.CullFaceNone=0,f.Curve=yt,f.CurvePath=tc,f.CustomBlending=5,f.CustomToneMapping=5,f.CylinderBufferGeometry=xn,f.CylinderGeometry=xn,f.Cylindrical=class{constructor(s=1,e=0,t=0){return this.radius=s,this.theta=e,this.y=t,this}set(s,e,t){return this.radius=s,this.theta=e,this.y=t,this}copy(s){return this.radius=s.radius,this.theta=s.theta,this.y=s.y,this}setFromVector3(s){return this.setFromCartesianCoords(s.x,s.y,s.z)}setFromCartesianCoords(s,e,t){return this.radius=Math.sqrt(s*s+t*t),this.theta=Math.atan2(s,t),this.y=e,this}clone(){return new this.constructor().copy(this)}},f.DataTexture=zn,f.DataTexture2DArray=Xr,f.DataTexture3D=ya,f.DataTextureLoader=fc,f.DataUtils=class{static toHalfFloat(s){s>65504&&(console.warn("THREE.DataUtils.toHalfFloat(): value exceeds 65504."),s=65504),sh[0]=s;const e=Od[0];let t=e>>16&32768,n=e>>12&2047;const i=e>>23&255;return i<103?t:i>142?(t|=31744,t|=(i==255?0:1)&&8388607&e,t):i<113?(n|=2048,t|=(n>>114-i)+(n>>113-i&1),t):(t|=i-112<<10|n>>1,t+=1&n,t)}},f.DecrementStencilOp=7683,f.DecrementWrapStencilOp=34056,f.DefaultLoadingManager=pc,f.DepthFormat=1026,f.DepthStencilFormat=1027,f.DepthTexture=Kl,f.DirectionalLight=ro,f.DirectionalLightHelper=class extends Te{constructor(s,e,t){super(),this.light=s,this.light.updateMatrixWorld(),this.matrix=s.matrixWorld,this.matrixAutoUpdate=!1,this.color=t,e===void 0&&(e=1);let n=new ve;n.setAttribute("position",new he([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const i=new Qe({fog:!1,toneMapped:!1});this.lightPlane=new $t(n,i),this.add(this.lightPlane),n=new ve,n.setAttribute("position",new he([0,0,0,0,0,1],3)),this.targetLine=new $t(n,i),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){eh.setFromMatrixPosition(this.light.matrixWorld),As.setFromMatrixPosition(this.light.target.matrixWorld),th.subVectors(As,eh),this.lightPlane.lookAt(As),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(As),this.targetLine.scale.z=th.length()}},f.DiscreteInterpolant=uc,f.DodecahedronBufferGeometry=Ti,f.DodecahedronGeometry=Ti,f.DoubleSide=2,f.DstAlphaFactor=206,f.DstColorFactor=208,f.DynamicBufferAttribute=function(s,e){return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead."),new Ae(s,e).setUsage(35048)},f.DynamicCopyUsage=35050,f.DynamicDrawUsage=35048,f.DynamicReadUsage=35049,f.EdgesGeometry=Ca,f.EdgesHelper=function(s,e){return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),new pt(new Ca(s.geometry),new Qe({color:e!==void 0?e:16777215}))},f.EllipseCurve=tr,f.EqualDepth=4,f.EqualStencilFunc=514,f.EquirectangularReflectionMapping=303,f.EquirectangularRefractionMapping=304,f.Euler=Rn,f.EventDispatcher=an,f.ExtrudeBufferGeometry=Gt,f.ExtrudeGeometry=Gt,f.FaceColors=1,f.FileLoader=kt,f.FlatShading=1,f.Float16BufferAttribute=jo,f.Float32Attribute=function(s,e){return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."),new he(s,e)},f.Float32BufferAttribute=he,f.Float64Attribute=function(s,e){return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."),new qo(s,e)},f.Float64BufferAttribute=qo,f.FloatType=1015,f.Fog=Ji,f.FogExp2=Yi,f.Font=function(){console.error("THREE.Font has been moved to /examples/jsm/loaders/FontLoader.js")},f.FontLoader=function(){console.error("THREE.FontLoader has been moved to /examples/jsm/loaders/FontLoader.js")},f.FrontSide=0,f.Frustum=Wi,f.GLBufferAttribute=Vc,f.GLSL1="100",f.GLSL3=Hs,f.GammaEncoding=3007,f.GreaterDepth=6,f.GreaterEqualDepth=5,f.GreaterEqualStencilFunc=518,f.GreaterStencilFunc=516,f.GridHelper=$c,f.Group=Dn,f.HalfFloatType=1016,f.HemisphereLight=$a,f.HemisphereLightHelper=class extends Te{constructor(s,e,t){super(),this.light=s,this.light.updateMatrixWorld(),this.matrix=s.matrixWorld,this.matrixAutoUpdate=!1,this.color=t;const n=new On(e);n.rotateY(.5*Math.PI),this.material=new Zt({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const i=n.getAttribute("position"),r=new Float32Array(3*i.count);n.setAttribute("color",new Ae(r,3)),this.add(new je(n,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const s=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=s.geometry.getAttribute("color");Qc.copy(this.light.color),Kc.copy(this.light.groundColor);for(let t=0,n=e.count;t<n;t++){const i=t<n/2?Qc:Kc;e.setXYZ(t,i.r,i.g,i.b)}e.needsUpdate=!0}s.lookAt(Fd.setFromMatrixPosition(this.light.matrixWorld).negate())}},f.HemisphereLightProbe=Cc,f.IcosahedronBufferGeometry=Ai,f.IcosahedronGeometry=Ai,f.ImageBitmapLoader=Lc,f.ImageLoader=dr,f.ImageUtils=En,f.ImmediateRenderObject=function(){console.error("THREE.ImmediateRenderObject has been removed.")},f.IncrementStencilOp=7682,f.IncrementWrapStencilOp=34055,f.InstancedBufferAttribute=Bn,f.InstancedBufferGeometry=lo,f.InstancedInterleavedBuffer=kc,f.InstancedMesh=Sa,f.Int16Attribute=function(s,e){return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),new Vo(s,e)},f.Int16BufferAttribute=Vo,f.Int32Attribute=function(s,e){return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),new Wo(s,e)},f.Int32BufferAttribute=Wo,f.Int8Attribute=function(s,e){return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),new Ho(s,e)},f.Int8BufferAttribute=Ho,f.IntType=1013,f.InterleavedBuffer=Nn,f.InterleavedBufferAttribute=yn,f.Interpolant=en,f.InterpolateDiscrete=2300,f.InterpolateLinear=2301,f.InterpolateSmooth=2302,f.InvertStencilOp=5386,f.JSONLoader=function(){console.error("THREE.JSONLoader has been removed.")},f.KeepStencilOp=7680,f.KeyframeTrack=Ct,f.LOD=zl,f.LatheBufferGeometry=Li,f.LatheGeometry=Li,f.Layers=$s,f.LensFlare=function(){console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js")},f.LessDepth=2,f.LessEqualDepth=3,f.LessEqualStencilFunc=515,f.LessStencilFunc=513,f.Light=Pt,f.LightProbe=mr,f.Line=$t,f.Line3=Xc,f.LineBasicMaterial=Qe,f.LineCurve=rr,f.LineCurve3=ec,f.LineDashedMaterial=Ja,f.LineLoop=Ea,f.LinePieces=1,f.LineSegments=pt,f.LineStrip=0,f.LinearEncoding=3e3,f.LinearFilter=1006,f.LinearInterpolant=Za,f.LinearMipMapLinearFilter=1008,f.LinearMipMapNearestFilter=1007,f.LinearMipmapLinearFilter=1008,f.LinearMipmapNearestFilter=1007,f.LinearToneMapping=1,f.Loader=dt,f.LoaderUtils=ws,f.LoadingManager=Ka,f.LogLuvEncoding=3003,f.LoopOnce=2200,f.LoopPingPong=2202,f.LoopRepeat=2201,f.LuminanceAlphaFormat=1025,f.LuminanceFormat=1024,f.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},f.Material=Ye,f.MaterialLoader=Sc,f.Math=To,f.MathUtils=To,f.Matrix3=qe,f.Matrix4=ue,f.MaxEquation=104,f.Mesh=je,f.MeshBasicMaterial=Zt,f.MeshDepthMaterial=Yr,f.MeshDistanceMaterial=Jr,f.MeshFaceMaterial=function(s){return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."),s},f.MeshLambertMaterial=Xa,f.MeshMatcapMaterial=Ya,f.MeshNormalMaterial=qa,f.MeshPhongMaterial=Wa,f.MeshPhysicalMaterial=Va,f.MeshStandardMaterial=Ms,f.MeshToonMaterial=ja,f.MinEquation=103,f.MirroredRepeatWrapping=1002,f.MixOperation=1,f.MultiMaterial=function(s=[]){return console.warn("THREE.MultiMaterial has been removed. Use an Array instead."),s.isMultiMaterial=!0,s.materials=s,s.clone=function(){return s.slice()},s},f.MultiplyBlending=4,f.MultiplyOperation=0,f.NearestFilter=1003,f.NearestMipMapLinearFilter=1005,f.NearestMipMapNearestFilter=1004,f.NearestMipmapLinearFilter=1005,f.NearestMipmapNearestFilter=1004,f.NeverDepth=0,f.NeverStencilFunc=512,f.NoBlending=0,f.NoColors=0,f.NoToneMapping=0,f.NormalAnimationBlendMode=2500,f.NormalBlending=1,f.NotEqualDepth=7,f.NotEqualStencilFunc=517,f.NumberKeyframeTrack=cr,f.Object3D=Te,f.ObjectLoader=class extends dt{constructor(s){super(s)}load(s,e,t,n){const i=this,r=this.path===""?ws.extractUrlBase(s):this.path;this.resourcePath=this.resourcePath||r;const a=new kt(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(s,function(o){let l=null;try{l=JSON.parse(o)}catch(h){return n!==void 0&&n(h),void console.error("THREE:ObjectLoader: Can't parse "+s+".",h.message)}const c=l.metadata;c!==void 0&&c.type!==void 0&&c.type.toLowerCase()!=="geometry"?i.parse(l,e):console.error("THREE.ObjectLoader: Can't load "+s)},t,n)}async loadAsync(s,e){const t=this.path===""?ws.extractUrlBase(s):this.path;this.resourcePath=this.resourcePath||t;const n=new kt(this.manager);n.setPath(this.path),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials);const i=await n.loadAsync(s,e),r=JSON.parse(i),a=r.metadata;if(a===void 0||a.type===void 0||a.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+s);return await this.parseAsync(r)}parse(s,e){const t=this.parseAnimations(s.animations),n=this.parseShapes(s.shapes),i=this.parseGeometries(s.geometries,n),r=this.parseImages(s.images,function(){e!==void 0&&e(l)}),a=this.parseTextures(s.textures,r),o=this.parseMaterials(s.materials,a),l=this.parseObject(s.object,i,o,a,t),c=this.parseSkeletons(s.skeletons,l);if(this.bindSkeletons(l,c),e!==void 0){let h=!1;for(const u in r)if(r[u]instanceof HTMLImageElement){h=!0;break}h===!1&&e(l)}return l}async parseAsync(s){const e=this.parseAnimations(s.animations),t=this.parseShapes(s.shapes),n=this.parseGeometries(s.geometries,t),i=await this.parseImagesAsync(s.images),r=this.parseTextures(s.textures,i),a=this.parseMaterials(s.materials,r),o=this.parseObject(s.object,n,a,r,e),l=this.parseSkeletons(s.skeletons,o);return this.bindSkeletons(o,l),o}parseShapes(s){const e={};if(s!==void 0)for(let t=0,n=s.length;t<n;t++){const i=new Ut().fromJSON(s[t]);e[i.uuid]=i}return e}parseSkeletons(s,e){const t={},n={};if(e.traverse(function(i){i.isBone&&(n[i.uuid]=i)}),s!==void 0)for(let i=0,r=s.length;i<r;i++){const a=new ss().fromJSON(s[i],n);t[a.uuid]=a}return t}parseGeometries(s,e){const t={};if(s!==void 0){const n=new Tc;for(let i=0,r=s.length;i<r;i++){let a;const o=s[i];switch(o.type){case"BufferGeometry":case"InstancedBufferGeometry":a=n.parse(o);break;case"Geometry":console.error("THREE.ObjectLoader: The legacy Geometry type is no longer supported.");break;default:o.type in cc?a=cc[o.type].fromJSON(o,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${o.type}"`)}a.uuid=o.uuid,o.name!==void 0&&(a.name=o.name),a.isBufferGeometry===!0&&o.userData!==void 0&&(a.userData=o.userData),t[o.uuid]=a}}return t}parseMaterials(s,e){const t={},n={};if(s!==void 0){const i=new Sc;i.setTextures(e);for(let r=0,a=s.length;r<a;r++){const o=s[r];if(o.type==="MultiMaterial"){const l=[];for(let c=0;c<o.materials.length;c++){const h=o.materials[c];t[h.uuid]===void 0&&(t[h.uuid]=i.parse(h)),l.push(t[h.uuid])}n[o.uuid]=l}else t[o.uuid]===void 0&&(t[o.uuid]=i.parse(o)),n[o.uuid]=t[o.uuid]}}return n}parseAnimations(s){const e={};if(s!==void 0)for(let t=0;t<s.length;t++){const n=s[t],i=ur.parse(n);e[i.uuid]=i}return e}parseImages(s,e){const t=this,n={};let i;function r(a){if(typeof a=="string"){const o=a;return function(l){return t.manager.itemStart(l),i.load(l,function(){t.manager.itemEnd(l)},void 0,function(){t.manager.itemError(l),t.manager.itemEnd(l)})}(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o)}return a.data?{data:ti(a.type,a.data),width:a.width,height:a.height}:null}if(s!==void 0&&s.length>0){const a=new Ka(e);i=new dr(a),i.setCrossOrigin(this.crossOrigin);for(let o=0,l=s.length;o<l;o++){const c=s[o],h=c.url;if(Array.isArray(h)){n[c.uuid]=[];for(let u=0,d=h.length;u<d;u++){const p=r(h[u]);p!==null&&(p instanceof HTMLImageElement?n[c.uuid].push(p):n[c.uuid].push(new zn(p.data,p.width,p.height)))}}else{const u=r(c.url);u!==null&&(n[c.uuid]=u)}}}return n}async parseImagesAsync(s){const e=this,t={};let n;async function i(r){if(typeof r=="string"){const a=r,o=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return await n.loadAsync(o)}return r.data?{data:ti(r.type,r.data),width:r.width,height:r.height}:null}if(s!==void 0&&s.length>0){n=new dr(this.manager),n.setCrossOrigin(this.crossOrigin);for(let r=0,a=s.length;r<a;r++){const o=s[r],l=o.url;if(Array.isArray(l)){t[o.uuid]=[];for(let c=0,h=l.length;c<h;c++){const u=l[c],d=await i(u);d!==null&&(d instanceof HTMLImageElement?t[o.uuid].push(d):t[o.uuid].push(new zn(d.data,d.width,d.height)))}}else{const c=await i(o.url);c!==null&&(t[o.uuid]=c)}}}return t}parseTextures(s,e){function t(i,r){return typeof i=="number"?i:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",i),r[i])}const n={};if(s!==void 0)for(let i=0,r=s.length;i<r;i++){const a=s[i];let o;a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),e[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const l=e[a.image];Array.isArray(l)?(o=new mi(l),l.length===6&&(o.needsUpdate=!0)):(o=l&&l.data?new zn(l.data,l.width,l.height):new Xe(l),l&&(o.needsUpdate=!0)),o.uuid=a.uuid,a.name!==void 0&&(o.name=a.name),a.mapping!==void 0&&(o.mapping=t(a.mapping,Sd)),a.offset!==void 0&&o.offset.fromArray(a.offset),a.repeat!==void 0&&o.repeat.fromArray(a.repeat),a.center!==void 0&&o.center.fromArray(a.center),a.rotation!==void 0&&(o.rotation=a.rotation),a.wrap!==void 0&&(o.wrapS=t(a.wrap[0],Ec),o.wrapT=t(a.wrap[1],Ec)),a.format!==void 0&&(o.format=a.format),a.type!==void 0&&(o.type=a.type),a.encoding!==void 0&&(o.encoding=a.encoding),a.minFilter!==void 0&&(o.minFilter=t(a.minFilter,Ac)),a.magFilter!==void 0&&(o.magFilter=t(a.magFilter,Ac)),a.anisotropy!==void 0&&(o.anisotropy=a.anisotropy),a.flipY!==void 0&&(o.flipY=a.flipY),a.premultiplyAlpha!==void 0&&(o.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(o.unpackAlignment=a.unpackAlignment),a.userData!==void 0&&(o.userData=a.userData),n[a.uuid]=o}return n}parseObject(s,e,t,n,i){let r,a,o;function l(u){return e[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",u),e[u]}function c(u){if(u!==void 0){if(Array.isArray(u)){const d=[];for(let p=0,m=u.length;p<m;p++){const v=u[p];t[v]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",v),d.push(t[v])}return d}return t[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",u),t[u]}}function h(u){return n[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",u),n[u]}switch(s.type){case"Scene":r=new Zr,s.background!==void 0&&(Number.isInteger(s.background)?r.background=new se(s.background):r.background=h(s.background)),s.environment!==void 0&&(r.environment=h(s.environment)),s.fog!==void 0&&(s.fog.type==="Fog"?r.fog=new Ji(s.fog.color,s.fog.near,s.fog.far):s.fog.type==="FogExp2"&&(r.fog=new Yi(s.fog.color,s.fog.density)));break;case"PerspectiveCamera":r=new Ze(s.fov,s.aspect,s.near,s.far),s.focus!==void 0&&(r.focus=s.focus),s.zoom!==void 0&&(r.zoom=s.zoom),s.filmGauge!==void 0&&(r.filmGauge=s.filmGauge),s.filmOffset!==void 0&&(r.filmOffset=s.filmOffset),s.view!==void 0&&(r.view=Object.assign({},s.view));break;case"OrthographicCamera":r=new ji(s.left,s.right,s.top,s.bottom,s.near,s.far),s.zoom!==void 0&&(r.zoom=s.zoom),s.view!==void 0&&(r.view=Object.assign({},s.view));break;case"AmbientLight":r=new so(s.color,s.intensity);break;case"DirectionalLight":r=new ro(s.color,s.intensity);break;case"PointLight":r=new io(s.color,s.intensity,s.distance,s.decay);break;case"RectAreaLight":r=new ao(s.color,s.intensity,s.width,s.height);break;case"SpotLight":r=new to(s.color,s.intensity,s.distance,s.angle,s.penumbra,s.decay);break;case"HemisphereLight":r=new $a(s.color,s.groundColor,s.intensity);break;case"LightProbe":r=new mr().fromJSON(s);break;case"SkinnedMesh":a=l(s.geometry),o=c(s.material),r=new is(a,o),s.bindMode!==void 0&&(r.bindMode=s.bindMode),s.bindMatrix!==void 0&&r.bindMatrix.fromArray(s.bindMatrix),s.skeleton!==void 0&&(r.skeleton=s.skeleton);break;case"Mesh":a=l(s.geometry),o=c(s.material),r=new je(a,o);break;case"InstancedMesh":a=l(s.geometry),o=c(s.material);const u=s.count,d=s.instanceMatrix,p=s.instanceColor;r=new Sa(a,o,u),r.instanceMatrix=new Bn(new Float32Array(d.array),16),p!==void 0&&(r.instanceColor=new Bn(new Float32Array(p.array),p.itemSize));break;case"LOD":r=new zl;break;case"Line":r=new $t(l(s.geometry),c(s.material));break;case"LineLoop":r=new Ea(l(s.geometry),c(s.material));break;case"LineSegments":r=new pt(l(s.geometry),c(s.material));break;case"PointCloud":case"Points":r=new er(l(s.geometry),c(s.material));break;case"Sprite":r=new es(c(s.material));break;case"Group":r=new Dn;break;case"Bone":r=new rs;break;default:r=new Te}if(r.uuid=s.uuid,s.name!==void 0&&(r.name=s.name),s.matrix!==void 0?(r.matrix.fromArray(s.matrix),s.matrixAutoUpdate!==void 0&&(r.matrixAutoUpdate=s.matrixAutoUpdate),r.matrixAutoUpdate&&r.matrix.decompose(r.position,r.quaternion,r.scale)):(s.position!==void 0&&r.position.fromArray(s.position),s.rotation!==void 0&&r.rotation.fromArray(s.rotation),s.quaternion!==void 0&&r.quaternion.fromArray(s.quaternion),s.scale!==void 0&&r.scale.fromArray(s.scale)),s.castShadow!==void 0&&(r.castShadow=s.castShadow),s.receiveShadow!==void 0&&(r.receiveShadow=s.receiveShadow),s.shadow&&(s.shadow.bias!==void 0&&(r.shadow.bias=s.shadow.bias),s.shadow.normalBias!==void 0&&(r.shadow.normalBias=s.shadow.normalBias),s.shadow.radius!==void 0&&(r.shadow.radius=s.shadow.radius),s.shadow.mapSize!==void 0&&r.shadow.mapSize.fromArray(s.shadow.mapSize),s.shadow.camera!==void 0&&(r.shadow.camera=this.parseObject(s.shadow.camera))),s.visible!==void 0&&(r.visible=s.visible),s.frustumCulled!==void 0&&(r.frustumCulled=s.frustumCulled),s.renderOrder!==void 0&&(r.renderOrder=s.renderOrder),s.userData!==void 0&&(r.userData=s.userData),s.layers!==void 0&&(r.layers.mask=s.layers),s.children!==void 0){const u=s.children;for(let d=0;d<u.length;d++)r.add(this.parseObject(u[d],e,t,n,i))}if(s.animations!==void 0){const u=s.animations;for(let d=0;d<u.length;d++){const p=u[d];r.animations.push(i[p])}}if(s.type==="LOD"){s.autoUpdate!==void 0&&(r.autoUpdate=s.autoUpdate);const u=s.levels;for(let d=0;d<u.length;d++){const p=u[d],m=r.getObjectByProperty("uuid",p.object);m!==void 0&&r.addLevel(m,p.distance)}}return r}bindSkeletons(s,e){Object.keys(e).length!==0&&s.traverse(function(t){if(t.isSkinnedMesh===!0&&t.skeleton!==void 0){const n=e[t.skeleton];n===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",t.skeleton):t.bind(n,t.bindMatrix)}})}setTexturePath(s){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(s)}},f.ObjectSpaceNormalMap=1,f.OctahedronBufferGeometry=On,f.OctahedronGeometry=On,f.OneFactor=201,f.OneMinusDstAlphaFactor=207,f.OneMinusDstColorFactor=209,f.OneMinusSrcAlphaFactor=205,f.OneMinusSrcColorFactor=203,f.OrthographicCamera=ji,f.PCFShadowMap=1,f.PCFSoftShadowMap=2,f.PMREMGenerator=tl,f.ParametricGeometry=function(){return console.error("THREE.ParametricGeometry has been moved to /examples/jsm/geometries/ParametricGeometry.js"),new ve},f.Particle=function(s){return console.warn("THREE.Particle has been renamed to THREE.Sprite."),new es(s)},f.ParticleBasicMaterial=function(s){return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),new Fn(s)},f.ParticleSystem=function(s,e){return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),new er(s,e)},f.ParticleSystemMaterial=function(s){return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),new Fn(s)},f.Path=sr,f.PerspectiveCamera=Ze,f.Plane=Bt,f.PlaneBufferGeometry=Cn,f.PlaneGeometry=Cn,f.PlaneHelper=class extends $t{constructor(s,e=1,t=16776960){const n=t,i=new ve;i.setAttribute("position",new he([1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],3)),i.computeBoundingSphere(),super(i,new Qe({color:n,toneMapped:!1})),this.type="PlaneHelper",this.plane=s,this.size=e;const r=new ve;r.setAttribute("position",new he([1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],3)),r.computeBoundingSphere(),this.add(new je(r,new Zt({color:n,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(s){let e=-this.plane.constant;Math.abs(e)<1e-8&&(e=1e-8),this.scale.set(.5*this.size,.5*this.size,e),this.children[0].material.side=e<0?1:0,this.lookAt(this.plane.normal),super.updateMatrixWorld(s)}},f.PointCloud=function(s,e){return console.warn("THREE.PointCloud has been renamed to THREE.Points."),new er(s,e)},f.PointCloudMaterial=function(s){return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),new Fn(s)},f.PointLight=io,f.PointLightHelper=class extends je{constructor(s,e,t){super(new Hn(e,4,2),new Zt({wireframe:!0,fog:!1,toneMapped:!1})),this.light=s,this.light.updateMatrixWorld(),this.color=t,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},f.Points=er,f.PointsMaterial=Fn,f.PolarGridHelper=class extends pt{constructor(s=10,e=16,t=8,n=64,i=4473924,r=8947848){i=new se(i),r=new se(r);const a=[],o=[];for(let c=0;c<=e;c++){const h=c/e*(2*Math.PI),u=Math.sin(h)*s,d=Math.cos(h)*s;a.push(0,0,0),a.push(u,0,d);const p=1&c?i:r;o.push(p.r,p.g,p.b),o.push(p.r,p.g,p.b)}for(let c=0;c<=t;c++){const h=1&c?i:r,u=s-s/t*c;for(let d=0;d<n;d++){let p=d/n*(2*Math.PI),m=Math.sin(p)*u,v=Math.cos(p)*u;a.push(m,0,v),o.push(h.r,h.g,h.b),p=(d+1)/n*(2*Math.PI),m=Math.sin(p)*u,v=Math.cos(p)*u,a.push(m,0,v),o.push(h.r,h.g,h.b)}}const l=new ve;l.setAttribute("position",new he(a,3)),l.setAttribute("color",new he(o,3)),super(l,new Qe({vertexColors:!0,toneMapped:!1})),this.type="PolarGridHelper"}},f.PolyhedronBufferGeometry=Ot,f.PolyhedronGeometry=Ot,f.PositionalAudio=class extends ho{constructor(s){super(s),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(s){return this.panner.refDistance=s,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(s){return this.panner.rolloffFactor=s,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(s){return this.panner.distanceModel=s,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(s){return this.panner.maxDistance=s,this}setDirectionalCone(s,e,t){return this.panner.coneInnerAngle=s,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=t,this}updateMatrixWorld(s){if(super.updateMatrixWorld(s),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(qn,Fc,Ed),Xn.set(0,0,1).applyQuaternion(Fc);const e=this.panner;if(e.positionX){const t=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(qn.x,t),e.positionY.linearRampToValueAtTime(qn.y,t),e.positionZ.linearRampToValueAtTime(qn.z,t),e.orientationX.linearRampToValueAtTime(Xn.x,t),e.orientationY.linearRampToValueAtTime(Xn.y,t),e.orientationZ.linearRampToValueAtTime(Xn.z,t)}else e.setPosition(qn.x,qn.y,qn.z),e.setOrientation(Xn.x,Xn.y,Xn.z)}},f.PropertyBinding=Re,f.PropertyMixer=Uc,f.QuadraticBezierCurve=fs,f.QuadraticBezierCurve3=gs,f.Quaternion=rt,f.QuaternionKeyframeTrack=Ni,f.QuaternionLinearInterpolant=dc,f.REVISION=te,f.RGBADepthPacking=3201,f.RGBAFormat=1023,f.RGBAIntegerFormat=1033,f.RGBA_ASTC_10x10_Format=37819,f.RGBA_ASTC_10x5_Format=37816,f.RGBA_ASTC_10x6_Format=37817,f.RGBA_ASTC_10x8_Format=37818,f.RGBA_ASTC_12x10_Format=37820,f.RGBA_ASTC_12x12_Format=37821,f.RGBA_ASTC_4x4_Format=37808,f.RGBA_ASTC_5x4_Format=37809,f.RGBA_ASTC_5x5_Format=37810,f.RGBA_ASTC_6x5_Format=37811,f.RGBA_ASTC_6x6_Format=37812,f.RGBA_ASTC_8x5_Format=37813,f.RGBA_ASTC_8x6_Format=37814,f.RGBA_ASTC_8x8_Format=37815,f.RGBA_BPTC_Format=36492,f.RGBA_ETC2_EAC_Format=37496,f.RGBA_PVRTC_2BPPV1_Format=35843,f.RGBA_PVRTC_4BPPV1_Format=35842,f.RGBA_S3TC_DXT1_Format=33777,f.RGBA_S3TC_DXT3_Format=33778,f.RGBA_S3TC_DXT5_Format=33779,f.RGBDEncoding=3006,f.RGBEEncoding=3002,f.RGBEFormat=1023,f.RGBFormat=1022,f.RGBIntegerFormat=1032,f.RGBM16Encoding=3005,f.RGBM7Encoding=3004,f.RGB_ETC1_Format=36196,f.RGB_ETC2_Format=37492,f.RGB_PVRTC_2BPPV1_Format=35841,f.RGB_PVRTC_4BPPV1_Format=35840,f.RGB_S3TC_DXT1_Format=33776,f.RGFormat=1030,f.RGIntegerFormat=1031,f.RawShaderMaterial=gi,f.Ray=un,f.Raycaster=class{constructor(s,e,t=0,n=1/0){this.ray=new un(s,e),this.near=t,this.far=n,this.camera=null,this.layers=new $s,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(s,e){this.ray.set(s,e)}setFromCamera(s,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(s.x,s.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(s.x,s.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(s,e=!0,t=[]){return po(s,this,t,e),t.sort(Wc),t}intersectObjects(s,e=!0,t=[]){for(let n=0,i=s.length;n<i;n++)po(s[n],this,t,e);return t.sort(Wc),t}},f.RectAreaLight=ao,f.RedFormat=1028,f.RedIntegerFormat=1029,f.ReinhardToneMapping=2,f.RepeatWrapping=1e3,f.ReplaceStencilOp=7681,f.ReverseSubtractEquation=102,f.RingBufferGeometry=Ri,f.RingGeometry=Ri,f.SRGB8_ALPHA8_ASTC_10x10_Format=37851,f.SRGB8_ALPHA8_ASTC_10x5_Format=37848,f.SRGB8_ALPHA8_ASTC_10x6_Format=37849,f.SRGB8_ALPHA8_ASTC_10x8_Format=37850,f.SRGB8_ALPHA8_ASTC_12x10_Format=37852,f.SRGB8_ALPHA8_ASTC_12x12_Format=37853,f.SRGB8_ALPHA8_ASTC_4x4_Format=37840,f.SRGB8_ALPHA8_ASTC_5x4_Format=37841,f.SRGB8_ALPHA8_ASTC_5x5_Format=37842,f.SRGB8_ALPHA8_ASTC_6x5_Format=37843,f.SRGB8_ALPHA8_ASTC_6x6_Format=37844,f.SRGB8_ALPHA8_ASTC_8x5_Format=37845,f.SRGB8_ALPHA8_ASTC_8x6_Format=37846,f.SRGB8_ALPHA8_ASTC_8x8_Format=37847,f.Scene=Zr,f.SceneUtils=Ud,f.ShaderChunk=Se,f.ShaderLib=Rt,f.ShaderMaterial=Kt,f.ShadowMaterial=ka,f.Shape=Ut,f.ShapeBufferGeometry=Un,f.ShapeGeometry=Un,f.ShapePath=class{constructor(){this.type="ShapePath",this.color=new se,this.subPaths=[],this.currentPath=null}moveTo(s,e){return this.currentPath=new sr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(s,e),this}lineTo(s,e){return this.currentPath.lineTo(s,e),this}quadraticCurveTo(s,e,t,n){return this.currentPath.quadraticCurveTo(s,e,t,n),this}bezierCurveTo(s,e,t,n,i,r){return this.currentPath.bezierCurveTo(s,e,t,n,i,r),this}splineThru(s){return this.currentPath.splineThru(s),this}toShapes(s,e){function t(g){const _=[];for(let x=0,M=g.length;x<M;x++){const b=g[x],T=new Ut;T.curves=b.curves,_.push(T)}return _}function n(g,_){const x=_.length;let M=!1;for(let b=x-1,T=0;T<x;b=T++){let R=_[b],C=_[T],N=C.x-R.x,I=C.y-R.y;if(Math.abs(I)>Number.EPSILON){if(I<0&&(R=_[T],N=-N,C=_[b],I=-I),g.y<R.y||g.y>C.y)continue;if(g.y===R.y){if(g.x===R.x)return!0}else{const z=I*(g.x-R.x)-N*(g.y-R.y);if(z===0)return!0;if(z<0)continue;M=!M}}else{if(g.y!==R.y)continue;if(C.x<=g.x&&g.x<=R.x||R.x<=g.x&&g.x<=C.x)return!0}}return M}const i=Ht.isClockWise,r=this.subPaths;if(r.length===0)return[];if(e===!0)return t(r);let a,o,l;const c=[];if(r.length===1)return o=r[0],l=new Ut,l.curves=o.curves,c.push(l),c;let h=!i(r[0].getPoints());h=s?!h:h;const u=[],d=[];let p,m,v=[],y=0;d[y]=void 0,v[y]=[];for(let g=0,_=r.length;g<_;g++)o=r[g],p=o.getPoints(),a=i(p),a=s?!a:a,a?(!h&&d[y]&&y++,d[y]={s:new Ut,p},d[y].s.curves=o.curves,h&&y++,v[y]=[]):v[y].push({h:o,p:p[0]});if(!d[0])return t(r);if(d.length>1){let g=!1;const _=[];for(let x=0,M=d.length;x<M;x++)u[x]=[];for(let x=0,M=d.length;x<M;x++){const b=v[x];for(let T=0;T<b.length;T++){const R=b[T];let C=!0;for(let N=0;N<d.length;N++)n(R.p,d[N].p)&&(x!==N&&_.push({froms:x,tos:N,hole:T}),C?(C=!1,u[N].push(R)):g=!0);C&&u[x].push(R)}}_.length>0&&(g||(v=u))}for(let g=0,_=d.length;g<_;g++){l=d[g].s,c.push(l),m=v[g];for(let x=0,M=m.length;x<M;x++)l.holes.push(m[x].h)}return c}},f.ShapeUtils=Ht,f.ShortType=1011,f.Skeleton=ss,f.SkeletonHelper=Jc,f.SkinnedMesh=is,f.SmoothShading=2,f.Sphere=cn,f.SphereBufferGeometry=Hn,f.SphereGeometry=Hn,f.Spherical=class{constructor(s=1,e=0,t=0){return this.radius=s,this.phi=e,this.theta=t,this}set(s,e,t){return this.radius=s,this.phi=e,this.theta=t,this}copy(s){return this.radius=s.radius,this.phi=s.phi,this.theta=s.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(s){return this.setFromCartesianCoords(s.x,s.y,s.z)}setFromCartesianCoords(s,e,t){return this.radius=Math.sqrt(s*s+e*e+t*t),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(s,t),this.phi=Math.acos(it(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},f.SphericalHarmonics3=oo,f.SplineCurve=vs,f.SpotLight=to,f.SpotLightHelper=class extends Te{constructor(s,e){super(),this.light=s,this.light.updateMatrixWorld(),this.matrix=s.matrixWorld,this.matrixAutoUpdate=!1,this.color=e;const t=new ve,n=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let r=0,a=1,o=32;r<o;r++,a++){const l=r/o*Math.PI*2,c=a/o*Math.PI*2;n.push(Math.cos(l),Math.sin(l),1,Math.cos(c),Math.sin(c),1)}t.setAttribute("position",new he(n,3));const i=new Qe({fog:!1,toneMapped:!1});this.cone=new pt(t,i),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateMatrixWorld();const s=this.light.distance?this.light.distance:1e3,e=s*Math.tan(this.light.angle);this.cone.scale.set(e,e,s),Yc.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Yc),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},f.Sprite=es,f.SpriteMaterial=Qr,f.SrcAlphaFactor=204,f.SrcAlphaSaturateFactor=210,f.SrcColorFactor=202,f.StaticCopyUsage=35046,f.StaticDrawUsage=35044,f.StaticReadUsage=35045,f.StereoCamera=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ze,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ze,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(s){const e=this._cache;if(e.focus!==s.focus||e.fov!==s.fov||e.aspect!==s.aspect*this.aspect||e.near!==s.near||e.far!==s.far||e.zoom!==s.zoom||e.eyeSep!==this.eyeSep){e.focus=s.focus,e.fov=s.fov,e.aspect=s.aspect*this.aspect,e.near=s.near,e.far=s.far,e.zoom=s.zoom,e.eyeSep=this.eyeSep;const t=s.projectionMatrix.clone(),n=e.eyeSep/2,i=n*e.near/e.focus,r=e.near*Math.tan(Tn*e.fov*.5)/e.zoom;let a,o;Dc.elements[12]=-n,Ic.elements[12]=n,a=-r*e.aspect+i,o=r*e.aspect+i,t.elements[0]=2*e.near/(o-a),t.elements[8]=(o+a)/(o-a),this.cameraL.projectionMatrix.copy(t),a=-r*e.aspect-i,o=r*e.aspect-i,t.elements[0]=2*e.near/(o-a),t.elements[8]=(o+a)/(o-a),this.cameraR.projectionMatrix.copy(t)}this.cameraL.matrixWorld.copy(s.matrixWorld).multiply(Dc),this.cameraR.matrixWorld.copy(s.matrixWorld).multiply(Ic)}},f.StreamCopyUsage=35042,f.StreamDrawUsage=35040,f.StreamReadUsage=35041,f.StringKeyframeTrack=kn,f.SubtractEquation=101,f.SubtractiveBlending=3,f.TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},f.TangentSpaceNormalMap=0,f.TetrahedronBufferGeometry=Ci,f.TetrahedronGeometry=Ci,f.TextGeometry=function(){return console.error("THREE.TextGeometry has been moved to /examples/jsm/geometries/TextGeometry.js"),new ve},f.Texture=Xe,f.TextureLoader=gc,f.TorusBufferGeometry=Pi,f.TorusGeometry=Pi,f.TorusKnotBufferGeometry=Ii,f.TorusKnotGeometry=Ii,f.Triangle=ke,f.TriangleFanDrawMode=2,f.TriangleStripDrawMode=1,f.TrianglesDrawMode=0,f.TubeBufferGeometry=Di,f.TubeGeometry=Di,f.UVMapping=300,f.Uint16Attribute=function(s,e){return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."),new Pr(s,e)},f.Uint16BufferAttribute=Pr,f.Uint32Attribute=function(s,e){return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."),new Ir(s,e)},f.Uint32BufferAttribute=Ir,f.Uint8Attribute=function(s,e){return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),new Go(s,e)},f.Uint8BufferAttribute=Go,f.Uint8ClampedAttribute=function(s,e){return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),new ko(s,e)},f.Uint8ClampedBufferAttribute=ko,f.Uniform=Ss,f.UniformsLib=re,f.UniformsUtils=Yo,f.UnsignedByteType=1009,f.UnsignedInt248Type=1020,f.UnsignedIntType=1014,f.UnsignedShort4444Type=1017,f.UnsignedShort5551Type=1018,f.UnsignedShort565Type=1019,f.UnsignedShortType=1012,f.VSMShadowMap=3,f.Vector2=X,f.Vector3=w,f.Vector4=Pe,f.VectorKeyframeTrack=hr,f.Vertex=function(s,e,t){return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),new w(s,e,t)},f.VertexColors=2,f.VideoTexture=Zl,f.WebGL1Renderer=Cl,f.WebGLCubeRenderTarget=kr,f.WebGLMultipleRenderTargets=Lo,f.WebGLMultisampleRenderTarget=Ws,f.WebGLRenderTarget=Tt,f.WebGLRenderTargetCube=function(s,e,t){return console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."),new kr(s,t)},f.WebGLRenderer=Ie,f.WebGLUtils=Rl,f.WireframeGeometry=Ga,f.WireframeHelper=function(s,e){return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),new pt(new Ga(s.geometry),new Qe({color:e!==void 0?e:16777215}))},f.WrapAroundEnding=2402,f.XHRLoader=function(s){return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),new kt(s)},f.ZeroCurvatureEnding=2400,f.ZeroFactor=200,f.ZeroSlopeEnding=2401,f.ZeroStencilOp=0,f.sRGBEncoding=3001,Object.defineProperty(f,"__esModule",{value:!0})})})(wo,wo.exports);var yh=wo.exports;const tp=ep(yh),np=Kd({__proto__:null,default:tp},[yh]);Number.prototype.clamp=function(ye,Y){return Math.min(Math.max(this,ye),Y)};function xh(){return typeof navigator<"u"?/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600:null}function ip(ye,Y){return ye+Math.random()*(Y-ye)}function $n(ye,Y){return ye==null&&(ye=0),Y==null&&(Y=1),Math.floor(ye+Math.random()*(Y-ye+1))}const rp=ye=>document.querySelector(ye),sp=ye=>typeof ye=="number"?"#"+("00000"+ye.toString(16)).slice(-6):ye,vh=ye=>.299*ye.r+.587*ye.g+.114*ye.b;function _h(ye){for(;ye.children&&ye.children.length>0;)_h(ye.children[0]),ye.remove(ye.children[0]);ye.geometry&&ye.geometry.dispose(),ye.material&&(Object.keys(ye.material).forEach(Y=>{ye.material[Y]&&ye.material[Y]!==null&&typeof ye.material[Y].dispose=="function"&&ye.material[Y].dispose()}),ye.material.dispose())}const zs=typeof window=="object";let Ns=zs&&window.THREE||{};zs&&!window.VANTA&&(window.VANTA={});const rn=zs&&window.VANTA||{};rn.register=(ye,Y)=>rn[ye]=f=>new Y(f);rn.version="0.5.24";const Mo=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};rn.VantaBase=class{constructor(Y={}){if(!zs)return!1;rn.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.windowGyroWrapper=this.windowGyroWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this);const f=typeof this.getDefaultOptions=="function"?this.getDefaultOptions():this.defaultOptions;if(this.options=Object.assign({mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1},f),(Y instanceof HTMLElement||typeof Y=="string")&&(Y={el:Y}),Object.assign(this.options,Y),this.options.THREE&&(Ns=this.options.THREE),this.el=this.options.el,this.el==null)Mo('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){const pe=this.el;if(this.el=rp(pe),!this.el){Mo("Cannot find element",pe);return}}this.prepareEl(),this.initThree(),this.setSize();try{this.init()}catch(pe){Mo("Init error",pe),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background=sp(this.options.backgroundColor));return}this.initMouse(),this.resize(),this.animationLoop();const te=window.addEventListener;te("resize",this.resize),window.requestAnimationFrame(this.resize),this.options.mouseControls&&(te("scroll",this.windowMouseMoveWrapper),te("mousemove",this.windowMouseMoveWrapper)),this.options.touchControls&&(te("touchstart",this.windowTouchWrapper),te("touchmove",this.windowTouchWrapper)),this.options.gyroControls&&te("deviceorientation",this.windowGyroWrapper)}setOptions(Y={}){Object.assign(this.options,Y),this.triggerMouseMove()}prepareEl(){let Y,f;if(typeof Node<"u"&&Node.TEXT_NODE)for(Y=0;Y<this.el.childNodes.length;Y++){const te=this.el.childNodes[Y];if(te.nodeType===Node.TEXT_NODE){const pe=document.createElement("span");pe.textContent=te.textContent,te.parentElement.insertBefore(pe,te),te.remove()}}for(Y=0;Y<this.el.children.length;Y++)f=this.el.children[Y],getComputedStyle(f).position==="static"&&(f.style.position="relative"),getComputedStyle(f).zIndex==="auto"&&(f.style.zIndex=1);getComputedStyle(this.el).position==="static"&&(this.el.style.position="relative")}applyCanvasStyles(Y,f={}){Object.assign(Y.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object.assign(Y.style,f),Y.classList.add("vanta-canvas")}initThree(){if(!Ns.WebGLRenderer){console.warn("[VANTA] No THREE defined on window");return}this.renderer=new Ns.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new Ns.Scene}getCanvasElement(){if(this.renderer)return this.renderer.domElement;if(this.p5renderer)return this.p5renderer.canvas}getCanvasRect(){const Y=this.getCanvasElement();return Y?Y.getBoundingClientRect():!1}windowMouseMoveWrapper(Y){const f=this.getCanvasRect();if(!f)return!1;const te=Y.clientX-f.left,pe=Y.clientY-f.top;te>=0&&pe>=0&&te<=f.width&&pe<=f.height&&(this.mouseX=te,this.mouseY=pe,this.options.mouseEase||this.triggerMouseMove(te,pe))}windowTouchWrapper(Y){const f=this.getCanvasRect();if(!f)return!1;if(Y.touches.length===1){const te=Y.touches[0].clientX-f.left,pe=Y.touches[0].clientY-f.top;te>=0&&pe>=0&&te<=f.width&&pe<=f.height&&(this.mouseX=te,this.mouseY=pe,this.options.mouseEase||this.triggerMouseMove(te,pe))}}windowGyroWrapper(Y){const f=this.getCanvasRect();if(!f)return!1;const te=Math.round(Y.alpha*2)-f.left,pe=Math.round(Y.beta*2)-f.top;te>=0&&pe>=0&&te<=f.width&&pe<=f.height&&(this.mouseX=te,this.mouseY=pe,this.options.mouseEase||this.triggerMouseMove(te,pe))}triggerMouseMove(Y,f){Y===void 0&&f===void 0&&(this.options.mouseEase?(Y=this.mouseEaseX,f=this.mouseEaseY):(Y=this.mouseX,f=this.mouseY)),this.uniforms&&(this.uniforms.iMouse.value.x=Y/this.scale,this.uniforms.iMouse.value.y=f/this.scale);const te=Y/this.width,pe=f/this.height;typeof this.onMouseMove=="function"&&this.onMouseMove(te,pe)}setSize(){this.scale||(this.scale=1),xh()&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=Math.max(this.el.offsetWidth,this.options.minWidth),this.height=Math.max(this.el.offsetHeight,this.options.minHeight)}initMouse(){(!this.mouseX&&!this.mouseY||this.mouseX===this.options.minWidth/2&&this.mouseY===this.options.minHeight/2)&&(this.mouseX=this.width/2,this.mouseY=this.height/2,this.triggerMouseMove(this.mouseX,this.mouseY))}resize(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,typeof this.camera.updateProjectionMatrix=="function"&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),typeof this.onResize=="function"&&this.onResize()}isOnScreen(){const Y=this.el.offsetHeight,f=this.el.getBoundingClientRect(),te=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,pe=f.top+te,at=pe-window.innerHeight,ot=pe+Y;return at<=te&&te<=ot}animationLoop(){this.t||(this.t=0),this.t2||(this.t2=0);const Y=performance.now();if(this.prevNow){let f=(Y-this.prevNow)/16.666666666666668;f=Math.max(.2,Math.min(f,5)),this.t+=f,this.t2+=(this.options.speed||1)*f,this.uniforms&&(this.uniforms.iTime.value=this.t2*.016667)}return this.prevNow=Y,this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX+=(this.mouseX-this.mouseEaseX)*.05,this.mouseEaseY+=(this.mouseY-this.mouseEaseY)*.05,this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&(typeof this.onUpdate=="function"&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update(),typeof this.afterRender=="function"&&this.afterRender()),this.req=window.requestAnimationFrame(this.animationLoop)}restart(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);typeof this.onRestart=="function"&&this.onRestart(),this.init()}init(){typeof this.onInit=="function"&&this.onInit()}destroy(){typeof this.onDestroy=="function"&&this.onDestroy();const Y=window.removeEventListener;Y("touchstart",this.windowTouchWrapper),Y("touchmove",this.windowTouchWrapper),Y("scroll",this.windowMouseMoveWrapper),Y("mousemove",this.windowMouseMoveWrapper),Y("deviceorientation",this.windowGyroWrapper),Y("resize",this.resize),window.cancelAnimationFrame(this.req);const f=this.scene;f&&f.children&&_h(f),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null),rn.current===this&&(rn.current=null)}};const ap=rn.VantaBase,op=typeof window=="object";let Ne=op&&window.THREE;class Mh extends ap{static initClass(){this.prototype.defaultOptions={color:16727937,backgroundColor:2299196,points:10,maxDistance:20,spacing:15,showDots:!0}}constructor(Y){Ne=Y.THREE||Ne,super(Y)}genPoint(Y,f,te){let pe;if(this.points||(this.points=[]),this.options.showDots){const at=new Ne.SphereGeometry(.25,12,12),ot=new Ne.MeshLambertMaterial({color:this.options.color});pe=new Ne.Mesh(at,ot)}else pe=new Ne.Object3D;return this.cont.add(pe),pe.ox=Y,pe.oy=f,pe.oz=te,pe.position.set(Y,f,te),pe.r=ip(-2,2),this.points.push(pe)}onInit(){this.cont=new Ne.Group,this.cont.position.set(0,0,0),this.scene.add(this.cont);let Y=this.options.points,{spacing:f}=this.options;xh()&&(Y=~~(Y*.75),f=~~(f*.65));const te=Y*Y*2;this.linePositions=new Float32Array(te*te*3),this.lineColors=new Float32Array(te*te*3);const pe=vh(new Ne.Color(this.options.color)),at=vh(new Ne.Color(this.options.backgroundColor));this.blending=pe>at?"additive":"subtractive";const ot=new Ne.BufferGeometry;ot.setAttribute("position",new Ne.BufferAttribute(this.linePositions,3).setUsage(Ne.DynamicDrawUsage)),ot.setAttribute("color",new Ne.BufferAttribute(this.lineColors,3).setUsage(Ne.DynamicDrawUsage)),ot.computeBoundingSphere(),ot.setDrawRange(0,0);const Bi=new Ne.LineBasicMaterial({vertexColors:Ne.VertexColors,blending:this.blending==="additive"?Ne.AdditiveBlending:null,transparent:!0});this.linesMesh=new Ne.LineSegments(ot,Bi),this.cont.add(this.linesMesh);for(let zt=0;zt<=Y;zt++)for(let St=0;St<=Y;St++){const bn=$n(-3,3),Oe=(zt-Y/2)*f+$n(-5,5);let ei=(St-Y/2)*f+$n(-5,5);zt%2&&(ei+=f*.5),this.genPoint(Oe,bn-$n(5,15),ei),this.genPoint(Oe+$n(-5,5),bn+$n(5,15),ei+$n(-5,5))}this.camera=new Ne.PerspectiveCamera(25,this.width/this.height,.01,1e4),this.camera.position.set(50,100,150),this.scene.add(this.camera);const _r=new Ne.AmbientLight(16777215,.75);return this.scene.add(_r),this.spot=new Ne.SpotLight(16777215,1),this.spot.position.set(0,200,0),this.spot.distance=400,this.spot.target=this.cont,this.scene.add(this.spot)}onDestroy(){this.scene&&this.scene.remove(this.linesMesh),this.spot=this.points=this.linesMesh=this.lineColors=this.linePositions=null}setOptions(Y){super.setOptions(Y),Y.color&&this.points.forEach(f=>{f.material.color=new Ne.Color(Y.color)})}onUpdate(){let Y;const f=this.camera;Math.abs(f.tx-f.position.x)>.01&&(Y=f.tx-f.position.x,f.position.x+=Y*.02),Math.abs(f.ty-f.position.y)>.01&&(Y=f.ty-f.position.y,f.position.y+=Y*.02),f.lookAt(new Ne.Vector3(0,0,0));let te=0,pe=0,at=0;const ot=new Ne.Color(this.options.backgroundColor),Bi=new Ne.Color(this.options.color),_r=Bi.clone().sub(ot);this.rayCaster&&this.rayCaster.setFromCamera(new Ne.Vector2(this.rcMouseX,this.rcMouseY),this.camera);for(let zt=0;zt<this.points.length;zt++){let St,bn;const Oe=this.points[zt];this.rayCaster?bn=this.rayCaster.ray.distanceToPoint(Oe.position):bn=1e3;const ei=bn.clamp(5,15);if(Oe.scale.x=Oe.scale.y=Oe.scale.z=((15-ei)*.25).clamp(1,100),Oe.r!==0){let sn=Math.atan2(Oe.position.z,Oe.position.x);St=Math.sqrt(Oe.position.z*Oe.position.z+Oe.position.x*Oe.position.x),sn+=25e-5*Oe.r,Oe.position.x=St*Math.cos(sn),Oe.position.z=St*Math.sin(sn)}for(let sn=zt;sn<this.points.length;sn++){const Sn=this.points[sn],Bs=Oe.position.x-Sn.position.x,Fs=Oe.position.y-Sn.position.y,Os=Oe.position.z-Sn.position.z;if(St=Math.sqrt(Bs*Bs+Fs*Fs+Os*Os),St<this.options.maxDistance){let Wt;const Us=((1-St/this.options.maxDistance)*2).clamp(0,1);this.blending==="additive"?Wt=new Ne.Color(0).lerp(_r,Us):Wt=ot.clone().lerp(Bi,Us),this.linePositions[te++]=Oe.position.x,this.linePositions[te++]=Oe.position.y,this.linePositions[te++]=Oe.position.z,this.linePositions[te++]=Sn.position.x,this.linePositions[te++]=Sn.position.y,this.linePositions[te++]=Sn.position.z,this.lineColors[pe++]=Wt.r,this.lineColors[pe++]=Wt.g,this.lineColors[pe++]=Wt.b,this.lineColors[pe++]=Wt.r,this.lineColors[pe++]=Wt.g,this.lineColors[pe++]=Wt.b,at++}}}return this.linesMesh.geometry.setDrawRange(0,at*2),this.linesMesh.geometry.attributes.position.needsUpdate=!0,this.linesMesh.geometry.attributes.color.needsUpdate=!0,this.t*.001}onMouseMove(Y,f){const te=this.camera;te.oy||(te.oy=te.position.y,te.ox=te.position.x,te.oz=te.position.z);const pe=Math.atan2(te.oz,te.ox),at=Math.sqrt(te.oz*te.oz+te.ox*te.ox),ot=pe+(Y-.5)*2*(this.options.mouseCoeffX||1);te.tz=at*Math.sin(ot),te.tx=at*Math.cos(ot),te.ty=te.oy+(f-.5)*50*(this.options.mouseCoeffY||1),this.rayCaster,this.rcMouseX=Y*2-1,this.rcMouseY=-Y*2+1}onRestart(){this.scene&&this.scene.remove(this.linesMesh),this.points=[]}}Mh.initClass();const lp=rn.register("NET",Mh);setTimeout(()=>{lp({el:"#main-hero",THREE:np,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1})},1e3);
