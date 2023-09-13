function concatenate(input){
    let fname=input[0];
    let lname=input[1];
    let age=Number(input[2]);
    let city=input[3];

    console.log('You are ' + fname, lname+', a ' + age + '-years old person from' ,city + '.');
    
}
concatenate(['Tsani','Yordanova',20,'Provadia'])