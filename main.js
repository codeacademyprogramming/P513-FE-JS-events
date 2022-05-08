const tabHeaders = document.querySelectorAll(".tab-header");
const tabContents = Array.from(document.querySelectorAll(".tab-content"));

tabHeaders.forEach((tabHeader) => {
  tabHeader.addEventListener("click", function () {
    const tabContentId = tabHeader.getAttribute("data-tab-content-id");

    document.querySelector(".tab-content.current").classList.remove("current");
    document.querySelector(".tab-header.selected").classList.remove("selected");

    tabContents
      .find((tabContent) => tabContent.id === tabContentId)
      .classList.add("current");
    tabHeader.classList.add("selected");
  });
});
