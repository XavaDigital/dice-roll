(()=>{var l;(l=jQuery)(document).ready((function(){l("#roll-button").on("click",(function(){const e=[...document.querySelectorAll(".die-list")];document.querySelectorAll(".die-list"),l(".roll-message").each(((e,o)=>{l(o).hide()})),e.forEach((e=>{var o,t;!function(l){l.classList.toggle("odd-roll"),l.classList.toggle("even-roll")}(e),e.dataset.roll=(o=1,t=6,o=Math.ceil(o),t=Math.floor(t),Math.floor(Math.random()*(t-o+1))+o),setTimeout((()=>{l(`#rollMessage${e.dataset.roll}`).each(((e,o)=>{l(o).show()}))}),1500)}))}))}))})();