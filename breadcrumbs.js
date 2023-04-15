window.addEventListener("load", function() {
  // Find the breadcrumb container
  var breadcrumbContainer = document.querySelector(".breadcrumbs ul");

  // Get the breadcrumb items
  var homeBreadcrumb = breadcrumbContainer.querySelector("li:first-child");
  var firstBreadcrumb = breadcrumbContainer.querySelector("li:nth-child(2)");
  var secondBreadcrumb = breadcrumbContainer.querySelector("li:nth-child(3)");

  // Determine which page the user is currently on
  var currentPageUrl = window.location.href.split("?")[0]; // Remove query parameters from URL
  var currentPage = currentPageUrl.substring(currentPageUrl.lastIndexOf('/')+1);

  console.log(currentPage);
  // Show or hide the breadcrumb items based on the current page
  switch (currentPage) {
    case "index.html":
      homeBreadcrumb.style.display = "";
      firstBreadcrumb.style.display = "none";
      secondBreadcrumb.style.display = "none";
      break;
    case "search.html":
      homeBreadcrumb.style.display = "";
      firstBreadcrumb.style.display = "";
      secondBreadcrumb.style.display = "none";
      break;
    case "details.html":
      // Check if the user navigated directly from index.html to second.html
      var referrerPage = document.referrer.split("/").pop();
      if (referrerPage === "index.html") {
        homeBreadcrumb.style.display = "";
        firstBreadcrumb.style.display = "none";
        secondBreadcrumb.style.display = "";
      } else {
        homeBreadcrumb.style.display = "";
        firstBreadcrumb.style.display = "";
        secondBreadcrumb.style.display = "";
      }
      break;
    default:
      // If the user is on a page other than index.html, first.html, or second.html, hide all breadcrumbs
      homeBreadcrumb.style.display = "none";
      firstBreadcrumb.style.display = "none";
      secondBreadcrumb.style.display = "none";
      break;
  }
});
// Parse the URL search parameters and retrieve the value of "id"
var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get('id');

// Use the value of "id" as needed
console.log('The ID is:', id);

fetch("productData.json")
  .then(response => response.json())
  .then(data => {
    // Filter the products to get the one with the matching id
    const filteredProducts = data.products.filter(product => product.id === parseInt(id));
    document.getElementById("product-page-div").innerHTML = `${filteredProducts[0].name}`
    console.log('The product is:', filteredProducts[0]); // Display the matching product object
  });
