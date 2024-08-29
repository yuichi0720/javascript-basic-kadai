const nowDate = new Date();

const year = nowDate.getFullYear();

const month = nowDate.getMonth() + 1;

const date = nowDate.getDate();

const dateString = `${year}年${month}月${date}日`;

console.log(dateString);
