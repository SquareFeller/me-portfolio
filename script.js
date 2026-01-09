const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".miasma-btn");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

//probably just gonna end up doing a function for each different button, which feels really inefficient, but it's what on my brain right now at 8:30pm on a Thursday