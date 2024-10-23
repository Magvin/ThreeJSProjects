import{c as ie,j as n,T as re,a as se,k as K,b as g,r as ae,d as s,n as v,R as u,e as Y,f as w,g as k,C as le,G as ce,h as de,i as pe,l as me}from"./vendor.js";import"./__commonjsHelpers__.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))p(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&p(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const i={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400};`${i.xs}`,`${i.sm}`,`${i.md}`,`${i.lg}`,`${i.xl}`,`${i.xxl}`;const xe={paper:{borderRadius:"4px"}},ge={borderRadius:"4px",height:{large:44,medium:34,small:24},padding:{large:24,medium:16,small:16},fontSize:{large:14,medium:14,small:13},variants:{text:{hover:.1,active:.1,outlineFade:.3,focusOutline:2,lighten:.52,darken:.04},outlined:{hover:.1,active:.1,outlineFade:.3,focusOutline:2,lighten:.42,darken:.04,border:1},contained:{hover:.42,active:.02,outlineFade:.3,focusOutline:2,lighten:.42,darken:.04}}},ue={hover:.1,focus:.1,outlineFade:.3,focusOutline:2,unActiveBorder:1},he={outlineFade:.3,focusOutline:2,borderRadius:4,variants:{filled:{border:{darken:.04}},outlined:{border:{darken:.04}}}},fe=({gray200:e})=>({colors:{gray:e}}),ye={button:{borderRadius:34,padding:8,outlineFade:.3,focusOutline:2,hover:.1},buttonText:{borderRadius:4,padding:"4.5px 8px"},borderRadius:4,borderWidth:1,outlineFade:.3,focusOutline:2,sizes:{small:{iconWidth:20,iconHeight:20,fontSize:14,lineHeight:18,height:32,label:{fontSize:14,lineHeight:17}},medium:{iconWidth:20,iconHeight:20,fontSize:14,lineHeight:18,height:40,label:{fontSize:14,lineHeight:17}}}},be={default:"#cbe7f8",active:"#2226b5"},ve={paper:{borderRadius:"4px"}},$e=()=>({large:{height:24,borderRadius:24,thumb:{offset:2,diameter:20}},small:{height:12,borderRadius:12,thumb:{offset:2,diameter:8}},medium:{height:16,borderRadius:16,thumb:{offset:2,diameter:12}}}),J="cubic-bezier(0.4, 0, 0.2, 1)",Q="0.15s",Fe=`${Q} ${J}`,E="#2622B5",C="#273BF4",we="#D0D5F4",ke="#EDEFFF",A="#F1F2FB",Ee="#0C0B2E",y="#2B2A40",Ce="#515773",Ae="#8086A4",Re="#959CBB",je="#B2B7CF",We="#D6D8E3",Pe="#EFF0F2",Be="#F8F8FA",R="#F3335C",Se="#FEEBEF",De="#FEF5F7",Le="#FB6F43",j="#F58531",Oe="#FEF3EB",Ue="#FEF9F4",W="#44C07C",Me="#EDF9F2",ze="#F5FCF8",Te="#FFFFFF",Ge="#151617",He="#363738",_e="#6CAAF8",Ie="#1CCA7D",P={white:Te,black:Ge,vulkan:He,tomatoRed:Le,text:y,primary700:E,primary500:C,primary300:we,primary200:ke,primary100:A,primary:C,primaryHover:E,gray900:Ee,gray800:y,gray700:Ce,gray600:Ae,gray500:Re,gray400:je,gray300:We,gray200:Pe,gray100:Be,gray:y,error500:R,error200:Se,error100:De,error:R,warning500:j,warning200:Oe,warning100:Ue,warning:j,success500:W,success200:Me,success100:ze,success:W,info:A,blue400:_e,green:Ie},B=`(max-width: ${i.xs-1}px)`,S=`(max-width: ${i.sm-1}px)`,D=`(max-width: ${i.md-1}px)`,L=`(max-width: ${i.lg-1}px)`,O=`(max-width: ${i.xl-1}px)`,U=`(max-width: ${i.xxl-1}px)`,M=`(min-width: ${i.xs}px)`,z=`(min-width: ${i.sm}px)`,T=`(min-width: ${i.md}px)`,G=`(min-width: ${i.lg}px)`,H=`(min-width: ${i.xl}px)`,b=`(min-width: ${i.xxl}px)`,ee={colors:P,fontFamily:"'Inter', Helvetica, Arial, sans-serif",components:{input:ye,autocomplete:xe,map:be,drawer:fe(P),checkbox:ue,chip:he,button:ge,menu:ve,switch:$e()},easing:J,easingDuration:Q,basicTransition:Fe,adaptive:{breakpointValues:i,mobileFirst:{xs:`@media ${M}`,sm:`@media ${z}`,md:`@media ${T}`,lg:`@media ${G}`,xl:`@media ${H}`,xxl:`@media ${b}`},xxs:`@media ${B}`,xs:`@media ${S}`,sm:`@media ${D}`,md:`@media ${L}`,lg:`@media ${O}`,xl:`@media ${U}`,xxl:`@media ${b}`,xxsOnly:`@media ${B}`,xsOnly:`@media ${M} and ${S}`,smOnly:`@media ${z} and ${D}`,mdOnly:`@media ${T} and ${L}`,lgOnly:`@media ${G} and ${O}`,xlOnly:`@media ${H} and ${U}`,xxlOnly:`@media ${b}`,container:{xxs:"100%",xs:"100%",sm:"540px",md:"720px",lg:"960px",xl:"1140px",xxl:"1320px"}}},te=ee,Ne=ie({}),Ve=({theme:e=ee,children:t})=>n.jsx(re,{theme:Ne,children:n.jsx(se,{theme:e??{},children:t})}),Ze=K`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`,Xe=({theme:e})=>g`
	#nprogress {
		pointer-events: none;
		width: 100%;
		position: absolute;
		top: 0;
		z-index: 10000;

		.bar {
			background: ${e.colors.primary};
			height: 2px;
			left: 0;
			position: fixed;
			top: 0;
			width: 100%;
			z-index: 1031;
		}

		.peg {
			box-shadow:
				0 0 10px ${e.colors.primary},
				0 0 5px ${e.colors.primary};
			display: block;
			height: 100%;
			opacity: 1;
			position: absolute;
			right: 0;
			transform: rotate(3deg) translate(0px, -4px);
			width: 100px;
		}

		.spinner {
			display: block;
			position: fixed;
			right: 15px;
			top: 15px;
			z-index: 1031;
		}

		.spinner-icon {
			animation: ${Ze} 400ms linear infinite;
			border: solid 2px transparent;
			border-left-color: ${e.colors.primary};
			border-top-color: ${e.colors.primary};
			border-radius: 50%;

			box-sizing: border-box;
			height: 18px;
			width: 18px;
		}
	}

	.nprogress-custom-parent {
		overflow: hidden;
		position: relative;

		#nprogress {
			.spinner {
				position: absolute;
			}

			.bar {
				position: absolute;
			}
		}
	}
`,qe=()=>g`
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	address,
	code,
	del,
	dfn,
	em,
	ins,
	q,
	samp,
	small,
	strong,
	sub,
	sup,
	b,
	i,
	hr,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	legend,
	label {
		border: 0;
		margin: 0;
		padding: 0;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	em,
	small,
	strong,
	sub,
	sup,
	b,
	i {
		font-size: 100%;
	}

	article,
	aside,
	canvas,
	figure,
	figure img,
	figcaption,
	hgroup,
	footer,
	header,
	nav,
	section,
	audio,
	svg,
	img,
	video {
		display: block;
	}

	a img {
		border: 0;
	}

	:focus {
		outline: 0;
	}

	html {
		height: 100%;
	}

	body {
		letter-spacing: unset;

		* {
			letter-spacing: unset !important;
		}
	}
`,Ke=({theme:e})=>g`
	${Xe({theme:e})}
	${qe()}
	:root {
		//disable zoom
		touch-action: pan-x pan-y;
		height: 100%;
	}

	* {
		box-sizing: border-box;
		font-family: ${e.fontFamily} !important;
	}

	body {
		height: 100lvh;
		min-height: 100%;
		display: flex;
		flex-direction: column;
		position: relative;
		background-color: ${e.colors.pageBackground};
		color: ${e.colors.text};

		#__next {
			flex-grow: 2;
			display: flex;
			flex-direction: column;
			position: relative;
		}

		-webkit-tap-highlight-color: ${ae(e.colors.primary,.1)};
		@media only screen and (max-width: 470px) {
			#feedback-widget {
				left: 0;
			}

			#feedback-widget_iframe {
				width: 100vw !important;
			}
		}
	}
`,Ye="#B01010",Je="#CF595F",Qe="#FB6F43",et="#FC7B7B",tt="#FC4DE4",_="#FFFFFF",I="#151617",nt="#262628",ot="#1E1E1C",it="#363738",rt="#6CAAF8",st="#F6F7FA",at="#EAEDF5",lt="#F4F6F9",ct="#999999",dt="#666666",N="#5E6064",pt="#4D4D4D",mt="#343433",xt="#333333",gt="#000000",V="#1CCA7D",ut="#217854",ht="#BD4DFC",ft="#FC9A7B",yt="#644DFC",bt={...te.colors,black:I,black850:ot,black50:nt,vulkan:it,text:_,red:Ye,red400:Je,gray:N,gray50:st,gray100:at,gray150:lt,gray500:ct,gray600:dt,gray650:N,gray700:pt,gray750:mt,gray800:xt,gray900:gt,blue400:rt,green:V,green800:ut,white:_,primary:V,blue500:yt,tomatoRed:Qe,salmonRed:et,glamPink:tt,orange:ft,purple:ht,pageBackground:I},vt={...te,fontFamily:"Inter",checkBox:{labelGap:10},switch:{labelGap:10}},$t={...vt,colors:bt},Z={...$t},Ft=e=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",style:{background:"0 0"},viewBox:"0 0 100 100",...e},s.createElement("circle",{cx:50,cy:50,r:35,fill:"none",stroke:"#fff",strokeDasharray:"164.934 56.978",strokeWidth:10,transform:"rotate(72 50 50)"})),wt={shouldForwardProp:e=>!e.startsWith("$")},kt=K`
  0% {
    transform-origin: center;
    transform: rotate(0deg);
  }
  100% {
    transform-origin: center;
    transform: rotate(360deg);
  }
`,Et=({$large:e})=>g`
	display: inline-flex;
	width: ${e?48:30}px;
	height: ${e?48:30}px;
	user-select: none;
`,Ct=({color:e="primary",large:t=!1,...a})=>n.jsx(At,{$large:t,color:e,...a}),At=v(Ft,wt)`
	${e=>Et(e)};

	[stroke] {
		stroke: ${({theme:e,color:t="primary"})=>e.colors[t]} !important;
		animation: ${kt} 1s linear infinite;
	}
`,Rt={AuthorizationError:"Authorization error.",SessionExpired:"Session expired. Please log in again."},jt={sessionChecker:{sessionExpired:"Session Expired"},request:Rt},Wt={titleDivider:" | ",titleSuffix:"LandVault",appleMobileWebAppTitle:"LandVault",siteName:"Agora",auth:{signIn:"Please sign this message to confirm your identity."}},Pt={webgl:{title:"Landvault | WebGL Experience",loading:"We are loading experience...",missingWebGl:"Upload Unity WebGL build"},pixel:{title:"Landvault | Pixel Streaming Experience",loading:"We are loading experience...",missingPixelBuild:"Missing Pixel Build",clickToPlay:"Click to play",createSession:"Create a new session",noAvailableServers:"No Available server",launching:"Launching server",errorMessages:{server:"Availability server is down"}}},Bt={global:Wt,pages:{player:Pt},errors:jt,time:{time:(e,t)=>`${e}m ${t}s`,shortMinuteTime:e=>`${e}m`}},St={en:Bt},Dt=u({key:"Labels",default:St.en}),Lt=e=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 32",...e},s.createElement("path",{fill:"#000",d:"M32 32H0V0h32v32Z"}),s.createElement("path",{fill:"#fff",d:"M25.836 25.573h-3.94v-7.054h3.935l.005 7.054Zm-.002-8.061h-3.935l.002-4.003h3.933v4.003Zm-6.884-7.04-.002-4.016h6.886v6.032h-3.935l.002-2.016H18.95Zm-.983 8.048h-3.934v7.053h3.934v-7.054Zm-3.934-1.008h3.934V6.427h-3.934v11.085Zm-7.871 0h3.935v8.06H6.162v-8.06Zm3.935-1.008H6.162V6.427h6.886V9.45h-2.951v7.054Z"})),ne=u({key:"Atom of specific experience webgl build",default:{streamingAssetsUrl:"",loaderUrl:"",frameworkUrl:"",codeUrl:"",dataUrl:""}}),Ot=({labels:e})=>{const t=Y(ne),{loading:a,missingWebGl:p}=e,[o,r]=s.useState(window.devicePixelRatio),c=w.useUnityContext({loaderUrl:encodeURI(t==null?void 0:t.loaderUrl),codeUrl:encodeURI(t==null?void 0:t.codeUrl),frameworkUrl:encodeURI(t==null?void 0:t.frameworkUrl),dataUrl:encodeURI(t==null?void 0:t.dataUrl),webglContextAttributes:{preserveDrawingBuffer:!0}}),{unityProvider:h,isLoaded:m,loadingProgression:x}=c,f=c&&Math.round(x??0*100);return s.useEffect(()=>{const l=()=>r(window.devicePixelRatio),d=window.matchMedia(`screen and (resolution: ${o}dppx)`);return d.addEventListener("change",l),()=>{d.removeEventListener("change",l)}},[o]),t!=null&&t.loaderUrl?n.jsxs(X,{children:[m===!1&&n.jsxs("div",{className:"loadingOverlay",children:[n.jsx(Lt,{}),n.jsxs("p",{children:[a,f," %"]})]}),n.jsx(w.Unity,{className:"unity",unityProvider:h,style:{cursor:"none"},devicePixelRatio:o})]}):n.jsx(X,{children:p})},X=v.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	justify-content: center;
	align-items: center;
	position: relative;
	.unity {
		width: 100%;
		height: calc(100% - 80px);
		top: 0;
		position: absolute;
	}
	.loadingOverlay {
		position: absolute;
		display: flex;
		flex-direction: column;
		gap: 16px;
		text-align: center;
	}
	svg {
		width: 320px;
		height: 320px;
		animation: float 5s linear infinite;
	}
	@keyframes float {
		0% {
			transform: translatey(0px);
		}
		50% {
			transform: translatey(-20px);
		}
		100% {
			transform: translatey(0px);
		}
	}
`,Ut=()=>{const e=Y(Dt);return n.jsx(Ot,{labels:e.pages.player.webgl})};u({key:"Atom of loaded experiences",default:[]});const Mt=u({key:"Atom of specific experience",default:{}}),zt=()=>{const[e,t]=s.useState(null),[a,p]=k(Mt),[o,r]=k(ne),c=s.useCallback(async m=>{const f=await fetch(`https://services-dev.landvault.io/meta-v1/experiences/${m}`).then(d=>d.json()),{data:l}=f;if(l){if(p(l),l!=null&&l.assets){const{assets:d}=l,$={};Object.keys(d).forEach(F=>{const oe=d[F];$[F]=oe.replace("/api/cdn?url=","https://lvcdn.landvault.io")}),r($)}t(!1)}},[]);s.useEffect(()=>{var x;t(!0);const m=(x=document.querySelector("script#landvaultWidget"))==null?void 0:x.getAttribute("experienceID");m&&c(m)},[]);const h=s.useMemo(()=>{switch(a.deployment){case"webgl":return n.jsx(Ut,{});case"pixel":return n.jsx("span",{children:"Pixel"});default:return null}},[a]);return e?n.jsx(q,{children:n.jsx(Ct,{})}):a.deployment==="webgl"?n.jsx(q,{children:h}):n.jsx("span",{children:"No experience is deployed"})},q=v.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100lvh;

	canvas.unity {
		height: 100%;
	}
`;function Tt(){return n.jsxs(n.Fragment,{children:[n.jsx(le,{}),n.jsxs(Ve,{theme:Z,children:[n.jsx(ce,{styles:Ke({theme:Z})}),n.jsx(de,{children:n.jsx(zt,{})})]})]})}pe.createRoot(document.getElementById("landvaultWidget-root")).render(n.jsx(me.StrictMode,{children:n.jsx(Tt,{})}));
