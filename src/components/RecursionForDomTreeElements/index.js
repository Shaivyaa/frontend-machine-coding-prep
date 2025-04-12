function printElements(node) {
  if (!node) return; // Base case

  console.log(node.tagName); // Print the tag name

  // Recursively call for each child node
  for (let child of node.children) {
    printElements(child);
  }
}

// Call function on the body (or any parent node)
printElements(document.body);

// output

// BODY
// DIV
// H1
// P
// SPAN
// BUTTON
