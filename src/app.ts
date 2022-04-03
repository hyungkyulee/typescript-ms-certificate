// /* EXERCISE 4
//    TODO: Declare the array as the type to match the type of the items in the array. */

//    let randomNumbers: Array<number> = [];
//    let nextNumber;
//    for (let i = 0; i < 10; i++) {
//        nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
//        randomNumbers.push(nextNumber);
//    }
   
//    console.log(randomNumbers);

// function addClick(items: any) { 
//     for (var i = 0; i < items.length; i++) { 
//         items[i].onClick = function () { 
//             return i; 
//         }; 
//     } 
//     return items; 
// } 

// function addClick(items: any[]) {
//     for (var i = 0; i < items.length; i++) {
//         items[i].onClick = (function (i) { 
//             return function () {
//                 return i; 
//             };
//         }(i));
//     }
//     return items;
// }

function addClick(items: any[]) {
    for (let i = 0; i < items.length; i++) {
        items[i].onClick = function () { 
            return i; 
        }; 
    }
    return items; 
}

const example = [{}, {}]
const clickSet = addClick(example)
console.log(`result: ${clickSet[0].onClick()}, ${clickSet[1].onClick()}`)