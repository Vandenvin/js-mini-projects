const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body");t.addEventListener("click",(function(){console.log("Start color change"),r=setInterval(n,1e3),t.setAttribute("disabled","true"),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(r),console.log("Stop color change"),e.setAttribute("disabled","true"),t.removeAttribute("disabled")}));let r=null,l="#ffffff";function n(){l=`#${Math.floor(16777215*Math.random()).toString(16)}`,o.style.backgroundColor=l,console.log("Body-color: ",l)}
//# sourceMappingURL=06-color-switcher.05cbc771.js.map
