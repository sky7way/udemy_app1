const lines = 5;
let result = '';

for (let i = 1; i <= lines + 1; i++) {
// добавляем пробелы перед звездочками
for (let k = 0; k < lines - i; k++) {
result += ' ';
}
// добавляем звездочки
for (let j = 0; j < 2 * i - 1; j++) {
result += '*';
}
// добавляем перенос строки
result += '\n';
}

console.log(result);