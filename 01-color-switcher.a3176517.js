const t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),body:document.querySelector("body")};let e;function o(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t.start.addEventListener("click",(function(){t.body.style.backgroundColor=o(),e=setInterval((()=>{t.body.style.backgroundColor=o()}),1e3),t.start.disabled=!0,t.stop.disabled=!1})),t.stop.addEventListener("click",(function(){clearInterval(e),t.start.disabled=!1,t.stop.disabled=!0}));
//# sourceMappingURL=01-color-switcher.a3176517.js.map
