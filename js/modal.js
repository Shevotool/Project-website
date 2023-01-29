export default function modalAbout() {
  const dialog = document.querySelector("dialog");
  const cancel = document.querySelector("#cancel");
  const show = document.querySelector("#show");

  show.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.showModal();
  });
  cancel.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
  });
}
