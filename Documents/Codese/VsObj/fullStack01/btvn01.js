var testdb = [{
    id:01,
    name:"Nam",
    score:99
},
{
    id:02, 
    name:"Thu",
    score:100
},
{
    id:03,
    name:"Viet",
    score:101
}]

const filter = testdb.filter(el => el.score > 90);
console.log("filter")
console.log(filter)

const find = testdb.filter(el => el.score === 100);
console.log("find")
console.log(find)

var arr = [1,2,3,4,5,6,7,8,9,10]
const reduce = (el, el1) => el + el1;
console.log("sum: ")
console.log(arr.reduce(reduce));

var arr1 = [1,3,2,4,6,8,7,9]
arr1.sort();
console.log(arr1)

var arr2 = [2,1,4,6,5,9,8,7,10]
const sort = arr2.sort((a,b) => a-b);
console.log(sort)




 



