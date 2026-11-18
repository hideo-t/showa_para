const input = document.querySelector('#search');
const items = [...document.querySelectorAll('#archive > details')];
function filter() { const q=input.value.trim().toLocaleLowerCase(); let n=0; for(const item of items){item.hidden=!item.textContent.toLocaleLowerCase().includes(q); if(!item.hidden)n++;} document.querySelector('#count').textContent=`${n} / ${items.length} ページを表示`; }
input.addEventListener('input',filter);filter();
function reveal(){const el=document.getElementById(decodeURIComponent(location.hash.slice(1))); if(el?.tagName==='DETAILS'){input.value='';filter();el.open=true;el.scrollIntoView();}}
window.addEventListener('hashchange',reveal);reveal();
