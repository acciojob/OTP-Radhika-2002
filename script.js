const codes = document.querySelectorAll('.code');

codes.forEach((code, idx) => {
    code.addEventListener('input', (e) => {
        const input = e.target;
        const value = input.value;
        if (value) {
            if (idx < codes.length - 1) {
                codes[idx + 1].focus();
            }
        }
    });

    code.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            if (code.value === '') {
                if (idx > 0) {
                    codes[idx - 1].focus();
                }
            }
        }
    });
});
