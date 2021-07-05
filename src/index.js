function emailSubscribe() {
  let name = prompt("What is your name?");
  alert("Thanks for leaving your email. We'll be in touch, " + name + "!");
}

let subscribeButton = document.querySelector("#subscribe-form");
subscribeButton.addEventListener("submit", emailSubscribe);
