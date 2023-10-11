

function convertTemperature() {
    const temperatureInput = document.getElementById("temperatureInput").value;
    const unitSelect = document.getElementById("unitSelect").value;
    const convertedTemperatureSpan = document.getElementById("convertedTemperature");

    if (unitSelect === "celsius") {
        const celsius = parseFloat(temperatureInput);
        const fahrenheit = (celsius * 9/5) + 32;
        convertedTemperatureSpan.textContent = `${fahrenheit.toFixed(2)} °F`;
    } else if (unitSelect === "fahrenheit") {
        const fahrenheit = parseFloat(temperatureInput);
        const celsius = (fahrenheit - 32) * 5/9;
        convertedTemperatureSpan.textContent = `${celsius.toFixed(2)} °C`;
    }
}