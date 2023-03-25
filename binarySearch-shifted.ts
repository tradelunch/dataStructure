function binarySearch(arr: number[], target: number) {
    let s = -1;
    let e = arr.length;

    while (s + 1 < e) {
        const m = s + Math.floor((e - s) / 2);
        const left = arr[Math.max(0, s)];
        const mid = arr[m];
        const right = arr[Math.min(arr.length - 1, e)];

        console.log("pivot:: ", {
            s,
            e,
            left,
            mid,
            right,
        });

        if (right >= mid) {
            e = m;
        } else {
            s = m;
        }
    }
    console.log({
        s,
        e,
    });
    let pivot = e;
    if (arr[pivot] !== undefined) {
        if (arr[pivot] <= target && target <= arr[arr.length - 1]) {
            e = arr.length;
        } else {
            s = -1;
        }
    }

    while (s + 1 < e) {
        const m = s + Math.floor((e - s) / 2);

        if (arr[m] >= target) {
            e = m;
        } else {
            s = m;
        }
    }

    if (arr[e] !== target) return -1;
    return e;
}

let arr = [45, 61, 71, 72, 73, 0, 0, 1, 21, 33, 37];
const ans1 = binarySearch(arr, 33);
console.log(ans1, arr[ans1], "-----");

arr = [89, 0, 0, 0, 0, 1, 21, 33, 33, 33, 37, 45, 61, 71, 72, 73];
const ans2 = binarySearch(arr, 0);
console.log(ans2, arr[ans2], "-----");
