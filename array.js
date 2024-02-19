// QNo1:Find the average of the entire class by array?


// let marks=[85,97,89,58,45,69]

// let sum=0

// for(let val of marks){
//     sum+=val
// }
// let avg=sum/marks.length
// console.log(`the avearge of class = ${avg}`)



// QNo2:For a given array with prices of 5 item->[250,245,300,900,50] All the items have offer of 10 % off on them.change the array to store final price after appling offer.


// By for of loop method
// let items =[250,645,300,900,50]
// let i=0
// for(let val of items){
    
//     let offer=val/10
//     items[i]=items[i]-offer
//     console.log(`the value at index ${i} after offer = ${items[i]}`)
//     i++
// }

// BY for loop method 

// let items =[250,645,300,900,50]
// for(let i=0;i<items.length;i++){
//     offer=items[i]/10
//     items[i]-=offer
    
// }
// console.log(items);


// QNo3.create an array and add a number into an array from user?


// let arr = [2,4,8,98,56,48]

// let a = prompt("enter the number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)




// QN04 Enter the number into an array until you add the zero?

// let arr = [2,4,8,98,56,48]
// let a
// do{
//     a = prompt("enter the number")
// a = Number.parseInt(a)
// arr.push(a)
// }
// while(a!=0)
// console.log(arr)

// QN05 filter for numbers divisible by 10 from a given array ?

// let arr=[10,78,89,90,320]

// let n = arr.filter((x)=>{
//     return x%10==0
// })
// console.log(n)

// QNO6 create an array of square of given number?

// let arr=[78,90,45,34]

// let n= arr.map((x)=>{
//     return x*x
// })
// console.log(n)

// QNO6 use a reduce method to calculate the factorial of give  number from an array of first 10 natural numbers?

// let arr=[1,2,3,4,5,6]
 
// let n= arr.reduce((x1,x2)=>{
//     return x1*x2
// })
// console.log(n)



// QNO5. Write a js program to read and print elements of array.

// let arrPrint = [1, 2, 3, 4, 'ali'];
// for (let key in arrPrint) {
//     console.log(key, arrPrint[key]);
// }
// console.log(arrPrint)

// QNO6. Write a js program to print all negative elements in an array.

// let arrNeg = [1, 2, -5, 6, -8, -3];
// console.log(`Negative elements in array are:`);
// for (let i = 0; i < arrNeg.length; i++) {
//     if (arrNeg[i] < 0) {
//         console.log(arrNeg[i]);
//     }
// }



