
function removeArrayDuplicates(arr) {
    // Accepts an array from which the duplicates
    // will be removed
    let uniqueArr = [];

    if (!Array.isArray(arr)) {
        arr = [];
    }

    let theSet = new Set(arr);

    arr.filter((num) => {
        if (!uniqueArr.includes(num)) {
            uniqueArr.push(num)
        }
    })

    return uniqueArr;
}

module.exports = removeArrayDuplicates;

/* code de test */
// let myNums = [1, 2, 3, 1, 4, 1, 2, 5, 3, 4];
// let uniqueNums = removeArrayDuplicates(myNums)
// console.log(uniqueNums);
