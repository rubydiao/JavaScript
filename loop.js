for(var i = 1 ; i <= 12 ; i++){
    console.log(i);
}
for(var i = 1 ; i <= 12 ; i++){
    console.log(i**2);
}
//for loop

var x = 1;
while(true){
    if(x == 6){
        console.log('stop at 6th');
        break;
    }
    console.log('hello:'+ x);
    x++;
}

//while loop
var temp = 10;
do{
    console.log(temp-1);
    temp--;
}
while(temp>1);