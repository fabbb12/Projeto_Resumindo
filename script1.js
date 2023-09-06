const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const content = document.getElementById('content');
const textStyle = document.getElementById('text-style');
const textColor = document.getElementById('text-color');
const textSize = document.getElementById('text-size');
const backgroundColor = document.getElementById('background-color');
const book = document.getElementById('book');

settingsBtn.addEventListener('click', () => {
    settings.classList.toggle('show');
});

textStyle.addEventListener('change', () => {
    content.style.fontStyle = textStyle.value;
});

textColor.addEventListener('input', () => {
    content.style.color = textColor.value;
});

textSize.addEventListener('input', () => {
    content.style.fontSize = `${textSize.value}px`;
});

backgroundColor.addEventListener('input', () => {
    book.style.backgroundColor = backgroundColor.value;
});