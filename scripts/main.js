const $navToggle = document.querySelector(".header__menu-toggle");
const $navCloser = document.querySelector(".menu-closer");
const $navMenu = document.querySelector(".header__nav--mobile");

// Mark current page link as active in both desktop and mobile navs
(() => {
  const current = window.location.pathname.split("/").pop() || "index.html";
  const allLinks = document.querySelectorAll(".header__nav-list a");
  allLinks.forEach((a) => {
    try {
      const href = a.getAttribute("href");
      if (!href) return;
      const target = href.split("/").pop();
      if (target === current) {
        a.classList.add("active");
        const li = a.closest("li");
        if (li) li.classList.add("activepage");
      }
    } catch {}
  });
})();

if ($navToggle && $navMenu && $navCloser) {
  $navToggle.addEventListener("click", () => {
    $navMenu.classList.toggle("nonactive");
    $navCloser.classList.toggle("nonactive");
    $navToggle.classList.toggle("nonactive");
    document.body.classList.toggle("darker");
    document.body.style.overflow = $navMenu.classList.contains("nonactive")
      ? "auto"
      : "hidden";
  });

  $navCloser.addEventListener("click", () => {
    $navMenu.classList.toggle("nonactive");
    $navCloser.classList.toggle("nonactive");
    $navToggle.classList.toggle("nonactive");
    document.body.classList.toggle("darker");
    document.body.style.overflow = $navMenu.classList.contains("nonactive")
      ? "auto"
      : "hidden";
  });
}
