// HTML要素を取得
const textElement = document.getElementById('text');
const buttonElement = document.getElementById('btn');

// ボタンにクリックイベントリスナーを追加
buttonElement.addEventListener('click', function() {
    // ボタンがクリックされた時の動作
    textElement.textContent = 'ボタンをクリックしました';
});
