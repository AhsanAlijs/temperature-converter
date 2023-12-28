// Get references to HTML elements
const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');

// Function to convert temperature
function convertTemperature() {
    const temp = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    // Error handling
    if (isNaN(temp)) {
        resultDiv.innerHTML = 'Please enter a valid number.';
        return;
    }

    let convertedTemp;
    if (unit === 'C') {
        // Convert Celsius to Fahrenheit
        convertedTemp = (temp * 9/5) + 32;
    } else {
        // Convert Fahrenheit to Celsius
        convertedTemp = (temp - 32) * 5/9;
    }

    resultDiv.innerHTML = `Converted Temperature: ${convertedTemp.toFixed(2)}°${unit === 'C' ? 'F' : 'C'}`;
}

// Add event listener for the Convert button
convertBtn.addEventListener('click', convertTemperature);