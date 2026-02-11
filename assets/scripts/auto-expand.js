// Automatically expand the first <details> element on the page
const detailsList = document.querySelectorAll("details");
if (detailsList.length > 0) {
    detailsList[0].open = true; // Open the first <details> element
}