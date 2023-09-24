function sumTable() {
  let nums = document.querySelectorAll('tr td:nth-child(2)');
  console.log(nums);
  const numsArray = Array.from(nums);
  let sum = 0;

  for (let i = 0; i < numsArray.length -1; i++) {
    sum += Number(numsArray[i].textContent);
  }

  document.querySelector('#sum').textContent = sum;

}