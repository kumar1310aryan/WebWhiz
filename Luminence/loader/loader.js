const text = document.querySelector(".text p");
text.innerHTML = text.innerHTML
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 3.5}deg)">${char}</span>`
  )
  .join("");

const text2 = document.querySelector(".text2 p");
text2.innerHTML = text2.innerHTML
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 5}deg)">${char}</span>`
  )
  .join("");
