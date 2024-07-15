const lyricsText = `
Vậy thì anh xin chết vì người anh thương
Có biết bao nhiêu điều còn đang vấn vương
Dành cho em, dành hết ân tình anh mang một đời
Đừng làm trái tim anh đau
Vậy thì anh xin chết vì người anh thương
Nên có biết bao nhiêu điều còn đang vấn vương
Dành cho em, dành hết ân tình anh mang một đời
Đừng làm trái tim anh đau
`;

const lyricsElement = document.getElementById('lyrics');
let index = 0;

function displayNextCharacter() {
    if (index < lyricsText.length) {
        lyricsElement.textContent += lyricsText[index];
        index++;
        setTimeout(displayNextCharacter, 100); // thời gian giữa mỗi ký tự (100ms)
    }
}

displayNextCharacter();
