console.log("Website Promosi Usaha Aktif");
let currentSlide = 0;
const slides = document.getElementsByClassName("slide");

function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slides[index].classList.add("active");
}

function changeSlide(step) {
    currentSlide += step;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

// auto start
showSlide(currentSlide);
function openOrder() {
    document.getElementById("orderModal").style.display = "block";
}

function closeOrder() {
    document.getElementById("orderModal").style.display = "none";
}

function goToWhatsApp() {
    window.location.href = "https://wa.me/6281234567890?text=Halo%20saya%20ingin%20pesan%20bunga%20Fresh%20Flower%20Sabrina";
}