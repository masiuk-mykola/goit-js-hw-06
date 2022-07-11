const categoryTitleRefs = document.querySelectorAll('.item > h2');
const numbersCategory = categoryTitleRefs.length;
console.log(`Number of categories:`, numbersCategory);
for (const item of categoryTitleRefs) {
  const categoryTitle = item.textContent;
  const numberElements = item.nextElementSibling.children.length;
  console.log(`Category:`, categoryTitle);
  console.log(`Elements:`, numberElements);
}
