let nav = document.getElementById("nav");
let hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click" ,() =>{
    nav.classList.toggle("show-nav")
});

let search_i = document.getElementById("search-i");
let search_b = document.getElementById("search-b");
let search_c = document.getElementById("close-s");

search_i.addEventListener("click" ,() =>{
    search_b.classList.toggle("show-search")
});
search_c.addEventListener("click" ,() =>{
    search_b.classList.remove("show-search")
});