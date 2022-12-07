function gen_nums(n) {
    var nums = []
    for (var i=1; i<n; i++) {nums.push(i)}
    for (var i=n; i>=1; i--) {nums.push(i)}
    return nums
}


function pattern1(n) {
    var res = '';
    gen_nums(n).forEach((i) => {
        var line = '';
        for (var j=1; j<=i;j++) {
            line += j;
        }
        res += line+'\n';
    })

    return res
}

function pattern2(n) {
    var res = '*';
    gen_nums(n).forEach((i) => {
        let line = '' ;
        for (let j = 1; j<=i; j++) {line += j;}
        for (let j = i-1;j>=1; j--) {line += j;}
        res += '\n*'+line+'*'
    })
    return res+'\n*'
}


function pattern3(n) {
    var res = '\n'
    gen_nums(n).forEach((i) => {
        var line = '';
        for (let j=1; j<i; j++) {
            line += ' ';
        }
        line += i;
        for (let j = 1; j < (8-i*2)+2; j++) {
            line += ' ';
        }

        if (i != 5) {
            line += i;
        }
        res += line+'\n'

    })

    return res
}

console.log(pattern1(5))
console.log(pattern2(5))
console.log(pattern3(5))
