(()=>{var Gc="169";var Cf=0,Kh=1,Lf=2;var $u=1,If=2,en=3,Ei=0,Qe=1,ui=2,bn=0,xs=1,yo=2,Yh=3,qh=4,Pf=5,zn=100,Of=101,kf=102,Df=103,Nf=104,Uf=200,Bf=201,Ff=202,Hf=203,El=204,wl=205,zf=206,Gf=207,Vf=208,Wf=209,Xf=210,Kf=211,Yf=212,qf=213,$f=214,Al=0,Tl=1,Rl=2,Ms=3,Cl=4,Ll=5,Il=6,Pl=7,Vc=0,Zf=1,Jf=2,Sn=0,jf=1,Qf=2,tp=3,ep=4,ip=5,np=6,sp=7;var Zu=300,Es=301,ws=302,Ol=303,kl=304,Wo=306,Hi=1e3,di=1001,Dl=1002,oe=1003,rp=1004;var Or=1005;var We=1006,Wa=1007;var rn=1008;var $e=1009,Ju=1010,ju=1011,ur=1012,Wc=1013,ln=1014,on=1015,vr=1016,Xc=1017,Kc=1018,As=1020,Qu=35902,td=1021,ed=1022,Xe=1023,id=1024,nd=1025,Mn=1026,Ts=1027,Xo=1028,Yc=1029,sd=1030,qc=1031;var $c=1033,uo=33776,fo=33777,po=33778,mo=33779,Nl=35840,Ul=35841,Bl=35842,Fl=35843,Hl=36196,zl=37492,Gl=37496,Vl=37808,Wl=37809,Xl=37810,Kl=37811,Yl=37812,ql=37813,$l=37814,Zl=37815,Jl=37816,jl=37817,Ql=37818,tc=37819,ec=37820,ic=37821,go=36492,nc=36494,sc=36495,rd=36283,rc=36284,oc=36285,ac=36286;var xo=2300,lc=2301,Xa=2302,$h=2400,Zh=2401,Jh=2402;var op=3200,ap=3201;var od=0,lp=1,xn="",_e="srgb",Rn="srgb-linear",Zc="display-p3",Ko="display-p3-linear",bo="linear",Se="srgb",So="rec709",Mo="p3";var es=7680;var jh=519,cp=512,hp=513,up=514,ad=515,dp=516,fp=517,pp=518,mp=519,cc=35044;var dr="300 es",an=2e3,Eo=2001,wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var _o=Math.PI/180,hc=180/Math.PI;function En(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]).toLowerCase()}function hi(n,t,e){return Math.max(t,Math.min(e,n))}function gp(n,t){return(n%t+t)%t}function Ka(n,t,e){return(1-e)*n+e*t}function Yi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Xt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(hi(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wt=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=s[0],p=s[3],m=s[6],M=s[1],b=s[4],A=s[7],O=s[2],C=s[5],R=s[8];return r[0]=o*_+a*M+l*O,r[3]=o*p+a*b+l*C,r[6]=o*m+a*A+l*R,r[1]=c*_+h*M+u*O,r[4]=c*p+h*b+u*C,r[7]=c*m+h*A+u*R,r[2]=d*_+f*M+g*O,r[5]=d*p+f*b+g*C,r[8]=d*m+f*A+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ya.makeScale(t,e)),this}rotate(t){return this.premultiply(Ya.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ya.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ya=new Wt;function ld(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function wo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _p(){let n=wo("canvas");return n.style.display="block",n}var Qh={};function vo(n){n in Qh||(Qh[n]=!0,console.warn(n))}function vp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function yp(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function xp(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var tu=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),eu=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),tr={[Rn]:{transfer:bo,primaries:So,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[_e]:{transfer:Se,primaries:So,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ko]:{transfer:bo,primaries:Mo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(eu),fromReference:n=>n.applyMatrix3(tu)},[Zc]:{transfer:Se,primaries:Mo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(eu),fromReference:n=>n.applyMatrix3(tu).convertLinearToSRGB()}},bp=new Set([Rn,Ko]),he={enabled:!0,_workingColorSpace:Rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!bp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=tr[t].toReference,s=tr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return tr[n].primaries},getTransfer:function(n){return n===xn?bo:tr[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(tr[t].luminanceCoefficients)}};function bs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var is,uc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{is===void 0&&(is=wo("canvas")),is.width=t.width,is.height=t.height;let i=is.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=is}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=wo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bs(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(bs(e[i]/255)*255):e[i]=bs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Sp=0,Ao=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=En(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($a(s[o].image)):r.push($a(s[o]))}else r=$a(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function $a(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?uc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Mp=0,fi=class n extends wn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=di,s=di,r=We,o=rn,a=Xe,l=$e,c=n.DEFAULT_ANISOTROPY,h=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=En(),this.name="",this.source=new Ao(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hi:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case Dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hi:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case Dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fi.DEFAULT_IMAGE=null;fi.DEFAULT_MAPPING=Zu;fi.DEFAULT_ANISOTROPY=1;var Re=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,A=(f+1)/2,O=(m+1)/2,C=(h+d)/4,R=(u+_)/4,P=(g+p)/4;return b>A&&b>O?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=C/i,r=R/i):A>O?A<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),i=C/s,r=P/s):O<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),i=R/r,s=P/r),this.set(i,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dc=class extends wn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new fi(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ao(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oi=class extends dc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Rs=class extends fi{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=oe,this.minFilter=oe,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var fr=class extends fi{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=oe,this.minFilter=oe,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var An=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let p=1-a,m=l*d+c*f+h*g+u*_,M=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){let O=Math.sqrt(b),C=Math.atan2(O,m*M);p=Math.sin(p*C)/O,a=Math.sin(a*C)/O}let A=a*M;if(l=l*p+d*A,c=c*p+f*A,h=h*p+g*A,u=u*p+_*A,p===1-a){let O=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=O,c*=O,h*=O,u*=O}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(hi(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(iu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(iu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Za.copy(this).projectOnVector(t),this.sub(Za)}reflect(t){return this.sub(Za.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(hi(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Za=new L,iu=new An,zi=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ui.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ui.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ui.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ui):Ui.fromBufferAttribute(r,o),Ui.applyMatrix4(t.matrixWorld),this.expandByPoint(Ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kr.copy(i.boundingBox)),kr.applyMatrix4(t.matrixWorld),this.union(kr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ui),Ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(er),Dr.subVectors(this.max,er),ns.subVectors(t.a,er),ss.subVectors(t.b,er),rs.subVectors(t.c,er),pn.subVectors(ss,ns),mn.subVectors(rs,ss),kn.subVectors(ns,rs);let e=[0,-pn.z,pn.y,0,-mn.z,mn.y,0,-kn.z,kn.y,pn.z,0,-pn.x,mn.z,0,-mn.x,kn.z,0,-kn.x,-pn.y,pn.x,0,-mn.y,mn.x,0,-kn.y,kn.x,0];return!Ja(e,ns,ss,rs,Dr)||(e=[1,0,0,0,1,0,0,0,1],!Ja(e,ns,ss,rs,Dr))?!1:(Nr.crossVectors(pn,mn),e=[Nr.x,Nr.y,Nr.z],Ja(e,ns,ss,rs,Dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Zi=[new L,new L,new L,new L,new L,new L,new L,new L],Ui=new L,kr=new zi,ns=new L,ss=new L,rs=new L,pn=new L,mn=new L,kn=new L,er=new L,Dr=new L,Nr=new L,Dn=new L;function Ja(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Dn.fromArray(n,r);let a=s.x*Math.abs(Dn.x)+s.y*Math.abs(Dn.y)+s.z*Math.abs(Dn.z),l=t.dot(Dn),c=e.dot(Dn),h=i.dot(Dn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ep=new zi,ir=new L,ja=new L,Vn=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Ep.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ir.subVectors(t,this.center);let e=ir.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ir,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ir.copy(t.center).add(ja)),this.expandByPoint(ir.copy(t.center).sub(ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ji=new L,Qa=new L,Ur=new L,gn=new L,tl=new L,Br=new L,el=new L,cn=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ji)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ji.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ji.copy(this.origin).addScaledVector(this.direction,e),Ji.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Qa.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),gn.copy(this.origin).sub(Qa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ur),a=gn.dot(this.direction),l=-gn.dot(Ur),c=gn.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Qa).addScaledVector(Ur,d),f}intersectSphere(t,e){Ji.subVectors(t.center,this.origin);let i=Ji.dot(this.direction),s=Ji.dot(Ji)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ji)!==null}intersectTriangle(t,e,i,s,r){tl.subVectors(e,t),Br.subVectors(i,t),el.crossVectors(tl,Br);let o=this.direction.dot(el),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gn.subVectors(this.origin,t);let l=a*this.direction.dot(Br.crossVectors(gn,Br));if(l<0)return null;let c=a*this.direction.dot(tl.cross(gn));if(c<0||l+c>o)return null;let h=-a*gn.dot(el);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,d,f,g,_,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,f,g,_,p)}set(t,e,i,s,r,o,a,l,c,h,u,d,f,g,_,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/os.setFromMatrixColumn(t,0).length(),r=1/os.setFromMatrixColumn(t,1).length(),o=1/os.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wp,t,Ap)}lookAt(t,e,i){let s=this.elements;return Si.subVectors(t,e),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),_n.crossVectors(i,Si),_n.lengthSq()===0&&(Math.abs(i.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),_n.crossVectors(i,Si)),_n.normalize(),Fr.crossVectors(Si,_n),s[0]=_n.x,s[4]=Fr.x,s[8]=Si.x,s[1]=_n.y,s[5]=Fr.y,s[9]=Si.y,s[2]=_n.z,s[6]=Fr.z,s[10]=Si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],p=i[10],m=i[14],M=i[3],b=i[7],A=i[11],O=i[15],C=s[0],R=s[4],P=s[8],K=s[12],y=s[1],E=s[5],W=s[9],G=s[13],Y=s[2],it=s[6],z=s[10],ot=s[14],X=s[3],mt=s[7],gt=s[11],At=s[15];return r[0]=o*C+a*y+l*Y+c*X,r[4]=o*R+a*E+l*it+c*mt,r[8]=o*P+a*W+l*z+c*gt,r[12]=o*K+a*G+l*ot+c*At,r[1]=h*C+u*y+d*Y+f*X,r[5]=h*R+u*E+d*it+f*mt,r[9]=h*P+u*W+d*z+f*gt,r[13]=h*K+u*G+d*ot+f*At,r[2]=g*C+_*y+p*Y+m*X,r[6]=g*R+_*E+p*it+m*mt,r[10]=g*P+_*W+p*z+m*gt,r[14]=g*K+_*G+p*ot+m*At,r[3]=M*C+b*y+A*Y+O*X,r[7]=M*R+b*E+A*it+O*mt,r[11]=M*P+b*W+A*z+O*gt,r[15]=M*K+b*G+A*ot+O*At,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+p*(+e*c*u-e*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+m*(-s*a*h-e*l*u+e*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],M=u*p*c-_*d*c+_*l*f-a*p*f-u*l*m+a*d*m,b=g*d*c-h*p*c-g*l*f+o*p*f+h*l*m-o*d*m,A=h*_*c-g*u*c+g*a*f-o*_*f-h*a*m+o*u*m,O=g*u*l-h*_*l-g*a*d+o*_*d+h*a*p-o*u*p,C=e*M+i*b+s*A+r*O;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/C;return t[0]=M*R,t[1]=(_*d*r-u*p*r-_*s*f+i*p*f+u*s*m-i*d*m)*R,t[2]=(a*p*r-_*l*r+_*s*c-i*p*c-a*s*m+i*l*m)*R,t[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*R,t[4]=b*R,t[5]=(h*p*r-g*d*r+g*s*f-e*p*f-h*s*m+e*d*m)*R,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*m-e*l*m)*R,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*R,t[8]=A*R,t[9]=(g*u*r-h*_*r-g*i*f+e*_*f+h*i*m-e*u*m)*R,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*m+e*a*m)*R,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*f-e*a*f)*R,t[12]=O*R,t[13]=(h*_*s-g*u*s+g*i*d-e*_*d-h*i*p+e*u*p)*R,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*p-e*a*p)*R,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*d+e*a*d)*R,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,p=o*u,m=a*u,M=l*c,b=l*h,A=l*u,O=i.x,C=i.y,R=i.z;return s[0]=(1-(_+m))*O,s[1]=(f+A)*O,s[2]=(g-b)*O,s[3]=0,s[4]=(f-A)*C,s[5]=(1-(d+m))*C,s[6]=(p+M)*C,s[7]=0,s[8]=(g+b)*R,s[9]=(p-M)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=os.set(s[0],s[1],s[2]).length(),o=os.set(s[4],s[5],s[6]).length(),a=os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Bi.copy(this);let c=1/r,h=1/o,u=1/a;return Bi.elements[0]*=c,Bi.elements[1]*=c,Bi.elements[2]*=c,Bi.elements[4]*=h,Bi.elements[5]*=h,Bi.elements[6]*=h,Bi.elements[8]*=u,Bi.elements[9]*=u,Bi.elements[10]*=u,e.setFromRotationMatrix(Bi),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=an){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),f,g;if(a===an)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Eo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=an){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*c,f=(i+s)*h,g,_;if(a===an)g=(o+r)*u,_=-2*u;else if(a===Eo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},os=new L,Bi=new ne,wp=new L(0,0,0),Ap=new L(1,1,1),_n=new L,Fr=new L,Si=new L,nu=new ne,su=new An,wi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(hi(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-hi(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(hi(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-hi(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(hi(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-hi(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return nu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return su.setFromEuler(this),this.setFromQuaternion(su,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wi.DEFAULT_ORDER="XYZ";var To=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Tp=0,ru=new L,as=new An,ji=new ne,Hr=new L,nr=new L,Rp=new L,Cp=new An,ou=new L(1,0,0),au=new L(0,1,0),lu=new L(0,0,1),cu={type:"added"},Lp={type:"removed"},ls={type:"childadded",child:null},il={type:"childremoved",child:null},Ke=class n extends wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new L,e=new wi,i=new An,s=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Wt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new To,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(ou,t)}rotateY(t){return this.rotateOnAxis(au,t)}rotateZ(t){return this.rotateOnAxis(lu,t)}translateOnAxis(t,e){return ru.copy(t).applyQuaternion(this.quaternion),this.position.add(ru.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ou,t)}translateY(t){return this.translateOnAxis(au,t)}translateZ(t){return this.translateOnAxis(lu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Hr.copy(t):Hr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(nr,Hr,this.up):ji.lookAt(Hr,nr,this.up),this.quaternion.setFromRotationMatrix(ji),s&&(ji.extractRotation(s.matrixWorld),as.setFromRotationMatrix(ji),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cu),ls.child=t,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lp),il.child=t,this.dispatchEvent(il),il.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cu),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,Rp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,Cp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ke.DEFAULT_UP=new L(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fi=new L,Qi=new L,nl=new L,tn=new L,cs=new L,hs=new L,hu=new L,sl=new L,rl=new L,ol=new L,al=new Re,ll=new Re,cl=new Re,sn=class n{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Fi.subVectors(t,e),s.cross(Fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Fi.subVectors(s,e),Qi.subVectors(i,e),nl.subVectors(t,e);let o=Fi.dot(Fi),a=Fi.dot(Qi),l=Fi.dot(nl),c=Qi.dot(Qi),h=Qi.dot(nl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,tn.x),l.addScaledVector(o,tn.y),l.addScaledVector(a,tn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return al.setScalar(0),ll.setScalar(0),cl.setScalar(0),al.fromBufferAttribute(t,e),ll.fromBufferAttribute(t,i),cl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(al,r.x),o.addScaledVector(ll,r.y),o.addScaledVector(cl,r.z),o}static isFrontFacing(t,e,i,s){return Fi.subVectors(i,e),Qi.subVectors(t,e),Fi.cross(Qi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),Fi.cross(Qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;cs.subVectors(s,i),hs.subVectors(r,i),sl.subVectors(t,i);let l=cs.dot(sl),c=hs.dot(sl);if(l<=0&&c<=0)return e.copy(i);rl.subVectors(t,s);let h=cs.dot(rl),u=hs.dot(rl);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(cs,o);ol.subVectors(t,r);let f=cs.dot(ol),g=hs.dot(ol);if(g>=0&&f<=g)return e.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(hs,a);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return hu.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(hu,a);let m=1/(p+_+d);return o=_*m,a=d*m,e.copy(i).addScaledVector(cs,o).addScaledVector(hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},zr={h:0,s:0,l:0};function hl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Tt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=i,he.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=he.workingColorSpace){if(t=gp(t,1),e=hi(e,0,1),i=hi(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=hl(o,r,t+1/3),this.g=hl(o,r,t),this.b=hl(o,r,t-1/3)}return he.toWorkingColorSpace(this,s),this}setStyle(t,e=_e){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_e){let i=cd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}copyLinearToSRGB(t){return this.r=qa(t.r),this.g=qa(t.g),this.b=qa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_e){return he.fromWorkingColorSpace(je.copy(this),t),Math.round(hi(je.r*255,0,255))*65536+Math.round(hi(je.g*255,0,255))*256+Math.round(hi(je.b*255,0,255))}getHexString(t=_e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(je.copy(this),e);let i=je.r,s=je.g,r=je.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=_e){he.fromWorkingColorSpace(je.copy(this),t);let e=je.r,i=je.g,s=je.b;return t!==_e?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(vn),this.setHSL(vn.h+t,vn.s+e,vn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(vn),t.getHSL(zr);let i=Ka(vn.h,zr.h,e),s=Ka(vn.s,zr.s,e),r=Ka(vn.l,zr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},je=new Tt;Tt.NAMES=cd;var Ip=0,qi=class extends wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=En(),this.name="",this.type="Material",this.blending=xs,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=El,this.blendDst=wl,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==Ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==El&&(i.blendSrc=this.blendSrc),this.blendDst!==wl&&(i.blendDst=this.blendDst),this.blendEquation!==zn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ai=class extends qi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Oe=new L,Gr=new Xt,qt=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=cc,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Gr.fromBufferAttribute(this,e),Gr.applyMatrix3(t),this.setXY(e,Gr.x,Gr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Yi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=pe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cc&&(t.usage=this.usage),t}};var Ro=class extends qt{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Co=class extends qt{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Fe=class extends qt{constructor(t,e,i){super(new Float32Array(t),e,i)}},Pp=0,Pi=new ne,ul=new Ke,us=new L,Mi=new zi,sr=new zi,Ve=new L,ke=class n extends wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ld(t)?Co:Ro)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Wt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pi.makeRotationFromQuaternion(t),this.applyMatrix4(Pi),this}rotateX(t){return Pi.makeRotationX(t),this.applyMatrix4(Pi),this}rotateY(t){return Pi.makeRotationY(t),this.applyMatrix4(Pi),this}rotateZ(t){return Pi.makeRotationZ(t),this.applyMatrix4(Pi),this}translate(t,e,i){return Pi.makeTranslation(t,e,i),this.applyMatrix4(Pi),this}scale(t,e,i){return Pi.makeScale(t,e,i),this.applyMatrix4(Pi),this}lookAt(t){return ul.lookAt(t),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){let e=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Fe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Mi.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let i=this.boundingSphere.center;if(Mi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(Mi.min,sr.min),Mi.expandByPoint(Ve),Ve.addVectors(Mi.max,sr.max),Mi.expandByPoint(Ve)):(Mi.expandByPoint(sr.min),Mi.expandByPoint(sr.max))}Mi.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ve.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(t,c),Ve.add(us)),s=Math.max(s,i.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new L,l[P]=new L;let c=new L,h=new L,u=new L,d=new Xt,f=new Xt,g=new Xt,_=new L,p=new L;function m(P,K,y){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,K),u.fromBufferAttribute(i,y),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,K),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let E=1/(f.x*g.y-g.x*f.y);isFinite(E)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(E),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(E),a[P].add(_),a[K].add(_),a[y].add(_),l[P].add(p),l[K].add(p),l[y].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,K=M.length;P<K;++P){let y=M[P],E=y.start,W=y.count;for(let G=E,Y=E+W;G<Y;G+=3)m(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let b=new L,A=new L,O=new L,C=new L;function R(P){O.fromBufferAttribute(s,P),C.copy(O);let K=a[P];b.copy(K),b.sub(O.multiplyScalar(O.dot(K))).normalize(),A.crossVectors(C,K);let E=A.dot(l[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,E)}for(let P=0,K=M.length;P<K;++P){let y=M[P],E=y.start,W=y.count;for(let G=E,Y=E+W;G<Y;G+=3)R(t.getX(G+0)),R(t.getX(G+1)),R(t.getX(G+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qt(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new qt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},uu=new ne,Nn=new cn,Vr=new Vn,du=new L,Wr=new L,Xr=new L,Kr=new L,dl=new L,Yr=new L,fu=new L,qr=new L,Kt=class extends Ke{constructor(t=new ke,e=new Ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Yr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(dl.fromBufferAttribute(u,t),o?Yr.addScaledVector(dl,h):Yr.addScaledVector(dl.sub(e),h))}e.add(Yr)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere),Vr.applyMatrix4(r),Nn.copy(t.ray).recast(t.near),!(Vr.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(Vr,du)===null||Nn.origin.distanceToSquared(du)>(t.far-t.near)**2))&&(uu.copy(r).invert(),Nn.copy(t.ray).applyMatrix4(uu),!(i.boundingBox!==null&&Nn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Nn)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let p=d[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),b=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let A=M,O=b;A<O;A+=3){let C=a.getX(A),R=a.getX(A+1),P=a.getX(A+2);s=$r(this,m,t,i,c,h,u,C,R,P),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let M=a.getX(p),b=a.getX(p+1),A=a.getX(p+2);s=$r(this,o,t,i,c,h,u,M,b,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let p=d[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),b=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let A=M,O=b;A<O;A+=3){let C=A,R=A+1,P=A+2;s=$r(this,m,t,i,c,h,u,C,R,P),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let M=p,b=p+1,A=p+2;s=$r(this,o,t,i,c,h,u,M,b,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Op(n,t,e,i,s,r,o,a){let l;if(t.side===Qe?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Ei,a),l===null)return null;qr.copy(a),qr.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(qr);return c<e.near||c>e.far?null:{distance:c,point:qr.clone(),object:n}}function $r(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Wr),n.getVertexPosition(l,Xr),n.getVertexPosition(c,Kr);let h=Op(n,t,e,i,Wr,Xr,Kr,fu);if(h){let u=new L;sn.getBarycoord(fu,Wr,Xr,Kr,u),s&&(h.uv=sn.getInterpolatedAttribute(s,a,l,c,u,new Xt)),r&&(h.uv1=sn.getInterpolatedAttribute(r,a,l,c,u,new Xt)),o&&(h.normal=sn.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new L,materialIndex:0};sn.getNormal(Wr,Xr,Kr,d.normal),h.face=d,h.barycoord=u}return h}var Ce=class n extends ke{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(u,2));function g(_,p,m,M,b,A,O,C,R,P,K){let y=A/R,E=O/P,W=A/2,G=O/2,Y=C/2,it=R+1,z=P+1,ot=0,X=0,mt=new L;for(let gt=0;gt<z;gt++){let At=gt*E-G;for(let se=0;se<it;se++){let ue=se*y-W;mt[_]=ue*M,mt[p]=At*b,mt[m]=Y,c.push(mt.x,mt.y,mt.z),mt[_]=0,mt[p]=0,mt[m]=C>0?1:-1,h.push(mt.x,mt.y,mt.z),u.push(se/R),u.push(1-gt/P),ot+=1}}for(let gt=0;gt<P;gt++)for(let At=0;At<R;At++){let se=d+At+it*gt,ue=d+At+it*(gt+1),$=d+(At+1)+it*(gt+1),st=d+(At+1)+it*gt;l.push(se,ue,st),l.push(ue,$,st),X+=6}a.addGroup(f,X,K),f+=X,d+=ot}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Cs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function si(n){let t={};for(let e=0;e<n.length;e++){let i=Cs(n[e]);for(let s in i)t[s]=i[s]}return t}function kp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function hd(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var Dp={clone:Cs,merge:si},Np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Up=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,De=class extends qi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Np,this.fragmentShader=Up,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=kp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Lo=class extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=an}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},yn=new L,pu=new Xt,mu=new Xt,qe=class extends Lo{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=hc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hc*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yn.x,yn.y).multiplyScalar(-t/yn.z),yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yn.x,yn.y).multiplyScalar(-t/yn.z)}getViewSize(t,e){return this.getViewBounds(t,pu,mu),e.subVectors(mu,pu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_o*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ds=-90,fs=1,fc=class extends Ke{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qe(ds,fs,t,e);s.layers=this.layers,this.add(s);let r=new qe(ds,fs,t,e);r.layers=this.layers,this.add(r);let o=new qe(ds,fs,t,e);o.layers=this.layers,this.add(o);let a=new qe(ds,fs,t,e);a.layers=this.layers,this.add(a);let l=new qe(ds,fs,t,e);l.layers=this.layers,this.add(l);let c=new qe(ds,fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===an)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Io=class extends fi{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Es,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},pc=class extends Oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Io(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:We}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ce(5,5,5),r=new De({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qe,blending:bn});r.uniforms.tEquirect.value=e;let o=new Kt(s,r),a=e.minFilter;return e.minFilter===rn&&(e.minFilter=We),new fc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},fl=new L,Bp=new L,Fp=new Wt,nn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=fl.subVectors(i,e).cross(Bp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(fl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Fp.getNormalMatrix(t),s=this.coplanarPoint(fl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Un=new Vn,Zr=new L,pr=class{constructor(t=new nn,e=new nn,i=new nn,s=new nn,r=new nn,o=new nn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=an){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],p=s[11],m=s[12],M=s[13],b=s[14],A=s[15];if(i[0].setComponents(l-r,d-c,p-f,A-m).normalize(),i[1].setComponents(l+r,d+c,p+f,A+m).normalize(),i[2].setComponents(l+o,d+h,p+g,A+M).normalize(),i[3].setComponents(l-o,d-h,p-g,A-M).normalize(),i[4].setComponents(l-a,d-u,p-_,A-b).normalize(),e===an)i[5].setComponents(l+a,d+u,p+_,A+b).normalize();else if(e===Eo)i[5].setComponents(a,u,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(t){return Un.center.set(0,0,0),Un.radius=.7071067811865476,Un.applyMatrix4(t.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Zr.x=s.normal.x>0?t.max.x:t.min.x,Zr.y=s.normal.y>0?t.max.y:t.min.y,Zr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ud(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Hp(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Gi=class n extends ke{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let M=m*d-o;for(let b=0;b<c;b++){let A=b*u-r;g.push(A,-M,0),_.push(0,0,1),p.push(b/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){let b=M+c*m,A=M+c*(m+1),O=M+1+c*(m+1),C=M+1+c*m;f.push(b,A,C),f.push(A,O,C)}this.setIndex(f),this.setAttribute("position",new Fe(g,3)),this.setAttribute("normal",new Fe(_,3)),this.setAttribute("uv",new Fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gp=`#ifdef USE_ALPHAHASH
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
#endif`,Vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yp=`#ifdef USE_AOMAP
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
#endif`,qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$p=`#ifdef USE_BATCHING
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
#endif`,Zp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tm=`#ifdef USE_IRIDESCENCE
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
#endif`,em=`#ifdef USE_BUMPMAP
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
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hm=`#define PI 3.141592653589793
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
} // validated`,um=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dm=`vec3 transformedNormal = objectNormal;
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
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_m="gl_FragColor = linearToOutputTexel( gl_FragColor );",vm=`
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
}`,ym=`#ifdef USE_ENVMAP
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
#endif`,xm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rm=`#ifdef USE_GRADIENTMAP
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
}`,Cm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pm=`uniform bool receiveShadow;
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
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bm=`PhysicalMaterial material;
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
#endif`,Fm=`struct PhysicalMaterial {
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
}`,Hm=`
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
#endif`,zm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zm=`#if defined( USE_POINTS_UV )
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
#endif`,Jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,t0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i0=`#ifdef USE_MORPHTARGETS
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
#endif`,n0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,r0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c0=`#ifdef USE_NORMALMAP
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
#endif`,h0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,g0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,w0=`float getShadowMask() {
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
}`,A0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T0=`#ifdef USE_SKINNING
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
#endif`,R0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C0=`#ifdef USE_SKINNING
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
#endif`,L0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,k0=`#ifdef USE_TRANSMISSION
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
#endif`,D0=`#ifdef USE_TRANSMISSION
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,H0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z0=`uniform sampler2D t2D;
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`#include <common>
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
}`,Y0=`#if DEPTH_PACKING == 3200
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
}`,q0=`#define DISTANCE
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
}`,$0=`#define DISTANCE
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
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`uniform float scale;
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
}`,Q0=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,eg=`uniform vec3 diffuse;
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
}`,ig=`#define LAMBERT
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
}`,ng=`#define LAMBERT
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
}`,sg=`#define MATCAP
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
}`,rg=`#define MATCAP
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
}`,og=`#define NORMAL
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
}`,ag=`#define NORMAL
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
}`,lg=`#define PHONG
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
}`,cg=`#define PHONG
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
}`,hg=`#define STANDARD
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
}`,ug=`#define STANDARD
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
}`,dg=`#define TOON
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
}`,fg=`#define TOON
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
}`,pg=`uniform float size;
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#include <common>
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
}`,_g=`uniform vec3 color;
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
}`,vg=`uniform float rotation;
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
}`,yg=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:zp,alphahash_pars_fragment:Gp,alphamap_fragment:Vp,alphamap_pars_fragment:Wp,alphatest_fragment:Xp,alphatest_pars_fragment:Kp,aomap_fragment:Yp,aomap_pars_fragment:qp,batching_pars_vertex:$p,batching_vertex:Zp,begin_vertex:Jp,beginnormal_vertex:jp,bsdfs:Qp,iridescence_fragment:tm,bumpmap_pars_fragment:em,clipping_planes_fragment:im,clipping_planes_pars_fragment:nm,clipping_planes_pars_vertex:sm,clipping_planes_vertex:rm,color_fragment:om,color_pars_fragment:am,color_pars_vertex:lm,color_vertex:cm,common:hm,cube_uv_reflection_fragment:um,defaultnormal_vertex:dm,displacementmap_pars_vertex:fm,displacementmap_vertex:pm,emissivemap_fragment:mm,emissivemap_pars_fragment:gm,colorspace_fragment:_m,colorspace_pars_fragment:vm,envmap_fragment:ym,envmap_common_pars_fragment:xm,envmap_pars_fragment:bm,envmap_pars_vertex:Sm,envmap_physical_pars_fragment:Om,envmap_vertex:Mm,fog_vertex:Em,fog_pars_vertex:wm,fog_fragment:Am,fog_pars_fragment:Tm,gradientmap_pars_fragment:Rm,lightmap_pars_fragment:Cm,lights_lambert_fragment:Lm,lights_lambert_pars_fragment:Im,lights_pars_begin:Pm,lights_toon_fragment:km,lights_toon_pars_fragment:Dm,lights_phong_fragment:Nm,lights_phong_pars_fragment:Um,lights_physical_fragment:Bm,lights_physical_pars_fragment:Fm,lights_fragment_begin:Hm,lights_fragment_maps:zm,lights_fragment_end:Gm,logdepthbuf_fragment:Vm,logdepthbuf_pars_fragment:Wm,logdepthbuf_pars_vertex:Xm,logdepthbuf_vertex:Km,map_fragment:Ym,map_pars_fragment:qm,map_particle_fragment:$m,map_particle_pars_fragment:Zm,metalnessmap_fragment:Jm,metalnessmap_pars_fragment:jm,morphinstance_vertex:Qm,morphcolor_vertex:t0,morphnormal_vertex:e0,morphtarget_pars_vertex:i0,morphtarget_vertex:n0,normal_fragment_begin:s0,normal_fragment_maps:r0,normal_pars_fragment:o0,normal_pars_vertex:a0,normal_vertex:l0,normalmap_pars_fragment:c0,clearcoat_normal_fragment_begin:h0,clearcoat_normal_fragment_maps:u0,clearcoat_pars_fragment:d0,iridescence_pars_fragment:f0,opaque_fragment:p0,packing:m0,premultiplied_alpha_fragment:g0,project_vertex:_0,dithering_fragment:v0,dithering_pars_fragment:y0,roughnessmap_fragment:x0,roughnessmap_pars_fragment:b0,shadowmap_pars_fragment:S0,shadowmap_pars_vertex:M0,shadowmap_vertex:E0,shadowmask_pars_fragment:w0,skinbase_vertex:A0,skinning_pars_vertex:T0,skinning_vertex:R0,skinnormal_vertex:C0,specularmap_fragment:L0,specularmap_pars_fragment:I0,tonemapping_fragment:P0,tonemapping_pars_fragment:O0,transmission_fragment:k0,transmission_pars_fragment:D0,uv_pars_fragment:N0,uv_pars_vertex:U0,uv_vertex:B0,worldpos_vertex:F0,background_vert:H0,background_frag:z0,backgroundCube_vert:G0,backgroundCube_frag:V0,cube_vert:W0,cube_frag:X0,depth_vert:K0,depth_frag:Y0,distanceRGBA_vert:q0,distanceRGBA_frag:$0,equirect_vert:Z0,equirect_frag:J0,linedashed_vert:j0,linedashed_frag:Q0,meshbasic_vert:tg,meshbasic_frag:eg,meshlambert_vert:ig,meshlambert_frag:ng,meshmatcap_vert:sg,meshmatcap_frag:rg,meshnormal_vert:og,meshnormal_frag:ag,meshphong_vert:lg,meshphong_frag:cg,meshphysical_vert:hg,meshphysical_frag:ug,meshtoon_vert:dg,meshtoon_frag:fg,points_vert:pg,points_frag:mg,shadow_vert:gg,shadow_frag:_g,sprite_vert:vg,sprite_frag:yg},lt={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Ki={basic:{uniforms:si([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:si([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:si([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:si([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:si([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:si([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:si([lt.points,lt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:si([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:si([lt.common,lt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:si([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:si([lt.sprite,lt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:si([lt.common,lt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:si([lt.lights,lt.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Ki.physical={uniforms:si([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var Jr={r:0,b:0,g:0},Bn=new wi,xg=new ne;function bg(n,t,e,i,s,r,o){let a=new Tt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(M){let b=M.isScene===!0?M.background:null;return b&&b.isTexture&&(b=(M.backgroundBlurriness>0?e:t).get(b)),b}function _(M){let b=!1,A=g(M);A===null?m(a,l):A&&A.isColor&&(m(A,1),b=!0);let O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(M,b){let A=g(b);A&&(A.isCubeTexture||A.mapping===Wo)?(h===void 0&&(h=new Kt(new Ce(1,1,1),new De({name:"BackgroundCubeMaterial",uniforms:Cs(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Bn.copy(b.backgroundRotation),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xg.makeRotationFromEuler(Bn)),h.material.toneMapped=he.getTransfer(A.colorSpace)!==Se,(u!==A||d!==A.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Kt(new Gi(2,2),new De({name:"BackgroundMaterial",uniforms:Cs(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=he.getTransfer(A.colorSpace)!==Se,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,f=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,b){M.getRGB(Jr,hd(n)),i.buffers.color.setClear(Jr.r,Jr.g,Jr.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),l=b,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:_,addToRenderList:p}}function Sg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(y,E,W,G,Y){let it=!1,z=u(G,W,E);r!==z&&(r=z,c(r.object)),it=f(y,G,W,Y),it&&g(y,G,W,Y),Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(it||o)&&(o=!1,A(y,E,W,G),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,E,W){let G=W.wireframe===!0,Y=i[y.id];Y===void 0&&(Y={},i[y.id]=Y);let it=Y[E.id];it===void 0&&(it={},Y[E.id]=it);let z=it[G];return z===void 0&&(z=d(l()),it[G]=z),z}function d(y){let E=[],W=[],G=[];for(let Y=0;Y<e;Y++)E[Y]=0,W[Y]=0,G[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:W,attributeDivisors:G,object:y,attributes:{},index:null}}function f(y,E,W,G){let Y=r.attributes,it=E.attributes,z=0,ot=W.getAttributes();for(let X in ot)if(ot[X].location>=0){let gt=Y[X],At=it[X];if(At===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(At=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(At=y.instanceColor)),gt===void 0||gt.attribute!==At||At&&gt.data!==At.data)return!0;z++}return r.attributesNum!==z||r.index!==G}function g(y,E,W,G){let Y={},it=E.attributes,z=0,ot=W.getAttributes();for(let X in ot)if(ot[X].location>=0){let gt=it[X];gt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(gt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(gt=y.instanceColor));let At={};At.attribute=gt,gt&&gt.data&&(At.data=gt.data),Y[X]=At,z++}r.attributes=Y,r.attributesNum=z,r.index=G}function _(){let y=r.newAttributes;for(let E=0,W=y.length;E<W;E++)y[E]=0}function p(y){m(y,0)}function m(y,E){let W=r.newAttributes,G=r.enabledAttributes,Y=r.attributeDivisors;W[y]=1,G[y]===0&&(n.enableVertexAttribArray(y),G[y]=1),Y[y]!==E&&(n.vertexAttribDivisor(y,E),Y[y]=E)}function M(){let y=r.newAttributes,E=r.enabledAttributes;for(let W=0,G=E.length;W<G;W++)E[W]!==y[W]&&(n.disableVertexAttribArray(W),E[W]=0)}function b(y,E,W,G,Y,it,z){z===!0?n.vertexAttribIPointer(y,E,W,Y,it):n.vertexAttribPointer(y,E,W,G,Y,it)}function A(y,E,W,G){_();let Y=G.attributes,it=W.getAttributes(),z=E.defaultAttributeValues;for(let ot in it){let X=it[ot];if(X.location>=0){let mt=Y[ot];if(mt===void 0&&(ot==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),ot==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),mt!==void 0){let gt=mt.normalized,At=mt.itemSize,se=t.get(mt);if(se===void 0)continue;let ue=se.buffer,$=se.type,st=se.bytesPerElement,Mt=$===n.INT||$===n.UNSIGNED_INT||mt.gpuType===Wc;if(mt.isInterleavedBufferAttribute){let _t=mt.data,zt=_t.stride,Dt=mt.offset;if(_t.isInstancedInterleavedBuffer){for(let jt=0;jt<X.locationSize;jt++)m(X.location+jt,_t.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let jt=0;jt<X.locationSize;jt++)p(X.location+jt);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let jt=0;jt<X.locationSize;jt++)b(X.location+jt,At/X.locationSize,$,gt,zt*st,(Dt+At/X.locationSize*jt)*st,Mt)}else{if(mt.isInstancedBufferAttribute){for(let _t=0;_t<X.locationSize;_t++)m(X.location+_t,mt.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let _t=0;_t<X.locationSize;_t++)p(X.location+_t);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let _t=0;_t<X.locationSize;_t++)b(X.location+_t,At/X.locationSize,$,gt,At*st,At/X.locationSize*_t*st,Mt)}}else if(z!==void 0){let gt=z[ot];if(gt!==void 0)switch(gt.length){case 2:n.vertexAttrib2fv(X.location,gt);break;case 3:n.vertexAttrib3fv(X.location,gt);break;case 4:n.vertexAttrib4fv(X.location,gt);break;default:n.vertexAttrib1fv(X.location,gt)}}}}M()}function O(){P();for(let y in i){let E=i[y];for(let W in E){let G=E[W];for(let Y in G)h(G[Y].object),delete G[Y];delete E[W]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;let E=i[y.id];for(let W in E){let G=E[W];for(let Y in G)h(G[Y].object),delete G[Y];delete E[W]}delete i[y.id]}function R(y){for(let E in i){let W=i[E];if(W[y.id]===void 0)continue;let G=W[y.id];for(let Y in G)h(G[Y].object),delete G[Y];delete W[y.id]}}function P(){K(),o=!0,r!==s&&(r=s,c(r.object))}function K(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:K,dispose:O,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function Mg(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,i,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Eg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Xe&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let P=R===vr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==$e&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==on&&!P)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let R=t.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:A,vertexTextures:O,maxSamples:C}}function wg(n){let t=this,e=null,i=0,s=!1,r=!1,o=new nn,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let M=r?0:i,b=M*4,A=m.clippingState||null;l.value=A,A=h(g,d,b,f);for(let O=0;O!==b;++O)A[O]=e[O];m.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,A=f;b!==_;++b,A+=4)o.copy(u[b]).applyMatrix4(M,a),o.normal.toArray(p,A),p[A+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Ag(n){let t=new WeakMap;function e(o,a){return a===Ol?o.mapping=Es:a===kl&&(o.mapping=ws),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ol||a===kl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new pc(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Ls=class extends Lo{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ys=4,gu=[.125,.215,.35,.446,.526,.582],Gn=20,pl=new Ls,_u=new Tt,ml=null,gl=0,_l=0,vl=!1,Hn=(1+Math.sqrt(5))/2,ps=1/Hn,vu=[new L(-Hn,ps,0),new L(Hn,ps,0),new L(-ps,0,Hn),new L(ps,0,Hn),new L(0,Hn,-ps),new L(0,Hn,ps),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Po=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ml,gl,_l),this._renderer.xr.enabled=vl,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Es||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:We,minFilter:We,generateMipmaps:!1,type:vr,format:Xe,colorSpace:Rn,depthBuffer:!1},s=yu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yu(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tg(r)),this._blurMaterial=Rg(r,t,e)}return s}_compileMaterial(t){let e=new Kt(this._lodPlanes[0],t);this._renderer.compile(e,pl)}_sceneToCubeUV(t,e,i,s){let a=new qe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(_u),h.toneMapping=Sn,h.autoClear=!1;let f=new Ai({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),g=new Kt(new Ce,f),_=!1,p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,_=!0):(f.color.copy(_u),_=!0);for(let m=0;m<6;m++){let M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let b=this._cubeSize;jr(s,M*b,m>2?b:0,b,b),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Es||t.mapping===ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;jr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,pl)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=vu[(s-r-1)%vu.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Kt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gn-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Gn;p>Gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gn}`);let m=[],M=0;for(let R=0;R<Gn;++R){let P=R/_,K=Math.exp(-P*P/2);m.push(K),R===0?M+=K:R<p&&(M+=2*K)}for(let R=0;R<m.length;R++)m[R]=m[R]/M;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;let A=this._sizeLods[s],O=3*A*(s>b-ys?s-b+ys:0),C=4*(this._cubeSize-A);jr(e,O,C,3*A,2*A),l.setRenderTarget(e),l.render(u,pl)}};function Tg(n){let t=[],e=[],i=[],s=n,r=n-ys+1+gu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-ys?l=gu[o-n+ys-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,p=2,m=1,M=new Float32Array(_*g*f),b=new Float32Array(p*g*f),A=new Float32Array(m*g*f);for(let C=0;C<f;C++){let R=C%3*2/3-1,P=C>2?0:-1,K=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];M.set(K,_*g*C),b.set(d,p*g*C);let y=[C,C,C,C,C,C];A.set(y,m*g*C)}let O=new ke;O.setAttribute("position",new qt(M,_)),O.setAttribute("uv",new qt(b,p)),O.setAttribute("faceIndex",new qt(A,m)),t.push(O),s>ys&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function yu(n,t,e){let i=new Oi(n,t,e);return i.texture.mapping=Wo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Rg(n,t,e){let i=new Float32Array(Gn),s=new L(0,1,0);return new De({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function xu(){return new De({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function bu(){return new De({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Jc(){return`

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
	`}function Cg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ol||l===kl,h=l===Es||l===ws;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Po(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Po(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Lg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&vo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Ig(n,t,e,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let _=f[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],n.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let M=f.array;_=f.version;for(let b=0,A=M.length;b<A;b+=3){let O=M[b+0],C=M[b+1],R=M[b+2];d.push(O,C,C,R,R,O)}}else if(g!==void 0){let M=g.array;_=g.version;for(let b=0,A=M.length/3-1;b<A;b+=3){let O=b+0,C=b+1,R=b+2;d.push(O,C,C,R,R,O)}}else return;let p=new(ld(d)?Co:Ro)(d,1);p.version=_;let m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Pg(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,i,1)}function u(d,f,g,_){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,g);let m=0;for(let M=0;M<g;M++)m+=f[M];for(let M=0;M<_.length;M++)e.update(m,i,_[M])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Og(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function kg(n,t,e){let i=new WeakMap,s=new Re;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let K=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",K)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let A=a.attributes.position.count*b,O=1;A>t.maxTextureSize&&(O=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);let C=new Float32Array(A*O*4*u),R=new Rs(C,A,O,u);R.type=on,R.needsUpdate=!0;let P=b*4;for(let y=0;y<u;y++){let E=p[y],W=m[y],G=M[y],Y=A*O*4*y;for(let it=0;it<E.count;it++){let z=it*P;f===!0&&(s.fromBufferAttribute(E,it),C[Y+z+0]=s.x,C[Y+z+1]=s.y,C[Y+z+2]=s.z,C[Y+z+3]=0),g===!0&&(s.fromBufferAttribute(W,it),C[Y+z+4]=s.x,C[Y+z+5]=s.y,C[Y+z+6]=s.z,C[Y+z+7]=0),_===!0&&(s.fromBufferAttribute(G,it),C[Y+z+8]=s.x,C[Y+z+9]=s.y,C[Y+z+10]=s.z,C[Y+z+11]=G.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new Xt(A,O)},i.set(a,d),a.addEventListener("dispose",K)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Dg(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Is=class extends fi{constructor(t,e,i,s,r,o,a,l,c,h=Mn){if(h!==Mn&&h!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Mn&&(i=ln),i===void 0&&h===Ts&&(i=As),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:oe,this.minFilter=l!==void 0?l:oe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},dd=new fi,Su=new Is(1,1),fd=new Rs,pd=new fr,md=new Io,Mu=[],Eu=[],wu=new Float32Array(16),Au=new Float32Array(9),Tu=new Float32Array(4);function Ns(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Mu[s];if(r===void 0&&(r=new Float32Array(s),Mu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function He(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Yo(n,t){let e=Eu[t];e===void 0&&(e=new Int32Array(t),Eu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Ng(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Ug(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2fv(this.addr,t),ze(e,t)}}function Bg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;n.uniform3fv(this.addr,t),ze(e,t)}}function Fg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4fv(this.addr,t),ze(e,t)}}function Hg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(He(e,i))return;Tu.set(i),n.uniformMatrix2fv(this.addr,!1,Tu),ze(e,i)}}function zg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(He(e,i))return;Au.set(i),n.uniformMatrix3fv(this.addr,!1,Au),ze(e,i)}}function Gg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(He(e,i))return;wu.set(i),n.uniformMatrix4fv(this.addr,!1,wu),ze(e,i)}}function Vg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Wg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2iv(this.addr,t),ze(e,t)}}function Xg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;n.uniform3iv(this.addr,t),ze(e,t)}}function Kg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4iv(this.addr,t),ze(e,t)}}function Yg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function qg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2uiv(this.addr,t),ze(e,t)}}function $g(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;n.uniform3uiv(this.addr,t),ze(e,t)}}function Zg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4uiv(this.addr,t),ze(e,t)}}function Jg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Su.compareFunction=ad,r=Su):r=dd,e.setTexture2D(t||r,s)}function jg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||pd,s)}function Qg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||md,s)}function t_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||fd,s)}function e_(n){switch(n){case 5126:return Ng;case 35664:return Ug;case 35665:return Bg;case 35666:return Fg;case 35674:return Hg;case 35675:return zg;case 35676:return Gg;case 5124:case 35670:return Vg;case 35667:case 35671:return Wg;case 35668:case 35672:return Xg;case 35669:case 35673:return Kg;case 5125:return Yg;case 36294:return qg;case 36295:return $g;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return Qg;case 36289:case 36303:case 36311:case 36292:return t_}}function i_(n,t){n.uniform1fv(this.addr,t)}function n_(n,t){let e=Ns(t,this.size,2);n.uniform2fv(this.addr,e)}function s_(n,t){let e=Ns(t,this.size,3);n.uniform3fv(this.addr,e)}function r_(n,t){let e=Ns(t,this.size,4);n.uniform4fv(this.addr,e)}function o_(n,t){let e=Ns(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function a_(n,t){let e=Ns(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function l_(n,t){let e=Ns(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function c_(n,t){n.uniform1iv(this.addr,t)}function h_(n,t){n.uniform2iv(this.addr,t)}function u_(n,t){n.uniform3iv(this.addr,t)}function d_(n,t){n.uniform4iv(this.addr,t)}function f_(n,t){n.uniform1uiv(this.addr,t)}function p_(n,t){n.uniform2uiv(this.addr,t)}function m_(n,t){n.uniform3uiv(this.addr,t)}function g_(n,t){n.uniform4uiv(this.addr,t)}function __(n,t,e){let i=this.cache,s=t.length,r=Yo(e,s);He(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||dd,r[o])}function v_(n,t,e){let i=this.cache,s=t.length,r=Yo(e,s);He(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||pd,r[o])}function y_(n,t,e){let i=this.cache,s=t.length,r=Yo(e,s);He(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||md,r[o])}function x_(n,t,e){let i=this.cache,s=t.length,r=Yo(e,s);He(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||fd,r[o])}function b_(n){switch(n){case 5126:return i_;case 35664:return n_;case 35665:return s_;case 35666:return r_;case 35674:return o_;case 35675:return a_;case 35676:return l_;case 5124:case 35670:return c_;case 35667:case 35671:return h_;case 35668:case 35672:return u_;case 35669:case 35673:return d_;case 5125:return f_;case 36294:return p_;case 36295:return m_;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return __;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return x_}}var mc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=e_(e.type)}},gc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=b_(e.type)}},_c=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},yl=/(\w+)(\])?(\[|\.)?/g;function Ru(n,t){n.seq.push(t),n.map[t.id]=t}function S_(n,t,e){let i=n.name,s=i.length;for(yl.lastIndex=0;;){let r=yl.exec(i),o=yl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ru(e,c===void 0?new mc(a,n,t):new gc(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new _c(a),Ru(e,u)),e=u}}}var Ss=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);S_(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Cu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var M_=37297,E_=0;function w_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function A_(n){let t=he.getPrimaries(he.workingColorSpace),e=he.getPrimaries(n),i;switch(t===e?i="":t===Mo&&e===So?i="LinearDisplayP3ToLinearSRGB":t===So&&e===Mo&&(i="LinearSRGBToLinearDisplayP3"),n){case Rn:case Ko:return[i,"LinearTransferOETF"];case _e:case Zc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Lu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+w_(n.getShaderSource(t),o)}else return s}function T_(n,t){let e=A_(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function R_(n,t){let e;switch(t){case jf:e="Linear";break;case Qf:e="Reinhard";break;case tp:e="Cineon";break;case ep:e="ACESFilmic";break;case np:e="AgX";break;case sp:e="Neutral";break;case ip:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Qr=new L;function C_(){he.getLuminanceCoefficients(Qr);let n=Qr.x.toFixed(4),t=Qr.y.toFixed(4),e=Qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function I_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function P_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function cr(n){return n!==""}function Iu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var O_=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(n){return n.replace(O_,D_)}var k_=new Map;function D_(n,t){let e=Vt[t];if(e===void 0){let i=k_.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return vc(e)}var N_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ou(n){return n.replace(N_,U_)}function U_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ku(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function B_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$u?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===If?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===en&&(t="SHADOWMAP_TYPE_VSM"),t}function F_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Es:case ws:t="ENVMAP_TYPE_CUBE";break;case Wo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function H_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ws:t="ENVMAP_MODE_REFRACTION";break}return t}function z_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vc:t="ENVMAP_BLENDING_MULTIPLY";break;case Zf:t="ENVMAP_BLENDING_MIX";break;case Jf:t="ENVMAP_BLENDING_ADD";break}return t}function G_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function V_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=B_(e),c=F_(e),h=H_(e),u=z_(e),d=G_(e),f=L_(e),g=I_(r),_=s.createProgram(),p,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cr).join(`
`),m.length>0&&(m+=`
`)):(p=[ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),m=[ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Sn?R_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,T_("linearToOutputTexel",e.outputColorSpace),C_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cr).join(`
`)),o=vc(o),o=Iu(o,e),o=Pu(o,e),a=vc(a),a=Iu(a,e),a=Pu(a,e),o=Ou(o),a=Ou(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===dr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=M+p+o,A=M+m+a,O=Cu(s,s.VERTEX_SHADER,b),C=Cu(s,s.FRAGMENT_SHADER,A);s.attachShader(_,O),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(E){if(n.debug.checkShaderErrors){let W=s.getProgramInfoLog(_).trim(),G=s.getShaderInfoLog(O).trim(),Y=s.getShaderInfoLog(C).trim(),it=!0,z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(it=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,O,C);else{let ot=Lu(s,O,"vertex"),X=Lu(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+W+`
`+ot+`
`+X)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(G===""||Y==="")&&(z=!1);z&&(E.diagnostics={runnable:it,programLog:W,vertexShader:{log:G,prefix:p},fragmentShader:{log:Y,prefix:m}})}s.deleteShader(O),s.deleteShader(C),P=new Ss(s,_),K=P_(s,_)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let K;this.getAttributes=function(){return K===void 0&&R(this),K};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,M_)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=E_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=C,this}var W_=0,yc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new xc(t),e.set(t,i)),i}},xc=class{constructor(t){this.id=W_++,this.code=t,this.usedTimes=0}};function X_(n,t,e,i,s,r,o){let a=new To,l=new yc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,g=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,E,W,G,Y){let it=G.fog,z=Y.geometry,ot=y.isMeshStandardMaterial?G.environment:null,X=(y.isMeshStandardMaterial?e:t).get(y.envMap||ot),mt=X&&X.mapping===Wo?X.image.height:null,gt=_[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let At=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,se=At!==void 0?At.length:0,ue=0;z.morphAttributes.position!==void 0&&(ue=1),z.morphAttributes.normal!==void 0&&(ue=2),z.morphAttributes.color!==void 0&&(ue=3);let $,st,Mt,_t;if(gt){let ci=Ki[gt];$=ci.vertexShader,st=ci.fragmentShader}else $=y.vertexShader,st=y.fragmentShader,l.update(y),Mt=l.getVertexShaderID(y),_t=l.getFragmentShaderID(y);let zt=n.getRenderTarget(),Dt=Y.isInstancedMesh===!0,jt=Y.isBatchedMesh===!0,fe=!!y.map,Qt=!!y.matcap,I=!!X,yi=!!y.aoMap,Zt=!!y.lightMap,ee=!!y.bumpMap,Ut=!!y.normalMap,xe=!!y.displacementMap,Ht=!!y.emissiveMap,T=!!y.metalnessMap,x=!!y.roughnessMap,U=y.anisotropy>0,J=y.clearcoat>0,et=y.dispersion>0,Z=y.iridescence>0,Rt=y.sheen>0,ct=y.transmission>0,vt=U&&!!y.anisotropyMap,ie=J&&!!y.clearcoatMap,rt=J&&!!y.clearcoatNormalMap,yt=J&&!!y.clearcoatRoughnessMap,Bt=Z&&!!y.iridescenceMap,Ft=Z&&!!y.iridescenceThicknessMap,xt=Rt&&!!y.sheenColorMap,Jt=Rt&&!!y.sheenRoughnessMap,Gt=!!y.specularMap,ge=!!y.specularColorMap,k=!!y.specularIntensityMap,dt=ct&&!!y.transmissionMap,V=ct&&!!y.thicknessMap,Q=!!y.gradientMap,ht=!!y.alphaMap,ft=y.alphaTest>0,te=!!y.alphaHash,Pe=!!y.extensions,li=Sn;y.toneMapped&&(zt===null||zt.isXRRenderTarget===!0)&&(li=n.toneMapping);let re={shaderID:gt,shaderType:y.type,shaderName:y.name,vertexShader:$,fragmentShader:st,defines:y.defines,customVertexShaderID:Mt,customFragmentShaderID:_t,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:jt,batchingColor:jt&&Y._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&Y.instanceColor!==null,instancingMorph:Dt&&Y.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:zt===null?n.outputColorSpace:zt.isXRRenderTarget===!0?zt.texture.colorSpace:Rn,alphaToCoverage:!!y.alphaToCoverage,map:fe,matcap:Qt,envMap:I,envMapMode:I&&X.mapping,envMapCubeUVHeight:mt,aoMap:yi,lightMap:Zt,bumpMap:ee,normalMap:Ut,displacementMap:f&&xe,emissiveMap:Ht,normalMapObjectSpace:Ut&&y.normalMapType===lp,normalMapTangentSpace:Ut&&y.normalMapType===od,metalnessMap:T,roughnessMap:x,anisotropy:U,anisotropyMap:vt,clearcoat:J,clearcoatMap:ie,clearcoatNormalMap:rt,clearcoatRoughnessMap:yt,dispersion:et,iridescence:Z,iridescenceMap:Bt,iridescenceThicknessMap:Ft,sheen:Rt,sheenColorMap:xt,sheenRoughnessMap:Jt,specularMap:Gt,specularColorMap:ge,specularIntensityMap:k,transmission:ct,transmissionMap:dt,thicknessMap:V,gradientMap:Q,opaque:y.transparent===!1&&y.blending===xs&&y.alphaToCoverage===!1,alphaMap:ht,alphaTest:ft,alphaHash:te,combine:y.combine,mapUv:fe&&p(y.map.channel),aoMapUv:yi&&p(y.aoMap.channel),lightMapUv:Zt&&p(y.lightMap.channel),bumpMapUv:ee&&p(y.bumpMap.channel),normalMapUv:Ut&&p(y.normalMap.channel),displacementMapUv:xe&&p(y.displacementMap.channel),emissiveMapUv:Ht&&p(y.emissiveMap.channel),metalnessMapUv:T&&p(y.metalnessMap.channel),roughnessMapUv:x&&p(y.roughnessMap.channel),anisotropyMapUv:vt&&p(y.anisotropyMap.channel),clearcoatMapUv:ie&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:rt&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&p(y.sheenRoughnessMap.channel),specularMapUv:Gt&&p(y.specularMap.channel),specularColorMapUv:ge&&p(y.specularColorMap.channel),specularIntensityMapUv:k&&p(y.specularIntensityMap.channel),transmissionMapUv:dt&&p(y.transmissionMap.channel),thicknessMapUv:V&&p(y.thicknessMap.channel),alphaMapUv:ht&&p(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ut||U),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!z.attributes.uv&&(fe||ht),fog:!!it,useFog:y.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:Y.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ue,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:li,decodeVideoTexture:fe&&y.map.isVideoTexture===!0&&he.getTransfer(y.map.colorSpace)===Se,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ui,flipSided:y.side===Qe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Pe&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&y.extensions.multiDraw===!0||jt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return re.vertexUv1s=c.has(1),re.vertexUv2s=c.has(2),re.vertexUv3s=c.has(3),c.clear(),re}function M(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let W in y.defines)E.push(W),E.push(y.defines[W]);return y.isRawShaderMaterial===!1&&(b(E,y),A(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function b(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function A(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function O(y){let E=_[y.type],W;if(E){let G=Ki[E];W=Dp.clone(G.uniforms)}else W=y.uniforms;return W}function C(y,E){let W;for(let G=0,Y=h.length;G<Y;G++){let it=h[G];if(it.cacheKey===E){W=it,++W.usedTimes;break}}return W===void 0&&(W=new V_(n,E,y,r),h.push(W)),W}function R(y){if(--y.usedTimes===0){let E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),y.destroy()}}function P(y){l.remove(y)}function K(){l.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:O,acquireProgram:C,releaseProgram:R,releaseShaderCache:P,programs:h,dispose:K}}function K_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Y_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Du(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Nu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,f,g,_,p){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},n[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),t++,m}function a(u,d,f,g,_,p){let m=o(u,d,f,g,_,p);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,d,f,g,_,p){let m=o(u,d,f,g,_,p);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||Y_),i.length>1&&i.sort(d||Du),s.length>1&&s.sort(d||Du)}function h(){for(let u=t,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function q_(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Nu,n.set(i,[o])):s>=r.length?(o=new Nu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function $_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Tt};break;case"SpotLight":e={position:new L,direction:new L,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function Z_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var J_=0;function j_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Q_(n){let t=new $_,e=Z_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let s=new L,r=new ne,o=new ne;function a(c){let h=0,u=0,d=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,M=0,b=0,A=0,O=0,C=0,R=0;c.sort(j_);for(let K=0,y=c.length;K<y;K++){let E=c[K],W=E.color,G=E.intensity,Y=E.distance,it=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=W.r*G,u+=W.g*G,d+=W.b*G;else if(E.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(E.sh.coefficients[z],G);R++}else if(E.isDirectionalLight){let z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let ot=E.shadow,X=e.get(E);X.shadowIntensity=ot.intensity,X.shadowBias=ot.bias,X.shadowNormalBias=ot.normalBias,X.shadowRadius=ot.radius,X.shadowMapSize=ot.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=it,i.directionalShadowMatrix[f]=E.shadow.matrix,M++}i.directional[f]=z,f++}else if(E.isSpotLight){let z=t.get(E);z.position.setFromMatrixPosition(E.matrixWorld),z.color.copy(W).multiplyScalar(G),z.distance=Y,z.coneCos=Math.cos(E.angle),z.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),z.decay=E.decay,i.spot[_]=z;let ot=E.shadow;if(E.map&&(i.spotLightMap[O]=E.map,O++,ot.updateMatrices(E),E.castShadow&&C++),i.spotLightMatrix[_]=ot.matrix,E.castShadow){let X=e.get(E);X.shadowIntensity=ot.intensity,X.shadowBias=ot.bias,X.shadowNormalBias=ot.normalBias,X.shadowRadius=ot.radius,X.shadowMapSize=ot.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=it,A++}_++}else if(E.isRectAreaLight){let z=t.get(E);z.color.copy(W).multiplyScalar(G),z.halfWidth.set(E.width*.5,0,0),z.halfHeight.set(0,E.height*.5,0),i.rectArea[p]=z,p++}else if(E.isPointLight){let z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),z.distance=E.distance,z.decay=E.decay,E.castShadow){let ot=E.shadow,X=e.get(E);X.shadowIntensity=ot.intensity,X.shadowBias=ot.bias,X.shadowNormalBias=ot.normalBias,X.shadowRadius=ot.radius,X.shadowMapSize=ot.mapSize,X.shadowCameraNear=ot.camera.near,X.shadowCameraFar=ot.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=it,i.pointShadowMatrix[g]=E.shadow.matrix,b++}i.point[g]=z,g++}else if(E.isHemisphereLight){let z=t.get(E);z.skyColor.copy(E.color).multiplyScalar(G),z.groundColor.copy(E.groundColor).multiplyScalar(G),i.hemi[m]=z,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==M||P.numPointShadows!==b||P.numSpotShadows!==A||P.numSpotMaps!==O||P.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=A+O-C,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=M,P.numPointShadows=b,P.numSpotShadows=A,P.numSpotMaps=O,P.numLightProbes=R,i.version=J_++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0,p=h.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){let b=c[m];if(b.isDirectionalLight){let A=i.directional[u];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),u++}else if(b.isSpotLight){let A=i.spot[f];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),f++}else if(b.isRectAreaLight){let A=i.rectArea[g];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let A=i.point[d];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){let A=i.hemi[_];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function Uu(n){let t=new Q_(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function tv(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Uu(n),t.set(s,[a])):r>=o.length?(a=new Uu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var bc=class extends qi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=op,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Sc=class extends qi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iv=`uniform sampler2D shadow_pass;
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
}`;function nv(n,t,e){let i=new pr,s=new Xt,r=new Xt,o=new Re,a=new bc({depthPacking:ap}),l=new Sc,c={},h=e.maxTextureSize,u={[Ei]:Qe,[Qe]:Ei,[ui]:ui},d=new De({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:ev,fragmentShader:iv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ke;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Kt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$u;let m=this.type;this.render=function(C,R,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;let K=n.getRenderTarget(),y=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),W=n.state;W.setBlending(bn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let G=m!==en&&this.type===en,Y=m===en&&this.type!==en;for(let it=0,z=C.length;it<z;it++){let ot=C[it],X=ot.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let mt=X.getFrameExtents();if(s.multiply(mt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/mt.x),s.x=r.x*mt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/mt.y),s.y=r.y*mt.y,X.mapSize.y=r.y)),X.map===null||G===!0||Y===!0){let At=this.type!==en?{minFilter:oe,magFilter:oe}:{};X.map!==null&&X.map.dispose(),X.map=new Oi(s.x,s.y,At),X.map.texture.name=ot.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();let gt=X.getViewportCount();for(let At=0;At<gt;At++){let se=X.getViewport(At);o.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),W.viewport(o),X.updateMatrices(ot,At),i=X.getFrustum(),A(R,P,X.camera,ot,this.type)}X.isPointLightShadow!==!0&&this.type===en&&M(X,P),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(K,y,E)};function M(C,R){let P=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Oi(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(R,null,P,d,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(R,null,P,f,_,null)}function b(C,R,P,K){let y=null,E=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)y=E;else if(y=P.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let W=y.uuid,G=R.uuid,Y=c[W];Y===void 0&&(Y={},c[W]=Y);let it=Y[G];it===void 0&&(it=y.clone(),Y[G]=it,R.addEventListener("dispose",O)),y=it}if(y.visible=R.visible,y.wireframe=R.wireframe,K===en?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let W=n.properties.get(y);W.light=P}return y}function A(C,R,P,K,y){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===en)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);let G=t.update(C),Y=C.material;if(Array.isArray(Y)){let it=G.groups;for(let z=0,ot=it.length;z<ot;z++){let X=it[z],mt=Y[X.materialIndex];if(mt&&mt.visible){let gt=b(C,mt,K,y);C.onBeforeShadow(n,C,R,P,G,gt,X),n.renderBufferDirect(P,null,G,gt,C,X),C.onAfterShadow(n,C,R,P,G,gt,X)}}}else if(Y.visible){let it=b(C,Y,K,y);C.onBeforeShadow(n,C,R,P,G,it,null),n.renderBufferDirect(P,null,G,it,C,null),C.onAfterShadow(n,C,R,P,G,it,null)}}let W=C.children;for(let G=0,Y=W.length;G<Y;G++)A(W[G],R,P,K,y)}function O(C){C.target.removeEventListener("dispose",O);for(let P in c){let K=c[P],y=C.target.uuid;y in K&&(K[y].dispose(),delete K[y])}}}var sv={[Al]:Tl,[Rl]:Il,[Cl]:Pl,[Ms]:Ll,[Tl]:Al,[Il]:Rl,[Pl]:Cl,[Ll]:Ms};function rv(n){function t(){let k=!1,dt=new Re,V=null,Q=new Re(0,0,0,0);return{setMask:function(ht){V!==ht&&!k&&(n.colorMask(ht,ht,ht,ht),V=ht)},setLocked:function(ht){k=ht},setClear:function(ht,ft,te,Pe,li){li===!0&&(ht*=Pe,ft*=Pe,te*=Pe),dt.set(ht,ft,te,Pe),Q.equals(dt)===!1&&(n.clearColor(ht,ft,te,Pe),Q.copy(dt))},reset:function(){k=!1,V=null,Q.set(-1,0,0,0)}}}function e(){let k=!1,dt=!1,V=null,Q=null,ht=null;return{setReversed:function(ft){dt=ft},setTest:function(ft){ft?Mt(n.DEPTH_TEST):_t(n.DEPTH_TEST)},setMask:function(ft){V!==ft&&!k&&(n.depthMask(ft),V=ft)},setFunc:function(ft){if(dt&&(ft=sv[ft]),Q!==ft){switch(ft){case Al:n.depthFunc(n.NEVER);break;case Tl:n.depthFunc(n.ALWAYS);break;case Rl:n.depthFunc(n.LESS);break;case Ms:n.depthFunc(n.LEQUAL);break;case Cl:n.depthFunc(n.EQUAL);break;case Ll:n.depthFunc(n.GEQUAL);break;case Il:n.depthFunc(n.GREATER);break;case Pl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=ft}},setLocked:function(ft){k=ft},setClear:function(ft){ht!==ft&&(n.clearDepth(ft),ht=ft)},reset:function(){k=!1,V=null,Q=null,ht=null}}}function i(){let k=!1,dt=null,V=null,Q=null,ht=null,ft=null,te=null,Pe=null,li=null;return{setTest:function(re){k||(re?Mt(n.STENCIL_TEST):_t(n.STENCIL_TEST))},setMask:function(re){dt!==re&&!k&&(n.stencilMask(re),dt=re)},setFunc:function(re,ci,$i){(V!==re||Q!==ci||ht!==$i)&&(n.stencilFunc(re,ci,$i),V=re,Q=ci,ht=$i)},setOp:function(re,ci,$i){(ft!==re||te!==ci||Pe!==$i)&&(n.stencilOp(re,ci,$i),ft=re,te=ci,Pe=$i)},setLocked:function(re){k=re},setClear:function(re){li!==re&&(n.clearStencil(re),li=re)},reset:function(){k=!1,dt=null,V=null,Q=null,ht=null,ft=null,te=null,Pe=null,li=null}}}let s=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,M=null,b=null,A=null,O=null,C=new Tt(0,0,0),R=0,P=!1,K=null,y=null,E=null,W=null,G=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),it=!1,z=0,ot=n.getParameter(n.VERSION);ot.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(ot)[1]),it=z>=1):ot.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),it=z>=2);let X=null,mt={},gt=n.getParameter(n.SCISSOR_BOX),At=n.getParameter(n.VIEWPORT),se=new Re().fromArray(gt),ue=new Re().fromArray(At);function $(k,dt,V,Q){let ht=new Uint8Array(4),ft=n.createTexture();n.bindTexture(k,ft),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let te=0;te<V;te++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,ht):n.texImage2D(dt+te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ht);return ft}let st={};st[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),st[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),st[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Mt(n.DEPTH_TEST),r.setFunc(Ms),Zt(!1),ee(Kh),Mt(n.CULL_FACE),I(bn);function Mt(k){c[k]!==!0&&(n.enable(k),c[k]=!0)}function _t(k){c[k]!==!1&&(n.disable(k),c[k]=!1)}function zt(k,dt){return h[k]!==dt?(n.bindFramebuffer(k,dt),h[k]=dt,k===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=dt),k===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function Dt(k,dt){let V=d,Q=!1;if(k){V=u.get(dt),V===void 0&&(V=[],u.set(dt,V));let ht=k.textures;if(V.length!==ht.length||V[0]!==n.COLOR_ATTACHMENT0){for(let ft=0,te=ht.length;ft<te;ft++)V[ft]=n.COLOR_ATTACHMENT0+ft;V.length=ht.length,Q=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,Q=!0);Q&&n.drawBuffers(V)}function jt(k){return f!==k?(n.useProgram(k),f=k,!0):!1}let fe={[zn]:n.FUNC_ADD,[Of]:n.FUNC_SUBTRACT,[kf]:n.FUNC_REVERSE_SUBTRACT};fe[Df]=n.MIN,fe[Nf]=n.MAX;let Qt={[Uf]:n.ZERO,[Bf]:n.ONE,[Ff]:n.SRC_COLOR,[El]:n.SRC_ALPHA,[Xf]:n.SRC_ALPHA_SATURATE,[Vf]:n.DST_COLOR,[zf]:n.DST_ALPHA,[Hf]:n.ONE_MINUS_SRC_COLOR,[wl]:n.ONE_MINUS_SRC_ALPHA,[Wf]:n.ONE_MINUS_DST_COLOR,[Gf]:n.ONE_MINUS_DST_ALPHA,[Kf]:n.CONSTANT_COLOR,[Yf]:n.ONE_MINUS_CONSTANT_COLOR,[qf]:n.CONSTANT_ALPHA,[$f]:n.ONE_MINUS_CONSTANT_ALPHA};function I(k,dt,V,Q,ht,ft,te,Pe,li,re){if(k===bn){g===!0&&(_t(n.BLEND),g=!1);return}if(g===!1&&(Mt(n.BLEND),g=!0),k!==Pf){if(k!==_||re!==P){if((p!==zn||b!==zn)&&(n.blendEquation(n.FUNC_ADD),p=zn,b=zn),re)switch(k){case xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yo:n.blendFunc(n.ONE,n.ONE);break;case Yh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Yh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}m=null,M=null,A=null,O=null,C.set(0,0,0),R=0,_=k,P=re}return}ht=ht||dt,ft=ft||V,te=te||Q,(dt!==p||ht!==b)&&(n.blendEquationSeparate(fe[dt],fe[ht]),p=dt,b=ht),(V!==m||Q!==M||ft!==A||te!==O)&&(n.blendFuncSeparate(Qt[V],Qt[Q],Qt[ft],Qt[te]),m=V,M=Q,A=ft,O=te),(Pe.equals(C)===!1||li!==R)&&(n.blendColor(Pe.r,Pe.g,Pe.b,li),C.copy(Pe),R=li),_=k,P=!1}function yi(k,dt){k.side===ui?_t(n.CULL_FACE):Mt(n.CULL_FACE);let V=k.side===Qe;dt&&(V=!V),Zt(V),k.blending===xs&&k.transparent===!1?I(bn):I(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),r.setFunc(k.depthFunc),r.setTest(k.depthTest),r.setMask(k.depthWrite),s.setMask(k.colorWrite);let Q=k.stencilWrite;o.setTest(Q),Q&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),xe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Mt(n.SAMPLE_ALPHA_TO_COVERAGE):_t(n.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(k){K!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),K=k)}function ee(k){k!==Cf?(Mt(n.CULL_FACE),k!==y&&(k===Kh?n.cullFace(n.BACK):k===Lf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_t(n.CULL_FACE),y=k}function Ut(k){k!==E&&(it&&n.lineWidth(k),E=k)}function xe(k,dt,V){k?(Mt(n.POLYGON_OFFSET_FILL),(W!==dt||G!==V)&&(n.polygonOffset(dt,V),W=dt,G=V)):_t(n.POLYGON_OFFSET_FILL)}function Ht(k){k?Mt(n.SCISSOR_TEST):_t(n.SCISSOR_TEST)}function T(k){k===void 0&&(k=n.TEXTURE0+Y-1),X!==k&&(n.activeTexture(k),X=k)}function x(k,dt,V){V===void 0&&(X===null?V=n.TEXTURE0+Y-1:V=X);let Q=mt[V];Q===void 0&&(Q={type:void 0,texture:void 0},mt[V]=Q),(Q.type!==k||Q.texture!==dt)&&(X!==V&&(n.activeTexture(V),X=V),n.bindTexture(k,dt||st[k]),Q.type=k,Q.texture=dt)}function U(){let k=mt[X];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{n.compressedTexImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function vt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function rt(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(k){se.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),se.copy(k))}function xt(k){ue.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),ue.copy(k))}function Jt(k,dt){let V=l.get(dt);V===void 0&&(V=new WeakMap,l.set(dt,V));let Q=V.get(k);Q===void 0&&(Q=n.getUniformBlockIndex(dt,k.name),V.set(k,Q))}function Gt(k,dt){let Q=l.get(dt).get(k);a.get(dt)!==Q&&(n.uniformBlockBinding(dt,Q,k.__bindingPointIndex),a.set(dt,Q))}function ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},X=null,mt={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,M=null,b=null,A=null,O=null,C=new Tt(0,0,0),R=0,P=!1,K=null,y=null,E=null,W=null,G=null,se.set(0,0,n.canvas.width,n.canvas.height),ue.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Mt,disable:_t,bindFramebuffer:zt,drawBuffers:Dt,useProgram:jt,setBlending:I,setMaterial:yi,setFlipSided:Zt,setCullFace:ee,setLineWidth:Ut,setPolygonOffset:xe,setScissorTest:Ht,activeTexture:T,bindTexture:x,unbindTexture:U,compressedTexImage2D:J,compressedTexImage3D:et,texImage2D:yt,texImage3D:Bt,updateUBOMapping:Jt,uniformBlockBinding:Gt,texStorage2D:ie,texStorage3D:rt,texSubImage2D:Z,texSubImage3D:Rt,compressedTexSubImage2D:ct,compressedTexSubImage3D:vt,scissor:Ft,viewport:xt,reset:ge}}function Bu(n,t,e,i){let s=ov(i);switch(e){case td:return n*t;case id:return n*t;case nd:return n*t*2;case Xo:return n*t/s.components*s.byteLength;case Yc:return n*t/s.components*s.byteLength;case sd:return n*t*2/s.components*s.byteLength;case qc:return n*t*2/s.components*s.byteLength;case ed:return n*t*3/s.components*s.byteLength;case Xe:return n*t*4/s.components*s.byteLength;case $c:return n*t*4/s.components*s.byteLength;case uo:case fo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case po:case mo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ul:case Fl:return Math.max(n,16)*Math.max(t,8)/4;case Nl:case Bl:return Math.max(n,8)*Math.max(t,8)/2;case Hl:case zl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Vl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ql:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case $l:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case jl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case tc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ec:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ic:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case go:case nc:case sc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case rd:case rc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case oc:case ac:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ov(n){switch(n){case $e:case Ju:return{byteLength:1,components:1};case ur:case ju:case vr:return{byteLength:2,components:1};case Xc:case Kc:return{byteLength:2,components:4};case ln:case Wc:case on:return{byteLength:4,components:1};case Qu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function av(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return f?new OffscreenCanvas(T,x):wo("canvas")}function _(T,x,U){let J=1,et=Ht(T);if((et.width>U||et.height>U)&&(J=U/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let Z=Math.floor(J*et.width),Rt=Math.floor(J*et.height);u===void 0&&(u=g(Z,Rt));let ct=x?g(Z,Rt):u;return ct.width=Z,ct.height=Rt,ct.getContext("2d").drawImage(T,0,0,Z,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+Rt+")."),ct}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),T;return T}function p(T){return T.generateMipmaps&&T.minFilter!==oe&&T.minFilter!==We}function m(T){n.generateMipmap(T)}function M(T,x,U,J,et=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Z=x;if(x===n.RED&&(U===n.FLOAT&&(Z=n.R32F),U===n.HALF_FLOAT&&(Z=n.R16F),U===n.UNSIGNED_BYTE&&(Z=n.R8)),x===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(Z=n.R8UI),U===n.UNSIGNED_SHORT&&(Z=n.R16UI),U===n.UNSIGNED_INT&&(Z=n.R32UI),U===n.BYTE&&(Z=n.R8I),U===n.SHORT&&(Z=n.R16I),U===n.INT&&(Z=n.R32I)),x===n.RG&&(U===n.FLOAT&&(Z=n.RG32F),U===n.HALF_FLOAT&&(Z=n.RG16F),U===n.UNSIGNED_BYTE&&(Z=n.RG8)),x===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(Z=n.RG8UI),U===n.UNSIGNED_SHORT&&(Z=n.RG16UI),U===n.UNSIGNED_INT&&(Z=n.RG32UI),U===n.BYTE&&(Z=n.RG8I),U===n.SHORT&&(Z=n.RG16I),U===n.INT&&(Z=n.RG32I)),x===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),U===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),U===n.UNSIGNED_INT&&(Z=n.RGB32UI),U===n.BYTE&&(Z=n.RGB8I),U===n.SHORT&&(Z=n.RGB16I),U===n.INT&&(Z=n.RGB32I)),x===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),U===n.UNSIGNED_INT&&(Z=n.RGBA32UI),U===n.BYTE&&(Z=n.RGBA8I),U===n.SHORT&&(Z=n.RGBA16I),U===n.INT&&(Z=n.RGBA32I)),x===n.RGB&&U===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),x===n.RGBA){let Rt=et?bo:he.getTransfer(J);U===n.FLOAT&&(Z=n.RGBA32F),U===n.HALF_FLOAT&&(Z=n.RGBA16F),U===n.UNSIGNED_BYTE&&(Z=Rt===Se?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function b(T,x){let U;return T?x===null||x===ln||x===As?U=n.DEPTH24_STENCIL8:x===on?U=n.DEPTH32F_STENCIL8:x===ur&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ln||x===As?U=n.DEPTH_COMPONENT24:x===on?U=n.DEPTH_COMPONENT32F:x===ur&&(U=n.DEPTH_COMPONENT16),U}function A(T,x){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==oe&&T.minFilter!==We?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function O(T){let x=T.target;x.removeEventListener("dispose",O),R(x),x.isVideoTexture&&h.delete(x)}function C(T){let x=T.target;x.removeEventListener("dispose",C),K(x)}function R(T){let x=i.get(T);if(x.__webglInit===void 0)return;let U=T.source,J=d.get(U);if(J){let et=J[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&P(T),Object.keys(J).length===0&&d.delete(U)}i.remove(T)}function P(T){let x=i.get(T);n.deleteTexture(x.__webglTexture);let U=T.source,J=d.get(U);delete J[x.__cacheKey],o.memory.textures--}function K(T){let x=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let et=0;et<x.__webglFramebuffer[J].length;et++)n.deleteFramebuffer(x.__webglFramebuffer[J][et]);else n.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)n.deleteFramebuffer(x.__webglFramebuffer[J]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let U=T.textures;for(let J=0,et=U.length;J<et;J++){let Z=i.get(U[J]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(U[J])}i.remove(T)}let y=0;function E(){y=0}function W(){let T=y;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),y+=1,T}function G(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function Y(T,x){let U=i.get(T);if(T.isVideoTexture&&Ut(T),T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){let J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(U,T,x);return}}e.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+x)}function it(T,x){let U=i.get(T);if(T.version>0&&U.__version!==T.version){ue(U,T,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+x)}function z(T,x){let U=i.get(T);if(T.version>0&&U.__version!==T.version){ue(U,T,x);return}e.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+x)}function ot(T,x){let U=i.get(T);if(T.version>0&&U.__version!==T.version){$(U,T,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+x)}let X={[Hi]:n.REPEAT,[di]:n.CLAMP_TO_EDGE,[Dl]:n.MIRRORED_REPEAT},mt={[oe]:n.NEAREST,[rp]:n.NEAREST_MIPMAP_NEAREST,[Or]:n.NEAREST_MIPMAP_LINEAR,[We]:n.LINEAR,[Wa]:n.LINEAR_MIPMAP_NEAREST,[rn]:n.LINEAR_MIPMAP_LINEAR},gt={[cp]:n.NEVER,[mp]:n.ALWAYS,[hp]:n.LESS,[ad]:n.LEQUAL,[up]:n.EQUAL,[pp]:n.GEQUAL,[dp]:n.GREATER,[fp]:n.NOTEQUAL};function At(T,x){if(x.type===on&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===We||x.magFilter===Wa||x.magFilter===Or||x.magFilter===rn||x.minFilter===We||x.minFilter===Wa||x.minFilter===Or||x.minFilter===rn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,X[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,X[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,X[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,mt[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,mt[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,gt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===oe||x.minFilter!==Or&&x.minFilter!==rn||x.type===on&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function se(T,x){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",O));let J=x.source,et=d.get(J);et===void 0&&(et={},d.set(J,et));let Z=G(x);if(Z!==T.__cacheKey){et[Z]===void 0&&(et[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),et[Z].usedTimes++;let Rt=et[T.__cacheKey];Rt!==void 0&&(et[T.__cacheKey].usedTimes--,Rt.usedTimes===0&&P(x)),T.__cacheKey=Z,T.__webglTexture=et[Z].texture}return U}function ue(T,x,U){let J=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=n.TEXTURE_3D);let et=se(T,x),Z=x.source;e.bindTexture(J,T.__webglTexture,n.TEXTURE0+U);let Rt=i.get(Z);if(Z.version!==Rt.__version||et===!0){e.activeTexture(n.TEXTURE0+U);let ct=he.getPrimaries(he.workingColorSpace),vt=x.colorSpace===xn?null:he.getPrimaries(x.colorSpace),ie=x.colorSpace===xn||ct===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let rt=_(x.image,!1,s.maxTextureSize);rt=xe(x,rt);let yt=r.convert(x.format,x.colorSpace),Bt=r.convert(x.type),Ft=M(x.internalFormat,yt,Bt,x.colorSpace,x.isVideoTexture);At(J,x);let xt,Jt=x.mipmaps,Gt=x.isVideoTexture!==!0,ge=Rt.__version===void 0||et===!0,k=Z.dataReady,dt=A(x,rt);if(x.isDepthTexture)Ft=b(x.format===Ts,x.type),ge&&(Gt?e.texStorage2D(n.TEXTURE_2D,1,Ft,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,Ft,rt.width,rt.height,0,yt,Bt,null));else if(x.isDataTexture)if(Jt.length>0){Gt&&ge&&e.texStorage2D(n.TEXTURE_2D,dt,Ft,Jt[0].width,Jt[0].height);for(let V=0,Q=Jt.length;V<Q;V++)xt=Jt[V],Gt?k&&e.texSubImage2D(n.TEXTURE_2D,V,0,0,xt.width,xt.height,yt,Bt,xt.data):e.texImage2D(n.TEXTURE_2D,V,Ft,xt.width,xt.height,0,yt,Bt,xt.data);x.generateMipmaps=!1}else Gt?(ge&&e.texStorage2D(n.TEXTURE_2D,dt,Ft,rt.width,rt.height),k&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,rt.width,rt.height,yt,Bt,rt.data)):e.texImage2D(n.TEXTURE_2D,0,Ft,rt.width,rt.height,0,yt,Bt,rt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Gt&&ge&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Ft,Jt[0].width,Jt[0].height,rt.depth);for(let V=0,Q=Jt.length;V<Q;V++)if(xt=Jt[V],x.format!==Xe)if(yt!==null)if(Gt){if(k)if(x.layerUpdates.size>0){let ht=Bu(xt.width,xt.height,x.format,x.type);for(let ft of x.layerUpdates){let te=xt.data.subarray(ft*ht/xt.data.BYTES_PER_ELEMENT,(ft+1)*ht/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,ft,xt.width,xt.height,1,yt,te,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,xt.width,xt.height,rt.depth,yt,xt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,Ft,xt.width,xt.height,rt.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?k&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,xt.width,xt.height,rt.depth,yt,Bt,xt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,V,Ft,xt.width,xt.height,rt.depth,0,yt,Bt,xt.data)}else{Gt&&ge&&e.texStorage2D(n.TEXTURE_2D,dt,Ft,Jt[0].width,Jt[0].height);for(let V=0,Q=Jt.length;V<Q;V++)xt=Jt[V],x.format!==Xe?yt!==null?Gt?k&&e.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,xt.width,xt.height,yt,xt.data):e.compressedTexImage2D(n.TEXTURE_2D,V,Ft,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?k&&e.texSubImage2D(n.TEXTURE_2D,V,0,0,xt.width,xt.height,yt,Bt,xt.data):e.texImage2D(n.TEXTURE_2D,V,Ft,xt.width,xt.height,0,yt,Bt,xt.data)}else if(x.isDataArrayTexture)if(Gt){if(ge&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Ft,rt.width,rt.height,rt.depth),k)if(x.layerUpdates.size>0){let V=Bu(rt.width,rt.height,x.format,x.type);for(let Q of x.layerUpdates){let ht=rt.data.subarray(Q*V/rt.data.BYTES_PER_ELEMENT,(Q+1)*V/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,rt.width,rt.height,1,yt,Bt,ht)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,yt,Bt,rt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ft,rt.width,rt.height,rt.depth,0,yt,Bt,rt.data);else if(x.isData3DTexture)Gt?(ge&&e.texStorage3D(n.TEXTURE_3D,dt,Ft,rt.width,rt.height,rt.depth),k&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,yt,Bt,rt.data)):e.texImage3D(n.TEXTURE_3D,0,Ft,rt.width,rt.height,rt.depth,0,yt,Bt,rt.data);else if(x.isFramebufferTexture){if(ge)if(Gt)e.texStorage2D(n.TEXTURE_2D,dt,Ft,rt.width,rt.height);else{let V=rt.width,Q=rt.height;for(let ht=0;ht<dt;ht++)e.texImage2D(n.TEXTURE_2D,ht,Ft,V,Q,0,yt,Bt,null),V>>=1,Q>>=1}}else if(Jt.length>0){if(Gt&&ge){let V=Ht(Jt[0]);e.texStorage2D(n.TEXTURE_2D,dt,Ft,V.width,V.height)}for(let V=0,Q=Jt.length;V<Q;V++)xt=Jt[V],Gt?k&&e.texSubImage2D(n.TEXTURE_2D,V,0,0,yt,Bt,xt):e.texImage2D(n.TEXTURE_2D,V,Ft,yt,Bt,xt);x.generateMipmaps=!1}else if(Gt){if(ge){let V=Ht(rt);e.texStorage2D(n.TEXTURE_2D,dt,Ft,V.width,V.height)}k&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,yt,Bt,rt)}else e.texImage2D(n.TEXTURE_2D,0,Ft,yt,Bt,rt);p(x)&&m(J),Rt.__version=Z.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function $(T,x,U){if(x.image.length!==6)return;let J=se(T,x),et=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+U);let Z=i.get(et);if(et.version!==Z.__version||J===!0){e.activeTexture(n.TEXTURE0+U);let Rt=he.getPrimaries(he.workingColorSpace),ct=x.colorSpace===xn?null:he.getPrimaries(x.colorSpace),vt=x.colorSpace===xn||Rt===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let ie=x.isCompressedTexture||x.image[0].isCompressedTexture,rt=x.image[0]&&x.image[0].isDataTexture,yt=[];for(let Q=0;Q<6;Q++)!ie&&!rt?yt[Q]=_(x.image[Q],!0,s.maxCubemapSize):yt[Q]=rt?x.image[Q].image:x.image[Q],yt[Q]=xe(x,yt[Q]);let Bt=yt[0],Ft=r.convert(x.format,x.colorSpace),xt=r.convert(x.type),Jt=M(x.internalFormat,Ft,xt,x.colorSpace),Gt=x.isVideoTexture!==!0,ge=Z.__version===void 0||J===!0,k=et.dataReady,dt=A(x,Bt);At(n.TEXTURE_CUBE_MAP,x);let V;if(ie){Gt&&ge&&e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,Jt,Bt.width,Bt.height);for(let Q=0;Q<6;Q++){V=yt[Q].mipmaps;for(let ht=0;ht<V.length;ht++){let ft=V[ht];x.format!==Xe?Ft!==null?Gt?k&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht,0,0,ft.width,ft.height,Ft,ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht,Jt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht,0,0,ft.width,ft.height,Ft,xt,ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht,Jt,ft.width,ft.height,0,Ft,xt,ft.data)}}}else{if(V=x.mipmaps,Gt&&ge){V.length>0&&dt++;let Q=Ht(yt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,Jt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(rt){Gt?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,yt[Q].width,yt[Q].height,Ft,xt,yt[Q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Jt,yt[Q].width,yt[Q].height,0,Ft,xt,yt[Q].data);for(let ht=0;ht<V.length;ht++){let te=V[ht].image[Q].image;Gt?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht+1,0,0,te.width,te.height,Ft,xt,te.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht+1,Jt,te.width,te.height,0,Ft,xt,te.data)}}else{Gt?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ft,xt,yt[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Jt,Ft,xt,yt[Q]);for(let ht=0;ht<V.length;ht++){let ft=V[ht];Gt?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht+1,0,0,Ft,xt,ft.image[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht+1,Jt,Ft,xt,ft.image[Q])}}}p(x)&&m(n.TEXTURE_CUBE_MAP),Z.__version=et.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function st(T,x,U,J,et,Z){let Rt=r.convert(U.format,U.colorSpace),ct=r.convert(U.type),vt=M(U.internalFormat,Rt,ct,U.colorSpace);if(!i.get(x).__hasExternalTextures){let rt=Math.max(1,x.width>>Z),yt=Math.max(1,x.height>>Z);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,vt,rt,yt,x.depth,0,Rt,ct,null):e.texImage2D(et,Z,vt,rt,yt,0,Rt,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),ee(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,et,i.get(U).__webglTexture,0,Zt(x)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,et,i.get(U).__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Mt(T,x,U){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){let J=x.depthTexture,et=J&&J.isDepthTexture?J.type:null,Z=b(x.stencilBuffer,et),Rt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=Zt(x);ee(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,Z,x.width,x.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,Z,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Z,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Rt,n.RENDERBUFFER,T)}else{let J=x.textures;for(let et=0;et<J.length;et++){let Z=J[et],Rt=r.convert(Z.format,Z.colorSpace),ct=r.convert(Z.type),vt=M(Z.internalFormat,Rt,ct,Z.colorSpace),ie=Zt(x);U&&ee(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,vt,x.width,x.height):ee(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,vt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,vt,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _t(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);let J=i.get(x.depthTexture).__webglTexture,et=Zt(x);if(x.depthTexture.format===Mn)ee(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(x.depthTexture.format===Ts)ee(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function zt(T){let x=i.get(T),U=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let J=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),J){let et=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,J.removeEventListener("dispose",et)};J.addEventListener("dispose",et),x.__depthDisposeCallback=et}x.__boundDepthTexture=J}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");_t(x.__webglFramebuffer,T)}else if(U){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]===void 0)x.__webglDepthbuffer[J]=n.createRenderbuffer(),Mt(x.__webglDepthbuffer[J],T,!1);else{let et=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Mt(x.__webglDepthbuffer,T,!1);else{let J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,et)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Dt(T,x,U){let J=i.get(T);x!==void 0&&st(J.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&zt(T)}function jt(T){let x=T.texture,U=i.get(T),J=i.get(x);T.addEventListener("dispose",C);let et=T.textures,Z=T.isWebGLCubeRenderTarget===!0,Rt=et.length>1;if(Rt||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=x.version,o.memory.textures++),Z){U.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[ct]=[];for(let vt=0;vt<x.mipmaps.length;vt++)U.__webglFramebuffer[ct][vt]=n.createFramebuffer()}else U.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)U.__webglFramebuffer[ct]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(Rt)for(let ct=0,vt=et.length;ct<vt;ct++){let ie=i.get(et[ct]);ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&ee(T)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ct=0;ct<et.length;ct++){let vt=et[ct];U.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[ct]);let ie=r.convert(vt.format,vt.colorSpace),rt=r.convert(vt.type),yt=M(vt.internalFormat,ie,rt,vt.colorSpace,T.isXRRenderTarget===!0),Bt=Zt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt,yt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,U.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Mt(U.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),At(n.TEXTURE_CUBE_MAP,x);for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let vt=0;vt<x.mipmaps.length;vt++)st(U.__webglFramebuffer[ct][vt],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,vt);else st(U.__webglFramebuffer[ct],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);p(x)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let ct=0,vt=et.length;ct<vt;ct++){let ie=et[ct],rt=i.get(ie);e.bindTexture(n.TEXTURE_2D,rt.__webglTexture),At(n.TEXTURE_2D,ie),st(U.__webglFramebuffer,T,ie,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),p(ie)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ct=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,J.__webglTexture),At(ct,x),x.mipmaps&&x.mipmaps.length>0)for(let vt=0;vt<x.mipmaps.length;vt++)st(U.__webglFramebuffer[vt],T,x,n.COLOR_ATTACHMENT0,ct,vt);else st(U.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,ct,0);p(x)&&m(ct),e.unbindTexture()}T.depthBuffer&&zt(T)}function fe(T){let x=T.textures;for(let U=0,J=x.length;U<J;U++){let et=x[U];if(p(et)){let Z=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Rt=i.get(et).__webglTexture;e.bindTexture(Z,Rt),m(Z),e.unbindTexture()}}}let Qt=[],I=[];function yi(T){if(T.samples>0){if(ee(T)===!1){let x=T.textures,U=T.width,J=T.height,et=n.COLOR_BUFFER_BIT,Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Rt=i.get(T),ct=x.length>1;if(ct)for(let vt=0;vt<x.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let vt=0;vt<x.length;vt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Rt.__webglColorRenderbuffer[vt]);let ie=i.get(x[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,U,J,0,0,U,J,et,n.NEAREST),l===!0&&(Qt.length=0,I.length=0,Qt.push(n.COLOR_ATTACHMENT0+vt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Qt.push(Z),I.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Qt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let vt=0;vt<x.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,Rt.__webglColorRenderbuffer[vt]);let ie=i.get(x[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,ie,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Zt(T){return Math.min(s.maxSamples,T.samples)}function ee(T){let x=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ut(T){let x=o.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function xe(T,x){let U=T.colorSpace,J=T.format,et=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||U!==Rn&&U!==xn&&(he.getTransfer(U)===Se?(J!==Xe||et!==$e)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),x}function Ht(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=E,this.setTexture2D=Y,this.setTexture2DArray=it,this.setTexture3D=z,this.setTextureCube=ot,this.rebindTextures=Dt,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=yi,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=ee}function lv(n,t){function e(i,s=xn){let r,o=he.getTransfer(s);if(i===$e)return n.UNSIGNED_BYTE;if(i===Xc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Qu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ju)return n.BYTE;if(i===ju)return n.SHORT;if(i===ur)return n.UNSIGNED_SHORT;if(i===Wc)return n.INT;if(i===ln)return n.UNSIGNED_INT;if(i===on)return n.FLOAT;if(i===vr)return n.HALF_FLOAT;if(i===td)return n.ALPHA;if(i===ed)return n.RGB;if(i===Xe)return n.RGBA;if(i===id)return n.LUMINANCE;if(i===nd)return n.LUMINANCE_ALPHA;if(i===Mn)return n.DEPTH_COMPONENT;if(i===Ts)return n.DEPTH_STENCIL;if(i===Xo)return n.RED;if(i===Yc)return n.RED_INTEGER;if(i===sd)return n.RG;if(i===qc)return n.RG_INTEGER;if(i===$c)return n.RGBA_INTEGER;if(i===uo||i===fo||i===po||i===mo)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nl||i===Ul||i===Bl||i===Fl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hl||i===zl||i===Gl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Hl||i===zl)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Gl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vl||i===Wl||i===Xl||i===Kl||i===Yl||i===ql||i===$l||i===Zl||i===Jl||i===jl||i===Ql||i===tc||i===ec||i===ic)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Vl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ql)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$l)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ql)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ec)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ic)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===go||i===nc||i===sc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===go)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rd||i===rc||i===oc||i===ac)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===go)return r.COMPRESSED_RED_RGTC1_EXT;if(i===rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===As?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Mc=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Me=class extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},cv={type:"move"},hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,i),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Me;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},hv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uv=`
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

}`,Ec=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new fi,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new De({vertexShader:hv,fragmentShader:uv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Kt(new Gi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wc=class extends wn{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,_=new Ec,p=e.getContextAttributes(),m=null,M=null,b=[],A=[],O=new Xt,C=null,R=new qe;R.layers.enable(1),R.viewport=new Re;let P=new qe;P.layers.enable(2),P.viewport=new Re;let K=[R,P],y=new Mc;y.layers.enable(1),y.layers.enable(2);let E=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let st=b[$];return st===void 0&&(st=new hr,b[$]=st),st.getTargetRaySpace()},this.getControllerGrip=function($){let st=b[$];return st===void 0&&(st=new hr,b[$]=st),st.getGripSpace()},this.getHand=function($){let st=b[$];return st===void 0&&(st=new hr,b[$]=st),st.getHandSpace()};function G($){let st=A.indexOf($.inputSource);if(st===-1)return;let Mt=b[st];Mt!==void 0&&(Mt.update($.inputSource,$.frame,c||o),Mt.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",it);for(let $=0;$<b.length;$++){let st=A[$];st!==null&&(A[$]=null,b[$].disconnect(st))}E=null,W=null,_.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,M=null,ue.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",it),p.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){let st={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Oi(f.framebufferWidth,f.framebufferHeight,{format:Xe,type:$e,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let st=null,Mt=null,_t=null;p.depth&&(_t=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=p.stencil?Ts:Mn,Mt=p.stencil?As:ln);let zt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(zt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Oi(d.textureWidth,d.textureHeight,{format:Xe,type:$e,depthTexture:new Is(d.textureWidth,d.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ue.setContext(s),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function it($){for(let st=0;st<$.removed.length;st++){let Mt=$.removed[st],_t=A.indexOf(Mt);_t>=0&&(A[_t]=null,b[_t].disconnect(Mt))}for(let st=0;st<$.added.length;st++){let Mt=$.added[st],_t=A.indexOf(Mt);if(_t===-1){for(let Dt=0;Dt<b.length;Dt++)if(Dt>=A.length){A.push(Mt),_t=Dt;break}else if(A[Dt]===null){A[Dt]=Mt,_t=Dt;break}if(_t===-1)break}let zt=b[_t];zt&&zt.connect(Mt)}}let z=new L,ot=new L;function X($,st,Mt){z.setFromMatrixPosition(st.matrixWorld),ot.setFromMatrixPosition(Mt.matrixWorld);let _t=z.distanceTo(ot),zt=st.projectionMatrix.elements,Dt=Mt.projectionMatrix.elements,jt=zt[14]/(zt[10]-1),fe=zt[14]/(zt[10]+1),Qt=(zt[9]+1)/zt[5],I=(zt[9]-1)/zt[5],yi=(zt[8]-1)/zt[0],Zt=(Dt[8]+1)/Dt[0],ee=jt*yi,Ut=jt*Zt,xe=_t/(-yi+Zt),Ht=xe*-yi;if(st.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ht),$.translateZ(xe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),zt[10]===-1)$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let T=jt+xe,x=fe+xe,U=ee-Ht,J=Ut+(_t-Ht),et=Qt*fe/x*T,Z=I*fe/x*T;$.projectionMatrix.makePerspective(U,J,et,Z,T,x),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function mt($,st){st===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(st.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let st=$.near,Mt=$.far;_.texture!==null&&(_.depthNear>0&&(st=_.depthNear),_.depthFar>0&&(Mt=_.depthFar)),y.near=P.near=R.near=st,y.far=P.far=R.far=Mt,(E!==y.near||W!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,W=y.far);let _t=$.parent,zt=y.cameras;mt(y,_t);for(let Dt=0;Dt<zt.length;Dt++)mt(zt[Dt],_t);zt.length===2?X(y,R,P):y.projectionMatrix.copy(R.projectionMatrix),gt($,y,_t)};function gt($,st,Mt){Mt===null?$.matrix.copy(st.matrixWorld):($.matrix.copy(Mt.matrixWorld),$.matrix.invert(),$.matrix.multiply(st.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=hc*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let At=null;function se($,st){if(h=st.getViewerPose(c||o),g=st,h!==null){let Mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let _t=!1;Mt.length!==y.cameras.length&&(y.cameras.length=0,_t=!0);for(let Dt=0;Dt<Mt.length;Dt++){let jt=Mt[Dt],fe=null;if(f!==null)fe=f.getViewport(jt);else{let I=u.getViewSubImage(d,jt);fe=I.viewport,Dt===0&&(t.setRenderTargetTextures(M,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(M))}let Qt=K[Dt];Qt===void 0&&(Qt=new qe,Qt.layers.enable(Dt),Qt.viewport=new Re,K[Dt]=Qt),Qt.matrix.fromArray(jt.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(jt.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(fe.x,fe.y,fe.width,fe.height),Dt===0&&(y.matrix.copy(Qt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),_t===!0&&y.cameras.push(Qt)}let zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){let Dt=u.getDepthInformation(Mt[0]);Dt&&Dt.isValid&&Dt.texture&&_.init(t,Dt,s.renderState)}}for(let Mt=0;Mt<b.length;Mt++){let _t=A[Mt],zt=b[Mt];_t!==null&&zt!==void 0&&zt.update(_t,st,c||o)}At&&At($,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),g=null}let ue=new ud;ue.setAnimationLoop(se),this.setAnimationLoop=function($){At=$},this.dispose=function(){}}},Fn=new wi,dv=new ne;function fv(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,hd(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,b,A){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,A)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,b):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Qe&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Qe&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=t.get(m),b=M.envMap,A=M.envMapRotation;b&&(p.envMap.value=b,Fn.copy(A),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),p.envMapRotation.value.setFromMatrix4(dv.makeRotationFromEuler(Fn)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=b*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Qe&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function pv(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){let A=b.program;i.uniformBlockBinding(M,A)}function c(M,b){let A=s[M.id];A===void 0&&(g(M),A=h(M),s[M.id]=A,M.addEventListener("dispose",p));let O=b.program;i.updateUBOMapping(M,O);let C=t.render.frame;r[M.id]!==C&&(d(M),r[M.id]=C)}function h(M){let b=u();M.__bindingPointIndex=b;let A=n.createBuffer(),O=M.__size,C=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,O,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,A),A}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let b=s[M.id],A=M.uniforms,O=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let C=0,R=A.length;C<R;C++){let P=Array.isArray(A[C])?A[C]:[A[C]];for(let K=0,y=P.length;K<y;K++){let E=P[K];if(f(E,C,K,O)===!0){let W=E.__offset,G=Array.isArray(E.value)?E.value:[E.value],Y=0;for(let it=0;it<G.length;it++){let z=G[it],ot=_(z);typeof z=="number"||typeof z=="boolean"?(E.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,W+Y,E.__data)):z.isMatrix3?(E.__data[0]=z.elements[0],E.__data[1]=z.elements[1],E.__data[2]=z.elements[2],E.__data[3]=0,E.__data[4]=z.elements[3],E.__data[5]=z.elements[4],E.__data[6]=z.elements[5],E.__data[7]=0,E.__data[8]=z.elements[6],E.__data[9]=z.elements[7],E.__data[10]=z.elements[8],E.__data[11]=0):(z.toArray(E.__data,Y),Y+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,b,A,O){let C=M.value,R=b+"_"+A;if(O[R]===void 0)return typeof C=="number"||typeof C=="boolean"?O[R]=C:O[R]=C.clone(),!0;{let P=O[R];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return O[R]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function g(M){let b=M.uniforms,A=0,O=16;for(let R=0,P=b.length;R<P;R++){let K=Array.isArray(b[R])?b[R]:[b[R]];for(let y=0,E=K.length;y<E;y++){let W=K[y],G=Array.isArray(W.value)?W.value:[W.value];for(let Y=0,it=G.length;Y<it;Y++){let z=G[Y],ot=_(z),X=A%O,mt=X%ot.boundary,gt=X+mt;A+=mt,gt!==0&&O-gt<ot.storage&&(A+=O-gt),W.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=A,A+=ot.storage}}}let C=A%O;return C>0&&(A+=O-C),M.__size=A,M.__cache={},this}function _(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function p(M){let b=M.target;b.removeEventListener("dispose",p);let A=o.indexOf(b.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Oo=class{constructor(t={}){let{canvas:e=_p(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let f=new Uint32Array(4),g=new Int32Array(4),_=null,p=null,m=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_e,this.toneMapping=Sn,this.toneMappingExposure=1;let b=this,A=!1,O=0,C=0,R=null,P=-1,K=null,y=new Re,E=new Re,W=null,G=new Tt(0),Y=0,it=e.width,z=e.height,ot=1,X=null,mt=null,gt=new Re(0,0,it,z),At=new Re(0,0,it,z),se=!1,ue=new pr,$=!1,st=!1,Mt=new ne,_t=new ne,zt=new L,Dt=new Re,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function Qt(){return R===null?ot:1}let I=i;function yi(S,D){return e.getContext(S,D)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gc}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ft,!1),I===null){let D="webgl2";if(I=yi(D,S),I===null)throw yi(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Zt,ee,Ut,xe,Ht,T,x,U,J,et,Z,Rt,ct,vt,ie,rt,yt,Bt,Ft,xt,Jt,Gt,ge,k;function dt(){Zt=new Lg(I),Zt.init(),Gt=new lv(I,Zt),ee=new Eg(I,Zt,t,Gt),Ut=new rv(I),ee.reverseDepthBuffer&&Ut.buffers.depth.setReversed(!0),xe=new Og(I),Ht=new K_,T=new av(I,Zt,Ut,Ht,ee,Gt,xe),x=new Ag(b),U=new Cg(b),J=new Hp(I),ge=new Sg(I,J),et=new Ig(I,J,xe,ge),Z=new Dg(I,et,J,xe),Ft=new kg(I,ee,T),rt=new wg(Ht),Rt=new X_(b,x,U,Zt,ee,ge,rt),ct=new fv(b,Ht),vt=new q_,ie=new tv(Zt),Bt=new bg(b,x,U,Ut,Z,d,l),yt=new nv(b,Z,ee),k=new pv(I,xe,ee,Ut),xt=new Mg(I,Zt,xe),Jt=new Pg(I,Zt,xe),xe.programs=Rt.programs,b.capabilities=ee,b.extensions=Zt,b.properties=Ht,b.renderLists=vt,b.shadowMap=yt,b.state=Ut,b.info=xe}dt();let V=new wc(b,I);this.xr=V,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=Zt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Zt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(S){S!==void 0&&(ot=S,this.setSize(it,z,!1))},this.getSize=function(S){return S.set(it,z)},this.setSize=function(S,D,B=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}it=S,z=D,e.width=Math.floor(S*ot),e.height=Math.floor(D*ot),B===!0&&(e.style.width=S+"px",e.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(it*ot,z*ot).floor()},this.setDrawingBufferSize=function(S,D,B){it=S,z=D,ot=B,e.width=Math.floor(S*B),e.height=Math.floor(D*B),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(y)},this.getViewport=function(S){return S.copy(gt)},this.setViewport=function(S,D,B,F){S.isVector4?gt.set(S.x,S.y,S.z,S.w):gt.set(S,D,B,F),Ut.viewport(y.copy(gt).multiplyScalar(ot).round())},this.getScissor=function(S){return S.copy(At)},this.setScissor=function(S,D,B,F){S.isVector4?At.set(S.x,S.y,S.z,S.w):At.set(S,D,B,F),Ut.scissor(E.copy(At).multiplyScalar(ot).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(S){Ut.setScissorTest(se=S)},this.setOpaqueSort=function(S){X=S},this.setTransparentSort=function(S){mt=S},this.getClearColor=function(S){return S.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(S=!0,D=!0,B=!0){let F=0;if(S){let N=!1;if(R!==null){let at=R.texture.format;N=at===$c||at===qc||at===Yc}if(N){let at=R.texture.type,ut=at===$e||at===ln||at===ur||at===As||at===Xc||at===Kc,St=Bt.getClearColor(),Et=Bt.getClearAlpha(),Ot=St.r,Nt=St.g,Ct=St.b;ut?(f[0]=Ot,f[1]=Nt,f[2]=Ct,f[3]=Et,I.clearBufferuiv(I.COLOR,0,f)):(g[0]=Ot,g[1]=Nt,g[2]=Ct,g[3]=Et,I.clearBufferiv(I.COLOR,0,g))}else F|=I.COLOR_BUFFER_BIT}D&&(F|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(F|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),vt.dispose(),ie.dispose(),Ht.dispose(),x.dispose(),U.dispose(),Z.dispose(),ge.dispose(),k.dispose(),Rt.dispose(),V.dispose(),V.removeEventListener("sessionstart",Bh),V.removeEventListener("sessionend",Fh),On.stop()};function Q(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let S=xe.autoReset,D=yt.enabled,B=yt.autoUpdate,F=yt.needsUpdate,N=yt.type;dt(),xe.autoReset=S,yt.enabled=D,yt.autoUpdate=B,yt.needsUpdate=F,yt.type=N}function ft(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function te(S){let D=S.target;D.removeEventListener("dispose",te),Pe(D)}function Pe(S){li(S),Ht.remove(S)}function li(S){let D=Ht.get(S).programs;D!==void 0&&(D.forEach(function(B){Rt.releaseProgram(B)}),S.isShaderMaterial&&Rt.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,B,F,N,at){D===null&&(D=jt);let ut=N.isMesh&&N.matrixWorld.determinant()<0,St=wf(S,D,B,F,N);Ut.setMaterial(F,ut);let Et=B.index,Ot=1;if(F.wireframe===!0){if(Et=et.getWireframeAttribute(B),Et===void 0)return;Ot=2}let Nt=B.drawRange,Ct=B.attributes.position,de=Nt.start*Ot,be=(Nt.start+Nt.count)*Ot;at!==null&&(de=Math.max(de,at.start*Ot),be=Math.min(be,(at.start+at.count)*Ot)),Et!==null?(de=Math.max(de,0),be=Math.min(be,Et.count)):Ct!=null&&(de=Math.max(de,0),be=Math.min(be,Ct.count));let Te=be-de;if(Te<0||Te===1/0)return;ge.setup(N,F,St,B,Et);let xi,le=xt;if(Et!==null&&(xi=J.get(Et),le=Jt,le.setIndex(xi)),N.isMesh)F.wireframe===!0?(Ut.setLineWidth(F.wireframeLinewidth*Qt()),le.setMode(I.LINES)):le.setMode(I.TRIANGLES);else if(N.isLine){let Lt=F.linewidth;Lt===void 0&&(Lt=1),Ut.setLineWidth(Lt*Qt()),N.isLineSegments?le.setMode(I.LINES):N.isLineLoop?le.setMode(I.LINE_LOOP):le.setMode(I.LINE_STRIP)}else N.isPoints?le.setMode(I.POINTS):N.isSprite&&le.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)le.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Zt.get("WEBGL_multi_draw"))le.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Lt=N._multiDrawStarts,Ye=N._multiDrawCounts,ce=N._multiDrawCount,Ni=Et?J.get(Et).bytesPerElement:1,ts=Ht.get(F).currentProgram.getUniforms();for(let bi=0;bi<ce;bi++)ts.setValue(I,"_gl_DrawID",bi),le.render(Lt[bi]/Ni,Ye[bi])}else if(N.isInstancedMesh)le.renderInstances(de,Te,N.count);else if(B.isInstancedBufferGeometry){let Lt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ye=Math.min(B.instanceCount,Lt);le.renderInstances(de,Te,Ye)}else le.render(de,Te)};function re(S,D,B){S.transparent===!0&&S.side===ui&&S.forceSinglePass===!1?(S.side=Qe,S.needsUpdate=!0,Pr(S,D,B),S.side=Ei,S.needsUpdate=!0,Pr(S,D,B),S.side=ui):Pr(S,D,B)}this.compile=function(S,D,B=null){B===null&&(B=S),p=ie.get(B),p.init(D),M.push(p),B.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),S!==B&&S.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let F=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let at=N.material;if(at)if(Array.isArray(at))for(let ut=0;ut<at.length;ut++){let St=at[ut];re(St,B,N),F.add(St)}else re(at,B,N),F.add(at)}),M.pop(),p=null,F},this.compileAsync=function(S,D,B=null){let F=this.compile(S,D,B);return new Promise(N=>{function at(){if(F.forEach(function(ut){Ht.get(ut).currentProgram.isReady()&&F.delete(ut)}),F.size===0){N(S);return}setTimeout(at,10)}Zt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let ci=null;function $i(S){ci&&ci(S)}function Bh(){On.stop()}function Fh(){On.start()}let On=new ud;On.setAnimationLoop($i),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(S){ci=S,V.setAnimationLoop(S),S===null?On.stop():On.start()},V.addEventListener("sessionstart",Bh),V.addEventListener("sessionend",Fh),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(D),D=V.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,D,R),p=ie.get(S,M.length),p.init(D),M.push(p),_t.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ue.setFromProjectionMatrix(_t),st=this.localClippingEnabled,$=rt.init(this.clippingPlanes,st),_=vt.get(S,m.length),_.init(),m.push(_),V.enabled===!0&&V.isPresenting===!0){let at=b.xr.getDepthSensingMesh();at!==null&&Ha(at,D,-1/0,b.sortObjects)}Ha(S,D,0,b.sortObjects),_.finish(),b.sortObjects===!0&&_.sort(X,mt),fe=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,fe&&Bt.addToRenderList(_,S),this.info.render.frame++,$===!0&&rt.beginShadows();let B=p.state.shadowsArray;yt.render(B,S,D),$===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let F=_.opaque,N=_.transmissive;if(p.setupLights(),D.isArrayCamera){let at=D.cameras;if(N.length>0)for(let ut=0,St=at.length;ut<St;ut++){let Et=at[ut];zh(F,N,S,Et)}fe&&Bt.render(S);for(let ut=0,St=at.length;ut<St;ut++){let Et=at[ut];Hh(_,S,Et,Et.viewport)}}else N.length>0&&zh(F,N,S,D),fe&&Bt.render(S),Hh(_,S,D);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(b,S,D),ge.resetDefaultState(),P=-1,K=null,M.pop(),M.length>0?(p=M[M.length-1],$===!0&&rt.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Ha(S,D,B,F){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ue.intersectsSprite(S)){F&&Dt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(_t);let ut=Z.update(S),St=S.material;St.visible&&_.push(S,ut,St,B,Dt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ue.intersectsObject(S))){let ut=Z.update(S),St=S.material;if(F&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Dt.copy(S.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Dt.copy(ut.boundingSphere.center)),Dt.applyMatrix4(S.matrixWorld).applyMatrix4(_t)),Array.isArray(St)){let Et=ut.groups;for(let Ot=0,Nt=Et.length;Ot<Nt;Ot++){let Ct=Et[Ot],de=St[Ct.materialIndex];de&&de.visible&&_.push(S,ut,de,B,Dt.z,Ct)}}else St.visible&&_.push(S,ut,St,B,Dt.z,null)}}let at=S.children;for(let ut=0,St=at.length;ut<St;ut++)Ha(at[ut],D,B,F)}function Hh(S,D,B,F){let N=S.opaque,at=S.transmissive,ut=S.transparent;p.setupLightsView(B),$===!0&&rt.setGlobalState(b.clippingPlanes,B),F&&Ut.viewport(y.copy(F)),N.length>0&&Ir(N,D,B),at.length>0&&Ir(at,D,B),ut.length>0&&Ir(ut,D,B),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function zh(S,D,B,F){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[F.id]===void 0&&(p.state.transmissionRenderTarget[F.id]=new Oi(1,1,{generateMipmaps:!0,type:Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float")?vr:$e,minFilter:rn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));let at=p.state.transmissionRenderTarget[F.id],ut=F.viewport||y;at.setSize(ut.z,ut.w);let St=b.getRenderTarget();b.setRenderTarget(at),b.getClearColor(G),Y=b.getClearAlpha(),Y<1&&b.setClearColor(16777215,.5),b.clear(),fe&&Bt.render(B);let Et=b.toneMapping;b.toneMapping=Sn;let Ot=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),p.setupLightsView(F),$===!0&&rt.setGlobalState(b.clippingPlanes,F),Ir(S,B,F),T.updateMultisampleRenderTarget(at),T.updateRenderTargetMipmap(at),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let Ct=0,de=D.length;Ct<de;Ct++){let be=D[Ct],Te=be.object,xi=be.geometry,le=be.material,Lt=be.group;if(le.side===ui&&Te.layers.test(F.layers)){let Ye=le.side;le.side=Qe,le.needsUpdate=!0,Gh(Te,B,F,xi,le,Lt),le.side=Ye,le.needsUpdate=!0,Nt=!0}}Nt===!0&&(T.updateMultisampleRenderTarget(at),T.updateRenderTargetMipmap(at))}b.setRenderTarget(St),b.setClearColor(G,Y),Ot!==void 0&&(F.viewport=Ot),b.toneMapping=Et}function Ir(S,D,B){let F=D.isScene===!0?D.overrideMaterial:null;for(let N=0,at=S.length;N<at;N++){let ut=S[N],St=ut.object,Et=ut.geometry,Ot=F===null?ut.material:F,Nt=ut.group;St.layers.test(B.layers)&&Gh(St,D,B,Et,Ot,Nt)}}function Gh(S,D,B,F,N,at){S.onBeforeRender(b,D,B,F,N,at),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(b,D,B,F,S,at),N.transparent===!0&&N.side===ui&&N.forceSinglePass===!1?(N.side=Qe,N.needsUpdate=!0,b.renderBufferDirect(B,D,F,N,S,at),N.side=Ei,N.needsUpdate=!0,b.renderBufferDirect(B,D,F,N,S,at),N.side=ui):b.renderBufferDirect(B,D,F,N,S,at),S.onAfterRender(b,D,B,F,N,at)}function Pr(S,D,B){D.isScene!==!0&&(D=jt);let F=Ht.get(S),N=p.state.lights,at=p.state.shadowsArray,ut=N.state.version,St=Rt.getParameters(S,N.state,at,D,B),Et=Rt.getProgramCacheKey(St),Ot=F.programs;F.environment=S.isMeshStandardMaterial?D.environment:null,F.fog=D.fog,F.envMap=(S.isMeshStandardMaterial?U:x).get(S.envMap||F.environment),F.envMapRotation=F.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Ot===void 0&&(S.addEventListener("dispose",te),Ot=new Map,F.programs=Ot);let Nt=Ot.get(Et);if(Nt!==void 0){if(F.currentProgram===Nt&&F.lightsStateVersion===ut)return Wh(S,St),Nt}else St.uniforms=Rt.getUniforms(S),S.onBeforeCompile(St,b),Nt=Rt.acquireProgram(St,Et),Ot.set(Et,Nt),F.uniforms=St.uniforms;let Ct=F.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ct.clippingPlanes=rt.uniform),Wh(S,St),F.needsLights=Tf(S),F.lightsStateVersion=ut,F.needsLights&&(Ct.ambientLightColor.value=N.state.ambient,Ct.lightProbe.value=N.state.probe,Ct.directionalLights.value=N.state.directional,Ct.directionalLightShadows.value=N.state.directionalShadow,Ct.spotLights.value=N.state.spot,Ct.spotLightShadows.value=N.state.spotShadow,Ct.rectAreaLights.value=N.state.rectArea,Ct.ltc_1.value=N.state.rectAreaLTC1,Ct.ltc_2.value=N.state.rectAreaLTC2,Ct.pointLights.value=N.state.point,Ct.pointLightShadows.value=N.state.pointShadow,Ct.hemisphereLights.value=N.state.hemi,Ct.directionalShadowMap.value=N.state.directionalShadowMap,Ct.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ct.spotShadowMap.value=N.state.spotShadowMap,Ct.spotLightMatrix.value=N.state.spotLightMatrix,Ct.spotLightMap.value=N.state.spotLightMap,Ct.pointShadowMap.value=N.state.pointShadowMap,Ct.pointShadowMatrix.value=N.state.pointShadowMatrix),F.currentProgram=Nt,F.uniformsList=null,Nt}function Vh(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=Ss.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Wh(S,D){let B=Ht.get(S);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function wf(S,D,B,F,N){D.isScene!==!0&&(D=jt),T.resetTextureUnits();let at=D.fog,ut=F.isMeshStandardMaterial?D.environment:null,St=R===null?b.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Rn,Et=(F.isMeshStandardMaterial?U:x).get(F.envMap||ut),Ot=F.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Nt=!!B.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Ct=!!B.morphAttributes.position,de=!!B.morphAttributes.normal,be=!!B.morphAttributes.color,Te=Sn;F.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Te=b.toneMapping);let xi=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,le=xi!==void 0?xi.length:0,Lt=Ht.get(F),Ye=p.state.lights;if($===!0&&(st===!0||S!==K)){let Ii=S===K&&F.id===P;rt.setState(F,S,Ii)}let ce=!1;F.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Ye.state.version||Lt.outputColorSpace!==St||N.isBatchedMesh&&Lt.batching===!1||!N.isBatchedMesh&&Lt.batching===!0||N.isBatchedMesh&&Lt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Lt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Lt.instancing===!1||!N.isInstancedMesh&&Lt.instancing===!0||N.isSkinnedMesh&&Lt.skinning===!1||!N.isSkinnedMesh&&Lt.skinning===!0||N.isInstancedMesh&&Lt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Lt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Lt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Lt.instancingMorph===!1&&N.morphTexture!==null||Lt.envMap!==Et||F.fog===!0&&Lt.fog!==at||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==rt.numPlanes||Lt.numIntersection!==rt.numIntersection)||Lt.vertexAlphas!==Ot||Lt.vertexTangents!==Nt||Lt.morphTargets!==Ct||Lt.morphNormals!==de||Lt.morphColors!==be||Lt.toneMapping!==Te||Lt.morphTargetsCount!==le)&&(ce=!0):(ce=!0,Lt.__version=F.version);let Ni=Lt.currentProgram;ce===!0&&(Ni=Pr(F,D,N));let ts=!1,bi=!1,za=!1,Le=Ni.getUniforms(),fn=Lt.uniforms;if(Ut.useProgram(Ni.program)&&(ts=!0,bi=!0,za=!0),F.id!==P&&(P=F.id,bi=!0),ts||K!==S){ee.reverseDepthBuffer?(Mt.copy(S.projectionMatrix),yp(Mt),xp(Mt),Le.setValue(I,"projectionMatrix",Mt)):Le.setValue(I,"projectionMatrix",S.projectionMatrix),Le.setValue(I,"viewMatrix",S.matrixWorldInverse);let Ii=Le.map.cameraPosition;Ii!==void 0&&Ii.setValue(I,zt.setFromMatrixPosition(S.matrixWorld)),ee.logarithmicDepthBuffer&&Le.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Le.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),K!==S&&(K=S,bi=!0,za=!0)}if(N.isSkinnedMesh){Le.setOptional(I,N,"bindMatrix"),Le.setOptional(I,N,"bindMatrixInverse");let Ii=N.skeleton;Ii&&(Ii.boneTexture===null&&Ii.computeBoneTexture(),Le.setValue(I,"boneTexture",Ii.boneTexture,T))}N.isBatchedMesh&&(Le.setOptional(I,N,"batchingTexture"),Le.setValue(I,"batchingTexture",N._matricesTexture,T),Le.setOptional(I,N,"batchingIdTexture"),Le.setValue(I,"batchingIdTexture",N._indirectTexture,T),Le.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&Le.setValue(I,"batchingColorTexture",N._colorsTexture,T));let Ga=B.morphAttributes;if((Ga.position!==void 0||Ga.normal!==void 0||Ga.color!==void 0)&&Ft.update(N,B,Ni),(bi||Lt.receiveShadow!==N.receiveShadow)&&(Lt.receiveShadow=N.receiveShadow,Le.setValue(I,"receiveShadow",N.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(fn.envMap.value=Et,fn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&D.environment!==null&&(fn.envMapIntensity.value=D.environmentIntensity),bi&&(Le.setValue(I,"toneMappingExposure",b.toneMappingExposure),Lt.needsLights&&Af(fn,za),at&&F.fog===!0&&ct.refreshFogUniforms(fn,at),ct.refreshMaterialUniforms(fn,F,ot,z,p.state.transmissionRenderTarget[S.id]),Ss.upload(I,Vh(Lt),fn,T)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Ss.upload(I,Vh(Lt),fn,T),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Le.setValue(I,"center",N.center),Le.setValue(I,"modelViewMatrix",N.modelViewMatrix),Le.setValue(I,"normalMatrix",N.normalMatrix),Le.setValue(I,"modelMatrix",N.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){let Ii=F.uniformsGroups;for(let Va=0,Rf=Ii.length;Va<Rf;Va++){let Xh=Ii[Va];k.update(Xh,Ni),k.bind(Xh,Ni)}}return Ni}function Af(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function Tf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,D,B){Ht.get(S.texture).__webglTexture=D,Ht.get(S.depthTexture).__webglTexture=B;let F=Ht.get(S);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=B===void 0,F.__autoAllocateDepthBuffer||Zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,D){let B=Ht.get(S);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,B=0){R=S,O=D,C=B;let F=!0,N=null,at=!1,ut=!1;if(S){let Et=Ht.get(S);if(Et.__useDefaultFramebuffer!==void 0)Ut.bindFramebuffer(I.FRAMEBUFFER,null),F=!1;else if(Et.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(Et.__hasExternalTextures)T.rebindTextures(S,Ht.get(S.texture).__webglTexture,Ht.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ct=S.depthTexture;if(Et.__boundDepthTexture!==Ct){if(Ct!==null&&Ht.has(Ct)&&(S.width!==Ct.image.width||S.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}let Ot=S.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(ut=!0);let Nt=Ht.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Nt[D])?N=Nt[D][B]:N=Nt[D],at=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?N=Ht.get(S).__webglMultisampledFramebuffer:Array.isArray(Nt)?N=Nt[B]:N=Nt,y.copy(S.viewport),E.copy(S.scissor),W=S.scissorTest}else y.copy(gt).multiplyScalar(ot).floor(),E.copy(At).multiplyScalar(ot).floor(),W=se;if(Ut.bindFramebuffer(I.FRAMEBUFFER,N)&&F&&Ut.drawBuffers(S,N),Ut.viewport(y),Ut.scissor(E),Ut.setScissorTest(W),at){let Et=Ht.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,Et.__webglTexture,B)}else if(ut){let Et=Ht.get(S.texture),Ot=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Et.__webglTexture,B||0,Ot)}P=-1},this.readRenderTargetPixels=function(S,D,B,F,N,at,ut){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Ht.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ut!==void 0&&(St=St[ut]),St){Ut.bindFramebuffer(I.FRAMEBUFFER,St);try{let Et=S.texture,Ot=Et.format,Nt=Et.type;if(!ee.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-F&&B>=0&&B<=S.height-N&&I.readPixels(D,B,F,N,Gt.convert(Ot),Gt.convert(Nt),at)}finally{let Et=R!==null?Ht.get(R).__webglFramebuffer:null;Ut.bindFramebuffer(I.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(S,D,B,F,N,at,ut){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Ht.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ut!==void 0&&(St=St[ut]),St){let Et=S.texture,Ot=Et.format,Nt=Et.type;if(!ee.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=S.width-F&&B>=0&&B<=S.height-N){Ut.bindFramebuffer(I.FRAMEBUFFER,St);let Ct=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ct),I.bufferData(I.PIXEL_PACK_BUFFER,at.byteLength,I.STREAM_READ),I.readPixels(D,B,F,N,Gt.convert(Ot),Gt.convert(Nt),0);let de=R!==null?Ht.get(R).__webglFramebuffer:null;Ut.bindFramebuffer(I.FRAMEBUFFER,de);let be=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await vp(I,be,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ct),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,at),I.deleteBuffer(Ct),I.deleteSync(be),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,D=null,B=0){S.isTexture!==!0&&(vo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,S=arguments[1]);let F=Math.pow(2,-B),N=Math.floor(S.image.width*F),at=Math.floor(S.image.height*F),ut=D!==null?D.x:0,St=D!==null?D.y:0;T.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,ut,St,N,at),Ut.unbindTexture()},this.copyTextureToTexture=function(S,D,B=null,F=null,N=0){S.isTexture!==!0&&(vo("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,S=arguments[1],D=arguments[2],N=arguments[3]||0,B=null);let at,ut,St,Et,Ot,Nt;B!==null?(at=B.max.x-B.min.x,ut=B.max.y-B.min.y,St=B.min.x,Et=B.min.y):(at=S.image.width,ut=S.image.height,St=0,Et=0),F!==null?(Ot=F.x,Nt=F.y):(Ot=0,Nt=0);let Ct=Gt.convert(D.format),de=Gt.convert(D.type);T.setTexture2D(D,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);let be=I.getParameter(I.UNPACK_ROW_LENGTH),Te=I.getParameter(I.UNPACK_IMAGE_HEIGHT),xi=I.getParameter(I.UNPACK_SKIP_PIXELS),le=I.getParameter(I.UNPACK_SKIP_ROWS),Lt=I.getParameter(I.UNPACK_SKIP_IMAGES),Ye=S.isCompressedTexture?S.mipmaps[N]:S.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ye.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ye.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,St),I.pixelStorei(I.UNPACK_SKIP_ROWS,Et),S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,N,Ot,Nt,at,ut,Ct,de,Ye.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,N,Ot,Nt,Ye.width,Ye.height,Ct,Ye.data):I.texSubImage2D(I.TEXTURE_2D,N,Ot,Nt,at,ut,Ct,de,Ye),I.pixelStorei(I.UNPACK_ROW_LENGTH,be),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Te),I.pixelStorei(I.UNPACK_SKIP_PIXELS,xi),I.pixelStorei(I.UNPACK_SKIP_ROWS,le),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Lt),N===0&&D.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Ut.unbindTexture()},this.copyTextureToTexture3D=function(S,D,B=null,F=null,N=0){S.isTexture!==!0&&(vo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,F=arguments[1]||null,S=arguments[2],D=arguments[3],N=arguments[4]||0);let at,ut,St,Et,Ot,Nt,Ct,de,be,Te=S.isCompressedTexture?S.mipmaps[N]:S.image;B!==null?(at=B.max.x-B.min.x,ut=B.max.y-B.min.y,St=B.max.z-B.min.z,Et=B.min.x,Ot=B.min.y,Nt=B.min.z):(at=Te.width,ut=Te.height,St=Te.depth,Et=0,Ot=0,Nt=0),F!==null?(Ct=F.x,de=F.y,be=F.z):(Ct=0,de=0,be=0);let xi=Gt.convert(D.format),le=Gt.convert(D.type),Lt;if(D.isData3DTexture)T.setTexture3D(D,0),Lt=I.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)T.setTexture2DArray(D,0),Lt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);let Ye=I.getParameter(I.UNPACK_ROW_LENGTH),ce=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ni=I.getParameter(I.UNPACK_SKIP_PIXELS),ts=I.getParameter(I.UNPACK_SKIP_ROWS),bi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Te.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Te.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Et),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ot),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Nt),S.isDataTexture||S.isData3DTexture?I.texSubImage3D(Lt,N,Ct,de,be,at,ut,St,xi,le,Te.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(Lt,N,Ct,de,be,at,ut,St,xi,Te.data):I.texSubImage3D(Lt,N,Ct,de,be,at,ut,St,xi,le,Te),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ye),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ce),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ni),I.pixelStorei(I.UNPACK_SKIP_ROWS,ts),I.pixelStorei(I.UNPACK_SKIP_IMAGES,bi),N===0&&D.generateMipmaps&&I.generateMipmap(Lt),Ut.unbindTexture()},this.initRenderTarget=function(S){Ht.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),Ut.unbindTexture()},this.resetState=function(){O=0,C=0,R=null,Ut.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Zc?"display-p3":"srgb",e.unpackColorSpace=he.workingColorSpace===Ko?"display-p3":"srgb"}};var Tn=class extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ac=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=cc,this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ni=new L,ko=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ni.fromBufferAttribute(this,e),ni.applyMatrix4(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ni.fromBufferAttribute(this,e),ni.applyNormalMatrix(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ni.fromBufferAttribute(this,e),ni.transformDirection(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Yi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=pe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Yi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Yi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Yi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Yi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new qt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},mr=class extends qi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ms,rr=new L,gs=new L,_s=new L,vs=new Xt,or=new Xt,gd=new ne,to=new L,ar=new L,eo=new L,Fu=new Xt,xl=new Xt,Hu=new Xt,Do=class extends Ke{constructor(t=new mr){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new ke;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ac(e,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new ko(i,3,0,!1)),ms.setAttribute("uv",new ko(i,2,3,!1))}this.geometry=ms,this.material=t,this.center=new Xt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),gd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-_s.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;io(to.set(-.5,-.5,0),_s,o,gs,s,r),io(ar.set(.5,-.5,0),_s,o,gs,s,r),io(eo.set(.5,.5,0),_s,o,gs,s,r),Fu.set(0,0),xl.set(1,0),Hu.set(1,1);let a=t.ray.intersectTriangle(to,ar,eo,!1,rr);if(a===null&&(io(ar.set(-.5,.5,0),_s,o,gs,s,r),xl.set(0,1),a=t.ray.intersectTriangle(to,eo,ar,!1,rr),a===null))return;let l=t.ray.origin.distanceTo(rr);l<t.near||l>t.far||e.push({distance:l,point:rr.clone(),uv:sn.getInterpolation(rr,to,ar,eo,Fu,xl,Hu,new Xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function io(n,t,e,i,s,r){vs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(or.x=r*vs.x-s*vs.y,or.y=s*vs.x+r*vs.y):or.copy(vs),n.copy(t),n.x+=or.x,n.y+=or.y,n.applyMatrix4(gd)}var No=class extends fi{constructor(t=null,e=1,i=1,s,r,o,a,l,c=oe,h=oe,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gr=class extends qi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Uo=new L,Bo=new L,zu=new ne,lr=new cn,no=new Vn,bl=new L,Gu=new L,Tc=class extends Ke{constructor(t=new ke,e=new gr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Uo.fromBufferAttribute(e,s-1),Bo.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Uo.distanceTo(Bo);t.setAttribute("lineDistance",new Fe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),no.copy(i.boundingSphere),no.applyMatrix4(s),no.radius+=r,t.ray.intersectsSphere(no)===!1)return;zu.copy(s).invert(),lr.copy(t.ray).applyMatrix4(zu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=c){let m=h.getX(_),M=h.getX(_+1),b=so(this,t,lr,l,m,M);b&&e.push(b)}if(this.isLineLoop){let _=h.getX(g-1),p=h.getX(f),m=so(this,t,lr,l,_,p);m&&e.push(m)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=c){let m=so(this,t,lr,l,_,_+1);m&&e.push(m)}if(this.isLineLoop){let _=so(this,t,lr,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function so(n,t,e,i,s,r){let o=n.geometry.attributes.position;if(Uo.fromBufferAttribute(o,s),Bo.fromBufferAttribute(o,r),e.distanceSqToSegment(Uo,Bo,bl,Gu)>i)return;bl.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(bl);if(!(l<t.near||l>t.far))return{distance:l,point:Gu.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var Vu=new L,Wu=new L,Fo=class extends Tc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Vu.fromBufferAttribute(e,s),Wu.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Vu.distanceTo(Wu);t.setAttribute("lineDistance",new Fe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Rc=class extends qi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xu=new ne,Cc=new cn,ro=new Vn,oo=new L,Ps=class extends Ke{constructor(t=new ke,e=new Rc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ro.copy(i.boundingSphere),ro.applyMatrix4(s),ro.radius+=r,t.ray.intersectsSphere(ro)===!1)return;Xu.copy(s).invert(),Cc.copy(t.ray).applyMatrix4(Xu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){let p=c.getX(g);oo.fromBufferAttribute(u,p),Ku(oo,p,l,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)oo.fromBufferAttribute(u,g),Ku(oo,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ku(n,t,e,i,s,r,o){let a=Cc.distanceSqToPoint(n);if(a<e){let l=new L;Cc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var pi=class extends fi{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ao=new L,lo=new L,Sl=new L,co=new sn,Ho=class extends ke{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(_o*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:_,b:p,c:m}=co;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),co.getNormal(Sl),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){let b=(M+1)%3,A=u[M],O=u[b],C=co[h[M]],R=co[h[b]],P=`${A}_${O}`,K=`${O}_${A}`;K in d&&d[K]?(Sl.dot(d[K].normal)<=r&&(f.push(C.x,C.y,C.z),f.push(R.x,R.y,R.z)),d[K]=null):P in d||(d[P]={index0:c[M],index1:c[b],normal:Sl.clone()})}}for(let g in d)if(d[g]){let{index0:_,index1:p}=d[g];ao.fromBufferAttribute(a,_),lo.fromBufferAttribute(a,p),f.push(ao.x,ao.y,ao.z),f.push(lo.x,lo.y,lo.z)}this.setAttribute("position",new Fe(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var zo=class n extends ke{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,d=new L,f=[],g=[],_=[],p=[];for(let m=0;m<=i;m++){let M=[],b=m/i,A=0;m===0&&o===0?A=.5/e:m===i&&l===Math.PI&&(A=-.5/e);for(let O=0;O<=e;O++){let C=O/e;u.x=-t*Math.cos(s+C*r)*Math.sin(o+b*a),u.y=t*Math.cos(o+b*a),u.z=t*Math.sin(s+C*r)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(C+A,1-b),M.push(c++)}h.push(M)}for(let m=0;m<i;m++)for(let M=0;M<e;M++){let b=h[m][M+1],A=h[m][M],O=h[m+1][M],C=h[m+1][M+1];(m!==0||o>0)&&f.push(b,A,C),(m!==i-1||l<Math.PI)&&f.push(A,O,C)}this.setIndex(f),this.setAttribute("position",new Fe(g,3)),this.setAttribute("normal",new Fe(_,3)),this.setAttribute("uv",new Fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var _r=class extends De{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ge=class extends qi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=od,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ho(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function mv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Os=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];i:{t:{let o;e:{n:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Lc=class extends Os{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$h,endingEnd:$h}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zh:r=t,a=2*e-i;break;case Jh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Zh:o=t,l=2*i-e;break;case Jh:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,M=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,b=(-1-f)*p+(1.5+f)*_+.5*g,A=f*p-f*_;for(let O=0;O!==a;++O)r[O]=m*o[h+O]+M*o[c+O]+b*o[l+O]+A*o[u+O];return r}},Ic=class extends Os{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Pc=class extends Os{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Vi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ho(e,this.TimeBufferType),this.values=ho(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ho(t.times,Array),values:ho(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Pc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ic(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Lc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case xo:e=this.InterpolantFactoryMethodDiscrete;break;case lc:e=this.InterpolantFactoryMethodLinear;break;case Xa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xo;case this.InterpolantFactoryMethodLinear:return lc;case this.InterpolantFactoryMethodSmooth:return Xa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&mv(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Xa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Vi.prototype.TimeBufferType=Float32Array;Vi.prototype.ValueBufferType=Float32Array;Vi.prototype.DefaultInterpolation=lc;var Wn=class extends Vi{constructor(t,e,i){super(t,e,i)}};Wn.prototype.ValueTypeName="bool";Wn.prototype.ValueBufferType=Array;Wn.prototype.DefaultInterpolation=xo;Wn.prototype.InterpolantFactoryMethodLinear=void 0;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var Oc=class extends Vi{};Oc.prototype.ValueTypeName="color";var kc=class extends Vi{};kc.prototype.ValueTypeName="number";var Dc=class extends Os{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)An.slerpFlat(r,0,o,c-a,o,c,l);return r}},Go=class extends Vi{InterpolantFactoryMethodLinear(t){return new Dc(this.times,this.values,this.getValueSize(),t)}};Go.prototype.ValueTypeName="quaternion";Go.prototype.InterpolantFactoryMethodSmooth=void 0;var Xn=class extends Vi{constructor(t,e,i){super(t,e,i)}};Xn.prototype.ValueTypeName="string";Xn.prototype.ValueBufferType=Array;Xn.prototype.DefaultInterpolation=xo;Xn.prototype.InterpolantFactoryMethodLinear=void 0;Xn.prototype.InterpolantFactoryMethodSmooth=void 0;var Nc=class extends Vi{};Nc.prototype.ValueTypeName="vector";var Uc=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},gv=new Uc,Bc=class{constructor(t){this.manager=t!==void 0?t:gv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Bc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vo=class extends Ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ks=class extends Vo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ml=new ne,Yu=new L,qu=new L,Fc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pr,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Yu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yu),qu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qu),e.updateMatrixWorld(),Ml.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ml),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ml)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Hc=class extends Fc{constructor(){super(new Ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ds=class extends Vo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new Hc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var jc="\\[\\]\\.:\\/",_v=new RegExp("["+jc+"]","g"),Qc="[^"+jc+"]",vv="[^"+jc.replace("\\.","")+"]",yv=/((?:WC+[\/:])*)/.source.replace("WC",Qc),xv=/(WCOD+)?/.source.replace("WCOD",vv),bv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qc),Sv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qc),Mv=new RegExp("^"+yv+xv+bv+Sv+"$"),Ev=["material","materials","bones","map"],zc=class{constructor(t,e,i){let s=i||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ee=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_v,"")}static parseTrackName(t){let e=Mv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Ev.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=zc;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gc);var hn=(n,t,e)=>t*256+e*16+n;var ve={width:.6,height:1.8,eye:1.62,sneakEye:1.42,gravity:30,jumpSpeed:9,walk:6.2,sprint:9.4,sneak:2,swim:4,fly:12,flyFast:24,airControl:.35,maxFall:78,reach:5.2,reachCreative:7,stepHeight:.62},th=20*60,qo=.28,$o={interstitialFirstAfter:60,interstitialMinGap:90,rewardBoostDuration:300},_d={submitDebounce:8e3},Us=!1,Kn={lang:"en",renderDistance:0,fov:72,sensitivity:1,sfxVolume:.7,musicVolume:.35,autoJump:null,showFps:!1,smoothLighting:!0,clouds:!0,weather:!0,invertY:!1,vignette:!0,rayTracing:!1},yr=()=>typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints||0)>0),Bs=()=>{if(typeof window>"u")return!1;try{return window.matchMedia("(any-pointer: fine)").matches?!1:window.matchMedia("(pointer: coarse)").matches}catch{return yr()}};var wv={"game.title":"\u0411\u043B\u043E\u0447\u043D\u044B\u0439 \u043C\u0438\u0440","game.subtitle":"\u0411\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u044B\u0439 \u043C\u0438\u0440 \u0438\u0437 \u0431\u043B\u043E\u043A\u043E\u0432","loading.title":"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043C\u0438\u0440\u0430","loading.textures":"\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u0443\u0440\u2026","loading.world":"\u0413\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F \u043C\u0438\u0440\u0430\u2026","loading.chunks":"\u041F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435 \u043B\u0430\u043D\u0434\u0448\u0430\u0444\u0442\u0430\u2026","loading.almost":"\u041F\u043E\u0447\u0442\u0438 \u0433\u043E\u0442\u043E\u0432\u043E\u2026","menu.play":"\u0418\u0433\u0440\u0430\u0442\u044C","menu.continue":"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C","menu.newworld":"\u041D\u043E\u0432\u044B\u0439 \u043C\u0438\u0440","menu.leaderboard":"\u0420\u0435\u043A\u043E\u0440\u0434\u044B","menu.rewards":"\u041D\u0430\u0433\u0440\u0430\u0434\u044B","menu.settings":"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438","menu.howto":"\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435","menu.back":"\u041D\u0430\u0437\u0430\u0434","menu.close":"\u0417\u0430\u043A\u0440\u044B\u0442\u044C","menu.resume":"\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0432 \u0438\u0433\u0440\u0443","menu.tomenu":"\u0412\u044B\u0439\u0442\u0438 \u0432 \u043C\u0435\u043D\u044E","menu.paused":"\u041F\u0430\u0443\u0437\u0430","menu.confirmNew":"\u041D\u0430\u0447\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u043C\u0438\u0440? \u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u0442\u0435\u0440\u044F\u043D.","menu.yes":"\u0414\u0430","menu.no":"\u041D\u0435\u0442","hud.score":"\u041E\u0447\u043A\u0438","hud.best":"\u0420\u0435\u043A\u043E\u0440\u0434","hud.health":"\u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435","hud.food":"\u0421\u044B\u0442\u043E\u0441\u0442\u044C","hud.depth":"\u0413\u043B\u0443\u0431\u0438\u043D\u0430","hud.biome":"\u0411\u0438\u043E\u043C","hud.coords":"\u041A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B","hud.day":"\u0414\u0435\u043D\u044C","hud.night":"\u041D\u043E\u0447\u044C","hud.fps":"\u041A\u0430\u0434\u0440\u044B","mp.title":"\u0418\u0433\u0440\u0430 \u0441 \u0434\u0440\u0443\u0437\u044C\u044F\u043C\u0438","mp.hint":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0439 \u043A\u043E\u0434 \u043A\u043E\u043C\u043D\u0430\u0442\u044B, \u0447\u0442\u043E\u0431\u044B \u0438\u0433\u0440\u0430\u0442\u044C \u0432 \u043E\u0434\u043D\u043E\u043C \u043C\u0438\u0440\u0435","mp.server":"\u0421\u0435\u0440\u0432\u0435\u0440","mp.room":"\u041A\u043E\u0434 \u043A\u043E\u043C\u043D\u0430\u0442\u044B","mp.nick":"\u0418\u043C\u044F","mp.connect":"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F","mp.leave":"\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F","mp.connecting":"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u2026","mp.connected":"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E","mp.reconnecting":"\u0421\u0432\u044F\u0437\u044C \u043F\u043E\u0442\u0435\u0440\u044F\u043D\u0430, \u043F\u0435\u0440\u0435\u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u2026","mp.offline":"\u041D\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E","mp.full":"\u041A\u043E\u043C\u043D\u0430\u0442\u0430 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0430","mp.error":"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F","mp.noHost":"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430","mp.joined":"{name} \u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u043B\u0441\u044F","mp.entered":"\u0412\u044B \u0432 \u043A\u043E\u043C\u043D\u0430\u0442\u0435 \xAB{room}\xBB","chest.title":"\u0421\u0443\u043D\u0434\u0443\u043A","chest.yours":"\u0412\u0430\u0448 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C","furnace.title":"\u041F\u0435\u0447\u044C","furnace.input":"\u0421\u044B\u0440\u044C\u0451","furnace.fuel":"\u0422\u043E\u043F\u043B\u0438\u0432\u043E","furnace.output":"\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442","boss.name":"\u0422\u0443\u043D\u0433 \u0422\u0443\u043D\u0433 \u0421\u0430\u0445\u0443\u0440","boss.appears":"\u0422\u0443\u043D\u0433 \u0422\u0443\u043D\u0433 \u0421\u0430\u0445\u0443\u0440 \u043F\u0440\u043E\u0431\u0443\u0434\u0438\u043B\u0441\u044F!","boss.defeated":"\u0422\u0443\u043D\u0433 \u0422\u0443\u043D\u0433 \u0421\u0430\u0445\u0443\u0440 \u043F\u043E\u0432\u0435\u0440\u0436\u0435\u043D!","boss.enraged":"\u0412 \u042F\u0420\u041E\u0421\u0422\u0418","ctrl.interact":"\u0412\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435","block.chest":"\u0421\u0443\u043D\u0434\u0443\u043A","block.arena_brick":"\u041A\u0438\u0440\u043F\u0438\u0447 \u0430\u0440\u0435\u043D\u044B","block.arena_pillar":"\u041A\u043E\u043B\u043E\u043D\u043D\u0430 \u0430\u0440\u0435\u043D\u044B","inv.title":"\u0418\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C","inv.craft":"\u0412\u0435\u0440\u0441\u0442\u0430\u043A","inv.craft2":"\u0420\u0443\u0447\u043D\u0430\u044F \u0441\u0431\u043E\u0440\u043A\u0430","inv.recipes":"\u0420\u0435\u0446\u0435\u043F\u0442\u044B","inv.result":"\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442","inv.empty":"\u041F\u0443\u0441\u0442\u043E","inv.noRecipes":"\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0440\u0435\u0446\u0435\u043F\u0442\u043E\u0432. \u0421\u043E\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432!","inv.needTable":"\u041D\u0443\u0436\u0435\u043D \u0432\u0435\u0440\u0441\u0442\u0430\u043A 3\xD73 \u2014 \u043F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0435\u0433\u043E \u0438 \u043F\u043E\u0434\u043E\u0439\u0434\u0438\u0442\u0435 \u0431\u043B\u0438\u0436\u0435","inv.hint":"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0440\u0435\u0446\u0435\u043F\u0442, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0435\u0434\u043C\u0435\u0442","set.title":"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438","set.language":"\u042F\u0437\u044B\u043A","set.renderDistance":"\u0414\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u043F\u0440\u043E\u0440\u0438\u0441\u043E\u0432\u043A\u0438","set.auto":"\u0410\u0432\u0442\u043E","set.fov":"\u0423\u0433\u043E\u043B \u043E\u0431\u0437\u043E\u0440\u0430","set.sensitivity":"\u0427\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C","set.sfx":"\u0413\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u044C \u0437\u0432\u0443\u043A\u043E\u0432","set.music":"\u0413\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u044C \u043C\u0443\u0437\u044B\u043A\u0438","set.autoJump":"\u0410\u0432\u0442\u043E-\u043F\u0440\u044B\u0436\u043E\u043A","set.showFps":"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C FPS","set.clouds":"\u041E\u0431\u043B\u0430\u043A\u0430","set.weather":"\u041F\u043E\u0433\u043E\u0434\u0430","set.invertY":"\u0418\u043D\u0432\u0435\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0441\u044C Y","set.vignette":"\u0412\u0438\u043D\u044C\u0435\u0442\u043A\u0430","set.rayTracing":"\u0422\u0440\u0430\u0441\u0441\u0438\u0440\u043E\u0432\u043A\u0430 \u043B\u0443\u0447\u0435\u0439","set.rayTracingNote":"\u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0435 \u0442\u0435\u043D\u0438, \u0437\u0430\u0442\u0435\u043D\u0435\u043D\u0438\u0435 \u0438 \u043E\u0442\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043D\u0430 \u0432\u043E\u0434\u0435. \u0421\u0438\u043B\u044C\u043D\u043E \u043D\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0443","set.mode":"\u0420\u0435\u0436\u0438\u043C \u0438\u0433\u0440\u044B","set.survival":"\u0412\u044B\u0436\u0438\u0432\u0430\u043D\u0438\u0435","set.creative":"\u0422\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u0438\u0439","set.creativeNote":"\u0412 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435 \u043E\u0447\u043A\u0438 \u043D\u0435 \u043D\u0430\u0447\u0438\u0441\u043B\u044F\u044E\u0442\u0441\u044F","set.on":"\u0412\u043A\u043B","set.off":"\u0412\u044B\u043A\u043B","set.reset":"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438","set.creativeLocked":"\u{1F4FA} \u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0437\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443","set.creativeUnlocked":"\u0422\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0435\u0436\u0438\u043C \u043E\u0442\u043A\u0440\u044B\u0442 \u0434\u043E \u043A\u043E\u043D\u0446\u0430 \u0441\u0435\u0441\u0441\u0438\u0438","creative.title":"\u0422\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C","creative.hint":"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u2014 \u043E\u043D \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0432 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0439 \u044F\u0447\u0435\u0439\u043A\u0435","creative.clearHint":"\u0414\u043E\u043B\u0433\u043E\u0435 \u043D\u0430\u0436\u0430\u0442\u0438\u0435 \u043F\u043E \u044F\u0447\u0435\u0439\u043A\u0435 \u0441\u043D\u0438\u0437\u0443 \u2014 \u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0435\u0451","creative.page":"\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 {n} \u0438\u0437 {total}","creative.search":"\u041F\u043E\u0438\u0441\u043A","creative.nothing":"\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E","vid.creative.name":"\u0422\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0435\u0436\u0438\u043C","vid.creative.desc":"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0440\u0435\u043A\u043B\u0430\u043C\u0443 \u0438 \u043E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u043F\u043E\u043B\u0451\u0442, \u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u044B\u0435 \u0431\u043B\u043E\u043A\u0438 \u0438 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C \u0434\u043E \u043A\u043E\u043D\u0446\u0430 \u0441\u0435\u0441\u0441\u0438\u0438","toast.creativeUnlocked":"\u0422\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0435\u0436\u0438\u043C \u043E\u0442\u043A\u0440\u044B\u0442!","ctrl.title":"\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435","ctrl.move":"\u0414\u0432\u0438\u0436\u0435\u043D\u0438\u0435","ctrl.look":"\u041E\u0431\u0437\u043E\u0440","ctrl.jump":"\u041F\u0440\u044B\u0436\u043E\u043A","ctrl.sneak":"\u041A\u0440\u0430\u0441\u0442\u044C\u0441\u044F","ctrl.sprint":"\u0411\u0435\u0433","ctrl.break":"\u0421\u043B\u043E\u043C\u0430\u0442\u044C \u0431\u043B\u043E\u043A","ctrl.place":"\u041F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0431\u043B\u043E\u043A","ctrl.inventory":"\u0418\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C","ctrl.pause":"\u041F\u0430\u0443\u0437\u0430","ctrl.fly":"\u041F\u043E\u043B\u0451\u0442 (\u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u0438\u0439)","ctrl.view":"\u0412\u0438\u0434 \u043E\u0442 1-\u0433\u043E / 3-\u0433\u043E \u043B\u0438\u0446\u0430","ctrl.hotbar":"\u0412\u044B\u0431\u043E\u0440 \u0431\u043B\u043E\u043A\u0430","ctrl.mouse":"\u041C\u044B\u0448\u044C","ctrl.space":"\u041F\u0440\u043E\u0431\u0435\u043B","ctrl.lmb":"\u041B\u041A\u041C","ctrl.rmb":"\u041F\u041A\u041C","ctrl.wheel":"\u041A\u043E\u043B\u0435\u0441\u043E / 1\u20139","ctrl.touchMove":"\u041B\u0435\u0432\u044B\u0439 \u0434\u0436\u043E\u0439\u0441\u0442\u0438\u043A","ctrl.touchLook":"\u0421\u0432\u0430\u0439\u043F \u0441\u043F\u0440\u0430\u0432\u0430","ctrl.tapStart":"\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0438\u0433\u0440\u0430\u0442\u044C","ctrl.clickStart":"\u041A\u043B\u0438\u043A\u043D\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0445\u0432\u0430\u0442\u0438\u0442\u044C \u043C\u044B\u0448\u044C","ctrl.dragStart":"\u041A\u0430\u043C\u0435\u0440\u0430 \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0437\u0430 \u043C\u044B\u0448\u044C\u044E","lb.title":"\u0422\u0430\u0431\u043B\u0438\u0446\u0430 \u043B\u0438\u0434\u0435\u0440\u043E\u0432","lb.you":"\u0412\u044B","lb.rank":"\u041C\u0435\u0441\u0442\u043E","lb.player":"\u0418\u0433\u0440\u043E\u043A","lb.points":"\u041E\u0447\u043A\u0438","lb.empty":"\u041F\u043E\u043A\u0430 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B \u0440\u0435\u043A\u043E\u0440\u0434. \u0421\u0442\u0430\u043D\u044C\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u043C!","lb.loading":"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026","lb.error":"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0442\u0430\u0431\u043B\u0438\u0446\u0443 \u043B\u0438\u0434\u0435\u0440\u043E\u0432","lb.anon":"\u0410\u043D\u043E\u043D\u0438\u043C","vid.rewardTitle":"\u041D\u0430\u0433\u0440\u0430\u0434\u044B \u0437\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443","vid.rewardHint":"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u0432\u0438\u0434\u0435\u043E \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043D\u0430\u0433\u0440\u0430\u0434\u0443","vid.watch":"\u{1F4FA} \u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0440\u0435\u043A\u043B\u0430\u043C\u0443","vid.cta.heal":"\u{1F4FA} \u0420\u0435\u043A\u043B\u0430\u043C\u0430 \u2192 \u043F\u043E\u043B\u043D\u043E\u0435 \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u0435","vid.cta.crate":"\u{1F4FA} \u0420\u0435\u043A\u043B\u0430\u043C\u0430 \u2192 \u044F\u0449\u0438\u043A \u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432","vid.cta.boost":"\u{1F4FA} \u0420\u0435\u043A\u043B\u0430\u043C\u0430 \u2192 \xD72 \u043E\u0447\u043A\u0438 \u043D\u0430 5 \u043C\u0438\u043D","vid.healFull":"\u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435 \u0438 \u0441\u044B\u0442\u043E\u0441\u0442\u044C \u0443\u0436\u0435 \u043F\u043E\u043B\u043D\u044B\u0435","vid.boostOn":"\u0411\u043E\u043D\u0443\u0441 \u0443\u0436\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442","vid.cooldown":"\u0447\u0435\u0440\u0435\u0437 {s} \u0441","vid.menuHint":"\u041E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u043D\u0430\u0433\u0440\u0430\u0434\u044B \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0438\u0433\u0440\u044B","vid.overlay":"\u0420\u0435\u043A\u043B\u0430\u043C\u0430\u2026","vid.reward1.name":"\u041F\u043E\u043B\u043D\u043E\u0435 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435","vid.reward1.desc":"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0440\u0435\u043A\u043B\u0430\u043C\u0443 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043F\u043E\u043B\u043D\u043E\u0435 \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u0435 \u0438 \u0441\u044B\u0442\u043E\u0441\u0442\u044C","vid.reward2.name":"\u042F\u0449\u0438\u043A \u043F\u0440\u0438\u043F\u0430\u0441\u043E\u0432","vid.reward2.desc":"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0440\u0435\u043A\u043B\u0430\u043C\u0443 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043D\u0430\u0431\u043E\u0440: \u0444\u0430\u043A\u0435\u043B\u044B, \u0435\u0434\u0430, \u0434\u043E\u0441\u043A\u0438 \u0438 \u0436\u0435\u043B\u0435\u0437\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B","vid.reward3.name":"\u0414\u0432\u043E\u0439\u043D\u044B\u0435 \u043E\u0447\u043A\u0438 \xD72","vid.reward3.desc":"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0440\u0435\u043A\u043B\u0430\u043C\u0443 \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u0432\u0434\u0432\u043E\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u043E\u0447\u043A\u043E\u0432 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 5 \u043C\u0438\u043D\u0443\u0442","vid.rewardGot":"\u041D\u0430\u0433\u0440\u0430\u0434\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0430!","vid.rewardFail":"\u0420\u0435\u043A\u043B\u0430\u043C\u0430 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435","vid.boostActive":"\u0411\u043E\u043D\u0443\u0441 \xD72 \u0430\u043A\u0442\u0438\u0432\u0435\u043D","vid.warning":"\u0421\u043A\u043E\u0440\u043E \u0440\u0435\u043A\u043B\u0430\u043C\u0430","vid.warningSub":"\u0418\u0433\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u0438\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u043D\u0430 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434","vid.revive":"\u{1F4FA} \u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0440\u0435\u043A\u043B\u0430\u043C\u0443 \u0438 \u0432\u043E\u0437\u0440\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u0441 \u0432\u0435\u0449\u0430\u043C\u0438","death.title":"\u0412\u044B \u043F\u043E\u0433\u0438\u0431\u043B\u0438","death.score":"\u041D\u0430\u0431\u0440\u0430\u043D\u043E \u043E\u0447\u043A\u043E\u0432","death.respawn":"\u0412\u043E\u0437\u0440\u043E\u0434\u0438\u0442\u044C\u0441\u044F","death.cause.fall":"\u041F\u0430\u0434\u0435\u043D\u0438\u0435 \u0441 \u0432\u044B\u0441\u043E\u0442\u044B","death.cause.lava":"\u0421\u0433\u043E\u0440\u0435\u043B\u0438 \u0432 \u043B\u0430\u0432\u0435","death.cause.drown":"\u0423\u0442\u043E\u043D\u0443\u043B\u0438","death.cause.mob":"\u041F\u043E\u0431\u0435\u0436\u0434\u0435\u043D\u044B \u043C\u043E\u043D\u0441\u0442\u0440\u043E\u043C","death.cause.cactus":"\u041A\u0430\u043A\u0442\u0443\u0441 \u043E\u043A\u0430\u0437\u0430\u043B\u0441\u044F \u043A\u043E\u043B\u044E\u0447\u0438\u043C","death.cause.starve":"\u0413\u043E\u043B\u043E\u0434","death.cause.void":"\u0411\u0435\u0437\u0434\u043D\u0430","toast.mined":"\u0414\u043E\u0431\u044B\u0442\u043E","toast.crafted":"\u0421\u043E\u0437\u0434\u0430\u043D\u043E","toast.newBiome":"\u041E\u0442\u043A\u0440\u044B\u0442 \u0431\u0438\u043E\u043C","toast.record":"\u041D\u043E\u0432\u044B\u0439 \u0440\u0435\u043A\u043E\u0440\u0434!","toast.saved":"\u0418\u0433\u0440\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430","toast.invFull":"\u0418\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C \u043F\u043E\u043B\u043E\u043D","toast.needTool":"\u041D\u0443\u0436\u0435\u043D \u0431\u043E\u043B\u0435\u0435 \u043F\u0440\u043E\u0447\u043D\u044B\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442","toast.deepDive":"\u0413\u043B\u0443\u0431\u043E\u043A\u043E\u0435 \u043F\u043E\u0433\u0440\u0443\u0436\u0435\u043D\u0438\u0435","toast.boostEnd":"\u0411\u043E\u043D\u0443\u0441 \xD72 \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0441\u044F","biome.deep_ocean":"\u0413\u043B\u0443\u0431\u043E\u043A\u0438\u0439 \u043E\u043A\u0435\u0430\u043D","biome.ocean":"\u041E\u043A\u0435\u0430\u043D","biome.beach":"\u041F\u043B\u044F\u0436","biome.river":"\u0420\u0435\u043A\u0430","biome.stone_shore":"\u041A\u0430\u043C\u0435\u043D\u043D\u044B\u0439 \u0431\u0435\u0440\u0435\u0433","biome.plains":"\u0420\u0430\u0432\u043D\u0438\u043D\u044B","biome.meadow":"\u0426\u0432\u0435\u0442\u043E\u0447\u043D\u044B\u0439 \u043B\u0443\u0433","biome.forest":"\u041B\u0435\u0441","biome.birch_forest":"\u0411\u0435\u0440\u0451\u0437\u043E\u0432\u044B\u0439 \u043B\u0435\u0441","biome.dark_forest":"\u0422\u0451\u043C\u043D\u044B\u0439 \u043B\u0435\u0441","biome.taiga":"\u0422\u0430\u0439\u0433\u0430","biome.snowy_taiga":"\u0421\u043D\u0435\u0436\u043D\u0430\u044F \u0442\u0430\u0439\u0433\u0430","biome.snowy_plains":"\u0421\u043D\u0435\u0436\u043D\u044B\u0435 \u0440\u0430\u0432\u043D\u0438\u043D\u044B","biome.ice_spikes":"\u041B\u0435\u0434\u044F\u043D\u044B\u0435 \u043F\u0438\u043A\u0438","biome.mountains":"\u0413\u043E\u0440\u044B","biome.snowy_peaks":"\u0417\u0430\u0441\u043D\u0435\u0436\u0435\u043D\u043D\u044B\u0435 \u0432\u0435\u0440\u0448\u0438\u043D\u044B","biome.desert":"\u041F\u0443\u0441\u0442\u044B\u043D\u044F","biome.savanna":"\u0421\u0430\u0432\u0430\u043D\u043D\u0430","biome.jungle":"\u0414\u0436\u0443\u043D\u0433\u043B\u0438","biome.swamp":"\u0411\u043E\u043B\u043E\u0442\u043E","biome.badlands":"\u0411\u0435\u0441\u043F\u043B\u043E\u0434\u043D\u044B\u0435 \u0437\u0435\u043C\u043B\u0438","biome.mushroom_isle":"\u0413\u0440\u0438\u0431\u043D\u043E\u0439 \u043E\u0441\u0442\u0440\u043E\u0432","block.air":"\u0412\u043E\u0437\u0434\u0443\u0445","block.stone":"\u041A\u0430\u043C\u0435\u043D\u044C","block.grass":"\u0422\u0440\u0430\u0432\u0430","block.dirt":"\u0417\u0435\u043C\u043B\u044F","block.cobble":"\u0411\u0443\u043B\u044B\u0436\u043D\u0438\u043A","block.bedrock":"\u041A\u043E\u0440\u0435\u043D\u043D\u0430\u044F \u043F\u043E\u0440\u043E\u0434\u0430","block.sand":"\u041F\u0435\u0441\u043E\u043A","block.red_sand":"\u041A\u0440\u0430\u0441\u043D\u044B\u0439 \u043F\u0435\u0441\u043E\u043A","block.sandstone":"\u041F\u0435\u0441\u0447\u0430\u043D\u0438\u043A","block.red_sandstone":"\u041A\u0440\u0430\u0441\u043D\u044B\u0439 \u043F\u0435\u0441\u0447\u0430\u043D\u0438\u043A","block.gravel":"\u0413\u0440\u0430\u0432\u0438\u0439","block.clay":"\u0413\u043B\u0438\u043D\u0430","block.water":"\u0412\u043E\u0434\u0430","block.lava":"\u041B\u0430\u0432\u0430","block.ice":"\u041B\u0451\u0434","block.packed_ice":"\u041F\u043B\u043E\u0442\u043D\u044B\u0439 \u043B\u0451\u0434","block.snow":"\u0421\u043D\u0435\u0433","block.snowy_grass":"\u0417\u0430\u0441\u043D\u0435\u0436\u0435\u043D\u043D\u0430\u044F \u0442\u0440\u0430\u0432\u0430","block.granite":"\u0413\u0440\u0430\u043D\u0438\u0442","block.diorite":"\u0414\u0438\u043E\u0440\u0438\u0442","block.andesite":"\u0410\u043D\u0434\u0435\u0437\u0438\u0442","block.obsidian":"\u041E\u0431\u0441\u0438\u0434\u0438\u0430\u043D","block.polished_stone":"\u041F\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043A\u0430\u043C\u0435\u043D\u044C","block.log_oak":"\u0414\u0443\u0431\u043E\u0432\u043E\u0435 \u0431\u0440\u0435\u0432\u043D\u043E","block.log_birch":"\u0411\u0435\u0440\u0451\u0437\u043E\u0432\u043E\u0435 \u0431\u0440\u0435\u0432\u043D\u043E","block.log_spruce":"\u0415\u043B\u043E\u0432\u043E\u0435 \u0431\u0440\u0435\u0432\u043D\u043E","block.log_jungle":"\u0422\u0440\u043E\u043F\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0431\u0440\u0435\u0432\u043D\u043E","block.leaves_oak":"\u0414\u0443\u0431\u043E\u0432\u0430\u044F \u043B\u0438\u0441\u0442\u0432\u0430","block.leaves_birch":"\u0411\u0435\u0440\u0451\u0437\u043E\u0432\u0430\u044F \u043B\u0438\u0441\u0442\u0432\u0430","block.leaves_spruce":"\u0415\u043B\u043E\u0432\u0430\u044F \u043B\u0438\u0441\u0442\u0432\u0430","block.leaves_jungle":"\u0422\u0440\u043E\u043F\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043B\u0438\u0441\u0442\u0432\u0430","block.planks_oak":"\u0414\u0443\u0431\u043E\u0432\u044B\u0435 \u0434\u043E\u0441\u043A\u0438","block.planks_birch":"\u0411\u0435\u0440\u0451\u0437\u043E\u0432\u044B\u0435 \u0434\u043E\u0441\u043A\u0438","block.planks_spruce":"\u0415\u043B\u043E\u0432\u044B\u0435 \u0434\u043E\u0441\u043A\u0438","block.planks_jungle":"\u0422\u0440\u043E\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u043E\u0441\u043A\u0438","block.glass":"\u0421\u0442\u0435\u043A\u043B\u043E","block.bricks":"\u041A\u0438\u0440\u043F\u0438\u0447\u0438","block.stone_bricks":"\u041A\u0430\u043C\u0435\u043D\u043D\u044B\u0435 \u043A\u0438\u0440\u043F\u0438\u0447\u0438","block.mossy_stone_bricks":"\u0417\u0430\u043C\u0448\u0435\u043B\u044B\u0435 \u043A\u0438\u0440\u043F\u0438\u0447\u0438","block.mossy_cobble":"\u0417\u0430\u043C\u0448\u0435\u043B\u044B\u0439 \u0431\u0443\u043B\u044B\u0436\u043D\u0438\u043A","block.chiseled_stone":"\u0420\u0435\u0437\u043D\u043E\u0439 \u043A\u0430\u043C\u0435\u043D\u044C","block.coal_ore":"\u0423\u0433\u043E\u043B\u044C\u043D\u0430\u044F \u0440\u0443\u0434\u0430","block.iron_ore":"\u0416\u0435\u043B\u0435\u0437\u043D\u0430\u044F \u0440\u0443\u0434\u0430","block.gold_ore":"\u0417\u043E\u043B\u043E\u0442\u0430\u044F \u0440\u0443\u0434\u0430","block.diamond_ore":"\u0410\u043B\u043C\u0430\u0437\u043D\u0430\u044F \u0440\u0443\u0434\u0430","block.redstone_ore":"\u041A\u0440\u0430\u0441\u043D\u0430\u044F \u0440\u0443\u0434\u0430","block.lapis_ore":"\u041B\u0430\u0437\u0443\u0440\u0438\u0442\u043E\u0432\u0430\u044F \u0440\u0443\u0434\u0430","block.emerald_ore":"\u0418\u0437\u0443\u043C\u0440\u0443\u0434\u043D\u0430\u044F \u0440\u0443\u0434\u0430","block.coal_block":"\u0423\u0433\u043E\u043B\u044C\u043D\u044B\u0439 \u0431\u043B\u043E\u043A","block.iron_block":"\u0416\u0435\u043B\u0435\u0437\u043D\u044B\u0439 \u0431\u043B\u043E\u043A","block.gold_block":"\u0417\u043E\u043B\u043E\u0442\u043E\u0439 \u0431\u043B\u043E\u043A","block.diamond_block":"\u0410\u043B\u043C\u0430\u0437\u043D\u044B\u0439 \u0431\u043B\u043E\u043A","block.emerald_block":"\u0418\u0437\u0443\u043C\u0440\u0443\u0434\u043D\u044B\u0439 \u0431\u043B\u043E\u043A","block.lapis_block":"\u041B\u0430\u0437\u0443\u0440\u0438\u0442\u043E\u0432\u044B\u0439 \u0431\u043B\u043E\u043A","block.glowstone":"\u0421\u0432\u0435\u0442\u043E\u043A\u0430\u043C\u0435\u043D\u044C","block.sea_lantern":"\u041C\u043E\u0440\u0441\u043A\u043E\u0439 \u0444\u043E\u043D\u0430\u0440\u044C","block.prismarine":"\u041F\u0440\u0438\u0437\u043C\u0430\u0440\u0438\u043D","block.cactus":"\u041A\u0430\u043A\u0442\u0443\u0441","block.podzol":"\u041F\u043E\u0434\u0437\u043E\u043B","block.mycelium":"\u041C\u0438\u0446\u0435\u043B\u0438\u0439","block.terracotta":"\u0422\u0435\u0440\u0440\u0430\u043A\u043E\u0442\u0430","block.terracotta_red":"\u041A\u0440\u0430\u0441\u043D\u0430\u044F \u0442\u0435\u0440\u0440\u0430\u043A\u043E\u0442\u0430","block.terracotta_orange":"\u041E\u0440\u0430\u043D\u0436\u0435\u0432\u0430\u044F \u0442\u0435\u0440\u0440\u0430\u043A\u043E\u0442\u0430","block.terracotta_white":"\u0411\u0435\u043B\u0430\u044F \u0442\u0435\u0440\u0440\u0430\u043A\u043E\u0442\u0430","block.terracotta_brown":"\u041A\u043E\u0440\u0438\u0447\u043D\u0435\u0432\u0430\u044F \u0442\u0435\u0440\u0440\u0430\u043A\u043E\u0442\u0430","block.crafting_table":"\u0412\u0435\u0440\u0441\u0442\u0430\u043A","block.furnace":"\u041F\u0435\u0447\u044C","block.bookshelf":"\u041A\u043D\u0438\u0436\u043D\u0430\u044F \u043F\u043E\u043B\u043A\u0430","block.wool_white":"\u0411\u0435\u043B\u0430\u044F \u0448\u0435\u0440\u0441\u0442\u044C","block.wool_red":"\u041A\u0440\u0430\u0441\u043D\u0430\u044F \u0448\u0435\u0440\u0441\u0442\u044C","block.wool_orange":"\u041E\u0440\u0430\u043D\u0436\u0435\u0432\u0430\u044F \u0448\u0435\u0440\u0441\u0442\u044C","block.wool_yellow":"\u0416\u0451\u043B\u0442\u0430\u044F \u0448\u0435\u0440\u0441\u0442\u044C","block.wool_green":"\u0417\u0435\u043B\u0451\u043D\u0430\u044F \u0448\u0435\u0440\u0441\u0442\u044C","block.wool_blue":"\u0421\u0438\u043D\u044F\u044F \u0448\u0435\u0440\u0441\u0442\u044C","block.wool_purple":"\u0424\u0438\u043E\u043B\u0435\u0442\u043E\u0432\u0430\u044F \u0448\u0435\u0440\u0441\u0442\u044C","block.wool_black":"\u0427\u0451\u0440\u043D\u0430\u044F \u0448\u0435\u0440\u0441\u0442\u044C","block.pumpkin":"\u0422\u044B\u043A\u0432\u0430","block.melon":"\u0410\u0440\u0431\u0443\u0437","block.hay":"\u0421\u0442\u043E\u0433 \u0441\u0435\u043D\u0430","block.torch":"\u0424\u0430\u043A\u0435\u043B","block.tall_grass":"\u0412\u044B\u0441\u043E\u043A\u0430\u044F \u0442\u0440\u0430\u0432\u0430","block.fern":"\u041F\u0430\u043F\u043E\u0440\u043E\u0442\u043D\u0438\u043A","block.flower_red":"\u041A\u0440\u0430\u0441\u043D\u044B\u0439 \u0446\u0432\u0435\u0442\u043E\u043A","block.flower_yellow":"\u0416\u0451\u043B\u0442\u044B\u0439 \u0446\u0432\u0435\u0442\u043E\u043A","block.flower_blue":"\u0421\u0438\u043D\u0438\u0439 \u0446\u0432\u0435\u0442\u043E\u043A","block.flower_pink":"\u0420\u043E\u0437\u043E\u0432\u044B\u0439 \u0446\u0432\u0435\u0442\u043E\u043A","block.mushroom_red":"\u041A\u0440\u0430\u0441\u043D\u044B\u0439 \u0433\u0440\u0438\u0431","block.mushroom_brown":"\u041A\u043E\u0440\u0438\u0447\u043D\u0435\u0432\u044B\u0439 \u0433\u0440\u0438\u0431","block.dead_bush":"\u0421\u0443\u0445\u043E\u0439 \u043A\u0443\u0441\u0442","block.sugar_cane":"\u0421\u0430\u0445\u0430\u0440\u043D\u044B\u0439 \u0442\u0440\u043E\u0441\u0442\u043D\u0438\u043A","block.tnt":"\u0414\u0438\u043D\u0430\u043C\u0438\u0442","item.stick":"\u041F\u0430\u043B\u043A\u0430","item.coal":"\u0423\u0433\u043E\u043B\u044C","item.charcoal":"\u0414\u0440\u0435\u0432\u0435\u0441\u043D\u044B\u0439 \u0443\u0433\u043E\u043B\u044C","item.iron_ingot":"\u0416\u0435\u043B\u0435\u0437\u043D\u044B\u0439 \u0441\u043B\u0438\u0442\u043E\u043A","item.gold_ingot":"\u0417\u043E\u043B\u043E\u0442\u043E\u0439 \u0441\u043B\u0438\u0442\u043E\u043A","item.diamond":"\u0410\u043B\u043C\u0430\u0437","item.emerald":"\u0418\u0437\u0443\u043C\u0440\u0443\u0434","item.lapis":"\u041B\u0430\u0437\u0443\u0440\u0438\u0442","item.redstone":"\u041A\u0440\u0430\u0441\u043D\u0430\u044F \u043F\u044B\u043B\u044C","item.clay_ball":"\u041A\u0443\u0441\u043E\u043A \u0433\u043B\u0438\u043D\u044B","item.brick":"\u041A\u0438\u0440\u043F\u0438\u0447","item.flint":"\u041A\u0440\u0435\u043C\u0435\u043D\u044C","item.leather":"\u041A\u043E\u0436\u0430","item.feather":"\u041F\u0435\u0440\u043E","item.string":"\u041D\u0438\u0442\u044C","item.bone":"\u041A\u043E\u0441\u0442\u044C","item.wheat":"\u041F\u0448\u0435\u043D\u0438\u0446\u0430","item.sugar":"\u0421\u0430\u0445\u0430\u0440","item.apple":"\u042F\u0431\u043B\u043E\u043A\u043E","item.bread":"\u0425\u043B\u0435\u0431","item.cookie":"\u041F\u0435\u0447\u0435\u043D\u044C\u0435","item.porkchop_raw":"\u0421\u044B\u0440\u0430\u044F \u0441\u0432\u0438\u043D\u0438\u043D\u0430","item.porkchop":"\u0416\u0430\u0440\u0435\u043D\u0430\u044F \u0441\u0432\u0438\u043D\u0438\u043D\u0430","item.beef_raw":"\u0421\u044B\u0440\u0430\u044F \u0433\u043E\u0432\u044F\u0434\u0438\u043D\u0430","item.beef":"\u0416\u0430\u0440\u0435\u043D\u0430\u044F \u0433\u043E\u0432\u044F\u0434\u0438\u043D\u0430","item.chicken_raw":"\u0421\u044B\u0440\u0430\u044F \u043A\u0443\u0440\u0438\u0446\u0430","item.chicken":"\u0416\u0430\u0440\u0435\u043D\u0430\u044F \u043A\u0443\u0440\u0438\u0446\u0430","item.mushroom_stew":"\u0413\u0440\u0438\u0431\u043D\u043E\u0439 \u0441\u0443\u043F","item.golden_apple":"\u0417\u043E\u043B\u043E\u0442\u043E\u0435 \u044F\u0431\u043B\u043E\u043A\u043E","item.pickaxe_wood":"\u0414\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u0430\u044F \u043A\u0438\u0440\u043A\u0430","item.axe_wood":"\u0414\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u0439 \u0442\u043E\u043F\u043E\u0440","item.shovel_wood":"\u0414\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u0430\u044F \u043B\u043E\u043F\u0430\u0442\u0430","item.sword_wood":"\u0414\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u0439 \u043C\u0435\u0447","item.pickaxe_stone":"\u041A\u0430\u043C\u0435\u043D\u043D\u0430\u044F \u043A\u0438\u0440\u043A\u0430","item.axe_stone":"\u041A\u0430\u043C\u0435\u043D\u043D\u044B\u0439 \u0442\u043E\u043F\u043E\u0440","item.shovel_stone":"\u041A\u0430\u043C\u0435\u043D\u043D\u0430\u044F \u043B\u043E\u043F\u0430\u0442\u0430","item.sword_stone":"\u041A\u0430\u043C\u0435\u043D\u043D\u044B\u0439 \u043C\u0435\u0447","item.pickaxe_iron":"\u0416\u0435\u043B\u0435\u0437\u043D\u0430\u044F \u043A\u0438\u0440\u043A\u0430","item.axe_iron":"\u0416\u0435\u043B\u0435\u0437\u043D\u044B\u0439 \u0442\u043E\u043F\u043E\u0440","item.shovel_iron":"\u0416\u0435\u043B\u0435\u0437\u043D\u0430\u044F \u043B\u043E\u043F\u0430\u0442\u0430","item.sword_iron":"\u0416\u0435\u043B\u0435\u0437\u043D\u044B\u0439 \u043C\u0435\u0447","item.pickaxe_diamond":"\u0410\u043B\u043C\u0430\u0437\u043D\u0430\u044F \u043A\u0438\u0440\u043A\u0430","item.axe_diamond":"\u0410\u043B\u043C\u0430\u0437\u043D\u044B\u0439 \u0442\u043E\u043F\u043E\u0440","item.shovel_diamond":"\u0410\u043B\u043C\u0430\u0437\u043D\u0430\u044F \u043B\u043E\u043F\u0430\u0442\u0430","item.sword_diamond":"\u0410\u043B\u043C\u0430\u0437\u043D\u044B\u0439 \u043C\u0435\u0447","item.lighter":"\u0417\u0430\u0436\u0438\u0433\u0430\u043B\u043A\u0430","item.helmet_leather":"\u041A\u043E\u0436\u0430\u043D\u044B\u0439 \u0448\u043B\u0435\u043C","item.chestplate_leather":"\u041A\u043E\u0436\u0430\u043D\u044B\u0439 \u043D\u0430\u0433\u0440\u0443\u0434\u043D\u0438\u043A","item.leggings_leather":"\u041A\u043E\u0436\u0430\u043D\u044B\u0435 \u043F\u043E\u043D\u043E\u0436\u0438","item.boots_leather":"\u041A\u043E\u0436\u0430\u043D\u044B\u0435 \u0431\u043E\u0442\u0438\u043D\u043A\u0438","item.helmet_gold":"\u0417\u043E\u043B\u043E\u0442\u043E\u0439 \u0448\u043B\u0435\u043C","item.chestplate_gold":"\u0417\u043E\u043B\u043E\u0442\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0434\u043D\u0438\u043A","item.leggings_gold":"\u0417\u043E\u043B\u043E\u0442\u044B\u0435 \u043F\u043E\u043D\u043E\u0436\u0438","item.boots_gold":"\u0417\u043E\u043B\u043E\u0442\u044B\u0435 \u0431\u043E\u0442\u0438\u043D\u043A\u0438","item.helmet_iron":"\u0416\u0435\u043B\u0435\u0437\u043D\u044B\u0439 \u0448\u043B\u0435\u043C","item.chestplate_iron":"\u0416\u0435\u043B\u0435\u0437\u043D\u044B\u0439 \u043D\u0430\u0433\u0440\u0443\u0434\u043D\u0438\u043A","item.leggings_iron":"\u0416\u0435\u043B\u0435\u0437\u043D\u044B\u0435 \u043F\u043E\u043D\u043E\u0436\u0438","item.boots_iron":"\u0416\u0435\u043B\u0435\u0437\u043D\u044B\u0435 \u0431\u043E\u0442\u0438\u043D\u043A\u0438","item.helmet_diamond":"\u0410\u043B\u043C\u0430\u0437\u043D\u044B\u0439 \u0448\u043B\u0435\u043C","item.chestplate_diamond":"\u0410\u043B\u043C\u0430\u0437\u043D\u044B\u0439 \u043D\u0430\u0433\u0440\u0443\u0434\u043D\u0438\u043A","item.leggings_diamond":"\u0410\u043B\u043C\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u043D\u043E\u0436\u0438","item.boots_diamond":"\u0410\u043B\u043C\u0430\u0437\u043D\u044B\u0435 \u0431\u043E\u0442\u0438\u043D\u043A\u0438"},Av={"game.title":"Craft Block Classic","game.subtitle":"An endless world of blocks","loading.title":"Loading world","loading.textures":"Generating textures\u2026","loading.world":"Generating world\u2026","loading.chunks":"Building terrain\u2026","loading.almost":"Almost there\u2026","menu.play":"Play","menu.continue":"Continue","menu.newworld":"New world","menu.leaderboard":"Leaderboard","menu.rewards":"Rewards","menu.settings":"Settings","menu.howto":"Controls","menu.back":"Back","menu.close":"Close","menu.resume":"Resume","menu.tomenu":"Main menu","menu.paused":"Paused","menu.confirmNew":"Start a new world? Current progress will be lost.","menu.yes":"Yes","menu.no":"No","hud.score":"Points","hud.best":"Best","hud.health":"Health","hud.food":"Food","hud.depth":"Depth","hud.biome":"Biome","hud.coords":"Position","hud.day":"Day","hud.night":"Night","hud.fps":"FPS","mp.title":"Play with friends","mp.hint":"Enter the same room code to share a world","mp.server":"Server","mp.room":"Room code","mp.nick":"Name","mp.connect":"Connect","mp.leave":"Disconnect","mp.connecting":"Connecting\u2026","mp.connected":"Connected","mp.reconnecting":"Connection lost, reconnecting\u2026","mp.offline":"Not connected","mp.full":"Room is full","mp.error":"Could not connect","mp.noHost":"Enter the server address","mp.joined":"{name} joined","mp.entered":'You are in room "{room}"',"chest.title":"Chest","chest.yours":"Your inventory","furnace.title":"Furnace","furnace.input":"Input","furnace.fuel":"Fuel","furnace.output":"Result","boss.name":"Tung Tung Sahur","boss.appears":"Tung Tung Sahur has awoken!","boss.defeated":"Tung Tung Sahur is defeated!","boss.enraged":"ENRAGED","ctrl.interact":"Interact","block.chest":"Chest","block.arena_brick":"Arena brick","block.arena_pillar":"Arena pillar","inv.title":"Inventory","inv.craft":"Crafting table","inv.craft2":"Hand crafting","inv.recipes":"Recipes","inv.result":"Result","inv.empty":"Empty","inv.noRecipes":"No recipes available. Gather more resources!","inv.needTable":"A 3\xD73 crafting table is required \u2014 place one and stand near it","inv.hint":"Tap a recipe to craft it","set.title":"Settings","set.language":"Language","set.renderDistance":"Render distance","set.auto":"Auto","set.fov":"Field of view","set.sensitivity":"Sensitivity","set.sfx":"Sound volume","set.music":"Music volume","set.autoJump":"Auto jump","set.showFps":"Show FPS","set.clouds":"Clouds","set.weather":"Weather","set.invertY":"Invert Y axis","set.vignette":"Vignette","set.rayTracing":"Ray tracing","set.rayTracingNote":"True shadows, occlusion and reflections on water. Heavy on the GPU","set.mode":"Game mode","set.survival":"Survival","set.creative":"Creative","set.creativeNote":"Creative mode does not earn points","set.on":"On","set.off":"Off","set.reset":"Reset settings","set.creativeLocked":"\u{1F4FA} Unlock with an ad","set.creativeUnlocked":"Creative mode is unlocked for this session","creative.title":"Creative inventory","creative.hint":"Tap an item to put it in the selected slot","creative.clearHint":"Long-press a bottom slot to clear it","creative.page":"Page {n} of {total}","creative.search":"Search","creative.nothing":"Nothing found","vid.creative.name":"Creative mode","vid.creative.desc":"Watch an ad to unlock flight, unlimited blocks and the creative inventory for this session","toast.creativeUnlocked":"Creative mode unlocked!","ctrl.title":"Controls","ctrl.move":"Move","ctrl.look":"Look","ctrl.jump":"Jump","ctrl.sneak":"Sneak","ctrl.sprint":"Sprint","ctrl.break":"Break block","ctrl.place":"Place block","ctrl.inventory":"Inventory","ctrl.pause":"Pause","ctrl.fly":"Fly (creative)","ctrl.view":"First / third person view","ctrl.hotbar":"Select block","ctrl.mouse":"Mouse","ctrl.space":"Space","ctrl.lmb":"LMB","ctrl.rmb":"RMB","ctrl.wheel":"Wheel / 1\u20139","ctrl.touchMove":"Left stick","ctrl.touchLook":"Swipe on the right","ctrl.tapStart":"Tap to play","ctrl.clickStart":"Click to capture the mouse","ctrl.dragStart":"The camera follows your mouse","lb.title":"Leaderboard","lb.you":"You","lb.rank":"Rank","lb.player":"Player","lb.points":"Points","lb.empty":"No records yet. Be the first!","lb.loading":"Loading\u2026","lb.error":"Could not load the leaderboard","lb.anon":"Anonymous","vid.rewardTitle":"Ad rewards","vid.rewardHint":"Watch a short video and claim your reward","vid.watch":"\u{1F4FA} Watch ad","vid.cta.heal":"\u{1F4FA} Watch ad \u2192 full health","vid.cta.crate":"\u{1F4FA} Watch ad \u2192 supply crate","vid.cta.boost":"\u{1F4FA} Watch ad \u2192 \xD72 points, 5 min","vid.healFull":"Health and food are already full","vid.boostOn":"Bonus is already active","vid.cooldown":"in {s}s","vid.menuHint":"More rewards are available during play","vid.overlay":"Advertisement\u2026","vid.reward1.name":"Full recovery","vid.reward1.desc":"Watch an ad and restore your health and food to full","vid.reward2.name":"Supply crate","vid.reward2.desc":"Watch an ad and receive torches, food, planks and iron tools","vid.reward3.name":"Double points \xD72","vid.reward3.desc":"Watch an ad and earn double points for 5 minutes","vid.rewardGot":"Reward claimed!","vid.rewardFail":"Ad unavailable, please try again later","vid.boostActive":"\xD72 bonus active","vid.warning":"Ad break soon","vid.warningSub":"The game will pause for a few seconds","vid.revive":"\u{1F4FA} Watch ad: respawn and keep your items","death.title":"You died","death.score":"Points earned","death.respawn":"Respawn","death.cause.fall":"Fell from a high place","death.cause.lava":"Burned in lava","death.cause.drown":"Drowned","death.cause.mob":"Slain by a monster","death.cause.cactus":"Pricked by a cactus","death.cause.starve":"Starved","death.cause.void":"Fell into the void","toast.mined":"Mined","toast.crafted":"Crafted","toast.newBiome":"Biome discovered","toast.record":"New record!","toast.saved":"Game saved","toast.invFull":"Inventory full","toast.needTool":"A stronger tool is required","toast.deepDive":"Deep dive","toast.boostEnd":"\xD72 bonus ended","biome.deep_ocean":"Deep ocean","biome.ocean":"Ocean","biome.beach":"Beach","biome.river":"River","biome.stone_shore":"Stone shore","biome.plains":"Plains","biome.meadow":"Flower meadow","biome.forest":"Forest","biome.birch_forest":"Birch forest","biome.dark_forest":"Dark forest","biome.taiga":"Taiga","biome.snowy_taiga":"Snowy taiga","biome.snowy_plains":"Snowy plains","biome.ice_spikes":"Ice spikes","biome.mountains":"Mountains","biome.snowy_peaks":"Snowy peaks","biome.desert":"Desert","biome.savanna":"Savanna","biome.jungle":"Jungle","biome.swamp":"Swamp","biome.badlands":"Badlands","biome.mushroom_isle":"Mushroom isle","block.air":"Air","block.stone":"Stone","block.grass":"Grass block","block.dirt":"Dirt","block.cobble":"Cobblestone","block.bedrock":"Bedrock","block.sand":"Sand","block.red_sand":"Red sand","block.sandstone":"Sandstone","block.red_sandstone":"Red sandstone","block.gravel":"Gravel","block.clay":"Clay","block.water":"Water","block.lava":"Lava","block.ice":"Ice","block.packed_ice":"Packed ice","block.snow":"Snow block","block.snowy_grass":"Snowy grass","block.granite":"Granite","block.diorite":"Diorite","block.andesite":"Andesite","block.obsidian":"Obsidian","block.polished_stone":"Polished stone","block.log_oak":"Oak log","block.log_birch":"Birch log","block.log_spruce":"Spruce log","block.log_jungle":"Jungle log","block.leaves_oak":"Oak leaves","block.leaves_birch":"Birch leaves","block.leaves_spruce":"Spruce leaves","block.leaves_jungle":"Jungle leaves","block.planks_oak":"Oak planks","block.planks_birch":"Birch planks","block.planks_spruce":"Spruce planks","block.planks_jungle":"Jungle planks","block.glass":"Glass","block.bricks":"Bricks","block.stone_bricks":"Stone bricks","block.mossy_stone_bricks":"Mossy stone bricks","block.mossy_cobble":"Mossy cobblestone","block.chiseled_stone":"Chiseled stone","block.coal_ore":"Coal ore","block.iron_ore":"Iron ore","block.gold_ore":"Gold ore","block.diamond_ore":"Diamond ore","block.redstone_ore":"Redstone ore","block.lapis_ore":"Lapis ore","block.emerald_ore":"Emerald ore","block.coal_block":"Block of coal","block.iron_block":"Block of iron","block.gold_block":"Block of gold","block.diamond_block":"Block of diamond","block.emerald_block":"Block of emerald","block.lapis_block":"Block of lapis","block.glowstone":"Glowstone","block.sea_lantern":"Sea lantern","block.prismarine":"Prismarine","block.cactus":"Cactus","block.podzol":"Podzol","block.mycelium":"Mycelium","block.terracotta":"Terracotta","block.terracotta_red":"Red terracotta","block.terracotta_orange":"Orange terracotta","block.terracotta_white":"White terracotta","block.terracotta_brown":"Brown terracotta","block.crafting_table":"Crafting table","block.furnace":"Furnace","block.bookshelf":"Bookshelf","block.wool_white":"White wool","block.wool_red":"Red wool","block.wool_orange":"Orange wool","block.wool_yellow":"Yellow wool","block.wool_green":"Green wool","block.wool_blue":"Blue wool","block.wool_purple":"Purple wool","block.wool_black":"Black wool","block.pumpkin":"Pumpkin","block.melon":"Melon","block.hay":"Hay bale","block.torch":"Torch","block.tall_grass":"Tall grass","block.fern":"Fern","block.flower_red":"Red flower","block.flower_yellow":"Yellow flower","block.flower_blue":"Blue flower","block.flower_pink":"Pink flower","block.mushroom_red":"Red mushroom","block.mushroom_brown":"Brown mushroom","block.dead_bush":"Dead bush","block.sugar_cane":"Sugar cane","block.tnt":"Dynamite","item.stick":"Stick","item.coal":"Coal","item.charcoal":"Charcoal","item.iron_ingot":"Iron ingot","item.gold_ingot":"Gold ingot","item.diamond":"Diamond","item.emerald":"Emerald","item.lapis":"Lapis lazuli","item.redstone":"Redstone dust","item.clay_ball":"Clay ball","item.brick":"Brick","item.flint":"Flint","item.leather":"Leather","item.feather":"Feather","item.string":"String","item.bone":"Bone","item.wheat":"Wheat","item.sugar":"Sugar","item.apple":"Apple","item.bread":"Bread","item.cookie":"Cookie","item.porkchop_raw":"Raw porkchop","item.porkchop":"Cooked porkchop","item.beef_raw":"Raw beef","item.beef":"Steak","item.chicken_raw":"Raw chicken","item.chicken":"Cooked chicken","item.mushroom_stew":"Mushroom stew","item.golden_apple":"Golden apple","item.pickaxe_wood":"Wooden pickaxe","item.axe_wood":"Wooden axe","item.shovel_wood":"Wooden shovel","item.sword_wood":"Wooden sword","item.pickaxe_stone":"Stone pickaxe","item.axe_stone":"Stone axe","item.shovel_stone":"Stone shovel","item.sword_stone":"Stone sword","item.pickaxe_iron":"Iron pickaxe","item.axe_iron":"Iron axe","item.shovel_iron":"Iron shovel","item.sword_iron":"Iron sword","item.pickaxe_diamond":"Diamond pickaxe","item.axe_diamond":"Diamond axe","item.shovel_diamond":"Diamond shovel","item.sword_diamond":"Diamond sword","item.lighter":"Lighter","item.helmet_leather":"Leather helmet","item.chestplate_leather":"Leather chestplate","item.leggings_leather":"Leather leggings","item.boots_leather":"Leather boots","item.helmet_gold":"Golden helmet","item.chestplate_gold":"Golden chestplate","item.leggings_gold":"Golden leggings","item.boots_gold":"Golden boots","item.helmet_iron":"Iron helmet","item.chestplate_iron":"Iron chestplate","item.leggings_iron":"Iron leggings","item.boots_iron":"Iron boots","item.helmet_diamond":"Diamond helmet","item.chestplate_diamond":"Diamond chestplate","item.leggings_diamond":"Diamond leggings","item.boots_diamond":"Diamond boots"},Tv={"game.title":"Craft Block Classic","game.subtitle":"Sonsuz blok d\xFCnyas\u0131","loading.title":"D\xFCnya y\xFCkleniyor","loading.textures":"Dokular olu\u015Fturuluyor\u2026","loading.world":"D\xFCnya \xFCretiliyor\u2026","loading.chunks":"Arazi in\u015Fa ediliyor\u2026","loading.almost":"Neredeyse haz\u0131r\u2026","menu.play":"Oyna","menu.continue":"Devam et","menu.newworld":"Yeni d\xFCnya","menu.leaderboard":"Liderlik tablosu","menu.rewards":"\xD6d\xFCller","menu.settings":"Ayarlar","menu.howto":"Kontroller","menu.back":"Geri","menu.close":"Kapat","menu.resume":"Devam et","menu.tomenu":"Ana men\xFC","menu.paused":"Duraklat\u0131ld\u0131","menu.confirmNew":"Yeni d\xFCnya ba\u015Flat\u0131ls\u0131n m\u0131? Mevcut ilerleme kaybolacak.","menu.yes":"Evet","menu.no":"Hay\u0131r","hud.score":"Puan","hud.best":"Rekor","hud.health":"Can","hud.food":"A\xE7l\u0131k","hud.depth":"Derinlik","hud.biome":"Biyom","hud.coords":"Konum","hud.day":"G\xFCnd\xFCz","hud.night":"Gece","hud.fps":"FPS","mp.title":"Arkada\u015Flarla oyna","mp.hint":"Ayn\u0131 d\xFCnyay\u0131 payla\u015Fmak i\xE7in ayn\u0131 oda kodunu girin","mp.server":"Sunucu","mp.room":"Oda kodu","mp.nick":"\u0130sim","mp.connect":"Ba\u011Flan","mp.leave":"Ba\u011Flant\u0131y\u0131 kes","mp.connecting":"Ba\u011Flan\u0131yor\u2026","mp.connected":"Ba\u011Fland\u0131","mp.reconnecting":"Ba\u011Flant\u0131 koptu, yeniden ba\u011Flan\u0131l\u0131yor\u2026","mp.offline":"Ba\u011Fl\u0131 de\u011Fil","mp.full":"Oda dolu","mp.error":"Ba\u011Flan\u0131lamad\u0131","mp.noHost":"Sunucu adresini girin","mp.joined":"{name} kat\u0131ld\u0131","mp.entered":'"{room}" odas\u0131ndas\u0131n\u0131z',"chest.title":"Sand\u0131k","chest.yours":"Envanteriniz","furnace.title":"F\u0131r\u0131n","furnace.input":"Hammadde","furnace.fuel":"Yak\u0131t","furnace.output":"Sonu\xE7","boss.name":"Tung Tung Sahur","boss.appears":"Tung Tung Sahur uyand\u0131!","boss.defeated":"Tung Tung Sahur yenildi!","boss.enraged":"\xD6FKEL\u0130","ctrl.interact":"Etkile\u015Fim","block.chest":"Sand\u0131k","block.arena_brick":"Arena tu\u011Flas\u0131","block.arena_pillar":"Arena s\xFCtunu","inv.title":"Envanter","inv.craft":"\xC7al\u0131\u015Fma tezg\xE2h\u0131","inv.craft2":"Elde \xFCretim","inv.recipes":"Tarifler","inv.result":"Sonu\xE7","inv.empty":"Bo\u015F","inv.noRecipes":"Uygun tarif yok. Daha fazla kaynak toplay\u0131n!","inv.needTable":"3\xD73 \xE7al\u0131\u015Fma tezg\xE2h\u0131 gerekli \u2014 bir tane yerle\u015Ftirip yan\u0131na gelin","inv.hint":"\xDCretmek i\xE7in bir tarife dokunun","set.title":"Ayarlar","set.language":"Dil","set.renderDistance":"G\xF6r\xFC\u015F mesafesi","set.auto":"Otomatik","set.fov":"G\xF6r\xFC\u015F a\xE7\u0131s\u0131","set.sensitivity":"Hassasiyet","set.sfx":"Ses seviyesi","set.music":"M\xFCzik seviyesi","set.autoJump":"Otomatik z\u0131plama","set.showFps":"FPS g\xF6ster","set.clouds":"Bulutlar","set.weather":"Hava durumu","set.invertY":"Y eksenini ters \xE7evir","set.vignette":"Vinyet","set.rayTracing":"I\u015F\u0131n izleme","set.rayTracingNote":"Ger\xE7ek g\xF6lgeler, g\xF6lgelenme ve suda yans\u0131malar. Ekran kart\u0131n\u0131 \xE7ok yorar","set.mode":"Oyun modu","set.survival":"Hayatta kalma","set.creative":"Yarat\u0131c\u0131","set.creativeNote":"Yarat\u0131c\u0131 modda puan kazan\u0131lmaz","set.on":"A\xE7\u0131k","set.off":"Kapal\u0131","set.reset":"Ayarlar\u0131 s\u0131f\u0131rla","set.creativeLocked":"\u{1F4FA} Reklamla a\xE7","set.creativeUnlocked":"Yarat\u0131c\u0131 mod bu oturum boyunca a\xE7\u0131k","creative.title":"Yarat\u0131c\u0131 envanter","creative.hint":"Se\xE7ili yuvaya koymak i\xE7in bir \xF6\u011Feye dokunun","creative.clearHint":"Alttaki bir yuvay\u0131 temizlemek i\xE7in bas\u0131l\u0131 tutun","creative.page":"Sayfa {n} / {total}","creative.search":"Ara","creative.nothing":"Bir \u015Fey bulunamad\u0131","vid.creative.name":"Yarat\u0131c\u0131 mod","vid.creative.desc":"Reklam izleyin; u\xE7u\u015F, s\u0131n\u0131rs\u0131z blok ve yarat\u0131c\u0131 envanter bu oturum boyunca a\xE7\u0131ls\u0131n","toast.creativeUnlocked":"Yarat\u0131c\u0131 mod a\xE7\u0131ld\u0131!","ctrl.title":"Kontroller","ctrl.move":"Hareket","ctrl.look":"Bak\u0131\u015F","ctrl.jump":"Z\u0131pla","ctrl.sneak":"Sin","ctrl.sprint":"Ko\u015F","ctrl.break":"Blok k\u0131r","ctrl.place":"Blok koy","ctrl.inventory":"Envanter","ctrl.pause":"Duraklat","ctrl.fly":"U\xE7u\u015F (yarat\u0131c\u0131)","ctrl.view":"Birinci / \xFC\xE7\xFCnc\xFC \u015Fah\u0131s g\xF6r\xFCn\xFCm\xFC","ctrl.hotbar":"Blok se\xE7","ctrl.mouse":"Fare","ctrl.space":"Bo\u015Fluk","ctrl.lmb":"Sol t\u0131k","ctrl.rmb":"Sa\u011F t\u0131k","ctrl.wheel":"Tekerlek / 1\u20139","ctrl.touchMove":"Sol \xE7ubuk","ctrl.touchLook":"Sa\u011Fda kayd\u0131r","ctrl.tapStart":"Oynamak i\xE7in dokun","ctrl.clickStart":"Fareyi yakalamak i\xE7in t\u0131kla","ctrl.dragStart":"Kamera farenizi takip eder","lb.title":"Liderlik tablosu","lb.you":"Sen","lb.rank":"S\u0131ra","lb.player":"Oyuncu","lb.points":"Puan","lb.empty":"Hen\xFCz rekor yok. \u0130lk sen ol!","lb.loading":"Y\xFCkleniyor\u2026","lb.error":"Liderlik tablosu y\xFCklenemedi","lb.anon":"Anonim","vid.rewardTitle":"Reklam \xF6d\xFClleri","vid.rewardHint":"K\u0131sa bir video izleyin ve \xF6d\xFCl\xFCn\xFCz\xFC al\u0131n","vid.watch":"\u{1F4FA} Reklam izle","vid.cta.heal":"\u{1F4FA} Reklam izle \u2192 tam can","vid.cta.crate":"\u{1F4FA} Reklam izle \u2192 erzak sand\u0131\u011F\u0131","vid.cta.boost":"\u{1F4FA} Reklam izle \u2192 5 dk \xD72 puan","vid.healFull":"Can ve tokluk zaten dolu","vid.boostOn":"Bonus zaten etkin","vid.cooldown":"{s} sn sonra","vid.menuHint":"Di\u011Fer \xF6d\xFCller oyun s\u0131ras\u0131nda kullan\u0131labilir","vid.overlay":"Reklam\u2026","vid.reward1.name":"Tam yenilenme","vid.reward1.desc":"Reklam izleyin, can ve a\xE7l\u0131k g\xF6stergeniz tamamen dolsun","vid.reward2.name":"Erzak sand\u0131\u011F\u0131","vid.reward2.desc":"Reklam izleyin; me\u015Fale, yiyecek, tahta ve demir aletler kazan\u0131n","vid.reward3.name":"\xC7ift puan \xD72","vid.reward3.desc":"Reklam izleyin ve 5 dakika boyunca iki kat puan kazan\u0131n","vid.rewardGot":"\xD6d\xFCl al\u0131nd\u0131!","vid.rewardFail":"Reklam kullan\u0131lam\u0131yor, daha sonra tekrar deneyin","vid.boostActive":"\xD72 bonus etkin","vid.warning":"Reklam aras\u0131 yakla\u015F\u0131yor","vid.warningSub":"Oyun birka\xE7 saniye duraklat\u0131lacak","vid.revive":"\u{1F4FA} Reklam izle: e\u015Fyalar\u0131nla yeniden do\u011F","death.title":"\xD6ld\xFCn\xFCz","death.score":"Kazan\u0131lan puan","death.respawn":"Yeniden do\u011F","death.cause.fall":"Y\xFCksekten d\xFC\u015Ft\xFCn\xFCz","death.cause.lava":"Lavda yand\u0131n\u0131z","death.cause.drown":"Bo\u011Fuldunuz","death.cause.mob":"Bir canavar taraf\u0131ndan yenildiniz","death.cause.cactus":"Kakt\xFCs batt\u0131","death.cause.starve":"A\xE7l\u0131ktan \xF6ld\xFCn\xFCz","death.cause.void":"Bo\u015Flu\u011Fa d\xFC\u015Ft\xFCn\xFCz","toast.mined":"Kaz\u0131ld\u0131","toast.crafted":"\xDCretildi","toast.newBiome":"Biyom ke\u015Ffedildi","toast.record":"Yeni rekor!","toast.saved":"Oyun kaydedildi","toast.invFull":"Envanter dolu","toast.needTool":"Daha g\xFC\xE7l\xFC bir alet gerekli","toast.deepDive":"Derin dal\u0131\u015F","toast.boostEnd":"\xD72 bonus bitti","biome.deep_ocean":"Derin okyanus","biome.ocean":"Okyanus","biome.beach":"Plaj","biome.river":"Nehir","biome.stone_shore":"Ta\u015Fl\u0131 k\u0131y\u0131","biome.plains":"Ovalar","biome.meadow":"\xC7i\xE7ekli \xE7ay\u0131r","biome.forest":"Orman","biome.birch_forest":"Hu\u015F orman\u0131","biome.dark_forest":"Karanl\u0131k orman","biome.taiga":"Tayga","biome.snowy_taiga":"Karl\u0131 tayga","biome.snowy_plains":"Karl\u0131 ovalar","biome.ice_spikes":"Buz dikenleri","biome.mountains":"Da\u011Flar","biome.snowy_peaks":"Karl\u0131 zirveler","biome.desert":"\xC7\xF6l","biome.savanna":"Savan","biome.jungle":"Orman (tropik)","biome.swamp":"Batakl\u0131k","biome.badlands":"\xC7orak topraklar","biome.mushroom_isle":"Mantar adas\u0131","block.air":"Hava","block.stone":"Ta\u015F","block.grass":"\xC7im blo\u011Fu","block.dirt":"Toprak","block.cobble":"Kald\u0131r\u0131m ta\u015F\u0131","block.bedrock":"Ana kaya","block.sand":"Kum","block.red_sand":"K\u0131z\u0131l kum","block.sandstone":"Kumta\u015F\u0131","block.red_sandstone":"K\u0131z\u0131l kumta\u015F\u0131","block.gravel":"\xC7ak\u0131l","block.clay":"Kil","block.water":"Su","block.lava":"Lav","block.ice":"Buz","block.packed_ice":"S\u0131k\u0131 buz","block.snow":"Kar blo\u011Fu","block.snowy_grass":"Karl\u0131 \xE7im","block.granite":"Granit","block.diorite":"Diyorit","block.andesite":"Andezit","block.obsidian":"Obsidyen","block.polished_stone":"Cilal\u0131 ta\u015F","block.log_oak":"Me\u015Fe k\xFCt\xFC\u011F\xFC","block.log_birch":"Hu\u015F k\xFCt\xFC\u011F\xFC","block.log_spruce":"Ladin k\xFCt\xFC\u011F\xFC","block.log_jungle":"Tropik k\xFCt\xFCk","block.leaves_oak":"Me\u015Fe yapra\u011F\u0131","block.leaves_birch":"Hu\u015F yapra\u011F\u0131","block.leaves_spruce":"Ladin yapra\u011F\u0131","block.leaves_jungle":"Tropik yaprak","block.planks_oak":"Me\u015Fe tahtas\u0131","block.planks_birch":"Hu\u015F tahtas\u0131","block.planks_spruce":"Ladin tahtas\u0131","block.planks_jungle":"Tropik tahta","block.glass":"Cam","block.bricks":"Tu\u011Fla","block.stone_bricks":"Ta\u015F tu\u011Fla","block.mossy_stone_bricks":"Yosunlu ta\u015F tu\u011Fla","block.mossy_cobble":"Yosunlu kald\u0131r\u0131m ta\u015F\u0131","block.chiseled_stone":"Oymal\u0131 ta\u015F","block.coal_ore":"K\xF6m\xFCr cevheri","block.iron_ore":"Demir cevheri","block.gold_ore":"Alt\u0131n cevheri","block.diamond_ore":"Elmas cevheri","block.redstone_ore":"K\u0131z\u0131lta\u015F cevheri","block.lapis_ore":"Lapis cevheri","block.emerald_ore":"Z\xFCmr\xFCt cevheri","block.coal_block":"K\xF6m\xFCr blo\u011Fu","block.iron_block":"Demir blo\u011Fu","block.gold_block":"Alt\u0131n blo\u011Fu","block.diamond_block":"Elmas blo\u011Fu","block.emerald_block":"Z\xFCmr\xFCt blo\u011Fu","block.lapis_block":"Lapis blo\u011Fu","block.glowstone":"I\u015F\u0131lta\u015F\u0131","block.sea_lantern":"Deniz feneri","block.prismarine":"Prizmarin","block.cactus":"Kakt\xFCs","block.podzol":"Podzol","block.mycelium":"Miselyum","block.terracotta":"Terakota","block.terracotta_red":"K\u0131z\u0131l terakota","block.terracotta_orange":"Turuncu terakota","block.terracotta_white":"Beyaz terakota","block.terracotta_brown":"Kahverengi terakota","block.crafting_table":"\xC7al\u0131\u015Fma tezg\xE2h\u0131","block.furnace":"F\u0131r\u0131n","block.bookshelf":"Kitapl\u0131k","block.wool_white":"Beyaz y\xFCn","block.wool_red":"K\u0131rm\u0131z\u0131 y\xFCn","block.wool_orange":"Turuncu y\xFCn","block.wool_yellow":"Sar\u0131 y\xFCn","block.wool_green":"Ye\u015Fil y\xFCn","block.wool_blue":"Mavi y\xFCn","block.wool_purple":"Mor y\xFCn","block.wool_black":"Siyah y\xFCn","block.pumpkin":"Balkaba\u011F\u0131","block.melon":"Karpuz","block.hay":"Saman balyas\u0131","block.torch":"Me\u015Fale","block.tall_grass":"Uzun \xE7im","block.fern":"E\u011Frelti otu","block.flower_red":"K\u0131rm\u0131z\u0131 \xE7i\xE7ek","block.flower_yellow":"Sar\u0131 \xE7i\xE7ek","block.flower_blue":"Mavi \xE7i\xE7ek","block.flower_pink":"Pembe \xE7i\xE7ek","block.mushroom_red":"K\u0131rm\u0131z\u0131 mantar","block.mushroom_brown":"Kahverengi mantar","block.dead_bush":"Kuru \xE7al\u0131","block.sugar_cane":"\u015Eeker kam\u0131\u015F\u0131","block.tnt":"Dinamit","item.stick":"\xC7ubuk","item.coal":"K\xF6m\xFCr","item.charcoal":"Odun k\xF6m\xFCr\xFC","item.iron_ingot":"Demir k\xFCl\xE7e","item.gold_ingot":"Alt\u0131n k\xFCl\xE7e","item.diamond":"Elmas","item.emerald":"Z\xFCmr\xFCt","item.lapis":"Lapis lazuli","item.redstone":"K\u0131z\u0131lta\u015F tozu","item.clay_ball":"Kil topu","item.brick":"Tu\u011Fla","item.flint":"\xC7akmakta\u015F\u0131","item.leather":"Deri","item.feather":"T\xFCy","item.string":"\u0130p","item.bone":"Kemik","item.wheat":"Bu\u011Fday","item.sugar":"\u015Eeker","item.apple":"Elma","item.bread":"Ekmek","item.cookie":"Kurabiye","item.porkchop_raw":"\xC7i\u011F domuz pirzolas\u0131","item.porkchop":"Pi\u015Fmi\u015F domuz pirzolas\u0131","item.beef_raw":"\xC7i\u011F s\u0131\u011F\u0131r eti","item.beef":"Biftek","item.chicken_raw":"\xC7i\u011F tavuk","item.chicken":"Pi\u015Fmi\u015F tavuk","item.mushroom_stew":"Mantar \xE7orbas\u0131","item.golden_apple":"Alt\u0131n elma","item.pickaxe_wood":"Tahta kazma","item.axe_wood":"Tahta balta","item.shovel_wood":"Tahta k\xFCrek","item.sword_wood":"Tahta k\u0131l\u0131\xE7","item.pickaxe_stone":"Ta\u015F kazma","item.axe_stone":"Ta\u015F balta","item.shovel_stone":"Ta\u015F k\xFCrek","item.sword_stone":"Ta\u015F k\u0131l\u0131\xE7","item.pickaxe_iron":"Demir kazma","item.axe_iron":"Demir balta","item.shovel_iron":"Demir k\xFCrek","item.sword_iron":"Demir k\u0131l\u0131\xE7","item.pickaxe_diamond":"Elmas kazma","item.axe_diamond":"Elmas balta","item.shovel_diamond":"Elmas k\xFCrek","item.sword_diamond":"Elmas k\u0131l\u0131\xE7","item.lighter":"\xC7akmak","item.helmet_leather":"Deri mi\u011Ffer","item.chestplate_leather":"Deri g\xF6\u011F\xFCsl\xFCk","item.leggings_leather":"Deri pantolon","item.boots_leather":"Deri bot","item.helmet_gold":"Alt\u0131n mi\u011Ffer","item.chestplate_gold":"Alt\u0131n g\xF6\u011F\xFCsl\xFCk","item.leggings_gold":"Alt\u0131n pantolon","item.boots_gold":"Alt\u0131n bot","item.helmet_iron":"Demir mi\u011Ffer","item.chestplate_iron":"Demir g\xF6\u011F\xFCsl\xFCk","item.leggings_iron":"Demir pantolon","item.boots_iron":"Demir bot","item.helmet_diamond":"Elmas mi\u011Ffer","item.chestplate_diamond":"Elmas g\xF6\u011F\xFCsl\xFCk","item.leggings_diamond":"Elmas pantolon","item.boots_diamond":"Elmas bot"},Zo={ru:wv,en:Av,tr:Tv};var xr="en",Jo=xr,eh=new Set;function vd(n){let t=Zo[n]?n:xr;if(t!==Jo){Jo=t,typeof document<"u"&&(document.documentElement.lang=t);for(let e of eh)e(t)}}function Fs(){return Jo}function yd(n){return eh.add(n),()=>eh.delete(n)}function nt(n,t){var i;let e=((i=Zo[Jo])==null?void 0:i[n])??Zo[xr][n]??n;if(t)for(let s of Object.keys(t))e=e.replaceAll(`{${s}}`,t[s]);return e}function xd(n){if(!n)return xr;let t=String(n).toLowerCase().split(/[-_]/)[0];return Zo[t]?t:xr}function br(n=document){n.querySelectorAll("[data-i18n]").forEach(t=>{t.textContent=nt(t.getAttribute("data-i18n"))}),n.querySelectorAll("[data-i18n-aria]").forEach(t=>{t.setAttribute("aria-label",nt(t.getAttribute("data-i18n-aria")))})}var bd=[0,2,4,7,9,12,14,16,19,21],Sd="assets/sounds/",ih=class{constructor(){this.ctx=null,this.master=null,this.sfxGain=null,this.musicGain=null,this.noiseBuf=null,this.enabled=!0,this.sfxVolume=.7,this.musicVolume=.35,this.musicTimer=0,this.musicOn=!1,this.suspended=!1,this.held=!1,this._lastStep=0,this.samples=Object.create(null),this.packLoaded=!1,this.rainNode=null,this.rainGain=null}has(t){return this.packLoaded&&!!this.samples[t]}async loadPack(t){if(!this.ensure())return{loaded:0,total:0};return{loaded:0,total:0};try{let l=await fetch(`${Sd}manifest.json`,{cache:"force-cache"});l.ok&&(e=await l.json())}catch{}}play(t,{vol:e=1,rate:i=1,spread:s=.12}={}){if(!this.has(t)||this.suspended||!this.ctx)return!1;let r=this.samples[t],o=r[Math.random()*r.length|0];if(!o)return!1;let a=this.now(),l=this.ctx.createBufferSource();l.buffer=o,l.playbackRate.value=i*(1+(Math.random()-.5)*s*2);let c=this.ctx.createGain();return c.gain.value=e,l.connect(c),c.connect(this.sfxGain),l.start(a),!0}playAt(t,e,i={}){let s=Math.max(0,1-e/34);return s<=.02?!1:this.play(t,{...i,vol:(i.vol??1)*s})}setRain(t){if(!this.ctx||this.suspended)return;let e=Math.max(0,Math.min(1,t));if(e<=.001){this.rainGain&&this.rainGain.gain.setTargetAtTime(0,this.now(),.6);return}if(!this.rainNode&&this.has("rain")){let i=this.samples.rain,s=this.ctx.createBufferSource();s.buffer=i[Math.random()*i.length|0],s.loop=!0;let r=this.ctx.createGain();r.gain.value=0,s.connect(r),r.connect(this.sfxGain),s.start(this.now()),this.rainNode=s,this.rainGain=r}this.rainGain&&this.rainGain.gain.setTargetAtTime(e*.5,this.now(),.8)}stopRain(){if(this.rainNode){try{this.rainNode.stop()}catch{}this.rainNode=null,this.rainGain=null}}ensure(){if(this.ctx)return!0;try{let t=window.AudioContext||window.webkitAudioContext;if(!t)return!1;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=1,this.master.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=this.sfxVolume,this.sfxGain.connect(this.master),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=this.musicVolume;let e=this.ctx.createDelay(1.2);e.delayTime.value=.42;let i=this.ctx.createGain();i.gain.value=.32;let s=this.ctx.createGain();s.gain.value=.5,e.connect(i),i.connect(e),e.connect(s),s.connect(this.master),this.musicGain.connect(e),this.musicGain.connect(this.master);let r=this.ctx.sampleRate*1,o=this.ctx.createBuffer(1,r,this.ctx.sampleRate),a=o.getChannelData(0);for(let l=0;l<r;l++)a[l]=Math.random()*2-1;return this.noiseBuf=o,!0}catch{return!1}}setHeld(t){this.held=!!t,this.held&&this.suspend()}resume(){this.held||this.ensure()&&(this.suspended=!1,this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}))}suspend(){this.suspended=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend().catch(()=>{})}setVolumes(t,e){this.sfxVolume=t,this.musicVolume=e,this.sfxGain&&(this.sfxGain.gain.value=t),this.musicGain&&(this.musicGain.gain.value=e)}now(){return this.ctx?this.ctx.currentTime:0}_noise(t,e,i,s,r=1){if(!this.ensure()||this.suspended)return null;let o=this.now(),a=this.ctx.createBufferSource();a.buffer=this.noiseBuf,a.loop=!0;let l=this.ctx.createBiquadFilter();l.type=e,l.frequency.value=i,l.Q.value=r;let c=this.ctx.createGain();return c.gain.setValueAtTime(0,o),c.gain.linearRampToValueAtTime(s,o+.008),c.gain.exponentialRampToValueAtTime(1e-4,o+t),a.connect(l),l.connect(c),c.connect(this.sfxGain),a.start(o),a.stop(o+t+.02),{src:a,g:c,flt:l}}_tone(t,e,i="sine",s=.2,r=null){if(!this.ensure()||this.suspended)return null;let o=this.now(),a=this.ctx.createOscillator();a.type=i,a.frequency.setValueAtTime(t,o),r&&a.frequency.exponentialRampToValueAtTime(Math.max(20,r),o+e);let l=this.ctx.createGain();return l.gain.setValueAtTime(0,o),l.gain.linearRampToValueAtTime(s,o+.012),l.gain.exponentialRampToValueAtTime(1e-4,o+e),a.connect(l),l.connect(this.sfxGain),a.start(o),a.stop(o+e+.03),a}step(t){let e=performance.now();if(e-this._lastStep<180||(this._lastStep=e,this.play(t==="water"?"swim":`step.${t}`,{vol:.5})))return;let i=.9+Math.random()*.25;switch(t){case"stone":this._noise(.09,"bandpass",1400*i,.16,2.2);break;case"sand":this._noise(.13,"lowpass",900*i,.13,.9);break;case"wood":this._noise(.09,"bandpass",700*i,.16,3.5),this._tone(180*i,.06,"triangle",.05);break;case"snow":this._noise(.12,"highpass",2600*i,.1,.8);break;case"water":this._noise(.18,"bandpass",700*i,.12,1.2);break;case"gravel":this._noise(.1,"bandpass",1900*i,.14,1.6);break;default:this._noise(.11,"lowpass",620*i,.14,1);break}}dig(t){if(this.play(`dig.${t}`,{vol:.32,rate:.9}))return;let e=.85+Math.random()*.35;t==="stone"?this._noise(.07,"bandpass",2200*e,.11,3):t==="wood"?this._noise(.07,"bandpass",900*e,.12,4):this._noise(.08,"lowpass",1e3*e,.1,1)}breakBlock(t){if(this.play(`dig.${t}`,{vol:.75}))return;let e=.85+Math.random()*.3;this._noise(.24,"bandpass",(t==="stone"?1500:800)*e,.24,1.4),this._tone(140*e,.14,"triangle",.1,70*e)}place(t="stone"){this.play(`dig.${t}`,{vol:.7})||(this._noise(.1,"lowpass",1200,.16,1),this._tone(220,.08,"triangle",.08,320))}hurt(){this.play("hurt",{vol:.7})||(this._tone(320,.22,"sawtooth",.16,110),this._noise(.16,"bandpass",500,.14,1))}splash(){this.play("splash",{vol:.7})||this._noise(.35,"lowpass",1600,.2,.8)}_mobVol(t,e){let i=Math.max(0,1-t/26);return e*i*i}_mobPlay(t,e,i){for(let s of t)if(this.play(s,{vol:e,rate:i,spread:.14}))return!0;return!1}mobIdle(t,e=0){let i=this._mobVol(e,.55);if(i<.02||this._mobPlay([`mob.${t}`,t==="slime"?"mob.slime.big":""],i))return;let s={pig:300,cow:190,sheep:420,chicken:700,zombie:150,slime:210}[t]||300;this._tone(s,.22,"sawtooth",i*.16,s*.7)}mobHurt(t,e=0){let i=this._mobVol(e,.7);if(i<.02||this._mobPlay([`mob.${t}.hurt`,`mob.${t}`,"mob.slime.attack","hurt"],i,1.05))return;let s={pig:340,cow:210,sheep:460,chicken:780,zombie:170,slime:230}[t]||320;this._tone(s,.18,"sawtooth",i*.2,s*.5)}mobDeath(t,e=0){let i=this._mobVol(e,.8);if(i<.02||this._mobPlay([`mob.${t}.death`,`mob.${t}.hurt`,`mob.${t}`,"hurt"],i,.92))return;let s={pig:300,cow:180,sheep:400,chicken:700,zombie:140,slime:200}[t]||300;this._tone(s,.42,"sawtooth",i*.22,s*.32),this._noise(.22,"lowpass",900,i*.12,.7)}mobAttack(t,e=0){let i=this._mobVol(e,.6);i<.02||this._mobPlay([`mob.${t}.attack`,"mob.slime.attack",`mob.${t}`],i)||this._noise(.12,"bandpass",700,i*.14,1)}pop(){this.play("pop",{vol:.5,spread:.25})||this._tone(880,.05,"triangle",.05,1200)}chestOpen(){this.play("chest.open",{vol:.7})||this._noise(.2,"lowpass",700,.14,1)}chestClose(){this.play("chest.close",{vol:.7})||this._noise(.18,"lowpass",600,.14,1)}furnaceCrackle(){this.play("furnace.fire",{vol:.35})}equip(t=""){this.play(`equip.${t}`,{vol:.6})||this.play("equip",{vol:.6})||this._noise(.14,"bandpass",1400,.14,2)}mobSay(t,e=0){this.playAt(`mob.${t}`,e,{vol:.6})}bossSound(t,e=0){this.playAt(`boss.${t}`,e,{vol:.85})}fuse(){this.play("fuse",{vol:.5})||this._noise(.05,"highpass",3800,.07,1.2)}explosion(t=0){if(!this.ensure()||this.suspended)return;let e=Math.max(.08,1-t/40);if(this.play("explode",{vol:e}))return;let i=this.now(),s=this.ctx.createOscillator();s.type="sine",s.frequency.setValueAtTime(160,i),s.frequency.exponentialRampToValueAtTime(28,i+.65);let r=this.ctx.createGain();r.gain.setValueAtTime(0,i),r.gain.linearRampToValueAtTime(.5*e,i+.02),r.gain.exponentialRampToValueAtTime(1e-4,i+.85),s.connect(r),r.connect(this.sfxGain),s.start(i),s.stop(i+.9),this._noise(.16,"highpass",1800,.34*e,.7);let o=this.ctx.createBufferSource();o.buffer=this.noiseBuf,o.loop=!0;let a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(900,i),a.frequency.exponentialRampToValueAtTime(120,i+1.4);let l=this.ctx.createGain();l.gain.setValueAtTime(0,i),l.gain.linearRampToValueAtTime(.42*e,i+.03),l.gain.exponentialRampToValueAtTime(1e-4,i+1.5),o.connect(a),a.connect(l),l.connect(this.sfxGain),o.start(i),o.stop(i+1.6)}hiss(){this.play("fizz",{vol:.6})||this._noise(.5,"highpass",2600,.16,.6)}ignite(){this.play("fuse",{vol:.7})||(this._noise(.18,"highpass",2200,.16,.9),this._tone(520,.09,"square",.05,900))}eatBite(){this.play("eat",{vol:.6})||(this._noise(.07,"lowpass",520+Math.random()*520,.13,1.7),this._tone(130+Math.random()*60,.05,"triangle",.04))}eat(){this.play("burp",{vol:.5})||(this._noise(.1,"lowpass",420,.1,1.2),setTimeout(()=>this._tone(240,.14,"sine",.07,340),70))}craft(){this._tone(523,.09,"square",.08),setTimeout(()=>this._tone(784,.13,"square",.08),80)}click(){this.play("click",{vol:.5})||this._tone(700,.05,"square",.06,900)}reward(){if(this.play("levelup",{vol:.8,spread:0}))return;[523,659,784,1047].forEach((e,i)=>setTimeout(()=>this._tone(e,.22,"triangle",.13),i*95))}levelUp(){if(this.play("levelup",{vol:.6,spread:0}))return;[392,523,659].forEach((e,i)=>setTimeout(()=>this._tone(e,.3,"sine",.12),i*120))}setMusic(t){this.musicOn=t,t&&this.resume()}updateMusic(t,e){if(!this.musicOn||!this.ctx||this.suspended||this.musicVolume<=.001||(this.musicTimer-=t,this.musicTimer>0))return;this.musicTimer=2.4+Math.random()*4.2;let i=e?55:65.4,s=bd[Math.random()*bd.length|0],r=i*Math.pow(2,s/12)*(Math.random()<.4?4:2),o=this.now(),a=2.6+Math.random()*3.4,l=this.ctx.createOscillator();l.type=e?"sine":"triangle",l.frequency.value=r;let c=this.ctx.createOscillator();c.type="sine",c.frequency.value=r*1.005;let h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.value=e?900:1500;let u=this.ctx.createGain();u.gain.setValueAtTime(0,o),u.gain.linearRampToValueAtTime(.13,o+a*.35),u.gain.linearRampToValueAtTime(1e-4,o+a),l.connect(h),c.connect(h),h.connect(u),u.connect(this.musicGain),l.start(o),c.start(o),l.stop(o+a+.1),c.stop(o+a+.1)}},wt=new ih;function Sr(n,t){switch(n){case t.STONE:case t.COBBLE:case t.GRANITE:case t.DIORITE:case t.ANDESITE:case t.STONE_BRICKS:case t.MOSSY_STONE_BRICKS:case t.MOSSY_COBBLE:case t.BRICKS:case t.OBSIDIAN:case t.BEDROCK:case t.SANDSTONE:case t.RED_SANDSTONE:case t.COAL_ORE:case t.IRON_ORE:case t.GOLD_ORE:case t.DIAMOND_ORE:case t.REDSTONE_ORE:case t.LAPIS_ORE:case t.EMERALD_ORE:case t.POLISHED_STONE:case t.CHISELED_STONE:case t.FURNACE:case t.TERRACOTTA:return"stone";case t.SAND:case t.RED_SAND:return"sand";case t.GRAVEL:case t.CLAY:return"gravel";case t.SNOW:case t.SNOWY_GRASS:case t.ICE:case t.PACKED_ICE:return"snow";case t.WATER:return"water";case t.LOG_OAK:case t.LOG_BIRCH:case t.LOG_SPRUCE:case t.LOG_JUNGLE:case t.PLANKS_OAK:case t.PLANKS_BIRCH:case t.PLANKS_SPRUCE:case t.PLANKS_JUNGLE:case t.CRAFTING_TABLE:case t.BOOKSHELF:return"wood";default:return"grass"}}var Md=()=>{};function Yn(n,t,e=null){return Promise.race([Promise.resolve(n).catch(()=>e),new Promise(i=>setTimeout(()=>i(e),t))])}function Rv(n){var t;if(!n)return!1;try{return typeof n.isAuthorized=="function"?!!n.isAuthorized():((t=n.getMode)==null?void 0:t.call(n))!=="lite"}catch{return!1}}var nh=class{constructor(){this.sdk=null,this.player=null,this.leaderboards=null,this.available=!1,this.authorized=!1,this.readyCalled=!1,this.gameplayRunning=!1,this.lang="en",this.deviceType="desktop",this.adInProgress=!1,this.onAdStateChange=Md,this.onPauseChange=Md,this.platformPaused=!1,this._initPromise=null}init(){return this._initPromise?this._initPromise:(this._initPromise=(async()=>{var t,e,i;try{if(typeof window>"u"||!window.YaGames||(this.sdk=await Yn(window.YaGames.init(),6e3,null),!this.sdk))return!1;this.available=!0;try{this.lang=((e=(t=this.sdk.environment)==null?void 0:t.i18n)==null?void 0:e.lang)||"en",this.deviceType=((i=this.sdk.deviceInfo)==null?void 0:i.type)||"desktop"}catch{}try{typeof this.sdk.on=="function"&&(this.sdk.on("game_api_pause",()=>this._setPlatformPaused(!0)),this.sdk.on("game_api_resume",()=>this._setPlatformPaused(!1)))}catch{}this.player=await Yn(this.sdk.getPlayer({scopes:!1}),6e3,null),this.authorized=Rv(this.player);let s=this.sdk.leaderboards;return s&&(s.setScore||s.getEntries)?(this.leaderboards=s,this.lbApi="modern"):this.sdk.getLeaderboards&&(this.leaderboards=await Yn(this.sdk.getLeaderboards(),6e3,null),this.lbApi="legacy"),!0}catch(s){return console.warn("[ysdk] init failed",s),this.available=!1,!1}})(),this._initPromise)}gameReady(){var t,e,i,s;if(!this.readyCalled){this.readyCalled=!0;try{(s=(i=(e=(t=this.sdk)==null?void 0:t.features)==null?void 0:e.LoadingAPI)==null?void 0:i.ready)==null||s.call(i)}catch(r){console.warn("[ysdk] LoadingAPI.ready failed",r)}}}gameplayStart(){var t,e,i,s;if(!this.gameplayRunning){this.gameplayRunning=!0;try{(s=(i=(e=(t=this.sdk)==null?void 0:t.features)==null?void 0:e.GameplayAPI)==null?void 0:i.start)==null||s.call(i)}catch{}}}gameplayStop(){var t,e,i,s;if(this.gameplayRunning){this.gameplayRunning=!1;try{(s=(i=(e=(t=this.sdk)==null?void 0:t.features)==null?void 0:e.GameplayAPI)==null?void 0:i.stop)==null||s.call(i)}catch{}}}_setPlatformPaused(t){if(t=!!t,this.platformPaused!==t){this.platformPaused=t;try{this.onPauseChange(t)}catch(e){console.warn("[ysdk] pause handler failed",e)}}}_setAdBusy(t){if(this.adInProgress!==t){this.adInProgress=t;try{this.onAdStateChange(t)}catch{}}}showInterstitial(){return new Promise(t=>{var r,o;if(!this.available||!((o=(r=this.sdk)==null?void 0:r.adv)!=null&&o.showFullscreenAdv)){t({shown:!1,error:"unavailable"});return}let e=!1,i=a=>{e||(e=!0,this._setAdBusy(!1),t(a))},s=setTimeout(()=>i({shown:!1,error:"timeout"}),45e3);this._setAdBusy(!0);try{this.sdk.adv.showFullscreenAdv({callbacks:{onClose:a=>{clearTimeout(s),i({shown:!!a})},onError:a=>{clearTimeout(s),i({shown:!1,error:a})}}})}catch(a){clearTimeout(s),i({shown:!1,error:a})}})}showRewarded(t){return new Promise(e=>{var a,l;if(!this.available||!((l=(a=this.sdk)==null?void 0:a.adv)!=null&&l.showRewardedVideo)){e({rewarded:!1,error:"unavailable"});return}let i=!1,s=!1,r=c=>{s||(s=!0,this._setAdBusy(!1),e(c))},o=setTimeout(()=>r({rewarded:i,error:"timeout"}),9e4);this._setAdBusy(!0);try{this.sdk.adv.showRewardedVideo({callbacks:{onRewarded:()=>{if(!i){i=!0;try{t==null||t()}catch{}}},onClose:()=>{clearTimeout(o),r({rewarded:i})},onError:c=>{clearTimeout(o),r({rewarded:i,error:c})}}})}catch(c){clearTimeout(o),r({rewarded:!1,error:c})}})}async showBanner(){var t,e;try{if(!((e=(t=this.sdk)==null?void 0:t.adv)!=null&&e.getBannerAdvStatus))return!1;let i=await this.sdk.adv.getBannerAdvStatus();return i!=null&&i.stickyAdvIsShowing||await this.sdk.adv.showBannerAdv(),!0}catch{return!1}}async hideBanner(){var t,e,i;try{await((i=(e=(t=this.sdk)==null?void 0:t.adv)==null?void 0:e.hideBannerAdv)==null?void 0:i.call(e))}catch{}}async loadData(t){var e;if(!((e=this.player)!=null&&e.getData))return null;try{return await Yn(this.player.getData(t),6e3,null)}catch{return null}}async saveData(t){var e;if(!((e=this.player)!=null&&e.setData))return!1;try{return await Yn(this.player.setData(t,!0),6e3,null),!0}catch{return!1}}getPlayerName(){var t,e;try{let i=(e=(t=this.player)==null?void 0:t.getName)==null?void 0:e.call(t);return i&&i.length?i:null}catch{return null}}getPlayerAvatar(){var t,e;try{return((e=(t=this.player)==null?void 0:t.getPhoto)==null?void 0:e.call(t,"small"))||null}catch{return null}}async openAuth(){return!1}async submitScore(t,e){return!1;try{let r=i.setScore?i.setScore(t,s):i.setLeaderboardScore(t,s);return await Yn(r,8e3,null),!0}catch{return!1}}async fetchEntries(t,{top:e=10,around:i=3}={}){return null;try{let o=s.getEntries?s.getEntries(t,r):s.getLeaderboardEntries(t,r);return await Yn(o,9e3,null)}catch{return null}}},me=new nh;var Mr="craftblock.world.v1",Ed="craftblock.meta.v1",sh="cbmeta",wd=(n,t)=>{try{return n?JSON.parse(n):t}catch{return t}},rh=class{constructor(){this.meta={best:0,settings:{...Kn},stats:{blocksMined:0,blocksPlaced:0,deaths:0,playTime:0,crafted:0,mobsDefeated:0},biomesSeen:[]},this.cloudDirty=!1,this.lastCloudSave=0}loadLocalMeta(){let t=wd(localStorage.getItem(Ed),null);return this.hasStoredMeta=!!t,t&&(this.meta.best=Math.max(0,t.best|0),this.meta.settings={...Kn,...t.settings||{}},this.meta.stats={...this.meta.stats,...t.stats||{}},this.meta.biomesSeen=Array.isArray(t.biomesSeen)?t.biomesSeen:[]),this.meta}saveLocalMeta(t=!0){if(!t&&Date.now()-(this._lastMetaWrite||0)<4e3){clearTimeout(this._metaTimer),this._metaTimer=setTimeout(()=>this.saveLocalMeta(!0),4e3);return}clearTimeout(this._metaTimer),this._lastMetaWrite=Date.now();try{localStorage.setItem(Ed,JSON.stringify(this.meta))}catch{}}loadWorld(){return wd(localStorage.getItem(Mr),null)}saveWorld(t){try{return localStorage.setItem(Mr,JSON.stringify(t)),!0}catch{try{return localStorage.setItem(Mr,JSON.stringify({...t,edits:[]})),!0}catch{return!1}}}hasWorld(){return!!localStorage.getItem(Mr)}clearWorld(){try{localStorage.removeItem(Mr)}catch{}}async loadCloud(){let t=await me.loadData([sh]),e=t==null?void 0:t[sh];if(!(!e||typeof e!="object")){if(this.cloudHadData=!0,(e.best|0)>this.meta.best&&(this.meta.best=e.best|0),e.settings&&(this.meta.settings={...this.meta.settings,...e.settings}),e.stats)for(let i of Object.keys(this.meta.stats))this.meta.stats[i]=Math.max(this.meta.stats[i]|0,e.stats[i]|0);Array.isArray(e.biomesSeen)&&(this.meta.biomesSeen=Array.from(new Set([...this.meta.biomesSeen,...e.biomesSeen]))),this.saveLocalMeta()}}markCloudDirty(){this.cloudDirty=!0}async flushCloud(t=!1){if(!this.cloudDirty&&!t)return;let e=Date.now();!t&&e-this.lastCloudSave<1e4||(this.lastCloudSave=e,this.cloudDirty=!1,await me.saveData({[sh]:this.meta}))}setBest(t){return t>this.meta.best?(this.meta.best=t,this.saveLocalMeta(!1),this.markCloudDirty(),!0):!1}updateSettings(t){this.meta.settings={...this.meta.settings,...t},this.saveLocalMeta(),this.markCloudDirty()}bumpStat(t,e=1){this.meta.stats[t]=(this.meta.stats[t]|0)+e,this.markCloudDirty()}},ae=new rh;var Hs=["stone","dirt","grass_top","grass_side","grass_side_snow","snow","sand","sand_red","sandstone_top","sandstone_side","sandstone_red_top","sandstone_red_side","gravel","clay","cobble","mossy_cobble","stone_bricks","stone_bricks_mossy","chiseled_stone","bricks","granite","diorite","andesite","bedrock","obsidian","polished_stone","log_oak_side","log_oak_top","log_birch_side","log_birch_top","log_spruce_side","log_spruce_top","log_jungle_side","log_jungle_top","leaves_oak","leaves_birch","leaves_spruce","leaves_jungle","planks_oak","planks_birch","planks_spruce","planks_jungle","glass","water","lava","ice","packed_ice","coal_ore","iron_ore","gold_ore","diamond_ore","redstone_ore","lapis_ore","emerald_ore","coal_block","iron_block","gold_block","diamond_block","emerald_block","lapis_block","glowstone","sea_lantern","prismarine","cactus_side","cactus_top","podzol_top","mycelium_top","terracotta","terracotta_red","terracotta_orange","terracotta_white","terracotta_brown","crafting_top","crafting_side","crafting_front","furnace_front","furnace_side","furnace_top","bookshelf","wool_white","wool_red","wool_orange","wool_yellow","wool_green","wool_blue","wool_purple","wool_black","pumpkin_side","pumpkin_face","pumpkin_top","melon_side","melon_top","hay_side","hay_top","torch","tall_grass","fern","flower_red","flower_yellow","flower_blue","flower_pink","mushroom_red","mushroom_brown","dead_bush","sugar_cane","tnt_side","tnt_top","tnt_bottom","chest_side","chest_top","chest_front","arena_brick","arena_pillar","boss_wood"],H={};Hs.forEach((n,t)=>{H[n]=t});var Er=H,wr=Hs.length,v={AIR:0,STONE:1,GRASS:2,DIRT:3,COBBLE:4,BEDROCK:5,SAND:6,RED_SAND:7,SANDSTONE:8,RED_SANDSTONE:9,GRAVEL:10,CLAY:11,WATER:12,LAVA:13,ICE:14,PACKED_ICE:15,SNOW:16,SNOWY_GRASS:17,GRANITE:18,DIORITE:19,ANDESITE:20,OBSIDIAN:21,POLISHED_STONE:22,LOG_OAK:23,LOG_BIRCH:24,LOG_SPRUCE:25,LOG_JUNGLE:26,LEAVES_OAK:27,LEAVES_BIRCH:28,LEAVES_SPRUCE:29,LEAVES_JUNGLE:30,PLANKS_OAK:31,PLANKS_BIRCH:32,PLANKS_SPRUCE:33,PLANKS_JUNGLE:34,GLASS:35,BRICKS:36,STONE_BRICKS:37,MOSSY_STONE_BRICKS:38,MOSSY_COBBLE:39,CHISELED_STONE:40,COAL_ORE:41,IRON_ORE:42,GOLD_ORE:43,DIAMOND_ORE:44,REDSTONE_ORE:45,LAPIS_ORE:46,EMERALD_ORE:47,COAL_BLOCK:48,IRON_BLOCK:49,GOLD_BLOCK:50,DIAMOND_BLOCK:51,EMERALD_BLOCK:52,LAPIS_BLOCK:53,GLOWSTONE:54,SEA_LANTERN:55,PRISMARINE:56,CACTUS:57,PODZOL:58,MYCELIUM:59,TERRACOTTA:60,TERRACOTTA_RED:61,TERRACOTTA_ORANGE:62,TERRACOTTA_WHITE:63,TERRACOTTA_BROWN:64,CRAFTING_TABLE:65,FURNACE:66,BOOKSHELF:67,WOOL_WHITE:68,WOOL_RED:69,WOOL_ORANGE:70,WOOL_YELLOW:71,WOOL_GREEN:72,WOOL_BLUE:73,WOOL_PURPLE:74,WOOL_BLACK:75,PUMPKIN:76,MELON:77,HAY:78,TORCH:79,TALL_GRASS:80,FERN:81,FLOWER_RED:82,FLOWER_YELLOW:83,FLOWER_BLUE:84,FLOWER_PINK:85,MUSHROOM_RED:86,MUSHROOM_BROWN:87,DEAD_BUSH:88,SUGAR_CANE:89,TNT:90,WATER_1:91,WATER_2:92,WATER_3:93,WATER_4:94,WATER_5:95,WATER_6:96,WATER_7:97,LAVA_1:98,LAVA_2:99,LAVA_3:100,CHEST:101,ARENA_BRICK:102,ARENA_PILLAR:103},Ad=[12,91,92,93,94,95,96,97],Td=[13,98,99,100],Cv=7,Lv=3,bt={NONE:0,PICK:1,AXE:2,SHOVEL:3,SWORD:4},kt={HAND:0,WOOD:1,STONE:2,IRON:3,DIAMOND:4},Wi=[];function pt(n,t){let e=t.tex,i;if(typeof e=="number")i=[e,e,e,e,e,e];else if(Array.isArray(e))i=e;else{let o=e.side??e.all??0;i=[o,o,e.top??o,e.bottom??e.top??o,o,o]}let s=t.render??"block",r=t.opaque??s==="block";Wi[n]={id:n,key:t.key,faces:i,render:s,opaque:r,solid:t.solid??(s!=="cross"&&s!=="liquid"),liquid:s==="liquid",cross:s==="cross",selfCull:t.selfCull??(s==="liquid"||s==="glass"),light:t.light??0,lightOpacity:t.lightOpacity??(r?15:s==="liquid"?2:t.cutoutDim?1:0),hardness:t.hardness??1,tool:t.tool??bt.NONE,tier:t.tier??kt.HAND,drop:t.drop===void 0?n:t.drop,dropCount:t.dropCount??1,score:t.score??1,color:t.color??[.6,.6,.6],tint:t.tint??0,craftable:t.craftable??!0,stack:t.stack??64,fuel:t.fuel??0,placeOnGroundOnly:t.placeOnGroundOnly??!1}}pt(v.AIR,{key:"air",tex:0,render:"air",opaque:!1,solid:!1,craftable:!1});pt(v.STONE,{key:"stone",tex:H.stone,hardness:1.5,tool:bt.PICK,tier:kt.WOOD,drop:v.COBBLE,score:2,color:[.49,.49,.49]});pt(v.GRASS,{key:"grass",tex:{top:H.grass_top,side:H.grass_side,bottom:H.dirt},hardness:.6,tool:bt.SHOVEL,drop:v.DIRT,color:[.35,.55,.25],tint:1});pt(v.DIRT,{key:"dirt",tex:H.dirt,hardness:.5,tool:bt.SHOVEL,color:[.45,.33,.22]});pt(v.COBBLE,{key:"cobble",tex:H.cobble,hardness:2,tool:bt.PICK,tier:kt.WOOD,score:2,color:[.45,.45,.45]});pt(v.BEDROCK,{key:"bedrock",tex:H.bedrock,hardness:-1,drop:0,score:0,color:[.2,.2,.2],craftable:!1});pt(v.SAND,{key:"sand",tex:H.sand,hardness:.5,tool:bt.SHOVEL,color:[.86,.81,.6]});pt(v.RED_SAND,{key:"red_sand",tex:H.sand_red,hardness:.5,tool:bt.SHOVEL,color:[.75,.44,.22]});pt(v.SANDSTONE,{key:"sandstone",tex:{top:H.sandstone_top,side:H.sandstone_side,bottom:H.sandstone_top},hardness:.8,tool:bt.PICK,tier:kt.WOOD,score:2,color:[.85,.8,.6]});pt(v.RED_SANDSTONE,{key:"red_sandstone",tex:{top:H.sandstone_red_top,side:H.sandstone_red_side,bottom:H.sandstone_red_top},hardness:.8,tool:bt.PICK,tier:kt.WOOD,score:2,color:[.72,.4,.2]});pt(v.GRAVEL,{key:"gravel",tex:H.gravel,hardness:.6,tool:bt.SHOVEL,color:[.53,.5,.49]});pt(v.CLAY,{key:"clay",tex:H.clay,hardness:.6,tool:bt.SHOVEL,color:[.63,.65,.7]});pt(v.WATER,{key:"water",tex:H.water,render:"liquid",opaque:!1,solid:!1,hardness:-1,drop:0,score:0,color:[.2,.4,.85],craftable:!1});pt(v.LAVA,{key:"lava",tex:H.lava,render:"liquid",opaque:!1,solid:!1,light:15,hardness:-1,drop:0,score:0,color:[.95,.45,.1],craftable:!1});pt(v.ICE,{key:"ice",tex:H.ice,render:"glass",opaque:!1,lightOpacity:1,hardness:.5,tool:bt.PICK,tier:kt.WOOD,drop:0,score:3,color:[.6,.75,.95]});pt(v.PACKED_ICE,{key:"packed_ice",tex:H.packed_ice,hardness:.6,tool:bt.PICK,tier:kt.WOOD,score:4,color:[.55,.72,.94]});pt(v.SNOW,{key:"snow",tex:H.snow,hardness:.4,tool:bt.SHOVEL,color:[.95,.96,.99]});pt(v.SNOWY_GRASS,{key:"snowy_grass",tex:{top:H.snow,side:H.grass_side_snow,bottom:H.dirt},hardness:.6,tool:bt.SHOVEL,drop:v.DIRT,color:[.9,.93,.96]});pt(v.GRANITE,{key:"granite",tex:H.granite,hardness:1.5,tool:bt.PICK,tier:kt.WOOD,score:2,color:[.61,.42,.35]});pt(v.DIORITE,{key:"diorite",tex:H.diorite,hardness:1.5,tool:bt.PICK,tier:kt.WOOD,score:2,color:[.78,.78,.79]});pt(v.ANDESITE,{key:"andesite",tex:H.andesite,hardness:1.5,tool:bt.PICK,tier:kt.WOOD,score:2,color:[.53,.54,.53]});pt(v.OBSIDIAN,{key:"obsidian",tex:H.obsidian,hardness:12,tool:bt.PICK,tier:kt.DIAMOND,score:60,color:[.09,.07,.14]});pt(v.POLISHED_STONE,{key:"polished_stone",tex:H.polished_stone,hardness:1.5,tool:bt.PICK,tier:kt.WOOD,score:2,color:[.56,.56,.57]});var Iv=[[v.LOG_OAK,"log_oak",H.log_oak_side,H.log_oak_top,[.42,.33,.2]],[v.LOG_BIRCH,"log_birch",H.log_birch_side,H.log_birch_top,[.85,.83,.78]],[v.LOG_SPRUCE,"log_spruce",H.log_spruce_side,H.log_spruce_top,[.29,.2,.11]],[v.LOG_JUNGLE,"log_jungle",H.log_jungle_side,H.log_jungle_top,[.4,.31,.17]]];for(let[n,t,e,i,s]of Iv)pt(n,{key:t,tex:{side:e,top:i,bottom:i},hardness:2,tool:bt.AXE,score:3,color:s,fuel:300});var Pv=[[v.LEAVES_OAK,"leaves_oak",H.leaves_oak,[.28,.5,.2]],[v.LEAVES_BIRCH,"leaves_birch",H.leaves_birch,[.45,.6,.3]],[v.LEAVES_SPRUCE,"leaves_spruce",H.leaves_spruce,[.2,.36,.22]],[v.LEAVES_JUNGLE,"leaves_jungle",H.leaves_jungle,[.2,.55,.12]]];for(let[n,t,e,i]of Pv)pt(n,{key:t,tex:e,render:"cutout",opaque:!1,selfCull:!0,cutoutDim:!0,hardness:.25,score:1,color:i,tint:2});var Ov=[[v.PLANKS_OAK,"planks_oak",H.planks_oak,[.62,.5,.3]],[v.PLANKS_BIRCH,"planks_birch",H.planks_birch,[.79,.72,.5]],[v.PLANKS_SPRUCE,"planks_spruce",H.planks_spruce,[.45,.33,.19]],[v.PLANKS_JUNGLE,"planks_jungle",H.planks_jungle,[.62,.44,.31]]];for(let[n,t,e,i]of Ov)pt(n,{key:t,tex:e,hardness:1.2,tool:bt.AXE,score:2,color:i,fuel:300});pt(v.GLASS,{key:"glass",tex:H.glass,render:"glass",opaque:!1,hardness:.4,drop:0,score:3,color:[.8,.9,.95]});pt(v.BRICKS,{key:"bricks",tex:H.bricks,hardness:2,tool:bt.PICK,tier:kt.WOOD,score:4,color:[.6,.32,.27]});pt(v.STONE_BRICKS,{key:"stone_bricks",tex:H.stone_bricks,hardness:1.8,tool:bt.PICK,tier:kt.WOOD,score:3,color:[.48,.48,.48]});pt(v.MOSSY_STONE_BRICKS,{key:"mossy_stone_bricks",tex:H.stone_bricks_mossy,hardness:1.8,tool:bt.PICK,tier:kt.WOOD,score:4,color:[.42,.5,.4]});pt(v.MOSSY_COBBLE,{key:"mossy_cobble",tex:H.mossy_cobble,hardness:2,tool:bt.PICK,tier:kt.WOOD,score:4,color:[.4,.48,.38]});pt(v.CHISELED_STONE,{key:"chiseled_stone",tex:H.chiseled_stone,hardness:1.8,tool:bt.PICK,tier:kt.WOOD,score:4,color:[.5,.5,.5]});var kv=[[v.COAL_ORE,"coal_ore",H.coal_ore,kt.WOOD,8,[.25,.25,.25],"COAL"],[v.IRON_ORE,"iron_ore",H.iron_ore,kt.STONE,22,[.72,.6,.5],null],[v.GOLD_ORE,"gold_ore",H.gold_ore,kt.IRON,48,[.87,.73,.35],null],[v.DIAMOND_ORE,"diamond_ore",H.diamond_ore,kt.IRON,130,[.42,.83,.83],"DIAMOND"],[v.REDSTONE_ORE,"redstone_ore",H.redstone_ore,kt.IRON,18,[.7,.2,.15],"REDSTONE"],[v.LAPIS_ORE,"lapis_ore",H.lapis_ore,kt.STONE,26,[.2,.35,.7],"LAPIS"],[v.EMERALD_ORE,"emerald_ore",H.emerald_ore,kt.IRON,160,[.24,.8,.4],"EMERALD"]];for(let[n,t,e,i,s,r]of kv)pt(n,{key:t,tex:e,hardness:3,tool:bt.PICK,tier:i,score:s,color:r});pt(v.COAL_BLOCK,{key:"coal_block",tex:H.coal_block,hardness:5,tool:bt.PICK,tier:kt.WOOD,score:20,color:[.1,.1,.1],fuel:1600});pt(v.IRON_BLOCK,{key:"iron_block",tex:H.iron_block,hardness:5,tool:bt.PICK,tier:kt.STONE,score:60,color:[.86,.86,.86]});pt(v.GOLD_BLOCK,{key:"gold_block",tex:H.gold_block,hardness:3,tool:bt.PICK,tier:kt.IRON,score:120,color:[.98,.85,.35]});pt(v.DIAMOND_BLOCK,{key:"diamond_block",tex:H.diamond_block,hardness:5,tool:bt.PICK,tier:kt.IRON,score:300,color:[.4,.9,.88]});pt(v.EMERALD_BLOCK,{key:"emerald_block",tex:H.emerald_block,hardness:5,tool:bt.PICK,tier:kt.IRON,score:340,color:[.25,.85,.42]});pt(v.LAPIS_BLOCK,{key:"lapis_block",tex:H.lapis_block,hardness:3,tool:bt.PICK,tier:kt.STONE,score:70,color:[.16,.3,.68]});pt(v.GLOWSTONE,{key:"glowstone",tex:H.glowstone,light:15,hardness:.4,score:30,color:[1,.9,.55]});pt(v.SEA_LANTERN,{key:"sea_lantern",tex:H.sea_lantern,light:15,hardness:.4,score:30,color:[.72,.95,.9]});pt(v.PRISMARINE,{key:"prismarine",tex:H.prismarine,hardness:1.6,tool:bt.PICK,tier:kt.WOOD,score:8,color:[.35,.62,.58]});pt(v.CACTUS,{key:"cactus",tex:{side:H.cactus_side,top:H.cactus_top},hardness:.5,score:3,color:[.35,.55,.25],placeOnGroundOnly:!0});pt(v.PODZOL,{key:"podzol",tex:{top:H.podzol_top,side:H.grass_side,bottom:H.dirt},hardness:.6,tool:bt.SHOVEL,color:[.35,.25,.12]});pt(v.MYCELIUM,{key:"mycelium",tex:{top:H.mycelium_top,side:H.grass_side,bottom:H.dirt},hardness:.6,tool:bt.SHOVEL,drop:v.DIRT,color:[.45,.38,.44]});pt(v.TERRACOTTA,{key:"terracotta",tex:H.terracotta,hardness:1.6,tool:bt.PICK,tier:kt.WOOD,score:3,color:[.6,.4,.3]});pt(v.TERRACOTTA_RED,{key:"terracotta_red",tex:H.terracotta_red,hardness:1.6,tool:bt.PICK,tier:kt.WOOD,score:3,color:[.56,.26,.18]});pt(v.TERRACOTTA_ORANGE,{key:"terracotta_orange",tex:H.terracotta_orange,hardness:1.6,tool:bt.PICK,tier:kt.WOOD,score:3,color:[.63,.36,.15]});pt(v.TERRACOTTA_WHITE,{key:"terracotta_white",tex:H.terracotta_white,hardness:1.6,tool:bt.PICK,tier:kt.WOOD,score:3,color:[.82,.7,.62]});pt(v.TERRACOTTA_BROWN,{key:"terracotta_brown",tex:H.terracotta_brown,hardness:1.6,tool:bt.PICK,tier:kt.WOOD,score:3,color:[.38,.25,.16]});pt(v.CRAFTING_TABLE,{key:"crafting_table",tex:[H.crafting_side,H.crafting_side,H.crafting_top,H.planks_oak,H.crafting_front,H.crafting_front],hardness:2,tool:bt.AXE,score:5,color:[.55,.4,.25],fuel:300});pt(v.FURNACE,{key:"furnace",tex:[H.furnace_side,H.furnace_side,H.furnace_top,H.furnace_top,H.furnace_front,H.furnace_side],hardness:3.5,tool:bt.PICK,tier:kt.WOOD,score:5,color:[.42,.42,.42]});pt(v.BOOKSHELF,{key:"bookshelf",tex:{side:H.bookshelf,top:H.planks_oak},hardness:1.5,tool:bt.AXE,score:5,color:[.55,.42,.28],fuel:300});var Dv=[[v.WOOL_WHITE,"wool_white",H.wool_white,[.94,.94,.94]],[v.WOOL_RED,"wool_red",H.wool_red,[.63,.19,.19]],[v.WOOL_ORANGE,"wool_orange",H.wool_orange,[.9,.5,.14]],[v.WOOL_YELLOW,"wool_yellow",H.wool_yellow,[.9,.79,.19]],[v.WOOL_GREEN,"wool_green",H.wool_green,[.33,.51,.19]],[v.WOOL_BLUE,"wool_blue",H.wool_blue,[.2,.3,.66]],[v.WOOL_PURPLE,"wool_purple",H.wool_purple,[.5,.22,.7]],[v.WOOL_BLACK,"wool_black",H.wool_black,[.1,.1,.11]]];for(let[n,t,e,i]of Dv)pt(n,{key:t,tex:e,hardness:.8,score:2,color:i,fuel:100});pt(v.PUMPKIN,{key:"pumpkin",tex:[H.pumpkin_side,H.pumpkin_side,H.pumpkin_top,H.pumpkin_top,H.pumpkin_face,H.pumpkin_side],hardness:1,tool:bt.AXE,score:6,color:[.78,.5,.12]});pt(v.MELON,{key:"melon",tex:{side:H.melon_side,top:H.melon_top},hardness:1,tool:bt.AXE,score:6,color:[.45,.65,.2]});pt(v.HAY,{key:"hay",tex:{side:H.hay_side,top:H.hay_top},hardness:.5,score:3,color:[.77,.65,.16],fuel:300});pt(v.TORCH,{key:"torch",tex:H.torch,render:"cross",opaque:!1,solid:!1,light:14,hardness:.05,score:1,color:[1,.8,.4],placeOnGroundOnly:!0});var Nv=[[v.TALL_GRASS,"tall_grass",H.tall_grass,[.35,.6,.2],1],[v.FERN,"fern",H.fern,[.3,.55,.22],1],[v.FLOWER_RED,"flower_red",H.flower_red,[.8,.2,.2],0],[v.FLOWER_YELLOW,"flower_yellow",H.flower_yellow,[.9,.85,.2],0],[v.FLOWER_BLUE,"flower_blue",H.flower_blue,[.3,.45,.9],0],[v.FLOWER_PINK,"flower_pink",H.flower_pink,[.95,.55,.8],0],[v.MUSHROOM_RED,"mushroom_red",H.mushroom_red,[.85,.2,.2],0],[v.MUSHROOM_BROWN,"mushroom_brown",H.mushroom_brown,[.6,.45,.35],0],[v.DEAD_BUSH,"dead_bush",H.dead_bush,[.55,.42,.2],0],[v.SUGAR_CANE,"sugar_cane",H.sugar_cane,[.55,.78,.45],0]];for(let[n,t,e,i,s]of Nv)pt(n,{key:t,tex:e,render:"cross",opaque:!1,solid:!1,hardness:.05,score:1,color:i,tint:s,placeOnGroundOnly:!0});pt(v.TNT,{key:"tnt",tex:[H.tnt_side,H.tnt_side,H.tnt_top,H.tnt_bottom,H.tnt_side,H.tnt_side],hardness:.3,score:8,color:[.78,.22,.18],fuel:0});pt(v.CHEST,{key:"chest",tex:[H.chest_side,H.chest_side,H.chest_top,H.chest_top,H.chest_front,H.chest_side],hardness:2.5,tool:bt.AXE,score:6,color:[.55,.4,.22],fuel:300});pt(v.ARENA_BRICK,{key:"arena_brick",tex:H.arena_brick,hardness:8,tool:bt.PICK,tier:kt.IRON,score:12,color:[.34,.3,.36]});pt(v.ARENA_PILLAR,{key:"arena_pillar",tex:H.arena_pillar,hardness:8,tool:bt.PICK,tier:kt.IRON,score:12,color:[.4,.36,.42]});var Rd=new Set([v.CHEST,v.FURNACE,v.CRAFTING_TABLE]);for(let n=1;n<=Cv;n++)pt(Ad[n],{key:"water",tex:H.water,render:"liquid",opaque:!1,solid:!1,hardness:-1,drop:0,score:0,color:[.2,.4,.85],craftable:!1});for(let n=1;n<=Lv;n++)pt(Td[n],{key:"lava",tex:H.lava,render:"liquid",opaque:!1,solid:!1,light:15,hardness:-1,drop:0,score:0,color:[.95,.45,.1],craftable:!1});for(let n=0;n<Wi.length;n++)Wi[n]||pt(n,{key:"air",tex:0,render:"air",opaque:!1,solid:!1,craftable:!1});var ei=Wi,ii=Wi.length;var Uv=new Uint8Array(ii),oh=new Uint8Array(ii),Bv=new Uint8Array(ii),ah=new Uint8Array(ii),un=new Uint8Array(ii),Fv=new Uint8Array(ii),lh=new Uint8Array(ii),ch=new Uint16Array(ii*6);var jo=1,Cd=2,mi=new Uint8Array(ii),Ld=new Uint8Array(ii).fill(255),Id=new Float32Array(ii);Ad.forEach((n,t)=>{mi[n]=jo,Ld[n]=t,Id[n]=.885-t*.105});Td.forEach((n,t)=>{mi[n]=Cd,Ld[n]=t,Id[n]=.885-t*.22});var Qo=n=>mi[n]===jo,hh=n=>mi[n]===Cd;var qn=new Float32Array(ii);for(let n=0;n<ii;n++){let t=Wi[n];if(!t||t.key==="air"){qn[n]=0;continue}if(mi[n]){qn[n]=-1;continue}qn[n]=1}qn[v.BEDROCK]=-1;qn[v.OBSIDIAN]=-1;var Hv={air:0,block:1,cutout:2,liquid:3,cross:4,glass:5};for(let n=0;n<ii;n++){let t=Wi[n];Uv[n]=t.opaque?1:0,oh[n]=t.light,Bv[n]=t.lightOpacity,ah[n]=t.solid?1:0,un[n]=Hv[t.render]??1,Fv[n]=t.selfCull?1:0,lh[n]=t.tint;for(let e=0;e<6;e++)ch[n*6+e]=t.faces[e]}var Ie=256,q={},Ze={},zv=Ie;function $t(n,t={}){let e=zv++;return q[n.toUpperCase()]=e,Ze[e]={id:e,key:n,sprite:t.sprite??n,stack:t.stack??64,tool:t.tool??bt.NONE,tier:t.tier??kt.HAND,speed:t.speed??1,damage:t.damage??1,food:t.food??0,heal:t.heal??0,smeltsTo:t.smeltsTo??null,fuel:t.fuel??0,score:t.score??0,armor:t.armor??0,armorSlot:t.armorSlot??-1,armorMat:t.armorMat??""},e}$t("stick",{fuel:100});$t("coal",{fuel:1600,score:4});$t("charcoal",{fuel:1600,score:4});$t("iron_ingot",{score:12});$t("gold_ingot",{score:25});$t("diamond",{score:70});$t("emerald",{score:90});$t("lapis",{score:14});$t("redstone",{score:8});$t("clay_ball",{});$t("brick",{});$t("flint",{});$t("leather",{});$t("feather",{});$t("string",{});$t("bone",{});$t("wheat",{});$t("sugar",{});$t("apple",{food:4,score:2});$t("bread",{food:6,score:3});$t("cookie",{food:3,score:2});$t("porkchop_raw",{food:3});$t("porkchop",{food:8,score:4});$t("beef_raw",{food:3});$t("beef",{food:8,score:4});$t("chicken_raw",{food:2});$t("chicken",{food:6,score:4});$t("mushroom_stew",{food:6,stack:1,score:3});$t("golden_apple",{food:6,heal:10,score:40,stack:16});var Gv=[["wood",kt.WOOD,2.2,2],["stone",kt.STONE,4.5,3],["iron",kt.IRON,7,4],["diamond",kt.DIAMOND,10,6]];for(let[n,t,e,i]of Gv)$t(`pickaxe_${n}`,{stack:1,tool:bt.PICK,tier:t,speed:e,damage:i,score:t*8}),$t(`axe_${n}`,{stack:1,tool:bt.AXE,tier:t,speed:e,damage:i+1,score:t*8}),$t(`shovel_${n}`,{stack:1,tool:bt.SHOVEL,tier:t,speed:e,damage:i,score:t*8}),$t(`sword_${n}`,{stack:1,tool:bt.SWORD,tier:t,speed:1.5,damage:i*2,score:t*8});$t("lighter",{stack:1,score:6});var ta=4,Vv=[["leather",[1,3,2,1],4],["gold",[2,5,3,1],12],["iron",[2,6,5,2],16],["diamond",[3,8,6,3],30]],Wv=["helmet","chestplate","leggings","boots"];for(let[n,t,e]of Vv)Wv.forEach((i,s)=>{$t(`${i}_${n}`,{stack:1,armor:t[s],armorSlot:s,armorMat:n,score:e+t[s]})});var Pd=n=>{var t;return n>=Ie&&((t=Ze[n])==null?void 0:t.armor)||0},zs=n=>{let t=n>=Ie?Ze[n]:null;return t&&t.armor?t.armorSlot:-1};function Od(n,t){let e=Math.max(0,Math.min(20,t));return Math.max(0,n*(1-e*.04))}var ax=Object.values(q);function ki(n){return n>=Ie?Ze[n]:Wi[n]}function Ti(n){let t=ki(n);return t?n>=Ie?`item.${t.key}`:`block.${t.key}`:"unknown"}function ri(n){let t=ki(n);return t?t.stack??64:64}function kd(n,t){let e=Wi[n];if(!e||e.hardness<0)return 1/0;let i=t>=Ie?Ze[t]:null,s=i?i.tier:kt.HAND,r=e.tool!==bt.NONE&&i&&i.tool===e.tool;if(e.tier>kt.HAND&&s<e.tier)return Math.max(e.hardness*3.5,1.2);let o=e.hardness;return r?o=e.hardness/(i.speed||1):e.tool!==bt.NONE&&(o=e.hardness*1.5),Math.max(o*.85,.05)}function Dd(n,t){let e=Wi[n];if(!e)return!1;if(e.tier<=kt.HAND)return!0;let i=t>=Ie?Ze[t]:null;return!!i&&i.tool===e.tool&&i.tier>=e.tier}function uh(n){switch(n){case v.COAL_ORE:return{id:q.COAL,count:1};case v.DIAMOND_ORE:return{id:q.DIAMOND,count:1};case v.EMERALD_ORE:return{id:q.EMERALD,count:1};case v.LAPIS_ORE:return{id:q.LAPIS,count:2+(Math.random()*3|0)};case v.REDSTONE_ORE:return{id:q.REDSTONE,count:3+(Math.random()*2|0)};case v.CLAY:return{id:q.CLAY_BALL,count:4};case v.GRAVEL:return Math.random()<.15?{id:q.FLINT,count:1}:{id:v.GRAVEL,count:1};case v.MELON:return{id:v.MELON,count:1};default:{let t=Wi[n];return!t||t.drop===0?null:{id:t.drop,count:t.dropCount}}}}function dh(n){return function(){n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var cx=new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),hx=.5*(Math.sqrt(3)-1),ux=(3-Math.sqrt(3))/6,dx=1/3,fx=1/6;var w=32,xh=class{constructor(t){this.d=new Uint8ClampedArray(w*w*4),this.r=dh(t>>>0)}set(t,e,i,s,r,o=255){if(t<0||e<0||t>=w||e>=w)return;let a=(e*w+t)*4;this.d[a]=i,this.d[a+1]=s,this.d[a+2]=r,this.d[a+3]=o}get(t,e){let i=((e+w)%w*w+(t+w)%w)*4;return[this.d[i],this.d[i+1],this.d[i+2],this.d[i+3]]}fill(t,e,i,s=255){for(let r=0;r<w*w;r++)this.d[r*4]=t,this.d[r*4+1]=e,this.d[r*4+2]=i,this.d[r*4+3]=s}grain(t,e=1){for(let i=0;i<w;i++)for(let s=0;s<w;s++){let r=Math.floor(s/e),o=Math.floor(i/e),a=(this.hash(r,o)-.5)*2*t,l=(i*w+s)*4;this.d[l]+=a,this.d[l+1]+=a,this.d[l+2]+=a}}hash(t,e){let i=Math.imul(t+3121,668265261)^Math.imul(e+917,374761393)^this.seedSalt;return i=Math.imul(i^i>>>15,2246822507),((i^i>>>13)>>>0)/4294967296}blob(t,e,i,s,r,o,a=.35,l=255){let c=i+.5;for(let h=Math.floor(e-c);h<=e+c;h++)for(let u=Math.floor(t-c);u<=t+c;u++)Math.hypot(u-t,h-e)+(this.r()-.5)*a*i>i||this.set(u,h,s,r,o,l)}speckle(t,e,i,s,r=0){for(let o=0;o<w;o++)for(let a=0;a<w;a++){if(this.r()>t)continue;let l=r?(this.r()-.5)*r:0;this.set(a,o,e+l,i+l,s+l)}}shade(t,e,i){let s=(e*w+t)*4;this.d[s]+=i,this.d[s+1]+=i,this.d[s+2]+=i}rect(t,e,i,s,r,o,a,l=255){for(let c=e;c<e+s;c++)for(let h=t;h<t+i;h++)this.set(h,c,r,o,a,l)}line(t,e,i,s,r,o,a,l=255,c=1){let h=Math.max(Math.abs(i-t),Math.abs(s-e))*2+1;for(let u=0;u<=h;u++){let d=u/h,f=Math.round(t+(i-t)*d),g=Math.round(e+(s-e)*d);for(let _=0;_<c;_++)for(let p=0;p<c;p++)this.set(f+p,g+_,r,o,a,l)}}clear(){this.d.fill(0)}bevel(t=26,e=-26){for(let i=0;i<w;i++)this.shade(i,0,t),this.shade(0,i,t),this.shade(i,w-1,e),this.shade(w-1,i,e)}},Xv=0;function j(n){let t=2166136261;for(let i=0;i<n.length;i++)t^=n.charCodeAt(i),t=Math.imul(t,16777619);let e=new xh(t);return e.seedSalt=t^Xv++,e}function gi(n,t=128,e=128,i=128){n.fill(t,e,i),n.grain(20,2);for(let s=0;s<14;s++)n.blob(n.r()*w,n.r()*w,1+n.r()*3,t-14,e-14,i-14,.7);for(let s=0;s<10;s++)n.blob(n.r()*w,n.r()*w,1+n.r()*2,t+12,e+12,i+12,.7);return n}function $n(n,t,e,i,s=5,r=!1){for(let o=0;o<s;o++){let a=3+n.r()*(w-6),l=3+n.r()*(w-6),c=(r?3.2:2.4)+n.r()*1.8;n.blob(a,l,c+1,t*.45,e*.45,i*.45,.4),n.blob(a,l,c,t,e,i,.45),n.blob(a-c*.3,l-c*.3,c*.45,Math.min(255,t*1.5),Math.min(255,e*1.5),Math.min(255,i*1.5),.5)}return n}function Xi(n,t,e,i){n.fill(t,e,i);let s=4,r=w/s;for(let o=0;o<s;o++){let a=o*r,l=(n.r()-.5)*18;for(let h=a;h<a+r;h++)for(let u=0;u<w;u++)n.set(u,h,t+l,e+l,i+l);for(let h=0;h<w;h++)n.set(h,a,t*.62,e*.62,i*.62);for(let h=0;h<3;h++){let u=a+1+Math.floor(n.r()*(r-2)),d=6+n.r()*18,f=n.r()*w;for(let g=0;g<d;g++)n.set(f+g|0,u,t*.84,e*.84,i*.84)}let c=o%2===0?2:w-3;n.set(c,a+2,t*.55,e*.55,i*.55)}return n.grain(7,1),n}function ea(n,t,e,i){n.clear();for(let s=0;s<w;s++)for(let r=0;r<w;r++){let o=n.hash(Math.floor(r/2),Math.floor(s/2));if(o<.16)continue;let a=(o-.5)*70,l=(r*7+s*13)%11<3?-22:0;n.set(r,s,t+a+l,e+a+l,i+a+l,255)}for(let s=0;s<10;s++){let r=n.r()*w,o=n.r()*w;n.blob(r,o,1.5+n.r()*2,t+34,e+40,i+30,.6)}for(let s=0;s<8;s++){let r=n.r()*w,o=n.r()*w;n.blob(r,o,1+n.r()*1.6,t-34,e-36,i-30,.6)}return n}function Ar(n,t,e,i,s){n.fill(t,e,i);for(let r=0;r<w;r++){let o=n.hash(r,0),a=(o-.5)*44;for(let l=0;l<w;l++){let c=(n.hash(r,Math.floor(l/6))-.5)*16;n.set(r,l,t+a+c,e+a+c,i+a+c)}if(o<.18)for(let l=0;l<w;l++)n.set(r,l,s[0],s[1],s[2])}for(let r=0;r<26;r++){let o=n.r()*w|0,a=n.r()*w|0,l=2+n.r()*6;for(let c=0;c<l;c++)n.set(o,a+c,t*.72,e*.72,i*.72)}return n}function ia(n,t,e,i,s){n.fill(t,e,i);let r=w/2-.5;for(let o=0;o<w;o++)for(let a=0;a<w;a++){let l=Math.hypot(a-r,o-r),h=(Math.sin(l*1.5+n.hash(a>>2,o>>2)*1.2)*.5+.5-.5)*34;n.set(a,o,t+h,e+h,i+h),l>w/2-2.2&&n.set(a,o,s[0],s[1],s[2])}return n.grain(8,1),n}function Tr(n,t,e,i){n.fill(t,e,i),n.grain(16,1);for(let s=0;s<w;s++){let r=(n.hash(0,s)-.5)*22;for(let o=0;o<w;o++){let a=(s*w+o)*4;n.d[a]+=r,n.d[a+1]+=r,n.d[a+2]+=r}}for(let s=0;s<20;s++)n.blob(n.r()*w,n.r()*w,1+n.r()*2,t*.85,e*.85,i*.85,.6);return n}function Cn(n,t,e,i){n.fill(t,e,i),n.grain(26,1);for(let s=0;s<60;s++){let r=n.r()*w|0,o=n.r()*w|0,a=n.r()<.5?-22:22;n.set(r,o,t+a,e+a,i+a),n.set(r+1,o,t+a*.6,e+a*.6,i+a*.6)}return n}function Ln(n,t){return n.clear(),t(n),n}function Hd(n,t,e,i,s,r,o,a=1.6){let l=t;for(let c=i;c>=e;c--){l+=(n.r()-.5)*a*.25;let h=Math.round(l);n.set(h,c,s,r,o,255),n.set(h+1,c,s*.8,r*.8,o*.8,255)}return Math.round(l)}var Vs={stone:()=>gi(j("stone"),130,130,130),polished_stone:()=>{let n=j("pol");return n.fill(142,142,145),n.grain(9,2),n.bevel(18,-20),n},dirt:()=>{let n=j("dirt");n.fill(134,96,67),n.grain(26,1);for(let t=0;t<22;t++)n.blob(n.r()*w,n.r()*w,1+n.r()*2.2,108,76,52,.7);for(let t=0;t<14;t++)n.blob(n.r()*w,n.r()*w,1+n.r()*1.6,156,116,82,.7);return n},grass_top:()=>{let n=j("gt");n.fill(122,175,82),n.grain(24,1);for(let t=0;t<40;t++)n.blob(n.r()*w,n.r()*w,.9+n.r()*1.7,102,158,66,.8);for(let t=0;t<26;t++)n.blob(n.r()*w,n.r()*w,.8+n.r()*1.3,148,196,100,.8);return n},grass_side:()=>{let n=Vs.dirt();for(let t=0;t<w;t++){let e=5+Math.round(n.hash(t,7)*5);for(let i=0;i<e;i++){let s=(n.hash(t,i)-.5)*34;n.set(t,i,116+s,168+s,76+s)}n.hash(t,3)>.6&&n.set(t,e,104,152,68)}return n},grass_side_snow:()=>{let n=Vs.dirt();for(let t=0;t<w;t++){let e=6+Math.round(n.hash(t,11)*5);for(let i=0;i<e;i++){let s=(n.hash(t,i)-.5)*16;n.set(t,i,238+s,243+s,250+s)}}return n},snow:()=>{let n=j("snow");return n.fill(240,245,252),n.grain(11,2),n.speckle(.05,255,255,255),n},sand:()=>{let n=j("sand");return n.fill(222,209,160),n.grain(17,1),n.speckle(.06,200,186,140,8),n},sand_red:()=>{let n=j("rsand");return n.fill(190,110,55),n.grain(19,1),n.speckle(.06,168,92,42,8),n},sandstone_top:()=>{let n=j("sst");return n.fill(224,212,166),n.grain(12,2),n.bevel(14,-16),n},sandstone_side:()=>{let n=j("sss");n.fill(220,208,162),n.grain(10,1);for(let t=0;t<w;t+=8)for(let e=0;e<w;e++)n.set(e,t,194,180,136);for(let t=w-8;t<w;t++)for(let e=0;e<w;e++)n.shade(e,t,-10);return n},sandstone_red_top:()=>{let n=j("rsst");return n.fill(186,104,48),n.grain(12,2),n.bevel(12,-14),n},sandstone_red_side:()=>{let n=j("rsss");n.fill(182,100,46),n.grain(10,1);for(let t=0;t<w;t+=8)for(let e=0;e<w;e++)n.set(e,t,152,78,34);return n},gravel:()=>{let n=j("gravel");n.fill(132,127,124),n.grain(18,1);for(let t=0;t<30;t++){let e=90+n.r()*90;n.blob(n.r()*w,n.r()*w,1.4+n.r()*2.6,e,e*.97,e*.94,.5)}return n},clay:()=>{let n=j("clay");return n.fill(163,168,182),n.grain(13,2),n.speckle(.05,145,150,166,6),n},cobble:()=>{let n=j("cob");n.fill(88,88,88);let t=[[0,0,12,12],[13,0,10,8],[24,0,8,14],[0,13,8,10],[9,13,13,9],[23,15,9,9],[0,24,12,8],[13,23,9,9],[23,25,9,7]];for(let[e,i,s,r]of t){let o=108+n.r()*60;for(let a=i+1;a<i+r-1;a++)for(let l=e+1;l<e+s-1;l++){let c=(n.hash(l,a)-.5)*26;n.set(l,a,o+c,o+c,o+c)}for(let a=e+1;a<e+s-1;a++)n.shade(a,i+1,22);for(let a=i+1;a<i+r-1;a++)n.shade(e+1,a,16)}return n},mossy_cobble:()=>{let n=Vs.cobble();for(let t=0;t<22;t++)n.blob(n.r()*w,n.r()*w,1.5+n.r()*3,78,112,56,.65);return n.grain(9,1),n},stone_bricks:()=>{let n=j("sb");n.fill(96,96,96);let t=4,e=w/t;for(let i=0;i<t;i++){let s=i%2*(w/4);for(let r=0;r<2;r++){let o=(s+r*(w/2))%w,a=120+n.r()*26;for(let l=i*e+1;l<(i+1)*e-1;l++)for(let c=1;c<w/2-1;c++){let h=(o+c)%w,u=(n.hash(h,l)-.5)*20;n.set(h,l,a+u,a+u,a+u)}}}return n},stone_bricks_mossy:()=>{let n=Vs.stone_bricks();for(let t=0;t<20;t++)n.blob(n.r()*w,n.r()*w,1.4+n.r()*2.6,76,110,54,.65);return n},chiseled_stone:()=>{let n=j("chis");return n.fill(122,122,122),n.grain(10,2),n.rect(3,3,w-6,w-6,96,96,96),n.rect(5,5,w-10,w-10,132,132,132),n.line(8,8,w-9,w-9,92,92,92),n.line(w-9,8,8,w-9,92,92,92),n.blob(w/2,w/2,4,148,148,148,.2),n},bricks:()=>{let n=j("brk");n.fill(150,140,132);let t=4,e=w/t;for(let i=0;i<t;i++){let s=i%2*(w/4);for(let r=0;r<2;r++){let o=(s+r*(w/2))%w,a=150+n.r()*26;for(let l=i*e+1;l<(i+1)*e-1;l++)for(let c=1;c<w/2-1;c++){let h=(o+c)%w,u=(n.hash(h,l)-.5)*22;n.set(h,l,a+u,a*.53+u,a*.45+u)}}}return n},granite:()=>{let n=gi(j("gra"),154,108,92);return n.speckle(.07,190,150,132,20),n},diorite:()=>{let n=gi(j("dio"),200,200,202);return n.speckle(.09,150,150,152,20),n},andesite:()=>{let n=gi(j("and"),136,138,136);return n.speckle(.07,168,170,168,16),n},bedrock:()=>{let n=j("bed");n.fill(62,62,64);for(let t=0;t<34;t++){let e=26+n.r()*80;n.blob(n.r()*w,n.r()*w,1.6+n.r()*3.4,e,e,e+4,.7)}return n},obsidian:()=>{let n=j("obs");n.fill(24,18,36),n.grain(12,2);for(let t=0;t<16;t++)n.blob(n.r()*w,n.r()*w,1+n.r()*2.4,44,32,66,.6);return n.speckle(.02,150,130,200),n},log_oak_side:()=>Ar(j("los"),124,96,56,[92,68,38]),log_oak_top:()=>ia(j("lot"),178,146,96,[110,84,48]),log_birch_side:()=>Ar(j("lbs"),216,212,202,[162,158,148]),log_birch_top:()=>ia(j("lbt"),206,186,140,[186,182,172]),log_spruce_side:()=>Ar(j("lss"),82,58,32,[56,38,20]),log_spruce_top:()=>ia(j("lst"),132,100,60,[72,50,28]),log_jungle_side:()=>Ar(j("ljs"),106,84,46,[76,58,30]),log_jungle_top:()=>ia(j("ljt"),168,138,90,[96,74,42]),leaves_oak:()=>ea(j("leo"),74,118,46),leaves_birch:()=>ea(j("leb"),92,128,60),leaves_spruce:()=>ea(j("les"),54,90,48),leaves_jungle:()=>ea(j("lej"),60,122,34),planks_oak:()=>Xi(j("po"),168,134,84),planks_birch:()=>Xi(j("pb"),206,188,134),planks_spruce:()=>Xi(j("ps"),116,88,52),planks_jungle:()=>Xi(j("pj"),162,116,82),glass:()=>{let n=j("glass");n.clear();for(let t=0;t<w;t++)n.set(t,0,226,240,246,210),n.set(t,w-1,226,240,246,210),n.set(0,t,226,240,246,210),n.set(w-1,t,226,240,246,210),n.set(t,1,200,222,232,110),n.set(1,t,200,222,232,110);for(let t=0;t<w-12;t++)n.set(4+t,5+t,255,255,255,96),n.set(5+t,5+t,255,255,255,58),n.set(9+t,4+t,255,255,255,40);for(let t=2;t<w-2;t++)for(let e=2;e<w-2;e++){let i=(t*w+e)*4;n.d[i+3]===0&&(n.d[i]=214,n.d[i+1]=234,n.d[i+2]=244,n.d[i+3]=22)}return n},water:()=>{let n=j("water");n.fill(46,104,200,205);for(let t=0;t<w;t++)for(let e=0;e<w;e++){let s=(Math.sin((e+t*.6)*.5)*.5+Math.sin((e*.8-t)*.31)*.5)*22+(n.hash(e>>1,t>>1)-.5)*14,r=(t*w+e)*4;n.d[r]+=s*.4,n.d[r+1]+=s*.8,n.d[r+2]+=s}return n},lava:()=>{let n=j("lava");n.fill(206,78,14);for(let t=0;t<26;t++)n.blob(n.r()*w,n.r()*w,1.6+n.r()*4,244,152,26,.55);for(let t=0;t<14;t++)n.blob(n.r()*w,n.r()*w,1+n.r()*2.4,255,214,96,.55);for(let t=0;t<12;t++)n.blob(n.r()*w,n.r()*w,1+n.r()*2.6,132,32,8,.6);return n},ice:()=>{let n=j("ice");n.fill(154,196,244,190),n.grain(12,2);for(let t=0;t<8;t++){let e=n.r()*w,i=n.r()*w;n.line(e,i,e+(n.r()-.5)*20,i+(n.r()-.5)*20,200,226,255,210)}return n},packed_ice:()=>{let n=j("pice");return n.fill(140,182,236),n.grain(14,2),n.speckle(.05,178,212,250,10),n},coal_ore:()=>$n(gi(j("co"),130,130,130),32,32,34,5),iron_ore:()=>$n(gi(j("io"),130,130,130),198,152,118,5),gold_ore:()=>$n(gi(j("go"),130,130,130),240,200,70,5),diamond_ore:()=>$n(gi(j("do"),130,130,130),96,226,226,5,!0),redstone_ore:()=>$n(gi(j("ro"),130,130,130),210,42,32,6),lapis_ore:()=>$n(gi(j("lo"),130,130,130),40,82,190,5),emerald_ore:()=>$n(gi(j("eo"),130,130,130),48,214,96,4,!0),coal_block:()=>{let n=j("cb");return n.fill(28,28,30),n.grain(16,1),n.speckle(.06,62,62,66,10),n},iron_block:()=>{let n=j("ib");return n.fill(220,220,222),n.grain(9,2),n.bevel(20,-22),n.rect(4,4,24,24,206,206,208),n.bevel(0,0),n},gold_block:()=>{let n=j("gb");return n.fill(246,210,74),n.grain(10,2),n.bevel(24,-26),n.rect(4,4,24,24,234,196,62),n},diamond_block:()=>{let n=j("db");n.fill(96,226,220),n.grain(10,2);for(let[t,e]of[[6,6],[20,6],[6,20],[20,20],[13,13]])n.blob(t+3,e+3,3.4,190,250,250,.2);return n.bevel(20,-20),n},emerald_block:()=>{let n=j("eb");n.fill(48,210,100),n.grain(11,2);for(let[t,e]of[[5,5],[19,7],[8,19],[21,20]])n.blob(t+3,e+3,3.6,150,250,178,.25);return n.bevel(18,-20),n},lapis_block:()=>{let n=j("lb");return n.fill(38,74,176),n.grain(18,1),n.speckle(.08,90,130,220,20),n},glowstone:()=>{let n=j("glow");n.fill(226,186,96),n.grain(14,1);for(let t=0;t<22;t++)n.blob(n.r()*w,n.r()*w,1.2+n.r()*2.6,255,238,168,.5);for(let t=0;t<10;t++)n.blob(n.r()*w,n.r()*w,1+n.r()*1.4,255,255,226,.4);return n},sea_lantern:()=>{let n=j("sl");n.fill(178,224,216),n.grain(10,2),n.rect(6,6,20,20,214,246,240),n.rect(11,11,10,10,246,255,252);for(let t=0;t<16;t++)n.blob(n.r()*w,n.r()*w,1+n.r()*1.6,152,208,200,.5);return n},prismarine:()=>{let n=j("pris");n.fill(92,156,146),n.grain(16,2);for(let t=0;t<w;t+=8)for(let e=0;e<w;e+=8){let i=(n.r()-.5)*30;n.rect(e+1,t+1,6,6,92+i,156+i,146+i)}return n},cactus_side:()=>{let n=j("cs");n.fill(72,128,52),n.grain(14,1);for(let t of[3,w-4])for(let e=0;e<w;e++)n.set(t,e,52,100,38);for(let t=2;t<w;t+=6)n.set(6,t,214,226,190),n.set(w-7,t+3,214,226,190);for(let t=0;t<w;t++)n.set(0,t,56,104,40),n.set(w-1,t,56,104,40);return n},cactus_top:()=>{let n=j("ct");return n.fill(86,146,60),n.grain(12,1),n.blob(w/2,w/2,9,68,124,48,.2),n.blob(w/2,w/2,5,96,158,66,.2),n},podzol_top:()=>{let n=j("pod");n.fill(102,70,34),n.grain(24,1);for(let t=0;t<26;t++)n.blob(n.r()*w,n.r()*w,1+n.r()*2.4,138,92,40,.7);for(let t=0;t<16;t++)n.blob(n.r()*w,n.r()*w,1+n.r()*1.8,74,50,24,.7);return n},mycelium_top:()=>{let n=j("myc");n.fill(118,100,110),n.grain(20,1);for(let t=0;t<30;t++)n.blob(n.r()*w,n.r()*w,1+n.r()*2,146,122,140,.7);for(let t=0;t<16;t++)n.blob(n.r()*w,n.r()*w,1+n.r()*1.4,88,72,84,.7);return n},terracotta:()=>Tr(j("tc"),152,94,68),terracotta_red:()=>Tr(j("tcr"),142,60,44),terracotta_orange:()=>Tr(j("tco"),162,84,34),terracotta_white:()=>Tr(j("tcw"),210,178,160),terracotta_brown:()=>Tr(j("tcb"),96,60,34),crafting_top:()=>{let n=Xi(j("cft"),168,134,84);n.rect(2,2,w-4,w-4,122,92,58),n.rect(4,4,w-8,w-8,176,142,92);for(let t=1;t<3;t++)n.line(4+t*8,4,4+t*8,w-5,118,88,54),n.line(4,4+t*8,w-5,4+t*8,118,88,54);return n},crafting_side:()=>{let n=Xi(j("cfs"),150,118,72);return n.rect(0,0,w,6,122,92,58),n.rect(3,12,10,3,96,74,46),n.rect(18,18,11,3,96,74,46),n},crafting_front:()=>{let n=Xi(j("cff"),158,124,78);return n.rect(0,0,w,6,122,92,58),n.line(5,22,26,11,88,68,42,255,2),n.line(5,11,26,22,88,68,42,255,2),n},furnace_side:()=>{let n=gi(j("fs"),118,118,118);return n.rect(0,0,w,4,98,98,98),n},furnace_top:()=>{let n=gi(j("ft"),126,126,126);return n.rect(3,3,w-6,w-6,108,108,108),n},furnace_front:()=>{let n=gi(j("ff"),118,118,118);n.rect(6,12,20,16,44,42,40),n.rect(8,14,16,12,26,24,22);for(let t=0;t<22;t++){let e=9+n.r()*14,i=20+n.r()*6;n.blob(e,i,1+n.r()*2,240,150+n.r()*60,40,.4)}return n.rect(6,6,20,3,96,96,96),n},bookshelf:()=>{let n=Xi(j("bs"),158,124,78);n.rect(0,0,w,5,122,92,58),n.rect(0,w-5,w,5,122,92,58),n.rect(0,14,w,4,122,92,58);let t=[[178,46,42],[46,82,176],[216,186,62],[56,138,62],[148,62,176],[200,118,40]];for(let e of[5,18]){let i=1;for(;i<w-1;){let s=2+(n.r()*2|0),r=t[n.r()*t.length|0];n.rect(i,e+1,s,8,r[0],r[1],r[2]),n.rect(i,e+1,1,8,r[0]*.7,r[1]*.7,r[2]*.7),i+=s+1}}return n},wool_white:()=>Cn(j("ww"),236,236,236),wool_red:()=>Cn(j("wr"),162,48,44),wool_orange:()=>Cn(j("wo"),226,126,36),wool_yellow:()=>Cn(j("wy"),226,200,48),wool_green:()=>Cn(j("wg"),84,130,48),wool_blue:()=>Cn(j("wb"),52,76,168),wool_purple:()=>Cn(j("wp"),126,56,176),wool_black:()=>Cn(j("wk"),30,30,34),pumpkin_side:()=>{let n=j("pks");n.fill(210,126,26),n.grain(12,1);for(let t=2;t<w;t+=5)for(let e=0;e<w;e++)n.set(t,e,176,100,18);return n.rect(0,0,w,3,158,92,16),n},pumpkin_face:()=>{let n=Vs.pumpkin_side(),t=[58,34,8];n.line(6,10,12,10,t[0],t[1],t[2],255,2),n.line(6,10,9,15,t[0],t[1],t[2],255,2),n.line(12,10,9,15,t[0],t[1],t[2],255,2),n.line(20,10,26,10,t[0],t[1],t[2],255,2),n.line(20,10,23,15,t[0],t[1],t[2],255,2),n.line(26,10,23,15,t[0],t[1],t[2],255,2),n.rect(7,20,18,4,t[0],t[1],t[2]);for(let e=0;e<4;e++)n.rect(8+e*5,20,2,7,t[0],t[1],t[2]);return n},pumpkin_top:()=>{let n=j("pkt");return n.fill(200,122,28),n.grain(12,1),n.blob(w/2,w/2,5,108,132,44,.2),n.blob(w/2,w/2,3,84,108,34,.2),n},melon_side:()=>{let n=j("ms");n.fill(112,156,44),n.grain(14,1);for(let t=0;t<w;t+=6)for(let e=0;e<w;e++)(e+t)%9<4&&n.set(t,e,74,118,30);return n},melon_top:()=>{let n=j("mt");return n.fill(126,168,52),n.grain(14,2),n.blob(w/2,w/2,8,100,142,40,.4),n},hay_side:()=>{let n=j("hs");n.fill(200,168,42),n.grain(20,1),n.rect(0,0,w,4,148,122,30),n.rect(0,w-4,w,4,148,122,30);for(let t=0;t<24;t++){let e=5+n.r()*(w-10);n.line(0,e,w,e+(n.r()-.5)*3,176,146,34)}return n},hay_top:()=>{let n=j("ht");n.fill(206,176,48),n.grain(16,1);for(let t=0;t<40;t++){let e=n.r()*Math.PI*2,i=n.r()*14;n.blob(w/2+Math.cos(e)*i,w/2+Math.sin(e)*i,1+n.r(),176,148,36,.4)}return n},torch:()=>Ln(j("torch"),n=>{for(let t=12;t<w;t++)for(let i=0;i<4;i++)n.set(w/2-2+i,t,132-i*12,96-i*10,52-i*6,255);n.rect(w/2-3,7,6,6,250,214,90),n.rect(w/2-2,5,4,4,255,244,180),n.rect(w/2-4,10,8,3,244,158,48),n.set(w/2-1,3,255,255,220,200)}),tall_grass:()=>Ln(j("tg"),n=>{for(let t=0;t<11;t++){let e=3+n.r()*(w-6),i=12+n.r()*16;Hd(n,e,w-i,w-1,96+n.r()*40,158+n.r()*44,62+n.r()*30,2.4)}}),fern:()=>Ln(j("fern"),n=>{let t=w/2;for(let e=0;e<5;e++){let i=t+(e-2)*3.4,s=16+n.r()*12;for(let r=w-1;r>w-s;r--){let o=(w-r)/s,a=Math.max(1,Math.round((1-o)*5));for(let l=-a;l<=a;l++)Math.abs(l)>0&&r%2===0||n.set(Math.round(i+l+(e-2)*o*2),r,64+n.r()*30,122+n.r()*36,54+n.r()*24,255)}}}),flower_red:()=>na(216,52,46,250,226,90),flower_yellow:()=>na(238,208,54,250,246,190),flower_blue:()=>na(74,104,220,226,234,255),flower_pink:()=>na(238,132,196,255,236,246),mushroom_red:()=>Ln(j("mr"),n=>{n.rect(w/2-2,18,4,12,226,220,208,255),n.blob(w/2,15,8,196,44,40,.15);for(let[t,e]of[[-4,-2],[3,-3],[0,3],[-2,4],[5,1]])n.blob(w/2+t,15+e,1.6,244,238,232,.2)}),mushroom_brown:()=>Ln(j("mb"),n=>{n.rect(w/2-2,19,4,11,214,204,190,255),n.blob(w/2,17,7,156,116,82,.2),n.blob(w/2,16,5,176,134,96,.25)}),dead_bush:()=>Ln(j("bush"),n=>{for(let t=0;t<8;t++){let e=w/2+(n.r()-.5)*6,i=10+n.r()*12,s=e;for(let r=w-1;r>w-i;r--)s+=(n.r()-.5)*1.8,n.set(Math.round(s),r,128+n.r()*30,96+n.r()*24,44+n.r()*18,255)}}),tnt_side:()=>{let n=j("tnts");n.fill(180,46,38),n.grain(12,1),n.rect(0,0,w,6,214,206,190),n.rect(0,w-6,w,6,214,206,190);for(let t=0;t<w;t++)n.set(t,5,168,160,146),n.set(t,w-6,168,160,146);n.rect(0,11,w,10,236,232,220);for(let t=0;t<5;t++){let e=3+t*6;n.rect(e,13,3,6,60,54,50),n.rect(e+1,14,1,4,180,46,38)}return n.grain(6,1),n},tnt_top:()=>{let n=j("tntt");return n.fill(196,54,44),n.grain(12,1),n.rect(2,2,w-4,w-4,176,44,36),n.blob(w/2,w/2,6,214,208,194,.15),n.blob(w/2,w/2,3,92,78,52,.2),n.rect(w/2-1,w/2-8,2,8,128,104,62),n},tnt_bottom:()=>{let n=j("tntb");return n.fill(150,38,32),n.grain(14,1),n.bevel(10,-14),n},chest_side:()=>{let n=Xi(j("chs"),150,108,58);n.rect(0,0,w,3,92,66,34),n.rect(0,11,w,3,92,66,34),n.rect(0,w-3,w,3,92,66,34);for(let t of[1,w-3])n.rect(t,3,2,w-6,118,84,44);return n},chest_top:()=>{let n=Xi(j("cht"),162,118,64);return n.rect(1,1,w-2,w-2,96,70,36),n.rect(3,3,w-6,w-6,168,124,68),n.rect(w/2-3,1,6,5,96,70,36),n},chest_front:()=>{let n=Xi(j("chf"),150,108,58);return n.rect(0,0,w,3,92,66,34),n.rect(0,11,w,3,92,66,34),n.rect(0,w-3,w,3,92,66,34),n.rect(w/2-3,9,6,8,172,172,178),n.rect(w/2-2,10,4,6,132,132,140),n.rect(w/2-1,12,2,3,44,42,46),n},arena_brick:()=>{let n=j("ab");n.fill(74,66,82);let t=4,e=w/t;for(let i=0;i<t;i++){let s=i%2*(w/4);for(let r=0;r<2;r++){let o=(s+r*(w/2))%w,a=84+n.r()*26;for(let l=i*e+1;l<(i+1)*e-1;l++)for(let c=1;c<w/2-1;c++){let h=(o+c)%w,u=(n.hash(h,l)-.5)*20;n.set(h,l,a+u,a-8+u,a+12+u)}}}for(let i=0;i<10;i++)n.blob(n.r()*w,n.r()*w,1+n.r()*2,132,96,40,.6);return n},arena_pillar:()=>{let n=j("ap");n.fill(92,84,100),n.grain(12,2);for(let t of[4,w-6])for(let e=0;e<w;e++)n.set(t,e,64,58,72);for(let t=0;t<w;t+=8)for(let e=5;e<w-6;e++)n.set(e,t,118,108,128);return n.rect(w/2-2,0,4,w,148,116,56),n},boss_wood:()=>{let n=Ar(j("bw"),178,118,58,[128,80,34]);for(let t=0;t<14;t++)n.blob(n.r()*w,n.r()*w,1+n.r()*2,200,140,74,.5);return n},sugar_cane:()=>Ln(j("cane"),n=>{for(let t of[-4,2]){let e=w/2+t;for(let i=0;i<w;i++){let s=i%10<2?-26:0;n.set(e,i,132+s,196+s,108+s,255),n.set(e+1,i,116+s,178+s,94+s,255),n.set(e+2,i,96+s,152+s,78+s,255)}}})};function na(n,t,e,i,s,r){return Ln(j(`fl${n}${t}${e}`),o=>{let a=w/2,l=w-1,c=12;Hd(o,a,c,l,74,138,56,.8),o.rect(a-4,c+6,4,2,84,150,62,255),o.rect(a+2,c+10,4,2,84,150,62,255);let h=[[0,-5],[-4,-2],[4,-2],[-3,3],[3,3],[0,4]];for(let[u,d]of h)o.blob(a+u,c+d,3,n,t,e,.2);o.blob(a,c,2.2,i,s,r,.2)})}var fh="assets/textures/",Kv={dead_bush:"deadbush"},ph=10,Yv=new Set(["water","leaves_oak","leaves_birch","leaves_spruce","leaves_jungle","sugar_cane","tnt_side","tnt_top","tnt_bottom","chest_side","chest_top","chest_front","arena_brick","arena_pillar","boss_wood"]),qv=new Set(["lighter","helmet_leather","chestplate_leather","leggings_leather","boots_leather","helmet_gold","chestplate_gold","leggings_gold","boots_gold","helmet_iron","chestplate_iron","leggings_iron","boots_iron","helmet_diamond","chestplate_diamond","leggings_diamond","boots_diamond"]),Ri=null;function $v(n){let t=typeof window<"u"&&window.__CB_TEXTURES;return t&&t[n]||n}function mh(n){return new Promise(t=>{let e=new Image;e.onload=()=>t(e),e.onerror=()=>t(null),e.decoding="async",e.src=$v(n)})}var dn=null;function Zv(n,t){return dn||(dn=document.createElement("canvas"),dn.ctx=dn.getContext("2d",{willReadFrequently:!0})),dn.width=n,dn.height=t,dn.ctx.imageSmoothingEnabled=!1,dn.ctx.clearRect(0,0,n,t),dn.ctx}function Jv(n){let t=Zv(w,w);return t.drawImage(n,0,0,w,w),t.getImageData(0,0,w,w).data}function jv(n,t=w){let e=document.createElement("canvas");e.width=t,e.height=t;let i=e.getContext("2d");return i.imageSmoothingEnabled=!1,i.drawImage(n,0,0,t,t),e}async function gh(n,t,e){let i=0,s=Array.from({length:Math.min(t,n.length)},async()=>{for(;i<n.length;){let r=i++;await e(n[r],r)}});await Promise.all(s)}async function zd(n){let t=Object.values(Ze).filter(l=>!qv.has(l.key)),e=Hs.filter(l=>!Yv.has(l)),i=e.length+t.length+ph,s=0,r=()=>{s++,n&&n(s/i)},o={blocks:new Array(wr).fill(null),items:new Map,cracks:null,missing:[]};await gh(e,12,async l=>{let c=Hs.indexOf(l),h=Kv[l]||l,u=await mh(`${fh}blocks/${h}.png`);u?o.blocks[c]=Jv(u):o.missing.push(`blocks/${h}.png`),r()}),await gh(t,12,async l=>{let c=`${fh}items/${l.key}.png`,h=await mh(c);h?o.items.set(l.id,jv(h)):o.missing.push(`items/${l.key}.png`),r()});let a=new Array(ph).fill(null);if(await gh(a,10,async(l,c)=>{a[c]=await mh(`${fh}overlays/crack_${c}.png`),a[c]||o.missing.push(`overlays/crack_${c}.png`),r()}),a.every(Boolean)){let l=document.createElement("canvas");l.width=w*ph,l.height=w;let c=l.getContext("2d");c.imageSmoothingEnabled=!1,a.forEach((h,u)=>c.drawImage(h,u*w,0,w,w)),o.cracks=l}return Ri=o,o.missing.length&&console.warn(`[textures] ${o.missing.length} \u0444\u0430\u0439\u043B(\u043E\u0432) \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0438\u0441\u044C, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u043D\u0430\u044F \u043E\u0442\u0440\u0438\u0441\u043E\u0432\u043A\u0430:`,o.missing.slice(0,8)),{loaded:i-o.missing.length,total:i,missing:o.missing}}var Gd=()=>(Ri==null?void 0:Ri.cracks)||null,sa=null;function In(){if(sa)return sa;let n=new Uint8Array(w*w*4*wr),t=[];for(let e=0;e<wr;e++){let i=Hs[e],s=Ri==null?void 0:Ri.blocks[e],r;if(s)r={d:s};else{let o=Vs[i];o?r=o():(r=j(i),r.fill(255,0,220))}t.push(r),n.set(r.d,e*w*w*4)}return sa={data:n,tiles:t,width:w,height:w,depth:wr},sa}var Nd=new Map,oi=64;function Vd(n){let t=document.createElement("canvas");t.width=w,t.height=w;let e=t.getContext("2d"),i=e.createImageData(w,w);return i.data.set(n.d),e.putImageData(i,0,0),t}function Qv(n,t,e,i,s){let[r,o,a,l]=e,c=w;for(let h=0;h<c;h++)for(let u=0;u<c;u++){let d=h/c,f=u/c,g=r[0]+(o[0]-r[0])*d+(l[0]-r[0])*f,_=r[1]+(o[1]-r[1])*d+(l[1]-r[1])*f,p=d*w|0,M=((f*w|0)*w+p)*4,b=t.d[M+3];if(b<12)continue;let A=t.d[M]*i,O=t.d[M+1]*i,C=t.d[M+2]*i;s&&(A=A*s[0]/255,O=O*s[1]/255,C=C*s[2]/255),n.fillStyle=`rgba(${A|0},${O|0},${C|0},${b/255})`,n.fillRect(g,_,oi/c+1.2,oi/c+1.2)}}function ty(n){let t=ei[n],e=In(),i=document.createElement("canvas");i.width=oi,i.height=oi;let s=i.getContext("2d");s.imageSmoothingEnabled=!1;let r=t.tint===1?[150,205,100]:t.tint===2?[120,185,80]:null;if(t.render==="cross"){let m=e.tiles[t.faces[0]],M=Vd(m);return s.drawImage(M,4,4,oi-8,oi-8),r&&(s.globalCompositeOperation="multiply",s.fillStyle=`rgb(${r[0]},${r[1]},${r[2]})`,s.fillRect(0,0,oi,oi),s.globalCompositeOperation="destination-in",s.drawImage(M,4,4,oi-8,oi-8),s.globalCompositeOperation="source-over"),i.toDataURL()}let o=oi,a=oi,l=o/2,c=a*.06,h=a*.32,u=a*.94,d=o*.46,f=[[l,c],[l+d,h-a*.13],[l,h],[l-d,h-a*.13]],g=[[l-d,h-a*.13],[l,h],[l,u],[l-d,u-a*.13]],_=[[l,h],[l+d,h-a*.13],[l+d,u-a*.13],[l,u]],p=[{quad:f,tex:t.faces[2],bright:1},{quad:g,tex:t.faces[1],bright:.72},{quad:_,tex:t.faces[4],bright:.86}];for(let m of p)Qv(s,e.tiles[m.tex],m.quad,m.bright,m.tex===Er.grass_top||m.tex===Er.tall_grass||t.tint?r:null);return i.toDataURL()}var Ud={leather:["#a97b4f","#8a6136","#5e4022"],gold:["#ffe27a","#f0be34","#a87d12"],iron:["#eaeaee","#c2c2c8","#8b8b92"],diamond:["#9df2ec","#5cd3ca","#2e9a92"]},Bd={wood:[[150,112,62],[116,84,44]],stone:[[142,142,142],[104,104,104]],iron:[[224,224,226],[166,166,170]],diamond:[[104,232,226],[62,178,176]]};function ey(n){let t=Ze[n],e=document.createElement("canvas");e.width=oi,e.height=oi;let i=e.getContext("2d"),s=oi/16,r=(h,u,d,f=1,g=1)=>{i.fillStyle=d,i.fillRect(h*s,u*s,f*s,g*s)},o=t.key,a=/^(helmet|chestplate|leggings|boots)_(\w+)$/.exec(o);if(a){let[,h,u]=a,d=Ud[u]||Ud.iron,[f,g,_]=d;return h==="helmet"?(r(4,3,g,8,3),r(3,4,g,10,5),r(4,3,f,6,1),r(3,5,f,1,3),r(3,9,g,3,3),r(10,9,g,3,3),r(6,7,_,4,4),r(6,9,"#2a2a2e",4,2)):h==="chestplate"?(r(3,3,g,10,2),r(2,4,g,3,8),r(11,4,g,3,8),r(5,4,g,6,9),r(6,4,f,4,1),r(5,5,_,1,8),r(10,5,_,1,8),r(2,4,f,1,6),r(7,6,_,2,5)):h==="leggings"?(r(3,2,g,10,4),r(3,6,g,4,8),r(9,6,g,4,8),r(4,2,f,6,1),r(3,6,f,1,6),r(7,3,_,2,3),r(3,13,_,4,1),r(9,13,_,4,1)):(r(3,6,g,4,5),r(9,6,g,4,5),r(2,10,g,6,3),r(8,10,g,6,3),r(3,6,f,1,4),r(9,6,f,1,4),r(2,12,_,6,1),r(8,12,_,6,1)),e}let l=/^(pickaxe|axe|shovel|sword)_(\w+)$/.exec(o);if(l){let[,h,u]=l,[d,f]=Bd[u]||Bd.wood,g=`rgb(${d})`,_=`rgb(${f})`;for(let p=0;p<8;p++)r(4+p,12-p,"#7a5a32",2,2);for(let p=0;p<8;p++)r(4+p,12-p,"#8f6b3d",1,1);return h==="pickaxe"?(r(8,2,_,6,2),r(7,3,_,2,2),r(13,3,_,2,2),r(9,3,g,4,1),r(8,2,g,5,1)):h==="axe"?(r(9,2,_,5,6),r(9,2,g,4,4),r(13,3,_,1,4)):h==="shovel"?(r(10,2,_,4,5),r(10,2,g,3,4)):(r(9,2,g,2,8),r(10,2,_,1,8),r(7,10,"#6b4a26",6,2),r(9,11,"#8f6b3d",2,3)),e}return({stick:()=>{for(let h=0;h<9;h++)r(4+h,12-h,"#8a6435",2,2),r(4+h,12-h,"#a67b45",1,1)},coal:()=>{Rr(r,"#26262a","#454550")},charcoal:()=>{Rr(r,"#2f2a26","#54483c")},iron_ingot:()=>Fd(r,"#e2e2e6","#a9a9ae"),gold_ingot:()=>Fd(r,"#f6d24a","#c9a52e"),diamond:()=>yh(r,"#68e8e2","#2fa8a4"),emerald:()=>yh(r,"#38d76a","#1c8f43"),lapis:()=>yh(r,"#2f54c0","#1c357f"),redstone:()=>{for(let h=0;h<12;h++){let u=3+h*5%10,d=3+h*7%10;r(u,d,h%3?"#c8281e":"#ee4438",2,2)}},clay_ball:()=>Rr(r,"#a4aab8","#c4cad8"),brick:()=>{r(3,6,"#a2483a",10,5),r(3,6,"#bd5644",10,2)},flint:()=>Rr(r,"#3a3a3e","#5c5c62"),leather:()=>{r(3,4,"#9a6b3f",10,8),r(4,5,"#b98352",8,4)},feather:()=>{for(let h=0;h<9;h++)r(6+h%2,3+h,"#f2f2f4",2,1);r(5,4,"#dcdce2",4,5)},string:()=>{for(let h=0;h<12;h++)r(4+h%4,3+h,"#e4e4e4",1,1)},bone:()=>{r(4,4,"#eae6d8",8,3),r(3,3,"#eae6d8",2,5),r(11,3,"#eae6d8",2,5)},wheat:()=>{for(let h=0;h<6;h++)r(6,3+h*2,"#d8b83c",4,2);r(7,3,"#efd45c",2,10)},sugar:()=>{r(4,6,"#f0f0f4",8,5),r(5,7,"#ffffff",6,2)},apple:()=>{r(4,5,"#cf2b2b",8,8),r(5,6,"#ee5050",4,4),r(8,3,"#5c8f34",2,2)},bread:()=>{r(3,5,"#c08a41",10,6),r(4,6,"#d9a25a",8,3),r(5,5,"#e8bb78",2,1)},cookie:()=>{r(4,5,"#a9743a",8,7);for(let[h,u]of[[5,7],[8,6],[9,9],[6,10]])r(h,u,"#4b3020",2,2)},porkchop_raw:()=>Gs(r,"#e8888f","#f0a8ad"),porkchop:()=>Gs(r,"#b26a3a","#cf8b52"),beef_raw:()=>Gs(r,"#c2454b","#dd6b6f"),beef:()=>Gs(r,"#8c4f28","#ab6c3c"),chicken_raw:()=>Gs(r,"#e5b8a4","#f2cfbc"),chicken:()=>Gs(r,"#c08a4e","#d9a468"),mushroom_stew:()=>{r(3,7,"#9a9a9e",10,5),r(4,5,"#a8703f",8,3),r(6,4,"#c04030",2,2)},golden_apple:()=>{r(4,5,"#f6d24a",8,8),r(5,6,"#ffeb8a",4,4),r(8,3,"#5c8f34",2,2)},lighter:()=>{r(4,6,"#8f9299",3,7),r(5,6,"#c3c7cf",1,6),r(6,5,"#8f9299",2,2),r(8,4,"#5d5a55",4,5),r(9,5,"#7d7a73",2,3),r(7,11,"#6b4a26",5,2),r(8,12,"#8f6b3d",3,1),r(11,3,"#ffe08a",2,2),r(12,2,"#fff6cf",1,1)}}[o]||(()=>Rr(r,"#888","#bbb")))(),e}var _h=new Map;function oa(n){if(_h.has(n))return _h.get(n);let e=In().tiles[n],i=e?Vd(e):null;return _h.set(n,i),i}var vh=new Map;function ra(n){if(vh.has(n))return vh.get(n);let t=(Ri==null?void 0:Ri.items.get(n))||null;if(!t)try{t=n>=Ie?ey(n):null}catch{t=null}return vh.set(n,t),t}function Rr(n,t,e){n(4,5,t,8,7),n(5,4,t,6,2),n(3,7,t,2,3),n(5,6,e,3,2)}function Fd(n,t,e){n(3,7,e,10,4),n(4,6,e,8,2),n(5,7,t,6,2),n(4,9,t,3,1)}function yh(n,t,e){n(6,3,t,4,2),n(4,5,t,8,5),n(6,10,t,4,2),n(4,5,e,2,5),n(10,5,e,2,5),n(6,4,"#ffffff",2,1)}function Gs(n,t,e){n(4,5,t,9,7),n(5,6,e,5,4),n(3,8,"#eee8d8",2,3)}function _i(n){let t=Nd.get(n);if(t)return t;let e=()=>n<Ie?ty(n):((Ri==null?void 0:Ri.items.get(n))||ra(n)).toDataURL(),i="";try{i=e()}catch(s){try{i=n<Ie?"":ra(n).toDataURL()}catch{i=""}i||console.warn("[textures] no icon for id",n,s)}return i&&Nd.set(n,i),i}function Wd(n){for(let t of n)_i(t)}function Xd(n){let t=In(),e=new Rs(t.data,t.width,t.height,t.depth);return e.format=Xe,e.type=$e,e.magFilter=oe,e.minFilter=rn,e.generateMipmaps=!0,e.wrapS=di,e.wrapT=di,e.anisotropy=Math.min(4,n.capabilities.getMaxAnisotropy()),e.needsUpdate=!0,e}var iy=`
attribute float aLayer;
attribute float aAO;
attribute float aSky;
attribute float aBlk;
attribute vec3 aColor;

varying vec2 vUv;
varying float vLayer;
varying vec3 vLight;
varying vec3 vTint;
varying float vFogDepth;
varying float vHeight;

uniform float uTime;
uniform float uSun;
uniform vec3 uSkyLight;
uniform vec3 uBlockLight;
uniform vec3 uAmbient;
uniform float uWave;

void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  if (uWave > 0.5 && fract(position.y) > 0.5) {
    wp.y += sin(wp.x * 0.55 + uTime * 1.7) * 0.032
          + sin(wp.z * 0.72 - uTime * 1.25) * 0.030
          + sin((wp.x + wp.z) * 0.31 + uTime * 0.8) * 0.018;
  }
  vec4 mv = viewMatrix * wp;
  gl_Position = projectionMatrix * mv;

  vUv = uv;
  vLayer = aLayer;
  vTint = aColor;
  vHeight = wp.y;

  float sk = aSky * uSun;
  vec3 s = uSkyLight * sk;
  vec3 b = uBlockLight * aBlk;
  vec3 L = max(s, b) + 0.45 * min(s, b);
  L = max(L, uAmbient);
  vLight = L * aAO;

  vFogDepth = -mv.z;
}
`,ny=`
precision highp float;
precision highp sampler2DArray;

uniform sampler2DArray uAtlas;
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform float uAlphaTest;
uniform float uOpacity;
uniform vec3 uWaterTint;
uniform float uUnderwater;

varying vec2 vUv;
varying float vLayer;
varying vec3 vLight;
varying vec3 vTint;
varying float vFogDepth;

void main() {
  vec4 tex = texture(uAtlas, vec3(vUv, vLayer));
  if (tex.a < uAlphaTest) discard;

  vec3 col = tex.rgb * vTint * vLight;

  float fogAmt = smoothstep(uFogNear, uFogFar, vFogDepth);
  vec3 fogCol = mix(uFogColor, uWaterTint, uUnderwater);
  col = mix(col, fogCol, fogAmt);

  gl_FragColor = vec4(col, tex.a * uOpacity);
}
`;function Kd(n){let t={uAtlas:{value:n},uTime:{value:0},uSun:{value:1},uSkyLight:{value:new Tt(1,1,1)},uBlockLight:{value:new Tt(1,.78,.5)},uAmbient:{value:new Tt(.06,.07,.11)},uFogColor:{value:new Tt(.62,.76,.94)},uFogNear:{value:40},uFogFar:{value:160},uWaterTint:{value:new Tt(.12,.3,.52)},uUnderwater:{value:0}},e=i=>{let s=Object.assign({},t,{uAlphaTest:{value:i.alphaTest??0},uOpacity:{value:i.opacity??1},uWave:{value:i.wave?1:0}});for(let o of Object.keys(t))s[o]=t[o];let r=new De({uniforms:s,vertexShader:iy,fragmentShader:ny,transparent:!!i.transparent,depthWrite:i.depthWrite!==!1,side:i.side??Ei,fog:!1,lights:!1});return r.extensions={derivatives:!1},r};return{shared:t,opaque:e({alphaTest:.5}),cutout:e({alphaTest:.35,side:ui}),water:e({transparent:!0,opacity:.82,wave:!0,depthWrite:!1,side:ui}),glass:e({transparent:!0,opacity:1,alphaTest:.02,depthWrite:!0})}}function bh(n){return new De({uniforms:{uAtlas:{value:n},uTint:{value:new Tt(1,1,1)},uLight:{value:1}},vertexShader:`
      attribute float aLayer;
      varying vec2 vUv;
      varying float vLayer;
      varying vec3 vN;
      void main() {
        vUv = uv;
        vLayer = aLayer;
        vN = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      precision highp float;
      precision highp sampler2DArray;
      uniform sampler2DArray uAtlas;
      uniform vec3 uTint;
      uniform float uLight;
      varying vec2 vUv;
      varying float vLayer;
      varying vec3 vN;
      void main() {
        vec4 t = texture(uAtlas, vec3(vUv, vLayer));
        if (t.a < 0.35) discard;
        float d = 0.58 + 0.42 * max(dot(vN, normalize(vec3(0.42, 0.86, 0.48))), 0.0);
        gl_FragColor = vec4(t.rgb * uTint * d * uLight, 1.0);
      }`,side:Ei})}function Yd(n,t){let e=new Ce(1,1,1),i=e.attributes.uv;for(let r=0;r<i.count;r++)i.setY(r,1-i.getY(r));i.needsUpdate=!0;let s=new Float32Array(i.count);for(let r=0;r<6;r++)for(let o=0;o<4;o++)s[r*4+o]=t[r];return e.setAttribute("aLayer",new qt(s,1)),new Kt(e,bh(n))}function qd(){let n=new Ce(1.002,1.002,1.002),t=new Ho(n),e=new gr({color:723723,transparent:!0,opacity:.6,depthTest:!0}),i=new Fo(t,e);return i.visible=!1,i.renderOrder=3,i}function $d(){let e=Gd(),i=e||document.createElement("canvas");return e||sy(i,10,32),ry(i,10)}function sy(n,t,e){n.width=e*t,n.height=e;let i=n.getContext("2d");i.clearRect(0,0,n.width,n.height);let s=12345,r=()=>(s=s*1103515245+12345&2147483647,s/2147483647),o=[];for(let a=0;a<26;a++)o.push({x:r()*e,y:r()*e,a:r()*Math.PI*2,len:3+r()*9,w:r()<.4?2:1});for(let a=0;a<t;a++){let l=a*e,c=Math.ceil((a+1)/t*o.length);i.strokeStyle="rgba(10,10,10,0.85)";for(let h=0;h<c;h++){let u=o[h];i.lineWidth=u.w,i.beginPath();let d=u.x,f=u.y,g=u.a;i.moveTo(l+d,f);let _=3+h*7%4;for(let p=0;p<_;p++)g+=(r()-.5)*1.1,d+=Math.cos(g)*(u.len/_),f+=Math.sin(g)*(u.len/_),i.lineTo(l+d,f);i.stroke()}}}function ry(n,t){let e=new pi(n);e.magFilter=oe,e.minFilter=We,e.wrapS=Hi,e.repeat.set(1/t,1),e.colorSpace=_e;let i=new Ai({map:e,transparent:!0,opacity:.85,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3,depthWrite:!1}),s=new Kt(new Ce(1.008,1.008,1.008),i);return s.visible=!1,s.renderOrder=4,s.userData.setStage=r=>{e.offset.x=Math.max(0,Math.min(9,r))/t},s}var oy=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
}
`,ay=`
precision highp float;
varying vec3 vDir;
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec3 uGround;
uniform vec3 uSunColor;
uniform vec3 uSunDir;
uniform float uNight;
uniform float uTime;

float hash31(vec3 p) {
  p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419));
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

void main() {
  vec3 d = normalize(vDir);
  float up = clamp(d.y, 0.0, 1.0);
  vec3 col = mix(uHorizon, uZenith, pow(up, 0.62));
  col = mix(col, uGround, clamp(-d.y * 2.4, 0.0, 1.0));

  float sd = max(dot(d, uSunDir), 0.0);
  col += uSunColor * pow(sd, 220.0) * 2.2;
  col += uSunColor * pow(sd, 7.0) * 0.28;
  col += uSunColor * pow(sd, 2.0) * 0.06;

  if (uNight > 0.01) {
    vec3 cell = floor(d * 260.0);
    float s = hash31(cell);
    float star = smoothstep(0.9975, 0.99925, s);
    float tw = 0.65 + 0.35 * sin(uTime * 2.2 + s * 90.0);
    col += vec3(0.85, 0.9, 1.0) * star * tw * uNight * clamp(d.y * 2.0, 0.0, 1.0);
  }

  gl_FragColor = vec4(col, 1.0);
}
`;function ly(n,t,e=128){let i=document.createElement("canvas");i.width=i.height=e;let s=i.getContext("2d"),r=s.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);r.addColorStop(0,n),r.addColorStop(.42,n),r.addColorStop(.55,t),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,e,e);let o=new pi(i);return o.colorSpace=_e,o}function cy(n=128){let t=document.createElement("canvas");t.width=t.height=n;let e=t.getContext("2d");e.clearRect(0,0,n,n),e.fillStyle="#eef0f8",e.beginPath(),e.arc(n/2,n/2,n*.34,0,Math.PI*2),e.fill(),e.fillStyle="rgba(180,186,205,0.75)";let i=[[.44,.4,.06],[.58,.52,.045],[.5,.62,.035],[.62,.38,.03],[.4,.56,.028]];for(let[r,o,a]of i)e.beginPath(),e.arc(r*n,o*n,a*n,0,Math.PI*2),e.fill();let s=new pi(t);return s.colorSpace=_e,s}function Zd(n=256){let t=document.createElement("canvas");t.width=t.height=n;let e=t.getContext("2d"),i=e.createImageData(n,n),s=991,r=()=>(s=s*1664525+1013904223&4294967295,(s>>>8&65535)/65535),o=32,a=new Float32Array(o*o);for(let h=0;h<o*o;h++)a[h]=r();let l=(h,u)=>{let d=Math.floor(h),f=Math.floor(u),g=h-d,_=u-f,p=g*g*(3-2*g),m=_*_*(3-2*_),M=(R,P)=>a[(P%o+o)%o*o+(R%o+o)%o],b=M(d,f),A=M(d+1,f),O=M(d,f+1),C=M(d+1,f+1);return(b*(1-p)+A*p)*(1-m)+(O*(1-p)+C*p)*m};for(let h=0;h<n;h++)for(let u=0;u<n;u++){let d=u/n*o,f=h/n*o,g=0,_=.5,p=1;for(let b=0;b<4;b++)g+=l(d*p,f*p)*_,_*=.5,p*=2;let m=Math.max(0,Math.min(1,(g-.46)*3.4)),M=(h*n+u)*4;i.data[M]=255,i.data[M+1]=255,i.data[M+2]=255,i.data[M+3]=Math.round(Math.pow(m,.85)*235)}e.putImageData(i,0,0);let c=new pi(t);return c.wrapS=c.wrapT=Hi,c.colorSpace=_e,c}var Sh={zenith:[.02,.03,.085],horizon:[.055,.075,.155],ground:[.02,.025,.05]},Ws={zenith:[.235,.47,.9],horizon:[.64,.8,.965],ground:[.35,.44,.55]},Mh={zenith:[.18,.23,.48],horizon:[.98,.47,.23],ground:[.22,.16,.2]},Xs=(n,t,e)=>[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e],aa=class{constructor(t){this.group=new Me,this.group.frustumCulled=!1,t.add(this.group),this.uniforms={uZenith:{value:new Tt(...Ws.zenith)},uHorizon:{value:new Tt(...Ws.horizon)},uGround:{value:new Tt(...Ws.ground)},uSunColor:{value:new Tt(1,.95,.8)},uSunDir:{value:new L(0,1,0)},uNight:{value:0},uTime:{value:0}};let e=new Kt(new zo(1,32,20),new De({uniforms:this.uniforms,vertexShader:oy,fragmentShader:ay,side:Qe,depthWrite:!1,depthTest:!1,fog:!1}));e.scale.setScalar(900),e.renderOrder=-100,e.frustumCulled=!1,this.group.add(e),this.sun=new Kt(new Gi(110,110),new Ai({map:ly("rgba(255,250,225,1)","rgba(255,214,140,0.55)"),transparent:!0,blending:yo,depthWrite:!1,depthTest:!0,fog:!1})),this.sun.renderOrder=-99,this.sun.frustumCulled=!1,this.group.add(this.sun),this.moon=new Kt(new Gi(70,70),new Ai({map:cy(),transparent:!0,depthWrite:!1,depthTest:!0,fog:!1})),this.moon.renderOrder=-99,this.moon.frustumCulled=!1,this.group.add(this.moon);let i=Zd();this.cloudMat=new Ai({map:i,transparent:!0,opacity:.85,depthWrite:!1,side:ui,fog:!1}),this.clouds=new Kt(new Gi(1600,1600),this.cloudMat),this.clouds.rotation.x=-Math.PI/2,this.clouds.position.y=132,this.clouds.renderOrder=-50,this.clouds.frustumCulled=!1,i.repeat.set(9,9),this.group.add(this.clouds),this.cloudMat2=this.cloudMat.clone(),this.cloudMat2.map=Zd(),this.cloudMat2.map.wrapS=this.cloudMat2.map.wrapT=Hi,this.cloudMat2.map.repeat.set(5,5),this.cloudMat2.opacity=.55,this.cloudMat2.needsUpdate=!0,this.clouds2=new Kt(new Gi(1900,1900),this.cloudMat2),this.clouds2.rotation.x=-Math.PI/2,this.clouds2.position.y=158,this.clouds2.renderOrder=-51,this.clouds2.frustumCulled=!1,this.group.add(this.clouds2),this.sunDir=new L(0,1,0),this.fogColor=new Tt(.62,.76,.94),this.skyLight=new Tt(1,1,1),this.ambient=new Tt(.06,.07,.11),this.sunAmount=1,this.elapsed=0}setCloudsEnabled(t){this.clouds.visible=t,this.clouds2.visible=t}update(t,e,i){this.elapsed+=t;let s=(e-.25)*Math.PI*2,r=Math.sin(s);this.sunDir.set(Math.cos(s)*.86,r,Math.cos(s)*.28).normalize();let o=Math.max(0,Math.min(1,(r+.12)/.3)),a=Math.exp(-Math.pow(r/.22,2)),l=Math.max(0,Math.min(1,(-r+.05)/.25)),c=Xs(Sh.zenith,Ws.zenith,o),h=Xs(Sh.horizon,Ws.horizon,o),u=Xs(Sh.ground,Ws.ground,o);c=Xs(c,Mh.zenith,a*.75),h=Xs(h,Mh.horizon,a*.9),u=Xs(u,Mh.ground,a*.6),this.uniforms.uZenith.value.setRGB(c[0],c[1],c[2]),this.uniforms.uHorizon.value.setRGB(h[0],h[1],h[2]),this.uniforms.uGround.value.setRGB(u[0],u[1],u[2]),this.uniforms.uSunDir.value.copy(this.sunDir),this.uniforms.uNight.value=l,this.uniforms.uTime.value=this.elapsed,this.uniforms.uSunColor.value.setRGB(1,.92-a*.22,.76-a*.42).multiplyScalar(.55+.45*Math.max(o,a*.8)),this.fogColor.setRGB(h[0]*.88+c[0]*.12,h[1]*.88+c[1]*.12,h[2]*.88+c[2]*.12),this.sunAmount=.08+.92*o;let d=a*.85;this.skyLight.setRGB(.6+.36*o,.62+.32*o-d*.08,.7+.24*o-d*.22),this.ambient.setRGB(.045+.055*o,.05+.06*o,.08+.07*o);let f=i.position;this.group.position.set(f.x,0,f.z),this.clouds.position.set(0,132,0),this.clouds2.position.set(0,158,0),this.cloudMat.map.offset.x=this.elapsed*.0032%1,this.cloudMat.map.offset.y=this.elapsed*.0011%1,this.cloudMat2.map.offset.x=this.elapsed*.0019%1,this.cloudMat2.map.offset.y=this.elapsed*7e-4%1,this.clouds.position.x=0,this.clouds.position.z=0;let g=420;this.sun.position.copy(this.sunDir).multiplyScalar(g).add(new L(0,f.y,0)),this.moon.position.copy(this.sunDir).multiplyScalar(-g).add(new L(0,f.y,0)),this.sun.lookAt(f.x,f.y,f.z),this.moon.lookAt(f.x,f.y,f.z),this.sun.material.opacity=Math.max(0,Math.min(1,(r+.24)/.3)),this.moon.material.opacity=l,this.sun.visible=this.sun.material.opacity>.01,this.moon.visible=this.moon.material.opacity>.01,this.cloudMat.opacity=.3+.55*o,this.cloudMat2.opacity=.18+.36*o,this.cloudMat.color.setRGB(.72+.28*o+d*.2,.74+.26*o,.8+.2*o-d*.15),this.cloudMat2.color.copy(this.cloudMat.color)}};var Zn={DEEP_OCEAN:0,OCEAN:1,BEACH:2,RIVER:3,STONE_SHORE:4,PLAINS:5,MEADOW:6,FOREST:7,BIRCH_FOREST:8,DARK_FOREST:9,TAIGA:10,SNOWY_TAIGA:11,SNOWY_PLAINS:12,ICE_SPIKES:13,MOUNTAINS:14,SNOWY_PEAKS:15,DESERT:16,SAVANNA:17,JUNGLE:18,SWAMP:19,BADLANDS:20,MUSHROOM_ISLE:21},la=["deep_ocean","ocean","beach","river","stone_shore","plains","meadow","forest","birch_forest","dark_forest","taiga","snowy_taiga","snowy_plains","ice_spikes","mountains","snowy_peaks","desert","savanna","jungle","swamp","badlands","mushroom_isle"],hy=new Set([Zn.SNOWY_TAIGA,Zn.SNOWY_PLAINS,Zn.ICE_SPIKES,Zn.SNOWY_PEAKS]),Jd=n=>hy.has(n);var ca=26;var kx=[v.TERRACOTTA,v.TERRACOTTA_ORANGE,v.TERRACOTTA,v.TERRACOTTA_RED,v.TERRACOTTA_WHITE,v.TERRACOTTA_ORANGE,v.TERRACOTTA_BROWN,v.TERRACOTTA,v.TERRACOTTA_RED,v.TERRACOTTA_ORANGE,v.TERRACOTTA_WHITE,v.TERRACOTTA];var uy=600,ha=class{constructor(t){this.max=uy,this.pos=new Float32Array(this.max*3),this.col=new Float32Array(this.max*3),this.size=new Float32Array(this.max),this.vel=new Float32Array(this.max*3),this.life=new Float32Array(this.max),this.maxLife=new Float32Array(this.max),this.count=0;let e=new ke;e.setAttribute("position",new qt(this.pos,3)),e.setAttribute("color",new qt(this.col,3)),e.setAttribute("aSize",new qt(this.size,1)),e.setDrawRange(0,0);let i=new De({uniforms:{uScale:{value:500}},vertexShader:`
        attribute float aSize;
        varying vec3 vColor;
        uniform float uScale;
        void main(){
          vColor = color;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = max(1.0, aSize * uScale / max(1.0, -mv.z));
        }`,fragmentShader:`
        varying vec3 vColor;
        void main(){
          vec2 d = gl_PointCoord - vec2(0.5);
          if (max(abs(d.x), abs(d.y)) > 0.5) discard;
          gl_FragColor = vec4(vColor, 1.0);
        }`,vertexColors:!0,transparent:!1});this.points=new Ps(e,i),this.points.frustumCulled=!1,this.geo=e,t.add(this.points)}emit(t,e,i,s,r,o,a,l,c,h,u){let d=this.count;d>=this.max?d=Math.random()*this.max|0:this.count++,this.pos[d*3]=t,this.pos[d*3+1]=e,this.pos[d*3+2]=i,this.vel[d*3]=s,this.vel[d*3+1]=r,this.vel[d*3+2]=o,this.col[d*3]=a,this.col[d*3+1]=l,this.col[d*3+2]=c,this.size[d]=h,this.life[d]=u,this.maxLife[d]=u}blockBreak(t,e,i,s,r=22){let o=ei[s],a=(o==null?void 0:o.color)||[.6,.6,.6];for(let l=0;l<r;l++){let c=.75+Math.random()*.5;this.emit(t+Math.random(),e+Math.random(),i+Math.random(),(Math.random()-.5)*3.4,Math.random()*3.6,(Math.random()-.5)*3.4,a[0]*c,a[1]*c,a[2]*c,.055+Math.random()*.05,.5+Math.random()*.55)}}blockHit(t,e,i,s,r,o,a){let l=ei[a],c=(l==null?void 0:l.color)||[.6,.6,.6];for(let h=0;h<4;h++){let u=.8+Math.random()*.4;this.emit(t+.5+s*.55+(Math.random()-.5)*.6,e+.5+r*.55+(Math.random()-.5)*.6,i+.5+o*.55+(Math.random()-.5)*.6,s*1.4+(Math.random()-.5),r*1.4+Math.random()*1.2,o*1.4+(Math.random()-.5),c[0]*u,c[1]*u,c[2]*u,.045,.35+Math.random()*.3)}}footstep(t,e,i,s){let r=ei[s],o=(r==null?void 0:r.color)||[.6,.6,.6];for(let a=0;a<3;a++)this.emit(t+(Math.random()-.5)*.5,e+.06,i+(Math.random()-.5)*.5,(Math.random()-.5)*.7,Math.random()*.8,(Math.random()-.5)*.7,o[0],o[1],o[2],.04,.3+Math.random()*.2)}splash(t,e,i){for(let s=0;s<24;s++)this.emit(t+(Math.random()-.5)*.7,e+.1,i+(Math.random()-.5)*.7,(Math.random()-.5)*2.6,1.5+Math.random()*3,(Math.random()-.5)*2.6,.45,.62,.92,.05,.45+Math.random()*.35)}update(t){let e=this.count;for(let i=0;i<e;i++)if(!(this.life[i]<=0)){if(this.life[i]-=t,this.life[i]<=0){this.pos[i*3+1]=-1e3;continue}this.vel[i*3+1]-=14*t,this.pos[i*3]+=this.vel[i*3]*t,this.pos[i*3+1]+=this.vel[i*3+1]*t,this.pos[i*3+2]+=this.vel[i*3+2]*t,this.vel[i*3]*=.96,this.vel[i*3+2]*=.96}this.geo.setDrawRange(0,e),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0}reset(){this.count=0,this.life.fill(0),this.geo.setDrawRange(0,0)}},dy=260,ua=class{constructor(t){this.max=dy,this.pos=new Float32Array(this.max*3),this.col=new Float32Array(this.max*3),this.size=new Float32Array(this.max),this.alpha=new Float32Array(this.max),this.vel=new Float32Array(this.max*3),this.life=new Float32Array(this.max),this.maxLife=new Float32Array(this.max),this.grow=new Float32Array(this.max),this.next=0;let e=new ke;e.setAttribute("position",new qt(this.pos,3)),e.setAttribute("color",new qt(this.col,3)),e.setAttribute("aSize",new qt(this.size,1)),e.setAttribute("aAlpha",new qt(this.alpha,1)),e.setDrawRange(0,0);let i=new De({uniforms:{uScale:{value:620}},vertexShader:`
        attribute float aSize;
        attribute float aAlpha;
        varying vec3 vColor;
        varying float vAlpha;
        uniform float uScale;
        void main(){
          vColor = color;
          vAlpha = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp(aSize * uScale / max(1.0, -mv.z), 2.0, 260.0);
        }`,fragmentShader:`
        varying vec3 vColor;
        varying float vAlpha;
        void main(){
          vec2 d = gl_PointCoord - vec2(0.5);
          float r = length(d);
          if (r > 0.5) discard;
          float soft = smoothstep(0.5, 0.16, r);
          gl_FragColor = vec4(vColor, vAlpha * soft);
        }`,vertexColors:!0,transparent:!0,depthWrite:!1});this.points=new Ps(e,i),this.points.frustumCulled=!1,this.geo=e,t.add(this.points)}puff(t,e,i,{vx:s=0,vy:r=.35,vz:o=0,size:a=.5,grow:l=.35,life:c=7,shade:h=.35}={}){let u=this.next;this.next=(this.next+1)%this.max,this.pos[u*3]=t,this.pos[u*3+1]=e,this.pos[u*3+2]=i,this.vel[u*3]=s,this.vel[u*3+1]=r,this.vel[u*3+2]=o;let d=h+Math.random()*.12;this.col[u*3]=d,this.col[u*3+1]=d*.98,this.col[u*3+2]=d*.96,this.size[u]=a,this.grow[u]=l,this.life[u]=c,this.maxLife[u]=c,this.alpha[u]=0}burst(t,e,i,s=34,r=1.6){for(let o=0;o<s;o++){let a=Math.random()*Math.PI*2,l=Math.random()*r,c=Math.random();this.puff(t+Math.cos(a)*l,e+c*r*.8,i+Math.sin(a)*l,{vx:Math.cos(a)*(.25+Math.random()*.5),vy:.25+Math.random()*.7,vz:Math.sin(a)*(.25+Math.random()*.5),size:.5+Math.random()*.9,grow:.3+Math.random()*.45,life:5+Math.random()*5,shade:.22+Math.random()*.25})}}update(t){let e=0;for(let i=0;i<this.max;i++){if(this.life[i]<=0){this.alpha[i]=0;continue}if(this.life[i]-=t,this.life[i]<=0){this.alpha[i]=0,this.pos[i*3+1]=-1e3;continue}e++;let s=1-this.life[i]/this.maxLife[i];this.pos[i*3]+=this.vel[i*3]*t,this.pos[i*3+1]+=this.vel[i*3+1]*t,this.pos[i*3+2]+=this.vel[i*3+2]*t,this.vel[i*3]*=.985,this.vel[i*3+2]*=.985,this.vel[i*3+1]=this.vel[i*3+1]*.99+.02*t,this.size[i]+=this.grow[i]*t,this.alpha[i]=Math.min(1,s*6)*(1-s)*.78}this.geo.setDrawRange(0,e?this.max:0),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0,this.geo.attributes.aAlpha.needsUpdate=!0}reset(){this.life.fill(0),this.alpha.fill(0),this.geo.setDrawRange(0,0)}},wh=2600,da=class{constructor(t){this.enabled=!0,this.intensity=0,this.target=0,this.isSnow=!1,this.timer=60+Math.random()*180,this.radius=28;let e=new Float32Array(wh*3);for(let s=0;s<wh;s++)e[s*3]=(Math.random()-.5)*this.radius*2,e[s*3+1]=Math.random()*30,e[s*3+2]=(Math.random()-.5)*this.radius*2;this.pos=e;let i=new ke;i.setAttribute("position",new qt(e,3)),this.mat=new De({uniforms:{uColor:{value:new Tt(.66,.76,.95)},uOpacity:{value:0},uSize:{value:2.2},uStretch:{value:1}},vertexShader:`
        uniform float uSize;
        void main(){
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = max(1.0, uSize * 260.0 / max(1.0, -mv.z));
        }`,fragmentShader:`
        uniform vec3 uColor;
        uniform float uOpacity;
        uniform float uStretch;
        void main(){
          vec2 d = gl_PointCoord - vec2(0.5);
          if (abs(d.x) > 0.5 / uStretch) discard;
          gl_FragColor = vec4(uColor, uOpacity);
        }`,transparent:!0,depthWrite:!1}),this.points=new Ps(i,this.mat),this.points.frustumCulled=!1,this.points.visible=!1,this.geo=i,t.add(this.points)}setEnabled(t){this.enabled=t,t||(this.intensity=0,this.target=0,this.points.visible=!1)}update(t,e,i,s){if(!this.enabled)return;this.timer-=t,this.timer<=0&&(this.target=Math.random()<.34?.5+Math.random()*.5:0,this.timer=this.target>0?40+Math.random()*90:120+Math.random()*260),this.isSnow=Jd(i),(i===Zn.DESERT||i===Zn.BADLANDS)&&(this.target=Math.min(this.target,.05)),this.intensity+=(this.target-this.intensity)*Math.min(1,t*.25);let r=this.intensity>.02;if(this.points.visible=r,!r)return;let o=e.position;this.points.position.set(Math.round(o.x),0,Math.round(o.z));let a=this.isSnow?3.2:26,l=this.isSnow?1.2:.4,c=this.pos,h=o.y+18;for(let u=0;u<wh;u++)c[u*3+1]-=a*t,this.isSnow&&(c[u*3]+=Math.sin((c[u*3+1]+u)*.6)*l*t,c[u*3+2]+=Math.cos((c[u*3+1]+u*1.7)*.5)*l*t),c[u*3+1]<o.y-12&&(c[u*3]=(Math.random()-.5)*this.radius*2,c[u*3+1]=h+Math.random()*12,c[u*3+2]=(Math.random()-.5)*this.radius*2);this.geo.attributes.position.needsUpdate=!0,this.mat.uniforms.uOpacity.value=this.intensity*(this.isSnow?.85:.55),this.mat.uniforms.uSize.value=this.isSnow?2.6:1.9,this.mat.uniforms.uStretch.value=this.isSnow?1:3.4,this.mat.uniforms.uColor.value.setRGB(this.isSnow?.96:.62,this.isSnow?.98:.72,this.isSnow?1:.92)}get skyDamp(){return 1-this.intensity*.35}};var pa=3,fy=4.2,Ah=class{constructor(t,e,i,s,r){this.obj=t,this.obj.position.set(e+.5,i+.5,s+.5),this.pos=this.obj.position,this.vel=new L((Math.random()-.5)*.9,3.4,(Math.random()-.5)*.9),this.fuse=r,this.dead=!1,this.half=.49}collides(t,e,i,s){let r=this.half;for(let o=Math.floor(i-r);o<=Math.floor(i+r);o++)for(let a=Math.floor(s-r);a<=Math.floor(s+r);a++)for(let l=Math.floor(e-r);l<=Math.floor(e+r);l++)if(t.isSolid(l,o,a))return!0;return!1}update(t,e){this.fuse-=t,this.vel.y-=26*t;let i=this.pos.y+this.vel.y*t;this.collides(e,this.pos.x,i,this.pos.z)?(this.vel.y<0&&(this.pos.y=Math.floor(i+this.half)+.5,this.vel.x*=.6,this.vel.z*=.6),this.vel.y=0):this.pos.y=i;let s=this.pos.x+this.vel.x*t;this.collides(e,s,this.pos.y,this.pos.z)?this.vel.x=0:this.pos.x=s;let r=this.pos.z+this.vel.z*t;this.collides(e,this.pos.x,this.pos.y,r)?this.vel.z=0:this.pos.z=r,this.vel.x*=.985,this.vel.z*=.985;let o=2.4+(pa-Math.max(0,this.fuse))*2.4,a=Math.sin(this.fuse*o*Math.PI*2)>0?1:0,l=this.obj.material.uniforms;l.uTint.value.setRGB(1+a*2.6,1+a*2.2,1+a*2),l.uLight.value=1,this.pos.y<-6&&(this.dead=!0)}},fa=class{constructor(t,e){this.scene=t,this.atlasTex=e,this.list=[],this.onExplode=null}clear(){for(let t of this.list)this.disposeOne(t);this.list.length=0}disposeOne(t){this.scene.remove(t.obj),t.obj.geometry.dispose(),t.obj.material.dispose()}prime(t,e,i,s=pa){if(this.list.length>48)return null;let r=Yd(this.atlasTex,ei[v.TNT].faces),o=new Ah(r,t,e,i,s);return this.scene.add(r),this.list.push(o),o}update(t,e){for(let i=this.list.length-1;i>=0;i--){let s=this.list[i];if(s.update(t,e),s.fuse<=0||s.dead){let{x:r,y:o,z:a}=s.pos;this.disposeOne(s),this.list.splice(i,1),!s.dead&&this.onExplode&&this.onExplode(r,o,a,fy)}}}};function jd(n,t,e,i,s){let r=[],o=[],a=new Set,l=Math.ceil(s*1.35);for(let c=-l;c<=l;c++)for(let h=-l;h<=l;h++)for(let u=-l;u<=l;u++){if(Math.abs(c)!==l&&Math.abs(h)!==l&&Math.abs(u)!==l)continue;let d=Math.hypot(c,h,u);if(d===0)continue;let f=c/d,g=h/d,_=u/d,p=s*(.7+Math.random()*.6),m=t,M=e,b=i;for(;p>0;){let A=Math.floor(m),O=Math.floor(M),C=Math.floor(b);if(O<1||O>=128)break;let R=n.getBlock(A,O,C);if(R){let P=qn[R];if(P<0)break;if(p-=(P+.3)*.9,p>0){let K=`${A},${O},${C}`;a.has(K)||(a.add(K),R===v.TNT?o.push([A,O,C]):r.push(A,O,C,0))}}m+=f*.55,M+=g*.55,b+=_*.55,p-=.26}}return{removed:r,chain:o}}var Ks=new Map,Th=new Map;function py(n,t=.11){let e=n.width,s=n.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,e,e).data,r=1/e,o=t/2,a=[],l=[],c=[],h=[],u=(_,p)=>_<0||p<0||_>=e||p>=e?0:s[(p*e+_)*4+3],d=128,f=(_,p,m,M,b,A,O,C)=>{let R=a.length/3;for(let P of[_,p,m,M])a.push(P[0],P[1],P[2]);for(let P=0;P<4;P++)l.push(b[0],b[1],b[2]),c.push(A,O,C);h.push(R,R+1,R+2,R,R+2,R+3)};for(let _=0;_<e;_++)for(let p=0;p<e;p++){let m=(_*e+p)*4;if(s[m+3]<d)continue;let M=s[m]/255,b=s[m+1]/255,A=s[m+2]/255,O=p*r-.5,C=O+r,R=.5-_*r,P=R-r;f([O,P,o],[C,P,o],[C,R,o],[O,R,o],[0,0,1],M,b,A),f([C,P,-o],[O,P,-o],[O,R,-o],[C,R,-o],[0,0,-1],M*.82,b*.82,A*.82),u(p-1,_)<d&&f([O,P,-o],[O,P,o],[O,R,o],[O,R,-o],[-1,0,0],M*.7,b*.7,A*.7),u(p+1,_)<d&&f([C,P,o],[C,P,-o],[C,R,-o],[C,R,o],[1,0,0],M*.7,b*.7,A*.7),u(p,_-1)<d&&f([O,R,o],[C,R,o],[C,R,-o],[O,R,-o],[0,1,0],M*.9,b*.9,A*.9),u(p,_+1)<d&&f([O,P,-o],[C,P,-o],[C,P,o],[O,P,o],[0,-1,0],M*.6,b*.6,A*.6)}let g=new ke;return g.setAttribute("position",new Fe(a,3)),g.setAttribute("normal",new Fe(l,3)),g.setAttribute("color",new Fe(c,3)),g.setIndex(h),g.computeBoundingSphere(),g}function my(n){if(Ks.has(n))return Ks.get(n);let t=null;if(n>=Ie)t=ra(n);else{let i=ei[n];i&&(t=oa(i.faces[0]))}let e=t?py(t):null;return Ks.set(n,e),e}function gy(n){if(Th.has(n))return Th.get(n);let t=new Ge({vertexColors:!0,side:Ei});return Th.set(n,t),t}function _y(n){let t=`b${n.join("_")}`;if(Ks.has(t))return Ks.get(t);let e=new Ce(1,1,1),i=e.attributes.uv;for(let r=0;r<i.count;r++)i.setY(r,1-i.getY(r));i.needsUpdate=!0;let s=new Float32Array(i.count);for(let r=0;r<6;r++)for(let o=0;o<4;o++)s[r*4+o]=n[r];return e.setAttribute("aLayer",new qt(s,1)),Ks.set(t,e),e}function Ys(n,t){if(!n)return{mesh:null,kind:"none"};if(n<Ie){let o=ei[n];if(!o)return{mesh:null,kind:"none"};if(o.render!=="cross"){let a=new Kt(_y(o.faces),bh(t)),l=o.tint===1?[.6,.8,.4]:o.tint===2?[.48,.72,.32]:[1,1,1];return a.material.uniforms.uTint.value.setRGB(l[0],l[1],l[2]),{mesh:a,kind:"block"}}}let e=my(n);if(!e)return{mesh:null,kind:"none"};let i=new Kt(e,gy("sprite")),s=n>=Ie?Ze[n]:null,r=!!s&&s.tool!==bt.NONE;return{mesh:i,kind:r?"tool":"item"}}var Qd=14196858,vy=12091997,ma=class{constructor(t){this.atlasTex=t,this.scene=new Tn,this.camera=new qe(68,1,.01,12),this.camera.position.set(0,0,0),this.scene.add(new ks(16777215,7368816,1.5));let e=new Ds(16777215,1.1);e.position.set(.6,1,1.4),this.scene.add(e),this.root=new Me,this.scene.add(this.root),this.modelMesh=null,this.arm=new Kt(new Ce(.34,.34,1.05),new Ai({color:Qd}));let i=new Kt(new Ce(.36,.36,.3),new Ai({color:vy}));i.position.z=.42,this.arm.add(i),this.arm.visible=!1,this.root.add(this.arm),this.currentId=-1,this.kind="none",this.swingT=1,this.swingSpeed=3.6,this.eating=0,this.bob=0,this.enabled=!0,this.light=1}setItem(t){if(t===this.currentId)return;if(this.currentId=t,this.arm.visible=!1,this.modelMesh&&(this.root.remove(this.modelMesh),this.modelMesh.material&&this.modelMesh.material.uniforms&&this.modelMesh.material.dispose(),this.modelMesh=null),!t){this.kind="hand",this.arm.visible=!0;return}let{mesh:e,kind:i}=Ys(t,this.atlasTex);if(!e){this.kind="hand",this.arm.visible=!0;return}this.modelMesh=e,this.kind=i,this.root.add(e)}swing(t=!1){this.swingT<.45||(this.swingT=0,this.swingSpeed=t?5.2:3.6)}setEating(t){this.eating=t}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}update(t,{walking:e=0,sprinting:i=!1,light:s=1}={}){this.swingT<1&&(this.swingT=Math.min(1,this.swingT+t*this.swingSpeed)),this.bob+=t*e*(i?11:8),this.light=s;let r=.35+.65*s;this.modelMesh&&(this.modelMesh.material.uniforms?this.modelMesh.material.uniforms.uLight.value=r:this.modelMesh.material.color.setScalar(r)),this.arm.material.color.setHex(Qd).multiplyScalar(r);let o=this.swingT<1?Math.sin(this.swingT*Math.PI):0,a=Math.cos(this.bob)*.018*e,l=Math.abs(Math.sin(this.bob))*-.022*e,c=this.kind==="block"?{p:[.58,-.52,-.98],r:[.1,-.62,.06],s:.42}:this.kind==="tool"?{p:[.52,-.48,-.8],r:[.05,-.35,.75],s:.46}:this.kind==="item"?{p:[.5,-.46,-.82],r:[.05,-.3,.55],s:.38}:{p:[.56,-.52,-.7],r:[.25,-.25,0],s:1},h=c.p[0]+a,u=c.p[1]+l,d=c.p[2],f=c.r[0],g=c.r[1],_=c.r[2];if(o>0){let m=o;h-=m*.22,u-=m*.24,d+=m*.18,f-=m*1.15,_+=m*.45}if(this.eating>0){let m=Math.min(1,this.eating),M=Math.sin(this.eating*46)*.045*m;h+=(.16-h)*m*.85+M,u+=(-.3-u)*m*.85+Math.abs(M)*.6,d+=(-.42-d)*m*.85,f+=m*.55+M*2.2,_+=m*.35}let p=this.kind==="hand"?this.arm:this.modelMesh;p&&(p.position.set(h,u,d),p.rotation.set(f,g,_),this.kind!=="hand"&&p.scale.setScalar(c.s))}};var Di=128,ai=Di/16,Qx=16*128*16,tf=(n,t)=>n*1e5+t;function ef(n,t,e){let i=new fr(new Uint8Array(n*t*e),n,t,e);return i.format=Xo,i.type=$e,i.minFilter=oe,i.magFilter=oe,i.wrapS=Hi,i.wrapT=di,i.wrapR=Hi,i.generateMipmaps=!1,i.flipY=!1,i.unpackAlignment=1,i.needsUpdate=!0,i}var ga=class{constructor(t){this.renderer=t,this.texture=ef(Di,Di,Di),this.staging=ef(16,128,16),this.slots=new Array(ai*ai).fill(null),this.dirty=new Set,this.minCX=0,this.minCZ=0,this.filled=0,this._dst=new L}get originX(){return this.minCX*16}get originZ(){return this.minCZ*16}get coverage(){return this.filled/(ai*ai)}slotIndex(t,e){let i=(t%ai+ai)%ai;return(e%ai+ai)%ai*ai+i}invalidate(t,e){this.dirty.add(tf(Math.floor(t)>>4,Math.floor(e)>>4))}invalidateMany(t){for(let e=0;e<t.length;e+=4)this.invalidate(t[e],t[e+2])}update(t,e,i,s=3){this.minCX=Math.floor(e/16)-(ai>>1),this.minCZ=Math.floor(i/16)-(ai>>1);let r=0,o=0;for(let a=0;a<ai;a++)for(let l=0;l<ai;l++){let c=this.minCX+l,h=this.minCZ+a,u=tf(c,h),d=this.slotIndex(c,h),f=this.slots[d],g=!f||f.key!==u||this.dirty.has(u),_=t.getChunk(c,h),p=!!(_&&_.loaded);if(!g&&f.filled===p){f.filled&&o++;continue}if(r>=s){f&&f.key===u&&f.filled&&o++;continue}this.upload(c,h,p?_.blocks:null),this.slots[d]={key:u,filled:p},this.dirty.delete(u),r++,p&&o++}this.filled=o}upload(t,e,i){let s=this.staging.image.data;if(!i)s.fill(0);else for(let a=0;a<16;a++)for(let l=0;l<128;l++){let c=hn(0,l,a),h=(a*128+l)*16;for(let u=0;u<16;u++)s[h+u]=i[c+u]}let r=(t*16%Di+Di)%Di,o=(e*16%Di+Di)%Di;this._dst.set(r,0,o),this.renderer.copyTextureToTexture3D(this.staging,this.texture,null,this._dst)}dispose(){this.texture.dispose(),this.staging.dispose()}};function yy(n,t){let e=w*w,i=t*e*4,s=0,r=0,o=0,a=0;for(let l=0;l<e;l++)n.data[i+l*4+3]<128||(s+=n.data[i+l*4],r+=n.data[i+l*4+1],o+=n.data[i+l*4+2],a++);return a?[s/a,r/a,o/a]:[0,0,0]}function nf(){let n=In(),t=[];for(let r=0;r<n.depth;r++)t.push(yy(n,r));let e=new Uint8Array(256*2*4),i=Math.min(256,ii);for(let r=0;r<i;r++){let o=un[r],a=0,l=0,c=0;for(let m of[0,1,4,5]){let M=t[ch[r*6+m]]||[0,0,0];a+=M[0],l+=M[1],c+=M[2]}a/=4,l/=4,c/=4,lh[r]&&(a*=.62,l*=.86,c*=.5);let h=mi[r]===jo,u=o===5,f=o!==0&&!(o===4)&&!u&&mi[r]===0,g=r*4;e[g]=Math.round(a),e[g+1]=Math.round(l),e[g+2]=Math.round(c),e[g+3]=f?255:0;let _=0;h?_=255:r===v.ICE||r===v.PACKED_ICE?_=200:u&&(_=90);let p=1024+r*4;e[p]=_,e[p+1]=Math.min(255,oh[r]*17),e[p+2]=h?255:0,e[p+3]=255}let s=new No(e,256,2);return s.format=Xe,s.type=$e,s.minFilter=oe,s.magFilter=oe,s.wrapS=di,s.wrapT=di,s.generateMipmaps=!1,s.flipY=!1,s.needsUpdate=!0,s}var sf=.5,xy=.9,rf=`
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,by=`
precision highp float;
precision highp sampler3D;

uniform sampler2D uDepth;
uniform sampler2D uPrevDepth;
uniform sampler2D uHistory;
uniform sampler3D uVol;
uniform sampler2D uPal;

uniform mat4 uInvViewProj;
uniform mat4 uPrevViewProj;
uniform mat4 uPrevInvViewProj;
uniform vec3 uCamPos;
uniform vec3 uSunDir;
uniform vec3 uSkyColor;
uniform vec3 uSunColor;
uniform float uSunAmount;
uniform vec3 uVolMin;
uniform float uFrame;
uniform float uAoRays;
uniform float uReflect;
uniform float uHasHistory;
uniform float uDebug;   // 1 = write the raw terms instead of the packed result

in vec2 vUv;
out vec4 fragColor;

const float DIM = ${Di}.0;
const float HISTORY = ${xy.toFixed(3)};
const float SHADOW_RANGE = 90.0;
const float AO_RANGE = 5.0;
const float REFL_RANGE = 60.0;

vec4 palA(float id) { return texture(uPal, vec2((id + 0.5) / 256.0, 0.25)); }
vec4 palB(float id) { return texture(uPal, vec2((id + 0.5) / 256.0, 0.75)); }

/* Block id at a point, or -1 outside the valid window. Repeat wrapping does
   the toroidal addressing; the bounds test is what stops a ray from reading
   terrain that has wrapped in from the far side of the player. */
float voxel(vec3 p) {
  vec3 q = floor(p);
  if (q.y < 0.0 || q.y > DIM - 1.0) return -1.0;
  vec3 rel = q - uVolMin;
  if (any(lessThan(rel.xz, vec2(0.0))) || any(greaterThan(rel.xz, vec2(DIM - 1.0)))) return -1.0;
  return texture(uVol, (q + 0.5) / DIM).r * 255.0;
}

/* Amanatides-Woo DDA. mode 0 stops on ray-blocking voxels, mode 1 stops on
   reflective ones. Returns distance to the hit, or -1 for a miss. */
float march(vec3 ro, vec3 rd, float maxT, int mode, out float hitId, out vec3 hitN) {
  hitId = 0.0;
  hitN = vec3(0.0);
  vec3 p = floor(ro);
  vec3 s = sign(rd);
  vec3 inv = 1.0 / max(abs(rd), vec3(1e-5));
  vec3 side = (s * (p - ro) + s * 0.5 + 0.5) * inv;
  vec3 mask = vec3(0.0);
  float t = 0.0;

  for (int i = 0; i < 160; i++) {
    float id = voxel(p);
    if (id < 0.0) return -1.0;
    if (id > 0.5) {
      bool hit = mode == 0 ? palA(id).a > 0.5 : palB(id).r > 0.02;
      if (hit) { hitId = id; hitN = -s * mask; return t; }
    }
    mask = step(side.xyz, side.yzx) * step(side.xyz, side.zxy);
    t = min(side.x, min(side.y, side.z));
    if (t > maxT) return -1.0;
    side += mask * inv;
    p += mask * s;
  }
  return -1.0;
}

vec3 worldFrom(vec2 uv, float d, mat4 invVP) {
  vec4 clip = vec4(uv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0);
  vec4 w = invVP * clip;
  return w.xyz / w.w;
}

float hash(vec3 v) {
  return fract(sin(dot(v, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
}

/* Voxel faces are axis aligned, so the screen-space derivative of world
   position gives an exact normal once snapped to the dominant axis. */
vec3 faceNormal(vec3 wp) {
  vec3 n = normalize(cross(dFdx(wp), dFdy(wp)));
  vec3 a = abs(n);
  vec3 snapped = a.x > a.y && a.x > a.z ? vec3(sign(n.x), 0.0, 0.0)
               : a.y > a.z ? vec3(0.0, sign(n.y), 0.0)
                           : vec3(0.0, 0.0, sign(n.z));
  return snapped;
}

vec3 hemisphere(vec3 n, float u1, float u2) {
  float r = sqrt(u1);
  float phi = 6.2831853 * u2;
  vec3 t = abs(n.y) < 0.9 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
  vec3 tx = normalize(cross(t, n));
  vec3 ty = cross(n, tx);
  return normalize(tx * (r * cos(phi)) + ty * (r * sin(phi)) + n * sqrt(max(0.0, 1.0 - u1)));
}

/* Colour a traced ray ends on: flat block albedo lit by how much sky it sees,
   plus its own emission. Cheap, and a reflection never asks for more. */
vec3 shadeHit(float id, vec3 pos, vec3 n) {
  vec4 a = palA(id);
  vec4 b = palB(id);
  vec3 albedo = a.rgb;
  float up;
  vec3 dummyN;
  float sky = march(pos + n * 0.03, vec3(0.0, 1.0, 0.0), 40.0, 0, up, dummyN) < 0.0 ? 1.0 : 0.35;
  vec3 lit = albedo * (uSkyColor * sky * max(uSunAmount, 0.12) + vec3(0.06));
  return lit + albedo * b.g * 1.6;
}

void main() {
  float d = texture(uDepth, vUv).r;
  // Sky pixels keep the rasterised colour untouched.
  if (d >= 0.9999) { fragColor = vec4(0.0, 0.0, 0.0, 1.0); return; }

  vec3 wp = worldFrom(vUv, d, uInvViewProj);
  vec3 view = normalize(wp - uCamPos);
  vec3 n = faceNormal(wp);
  if (dot(n, view) > 0.0) n = -n;

  float rnd = hash(vec3(gl_FragCoord.xy, uFrame));
  float rnd2 = hash(vec3(gl_FragCoord.yx, uFrame + 13.0));

  vec3 origin = wp + n * 0.02;
  vec3 refl = vec3(0.0);

  // -- sun shadow ----------------------------------------------------------
  float shade = 1.0;
  if (uSunAmount > 0.02 && dot(n, uSunDir) > 0.0) {
    // A little cone jitter turns the hard edge into a penumbra once the
    // temporal pass has averaged a few frames of it.
    vec3 sd = normalize(uSunDir + (vec3(rnd, rnd2, hash(vec3(vUv, uFrame))) - 0.5) * 0.035);
    float id; vec3 hn;
    if (march(origin, sd, SHADOW_RANGE, 0, id, hn) >= 0.0) shade = 0.0;
  } else {
    shade = 0.0;
  }
  float sunLoss = mix(1.0, 0.52, uSunAmount);
  float shadow = mix(sunLoss, 1.0, shade);

  // -- ambient occlusion ---------------------------------------------------
  float ao = 0.0;
  float rays = max(1.0, uAoRays);
  for (int i = 0; i < 4; i++) {
    if (float(i) >= rays) break;
    float u1 = fract(rnd + float(i) * 0.618034);
    float u2 = fract(rnd2 + float(i) * 0.381966);
    vec3 dir = hemisphere(n, u1, u2);
    float id; vec3 hn;
    float t = march(origin, dir, AO_RANGE, 0, id, hn);
    ao += t < 0.0 ? 1.0 : clamp(t / AO_RANGE, 0.0, 1.0);
  }
  ao = mix(1.0, ao / rays, 0.85);

  // -- reflections ---------------------------------------------------------
  // Water and ice are drawn without depth write, so the depth buffer holds the
  // bed underneath. Re-cast the primary ray to find the surface the eye sees.
  if (uReflect > 0.5) {
    float sid; vec3 sn;
    float st = march(uCamPos, view, min(length(wp - uCamPos), REFL_RANGE), 1, sid, sn);
    if (st >= 0.0 && length(sn) > 0.5) {
      vec3 sp = uCamPos + view * st;
      float strength = palB(sid).r;
      vec3 rd = reflect(view, sn);
      // Slight roughness so a lake is not a mirror.
      rd = normalize(rd + (vec3(rnd, rnd2, hash(vec3(vUv.yx, uFrame))) - 0.5) * 0.05);
      float hid; vec3 hn;
      float ht = march(sp + sn * 0.02, rd, REFL_RANGE, 0, hid, hn);
      vec3 col = ht < 0.0 ? uSkyColor * (0.6 + 0.4 * max(rd.y, 0.0))
                          : shadeHit(hid, sp + rd * ht, hn);
      float fres = pow(1.0 - max(dot(-view, sn), 0.0), 4.0);
      refl = col * strength * (0.10 + 0.75 * fres);
      // The reflective surface is in front of whatever the shadow pass shaded,
      // so stop darkening a pixel the player cannot actually see.
      shadow = mix(shadow, 1.0, 0.6);
      ao = mix(ao, 1.0, 0.6);
    }
  }

  if (uDebug > 0.5) { fragColor = vec4(shade, ao, length(n), shadow * ao); return; }

  vec4 cur = vec4(refl, shadow * ao);

  // -- temporal accumulation ----------------------------------------------
  if (uHasHistory > 0.5) {
    vec4 pc = uPrevViewProj * vec4(wp, 1.0);
    if (pc.w > 0.0) {
      vec2 puv = pc.xy / pc.w * 0.5 + 0.5;
      if (all(greaterThanEqual(puv, vec2(0.0))) && all(lessThanEqual(puv, vec2(1.0)))) {
        float pd = texture(uPrevDepth, puv).r;
        if (pd < 0.9999) {
          vec3 pwp = worldFrom(puv, pd, uPrevInvViewProj);
          if (distance(pwp, wp) < 0.30) cur = mix(cur, texture(uHistory, puv), HISTORY);
        }
      }
    }
  }

  fragColor = cur;
}
`,Sy=`
precision highp float;

uniform sampler2D uScene;
uniform sampler2D uTrace;
uniform sampler2D uDepth;
uniform vec2 uTexel;      // one full-res texel
uniform float uStrength;

in vec2 vUv;
out vec4 fragColor;

/* Depth-aware 2x2 tap: a half-res shadow must not leak across a silhouette. */
vec4 upsample(vec2 uv, float d) {
  vec4 acc = vec4(0.0);
  float wsum = 0.0;
  for (int y = -1; y <= 1; y += 2) {
    for (int x = -1; x <= 1; x += 2) {
      vec2 o = vec2(float(x), float(y)) * uTexel;
      float dn = texture(uDepth, uv + o).r;
      float w = 1.0 / (1.0 + 900.0 * abs(dn - d));
      acc += texture(uTrace, uv + o) * w;
      wsum += w;
    }
  }
  return wsum > 0.0 ? acc / wsum : texture(uTrace, uv);
}

void main() {
  vec3 scene = texture(uScene, vUv).rgb;
  float d = texture(uDepth, vUv).r;
  if (d >= 0.9999 || uStrength <= 0.001) { fragColor = vec4(scene, 1.0); return; }

  vec4 rt = upsample(vUv, d);
  vec3 col = scene * mix(1.0, clamp(rt.a, 0.0, 1.2), uStrength);
  col += rt.rgb * uStrength;
  fragColor = vec4(col, 1.0);
}
`;function My(n,t){let e=new Is(n,t);e.type=ln,e.format=Mn,e.minFilter=oe,e.magFilter=oe;let i=new Oi(n,t,{minFilter:We,magFilter:We,format:Xe,type:$e,depthBuffer:!0,stencilBuffer:!1,depthTexture:e});return i.isXRRenderTarget=!0,i.texture.colorSpace=_e,i.texture.internalFormat="RGBA8",i}function Ey(n,t){return new Oi(n,t,{minFilter:We,magFilter:We,format:Xe,type:$e,depthBuffer:!1,stencilBuffer:!1})}var _a=class{constructor(t,e,i){this.renderer=t,this.scene=e,this.camera=i,this.enabled=!1,this.strength=0,this.frame=0,this.cur=0,this.sceneRT=[null,null],this.traceRT=[null,null],this.width=0,this.height=0,this.failed=!1,this.volume=null,this.palette=null,this.quadCam=new Ls(-1,1,1,-1,0,1);let s=new Gi(2,2);this.traceMat=new _r({glslVersion:dr,vertexShader:`precision highp float;
in vec3 position;
in vec2 uv;
${rf}`,fragmentShader:by,depthTest:!1,depthWrite:!1,uniforms:{uDepth:{value:null},uPrevDepth:{value:null},uHistory:{value:null},uVol:{value:null},uPal:{value:null},uInvViewProj:{value:new ne},uPrevViewProj:{value:new ne},uPrevInvViewProj:{value:new ne},uCamPos:{value:new L},uSunDir:{value:new L(.4,.9,.2)},uSkyColor:{value:new Tt(.7,.82,1)},uSunColor:{value:new Tt(1,.95,.85)},uSunAmount:{value:1},uVolMin:{value:new L},uFrame:{value:0},uAoRays:{value:2},uReflect:{value:1},uHasHistory:{value:0},uDebug:{value:0}}}),this.compositeMat=new _r({glslVersion:dr,vertexShader:`precision highp float;
in vec3 position;
in vec2 uv;
${rf}`,fragmentShader:Sy,depthTest:!1,depthWrite:!1,uniforms:{uScene:{value:null},uTrace:{value:null},uDepth:{value:null},uTexel:{value:new Xt},uStrength:{value:1}}}),this.traceQuad=new Kt(s,this.traceMat),this.traceQuad.frustumCulled=!1,this.compositeQuad=new Kt(s,this.compositeMat),this.compositeQuad.frustumCulled=!1,this.quadScene=new Tn,this.prevViewProj=new ne,this.prevInvViewProj=new ne,this.hasPrev=!1}get supported(){if(this.failed)return!1;let t=this.renderer.getContext();return typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext}get active(){return this.enabled&&!this.failed&&!!this.volume&&this.strength>.001}setEnabled(t,e={}){if(t=!!t&&this.supported,t&&!this.volume)try{this.volume=new ga(this.renderer),this.palette=nf(),this.traceMat.uniforms.uVol.value=this.volume.texture,this.traceMat.uniforms.uPal.value=this.palette}catch(s){return console.warn("[craftblock] ray tracing unavailable:",s),this.failed=!0,this.dispose(),!1}this.enabled=t,t||(this.strength=0,this.hasPrev=!1);let i=!!e.lowPower;return this.traceMat.uniforms.uAoRays.value=i?1:2,this.traceMat.uniforms.uReflect.value=i?0:1,t}resize(t,e){var r,o;if(t=Math.max(2,Math.floor(t)),e=Math.max(2,Math.floor(e)),t===this.width&&e===this.height)return;this.width=t,this.height=e;let i=Math.max(2,Math.floor(t*sf)),s=Math.max(2,Math.floor(e*sf));for(let a=0;a<2;a++)(r=this.sceneRT[a])==null||r.dispose(),(o=this.traceRT[a])==null||o.dispose(),this.sceneRT[a]=My(t,e),this.traceRT[a]=Ey(i,s);this.compositeMat.uniforms.uTexel.value.set(1/t,1/e),this.hasPrev=!1}setSky(t,e,i,s){let r=this.traceMat.uniforms;r.uSunDir.value.copy(t).normalize(),r.uSunAmount.value=e,r.uSkyColor.value.copy(i),s&&r.uSunColor.value.copy(s)}update(t,e,i,s){if(!this.enabled||!this.volume)return;this.volume.update(e,i,s,3);let r=this.volume.coverage>.6?1:0,o=t*2.5;this.strength+=Math.max(-o,Math.min(o,r-this.strength)),this.strength=Math.max(0,Math.min(1,this.strength))}onBlocksChanged(t,e){var i;(i=this.volume)==null||i.invalidate(t,e)}onManyBlocksChanged(t){var e;(e=this.volume)==null||e.invalidateMany(t)}render(){let t=this.renderer,e=t.getDrawingBufferSize(new Xt);this.resize(e.x,e.y);let i=this.cur,s=1-i,r=this.sceneRT[i],o=this.sceneRT[s],a=this.traceRT[i],l=this.traceRT[s];t.setRenderTarget(r),t.clear(!0,!0,!1),t.render(this.scene,this.camera);let c=this.camera;c.updateMatrixWorld();let h=new ne().multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse),u=new ne().copy(h).invert(),d=this.traceMat.uniforms;d.uDepth.value=r.depthTexture,d.uPrevDepth.value=o.depthTexture,d.uHistory.value=l.texture,d.uInvViewProj.value.copy(u),d.uPrevViewProj.value.copy(this.prevViewProj),d.uPrevInvViewProj.value.copy(this.prevInvViewProj),d.uCamPos.value.copy(c.position),d.uVolMin.value.set(this.volume.originX,0,this.volume.originZ),d.uFrame.value=this.frame%64+1,d.uHasHistory.value=this.hasPrev?1:0,this.quadScene.clear(),this.quadScene.add(this.traceQuad),t.setRenderTarget(a),t.render(this.quadScene,this.quadCam);let f=this.compositeMat.uniforms;f.uScene.value=r.texture,f.uTrace.value=a.texture,f.uDepth.value=r.depthTexture,f.uStrength.value=this.strength,this.quadScene.clear(),this.quadScene.add(this.compositeQuad),t.setRenderTarget(null),t.render(this.quadScene,this.quadCam),this.prevViewProj.copy(h),this.prevInvViewProj.copy(u),this.hasPrev=!0,this.frame++,this.cur=s}dispose(){var t,e,i,s;for(let r=0;r<2;r++)(t=this.sceneRT[r])==null||t.dispose(),(e=this.traceRT[r])==null||e.dispose(),this.sceneRT[r]=null,this.traceRT[r]=null;(i=this.volume)==null||i.dispose(),this.volume=null,(s=this.palette)==null||s.dispose(),this.palette=null,this.width=this.height=0,this.strength=0,this.hasPrev=!1}};var jn=1.8/32,Rh=8*jn,Ch=8*jn,Cr=12*jn,wy=4*jn,Pn=4*jn,$s=12*jn,va=4*jn,Sa=$s,s1=Sa+Cr,ya="#d9a06a",Lh="#c08a58",Jn="#4a3421",xa="#2e9fa3",ba="#25848a",of="#3b4b8c",af="#4a3b2a";function Ci(n,t=16){let e=document.createElement("canvas");e.width=e.height=t;let i=e.getContext("2d");i.imageSmoothingEnabled=!1,n(i,t);let s=new pi(e);return s.magFilter=oe,s.minFilter=oe,s.colorSpace=_e,s}var Yt=(n,t,e,i,s,r)=>{n.fillStyle=t,n.fillRect(e,i,s,r)};function Ay(){let n=Ci((f,g)=>{Yt(f,ya,0,0,g,g),Yt(f,Jn,0,0,g,4),Yt(f,Jn,0,0,2,7),Yt(f,Jn,g-2,0,2,7),Yt(f,"#ffffff",3,7,3,2),Yt(f,"#ffffff",10,7,3,2),Yt(f,"#3b2a8c",4,7,2,2),Yt(f,"#3b2a8c",11,7,2,2),Yt(f,Lh,7,8,2,3),Yt(f,"#7a4a3a",6,12,4,1)}),t=Ci((f,g)=>{Yt(f,ya,0,0,g,g),Yt(f,Jn,0,0,g,5),Yt(f,Jn,0,0,4,g),Yt(f,Lh,11,7,2,2)}),e=Ci((f,g)=>{Yt(f,Jn,0,0,g,g),Yt(f,"#3b2a1a",0,11,g,5)}),i=Ci((f,g)=>{Yt(f,Jn,0,0,g,g),Yt(f,"#59402a",4,4,8,8)}),s=Ci((f,g)=>Yt(f,Lh,0,0,g,g)),r=Ci((f,g)=>{Yt(f,xa,0,0,g,g),Yt(f,ba,0,0,g,3),Yt(f,ba,7,3,2,g-3),Yt(f,"#1d6b70",0,g-2,g,2)}),o=Ci((f,g)=>{Yt(f,xa,0,0,g,g),Yt(f,ba,0,0,g,3),Yt(f,"#1d6b70",0,g-2,g,2)}),a=Ci((f,g)=>{Yt(f,xa,0,0,g,6),Yt(f,ba,0,5,g,1),Yt(f,ya,0,6,g,g-6)}),l=Ci((f,g)=>Yt(f,xa,0,0,g,g)),c=Ci((f,g)=>Yt(f,ya,0,0,g,g)),h=Ci((f,g)=>{Yt(f,of,0,0,g,g-3),Yt(f,"#2f3d75",0,g-6,g,1),Yt(f,af,0,g-3,g,3)}),u=Ci((f,g)=>Yt(f,of,0,0,g,g)),d=Ci((f,g)=>Yt(f,af,0,0,g,g));return{faceFront:n,faceSide:t,faceBack:e,faceTop:i,faceBottom:s,shirt:r,shirtSide:o,arm:a,armEndTop:l,armEndBottom:c,leg:h,legTop:u,legBottom:d}}var we=n=>new Ge({map:n});function qs(n,t,e,i,s=0){let r=new Ce(n,t,e);return s!==0&&r.translate(0,-s*t,0),new Kt(r,i)}var Zs=class{constructor(t,e){this.atlasTex=e,this.group=new Me,this.group.visible=!1,t.add(this.group);let i=Ay(),s=[we(i.faceSide),we(i.faceSide),we(i.faceTop),we(i.faceBottom),we(i.faceFront),we(i.faceBack)],r=[we(i.shirtSide),we(i.shirtSide),we(i.shirt),we(i.shirt),we(i.shirt),we(i.shirt)],o=[we(i.arm),we(i.arm),we(i.armEndTop),we(i.armEndBottom),we(i.arm),we(i.arm)],a=[we(i.leg),we(i.leg),we(i.legTop),we(i.legBottom),we(i.leg),we(i.leg)];this.body=qs(Ch,Cr,wy,r,-.5),this.body.position.y=Sa,this.group.add(this.body),this.head=qs(Rh,Rh,Rh,s,-.5),this.head.position.y=Cr,this.body.add(this.head),this.armR=qs(Pn,$s,va,o,.5),this.armR.position.set(-(Ch/2+Pn/2),Cr-.02,0),this.body.add(this.armR),this.armL=qs(Pn,$s,va,o.map(l=>l.clone()),.5),this.armL.position.set(Ch/2+Pn/2,Cr-.02,0),this.body.add(this.armL),this.legR=qs(Pn,$s,va,a,.5),this.legR.position.set(-Pn/2,Sa,0),this.group.add(this.legR),this.legL=qs(Pn,$s,va,a.map(l=>l.clone()),.5),this.legL.position.set(Pn/2,Sa,0),this.group.add(this.legL),this.handSocket=new Me,this.handSocket.position.set(0,-$s+.04,.02),this.armR.add(this.handSocket),this.heldId=-1,this.heldMesh=null,this.limbSwing=0,this.bodyYaw=0,this.swing=0,this.eat=0}setVisible(t){this.group.visible=t}setHeld(t){if(t===this.heldId||(this.heldId=t,this.heldMesh&&(this.handSocket.remove(this.heldMesh),this.heldMesh.material&&this.heldMesh.material.uniforms&&this.heldMesh.material.dispose(),this.heldMesh=null),!t))return;let{mesh:e,kind:i}=Ys(t,this.atlasTex);if(e){if(i==="block")e.scale.setScalar(.32),e.position.set(0,-.1,.1),e.rotation.set(0,.35,0);else{let s=i==="tool"?.58:.42;e.scale.setScalar(s),e.rotation.set(0,-Math.PI/2,0),e.position.set(0,-.02+s*.24,.04+s*.26)}this.heldMesh=e,this.handSocket.add(e)}}update(t,e){let i=e.speed>.35,s=Math.min(1,e.speed/6.2);this.limbSwing+=t*(i?3.2+s*5.5:0),i||(this.limbSwing*=Math.pow(.02,t));let r=i?.55+s*.5:0,o=Math.sin(this.limbSwing),a=Math.sin(this.limbSwing+Math.PI);if(this.legR.rotation.x=o*r,this.legL.rotation.x=a*r,this.armR.rotation.x=a*r*.72,this.armL.rotation.x=o*r*.72,this.armR.rotation.z=.06+Math.abs(o)*.05,this.armL.rotation.z=-.06-Math.abs(a)*.05,!e.onGround&&!e.inWater&&(this.legR.rotation.x=-.35,this.legL.rotation.x=.28,this.armR.rotation.x-=.5,this.armL.rotation.x-=.5),e.inWater||e.flying){let f=this.limbSwing*1.6;this.armR.rotation.x=-1.1+Math.sin(f)*.7,this.armL.rotation.x=-1.1+Math.sin(f+Math.PI)*.7}let l=e.sneaking?1:0;this.sneakBlend=(this.sneakBlend??0)+(l-(this.sneakBlend??0))*Math.min(1,t*12);let c=this.sneakBlend;if(this.body.rotation.x=c*.32,this.group.position.y=(this.baseY??0)-c*.14,this.armR.rotation.x-=c*.35,this.armL.rotation.x-=c*.35,this.swing>0){this.swing=Math.max(0,this.swing-t*3.6);let f=1-this.swing,g=Math.sin(f*Math.PI);this.armR.rotation.x=-g*2.1-.2,this.armR.rotation.z=.06+g*.5}if(this.eat>0){let f=Math.sin(this.eat*42)*.09;this.armR.rotation.x=-1.85+f,this.armR.rotation.z=.55,this.head.rotation.z=f*.35}else this.head.rotation.z=0;let u=(i?e.yaw:this.bodyYaw)-this.bodyYaw;for(;u>Math.PI;)u-=Math.PI*2;for(;u<-Math.PI;)u+=Math.PI*2;this.bodyYaw+=u*Math.min(1,t*9);let d=e.yaw-this.bodyYaw;for(;d>Math.PI;)d-=Math.PI*2;for(;d<-Math.PI;)d+=Math.PI*2;Math.abs(d)>1.2&&(this.bodyYaw+=d-Math.sign(d)*1.2,d=Math.sign(d)*1.2),this.group.rotation.y=this.bodyYaw+Math.PI,this.head.rotation.y=d,this.head.rotation.x=-Math.max(-1.3,Math.min(1.3,e.pitch))}triggerSwing(){this.swing<=.35&&(this.swing=1)}setEating(t){this.eat=t}setPosition(t,e,i){this.baseY=e,this.group.position.set(t,e,i)}};var Ty=24,Ry=300,lf=1.5,cf=.7,Cy=.4,Ly=140,Iy=new L,Ih=class{constructor(t,e,i,s,r,o,a,l,c){this.obj=t,this.obj.position.set(s,r,o),this.pos=new L(s,r,o),this.vel=new L(a,l,c),this.id=e,this.count=i,this.age=0,this.pickupIn=Cy,this.dead=!1,this.spin=Math.random()*Math.PI*2,this.baseY=r,this.magnet=null}},Ma=class{constructor(t,e){this.scene=t,this.atlasTex=e,this.list=[],this.onPickup=null}clear(){for(let t of this.list)this.dispose(t);this.list.length=0}dispose(t){this.scene.remove(t.obj),t.obj.material&&t.obj.material.uniforms&&t.obj.material.dispose()}spawn(t,e,i,s=null){if(!t||e<=0)return null;if(this.list.length>=Ly){let u=this.list.shift();this.dispose(u)}let{mesh:r,kind:o}=Ys(t,this.atlasTex);if(!r)return null;r.scale.setScalar(o==="block"?.26:.36);let a=s?s.x:(Math.random()-.5)*1.6,l=s?s.y:1.6+Math.random()*.9,c=s?s.z:(Math.random()-.5)*1.6,h=new Ih(r,t,e,i.x,i.y,i.z,a,l,c);return this.scene.add(r),this.list.push(h),h}spawnStack(t,e,i,s=null){let r=ri(t),o=e;for(;o>0;){let a=Math.min(o,r);this.spawn(t,a,i,s),o-=a}}collides(t,e,i,s){for(let o=Math.floor(i);o<=Math.floor(i+.25);o++)for(let a=Math.floor(s-.13);a<=Math.floor(s+.13);a++)for(let l=Math.floor(e-.13);l<=Math.floor(e+.13);l++)if(t.isSolid(l,o,a))return!0;return!1}update(t,e,i){let s=i.pos.x,r=i.pos.y+.9,o=i.pos.z;for(let a=this.list.length-1;a>=0;a--){let l=this.list[a];if(l.age+=t,l.pickupIn=Math.max(0,l.pickupIn-t),l.age>Ry&&(l.dead=!0),l.magnet!==null){l.magnet+=t;let c=Math.min(1,l.magnet/.18);l.pos.lerp(Iy.set(s,r,o),c),l.obj.scale.multiplyScalar(1-t*6),c>=1&&(l.dead=!0)}else{l.vel.y-=Ty*t;let c=!1,h=l.pos.y+l.vel.y*t;this.collides(e,l.pos.x,h,l.pos.z)?(l.vel.y<0&&(l.pos.y=Math.floor(h)+1.02,l.baseY=l.pos.y,c=!0),l.vel.y=0):(l.pos.y=h,l.baseY=l.pos.y);let u=l.pos.x+l.vel.x*t;this.collides(e,u,l.pos.y,l.pos.z)?l.vel.x=0:l.pos.x=u;let d=l.pos.z+l.vel.z*t;this.collides(e,l.pos.x,l.pos.y,d)?l.vel.z=0:l.pos.z=d;let f=Math.pow(c?.02:.6,t);if(l.vel.x*=f,l.vel.z*=f,l.pos.y<-8&&(l.dead=!0),l.spin+=t*1.6,l.age>.5)for(let g=a-1;g>=0;g--){let _=this.list[g];if(_.dead||_.id!==l.id||_.magnet!==null)continue;let p=ri(l.id);if(_.count>=p||l.pos.distanceToSquared(_.pos)>cf*cf)continue;let m=Math.min(l.count,p-_.count);_.count+=m,l.count-=m,l.count<=0&&(l.dead=!0);break}if(!l.dead&&l.pickupIn<=0&&!i.dead){let g=s-l.pos.x,_=o-l.pos.z,p=l.pos.y-i.pos.y;if(g*g+_*_<lf*lf&&p>-1.4&&p<2.4){let m=this.onPickup?this.onPickup(l.id,l.count):l.count;m<l.count&&(l.count=m,m<=0&&(l.magnet=0))}}}l.obj.rotation.y=l.spin,l.obj.position.set(l.pos.x,l.pos.y+.08+Math.sin(l.spin*1.5)*.05,l.pos.z),l.dead&&(this.dispose(l),this.list.splice(a,1))}}};var Li=(n,t)=>n*1e5+t,Js=class{constructor(t,e){this.scene=t,this.materials=e,this.chunks=new Map,this.pending=new Set,this.inFlight=0,this.maxInFlight=3,this.renderDistance=8,this.seed=0,this.ready=!1,this.onReady=null,this.onChunkLoaded=null,this.group=new Me,t.add(this.group),this.queue=[],this.center={cx:0,cz:0},this.loadedCount=0,this._editResolvers=[];let i=typeof window<"u"&&window.__CB_WORKER_SRC;if(i){let s=URL.createObjectURL(new Blob([i],{type:"text/javascript"}));this.worker=new Worker(s),URL.revokeObjectURL(s)}else this.worker=new Worker("worker.js");this.worker.onmessage=s=>this.onMessage(s.data)}init(t,e,i){this.seed=t,this.worker.postMessage({type:"init",seed:t,edits:e||[],spawn:i||null})}setPaused(t){t=!!t,this._paused!==t&&(this._paused=t,this.worker.postMessage({type:t?"pause":"resume"}))}dispose(){for(let t of this.chunks.values())this.disposeChunk(t);this.chunks.clear(),this.scene.remove(this.group),this.worker.terminate();for(let t of this._editResolvers)t([]);this._editResolvers.length=0}onMessage(t){switch(t.type){case"ready":this.ready=!0,this.onReady&&this.onReady(t.spawn);break;case"chunk":{let e=Li(t.cx,t.cz),i=this.chunks.get(e);i||(i={cx:t.cx,cz:t.cz,meshes:{},loaded:!1},this.chunks.set(e,i)),i.blocks=t.blocks,i.biomes=t.biomes,i.heights=t.heights,i.loaded=!0,this.pending.delete(e),this.loadedCount++,this.onChunkLoaded&&this.onChunkLoaded(t.cx,t.cz);break}case"mesh":this.applyMesh(t.cx,t.cz,t.geo);break;case"blocks":{let e=t.list;for(let i=0;i<e.length;i+=4){let s=e[i],r=e[i+1],o=e[i+2],a=e[i+3],l=this.chunks.get(Li(s>>4,o>>4));l&&l.loaded&&(l.blocks[hn(s&15,r,o&15)]=a)}this.onVoxelChangeMany&&this.onVoxelChangeMany(e);break}case"fx":this.onFx&&this.onFx(t);break;case"arena":this.onArena&&this.onArena(t);break;case"batchDone":this.inFlight--,this.pump();break;case"edits":{let e=this._editResolvers.splice(0);for(let i of e)i(t.edits);break}}}getEdits(){return new Promise(t=>{this._editResolvers.push(t),this.worker.postMessage({type:"getEdits"})})}buildGeometry(t){let e=new ke;return e.setAttribute("position",new qt(t.pos,3)),e.setAttribute("uv",new qt(t.uv,2,!0)),e.setAttribute("aLayer",new qt(t.layer,1,!1)),e.setAttribute("aAO",new qt(t.ao,1,!0)),e.setAttribute("aSky",new qt(t.sky,1,!0)),e.setAttribute("aBlk",new qt(t.blk,1,!0)),e.setAttribute("aColor",new qt(t.col,3,!0)),e.setIndex(new qt(t.index,1)),e.computeBoundingSphere(),e}applyMesh(t,e,i){let s=Li(t,e),r=this.chunks.get(s);r||(r={cx:t,cz:e,meshes:{},loaded:!1},this.chunks.set(s,r));let o=[["opaque",this.materials.opaque,0],["cutout",this.materials.cutout,1],["water",this.materials.water,2],["glass",this.materials.glass,1]];for(let[a,l,c]of o){let h=i[a],u=r.meshes[a];if(!h){u&&(this.group.remove(u),u.geometry.dispose(),delete r.meshes[a]);continue}let d=this.buildGeometry(h);if(u)u.geometry.dispose(),u.geometry=d;else{let f=new Kt(d,l);f.position.set(t*16,0,e*16),f.renderOrder=c,f.matrixAutoUpdate=!1,f.updateMatrix(),r.meshes[a]=f,this.group.add(f)}}}disposeChunk(t){for(let e of Object.keys(t.meshes)){let i=t.meshes[e];this.group.remove(i),i.geometry.dispose()}t.meshes={}}update(t,e){let i=Math.floor(t/16),s=Math.floor(e/16);(i!==this.center.cx||s!==this.center.cz||this.queue.length===0)&&(this.center.cx=i,this.center.cz=s,this.rebuildQueue(),this.unloadFar()),this.pump()}rebuildQueue(){let t=this.renderDistance,{cx:e,cz:i}=this.center,s=[];for(let r=-t;r<=t;r++)for(let o=-t;o<=t;o++){let a=o*o+r*r;if(a>(t+.5)*(t+.5))continue;let l=Li(e+o,i+r);this.chunks.has(l)&&this.chunks.get(l).loaded||this.pending.has(l)||s.push({cx:e+o,cz:i+r,d2:a})}s.sort((r,o)=>r.d2-o.d2),this.queue=s}pump(){for(;this.inFlight<this.maxInFlight&&this.queue.length;){let t=this.queue.splice(0,2),e=[];for(let i of t)e.push(i.cx,i.cz),this.pending.add(Li(i.cx,i.cz));this.inFlight++,this.worker.postMessage({type:"request",list:e,tag:Date.now()})}}unloadFar(){let t=this.renderDistance+2,{cx:e,cz:i}=this.center,s=[];for(let[r,o]of this.chunks){let a=o.cx-e,l=o.cz-i;a*a+l*l>t*t&&(this.disposeChunk(o),this.chunks.delete(r),s.push(o.cx,o.cz))}s.length&&this.worker.postMessage({type:"drop",list:s})}setRenderDistance(t){t!==this.renderDistance&&(this.renderDistance=t,this.queue=[],this.unloadFar(),this.rebuildQueue())}getChunk(t,e){return this.chunks.get(Li(t,e))}isChunkLoaded(t,e){let i=this.chunks.get(Li(t,e));return!!(i&&i.loaded)}getBlock(t,e,i){if(e<0||e>=128)return 0;t=Math.floor(t),e=Math.floor(e),i=Math.floor(i);let s=this.chunks.get(Li(t>>4,i>>4));return!s||!s.loaded?0:s.blocks[hn(t&15,e,i&15)]}isSolid(t,e,i){if(e<0)return!0;if(e>=128)return!1;let s=Math.floor(t),r=Math.floor(e),o=Math.floor(i),a=this.chunks.get(Li(s>>4,o>>4));return!a||!a.loaded?!0:ah[a.blocks[hn(s&15,r,o&15)]]===1}isLiquid(t,e,i){return mi[this.getBlock(t,e,i)]!==0}getBiome(t,e){let i=this.chunks.get(Li(Math.floor(t)>>4,Math.floor(e)>>4));return!i||!i.loaded?5:i.biomes[(Math.floor(e)&15)*16+(Math.floor(t)&15)]}getHeight(t,e){let i=this.chunks.get(Li(Math.floor(t)>>4,Math.floor(e)>>4));return!i||!i.loaded?64:i.heights[(Math.floor(e)&15)*16+(Math.floor(t)&15)]}setBlock(t,e,i,s){if(t=Math.floor(t),e=Math.floor(e),i=Math.floor(i),e<1||e>=128)return!1;let r=this.chunks.get(Li(t>>4,i>>4));return!r||!r.loaded?!1:(r.blocks[hn(t&15,e,i&15)]=s,this.worker.postMessage({type:"set",x:t,y:e,z:i,id:s}),this.onLocalEdit&&this.onLocalEdit(t,e,i,s),this.onVoxelChange&&this.onVoxelChange(t,i),!0)}setBlocks(t){if(!t.length)return;for(let i=0;i<t.length;i+=4){let s=t[i],r=t[i+1],o=t[i+2],a=t[i+3];if(r<1||r>=128)continue;let l=this.chunks.get(Li(s>>4,o>>4));l&&l.loaded&&(l.blocks[hn(s&15,r,o&15)]=a)}this.onLocalEdits&&this.onLocalEdits(t),this.onVoxelChangeMany&&this.onVoxelChangeMany(t);let e=new Int32Array(t);this.worker.postMessage({type:"setMany",list:e},[e.buffer])}surfaceY(t,e){for(let i=127;i>0;i--){let s=this.getBlock(t,i,e);if(s!==0&&!mi[s]&&un[s]!==4)return i+1}return 64}raycast(t,e,i=6,s=!1){let r=Math.floor(t.x),o=Math.floor(t.y),a=Math.floor(t.z),l=e.x>0?1:-1,c=e.y>0?1:-1,h=e.z>0?1:-1,u=R=>R===0?1/0:Math.abs(1/R),d=u(e.x),f=u(e.y),g=u(e.z),_=(R,P)=>P>0?Math.ceil(R)-R:R-Math.floor(R),p=d*_(t.x,l),m=f*_(t.y,c),M=g*_(t.z,h),b=0,A=0,O=0,C=0;for(let R=0;R<512;R++){let P=this.getBlock(r,o,a);if(P!==0){let K=un[P];if((s?!0:K!==3)&&K!==0)return{x:r,y:o,z:a,nx:b,ny:A,nz:O,id:P,dist:C}}if(p<m?p<M?(r+=l,C=p,p+=d,b=-l,A=0,O=0):(a+=h,C=M,M+=g,b=0,A=0,O=-h):m<M?(o+=c,C=m,m+=f,b=0,A=-c,O=0):(a+=h,C=M,M+=g,b=0,A=0,O=-h),C>i||o<0||o>=128)break}return null}};var Lr=9,js=36,Ea=class{constructor(){this.slots=new Array(js).fill(null),this.armor=new Array(ta).fill(null),this.selected=0,this.onChange=null}get armorPoints(){let t=0;for(let e of this.armor)e&&(t+=Pd(e.id));return t}equip(t,e){let i=this.armor[t]||null;return this.armor[t]=e,this.changed(),i}equipFrom(t){let e=this.get(t);if(!e)return!1;let i=zs(e.id);return i<0?!1:(this.slots[t]=this.armor[i]||null,this.armor[i]=e,this.changed(),!0)}changed(){this.onChange&&this.onChange()}get(t){return this.slots[t]}get held(){return this.slots[this.selected]}get heldId(){var t;return((t=this.slots[this.selected])==null?void 0:t.id)??0}clear(){this.slots.fill(null),this.armor.fill(null),this.changed()}count(t){let e=0;for(let i of this.slots)i&&i.id===t&&(e+=i.count);return e}add(t,e=1){if(!t||e<=0)return e;let i=ri(t);for(let s=0;s<js&&e>0;s++){let r=this.slots[s];if(r&&r.id===t&&r.count<i){let o=Math.min(i-r.count,e);r.count+=o,e-=o}}for(let s=0;s<js&&e>0;s++)if(!this.slots[s]){let r=Math.min(i,e);this.slots[s]={id:t,count:r},e-=r}return this.changed(),e}remove(t,e=1){let i=e;for(let s=0;s<js&&i>0;s++){let r=this.slots[s];if(!r||r.id!==t)continue;let o=Math.min(r.count,i);r.count-=o,i-=o,r.count<=0&&(this.slots[s]=null)}return this.changed(),e-i}removeAt(t,e=1){let i=this.slots[t];if(!i)return 0;let s=Math.min(i.count,e);return i.count-=s,i.count<=0&&(this.slots[t]=null),this.changed(),s}swap(t,e){let i=this.slots[t];this.slots[t]=this.slots[e],this.slots[e]=i,this.changed()}select(t){this.selected=(t%Lr+Lr)%Lr,this.changed()}cycle(t){this.select(this.selected+(t>0?1:-1))}isFull(){return this.slots.every(t=>t!==null)}serialize(){return{slots:this.slots.map(t=>t?[t.id,t.count]:0),armor:this.armor.map(t=>t?[t.id,t.count]:0)}}deserialize(t){let e=Array.isArray(t)?t:t==null?void 0:t.slots;if(this.slots=new Array(js).fill(null),this.armor=new Array(ta).fill(null),Array.isArray(e))for(let s=0;s<Math.min(e.length,js);s++){let r=e[s];Array.isArray(r)&&r[0]&&ki(r[0])&&(this.slots[s]={id:r[0],count:Math.max(1,r[1]|0)})}let i=t==null?void 0:t.armor;if(Array.isArray(i))for(let s=0;s<Math.min(i.length,ta);s++){let r=i[s];Array.isArray(r)&&r[0]&&zs(r[0])===s&&(this.armor[s]={id:r[0],count:1})}this.changed()}},Py=0,hf=[],Pt=(n,t,e,i={})=>{hf.push({id:Py++,out:n,count:t,need:e.map(([s,r])=>({id:s,n:r})),table:!!i.table,furnace:!!i.furnace,cat:i.cat||"misc"})},uf=[[v.LOG_OAK,v.PLANKS_OAK],[v.LOG_BIRCH,v.PLANKS_BIRCH],[v.LOG_SPRUCE,v.PLANKS_SPRUCE],[v.LOG_JUNGLE,v.PLANKS_JUNGLE]];for(let[n,t]of uf)Pt(t,4,[[n,1]],{cat:"basic"});for(let[,n]of uf)Pt(q.STICK,4,[[n,2]],{cat:"basic"});Pt(v.CRAFTING_TABLE,1,[[v.PLANKS_OAK,4]],{cat:"basic"});Pt(v.CRAFTING_TABLE,1,[[v.PLANKS_SPRUCE,4]],{cat:"basic"});Pt(v.CRAFTING_TABLE,1,[[v.PLANKS_BIRCH,4]],{cat:"basic"});Pt(v.TORCH,4,[[q.STICK,1],[q.COAL,1]],{cat:"basic"});Pt(v.TORCH,4,[[q.STICK,1],[q.CHARCOAL,1]],{cat:"basic"});Pt(v.FURNACE,1,[[v.COBBLE,8]],{table:!0,cat:"basic"});var Oy=[["wood",v.PLANKS_OAK],["stone",v.COBBLE],["iron",q.IRON_INGOT],["diamond",q.DIAMOND]];for(let[n,t]of Oy)Pt(q[`PICKAXE_${n.toUpperCase()}`],1,[[t,3],[q.STICK,2]],{table:!0,cat:"tools"}),Pt(q[`AXE_${n.toUpperCase()}`],1,[[t,3],[q.STICK,2]],{table:!0,cat:"tools"}),Pt(q[`SHOVEL_${n.toUpperCase()}`],1,[[t,1],[q.STICK,2]],{table:!0,cat:"tools"}),Pt(q[`SWORD_${n.toUpperCase()}`],1,[[t,2],[q.STICK,1]],{table:!0,cat:"tools"});Pt(v.STONE_BRICKS,4,[[v.STONE,4]],{table:!0,cat:"build"});Pt(v.POLISHED_STONE,4,[[v.STONE,4]],{table:!0,cat:"build"});Pt(v.CHISELED_STONE,1,[[v.STONE_BRICKS,2]],{table:!0,cat:"build"});Pt(v.MOSSY_COBBLE,1,[[v.COBBLE,1],[v.TALL_GRASS,1]],{cat:"build"});Pt(v.MOSSY_STONE_BRICKS,1,[[v.STONE_BRICKS,1],[v.TALL_GRASS,1]],{cat:"build"});Pt(v.BRICKS,1,[[q.BRICK,4]],{table:!0,cat:"build"});Pt(v.SANDSTONE,1,[[v.SAND,4]],{table:!0,cat:"build"});Pt(v.RED_SANDSTONE,1,[[v.RED_SAND,4]],{table:!0,cat:"build"});Pt(v.BOOKSHELF,1,[[v.PLANKS_OAK,6],[q.STRING,3]],{table:!0,cat:"build"});Pt(v.HAY,1,[[q.WHEAT,9]],{table:!0,cat:"build"});Pt(v.WOOL_WHITE,1,[[q.STRING,4]],{cat:"build"});var ky=[[v.WOOL_RED,v.FLOWER_RED],[v.WOOL_YELLOW,v.FLOWER_YELLOW],[v.WOOL_BLUE,v.FLOWER_BLUE],[v.WOOL_PURPLE,v.FLOWER_PINK],[v.WOOL_GREEN,v.TALL_GRASS],[v.WOOL_ORANGE,v.PUMPKIN],[v.WOOL_BLACK,q.COAL]];for(let[n,t]of ky)Pt(n,1,[[v.WOOL_WHITE,1],[t,1]],{cat:"build"});var Dy=[[v.COAL_BLOCK,q.COAL],[v.IRON_BLOCK,q.IRON_INGOT],[v.GOLD_BLOCK,q.GOLD_INGOT],[v.DIAMOND_BLOCK,q.DIAMOND],[v.EMERALD_BLOCK,q.EMERALD],[v.LAPIS_BLOCK,q.LAPIS]];for(let[n,t]of Dy)Pt(n,1,[[t,9]],{table:!0,cat:"build"}),Pt(t,9,[[n,1]],{cat:"build"});Pt(q.BREAD,1,[[q.WHEAT,3]],{cat:"food"});Pt(q.SUGAR,1,[[v.SUGAR_CANE,1]],{cat:"food"});Pt(q.COOKIE,8,[[q.WHEAT,2],[q.SUGAR,1]],{cat:"food"});Pt(q.MUSHROOM_STEW,1,[[v.MUSHROOM_RED,1],[v.MUSHROOM_BROWN,1]],{cat:"food"});Pt(q.GOLDEN_APPLE,1,[[q.APPLE,1],[q.GOLD_INGOT,8]],{table:!0,cat:"food"});Pt(q.IRON_INGOT,1,[[v.IRON_ORE,1]],{furnace:!0,cat:"smelt"});Pt(q.GOLD_INGOT,1,[[v.GOLD_ORE,1]],{furnace:!0,cat:"smelt"});Pt(v.GLASS,1,[[v.SAND,1]],{furnace:!0,cat:"smelt"});Pt(v.STONE,1,[[v.COBBLE,1]],{furnace:!0,cat:"smelt"});Pt(q.BRICK,1,[[q.CLAY_BALL,1]],{furnace:!0,cat:"smelt"});Pt(v.TERRACOTTA,1,[[v.CLAY,1]],{furnace:!0,cat:"smelt"});Pt(q.CHARCOAL,1,[[v.LOG_OAK,1]],{furnace:!0,cat:"smelt"});Pt(q.PORKCHOP,1,[[q.PORKCHOP_RAW,1]],{furnace:!0,cat:"smelt"});Pt(q.BEEF,1,[[q.BEEF_RAW,1]],{furnace:!0,cat:"smelt"});Pt(q.CHICKEN,1,[[q.CHICKEN_RAW,1]],{furnace:!0,cat:"smelt"});Pt(v.PACKED_ICE,1,[[v.ICE,4]],{table:!0,cat:"build"});var Ny=[["leather",q.LEATHER],["gold",q.GOLD_INGOT],["iron",q.IRON_INGOT],["diamond",q.DIAMOND]];for(let[n,t]of Ny){let e=n.toUpperCase();Pt(q[`HELMET_${e}`],1,[[t,5]],{table:!0,cat:"armor"}),Pt(q[`CHESTPLATE_${e}`],1,[[t,8]],{table:!0,cat:"armor"}),Pt(q[`LEGGINGS_${e}`],1,[[t,7]],{table:!0,cat:"armor"}),Pt(q[`BOOTS_${e}`],1,[[t,4]],{table:!0,cat:"armor"})}Pt(q.LIGHTER,1,[[q.IRON_INGOT,1],[q.FLINT,1]],{table:!0,cat:"tools"});Pt(v.TNT,1,[[q.REDSTONE,5],[v.SAND,4]],{table:!0,cat:"build"});var Ph=hf,wa=[q.COAL,q.CHARCOAL,v.PLANKS_OAK,v.PLANKS_BIRCH,v.PLANKS_SPRUCE,v.PLANKS_JUNGLE,q.STICK,v.COAL_BLOCK];function df(n,t,e,i){if(n.table&&!e||n.furnace&&!i)return!1;for(let s of n.need)if(t.count(s.id)<s.n)return!1;if(n.furnace){let s=!1;for(let r of wa){let o=n.need.find(a=>a.id===r);if(t.count(r)>(o?o.n:0)){s=!0;break}}if(!s)return!1}return!0}function ff(n,t,e,i){if(!df(n,t,e,i))return!1;for(let r of n.need)t.remove(r.id,r.n);if(n.furnace){for(let r of wa)if(t.count(r)>0){t.remove(r,1);break}}return t.add(n.out,n.count)===0}function pf(n,t,e){let i=[];for(let s of Ph){let r=df(s,n,t,e),o=s.need.some(a=>n.count(a.id)>0);(r||o||s.cat==="basic")&&i.push({recipe:s,ok:r})}return i.sort((s,r)=>r.ok-s.ok||s.recipe.id-r.recipe.id),i}var Aa=(()=>{let n=[v.STONE,v.COBBLE,v.MOSSY_COBBLE,v.STONE_BRICKS,v.MOSSY_STONE_BRICKS,v.CHISELED_STONE,v.POLISHED_STONE,v.GRANITE,v.DIORITE,v.ANDESITE,v.BRICKS,v.SANDSTONE,v.RED_SANDSTONE,v.TERRACOTTA,v.TERRACOTTA_RED,v.TERRACOTTA_ORANGE,v.TERRACOTTA_WHITE,v.TERRACOTTA_BROWN,v.PLANKS_OAK,v.PLANKS_BIRCH,v.PLANKS_SPRUCE,v.PLANKS_JUNGLE,v.LOG_OAK,v.LOG_BIRCH,v.LOG_SPRUCE,v.LOG_JUNGLE,v.GLASS,v.OBSIDIAN,v.BEDROCK,v.GRASS,v.DIRT,v.PODZOL,v.MYCELIUM,v.SNOWY_GRASS,v.SAND,v.RED_SAND,v.GRAVEL,v.CLAY,v.SNOW,v.ICE,v.PACKED_ICE,v.WATER,v.LAVA,v.COAL_ORE,v.IRON_ORE,v.GOLD_ORE,v.DIAMOND_ORE,v.REDSTONE_ORE,v.LAPIS_ORE,v.EMERALD_ORE,v.COAL_BLOCK,v.IRON_BLOCK,v.GOLD_BLOCK,v.DIAMOND_BLOCK,v.EMERALD_BLOCK,v.LAPIS_BLOCK,v.GLOWSTONE,v.SEA_LANTERN,v.PRISMARINE,v.CRAFTING_TABLE,v.FURNACE,v.BOOKSHELF,v.TORCH,v.WOOL_WHITE,v.WOOL_RED,v.WOOL_ORANGE,v.WOOL_YELLOW,v.WOOL_GREEN,v.WOOL_BLUE,v.WOOL_PURPLE,v.WOOL_BLACK,v.PUMPKIN,v.MELON,v.HAY,v.CACTUS,v.TNT,v.LEAVES_OAK,v.LEAVES_BIRCH,v.LEAVES_SPRUCE,v.LEAVES_JUNGLE,v.TALL_GRASS,v.FERN,v.FLOWER_RED,v.FLOWER_YELLOW,v.FLOWER_BLUE,v.FLOWER_PINK,v.MUSHROOM_RED,v.MUSHROOM_BROWN,v.DEAD_BUSH,v.SUGAR_CANE],t=new Set(n);for(let e=1;e<Ie;e++){let i=ki(e);!i||i.key==="air"||t.has(e)||i.render!=="air"&&(n.push(e),t.add(e))}for(let e of Object.keys(Ze).map(Number).sort((i,s)=>i-s))n.push(e);return n})(),Qs=45,Ta=[[q.PICKAXE_WOOD,1],[q.AXE_WOOD,1],[v.TORCH,8],[q.BREAD,3]],mf=[[v.TORCH,32],[q.BREAD,8],[q.PORKCHOP,4],[v.PLANKS_OAK,32],[q.PICKAXE_IRON,1],[q.SWORD_IRON,1],[q.IRON_INGOT,8],[v.GLASS,16]];var _f=27,Uy=8;var Ra=(n,t,e)=>`${n},${t},${e}`,By=(()=>{let n=new Map;for(let t of Ph){if(!t.furnace)continue;let e=t.need[0];e&&!n.has(e.id)&&n.set(e.id,{out:t.out,count:t.count})}return n})();var Fy=n=>By.get(n)||null;function Oh(n){return wa.includes(n)?n===v.COAL_BLOCK?80:n===q.COAL||n===q.CHARCOAL?16:n===q.STICK?5:15:0}var gf=()=>new Array(_f).fill(null),Hy=()=>({input:null,fuel:null,output:null,progress:0,burn:0,burnMax:0}),Ca=class{constructor(){this.chests=new Map,this.furnaces=new Map,this.onFurnaceTick=null}clear(){this.chests.clear(),this.furnaces.clear()}chestAt(t,e,i,s=!0){let r=Ra(t,e,i),o=this.chests.get(r);return!o&&s&&(o=gf(),this.chests.set(r,o)),o||null}addToChest(t,e,i){let s=ri(e),r=i;for(let o=0;o<t.length&&r>0;o++){let a=t[o];if(a&&a.id===e&&a.count<s){let l=Math.min(s-a.count,r);a.count+=l,r-=l}}for(let o=0;o<t.length&&r>0;o++){if(t[o])continue;let a=Math.min(s,r);t[o]={id:e,count:a},r-=a}return r}furnaceAt(t,e,i,s=!0){let r=Ra(t,e,i),o=this.furnaces.get(r);return!o&&s&&(o=Hy(),this.furnaces.set(r,o)),o||null}takeAll(t,e,i,s){let r=Ra(t,e,i),o=[];if(s===v.CHEST){let a=this.chests.get(r);if(a)for(let l of a)l&&o.push(l);this.chests.delete(r)}else if(s===v.FURNACE){let a=this.furnaces.get(r);if(a)for(let l of[a.input,a.fuel,a.output])l&&o.push(l);this.furnaces.delete(r)}return o}update(t){for(let[e,i]of this.furnaces){let s=i.input?Fy(i.input.id):null,r=!s||!i.output||i.output.id===s.out&&i.output.count+s.count<=ri(s.out),o=!!s&&r;if(i.burn<=0&&o&&i.fuel){let a=Oh(i.fuel.id);a>0&&(i.burnMax=a,i.burn=a,i.fuel.count-=1,i.fuel.count<=0&&(i.fuel=null),this.onFurnaceTick&&this.onFurnaceTick(e,i))}i.burn>0?(i.burn=Math.max(0,i.burn-t),o?(i.progress+=t,i.progress>=Uy&&(i.progress=0,i.output&&i.output.id===s.out?i.output.count+=s.count:i.output={id:s.out,count:s.count},i.input.count-=1,i.input.count<=0&&(i.input=null))):i.progress=Math.max(0,i.progress-t*2)):i.progress=Math.max(0,i.progress-t*2)}}isLit(t,e,i){let s=this.furnaces.get(Ra(t,e,i));return!!s&&s.burn>0}serialize(){let t=s=>s?[s.id,s.count]:0,e=[];for(let[s,r]of this.chests)r.some(Boolean)&&e.push([s,r.map(t)]);let i=[];for(let[s,r]of this.furnaces)!r.input&&!r.fuel&&!r.output&&r.burn<=0||i.push([s,[t(r.input),t(r.fuel),t(r.output),+r.progress.toFixed(2),+r.burn.toFixed(2),r.burnMax]]);return{chests:e,furnaces:i}}deserialize(t){if(this.clear(),!t)return;let e=i=>Array.isArray(i)&&i[0]&&ki(i[0])?{id:i[0],count:Math.max(1,i[1]|0)}:null;for(let[i,s]of t.chests||[]){let r=gf();for(let o=0;o<Math.min(s.length,_f);o++)r[o]=e(s[o]);this.chests.set(i,r)}for(let[i,s]of t.furnaces||[])this.furnaces.set(i,{input:e(s[0]),fuel:e(s[1]),output:e(s[2]),progress:+s[3]||0,burn:+s[4]||0,burnMax:+s[5]||0})}};var zy=14255423;var Gy=9067050,vf=260,Vy=26,kh=2.6,Qn=null;function Wy(){if(!Qn){let n=oa(Er.boss_wood);n&&(Qn=new pi(n),Qn.magFilter=oe,Qn.minFilter=oe,Qn.colorSpace=_e)}return new Ge(Qn?{map:Qn}:{color:zy})}var Ue={NONE:"none",SMASH:"smash",CHARGE:"charge",POUND:"pound",THROW:"throw"},La=class{constructor(t,e,i,s){this.scene=t,this.group=new Me,this.group.position.set(e,i,s),this.pos=this.group.position,this.home=new L(e,i,s);let r=1.5,o=3.35,a=3.5,l=Wy(),c=new Ge({map:l.map,color:11561516}),h=new Ge({map:l.map,color:15773808}),u=(P,K,y,E)=>new Kt(new Ce(P,K,y),E),d=(P,K,y,E)=>{let W=new Ce(P,K,y);return W.translate(0,-K/2,0),new Kt(W,E)},f=u(1.7,a-r,1.1,l);f.position.y=(r+a)/2,this.group.add(f);let g=u(1.76,.42,1.16,c);g.position.y=r+.3,this.group.add(g);let _=u(1.5,.3,1.18,c);_.position.y=a-.45,this.group.add(_),this.head=d(1.3,1.15,1.15,h),this.head.position.y=a,this.head.geometry.translate(0,1.15,0),this.group.add(this.head);let p=u(1.34,.2,1.18,c);p.position.y=a+.92,this.group.add(p);for(let P of[-1,1]){let K=u(.32,.36,.1,new Ge({color:16183264}));K.position.set(P*.3,a+.62,.6),this.group.add(K);let y=u(.16,.22,.06,new Ge({color:1708552}));y.position.set(P*.3,a+.57,.65),this.group.add(y)}let m=u(.68,.16,.1,new Ge({color:5321487}));m.position.set(0,a+.2,.6),this.group.add(m);let M=P=>{let K=u(.66,.6,.66,c);K.position.set(P*1.05,o,0),this.group.add(K);let y=d(.52,1.15,.52,l);y.position.set(P*1.05,o+.12,0),this.group.add(y);let E=d(.46,1.05,.46,l);E.position.y=-1.13,y.add(E);let W=u(.6,.55,.6,c);return W.position.y=-1.2,E.add(W),{upper:y,fore:E,fist:W}},b=M(-1),A=M(1);this.armR=b.upper,this.armRFore=b.fore,this.armL=A.upper,this.armLFore=A.fore;let O=P=>{let K=d(.62,r,.62,c);K.position.set(P*.45,r+.05,0),this.group.add(K);let y=u(.72,.3,1,l);return y.position.set(0,-r+.15,.18),K.add(y),K};this.legR=O(-1),this.legL=O(1),this.bat=new Me;let C=u(.24,1,.24,new Ge({color:Gy}));C.position.y=-.5,this.bat.add(C);let R=u(.5,1.3,.5,new Ge({color:7292192}));R.position.y=-1.6,this.bat.add(R);for(let P=0;P<3;P++){let K=u(.56,.1,.56,new Ge({color:10133672}));K.position.y=-1.15-P*.42,this.bat.add(K)}this.bat.position.set(0,-.2,.12),b.fist.add(this.bat),t.add(this.group),this.hp=vf,this.maxHp=vf,this.dead=!1,this.vel=new L,this.onGround=!1,this.yaw=0,this.walk=0,this.age=0,this.enraged=!1,this.attack=Ue.NONE,this.attackT=0,this.cooldown=2.5,this.hitDone=!1,this.hurtFlash=0,this.half=.85,this.height=4.6,this.onShockwave=null,this.onThrow=null,this.onSound=null}dispose(){this.scene.remove(this.group),this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}collides(t,e,i,s){let r=this.half;for(let o=Math.floor(i);o<=Math.floor(i+this.height-.05);o++)for(let a=Math.floor(s-r);a<=Math.floor(s+r);a++)for(let l=Math.floor(e-r);l<=Math.floor(e+r);l++)if(t.isSolid(l,o,a))return!0;return!1}hurt(t){this.dead||(this.hp-=Math.max(1,t*.85),this.hurtFlash=.22,this.onSound&&this.onSound("hurt"),!this.enraged&&this.hp<=this.maxHp*.5&&(this.enraged=!0,this.cooldown=Math.min(this.cooldown,.8),this.onSound&&this.onSound("roar")),this.hp<=0&&(this.hp=0,this.dead=!0,this.onSound&&this.onSound("death")))}chooseAttack(t){let e=Math.random();return t<4.5?e<.55?Ue.SMASH:Ue.POUND:t<14?e<.55?Ue.CHARGE:Ue.THROW:e<.7?Ue.THROW:Ue.CHARGE}startAttack(t){this.attack=t,this.attackT=0,this.hitDone=!1,this.onSound&&this.onSound(t===Ue.THROW?"attack":"roar")}update(t,e,i){if(this.dead)return;this.age+=t,this.hurtFlash=Math.max(0,this.hurtFlash-t);let s=this.enraged?1.55:1,r=new L(i.pos.x-this.pos.x,0,i.pos.z-this.pos.z),o=r.length();o>.01&&r.normalize();let l=Math.atan2(r.x,r.z)-this.yaw;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;this.yaw+=l*Math.min(1,t*(this.attack===Ue.CHARGE?2:5)),this.group.rotation.y=this.yaw;let c=0;this.attack===Ue.NONE?(this.cooldown-=t,c=o>3.2?2.6*s:0,this.cooldown<=0&&o<30&&this.startAttack(this.chooseAttack(o))):(this.attackT+=t,c=this.runAttack(t,i,r,o,s)),this.vel.y-=26*t;let h=this.pos.y+this.vel.y*t;if(this.collides(e,this.pos.x,h,this.pos.z)?(this.vel.y<0&&(this.pos.y=Math.floor(h)+1,!this.onGround&&this.attack===Ue.POUND&&!this.hitDone&&this.landPound(i),this.onGround=!0),this.vel.y=0):(this.pos.y=h,this.onGround=!1),c>0){let d=c*t,f=this.pos.x+r.x*d,g=this.pos.z+r.z*d;this.collides(e,f,this.pos.y,this.pos.z)?this.onGround&&(this.vel.y=8):this.pos.x=f,this.collides(e,this.pos.x,this.pos.y,g)?this.onGround&&(this.vel.y=8):this.pos.z=g,this.walk+=t*c*1.5}if(Math.hypot(this.pos.x-this.home.x,this.pos.z-this.home.z)>Vy+4){let d=new L(this.home.x-this.pos.x,0,this.home.z-this.pos.z).normalize();this.pos.x+=d.x*t*6,this.pos.z+=d.z*t*6}this.animate(t,c)}runAttack(t,e,i,s,r){let o=this.attackT;switch(this.attack){case Ue.SMASH:return o>.55&&!this.hitDone&&(this.hitDone=!0,this.onShockwave&&this.onShockwave(this.pos.x+i.x*2.4,this.pos.y+.3,this.pos.z+i.z*2.4,5,this.enraged?11:8,9),this.onSound&&this.onSound("attack")),o>1.15&&this.endAttack(this.enraged?1:1.9),0;case Ue.CHARGE:return o<.5?0:o<1.9?(s<2.4&&!this.hitDone&&(this.hitDone=!0,e.damage(this.enraged?9:7,"mob"),this.onShockwave&&this.onShockwave(this.pos.x,this.pos.y,this.pos.z,3,0,12),this.onSound&&this.onSound("attack")),13*r):(this.endAttack(this.enraged?1.2:2.2),0);case Ue.POUND:return o<.4?0:o<.45&&this.onGround?(this.vel.y=13,0):(o>2.4&&this.endAttack(this.enraged?1.1:2),this.onGround?0:4*r);case Ue.THROW:{if(o>.5&&!this.hitDone){this.hitDone=!0;let a=this.enraged?3:1,c=(e.pos.y+1-(this.pos.y+kh))/Math.max(3,s)+.16;for(let h=0;h<a;h++){let u=(h-(a-1)/2)*.22,d=new L(i.x*Math.cos(u)-i.z*Math.sin(u),c,i.x*Math.sin(u)+i.z*Math.cos(u)).normalize();this.onThrow&&this.onThrow(d)}this.onSound&&this.onSound("attack")}return o>1.1&&this.endAttack(this.enraged?.9:1.7),0}default:return this.endAttack(1.5),0}}endAttack(t){this.attack=Ue.NONE,this.attackT=0,this.hitDone=!1,this.cooldown=t}landPound(t){this.hitDone=!0,this.onShockwave&&this.onShockwave(this.pos.x,this.pos.y,this.pos.z,8.5,this.enraged?12:9,16),this.onSound&&this.onSound("roar")}animate(t,e){let i=this.attackT,s=Math.sin(this.walk);this.legR.rotation.x=e>0?s*.6:Math.sin(this.age*1.2)*.05,this.legL.rotation.x=e>0?-s*.6:-Math.sin(this.age*1.2)*.05,this.armL.rotation.x=e>0?-s*.45:Math.sin(this.age*1.1)*.08,this.armL.rotation.z=.12,this.head.rotation.z=Math.sin(this.age*1.5)*.03;let r=e>0?s*.35:Math.sin(this.age*1.1+1)*.08,o=-.12,a=.25,l=.25;if(this.attack===Ue.SMASH){let h=Math.min(1,i/.55),u=Math.max(0,Math.min(1,(i-.55)/.22));r=-2.5*h+u*3.4,o=-.3-h*.25,a=1.3*h-u*1.2}else if(this.attack===Ue.CHARGE)r=-1.5,o=-.5,a=.9,l=.9,i<.5&&(this.head.rotation.x=.3);else if(this.attack===Ue.POUND)r=i<.45?-2.2:this.onGround?1.2:-2.6,a=i<.45?1.1:.2,l=a,this.legR.rotation.x=this.onGround?0:-.5,this.legL.rotation.x=this.onGround?0:-.5;else if(this.attack===Ue.THROW){let h=Math.min(1,i/.5),u=Math.max(0,Math.min(1,(i-.5)/.3));r=-2.2*h+u*3,a=1.5*h-u*1.4}else this.head.rotation.x=0;this.armR.rotation.x=r,this.armR.rotation.z=o,this.armRFore&&(this.armRFore.rotation.x=a),this.armLFore&&(this.armLFore.rotation.x=l+(e>0?Math.abs(s)*.2:0));let c=this.hurtFlash>0;this.group.traverse(h=>{!h.material||!h.material.emissive||(c?h.material.emissive.setRGB(.55,.05,.05):this.enraged?h.material.emissive.setRGB(.18,.03,0):h.material.emissive.setRGB(0,0,0))})}},Ia=class{constructor(t,e,i,s,r,o=17){let a=new Ce(.4,.4,1.3);this.obj=new Kt(a,new Ge({color:11035435})),this.obj.position.set(e,i,s),t.add(this.obj),this.scene=t,this.pos=this.obj.position,this.vel=r.clone().multiplyScalar(o),this.life=4,this.dead=!1,this.spin=0}dispose(){this.scene.remove(this.obj),this.obj.geometry.dispose(),this.obj.material.dispose()}update(t,e,i){if(this.life-=t,this.life<=0){this.dead=!0;return}if(this.vel.y-=13*t,this.pos.addScaledVector(this.vel,t),this.spin+=t*9,this.obj.rotation.set(this.spin,this.spin*.6,0),e.isSolid(this.pos.x,this.pos.y,this.pos.z)){this.dead=!0;return}let s=this.pos.x-i.pos.x,r=this.pos.y-(i.pos.y+.9),o=this.pos.z-i.pos.z;s*s+o*o<1.6&&r>-1.4&&r<1.8&&(i.damage(6,"mob"),this.dead=!0)}},yf=[[q.DIAMOND,6],[v.GOLD_BLOCK,2],[q.GOLDEN_APPLE,3],[v.TNT,8]];var Pa="",Xy=10,Ky=2500,Dh=class{constructor(){this.ws=null,this.host=Pa,this.room="",this.name="\u0418\u0433\u0440\u043E\u043A",this.id=null,this.seed=null,this.connected=!1,this.closing=!1,this.players=new Map,this.latency=0,this._sendTimer=0,this._pingN=0,this.onReady=null,this.onBlock=null,this.onBlocks=null,this.onJoin=null,this.onLeave=null,this.onChat=null,this.onStatus=null}get active(){return this.connected&&!!this.ws}get playerCount(){return this.players.size+(this.connected?1:0)}connect(t,e,i){var o,a,l;if(!Us)return!1;if(this.disconnect(),this.closing=!1,this.host=(t||Pa).replace(/^https?:\/\//,"").replace(/\/$/,""),this.room=String(e||"lobby").toLowerCase().replace(/[^a-z0-9_-]/g,"").slice(0,24)||"lobby",this.name=(i||"\u0418\u0433\u0440\u043E\u043A").slice(0,18),!this.host)return(o=this.onStatus)==null||o.call(this,"error","no-host"),!1;let r=`${this.host.startsWith("localhost")||this.host.startsWith("127.")?"ws":"wss"}://${this.host}/parties/main/${this.room}?name=${encodeURIComponent(this.name)}`;(a=this.onStatus)==null||a.call(this,"connecting");try{this.ws=new WebSocket(r)}catch(c){return(l=this.onStatus)==null||l.call(this,"error",String(c)),!1}return this.ws.onopen=()=>{var c;this.connected=!0,(c=this.onStatus)==null||c.call(this,"connected"),this.pingLoop()},this.ws.onmessage=c=>this.handle(c.data),this.ws.onclose=()=>{var c,h;this.connected=!1,this.players.clear(),this.closing?(h=this.onStatus)==null||h.call(this,"offline"):((c=this.onStatus)==null||c.call(this,"reconnecting"),setTimeout(()=>{this.closing||this.connect(this.host,this.room,this.name)},Ky))},this.ws.onerror=()=>{var c;return(c=this.onStatus)==null?void 0:c.call(this,"error","socket")},!0}disconnect(){if(this.closing=!0,clearTimeout(this._pingTimer),this.ws){try{this.ws.close()}catch{}this.ws=null}this.connected=!1,this.players.clear()}send(t){!this.ws||this.ws.readyState!==1||this.ws.send(JSON.stringify(t))}handle(t){var i,s,r,o,a,l,c;let e;try{e=JSON.parse(t)}catch{return}switch(e.t){case"welcome":this.id=e.you,this.seed=e.seed,this.players.clear();for(let h of e.players||[])this.addPlayer(h);(i=this.onReady)==null||i.call(this,e.seed,e.edits||[]);break;case"joined":this.addPlayer(e.p),(s=this.onJoin)==null||s.call(this,e.p);break;case"left":this.players.delete(e.id),(r=this.onLeave)==null||r.call(this,e.id);break;case"moves":for(let h of e.a){let u=this.players.get(h.id);u&&(u.px=u.x,u.py=u.y,u.pz=u.z,u.tx=h.x,u.ty=h.y,u.tz=h.z,u.tyaw=h.yaw,u.tpitch=h.pitch,u.held=h.held,u.sneak=h.sneak,u.lerp=0)}break;case"block":(o=this.onBlock)==null||o.call(this,e.x,e.y,e.z,e.id);break;case"blocks":(a=this.onBlocks)==null||a.call(this,e.list);break;case"chat":(l=this.onChat)==null||l.call(this,e.from,e.text);break;case"full":this.closing=!0,(c=this.onStatus)==null||c.call(this,"full");break;case"pong":this.latency=Math.round(performance.now()-this._pingSent);break}}addPlayer(t){this.players.set(t.id,{...t,px:t.x,py:t.y,pz:t.z,tx:t.x,ty:t.y,tz:t.z,tyaw:t.yaw,tpitch:t.pitch,lerp:1})}pingLoop(){clearTimeout(this._pingTimer);let t=()=>{this.active&&(this._pingSent=performance.now(),this.send({t:"ping",n:++this._pingN}),this._pingTimer=setTimeout(t,4e3))};t()}update(t,e,i){this.active&&(this._sendTimer-=t,!(this._sendTimer>0)&&(this._sendTimer=1/Xy,this.send({t:"move",x:+e.pos.x.toFixed(2),y:+e.pos.y.toFixed(2),z:+e.pos.z.toFixed(2),yaw:+e.yaw.toFixed(3),pitch:+e.pitch.toFixed(3),held:i|0,sneak:e.sneaking?1:0})))}sendBlock(t,e,i,s){this.send({t:"block",x:t,y:e,z:i,id:s})}sendBlocks(t){t.length&&this.send({t:"blocks",list:t})}sendChat(t){this.send({t:"chat",text:t})}},xf=new Dh;var bf=.12;function Yy(n){let e=document.createElement("canvas"),i=e.getContext("2d");i.font="bold 30px Rubik, sans-serif";let s=Math.ceil(i.measureText(n).width)+8*2;e.width=Math.max(32,s),e.height=44;let r=e.getContext("2d");r.font="bold 30px Rubik, sans-serif",r.textBaseline="middle",r.fillStyle="rgba(8,10,16,0.62)",r.fillRect(0,0,e.width,e.height),r.fillStyle="#ffffff",r.fillText(n,8,e.height/2+1);let o=new pi(e);o.colorSpace=_e;let a=new Do(new mr({map:o,transparent:!0,depthTest:!1,depthWrite:!1}));return a.scale.set(e.width/44*.5,.5,1),a.renderOrder=20,a}var Oa=class{constructor(t,e){this.scene=t,this.atlasTex=e,this.entries=new Map}clear(){for(let t of[...this.entries.keys()])this.remove(t)}add(t,e){if(this.entries.has(t))return;let i=new Zs(this.scene,this.atlasTex);i.setVisible(!0);let s=Yy(e||"?");this.scene.add(s),this.entries.set(t,{model:i,tag:s})}remove(t){var i;let e=this.entries.get(t);e&&(e.model.setVisible(!1),this.scene.remove(e.model.group),this.scene.remove(e.tag),(i=e.tag.material.map)==null||i.dispose(),e.tag.material.dispose(),this.entries.delete(t))}update(t,e){for(let i of[...this.entries.keys()])e.has(i)||this.remove(i);for(let[i,s]of e){this.entries.has(i)||this.add(i,s.name);let r=this.entries.get(i);s.lerp=Math.min(1,(s.lerp??1)+t/bf);let o=s.lerp;s.x=(s.px??s.tx)+((s.tx??0)-(s.px??s.tx))*o,s.y=(s.py??s.ty)+((s.ty??0)-(s.py??s.ty))*o,s.z=(s.pz??s.tz)+((s.tz??0)-(s.pz??s.tz))*o;let a=Math.hypot(s.tx-s.px||0,s.tz-s.pz||0)/bf;r.model.setPosition(s.x,s.y,s.z),r.model.setHeld(s.held||0),r.model.update(t,{speed:a,yaw:s.tyaw??s.yaw??0,pitch:s.tpitch??s.pitch??0,onGround:!0,inWater:!1,flying:!1,sneaking:!!s.sneak}),r.tag.position.set(s.x,s.y+2.15,s.z)}}};var Be=ve.width/2,ka=class{constructor(){this.pos=new L(0,80,0),this.vel=new L,this.yaw=0,this.pitch=0,this.onGround=!1,this.inWater=!1,this.headInWater=!1,this.inLava=!1,this.sneaking=!1,this.sprinting=!1,this.flying=!1,this.mode="survival",this.health=20,this.maxHealth=20,this.food=20,this.maxFood=20,this.air=10,this.maxAir=10,this.foodTimer=0,this.regenTimer=0,this.hurtCooldown=0,this.fallStart=null,this.dead=!1,this.deathCause="fall",this.distanceWalked=0,this.bob=0,this.lastDamageAt=0,this._tmp=new L}get eyeY(){return this.pos.y+(this.sneaking&&this.onGround?ve.sneakEye:ve.eye)}reset(t,e,i){this.pos.set(t,e,i),this.vel.set(0,0,0),this.health=this.maxHealth,this.food=this.maxFood,this.air=this.maxAir,this.dead=!1,this.fallStart=null,this.flying=!1,this.onGround=!1}aabbIntersects(t,e,i,s,r,o,a){let l=Math.floor(e),c=Math.floor(r-1e-6),h=Math.floor(i),u=Math.floor(o-1e-6),d=Math.floor(s),f=Math.floor(a-1e-6);for(let g=h;g<=u;g++){if(g<0)return!0;if(!(g>=128)){for(let _=d;_<=f;_++)for(let p=l;p<=c;p++)if(t.isSolid(p,g,_))return!0}}return!1}moveAxis(t,e,i){if(i===0)return!1;let s=this.pos,r=Math.sign(i)*Math.min(Math.abs(i),.2),o=i,a=!1;for(;Math.abs(o)>1e-6;){let l=Math.abs(o)<Math.abs(r)?o:r,c=s[e];s[e]+=l;let h=s.x-Be,u=s.x+Be,d=s.y,f=s.y+ve.height,g=s.z-Be,_=s.z+Be;if(this.aabbIntersects(t,h,d,g,u,f,_)){s[e]=c,a=!0;break}o-=l}return a}tryStepUp(t,e,i){let s=this.pos,r=s.y;for(let o of[.55,1.02]){if(s.y=r+o,this.aabbIntersects(t,s.x-Be,s.y,s.z-Be,s.x+Be,s.y+ve.height,s.z+Be))continue;let a=this.moveAxis(t,"x",e),l=this.moveAxis(t,"z",i);if(!a||!l)return!0}return s.y=r,!1}sampleEnvironment(t){let e=this.pos,i=t.getBlock(e.x,e.y+.1,e.z),s=t.getBlock(e.x,e.y+ve.eye,e.z),r=t.getBlock(e.x,e.y+.9,e.z);this.inWater=Qo(i)||Qo(r),this.headInWater=Qo(s),this.inLava=hh(i)||hh(r),this.standingOn=t.getBlock(e.x,e.y-.15,e.z)}update(t,e,i,s){if(this.dead)return;this.sampleEnvironment(e);let r=this.mode==="creative";r||(this.flying=!1);let o=Math.sin(this.yaw),a=Math.cos(this.yaw),l=0,c=0;i.forward&&(l-=o,c-=a),i.back&&(l+=o,c+=a),i.left&&(l-=a,c+=o),i.right&&(l+=a,c-=o);let h=Math.hypot(l,c);h>0&&(l/=h,c/=h);let u=i.moveMag!==void 0?Math.min(1,i.moveMag):1;this.sneaking=!!i.sneak&&this.onGround&&!this.flying,this.sprinting=!!i.sprint&&h>0&&!this.sneaking&&this.food>6;let d;this.flying?d=i.sprint?ve.flyFast:ve.fly:this.inWater?d=ve.swim:this.sneaking?d=ve.sneak:this.sprinting?d=ve.sprint:d=ve.walk,d*=u,this.food<=0&&(d*=.6);let f=l*d,g=c*d,_=this.standingOn===v.ICE||this.standingOn===v.PACKED_ICE,p;this.flying?p=12:this.inWater||this.inLava?p=6:this.onGround?p=_?2.6:16:p=5;let m=Math.min(1,p*t);if(this.vel.x+=(f-this.vel.x)*m,this.vel.z+=(g-this.vel.z)*m,this.flying){let K=0;i.jump&&(K+=1),i.sneak&&(K-=1),this.vel.y+=(K*d-this.vel.y)*Math.min(1,12*t)}else if(this.inWater||this.inLava){let K=this.inLava?8:12;this.vel.y-=ve.gravity*.32*t,i.jump&&(this.vel.y+=K*t*3.2),this.vel.y=Math.max(this.vel.y,-3.2),this.vel.y=Math.min(this.vel.y,4.2),this.fallStart=null}else this.vel.y-=ve.gravity*t,this.vel.y<-ve.maxFall&&(this.vel.y=-ve.maxFall),i.jump&&this.onGround&&(this.vel.y=ve.jumpSpeed,this.onGround=!1,this.sprinting&&!r&&this.addExhaustion(.2));let M=this.pos.clone(),b=this.vel.y*t;this.moveAxis(e,"y",b)?(this.vel.y<0&&(this.onGround||this.landed(),this.onGround=!0),this.vel.y=0):b<0&&(this.onGround=!1),!this.onGround&&!this.inWater&&!this.flying&&this.vel.y<0&&(this.fallStart===null?this.fallStart=this.pos.y:this.fallStart=Math.max(this.fallStart,this.pos.y));let A=this.vel.x*t,O=this.vel.z*t;if(this.sneaking&&this.onGround){let K=this.pos.x+A;this.groundUnder(e,K,this.pos.z)||(this.vel.x=0);let y=this.pos.z+O;this.groundUnder(e,this.pos.x,y)||(this.vel.z=0)}let C=this.moveAxis(e,"x",this.vel.x*t),R=this.moveAxis(e,"z",this.vel.z*t);C&&(this.vel.x=0),R&&(this.vel.z=0),(C||R)&&this.onGround&&!this.flying&&s.autoJumpEffective&&h>0&&this.tryStepUp(e,this.vel.x*t,this.vel.z*t);let P=Math.hypot(this.pos.x-M.x,this.pos.z-M.z);if(this.distanceWalked+=P,this.onGround&&P>5e-4&&(this.bob+=P*1.5),this.pos.y<-8){this.kill("void");return}this.updateVitals(t,e,P,r)}groundUnder(t,e,i){for(let s=0;s<=1;s++)if(t.isSolid(e-Be,this.pos.y-.1-s*.4,i-Be)||t.isSolid(e+Be,this.pos.y-.1-s*.4,i-Be)||t.isSolid(e-Be,this.pos.y-.1-s*.4,i+Be)||t.isSolid(e+Be,this.pos.y-.1-s*.4,i+Be))return!0;return!1}landed(){if(this.fallStart===null||this.mode==="creative"){this.fallStart=null;return}let t=this.fallStart-this.pos.y;if(this.fallStart=null,t>3.2){let e=Math.floor(t-3);e>0&&this.damage(e,"fall")}}updateVitals(t,e,i,s){if(s){this.health=this.maxHealth,this.food=this.maxFood,this.air=this.maxAir;return}this.hurtCooldown=Math.max(0,this.hurtCooldown-t),this.headInWater?(this.air-=t*1,this.air<=0&&(this.air=0,this.hurtCooldown<=0&&this.damage(2,"drown"))):this.air=Math.min(this.maxAir,this.air+t*4),this.inLava&&this.hurtCooldown<=0&&this.damage(4,"lava");let r=this.pos;for(let[o,a]of[[Be,0],[-Be,0],[0,Be],[0,-Be]])if(e.getBlock(r.x+o,r.y+.9,r.z+a)===v.CACTUS&&this.hurtCooldown<=0){this.damage(1,"cactus");break}this.addExhaustion(i*(this.sprinting?.06:.02)*1),this.foodTimer>=4&&(this.foodTimer=0,this.food>0&&(this.food=Math.max(0,this.food-1))),this.food<=0?(this.regenTimer+=t,this.regenTimer>3&&(this.regenTimer=0,this.damage(1,"starve"))):this.food>=16&&this.health<this.maxHealth?(this.regenTimer+=t,this.regenTimer>3.5&&(this.regenTimer=0,this.health=Math.min(this.maxHealth,this.health+1),this.addExhaustion(.6))):this.regenTimer=0}addExhaustion(t){this.foodTimer+=t}setArmorPoints(t){this.armorPoints=t}damage(t,e="mob"){this.mode==="creative"||this.dead||(e!=="starve"&&e!=="drown"&&e!=="void"&&(t=Od(t,this.armorPoints||0)),t=Math.max(t>0?.5:0,t),this.health-=t,this.hurtCooldown=.55,this.lastDamageAt=performance.now(),this.health<=0&&this.kill(e))}heal(t){this.health=Math.min(this.maxHealth,this.health+t)}feed(t){this.food=Math.min(this.maxFood,this.food+t)}kill(t){this.dead||(this.health=0,this.dead=!0,this.deathCause=t)}serialize(){return{x:this.pos.x,y:this.pos.y,z:this.pos.z,yaw:this.yaw,pitch:this.pitch,health:this.health,food:this.food,mode:this.mode}}deserialize(t){t&&(this.pos.set(t.x??0,t.y??80,t.z??0),this.yaw=t.yaw??0,this.pitch=t.pitch??0,this.health=Math.max(1,Math.min(this.maxHealth,t.health??20)),this.food=Math.max(0,Math.min(this.maxFood,t.food??20)),this.mode=t.mode==="creative"?"creative":"survival",this.dead=!1)}};var qy={KeyW:"forward",ArrowUp:"forward",KeyS:"back",ArrowDown:"back",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"jump",ShiftLeft:"sprint",ShiftRight:"sprint",KeyC:"sneak",ControlLeft:"sneak",ControlRight:"sneak"},Da=class{constructor(t){this.canvas=t,this.touch=yr(),this.coarse=Bs(),this._enabled=!1,this.locked=!1,this.sensitivity=1,this.invertY=!1,this.state={forward:!1,back:!1,left:!1,right:!1,jump:!1,sneak:!1,sprint:!1,moveMag:1,breaking:!1,placing:!1},this.lookDX=0,this.lookDY=0,this.placeQueued=!1,this.onPause=null,this.onInventory=null,this.onHotbar=null,this.onHotbarScroll=null,this.onToggleFly=null,this.onToggleView=null,this.onInteract=null,this.onDropItem=null,this.onPickBlock=null,this.onLockChange=null,this.onFirstInteract=null,this.lockUnavailable=!1,this.onLockUnavailable=null,this._drag={active:!1,button:0,moved:0,startedAt:0},this.wantLock=!1,this.lockFails=0,this._lockedAt=0,this._lastExit=0,this._joyId=null,this._joyStart={x:0,y:0},this._joyVec={x:0,y:0},this._lookId=null,this._lookLast={x:0,y:0},this._lastWTap=0,this._sprintToggle=!1,this.joystickEl=null,this.joyKnobEl=null,this.bind()}get enabled(){return this._enabled}set enabled(t){t=!!t,t!==this._enabled&&(this._enabled=t,t||(this.wantLock=!1),this.applyCursor())}bind(){let t=this.canvas;if(window.addEventListener("contextmenu",e=>e.preventDefault()),document.addEventListener("keydown",e=>this.onKey(e,!0)),document.addEventListener("keyup",e=>this.onKey(e,!1)),t.addEventListener("mousedown",e=>{if(this.enabled){if(!this.locked&&!this.lockUnavailable){this.lockNow();return}if(this.lockUnavailable){this._drag.active=!0,this._drag.button=e.button,this._drag.moved=0,this._drag.startedAt=performance.now(),e.button===0&&(this.state.breaking=!0),e.button===2&&(this.state.placing=!0,this.placeQueued=!0);return}e.button===0&&(this.state.breaking=!0),e.button===1&&this.onPickBlock&&(e.preventDefault(),this.onPickBlock()),e.button===2&&(this.state.placing=!0,this.placeQueued=!0)}}),window.addEventListener("mouseup",e=>{if(this.lockUnavailable&&this._drag.active){this._drag.active=!1,e.button===0&&(this.state.breaking=!1),e.button===2&&(this.state.placing=!1);return}e.button===0&&(this.state.breaking=!1),e.button===2&&(this.state.placing=!1)}),document.addEventListener("mousemove",e=>{if(this.locked){if(performance.now()-this._lockedAt<90)return;this.lookDX+=this.tameDelta(e.movementX),this.lookDY+=this.tameDelta(e.movementY);return}if(this.lockUnavailable&&this.enabled){let i=this.tameDelta(e.movementX),s=this.tameDelta(e.movementY);this._drag.active&&(this._drag.moved+=Math.abs(i)+Math.abs(s)),this.lookDX+=i*1.15,this.lookDY+=s*1.15}}),t.addEventListener("wheel",e=>{this.enabled&&(e.preventDefault(),this.onHotbarScroll&&this.onHotbarScroll(e.deltaY>0?1:-1))},{passive:!1}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.locked?(this._lockedAt=performance.now(),this.lockFails=0):(this._lastExit=this._selfExit?0:performance.now(),this._selfExit=!1,this.state.breaking=!1,this.state.placing=!1,this.clearMovement()),this.applyCursor(),this.onLockChange&&this.onLockChange(this.locked)}),document.addEventListener("pointerlockerror",()=>{this.lockFails++}),this.touch){let e={passive:!1};t.addEventListener("touchstart",i=>this.onTouchStart(i),e),t.addEventListener("touchmove",i=>this.onTouchMove(i),e),t.addEventListener("touchend",i=>this.onTouchEnd(i),e),t.addEventListener("touchcancel",i=>this.onTouchEnd(i),e)}window.addEventListener("blur",()=>this.clearAll())}clearMovement(){let t=this.state;t.forward=t.back=t.left=t.right=!1,t.jump=t.sneak=t.sprint=!1,t.moveMag=1,this._joyVec.x=this._joyVec.y=0,this._joyId=null,this.updateJoystickVisual()}clearAll(){this.clearMovement(),this.state.breaking=!1,this.state.placing=!1,this._lookId=null}tameDelta(t){let e=t||0,i=window.innerWidth||1280,s=Math.max(600,i*1.2);if(Math.abs(e)>s)return 0;let r=Math.max(150,i*.3);return Math.max(-r,Math.min(r,e))}requestLock(){this.coarse||this.lockUnavailable||(this.wantLock=!0,this.applyCursor())}lockNow(){if(this.coarse||!this.enabled||this.lockUnavailable||this.locked)return;if(!document.pointerLockElement&&performance.now()-this._lastExit<1400){this.wantLock=!0;return}this.wantLock=!0;let t=()=>{this.lockFails++,!(this.lockFails<4)&&(this.lockUnavailable=!0,this.applyCursor(),this.onLockUnavailable&&this.onLockUnavailable())};try{let e=this.canvas.requestPointerLock();e&&typeof e.then=="function"&&e.then(()=>{this.lockFails=0},t)}catch{t()}}exitLock(){this.wantLock=!1,document.pointerLockElement&&(this._selfExit=!0,document.exitPointerLock()),this.applyCursor()}applyCursor(){let t=!this.coarse&&this.enabled&&(this.locked||this.lockUnavailable&&this.wantLock);document.body.classList.toggle("cursor-hidden",t)}onKey(t,e){if(t.repeat)return;let i=t.code;if(e&&this.onFirstInteract&&this.onFirstInteract(),e&&this.wantLock&&!this.locked&&this.enabled&&!this.lockUnavailable&&i!=="Escape"&&i!=="KeyE"&&this.lockNow(),i==="Escape"){e&&this.onPause&&this.onPause();return}if(i==="KeyE"){e&&this.onInventory&&this.onInventory(),t.preventDefault();return}if(i==="KeyF"){e&&this.onInteract&&this.onInteract();return}if(i==="KeyV"){e&&this.onToggleView&&this.onToggleView();return}if(i==="KeyQ"){e&&this.onDropItem&&this.onDropItem();return}if(i.startsWith("Digit")){let r=parseInt(i.slice(5),10);e&&r>=1&&r<=9&&this.onHotbar&&this.onHotbar(r-1);return}let s=qy[i];if(s&&this.enabled){if(t.preventDefault(),s==="forward"&&e){let r=performance.now();r-this._lastWTap<280&&(this._sprintToggle=!0),this._lastWTap=r}if(s==="forward"&&!e&&(this._sprintToggle=!1),s==="jump"&&e){let r=performance.now();r-(this._lastJumpTap||0)<300&&this.onToggleFly&&this.onToggleFly(),this._lastJumpTap=r}this.state[s]=e,s==="sprint"&&(this.state.sprint=e)}}setJoystickElements(t,e){this.joystickEl=t,this.joyKnobEl=e}onTouchStart(t){if(!this.enabled)return;t.preventDefault(),this.onFirstInteract&&this.onFirstInteract();let e=window.innerWidth;for(let i of t.changedTouches)i.clientX<e*.45&&this._joyId===null?(this._joyId=i.identifier,this._joyStart.x=i.clientX,this._joyStart.y=i.clientY,this._joyVec.x=0,this._joyVec.y=0,this.joystickEl&&(this.joystickEl.style.left=`${i.clientX}px`,this.joystickEl.style.top=`${i.clientY}px`,this.joystickEl.classList.add("active"))):this._lookId===null&&(this._lookId=i.identifier,this._lookLast.x=i.clientX,this._lookLast.y=i.clientY)}onTouchMove(t){if(this.enabled){t.preventDefault();for(let e of t.changedTouches)if(e.identifier===this._joyId){let i=e.clientX-this._joyStart.x,s=e.clientY-this._joyStart.y,r=58,o=Math.hypot(i,s),a=o>r?r/o:1;this._joyVec.x=i*a/r,this._joyVec.y=s*a/r,this.updateJoystickVisual()}else e.identifier===this._lookId&&(this.lookDX+=(e.clientX-this._lookLast.x)*1.7,this.lookDY+=(e.clientY-this._lookLast.y)*1.7,this._lookLast.x=e.clientX,this._lookLast.y=e.clientY)}}onTouchEnd(t){for(let e of t.changedTouches)e.identifier===this._joyId?(this._joyId=null,this._joyVec.x=0,this._joyVec.y=0,this.joystickEl&&this.joystickEl.classList.remove("active"),this.updateJoystickVisual()):e.identifier===this._lookId&&(this._lookId=null)}updateJoystickVisual(){this.joyKnobEl&&(this.joyKnobEl.style.transform=`translate(-50%,-50%) translate(${this._joyVec.x*40}px, ${this._joyVec.y*40}px)`)}setButton(t,e){if(t==="jump"){if(e){let i=performance.now();i-(this._lastJumpTap||0)<320&&this.onToggleFly&&this.onToggleFly(),this._lastJumpTap=i}this.state.jump=e}else t==="sneak"?this.state.sneak=e:t==="sprint"?this.state.sprint=e:t==="break"?this.state.breaking=e:t==="place"&&(this.state.placing=e,e&&(this.placeQueued=!0))}applyLook(t){let e=.0022*this.sensitivity,i=Math.PI,s=Math.max(-i,Math.min(i,this.lookDX*e)),r=Math.max(-i,Math.min(i,this.lookDY*e));t.yaw-=s,t.pitch-=r*(this.invertY?-1:1);let o=Math.PI/2-.001;t.pitch=Math.max(-o,Math.min(o,t.pitch)),this.lookDX=0,this.lookDY=0}syncTouchMovement(){let t=this.state,e=this._joyVec,i=Math.hypot(e.x,e.y);if(this._joyId!==null&&i>=.16){this._joyWasOn=!0,t.moveMag=Math.min(1,i/.9),t.forward=e.y<-.16,t.back=e.y>.16,t.left=e.x<-.16,t.right=e.x>.16,t.sprint=i>.92&&!t.sneak;return}this._joyWasOn&&(this._joyWasOn=!1,t.forward=t.back=t.left=t.right=!1,t.sprint=!1),t.moveMag=1,this._sprintToggle&&(t.sprint=!0)}};var Ae=(n,t,e,i)=>{let s=new Ce(n,t,e),r=new Ge({color:i});return new Kt(s,r)},$y={pig:{hostile:!1,hp:10,w:.62,h:.86,speed:1.1,score:8,drops:[[q.PORKCHOP_RAW,2]],build(){let n=new Me,t=Ae(.62,.55,1,15702687);t.position.y=.52,n.add(t);let e=Ae(.5,.5,.46,15968944);e.position.set(0,.62,.66),n.add(e);let i=Ae(.24,.18,.12,14710911);i.position.set(0,.55,.9),n.add(i);let s=[];for(let[r,o]of[[-.2,.32],[.2,.32],[-.2,-.32],[.2,-.32]]){let a=Ae(.18,.3,.18,14255242);a.position.set(r,.16,o),n.add(a),s.push(a)}return{group:n,legs:s,head:e}}},cow:{hostile:!1,hp:10,w:.7,h:1.1,speed:1,score:10,drops:[[q.BEEF_RAW,2],[q.LEATHER,1]],build(){let n=new Me,t=Ae(.7,.66,1.12,4864556);t.position.y=.68,n.add(t);let e=Ae(.72,.3,.5,15262940);e.position.set(0,.72,-.1),n.add(e);let i=Ae(.5,.5,.5,5521967);i.position.set(0,.86,.74),n.add(i);let s=Ae(.1,.1,.1,14340802);s.position.set(-.24,1.06,.74),n.add(s);let r=s.clone();r.position.x=.24,n.add(r);let o=[];for(let[a,l]of[[-.24,.36],[.24,.36],[-.24,-.36],[.24,-.36]]){let c=Ae(.2,.38,.2,4009764);c.position.set(a,.19,l),n.add(c),o.push(c)}return{group:n,legs:o,head:i}}},sheep:{hostile:!1,hp:8,w:.62,h:1,speed:1.1,score:8,drops:[[v.WOOL_WHITE,1],[q.PORKCHOP_RAW,1]],build(){let n=new Me,t=Ae(.72,.68,1.06,15789282);t.position.y=.66,n.add(t);let e=Ae(.42,.44,.42,14469554);e.position.set(0,.82,.68),n.add(e);let i=[];for(let[s,r]of[[-.22,.32],[.22,.32],[-.22,-.32],[.22,-.32]]){let o=Ae(.17,.34,.17,13616306);o.position.set(s,.17,r),n.add(o),i.push(o)}return{group:n,legs:i,head:e}}},chicken:{hostile:!1,hp:5,w:.4,h:.7,speed:1.3,score:6,drops:[[q.CHICKEN_RAW,1],[q.FEATHER,2]],build(){let n=new Me,t=Ae(.36,.4,.46,15921906);t.position.y=.4,n.add(t);let e=Ae(.26,.26,.24,16448250);e.position.set(0,.68,.22),n.add(e);let i=Ae(.1,.08,.14,15245356);i.position.set(0,.66,.4),n.add(i);let s=Ae(.08,.12,.18,13777980);s.position.set(0,.84,.2),n.add(s);let r=[];for(let o of[-.1,.1]){let a=Ae(.08,.24,.08,15245356);a.position.set(o,.12,0),n.add(a),r.push(a)}return{group:n,legs:r,head:e}}},zombie:{hostile:!0,hp:16,w:.6,h:1.85,speed:1.5,damage:3,score:26,drops:[[q.BONE,1]],build(){let n=new Me,t=Ae(.55,.72,.3,3107645);t.position.y=1.12,n.add(t);let e=Ae(.48,.48,.48,4164173);e.position.set(0,1.72,0),n.add(e);let i=Ae(.1,.1,.05,1320218);i.position.set(-.12,1.78,.25),n.add(i);let s=i.clone();s.position.x=.12,n.add(s);let r=Ae(.18,.66,.18,4164173);r.position.set(-.37,1.2,.22),n.add(r);let o=r.clone();o.position.x=.37,n.add(o);let a=[];for(let l of[-.15,.15]){let c=Ae(.2,.76,.2,3360092);c.position.set(l,.38,0),n.add(c),a.push(c)}return{group:n,legs:a,head:e,arms:[r,o]}}},slime:{hostile:!0,hp:12,w:.8,h:.8,speed:1.1,damage:2,score:18,drops:[[q.STRING,1]],build(){let n=new Me,t=Ae(.8,.8,.8,6734154);t.material.transparent=!0,t.material.opacity=.82,t.position.y=.4,n.add(t);let e=Ae(.34,.34,.34,4164143);return e.position.y=.4,n.add(e),{group:n,legs:[],head:t,squish:t}}}},Zy=["pig","cow","sheep","chicken"],Jy=["zombie","slime"],Nh=class{constructor(t,e,i,s){let r=$y[t];this.type=t,this.def=r;let o=r.build();this.obj=o.group,this.legs=o.legs||[],this.arms=o.arms||[],this.squish=o.squish||null,this.obj.position.set(e,i,s),this.pos=this.obj.position,this.vel=new L,this.hp=r.hp,this.yaw=Math.random()*Math.PI*2,this.wanderTimer=Math.random()*3,this.onGround=!1,this.attackCd=0,this.hurtFlash=0,this.age=0,this.walkPhase=0,this.dead=!1,this.dying=!1,this.deathT=0,this.jumpCd=0,this.idleCd=2+Math.random()*8,this.deathTilt=Math.random()<.5?-1:1}get alive(){return!this.dying&&!this.dead}get half(){return this.def.w/2}collides(t,e,i,s){let r=this.half,o=Math.floor(e-r),a=Math.floor(e+r),l=Math.floor(s-r),c=Math.floor(s+r),h=Math.floor(i),u=Math.floor(i+this.def.h-.02);for(let d=h;d<=u;d++)for(let f=l;f<=c;f++)for(let g=o;g<=a;g++)if(t.isSolid(g,d,f))return!0;return!1}update(t,e,i,s){this.age+=t,this.attackCd=Math.max(0,this.attackCd-t),this.hurtFlash=Math.max(0,this.hurtFlash-t),this.jumpCd=Math.max(0,this.jumpCd-t);let r=new L().subVectors(i.pos,this.pos),o=r.length();this.idleCd-=t,this.idleCd<=0&&(this.idleCd=6+Math.random()*12,o<26&&this.onSound&&this.onSound("idle",this.type,o));let a=this.yaw,l=!1;this.def.hostile&&o<18&&o>.1?(a=Math.atan2(r.x,r.z),l=o>1.1,o<1.6&&this.attackCd<=0&&i.mode!=="creative"&&(i.damage(this.def.damage||2,"mob"),this.attackCd=1.1,this.onSound&&this.onSound("attack",this.type,o))):(this.wanderTimer-=t,this.wanderTimer<=0&&(this.wanderTimer=2+Math.random()*5,this.wanderDir=Math.random()<.35?null:Math.random()*Math.PI*2),this.wanderDir!==null&&this.wanderDir!==void 0&&(a=this.wanderDir,l=!0),!this.def.hostile&&o<3.5&&o>.05&&(a=Math.atan2(-r.x,-r.z),l=!0));let c=a-this.yaw;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;this.yaw+=c*Math.min(1,t*6),this.obj.rotation.y=this.yaw;let h=this.def.speed*(this.def.hostile&&o<18?1.15:.65),u=l?Math.sin(this.yaw)*h:0,d=l?Math.cos(this.yaw)*h:0;this.vel.y-=26*t,this.vel.y<-50&&(this.vel.y=-50);let f=this.pos.y+this.vel.y*t;this.collides(e,this.pos.x,f,this.pos.z)?(this.vel.y<0&&(this.pos.y=Math.floor(f)+1,this.onGround=!0),this.vel.y=0):(this.pos.y=f,this.onGround=!1);let g=this.pos.x+u*t;this.collides(e,g,this.pos.y,this.pos.z)?this.onGround&&this.jumpCd<=0&&(this.vel.y=7.4,this.jumpCd=.6):this.pos.x=g;let _=this.pos.z+d*t;this.collides(e,this.pos.x,this.pos.y,_)?this.onGround&&this.jumpCd<=0&&(this.vel.y=7.4,this.jumpCd=.6):this.pos.z=_,l&&this.onGround&&(this.walkPhase+=t*h*6);for(let p=0;p<this.legs.length;p++){let m=Math.sin(this.walkPhase+(p%2===0?0:Math.PI))*(l?.5:0);this.legs[p].rotation.x=m}for(let p of this.arms)p.rotation.x=-1.35+Math.sin(this.walkPhase*.6)*.12;if(this.squish){let p=1+Math.sin(this.age*3.2)*.09;this.squish.scale.set(1/p,p,1/p)}this.def.hostile&&!s&&this.age>4&&this.pos.y>e.getHeight(this.pos.x,this.pos.z)-1&&(this.hp-=t*4),this.hp<=0&&this.startDying(),this.pos.y<-6&&(this.dead=!0)}startDying(){this.dying||this.dead||(this.dying=!0,this.deathT=0,this.hp=0,this.obj.traverse(t=>{t.material&&(t.material=t.material.clone(),t.material.transparent=!0)}))}updateDying(t,e){this.deathT+=t;let s=Math.min(1,this.deathT/.7);this.vel.y-=26*t;let r=this.pos.y+this.vel.y*t;this.collides(e,this.pos.x,r,this.pos.z)?this.vel.y=0:this.pos.y=r;let o=1-(1-s)*(1-s);this.obj.rotation.z=o*(Math.PI/2)*this.deathTilt,this.obj.rotation.y=this.yaw;let a=s<.55?1:1-(s-.55)/.45;return this.obj.traverse(l=>{var h,u;if(!l.material)return;l.material.opacity=a;let c=s<.3?.5*(1-s/.3):0;(u=(h=l.material.emissive)==null?void 0:h.setRGB)==null||u.call(h,c,0,0)}),s>=1}hurt(t){return this.alive?(this.hp-=t,this.hurtFlash=.25,this.vel.y=Math.max(this.vel.y,4),this.hp<=0?(this.startDying(),!0):!1):!1}},Na=class{constructor(t){this.scene=t,this.mobs=[],this.spawnTimer=2,this.maxPassive=14,this.maxHostile=10,this.enabled=!0,this.spawnBlocked=null,this.onSound=null,this.onMobDied=null}clear(){for(let t of this.mobs)this.scene.remove(t.obj);this.mobs.length=0}count(t){let e=0;for(let i of this.mobs)!!i.def.hostile===t&&e++;return e}spawn(t,e,i,s){let r=new Nh(t,e,i,s);return r.onSound=(o,a,l)=>{var c;return(c=this.onSound)==null?void 0:c.call(this,o,a,l)},this.mobs.push(r),this.scene.add(r.obj),r}trySpawnNear(t,e,i){let s=i&&Math.random()<.62;if(!(s&&this.count(!0)>=this.maxHostile)&&!(!s&&this.count(!1)>=this.maxPassive))for(let r=0;r<8;r++){let o=Math.random()*Math.PI*2,a=20+Math.random()*26,l=Math.floor(e.pos.x+Math.cos(o)*a)+.5,c=Math.floor(e.pos.z+Math.sin(o)*a)+.5;if(!t.isChunkLoaded(Math.floor(l)>>4,Math.floor(c)>>4)||this.spawnBlocked&&this.spawnBlocked(l,c))continue;let h=t.surfaceY(l,c);if(h<2||h>124)continue;let u=t.getBlock(l,h-1,c);if(u===v.WATER||u===v.LAVA||u===0||t.isSolid(l,h,c)||t.isSolid(l,h+1,c))continue;let d=s?Jy:Zy,f=d[Math.random()*d.length|0];if(!(!s&&u!==v.GRASS&&u!==v.SNOWY_GRASS&&u!==v.PODZOL&&u!==v.SAND)){this.spawn(f,l,h,c);return}}}update(t,e,i,s,r){var o;if(this.enabled){this.spawnTimer-=t,this.spawnTimer<=0&&(this.spawnTimer=1.6+Math.random()*2.4,this.trySpawnNear(e,i,s));for(let a=this.mobs.length-1;a>=0;a--){let l=this.mobs[a],c=l.pos.x-i.pos.x,h=l.pos.z-i.pos.z;if(c*c+h*h>100*100&&(l.dead=!0),l.dying&&!l.dead?l.updateDying(t,e)&&(l.dead=!0):l.dead||(l.update(t,e,i,s),l.dying&&((o=this.onMobDied)==null||o.call(this,l))),l.dead){this.scene.remove(l.obj),l.obj.traverse(d=>{d.geometry&&d.geometry.dispose(),d.material&&d.material.dispose()}),this.mobs.splice(a,1);continue}if(l.dying)continue;let u=l.hurtFlash>0;l.obj.traverse(d=>{var f,g,_,p;!d.material||!d.material.color||(u?(g=(f=d.material.emissive)==null?void 0:f.setRGB)==null||g.call(f,.5,0,0):(p=(_=d.material.emissive)==null?void 0:_.setRGB)==null||p.call(_,0,0,0))})}}}pick(t,e,i){let s=null,r=i,o=new cn(t,e),a=new zi,l=new L;for(let c of this.mobs){if(!c.alive)continue;let h=c.half+.12;a.min.set(c.pos.x-h,c.pos.y,c.pos.z-h),a.max.set(c.pos.x+h,c.pos.y+c.def.h,c.pos.z+h);let u=o.intersectBox(a,l);if(!u)continue;let d=t.distanceTo(u);d<r&&(r=d,s=c)}return s}};var vi={HEAL:"heal",CRATE:"crate",BOOST:"boost",CREATIVE:"creative",REVIVE:"revive"},Ba=[{id:vi.HEAL,nameKey:"vid.reward1.name",descKey:"vid.reward1.desc",ctaKey:"vid.cta.heal",icon:"\u2764\uFE0F",cooldown:45},{id:vi.CRATE,nameKey:"vid.reward2.name",descKey:"vid.reward2.desc",ctaKey:"vid.cta.crate",icon:"\u{1F4E6}",cooldown:120},{id:vi.BOOST,nameKey:"vid.reward3.name",descKey:"vid.reward3.desc",ctaKey:"vid.cta.boost",icon:"\u2B50",cooldown:90}],Ua=class{constructor(t={}){this.hooks=t,this.adBusy=!1,this.lastInterstitialAt=-1/0,this.lastTick=performance.now(),this.timerHandle=null,this.boostRemaining=0,this.boostMultiplier=2,this.rewardCooldowns=Object.create(null),this.totalInterstitials=0,this.totalRewarded=0}start(){this.timerHandle||(this.lastTick=performance.now(),this.timerHandle=setInterval(()=>this.tick(),250))}stop(){this.timerHandle&&clearInterval(this.timerHandle),this.timerHandle=null}tick(){let t=performance.now(),e=Math.min(2,(t-this.lastTick)/1e3);this.lastTick=t;for(let i of Object.keys(this.rewardCooldowns))this.rewardCooldowns[i]=Math.max(0,this.rewardCooldowns[i]-e)}canShowInterstitial(t){return this.adBusy||t<$o.interstitialFirstAfter?!1:(performance.now()-this.lastInterstitialAt)/1e3>=$o.interstitialMinGap}async showInterstitial(){var e,i,s,r;if(this.adBusy)return{shown:!1};this.adBusy=!0,this.lastInterstitialAt=performance.now(),(i=(e=this.hooks).onAdStart)==null||i.call(e,"interstitial");let t={shown:!1};try{t=await me.showInterstitial()}catch{}return t.shown&&this.totalInterstitials++,this.adBusy=!1,this.lastTick=performance.now(),(r=(s=this.hooks).onAdEnd)==null||r.call(s,"interstitial",t),t}isRewardReady(t){return!this.adBusy&&(this.rewardCooldowns[t]||0)<=0}setCooldown(t,e){this.rewardCooldowns[t]=e}rewardCooldown(t){return Math.ceil(this.rewardCooldowns[t]||0)}async requestReward(t){var o,a,l,c,h,u;if(!this.isRewardReady(t))return!1;let e=Ba.find(d=>d.id===t);this.adBusy=!0,(a=(o=this.hooks).onAdStart)==null||a.call(o,"rewarded");let i=!1,s={rewarded:!1};try{s=await me.showRewarded(()=>{i=!0})}catch{}let r=i&&!!s.rewarded;return this.adBusy=!1,this.lastTick=performance.now(),r&&(this.totalRewarded++,this.rewardCooldowns[t]=(e==null?void 0:e.cooldown)??60,t===vi.BOOST&&(this.boostRemaining=$o.rewardBoostDuration),(c=(l=this.hooks).onRewardClaimed)==null||c.call(l,t)),(u=(h=this.hooks).onAdEnd)==null||u.call(h,"rewarded",{rewarded:r}),r}updateBoost(t){var e,i;this.boostRemaining<=0||(this.boostRemaining-=t,this.boostRemaining<=0&&(this.boostRemaining=0,(i=(e=this.hooks).onBoostEnd)==null||i.call(e)))}get scoreMultiplier(){return this.boostRemaining>0?this.boostMultiplier:1}};var tt=n=>document.querySelector(n),It=(n,t,e)=>{let i=document.createElement(n);return t&&(i.className=t),e!==void 0&&(i.textContent=e),i},Fa=class{constructor(t){this.game=t,this.stack=[],this.touch=Bs(),this.lastHudTick=0,this.heldNameTimer=0,this.screens={loading:tt("#screen-loading"),menu:tt("#screen-menu"),pause:tt("#screen-pause"),settings:tt("#screen-settings"),controls:tt("#screen-controls"),leaderboard:tt("#screen-leaderboard"),rewards:tt("#screen-rewards"),multiplayer:tt("#screen-multiplayer"),inventory:tt("#screen-inventory"),creative:tt("#screen-creative"),chest:tt("#screen-chest"),furnace:tt("#screen-furnace"),death:tt("#screen-death"),confirm:tt("#screen-confirm")},this.hud=tt("#hud"),this.touchEl=tt("#touch"),this.hotbarEl=tt("#hotbar"),this.invGridEl=tt("#inv-grid"),this.recipeListEl=tt("#recipe-list"),this.toastsEl=tt("#toasts"),this.touch&&document.body.classList.add("is-touch"),this.applyScale(),window.addEventListener("resize",()=>this.applyScale()),window.addEventListener("orientationchange",()=>setTimeout(()=>this.applyScale(),260))}applyScale(){let t=window.innerWidth,e=window.innerHeight,i=Math.min(t/900,e/620),s=Math.max(.62,Math.min(1.55,i*(this.touch?1.14:1)));document.documentElement.style.setProperty("--ui",s.toFixed(3))}isOpen(t){return this.stack.includes(t)}get top(){return this.stack[this.stack.length-1]||null}get anyOpen(){return this.stack.length>0}show(t){var i,s;let e=this.screens[t];e&&(this.stack.includes(t)||(this.stack.push(t),e.classList.remove("hidden"),(s=(i=this.game).onUiVisibilityChange)==null||s.call(i)))}hide(t){var i,s,r,o;let e=this.screens[t];e&&((t==="inventory"||t==="chest"||t==="furnace")&&this.cursor&&this.releaseCursor(),t==="chest"&&((s=(i=this.game).onChestClosed)==null||s.call(i),this.chestSlots=null),t==="furnace"&&(this.furnace=null),e.classList.add("hidden"),this.stack=this.stack.filter(a=>a!==t),(o=(r=this.game).onUiVisibilityChange)==null||o.call(r))}hideTop(){let t=this.top;t&&this.hide(t)}hideAll(){var t,e,i;for(let s of Object.keys(this.screens))(t=this.screens[s])==null||t.classList.add("hidden");this.stack=[],(i=(e=this.game).onUiVisibilityChange)==null||i.call(e)}setHudVisible(t){this.hud.classList.toggle("hidden",!t),this.touchEl.classList.toggle("hidden",!t||!this.touch)}init(){br(),this.buildLogoBlocks(),this.buildHotbar(),this.buildVitals(),this.bindButtons(),this.bindTouchButtons()}buildLogoBlocks(){let t=tt("#logo-blocks");if(t){t.innerHTML="";for(let e of[v.GRASS,v.LOG_OAK,v.DIAMOND_ORE,v.CRAFTING_TABLE,v.GLOWSTONE]){let i=new Image;i.src=_i(e),i.alt="",t.appendChild(i)}}}bindButtons(){var i,s;let t=this.game,e=(r,o)=>{let a=tt(r);a&&a.addEventListener("click",l=>{var c;l.preventDefault(),(c=t.audio)==null||c.click(),o()})};e("#btn-play",()=>t.startGame(!1)),e("#btn-continue",()=>t.startGame(!0)),e("#btn-new",()=>this.confirm(nt("menu.confirmNew"),()=>t.startGame(!1,!0))),e("#btn-rewards",()=>this.openRewards()),e("#btn-settings",()=>this.openSettings()),e("#btn-howto",()=>this.openControls()),Us?e("#btn-multiplayer",()=>this.openMultiplayer()):(i=tt("#btn-multiplayer"))==null||i.remove(),e("#btn-pause",()=>t.togglePause()),e("#btn-inv",()=>t.toggleInventory()),e("#btn-resume",()=>t.resume()),e("#btn-pause-rewards",()=>this.openRewards()),e("#btn-pause-settings",()=>this.openSettings()),e("#btn-pause-howto",()=>this.openControls()),e("#btn-tomenu",()=>t.exitToMenu()),e("#btn-respawn",()=>t.respawnAfterBreak()),e("#btn-death-bonus",()=>t.respawnWithAd()),e("#btn-death-menu",()=>t.exitToMenu()),e("#btn-settings-reset",()=>t.resetSettings()),document.querySelectorAll(".btn-close").forEach(r=>{r.addEventListener("click",o=>{var a,l;o.preventDefault(),(a=t.audio)==null||a.click(),this.hideTop(),this.anyOpen||(l=t.onAllScreensClosed)==null||l.call(t)})}),(s=tt("#btn-confirm-no"))==null||s.addEventListener("click",()=>{var r;(r=t.audio)==null||r.click(),this.hide("confirm")})}bindTouchButtons(){document.querySelectorAll("[data-touch]").forEach(t=>{let e=t.getAttribute("data-touch"),i=r=>{r.preventDefault(),t.classList.add("down"),this.game.controls.setButton(e,!0)},s=r=>{r.preventDefault(),t.classList.remove("down"),this.game.controls.setButton(e,!1)};t.addEventListener("touchstart",i,{passive:!1}),t.addEventListener("touchend",s,{passive:!1}),t.addEventListener("touchcancel",s,{passive:!1}),t.addEventListener("mousedown",i),t.addEventListener("mouseup",s),t.addEventListener("mouseleave",s)})}confirm(t,e){tt("#confirm-text").textContent=t;let i=tt("#btn-confirm-yes"),s=i.cloneNode(!0);i.parentNode.replaceChild(s,i),s.addEventListener("click",()=>{var r;(r=this.game.audio)==null||r.click(),this.hide("confirm"),e()}),this.show("confirm")}setLoading(t,e){let i=tt("#loader-fill");if(i&&(i.style.width=`${Math.max(0,Math.min(100,t))}%`),e){let s=tt("#loader-text");s.setAttribute("data-i18n",e),s.textContent=nt(e)}}buildVitals(){let t=(e,i,s,r)=>{e.innerHTML="";for(let o=0;o<i;o++){let a=It("span",`pip ${s}`,r);e.appendChild(a)}};t(tt("#armor-row"),10,"pip-armor","\u{1F6E1}"),t(tt("#health-row"),10,"pip-heart","\u2764"),t(tt("#food-row"),10,"pip-food","\u{1F357}"),t(tt("#air-row"),10,"pip-air","\u25CF")}buildHotbar(){this.hotbarEl.innerHTML="";for(let t=0;t<9;t++){let e=It("div","slot");e.dataset.index=String(t);let i=new Image;i.alt="",e.appendChild(i),e.appendChild(It("span","count",""));let s=It("span","keyhint",String(t+1));this.touch&&(s.style.display="none"),e.appendChild(s),e.addEventListener("click",r=>{var o;r.preventDefault(),this.game.inventory.select(t),(o=this.game.audio)==null||o.click()}),this.hotbarEl.appendChild(e)}}refreshHotbar(){let t=this.game.inventory,e=this.hotbarEl.children;for(let i=0;i<9;i++){let s=e[i];if(!s)continue;let r=t.get(i),o=s.querySelector("img"),a=s.querySelector(".count");if(r){let l=_i(r.id);o.dataset.id!==String(r.id)&&(o.src=l,o.dataset.id=String(r.id)),o.style.display="",a.textContent=r.count>1?String(r.count):""}else o.style.display="none",o.dataset.id="",a.textContent="";s.classList.toggle("active",i===t.selected)}}showHeldName(){let e=this.game.inventory.held,i=tt("#held-name");i.textContent=e?nt(Ti(e.id)):"",i.classList.add("show"),this.heldNameTimer=1.8}updateVitals(){let t=this.game.player,e=(l,c,h)=>{let u=l.children,d=Math.round(c/h*u.length);for(let f=0;f<u.length;f++)u[f].classList.toggle("empty",f>=d)},i=tt("#armor-row"),s=this.game.inventory?this.game.inventory.armorPoints:0;i.classList.toggle("hidden",s<=0),s>0&&e(i,Math.min(20,s),20),e(tt("#health-row"),t.health,t.maxHealth),e(tt("#food-row"),t.food,t.maxFood);let r=tt("#air-row"),o=t.headInWater||t.air<t.maxAir-.1;r.classList.toggle("hidden",!o),o&&e(r,t.air,t.maxAir);let a=t.mode==="creative";tt("#vitals").style.opacity=a?"0.25":"1"}updateHud(t,e){let i=this.game;this.heldNameTimer-=t,this.heldNameTimer<=0&&tt("#held-name").classList.remove("show"),tt("#score-value").textContent=i.score.toLocaleString(Fs()==="ru"?"ru-RU":"en-US"),tt("#best-value").textContent=i.bestScore.toLocaleString(Fs()==="ru"?"ru-RU":"en-US");let s=i.ads.boostRemaining;if(tt("#boost-badge").classList.toggle("hidden",s<=0),s>0){let c=Math.floor(s/60),h=Math.floor(s%60);tt("#boost-value").textContent=`${c}:${String(h).padStart(2,"0")}`}this.updateVitals();let o=i.player;tt("#info-coords").textContent=`X ${Math.floor(o.pos.x)}  Y ${Math.floor(o.pos.y)}  Z ${Math.floor(o.pos.z)}`;let a=i.world.getBiome(o.pos.x,o.pos.z);tt("#info-biome").textContent=nt(`biome.${la[a]||"plains"}`);let l=tt("#info-fps");l.classList.toggle("hidden",!i.settings.showFps),i.settings.showFps&&(l.textContent=`${nt("hud.fps")}: ${e|0}`)}flashDamage(){let t=tt("#damage-flash");t.style.opacity="1",setTimeout(()=>{t.style.opacity="0"},130)}setUnderwater(t){tt("#water-overlay").style.opacity=t?"1":"0"}setVignette(t){tt("#vignette").style.opacity=t?"1":"0"}setTapHint(t){tt("#tap-hint").classList.toggle("hidden",!t||this.touch)}setHintKey(t){let e=tt("#tap-hint span");e&&(e.setAttribute("data-i18n",t),e.textContent=nt(t))}toast(t,{icon:e=null,kind:i="",ttl:s=2600}={}){let r=It("div",`toast ${i}`);if(e!==null){let o=new Image;o.src=_i(e),o.alt="",r.appendChild(o)}for(r.appendChild(It("span","",t)),this.toastsEl.appendChild(r);this.toastsEl.children.length>4;)this.toastsEl.removeChild(this.toastsEl.firstChild);setTimeout(()=>{r.classList.add("out"),setTimeout(()=>r.remove(),320)},s)}openSettings(){this.buildSettings(),this.show("settings")}buildSettings(){let t=this.game,e=tt("#settings-body");e.innerHTML="";let i=(u,d,f)=>{let g=It("div","setting"),_=It("div","setting-label");_.appendChild(document.createTextNode(nt(u))),f&&_.appendChild(It("span","setting-note",f)),g.appendChild(_);let p=It("div","setting-control");return p.appendChild(d),g.appendChild(p),e.appendChild(g),g},s=It("div","seg"),r=!t.creativeUnlocked;for(let[u,d]of[["survival","set.survival"],["creative","set.creative"]]){let f=u==="creative",g=t.player.mode===u?"on":f&&r?"locked":"",_=It("button",g,f&&r?nt("set.creativeLocked"):nt(d));_.addEventListener("click",async()=>{var p;if((p=t.audio)==null||p.click(),f&&!t.creativeUnlocked){_.disabled=!0,await t.unlockCreative()||this.toast(nt("vid.rewardFail"),{kind:"red"}),this.buildSettings();return}t.setMode(u),this.buildSettings()}),s.appendChild(_)}i("set.mode",s,r?nt("vid.creative.desc"):nt("set.creativeNote"));let o=It("div","setting-control"),a=It("span","setting-value",t.settings.renderDistance===0?nt("set.auto"):String(t.settings.renderDistance)),l=document.createElement("input");l.type="range",l.min="0",l.max="12",l.step="1",l.value=String(t.settings.renderDistance),l.addEventListener("input",()=>{let u=parseInt(l.value,10);a.textContent=u===0?nt("set.auto"):String(u),t.saveSettings({renderDistance:u}),t.applySettings()}),o.appendChild(l),o.appendChild(a),i("set.renderDistance",o);let c=(u,d,f,g,_,p)=>{let m=It("div","setting-control"),M=It("span","setting-value",p(t.settings[d])),b=document.createElement("input");b.type="range",b.min=String(f),b.max=String(g),b.step=String(_),b.value=String(t.settings[d]),b.addEventListener("input",()=>{let A=parseFloat(b.value);M.textContent=p(A),t.saveSettings({[d]:A}),t.applySettings()}),m.appendChild(b),m.appendChild(M),i(u,m)};c("set.fov","fov",55,100,1,u=>`${u|0}\xB0`),c("set.sensitivity","sensitivity",.3,2.5,.05,u=>u.toFixed(2)),c("set.sfx","sfxVolume",0,1,.05,u=>`${Math.round(u*100)}%`),c("set.music","musicVolume",0,1,.05,u=>`${Math.round(u*100)}%`);let h=(u,d,f=!1,g=void 0)=>{let _=It("button","toggle",""),p=()=>f&&t.settings[d]===null?t.autoJumpEffective:t.settings[d],m=()=>{let M=!!p();_.textContent=M?nt("set.on"):nt("set.off"),_.classList.toggle("on",M)};m(),_.addEventListener("click",()=>{var M;(M=t.audio)==null||M.click(),t.saveSettings({[d]:!p()}),t.applySettings(),m()}),i(u,_,g)};t.rayTracingSupported&&h("set.rayTracing","rayTracing",!1,nt("set.rayTracingNote")),h("set.autoJump","autoJump",!0),h("set.clouds","clouds"),h("set.weather","weather"),h("set.showFps","showFps"),h("set.invertY","invertY"),h("set.vignette","vignette")}openControls(){let t=tt("#controls-body");t.innerHTML="";let e=this.touch?[["ctrl.move",[nt("ctrl.touchMove")]],["ctrl.look",[nt("ctrl.touchLook")]],["ctrl.jump",["\u25B2"]],["ctrl.sneak",["\u25BC"]],["ctrl.break",["\u26CF"]],["ctrl.place",["\u25A3"]],["ctrl.hotbar",[nt("inv.title")]],["ctrl.pause",["\u275A\u275A"]]]:[["ctrl.move",["W","A","S","D"]],["ctrl.look",[nt("ctrl.mouse")]],["ctrl.jump",[nt("ctrl.space")]],["ctrl.sprint",["Shift","W\xD72"]],["ctrl.sneak",["C"]],["ctrl.break",[nt("ctrl.lmb")]],["ctrl.place",[nt("ctrl.rmb")]],["ctrl.hotbar",[nt("ctrl.wheel")]],["ctrl.inventory",["E"]],["ctrl.interact",["F"]],["ctrl.fly",[`${nt("ctrl.space")} \xD72`]],["ctrl.view",["V"]],["ctrl.pause",["Esc"]]];for(let[i,s]of e){let r=It("div","keyrow");r.appendChild(It("span","",nt(i)));let o=It("div","keys");for(let a of s)o.appendChild(It("span","kbd",a));r.appendChild(o),t.appendChild(r)}this.show("controls")}async openLeaderboard(){var a,l,c,h;let t=tt("#leaderboard-body");if(!t)return;t.innerHTML="",t.appendChild(It("div","lb-loading",nt("lb.loading"))),this.show("leaderboard");let e=tt("#btn-lb-login");e.classList.add("hidden");let i=this.game;await i.submitScore(!0);let s=await i.fetchLeaderboard();if(t.innerHTML="",!s){t.appendChild(It("div","lb-empty",nt("lb.error"))),i.ysdk.authorized||e.classList.remove("hidden");return}let r=s.entries||[];r.length||t.appendChild(It("div","lb-empty",nt("lb.empty")));let o=new Set;for(let u of r){let d=u.rank||0;if(o.has(d))continue;o.add(d);let f=It("div","lb-row"),g=s.userRank&&d===s.userRank;g&&f.classList.add("me"),f.appendChild(It("div","lb-rank",`#${d}`));let _=document.createElement("img");_.className="lb-avatar",_.alt="";let p=(a=u.player)!=null&&a.getAvatarSrc?u.player.getAvatarSrc("small"):((l=u.player)==null?void 0:l.avatarSrc)||"";p&&(_.src=p),f.appendChild(_);let m=((c=u.player)==null?void 0:c.publicName)||((h=u.player)==null?void 0:h.name)||nt("lb.anon");f.appendChild(It("div","lb-name",g?`${m} \xB7 ${nt("lb.you")}`:m)),f.appendChild(It("div","lb-score",String(u.score??0))),t.appendChild(f)}i.ysdk.authorized||(t.appendChild(It("div","lb-empty",nt("lb.loginHint"))),e.classList.remove("hidden"))}async doLogin(){}openRewards(){this.buildRewards(),this.show("rewards"),clearInterval(this._rewardsTimer),this._rewardsTimer=setInterval(()=>{if(!this.isOpen("rewards")){clearInterval(this._rewardsTimer);return}!this._claiming&&this.rewardsSignature()!==this._rewardsSig&&this.buildRewards()},500)}rewardsSignature(){let t=this.game;return Ba.map(e=>{let i=t.rewardState(e.id);return`${e.id}:${i.show?1:0}${i.enabled?1:0}:${t.ads.rewardCooldown(e.id)}`}).join("|")}buildRewards(){let t=this.game,e=tt("#rewards-body");e.innerHTML="",this._rewardsSig=this.rewardsSignature();let i=0;for(let s of Ba){let r=t.rewardState(s.id);if(!r.show){i++;continue}let o=It("div","reward");o.appendChild(It("div","reward-icon",s.icon));let a=It("div","reward-text");a.appendChild(It("div","reward-name",nt(s.nameKey))),a.appendChild(It("div","reward-desc",r.note||nt(s.descKey))),o.appendChild(a);let l=It("button","btn btn-gold btn-small",nt(s.ctaKey)),c=t.ads.rewardCooldown(s.id);r.enabled?c>0&&(l.disabled=!0,l.textContent=`\u{1F4FA} ${nt("vid.cooldown",{s:Math.ceil(c)})}`):l.disabled=!0,l.addEventListener("click",async h=>{var d;if(h.preventDefault(),l.disabled||this._claiming)return;l.disabled=!0,this._claiming=!0,(d=t.audio)==null||d.click();let u=await t.claimReward(s.id);this._claiming=!1,this.buildRewards(),u||this.toast(nt("vid.rewardFail"),{kind:"red"})}),o.appendChild(l),e.appendChild(o)}i&&e.appendChild(It("div","lb-empty",nt("vid.menuHint")))}openInventory(){this.cursor=null,this.bindInventoryDrop(),this.refreshInventory(),this.renderCursor(),this.show("inventory")}bindInventoryDrop(){this._invDropBound||(this._invDropBound=!0,this.screens.inventory.addEventListener("pointerdown",t=>{this.cursor&&(t.target.closest(".slot")||(this.game.dropStack(this.cursor),this.cursor=null,this.renderCursor(),this.refreshInventory(),this.refreshHotbar()))}))}ensureCursorEl(){if(this.cursorEl)return this.cursorEl;let t=It("div","cursor-stack hidden"),e=new Image;e.alt="",t.appendChild(e),t.appendChild(It("span","count","")),document.body.appendChild(t),this.cursorEl=t;let i=s=>{let r=s.touches?s.touches[0]:s;t.style.left=`${r.clientX}px`,t.style.top=`${r.clientY}px`};return document.addEventListener("pointermove",i),document.addEventListener("touchmove",i,{passive:!0}),t}renderCursor(){let t=this.ensureCursorEl(),e=this.cursor;if(t.classList.toggle("hidden",!e),!e)return;let i=t.querySelector("img");i.dataset.id!==String(e.id)&&(i.src=_i(e.id),i.dataset.id=String(e.id)),t.querySelector(".count").textContent=e.count>1?String(e.count):""}releaseCursor(){if(!this.cursor)return;let t=this.game.inventory.add(this.cursor.id,this.cursor.count);t>0&&this.game.dropStack({id:this.cursor.id,count:t}),this.cursor=null,this.renderCursor()}slotAction(t,e,i){var o,a,l;let s=this.game.inventory,r=s.get(t);if((o=this.game.audio)==null||o.click(),i&&!this.cursor){r&&zs(r.id)>=0?(s.equipFrom(t),(l=this.game.audio)==null||l.equip((a=ki(r.id))==null?void 0:a.armorMat)):r&&this.quickMove(t),this.afterInvChange();return}if(this.cursor){if(!r)e?(s.slots[t]={id:this.cursor.id,count:1},this.cursor.count-=1,this.cursor.count<=0&&(this.cursor=null)):(s.slots[t]=this.cursor,this.cursor=null);else if(r.id===this.cursor.id){let c=ri(r.id)-r.count,h=Math.min(c,e?1:this.cursor.count);r.count+=h,this.cursor.count-=h,this.cursor.count<=0&&(this.cursor=null)}else if(!e){let c={id:r.id,count:r.count};s.slots[t]=this.cursor,this.cursor=c}}else{if(!r)return;if(e){let c=Math.ceil(r.count/2);this.cursor={id:r.id,count:c},r.count-=c,r.count<=0&&(s.slots[t]=null)}else this.cursor={id:r.id,count:r.count},s.slots[t]=null}this.afterInvChange()}quickMove(t){let e=this.game.inventory,i=e.get(t);if(!i)return;let s=t>=9,r=s?0:9,o=s?9:36,a=ri(i.id);for(let l=r;l<o&&i.count>0;l++){let c=e.get(l);if(!c||c.id!==i.id||c.count>=a)continue;let h=Math.min(a-c.count,i.count);c.count+=h,i.count-=h}for(let l=r;l<o&&i.count>0;l++)e.get(l)||(e.slots[l]={id:i.id,count:i.count},i.count=0);i.count<=0&&(e.slots[t]=null)}afterInvChange(){this.game.inventory.changed(),this.renderCursor(),this.refreshInventory(),this.refreshHotbar()}refreshArmorSlots(){let e=this.game.inventory,i=tt("#armor-slots");if(!i)return;i.innerHTML="";let s=["\u{1FA96}","\u{1F9BA}","\u{1F456}","\u{1F97E}"];for(let o=0;o<4;o++){let a=e.armor[o],l=It("div",`slot${a?" filled":""}`);if(l.dataset.hint=s[o],a){let c=new Image;c.src=_i(a.id),c.alt="",c.title=nt(Ti(a.id)),l.appendChild(c)}l.addEventListener("contextmenu",c=>c.preventDefault()),l.addEventListener("pointerdown",c=>{c.preventDefault(),this.armorSlotAction(o)}),i.appendChild(l)}let r=e.armorPoints;tt("#armor-total").textContent=r>0?`\u{1F6E1} ${r}`:""}armorSlotAction(t){var s,r,o;let e=this.game.inventory,i=e.armor[t];if(this.cursor){if(zs(this.cursor.id)!==t)return;e.armor[t]={id:this.cursor.id,count:1},this.cursor=i?{id:i.id,count:1}:null,(r=this.game.audio)==null||r.equip((s=ki(e.armor[t].id))==null?void 0:s.armorMat)}else{if(!i)return;this.cursor={id:i.id,count:1},e.armor[t]=null,(o=this.game.audio)==null||o.click()}this.afterInvChange()}refreshInventory(){let t=this.game,e=t.inventory;this.ensureCursorEl(),this.refreshArmorSlots(),this.invGridEl.innerHTML="";for(let o=0;o<36;o++){let a=e.get(o),l=It("div",`slot${o<9?" hotbar-slot":""}`);if(o===e.selected&&l.classList.add("active"),a){let c=new Image;c.src=_i(a.id),c.alt="",c.title=nt(Ti(a.id)),l.appendChild(c),a.count>1&&l.appendChild(It("span","count",String(a.count)))}this.bindInvSlot(l,o),this.invGridEl.appendChild(l)}let i=t.nearBlock(v.CRAFTING_TABLE),s=t.nearBlock(v.FURNACE);tt("#craft-mode").textContent=i||s?nt("inv.craft"):nt("inv.craft2"),this.recipeListEl.innerHTML="";let r=pf(e,i,s);if(!r.length){this.recipeListEl.appendChild(It("div","lb-empty",nt("inv.noRecipes")));return}for(let{recipe:o,ok:a}of r){let l=It("div",`recipe ${a?"ok":"locked"}`),c=new Image;c.src=_i(o.out),c.alt="",l.appendChild(c);let h=It("div","recipe-info");h.appendChild(It("div","recipe-name",nt(Ti(o.out))));let u=It("div","recipe-need");for(let d of o.need){let f=e.count(d.id),g=It("span",`need${f<d.n?" miss":""}`),_=new Image;_.src=_i(d.id),_.alt="",g.appendChild(_),g.appendChild(document.createTextNode(`${Math.min(f,d.n)}/${d.n}`)),u.appendChild(g)}o.table&&!i&&u.appendChild(It("span","need miss",nt("inv.needTable"))),h.appendChild(u),l.appendChild(h),l.appendChild(It("div","recipe-out",`\xD7${o.count}`)),a&&l.addEventListener("click",()=>{t.craft(o),this.refreshInventory(),this.refreshHotbar()}),this.recipeListEl.appendChild(l)}}openMultiplayer(){let t=this.game,e=tt("#mp-host"),i=tt("#mp-room"),s=tt("#mp-name");this._mpBound||(this._mpBound=!0,e.value=t.netPrefs.host||Pa,i.value=t.netPrefs.room||"",s.value=t.netPrefs.name||t.defaultPlayerName(),tt("#btn-mp-connect").addEventListener("click",r=>{var o;r.preventDefault(),(o=t.audio)==null||o.click(),t.joinRoom(e.value.trim(),i.value.trim(),s.value.trim())}),tt("#btn-mp-leave").addEventListener("click",r=>{var o;r.preventDefault(),(o=t.audio)==null||o.click(),t.leaveRoom()})),this.refreshMultiplayer(),this.show("multiplayer")}refreshMultiplayer(){let t=this.game.net.active;tt("#btn-mp-connect").classList.toggle("hidden",t),tt("#btn-mp-leave").classList.toggle("hidden",!t)}setNetStatus(t,e=""){let i=tt("#mp-status");i&&(i.textContent=t||"",i.className=`mp-status ${e}`,this.refreshMultiplayer())}setNetHud(t,e,i=!1){let s=tt("#mp-hud");s&&(s.classList.toggle("hidden",!t),t&&(tt("#mp-hud-text").textContent=e,tt("#mp-dot").classList.toggle("bad",i)))}renderSlotGrid(t,e,i,s){t.innerHTML="";let r=s??e.length;for(let o=0;o<r;o++){let a=e[o],l=It("div","slot");if(a){let c=new Image;c.src=_i(a.id),c.alt="",c.title=nt(Ti(a.id)),l.appendChild(c),a.count>1&&l.appendChild(It("span","count",String(a.count)))}this.bindGridSlot(l,o,i),t.appendChild(l)}}bindGridSlot(t,e,i){let s=null,r=!1;t.addEventListener("contextmenu",o=>o.preventDefault()),t.addEventListener("pointerdown",o=>{if(r=!1,o.pointerType==="touch"){clearTimeout(s),s=setTimeout(()=>{r=!0,i(e,!0,!1)},380);return}r=!0,o.preventDefault(),i(e,o.button===2,o.shiftKey)}),t.addEventListener("pointerup",o=>{o.pointerType==="touch"&&(clearTimeout(s),r||i(e,!1,!1))}),t.addEventListener("pointercancel",()=>clearTimeout(s)),t.addEventListener("pointerleave",()=>clearTimeout(s))}arraySlotAction(t,e,i,s=!0){var o;let r=t[e]||null;if((o=this.game.audio)==null||o.click(),!this.cursor){if(!r)return;if(i){let a=Math.ceil(r.count/2);this.cursor={id:r.id,count:a},r.count-=a,r.count<=0&&(t[e]=null)}else this.cursor={id:r.id,count:r.count},t[e]=null;return}if(s){if(!r)i?(t[e]={id:this.cursor.id,count:1},this.cursor.count-=1,this.cursor.count<=0&&(this.cursor=null)):(t[e]=this.cursor,this.cursor=null);else if(r.id===this.cursor.id){let a=ri(r.id)-r.count,l=Math.min(a,i?1:this.cursor.count);r.count+=l,this.cursor.count-=l,this.cursor.count<=0&&(this.cursor=null)}else if(!i){let a={id:r.id,count:r.count};t[e]=this.cursor,this.cursor=a}}}openChest(t){this.chestSlots=t,this.cursor=null,this.bindContainerDrop("chest"),this.refreshChest(),this.renderCursor(),this.show("chest")}refreshChest(){this.chestSlots&&(this.renderSlotGrid(tt("#chest-grid"),this.chestSlots,(t,e,i)=>{if(i&&!this.cursor&&this.chestSlots[t]){let s=this.chestSlots[t],r=this.game.inventory.add(s.id,s.count);r<=0?this.chestSlots[t]=null:s.count=r}else this.arraySlotAction(this.chestSlots,t,e);this.afterContainerChange("chest")}),this.renderPlayerRow(tt("#chest-player"),(t,e,i)=>{if(i&&!this.cursor&&this.game.inventory.get(t)){let s=this.game.inventory.get(t),r=this.game.containers.addToChest(this.chestSlots,s.id,s.count);r<=0?this.game.inventory.slots[t]=null:s.count=r}else this.arraySlotAction(this.game.inventory.slots,t,e);this.afterContainerChange("chest")}))}renderPlayerRow(t,e){this.renderSlotGrid(t,this.game.inventory.slots,e,36)}afterContainerChange(t){this.game.inventory.changed(),this.renderCursor(),this.refreshHotbar(),t==="chest"?this.refreshChest():this.refreshFurnace()}bindContainerDrop(t){let e=`_drop_${t}`;this[e]||(this[e]=!0,this.screens[t].addEventListener("pointerdown",i=>{this.cursor&&(i.target.closest(".slot")||(this.game.dropStack(this.cursor),this.cursor=null,this.afterContainerChange(t)))}))}openFurnace(t){this.furnace=t,this.cursor=null,this.bindContainerDrop("furnace"),this.refreshFurnace(),this.renderCursor(),this.show("furnace")}refreshFurnace(){let t=this.furnace;if(!t)return;let e=(i,s,r)=>{let o=tt(i);o.innerHTML="";let a=t[s];if(a){let c=new Image;c.src=_i(a.id),c.alt="",c.title=nt(Ti(a.id)),o.appendChild(c),a.count>1&&o.appendChild(It("span","count",String(a.count)))}let l=o.cloneNode(!0);o.parentNode.replaceChild(l,o),this.bindGridSlot(l,0,(c,h)=>{let u={0:t[s]};this.arraySlotAction(u,0,h,r),t[s]=u[0]||null,this.afterContainerChange("furnace")})};e("#furnace-input","input",!0),e("#furnace-fuel","fuel",!0),e("#furnace-output","output",!1),this.renderPlayerRow(tt("#furnace-player"),(i,s,r)=>{if(r&&!this.cursor&&this.game.inventory.get(i)){let o=this.game.inventory.get(i),a=this.game.isFuel(o.id)?"fuel":"input";if(!t[a])t[a]={id:o.id,count:o.count},this.game.inventory.slots[i]=null;else if(t[a].id===o.id){let l=ri(o.id)-t[a].count,c=Math.min(l,o.count);t[a].count+=c,o.count-=c,o.count<=0&&(this.game.inventory.slots[i]=null)}}else this.arraySlotAction(this.game.inventory.slots,i,s);this.afterContainerChange("furnace")}),this.updateFurnaceGauges()}updateFurnaceGauges(){let t=this.furnace;if(!t)return;let e=tt("#furnace-flame"),i=tt("#furnace-progress");e&&(e.style.height=`${t.burnMax>0?Math.max(0,Math.min(1,t.burn/t.burnMax))*100:0}%`),i&&(i.style.width=`${Math.max(0,Math.min(1,t.progress/8))*100}%`)}setBossBar(t){let e=tt("#boss-bar");if(e){if(!t||t.dead){e.classList.add("hidden");return}e.classList.remove("hidden"),tt("#boss-fill").style.width=`${Math.max(0,t.hp/t.maxHp)*100}%`,tt("#boss-phase").classList.toggle("hidden",!t.enraged)}}setInteractHint(t){let e=tt("#interact-hint");e&&(e.classList.toggle("hidden",!t||this.touch),t&&(tt("#interact-label").textContent=t))}openCreative(){this.creativePage===void 0&&(this.creativePage=0),this.bindCreativeNav(),this.renderCreative(),this.show("creative")}bindCreativeNav(){if(this._creativeBound)return;this._creativeBound=!0;let t=Math.ceil(Aa.length/Qs);tt("#creative-prev").addEventListener("click",e=>{var i;e.preventDefault(),(i=this.game.audio)==null||i.click(),this.creativePage=(this.creativePage-1+t)%t,this.renderCreative()}),tt("#creative-next").addEventListener("click",e=>{var i;e.preventDefault(),(i=this.game.audio)==null||i.click(),this.creativePage=(this.creativePage+1)%t,this.renderCreative()})}bindInvSlot(t,e){let i=null,s=!1;t.addEventListener("contextmenu",r=>r.preventDefault()),t.addEventListener("pointerdown",r=>{if(s=!1,r.pointerType==="touch"){clearTimeout(i),i=setTimeout(()=>{s=!0,this.slotAction(e,!0,!1)},380);return}s=!0,r.preventDefault(),this.slotAction(e,r.button===2,r.shiftKey)}),t.addEventListener("pointerup",r=>{r.pointerType==="touch"&&(clearTimeout(i),s||this.slotAction(e,!1,!1))}),t.addEventListener("pointercancel",()=>clearTimeout(i)),t.addEventListener("pointerleave",()=>clearTimeout(i))}bindSlotHold(t,e,i){let s=null,r=!1,o=()=>{r=!1,clearTimeout(s),s=setTimeout(()=>{r=!0,i()},420)},a=l=>{clearTimeout(s),r||e(),l&&l.preventDefault()};t.addEventListener("pointerdown",o),t.addEventListener("pointerup",a),t.addEventListener("pointerleave",()=>clearTimeout(s)),t.addEventListener("contextmenu",l=>{l.preventDefault(),clearTimeout(s),i()})}renderCreative(){let t=this.game,e=Math.max(1,Math.ceil(Aa.length/Qs));this.creativePage=Math.max(0,Math.min(e-1,this.creativePage||0));let i=this.creativePage*Qs,s=Aa.slice(i,i+Qs),r=tt("#creative-grid");r.innerHTML="";for(let l=0;l<Qs;l++){let c=s[l],h=It("div","slot"+(c===void 0?" empty":""));if(c!==void 0){let u=new Image;u.src=_i(c),u.alt="",u.title=nt(Ti(c)),h.appendChild(u),h.addEventListener("click",d=>{d.preventDefault(),t.creativeGive(c),this.renderCreative(),this.refreshHotbar()})}r.appendChild(h)}tt("#creative-page").textContent=nt("creative.page",{n:this.creativePage+1,total:e}),tt("#creative-prev").disabled=e<2,tt("#creative-next").disabled=e<2;let o=tt("#creative-hotbar");o.innerHTML="";let a=t.inventory;for(let l=0;l<9;l++){let c=a.get(l),h=It("div","slot");if(l===a.selected&&h.classList.add("active"),c){let u=new Image;u.src=_i(c.id),u.alt="",u.title=nt(Ti(c.id)),h.appendChild(u),c.count>1&&h.appendChild(It("span","count",String(c.count)))}this.bindSlotHold(h,()=>{var u;(u=t.audio)==null||u.click(),a.select(l),this.renderCreative(),this.refreshHotbar()},()=>{var u;(u=t.audio)==null||u.click(),a.slots[l]=null,a.changed(),this.renderCreative(),this.refreshHotbar()}),o.appendChild(h)}}showDeath(t,e,i){tt("#death-cause").textContent=nt(`death.cause.${t}`)||"",tt("#death-score-value").textContent=String(e),tt("#btn-death-bonus").classList.toggle("hidden",!i),this.setDeathButtonsEnabled(!0),this.show("death")}setDeathButtonsEnabled(t){for(let e of["#btn-death-bonus","#btn-respawn","#btn-death-menu"]){let i=tt(e);i&&(i.disabled=!t)}}setAdOverlay(t){var e;(e=tt("#vid-overlay"))==null||e.classList.toggle("hidden",!t)}refreshDynamicText(){br(),this.refreshHotbar(),this.isOpen("inventory")&&this.refreshInventory(),this.isOpen("creative")&&this.renderCreative(),this.isOpen("rewards")&&this.buildRewards(),this.isOpen("settings")&&this.buildSettings(),document.title=nt("game.title"),this.updateMenuFoot()}updateMenuFoot(){let t=this.game,e=tt("#menu-best");e&&(e.textContent=`${nt("hud.best")}: ${t.bestScore}`);let i=tt("#btn-continue");i&&i.classList.toggle("hidden",!t.hasSave);let s=tt("#btn-play");s&&s.classList.toggle("hidden",!!t.hasSave)}};var Sf="Score",jy=1.6,Mf=[v.GRASS,v.DIRT,v.STONE,v.COBBLE,v.PLANKS_OAK,v.LOG_OAK,v.SAND,v.GLASS,v.BRICKS,v.STONE_BRICKS,v.WOOL_WHITE,v.WOOL_RED,v.WOOL_BLUE,v.WOOL_YELLOW,v.GLOWSTONE,v.TORCH,v.LEAVES_OAK,v.WATER,v.SNOW,v.ICE,v.OBSIDIAN,v.DIAMOND_BLOCK,v.GOLD_BLOCK,v.CRAFTING_TABLE,v.FURNACE,v.BOOKSHELF,v.PUMPKIN,v.HAY,v.SANDSTONE,v.TERRACOTTA_ORANGE,v.PRISMARINE,v.SEA_LANTERN],Uh=class{constructor(){this.state="loading",this.score=0,this.bestScore=0,this.hasSave=!1,this.seed=0,this.timeOfDay=qo,this.elapsed=0,this.playTime=0,this.lastSubmit=0,this.lastSave=0,this.pendingSpawn=null,this.waitingForSpawn=!1,this.biomesSeen=new Set,this.deepestY=999,this.fps=60,this._fpsAcc=0,this._fpsFrames=0,this.holds=new Set,this.wasPlayingBeforeHold=!1,this.audioWasOnBeforeHold=!1,this.sessionPlayTime=0,this.reviveUsed=!1,this.transitionBusy=!1,this.pausedByVisibility=!1,this.audio=wt,this.ysdk=me,this.settings={...Kn},this.touch=Bs(),this.hasTouch=yr(),this.mining={x:0,y:0,z:0,active:!1,progress:0,total:1,id:0},this.placeCooldown=0,this.attackCooldown=0,this.eatTimer=0,this.lastJumpTap=0,this.menuAngle=0,this.creativeUnlocked=!1,this.viewMode=0}async boot(){this.setupRenderer(),this.ui=new Fa(this),this.ui.setLoading(4,"loading.textures"),await this.frame(),me.onPauseChange=e=>e?this.holdGame("platform"):this.releaseGame("platform"),await me.init(),ae.loadLocalMeta(),this.settings={...Kn,...ae.meta.settings},this.bestScore=ae.meta.best|0,me.available&&(await ae.loadCloud(),this.settings={...this.settings,...ae.meta.settings},this.bestScore=Math.max(this.bestScore,ae.meta.best|0)),this.biomesSeen=new Set(ae.meta.biomesSeen||[]),vd(xd(me.lang)),this.settings.lang=Fs(),me.onAdStateChange=e=>this.onAdBusy(e),br(),document.title=nt("game.title"),yd(()=>this.ui.refreshDynamicText()),this.ui.setLoading(10,"loading.textures"),this.texturePack=await zd(e=>{this.ui.setLoading(10+e*26,"loading.textures")}),await this.frame(),In(),this.ui.init(),this.ui.setLoading(38,"loading.textures"),await this.frame(),this.soundPack=await wt.loadPack(e=>this.ui.setLoading(38+e*8,"loading.textures")),await this.frame(),Wd([...Mf,v.LOG_BIRCH,v.LOG_SPRUCE,v.LOG_JUNGLE,v.PLANKS_BIRCH,v.PLANKS_SPRUCE,v.PLANKS_JUNGLE,v.COAL_ORE,v.IRON_ORE,v.GOLD_ORE,v.DIAMOND_ORE,v.EMERALD_ORE,v.LAPIS_ORE,v.REDSTONE_ORE,v.TALL_GRASS,v.FLOWER_RED,v.FLOWER_YELLOW,v.MUSHROOM_RED,v.CACTUS,v.SUGAR_CANE,q.STICK,q.COAL,q.IRON_INGOT,q.GOLD_INGOT,q.DIAMOND,q.EMERALD,q.BREAD,q.APPLE,q.PICKAXE_WOOD,q.PICKAXE_STONE,q.PICKAXE_IRON,q.PICKAXE_DIAMOND,q.AXE_WOOD,q.SHOVEL_WOOD,q.SWORD_WOOD,q.SWORD_IRON]),this.ui.setLoading(52,"loading.world"),await this.frame(),this.setupScene(),this.ui.setLoading(66,"loading.world"),await this.frame(),this.player=new ka,this.inventory=new Ea,this.inventory.onChange=()=>{this.ui.refreshHotbar(),this.player.setArmorPoints(this.inventory.armorPoints)},this.controls=new Da(this.canvas),this.bindControls(),this.mobs=new Na(this.scene),this.mobs.spawnBlocked=(e,i)=>this.insideArena(e,i),this.mobs.onSound=(e,i,s)=>{e==="idle"?wt.mobIdle(i,s):e==="attack"&&wt.mobAttack(i,s)},this.mobs.onMobDied=e=>{let i=this.player?this.player.pos.distanceTo(e.pos):99;wt.mobDeath(e.type,i);for(let[s,r]of e.def.drops)this.drops.spawnStack(s,r,{x:e.pos.x,y:e.pos.y+.5,z:e.pos.z})},this.ads=new Ua({onAdStart:()=>this.beginAdBreak(),onAdEnd:()=>this.endAdBreak(),onRewardClaimed:e=>this.grantReward(e),onBoostEnd:()=>this.ui.toast(nt("toast.boostEnd"),{kind:"gold"})}),this.hasSave=ae.hasWorld(),this.applySettings(),this.ui.setLoading(84,"loading.chunks"),await this.frame(),this.seed=Math.random()*2**31|0;let t=ae.loadWorld();t&&typeof t.seed=="number"&&(this.seed=t.seed),this.world.onReady=e=>{this.pendingSpawn=e},this.world.init(this.seed,(t==null?void 0:t.edits)||[],null),await this.waitForWorld(3500),this.ui.setLoading(100,"loading.almost"),await this.frame(),this.ui.hide("loading"),this.ui.screens.loading.classList.add("hidden"),this.state="menu",this.ui.updateMenuFoot(),this.ui.show("menu"),this.ads.start(),this.lastTime=performance.now(),requestAnimationFrame(e=>this.loop(e)),me.gameReady(),me.showBanner(),this.bindLifecycle()}frame(){return new Promise(t=>setTimeout(t,16))}waitForWorld(t){return new Promise(e=>{let i=performance.now(),s=()=>{if(this.pendingSpawn){let r=Math.floor(this.pendingSpawn.x/16),o=Math.floor(this.pendingSpawn.z/16);if(this.world.update(this.pendingSpawn.x,this.pendingSpawn.z),this.world.isChunkLoaded(r,o))return e()}if(performance.now()-i>t)return e();setTimeout(s,40)};s()})}setupRenderer(){this.canvas=document.getElementById("game"),this.renderer=new Oo({canvas:this.canvas,antialias:!this.touch,powerPreference:"high-performance",stencil:!1,alpha:!1});let t=this.touch?1.6:2;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,t)),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.renderer.outputColorSpace=_e,this.renderer.setClearColor(9418472,1),this.canvas.addEventListener("webglcontextlost",e=>{e.preventDefault()},!1),window.addEventListener("resize",()=>this.onResize())}setupScene(){this.scene=new Tn,this.camera=new qe(this.settings.fov,window.innerWidth/window.innerHeight,.08,1400),this.camera.rotation.order="YXZ",this.atlasTex=Xd(this.renderer),this.materials=Kd(this.atlasTex),this.sky=new aa(this.scene),this.world=new Js(this.scene,this.materials),this.particles=new ha(this.scene),this.smoke=new ua(this.scene),this.weather=new da(this.scene),this.tnt=new fa(this.scene,this.atlasTex),this.tnt.onExplode=(t,e,i,s)=>this.explode(t,e,i,s),this.net=xf,this.remotes=new Oa(this.scene,this.atlasTex),this.setupNet(),this.containers=new Ca,this.arenas=new Map,this.boss=null,this.bossLogs=[],this.world.onArena=t=>this.registerArena(t),this.drops=new Ma(this.scene,this.atlasTex),this.drops.onPickup=(t,e)=>{let i=this.inventory.add(t,e);return i<e&&(wt.pop(),this.ui.showHeldName()),i},this.world.onFx=t=>this.onWorldFx(t),this.rt=new _a(this.renderer,this.scene,this.camera),this.world.onVoxelChange=(t,e)=>this.rt.onBlocksChanged(t,e),this.world.onVoxelChangeMany=t=>this.rt.onManyBlocksChanged(t),this.hand=new ma(this.atlasTex),this.hand.resize(window.innerWidth/window.innerHeight),this.playerModel=new Zs(this.scene,this.atlasTex),this.selection=qd(),this.scene.add(this.selection),this.crack=$d(),this.scene.add(this.crack),this.hemi=new ks(12376319,3814440,1.1),this.scene.add(this.hemi),this.sun=new Ds(16772812,1),this.scene.add(this.sun)}onResize(){let t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.touch?1.6:2)),this.camera&&(this.camera.aspect=t/e,this.camera.updateProjectionMatrix()),this.hand&&this.hand.resize(t/e)}get autoJumpEffective(){return this.settings.autoJump===null?this.touch:!!this.settings.autoJump}saveSettings(t){this.settings={...this.settings,...t},ae.updateSettings(t)}resetSettings(){this.settings={...Kn,lang:Fs()},ae.meta.settings={...this.settings},ae.saveLocalMeta(),this.applySettings(),this.ui.buildSettings()}applySettings(){let t=this.settings;this.camera&&(this.camera.fov=t.fov,this.camera.updateProjectionMatrix()),this.controls&&(this.controls.sensitivity=t.sensitivity,this.controls.invertY=!!t.invertY),wt.setVolumes(t.sfxVolume,t.musicVolume),wt.setMusic(t.musicVolume>.001),this.sky&&this.sky.setCloudsEnabled(!!t.clouds),this.weather&&this.weather.setEnabled(!!t.weather),this.ui.setVignette(!!t.vignette);let e=t.renderDistance|0;if(e===0){let i=navigator.deviceMemory||4;e=this.touch?i>=6?6:5:i>=8?9:7}e=Math.max(3,Math.min(12,e)),this.world&&this.world.setRenderDistance(e),this.viewDistance=e*16,this.settings.autoJumpEffective=this.autoJumpEffective,this.rt&&!this.rt.setEnabled(!!t.rayTracing,{lowPower:this.touch})&&t.rayTracing&&(this.settings.rayTracing=!1)}get rayTracingSupported(){return!!this.rt&&this.rt.supported}setMode(t){if(t==="creative"&&!this.creativeUnlocked)return!1;if(this.player.mode=t,t==="creative"){for(let e=0;e<9;e++)this.inventory.get(e)||(this.inventory.slots[e]={id:Mf[e],count:64});this.inventory.changed(),this.player.health=this.player.maxHealth,this.player.food=this.player.maxFood,this.player.air=this.player.maxAir}else this.player.flying=!1;return!0}async unlockCreative(){return this.creativeUnlocked?!0:await this.ads.requestReward(vi.CREATIVE)?(this.creativeUnlocked=!0,this.ads.setCooldown(vi.CREATIVE,0),this.setMode("creative"),this.ui.toast(nt("toast.creativeUnlocked"),{kind:"gold"}),wt.levelUp(),!0):!1}creativeGive(t){if(this.player.mode!=="creative")return;let e=this.inventory,i=e.selected;if(e.get(i)&&e.get(i).id===t){let s=e.slots.findIndex((r,o)=>o<Lr&&!r);s>=0&&(i=s)}e.slots[i]={id:t,count:ri(t)},e.select(i),e.changed(),wt.click()}isFuel(t){return Oh(t)>0}targetedInteractive(){if(this.state!=="playing")return null;let{origin:t,dir:e}=this.getAimRay(),i=this.world.raycast(t,e,ve.reach,!1);return!i||!Rd.has(i.id)?null:i}interact(){if(this.ui.isOpen("chest")){this.ui.hide("chest"),this.afterPanelClose();return}if(this.ui.isOpen("furnace")){this.ui.hide("furnace"),this.afterPanelClose();return}if(this.ui.anyOpen)return;let t=this.targetedInteractive();t&&(this.controls.clearAll(),this.controls.exitLock(),t.id===v.CHEST?(this.openChestPos={x:t.x,y:t.y,z:t.z},this.ui.openChest(this.containers.chestAt(t.x,t.y,t.z)),wt.chestOpen()):t.id===v.FURNACE?(this.ui.openFurnace(this.containers.furnaceAt(t.x,t.y,t.z)),wt.click()):t.id===v.CRAFTING_TABLE&&(this.ui.openInventory(),wt.click()))}onChestClosed(){wt.chestClose(),this.openChestPos=null}afterPanelClose(){this.state==="playing"&&!this.ui.anyOpen&&(this.controls.enabled=!0,this.touch||this.controls.requestLock())}dropStack(t){if(!t||!t.id||t.count<=0)return;let e=this.player,i=new L(0,0,-1).applyEuler(new wi(e.pitch,e.yaw,0,"YXZ")),s={x:e.pos.x+i.x*.4,y:e.eyeY-.25,z:e.pos.z+i.z*.4},r=2.8,o=new L(i.x*r,i.y*r+.9,i.z*r);this.drops.spawnStack(t.id,t.count,s,o),wt.place()}dropSelected(){if(this.state!=="playing"||this.ui.anyOpen)return;let t=this.inventory,e=t.held;if(!e)return;let s=this.controls.state.sneak?e.count:1;t.removeAt(t.selected,s),this.dropStack({id:e.id,count:s}),this.swingArm()}pickBlock(){if(this.player.mode!=="creative"||this.state!=="playing")return;let{origin:t,dir:e}=this.getAimRay(),i=this.world.raycast(t,e,ve.reachCreative,!1);!i||!i.id||(this.creativeGive(i.id),this.ui.showHeldName())}bindControls(){let t=this.controls;t.onPause=()=>{this.state==="playing"?this.pause():this.ui.anyOpen&&this.ui.top!=="menu"&&this.ui.top!=="loading"&&(this.ui.hideTop(),this.ui.anyOpen||this.resume())},t.onInventory=()=>this.toggleInventory(),t.onHotbar=e=>{this.inventory.select(e),this.ui.showHeldName()},t.onHotbarScroll=e=>{this.inventory.cycle(e),this.ui.showHeldName()},t.onToggleFly=()=>this.toggleFly(),t.onToggleView=()=>this.toggleView(),t.onInteract=()=>this.interact(),t.onDropItem=()=>this.dropSelected(),t.onPickBlock=()=>this.pickBlock(),t.onFirstInteract=()=>wt.resume(),t.onLockChange=e=>{t.lockUnavailable||(!e&&this.state==="playing"&&!this.ui.anyOpen&&!this.holds.size&&this.pause(),this.ui.setTapHint(this.state==="playing"&&!e&&!this.ui.anyOpen))},t.onLockUnavailable=()=>{this.ui.setHintKey("ctrl.dragStart"),this.ui.setTapHint(this.state==="playing")},t.setJoystickElements(document.getElementById("joystick"),document.getElementById("joystick-knob")),this.canvas.addEventListener("click",()=>{this.state==="playing"&&!this.touch&&!this.controls.locked&&!this.ui.anyOpen&&this.controls.lockNow()})}toggleFly(){this.player.mode!=="creative"||this.state!=="playing"||(this.player.flying=!this.player.flying,this.player.flying&&(this.player.vel.y=0),wt.click())}bindLifecycle(){document.addEventListener("visibilitychange",()=>{document.hidden?this.onFocusLost():this.onFocusGained()}),window.addEventListener("blur",()=>this.onFocusLost()),window.addEventListener("focus",()=>this.onFocusGained()),window.addEventListener("pagehide",()=>{this.saveGame()}),window.addEventListener("beforeunload",()=>{this.saveGame()})}onFocusLost(){wt.suspend(),this.state==="playing"&&(this.pausedByVisibility=!0,this.pause(!0))}onFocusGained(){if(!this.holds.size){if(this.pausedByVisibility&&(this.pausedByVisibility=!1,this.state==="paused"&&this.ui.top==="pause")){this.ui.hide("pause"),this.resume();return}this.state==="playing"||this.state==="menu"&&!this.ui.anyOpen?wt.resume():this.ui.anyOpen||wt.resume()}}onUiVisibilityChange(){let t=this.ui.anyOpen;t&&this.state==="playing"?this.controls.enabled=!1:!t&&this.state==="playing"&&(this.controls.enabled=!0),this.ui.setTapHint(this.state==="playing"&&!t&&!this.touch&&!this.controls.locked)}onAllScreensClosed(){this.state==="paused"&&this.resume()}holdGame(t){let e=this.holds.size===0;this.holds.add(t),e&&(this.wasPlayingBeforeHold=this.state==="playing",this.audioWasOnBeforeHold=!wt.suspended,this.state==="playing"&&(this.state="paused",this.saveGame()),this.controls&&(this.controls.enabled=!1,this.controls.clearAll(),this.controls.exitLock()),this.ui.setTapHint(!1),wt.setHeld(!0),this.world&&this.world.setPaused&&this.world.setPaused(!0),me.gameplayStop())}releaseGame(t){if(!this.holds.delete(t)||this.holds.size)return;wt.setHeld(!1);let e=this.wasPlayingBeforeHold;if(this.wasPlayingBeforeHold=!1,e&&this.state==="paused"&&!this.ui.anyOpen){this.resume();return}if(this.state==="playing"&&this.controls){this.controls.enabled=!this.ui.anyOpen,me.gameplayStart(),document.hidden||wt.resume(),this.touch||this.controls.requestLock(),this.ui.setTapHint(!this.touch&&!this.controls.locked&&!this.ui.anyOpen);return}this.audioWasOnBeforeHold&&!document.hidden&&wt.resume()}get adPaused(){return this.holds.size>0}beginAdBreak(){this.holdGame("ad"),this.ui.setAdOverlay(!0)}endAdBreak(){this.ui.setAdOverlay(!1),this.releaseGame("ad")}async naturalBreak(){if(!this.ads.canShowInterstitial(this.sessionPlayTime))return!1;let t=await this.ads.showInterstitial();return!!(t&&t.shown)}onAdBusy(t){t&&wt.suspend()}async claimReward(t){return await this.ads.requestReward(t)}rewardState(t){let e=this.state==="playing"||this.state==="paused",i=this.player,s=e&&i&&i.mode==="creative";switch(t){case vi.HEAL:return!e||s?{show:!1}:i.health>=i.maxHealth&&i.food>=i.maxFood&&i.air>=i.maxAir?{show:!0,enabled:!1,note:nt("vid.healFull")}:{show:!0,enabled:!0};case vi.CRATE:return e?{show:!0,enabled:!0}:{show:!1};case vi.BOOST:return s?{show:!1}:this.ads.boostRemaining>0?{show:!0,enabled:!1,note:nt("vid.boostOn")}:{show:!0,enabled:!0};default:return{show:!0,enabled:!0}}}grantReward(t){switch(wt.reward(),t){case vi.HEAL:this.player.health=this.player.maxHealth,this.player.food=this.player.maxFood,this.player.air=this.player.maxAir,this.ui.toast(`${nt("vid.rewardGot")} \u2014 ${nt("vid.reward1.name")}`,{kind:"gold"});break;case vi.CRATE:for(let[e,i]of mf){let s=this.inventory.add(e,i);s>0&&this.player&&this.dropStack({id:e,count:s})}this.ui.toast(`${nt("vid.rewardGot")} \u2014 ${nt("vid.reward2.name")}`,{kind:"gold",icon:v.CRAFTING_TABLE});break;case vi.BOOST:this.ui.toast(`${nt("vid.rewardGot")} \u2014 ${nt("vid.reward3.name")}`,{kind:"gold"});break}this.ui.refreshHotbar()}startGame(t,e=!1){var a,l;let i=e?null:t?ae.loadWorld():ae.loadWorld();e&&ae.clearWorld();let s=e||!i?Math.random()*2**31|0:i.seed,r=e||!i||s!==this.seed;if(this.reviveUsed=!1,this.score=i&&!e?i.score|0:0,this.timeOfDay=i&&!e?i.timeOfDay??qo:qo,this.playTime=i&&!e&&i.playTime||0,this.deepestY=999,this.inventory.clear(),i&&!e&&i.inventory)this.inventory.deserialize(i.inventory);else for(let[c,h]of Ta)this.inventory.add(c,h);this.player.reset(0,90,0),i&&!e&&i.player&&this.player.deserialize(i.player),this.player.mode==="creative"&&!this.creativeUnlocked&&(this.player.mode="survival"),this.containers.deserialize(i&&!e?i.containers:null),this.defeatedArenas=new Set(i&&!e?i.arenasDone||[]:[]),this.arenas.clear(),this.despawnBoss(),this.mobs.clear(),this.tnt.clear(),this.drops.clear(),this.particles.reset(),this.smoke.reset();let o=c=>{(!i||e||!i.player)&&(this.player.reset(c.x,c.y,c.z),this.player.yaw=Math.random()*Math.PI*2),this.enterPlaying()};if(r)this.seed=s,this.pendingSpawn=null,(l=(a=this.world).dispose)==null||l.call(a),this.world=new Js(this.scene,this.materials),this.world.setRenderDistance(this.viewDistance/16),this.world.onReady=c=>{this.pendingSpawn=c},this.world.init(this.seed,(i&&!e?i.edits:[])||[],null),this.ui.setLoading(20,"loading.chunks"),this.ui.show("loading"),this.waitForWorld(6e3).then(()=>{this.ui.hide("loading"),o(this.pendingSpawn||{x:.5,y:80,z:.5})});else{let c=this.pendingSpawn||{x:.5,y:80,z:.5};i&&!e&&i.player?(this.world.update(this.player.pos.x,this.player.pos.z),this.enterPlaying()):(this.ui.show("loading"),this.ui.setLoading(30,"loading.chunks"),this.world.update(c.x,c.z),setTimeout(()=>{this.ui.hide("loading"),o(c)},350))}}enterPlaying(){this.ui.hideAll(),this.state="playing",this.ui.setHudVisible(!0),this.controls.enabled=!0,this.ui.refreshHotbar(),this.ui.updateVitals(),wt.resume(),wt.setMusic(this.settings.musicVolume>.001),me.gameplayStart(),me.hideBanner(),this.ui.setTapHint(!this.touch),this.touch||this.controls.requestLock(),this.applySettings()}pause(t=!1){this.state==="playing"&&(this.state="paused",this.controls.enabled=!1,this.controls.clearAll(),this.controls.exitLock(),me.gameplayStop(),wt.suspend(),this.saveGame(),t||wt.click(),this.ui.show("pause"),this.ui.setTapHint(!1))}resume(){this.state==="paused"&&(this.ui.hide("pause"),!this.ui.anyOpen&&(this.state="playing",this.controls.enabled=!0,wt.resume(),me.gameplayStart(),this.ui.setTapHint(!this.touch),this.touch||this.controls.requestLock()))}togglePause(){this.state==="playing"?this.pause():this.state==="paused"&&this.resume()}toggleInventory(){if(this.state!=="playing"&&this.state!=="paused")return;let t=this.player.mode==="creative"?"creative":"inventory";this.ui.isOpen(t)?(this.ui.hide(t),this.ui._pick=null,!this.ui.anyOpen&&this.state==="playing"&&(this.controls.enabled=!0,this.touch||(this.controls.requestLock(),this.controls.lockNow()))):(this.controls.clearAll(),this.controls.exitLock(),t==="creative"?this.ui.openCreative():this.ui.openInventory())}exitToMenu(){this.transitionBusy||(this.saveGame(),this.submitScore(!0),this.state="menu",this.controls.enabled=!1,this.controls.clearAll(),this.controls.exitLock(),me.gameplayStop(),this.arenas.clear(),this.despawnBoss(),this.mobs.clear(),this.tnt.clear(),this.drops.clear(),this.ui.hideAll(),this.ui.setHudVisible(!1),this.hasSave=ae.hasWorld(),this.ui.updateMenuFoot(),this.ui.show("menu"),wt.resume(),me.showBanner(),this.naturalBreak())}respawn(t){if(!t){this.inventory.clear();for(let[s,r]of Ta)this.inventory.add(s,r)}let e=this.pendingSpawn||{x:.5,y:80,z:.5},i=this.world.surfaceY(e.x,e.z);this.player.reset(e.x,Math.max(i+1,e.y),e.z),this.ui.hide("death"),this.state="playing",this.controls.enabled=!0,this.ui.setHudVisible(!0),wt.resume(),me.gameplayStart(),this.touch||this.controls.requestLock()}async respawnAfterBreak(){if(!(this.transitionBusy||this.state!=="dead")){this.transitionBusy=!0,this.ui.setDeathButtonsEnabled(!1);try{await this.naturalBreak()}catch{}this.transitionBusy=!1,this.ui.setDeathButtonsEnabled(!0),this.state==="dead"&&this.respawn(!1)}}async respawnWithAd(){if(this.reviveUsed||this.transitionBusy||this.state!=="dead")return;this.transitionBusy=!0,this.ui.setDeathButtonsEnabled(!1);let t=await this.ads.requestReward(vi.REVIVE);this.transitionBusy=!1,this.ui.setDeathButtonsEnabled(!0),t&&this.state==="dead"?(this.reviveUsed=!0,this.respawn(!0),this.ui.toast(nt("vid.rewardGot"),{kind:"gold"})):t||this.ui.toast(nt("vid.rewardFail"),{kind:"red"})}onDeath(){this.state!=="dead"&&(this.state="dead",this.controls.enabled=!1,this.controls.clearAll(),this.controls.exitLock(),me.gameplayStop(),ae.bumpStat("deaths"),this.submitScore(!0),this.saveGame(),this.ui.setHudVisible(!1),this.ui.showDeath(this.player.deathCause,this.score,!this.reviveUsed))}addScore(t){if(this.player.mode==="creative")return;let e=Math.round(t*this.ads.scoreMultiplier);e<=0||(this.score+=e,ae.setBest(this.score)&&this.score>0&&this.score%500<e&&this.ui.toast(nt("toast.record"),{kind:"gold"}),this.bestScore=Math.max(this.bestScore,this.score))}async submitScore(t=!1){let e=Date.now();if(!t&&e-this.lastSubmit<_d.submitDebounce)return;this.lastSubmit=e;let i=Math.max(this.score,0);i<=0||(await me.submitScore(Sf,Math.max(i,this.bestScore)),ae.flushCloud(t))}async fetchLeaderboard(){return me.fetchEntries(Sf,{top:12,around:3})}async saveGame(){if(!(!this.world||this.state==="loading"))try{let t=await this.world.getEdits();ae.saveWorld({v:1,seed:this.seed,score:this.score,timeOfDay:this.timeOfDay,playTime:this.playTime,player:this.player.serialize(),inventory:this.inventory.serialize(),containers:this.containers.serialize(),arenasDone:Array.from(this.defeatedArenas||[]),edits:t}),ae.meta.biomesSeen=Array.from(this.biomesSeen),ae.saveLocalMeta(),ae.flushCloud(),this.hasSave=!0}catch{}}nearBlock(t,e=4){let i=this.player.pos,s=Math.floor(i.x-e),r=Math.floor(i.x+e),o=Math.floor(i.y-2),a=Math.floor(i.y+3),l=Math.floor(i.z-e),c=Math.floor(i.z+e);for(let h=o;h<=a;h++)for(let u=l;u<=c;u++)for(let d=s;d<=r;d++)if(this.world.getBlock(d,h,u)===t)return!0;return!1}craft(t){if(!ff(t,this.inventory,this.nearBlock(v.CRAFTING_TABLE),this.nearBlock(v.FURNACE)))return;wt.craft(),ae.bumpStat("crafted");let i=ki(t.out);this.addScore(3+((i==null?void 0:i.score)||0)*.5),this.ui.toast(`${nt("toast.crafted")}: ${nt(Ti(t.out))} \xD7${t.count}`,{icon:t.out})}getAimRay(){let t=this.player,e=new L(0,0,-1).applyEuler(new wi(t.pitch,t.yaw,0,"YXZ"));return{origin:new L(t.pos.x,t.eyeY,t.pos.z),dir:e}}updateInteraction(t){let e=this.player,i=e.mode==="creative",s=i?ve.reachCreative:ve.reach,{origin:r,dir:o}=this.getAimRay(),a=this.world.raycast(r,o,s,!1);this.placeCooldown=Math.max(0,this.placeCooldown-t),this.attackCooldown=Math.max(0,this.attackCooldown-t),a?(this.selection.visible=!0,this.selection.position.set(a.x+.5,a.y+.5,a.z+.5)):this.selection.visible=!1;let l=this.controls.state;if(l.breaking&&this.attackCooldown<=0&&this.boss&&!this.boss.dead){let d=this.boss,f=new zi(new L(d.pos.x-1.1,d.pos.y,d.pos.z-1.1),new L(d.pos.x+1.1,d.pos.y+d.height,d.pos.z+1.1)),g=new cn(r,o).intersectBox(f,new L);if(g&&r.distanceTo(g)<=s+.6){let _=this.inventory.heldId,p=_>=Ie?Ze[_]:null,m=p&&p.tool===bt.SWORD?p.damage*1.6:p?Math.max(1,p.damage):1;d.hurt(m),this.attackCooldown=.4,this.swingArm(!0),this.particles.emit(g.x,g.y,g.z,0,2,0,.8,.5,.2,.08,.4),this.mining.active=!1,this.crack.visible=!1;return}}if(l.breaking&&this.attackCooldown<=0){let d=this.mobs.pick(r,o,Math.min(s,a?a.dist:s));if(d){let f=this.inventory.heldId,g=f>=Ie?Ze[f]:null,_=g&&g.tool===bt.SWORD?g.damage:g?Math.max(1,g.damage*.6):1,p=d.hurt(_);this.attackCooldown=.42,this.swingArm(!0);let m=this.player.pos.distanceTo(d.pos);if(p?wt.mobDeath(d.type,m):wt.mobHurt(d.type,m),p){for(let[M,b]of d.def.drops)this.drops.spawnStack(M,b,{x:d.pos.x,y:d.pos.y+.5,z:d.pos.z});this.addScore(d.def.score),ae.bumpStat("mobsDefeated")}this.mining.active=!1,this.crack.visible=!1;return}}if(l.breaking&&a){if(this.mining.lost=0,this.mining.active&&this.mining.x===a.x&&this.mining.y===a.y&&this.mining.z===a.z||(this.mining.active=!0,this.mining.x=a.x,this.mining.y=a.y,this.mining.z=a.z,this.mining.id=a.id,this.mining.progress=0,this.mining.total=i?.06:kd(a.id,this.inventory.heldId)),!Number.isFinite(this.mining.total)){this.crack.visible=!1;return}this.mining.progress+=t;let f=Math.min(1,this.mining.progress/this.mining.total);this.crack.visible=f>.02,this.crack.position.set(a.x+.5,a.y+.5,a.z+.5),this.crack.userData.setStage(Math.floor(f*10)),this.swingArm(),this._digSoundTimer=(this._digSoundTimer||0)-t,this._digSoundTimer<=0&&(this._digSoundTimer=.22,wt.dig(Sr(a.id,v)),this.particles.blockHit(a.x,a.y,a.z,a.nx,a.ny,a.nz,a.id)),f>=1&&this.breakBlock(a)}else l.breaking&&this.mining.active?(this.mining.lost=(this.mining.lost||0)+t,this.mining.lost>.35&&(this.mining.active=!1,this.crack.visible=!1)):(this.mining.active=!1,this.mining.lost=0,this.crack.visible=!1);let c=this.inventory.held,h=c&&c.id>=Ie?Ze[c.id]:null,u=!!h&&h.food>0&&e.mode!=="creative"&&(e.food<e.maxFood||e.health<e.maxHealth||h.heal>0);if(l.placing&&u){if(this.eatTimer+=t,this.hand.setEating(Math.min(1,this.eatTimer/.28)),this._biteTimer=(this._biteTimer||0)-t,this._biteTimer<=0&&(this._biteTimer=.26,wt.eatBite(),this.emitEatParticles()),this.eatTimer>=jy){this.eatTimer=0,this.hand.setEating(0),this.inventory.removeAt(this.inventory.selected,1),e.feed(h.food),h.heal&&e.heal(h.heal),wt.eat(),this.addScore(h.score||1),this.placeCooldown=.35;for(let d=0;d<10;d++)this.emitEatParticles()}return}if(this.eatTimer>0&&(this.eatTimer=0,this.hand.setEating(0)),l.placing&&this.placeCooldown<=0&&c&&c.id===q.LIGHTER&&a){this.swingArm(!0),this.placeCooldown=this.igniteTnt(a.x,a.y,a.z)?.45:.3;return}l.placing&&this.placeCooldown<=0&&(h?this.placeCooldown=.25:c&&a&&(this.placeBlock(a,c),this.swingArm()),this.controls.placeQueued=!1,this.touch||(this.placeCooldown=Math.max(this.placeCooldown,.16)))}emitEatParticles(){let t=new L(0,0,-1).applyQuaternion(this.camera.quaternion),e=this.camera.position;for(let i=0;i<3;i++)this.particles.emit(e.x+t.x*.5+(Math.random()-.5)*.2,e.y+t.y*.5-.16+(Math.random()-.5)*.15,e.z+t.z*.5+(Math.random()-.5)*.2,t.x*1.6+(Math.random()-.5)*1.6,t.y*1.6+Math.random()*.9,t.z*1.6+(Math.random()-.5)*1.6,.72,.54,.36,.035,.35+Math.random()*.25)}igniteTnt(t,e,i){if(this.world.getBlock(t,e,i)!==v.TNT)return!1;this.world.setBlock(t,e,i,0),this.tnt.prime(t,e,i,pa),wt.ignite();for(let s=0;s<8;s++)this.particles.emit(t+.5+(Math.random()-.5)*.5,e+1.05,i+.5+(Math.random()-.5)*.5,(Math.random()-.5)*.8,1.2+Math.random(),(Math.random()-.5)*.8,1,.85,.35,.04,.4);return!0}explode(t,e,i,s){let{removed:r,chain:o}=jd(this.world,t,e,i,s);r.length&&this.world.setBlocks(r);for(let[u,d,f]of o)this.world.setBlock(u,d,f,0),this.tnt.prime(u,d,f,.25+Math.random()*.55);let a=this.camera?this.camera.position.distanceTo(new L(t,e,i)):0;wt.explosion(a);for(let u=0;u<r.length&&u<4*26;u+=4)Math.random()>.35||this.particles.blockBreak(r[u],r[u+1],r[u+2],ei[v.STONE].id,3);for(let u=0;u<90;u++){let d=Math.random()*Math.PI*2,f=Math.acos(2*Math.random()-1),g=5+Math.random()*12;this.particles.emit(t,e,i,Math.sin(f)*Math.cos(d)*g,Math.cos(f)*g*.8+3,Math.sin(f)*Math.sin(d)*g,1,.75+Math.random()*.25,.25+Math.random()*.3,.09+Math.random()*.08,.35+Math.random()*.5)}this.smoke.burst(t,e,i,42,s*.5);let l=(u,d,f)=>{let g=Math.hypot(u-t,d-e,f-i);return g>s*1.6?0:Math.round((1-g/(s*1.6))*22)},c=this.player,h=l(c.pos.x,c.pos.y+.9,c.pos.z);if(h>0){c.damage(h,"mob");let u=c.pos.x-t,d=c.pos.z-i,f=Math.max(.4,Math.hypot(u,d));c.vel.x+=u/f*9,c.vel.z+=d/f*9,c.vel.y+=7,c.onGround=!1,this.ui.flashDamage()}for(let u of this.mobs.mobs){let d=l(u.pos.x,u.pos.y+.5,u.pos.z);if(d>0&&u.hurt(d)){for(let[f,g]of u.def.drops)this.inventory.add(f,g);this.addScore(u.def.score)}}this.addScore(Math.min(60,r.length/4))}get netPrefs(){return ae.meta.net||(ae.meta.net={host:"",room:"",name:""})}defaultPlayerName(){return me.getPlayerName()||`\u0418\u0433\u0440\u043E\u043A${Math.random()*900+100|0}`}setupNet(){let t=this.net;t.onStatus=(e,i)=>{let s={connecting:["mp.connecting",""],connected:["mp.connected","ok"],reconnecting:["mp.reconnecting","bad"],offline:["mp.offline",""],full:["mp.full","bad"],error:["mp.error","bad"]},[r,o]=s[e]||["mp.error","bad"];this.ui.setNetStatus(nt(r),o),e==="error"&&i==="no-host"&&this.ui.setNetStatus(nt("mp.noHost"),"bad")},t.onReady=(e,i)=>{this.startNetworkedWorld(e,i)},t.onBlock=(e,i,s,r)=>{this.applyRemoteBlock(e,i,s,r)},t.onBlocks=e=>{let i=[];for(let s=0;s+3<e.length;s+=4)i.push(e[s],e[s+1],e[s+2],e[s+3]);i.length&&(this.netEcho=!0,this.world.setBlocks(i),this.netEcho=!1)},t.onJoin=e=>this.ui.toast(nt("mp.joined",{name:e.name}),{kind:"gold",ttl:2600}),t.onLeave=()=>{},t.onChat=(e,i)=>this.ui.toast(`${e}: ${i}`,{ttl:4200})}bindWorldNet(){this.world.onLocalEdit=(t,e,i,s)=>{this.netEcho||!this.net.active||this.net.sendBlock(t,e,i,s)},this.world.onLocalEdits=t=>{this.netEcho||!this.net.active||this.net.sendBlocks(t)}}applyRemoteBlock(t,e,i,s){this.netEcho=!0,this.world.setBlock(t,e,i,s),this.netEcho=!1}joinRoom(t,e,i){if(!Us)return;let s=this.netPrefs;s.host=t,s.room=e,s.name=i||this.defaultPlayerName(),ae.saveLocalMeta(),this.net.connect(s.host,s.room,s.name)}leaveRoom(){this.net.disconnect(),this.remotes.clear(),this.ui.setNetStatus(nt("mp.offline"),""),this.ui.setNetHud(!1)}startNetworkedWorld(t,e){var s,r;let i=[];for(let o=0;o+3<e.length;o+=4)i.push([e[o],e[o+1],e[o+2],e[o+3]]);this.pendingNetEdits=i,this.seed=t,this.ui.hideAll(),this.ui.show("loading"),this.ui.setLoading(15,"loading.chunks"),this.despawnBoss(),this.mobs.clear(),this.tnt.clear(),this.drops.clear(),this.remotes.clear(),this.pendingSpawn=null,(r=(s=this.world).dispose)==null||r.call(s),this.world=new Js(this.scene,this.materials),this.world.setRenderDistance(Math.max(3,Math.round(this.viewDistance/16))),this.world.onReady=o=>{this.pendingSpawn=o},this.world.onFx=o=>this.onWorldFx(o),this.world.onArena=o=>this.registerArena(o),this.bindWorldNet(),this.world.init(t,[],null),this.waitForWorld(8e3).then(()=>{let o=[];for(let[l,c,h,u]of this.pendingNetEdits)o.push(l,c,h,u);o.length&&(this.netEcho=!0,this.world.setBlocks(o),this.netEcho=!1),this.pendingNetEdits=null,this.ui.hide("loading");let a=this.pendingSpawn||{x:.5,y:80,z:.5};this.player.reset(a.x,a.y,a.z),this.inventory.clear();for(let[l,c]of Ta)this.inventory.add(l,c);this.enterPlaying(),this.ui.toast(nt("mp.entered",{room:this.net.room}),{kind:"gold",ttl:3200})})}registerArena(t){var i;let e=`${t.x},${t.z}`;this.arenas.has(e)||this.arenas.set(e,{...t,defeated:((i=this.defeatedArenas)==null?void 0:i.has(e))||!1})}arenaHere(){let t=this.player.pos;for(let e of this.arenas.values())if(Math.hypot(t.x-e.x,t.z-e.z)<=ca+6)return e;return null}insideArena(t,e){for(let i of this.arenas.values())if(Math.hypot(t-i.x,e-i.z)<=ca+8)return!0;return!1}spawnBoss(t){if(this.boss)return;let e=this.world.surfaceY(t.x,t.z);this.boss=new La(this.scene,t.x+.5,e,t.z+.5),this.boss.arenaKey=`${t.x},${t.z}`,this.boss.onSound=i=>{let s=this.camera.position.distanceTo(this.boss.pos);wt.bossSound(i,s)},this.boss.onThrow=i=>{let s=this.boss;this.bossLogs.push(new Ia(this.scene,s.pos.x,s.pos.y+kh,s.pos.z,i))},this.boss.onShockwave=(i,s,r,o,a,l)=>this.bossShockwave(i,s,r,o,a,l),this.ui.toast(nt("boss.appears"),{kind:"red",ttl:3600}),wt.bossSound("roar",6)}despawnBoss(){if(this.boss){this.boss.dispose(),this.boss=null;for(let t of this.bossLogs)t.dispose();this.bossLogs.length=0,this.ui.setBossBar(null)}}bossShockwave(t,e,i,s,r,o){let a=this.player,l=Math.hypot(a.pos.x-t,a.pos.z-i),c=Math.abs(a.pos.y-e);if(l<s&&c<4){let h=1-l/s;r>0&&a.damage(Math.max(1,r*h),"mob");let u=a.pos.x-t||.1,d=a.pos.z-i||.1,f=Math.max(.4,Math.hypot(u,d));a.vel.x+=u/f*o*h,a.vel.z+=d/f*o*h,a.vel.y+=o*.45*h,a.onGround=!1,this.ui.flashDamage()}for(let h=0;h<48;h++){let u=h/48*Math.PI*2,d=s*.55;this.particles.emit(t+Math.cos(u)*.6,e+.25,i+Math.sin(u)*.6,Math.cos(u)*d,1.6+Math.random()*2.2,Math.sin(u)*d,.72,.58,.36,.07,.5+Math.random()*.4)}this.smoke.burst(t,e+.3,i,10,s*.3)}updateBoss(t){let e=this.arenaHere();if(e&&!e.defeated&&!this.boss&&this.spawnBoss(e),this.boss&&!e&&Math.hypot(this.player.pos.x-this.boss.home.x,this.player.pos.z-this.boss.home.z)>ca+40){this.despawnBoss();return}if(!this.boss){this.ui.setBossBar(null);return}this.boss.update(t,this.world,this.player),this.ui.setBossBar(this.boss);for(let i=this.bossLogs.length-1;i>=0;i--){let s=this.bossLogs[i];s.update(t,this.world,this.player),s.dead&&(s.dispose(),this.bossLogs.splice(i,1))}if(this.boss.dead){let i=this.boss;for(let[r,o]of yf)this.drops.spawnStack(r,o,{x:i.pos.x,y:i.pos.y+1.5,z:i.pos.z});this.smoke.burst(i.pos.x,i.pos.y+1.5,i.pos.z,30,2.2),this.addScore(1500),this.ui.toast(nt("boss.defeated"),{kind:"gold",ttl:4200}),wt.levelUp();let s=this.arenas.get(i.arenaKey);s&&(s.defeated=!0),(this.defeatedArenas||(this.defeatedArenas=new Set)).add(i.arenaKey),this.despawnBoss()}}onWorldFx(t){if(t.fx==="steam"){if(this.camera.position.distanceTo(new L(t.x,t.y,t.z))>34)return;this.smoke.burst(t.x+.5,t.y+1,t.z+.5,5,.5),Math.random()<.25&&wt.hiss()}}breakBlock(t){var r,o;let e=t.id;if(e===v.BEDROCK)return;let i=this.player.mode==="creative";if(e===v.CHEST||e===v.FURNACE){if(this.ui.isOpen("chest")||this.ui.isOpen("furnace"))return;for(let a of this.containers.takeAll(t.x,t.y,t.z,e))this.drops.spawnStack(a.id,a.count,{x:t.x+.5,y:t.y+.6,z:t.z+.5})}if(this.world.setBlock(t.x,t.y,t.z,0),this.particles.blockBreak(t.x,t.y,t.z,e),wt.breakBlock(Sr(e,v)),this.mining.active=!1,this.crack.visible=!1,ae.bumpStat("blocksMined"),!i)if(Dd(e,this.inventory.heldId)){let a=uh(e);a&&this.drops.spawnStack(a.id,a.count,{x:t.x+.5,y:t.y+.25,z:t.z+.5}),this.addScore(((r=ei[e])==null?void 0:r.score)||1),(((o=ei[e])==null?void 0:o.score)||0)>=45&&(this.ui.toast(`${nt("toast.mined")}: ${nt(Ti(e))}`,{icon:e,kind:"gold"}),wt.levelUp())}else this.ui.toast(nt("toast.needTool"),{kind:"red",ttl:1500});let s=this.world.getBlock(t.x,t.y+1,t.z);if(s&&un[s]===4&&(this.world.setBlock(t.x,t.y+1,t.z,0),!i)){let a=uh(s);a&&this.drops.spawnStack(a.id,a.count,{x:t.x+.5,y:t.y+1.25,z:t.z+.5})}}placeBlock(t,e){let i=t.x+t.nx,s=t.y+t.ny,r=t.z+t.nz;if(s<1||s>=128)return;let o=this.world.getBlock(i,s,r);if(o!==0&&!mi[o])return;let a=ei[e.id];if(a){if(a.placeOnGroundOnly){let l=this.world.getBlock(i,s-1,r);if(l===0||mi[l]||un[l]===4)return}if(a.solid){let l=this.player.pos,c=ve.width/2+.02,h=l.x+c>i&&l.x-c<i+1,u=l.z+c>r&&l.z-c<r+1,d=l.y+ve.height>s&&l.y<s+1;if(h&&d&&u)return}this.world.setBlock(i,s,r,e.id)&&(this.player.mode!=="creative"&&this.inventory.removeAt(this.inventory.selected,1),wt.place(Sr(e.id,v)),ae.bumpStat("blocksPlaced"),this.placeCooldown=.2)}}loop(t){var r,o;requestAnimationFrame(a=>this.loop(a));let e=t||performance.now(),i=(e-(this.lastTime||e))/1e3;if(this.lastTime=e,i>.12&&(i=.12),i<=0)return;if(this._fpsAcc+=i,this._fpsFrames++,this._fpsAcc>=.5&&(this.fps=this._fpsFrames/this._fpsAcc,this._fpsAcc=0,this._fpsFrames=0),this.holds.size){this.world&&this.world.setPaused&&this.world.setPaused(!0);return}let s=this.state==="playing"&&!this.ui.anyOpen;if(this.world&&this.world.setPaused&&this.world.setPaused(!(s||this.state==="menu")),s?(this.playTime+=i,this.sessionPlayTime+=i,this.ads.updateBoost(i),this.timeOfDay=(this.timeOfDay+i/th)%1,this.stepGame(i)):this.state==="menu"&&(this.timeOfDay=(this.timeOfDay+i/(th*2))%1,this.updateMenuCamera(i)),this.updateSkyAndFog(i),this.state!=="loading"&&(this.particles.update(i),this.smoke.update(i),s||this.state==="menu")){let a=this.world.getBiome(this.camera.position.x,this.camera.position.z);this.weather.update(i,this.camera,a,wt);let l=s&&this.player.pos.y<this.world.getHeight(this.player.pos.x,this.player.pos.z)-1;wt.setRain(this.weather.intensity*(l?.25:1)*(s?1:.5))}this.state!=="loading"&&((r=this.rt)!=null&&r.enabled&&this.rt.update(i,this.world,this.camera.position.x,this.camera.position.z),(o=this.rt)!=null&&o.active?this.rt.render():this.renderer.render(this.scene,this.camera),this.renderHand(i,s)),(this.state==="playing"||this.state==="paused")&&this.ui.updateHud(i,this.fps),wt.updateMusic(i,this.isNight)}updatePlayerModel(t){let e=this.playerModel;if(!e)return;let i=this.viewMode!==0&&!this.player.dead&&(this.camDist??4)>1.5;if(e.setVisible(i),!i)return;let s=this.player;e.setPosition(s.pos.x,s.pos.y,s.pos.z),e.setHeld(this.inventory.heldId),e.setEating(this.eatTimer>0?this.eatTimer:0),e.update(t,{speed:Math.hypot(s.vel.x,s.vel.z),yaw:s.yaw,pitch:s.pitch,onGround:s.onGround,inWater:s.inWater,flying:s.flying,sneaking:s.sneaking})}renderHand(t,e){if(!this.hand||this.viewMode!==0||!((this.state==="playing"||this.state==="paused")&&!this.player.dead))return;this.hand.setItem(this.inventory.heldId);let s=this.player,r=e&&s.onGround&&Math.hypot(s.vel.x,s.vel.z)>.6?Math.min(1,Math.hypot(s.vel.x,s.vel.z)/ve.walk):0,o=this.world.getHeight(s.pos.x,s.pos.z),l=s.pos.y>o-1.5?Math.max(.4,this.sky.sunAmount):.45;this.hand.update(t,{walking:r,sprinting:s.sprinting,light:l}),this.renderer.autoClear=!1,this.renderer.clearDepth(),this.renderer.render(this.hand.scene,this.hand.camera),this.renderer.autoClear=!0}get isNight(){return this.timeOfDay<.24||this.timeOfDay>.78}stepGame(t){let e=this.player;this.controls.syncTouchMovement(),this.controls.applyLook(e);let i=e.inWater,s=e.health;if(e.update(t,this.world,this.controls.state,this.settings),e.dead){this.onDeath();return}if(e.health<s&&(wt.hurt(),this.ui.flashDamage()),!i&&e.inWater&&(wt.splash(),this.particles.splash(e.pos.x,e.pos.y,e.pos.z)),e.onGround&&(this.controls.state.forward||this.controls.state.back||this.controls.state.left||this.controls.state.right)&&(this._stepAcc=(this._stepAcc||0)+t*(e.sprinting?2.4:1.7),this._stepAcc>1)){this._stepAcc=0;let a=Sr(e.standingOn,v);wt.step(a),e.standingOn&&this.particles.footstep(e.pos.x,e.pos.y,e.pos.z,e.standingOn)}if(this.world.update(e.pos.x,e.pos.z),this.mobs.update(t,this.world,e,this.isNight,1),this.tnt.update(t,this.world),this.drops.update(t,this.world,e),this.containers.update(t),this.updateBoss(t),this.net.active?(this.net.update(t,e,this.inventory.heldId),this.remotes.update(t,this.net.players),this.ui.setNetHud(!0,`${this.net.playerCount} \xB7 ${this.net.latency} ms`,!1)):this.remotes.entries.size&&(this.remotes.clear(),this.ui.setNetHud(!1)),this.ui.isOpen("furnace")&&this.ui.updateFurnaceGauges(),this.ui.anyOpen)this.ui.setInteractHint(null);else{let a=this.targetedInteractive();this.ui.setInteractHint(a?nt(Ti(a.id)):null)}this.tnt.list.length&&(this._fuseTimer=(this._fuseTimer||0)-t,this._fuseTimer<=0&&(this._fuseTimer=.28,wt.fuse())),this.updateInteraction(t),this.updateCamera(t),this.updatePlayerModel(t);let r=this.world.getBiome(e.pos.x,e.pos.z);this.biomesSeen.has(r)||(this.biomesSeen.add(r),this.addScore(120),this.ui.toast(`${nt("toast.newBiome")}: ${nt(`biome.${la[r]||"plains"}`)}`,{kind:"gold"}),wt.levelUp());let o=Math.floor(e.pos.y);if(o<this.deepestY){let a=this.deepestY;this.deepestY=o,a!==999&&o<20&&Math.floor(a/10)!==Math.floor(o/10)&&(this.addScore(30),this.ui.toast(`${nt("toast.deepDive")}: Y ${o}`,{kind:"gold",ttl:1800}))}this.ui.setUnderwater(e.headInWater),performance.now()-this.lastSave>3e4&&(this.lastSave=performance.now(),this.saveGame(),this.submitScore())}swingArm(t=!1){this.hand.swing(t),this.playerModel.triggerSwing()}toggleView(){this.state==="playing"&&(this.viewMode=this.viewMode===0?1:0,wt.click())}updateCamera(t){let e=this.player,i=e.onGround&&!e.flying?Math.sin(e.bob*2.2)*.038:0,s=e.onGround&&!e.flying?Math.cos(e.bob*1.1)*.028:0;this.viewMode!==0?this.updateThirdPersonCamera():(this.camera.rotation.set(e.pitch,e.yaw,0,"YXZ"),this.camera.position.set(e.pos.x+Math.cos(e.yaw)*s,e.eyeY+i,e.pos.z-Math.sin(e.yaw)*s)),this.camera.fov!==this.settings.fov+(e.sprinting?4:0)&&(this.camera.fov+=(this.settings.fov+(e.sprinting?4:0)-this.camera.fov)*Math.min(1,t*8),this.camera.updateProjectionMatrix())}updateThirdPersonCamera(){let t=this.player,e=new L(t.pos.x,t.eyeY-.1,t.pos.z);this.camera.rotation.set(t.pitch,t.yaw,0,"YXZ");let i=new L(0,0,1).applyQuaternion(this.camera.quaternion),s=4,r=this.world.raycast(e,i,s+.4,!1);r&&(s=Math.max(1.9,r.dist-.5)),this.camera.position.copy(e).addScaledVector(i,s),this.camDist=s}updateMenuCamera(t){let e=this.pendingSpawn||{x:.5,y:80,z:.5};this.menuAngle+=t*.06;let i=22,s=e.y+9;this.camera.position.set(e.x+Math.cos(this.menuAngle)*i,s,e.z+Math.sin(this.menuAngle)*i),this.camera.lookAt(e.x,e.y+1,e.z),this.world.update(this.camera.position.x,this.camera.position.z)}updateSkyAndFog(t){var a,l;if(!this.sky)return;this.sky.update(t,this.timeOfDay,this.camera);let e=this.materials.shared;e.uTime.value+=t;let i=this.weather?this.weather.skyDamp:1;e.uSun.value=this.sky.sunAmount*i,e.uSkyLight.value.copy(this.sky.skyLight),e.uAmbient.value.copy(this.sky.ambient),e.uFogColor.value.copy(this.sky.fogColor);let s=(a=this.player)==null?void 0:a.headInWater;e.uUnderwater.value=s?1:0;let r=s?22:this.viewDistance||128;e.uFogFar.value=r,e.uFogNear.value=s?.5:r*.42,this.renderer.setClearColor(this.sky.fogColor,1),(l=this.rt)==null||l.setSky(this.sky.sunDir,e.uSun.value,this.sky.skyLight);let o=this.sky.sunAmount;this.hemi.intensity=.35+.85*o,this.hemi.color.copy(this.sky.skyLight),this.sun.intensity=.15+.95*o,this.sun.position.copy(this.sky.sunDir).multiplyScalar(60).add(this.camera.position),this.sun.target.position.copy(this.camera.position),this.sun.target.updateMatrixWorld()}},Ef=new Uh;window.__craftblock=Ef;document.addEventListener("contextmenu",n=>n.preventDefault());document.addEventListener("selectstart",n=>n.preventDefault());document.addEventListener("dragstart",n=>n.preventDefault());document.addEventListener("gesturestart",n=>n.preventDefault());document.addEventListener("dblclick",n=>n.preventDefault());Ef.boot().catch(n=>{console.error("[craftblock] boot failed",n);let t=document.getElementById("loader-text");t&&(t.textContent=String(n&&n.message?n.message:n))});})();
