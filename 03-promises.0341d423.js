var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire7bc7;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequire7bc7=r);var i=r("iQIUW");const o={inputFirstDelay:document.querySelector('[name="delay"]'),inputDelayStep:document.querySelector('[name="step"]'),inputAmount:document.querySelector('[name="amount"]'),formSubmit:document.querySelector(".form")};let u,a,l;o.inputFirstDelay.addEventListener("input",(e=>{u=e.target.value})),o.inputDelayStep.addEventListener("input",(e=>{a=e.target.value})),o.inputAmount.addEventListener("input",(e=>{l=e.target.value})),o.formSubmit.addEventListener("submit",(e=>{e.preventDefault(),e.target.reset();const t=[];for(let e=1;e<=l;e+=1)t.push(e);t.map((e=>setTimeout((()=>{var t,n;(t=e,n=Number(u)+a*(e-1),Math.random()>.3?Promise.resolve({position:t,delay:n}):Promise.reject({position:t,delay:n})).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}))}),Number(u)+a*(e-1))))}));
//# sourceMappingURL=03-promises.0341d423.js.map
