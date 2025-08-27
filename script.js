function getElement(id) {
  let newElement = document.getElementById(id);
  return newElement;
}

getElement("card-section").addEventListener("click", function (e) {
  if (e.target.classList.contains("heart")) {
    let heart1 = getElement("heart-1").innerText;
    let heart1Number = Number(heart1);

    getElement("heart-1").innerText = heart1Number + 1;
  }
});
