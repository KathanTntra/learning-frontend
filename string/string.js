function applyMethods() {
    const input = document.getElementById("inputString").value;
    if (!input) {
      alert("Please enter a string.");
      return;
    }
  
    // String operations
    const original = input;
    const length = input.length;
    const uppercase = input.toUpperCase();
    const lowercase = input.toLowerCase();
    const reversed = input.split("").reverse().join("");
    const substring = input.substring(0, 5);
  
    // Display results
    document.getElementById("originalString").textContent = original;
    document.getElementById("length").textContent = length;
    document.getElementById("uppercase").textContent = uppercase;
    document.getElementById("lowercase").textContent = lowercase;
    document.getElementById("reversed").textContent = reversed;
    document.getElementById("substring").textContent = substring;
  }
  