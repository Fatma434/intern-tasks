const arr =[1 ,2,3,4 ,5]

function countNumber(arr){
    let sum =0;
for(let i=0 ; i<arr.length; i++ ){
    sum+=arr[i];
}
console.log("sum is : "+ sum)
}


countNumber(arr);