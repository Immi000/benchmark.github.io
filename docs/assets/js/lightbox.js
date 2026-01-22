document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("lightbox-overlay");
  const overlayImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");

  // 1) Open lightbox on click of any .lightboxable <img>
  document.body.addEventListener("click", (event) => {
    // If clicked element is an <img> with class "lightboxable"
    if (
      event.target.tagName.toLowerCase() === "img" &&
      event.target.classList.contains("lightboxable")
    ) {
      // Set the overlay image src to the clicked image's src
      overlayImg.src = event.target.src;
      // Show the overlay by adding .show
      overlay.classList.add("show");
    }
  });

  // 2) Close the lightbox if user clicks the close button
  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("show");
  });

  // 3) (Optional) Also close if user clicks the dark background (but not the image)
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("show");
    }
  });
});
