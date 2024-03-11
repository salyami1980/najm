function calculateNames() {
    const personName = document.getElementById('personName').value;
    const motherName = document.getElementById('motherName').value;

    const personValue = calculateValue(personName);
    const motherValue = calculateValue(motherName);

    const totalValue = personValue + motherValue;

    // قسمة ناتج الحساب على 28
    const divisionResult = Math.floor(totalValue / 28);

    // ضرب الناتج في 28
    const multiplicationResult = divisionResult * 28;

    // طرح المجموع من ناتج الحساب
    const finalResult = totalValue - multiplicationResult;

    // عرض النتائج
    document.getElementById('result').innerText = `ناتج الحساب ${totalValue}`;
const spiritualResult = finalResult === 0 ? 28 : finalResult;
document.getElementById('finalResult').innerText = `المنزله الروحانيه ${spiritualResult}`;
}

function calculateValue(name) {
    const letterValues = {
        'أ': 1, 'ا': 1, 'ب': 2, 'ج': 3, 'د': 4, 'ه': 5, 'و': 6, 'ز': 7, 'ح': 8,
        'ط': 9, 'ي': 10, 'ك': 20, 'ل': 30, 'م': 40, 'ن': 50, 'س': 60, 'ع': 70,
        'ف': 80, 'ص': 90, 'ق': 100, 'ر': 200, 'ش': 300, 'ت': 400, 'ث': 500,
        'خ': 600, 'ذ': 700, 'ض': 800, 'ظ': 900, 'غ': 1000, 'ء': 0, 'ى': 1,
        'ئ': 10, 'ؤ': 6, 'إ': 1
    };

    let value = 0;
    for (let i = 0; i < name.length; i++) {
        const char = name.charAt(i);
        if (letterValues[char]) {
            value += letterValues[char];
        }
    }

    return value;
}

function resetFields() {
    document.getElementById('personName').value = '';
    document.getElementById('motherName').value = '';
    document.getElementById('result').innerText = '';
    document.getElementById('finalResult').innerText = '';
}