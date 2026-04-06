let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

let themeToggler = document.querySelector(".theme-toggler");
let toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.onclick = () => {
  themeToggler.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  themeToggler.classList.remove("active");
};

document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--theme-color", color);
  };
});

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
// Track login state
let isLoggedIn = false;

// Elements
let loginSection = document.querySelector("#login");
let openLoginBtn = document.querySelector("#openLogin");
let loginForm = document.querySelector("#loginForm");

// Button Click (Login / Logout)
openLoginBtn.onclick = (e) => {
  e.preventDefault();

  // If logged in → Logout
  if (isLoggedIn) {
    isLoggedIn = false;
    openLoginBtn.innerHTML = "Register Now";
    alert("Logged Out!");
    return;
  }

  // If not logged in → show login form
  loginSection.style.display = "flex";
  window.scrollTo({
    top: loginSection.offsetTop,
    behavior: "smooth"
  });
};

// Handle Login
loginForm.onsubmit = (e) => {
  e.preventDefault();

  isLoggedIn = true;

  // Change button text
  openLoginBtn.innerHTML = "Logout";

  // Hide login form
  loginSection.style.display = "none";

  alert("Login Successful!");
};
let popup = document.querySelector("#imagePopup");
let popupImg = document.querySelector("#popupImg");
let closeBtn = document.querySelector("#closePopup");

let viewBtns = document.querySelectorAll(".fa-eye");

viewBtns.forEach((btn) => {
  btn.onclick = (e) => {
    e.preventDefault();

    // Go to parent .box and get image
    let img = btn.closest(".box").querySelector("img");

    popup.style.display = "flex";
    popupImg.src = img.src;
  };
});

// Close popup
closeBtn.onclick = () => {
  popup.style.display = "none";
};

// Close on outside click
popup.onclick = (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
};
// Elements
let signupSection = document.querySelector("#signup");
let openSignup = document.querySelector("#openSignup");
let backToLogin = document.querySelector("#backToLogin");

// Open Signup
openSignup.onclick = (e) => {
  e.preventDefault();
  loginSection.style.display = "none";
  signupSection.style.display = "flex";
};

// Back to Login
backToLogin.onclick = (e) => {
  e.preventDefault();
  signupSection.style.display = "none";
  loginSection.style.display = "flex";
};

// Handle Signup
let signupForm = document.querySelector("#signupForm");

signupForm.onsubmit = (e) => {
  e.preventDefault();

  signupSection.style.display = "none";
  loginSection.style.display = "flex";

  alert("Account Created! Please Login.");
};
