if(document.querySelector(".check")){let l=document.querySelector(".check");l.innerHTML=="Transaction sucessfull"&&(document.querySelector("#popup-container").style.display="block",document.querySelector("#overlay").style.display="block",document.querySelector(".alert2").style.display="block",setTimeout(()=>{document.querySelector(".down").click(),document.querySelector(".alert2").style.display="none"},1500)),l=document.querySelector(".proceed").addEventListener("click",()=>{document.querySelector("#popup-container").style.display="none",document.querySelector("#overlay").style.display="none"}),document.querySelector(".down").addEventListener("click",()=>{document.querySelector("#popup-container").style.display="block",document.querySelector("#overlay").style.display="block",document.querySelector(".alert2").style.display="block"})}let u=document.querySelector(".table").getAttribute("name"),y=document.querySelector(".Add_comment"),s=document.querySelectorAll("input")[0];y.addEventListener("click",l=>{l.preventDefault();let a=document.querySelector(".content");console.log(a);let r=document.querySelector(".item_id").value,t=document.querySelector(".gb").innerHTML,o=document.querySelector(".owner").value,n=document.querySelector(".parent_id").value,c={content:a.value,item_id:r,parent_id:n,owner_id:o,title:t,table:u};a.value.length===0?document.querySelector(".com_err").innerHTML="Enter A Comment":fetch("/Add_comment",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":s.value},body:JSON.stringify(c)}).then(d(),document.querySelector(".content").value=" ")});d();function d(l){let r={id:document.querySelector(".item_id").value,table:u};fetch("/get_comment",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":s.value},body:JSON.stringify(r)}).then(t=>t.text()).then(t=>{document.querySelector(".comments").innerHTML=t,setTimeout(()=>{f(),S(),h()},1e3)})}function f(l){document.querySelectorAll(".reply-btn").forEach(r=>{r.addEventListener("click",()=>{let t=document.querySelector(".content");t.focus(),t.setAttribute("placeholder","Enter Reply"),document.querySelector(".parent_id").value=r.id})})}function S(l){document.querySelectorAll(".edit-btn").forEach(r=>{r.addEventListener("click",()=>{document.querySelector(".ed_id").value=r.id;let t=r.parentElement.querySelector(".rg").value,o=document.querySelector(".content");o.focus(),o.value=t,document.querySelector(".edit_comment").style.display="block",document.querySelector(".Add_comment").style.display="none",p()})})}function p(l){document.querySelector(".edit_comment").addEventListener("click",()=>{let a=document.querySelector(".content"),r=document.querySelector(".ed_id").value,t={content:a.value,comment_id:r};a.value.length===0?document.querySelector(".com_err").innerHTML="Enter A Comment":fetch("/edit_comment",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":s.value},body:JSON.stringify(t)}).then(d(),document.querySelector(".edit_comment").style.display="none",document.querySelector(".Add_comment").style.display="block",document.querySelector(".content").value=" ")})}function h(l){document.querySelectorAll(".delete-btn").forEach(r=>{r.addEventListener("click",()=>{let t=r.id;fetch("/delete_comment/"+t,{method:"DELETE",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":s.value}}).then(d())})})}if(document.querySelectorAll(".star")[0]){let a=function(){let t=document.querySelector(".item_id").value;fetch("/p_get_rating/"+t,{method:"GET",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":s.value}}).then(o=>o.json()).then(o=>{if(o.rating.length!==0){let n=o.rating[0].rate;if(n==1)l[0].classList.replace("fa-regular","fa-solid");else{for(let c=n-1;c>-1;c--)l[c].classList.replace("fa-regular","fa-solid");for(let c=n;c<l.length;c++)l[c].classList="fa-regular fa-star star"}}})},r=function(){let t=document.querySelector(".item_id").value,o=document.querySelector(".num_rates"),n=document.querySelector(".num_raters");fetch("/other_rating/"+t,{method:"GET",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":s.value}}).then(c=>c.json()).then(c=>{n.innerHTML=c.rating.length;let e=0;c.rating.forEach(i=>{if(e+=i.rate,e>20&&e<101&&(e<=80?document.querySelector("#h1").classList.add("fa-star","fa-star-half-stroke"):document.querySelector("#h1").classList.replace("fa-regular","fa-solid")),e>120&&e<201&&(document.querySelector("#h1").classList.replace("fa-regular","fa-solid"),e<=180?document.querySelector("#h2").classList.add("fa-star","fa-star-half-stroke"):document.querySelector("#h2").classList.replace("fa-regular","fa-solid")),e>220&&e<301&&(document.querySelector("#h1").classList.replace("fa-regular","fa-solid"),document.querySelector("#h2").classList.replace("fa-regular","fa-solid"),e<=280?document.querySelector("#h3").classList.add("fa-star","fa-star-half-stroke"):document.querySelector("#h3").classList.replace("fa-regular","fa-solid")),e>320&&e<480&&(document.querySelector("#h1").classList.replace("fa-regular","fa-solid"),document.querySelector("#h2").classList.replace("fa-regular","fa-solid"),document.querySelector("#h3").classList.replace("fa-regular","fa-solid"),e<=380?document.querySelector("#h4").classList.add("fa-star","fa-star-half-stroke"):document.querySelector("#h4").classList.replace("fa-regular","fa-solid")),e>520&&(document.querySelector("#h1").classList.replace("fa-regular","fa-solid"),document.querySelector("#h2").classList.replace("fa-regular","fa-solid"),document.querySelector("#h3").classList.replace("fa-regular","fa-solid"),document.querySelector("#h4").classList.replace("fa-regular","fa-solid"),e<=580?document.querySelector("#h5").classList.add("fa-star","fa-star-half-stroke"):document.querySelector("#h5").classList.replace("fa-regular","fa-solid")),e.toString().length>=4&&e.toString().length<=6){let m=(e/1e3).toFixed(1);o.innerHTML=m+"K"}else e.toString().length>=6?o.innerHTML=e+"M":o.innerHTML=e})})};var q=a,g=r;let l=document.querySelectorAll(".star");l.forEach(t=>{t.addEventListener("click",()=>{let o=t.id;if(o==1){t.classList.replace("fa-regular","fa-solid");for(let e=o;e<l.length;e++)l[e].classList="fa-regular fa-star star"}else{for(let e=o-1;e>-1;e--)l[e].classList.replace("fa-regular","fa-solid");for(let e=o;e<l.length;e++)l[e].classList="fa-regular fa-star star"}let n=document.querySelector(".book_id").value;console.log(document.querySelector(".book_id"));let c={book_id:n,rate:o};fetch("/add_rating",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":s.value},body:JSON.stringify(c)}).then(r())})}),a(),r()}
