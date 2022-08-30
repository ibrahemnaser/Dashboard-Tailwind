const togglerIcon = document.getElementById("toggler");
const sideBar = document.getElementById("sidebar");
const modal = document.querySelector(".modal");
export function showSidebar() {
  togglerIcon.addEventListener("click", () => {
    modal.classList.toggle("opacity-50");
    modal.classList.toggle("opacity-0");
    modal.classList.toggle("h-screen");
    sideBar.classList.toggle("show");
  });
  modal.addEventListener("click", () => {
    sideBar.classList.remove("show");
    modal.classList.remove("opacity-50");
    modal.classList.add("opacity-0");
    modal.classList.remove("h-screen");
  });
}
