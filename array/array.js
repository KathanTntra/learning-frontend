function processArray() {
    const arrayInput = document.getElementById("arrayInput").value.trim();
  
    if (!arrayInput) {
      alert("Please enter array elements.");
      return;
    }
  
    // Parse the input into an array
    const array = arrayInput.split(",").map((item) => item.trim());
  
    // Perform operations
    const originalArray = array;
    const arrayLength = array.length;
    const firstElement = array[0];
    const lastElement = array[array.length - 1];
    const reversedArray = [...array].reverse();
    const sortedArray = [...array].sort();
    const doubledArray = array.map((item) => isNaN(item) ? item : Number(item) * 2);
  
    // Display results
    document.getElementById("originalArray").textContent = JSON.stringify(originalArray);
    document.getElementById("arrayLength").textContent = arrayLength;
    document.getElementById("firstElement").textContent = firstElement;
    document.getElementById("lastElement").textContent = lastElement;
    document.getElementById("reversedArray").textContent = JSON.stringify(reversedArray);
    document.getElementById("sortedArray").textContent = JSON.stringify(sortedArray);
    document.getElementById("doubledArray").textContent = JSON.stringify(doubledArray);
  }
  