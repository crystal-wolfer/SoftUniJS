function generateReport() {
    // creating an obj with keys storing the selectors
    const html = {
    checkboxes: document.querySelectorAll("input[type='checkbox']"),
    rows: document.getElementsByTagName("tr"),
    output: document.getElementById("output"),
  };

  // The code is iterating through the checkboxes in the HTML and filtering out all of those that are checked.  It then maps over each item, extracting their name and value from the array.  The code will filter the selected items from the checkboxes array and map them to an object.
  const selected = Array.from(html.checkboxes)
    .map((x, i) => [x, i])
    .filter((x) => x[0].checked)
    .map((x) => [x[0].name, x[1]]);
  

  const rowData = Array.from(html.rows)
    .slice(1)
    .map((x) => Array.from(x.children).map((y) => y.innerHTML));

  console.log(rowData);
  console.log(selected);

  html.output.value = JSON.stringify(
    rowData.map((x) =>
      selected.reduce((a, v) => {
        const [sColName, sColIndex] = v;
        a[sColName] = x[sColIndex];
        return a;
      }, {})
    )
  );
}