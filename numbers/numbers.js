function processNumber() {
    const numberInput = document.getElementById("numberInput").value;
  
    if (numberInput === "") {
      alert("Please enter a number.");
      return;
    }
  
    const number = parseFloat(numberInput);
  
    // Perform operations
    const originalNumber = number;
    const rounded = Math.round(number);
    const squareRoot = Math.sqrt(number).toFixed(2);
    const powerOfTwo = Math.pow(number, 2);
    const isInteger = Number.isInteger(number) ? "Yes" : "No";
    const fixedTwoDecimals = number.toFixed(2);
    const toString = number.toString();
  
    // Display results
    document.getElementById("originalNumber").textContent = originalNumber;
    document.getElementById("rounded").textContent = rounded;
    document.getElementById("squareRoot").textContent = squareRoot;
    document.getElementById("powerOfTwo").textContent = powerOfTwo;
    document.getElementById("isInteger").textContent = isInteger;
    document.getElementById("fixedTwoDecimals").textContent = fixedTwoDecimals;
    document.getElementById("toString").textContent = toString;
  }
  