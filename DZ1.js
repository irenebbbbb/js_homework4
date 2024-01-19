function isNotANumber(value) {
    return typeof value !== 'number' || value !== value;
}

let myValue = 'test';

if (!isNotANumber(+myValue)) {
    console.log('ДЗ виконано успішно, але значення є числом');
} else {
    console.log('ДЗ також виконано успішно - значення не є числом');
}