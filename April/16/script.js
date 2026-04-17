const card = document.getElementById("card");
function toggleMode() {
    if (card.classList.contains("light")) {
        card.classList.remove("light");
    } else {
        card.classList.add("light");
    }
}
lucide.createIcons();