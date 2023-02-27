(function(){"use strict";var e={2435:function(e,t,r){var i=r(9242),n=r(3396),s=r(7139);const a={class:"container mx-auto flex flex-col items-center bg-gray-100 p-4"},o={class:"container"},l=(0,n._)("hr",{class:"w-full border-t border-gray-600 my-4"},null,-1),c=(0,n._)("span",null," Filter: ",-1),d=(0,n._)("hr",{class:"w-full border-t border-gray-600 my-4"},null,-1),u={class:"mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3"},h=["onClick"],p={class:"px-4 py-5 sm:p-6 text-center"},f={class:"text-sm font-medium text-gray-500 truncate"},g={class:"mt-1 text-3xl font-semibold text-gray-900"},m=(0,n._)("div",{class:"w-full border-t border-gray-200"},null,-1),k=["onClick"],w=(0,n._)("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"#718096","aria-hidden":"true"},[(0,n._)("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),v=(0,n._)("hr",{class:"w-full border-t border-gray-600 my-4"},null,-1),b={key:0,class:"relative"},y={class:"text-lg leading-6 font-medium text-gray-900 my-8"},x={class:"flex items-end border-gray-600 border-b border-l h-64",ref:"graph"},T={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",version:"1.1",width:"30",height:"30",x:"0",y:"0",viewBox:"0 0 511.76 511.76",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve"},C=(0,n._)("g",null,[(0,n._)("path",{d:"M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048    c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z     M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165    c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0    c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z",fill:"#718096","data-original":"#000000"})],-1),_=[C];function E(e,t,r,C,E,G){const O=(0,n.up)("add-ticker");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("div",o,[(0,n.Wm)(O,{onAddTicker:G.addTicker,disabled:G.tooManyTickersAdded},null,8,["onAddTicker","disabled"]),E.tickers.length>0?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[l,c,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>E.filter=e),class:"pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"},null,512),[[i.nr,E.filter]]),(0,n._)("div",null,[E.page>1?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:t[1]||(t[1]=e=>E.page-=1),class:"mr-4 my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"}," Prev ")):(0,n.kq)("",!0),G.hasNextPage?((0,n.wg)(),(0,n.iD)("button",{key:1,onClick:t[2]||(t[2]=e=>E.page+=1),class:"my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"}," Next ")):(0,n.kq)("",!0)]),d,(0,n._)("dl",u,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(G.paginatedTickers,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.name,onClick:t=>{G.selectTicker(e)},class:(0,s.C_)([{"border-4":E.selectedTicker===e,"bg-red-100":E.invalidTickers.includes(e.name),"bg-white":!E.invalidTickers.includes(e.name)},"overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer"])},[(0,n._)("div",p,[(0,n._)("dt",f,(0,s.zw)(e.name)+" - USD ",1),(0,n._)("dd",g,(0,s.zw)(e.price),1)]),m,(0,n._)("button",{onClick:(0,i.iM)((t=>G.removeTicker(e.name)),["stop"]),class:"flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none"},[w,(0,n.Uk)("Удалить ")],8,k)],10,h)))),128))]),v,E.selectedTicker?((0,n.wg)(),(0,n.iD)("section",b,[(0,n._)("h3",y,(0,s.zw)(E.selectedTicker.name)+" - USD ",1),(0,n._)("div",x,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(G.normalizedGraph,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:t,style:(0,s.j5)({height:`${e}%`,width:`${E.widthGraphElement}px`}),class:"bg-purple-800 border",ref_for:!0,ref:"graphElement"},null,4)))),128))],512),(0,n._)("button",{onClick:t[3]||(t[3]=e=>E.selectedTicker=null),type:"button",class:"absolute top-0 right-0"},[((0,n.wg)(),(0,n.iD)("svg",T,_))])])):(0,n.kq)("",!0)],64)):(0,n.kq)("",!0)])])}r(7658);const G="42c17dd004b08c2a98135fcd584472a8b7fc7ed7d4989fe14b248d691e822485",O=new Map,D=new WebSocket(`wss://streamer.cryptocompare.com/v2?api_key=${G}`),S="5",M="500";let A=null;function z(e){j({action:"SubAdd",subs:[`5~CCCAGG~${e}~BTC`]})}function j(e){const t=JSON.stringify(e);D.readyState!==WebSocket.OPEN?D.addEventListener("open",(()=>{D.send(t)}),{once:!0}):D.send(t)}function B(e){j({action:"SubAdd",subs:[`5~CCCAGG~${e}~USD`]})}function L(e){j({action:"SubRemove",subs:[`5~CCCAGG~${e}~USD`]})}D.addEventListener("message",(e=>{const{TYPE:t,FROMSYMBOL:r,TOSYMBOL:i,PRICE:n,PARAMETER:s}=JSON.parse(e.data);if(t===M){const e=s.split("~"),t=e[2],r=e[3];if("BTC"!==r)return void z(t);const i=O.get(t)??[];i.forEach((e=>e("error")))}if(t!==S||void 0===n)return;if("BTC"===r&&(A=n),"BTC"===i&&!A)return void j({action:"SubAdd",subs:["5~CCCAGG~BTC~USD"]});const a=O.get(r)??[],o="BTC"===i?n*A:n;a.forEach((e=>e(o)))}));const U=(e,t)=>{const r=O.get(e)||[];O.set(e,[...r,t]),B(e)},P=e=>{O.delete(e),L(e)},$=()=>fetch("https://min-api.cryptocompare.com/data/all/coinlist?summary=true").then((e=>e.json())),I={class:"flex"},N={class:"max-w-xs"},q=(0,n._)("label",{for:"wallet",class:"block text-sm font-medium text-gray-700"},"Ticker",-1),H={class:"mt-1 relative rounded-md shadow-md"},Y={key:0,class:"flex bg-white shadow-md p-1 rounded-md flex-wrap"},R=["onClick"];function V(e,t,r,a,o,l){const c=(0,n.up)("add-button");return(0,n.wg)(),(0,n.iD)("section",null,[(0,n._)("div",I,[(0,n._)("div",N,[q,(0,n._)("div",H,[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.ticker=e),onKeydown:t[1]||(t[1]=(0,i.D2)(((...e)=>l.add&&l.add(...e)),["enter"])),type:"text",name:"wallet",id:"wallet",class:"block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md",placeholder:"Например DOGE"},null,544),[[i.nr,o.ticker,void 0,{trim:!0}]])]),l.showIndices?((0,n.wg)(),(0,n.iD)("div",Y,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.filteredCoinList(),(e=>((0,n.wg)(),(0,n.iD)("span",{key:e,onClick:t=>(o.ticker=e,l.add()),class:"inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer"},(0,s.zw)(e),9,R)))),128))])):(0,n.kq)("",!0),(0,n.Wm)(c,{onClick:l.add,disabled:r.disabled},null,8,["onClick","disabled"])])])])}const F=(0,n._)("svg",{class:"-ml-0.5 mr-2 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24",fill:"#ffffff"},[(0,n._)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})],-1);function W(e,t,r,i,a,o){return(0,n.wg)(),(0,n.iD)("button",{type:"button",class:(0,s.C_)(["my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",{"opacity-50":r.disabled}])},[F,(0,n.Uk)(" Add ")],2)}var J={props:{disabled:{type:Boolean,required:!1,default:!1}}},K=r(89);const Z=(0,K.Z)(J,[["render",W]]);var Q=Z,X={name:"AddTicker",components:{AddButton:Q},props:{disabled:{type:Boolean,requared:!1,default:!1}},emits:{"add-ticker":e=>"string"===typeof e&&e.length>0},data(){return{ticker:""}},computed:{showIndices(){return this.filteredCoinList()?.length>0}},methods:{add(){0!==this.ticker.length&&(this.$emit("add-ticker",this.ticker),this.ticker="")},filteredCoinList(){if(!this.ticker)return;const e=this.coinList.filter((e=>e.includes(this.ticker.toUpperCase())));return e.length>4?e.slice(0,4):e}},mounted(){$().then((({Data:e})=>{this.coinList=Object.keys(e)})).catch((e=>console.log(e)))}};const ee=(0,K.Z)(X,[["render",V]]);var te=ee,re={name:"App",components:{AddTicker:te},data(){return{filter:"",tickers:[],selectedTicker:null,invalidTickers:[],graph:[],maxGraphElements:0,widthGraphElement:36,page:1,isDublicatedTicker:!1}},computed:{tooManyTickersAdded(){return this.tickers.length>20},normalizedGraph(){const e=Math.max(...this.graph),t=Math.min(...this.graph);return this.graph.map((r=>5+95*(r-t)/(e-t)))},startIndex(){return 6*(this.page-1)},endIndex(){return 6*this.page},hasNextPage(){return this.filteredTickers.length>this.endIndex},filteredTickers(){return this.tickers.filter((({name:e})=>e.includes(this.filter.toUpperCase())))},paginatedTickers(){return this.filteredTickers.slice(this.startIndex,this.endIndex)},pageStateOptions(){return{filter:this.filter,page:this.page}}},methods:{sliceGraph(){this.graph.length>this.maxGraphElements&&(this.graph=this.graph.slice(-this.maxGraphElements))},calculateMaxGraphElements(){this.$refs.graph&&(this.maxGraphElements=(this.$refs.graph.clientWidth/this.widthGraphElement).toFixed(0))},addTicker(e){const t={name:e.toUpperCase(),price:"-"},r=this.tickers.some((t=>t.name===e));r||(this.tickers=[...this.tickers,t],U(t.name,(e=>this.updateTicker(t.name,e))),this.ticker="",this.filter="")},updateTicker(e,t){if("error"===t)return console.log("error"),this.invalidTickers=[...this.invalidTickers,e],void console.log(this.invalidTickers);this.tickers.filter((t=>t.name===e)).forEach((e=>{e.price=this.formatPrice(t),e===this.selectedTicker&&(this.graph.push(t),this.calculateMaxGraphElements(),this.sliceGraph())}))},selectTicker(e){console.log(e.name),this.selectedTicker=e},removeTicker(e){this.tickers=this.tickers.filter((t=>t.name!==e)),this.invalidTickers=this.invalidTickers.filter((t=>t.name!==e)),e===this.selectedTicker?.name&&(this.selectedTicker=null),P(e)},formatPrice(e){return e>1?e.toFixed(2):e.toPrecision(2)}},watch:{filter(){this.page=1},tickers(){localStorage.setItem("cryptonomicon-list",JSON.stringify(this.tickers))},paginatedTickers(){0===this.paginatedTickers.length&&this.page>1&&(this.page-=1)},selectedTicker(){this.graph=[],this.$nextTick().then(this.calculateMaxGraphElements)},pageStateOptions(e){window.history.pushState(null,document.title,`${window.location.pathname}?filter=${e.filter}&page=${e.page}`)},maxGraphElements(){this.sliceGraph()}},created(){const e=Object.fromEntries(new URL(window.location).searchParams.entries()),t=["filter","page"];t.forEach((t=>{e[t]&&(this[t]=e[t])}));const r=localStorage.getItem("cryptonomicon-list");r&&(this.tickers=JSON.parse(r),this.tickers.forEach((e=>{U(e.name,(t=>{this.updateTicker(e.name,t)}))}))),setInterval(this.updateTickers,5e3)},mounted(){window.addEventListener("resize",this.calculateMaxGraphElements)},beforeUnmount(){window.removeEventListener("resize",this.calculateMaxGraphElements)}};const ie=(0,K.Z)(re,[["render",E]]);var ne=ie;(0,i.ri)(ne).mount("#app")}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,i,n,s){if(!i){var a=1/0;for(d=0;d<e.length;d++){i=e[d][0],n=e[d][1],s=e[d][2];for(var o=!0,l=0;l<i.length;l++)(!1&s||a>=s)&&Object.keys(r.O).every((function(e){return r.O[e](i[l])}))?i.splice(l--,1):(o=!1,s<a&&(a=s));if(o){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[i,n,s]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,s,a=i[0],o=i[1],l=i[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(n in o)r.o(o,n)&&(r.m[n]=o[n]);if(l)var d=l(r)}for(t&&t(i);c<a.length;c++)s=a[c],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(d)},i=self["webpackChunkvue_first_app"]=self["webpackChunkvue_first_app"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(2435)}));i=r.O(i)})();
//# sourceMappingURL=app.d964f6fe.js.map