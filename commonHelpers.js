import{a as d,i as m,S as f}from"./assets/vendor-b57ab84a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const u=document.querySelector(".form"),c=document.querySelector(".gallery"),n=document.querySelector(".loader");n.style.display="none";u.addEventListener("submit",y);function y(o){o.preventDefault();const t=o.target.elements.text.value;g(t),u.reset()}async function g(o){const t="https://pixabay.com/api/",i=`?key=42244412-4baf4dd8f3efd9c6d484c6d30&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`,a=t+i;n.style.display="block";const e=await d.get(a);try{const s=await e;if(s.hits.length===0)c.innerHTML="",n.style.display="none",m.error({message:"Sorry, there are no images matching your search query. Please try again!"});else{n.style.display="none";const p=s.hits.map(r=>`<li class="item"> <a class="gallery-link" href="${r.largeImageURL}">
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
  </li>`).join("");c.innerHTML=p}new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}catch(s){throw toastError(`Error: ${s}`),s}}
//# sourceMappingURL=commonHelpers.js.map
