import{i as p,S as d}from"./assets/vendor-acbca2f4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();const u=document.querySelector(".form"),i=document.querySelector(".gallery"),a=document.querySelector(".loader");a.style.display="none";u.addEventListener("submit",f);function f(o){o.preventDefault();const t=o.target.elements.text.value;m(t),u.reset()}function m(o){const t="https://pixabay.com/api/",c=`?key=42244412-4baf4dd8f3efd9c6d484c6d30&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`,n=t+c;return a.style.display="block",fetch(n).then(e=>e.json()).then(e=>{if(e.hits.length===0)i.innerHTML="",a.style.display="none",p.error({message:"Sorry, there are no images matching your search query. Please try again!"});else{a.style.display="none";const l=e.hits.map(r=>`<li class="item"> <a class="gallery-link" href="${r.largeImageURL}">
    <img
      class="gallery-image"
     
      src="${r.webformatURL}"
      
      alt="${r.tags}"
    />
  </a><ul class="list">
  <li class="group"><p class="desc">likes<span class="amount">${r.likes}</span></p></li>
  <li class="group"><p class="desc">views<span class="amount"> ${r.views}</span></p></li>
  <li class="group"><p class="desc">comments<span class="amount"> ${r.comments}</span></p></li>
  <li class="group"><p class="desc">downloads<span class="amount"> ${r.downloads}</span></p></li>
  </ul>
  </li>`).join("");i.innerHTML=l}new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(e=>{throw toastError(`Error: ${e}`),e})}
//# sourceMappingURL=commonHelpers.js.map
