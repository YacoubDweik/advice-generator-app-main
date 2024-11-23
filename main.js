let button = document.querySelector(".new");
let adviceId = document.querySelector(".advice__id");
let adviceText = document.querySelector(".advice__text");
let i = 0;

fetch("./db/advice.json")
  .then((data) => data.json())
  .then((data) => {
    adviceId.innerHTML = data[i]["id"];
    adviceText.innerHTML = `"${data[i]["advice"]}"`;
    handleData(data);
  });

function handleData(data) {
  button.addEventListener("click", handleClick);
  function handleClick() {
    i++;
    i == data.length ? (i = 0) : false;
    adviceId.innerHTML = data[i]["id"];
    adviceText.innerHTML = `"${data[i]["advice"]}"`;
  }
}
