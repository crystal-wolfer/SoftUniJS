function pieceOfPie(arrayOfPies, startPie, endPie) {
  let startIndex = arrayOfPies.indexOf(startPie);
  let endIndex = arrayOfPies.indexOf(endPie);
  let result = arrayOfPies.slice(startIndex, endIndex+1);

  return result;
}
pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
);