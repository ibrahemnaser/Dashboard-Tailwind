const modeIcon = document.querySelectorAll(".sidebar ul.switcher li");

export function toggleMode() {
  modeIcon.forEach((ele) => {
    ele.addEventListener("click", () => {
      const isDark = [...document.documentElement.classList].includes("dark");

      if (isDark) {
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
      }
    });
  });
}
