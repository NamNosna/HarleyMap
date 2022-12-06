function toggleHidingSection(button) {
    if (button.getAttribute("data-toggleStatus") == "hide") {
        document.getElementById(button.getAttribute("data-divId")).setAttribute("class", "show")
        button.setAttribute("data-toggleStatus", "show")
        button.innerHTML = "Hide " + button.getAttribute("data-showName")
    }
    else {
        document.getElementById(button.getAttribute("data-divId")).setAttribute("class", "hide")
        button.setAttribute("data-toggleStatus", "hide")
        button.innerHTML = "Show " + button.getAttribute("data-showName")
    }
}