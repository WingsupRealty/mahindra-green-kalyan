function set_country_code(value) {
    document.getElementById("hidden_country_code").value = value;
}

document.addEventListener("DOMContentLoaded", function () {
    const popupForm = document.getElementById("popupForm");
    const closeBtn = document.querySelector(".close-btn");
    const openPopupButtons = document.querySelectorAll(".open-popup"); // Selector for all buttons

    // Function to open the popup
    function openPopup() {
        popupForm.style.display = "flex";
    }

    // Open the popup form when any button with the class 'open-popup' is clicked
    openPopupButtons.forEach(button => {
        button.addEventListener("click", openPopup);
    });

    // Close the popup form when the close button is clicked
    closeBtn.addEventListener("click", function () {
        popupForm.style.display = "none";
    });

    // Close the popup form when clicking outside the popup content
    window.addEventListener("click", function (event) {
        if (event.target == popupForm) {
            popupForm.style.display = "none";
        }
    });

    // Automatically open the popup form after 5 seconds
    setTimeout(openPopup, 5000); // 5000 milliseconds = 5 seconds

    // Open popup when play buttons are clicked
    document.getElementById("playVirtualSiteTour").addEventListener("click", openPopup);
    document.getElementById("playSampleFlatTour").addEventListener("click", openPopup);
});


// Burger menu functionality
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger");
    const navLinks = document.querySelector(".nav-links");

    burger.addEventListener("click", function () {
        navLinks.classList.toggle("active"); // Toggle the active class
    });
});




