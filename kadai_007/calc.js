// 変数numに０〜７５までのランダムな整数を代入
let num = Math.floor(Math.random() * 75) + 1;

//確認用
console.log(num);

// 変数numが3倍数かつ、5の倍数
if (num % 3 === 0 && num % 5 === 0) {
    console.log("3と5の倍数です");
}
// 変数numが3の倍数
else if (num % 3 === 0) {
    console.log("3の倍数です");
}
// 変数numが5の倍数
else if (num % 5 === 0) {
    console.log("5の倍数です");
}
// それ以外
else {
    console.log(num);
}
