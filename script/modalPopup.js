window.addEventListener("load", function () {
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closePopup");

    popup.style.display = "flex"; // mostra sempre que abrir o site

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });
});