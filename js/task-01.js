const catMain = document.querySelectorAll(".item");
console.log(`Number of categories: ${catMain.length}`);
catMain.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});