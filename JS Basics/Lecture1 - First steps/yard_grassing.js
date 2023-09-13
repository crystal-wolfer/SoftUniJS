function yard(input){
    let area=Number(input[0]);
    let discount= area*7.61*0.18;
    let fprice=(area*7.61)-discount;
    console.log('The final price is: '+ fprice, 'lv.');
    console.log('The discount is: '+ discount,  'lv.');
}
yard(['150'])