// 모든 요소를 사용하여 조합 배열을 만들 때
function permute(arr) {
    let result = [];

    if (arr.length === 0) return [[]];

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        let remainingPerms = permute(remaining);
        
        for (let perm of remainingPerms) {
            result.push([current, ...perm]);
        }
    }

    return result;
}
