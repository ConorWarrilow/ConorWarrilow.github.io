function copyCode(button) {
    const codeContainer = button.nextElementSibling;
    const code = codeContainer.innerText;

    navigator.clipboard.writeText(code).then(() => {
        button.textContent = "Copied!";
        setTimeout(() => {
            button.textContent = "Copy";
        }, 2000);
    });
}

window.copyCode = copyCode;