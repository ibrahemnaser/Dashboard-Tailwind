const togglerIcon = document.getElementById("toggler");
const sideBar = document.getElementById("sidebar");
export function showSidebar() {
  togglerIcon.addEventListener("click", () => {
    togglerIcon.classList.toggle("toggled");
    sideBar.classList.toggle("left-[-100%]");
  });
}
