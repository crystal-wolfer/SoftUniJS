function solve(data){
  let dataArray = data.split("\\");
  // taking the last element of the array which will be the file
  let file = dataArray[dataArray.length - 1];
  
  let lastDot = file.lastIndexOf("."); // finding the index of the . which separates the name and the extension
  let fileName = file.substring(0, lastDot); // separating the name of the file
  let fileExt = file.substring(lastDot+1, file.length); // 

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${fileExt}`);
}
solve(
  'C:\\Internal\\training-internal\\Template.pptx' 
);
console.log(`-------------`);
solve(
  'C:\\Projects\\Data-Structures\\LinkedList.bak.cs'  
);
