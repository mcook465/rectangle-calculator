// JavaScript logic for calculating rectangle area
document.getElementById("areaForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);

    if (length > 0 && width > 0) {
        const area = length * width;
        document.getElementById("result").textContent = `The area of the rectangle is ${area.toFixed(2)} square units.`;
    } else {
        document.getElementById("result").textContent = "Please enter positive values for length and width.";
    }
});
