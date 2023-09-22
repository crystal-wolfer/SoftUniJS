function calorieObject(array){
  let obj ={};

  for (let i = 0; i < array.length; i += 2) {
    let key = array[i];
    let property = Number(array[i+1]);

    obj[key] = property;
  }
  console.log(obj);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);