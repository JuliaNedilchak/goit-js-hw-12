import{a as d,i as m,S as y}from"./assets/vendor-b57ab84a.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const p of e.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&t(p)}).observe(document,{childList:!0,subtree:!0});function o(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function t(s){if(s.ep)return;s.ep=!0;const e=o(s);fetch(s.href,e)}})();async function g(){return d.defaults.baseURL="https://pixabay.com/api/",(await d.get("",{params:{key:"42244412-4baf4dd8f3efd9c6d484c6d30",image_type:"photo",orientation:"horizontal",safesearch:"true",q:f,page:i,per_page:h}})).data}const u=document.querySelector(".form"),c=document.querySelector(".gallery"),n=document.querySelector(".loader"),r=document.querySelector(".load");let f=null,i=1;const h=15;let b=0;n.style.display="none";r.style.display="none";u.addEventListener("submit",L);async function L(a){a.preventDefault(),f=a.target.elements.text.value,n.style.display="block",i=1;const o=await g();if(b=o.totalHits,o.hits.length===0)c.innerHTML="",n.style.display="none",r.style.display="none",m.error({message:"Sorry, there are no images matching your search query. Please try again!"});else{n.style.display="none";const s=o.hits.map(e=>`<li class="item"> <a class="gallery-link" href="${e.largeImageURL}">
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
  </li>`).join("");c.innerHTML=s,r.style.display="block"}new y(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),w(),u.reset()}r.addEventListener("click",$);async function $(){i+=1,n.style.display="block";const a=await g();n.style.display="none";const l=a.hits.map(t=>`<li class="item"> <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
     
      src="${t.webformatURL}"
      
      alt="${t.tags}"
    />
  </a><ul class="list">
  <li class="group"><p class="desc">likes<span class="amount">${t.likes}</span></p></li>
  <li class="group"><p class="desc">views<span class="amount"> ${t.views}</span></p></li>
  <li class="group"><p class="desc">comments<span class="amount"> ${t.comments}</span></p></li>
  <li class="group"><p class="desc">downloads<span class="amount"> ${t.downloads}</span></p></li>
  </ul>
  </li>`).join("");c.insertAdjacentHTML("beforeend",l),v(),new y(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),w(),u.reset()}function w(){Math.ceil(b/h)===i&&(r.style.display="none",m.error({message:"We're sorry, but you've reached the end of search results."}))}function v(){const a=c.querySelector(".item").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth",left:0})}
//# sourceMappingURL=commonHelpers.js.map
