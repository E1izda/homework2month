function MaxNumber(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}
var a = [1, 2, 3, 4];
var b = [10, 5, 7];
var c = [100, 200, 50];

console.log(MaxNumber(a));
console.log(MaxNumber(b));
console.log(MaxNumber(c));