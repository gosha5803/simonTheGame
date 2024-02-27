(function(){var t={8522:function(t,e,i){"use strict";var n=i(6848),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("GamePage")],1)},s=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t.showAlert?e("MyAlert",{attrs:{text:"Ошибка! Нажмите 'Играть', чтобы начать заново.",color:"error"}}):t._e(),e("div",[e("MyBtn",{attrs:{color:"success",text:"Играть"},on:{click:function(e){return t.playGame()}}}),e("MyToggleBtn",{attrs:{options:[{text:"Легко",active:!0,id:1,value:1500},{text:"Средне",active:!1,id:2,value:1e3},{text:"Сложно",active:!1,id:3,value:400}]},on:{select:t.setLevel}})],1),e("h3",[t._v(" Ваш счёт: "+t._s(t.round)+" ")]),e("div",{staticClass:"pads"},[e("PadComponent",{attrs:{activeTime:t.level,sound:t.lowestSound,color:"red"},on:{activated:t.clickHandler}}),e("PadComponent",{attrs:{activeTime:t.level,sound:t.higherSound,color:"green"},on:{activated:t.clickHandler}}),e("PadComponent",{attrs:{activeTime:t.level,sound:t.lowerSound,color:"yellow"},on:{activated:t.clickHandler}}),e("PadComponent",{attrs:{activeTime:t.level,sound:t.highestSound,color:"blue"},on:{activated:t.clickHandler}})],1)],1)},a=[],c=(i(4114),i.p+"media/lowest.0185d0d0.wav"),l=i.p+"media/higher.3746cc64.wav",u=i.p+"media/pre-highest.727241a4.wav",d=i.p+"media/highest.cd5185dc.wav",h=function(){var t=this,e=t._self._c;return e("button",{class:t.color,on:{click:function(e){return t.$emit("click")}}},[t._v(" "+t._s(t.text)+" ")])},v=[],p={props:{text:{type:String},color:{type:0}}},f=p,m=i(1656),y=(0,m.A)(f,h,v,!1,null,"3d86dd42",null),g=y.exports,_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pad",class:{[`${t.color}`]:!0,active:t.isActive},on:{click:function(e){return t.activatePad(e)}}})},w=[],k={data:()=>({isActive:!1}),props:{color:{type:0},sound:{required:!0},activeTime:{type:Number,required:!0}},methods:{activatePad(t){const e=new Audio(this.sound),i=t.isTrusted;e.play(),this.isActive=!0,setTimeout((()=>{this.isActive=!1}),this.activeTime),this.$emit("activated",[t.target,i])}}},b=k,A=(0,m.A)(b,_,w,!1,null,"426f135e",null),x=A.exports,P=function(){var t=this,e=t._self._c;return e("div",{class:{"my-alert":!0,[`${t.color}`]:!0,visible:t.isVisible},on:{click:function(e){return t.hideAlert()}}},[t._v(" "+t._s(t.text)+" ")])},C=[],T={data:()=>({isVisible:!1}),props:{text:{type:String,required:!0},color:{type:0}},methods:{hideAlert(){this.isVisible=!1}},mounted(){setTimeout((()=>{this.isVisible=!0}),10),setTimeout((()=>{this.isVisible=!1}),5e3)}},Q=T,M=(0,m.A)(Q,P,C,!1,null,"6f138cf6",null),O=M.exports,S=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-switch"},t._l(t.options,(function(i){return e("div",{key:i.id},[e("button",{class:{active:t.active===i.id},on:{click:function(e){return t.activate(i.id,i.value)}}},[t._v(t._s(i.text))])])})),0)},F=[],G={data:()=>({active:1}),props:{options:{type:Array,required:!0}},components:{MyBtn:g},methods:{activate(t,e){this.active=t,this.$emit("select",e)}}},j=G,$=(0,m.A)(j,S,F,!1,null,"034a2850",null),q=$.exports,B={data:()=>({lowestSound:c,higherSound:l,lowerSound:u,highestSound:d,padsQueue:[],copyQueue:[],waitForClick:!1,showAlert:!1,level:1500,round:0}),components:{MyBtn:g,PadComponent:x,MyAlert:O,MyToggleBtn:q},methods:{clickHandler([t,e]){if(e&&this.waitForClick){if(this.copyQueue.length||(this.copyQueue=[...this.padsQueue]),this.copyQueue.shift()!==t)return this.stopGame(),void(this.showAlert=!0);this.copyQueue.length||(this.waitForClick=!1,this.round++,setTimeout((()=>{this.playGame()}),1e3))}},playGame(){if(this.padsQueue.length){let t=0;const e=setInterval((()=>{this.activatePad(this.padsQueue[t]),++t>=this.padsQueue.length&&(setTimeout((()=>{this.activateRandomPad(),this.waitForClick=!0}),this.level),clearInterval(e))}),this.level)}else this.waitForClick=!0,this.activateRandomPad()},activateRandomPad(){const t=document.querySelectorAll(".pad");let e;if(this.padsQueue.length){const i=[...t],n=this.padsQueue.at(-1),o=i.filter((t=>t!==n));return e=o[Math.floor(Math.random()*o.length)],this.padsQueue.push(e),void this.activatePad(e)}e=t[Math.floor(Math.random()*t.length)],this.padsQueue.push(e),this.activatePad(e)},activatePad(t){t.click()},setLevel(t){this.level=t},stopGame(){this.padsQueue=[],this.copyQueue=[],this.waitForClick=!1,this.round=0}}},H=B,V=(0,m.A)(H,r,a,!1,null,"f9e321cc",null),R=V.exports,I={components:{GamePage:R}},L=I,E=(0,m.A)(L,o,s,!1,null,null,null),N=E.exports,z=i(9325),D=i.n(z);n.Ay.config.productionTip=!1,n.Ay.config.devtools=!0,new n.Ay({router:D(),render:t=>t(N)}).$mount("#app")},9325:function(){}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return t[n].call(s.exports,s,s.exports,i),s.exports}i.m=t,function(){var t=[];i.O=function(e,n,o,s){if(!n){var r=1/0;for(u=0;u<t.length;u++){n=t[u][0],o=t[u][1],s=t[u][2];for(var a=!0,c=0;c<n.length;c++)(!1&s||r>=s)&&Object.keys(i.O).every((function(t){return i.O[t](n[c])}))?n.splice(c--,1):(a=!1,s<r&&(r=s));if(a){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[n,o,s]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.p="/vue-pages/"}(),function(){var t={524:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,s,r=n[0],a=n[1],c=n[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(o in a)i.o(a,o)&&(i.m[o]=a[o]);if(c)var u=c(i)}for(e&&e(n);l<r.length;l++)s=r[l],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(u)},n=self["webpackChunkvue_test_case_0_2"]=self["webpackChunkvue_test_case_0_2"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[504],(function(){return i(8522)}));n=i.O(n)})();
//# sourceMappingURL=app.fcc20fd1.js.map