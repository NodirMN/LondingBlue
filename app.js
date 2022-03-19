console.clear();

const tabNavButtons = document.querySelectorAll(".tab-nav button");
const marker = document.querySelector(".tab-nav-marker");

function setMarker() {
    const activeTabEl = document.querySelector(
        '.tab-nav button[data-active="true"]'
    );
    const activeTabNavPos = activeTabEl.getBoundingClientRect();
    const {
        width
    } = activeTabNavPos;
    marker.style.width = `${width}px`;
    marker.style.transform = `translateX(${activeTabEl.offsetLeft}px)`;
}

function handleTabNavClick(e) {
    const btn = e.currentTarget;
    const targetSelector = `#${btn.dataset.open}`;
    tabNavButtons.forEach((el) => {
        el.classList.remove("text-purple-800");
        el.classList.add("text-gray-600");
        el.setAttribute("data-active", false);
    });
    document
        .querySelectorAll(".tab-content")
        .forEach((el) => el.classList.add("hidden"));
    document.querySelector(targetSelector).classList.remove("hidden");
    btn.classList.remove("text-gray-600");
    btn.classList.add("text-purple-800");
    btn.setAttribute("data-active", true);
    setMarker();
}

setMarker();

tabNavButtons.forEach((button) => {
    button.addEventListener("click", handleTabNavClick);
});
