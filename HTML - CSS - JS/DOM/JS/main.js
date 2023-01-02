console.log(document.getElementById('my-id'));
console.log(document.querySelector('#my-id'));


console.log(document.getElementsByClassName('my-class'));
console.log(document.querySelectorAll('.my-class')[1]);

console.log(document.getElementsByTagName('ul'))

let google= document.getElementById("google-id");

console.log(google.href)
console.log(google.id)

console.log(google.className)
console.log(google.textContent)
google.textContent="Mon lien vers Google";

let div1 = document.querySelectorAll('.my-class')[0];
let div2= document.querySelectorAll('.my-class')[1];
let div3= document.querySelectorAll('.my-class')[2];

div1.innerText="Premiere div";
div1.classList.add('maj')
div2.innerText="deuxieme div";
div2.classList.add('bg-green')
div3.innerText="troisiemme div";
div3.classList.add('blue_Border')

let h1 = document.createElement("h1");
h1.textContent="Bienvenue Quentin";
h1.id="welcome";
document.body.appendChild(h1);

h1.addEventListener("click",e =>{
    e.preventDefault();
    h1.style.color==="black" ? h1.style.color="red" : h1.style.color="black";
})

while (i)
