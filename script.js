document.getElementById('input').addEventListener('input', function() {
    if (this.value.trim() === '') {
        this.style.opacity = '0.5';
    } else {
        this.style.opacity = '1';
    }
});

document.getElementById('input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const input = this.value.trim();
        const operators = ['+', '-', '/', 'x'];
        let result = '';

        operators.forEach(op => {
            const parts = input.split(op);
            if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
                const num1 = parseFloat(parts[0]);
                const num2 = parseFloat(parts[1]);
                switch (op) {
                    case '+':
                        result = num1 + num2;
                        break;
                    case '-':
                        result = num1 - num2;
                        break;
                    case '/':
                        result = num1 / num2;
                        break;
                    case 'x':
                        result = num1 * num2;
                        break;
                }
            }
        });

        if (result !== '') {
            const equationElem = document.createElement('p');
            equationElem.textContent = input;
            equationElem.style.opacity = '0.5';
            document.getElementById('results').appendChild(equationElem);

            this.value = result;
            this.style.opacity = '1';
        }
    }
});
