function loadPortfolioPage() {
  const portfolioContainer = document.getElementById("portfolio-container");
  if (!portfolioContainer) return;

  const sectionsHTML = loadPortfolioSections();
  portfolioContainer.innerHTML = sectionsHTML;

  addPortfolioClickListeners();
}

function addPortfolioClickListeners() {
  const portoItems = document.querySelectorAll(".porto-clickable");

  portoItems.forEach(function (item) {
    item.addEventListener("click", function () {
      const portoId = this.getAttribute("data-porto-id");
      window.location.href = `porto-detail.html?id=${portoId}`;
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  loadPortfolioPage();
});
