import{a as d,i as m,S as y}from"./assets/vendor-b57ab84a.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const p of e.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function o(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(s){if(s.ep)return;s.ep=!0;const e=o(s);fetch(s.href,e)}})();async function g(){return d.defaults.baseURL="https://pixabay.com/api/",(await d.get("",{params:{key:"42244412-4baf4dd8f3efd9c6d484c6d30",image_type:"photo",orientation:"horizontal",safesearch:"true",q:f,page:i,per_page:h}})).data}const u=document.querySelector(".form"),c=document.querySelector(".gallery"),r=document.querySelector(".loader"),n=document.querySelector(".load");let f=null,i=1;const h=15;let b=0;r.style.display="none";n.style.display="none";u.addEventListener("submit",L);async function L(t){t.preventDefault();const l=t.target.elements.text.value;f=l,r.style.display="block",i=1;try{const o=await g(l);if(b=o.totalHits,o.hits.length===0)c.innerHTML="",r.style.display="none",n.style.display="none",m.error({message:"Sorry, there are no images matching your search query. Please try again!"});else{r.style.display="none";const s=o.hits.map(e=>`<li class="item"> <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
     
      src="${e.webformatURL}"
      
      alt="${e.tags}"
    />
  </a><ul class="list">
  <li class="group"><p class="desc">likes<span class="amount">${e.likes}</span></p></li>
  <li class="group"><p class="desc">views<span class="amount"> ${e.views}</span></p></li>
  <li class="group"><p class="desc">comments<span class="amount"> ${e.comments}</span></p></li>
  <li class="group"><p class="desc">downloads<span class="amount"> ${e.downloads}</span></p></li>
  </ul>
  </li>`).join("");c.innerHTML=s,n.style.display="block"}new y(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),w()}catch(o){console.error("Error data:",o)}}u.reset();n.addEventListener("click",$);async function $(){i+=1,r.style.display="block";try{const t=await g();r.style.display="none";const l=t.hits.map(a=>`<li class="item"> <a class="gallery-link" href="${a.largeImageURL}">
    <img
      class="gallery-image"
     
      src="${a.webformatURL}"
      
      alt="${a.tags}"
    />
  </a><ul class="list">
  <li class="group"><p class="desc">likes<span class="amount">${a.likes}</span></p></li>
  <li class="group"><p class="desc">views<span class="amount"> ${a.views}</span></p></li>
  <li class="group"><p class="desc">comments<span class="amount"> ${a.comments}</span></p></li>
  <li class="group"><p class="desc">downloads<span class="amount"> ${a.downloads}</span></p></li>
  </ul>
  </li>`).join("");c.insertAdjacentHTML("beforeend",l),v(),new y(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),w()}catch(t){console.error("Error data:",t)}u.reset()}function w(){Math.ceil(b/h)===i&&(n.style.display="none",m.error({message:"We're sorry, but you've reached the end of search results."}))}function v(){const t=c.querySelector(".item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth",left:0})}
//# sourceMappingURL=commonHelpers.js.map
