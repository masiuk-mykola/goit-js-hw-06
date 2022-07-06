const liItemRefs = document.querySelectorAll('.item > h2');
console.log(`Number of categories:`, liItemRefs.length);
for (const item of liItemRefs) {
  console.log(`Category:`, item.textContent);
  console.log(`Elements:`, item.nextElementSibling.children.length);
}
