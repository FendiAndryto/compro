function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function loadPortfolioContent() {
  const portoId = getUrlParameter("id");
  const portfolio = portoData[portoId];

  if (portfolio) {
    document.getElementById("porto-title").textContent = portfolio.title;
    document.getElementById("porto-description").textContent =
      portfolio.description;
    document.getElementById("porto-content").innerHTML = portfolio.content;

    document.getElementById("porto-category").textContent = portfolio.category;
    document.getElementById("porto-date").textContent = portfolio.projectDate;
    document.getElementById("porto-duration").textContent = portfolio.duration;

    document.getElementById("porto-client").textContent = portfolio.clientName;
    document.getElementById("sidebar-porto-date").textContent =
      portfolio.projectDate;
    document.getElementById("sidebar-porto-duration").textContent =
      portfolio.duration;
    document.getElementById("sidebar-porto-category").textContent =
      portfolio.category;

    document.title = portfolio.title + " - UNIPIC Studio";

    loadCarouselImages(portfolio.images);
  } else {
    window.location.href = "porto.html";
  }
}

function loadCarouselImages(images) {
  const carouselInner = document.querySelector(".carousel-inner");
  const carouselIndicators = document.querySelector(".carousel-indicators");

  let carouselHTML = "";
  let indicatorsHTML = "";

  images.forEach((image, index) => {
    const activeClass = index === 0 ? "active" : "";

    carouselHTML += `
      <div class="carousel-item ${activeClass}">
        <img src="${image}" class="d-block w-100" alt="Portfolio Image ${
      index + 1
    }" onclick="openModal(this.src, 'portfolioCarousel')">
      </div>
    `;

    indicatorsHTML += `
      <li data-target="#portfolioCarousel" data-slide-to="${index}" class="${activeClass}"></li>
    `;
  });

  carouselInner.innerHTML = carouselHTML;
  carouselIndicators.innerHTML = indicatorsHTML;
}

document.addEventListener("DOMContentLoaded", loadPortfolioContent);
