

function sum(){
    console.log(arguments);
    let sum = 0;
    for(let i in arguments){
        sum += arguments[i];
    }
    document.write(sum);
}
sum(10,2,8,4);