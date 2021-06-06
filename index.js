
const sum = function(arr) {
    if (arr.length < 1) return 0;
    return arr.pop() + sum(arr);
}
document.write(sum([10,2,8,4]))