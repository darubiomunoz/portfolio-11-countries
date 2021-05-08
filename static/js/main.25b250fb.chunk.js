(this["webpackJsonpflag-project"]=this["webpackJsonpflag-project"]||[]).push([[0],{51:function(n,e,t){"use strict";t.r(e);var i,c,r,a,o,d,s,l,b,u,h,j,x,f,p,m,g,O=t(0),w=t(16),y=t.n(w),v=t(6),k=t(13),I=t(5),z=t(2),C=t(3),F="hsl(209, 23%, 22%)",N="hsl(0, 0%, 98%)",R="10px",S="12px",D="(min-width: 280px)",A="(min-width: 320px)",E="(min-width: 360px)",L="(min-width: 375px)",B="(min-width: 384px)",M="(min-width: 411px)",$="(min-width: 412px)",T="(min-width: 414px)",J="(min-width: 480px)",P="(min-width: 540px)",W="(min-width: 600px)",q="(min-width: 768px)",G="(min-width: 800px)",H="(min-width: 1024px)",K="(min-width: 1280px)",Q="5px",U="10px",V="20px",X="30px",Y="40px",Z="5px",_="0px 3px 10px 0px rgba(173,164,164,0.5);",nn=Object(z.b)(i||(i=Object(C.a)(["\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-size: 62.5%;\n  font-family: ",";\n  background-color: ",";\n  text-decoration: none;\n}\n\na {\n  width: fit-content;\n  cursor: unset;\n}\n"])),"'Nunito Sans', sans-serif",(function(n){return n.theme.background2})),en={background1:N,background2:"",text1:F,text2:F,shadow:_},tn={background1:F,background2:"hsl(207, 26%, 17%)",text1:N,text2:"hsl(0, 0%, 52%)",shadow:""},cn=t(7),rn=Object(cn.c)({name:"theme",initialState:"light",reducers:{changeTheme:function(n){return"light"===n?"dark":"dark"===n?"light":void 0}}}),an=rn.actions.changeTheme,on=rn.reducer,dn=z.c.header(c||(c=Object(C.a)(["\n  width: 100%;\n  max-width: 100vw;\n  height: 50px;\n  padding: 0 ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: ",";\n  background-color: ",";\n\n  @media "," {\n    height: 70px;\n    padding: "," ",";\n  }\n\n  @media "," {\n    height: 85px;\n  }\n"])),U,(function(n){return n.theme.shadow}),(function(n){return n.theme.background1}),A,U,V,J),sn=z.c.h1(r||(r=Object(C.a)(["\n  width: fit-content;\n  height: fit-content;\n  font-size: ",";\n  font-weight: ",";\n  background: transparent;\n  color: ",";\n\n  @media "," {\n    font-size: ",";\n  }\n"])),R,"900",(function(n){return n.theme.text1}),M,S),ln=z.c.button(a||(a=Object(C.a)(["\n  display: flex;\n  align-items: center;\n  border: none;\n  font-size: ",";\n  font-weight: ",";\n  background-color: transparent;\n  color: ",";\n  cursor: pointer;\n\n  @media "," {\n    font-size: ",";\n  }\n"])),R,"400",(function(n){return n.theme.text1}),M,S),bn=z.c.i(o||(o=Object(C.a)(["\n  margin-right: ",";\n  font-size: ",";\n  background: transparent;\n  color: ",";\n\n  @media "," {\n    font-size: ",";\n  }\n"])),Q,R,(function(n){return n.theme.text1}),M,S),un=t(1),hn=function(){var n=Object(v.c)((function(n){return n.theme})),e=Object(v.b)();return Object(un.jsxs)(dn,{children:[Object(un.jsx)(sn,{tabIndex:"0",children:"Where in the world?"}),Object(un.jsxs)(ln,{onClick:function(){return e(an())},children:[Object(un.jsx)(bn,{className:"far fa-".concat("light"===n?"moon":"sun")}),"".concat("light"===n?"Dark":"Light"," Mode")]})]})},jn=z.c.section(d||(d=Object(C.a)(["\n  width: 100%;\n  max-width: 100vw;\n  height: fit-content;\n  display: flex;\n  justify-content: center;\n  padding: ",";\n  padding-bottom: ",";\n  background-color: ",";\n\n  @media "," {\n    padding: ",";\n    padding-bottom: ",";\n  }\n\n  @media "," {\n    width: 50%;\n    display: inline-flex;\n    justify-content: flex-start;\n  }\n"])),V,X,(function(n){return n.theme.background2}),J,X,Y,K),xn=Object(z.c)(bn)(s||(s=Object(C.a)(["\n  font-size: ",";\n  color: ",";\n\n  @media "," {\n    font-size: ",";\n  }\n"])),R,(function(n){return n.theme.text1}),M,S),fn=z.c.div(l||(l=Object(C.a)(["\n  width: 100%;\n  height: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 ",";\n  border: none;\n  border-radius: ",";\n  background-color: ",";\n  color: ",";\n  box-shadow: ",";\n\n  @media "," {\n    width: 70%;\n  }\n"])),X,V,Z,(function(n){return n.theme.background1}),(function(n){return n.theme.text1}),(function(n){return n.theme.shadow}),K),pn=z.c.input(b||(b=Object(C.a)(["\n  width: 90%;\n  height: ",";\n  padding: "," ",";\n  padding-left: ",";\n  border: none;\n  border-radius: ",";\n  font-size: ",";\n  background-color: ",";\n  color: ",";\n\n  @media "," {\n    font-size: ",";\n  }\n"])),V,Q,V,Q,Z,R,(function(n){return n.theme.background1}),(function(n){return n.theme.text1}),M,S),mn=Object(cn.c)({name:"search",initialState:"",reducers:{updateSearch:function(n,e){return e.payload.search}}}),gn=mn.actions.updateSearch,On=mn.reducer,wn=t(17),yn=t(22),vn=t.n(yn),kn=t(32),In=Object(cn.b)("countries/fetchCountries",Object(kn.a)(vn.a.mark((function n(){var e,t;return vn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://restcountries.eu/rest/v2/all");case 2:return(e=n.sent).ok||console.error(e.status),t=e.json(),n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})))),zn=Object(cn.c)({name:"countries",initialState:{data:[],dataSafeCopy:[],status:"idle",error:null},reducers:{filterBy:function(n,e){var t=e.payload.filter;"America"===t&&(t="Americas"),n.data=n.dataSafeCopy;var i=n.data.filter((function(n){return n.region===t}));"Filter by Region"!==t&&(n.data=i),"Filter by Region"===t&&(n.data=n.dataSafeCopy)},searchBy:function(n,e){var t=e.payload.search;n.data=n.dataSafeCopy;var i=n.data.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}));n.data=i}},extraReducers:(u={},Object(wn.a)(u,In.pending,(function(n){n.status="pending"})),Object(wn.a)(u,In.fulfilled,(function(n,e){var t=e.payload;n.status="fulfilled",n.data=n.data.concat(t),n.dataSafeCopy=n.dataSafeCopy.concat(t)})),Object(wn.a)(u,In.rejected,(function(n,e){var t=e.error;n.status="rejected",n.error=t.message})),u)}),Cn=zn.actions,Fn=Cn.filterBy,Nn=Cn.searchBy,Rn=zn.reducer,Sn=Object(cn.c)({name:"filter",initialState:"Filter by Region",reducers:{updateFilter:function(n,e){return e.payload.category}}}),Dn=Sn.actions.updateFilter,An=Sn.reducer,En=function(){var n=Object(v.b)(),e=Object(v.c)((function(n){return n.search})),t=Object(v.c)((function(n){return n.filter})),i=Object(O.useRef)();return Object(O.useEffect)((function(){n(Nn({search:e})),""===e&&(i.current.value="")}),[e]),Object(un.jsx)(jn,{children:Object(un.jsxs)(fn,{children:[Object(un.jsx)(xn,{className:"fas fa-search"}),Object(un.jsx)(pn,{placeholder:"Search for a country...",onChange:function(){var e=i.current.value;"Filter by Region"!==t&&n(Dn({category:"Filter by Region"})),n(gn({search:e}))},ref:i})]})})},Ln=t(33),Bn=Object(z.c)(jn)(h||(h=Object(C.a)(["\n  width: 100%;\n  max-width: 100vw;\n  padding-top: 0;\n  position: relative;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: ",";\n  background-color: ",";\n\n  @media "," {\n    width: 50%;\n    padding-top: ",";\n    align-items: flex-end;\n  }\n"])),Q,(function(n){return n.theme.background2}),K,X),Mn=Object(z.c)(fn)(j||(j=Object(C.a)(["\n  width: 130px;\n  height: fit-content;\n  padding: ",";\n  position: absolute;\n  top: 40px;\n  flex-direction: column;\n  gap: ",";\n  display: ",";\n\n  @media "," {\n    width: 156px;\n  }\n\n  @media "," {\n    width: 168px;\n    padding: "," ",";\n  }\n\n  @media "," {\n    width: 192px;\n  }\n\n  @media "," {\n    width: 201.2px;\n  }\n\n  @media "," {\n    width: 206.4px;\n  }\n\n  @media "," {\n    width: 222.79px;\n  }\n\n  @media "," {\n    width: 223.2px;\n  }\n\n  @media "," {\n    width: 224.4px;\n  }\n\n  @media "," {\n    width: 252px;\n  }\n\n  @media "," {\n    width: 288px;\n  }\n\n  @media "," {\n    width: 324px;\n    padding: ",";\n  }\n\n  @media "," {\n    width: 354px;\n  }\n\n  @media "," {\n    width: 370px;\n  }\n\n  @media "," {\n    width: 385px;\n  }\n\n  @media "," {\n    width: 171px;\n    top: 70px;\n  }\n"])),U,Q,(function(n){return n.invisible?"none":""}),D,A,U,V,E,L,B,M,$,T,J,P,W,V,q,G,H,H),$n=z.c.label(x||(x=Object(C.a)(["\n  width: 100%;\n  text-align: start;\n  font-size: ",";\n  background-color: transparent;\n  color: ",";\n  cursor: pointer;\n\n  @media "," {\n    font-size: ",";\n  }\n"])),R,(function(n){return n.theme.text2}),M,S),Tn=z.c.input(f||(f=Object(C.a)(["\n  display: none;\n"]))),Jn=Object(z.c)(ln)(p||(p=Object(C.a)(["\n  width: 65%;\n  padding: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: ",";\n  border-radius: ",";\n  background-color: ",";\n  color: ",";\n  box-shadow: ",";\n  cursor: pointer;\n\n  @media "," {\n    width: 60%;\n    padding: "," ",";\n  }\n\n  @media "," {\n    font-size: ",";\n  }\n\n  @media "," {\n    width: 50%;\n  }\n\n  @media "," {\n    width: 40%;\n  }\n\n  @media "," {\n    width: 171px;\n  }\n"])),U,R,Z,(function(n){return n.theme.background1}),(function(n){return n.theme.text2}),(function(n){return n.theme.shadow}),A,U,V,M,S,q,H,K),Pn=Object(z.c)(bn)(m||(m=Object(C.a)(["\n  margin: 0;\n  background-color: ",";\n  font-size: ",";\n  color: ",";\n\n  @media "," {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.background1}),R,(function(n){return n.theme.text2}),M,S),Wn=function(){var n=Object(O.useState)(!1),e=Object(Ln.a)(n,2),t=e[0],i=e[1],c=Object(v.b)(),r=Object(v.c)((function(n){return n.filter})),a=Object(v.c)((function(n){return n.search})),o=Object(O.useRef)(),d=Object(O.useRef)(),s=function(n){var e=n.target.htmlFor;console.log(a),""!==a&&c(gn({search:""})),c(Dn({category:e})),i(!t)};return Object(O.useEffect)((function(){c(Fn({filter:r}))}),[r]),Object(O.useEffect)((function(){var n=function(n){o.current.contains(n.target)||d.current.contains(n.target)||i(!1)};return document.addEventListener("mousedown",n),function(){return document.removeEventListener("mousedown",n)}}),[]),Object(un.jsxs)(Bn,{children:[Object(un.jsxs)(Jn,{onClick:function(){i(!t)},ref:d,children:[r,Object(un.jsx)(Pn,{className:"fas fa-angle-".concat(t?"up":"down")})]}),Object(un.jsxs)(Mn,{invisible:t?"":"invisible",ref:o,tabIndex:t?"0":"",children:["Filter by Region"!==r&&Object(un.jsxs)(un.Fragment,{children:[Object(un.jsx)($n,{htmlFor:"Filter by Region",onClick:function(n){return s(n)},tabIndex:t?"0":"",children:"Filter by Region"}),Object(un.jsx)(Tn,{id:"Filter by Region",value:"Filter by Region",name:"category",type:"radio"})]}),Object(un.jsx)($n,{htmlFor:"Africa",onClick:function(n){return s(n)},tabIndex:t?"0":"",children:"Africa"}),Object(un.jsx)(Tn,{id:"Africa",value:"Africa",name:"category",type:"radio"}),Object(un.jsx)($n,{htmlFor:"America",onClick:s,tabIndex:t?"0":"",children:"America"}),Object(un.jsx)(Tn,{id:"America",value:"America",name:"category",type:"radio"}),Object(un.jsx)($n,{htmlFor:"Asia",onClick:s,tabIndex:t?"0":"",children:"Asia"}),Object(un.jsx)(Tn,{id:"Asia",value:"Asia",name:"category",type:"radio"}),Object(un.jsx)($n,{htmlFor:"Europe",onClick:s,tabIndex:t?"0":"",children:"Europe"}),Object(un.jsx)(Tn,{id:"Europe",value:"Europe",name:"category",type:"radio"}),Object(un.jsx)($n,{htmlFor:"Oceania",onClick:s,tabIndex:t?"0":"",children:"Oceania"}),Object(un.jsx)(Tn,{id:"Oceania",value:"Oceania",name:"category",type:"radio"})]})]})};var qn,Gn,Hn,Kn,Qn,Un,Vn,Xn,Yn,Zn,_n,ne,ee,te=Object(z.c)(jn)(g||(g=Object(C.a)(["\n  padding: 0;\n  padding-bottom: ",";\n  flex-direction: column;\n  align-items: center;\n  gap: ",";\n  border: none;\n  background-color: ",";\n\n  @media "," {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n\n  @media "," {\n    width: 100%;\n    padding: ",";\n    justify-content: space-evenly;\n  }\n"])),X,X,(function(n){return n.theme.background2}),W,K,X),ie=z.c.div(qn||(qn=Object(C.a)(["\n  width: 70%;\n  height: fit-content;\n  border-radius: ",";\n  background-color: ",";\n  box-shadow: ",";\n  cursor: pointer;\n\n  @media "," {\n    width: 41%;\n  }\n\n  @media "," {\n    width: 23%;\n  }\n"])),Z,(function(n){return n.theme.background1}),(function(n){return n.theme.shadow}),W,K),ce=z.c.img(Gn||(Gn=Object(C.a)(["\n  width: 100%;\n  height: auto;\n  object-fit: cover;\n  object-position: center;\n  border: none;\n  border-top-left-radius: ",";\n  border-top-right-radius: ",";\n\n  @media "," {\n    height: 175px;\n  }\n"])),Z,Z,W),re=z.c.article(Hn||(Hn=Object(C.a)(["\n  width: 100%;\n  padding: "," ",";\n  border-bottom-left-radius: ",";\n  border-bottom-right-radius: ",";\n  background-color: ",";\n\n  @media "," {\n    padding: "," ",";\n  }\n\n  @media "," {\n    min-height: 252px;\n  }\n"])),V,U,Z,Z,(function(n){return n.theme.background1}),M,X,V,K),ae=z.c.h3(Kn||(Kn=Object(C.a)(["\n  margin-bottom: ",";\n  text-align: start;\n  font-size: ",";\n  font-weight: ",";\n  background-color: transparent;\n  color: ",";\n\n  @media "," {\n    font-size: ",";\n  }\n\n  @media "," {\n    width: 100%;\n  }\n"])),(function(n){return n.noMargin?"0":U}),"16px","900",(function(n){return n.theme.text1}),M,"24px",K),oe=z.c.div(Qn||(Qn=Object(C.a)(["\n  width: 100%;\n  height: fit-content;\n  margin-top: ",";\n  display: flex;\n  flex-direction: ",";\n  flex-wrap: wrap;\n  gap: ",";\n  background-color: transparent;\n\n  @media "," {\n    margin-top: ",";\n  }\n"])),Q,(function(n){return n.column?"column":"row"}),Q,M,U),de=z.c.span(Un||(Un=Object(C.a)(["\n  font-size: ",";\n  font-weight: ",";\n  background-color: transparent;\n  color: ",";\n\n  @media "," {\n    font-size: ",";\n  }\n"])),R,(function(n){return n.bold?"700":"400"}),(function(n){return n.theme.text1}),M,S),se=function(){var n=Object(v.b)(),e=Object(v.c)((function(n){return n.countries.data})),t=Object(v.c)((function(n){return n.countries.status})),i=function(n){for(var e=(n+="").split("."),t=e[0],i=e.length>1?"".concat("."+e[1]):"",c=/(\d+)(\d{3})/;c.test(t);)t=t.replace(c,"$1,$2");return t+i};return Object(O.useEffect)((function(){"idle"===t&&n(In())}),[t,n]),Object(un.jsxs)(te,{children:["fulfilled"!==t&&Object(un.jsx)(ae,{children:"Loading..."}),0===e.length&&"fulfilled"===t&&Object(un.jsx)(ae,{children:"Country not found..."}),e.map((function(n){return Object(un.jsx)(ie,{children:Object(un.jsxs)(k.b,{to:"/country/".concat(n.alpha3Code),children:[Object(un.jsx)(ce,{src:n.flag,alt:"Official flag of ".concat(n.name),loading:"lazy",tabIndex:"0"}),Object(un.jsxs)(re,{children:[Object(un.jsx)(ae,{tabIndex:"0",children:n.name}),Object(un.jsxs)(oe,{children:[Object(un.jsx)(de,{bold:!0,tabIndex:"0",children:"Population:"}),Object(un.jsx)(de,{tabIndex:"0",children:""===n.population?"No Data":i(n.population)})]}),Object(un.jsxs)(oe,{children:[Object(un.jsx)(de,{bold:!0,tabIndex:"0",children:"Region:"}),Object(un.jsx)(de,{tabIndex:"0",children:""===n.region?"No Data":n.region})]}),Object(un.jsxs)(oe,{children:[Object(un.jsx)(de,{bold:!0,tabIndex:"0",children:"Capital:"}),Object(un.jsx)(de,{tabIndex:"0",children:""===n.capital?"No Data":n.capital})]})]})]})},Object(cn.d)())}))]})},le=function(){return Object(un.jsxs)(un.Fragment,{children:[Object(un.jsx)(hn,{}),Object(un.jsx)(En,{}),Object(un.jsx)(Wn,{}),Object(un.jsx)(se,{})]})},be=z.c.section(Vn||(Vn=Object(C.a)(["\n  width: 100%;\n  height: fit-content;\n  padding: "," ",";\n\n  @media "," {\n    padding: ",";\n  }\n\n  @media "," {\n    padding-left: ",";\n  }\n\n  @media "," {\n    padding-left: ",";\n  }\n\n  @media "," {\n    padding-left: ",";\n  }\n"])),X,V,M,X,J,Y,q,"50px",H,"60px"),ue=z.c.button(Xn||(Xn=Object(C.a)(["\n  width: ",";\n  height: fit-content;\n  margin: 0;\n  padding: "," ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: ",";\n  background-color: ",";\n  font-size: ",";\n  color: ",";\n  box-shadow: ",";\n  cursor: pointer;\n\n  @media "," {\n    font-size: ",";\n  }\n\n  @media "," {\n    width: ",";\n  }\n\n  @media "," {\n    width: ",";\n  }\n"])),(function(n){return n.big?"100%":"33%"}),Q,U,Z,(function(n){return n.theme.background1}),R,(function(n){return n.theme.text1}),(function(n){return n.theme.shadow}),M,S,H,(function(n){return n.big?"100%":"22%"}),K,(function(n){return n.big?"100%":"15%"})),he=function(){return Object(un.jsx)(be,{children:Object(un.jsx)(k.b,{to:"/",children:Object(un.jsxs)(ue,{children:[Object(un.jsx)(bn,{className:"fas fa-long-arrow-alt-left"}),"Back"]})})})},je=z.c.section(Yn||(Yn=Object(C.a)(["\n  width: 100%;\n  height: fit-content;\n  padding-bottom: ",";\n  display: flex;\n  justify-content: center;\n\n  @media "," {\n    padding-top: ",";\n  }\n"])),X,K,X),xe=Object(z.c)(ie)(Zn||(Zn=Object(C.a)(["\n  width: 85%;\n  padding-top: 0;\n  background-color: transparent;\n  box-shadow: none;\n\n  @media "," {\n    display: flex;\n    justify-content: space-evenly;\n  }\n"])),K),fe=Object(z.c)(ce)(_n||(_n=Object(C.a)(["\n  height: auto;\n  border-radius: 0;\n  box-shadow: ",";\n\n  @media "," {\n    width: 40%;\n  }\n"])),_,K),pe=Object(z.c)(re)(ne||(ne=Object(C.a)(["\n  padding-left: 0;\n  padding-right: 0;\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  background-color: transparent;\n  border-radius: 0;\n  box-shadow: none;\n\n  @media "," {\n    width: 40%;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n  }\n"])),V,K),me=z.c.div(ee||(ee=Object(C.a)(["\n  width: 100%;\n  height: fit-content;\n\n  @media "," {\n    width: ",";\n    height: ",";\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n  }\n"])),K,(function(n){return n.half?"47%":"100%"}),(function(n){return n.half?"130px":"fit-content"})),ge=function(){var n=Object(I.f)().alphacode,e=Object(v.c)((function(e){return e.countries.data.find((function(e){return e.alpha3Code===n}))})),t=function(n){for(var e=(n+="").split("."),t=e[0],i=e.length>1?"".concat("."+e[1]):"",c=/(\d+)(\d{3})/;c.test(t);)t=t.replace(c,"$1,$2");return t+i};return Object(un.jsx)(je,{children:Object(un.jsxs)(xe,{children:[Object(un.jsx)(fe,{src:e.flag,alt:"Official flag of ".concat(e.name),tabIndex:"0"}),Object(un.jsxs)(pe,{children:[Object(un.jsx)(ae,{noMargin:!0,tabIndex:"0",children:e.name}),Object(un.jsxs)(me,{half:!0,children:[Object(un.jsxs)(oe,{children:[Object(un.jsx)(de,{bold:!0,tabIndex:"0",children:"Native Name:"}),Object(un.jsx)(de,{tabIndex:"0",children:""===e.nativeName?"No Data":e.nativeName})]}),Object(un.jsxs)(oe,{children:[Object(un.jsx)(de,{bold:!0,tabIndex:"0",children:"Population:"}),Object(un.jsx)(de,{tabIndex:"0",children:""===e.population?"No Data":t(e.population)})]}),Object(un.jsxs)(oe,{children:[Object(un.jsx)(de,{bold:!0,tabIndex:"0",children:"Region:"}),Object(un.jsx)(de,{tabIndex:"0",children:""===e.region?"No Data":e.region})]}),Object(un.jsxs)(oe,{children:[Object(un.jsx)(de,{bold:!0,tabIndex:"0",children:"Sub-Region:"}),Object(un.jsx)(de,{tabIndex:"0",children:""===e.subregion?"No Data":e.region})]}),Object(un.jsxs)(oe,{children:[Object(un.jsx)(de,{bold:!0,tabIndex:"0",children:"Capital:"}),Object(un.jsx)(de,{tabIndex:"0",children:""===e.capital?"No Data":e.capital})]})]}),Object(un.jsxs)(me,{half:!0,children:[Object(un.jsxs)(oe,{children:[Object(un.jsx)(de,{bold:!0,tabIndex:"0",children:"Top Level Domain:"}),Object(un.jsx)(de,{tabIndex:"0",children:""===e.topLevelDomain?"No Data":e.topLevelDomain})]}),Object(un.jsxs)(oe,{children:[Object(un.jsx)(de,{bold:!0,tabIndex:"0",children:"Currencies:"}),Object(un.jsx)(de,{tabIndex:"0",children:""===e.currencies[0].name?"No Data":e.currencies[0].name})]}),Object(un.jsxs)(oe,{children:[Object(un.jsx)(de,{bold:!0,tabIndex:"0",children:"Language(s):"}),Object(un.jsx)(de,{tabIndex:"0",children:0===e.languages.length?"No Data":e.languages.map((function(n){return" ".concat(n.name,",")}))})]})]}),Object(un.jsx)(me,{children:Object(un.jsxs)(oe,{column:!0,children:[Object(un.jsx)(de,{bold:!0,tabIndex:"0",children:"Border Countries:"}),Object(un.jsx)(oe,{tabIndex:"0",children:0===e.borders.length?Object(un.jsx)(de,{children:"".concat(e.name," does not share borders with any country.")}):e.borders.map((function(n){return Object(un.jsx)(k.b,{to:"/country/".concat(n),children:Object(un.jsx)(ue,{big:!0,children:n})},Object(cn.d)())}))})]})})]})]})})},Oe=function(){return Object(un.jsxs)(un.Fragment,{children:[Object(un.jsx)(hn,{}),Object(un.jsx)(he,{}),Object(un.jsx)(ge,{})]})},we=function(){var n=Object(v.c)((function(n){return n.theme}));return Object(un.jsx)(k.a,{children:Object(un.jsxs)(z.a,{theme:"light"===n?en:tn,children:[Object(un.jsxs)(I.c,{children:[Object(un.jsx)(I.a,{exact:!0,path:"/",component:le}),Object(un.jsx)(I.a,{exact:!0,path:"/country/:alphacode",component:Oe})]}),Object(un.jsx)(nn,{})]})})},ye=Object(cn.a)({reducer:{countries:Rn,filter:An,search:On,theme:on}});y.a.render(Object(un.jsx)(O.StrictMode,{children:Object(un.jsx)(v.a,{store:ye,children:Object(un.jsx)(we,{})})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.25b250fb.chunk.js.map