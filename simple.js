// let sum = 0;
// for(i=0; i<= 5; i++){
//     sum = sum + i;
// }
// console.log(sum);

function sum02(i){
    if(i == 1){
        return 1;
    }
    return i + sum02(i-1);
}
console.log(sum02(5));
/*
----------- how does it works -----------
5 + sum(4)
5 + 4 + sum(3)
5 + 4 + 3 + sum(2)
5 + 4 + 3 + 2 + sum(1)
5 + 4 + 3 + 2 + 1
*/


