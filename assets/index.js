const selectionButtons = document.querySelectorAll("[data-select]");

selectionButtons.forEach(selectButton => {
  selectButton.addEventListener("click", e => {
    const selectionName = selectButton.dataset.select;
    makeSelection(selectionName);
  });
});

function makeSelection(selection) {
  console.log(selection);
}
