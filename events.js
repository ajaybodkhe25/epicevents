let popup = document.querySelector("#eventPopup");
let popupImg = document.querySelector("#eventImg");
let closeBtn = document.querySelector("#closeEvent");

let images = document.querySelectorAll(".box img");

// Click image
images.forEach((img) => {
  img.onclick = () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
  };
});

// Close popup
closeBtn.onclick = () => {
  popup.style.display = "none";
};

// Close outside
popup.onclick = (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
};