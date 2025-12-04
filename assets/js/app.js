/* ======================================================
   Script Tombol Scroll to Top
   ====================================================== */

// Ambil elemen tombol
const scrollBtn = document.getElementById("scrollTopBtn");

// Tampilkan tombol saat scroll 200px ke bawah
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

// Scroll ke atas dengan efek smooth
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
