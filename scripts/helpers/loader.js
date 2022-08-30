const loader = document.querySelector(".loader");
const main = document.querySelector("main");

export function handleLoader() {
  setTimeout(() => {
    loader.classList.add("hidden");
    main.classList.remove("hidden");
    main.classList.add("flex");
  }, 5000);
}
