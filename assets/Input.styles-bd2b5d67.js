import{b as e,c as v,k as a}from"./index-519bb576.js";var P=Object.defineProperty,x=Object.defineProperties,C=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,g=(o,r,n)=>r in o?P(o,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[r]=n,i=(o,r)=>{for(var n in r||(r={}))O.call(r,n)&&g(o,n,r[n]);if(b)for(var n of b(r))$.call(r,n)&&g(o,n,r[n]);return o},u=(o,r)=>x(o,C(r));const t={xs:e(30),sm:e(36),md:e(42),lg:e(50),xl:e(60)},I=["default","filled","unstyled"];function j({theme:o,variant:r}){return I.includes(r)?r==="default"?{border:`${e(1)} solid ${o.colorScheme==="dark"?o.colors.dark[4]:o.colors.gray[4]}`,backgroundColor:o.colorScheme==="dark"?o.colors.dark[6]:o.white,transition:"border-color 100ms ease","&:focus, &:focus-within":o.focusRingStyles.inputStyles(o)}:r==="filled"?{border:`${e(1)} solid transparent`,backgroundColor:o.colorScheme==="dark"?o.colors.dark[5]:o.colors.gray[1],"&:focus, &:focus-within":o.focusRingStyles.inputStyles(o)}:{borderWidth:0,color:o.colorScheme==="dark"?o.colors.dark[0]:o.black,backgroundColor:"transparent",minHeight:e(28),outline:0,"&:focus, &:focus-within":{outline:"none",borderColor:"transparent"},"&:disabled":{backgroundColor:"transparent","&:focus, &:focus-within":{outline:"none",borderColor:"transparent"}}}:null}var H=v((o,{multiline:r,radius:n,invalid:y,rightSectionWidth:d,withRightSection:f,iconWidth:c,offsetBottom:k,offsetTop:S,pointer:w},{variant:s,size:l})=>{const p=o.fn.variant({variant:"filled",color:"red"}).background,_=s==="default"||s==="filled"?{minHeight:a({size:l,sizes:t}),paddingLeft:`calc(${a({size:l,sizes:t})}  / 3)`,paddingRight:f?d||a({size:l,sizes:t}):`calc(${a({size:l,sizes:t})}  / 3)`,borderRadius:o.fn.radius(n)}:s==="unstyled"&&f?{paddingRight:d||a({size:l,sizes:t})}:null;return{wrapper:{position:"relative",marginTop:S?`calc(${o.spacing.xs} / 2)`:void 0,marginBottom:k?`calc(${o.spacing.xs} / 2)`:void 0,"&:has(input:disabled)":{"& .mantine-Input-rightSection":{display:"none"}}},input:u(i(i(u(i({},o.fn.fontStyles()),{height:r?s==="unstyled"?void 0:"auto":a({size:l,sizes:t}),WebkitTapHighlightColor:"transparent",lineHeight:r?o.lineHeight:`calc(${a({size:l,sizes:t})} - ${e(2)})`,appearance:"none",resize:"none",boxSizing:"border-box",fontSize:a({size:l,sizes:o.fontSizes}),width:"100%",color:o.colorScheme==="dark"?o.colors.dark[0]:o.black,display:"block",textAlign:"left",cursor:w?"pointer":void 0}),j({theme:o,variant:s})),_),{"&:disabled, &[data-disabled]":{backgroundColor:o.colorScheme==="dark"?o.colors.dark[6]:o.colors.gray[1],color:o.colors.dark[2],opacity:.6,cursor:"not-allowed",pointerEvents:"none","&::placeholder":{color:o.colors.dark[2]}},"&[data-invalid]":{color:p,borderColor:p,"&::placeholder":{opacity:1,color:p}},"&[data-with-icon]":{paddingLeft:typeof c=="number"?e(c):a({size:l,sizes:t})},"&::placeholder":u(i({},o.fn.placeholderStyles()),{opacity:1}),"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",width:c?e(c):a({size:l,sizes:t}),color:y?o.colors.red[o.colorScheme==="dark"?6:7]:o.colorScheme==="dark"?o.colors.dark[2]:o.colors.gray[5]},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center",width:d||a({size:l,sizes:t})}}});const A=H;export{t as s,A as u};