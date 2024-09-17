let signin = document.getElementById("signin");
let overlay = document.getElementById("overlay");
let change = document.getElementById("change");
change.addEventListener("click" , ()=>{

    if (change.classList.contains('show')) {
        change.classList.remove('show');
        change.classList.remove('red');
        change.classList.add('green');
        change.innerText = 'signup';
    } else {
        change.classList.add('show');
        change.classList.remove('green');
        change.classList.add('red');
        change.innerText = 'signin';
    }
  

    overlay.classList.toggle("show")
  
});