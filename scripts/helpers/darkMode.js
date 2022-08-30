const modeIcon = document.querySelectorAll(".sidebar ul.switcher li");

const toaster = document.getElementById("toaster");
let handleTime;

export function toggleMode() {
  modeIcon.forEach((ele) => {
    ele.addEventListener("click", () => {
      const isDark = [...document.documentElement.classList].includes("dark");

      if (isDark) {
        document.documentElement.classList.remove("dark");
        toaster.innerHTML = "Light Mode";
      } else {
        document.documentElement.classList.add("dark");
        toaster.innerHTML = "Dark Mode";
      }
      clearTimeout(handleTime);
      showToaster();
    });
  });
}
function showToaster() {
  toaster.classList.add("show-toaster");
  handleTime = setTimeout(() => {
    toaster.classList.remove("show-toaster");
  }, 5000);
}
