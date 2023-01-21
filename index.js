
function removeArrayDuplicates(arr) {
    // Accepts an array from which the duplicates
    // will be removed

    if (!Array.isArray(arr)) {
        arr = [];
    }

    //let theSet = new Set(arr);
    let uniqueArr = []
    arr.filter((num) => {
        if (!uniqueArr.includes(num)) {
            uniqueArr.push(num)
        }
        return num
    })

    return uniqueArr;
}

module.exports = removeArrayDuplicates;

/* code de test */
let myNums = [1, 4, 4, 5, 2, 1, 8, 7, 7, 6, 6, 3, 2];
let uniqueNums = removeArrayDuplicates(myNums)
console.log(uniqueNums);
