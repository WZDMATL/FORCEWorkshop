function handleSubmit() {
  let name = prompt("What is your name?");
  let email = document.querySelector("#searchinput").value;
  submitEmail(email);
  alert("Thanks, " + name + ", for leaving your email. We'll stay in touch!");
}

let searchForm = document.querySelector("#search");
searchForm.addEventListener("submit", handleSubmit);
