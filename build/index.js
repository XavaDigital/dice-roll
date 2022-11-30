(()=>{var e,a={165:(e,a,l)=>{"use strict";const t=window.wp.blocks;function s(){return s=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e},s.apply(this,arguments)}const n=window.wp.element;var r=l(184),o=l.n(r);const c=window.wp.i18n,m=window.wp.blockEditor,i=window.wp.components,d=JSON.parse('{"u2":"xavadigital/dice-roll"}');(0,t.registerBlockType)(d.u2,{edit:function(e){let{attributes:a,setAttributes:l}=e;const{align:t,backgroundColor:r,rollMessage1:d,rollMessage2:p,rollMessage3:E,rollMessage4:g,rollMessage5:u,rollMessage6:N}=a,h=(0,m.useBlockProps)({className:o()({[`has-text-align-${t}`]:t})}),v=(e,a)=>{l({[`rollMessage${e}`]:a})};return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(m.InspectorControls,null,(0,n.createElement)(i.PanelBody,{title:(0,c.__)("Custom Messages","dice-roll"),initialOpen:!0},(0,n.createElement)(i.PanelRow,null,(0,n.createElement)("fieldset",null,(0,n.createElement)(i.TextareaControl,{label:(0,c.__)("Roll 1 - Message","dice-roll"),value:d,onChange:e=>v(1,e),help:(0,c.__)("Add the message to be displayed when a 1 is rolled","dice-roll")}))),(0,n.createElement)(i.PanelRow,null,(0,n.createElement)("fieldset",null,(0,n.createElement)(i.TextareaControl,{label:(0,c.__)("Roll 2 - Message","dice-roll"),value:p,onChange:e=>v(2,e),help:(0,c.__)("Add the message to be displayed when a 2 is rolled","dice-roll")}))),(0,n.createElement)(i.PanelRow,null,(0,n.createElement)("fieldset",null,(0,n.createElement)(i.TextareaControl,{label:(0,c.__)("Roll 3 - Message","dice-roll"),value:E,onChange:e=>v(3,e),help:(0,c.__)("Add the message to be displayed when a 3 is rolled","dice-roll")}))),(0,n.createElement)(i.PanelRow,null,(0,n.createElement)("fieldset",null,(0,n.createElement)(i.TextareaControl,{label:(0,c.__)("Roll 4 - Message","dice-roll"),value:g,onChange:e=>v(4,e),help:(0,c.__)("Add the message to be displayed when a 4 is rolled","dice-roll")}))),(0,n.createElement)(i.PanelRow,null,(0,n.createElement)("fieldset",null,(0,n.createElement)(i.TextareaControl,{label:(0,c.__)("Roll 5 - Message","dice-roll"),value:u,onChange:e=>v(5,e),help:(0,c.__)("Add the message to be displayed when a 5 is rolled","dice-roll")}))),(0,n.createElement)(i.PanelRow,null,(0,n.createElement)("fieldset",null,(0,n.createElement)(i.TextareaControl,{label:(0,c.__)("Roll 6 - Message","dice-roll"),value:N,onChange:e=>v(6,e),help:(0,c.__)("Add the message to be displayed when a 6 is rolled","dice-roll")}))))),(0,n.createElement)("div",s({},h,{style:{backgroundColor:r}}),(0,n.createElement)("div",{className:"dice-roll-block"},(0,n.createElement)("div",{className:"dice",onClick:function(){const e=[...document.querySelectorAll(".die-list")],a=document.querySelector("#roll-message");a.innerHTML="Rolling...",e.forEach((e=>{var l,t;!function(e){e.classList.toggle("odd-roll"),e.classList.toggle("even-roll")}(e),e.dataset.roll=(l=1,t=6,l=Math.ceil(l),t=Math.floor(t),Math.floor(Math.random()*(t-l+1))+l),setTimeout((()=>{switch(parseInt(e.dataset.roll)){case 1:a.innerHTML=`<span>${d}</span>`;break;case 2:a.innerHTML=`<span>${p}</span>`;break;case 3:a.innerHTML=`<span>${E}</span>`;break;case 4:a.innerHTML=`<span>${g}</span>`;break;case 5:a.innerHTML=`<span>${u}</span>`;break;case 6:a.innerHTML=`<span>${N}</span>`}}),1500)}))}},(0,n.createElement)("ol",{className:"die-list even-roll","data-roll":"1",id:"die-1"},(0,n.createElement)("li",{className:"die-item","data-side":"1"},(0,n.createElement)("span",{className:"dot"})),(0,n.createElement)("li",{className:"die-item","data-side":"2"},(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"})),(0,n.createElement)("li",{className:"die-item","data-side":"3"},(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"})),(0,n.createElement)("li",{className:"die-item","data-side":"4"},(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"})),(0,n.createElement)("li",{className:"die-item","data-side":"5"},(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"})),(0,n.createElement)("li",{className:"die-item","data-side":"6"},(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"})))),(0,n.createElement)("span",{id:"roll-message"}))))},save:function(e){let{attributes:a}=e;const{align:l,title:t,titleSize:r,content:c,backgroundColor:i,textColor:d,rollMessage1:p,rollMessage2:E,rollMessage3:g,rollMessage4:u,rollMessage5:N,rollMessage6:h}=a,v=m.useBlockProps.save({className:o()({[`has-text-align-${l}`]:l})});return(0,n.createElement)("div",s({},v,{style:{backgroundColor:i}}),(0,n.createElement)(m.RichText.Content,{tagName:"h2",value:t}),(0,n.createElement)(m.RichText.Content,{tagName:"p",value:c,style:{textAlign:l,color:d}}),(0,n.createElement)("p",null),(0,n.createElement)("div",{className:"dice-roll-block"},(0,n.createElement)("div",{className:"dice"},(0,n.createElement)("ol",{className:"die-list even-roll","data-roll":"1",id:"roll-button"},(0,n.createElement)("li",{className:"die-item","data-side":"1"},(0,n.createElement)("span",{className:"dot"})),(0,n.createElement)("li",{className:"die-item","data-side":"2"},(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"})),(0,n.createElement)("li",{className:"die-item","data-side":"3"},(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"})),(0,n.createElement)("li",{className:"die-item","data-side":"4"},(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"})),(0,n.createElement)("li",{className:"die-item","data-side":"5"},(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"})),(0,n.createElement)("li",{className:"die-item","data-side":"6"},(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"}),(0,n.createElement)("span",{className:"dot"})))),(0,n.createElement)("div",{id:"rollMessage1",className:"roll-message",dangerouslySetInnerHTML:{__html:p}}),(0,n.createElement)("div",{id:"rollMessage2",className:"roll-message",dangerouslySetInnerHTML:{__html:E}}),(0,n.createElement)("div",{id:"rollMessage3",className:"roll-message",dangerouslySetInnerHTML:{__html:g}}),(0,n.createElement)("div",{id:"rollMessage4",className:"roll-message",dangerouslySetInnerHTML:{__html:u}}),(0,n.createElement)("div",{id:"rollMessage5",className:"roll-message",dangerouslySetInnerHTML:{__html:N}}),(0,n.createElement)("div",{id:"rollMessage6",className:"roll-message",dangerouslySetInnerHTML:{__html:h}})))}})},184:(e,a)=>{var l;!function(){"use strict";var t={}.hasOwnProperty;function s(){for(var e=[],a=0;a<arguments.length;a++){var l=arguments[a];if(l){var n=typeof l;if("string"===n||"number"===n)e.push(l);else if(Array.isArray(l)){if(l.length){var r=s.apply(null,l);r&&e.push(r)}}else if("object"===n)if(l.toString===Object.prototype.toString)for(var o in l)t.call(l,o)&&l[o]&&e.push(o);else e.push(l.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(l=function(){return s}.apply(a,[]))||(e.exports=l)}()}},l={};function t(e){var s=l[e];if(void 0!==s)return s.exports;var n=l[e]={exports:{}};return a[e](n,n.exports,t),n.exports}t.m=a,e=[],t.O=(a,l,s,n)=>{if(!l){var r=1/0;for(i=0;i<e.length;i++){for(var[l,s,n]=e[i],o=!0,c=0;c<l.length;c++)(!1&n||r>=n)&&Object.keys(t.O).every((e=>t.O[e](l[c])))?l.splice(c--,1):(o=!1,n<r&&(r=n));if(o){e.splice(i--,1);var m=s();void 0!==m&&(a=m)}}return a}n=n||0;for(var i=e.length;i>0&&e[i-1][2]>n;i--)e[i]=e[i-1];e[i]=[l,s,n]},t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a}),a},t.d=(e,a)=>{for(var l in a)t.o(a,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:a[l]})},t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e={826:0,431:0};t.O.j=a=>0===e[a];var a=(a,l)=>{var s,n,[r,o,c]=l,m=0;if(r.some((a=>0!==e[a]))){for(s in o)t.o(o,s)&&(t.m[s]=o[s]);if(c)var i=c(t)}for(a&&a(l);m<r.length;m++)n=r[m],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(i)},l=globalThis.webpackChunkdice_roll=globalThis.webpackChunkdice_roll||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))})();var s=t.O(void 0,[431],(()=>t(165)));s=t.O(s)})();