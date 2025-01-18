
function clearresult() {
    document.getElementById('result').value = '';
}

function input(value) {
    document.getElementById('result').value += value;
}

function calculateresult() {
    try {
        const result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}


