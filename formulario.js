let txt1 = document.getElementById("texto1");
let txt2 = document.getElementById("texto2");
let txt3 = document.getElementById("texto3");
let txt4 = document.getElementById("nombre");
console.log(txt1);
console.log(txt2);
console.log(txt4);
txt1.textContent="Universidad";
txt2.innerHTML="Los Limones";
txt3.textContent= txt1.textContent + " " + txt2.textContent;

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    console.log("ut");
  } else if (i % 5 == 0) {
    console.log("ingenieria");
  } else {
    console.log(i);
  }
}
