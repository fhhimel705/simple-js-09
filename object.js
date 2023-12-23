let person = {
    name : 'fahim',
    age : 28,
    isSingle : false,
    address : 'shagufta',
    info : {
        uni : 'buet',
        passion : 'web-develop',
        job : 'soft-ware dev'},

    companies : ['olx', 'w-3 school' ],
    bio : function(){
        console.log('myself fahim');
    }
}
console.log(person.isSingle);
console.log(person.info.uni);
console.log(person.companies);
// console.log(person.bio);
person.bio();
