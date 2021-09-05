(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[324],{1065:function(e,t,r){"use strict";r.d(t,{h:function(){return F}});var n=r(63),a=r(3808),o=r(7294);function i(e,t){if(null!=e)if((0,a.mf)(e))e(t);else try{e.current=t}catch(r){throw new Error("Cannot assign value '"+t+"' to ref '"+e+"'")}}function l(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return e=>{t.forEach((t=>i(t,e)))}}var s=r(5505),c=r(8554),u=r.n(c),d=r(658),f=r(9590),p=r.n(f),m=r(4738),h=r(9676);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function g(){return v({},(0,m.If)(),{theme:(0,h.Fg)()})}function y(e,t,r){var n,a;void 0===t&&(t={}),void 0===r&&(r={});var{styleConfig:i}=t,l=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(t,["styleConfig"]),{theme:c,colorMode:f}=g(),m=(0,s.Wf)(c,"components."+e),h=i||m,v=u()({theme:c,colorMode:f},null!=(n=null==h?void 0:h.defaultProps)?n:{},(0,s.YU)((0,s.CE)(l,["children"]))),y=(0,o.useRef)({});return(0,o.useMemo)((()=>{if(h){var e,t,n,a,o,i,l=(0,d.Pu)(null!=(e=h.baseStyle)?e:{},v),s=(0,d.Pu)(null!=(t=null==(n=h.variants)?void 0:n[v.variant])?t:{},v),c=(0,d.Pu)(null!=(a=null==(o=h.sizes)?void 0:o[v.size])?a:{},v),f=u()({},l,c,s);null!=(i=r)&&i.isMultiPart&&h.parts&&h.parts.forEach((e=>{var t;f[e]=null!=(t=f[e])?t:{}})),p()(y.current,f)||(y.current=f)}return y.current}),[h,v,null==(a=r)?void 0:a.isMultiPart])}var b=r(5284),k=r(3105),x=r(4461),_=r(8500);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var[O,C]=(0,_.k)({strict:!1,name:"ButtonGroupContext"}),S=(0,n.G)(((e,t)=>{var{size:r,colorScheme:n,variant:a,className:i,spacing:l="0.5rem",isAttached:s,isDisabled:c}=e,u=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["size","colorScheme","variant","className","spacing","isAttached","isDisabled"]),d=(0,x.cx)("chakra-button__group",i),f=o.useMemo((()=>({size:r,colorScheme:n,variant:a,isDisabled:c})),[r,n,a,c]),p={display:"inline-flex"};return p=w({},p,s?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:l}}),o.createElement(O,{value:f},o.createElement(k.m$.div,w({ref:t,role:"group",__css:p,className:d},u)))}));a.Ts&&(S.displayName="ButtonGroup");var E=r(917),j={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},P=(0,k.m$)("span",{baseStyle:j});a.Ts&&(P.displayName="VisuallyHidden");var N=(0,k.m$)("input",{baseStyle:j});a.Ts&&(N.displayName="VisuallyHiddenInput");function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var A=(0,E.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),M=(0,n.G)(((e,t)=>{var r=y("Spinner",e),n=(0,b.Lr)(e),{label:a="Loading...",thickness:i="2px",speed:l="0.45s",emptyColor:s="transparent",className:c}=n,u=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(n,["label","thickness","speed","emptyColor","className"]),d=(0,x.cx)("chakra-spinner",c),f=T({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:i,borderBottomColor:s,borderLeftColor:s,animation:A+" "+l+" linear infinite"},r);return o.createElement(k.m$.div,T({ref:t,__css:f,className:d},u),a&&o.createElement(P,null,a))}));function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}a.Ts&&(M.displayName="Spinner");var I=e=>{var{label:t,placement:r,children:n=o.createElement(M,{color:"currentColor",width:"1em",height:"1em"}),className:a,__css:i}=e,l=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["label","placement","spacing","children","className","__css"]),s=(0,x.cx)("chakra-button__spinner",a),c="start"===r?"marginEnd":"marginStart",u=o.useMemo((()=>R({display:"flex",alignItems:"center",position:t?"relative":"absolute",[c]:t?"0.5rem":0,fontSize:"1em",lineHeight:"normal"},i)),[i,t,c]);return o.createElement(k.m$.div,R({className:s},l,{__css:u}),n)};function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}a.Ts&&(I.displayName="ButtonSpinner");var z=e=>{var{children:t,className:r}=e,n=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["children","className"]),a=o.isValidElement(t)?o.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,i=(0,x.cx)("chakra-button__icon",r);return o.createElement(k.m$.span,L({display:"inline-flex",alignSelf:"center",flexShrink:0},n,{className:i}),a)};function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}a.Ts&&(z.displayName="ButtonIcon");var G=(0,n.G)(((e,t)=>{var r=C(),n=y("Button",B({},r,e)),a=(0,b.Lr)(e),{isDisabled:i=(null==r?void 0:r.isDisabled),isLoading:s,isActive:c,isFullWidth:d,children:f,leftIcon:p,rightIcon:m,loadingText:h,iconSpacing:v="0.5rem",type:g,spinner:_,spinnerPlacement:w="start",className:O,as:S}=a,E=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(a,["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"]),j=o.useMemo((()=>{var e,t=u()({},null!=(e=null==n?void 0:n._focus)?e:{},{zIndex:1});return B({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:d?"100%":"auto"},n,!!r&&{_focus:t})}),[n,r,d]),{ref:P,type:N}=function(e){var[t,r]=o.useState(!e);return{ref:o.useCallback((e=>{e&&r("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(S),T={rightIcon:m,leftIcon:p,iconSpacing:v,children:f};return o.createElement(k.m$.button,B({disabled:i||s,ref:l(t,P),as:S,type:null!=g?g:N,"data-active":(0,x.PB)(c),"data-loading":(0,x.PB)(s),__css:j,className:(0,x.cx)("chakra-button",O)},E),s&&"start"===w&&o.createElement(I,{className:"chakra-button__spinner--start",label:h,placement:"start"},_),s?h||o.createElement(k.m$.span,{opacity:0},o.createElement(D,T)):o.createElement(D,T),s&&"end"===w&&o.createElement(I,{className:"chakra-button__spinner--end",label:h,placement:"end"},_))}));function D(e){var{leftIcon:t,rightIcon:r,children:n,iconSpacing:a}=e;return o.createElement(o.Fragment,null,t&&o.createElement(z,{marginEnd:a},t),n,r&&o.createElement(z,{marginStart:a},r))}function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}a.Ts&&(G.displayName="Button");var F=(0,n.G)(((e,t)=>{var{icon:r,children:n,isRound:a,"aria-label":i}=e,l=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["icon","children","isRound","aria-label"]),s=r||n,c=o.isValidElement(s)?o.cloneElement(s,{"aria-hidden":!0,focusable:!1}):null;return o.createElement(G,W({padding:"0",borderRadius:a?"full":void 0,ref:t,"aria-label":i},l),c)}));a.Ts&&(F.displayName="IconButton")},2300:function(e,t,r){"use strict";var n=r(3105),a=r(3808),o=r(7294);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var l=e=>{var{type:t="checkbox",_hover:r,_invalid:a,_disabled:l,_focus:s,_checked:c,_child:u={opacity:0},_checkedAndChild:d={opacity:1},_checkedAndDisabled:f,_checkedAndFocus:p,_checkedAndHover:m,children:h}=e,v=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["type","_hover","_invalid","_disabled","_focus","_checked","_child","_checkedAndChild","_checkedAndDisabled","_checkedAndFocus","_checkedAndHover","children"]),g="input[type="+t+"]:checked:disabled + &",y="input[type="+t+"]:checked:hover:not(:disabled) + &",b="input[type="+t+"]:checked:focus + &",k="input[type="+t+"]:disabled + &",x="input[type="+t+"]:focus + &",_="input[type="+t+"]:hover:not(:disabled):not(:checked) + &",w="input[type="+t+"]:checked + &, input[type="+t+"][aria-checked=mixed] + &",O="input[type="+t+"][aria-invalid=true] + &",C="& > *";return o.createElement(n.m$.div,i({},v,{"aria-hidden":!0,__css:{display:"inline-flex",alignItems:"center",justifyContent:"center",transitionProperty:"common",transitionDuration:"fast",flexShrink:0,[x]:s,[_]:r,[k]:l,[O]:a,[g]:f,[b]:p,[y]:m,[C]:u,[w]:i({},c,{[C]:d})}}),h)};a.Ts&&(l.displayName="ControlBox")},8017:function(e,t,r){"use strict";r.d(t,{xu:function(){return c}});var n=r(3105),a=r(63),o=r(3808),i=r(7294);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var c=(0,n.m$)("div");o.Ts&&(c.displayName="Box");var u=(0,a.G)(((e,t)=>{var{size:r,centerContent:n=!0}=e,a=s(e,["size","centerContent"]),o=n?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return i.createElement(c,l({ref:t,boxSize:r,__css:l({},o,{flexShrink:0,flexGrow:0})},a))}));o.Ts&&(u.displayName="Square");var d=(0,a.G)(((e,t)=>{var{size:r}=e,n=s(e,["size"]);return i.createElement(u,l({size:r,ref:t,borderRadius:"9999px"},n))}));o.Ts&&(d.displayName="Circle")},9345:function(e,t,r){"use strict";r.d(t,{r:function(){return c}});var n=r(63),a=r(3105),o=r(3808),i=r(7294);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var c=(0,n.G)(((e,t)=>{var{area:r,templateAreas:n,gap:o,rowGap:c,columnGap:u,column:d,row:f,autoFlow:p,autoRows:m,templateRows:h,autoColumns:v,templateColumns:g}=e,y=s(e,["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"]),b={display:"grid",gridArea:r,gridTemplateAreas:n,gridGap:o,gridRowGap:c,gridColumnGap:u,gridAutoColumns:v,gridColumn:d,gridRow:f,gridAutoFlow:p,gridAutoRows:m,gridTemplateRows:h,gridTemplateColumns:g};return i.createElement(a.m$.div,l({ref:t,__css:b},y))}));o.Ts&&(c.displayName="Grid")},51:function(e,t,r){"use strict";r.d(t,{gC:function(){return h}});var n=r(3105),a=r(63),o=r(4461),i=r(3808),l=r(7294);var s=r(5505);Object.freeze(["base","sm","md","lg","xl","2xl"]);function c(e,t){return(0,i.kJ)(e)?e.map((e=>null===e?null:t(e))):(0,i.Kn)(e)?(0,s.Yd)(e).reduce(((r,n)=>(r[n]=t(e[n]),r)),{}):null!=e?t(e):null}var u="& > *:not(style) ~ *:not(style)";function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f=e=>l.createElement(n.m$.div,d({className:"chakra-stack__item"},e,{__css:d({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)})),p=(0,a.G)(((e,t)=>{var{isInline:r,direction:a,align:i,justify:s,spacing:p="0.5rem",wrap:m,children:h,divider:v,className:g,shouldWrapChildren:y}=e,b=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"]),k=r?"row":null!=a?a:"column",x=l.useMemo((()=>function(e){var{spacing:t,direction:r}=e,n={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:r,[u]:c(r,(e=>n[e]))}}({direction:k,spacing:p})),[k,p]),_=l.useMemo((()=>function(e){var{spacing:t,direction:r}=e,n={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":c(r,(e=>n[e]))}}({spacing:p,direction:k})),[p,k]),w=!!v,O=!y&&!w,C=function(e){return l.Children.toArray(e).filter((e=>l.isValidElement(e)))}(h),S=O?C:C.map(((e,t)=>{var r="undefined"!==typeof e.key?e.key:t,n=t+1===C.length,a=y?l.createElement(f,{key:r},e):e;if(!w)return a;var o=n?null:l.cloneElement(v,{__css:_});return l.createElement(l.Fragment,{key:r},a,o)})),E=(0,o.cx)("chakra-stack",g);return l.createElement(n.m$.div,d({ref:t,display:"flex",alignItems:i,justifyContent:s,flexDirection:x.flexDirection,flexWrap:m,className:E,__css:w?{}:{[u]:x[u]}},b),S)}));i.Ts&&(p.displayName="Stack");var m=(0,a.G)(((e,t)=>l.createElement(p,d({align:"center"},e,{direction:"row",ref:t}))));i.Ts&&(m.displayName="HStack");var h=(0,a.G)(((e,t)=>l.createElement(p,d({align:"center"},e,{direction:"column",ref:t}))));i.Ts&&(h.displayName="VStack")},980:function(e,t,r){"use strict";r.d(t,{useColorMode:function(){return a.useColorMode},useColorModeValue:function(){return a.useColorModeValue}});r(2300);var n=r(4806);r.o(n,"useColorMode")&&r.d(t,{useColorMode:function(){return n.useColorMode}}),r.o(n,"useColorModeValue")&&r.d(t,{useColorModeValue:function(){return n.useColorModeValue}});var a=r(4164)},63:function(e,t,r){"use strict";r.d(t,{G:function(){return a}});var n=r(7294);function a(e){return n.forwardRef(e)}},4164:function(e,t,r){"use strict";r.d(t,{useColorMode:function(){return n.If},useColorModeValue:function(){return n.ff}});var n=r(4738);r(6759)},3105:function(e,t,r){"use strict";r.d(t,{m$:function(){return C}});var n=r(6759),a=r(5505),o=r(658),i=r(7294),l=r(7462),s=r(7866),c=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,u=(0,s.Z)((function(e){return c.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),d=r(5629),f=r(444),p=r(4199),m=u,h=function(e){return"theme"!==e},v=function(e){return"string"===typeof e&&e.charCodeAt(0)>96?m:h},g=function(e,t,r){var n;if(t){var a=t.shouldForwardProp;n=e.__emotion_forwardProp&&a?function(t){return e.__emotion_forwardProp(t)&&a(t)}:a}return"function"!==typeof n&&r&&(n=e.__emotion_forwardProp),n},y=function e(t,r){var n,a,o=t.__emotion_real===t,s=o&&t.__emotion_base||t;void 0!==r&&(n=r.label,a=r.target);var c=g(t,r,o),u=c||v(s),m=!u("as");return function(){var h=arguments,y=o&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==n&&y.push("label:"+n+";"),null==h[0]||void 0===h[0].raw)y.push.apply(y,h);else{0,y.push(h[0][0]);for(var b=h.length,k=1;k<b;k++)y.push(h[k],h[0][k])}var x=(0,d.w)((function(e,t,r){var n=m&&e.as||s,o="",l=[],h=e;if(null==e.theme){for(var g in h={},e)h[g]=e[g];h.theme=(0,i.useContext)(d.T)}"string"===typeof e.className?o=(0,f.f)(t.registered,l,e.className):null!=e.className&&(o=e.className+" ");var b=(0,p.O)(y.concat(l),t.registered,h);(0,f.M)(t,b,"string"===typeof n);o+=t.key+"-"+b.name,void 0!==a&&(o+=" "+a);var k=m&&void 0===c?v(n):u,x={};for(var _ in e)m&&"as"===_||k(_)&&(x[_]=e[_]);return x.className=o,x.ref=r,(0,i.createElement)(n,x)}));return x.displayName=void 0!==n?n:"Styled("+("string"===typeof s?s:s.displayName||s.name||"Component")+")",x.defaultProps=t.defaultProps,x.__emotion_real=x,x.__emotion_base=s,x.__emotion_styles=y,x.__emotion_forwardProp=c,Object.defineProperty(x,"toString",{value:function(){return"."+a}}),x.withComponent=function(t,n){return e(t,(0,l.Z)({},r,n,{shouldForwardProp:g(x,n,!0)})).apply(void 0,y)},x}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){y[e]=y(e)}));var b=y,k=new Set([...n.propNames,"textStyle","layerStyle","apply","isTruncated","noOfLines","focusBorderColor","errorBorderColor","as","__css","css","sx"]),x=new Set(["htmlWidth","htmlHeight","htmlSize"]),_=e=>x.has(e)||!k.has(e),w=r(5284);function O(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var C=function(e,t){var r=null!=t?t:{},{baseStyle:i}=r,l=O(r,["baseStyle"]);l.shouldForwardProp||(l.shouldForwardProp=_);var s=(e=>{var{baseStyle:t}=e;return e=>{var{css:r,__css:i,sx:l}=e,s=O(e,["theme","css","__css","sx"]),c=(0,a.lw)(s,((e,t)=>(0,n.isStyleProp)(t))),u=(0,o.Pu)(t,e),d=Object.assign({},i,u,(0,a.YU)(c),l),f=(0,n.css)(d)(e.theme);return r?[f,r]:f}})({baseStyle:i});return b(e,l)(s)};w.t6.forEach((e=>{C[e]=C(e)}))},5284:function(e,t,r){"use strict";r.d(t,{t6:function(){return a},Lr:function(){return o}});var n=r(5505),a=["a","b","article","aside","blockquote","button","caption","cite","circle","code","dd","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","img","input","kbd","label","li","main","mark","nav","ol","p","path","pre","q","rect","s","svg","section","select","strong","small","span","sub","sup","table","tbody","td","textarea","tfoot","th","thead","tr","ul"];function o(e){return(0,n.CE)(e,["styleConfig","size","variant","colorScheme"])}},2167:function(e,t,r){"use strict";var n=r(3848);t.default=void 0;var a,o=(a=r(7294))&&a.__esModule?a:{default:a},i=r(1063),l=r(4651),s=r(7426);var c={};function u(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,a=l.useRouter(),d=o.default.useMemo((function(){var t=i.resolveHref(a,e.href,!0),r=n(t,2),o=r[0],l=r[1];return{href:o,as:e.as?i.resolveHref(a,e.as):l||o}}),[a,e.href,e.as]),f=d.href,p=d.as,m=e.children,h=e.replace,v=e.shallow,g=e.scroll,y=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var b=(t=o.default.Children.only(m))&&"object"===typeof t&&t.ref,k=s.useIntersection({rootMargin:"200px"}),x=n(k,2),_=x[0],w=x[1],O=o.default.useCallback((function(e){_(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,_]);o.default.useEffect((function(){var e=w&&r&&i.isLocalURL(f),t="undefined"!==typeof y?y:a&&a.locale,n=c[f+"%"+p+(t?"%"+t:"")];e&&!n&&u(a,f,p,{locale:t})}),[p,f,w,y,r,a]);var C={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,l,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),t[a?"replace":"push"](r,n,{shallow:o,locale:s,scroll:l}))}(e,a,f,p,h,v,g,y)},onMouseEnter:function(e){i.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,f,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof y?y:a&&a.locale,E=a&&a.isLocaleDomain&&i.getDomainLocale(p,S,a&&a.locales,a&&a.domainLocales);C.href=E||i.addBasePath(i.addLocale(p,S,a&&a.defaultLocale))}return o.default.cloneElement(t,C)};t.default=d},7426:function(e,t,r){"use strict";var n=r(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,s=a.useRef(),c=a.useState(!1),u=n(c,2),d=u[0],f=u[1],p=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||d||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,i=n.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),l.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,d]);return a.useEffect((function(){if(!i&&!d){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[d]),[p,d]};var a=r(7294),o=r(3447),i="undefined"!==typeof IntersectionObserver;var l=new Map},5063:function(e,t,r){e.exports=r(2167)},9590:function(e){var t="undefined"!==typeof Element,r="function"===typeof Map,n="function"===typeof Set,a="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var l,s,c,u;if(Array.isArray(e)){if((l=e.length)!=i.length)return!1;for(s=l;0!==s--;)if(!o(e[s],i[s]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!o(s.value[1],i.get(s.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((l=e.length)!=i.length)return!1;for(s=l;0!==s--;)if(e[s]!==i[s])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((l=(c=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(s=l;0!==s--;)if(!Object.prototype.hasOwnProperty.call(i,c[s]))return!1;if(t&&e instanceof Element)return!1;for(s=l;0!==s--;)if(("_owner"!==c[s]&&"__v"!==c[s]&&"__o"!==c[s]||!e.$$typeof)&&!o(e[c[s]],i[c[s]]))return!1;return!0}return e!==e&&i!==i}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function s(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),s(e.child))}))}function c(e){return function(t){return n.createElement(u,i({attr:i({},e.attr)},t),s(e.child))}}function u(e){var t=function(t){var r,a=e.attr,o=e.size,s=e.title,c=l(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}}}]);