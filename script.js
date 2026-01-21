const miasma_dialog = document.querySelector("#miasma-modal");
const wizard_dialog = document.querySelector("#wizard-modal")
const deal_dialog = document.querySelector("#deal-modal")

const miasma_showButton = document.querySelector(".miasma-btn");
const wizard_showButton = document.querySelector(".wizard-btn")
const deal_showButton = document.querySelector(".deal-btn")

const m_closeButton = document.querySelector("#miasma-modal button");
const w_closeButton = document.querySelector("#wizard-modal button");
const d_closeButton = document.querySelector("#deal-modal button")

// "Show the dialog" button opens the dialog modally
miasma_showButton.addEventListener("click", () => {
  miasma_dialog.showModal();
});

wizard_showButton.addEventListener("click", ()=>{
  wizard_dialog.showModal();
});

deal_showButton.addEventListener("click", ()=>{
  deal_dialog.showModal();
});

// "Close" button closes the dialog
m_closeButton.addEventListener("click", () => {
  miasma_dialog.close();
});

w_closeButton.addEventListener("click", () => {
  wizard_dialog.close();
});

d_closeButton.addEventListener("click", () => {
  deal_dialog.close();
});
//probably just gonna end up doing a function for each different button, which feels really inefficient, but it's what on my brain right now at 8:30pm on a Thursday