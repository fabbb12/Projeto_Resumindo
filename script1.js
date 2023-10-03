const settingsBtn = document.getElementById('settings-btn');
const settingsMenu = document.getElementById('settings-menu');
const content = document.getElementById('content');
const textStyle = document.getElementById('text-style');
const textColor = document.getElementById('text-color');
const textSize = document.getElementById('text-size');
const backgroundColor = document.getElementById('background-color');
const book = document.getElementById('book');
const saveBtn = document.getElementById('save-btn');

// Função para salvar as configurações no armazenamento local
function saveSettings() {
    localStorage.setItem('textStyle', textStyle.value);
    localStorage.setItem('textColor', textColor.value);
    localStorage.setItem('textSize', textSize.value);
    localStorage.setItem('backgroundColor', backgroundColor.value);
}

// Função para carregar as configurações do armazenamento local
function loadSettings() {
    const savedTextStyle = localStorage.getItem('textStyle');
    const savedTextColor = localStorage.getItem('textColor');
    const savedTextSize = localStorage.getItem('textSize');
    const savedBackgroundColor = localStorage.getItem('backgroundColor');

    if (savedTextStyle) {
        textStyle.value = savedTextStyle;
        updateTextStyle(savedTextStyle);
    }

    if (savedTextColor) {
        textColor.value = savedTextColor;
        content.style.color = savedTextColor;
    }

    if (savedTextSize) {
        textSize.value = savedTextSize;
        content.style.fontSize = `${savedTextSize}px`;
    }

    if (savedBackgroundColor) {
        backgroundColor.value = savedBackgroundColor;
        book.style.backgroundColor = savedBackgroundColor;
    }
}

// Atualizar o estilo do texto com base na seleção
function updateTextStyle(selectedStyle) {
    if (selectedStyle === 'Calibri') {
        content.style.fontFamily = 'Calibri';
        content.style.fontWeight = 'normal';
        content.style.fontStyle = 'normal';
    } else if (selectedStyle === 'Arial') {
        content.style.fontFamily = 'Arial';
        content.style.fontWeight = 'normal';
        content.style.fontStyle = 'normal';
    } else if (selectedStyle === 'Arial Black') {
        content.style.fontFamily = 'Arial Black';
        content.style.fontWeight = 'normal';
        content.style.fontStyle = 'normal';
    } else if (selectedStyle === 'Times New Roman') {
        content.style.fontFamily = 'Times New Roman';
        content.style.fontWeight = 'normal';
        content.style.fontStyle = 'normal';
    }
}

// Carregar as configurações ao carregar a página
loadSettings();

settingsBtn.addEventListener('click', () => {
    if (settingsMenu.style.display === 'block') {
    } else {
        settingsMenu.style.display = 'block';
    }
});

textStyle.addEventListener('change', () => {
    const selectedStyle = textStyle.value;
    updateTextStyle(selectedStyle);
    saveSettings(); // Salvar configuração ao alterar o estilo do texto
});

textColor.addEventListener('input', () => {
    content.style.color = textColor.value;
    saveSettings(); // Salvar configuração ao alterar a cor de texto
});

textSize.addEventListener('input', () => {
    content.style.fontSize = `${textSize.value}px`;
    saveSettings(); // Salvar configuração ao alterar o tamanho do texto
});

backgroundColor.addEventListener('input', () => {
    book.style.backgroundColor = backgroundColor.value;
    saveSettings(); // Salvar configuração ao alterar a cor de fundo
});
saveBtn.addEventListener('click', () => {
    saveSettings(); // Chame a função de salvar configurações ao clicar no botão
    settingsMenu.style.display = 'none';
});
